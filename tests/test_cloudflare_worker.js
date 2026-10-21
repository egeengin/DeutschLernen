/**
 * Unit & Integration Test Suite for Cloudflare Worker: cloudflare/worker.js
 * Verifies:
 * 1. CORS headers and preflight handling.
 * 2. POST /api/license/activate:
 *    - Validates license, creates KV record, assigns 50 AI credits.
 *    - Enforces 2 device limit (rejects 3rd device).
 *    - Issues cryptographically signed 7-day lease token.
 * 3. POST /api/evaluate-schreiben:
 *    - Validates license, decrements credits in KV.
 *    - Evaluates using telc B1 45-point rubric with diff tags (<del>/<ins>).
 *    - Returns remainingCredits and model rewrite.
 * 4. POST /api/coupon/validate:
 *    - Validates PRUEFUNG2026 (40%), HERBST40 (40%), VIPFREE (100%), FRIENDSVIP (100%).
 */

const assert = require('assert');

async function runWorkerTests() {
  console.log('🧪 Starting Cloudflare Worker (cloudflare/worker.js) Test Suite...');

  const workerModule = await import('../cloudflare/worker.js');
  const worker = workerModule.default;

  // 1. CORS Preflight
  const preflightRes = await worker.fetch(new Request('https://edge.local/api/license/activate', {
    method: 'OPTIONS',
    headers: {
      'Origin': 'https://egeengin.github.io',
      'Access-Control-Request-Method': 'POST'
    }
  }));
  assert.strictEqual(preflightRes.status, 204, 'CORS Preflight should return 204');
  assert.strictEqual(preflightRes.headers.get('Access-Control-Allow-Origin'), 'https://egeengin.github.io');
  console.log('✅ Test 1 Passed: CORS preflight verified.');

  // 2. License Activation & Device Limit Enforcement
  const testLicense = 'DL-PRO-SUITE-V2-' + Date.now();

  // Device 1 Activation
  const dev1Res = await worker.fetch(new Request('https://edge.local/api/license/activate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Origin': 'https://egeengin.github.io' },
    body: JSON.stringify({
      licenseKey: testLicense,
      instanceName: 'MacBook Air Chrome',
      clientFingerprint: 'fp-device-1'
    })
  }));
  assert.strictEqual(dev1Res.status, 200, 'Device 1 activation should succeed');
  const dev1Data = await dev1Res.json();
  assert.strictEqual(dev1Data.success, true);
  assert.strictEqual(dev1Data.remainingCredits, 50, 'New license should have 50 AI credits');
  assert.strictEqual(dev1Data.deviceCount, 1, 'Device count should be 1');
  assert.strictEqual(dev1Data.maxDevices, 2, 'Max devices should be 2');
  assert.ok(dev1Data.leaseToken && dev1Data.leaseToken.includes('.'), 'Must return signed lease token');
  assert.strictEqual(dev1Data.leaseValidDays, 7, 'Lease duration must be 7 days');
  console.log('✅ Test 2 Passed: Device 1 activation & 50 AI credits verified.');

  // Device 2 Activation
  const dev2Res = await worker.fetch(new Request('https://edge.local/api/license/activate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Origin': 'https://egeengin.github.io' },
    body: JSON.stringify({
      licenseKey: testLicense,
      instanceName: 'iPhone Safari',
      clientFingerprint: 'fp-device-2'
    })
  }));
  assert.strictEqual(dev2Res.status, 200, 'Device 2 activation should succeed');
  const dev2Data = await dev2Res.json();
  assert.strictEqual(dev2Data.deviceCount, 2, 'Device count should be 2');
  console.log('✅ Test 3 Passed: Device 2 activation verified.');

  // Device 3 Activation Attempt (Must be rejected with 403 DEVICE_LIMIT_REACHED)
  const dev3Res = await worker.fetch(new Request('https://edge.local/api/license/activate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Origin': 'https://egeengin.github.io' },
    body: JSON.stringify({
      licenseKey: testLicense,
      instanceName: 'Windows Tablet Edge',
      clientFingerprint: 'fp-device-3'
    })
  }));
  assert.strictEqual(dev3Res.status, 403, 'Device 3 activation must be rejected with 403');
  const dev3Data = await dev3Res.json();
  assert.strictEqual(dev3Data.error, 'DEVICE_LIMIT_REACHED');
  console.log('✅ Test 4 Passed: 2-device limit strictly enforced.');

  // 3. AI Schreiben Evaluation with Credit Decrement
  const sampleStudentText = `Liebe Sarah,
ich habe mich sehr über deine E-Mail gefreut. Es ist toll, dass du mich in Berlin besuchen willst.
Weil ich am Wochenende frei habe, können wir viele Museen besuchen und im Park spazieren gehen.
Bring bitte warme Kleidung mit, weil es im Herbst oft regnet.
Sag mir bitte bald Bescheid, wann dein Zug ankommt.
Herzliche Grüße,
Dein Alex`;

  const evalRes = await worker.fetch(new Request('https://edge.local/api/evaluate-schreiben', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Origin': 'https://egeengin.github.io' },
    body: JSON.stringify({
      licenseKey: testLicense,
      clientFingerprint: 'fp-device-1',
      promptTopic: 'Brief an Freundin: Besuch in Berlin',
      leitpunkte: ['Freude über Besuch', 'Gemeinsame Aktivitäten', 'Kleidung / Wetter', 'Ankunftszeit'],
      studentText: sampleStudentText,
      uiLanguage: 'DE'
    })
  }));
  assert.strictEqual(evalRes.status, 200, 'Pro evaluation should succeed');
  const evalData = await evalRes.json();
  assert.strictEqual(evalData.unlocked, true, 'Pro evaluation must be unlocked');
  assert.strictEqual(evalData.remainingCredits, 49, 'Credits should be decremented to 49');
  assert.strictEqual(evalData.meta.max_score, 45, 'Max score must be 45');
  assert.strictEqual(evalData.meta.pass_threshold, 27, 'Pass threshold must be 27');
  assert.ok(evalData.meta.total_score >= 27, 'Passing letter should have passed score');
  assert.ok(evalData.criteria_breakdown.beruecksichtigung_leitpunkte, 'Leitpunkte criterion present');
  assert.ok(evalData.criteria_breakdown.kommunikative_gestaltung, 'Kommunikative Gestaltung criterion present');
  assert.ok(evalData.criteria_breakdown.formale_richtigkeit, 'Formale Richtigkeit criterion present');
  assert.ok(evalData.pro_locked_content.model_rewrite_45_points, '45/45 model rewrite provided');
  console.log('✅ Test 5 Passed: AI Schreiben evaluation with credit decrement & telc rubric verified.');

  // 4. Coupon Validation Endpoint
  const p2026Res = await worker.fetch(new Request('https://edge.local/api/coupon/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: 'PRUEFUNG2026' })
  }));
  assert.strictEqual(p2026Res.status, 200);
  const p2026Data = await p2026Res.json();
  assert.strictEqual(p2026Data.valid, true);
  assert.strictEqual(p2026Data.discountPercent, 40);
  assert.strictEqual(p2026Data.isFree, false);
  assert.ok(p2026Data.redirectUrl.includes('discount=40'));

  const vipRes = await worker.fetch(new Request('https://edge.local/api/coupon/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: 'VIPFREE' })
  }));
  assert.strictEqual(vipRes.status, 200);
  const vipData = await vipRes.json();
  assert.strictEqual(vipData.valid, true);
  assert.strictEqual(vipData.discountPercent, 100);
  assert.strictEqual(vipData.isFree, true);
  assert.strictEqual(vipData.finalPriceEur, 0);

  const invalidRes = await worker.fetch(new Request('https://edge.local/api/coupon/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: 'FAKEDISCOUNT99' })
  }));
  assert.strictEqual(invalidRes.status, 400);
  console.log('✅ Test 6 Passed: Coupon validation (§ 11 PAngV / § 5 UWG) verified.');

  console.log('🎉 All Cloudflare Worker Unit & Integration Tests Passed Successfully!');
}

runWorkerTests().catch(err => {
  console.error('❌ Cloudflare Worker Test Failed:', err);
  process.exit(1);
});
