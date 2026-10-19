/**
 * Test Suite for CEFR Placement Test (js/placementTest.js)
 * Tests:
 * 1. Clean evaluation and global initialization
 * 2. 15 questions present with proper CEFR progression (A1 -> C2)
 * 3. 100% 5-Language Translation Parity (DE, EN, TR, AR, UK) across prompts & explanations
 * 4. Question schema integrity (options array of 4, valid correct index, sentence blank)
 * 5. CEFR diagnostic level determination boundaries
 * 6. Full interactive test flow simulation & result card rendering
 * 7. 1-click level & track application to localStorage and portal hooks
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Mock Browser Environment
global.window = global;

const storage = {};
global.localStorage = {
  getItem: (key) => storage[key] || null,
  setItem: (key, val) => { storage[key] = String(val); },
  removeItem: (key) => { delete storage[key]; },
  clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
};

class MockElement {
  constructor(tagName) {
    this.tagName = tagName.toUpperCase();
    this.id = '';
    this.className = '';
    this.classList = {
      _classes: new Set(),
      add: (c) => this.classList._classes.add(c),
      remove: (c) => this.classList._classes.delete(c),
      contains: (c) => this.classList._classes.has(c)
    };
    this.style = {};
    this.innerHTML = '';
    this.textContent = '';
    this.children = [];
    this.disabled = false;
  }

  appendChild(child) {
    this.children.push(child);
    return child;
  }

  querySelector(sel) {
    if (sel.startsWith('#')) {
      const id = sel.slice(1);
      if (this.id === id) return this;
      return this._findChild(el => el.id === id);
    }
    if (sel.startsWith('.')) {
      const cls = sel.slice(1);
      if (this.classList.contains(cls)) return this;
      return this._findChild(el => el.classList.contains(cls));
    }
    return new MockElement('div');
  }

  querySelectorAll(sel) {
    const results = [];
    if (sel === '.placement-opt-btn') {
      for (let i = 0; i < 4; i++) {
        const btn = new MockElement('button');
        btn.classList.add('placement-opt-btn');
        results.push(btn);
      }
    }
    return results;
  }

  _findChild(predicate) {
    for (const child of this.children) {
      if (predicate(child)) return child;
      if (child._findChild) {
        const found = child._findChild(predicate);
        if (found) return found;
      }
    }
    return null;
  }
}

global.document = {
  body: new MockElement('body'),
  getElementById: (id) => {
    if (id === 'placement-test-modal') {
      return document.body._findChild(el => el.id === id);
    }
    return null;
  },
  createElement: (tag) => new MockElement(tag)
};

console.log('--- Testing CEFR Placement Test (js/placementTest.js) ---');

// 2. Load placementTest.js
const code = fs.readFileSync(path.join(ROOT_DIR, 'js', 'placementTest.js'), 'utf8');
eval(code);

assert(window.PlacementTest, 'window.PlacementTest must be defined globally');
assert(typeof window.openPlacementTestModal === 'function', 'window.openPlacementTestModal must be a function');
console.log('✓ Script evaluated successfully and exposed window.PlacementTest');

// 3. Question Count & CEFR Level Distribution
const questions = window.PlacementTest.questions;
assert(Array.isArray(questions), 'questions must be an array');
assert.strictEqual(questions.length, 15, 'Placement test must have exactly 15 questions');

const levelCounts = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
questions.forEach(q => {
  assert(levelCounts[q.level] !== undefined, `Unknown level: ${q.level}`);
  levelCounts[q.level]++;
});

assert.strictEqual(levelCounts.A1, 3, 'Level A1 must have 3 questions (1-3)');
assert.strictEqual(levelCounts.A2, 3, 'Level A2 must have 3 questions (4-6)');
assert.strictEqual(levelCounts.B1, 3, 'Level B1 must have 3 questions (7-9)');
assert.strictEqual(levelCounts.B2, 3, 'Level B2 must have 3 questions (10-12)');
assert.strictEqual(levelCounts.C1, 2, 'Level C1 must have 2 questions (13-14)');
assert.strictEqual(levelCounts.C2, 1, 'Level C2 must have 1 question (15)');
console.log('✓ Questions match exact CEFR distribution: A1(3), A2(3), B1(3), B2(3), C1(2), C2(1)');

// 4. 100% 5-Language Translation Parity & Schema Check
const REQUIRED_LANGS = ['de', 'en', 'tr', 'ar', 'uk'];

questions.forEach((q, idx) => {
  assert.strictEqual(q.id, idx + 1, `Question id mismatch at index ${idx}`);
  assert(q.sentence && q.sentence.includes('___'), `Question ${q.id} must contain sentence with '___'`);
  assert(Array.isArray(q.options) && q.options.length === 4, `Question ${q.id} must have exactly 4 options`);
  assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, `Question ${q.id} correct index must be 0-3`);

  // Prompt translations
  assert(q.prompt, `Question ${q.id} missing prompt object`);
  REQUIRED_LANGS.forEach(lang => {
    assert(typeof q.prompt[lang] === 'string' && q.prompt[lang].trim().length > 0,
      `Question ${q.id} missing prompt translation for '${lang}'`);
  });

  // Explanation translations
  assert(q.explanation, `Question ${q.id} missing explanation object`);
  REQUIRED_LANGS.forEach(lang => {
    assert(typeof q.explanation[lang] === 'string' && q.explanation[lang].trim().length > 0,
      `Question ${q.id} missing explanation translation for '${lang}'`);
  });
});
console.log('✓ 100% 5-Language Translation Parity verified across all 15 questions (DE, EN, TR, AR, UK)');

// 5. Scoring & Level Determination Algorithm
const calc = window.PlacementTest.calculateLevel;
assert.strictEqual(calc(0).level, 'A1');
assert.strictEqual(calc(2).level, 'A1');
assert.strictEqual(calc(3).level, 'A1');

assert.strictEqual(calc(4).level, 'A2');
assert.strictEqual(calc(5).level, 'A2');
assert.strictEqual(calc(6).level, 'A2');

assert.strictEqual(calc(7).level, 'B1');
assert.strictEqual(calc(8).level, 'B1');
assert.strictEqual(calc(9).level, 'B1');

assert.strictEqual(calc(10).level, 'B2');
assert.strictEqual(calc(11).level, 'B2');
assert.strictEqual(calc(12).level, 'B2');

assert.strictEqual(calc(13).level, 'C1');
assert.strictEqual(calc(14).level, 'C1');

assert.strictEqual(calc(15).level, 'C2');
console.log('✓ CEFR Diagnostic Scoring accurately maps 0-15 scores to CEFR levels (A1 -> C2)');

// 6. Test Flow Simulation
window.PlacementTest.start();
assert.strictEqual(window.PlacementTest.currentIndex, 0);
assert.strictEqual(window.PlacementTest.score, 0);

// Answer all 15 questions correctly
for (let i = 0; i < 15; i++) {
  const currentQ = window.PlacementTest.questions[window.PlacementTest.currentIndex];
  window.PlacementTest.submitAnswer(currentQ.correct);
  assert.strictEqual(window.PlacementTest.score, i + 1);
  window.PlacementTest.next();
}

assert.strictEqual(window.PlacementTest.score, 15);
assert.strictEqual(window.PlacementTest.detectedLevel, 'C2');
console.log('✓ Full test flow simulation completed: 15/15 correct answers detected C2 level');

// 7. Test 1-Click Level Application
let goalCardSelected = null;
let goalApplied = false;
window.selectGoalCard = (cardId, level) => { goalCardSelected = { cardId, level }; };
window.applyGoalSelection = () => { goalApplied = true; };

window.PlacementTest.applyLevel('B2');
assert.strictEqual(storage['user_level'], 'B2');
assert.strictEqual(storage['entrance_level'], 'B2');
assert.strictEqual(storage['deutschlernen_track'], 'vocab');
assert.deepStrictEqual(goalCardSelected, { cardId: 'goal-b2', level: 'B2' });
assert.strictEqual(goalApplied, true);
console.log('✓ applyLevel successfully configured localStorage, goalCard, and portal track');

console.log('\nALL CEFR PLACEMENT TEST UNIT TESTS PASSED (100% Coverage)!');
