/**
 * DeutschLernen - Unit Test Suite for Navigation & Control Interface (navDrawer.js & CSS)
 * Validates:
 * 1. Compact Context Bar structure, status chips, and settings toggle
 * 2. Slide-Over Drawer off-canvas panel, backdrop, open/close, focus, and ESC handling
 * 3. Selection behavior & localStorage persistence under 'deutschlernen_prefs'
 * 4. Desktop Sidebar Collapse (viewports >= 1024px) 280px -> 64px rail with tooltips
 * 5. Static contract verification in index.html, trainer.html, and css/nav-drawer.css
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const navDrawerJsCode = fs.readFileSync(path.join(ROOT_DIR, 'js', 'navDrawer.js'), 'utf8');
const navDrawerCss = fs.readFileSync(path.join(ROOT_DIR, 'css', 'nav-drawer.css'), 'utf8');
const indexHtml = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
const trainerHtml = fs.readFileSync(path.join(ROOT_DIR, 'trainer.html'), 'utf8');

console.log('🧪 Starting Navigation & Control Interface Unit Tests...');

// 1. Static Contract & Markup Verifications
function testStaticContracts() {
  console.log('▶ Test 1: Verifying HTML & CSS markup contracts...');

  // CSS contracts
  assert(navDrawerCss.includes('position: sticky'), 'CSS must include sticky positioning for compact bar');
  assert(navDrawerCss.includes('max-height: var(--compact-bar-h)'), 'CSS must cap compact bar height at 48px');
  assert(navDrawerCss.includes('backdrop-filter: blur(8px)'), 'CSS must include blur backdrop filter');
  assert(navDrawerCss.includes('100dvh'), 'CSS must support 100dvh mobile viewport height');
  assert(navDrawerCss.includes('translateX(-100%)'), 'CSS must hide drawer off-screen via translateX(-100%)');
  assert(navDrawerCss.includes('cubic-bezier(0.4, 0, 0.2, 1)'), 'CSS must use smooth cubic-bezier(0.4, 0, 0.2, 1) transition');
  assert(navDrawerCss.includes('--sidebar-rail-w: 64px'), 'CSS must define 64px rail width');
  assert(navDrawerCss.includes('[data-tooltip]'), 'CSS must provide tooltips for collapsed sidebar');
  assert(navDrawerCss.includes('min-height: 44px') || navDrawerCss.includes('min-width: 44px'), 'CSS must enforce 44px touch targets');

  // index.html contracts
  assert(indexHtml.includes('id="compact-context-bar"'), 'index.html must include compact-context-bar');
  assert(indexHtml.includes('id="context-drawer-toggle"'), 'index.html must include hamburger toggle button');
  assert(indexHtml.includes('id="context-chip-goal"'), 'index.html must include goal chip');
  assert(indexHtml.includes('id="context-chip-mode"'), 'index.html must include mode chip');
  assert(indexHtml.includes('id="context-settings-btn"'), 'index.html must include settings button');
  assert(indexHtml.includes('id="drawer-backdrop"'), 'index.html must include drawer-backdrop');
  assert(indexHtml.includes('id="desktop-sidebar-toggle"'), 'index.html must include desktop collapse button');
  assert(indexHtml.includes('js/navDrawer.js'), 'index.html must load js/navDrawer.js');
  assert(indexHtml.includes('css/nav-drawer.css'), 'index.html must link css/nav-drawer.css');

  // trainer.html contracts
  assert(trainerHtml.includes('id="compact-context-bar"'), 'trainer.html must include compact-context-bar');
  assert(trainerHtml.includes('id="context-chip-deck"'), 'trainer.html must include deck chip');
  assert(trainerHtml.includes('id="context-chip-mode"'), 'trainer.html must include mode chip');
  assert(trainerHtml.includes('id="drawer-panel"'), 'trainer.html must include drawer-panel');
  assert(trainerHtml.includes('data-drawer-deck="core"'), 'trainer.html drawer must include core deck option');
  assert(trainerHtml.includes('data-drawer-deck="b2"'), 'trainer.html drawer must include b2 deck option');
  assert(trainerHtml.includes('data-drawer-mode="flashcards"'), 'trainer.html drawer must include flashcards mode option');
  assert(trainerHtml.includes('data-drawer-mode="typein"'), 'trainer.html drawer must include typein mode option');
  assert(trainerHtml.includes('js/navDrawer.js'), 'trainer.html must load js/navDrawer.js');
  assert(trainerHtml.includes('css/nav-drawer.css'), 'trainer.html must link css/nav-drawer.css');

  console.log('✅ HTML & CSS contracts verified successfully.');
}

// 2. Headless DOM Mock Environment for NavDrawerController
class MockNode {
  constructor(tag = 'div', id = '', className = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = className;
    this.attributes = {};
    this.dataset = {};
    this.classList = {
      _classes: new Set(className.split(' ').filter(Boolean)),
      add(...cls) { cls.forEach(c => this._classes.add(c)); },
      remove(...cls) { cls.forEach(c => this._classes.delete(c)); },
      toggle(c, force) {
        if (force !== undefined) {
          if (force) this._classes.add(c); else this._classes.delete(c);
        } else {
          if (this._classes.has(c)) this._classes.delete(c); else this._classes.add(c);
        }
      },
      contains(c) { return this._classes.has(c); }
    };
    this.textContent = '';
    this.listeners = {};
    this.children = [];
  }

  getAttribute(a) { return this.attributes[a] !== undefined ? this.attributes[a] : null; }
  setAttribute(a, v) { this.attributes[a] = String(v); }
  removeAttribute(a) { delete this.attributes[a]; }
  hasAttribute(a) { return a in this.attributes; }

  addEventListener(evt, fn) {
    this.listeners[evt] = this.listeners[evt] || [];
    this.listeners[evt].push(fn);
  }

  dispatchEvent(evt) {
    const list = this.listeners[evt.type] || [];
    list.forEach(fn => fn(evt));
  }

  click() {
    this.dispatchEvent({ type: 'click', target: this, preventDefault: () => {} });
  }

  focus() {}

  querySelector(sel) {
    for (const c of this.children) {
      if (matches(c, sel)) return c;
      const sub = c.querySelector(sel);
      if (sub) return sub;
    }
    return null;
  }

  querySelectorAll(sel) {
    const results = [];
    for (const c of this.children) {
      if (matches(c, sel)) results.push(c);
      results.push(...c.querySelectorAll(sel));
    }
    return results;
  }

  closest(sel) {
    if (matches(this, sel)) return this;
    return null;
  }
}

function matchesSingle(node, sel) {
  sel = sel.trim();
  if (!sel) return false;
  if (sel.startsWith('#')) return node.id === sel.slice(1);
  if (sel.startsWith('.')) return node.classList.contains(sel.slice(1));
  if (sel.startsWith('[') && sel.endsWith(']')) {
    const attr = sel.slice(1, -1);
    if (attr.includes('=')) {
      const [k, v] = attr.split('=');
      const cleanV = v.replace(/["']/g, '');
      return node.getAttribute(k) === cleanV;
    }
    return node.hasAttribute(attr);
  }
  return false;
}

function matches(node, sel) {
  const parts = sel.split(',');
  return parts.some(p => matchesSingle(node, p));
}

function setupMockDom() {
  const store = {};
  global.localStorage = {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    clear: () => { for (const k in store) delete store[k]; }
  };

  const elements = {};
  const docElement = new MockNode('html');
  const body = new MockNode('body');

  function reg(id, tag, cls) {
    const n = new MockNode(tag, id, cls);
    elements[id] = n;
    return n;
  }

  const bar = reg('compact-context-bar', 'div', 'compact-context-bar');
  const toggleBtn = reg('context-drawer-toggle', 'button', 'context-drawer-toggle');
  const chipDeck = reg('context-chip-deck', 'button', 'context-chip context-chip-deck');
  const chipMode = reg('context-chip-mode', 'button', 'context-chip context-chip-mode');
  const chipGoal = reg('context-chip-goal', 'button', 'context-chip context-chip-goal');
  const settingsBtn = reg('context-settings-btn', 'button', 'context-settings-btn');
  const backdrop = reg('drawer-backdrop', 'div', 'drawer-backdrop');
  const drawer = reg('drawer-panel', 'aside', 'drawer-panel');
  const closeBtn = reg('drawer-close-btn', 'button', 'drawer-close-btn');
  const collapseBtn = reg('desktop-sidebar-toggle', 'button', 'desktop-collapse-btn');

  // Collapse icons
  const collapseIcon = new MockNode('span', '', 'collapse-icon');
  const collapseText = new MockNode('span', '', 'collapse-text');
  collapseBtn.children.push(collapseIcon, collapseText);

  // Drawer items
  const deckCore = new MockNode('button', '', 'drawer-item-btn active');
  deckCore.setAttribute('data-drawer-deck', 'core');
  const deckB2 = new MockNode('button', '', 'drawer-item-btn');
  deckB2.setAttribute('data-drawer-deck', 'b2');

  const modeFlashcards = new MockNode('button', '', 'drawer-mode-card active');
  modeFlashcards.setAttribute('data-drawer-mode', 'flashcards');
  const modeTypein = new MockNode('button', '', 'drawer-mode-card');
  modeTypein.setAttribute('data-drawer-mode', 'typein');

  const goalB1 = new MockNode('button', '', 'drawer-goal-chip active');
  goalB1.setAttribute('data-drawer-goal', 'goal-b1');
  const goalB2 = new MockNode('button', '', 'drawer-goal-chip');
  goalB2.setAttribute('data-drawer-goal', 'goal-b2');

  drawer.children.push(closeBtn, deckCore, deckB2, modeFlashcards, modeTypein, goalB1, goalB2, collapseBtn);

  // Chip spans
  const deckSpan = new MockNode('span', '', 'chip-text');
  chipDeck.children.push(deckSpan);
  const modeSpan = new MockNode('span', '', 'chip-text');
  chipMode.children.push(modeSpan);
  const goalSpan = new MockNode('span', '', 'chip-text');
  chipGoal.children.push(goalSpan);

  global.document = {
    documentElement: docElement,
    body: body,
    getElementById: (id) => elements[id] || null,
    querySelector: (sel) => {
      if (sel.startsWith('#')) return elements[sel.slice(1)] || null;
      if (sel.includes('.drawer-panel')) return drawer;
      if (sel.includes('.sidebar')) return drawer;
      return null;
    },
    querySelectorAll: (sel) => drawer.querySelectorAll(sel),
    activeElement: toggleBtn
  };

  const winListeners = {};
  global.window = {
    innerWidth: 1200,
    location: { pathname: '/trainer.html' },
    addEventListener: (evt, fn) => {
      winListeners[evt] = winListeners[evt] || [];
      winListeners[evt].push(fn);
    },
    dispatchMockEvent: (evt, data) => {
      (winListeners[evt] || []).forEach(fn => fn(data));
    }
  };

  return { elements, docElement, body, store };
}

function testNavDrawerExecution() {
  console.log('▶ Test 2: Evaluating js/navDrawer.js in sandbox...');
  const { elements, docElement, body, store } = setupMockDom();

  // Evaluate script
  eval(navDrawerJsCode);
  assert(global.window.navDrawerManager, 'window.navDrawerManager must be instantiated');
  const mgr = global.window.navDrawerManager;

  // 1. Initial State
  assert.strictEqual(mgr.prefs.activeDeck, 'core', 'Default activeDeck should be core');
  assert.strictEqual(mgr.prefs.activeMode, 'flashcards', 'Default activeMode should be flashcards');
  assert.strictEqual(mgr.prefs.sidebarCollapsed, false, 'Default sidebarCollapsed should be false');

  // 2. Open Drawer
  mgr.openDrawer();
  assert(mgr.isOpen, 'Drawer should be marked open');
  assert(elements['drawer-panel'].classList.contains('is-open'), 'drawer-panel must have is-open class');
  assert(elements['drawer-backdrop'].classList.contains('is-open'), 'drawer-backdrop must have is-open class');
  assert(body.classList.contains('drawer-open'), 'body must have drawer-open class');
  assert.strictEqual(elements['context-drawer-toggle'].getAttribute('aria-expanded'), 'true');

  // 3. Close Drawer via ESC key
  global.window.dispatchMockEvent('keydown', { key: 'Escape', preventDefault: () => {} });
  assert(!mgr.isOpen, 'Drawer should be closed after Escape key');
  assert(!elements['drawer-panel'].classList.contains('is-open'), 'drawer-panel must not have is-open');
  assert(!body.classList.contains('drawer-open'), 'body must not have drawer-open');

  // 4. Selection Behavior & LocalStorage Persistence: Deck Change
  mgr.openDrawer();
  const deckB2 = elements['drawer-panel'].children.find(c => c.getAttribute('data-drawer-deck') === 'b2');
  assert(deckB2, 'Deck B2 button must exist in drawer');

  // Simulate click on Deck B2 item
  elements['drawer-panel'].dispatchEvent({
    type: 'click',
    target: deckB2,
    preventDefault: () => {}
  });

  // Verify state updated
  assert.strictEqual(mgr.prefs.activeDeck, 'b2', 'activeDeck must be updated to b2');
  const savedPrefs = JSON.parse(store['deutschlernen_prefs']);
  assert.strictEqual(savedPrefs.activeDeck, 'b2', 'deutschlernen_prefs in localStorage must store activeDeck: b2');
  assert(!mgr.isOpen, 'Drawer must automatically close after selection');
  assert(elements['context-chip-deck'].querySelector('.chip-text').textContent.includes('B2'), 'Context chip must show B2');

  // 5. Selection Behavior: Mode Change
  mgr.openDrawer();
  const modeTypein = elements['drawer-panel'].children.find(c => c.getAttribute('data-drawer-mode') === 'typein');
  elements['drawer-panel'].dispatchEvent({
    type: 'click',
    target: modeTypein,
    preventDefault: () => {}
  });

  assert.strictEqual(mgr.prefs.activeMode, 'typein', 'activeMode must be updated to typein');
  const savedPrefs2 = JSON.parse(store['deutschlernen_prefs']);
  assert.strictEqual(savedPrefs2.activeMode, 'typein', 'localStorage must store activeMode: typein');
  assert(!mgr.isOpen, 'Drawer must automatically close after mode selection');
  assert(elements['context-chip-mode'].querySelector('.chip-text').textContent.includes('Type-In'), 'Context chip must show Type-In');

  // 6. Desktop Sidebar Collapse Toggle
  assert(!docElement.classList.contains('sidebar-collapsed'), 'Initial docElement should not have sidebar-collapsed');
  mgr.toggleDesktopCollapse();
  assert(docElement.classList.contains('sidebar-collapsed'), 'docElement must have sidebar-collapsed after toggle');
  const savedPrefs3 = JSON.parse(store['deutschlernen_prefs']);
  assert.strictEqual(savedPrefs3.sidebarCollapsed, true, 'localStorage must persist sidebarCollapsed: true');

  // Toggle again to expand
  mgr.toggleDesktopCollapse();
  assert(!docElement.classList.contains('sidebar-collapsed'), 'docElement must remove sidebar-collapsed after 2nd toggle');
  const savedPrefs4 = JSON.parse(store['deutschlernen_prefs']);
  assert.strictEqual(savedPrefs4.sidebarCollapsed, false, 'localStorage must persist sidebarCollapsed: false');

  console.log('✅ NavDrawerController headless tests passed successfully!');
}

function runAll() {
  testStaticContracts();
  testNavDrawerExecution();
  console.log('🎉 ALL Navigation & Control Interface Unit Tests Passed (100% Success)!');
}

runAll();
