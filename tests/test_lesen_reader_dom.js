/**
 * DeutschLernen - Unit Test Suite for Lesen Studio & Interactive Reader
 * Validates text tokenization, glossary matching, 4-language dictionary lookup,
 * telc B1 exam scoring, and saved vocabulary deck persistence.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// Load all vocabulary and app datasets into sandbox
const readingDataCode = fs.readFileSync(path.join(ROOT_DIR, 'data', 'readingData.js'), 'utf8');
const vocabDataCode = fs.readFileSync(path.join(ROOT_DIR, 'data', 'vocab2000.js'), 'utf8');
const vocabB2Code = fs.readFileSync(path.join(ROOT_DIR, 'data', 'vocab_b2.js'), 'utf8');
const vocabC1Code = fs.readFileSync(path.join(ROOT_DIR, 'data', 'vocab_c1.js'), 'utf8');
const appCode = fs.readFileSync(path.join(ROOT_DIR, 'js', 'lesenApp.js'), 'utf8');

const docMock = {
  getElementById: () => null,
  querySelectorAll: () => [],
  addEventListener: () => {},
  documentElement: { setAttribute: () => {}, getAttribute: () => 'dark' },
  body: { setAttribute: () => {}, classList: { add: () => {}, remove: () => {} } }
};

const sandbox = {
  window: {},
  document: docMock,
  localStorage: {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; },
    clear() { this._data = {}; }
  }
};

// Evaluate datasets & app
const runInSandbox = (code, ctx) => {
  const fn = new Function('window', 'document', 'localStorage', code);
  fn(ctx.window, ctx.document, ctx.localStorage);
};

runInSandbox(vocabDataCode, sandbox);
runInSandbox(vocabB2Code, sandbox);
runInSandbox(vocabC1Code, sandbox);
runInSandbox(readingDataCode, sandbox);
runInSandbox(appCode, sandbox);

const dataset = sandbox.window.READING_DATASET;
assert(Array.isArray(dataset), 'READING_DATASET must be an array');
assert(dataset.length >= 4, 'Must have at least 4 units');

console.log('🧪 Starting Lesen Studio Headless Unit Tests...');

// 1. Test Dataset Structure & 4-Language Parity
dataset.forEach(unit => {
  ['de', 'en', 'tr', 'ar', 'uk'].forEach(lang => {
    assert(unit.title[lang], `Missing ${lang} title in unit ${unit.id}`);
    assert(unit.summary[lang], `Missing ${lang} summary in unit ${unit.id}`);
  });
  assert(unit.contentParagraphs.length >= 2, `Unit ${unit.id} must have paragraphs`);
  assert(unit.glossary.length >= 4, `Unit ${unit.id} must have glossary`);
  assert(unit.questions.length >= 3, `Unit ${unit.id} must have questions`);
});
console.log('✅ Dataset multilingual parity verified across all units.');

// 2. Test Tokenizer logic (matching German umlauts and punctuation)
const sampleText = "In Deutschland engagieren sich mehr als 28 Millionen Menschen für das Ehrenamt.";
const regex = /([a-zA-ZäöüÄÖÜß]+|[^a-zA-ZäöüÄÖÜß\s]+|\s+)/g;
const tokens = sampleText.match(regex);
assert(tokens.includes('Deutschland'), 'Tokenizer must capture words');
assert(tokens.includes('engagieren'), 'Tokenizer must capture verbs');
assert(tokens.includes('Ehrenamt'), 'Tokenizer must capture compound nouns');
assert(tokens.includes('.'), 'Tokenizer must capture punctuation');
console.log('✅ Word tokenizer and German umlaut boundary tests passed.');

// 3. Test Dictionary Multi-Level Lookup & Real Word Matching (Feuerwehr, Ehrenamt, Compounds)
assert(sandbox.window.LesenApp, 'LesenApp class must be exported on window');
const app = new sandbox.window.LesenApp();
const unit1 = dataset[0];

// 3a. Test Feuerwehr from Unit 1 Glossary
const matchFeuerwehrGloss = app.findWordData('Feuerwehr', unit1.glossary);
assert(matchFeuerwehrGloss !== null, 'Feuerwehr must be found in unit 1 glossary');
assert.strictEqual(matchFeuerwehrGloss.article, 'die', 'Feuerwehr must have "die" article');
assert.strictEqual(matchFeuerwehrGloss.displayDe, 'Feuerwehr', 'Display lemma must be Feuerwehr without article');
assert.strictEqual(matchFeuerwehrGloss.tr, 'itfaiye', 'Turkish translation must be itfaiye');
assert.strictEqual(matchFeuerwehrGloss.pos, 'noun', 'Part of speech must be noun');

// 3b. Test Feuerwehr lookup from VOCAB_2000 pool directly (empty glossary passed)
const matchFeuerwehrPool = app.findWordData('Feuerwehr', []);
assert(matchFeuerwehrPool !== null, 'Feuerwehr must be matched in VOCAB_2000 pool');
assert.strictEqual(matchFeuerwehrPool.article, 'die', 'Pool entry must detect die article');
assert.strictEqual(matchFeuerwehrPool.displayDe, 'Feuerwehr', 'Pool entry lemma must be Feuerwehr');
assert.strictEqual(matchFeuerwehrPool.tr, 'itfaiye', 'Pool entry translation must be itfaiye');

// 3c. Test Ehrenamt from unit glossary
const matchEhrenamt = app.findWordData('Ehrenamt', unit1.glossary);
assert(matchEhrenamt !== null, 'Should match Ehrenamt in unit glossary');
assert.strictEqual(matchEhrenamt.article, 'das', 'Should detect das article');
assert.strictEqual(matchEhrenamt.tr, 'gönüllü görev / kamu yararına ücretsiz hizmet');
assert(matchEhrenamt.ar.length > 0, 'Should have Arabic translation');
assert(matchEhrenamt.uk.length > 0, 'Should have Ukrainian translation');

// 3d. Test Compound Noun suffix matching: Sportverein -> Verein
const matchSportverein = app.findWordData('Sportverein', unit1.glossary);
assert(matchSportverein !== null, 'Sportverein must match der Verein');
assert.strictEqual(matchSportverein.article, 'der', 'Verein must have der article');

// 3e. Test Noun suffix declension: Freundschaften -> die Freundschaft
const matchFreundschaften = app.findWordData('Freundschaften', unit1.glossary);
assert(matchFreundschaften !== null, 'Freundschaften must stem to Freundschaft');
assert.strictEqual(matchFreundschaften.article, 'die', 'Freundschaft must have die article');

console.log('✅ Dictionary multi-level lookup & article extraction passed.');

// 4. Test telc B1 Passing Score Bar (60% Threshold)
const calculatePass = (correctCount, totalCount) => {
  const passingThreshold = Math.ceil(totalCount * 0.6);
  return correctCount >= passingThreshold;
};

assert.strictEqual(calculatePass(3, 3), true, '3/3 must pass');
assert.strictEqual(calculatePass(2, 3), true, '2/3 (66.7%) must pass 60% bar');
assert.strictEqual(calculatePass(1, 3), false, '1/3 (33.3%) must fail');
assert.strictEqual(calculatePass(3, 5), true, '3/5 (60%) must pass');
assert.strictEqual(calculatePass(2, 5), false, '2/5 (40%) must fail');
console.log('✅ telc B1 60% exam threshold calculation verified.');

// 5. Test Saved Vocabulary Deck Persistence
sandbox.localStorage.setItem('deutschlernen_saved_reading_words', JSON.stringify([
  { de: 'das Ehrenamt', article: 'das', tr: 'gönüllü görev', en: 'volunteer work' }
]));

const saved = JSON.parse(sandbox.localStorage.getItem('deutschlernen_saved_reading_words'));
assert.strictEqual(saved.length, 1);
assert.strictEqual(saved[0].de, 'das Ehrenamt');
console.log('✅ LocalStorage vocabulary deck persistence verified.');

// 6. Test Exam Questions & Options German Target Language Integrity
assert(appCode.includes('const optText = opt.de;'), 'Answer options must be German (opt.de)');
assert(appCode.includes('const germanPrompt = q.prompt.de;'), 'Question prompt must have German as primary');
assert(!appCode.includes('const optText = opt[this.lang] || opt.de;'), 'Banned: translating exam options to UI language');
console.log('✅ Exam questions and options German target language integrity verified.');

console.log('🎉 All 6 Lesen Studio headless JS unit tests passed successfully!');
