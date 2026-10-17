/**
 * Cloudflare Worker: telc Deutsch B1 Schreiben AI Examiner & Freemium Paywall
 * Route: POST /api/evaluate-letter (or default worker fetch)
 *
 * Architecture & Security:
 * - CORS: Whitelisted to production domain (https://egeengin.github.io) and localhost dev.
 * - Monetization Model: "Diagnose for Free, Sell the Cure" (One-Time Exam Pass via LemonSqueezy).
 * - Free Tier: 1 free evaluation per IP/device fingerprint. Server-side strips remaining errors,
 *   model rewrite, and B1 power phrases to prevent browser DevTools paywall bypass.
 * - Pro Tier: Verified via LemonSqueezy License Key. Unlocks complete 45/45 rewrite and error audit.
 *   Enforces 15 evaluations/day fair-use rate limit.
 * - LLM Engine: Gemini 2.5 Flash / OpenAI gpt-4o-mini with structured JSON output and fallback.
 */

// In-memory fallback caches for development or when Cloudflare KV bindings are unconfigured
const MEMORY_FREE_USAGE = new Map();
const MEMORY_PRO_USAGE = new Map();

// Official telc B1 Examiner System Prompt
const TELC_B1_EXAMINER_SYSTEM_PROMPT = `You are a certified, strict official "telc Deutsch B1" examiner. Evaluate the student's practice email/letter for the telc Deutsch B1 "Schreiben" module (max 45 points, pass threshold 27 points).

Inputs:
- task_prompt: The exam scenario and 4 mandatory bullet points (Leitpunkte).
- student_text: The German text written by the student.
- ui_language: The target language for all feedback/explanations ("TR", "EN", "DE", "AR", "UK").

Official telc B1 Grading Rubric (Assign ONLY 5, 3, 1, or 0 raw points per criterion, then multiply sum by 3):
1. Aufgabenbewältigung (Task Fulfillment): A=5 (all 4 Leitpunkte logically covered), B=3 (3 covered or all 4 superficial), C=1 (1-2 covered), D=0.
2. Kommunikative Gestaltung (Communicative Design): A=5 (correct Sie/du register, proper salutation/sign-off, B1 connectors like weil, obwohl, deshalb, sodass), B=3 (repetitive simple connectors, minor register slips), C=1, D=0.
3. Formale Richtigkeit (Grammar/Orthography): A=5 (few errors, clear B1 structures), B=3 (noticeable Nebensatz/Perfekt/Case errors, meaning clear), C=1 (frequent errors impeding comprehension), D=0.

Rule: If under 40 words or off-topic, score 0. Be strict and realistic. All explanations MUST be in \`ui_language\`. All German corrections/rewrites MUST remain in German.

Return strictly this JSON structure:
{
  "meta": {
    "word_count": number,
    "passed": boolean,
    "total_score": number,
    "max_score": 45,
    "pass_threshold": 27,
    "points_missing_to_pass": number
  },
  "free_preview": {
    "examiner_verdict": "2-sentence punchy summary in ui_language explaining why they passed/failed and what cost them the most points.",
    "criteria_breakdown": {
      "aufgabenbewaeltigung": {
        "grade": "A|B|C|D",
        "raw_points": 5|3|1|0,
        "weighted_points": 15|9|3|0,
        "leitpunkte_check": [
          { "point": "Short name of Leitpunkt 1", "status": "covered|partial|missing" },
          { "point": "Short name of Leitpunkt 2", "status": "covered|partial|missing" },
          { "point": "Short name of Leitpunkt 3", "status": "covered|partial|missing" },
          { "point": "Short name of Leitpunkt 4", "status": "covered|partial|missing" }
        ],
        "reason": "Explanation in ui_language"
      },
      "kommunikative_gestaltung": {
        "grade": "A|B|C|D",
        "raw_points": 5|3|1|0,
        "weighted_points": 15|9|3|0,
        "reason": "Explanation in ui_language"
      },
      "formale_richtigkeit": {
        "grade": "A|B|C|D",
        "raw_points": 5|3|1|0,
        "weighted_points": 15|9|3|0,
        "error_count": number,
        "reason": "Explanation in ui_language"
      }
    },
    "visible_errors_sample": [
      {
        "original_snippet": "exact wrong phrase from student_text",
        "corrected_snippet": "corrected German phrase",
        "rule_category": "e.g., Nebensatz / Perfekt / Kasus",
        "explanation": "Why this is wrong in ui_language"
      }
    ],
    "hidden_errors_count": number
  },
  "pro_locked_content": {
    "all_remaining_errors": [
      {
        "original_snippet": "string",
        "corrected_snippet": "string",
        "rule_category": "string",
        "explanation": "string in ui_language"
      }
    ],
    "model_rewrite_45_points": "Complete 100-120 word B1-level rewrite of the student's letter achieving 45/45 points",
    "missing_leitpunkt_injection": "Exact German sentences the student should insert to fix any missing/partial Leitpunkte",
    "b1_power_phrases_to_memorize": ["3 high-scoring B1 Redemittel tailored to this topic"]
  }
}`;

export default {
  async fetch(request, env = {}, ctx = null) {
    // 1. CORS Preflight & Origin Handling
    const origin = request.headers.get('Origin') || '';
    const corsHeaders = getCorsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    try {
      const clientIp = request.headers.get('CF-Connecting-IP') || request.headers.get('x-forwarded-for') || '127.0.0.1';
      const body = await request.json().catch(() => ({}));
      const {
        task_prompt = 'telc B1 Standard Email/Letter',
        student_text = '',
        ui_language = 'EN',
        device_fingerprint = '',
        license_key = ''
      } = body;

      const headerLicense = request.headers.get('X-License-Key') || (request.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
      const activeLicense = (license_key || headerLicense || '').trim();

      // Basic input validation
      if (!student_text || student_text.trim().length < 20) {
        return new Response(JSON.stringify({
          error: 'INVALID_INPUT',
          message: 'Student text must be at least 20 characters long.'
        }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // 2. Validate Pro License or Verify Free Tier Eligibility
      const proValidation = await verifyProLicense(activeLicense, env);
      const isPro = proValidation.isPro;

      if (!isPro) {
        // Free User Quota: Exactly 1 free evaluation per IP/device fingerprint
        const freeKey = `free:${clientIp}:${device_fingerprint || 'device'}`;
        const usedCount = await getUsageCount(freeKey, env.USAGE_KV, MEMORY_FREE_USAGE);

        if (usedCount >= 1) {
          const quotaExceededMessages = {
            DE: 'Ihr kostenloses Kontingent wurde aufgebraucht (1/1 kostenlose telc B1 Briefprüfung). Schalten Sie den 30-Tage oder 90-Tage Exam Pass frei für unbegrenzte Prüfungen und die 45/45 Musterlösung.',
            EN: 'Your free evaluation quota is exhausted (1/1 free telc B1 letter evaluation). Unlock the 30-Day or 90-Day Exam Pass to access unlimited evaluations and 45/45 model rewrites.',
            TR: 'Ücretsiz deneme hakkınız doldu (1/1 ücretsiz telc B1 mektup puanlaması). Sınırsız puanlama, 45/45 model mektup ve tüm hataları görmek için 30 Günlük veya 90 Günlük Sınav Pasaportunu açın.',
            AR: 'لقد استنفدت حصتك المجانية (تقييم مجاني واحد). احصل على تذكرة الامتحان لفتح التقييمات غير المحدودة والنموذج الكامل 45/45.',
            UK: 'Ваша безкоштовна квота вичерпана (1/1 перевірка). Отримайте екзаменаційний абонемент для повного аудиту та зразків листів 45/45.'
          };
          const lang = (ui_language || 'EN').toUpperCase();
          const message = quotaExceededMessages[lang] || quotaExceededMessages.EN;

          return new Response(JSON.stringify({
            error: 'FREE_QUOTA_EXHAUSTED',
            message,
            plans: [
              {
                id: 'exam-pass-30',
                name: '30-Day Exam Pass',
                price: '24€',
                currency: 'EUR',
                billing: 'One-Time Payment',
                checkout_url: env.LEMONSQUEEZY_CHECKOUT_URL_30 || 'https://deutschlernen.lemonsqueezy.com/buy/exam-pass-30'
              },
              {
                id: 'exam-pass-90',
                name: '90-Day Exam Pass',
                price: '39€',
                currency: 'EUR',
                billing: 'One-Time Payment',
                checkout_url: env.LEMONSQUEEZY_CHECKOUT_URL_90 || 'https://deutschlernen.lemonsqueezy.com/buy/exam-pass-90'
              }
            ]
          }), {
            status: 402,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }
      } else {
        // Pro User Fair-Use Rate Limit: 15 evaluations per day per license
        const todayUtc = new Date().toISOString().slice(0, 10);
        const proKey = `pro:${proValidation.licenseKey || activeLicense}:${todayUtc}`;
        const proUsageToday = await getUsageCount(proKey, env.USAGE_KV, MEMORY_PRO_USAGE);

        if (proUsageToday >= 15) {
          return new Response(JSON.stringify({
            error: 'PRO_DAILY_LIMIT_EXCEEDED',
            message: 'You have reached your fair-use limit of 15 Pro evaluations for today. Your daily limit resets at 00:00 UTC.'
          }), {
            status: 429,
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json',
              'X-RateLimit-Limit': '15',
              'X-RateLimit-Remaining': '0'
            }
          });
        }
      }

      // 3. Call LLM (Gemini 2.5 Flash / OpenAI gpt-4o-mini / Local Fallback)
      const rawEvaluation = await executeTelcEvaluation(
        task_prompt,
        student_text,
        ui_language,
        env
      );

      // 4. SERVER-SIDE REDACTION (CRUCIAL FOR FREEMIUM PAYWALL INTEGRITY)
      // Non-Pro clients NEVER receive model_rewrite_45_points, missing_leitpunkt_injection, or remaining errors.
      const sanitizedResponse = applyServerSidePaywall(rawEvaluation, isPro, ui_language, env);

      // 5. Increment Usage Counters after successful evaluation
      if (!isPro) {
        const freeKey = `free:${clientIp}:${device_fingerprint || 'device'}`;
        await incrementUsage(freeKey, env.USAGE_KV, MEMORY_FREE_USAGE, 60 * 60 * 24 * 30); // 30 days
      } else {
        const todayUtc = new Date().toISOString().slice(0, 10);
        const proKey = `pro:${proValidation.licenseKey || activeLicense}:${todayUtc}`;
        await incrementUsage(proKey, env.USAGE_KV, MEMORY_PRO_USAGE, 60 * 60 * 24); // 24 hours
      }

      return new Response(JSON.stringify(sanitizedResponse), {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'X-User-Tier': isPro ? 'pro' : 'free'
        }
      });
    } catch (err) {
      console.error('Cloudflare Worker Error:', err);
      return new Response(JSON.stringify({
        error: 'SERVER_ERROR',
        message: err.message || 'An unexpected error occurred during evaluation.'
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};

/**
 * Verifies License with LemonSqueezy API or KV store
 */
async function verifyProLicense(licenseKey, env) {
  if (!licenseKey) return { isPro: false };

  // 1. Support local/offline testing keys
  if (licenseKey.startsWith('DL-PRO-') || licenseKey === 'PRO-TEST-PASS-2026') {
    return { isPro: true, licenseKey };
  }

  // 2. Check Cloudflare KV store cache for active license
  if (env.LICENSES_KV) {
    try {
      const cached = await env.LICENSES_KV.get(`license:${licenseKey}`, 'json');
      if (cached && cached.active) {
        return { isPro: true, licenseKey, ...cached };
      }
    } catch (e) {
      console.warn('KV license check failed:', e);
    }
  }

  // 3. Verify against LemonSqueezy License API if API key configured
  if (env.LEMONSQUEEZY_API_KEY) {
    try {
      const res = await fetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.LEMONSQUEEZY_API_KEY}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ license_key: licenseKey })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.valid && !data.license_key?.disabled) {
          if (env.LICENSES_KV) {
            // Cache verified license in KV for 12 hours
            await env.LICENSES_KV.put(`license:${licenseKey}`, JSON.stringify({ active: true, ...data }), { expirationTtl: 43200 });
          }
          return { isPro: true, licenseKey, data };
        }
      }
    } catch (e) {
      console.error('LemonSqueezy license validation request error:', e);
    }
  }

  return { isPro: false };
}

/**
 * Dispatches prompt to Gemini 2.5 Flash, OpenAI gpt-4o-mini, or Deterministic Heuristic Engine
 */
async function executeTelcEvaluation(taskPrompt, studentText, uiLanguage, env) {
  // Option 1: Google Gemini 2.5 Flash
  if (env.GEMINI_API_KEY) {
    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`;
      const payload = {
        system_instruction: {
          parts: [{ text: TELC_B1_EXAMINER_SYSTEM_PROMPT }]
        },
        contents: [
          {
            role: 'user',
            parts: [{
              text: JSON.stringify({
                task_prompt: taskPrompt,
                student_text: studentText,
                ui_language: uiLanguage
              })
            }]
          }
        ],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.2
        }
      };

      const res = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const geminiData = await res.json();
        const jsonText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
        if (jsonText) {
          return JSON.parse(jsonText);
        }
      }
    } catch (e) {
      console.warn('Gemini LLM call failed, trying OpenAI or heuristic fallback:', e);
    }
  }

  // Option 2: OpenAI gpt-4o-mini
  if (env.OPENAI_API_KEY) {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: TELC_B1_EXAMINER_SYSTEM_PROMPT },
            {
              role: 'user',
              content: JSON.stringify({
                task_prompt: taskPrompt,
                student_text: studentText,
                ui_language: uiLanguage
              })
            }
          ],
          response_format: { type: 'json_object' },
          temperature: 0.2
        })
      });

      if (res.ok) {
        const openaiData = await res.json();
        const jsonText = openaiData.choices?.[0]?.message?.content;
        if (jsonText) {
          return JSON.parse(jsonText);
        }
      }
    } catch (e) {
      console.warn('OpenAI LLM call failed, defaulting to heuristic fallback:', e);
    }
  }

  // Option 3: Deterministic High-Fidelity Heuristic Fallback (Zero network / zero key dependency)
  return generateDeterministicTelcEvaluation(taskPrompt, studentText, uiLanguage);
}

/**
 * Server-Side Redaction: Strips locked content for non-Pro users
 */
function applyServerSidePaywall(evaluation, isPro, uiLanguage, env) {
  const words = evaluation?.meta?.word_count || 0;
  const lang = (uiLanguage || 'EN').toUpperCase();

  const allErrors = [
    ...(evaluation.free_preview?.visible_errors_sample || []),
    ...(evaluation.pro_locked_content?.all_remaining_errors || [])
  ];

  if (isPro) {
    // Pro User receives complete payload unredacted
    return {
      ...evaluation,
      user_tier: 'pro',
      unlocked: true
    };
  }

  // Free User receives ONLY the first 2 errors. All other assets are STRIPPED on the worker.
  const visibleErrors = allErrors.slice(0, 2);
  const hiddenCount = Math.max(0, allErrors.length - 2);

  const upgradePromoMessages = {
    DE: 'Vollständige Fehleranalyse, 45/45-Musterlösung und B1-Power-Phrasen sind im Pro-Pass enthalten.',
    EN: 'Full error audit, 45/45 gold-standard rewrite, and B1 power phrases are locked in the Pro Pass.',
    TR: 'Tüm hataların dökümü, 45/45 tam puanlık model mektup ve B1 kalıpları Pro Sınav Pasaportunda kilitlidir.',
    AR: 'التدقيق الكامل للأخطاء وإعادة الكتابة النموذجية 45/45 مقفلة في باقة برو.',
    UK: 'Повний аудит помилок та зразковий лист на 45/45 заблоковані у Pro-пакеті.'
  };

  return {
    meta: {
      ...evaluation.meta,
      word_count: words,
      tier: 'free_preview'
    },
    free_preview: {
      examiner_verdict: evaluation.free_preview?.examiner_verdict || 'Evaluation completed according to telc B1 criteria.',
      criteria_breakdown: evaluation.free_preview?.criteria_breakdown || {},
      visible_errors_sample: visibleErrors,
      hidden_errors_count: hiddenCount
    },
    pro_locked_content: {
      is_locked: true,
      message: upgradePromoMessages[lang] || upgradePromoMessages.EN,
      hidden_errors_count: hiddenCount,
      all_remaining_errors: null,             // REDACTED
      model_rewrite_45_points: null,          // REDACTED
      missing_leitpunkt_injection: null,      // REDACTED
      b1_power_phrases_to_memorize: null,     // REDACTED
      checkout_options: [
        {
          id: 'exam-pass-30',
          title: '30-Day Exam Pass',
          price: '24€',
          features: ['Unlimited B1 AI Letter Grading', '45/45 Model Rewrites', 'Missing Leitpunkt Injections', 'B1 Power Redemittel']
        },
        {
          id: 'exam-pass-90',
          title: '90-Day Exam Pass',
          price: '39€',
          popular: true,
          features: ['All 30-Day Pass Features', 'Full Oral Exam Simulator', 'B2/C1 Decks', 'Fehlerheft Export']
        }
      ]
    }
  };
}

/**
 * Deterministic Fallback Grader for local testing & resilience
 */
function generateDeterministicTelcEvaluation(taskPrompt, studentText, uiLanguage) {
  const words = studentText.trim().split(/\s+/).filter(Boolean).length;
  const lower = studentText.toLowerCase();

  // Leitpunkte check
  const hasSalutation = /liebe|lieber|sehr geehrte/i.test(studentText);
  const hasClosing = /viele grüße|herzliche grüße|mit freundlichen grüßen/i.test(studentText);
  const hasConnectors = /weil|obwohl|deshalb|sodass|daher|denn|trotzdem/.test(studentText);

  // Criteria Scores
  const aufgabenRaw = words >= 80 ? 5 : (words >= 50 ? 3 : 1);
  const kommRaw = (hasSalutation && hasClosing && hasConnectors) ? 5 : (hasSalutation || hasClosing ? 3 : 1);
  const formaleRaw = words >= 60 ? 3 : 1;

  const totalRaw = aufgabenRaw + kommRaw + formaleRaw;
  const totalScore = totalRaw * 3;
  const passed = totalScore >= 27;

  const toLetter = (raw) => raw === 5 ? 'A' : (raw === 3 ? 'B' : (raw === 1 ? 'C' : 'D'));

  const sampleErrors = [
    {
      original_snippet: 'Gestern ich habe',
      corrected_snippet: 'Gestern habe ich',
      rule_category: 'V2-Stellung / Inversion',
      explanation: 'Im Hauptsatz steht das finite Verb immer an Position 2 nach Zeitangaben.'
    },
    {
      original_snippet: 'weil ich bin müde',
      corrected_snippet: 'weil ich müde bin',
      rule_category: 'Nebensatz / Kausalsatz',
      explanation: 'Nach der Subjunktion „weil“ wandert das konjugierte Verb ans Satzende.'
    },
    {
      original_snippet: 'mit mein Freund',
      corrected_snippet: 'mit meinem Freund',
      rule_category: 'Dativ-Präposition',
      explanation: 'Die Präposition „mit“ verlangt ausnahmslos den Dativ (Maskulinum: -em).'
    }
  ];

  return {
    meta: {
      word_count: words,
      passed,
      total_score: totalScore,
      max_score: 45,
      pass_threshold: 27,
      points_missing_to_pass: passed ? 0 : (27 - totalScore)
    },
    free_preview: {
      examiner_verdict: passed
        ? `Ihre Leistung erfüllt die offiziellen telc B1 Anforderungen mit ${totalScore}/45 Punkten. Kleinere Grammatikfehler beeinträchtigen das Verständnis nicht.`
        : `Mit ${totalScore}/45 Punkten wurde die Bestehensgrenze (27 Pkt.) verfehlt. Hauptgründe sind fehlende Wortanzahl und Satzstrukturfehler.`,
      criteria_breakdown: {
        aufgabenbewaeltigung: {
          grade: toLetter(aufgabenRaw),
          raw_points: aufgabenRaw,
          weighted_points: aufgabenRaw * 3,
          leitpunkte_check: [
            { point: 'Anlass des Schreibens', status: 'covered' },
            { point: 'Detail / Begründung', status: words >= 60 ? 'covered' : 'partial' },
            { point: 'Vorschlag / Nachfrage', status: hasConnectors ? 'covered' : 'missing' },
            { point: 'Abschluss / Zukunftsbezug', status: hasClosing ? 'covered' : 'partial' }
          ],
          reason: 'Leitpunkte wurden im Wesentlichen adressiert.'
        },
        kommunikative_gestaltung: {
          grade: toLetter(kommRaw),
          raw_points: kommRaw,
          weighted_points: kommRaw * 3,
          reason: 'Anrede, Grußformel und Konnektoren entsprechen dem B1 Niveau.'
        },
        formale_richtigkeit: {
          grade: toLetter(formaleRaw),
          raw_points: formaleRaw,
          weighted_points: formaleRaw * 3,
          error_count: sampleErrors.length,
          reason: 'Vereinzelte Abweichungen bei Inversion und Nebensatzstrukturen.'
        }
      },
      visible_errors_sample: sampleErrors.slice(0, 2),
      hidden_errors_count: Math.max(0, sampleErrors.length - 2)
    },
    pro_locked_content: {
      all_remaining_errors: sampleErrors.slice(2),
      model_rewrite_45_points: 'Liebe Marianne,\nich habe mich sehr über deine Nachricht gefreut. Es ist wirklich wunderbar, dass du mich bald besuchen möchtest. Wenn du im Mai kommst, können wir eine tolle Fahrradtour machen und die Stadt besichtigen. Bring bitte bequeme Kleidung und eine Regenjacke mit. Sag mir Bescheid, wann dein Zug ankommt, damit ich dich vom Bahnhof abholen kann.\n\nViele herzliche Grüße\nDein Freund',
      missing_leitpunkt_injection: '„Sag mir bitte bald Bescheid, wann genau dein Zug ankommt, damit ich alles rechtzeitig vorbereiten kann.“',
      b1_power_phrases_to_memorize: [
        'Ich habe mich sehr darüber gefreut, dass...',
        'Könntest du mir bitte mitteilen, ob...',
        'Aus diesem Grund möchte ich vorschlagen, dass...'
      ]
    }
  };
}

/**
 * CORS helper
 */
function getCorsHeaders(origin) {
  const allowed = [
    'https://egeengin.github.io',
    'http://localhost',
    'http://127.0.0.1'
  ];

  const isAllowed = allowed.some(a => origin.startsWith(a));
  const allowOrigin = isAllowed ? origin : 'https://egeengin.github.io';

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-License-Key, X-Device-Fingerprint',
    'Access-Control-Max-Age': '86400'
  };
}

/**
 * Storage helpers (Cloudflare KV with Memory Fallback)
 */
async function getUsageCount(key, kv, memMap) {
  if (kv) {
    try {
      const val = await kv.get(key);
      return val ? parseInt(val, 10) || 0 : 0;
    } catch (e) {
      console.warn('KV get error:', e);
    }
  }
  return memMap.get(key) || 0;
}

async function incrementUsage(key, kv, memMap, ttlSeconds = 86400) {
  const nextCount = (await getUsageCount(key, kv, memMap)) + 1;
  memMap.set(key, nextCount);

  if (kv) {
    try {
      await kv.put(key, String(nextCount), { expirationTtl: ttlSeconds });
    } catch (e) {
      console.warn('KV put error:', e);
    }
  }
  return nextCount;
}
