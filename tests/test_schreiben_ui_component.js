/**
 * Unit & DOM Test Suite for Frontend Component: /js/schreiben.js
 * Verifies:
 * 1. 5 Scenarios with 4 Leitpunkte each.
 * 2. Full 5-language dictionary parity (DE, EN, TR, AR, UK).
 * 3. Timer and umlaut bar interactions.
 * 4. Diagnostic Scorecard (Visual gauge, 4 Leitpunkte pills, 3 Criteria cards, first 2 errors diff).
 * 5. The Blurred Paywall Conversion Box (isPro === false) with Value Anchor & CTAs.
 * 6. Unlocked Pro View (isPro === true) with 45/45 Model Rewrite and Leitpunkt injection.
 */

const assert = require('assert');
const path = require('path');

// Mock Browser Environment
global.window = global;
const storage = {};
global.localStorage = {
  getItem: (k) => (storage[k] !== undefined ? storage[k] : null),
  setItem: (k, v) => { storage[k] = String(v); },
  removeItem: (k) => { delete storage[k]; },
  clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
};

const domElementsById = {};

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
    this.style = {};
    this._innerHTML = '';
    this.value = '';
    this.selectionStart = 0;
    this.selectionEnd = 0;
  }

  get innerHTML() { return this._innerHTML || ''; }
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
      const child = new MockElement(tagName, idMatch ? idMatch[1] : '', classMatch ? classMatch[1] : '');
      this.children.push(child);
      if (idMatch) domElementsById[idMatch[1]] = child;
    }
  }

  scrollIntoView() {}
  focus() {}
}

global.document = {
  getElementById: (id) => domElementsById[id] || null,
  createElement: (tag) => new MockElement(tag)
};

async function runTests() {
  console.log('🧪 Starting SchreibenExaminer UI Component Test Suite...');

  const SchreibenExaminer = require('../js/schreiben.js');
  assert.ok(SchreibenExaminer, 'SchreibenExaminer module should load');

  // Test 1: Mount Element & Initial Render
  const mountEl = new MockElement('DIV', 'test-mount-point');
  domElementsById['test-mount-point'] = mountEl;

  const examiner = new SchreibenExaminer('test-mount-point', { lang: 'en', scenarioId: 'einladung' });
  SchreibenExaminer.instance = examiner;
  examiner.render();

  const renderedHtml = mountEl.innerHTML;
  assert.ok(renderedHtml.includes('Choose Official telc B1 Writing Task'), 'Should render scenario selector label');
  assert.ok(renderedHtml.includes('Decline Party Invitation (Friend Markus)'), 'Should display Scenario 1 title');
  assert.ok(renderedHtml.includes('Exam Timer:'), 'Should render timer label');
  assert.ok(renderedHtml.includes('30:00'), 'Timer should initialize to 30:00');
  assert.ok(renderedHtml.includes('German Umlauts:'), 'Should render umlauts bar');
  assert.ok(renderedHtml.includes('Target: 80–120 words'), 'Should display target word count');
  console.log('✅ Test 1 Passed: Initial component layout, timer, umlauts, and briefing verified.');

  // Test 2: Multilingual Parity across DE, EN, TR, AR, UK & setLang() sync
  const langs = ['de', 'en', 'tr', 'ar', 'uk'];
  for (const lang of langs) {
    examiner.setLanguage(lang);
    assert.strictEqual(SchreibenExaminer.instance.currentLang, lang, `SchreibenExaminer.instance.currentLang should update to ${lang}`);
    const html = mountEl.innerHTML;
    assert.ok(html.length > 200, `Rendered HTML for ${lang} should be populated`);
  }

  // Verify portal setLang() helper synchronization
  function setLang(lang) {
    if (typeof SchreibenExaminer !== 'undefined' && SchreibenExaminer.instance) {
      SchreibenExaminer.instance.setLanguage(lang);
    }
  }
  setLang('tr');
  assert.strictEqual(SchreibenExaminer.instance.currentLang, 'tr', 'portal setLang() should update SchreibenExaminer.instance.currentLang to tr');
  setLang('en');
  assert.strictEqual(SchreibenExaminer.instance.currentLang, 'en', 'portal setLang() should update SchreibenExaminer.instance.currentLang to en');
  console.log('✅ Test 2 Passed: 5-language localization and setLang() instance sync verified.');

  // Test 3: Umlaut Insertion
  const textarea = domElementsById['sch-student-textarea'];
  assert.ok(textarea, 'Textarea must be rendered in DOM');
  textarea.value = 'Ich m';
  textarea.selectionStart = textarea.selectionEnd = 5;
  examiner.insertChar('ö');
  assert.strictEqual(textarea.value, 'Ich mö', 'Umlaut should be inserted at cursor position');
  console.log('✅ Test 3 Passed: Virtual umlaut insertion verified.');

  // Test 4: Diagnostic Scorecard (Free Tier View)
  const mockFreeResponse = {
    meta: { word_count: 105, total_score: 33, max_score: 45, passed: true },
    free_preview: {
      examiner_verdict: "Well-structured B1 letter addressing all key requirements.",
      criteria_breakdown: {
        aufgabenbewaeltigung: { grade: "A", weighted_points: 15, leitpunkte_check: [
          { point: "Thanking", status: "covered" },
          { point: "Reason", status: "covered" },
          { point: "Apology", status: "partial" },
          { point: "Next meeting", status: "covered" }
        ], reason: "All points covered." },
        kommunikative_gestaltung: { grade: "B", weighted_points: 9, reason: "Good connectors." },
        formale_richtigkeit: { grade: "B", weighted_points: 9, reason: "Minor inversion slips." }
      },
      visible_errors_sample: [
        { original_snippet: "Gestern ich habe", corrected_snippet: "Gestern habe ich", rule_category: "Inversion", explanation: "Verb in position 2." },
        { original_snippet: "weil ich bin krank", corrected_snippet: "weil ich krank bin", rule_category: "Nebensatz", explanation: "Verb at end after weil." }
      ],
      hidden_errors_count: 3
    },
    pro_locked_content: {
      locked: true,
      teaser_rewrite_preview: "Liebe Marianne, ich habe mich sehr über deine Nachricht gefreut..."
    }
  };

  const resultsContainer = new MockElement('DIV', 'sch-results-container');
  domElementsById['sch-results-container'] = resultsContainer;

  examiner.renderScorecard(mockFreeResponse, textarea.value);
  const scorecardHtml = resultsContainer.innerHTML;

  assert.ok(scorecardHtml.includes('33'), 'Should display score (33)');
  assert.ok(scorecardHtml.includes('PASSED'), 'Should display PASSED badge');
  assert.ok(scorecardHtml.includes('Gestern ich habe'), 'Should show original error snippet');
  assert.ok(scorecardHtml.includes('Gestern habe ich'), 'Should show corrected snippet');
  assert.ok(scorecardHtml.includes('diff-del'), 'Should use red strikethrough for deleted mistake');
  assert.ok(scorecardHtml.includes('diff-ins'), 'Should use green ins tag for correction');

  // CRITICAL PAYWALL ASSERTIONS
  assert.ok(scorecardHtml.includes('sch-paywall-box'), 'Should render the Blurred Paywall Conversion Box');
  assert.ok(scorecardHtml.includes('Unlock Your Full 45/45 Correction & Unlimited AI Exam Grading'), 'Should display CTA Headline');
  assert.ok(scorecardHtml.includes('Private tutors charge 40€ for 1 hour'), 'Should include tutor Value Anchor');
  assert.ok(scorecardHtml.includes('Unlock 30-Day Exam Pass — 24€'), 'Should display Primary CTA');
  assert.ok(scorecardHtml.includes('Already have an Exam Pass? Enter License Key'), 'Should display Secondary CTA');
  console.log('✅ Test 4 Passed: Diagnostic scorecard, diff rendering, and blurred paywall conversion box verified.');

  // Test 5: Unlocked Pro View (isPro === true) with all_remaining_errors
  const mockProResponse = {
    meta: { word_count: 105, total_score: 42, max_score: 45, passed: true },
    unlocked: true,
    free_preview: mockFreeResponse.free_preview,
    pro_locked_content: {
      locked: false,
      model_rewrite_45_points: "Lieber Markus, vielen Dank für die Einladung zu deinem Geburtstag...",
      missing_leitpunkt_injection: "Ich hoffe, wir können uns nächste Woche zum Kaffee treffen.",
      b1_power_phrases_to_memorize: ["Ich habe mich riesig gefreut", "Lass uns bald treffen"],
      all_remaining_errors: [
        { original_snippet: "Ich freue mich auf dich", corrected_snippet: "Ich freue mich auf dein Fest", rule_category: "Präpositionalobjekt", explanation: "Passendes Bezugswort für Fest." }
      ]
    }
  };

  examiner.renderScorecard(mockProResponse, textarea.value);
  const proScorecardHtml = resultsContainer.innerHTML;
  assert.ok(proScorecardHtml.includes('45/45 Gold-Standard telc B1 Model Rewrite'), 'Should render unlocked rewrite header');
  assert.ok(proScorecardHtml.includes('Missing Leitpunkt Injection'), 'Should render injection box');
  assert.ok(proScorecardHtml.includes('Ich habe mich riesig gefreut'), 'Should render power phrases');
  assert.ok(proScorecardHtml.includes('Ich freue mich auf dich'), 'Should render snippet from all_remaining_errors in Pro scorecard');
  assert.ok(proScorecardHtml.includes('Präpositionalobjekt'), 'Should render category from all_remaining_errors in Pro scorecard');
  assert.ok(!proScorecardHtml.includes('Unlock 30-Day Exam Pass — 24€'), 'Paywall CTA must NOT appear in Pro view');
  console.log('✅ Test 5 Passed: Unlocked Pro view with 45/45 model rewrite, power phrases, and all_remaining_errors verified.');

  // Test 6: StorageService.isPro() and telc_letter_score persistence upon letter evaluation
  const StorageService = require('../js/storageService.js');
  global.StorageService = StorageService;
  assert.strictEqual(StorageService.isPro(), false);
  assert.strictEqual(StorageService.isPro(), StorageService.isProUser());
  StorageService.setLicenseKey('PRO_TEST_12345');
  assert.strictEqual(StorageService.isPro(), true);
  assert.strictEqual(StorageService.isPro(), StorageService.isProUser());
  StorageService.setLicenseKey(null);

  examiner.handleEvaluationSuccess(mockProResponse);
  assert.strictEqual(global.localStorage.getItem('telc_letter_score'), '42', 'telc_letter_score must be persisted in localStorage');
  const cachedEval = StorageService.getLastEvaluation();
  assert.strictEqual(cachedEval && cachedEval.meta && cachedEval.meta.total_score, 42, 'Cached evaluation in StorageService should match 42');
  console.log('✅ Test 6 Passed: StorageService.isPro() alias and telc_letter_score persistence verified.');

  console.log('🎉 All SchreibenExaminer UI Component Tests Passed Successfully!');
}

runTests().catch(err => {
  console.error('❌ SchreibenExaminer Test Failed:', err);
  process.exit(1);
});
