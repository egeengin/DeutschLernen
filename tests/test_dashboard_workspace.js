/**
 * DeutschLernen - Unit Test Suite for Student App Workspace (dashboard.html)
 * Verifies:
 * 1. File existence, DOCTYPE, and metadata
 * 2. Cross-studio navigation links to trainer.html, lesen.html, hoeren.html, sprechen.html
 * 3. Mount container for SchreibenExaminer (#schreiben-examiner-mount)
 * 4. Pass Predictor (180/300) and Fehlerheft containers
 * 5. 4-language i18n attribute parity
 * 6. PWA Service Worker caching and manifest shortcut
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

console.log('🧪 Starting Student App Workspace (dashboard.html) Test Suite...');

// 1. Verify dashboard.html exists and has valid markup
const dashHtmlPath = path.join(ROOT_DIR, 'dashboard.html');
assert(fs.existsSync(dashHtmlPath), 'dashboard.html must exist on disk');
const dashHtml = fs.readFileSync(dashHtmlPath, 'utf8');

assert(dashHtml.includes('<!DOCTYPE html>'), 'dashboard.html must have valid DOCTYPE');
assert(dashHtml.includes('Student Workspace'), 'dashboard.html must feature Student Workspace title');
assert(dashHtml.includes('schreiben-examiner-mount'), 'dashboard.html must have #schreiben-examiner-mount');
assert(dashHtml.includes('telc-calculator-container'), 'dashboard.html must have #telc-calculator-container');
assert(dashHtml.includes('fehlerheft-container'), 'dashboard.html must have #fehlerheft-container');
console.log('✅ Test 1 Passed: dashboard.html structure and key mount containers verified.');

// 2. Verify navigation links to all studios and landing page
assert(dashHtml.includes('trainer.html'), 'Must link to trainer.html');
assert(dashHtml.includes('lesen.html'), 'Must link to lesen.html');
assert(dashHtml.includes('hoeren.html'), 'Must link to hoeren.html');
assert(dashHtml.includes('sprechen.html'), 'Must link to sprechen.html');
assert(dashHtml.includes('index.html'), 'Must link back to landing page index.html');
console.log('✅ Test 2 Passed: Studio links and landing page return navigation verified.');

// 3. Verify CSS and JS modular assets
assert(dashHtml.includes('css/dashboard.css'), 'Must reference css/dashboard.css');
assert(dashHtml.includes('js/dashboard.js'), 'Must reference js/dashboard.js');
assert(dashHtml.includes('js/schreiben.js'), 'Must reference js/schreiben.js');
assert(dashHtml.includes('js/storageService.js'), 'Must reference js/storageService.js');
console.log('✅ Test 3 Passed: Modular script & stylesheet dependencies verified.');

// 4. Verify multilingual attribute parity
const enMatches = dashHtml.match(/data-en="[^"]*"/g) || [];
const trMatches = dashHtml.match(/data-tr="[^"]*"/g) || [];
const arMatches = dashHtml.match(/data-ar="[^"]*"/g) || [];
const ukMatches = dashHtml.match(/data-uk="[^"]*"/g) || [];

assert.strictEqual(enMatches.length, trMatches.length, 'data-tr count must equal data-en');
assert.strictEqual(enMatches.length, arMatches.length, 'data-ar count must equal data-en');
assert.strictEqual(enMatches.length, ukMatches.length, 'data-uk count must equal data-en');
assert(enMatches.length >= 40, `Expected at least 40 multilingual tags in dashboard.html, found ${enMatches.length}`);
console.log(`✅ Test 4 Passed: 4-language i18n parity verified across ${enMatches.length} translatable elements.`);

// 5. Verify Service Worker ASSETS includes dashboard assets
const swPath = path.join(ROOT_DIR, 'sw.js');
const swContent = fs.readFileSync(swPath, 'utf8');
assert(swContent.includes("'./dashboard.html'"), 'sw.js ASSETS must include ./dashboard.html');
assert(swContent.includes("'./css/dashboard.css'"), 'sw.js ASSETS must include ./css/dashboard.css');
assert(swContent.includes("'./js/dashboard.js'"), 'sw.js ASSETS must include ./js/dashboard.js');

// 6. Verify Manifest shortcut
const manifestPath = path.join(ROOT_DIR, 'manifest.json');
const manifestData = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const hasWorkspaceShortcut = manifestData.shortcuts.some(s => s.url.includes('dashboard.html'));
assert(hasWorkspaceShortcut, 'manifest.json shortcuts must include dashboard.html');
console.log('✅ Test 5 Passed: Offline PWA Service Worker caching and manifest shortcut verified.');

console.log('🎉 All Student App Workspace (dashboard.html) tests passed successfully!');
