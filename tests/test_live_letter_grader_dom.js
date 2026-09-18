/**
 * End-to-End DOM & Token Safety Test Suite for Live AI Letter Grader (Option A & B).
 * Verifies:
 * 1. ZERO token usage during Option A evaluation (100% client-side, 0 network calls).
 * 2. Full interactive DOM rendering of Tab 2 (Prompt selector, B1 connectors palette, textarea).
 * 3. Complete live grading scorecard output (Score circle, Pass/Fail badge, 3 criteria bars, inline annotations, B1 upgrades).
 * 4. Direct AI settings drawer toggle, provider selection, and localStorage persistence (Option B).
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Mock Browser Environment & DOM
global.window = global;
const storage = {};
global.localStorage = {
  getItem: (k) => (storage[k] !== undefined ? storage[k] : null),
  setItem: (k, v) => { storage[k] = String(v); },
  removeItem: (k) => { delete storage[k]; },
  clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
};

// Track any network fetch calls to strictly verify ZERO token / ZERO network requests for Option A
let networkFetchCallCount = 0;
global.fetch = async (url, opts) => {
  networkFetchCallCount++;
  return { ok: true, json: async () => ({}) };
};

// Simple DOM node mock
class MockElement {
  constructor(tag, id = '', className = '') {
    this.tagName = (tag || 'DIV').toUpperCase();
    this.id = id;
    this.className = className;
    this.classList = {
      _classes: new Set(className.split(' ').filter(Boolean)),
      add: function(c) { this._classes.add(c); },
      remove: function(c) { this._classes.delete(c); },
      contains: function(c) { return this._classes.has(c); }
    };
    this.attributes = {};
    this.children = [];
    this.parentElement = null;
    this.style = {};
    this.innerHTML = '';
    this.value = '';
    this.textContent = '';
  }

  getAttribute(attr) { return this.attributes[attr] || null; }
  setAttribute(attr, val) { this.attributes[attr] = String(val); }
  removeAttribute(attr) { delete this.attributes[attr]; }
  scrollIntoView() {}
  focus() {}

  querySelector(sel) {
    return this._findFirst(sel);
  }

  querySelectorAll(sel) {
    const list = [];
    this._findAll(sel, list);
    return list;
  }

  _findFirst(sel) {
    const list = [];
    this._findAll(sel, list);
    return list[0] || null;
  }

  _findAll(sel, list) {
    for (const child of this.children) {
      if (this._matches(child, sel)) {
        list.push(child);
      }
      if (child._findAll) {
        child._findAll(sel, list);
      }
    }
  }

  _matches(el, sel) {
    if (sel.startsWith('#') && el.id === sel.slice(1)) return true;
    if (sel.startsWith('.') && el.classList && el.classList.contains(sel.slice(1))) return true;
    if (sel.toLowerCase() === el.tagName.toLowerCase()) return true;
    return false;
  }

  appendChild(child) {
    child.parentElement = this;
    this.children.push(child);
    return child;
  }
}

// Minimal DOM document
const domElementsById = {};
global.document = {
  createElement: (tag) => new MockElement(tag),
  getElementById: (id) => domElementsById[id] || null,
  querySelectorAll: (sel) => {
    return Object.values(domElementsById).filter(el => {
      if (sel.startsWith('.')) return el.classList && el.classList.contains(sel.slice(1));
      return false;
    });
  },
  body: new MockElement('BODY')
};

// 2. Load Sample Evaluation Data & Schreiben Showcase
const { SAMPLE_B1_EVALUATION } = require(path.join(ROOT_DIR, 'js', 'sampleEvaluationData.js'));
global.SAMPLE_B1_EVALUATION = SAMPLE_B1_EVALUATION;

const showcase = require(path.join(ROOT_DIR, 'js', 'schreibenShowcase.js'));
Object.assign(global, showcase);

console.log('▶ Evaluating Live Letter Grader Test Suite...');

// 3. Test DOM Setup & Initial Render
const mainContainer = new MockElement('DIV', 'schreiben-container');
domElementsById['schreiben-container'] = mainContainer;

renderSchreibenShowcase('schreiben-container');
assert.ok(mainContainer.innerHTML.length > 500, 'Render output should contain full HTML markup');
assert.ok(mainContainer.innerHTML.includes('tab-content-live'), 'Should render Tab 2 for Live AI Letter Grader');

// Setup interactive DOM references that exist in index.html
const textarea = new MockElement('TEXTAREA', 'student-letter-textarea');
domElementsById['student-letter-textarea'] = textarea;

const promptSelect = new MockElement('SELECT', 'prompt-select-input');
promptSelect.value = 'marianne';
domElementsById['prompt-select-input'] = promptSelect;

const wordCountEl = new MockElement('SPAN', 'letter-word-count');
domElementsById['letter-word-count'] = wordCountEl;

const charCountEl = new MockElement('SPAN', 'letter-char-count');
domElementsById['letter-char-count'] = charCountEl;

const connCountEl = new MockElement('SPAN', 'letter-connector-count');
domElementsById['letter-connector-count'] = connCountEl;

const resultsContainer = new MockElement('DIV', 'live-results-container');
domElementsById['live-results-container'] = resultsContainer;

const aiDrawer = new MockElement('DIV', 'ai-settings-drawer');
domElementsById['ai-settings-drawer'] = aiDrawer;

const aiProviderSelect = new MockElement('SELECT', 'ai-provider-select');
aiProviderSelect.value = 'openai';
domElementsById['ai-provider-select'] = aiProviderSelect;

const aiApiKeyInput = new MockElement('INPUT', 'ai-api-key-input');
domElementsById['ai-api-key-input'] = aiApiKeyInput;

const aiSettingsMsg = new MockElement('DIV', 'ai-settings-msg');
domElementsById['ai-settings-msg'] = aiSettingsMsg;

// 4. Test Token Safety: Option A must use ZERO network fetch calls
const initialFetchCount = networkFetchCallCount;

// Test with student draft containing real-world B1 mistakes (inversion, spelling, case)
textarea.value = SAMPLE_B1_EVALUATION.studentSubmission.rawText;
assert.ok(textarea.value.includes('Liebe Marianne'), 'Textarea should contain Marianne student draft');

// Run Live Grading (Option A)
submitLiveLetterGrading();

// Verify ZERO network calls were made
assert.strictEqual(
  networkFetchCallCount,
  initialFetchCount,
  'CRITICAL TOKEN SAFETY: Option A live grading must execute 100% locally with ZERO API requests and ZERO token cost!'
);
console.log('✅ Token Safety Verified: Option A made 0 network calls and consumed 0 tokens.');

// 5. Verify Scorecard in #live-results-container
const resultHtml = resultsContainer.innerHTML;
assert.ok(resultHtml.length > 200, 'Results container should contain the live evaluation scorecard');
assert.ok(resultHtml.includes('telc B1 Live Evaluation Scorecard'), 'Should display Scorecard title');
assert.ok(resultHtml.includes('BESTANDEN'), 'Marianne letter should pass telc B1 threshold');
assert.ok(resultHtml.includes('/45'), 'Score should be calculated out of 45');
assert.ok(resultHtml.includes('Criterion I'), 'Should render Criterion I (Aufgabenbewältigung)');
assert.ok(resultHtml.includes('Criterion II'), 'Should render Criterion II (Kommunikative Gestaltung)');
assert.ok(resultHtml.includes('Criterion III'), 'Should render Criterion III (Formale Richtigkeit)');
assert.ok(resultHtml.includes('annotation-mark'), 'Should render inline annotation highlights for flagged student mistakes');
assert.ok(resultHtml.includes('upgrade-card'), 'Should render B1 sentence upgrades section');
console.log('✅ DOM Output Verified: Scorecard, 3 Criteria, Annotations, and Upgrades all rendered properly.');

let lastAlert = '';
global.alert = (msg) => { lastAlert = msg; };

// 6. Test Short Failing Letter (Edge Case with >20 words but lacking B1 criteria)
textarea.value = "Hallo, ich bin müde. Ich habe keine Lust auf Reisen. Ich gehe jetzt nach Hause und ich esse eine Suppe. Das ist alles für heute. Auf Wiedersehen mein Freund.";
submitLiveLetterGrading();
const failHtml = resultsContainer.innerHTML;
assert.ok(failHtml.includes('NICHT BESTANDEN'), 'Deficient letter must be flagged as NICHT BESTANDEN');
console.log('✅ Grading Precision Verified: Deficient letter correctly flagged with failing score deduction.');

// 7. Test Option B: AI Settings Drawer & LocalStorage Persistence
toggleAiSettingsDrawer();
assert.strictEqual(aiDrawer.style.display, 'block', 'AI Settings Drawer should expand on toggle');

aiApiKeyInput.value = 'sk-test-key-12345';
aiProviderSelect.value = 'gemini';
saveAiSettings();

assert.strictEqual(localStorage.getItem('deutschlernen_ai_key'), 'sk-test-key-12345', 'API key should persist in localStorage');
assert.strictEqual(localStorage.getItem('deutschlernen_ai_provider'), 'gemini', 'Provider should persist in localStorage');

clearAiSettings();
assert.strictEqual(localStorage.getItem('deutschlernen_ai_key'), null, 'API key should be cleared from localStorage');
console.log('✅ Option B Drawer & LocalStorage Persistence Verified.');

console.log('🎉 All Live Letter Grader Tests Passed Successfully!');
