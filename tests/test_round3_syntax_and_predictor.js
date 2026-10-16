/**
 * Unit Test Suite for Round 3:
 * 1. telc B1 Real-Time Syntax & Word-Order Guard (V2 Inversion & Nebensatz Verb-Final).
 * 2. telc B1 Composite Exam Readiness & Pass Predictor Dashboard (calculateTelcB1ExamResult).
 */

const assert = require('assert');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const { calculateTelcB1ExamResult, CALC_I18N } = require(path.join(ROOT_DIR, 'js', 'telcCalculator.js'));
const { evaluateStudentLetterB1, SHOWCASE_I18N } = require(path.join(ROOT_DIR, 'js', 'schreibenShowcase.js'));

console.log('🧪 Starting Round 3: Syntax Guard & Pass Predictor Unit Tests...');

// 1. Multilingual Parity in CALC_I18N
const expectedLangs = ['en', 'tr', 'ar', 'uk'];
const enKeys = Object.keys(CALC_I18N.en);
assert.ok(enKeys.length >= 20, 'CALC_I18N.en should have comprehensive UI keys');

expectedLangs.forEach(lang => {
  assert.ok(CALC_I18N[lang], `CALC_I18N must include language: ${lang}`);
  enKeys.forEach(k => {
    assert.ok(CALC_I18N[lang][k], `CALC_I18N.${lang} must have key: ${k}`);
  });
});
console.log('✅ Pass Predictor (CALC_I18N) 4-language key parity verified.');

// 2. Exact 60% Passing Boundary
const minPass = calculateTelcB1ExamResult({
  lesen: 45,
  sprachbausteine: 18,
  hoeren: 45,
  schreiben: 27,
  sprechen: 45
});
assert.strictEqual(minPass.schriftlich.total, 135, 'Written total should be exactly 135 pts');
assert.strictEqual(minPass.schriftlich.passed, true, 'Written part should pass');
assert.strictEqual(minPass.muendlich.total, 45, 'Oral total should be exactly 45 pts');
assert.strictEqual(minPass.muendlich.passed, true, 'Oral part should pass');
assert.strictEqual(minPass.overall.total, 180, 'Overall total should be exactly 180 pts');
assert.strictEqual(minPass.overall.passed, true, 'Overall exam should pass');
assert.strictEqual(minPass.overall.gradeCode, 'ausreichend', 'Grade code should be ausreichend');
console.log('✅ Minimal 60% passing boundary (180/300 pts) verified.');

// 3. Distinction Grades: Sehr Gut, Gut, Befriedigend
const sehrGut = calculateTelcB1ExamResult({
  lesen: 68,
  sprachbausteine: 28,
  hoeren: 70,
  schreiben: 40,
  sprechen: 70
});
assert.strictEqual(sehrGut.overall.passed, true);
assert.strictEqual(sehrGut.overall.gradeCode, 'sehr_gut', '>=270 pts must result in sehr_gut');

const gut = calculateTelcB1ExamResult({
  lesen: 60,
  sprachbausteine: 24,
  hoeren: 60,
  schreiben: 36,
  sprechen: 60
});
assert.strictEqual(gut.overall.passed, true);
assert.strictEqual(gut.overall.gradeCode, 'gut', '>=240 pts must result in gut');

const befriedigend = calculateTelcB1ExamResult({
  lesen: 52,
  sprachbausteine: 21,
  hoeren: 52,
  schreiben: 32,
  sprechen: 55
});
assert.strictEqual(befriedigend.overall.passed, true);
assert.strictEqual(befriedigend.overall.gradeCode, 'befriedigend', '>=210 pts must result in befriedigend');
console.log('✅ Distinction grades (Sehr Gut >=270, Gut >=240, Befriedigend >=210) verified.');

// 4. Critical telc Rule: Both Written AND Oral must pass individually
// Case A: Written 170 (Passed), Oral 40 (<45 Failed), Total 210 (>180) -> Overall FAIL!
const partialA = calculateTelcB1ExamResult({
  lesen: 55,
  sprachbausteine: 25,
  hoeren: 55,
  schreiben: 35,
  sprechen: 40 // Failed oral (<45)
});
assert.strictEqual(partialA.schriftlich.passed, true, 'Written part passed');
assert.strictEqual(partialA.muendlich.passed, false, 'Oral part failed');
assert.strictEqual(partialA.overall.passed, false, 'Overall exam MUST NOT pass if oral failed, even with total >= 180');
assert.strictEqual(partialA.overall.statusCode, 'partial_written', 'Status should be partial_written');
assert.strictEqual(partialA.overall.gradeCode, 'teil_muendlich', 'Grade should indicate retaking oral part');

// Case B: Written 125 (<135 Failed), Oral 70 (Passed), Total 195 (>180) -> Overall FAIL!
const partialB = calculateTelcB1ExamResult({
  lesen: 40,
  sprachbausteine: 15,
  hoeren: 45,
  schreiben: 25, // Total written = 125 (<135)
  sprechen: 70
});
assert.strictEqual(partialB.schriftlich.passed, false, 'Written part failed');
assert.strictEqual(partialB.muendlich.passed, true, 'Oral part passed');
assert.strictEqual(partialB.overall.passed, false, 'Overall exam MUST NOT pass if written failed, even with total >= 180');
assert.strictEqual(partialB.overall.statusCode, 'partial_oral', 'Status should be partial_oral');
assert.strictEqual(partialB.overall.gradeCode, 'teil_schriftlich', 'Grade should indicate retaking written part');
console.log('✅ Official telc sub-exam independence rule strictly validated.');

// 5. Weakest Component Analysis & Points to Next Grade
assert.strictEqual(partialB.analysis.weakest.id, 'sprachbausteine', 'Lowest section (15/30 = 50%) should be accurately identified');
assert.ok(partialB.analysis.pointsToNext > 0, 'Points to next threshold must be positive');
console.log('✅ Weakest section diagnostics & point gap calculations verified.');

// 6. Real-Time Syntax Guard & evaluateStudentLetterB1
// Test 6a: V2 Adverbial violation: "Gestern ich habe..."
const letterWithV2Err = `Liebe Marianne,\n\nGestern ich habe einen Film gesehen. Es war schön.\n\nViele Grüße,\nAli`;
const evalV2 = evaluateStudentLetterB1(letterWithV2Err, 'marianne', 'en');
const v2Ann = evalV2.annotations.find(a => a.rule.includes('Zweitstellung') || a.ruleEn.includes('Verb-Second'));
assert.ok(v2Ann, 'Must detect V2 adverbial violation (Gestern ich habe)');
assert.strictEqual(v2Ann.correctedText, 'Gestern habe ich', 'Must suggest V2 inverted order (Gestern habe ich)');

// Test 6b: Subordinate clause verb-final violation: "weil ich bin krank"
const letterWithNebensatzErr = `Liebe Marianne, ich kann nicht kommen, weil ich bin krank. Viele Grüße, Ali`;
const evalNebensatz = evaluateStudentLetterB1(letterWithNebensatzErr, 'marianne', 'en');
const nebensatzAnn = evalNebensatz.annotations.find(a => a.rule.includes('Letztstellung') || a.ruleEn.includes('Verb-Final'));
assert.ok(nebensatzAnn, 'Must detect subordinate clause verb-final violation (weil ich bin krank)');

// Test 6c: Register Mismatch: Formal salutation + Informal closing
const letterWithMismatch = `Sehr geehrte Damen und Herren,\nich schreibe Ihnen wegen des Zimmers.\nLiebe Grüße,\nAli`;
const evalMismatch = evaluateStudentLetterB1(letterWithMismatch, 'hotel', 'en');
const mismatchAnn = evalMismatch.annotations.find(a => a.rule.includes('Register') || a.ruleEn.includes('Register'));
assert.ok(mismatchAnn, 'Must detect register mismatch between formal salutation and informal sign-off');
console.log('✅ telc B1 V2 Inversion, Subjunction Verb-Final, and Register Mismatch diagnostics verified.');

console.log('🎉 All Round 3 Syntax Guard & Pass Predictor tests passed successfully!');
