/**
 * Unit Test Suite for NotificationService & Daily Reminders
 * Verifies:
 * 1. 100% dictionary completeness across DE, EN, TR, AR, UK.
 * 2. Settings persistence and defaults.
 * 3. Graceful fallback when Notification API is mocked or not supported.
 */

const assert = require('assert');
const path = require('path');
const { NotificationService, REMINDER_STRINGS } = require('../js/notifications.js');

const REQUIRED_LANGS = ['de', 'en', 'tr', 'ar', 'uk'];

console.log('🧪 Starting NotificationService Test Suite...\n');

// Test 1: Language Dictionary Parity
console.log('Test 1: Verifying REMINDER_STRINGS parity across 5 languages...');
assert(REMINDER_STRINGS, 'REMINDER_STRINGS must exist');
REQUIRED_LANGS.forEach(lang => {
  assert(REMINDER_STRINGS[lang], `Missing strings for language: ${lang}`);
});

const referenceKeys = Object.keys(REMINDER_STRINGS.de);
assert(referenceKeys.length >= 10, 'Reference language de must have >= 10 keys');

REQUIRED_LANGS.forEach(lang => {
  referenceKeys.forEach(key => {
    assert(
      REMINDER_STRINGS[lang][key] && REMINDER_STRINGS[lang][key].trim().length > 0,
      `Language '${lang}' missing or empty key: '${key}'`
    );
  });
});
console.log(`✅ All ${referenceKeys.length} notification string keys have 100% parity across DE, EN, TR, AR, UK!`);

// Test 2: NotificationService Instance & Settings
console.log('\nTest 2: Testing NotificationService instance defaults & settings...');
// Mock localStorage if in node environment
global.localStorage = {
  store: {},
  getItem(key) { return this.store[key] || null; },
  setItem(key, val) { this.store[key] = String(val); },
  removeItem(key) { delete this.store[key]; }
};

const service = new NotificationService();
assert.strictEqual(typeof service.settings, 'object', 'Service settings must be an object');
assert.strictEqual(typeof service.settings.time, 'string', 'Default reminder time must be string');
assert.strictEqual(service.settings.enabled, false, 'Default enabled state must be false');

// Test updating settings
service.saveSettings({ time: '20:30', enabled: true });
assert.strictEqual(service.settings.time, '20:30', 'Settings time must be updated');
assert.strictEqual(service.settings.enabled, true, 'Settings enabled must be true');

// Verify persisted in localStorage
const reloaded = service.loadSettings();
assert.strictEqual(reloaded.time, '20:30', 'Reloaded time must match');
assert.strictEqual(reloaded.enabled, true, 'Reloaded enabled must match');

console.log('✅ NotificationService settings load and save verified successfully!');

// Test 3: Headless browser fallback
console.log('\nTest 3: Testing headless environment fallbacks...');
assert.strictEqual(service.isSupported(), false, 'In Node headless environment, isSupported should safely return false');
assert.strictEqual(service.getPermission(), 'unsupported', 'In Node headless environment, getPermission should return unsupported');

console.log('✅ Headless environment fallbacks handled safely without throwing!');

console.log('\n🎉 ALL NOTIFICATION TESTS PASSED (100% Success)!');
