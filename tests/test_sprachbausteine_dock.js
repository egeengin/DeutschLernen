/**
 * DeutschLernen - Sprachbausteine Interactive Dock & Mode Switcher Unit Tests
 * Verifies mobile-first floating dock, tap-to-fill, gap navigation, auto-advance,
 * and exam vs practice mode toggling.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log('🧪 Starting Sprachbausteine Interactive Dock Unit Tests...');

const ROOT_DIR = path.join(__dirname, '..');
const appCode = fs.readFileSync(path.join(ROOT_DIR, 'js', 'lesenApp.js'), 'utf8');
const sprachbausteineCode = fs.readFileSync(path.join(ROOT_DIR, 'data', 'sprachbausteineData.js'), 'utf8');

const elementsById = {};

class MockElement {
  constructor(tagName = 'div', id = '') {
    this.tagName = tagName;
    this.id = id;
    this.className = '';
    this._innerHTML = '';
    this.textContent = '';
    this.style = {};
    this.attributes = {};
    this.children = [];
    this.listeners = {};
    this.dataset = {};
  }

  get innerHTML() { return this._innerHTML; }
  set innerHTML(val) {
    this._innerHTML = val;
    if (val === '') {
      this.children = [];
    }
  }

  setAttribute(k, v) { this.attributes[k] = v; }
  getAttribute(k) { return this.attributes[k] || null; }
  hasAttribute(k) { return k in this.attributes; }
  removeAttribute(k) { delete this.attributes[k]; }

  appendChild(child) {
    this.children.push(child);
    return child;
  }

  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) this.children.splice(idx, 1);
  }

  addEventListener(ev, cb) {
    if (!this.listeners[ev]) this.listeners[ev] = [];
    this.listeners[ev].push(cb);
  }

  dispatchEvent(ev) {
    const cbs = this.listeners[ev] || [];
    cbs.forEach(cb => cb({ target: this, currentTarget: this, stopPropagation: () => {} }));
  }

  querySelector(sel) {
    if (sel.startsWith('#')) {
      const id = sel.slice(1);
      if (this.id === id) return this;
      if (elementsById[id]) return elementsById[id];
      const el = new MockElement('div', id);
      elementsById[id] = el;
      return el;
    }
    return new MockElement();
  }

  querySelectorAll() { return []; }
  scrollIntoView() {}
  get classList() {
    const self = this;
    return {
      contains: (cls) => (self.className || '').split(' ').includes(cls),
      add: (cls) => {
        const parts = new Set((self.className || '').split(' ').filter(Boolean));
        parts.add(cls);
        self.className = Array.from(parts).join(' ');
      },
      remove: (cls) => {
        const parts = new Set((self.className || '').split(' ').filter(Boolean));
        parts.delete(cls);
        self.className = Array.from(parts).join(' ');
      },
      toggle: (cls, force) => {
        const parts = new Set((self.className || '').split(' ').filter(Boolean));
        if (force === undefined) {
          if (parts.has(cls)) parts.delete(cls);
          else parts.add(cls);
        } else if (force) {
          parts.add(cls);
        } else {
          parts.delete(cls);
        }
        self.className = Array.from(parts).join(' ');
      }
    };
  }
}

// Pre-populate expected DOM elements
[
  'btn-track-lesen', 'btn-track-sprachbausteine', 'sb-mode-toggle',
  'btn-sb-mode-practice', 'btn-sb-mode-exam', 'sb-floating-dock',
  'sb-dock-gap-badge', 'sb-dock-curr-word', 'sb-dock-prev', 'sb-dock-next',
  'sb-dock-clear', 'sb-dock-toggle-collapse', 'sb-dock-body',
  'part-tabs', 'article-title', 'article-summary', 'article-body',
  'questions-container', 'vocab-container', 'timer-display',
  'btn-timer-toggle', 'btn-timer-reset', 'btn-check-sb', 'btn-reset-sb'
].forEach(id => {
  elementsById[id] = new MockElement('div', id);
});

const storage = {};
const mockLocalStorage = {
  getItem: (k) => storage[k] || null,
  setItem: (k, v) => { storage[k] = String(v); },
  removeItem: (k) => { delete storage[k]; }
};

const sandbox = {
  window: {},
  document: {
    getElementById: (id) => elementsById[id] || (elementsById[id] = new MockElement('div', id)),
    querySelectorAll: () => [],
    createElement: (tag) => new MockElement(tag),
    createTextNode: (text) => {
      const el = new MockElement('span');
      el.textContent = text;
      return el;
    },
    addEventListener: () => {},
    body: new MockElement('body'),
    documentElement: new MockElement('html')
  },
  localStorage: mockLocalStorage,
  console: console,
  navigator: { userAgent: 'Node' },
  speechSynthesis: null,
  READING_DATASET: []
};

vm.createContext(sandbox);
vm.runInContext(sprachbausteineCode, sandbox);
vm.runInContext(appCode, sandbox);

assert(sandbox.window.LesenApp, 'LesenApp class must be exported to window');
const app = new sandbox.window.LesenApp();

// 1. Verify default mode
assert.strictEqual(app.sbMode, 'practice', 'Default Sprachbausteine mode must be practice');

// 2. Switch to Sprachbausteine track
app.switchTrack('sprachbausteine');
assert.strictEqual(app.activeTrack, 'sprachbausteine');
assert.strictEqual(elementsById['sb-mode-toggle'].style.display, 'inline-flex', 'Mode switcher must be displayed');
assert.strictEqual(elementsById['sb-floating-dock'].style.display, 'block', 'Floating dock must be active');

// 3. Test dock rendering for Teil 1 (Options a, b, c)
app.loadSbSet(0, 'teil1');
assert.strictEqual(app.activeSbGap, 21, 'Initial active gap should be 21');
assert.strictEqual(elementsById['sb-dock-body'].children.length, 3, 'Teil 1 dock body must have 3 option pills');

// 4. Test selecting an answer in Teil 1
app.selectSbAnswer(21, 'b');
assert.strictEqual(app.sbAnswers[21], 'b', 'Gap 21 must be answered with b');

// 5. Test switching to Teil 2 (15 Word Chips)
app.loadSbSet(0, 'teil2');
assert.strictEqual(app.activeSbGap, 31, 'Initial active gap in Teil 2 should be 31');
assert.strictEqual(elementsById['sb-dock-body'].children.length, 15, 'Teil 2 dock body must render all 15 word chips');

// 6. Test navigation between gaps
app.navigateSbGap(1);
assert.strictEqual(app.activeSbGap, 32, 'Navigating next should move from gap 31 to 32');
app.navigateSbGap(-1);
assert.strictEqual(app.activeSbGap, 31, 'Navigating prev should return to gap 31');

// 7. Test auto-advance and clear gap
app.setActiveSbGap(31);
app.selectSbAnswer(31, 'a');
assert.strictEqual(app.sbAnswers[31], 'a', 'Gap 31 set to a');
assert.strictEqual(app.activeSbGap, 32, 'Must auto-advance to next unfilled gap (32)');

// User taps on gap 31 again to clear it
app.setActiveSbGap(31);
app.clearCurrentSbGap();
assert.strictEqual(app.sbAnswers[31], undefined, 'Gap 31 must be cleared');

// 8. Test mode toggle to Exam mode
app.setSbMode('exam');
assert.strictEqual(app.sbMode, 'exam');
assert.strictEqual(elementsById['sb-floating-dock'].style.display, 'none', 'Dock must hide in exam mode');

// 9. Return to practice mode
app.setSbMode('practice');
assert.strictEqual(app.sbMode, 'practice');
assert.strictEqual(elementsById['sb-floating-dock'].style.display, 'block', 'Dock must show in practice mode');

// 10. Switch back to Lesen track
app.switchTrack('lesen');
assert.strictEqual(elementsById['sb-mode-toggle'].style.display, 'none', 'Mode toggle hidden in reading track');
assert.strictEqual(elementsById['sb-floating-dock'].style.display, 'none', 'Dock hidden in reading track');

console.log('✅ All Sprachbausteine interactive dock & mode switcher unit tests passed successfully!');
