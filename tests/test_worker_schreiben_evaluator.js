/**
 * Unit & Integration Test Suite for Cloudflare Worker: /worker/schreiben-evaluator.js
 * Verifies:
 * 1. Strict CORS preflight and allowed origins.
 * 2. 100% Server-side Paywall Redaction (DevTools safety): Non-Pro responses MUST NOT contain model rewrites or remaining errors.
 * 3. Free Tier quota exhaustion (1 free evaluation per IP/device).
 * 4. Pro Tier license validation (LemonSqueezy / test licenses) and 15/day fair-use rate limit.
 * 5. Official telc B1 rubric output integrity (Criterion I, II, III, max 45, threshold 27).
 */

const assert = require('assert');
const path = require('path');

// Import the ES worker module dynamically
async function runTests() {
  console.log('🧪 Starting Cloudflare Worker Schreiben Evaluator Test Suite...');

  const workerModule = await import('../worker/schreiben-evaluator.js');
  const worker = workerModule.default;

  const validPassingLetter = `Liebe Marianne,
ich habe mich sehr über deine E-Mail gefreut! Es ist wirklich schön, dass du mich bald in Deutschland besuchen möchtest.
Wenn du im Mai kommst, können wir eine tolle Fahrradtour machen und viele Museen besichtigen.
Bring bitte bequeme Schuhe und eine warme Jacke mit, weil das Wetter im Frühling wechselhaft sein kann.
Sag mir bald Bescheid, wann dein Flug genau ankommt, damit ich dich vom Flughafen abholen kann.
Viele herzliche Grüße,
Dein Freund`;

  // Test 1: OPTIONS CORS Preflight
  const preflightReq = new Request('https://worker.local/api/evaluate-letter', {
    method: 'OPTIONS',
    headers: {
      'Origin': 'https://egeengin.github.io',
      'Access-Control-Request-Method': 'POST'
    }
  });
  const preflightRes = await worker.fetch(preflightReq);
  assert.strictEqual(preflightRes.status, 204, 'CORS Preflight should return 204 No Content');
  assert.strictEqual(preflightRes.headers.get('Access-Control-Allow-Origin'), 'https://egeengin.github.io');
  console.log('✅ Test 1 Passed: CORS Preflight and headers verified.');

  // Test 2: Input Validation (<20 chars rejected)
  const shortReq = new Request('https://worker.local/api/evaluate-letter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Origin': 'https://egeengin.github.io' },
    body: JSON.stringify({ student_text: 'Zu kurz' })
  });
  const shortRes = await worker.fetch(shortReq);
  assert.strictEqual(shortRes.status, 400, 'Under-length letter should be rejected with 400');
  const shortJson = await shortRes.json();
  assert.strictEqual(shortJson.error, 'INVALID_INPUT');
  console.log('✅ Test 2 Passed: Short letter input validation verified.');

  // Test 3: Free User Evaluation with Server-Side Redaction
  const testIp = '198.51.100.42';
  const freeReq = new Request('https://worker.local/api/evaluate-letter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Origin': 'https://egeengin.github.io',
      'CF-Connecting-IP': testIp
    },
    body: JSON.stringify({
      student_text: validPassingLetter,
      task_prompt: 'E-Mail to Marianne: visit to Germany',
      ui_language: 'TR',
      device_fingerprint: 'fp-test-unique-1'
    })
  });

  const freeRes = await worker.fetch(freeReq);
  assert.strictEqual(freeRes.status, 200, 'First free evaluation must succeed with 200 OK');
  assert.strictEqual(freeRes.headers.get('X-User-Tier'), 'free');

  const freePayload = await freeRes.json();
  assert.strictEqual(freePayload.meta.max_score, 45, 'Max score must be 45');
  assert.strictEqual(freePayload.meta.pass_threshold, 27, 'Pass threshold must be 27');
  assert.ok(freePayload.meta.total_score >= 0 && freePayload.meta.total_score <= 45, 'Score should be between 0 and 45');
  assert.ok(freePayload.free_preview.examiner_verdict, 'Verdict summary must be present');
  assert.ok(freePayload.free_preview.criteria_breakdown.aufgabenbewaeltigung, 'Aufgabenbewältigung must be present');
  assert.ok(freePayload.free_preview.criteria_breakdown.kommunikative_gestaltung, 'Kommunikative Gestaltung must be present');
  assert.ok(freePayload.free_preview.criteria_breakdown.formale_richtigkeit, 'Formale Richtigkeit must be present');

  // CRITICAL SECURITY ASSERTION: DevTools Inspection Prevention
  assert.strictEqual(freePayload.pro_locked_content.locked, true, 'pro_locked_content.locked must be true');
  assert.strictEqual(freePayload.pro_locked_content.is_locked, true, 'pro_locked_content.is_locked must be true');
  assert.ok(typeof freePayload.pro_locked_content.teaser_rewrite_preview === 'string', 'teaser_rewrite_preview must be provided');
  assert.strictEqual(freePayload.pro_locked_content.model_rewrite_45_points, null, 'CRITICAL: model_rewrite_45_points MUST BE REDACTED (null) on server');
  assert.strictEqual(freePayload.pro_locked_content.missing_leitpunkt_injection, null, 'CRITICAL: missing_leitpunkt_injection MUST BE REDACTED (null)');
  assert.strictEqual(freePayload.pro_locked_content.b1_power_phrases_to_memorize, null, 'CRITICAL: b1_power_phrases MUST BE REDACTED (null)');
  assert.ok(freePayload.free_preview.visible_errors_sample.length <= 2, 'Free tier visible error sample must be capped at 2');
  console.log('✅ Test 3 Passed: Free evaluation with 100% server-side paywall redaction verified.');

  // Test 4: Free Quota Exhaustion (2nd request from same IP/device)
  const secondFreeReq = new Request('https://worker.local/api/evaluate-letter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Origin': 'https://egeengin.github.io',
      'CF-Connecting-IP': testIp
    },
    body: JSON.stringify({
      student_text: validPassingLetter,
      ui_language: 'TR',
      device_fingerprint: 'fp-test-unique-1'
    })
  });

  const secondFreeRes = await worker.fetch(secondFreeReq);
  assert.strictEqual(secondFreeRes.status, 402, 'Subsequent evaluation from same free user must return 402 Payment Required');
  const secondJson = await secondFreeRes.json();
  assert.strictEqual(secondJson.error, 'FREE_QUOTA_EXHAUSTED');
  assert.ok(secondJson.plans && secondJson.plans.length === 2, 'Must return 30-Day and 90-Day Exam Pass purchase options');
  console.log('✅ Test 4 Passed: Free quota exhaustion and 402 paywall redirection verified.');

  // Test 5: Pro User Evaluation (Unlocked 45/45 Rewrite & All Errors)
  const proReq = new Request('https://worker.local/api/evaluate-letter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Origin': 'https://egeengin.github.io',
      'CF-Connecting-IP': '203.0.113.88'
    },
    body: JSON.stringify({
      student_text: validPassingLetter,
      task_prompt: 'E-Mail to Marianne: visit to Germany',
      ui_language: 'DE',
      license_key: 'DL-PRO-TEST-PASS-2026'
    })
  });

  const proRes = await worker.fetch(proReq);
  assert.strictEqual(proRes.status, 200, 'Pro evaluation must succeed with 200 OK');
  assert.strictEqual(proRes.headers.get('X-User-Tier'), 'pro');

  const proPayload = await proRes.json();
  assert.strictEqual(proPayload.unlocked, true, 'Pro payload must be unlocked');
  assert.ok(proPayload.pro_locked_content.model_rewrite_45_points, 'Pro user must receive 45/45 model rewrite');
  assert.ok(proPayload.pro_locked_content.missing_leitpunkt_injection, 'Pro user must receive Leitpunkt injection');
  assert.ok(Array.isArray(proPayload.pro_locked_content.b1_power_phrases_to_memorize), 'Pro user must receive B1 power phrases');
  console.log('✅ Test 5 Passed: Pro license unlocks full 45/45 rewrite & advanced coaching.');

  // Test 6: Pro User Daily Rate Limit (15 evaluations/day)
  const proIp = '198.51.100.99';
  const proLicense = 'DL-PRO-RATE-LIMIT-TEST';
  for (let i = 0; i < 15; i++) {
    const r = await worker.fetch(new Request('https://worker.local/api/evaluate-letter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': proIp },
      body: JSON.stringify({ student_text: validPassingLetter, license_key: proLicense })
    }));
    assert.strictEqual(r.status, 200, `Evaluation ${i + 1} should succeed`);
  }

  // 16th evaluation should be rate-limited
  const sixteenthRes = await worker.fetch(new Request('https://worker.local/api/evaluate-letter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': proIp },
    body: JSON.stringify({ student_text: validPassingLetter, license_key: proLicense })
  }));
  assert.strictEqual(sixteenthRes.status, 429, '16th Pro evaluation must be rate limited with 429');
  const rateLimitJson = await sixteenthRes.json();
  assert.strictEqual(rateLimitJson.error, 'PRO_DAILY_LIMIT_EXCEEDED');
  console.log('✅ Test 6 Passed: Pro user fair-use 15 evaluations/day rate limit verified.');

  console.log('🎉 All Cloudflare Worker Backend Tests Passed Successfully!');
}

runTests().catch(err => {
  console.error('❌ Cloudflare Worker Test Failed:', err);
  process.exit(1);
});
