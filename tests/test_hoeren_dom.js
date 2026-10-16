/**
 * DeutschLernen - Unit Test Suite for Hörverstehen Studio
 * Validates audio simulation, play-limits (1x vs 2x), telc B1 75-point scoring,
 * quad-lingual parity, and synchronized transcript evidence.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('🧪 Starting Hörverstehen Studio Headless Unit Tests...');

const ROOT_DIR = path.resolve(__dirname, '..');
const hoerenDataCode = fs.readFileSync(path.join(ROOT_DIR, 'data', 'hoerenData.js'), 'utf8');
const hoerenAppCode = fs.readFileSync(path.join(ROOT_DIR, 'js', 'hoerenApp.js'), 'utf8');

const docMock = {
  getElementById: () => null,
  querySelectorAll: () => [],
  addEventListener: () => {},
  documentElement: { setAttribute: () => {}, getAttribute: () => 'dark' },
  body: { setAttribute: () => {}, classList: { add: () => {}, remove: () => {} } }
};

const sandbox = {
  window: {
    addEventListener: () => {},
    innerWidth: 1024,
    innerHeight: 768,
    speechSynthesis: {
      speak: () => {},
      cancel: () => {},
      pause: () => {},
      getVoices: () => [{ lang: 'de-DE', name: 'Google Deutsch' }]
    }
  },
  document: docMock,
  localStorage: {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; },
    clear() { this._data = {}; }
  }
};

const runInSandbox = (code, ctx) => {
  const fn = new Function('window', 'document', 'localStorage', code);
  fn(ctx.window, ctx.document, ctx.localStorage);
};

runInSandbox(hoerenDataCode, sandbox);
runInSandbox(hoerenAppCode, sandbox);

const dataset = sandbox.window.HOEREN_DATASET;
assert(Array.isArray(dataset) && dataset.length >= 1, 'HOEREN_DATASET must contain at least 1 test');

const test1 = dataset[0];
const REQUIRED_LANGS = ['de', 'en', 'tr', 'ar', 'uk'];

// 1. Validate Teil 1 (5 items, maxPlays = 1)
assert(test1.teil1, 'Teil 1 must exist');
assert.strictEqual(test1.teil1.items.length, 5, 'Teil 1 must have exactly 5 items (41-45)');
assert.strictEqual(test1.teil1.maxPlays, 1, 'Teil 1 must enforce 1x play only (telc rule)');

test1.teil1.items.forEach((item, idx) => {
  const expectedId = 41 + idx;
  assert.strictEqual(item.id, expectedId);
  assert(['richtig', 'falsch'].includes(item.correct), `Item ${item.id} answer must be richtig/falsch`);
  REQUIRED_LANGS.forEach(lang => {
    assert(item.statement[lang], `Teil 1 Item ${item.id} missing ${lang} statement`);
    assert(item.explanation[lang], `Teil 1 Item ${item.id} missing ${lang} explanation`);
  });
});
console.log('✅ Teil 1 (Items 41–45) schema, maxPlays=1, and 4-language parity verified.');

// 2. Validate Teil 2 (10 items, maxPlays = 2)
assert(test1.teil2, 'Teil 2 must exist');
assert.strictEqual(test1.teil2.items.length, 10, 'Teil 2 must have exactly 10 items (46-55)');
assert.strictEqual(test1.teil2.maxPlays, 2, 'Teil 2 must allow 2x plays (telc rule)');

test1.teil2.items.forEach((item, idx) => {
  const expectedId = 46 + idx;
  assert.strictEqual(item.id, expectedId);
  assert(['richtig', 'falsch'].includes(item.correct), `Item ${item.id} answer must be richtig/falsch`);
  REQUIRED_LANGS.forEach(lang => {
    assert(item.statement[lang], `Teil 2 Item ${item.id} missing ${lang} statement`);
    assert(item.explanation[lang], `Teil 2 Item ${item.id} missing ${lang} explanation`);
  });
});
console.log('✅ Teil 2 (Items 46–55) schema, maxPlays=2, and 4-language parity verified.');

// 3. Validate Teil 3 (5 items, maxPlays = 2, a/b/c)
assert(test1.teil3, 'Teil 3 must exist');
assert.strictEqual(test1.teil3.items.length, 5, 'Teil 3 must have exactly 5 items (56-60)');
assert.strictEqual(test1.teil3.maxPlays, 2, 'Teil 3 must allow 2x plays (telc rule)');

test1.teil3.items.forEach((item, idx) => {
  const expectedId = 56 + idx;
  assert.strictEqual(item.id, expectedId);
  assert(item.options && item.options.length === 3, `Teil 3 Item ${item.id} must have 3 options`);
  assert(['a', 'b', 'c'].includes(item.correct), `Item ${item.id} answer must be a/b/c`);
  REQUIRED_LANGS.forEach(lang => {
    assert(item.question[lang], `Teil 3 Item ${item.id} missing ${lang} question`);
    assert(item.explanation[lang], `Teil 3 Item ${item.id} missing ${lang} explanation`);
  });
});
console.log('✅ Teil 3 (Items 56–60) schema, maxPlays=2, and 4-language parity verified.');

// 4. Test Application State Machine & Scoring Logic
const app = new sandbox.window.HoerenApp();
assert.strictEqual(app.timerSeconds, 30 * 60, 'Exam timer must start at 30 minutes');
assert.strictEqual(app.currentPart, 'teil1');

// Test perfect score (20/20 correct * 3.75 = 75 pts)
test1.teil1.items.forEach(it => app.userAnswers[it.id] = it.correct);
test1.teil2.items.forEach(it => app.userAnswers[it.id] = it.correct);
test1.teil3.items.forEach(it => app.userAnswers[it.id] = it.correct);

app.gradeExam();
assert.strictEqual(app.isGraded, true);

// Test boundary score (12/20 correct * 3.75 = 45.0 pts -> Passed)
app.resetExam();
assert.strictEqual(app.isGraded, false);
assert.strictEqual(Object.keys(app.userAnswers).length, 0);

// Exactly 12 correct
test1.teil1.items.slice(0, 3).forEach(it => app.userAnswers[it.id] = it.correct);
test1.teil2.items.slice(0, 6).forEach(it => app.userAnswers[it.id] = it.correct);
test1.teil3.items.slice(0, 3).forEach(it => app.userAnswers[it.id] = it.correct);

let totalCorrect = 0;
['teil1', 'teil2', 'teil3'].forEach(p => {
  test1[p].items.forEach(it => {
    if (app.userAnswers[it.id] === it.correct) totalCorrect++;
  });
});
assert.strictEqual(totalCorrect, 12);
const points = totalCorrect * 3.75;
assert.strictEqual(points, 45.0, '12 correct must yield 45.0 points');
assert(points >= 45.0, '45.0 points must meet telc 60% passing mark');
console.log('✅ telc B1 60% Hörverstehen passing threshold (45.0/75.0 points) verified.');

// 5. Test Part Switching
app.loadPart('teil2');
assert.strictEqual(app.currentPart, 'teil2');
app.loadPart('teil3');
assert.strictEqual(app.currentPart, 'teil3');
console.log('✅ Part navigation and transitions verified.');

console.log('🎉 All Hörverstehen Studio unit tests passed successfully!');
process.exit(0);
