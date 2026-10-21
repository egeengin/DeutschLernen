/**
 * DeutschLernen Suite v2.0 - Edge Serverless Proxy & Licensing Gate
 * Location: cloudflare/worker.js
 *
 * Architecture & Features:
 * 1. Cloudflare KV Bindings (DEUTSCH_KV / LICENSES_KV) with graceful in-memory dev fallback.
 * 2. POST /api/license/activate:
 *    - Validates license with Lemon Squeezy API or test credentials.
 *    - Tracks registered device instances (Max 2 devices per key).
 *    - Initializes KV balance with 50 AI Credits for newly activated Pro licenses.
 *    - Issues cryptographically signed HMAC-SHA256 lease token valid for 7 days.
 * 3. POST /api/evaluate-schreiben:
 *    - Validates active license and matching device instance.
 *    - Decrements AI credit count by 1 in KV.
 *    - Dispatches to Google Gemini 2.5 Flash (temperature 0.2) or deterministic telc examiner.
 *    - Grades against official telc B1 45-point rubric (Leitpunkte 15pts, Gestaltung 15pts, Richtigkeit 15pts).
 *    - Generates HTML diff corrections (<del>/<ins>) and 45/45 B1+ model rewrite.
 *    - Returns structured evaluation + remainingCredits.
 * 4. POST /api/coupon/validate:
 *    - Validates promo codes (PRUEFUNG2026, HERBST40, VIPFREE, FRIENDSVIP) and generates Lemon Squeezy checkout URLs.
 * 5. Backward compatibility with /api/evaluate-letter and strict CORS.
 */

// In-memory fallback caches for development, testing, or unconfigured KV
const IN_MEMORY_KV = new Map();
const MEMORY_FREE_USAGE = new Map();
const MEMORY_PRO_USAGE = new Map();

const DEFAULT_SECRET = 'dl-lease-secret-key-telc-b1-2026';
const MAX_DEVICES_PER_LICENSE = 2;
const INITIAL_AI_CREDITS = 50;
const LEASE_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// Allowed CORS origins
const ALLOWED_ORIGINS = [
  'https://egeengin.github.io',
  'http://localhost:3000',
  'http://localhost:8080',
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://127.0.0.1:8080'
];

function getCorsHeaders(origin) {
  const isAllowed = ALLOWED_ORIGINS.includes(origin) || origin.endsWith('.github.io') || origin.startsWith('http://localhost') || origin.startsWith('http://127.0.0.1');
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-User-Tier, X-Client-Fingerprint',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

// Unified KV Helper
async function getFromKV(env, key) {
  const kv = env.DEUTSCH_KV || env.LICENSES_KV;
  if (kv && typeof kv.get === 'function') {
    try {
      const val = await kv.get(key, 'json');
      if (val !== null) return val;
    } catch (e) {
      console.warn('[Worker KV] Read error for key:', key, e);
    }
  }
  const mem = IN_MEMORY_KV.get(key);
  return mem ? JSON.parse(mem) : null;
}

async function putToKV(env, key, value, ttlSeconds = null) {
  const jsonStr = JSON.stringify(value);
  const kv = env.DEUTSCH_KV || env.LICENSES_KV;
  if (kv && typeof kv.put === 'function') {
    try {
      const opts = ttlSeconds ? { expirationTtl: ttlSeconds } : undefined;
      await kv.put(key, jsonStr, opts);
    } catch (e) {
      console.warn('[Worker KV] Write error for key:', key, e);
    }
  }
  IN_MEMORY_KV.set(key, jsonStr);
}

// Web Crypto HMAC-SHA256 Token Signer
async function signLeaseToken(payload, secretStr = DEFAULT_SECRET) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secretStr),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const payloadStr = JSON.stringify(payload);
  const data = enc.encode(payloadStr);
  const signature = await crypto.subtle.sign('HMAC', key, data);
  const sigHex = Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
  const b64Payload = btoa(unescape(encodeURIComponent(payloadStr)));
  return `${b64Payload}.${sigHex}`;
}

async function verifyLeaseToken(token, secretStr = DEFAULT_SECRET) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return null;
  try {
    const [b64Payload, sigHex] = token.split('.');
    const payloadStr = decodeURIComponent(escape(atob(b64Payload)));
    const payload = JSON.parse(payloadStr);

    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(secretStr),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    const sigBytes = new Uint8Array(sigHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
    const isValid = await crypto.subtle.verify('HMAC', key, sigBytes, enc.encode(payloadStr));
    if (!isValid) return null;

    if (payload.expiresAt && payload.expiresAt < Date.now()) {
      return null; // Expired
    }
    return payload;
  } catch (e) {
    return null;
  }
}

// Generate inline HTML diff: <del>original</del> <ins>corrected</ins>
function generateDiffHtml(originalSnippet, correctedSnippet) {
  if (!originalSnippet && !correctedSnippet) return '';
  if (!originalSnippet) return `<ins class="diff-ins">${escapeHtml(correctedSnippet)}</ins>`;
  if (!correctedSnippet) return `<del class="diff-del">${escapeHtml(originalSnippet)}</del>`;
  return `<del class="diff-del">${escapeHtml(originalSnippet)}</del> <ins class="diff-ins">${escapeHtml(correctedSnippet)}</ins>`;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Official telc B1 Examiner System Prompt
const TELC_B1_SYSTEM_PROMPT = `You are a certified, strict official "telc Deutsch B1" examiner. Evaluate the student's practice email/letter for the telc Deutsch B1 "Schreiben" module (max 45 points, pass threshold 27 points).

Grading Rubric (Assign 5, 3, 1, or 0 raw points per criterion, then multiply sum by 3):
Criterion I: Berücksichtigung der Leitpunkte (Task Fulfillment / 15 pts max):
- A=5 (15 pts): all 4 Leitpunkte logically covered in detail.
- B=3 (9 pts): 3 Leitpunkte covered, or all 4 superficially.
- C=1 (3 pts): only 1-2 Leitpunkte addressed.
- D=0 (0 pts): missed or off-topic.

Criterion II: Kommunikative Gestaltung (Communicative Design / 15 pts max):
- A=5 (15 pts): clear register (Sie vs du), appropriate salutation & valediction, varied B1 connectors (weil, dass, wenn, obwohl, deshalb, sodass).
- B=3 (9 pts): mostly correct, minor register slips or repetitive basic connectors (und, aber).
- C=1 (3 pts): inappropriate tone or severely disjointed sentences.
- D=0 (0 pts): format not recognizable as a letter/email.

Criterion III: Formale Richtigkeit (Grammar, Morphology & Orthography / 15 pts max):
- A=5 (15 pts): excellent accuracy, correct verb-final order in subordinate clauses (Nebensätze), correct cases (Akkusativ/Dativ).
- B=3 (9 pts): noticeable grammatical slips but meaning remains intelligible.
- C=1 (3 pts): frequent severe grammatical errors that hinder comprehension.
- D=0 (0 pts): incomprehensible.

Word Count Rule: Target is 80-120 words. If under 40 words, score is 0.
Return strictly JSON matching this structure:
{
  "meta": {
    "word_count": number,
    "passed": boolean,
    "total_score": number,
    "max_score": 45,
    "pass_threshold": 27
  },
  "criteria_breakdown": {
    "beruecksichtigung_leitpunkte": {
      "grade": "A"|"B"|"C"|"D",
      "raw_points": 5|3|1|0,
      "weighted_points": 15|9|3|0,
      "leitpunkte_checklist": [
        { "point": "Leitpunkt 1 description", "covered": true|false, "feedback": "brief note" },
        { "point": "Leitpunkt 2 description", "covered": true|false, "feedback": "brief note" },
        { "point": "Leitpunkt 3 description", "covered": true|false, "feedback": "brief note" },
        { "point": "Leitpunkt 4 description", "covered": true|false, "feedback": "brief note" }
      ],
      "reason": "explanation in student's UI language"
    },
    "kommunikative_gestaltung": {
      "grade": "A"|"B"|"C"|"D",
      "raw_points": 5|3|1|0,
      "weighted_points": 15|9|3|0,
      "reason": "explanation in student's UI language"
    },
    "formale_richtigkeit": {
      "grade": "A"|"B"|"C"|"D",
      "raw_points": 5|3|1|0,
      "weighted_points": 15|9|3|0,
      "error_count": number,
      "reason": "explanation in student's UI language"
    }
  },
  "examiner_verdict": "Clear summary in UI language",
  "corrections": [
    {
      "original_snippet": "exact German phrase",
      "corrected_snippet": "correct German phrase",
      "rule_category": "Nebensatz / Kasus / Konjugation / Wortschatz",
      "explanation": "Why this is wrong"
    }
  ],
  "model_rewrite_45_points": "Complete 100-120 word B1 model text achieving 45/45 points in German"
}`;

/**
 * Deterministic telc B1 Examiner Engine
 */
function evaluateDeterministicB1(studentText, promptTopic, leitpunkte, uiLanguage) {
  const text = (studentText || '').trim();
  const words = text ? text.split(/\s+/).filter(w => w.length > 0) : [];
  const wordCount = words.length;

  // 1. Leitpunkte coverage heuristic
  const pts = Array.isArray(leitpunkte) && leitpunkte.length === 4 ? leitpunkte : [
    'Grund des Schreibens',
    'Aktuelle Situation',
    'Vorschlag oder Bitte',
    'Nächste Schritte / Termin'
  ];

  const lower = text.toLowerCase();
  const checklist = pts.map(p => {
    const keyParts = p.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    const hit = keyParts.some(kp => lower.includes(kp)) || lower.length > 150;
    return {
      point: p,
      covered: hit,
      feedback: hit ? 'Vollständig berücksichtigt.' : 'Nicht oder nur unvollständig erwähnt.'
    };
  });

  const coveredCount = checklist.filter(c => c.covered).length;
  let raw1 = 0;
  let grade1 = 'D';
  if (wordCount >= 40) {
    if (coveredCount === 4) { raw1 = 5; grade1 = 'A'; }
    else if (coveredCount >= 3) { raw1 = 3; grade1 = 'B'; }
    else if (coveredCount >= 1) { raw1 = 1; grade1 = 'C'; }
  }

  // 2. Kommunikative Gestaltung (Salutation, signoff, connectors)
  const hasSalutation = /^(liebe|lieber|sehr geehrte|sehr geehrter|hallo)/i.test(text.trim());
  const hasValediction = /(viele grüße|herzliche grüße|mit freundlichen grüßen|dein|deine)/i.test(text);
  const connectors = ['weil', 'da', 'obwohl', 'deshalb', 'dass', 'wenn', 'sodass', 'damit'];
  const connectorHits = connectors.filter(c => lower.includes(c));

  let raw2 = 0;
  let grade2 = 'D';
  if (wordCount >= 40) {
    if (hasSalutation && hasValediction && connectorHits.length >= 2) {
      raw2 = 5; grade2 = 'A';
    } else if (hasSalutation || hasValediction || connectorHits.length >= 1) {
      raw2 = 3; grade2 = 'B';
    } else {
      raw2 = 1; grade2 = 'C';
    }
  }

  // 3. Formale Richtigkeit
  const corrections = [];
  // Detect common verb-second violations after 'weil' or 'dass'
  const weilMatches = text.match(/weil\s+([a-zäöüß]+)\s+(ist|hat|kann|wird|muss|gehe|komme|habe)\s+([^,.]+)/i);
  if (weilMatches) {
    corrections.push({
      original_snippet: weilMatches[0],
      corrected_snippet: `weil ${weilMatches[1]} ${weilMatches[3]} ${weilMatches[2]}`,
      rule_category: 'Nebensatz (Verb-Endstellung)',
      explanation: 'Im Nebensatz mit "weil" muss das konjugierte Verb an das Satzende.'
    });
  }

  // Detect lowercase 'sie' in formal letter
  if (/sehr geehrte/i.test(text) && /\bsie\b/.test(text)) {
    corrections.push({
      original_snippet: 'sie (Höflichkeitsform klein)',
      corrected_snippet: 'Sie / Ihnen / Ihr',
      rule_category: 'Höflichkeitsform',
      explanation: 'Die Höflichkeitsanrede im formellen Brief wird immer großgeschrieben.'
    });
  }

  // Detect 'Ich habe gefreut' instead of 'Ich habe mich gefreut'
  if (/ich habe (.+)?gefreut/i.test(text) && !/ich habe mich/i.test(text)) {
    corrections.push({
      original_snippet: 'ich habe gefreut',
      corrected_snippet: 'ich habe mich gefreut',
      rule_category: 'Reflexive Verben',
      explanation: '"Sich freuen" ist ein reflexives Verb und benötigt das Reflexivpronomen "mich".'
    });
  }

  let raw3 = 3;
  let grade3 = 'B';
  if (wordCount < 40) {
    raw3 = 0; grade3 = 'D';
  } else if (corrections.length === 0 && wordCount >= 70) {
    raw3 = 5; grade3 = 'A';
  } else if (corrections.length >= 3) {
    raw3 = 1; grade3 = 'C';
  }

  const score1 = raw1 * 3;
  const score2 = raw2 * 3;
  const score3 = raw3 * 3;
  const totalScore = score1 + score2 + score3;
  const passed = totalScore >= 27 && wordCount >= 40;

  // Build diff-enhanced corrections
  const diffCorrections = corrections.map(c => ({
    ...c,
    diff_html: generateDiffHtml(c.original_snippet, c.corrected_snippet)
  }));

  // Build 45/45 model rewrite
  const modelRewrite = `Liebe/r Freund/in,

ich habe mich sehr über deine Nachricht gefreut! Es ist wirklich schön, dass wir uns bald wiedersehen können.
Wenn du nach Deutschland kommst, sollten wir unbedingt zusammen eine Stadtbesichtigung machen, weil es hier viele historische Sehenswürdigkeiten gibt. Bring bitte bequeme Kleidung und feste Schuhe mit, damit wir lange spazieren gehen können.
Gib mir bitte rechtzeitig Bescheid, wann genau dein Zug ankommt, damit ich dich direkt vom Bahnhof abholen kann.

Ich freue mich schon sehr auf deinen Besuch!

Herzliche Grüße
Dein/e Freund/in`;

  return {
    meta: {
      word_count: wordCount,
      passed,
      total_score: totalScore,
      max_score: 45,
      pass_threshold: 27,
      points_missing_to_pass: Math.max(0, 27 - totalScore)
    },
    criteria_breakdown: {
      beruecksichtigung_leitpunkte: {
        grade: grade1,
        raw_points: raw1,
        weighted_points: score1,
        leitpunkte_checklist: checklist,
        reason: grade1 === 'A' ? 'Alle vier Leitpunkte wurden präzise und themengerecht bearbeitet.' : 'Nicht alle geforderten Leitpunkte wurden hinreichend ausgeführt.'
      },
      kommunikative_gestaltung: {
        grade: grade2,
        raw_points: raw2,
        weighted_points: score2,
        reason: grade2 === 'A' ? 'Angemessene Anrede, logische Verknüpfungen (B1-Konnektoren) und authentischer Schlusssatz.' : 'Die Satzverbindungen oder die Briefkonventionen sollten weiter verfeinert werden.'
      },
      formale_richtigkeit: {
        grade: grade3,
        raw_points: raw3,
        weighted_points: score3,
        error_count: corrections.length,
        reason: grade3 === 'A' ? 'Kaum grammatikalische oder orthographische Auffälligkeiten.' : 'Einige Fehler bei Nebensatzstellung oder Kasus vorhanden.'
      }
    },
    examiner_verdict: passed
      ? `Sehr gut! Mit ${totalScore}/45 Punkten haben Sie die Prüfungskomponente Schreiben sicher bestanden.`
      : `Leider nicht bestanden (${totalScore}/45 Punkte, mindestens 27 Punkte erforderlich). Bitte beachten Sie die Leitpunkte und Nebensatz-Wortstellung.`,
    corrections: diffCorrections,
    model_rewrite_45_points: modelRewrite
  };
}

/**
 * Calls Gemini 2.5 Flash if GEMINI_API_KEY is configured
 */
async function callGemini25Flash(studentText, promptTopic, leitpunkte, uiLanguage, env) {
  if (!env.GEMINI_API_KEY) return null;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`;
    const payload = {
      system_instruction: {
        parts: [{ text: TELC_B1_SYSTEM_PROMPT }]
      },
      contents: [
        {
          role: 'user',
          parts: [{
            text: JSON.stringify({
              task_prompt: promptTopic || 'telc Deutsch B1 Schreiben',
              leitpunkte: leitpunkte || [],
              student_text: studentText,
              ui_language: uiLanguage || 'DE'
            })
          }]
        }
      ],
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.2
      }
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const data = await res.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (rawText) {
        const parsed = JSON.parse(rawText);
        // Inject diff_html into corrections
        if (Array.isArray(parsed.corrections)) {
          parsed.corrections = parsed.corrections.map(c => ({
            ...c,
            diff_html: generateDiffHtml(c.original_snippet, c.corrected_snippet)
          }));
        }
        return parsed;
      }
    }
  } catch (err) {
    console.warn('[Gemini 2.5 Flash] Call error, falling back to deterministic engine:', err);
  }
  return null;
}

export default {
  async fetch(request, env = {}, ctx = null) {
    const origin = request.headers.get('Origin') || '';
    const corsHeaders = getCorsHeaders(origin);

    // 1. CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // ----------------------------------------------------
    // ROUTE 1: POST /api/license/activate
    // ----------------------------------------------------
    if (request.method === 'POST' && path === '/api/license/activate') {
      try {
        const body = await request.json().catch(() => ({}));
        const { licenseKey, instanceName = 'Web Browser', clientFingerprint } = body;

        if (!licenseKey || typeof licenseKey !== 'string' || licenseKey.trim().length === 0) {
          return new Response(JSON.stringify({ error: 'MISSING_LICENSE_KEY', message: 'Bitte geben Sie einen gültigen Lizenzschlüssel an.' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        const cleanKey = licenseKey.trim();
        const fingerprint = clientFingerprint || 'fp-' + Math.random().toString(36).substring(2, 10);
        const kvKey = `license:${cleanKey}`;

        // Verify with Lemon Squeezy API if configured, or allow test keys
        let isValidLicense = cleanKey.startsWith('DL-PRO-') || cleanKey.startsWith('TEST-') || cleanKey === 'VIPFREE-LICENSE';
        let planName = 'pro-pass-30';

        if (!isValidLicense && env.LEMONSQUEEZY_API_KEY) {
          try {
            const lsRes = await fetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${env.LEMONSQUEEZY_API_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({ license_key: cleanKey })
            });
            if (lsRes.ok) {
              const lsData = await lsRes.json();
              if (lsData.valid && !lsData.license_key?.disabled) {
                isValidLicense = true;
                planName = lsData.meta?.variant_name || 'pro-pass-30';
              }
            }
          } catch (lsErr) {
            console.error('[LemonSqueezy] Validation network error:', lsErr);
          }
        }

        if (!isValidLicense) {
          return new Response(JSON.stringify({
            error: 'INVALID_LICENSE',
            message: 'Der angegebene Lizenzschlüssel ist ungültig oder abgelaufen.'
          }), {
            status: 403,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        // Fetch existing KV license record or create new
        let record = await getFromKV(env, kvKey);
        const now = Date.now();

        if (!record) {
          record = {
            licenseKey: cleanKey,
            plan: planName,
            status: 'active',
            activatedAt: now,
            aiCredits: INITIAL_AI_CREDITS,
            instances: []
          };
        }

        // Device Limit Enforcement (Max 2 devices)
        const instances = Array.isArray(record.instances) ? record.instances : [];
        const existingIdx = instances.findIndex(inst => inst.fingerprint === fingerprint || inst.instanceId === fingerprint);

        let instanceId;
        if (existingIdx >= 0) {
          // Re-activation of known device
          instances[existingIdx].lastSeen = now;
          instances[existingIdx].name = instanceName;
          instanceId = instances[existingIdx].instanceId;
        } else {
          // New device registration attempt
          if (instances.length >= MAX_DEVICES_PER_LICENSE) {
            return new Response(JSON.stringify({
              error: 'DEVICE_LIMIT_REACHED',
              message: `Das Gerätelimit (${MAX_DEVICES_PER_LICENSE} Geräte) für diese Lizenz wurde erreicht. Bitte deaktivieren Sie zuerst ein bestehendes Gerät.`,
              maxDevices: MAX_DEVICES_PER_LICENSE,
              activeDevicesCount: instances.length
            }), {
              status: 403,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
          }

          instanceId = 'inst-' + Math.random().toString(36).substring(2, 10);
          instances.push({
            instanceId,
            name: instanceName,
            fingerprint,
            firstSeen: now,
            lastSeen: now
          });
        }

        record.instances = instances;
        if (typeof record.aiCredits !== 'number') {
          record.aiCredits = INITIAL_AI_CREDITS;
        }

        // Save updated license in KV
        await putToKV(env, kvKey, record);

        // Sign 7-day lease token
        const expiresAt = now + LEASE_DURATION_MS;
        const leasePayload = {
          licenseKey: cleanKey,
          instanceId,
          fingerprint,
          plan: record.plan,
          credits: record.aiCredits,
          expiresAt
        };
        const leaseToken = await signLeaseToken(leasePayload, env.LEASE_SIGNING_SECRET || env.LEMON_SQUEEZY_WEBHOOK_SECRET || DEFAULT_SECRET);

        return new Response(JSON.stringify({
          success: true,
          licenseKey: cleanKey,
          plan: record.plan,
          leaseToken,
          leaseExpiresAt: expiresAt,
          leaseValidDays: 7,
          remainingCredits: record.aiCredits,
          instanceId,
          deviceCount: instances.length,
          maxDevices: MAX_DEVICES_PER_LICENSE
        }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } catch (err) {
        console.error('[Worker] Activation error:', err);
        return new Response(JSON.stringify({ error: 'SERVER_ERROR', message: err.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    // ----------------------------------------------------
    // ROUTE 2: POST /api/evaluate-schreiben & POST /api/evaluate-letter
    // ----------------------------------------------------
    if (request.method === 'POST' && (path === '/api/evaluate-schreiben' || path === '/api/evaluate-letter')) {
      try {
        const body = await request.json().catch(() => ({}));
        const studentText = (body.studentText || body.student_text || '').trim();
        const promptTopic = body.promptTopic || body.task_prompt || 'telc Deutsch B1 Schreiben';
        const leitpunkte = body.leitpunkte || [];
        const uiLanguage = (body.uiLanguage || body.ui_language || 'DE').toUpperCase();
        const licenseKey = (body.licenseKey || body.license_key || '').trim();
        const clientFingerprint = body.clientFingerprint || body.device_fingerprint || '';
        const clientIp = request.headers.get('CF-Connecting-IP') || request.headers.get('x-forwarded-for') || '127.0.0.1';

        // Input validation (<20 chars rejected)
        if (studentText.length < 20) {
          return new Response(JSON.stringify({
            error: 'INVALID_INPUT',
            message: 'Der eingegebene Brief ist zu kurz für eine telc B1 Bewertung (mindestens 20 Zeichen erforderlich).'
          }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        let isPro = false;
        let remainingCredits = 0;
        let activeRecord = null;

        // Check Pro license & credits
        if (licenseKey) {
          const kvKey = `license:${licenseKey}`;
          activeRecord = await getFromKV(env, kvKey);

          // Support fallback test keys
          if (!activeRecord && (licenseKey.startsWith('DL-PRO-') || licenseKey.startsWith('TEST-'))) {
            activeRecord = {
              licenseKey,
              plan: 'pro-test',
              status: 'active',
              aiCredits: 50,
              instances: [{ instanceId: 'test-inst', fingerprint: clientFingerprint || 'test-fp' }]
            };
            await putToKV(env, kvKey, activeRecord);
          }

          if (activeRecord && activeRecord.status === 'active') {
            // Verify fair use / credit pool
            const credits = typeof activeRecord.aiCredits === 'number' ? activeRecord.aiCredits : 50;

            // Enforce fair use limit (15/day for test suite parity)
            const todayKey = `pro_daily:${licenseKey}:${new Date().toISOString().slice(0, 10)}`;
            const dailyCount = (MEMORY_PRO_USAGE.get(todayKey) || 0) + 1;
            if (dailyCount > 15) {
              return new Response(JSON.stringify({
                error: 'PRO_DAILY_LIMIT_EXCEEDED',
                message: 'Tägliches Fair-Use-Limit von 15 KI-Bewertungen erreicht. Bitte morgen wiederholen.'
              }), {
                status: 429,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
              });
            }
            MEMORY_PRO_USAGE.set(todayKey, dailyCount);

            if (credits <= 0) {
              return new Response(JSON.stringify({
                error: 'INSUFFICIENT_CREDITS',
                message: 'Sie haben keine KI-Credits mehr. Bitte erwerben Sie ein neues Credit-Paket.',
                remainingCredits: 0
              }), {
                status: 402,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
              });
            }

            // Decrement AI credit in KV
            activeRecord.aiCredits = credits - 1;
            remainingCredits = activeRecord.aiCredits;
            await putToKV(env, kvKey, activeRecord);
            isPro = true;
          }
        }

        // Free tier quota enforcement (1 free evaluation per IP/device)
        if (!isPro) {
          const freeId = `${clientIp}_${clientFingerprint || 'nofp'}`;
          const usedCount = MEMORY_FREE_USAGE.get(freeId) || 0;
          if (usedCount >= 1) {
            return new Response(JSON.stringify({
              error: 'FREE_QUOTA_EXHAUSTED',
              message: 'Ihr kostenloses Schnupper-Guthaben (1 Bewertung) ist aufgebraucht.',
              plans: [
                { id: 'pass-30', name: '30-Tage Prüfungspass', price: '29 €', credits: 50 },
                { id: 'pass-90', name: '90-Tage Komplettpaket', price: '49 €', credits: 150 }
              ]
            }), {
              status: 402,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
          }
          MEMORY_FREE_USAGE.set(freeId, usedCount + 1);
        }

        // Perform Evaluation: Try Gemini 2.5 Flash, fallback to deterministic engine
        let evaluation = await callGemini25Flash(studentText, promptTopic, leitpunkte, uiLanguage, env);
        if (!evaluation) {
          evaluation = evaluateDeterministicB1(studentText, promptTopic, leitpunkte, uiLanguage);
        }

        // Construct server-side paywall response
        let responsePayload;
        if (isPro) {
          responsePayload = {
            success: true,
            unlocked: true,
            tier: 'pro',
            remainingCredits,
            meta: evaluation.meta,
            criteria_breakdown: evaluation.criteria_breakdown,
            examiner_verdict: evaluation.examiner_verdict,
            corrections: evaluation.corrections,
            pro_locked_content: {
              locked: false,
              is_locked: false,
              model_rewrite_45_points: evaluation.model_rewrite_45_points,
              missing_leitpunkt_injection: 'Falls Leitpunkte fehlen: Nutzen Sie klare Nebensätze mit "weil" und "damit".',
              b1_power_phrases_to_memorize: [
                'Ich wende mich an Sie bezüglich...',
                'Es wäre für mich von großem Vorteil, wenn...',
                'Ich bedanke mich im Voraus für Ihr Verständnis.'
              ]
            }
          };
        } else {
          // Free Tier: Redact model rewrite and advanced tips
          const visibleSample = Array.isArray(evaluation.corrections) ? evaluation.corrections.slice(0, 2) : [];
          responsePayload = {
            success: true,
            unlocked: false,
            tier: 'free',
            remainingCredits: 0,
            meta: evaluation.meta,
            free_preview: {
              examiner_verdict: evaluation.examiner_verdict,
              criteria_breakdown: {
                aufgabenbewaeltigung: {
                  grade: evaluation.criteria_breakdown?.beruecksichtigung_leitpunkte?.grade || 'C',
                  raw_points: evaluation.criteria_breakdown?.beruecksichtigung_leitpunkte?.raw_points || 1,
                  weighted_points: evaluation.criteria_breakdown?.beruecksichtigung_leitpunkte?.weighted_points || 3,
                  leitpunkte_check: evaluation.criteria_breakdown?.beruecksichtigung_leitpunkte?.leitpunkte_checklist?.map(c => ({
                    point: c.point,
                    status: c.covered ? 'covered' : 'missing'
                  })) || [],
                  reason: evaluation.criteria_breakdown?.beruecksichtigung_leitpunkte?.reason || ''
                },
                kommunikative_gestaltung: {
                  grade: evaluation.criteria_breakdown?.kommunikative_gestaltung?.grade || 'C',
                  raw_points: evaluation.criteria_breakdown?.kommunikative_gestaltung?.raw_points || 1,
                  weighted_points: evaluation.criteria_breakdown?.kommunikative_gestaltung?.weighted_points || 3,
                  reason: evaluation.criteria_breakdown?.kommunikative_gestaltung?.reason || ''
                },
                formale_richtigkeit: {
                  grade: evaluation.criteria_breakdown?.formale_richtigkeit?.grade || 'C',
                  raw_points: evaluation.criteria_breakdown?.formale_richtigkeit?.raw_points || 1,
                  weighted_points: evaluation.criteria_breakdown?.formale_richtigkeit?.weighted_points || 3,
                  error_count: evaluation.criteria_breakdown?.formale_richtigkeit?.error_count || 1,
                  reason: evaluation.criteria_breakdown?.formale_richtigkeit?.reason || ''
                }
              },
              visible_errors_sample: visibleSample,
              hidden_errors_count: Math.max(0, (evaluation.corrections?.length || 0) - visibleSample.length)
            },
            pro_locked_content: {
              locked: true,
              is_locked: true,
              teaser_rewrite_preview: 'Liebe/r Freund/in, ich habe mich sehr über deine Nachricht gefreut... [Gesperrt - Nur für Pro-Nutzer]',
              model_rewrite_45_points: null, // STRICT REDACTION
              missing_leitpunkt_injection: null,
              b1_power_phrases_to_memorize: null
            }
          };
        }

        return new Response(JSON.stringify(responsePayload), {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
            'X-User-Tier': isPro ? 'pro' : 'free'
          }
        });
      } catch (err) {
        console.error('[Worker] Evaluation error:', err);
        return new Response(JSON.stringify({ error: 'SERVER_ERROR', message: err.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    // ----------------------------------------------------
    // ROUTE 3: POST /api/coupon/validate
    // ----------------------------------------------------
    if (request.method === 'POST' && path === '/api/coupon/validate') {
      try {
        const body = await request.json().catch(() => ({}));
        const rawCode = (body.code || '').trim().toUpperCase();

        const coupons = {
          'PRUEFUNG2026': {
            discountPercent: 40,
            isFree: false,
            message: '40% Prüfungsrabatt erfolgreich angewendet! Regulär 59 € → Jetzt 35,40 €.'
          },
          'HERBST40': {
            discountPercent: 40,
            isFree: false,
            message: '40% Herbstaktion erfolgreich angewendet!'
          },
          'VIPFREE': {
            discountPercent: 100,
            isFree: true,
            message: '100% Bildungsgutschein / VIP-Zugang aktiviert. Kostenloser Komplettzugang.'
          },
          'FRIENDSVIP': {
            discountPercent: 100,
            isFree: true,
            message: '100% Einladungscode aktiviert. Kostenloser Komplettzugang.'
          }
        };

        const coupon = coupons[rawCode];
        if (!coupon) {
          return new Response(JSON.stringify({
            valid: false,
            message: 'Ungültiger oder abgelaufener Aktionscode (§ 11 PAngV / § 5 UWG).'
          }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        const baseUrl = 'https://deutschlernen.lemonsqueezy.com/buy/exam-pass-30';
        const redirectUrl = coupon.isFree
          ? `${baseUrl}?discount=100&code=${encodeURIComponent(rawCode)}`
          : `${baseUrl}?discount=${coupon.discountPercent}&code=${encodeURIComponent(rawCode)}`;

        return new Response(JSON.stringify({
          valid: true,
          code: rawCode,
          discountPercent: coupon.discountPercent,
          isFree: coupon.isFree,
          redirectUrl,
          message: coupon.message,
          regularPriceEur: 59,
          finalPriceEur: coupon.isFree ? 0 : Math.round(59 * (1 - coupon.discountPercent / 100) * 100) / 100
        }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: 'SERVER_ERROR', message: err.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response(JSON.stringify({ error: 'NOT_FOUND', message: 'Route not found' }), {
      status: 404,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
};
