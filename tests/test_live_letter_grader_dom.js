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
  get id() { return this._id || ''; }
  set id(v) { this._id = v; if (v) domElementsById[v] = this; }

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
    this._innerHTML = '';
    this.value = '';
    this.textContent = '';
  }

  get innerHTML() {
    return this._innerHTML || '';
  }

  set innerHTML(html) {
    this._innerHTML = String(html || '');
    this.children = [];
    const tagRegex = /<([a-z0-9]+)\s+([^>]*?)>/gi;
    let match;
    while ((match = tagRegex.exec(this._innerHTML)) !== null) {
      const tagName = match[1];
      const attrStr = match[2];
      const idMatch = /id=["']([^"']+)["']/i.exec(attrStr);
      const classMatch = /class=["']([^"']+)["']/i.exec(attrStr);
      const dataMethodMatch = /data-method=["']([^"']+)["']/i.exec(attrStr);

      const child = new MockElement(tagName, idMatch ? idMatch[1] : '', classMatch ? classMatch[1] : '');
      if (dataMethodMatch) {
        child.setAttribute('data-method', dataMethodMatch[1]);
      }
      child.parentElement = this;
      this.children.push(child);
      if (idMatch) {
        domElementsById[idMatch[1]] = child;
      }
    }
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
assert.ok(resultHtml.includes('option-b-verify-card'), 'Should render Option B Check Afterwards callout card');
assert.ok(resultHtml.includes('Check Afterwards with AI'), 'Should have Option B trigger button');
assert.ok(resultHtml.includes('option-b-comparison-container'), 'Should have container for Option B comparison');
console.log('✅ DOM Output Verified: Scorecard, 3 Criteria, Annotations, Upgrades, and Option B Check Afterwards card all rendered properly.');

let lastAlert = '';
global.alert = (msg) => { lastAlert = msg; };

// 6. Test Short Failing Letter (Edge Case with >20 words but lacking B1 criteria)
localStorage.setItem('deutschlernen_letter_credits', '10');
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

// 8. Test Option B Calibration & Side-by-Side Comparison Rendering
const mockOptionA = {
  totalScore: 39,
  rawSum: 13,
  grade: 'Gut',
  percentage: 87,
  passed: true,
  criteria: [
    { id: 'inhalt', rawScore: 5, ratingLetter: 'A', finalScore: 15 },
    { id: 'sprache', rawScore: 5, ratingLetter: 'A', finalScore: 15 },
    { id: 'korrektheit', rawScore: 3, ratingLetter: 'B', finalScore: 9 }
  ]
};

const mockOptionB = {
  totalScore: 36,
  rawSum: 12,
  grade: 'Gut',
  percentage: 80,
  passed: true,
  criteria: [
    { id: 'inhalt', rawScore: 5, ratingLetter: 'A', finalScore: 15 },
    { id: 'sprache', rawScore: 4, ratingLetter: 'B', finalScore: 12 },
    { id: 'korrektheit', rawScore: 3, ratingLetter: 'B', finalScore: 9 }
  ]
};

// Ensure container exists for test
const comparisonContainer = new MockElement('DIV', 'option-b-comparison-container');
domElementsById['option-b-comparison-container'] = comparisonContainer;

const compOutput = renderOptionBComparison(mockOptionA, mockOptionB);
assert.ok(compOutput.includes('Option A vs. Option B Calibration & Comparison'), 'Should render calibration comparison title');
assert.ok(compOutput.includes('Option A (Rule Engine)'), 'Should display Option A label');
assert.ok(compOutput.includes('Option B (Deep LLM)'), 'Should display Option B label');
assert.ok(compOutput.includes('39'), 'Should show Option A score (39)');
assert.ok(compOutput.includes('36'), 'Should show Option B score (36)');
assert.ok(compOutput.includes('±3 pts'), 'Should calculate delta (±3 pts)');
assert.ok(compOutput.includes('93%'), 'Should calculate high agreement percentage (93%)');
assert.ok(compOutput.includes('Match'), 'Should note matching criteria');
assert.strictEqual(comparisonContainer.style.display, 'block', 'Comparison container should be made visible');
console.log('✅ Option B Side-by-Side Calibration & Comparison Matrix Verified.');

// 9. Test Interactive Checkout & Payment Method Switching
selectProPlan('pass-30');
const modal = domElementsById['pro-pricing-modal'] || document.getElementById('pro-pricing-modal');
assert.ok(modal, 'Pricing modal should exist');
assert.ok(modal.innerHTML.includes('Complete Your Enrollment'), 'Modal should display enrollment header');
assert.ok(modal.innerHTML.includes('30-Day Exam Pass'), 'Modal should display selected plan');
assert.ok(modal.innerHTML.includes('panel-card'), 'Modal should contain Card payment panel');
assert.ok(modal.innerHTML.includes('panel-sepa'), 'Modal should contain SEPA payment panel');
assert.ok(modal.innerHTML.includes('panel-paypal'), 'Modal should contain PayPal payment panel');

assert.ok(modal.innerHTML.includes('bgb-waiver-checkbox'), 'Modal should contain § 356 Abs. 5 BGB statutory waiver checkbox');
assert.ok(modal.innerHTML.includes('§ 356 Abs. 5 BGB'), 'Modal should include statutory waiver legal text');

switchPaymentMethod('sepa');
const sepaPanel = modal.querySelector('#panel-sepa');
assert.ok(sepaPanel && sepaPanel.classList.contains('active'), 'SEPA panel should become active on switch');
console.log('✅ Checkout & Dynamic Payment Panel Switching Verified.');

// 10. Test Order Confirmation & Digital Invoice Generation (§ 356 Abs. 5 BGB compliance)
const creditsBefore = getLetterCredits();
const waiverCheckbox = domElementsById['bgb-waiver-checkbox'];

// Verify waiver check blocks order when unchecked
if (waiverCheckbox) waiverCheckbox.checked = false;
confirmInstantDemoOrder('pass-30');
assert.strictEqual(getLetterCredits(), creditsBefore, 'Order should NOT process without § 356 Abs. 5 BGB consent');

// Now check and confirm order
if (waiverCheckbox) waiverCheckbox.checked = true;
confirmInstantDemoOrder('pass-30');
assert.ok(modal.innerHTML.includes('ENROLLMENT CONFIRMED'), 'Confirmation screen should show enrolled banner');
assert.ok(modal.innerHTML.includes('DL-2026-'), 'Invoice should have unique DL-2026 reference number');
assert.ok(modal.innerHTML.includes('§ 19 UStG'), 'Invoice must include § 19 UStG Kleinunternehmer tax notice');
assert.ok(modal.innerHTML.includes('Print / Save PDF Receipt'), 'Invoice should offer printable receipt action');
assert.strictEqual(getLetterCredits(), creditsBefore + 30, 'Standard pass should grant exactly 30 credits');

const storedInvoices = JSON.parse(localStorage.getItem('deutschlernen_invoices') || '[]');
assert.ok(storedInvoices.length > 0, 'Completed invoice should be persisted in localStorage');
assert.strictEqual(storedInvoices[0].tierId, 'pass-30', 'Persisted invoice should match tier ID');
console.log('✅ Digital EU-Compliant Invoice & Accounting Persistence Verified.');

// 10b. Test Fair Pricing Promo Coupons & 100% VIP Grants (§ 11 PAngV / § 5 UWG)
selectProPlan('pass-30', 40, 'PRUEFUNG2026');
assert.ok(modal.innerHTML.includes('PRUEFUNG2026'), 'Coupon input should display applied promo code');
assert.strictEqual(global.window._activeCheckoutCoupon.discountPercent, 40, 'Promo coupon should apply 40% discount');
assert.strictEqual(domElementsById['checkout-total-price'].textContent, '14,40 €', 'Discounted total should equal 14,40 €');

// Test 100% VIP Voucher Checkout
applyCheckoutCoupon('pass-30', 'VIPFREE');
assert.strictEqual(global.window._activeCheckoutCoupon.isFree, true, 'VIP coupon should set isFree to true');
assert.strictEqual(domElementsById['checkout-total-price'].textContent, '0,00 €', 'VIP total price must be 0,00 €');

const creditsBeforeVip = getLetterCredits();
if (domElementsById['bgb-waiver-checkbox']) domElementsById['bgb-waiver-checkbox'].checked = true;
confirmInstantDemoOrder('pass-30');
assert.strictEqual(getLetterCredits(), creditsBeforeVip + 50, 'VIP grant should add 50 AI letter credits');
const updatedInvoices = JSON.parse(localStorage.getItem('deutschlernen_invoices') || '[]');
assert.strictEqual(updatedInvoices[0].price, '0,00 €', 'VIP invoice price must reflect 0,00 €');
console.log('✅ German Fair Pricing Promo Coupons & 100% VIP Grants (§ 11 PAngV) Verified.');


// 11. Test Cloudflare Worker AI Examiner Payload & Freemium Paywall Rendering
const mockWorkerFreePayload = {
  rawText: "Liebe Marianne,\n\nGestern ich habe einen Brief geschrieben weil ich bin krank.\n\nViele Grüße,\nAli",
  meta: {
    word_count: 145,
    passed: true,
    total_score: 36,
    max_score: 45,
    pass_threshold: 27,
    points_missing_to_pass: 0
  },
  free_preview: {
    examiner_verdict: "Hervorragende Bearbeitung aller vier Leitpunkte. Vereinzelte Wortstellungsfehler nach Nebensätzen kosten wenige Punkte.",
    criteria_breakdown: {
      aufgabenbewaeltigung: {
        grade: "A",
        raw_points: 5,
        weighted_points: 15,
        leitpunkte_check: [
          { point: "Anlass des Schreibens", status: "covered" },
          { point: "Ausflugsvorschlag", status: "covered" },
          { point: "Kleidung & Vorbereitung", status: "covered" },
          { point: "Ankunftszeit / Abholung", status: "covered" }
        ],
        reason: "Alle 4 Leitpunkte wurden ausführlich auf B1-Niveau behandelt."
      },
      kommunikative_gestaltung: {
        grade: "B",
        raw_points: 3,
        weighted_points: 9,
        reason: "Guter Einsatz von B1 Konnektoren."
      },
      formale_richtigkeit: {
        grade: "B",
        raw_points: 3,
        weighted_points: 9,
        error_count: 4,
        reason: "Nebensatz-Inversionen."
      }
    },
    visible_errors_sample: [
      {
        original_snippet: "Gestern ich habe",
        corrected_snippet: "Gestern habe ich",
        rule_category: "Inversion",
        explanation: "Verb auf Position 2."
      },
      {
        original_snippet: "weil ich bin krank",
        corrected_snippet: "weil ich krank bin",
        rule_category: "Nebensatz",
        explanation: "Verb ans Satzende."
      }
    ],
    hidden_errors_count: 2
  },
  pro_locked_content: {
    is_locked: true,
    all_remaining_errors: null,
    model_rewrite_45_points: null,
    missing_leitpunkt_injection: null,
    b1_power_phrases_to_memorize: null
  }
};

renderLiveGradingResults(mockWorkerFreePayload, true);
const workerHtml = resultsContainer.innerHTML;
assert.ok(workerHtml.includes('Offizielles Prüferurteil'), 'Should render official examiner verdict banner');
assert.ok(workerHtml.includes('Leitpunkte Check'), 'Should render 4 Leitpunkte checklist');
assert.ok(workerHtml.includes('DIAGNOSTIC PREVIEW ONLY'), 'Should render Freemium paywall gate header');
assert.ok(workerHtml.includes('30-Tage Exam Pass (24€)'), 'Should offer 30-Day Exam Pass (24€)');
assert.ok(workerHtml.includes('90-Tage Voll-Pass (39€)'), 'Should offer 90-Day Full Pass (39€)');
assert.ok(workerHtml.includes('Weitere Fehler verborgen'), 'Should display hidden errors count');
console.log('✅ AI Examiner Free Preview & Freemium Paywall Gate Rendering Verified.');

// 12. Test Pro Unlocked Payload Rendering
const mockWorkerProPayload = {
  ...mockWorkerFreePayload,
  pro_locked_content: {
    is_locked: false,
    all_remaining_errors: [],
    model_rewrite_45_points: "Liebe Marianne, ich habe mich sehr über deine Nachricht gefreut...",
    missing_leitpunkt_injection: "Könntest du mir bitte bald mitteilen, wann dein Flug landet?",
    b1_power_phrases_to_memorize: ["Ich habe mich sehr gefreut", "Aus diesem Grund schlage ich vor"]
  }
};
renderLiveGradingResults(mockWorkerProPayload, true);
const proHtml = resultsContainer.innerHTML;
assert.ok(proHtml.includes('45/45 telc B1 Gold-Standard Musterlösung'), 'Should render unlocked 45/45 model rewrite header');
assert.ok(proHtml.includes('pro-model-text'), 'Should render model rewrite container');
assert.ok(proHtml.includes('Musterbrief kopieren'), 'Should provide copy button for model letter');
assert.ok(proHtml.includes('Fehlender Leitpunkt'), 'Should render Leitpunkt injection card');
console.log('✅ AI Examiner Pro Unlocked 45/45 Model Rewrite Rendering Verified.');

// 13. Test LemonSqueezy Checkout Opener
let openedUrl = '';
global.window.LemonSqueezy = {
  Url: {
    Open: (url) => { openedUrl = url; }
  }
};
openLemonSqueezyCheckout('pass-30');
assert.strictEqual(openedUrl, 'https://deutschlernen.lemonsqueezy.com/buy/exam-pass-30', 'Should trigger LemonSqueezy checkout for 30-day pass');
openLemonSqueezyCheckout('pass-90');
assert.strictEqual(openedUrl, 'https://deutschlernen.lemonsqueezy.com/buy/exam-pass-90', 'Should trigger LemonSqueezy checkout for 90-day pass');
console.log('✅ LemonSqueezy Overlay Checkout Integration Verified.');

console.log('🎉 All Live Letter Grader & Commercialization Tests Passed Successfully!');


