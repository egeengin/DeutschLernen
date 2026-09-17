/**
 * Headless Node.js Unit Test Suite for DeutschLernen Frontend JS.
 * Tests:
 * - Clean evaluation and zero syntax/ReferenceErrors in vocabTrainer.js & datasets
 * - Speech synthesis safety (no undefined variables such as 'rate')
 * - Deck generation and 4-choice distractor generation across all 6 modes
 * - DOM event bindings and answer checking
 * - SRS progress updates
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Mock Browser Environment
global.window = global;
const windowListeners = {};
global.window.addEventListener = (evt, fn) => {
  windowListeners[evt] = windowListeners[evt] || [];
  windowListeners[evt].push(fn);
};
global.window.removeEventListener = (evt, fn) => {
  if (windowListeners[evt]) {
    windowListeners[evt] = windowListeners[evt].filter(f => f !== fn);
  }
};
global.window.dispatchMockEvent = (evt, data) => {
  (windowListeners[evt] || []).forEach(fn => fn(data));
};

class MockAudioContext {
  constructor() {
    this.state = 'suspended';
    this.currentTime = 0;
    this.destination = {};
  }
  resume() { this.state = 'running'; }
  createOscillator() {
    return {
      type: 'sine',
      frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
      connect: () => {},
      start: () => {},
      stop: () => {}
    };
  }
  createGain() {
    return {
      gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
      connect: () => {}
    };
  }
}
global.window.AudioContext = MockAudioContext;
global.window.webkitAudioContext = MockAudioContext;

const storage = {};
global.localStorage = {
  getItem: (k) => (k in storage ? storage[k] : null),
  setItem: (k, v) => { storage[k] = String(v); },
  removeItem: (k) => { delete storage[k]; },
  clear: () => { for (const k in storage) delete storage[k]; }
};

function createMockElement(id = '', tag = 'div') {
  const listeners = {};
  const classes = new Set();
  let children = [];

  const el = {
    id,
    tagName: tag.toUpperCase(),
    textContent: '',
    disabled: false,
    value: '',
    style: {},
    dataset: {},
    get children() { return children; },
    get className() { return Array.from(classes).join(' '); },
    set className(val) {
      classes.clear();
      if (val) val.split(/\s+/).forEach(c => c && classes.add(c));
    },
    get innerHTML() { return el._html || ''; },
    set innerHTML(html) {
      el._html = html;
      if (html === '') children = [];
    },
    classList: {
      add: (...cls) => cls.forEach(c => classes.add(c)),
      remove: (...cls) => cls.forEach(c => classes.delete(c)),
      toggle: (c, force) => {
        if (force === undefined) {
          classes.has(c) ? classes.delete(c) : classes.add(c);
        } else if (force) {
          classes.add(c);
        } else {
          classes.delete(c);
        }
      },
      contains: (c) => classes.has(c)
    },
    setAttribute: (k, v) => { el.dataset[k] = v; },
    getAttribute: (k) => el.dataset[k] || null,
    appendChild: (child) => { children.push(child); return child; },
    addEventListener: (evt, handler) => {
      listeners[evt] = listeners[evt] || [];
      listeners[evt].push(handler);
    },
    click: () => {
      if (listeners['click']) listeners['click'].forEach(fn => fn({ target: el }));
    },
    querySelectorAll: (sel) => {
      if (sel === '.quiz-option-btn') return children.filter(c => c.classList.contains('quiz-option-btn'));
      if (sel === '.mode-chip') return [];
      return [];
    },
    querySelector: (sel) => {
      if (sel === '.opt-text') return { textContent: el._html || el.textContent };
      return null;
    },
    focus: () => {}
  };
  return el;
}

const mockDomElements = {};
global.document = {
  readyState: 'complete',
  addEventListener: () => {},
  documentElement: createMockElement('html'),
  body: createMockElement('body'),
  getElementById: (id) => {
    if (!mockDomElements[id]) mockDomElements[id] = createMockElement(id);
    return mockDomElements[id];
  },
  querySelectorAll: (sel) => [],
  createElement: (tag) => createMockElement('', tag)
};

// Mock SpeechSynthesis
global.SpeechSynthesisUtterance = function (text) {
  this.text = text;
  this.rate = 1;
  this.lang = 'de-DE';
};
global.speechSynthesis = {
  cancel: () => {},
  speak: (utter) => {},
  getVoices: () => []
};

// 2. Load Datasets & VocabTrainer Engine
console.log('▶ Evaluating data/vocab2000.js...');
eval(fs.readFileSync(path.join(ROOT_DIR, 'data', 'vocab2000.js'), 'utf8'));
assert(Array.isArray(global.VOCAB_2000), 'VOCAB_2000 must be an array');
assert.strictEqual(global.VOCAB_2000.length, 2000, 'VOCAB_2000 must contain exactly 2000 items');

console.log('▶ Evaluating data/vocab_b2.js...');
eval(fs.readFileSync(path.join(ROOT_DIR, 'data', 'vocab_b2.js'), 'utf8'));
assert(Array.isArray(global.VOCAB_B2), 'VOCAB_B2 must be an array');
assert(global.VOCAB_B2.length >= 50, 'VOCAB_B2 must contain >= 50 items');

console.log('▶ Evaluating data/vocab_c1.js...');
eval(fs.readFileSync(path.join(ROOT_DIR, 'data', 'vocab_c1.js'), 'utf8'));
assert(Array.isArray(global.VOCAB_C1), 'VOCAB_C1 must be an array');
assert(global.VOCAB_C1.length >= 40, 'VOCAB_C1 must contain >= 40 items');

console.log('▶ Evaluating js/vocabTrainer.js...');
eval(fs.readFileSync(path.join(ROOT_DIR, 'js', 'vocabTrainer.js'), 'utf8'));
assert(global.VocabApp, 'VocabApp must be instantiated globally');

// 3. Test Speech Synthesis Functionality & Error-Resilience
console.log('▶ Testing playSpeech method...');
assert.doesNotThrow(() => {
  global.VocabApp.playSpeech('gehen');
  global.VocabApp.playSpeech('schlafen (schläft, schlief)', 0.85);
  global.VocabApp.playSpeech('');
  global.VocabApp.playSpeech(null);
}, 'playSpeech must never throw an uncaught exception');

// 4. Test Quiz Modes & Distractor Generation
const modes = ['de_meaning', 'meaning_de', 'synonyms', 'antonyms', 'mistakes', 'sprint'];
const pool = global.VocabApp.getAllWordsPool();

console.log('▶ Testing distractor and options generation across all 6 modes...');
modes.forEach(mode => {
  global.VocabApp.settings.mode = mode;
  global.VocabApp.settings.deck = 'all';

  // Find an eligible item for mode
  let sampleItem;
  if (mode === 'synonyms') {
    sampleItem = pool.find(w => w.synonyms && w.synonyms.length > 0);
  } else if (mode === 'antonyms') {
    sampleItem = pool.find(w => w.antonyms && w.antonyms.length > 0);
  } else {
    sampleItem = pool[0];
  }

  assert(sampleItem, `Must find an eligible word for mode '${mode}'`);

  const correctAnswer = (mode === 'meaning_de') 
    ? sampleItem.de 
    : (mode === 'synonyms' ? sampleItem.synonyms[0] : (mode === 'antonyms' ? sampleItem.antonyms[0] : sampleItem.tr));

  const options = global.VocabApp.generateOptions(sampleItem, correctAnswer);
  assert.strictEqual(options.length, 4, `Mode '${mode}' must generate exactly 4 options`);
  assert(options.includes(correctAnswer), `Options in mode '${mode}' must include the correct answer`);
  const uniqueCount = new Set(options).size;
  assert.strictEqual(uniqueCount, 4, `All 4 options in mode '${mode}' must be unique`);
});

// 5. Test Live Question Rendering & Answering Flow
console.log('▶ Testing full question render & answer cycle...');
global.VocabApp.settings.mode = 'de_meaning';
global.VocabApp.startNewDeck();
assert(global.VocabApp.currentDeck.length > 0, 'Current deck must not be empty');

const firstItem = global.VocabApp.currentDeck[0];
const correctAnswerText = global.VocabApp.settings.lang === 'en' ? firstItem.en : firstItem.tr;

// Check options were rendered into optionsGrid
const optionBtns = global.VocabApp.dom.optionsGrid.querySelectorAll('.quiz-option-btn');
assert.strictEqual(optionBtns.length, 4, 'Options grid must contain 4 buttons');

// Click correct button
const matchingBtn = optionBtns.find(b => b.innerHTML.includes(correctAnswerText)) || optionBtns[0];
assert.doesNotThrow(() => {
  matchingBtn.click();
}, 'Clicking an option button must execute without error');

assert(global.VocabApp.hasAnswered, 'App must register answered state');
assert(global.VocabApp.sessionCorrect + global.VocabApp.sessionWrong === 1, 'Total answered count must be 1');

// Next card
assert.doesNotThrow(() => {
  global.VocabApp.nextCard();
}, 'Advancing to next card must execute without error');
assert.strictEqual(global.VocabApp.currentIndex, 1, 'Card index must advance to 1');

// 6. Test Multi-Level CEFR Filtering (A1, A2, B1, B2)
console.log('▶ Testing CEFR level filtering and B2 deck integration...');
global.VocabApp.settings.level = 'B2';
const b2Pool = global.VocabApp.getAllWordsPool();
assert(b2Pool.length >= 50, 'B2 pool must contain >= 50 words when level is B2');
const b2Deck = global.VocabApp.deckGenerator.generateDeck(b2Pool, { level: 'B2', deckSize: 10 });
assert(b2Deck.length > 0, 'Must generate a non-empty deck for B2 level');
b2Deck.forEach(card => {
  assert.strictEqual(card.level, 'B2', `Deck card level must be B2, got ${card.level}`);
});

global.VocabApp.settings.level = 'A1';
const a1Pool = global.VocabApp.getAllWordsPool();
const a1Deck = global.VocabApp.deckGenerator.generateDeck(a1Pool, { level: 'A1', deckSize: 10 });
assert(a1Deck.length > 0, 'Must generate a non-empty deck for A1 level');
a1Deck.forEach(card => {
  assert.strictEqual(card.level, 'A1', `Deck card level must be A1, got ${card.level}`);
});

// 6b. Test C1 level filtering
global.VocabApp.settings.level = 'C1';
const c1Pool = global.VocabApp.getAllWordsPool();
assert(c1Pool.length >= 40, 'C1 pool must contain >= 40 words when level is C1');
const c1Deck = global.VocabApp.deckGenerator.generateDeck(c1Pool, { level: 'C1', deckSize: 10 });
assert(c1Deck.length > 0, 'Must generate a non-empty deck for C1 level');
c1Deck.forEach(card => {
  assert.strictEqual(card.level, 'C1', `Deck card level must be C1, got ${card.level}`);
});

// 6c. Test 'all' deck includes C1 words
global.VocabApp.settings.level = 'ALL';
global.VocabApp.settings.deck = 'all';
const allPool = global.VocabApp.getAllWordsPool();
assert(allPool.length > 2050, `'all' deck pool must include core + B2 + C1 words, got ${allPool.length}`);

// 7. Test Multilingual Support (Arabic & Ukrainian)
console.log('▶ Testing multilingual I18N and helper methods (AR & UK)...');
const sampleWord = global.VOCAB_2000[0];
assert(sampleWord.hasOwnProperty('ar'), 'VOCAB_2000 entries must have an "ar" property');
assert(sampleWord.hasOwnProperty('uk'), 'VOCAB_2000 entries must have a "uk" property');
assert(sampleWord.hasOwnProperty('example_ar'), 'VOCAB_2000 entries must have an "example_ar" property');
assert(sampleWord.hasOwnProperty('example_uk'), 'VOCAB_2000 entries must have an "example_uk" property');

// Test getMeaning & getExample
global.VocabApp.settings.lang = 'ar';
assert.strictEqual(global.VocabApp.getMeaning(sampleWord), sampleWord.ar || sampleWord.en, 'getMeaning for AR must return Arabic or English fallback');
assert.strictEqual(global.VocabApp.getExample(sampleWord), sampleWord.example_ar || sampleWord.example_en, 'getExample for AR must return Arabic or English fallback');

global.VocabApp.settings.lang = 'uk';
assert.strictEqual(global.VocabApp.getMeaning(sampleWord), sampleWord.uk || sampleWord.en, 'getMeaning for UK must return Ukrainian or English fallback');
assert.strictEqual(global.VocabApp.getExample(sampleWord), sampleWord.example_uk || sampleWord.example_en, 'getExample for UK must return Ukrainian or English fallback');

// Test language switching
assert.doesNotThrow(() => {
  global.VocabApp.setLanguage('ar');
  assert.strictEqual(global.VocabApp.settings.lang, 'ar');
  global.VocabApp.setLanguage('uk');
  assert.strictEqual(global.VocabApp.settings.lang, 'uk');
  global.VocabApp.setLanguage('en');
}, 'Switching between AR, UK, and EN must execute cleanly');

// 8. Test switchMode & Review Queue Shortcuts
console.log('▶ Testing switchMode and mode change interactions...');
assert.doesNotThrow(() => {
  global.VocabApp.switchMode('mistakes');
  assert.strictEqual(global.VocabApp.settings.mode, 'mistakes');
  global.VocabApp.switchMode('de_meaning');
  assert.strictEqual(global.VocabApp.settings.mode, 'de_meaning');
}, 'switchMode should cleanly update mode and trigger deck reload');

// 9. Test Audio Feedback Synthesizer
console.log('▶ Testing Web Audio synthesizer feedback (chime & buzz)...');
assert.doesNotThrow(() => {
  global.VocabApp.settings.audio = true;
  global.VocabApp.playAudioFeedback(true);
  global.VocabApp.playAudioFeedback(false);
  global.VocabApp.settings.audio = false;
  global.VocabApp.playAudioFeedback(true); // Should gracefully no-op when audio is false
  global.VocabApp.settings.audio = true;
}, 'playAudioFeedback should run cleanly without throwing');

// 10. Test Keyboard Navigation & Shortcuts
console.log('▶ Testing keyboard navigation and modal hotkeys...');
assert.doesNotThrow(() => {
  // Ensure search modal starts hidden
  global.VocabApp.dom.searchModal.classList.add('hidden');

  // Press D to open search modal
  global.window.dispatchMockEvent('keydown', { key: 'd', preventDefault: () => {}, target: { tagName: 'DIV' } });
  assert(!global.VocabApp.dom.searchModal.classList.contains('hidden'), 'Pressing D must open the dictionary modal');

  // Press Escape to close search modal
  global.window.dispatchMockEvent('keydown', { key: 'Escape', preventDefault: () => {}, target: { tagName: 'DIV' } });
  assert(global.VocabApp.dom.searchModal.classList.contains('hidden'), 'Pressing Escape must close the dictionary modal');

  // Press R to switch to mistakes mode
  global.window.dispatchMockEvent('keydown', { key: 'r', preventDefault: () => {}, target: { tagName: 'DIV' } });
  assert.strictEqual(global.VocabApp.settings.mode, 'mistakes', 'Pressing R must activate mistakes review mode');
  global.VocabApp.switchMode('de_meaning');

  // Hotkeys should be ignored when target is an input field
  global.window.dispatchMockEvent('keydown', { key: '1', preventDefault: () => {}, target: { tagName: 'INPUT' } });
}, 'Keyboard shortcuts must handle modal toggles and input isolation safely');

// 11. Test Spaced Repetition (SRS) SM-2 Algorithm
console.log('▶ Testing SRS SM-2 progressive interval & mistake queuing logic...');
const sm = global.VocabApp.sessionManager;
const testWordId = 99999;

// Wrong answer should set status to review, interval 1, reset streak
const wrongRes = sm.recordResult(testWordId, false);
assert.strictEqual(wrongRes.status, 'review', 'Wrong answer must move item to review status');
assert.strictEqual(wrongRes.streak, 0, 'Wrong answer must reset streak to 0');
assert.strictEqual(wrongRes.interval, 1, 'Wrong answer interval must reset to 1 day');
assert(wrongRes.easeFactor <= 2.3, 'Wrong answer must decrease easeFactor');

// 1st correct answer: streak 1, interval 1
const c1Res = sm.recordResult(testWordId, true);
assert.strictEqual(c1Res.status, 'learning', '1st correct answer status should be learning');
assert.strictEqual(c1Res.streak, 1, 'Streak should be 1');
assert.strictEqual(c1Res.interval, 1, 'Interval should be 1');

// 2nd correct answer: streak 2, interval 3
const c2Res = sm.recordResult(testWordId, true);
assert.strictEqual(c2Res.streak, 2, 'Streak should be 2');
assert.strictEqual(c2Res.interval, 3, 'Interval should increase to 3 days');

// 3rd correct answer: streak 3, interval 7, status mastered
const c3Res = sm.recordResult(testWordId, true);
assert.strictEqual(c3Res.streak, 3, 'Streak should be 3');
assert.strictEqual(c3Res.interval, 7, 'Interval should increase to 7 days');
assert.strictEqual(c3Res.status, 'mastered', '3 consecutive correct answers must advance item to mastered');

// 12. Test Timed Sprint Drill Engine
console.log('▶ Testing Timed Sprint drill engine...');
assert.doesNotThrow(() => {
  global.VocabApp.startSprintMode();
  assert.strictEqual(global.VocabApp.settings.mode, 'sprint', 'Sprint mode setting must be sprint');
  assert.strictEqual(global.VocabApp.sprintTimeRemaining, 120, 'Sprint initial timer must be 120 seconds');
  assert.strictEqual(global.VocabApp.sprintCardsAnswered, 0, 'Initial sprint answers must be 0');

  // Manually stop sprint timer to clean up interval
  global.VocabApp.stopSprintTimer();
  global.VocabApp.switchMode('de_meaning');
}, 'Timed Sprint mode must initialize and clean up cleanly');

// 13. Test Multi-Level Dictionary Search
console.log('▶ Testing multi-level dictionary search (DE, TR, EN, AR, UK)...');
assert.doesNotThrow(() => {
  global.VocabApp.openSearchModal();
  assert(!global.VocabApp.dom.searchModal.classList.contains('hidden'), 'Search modal must be visible');

  // Empty query should return first 50 results
  global.VocabApp.filterSearchResults('');
  assert(global.VocabApp.dom.searchResults.innerHTML.includes('search-result-row'), 'Empty search must render preview rows');

  // Query for B2/C1 academic words
  global.VocabApp.filterSearchResults('differenzieren');
  assert(global.VocabApp.dom.searchResults.innerHTML.includes('differenzieren'), 'Search for "differenzieren" should return results');

  global.VocabApp.filterSearchResults('implizieren');
  assert(global.VocabApp.dom.searchResults.innerHTML.includes('implizieren'), 'Search for "implizieren" should return results');

  // Search across languages
  global.VocabApp.filterSearchResults('kitap');
  global.VocabApp.filterSearchResults('book');

  global.VocabApp.closeSearchModal();
  assert(global.VocabApp.dom.searchModal.classList.contains('hidden'), 'Search modal must be hidden after closing');
}, 'Dictionary search must work across all language fields');

// 14. Test Progress Export and Backup Portability
console.log('▶ Testing progress export and backup data structure...');
assert.doesNotThrow(() => {
  const exportData = {
    version: 2,
    timestamp: new Date().toISOString(),
    progress: sm.getProgressMap(),
    sessions: sm.sessionData,
    settings: sm.getSettings()
  };
  assert(exportData.progress.hasOwnProperty(String(testWordId)), 'Export data must contain recorded test word');
  assert(exportData.sessions.totalSessions >= 1, 'Export data must include session history');
}, 'Export data structure must be complete and valid');

console.log('✅ All Headless Frontend JS Unit Tests Passed successfully!');


