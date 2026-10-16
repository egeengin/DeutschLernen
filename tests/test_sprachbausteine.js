/**
 * DeutschLernen - Sprachbausteine Headless Unit & Schema Tests
 * Verifies data integrity, quad-lingual parity, distractor rules,
 * scoring algorithms (60% threshold = 18/30 points) and question structure.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('🧪 Starting Sprachbausteine Studio Headless Unit Tests...');

// 1. Load data/sprachbausteineData.js
const filePath = path.join(__dirname, '..', 'data', 'sprachbausteineData.js');
if (!fs.existsSync(filePath)) {
  console.error('❌ Error: data/sprachbausteineData.js not found!');
  process.exit(1);
}

const fileContent = fs.readFileSync(filePath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fileContent, sandbox);

const dataset = sandbox.window.SPRACHBAUSTEINE_DATASET;
if (!Array.isArray(dataset) || dataset.length === 0) {
  console.error('❌ Error: SPRACHBAUSTEINE_DATASET is not a valid non-empty array!');
  process.exit(1);
}

console.log(`✅ Loaded ${dataset.length} Sprachbausteine Practice Sets.`);

// 2. Schema and Quad-Lingual Parity Checks
const REQUIRED_LANGS = ['de', 'en', 'tr', 'ar', 'uk'];

dataset.forEach((set, setIdx) => {
  if (!set.id || !set.title) {
    throw new Error(`Set #${setIdx + 1} missing required id or title.`);
  }

  REQUIRED_LANGS.forEach(lang => {
    if (!set.title[lang]) {
      throw new Error(`Set ${set.id} title missing language '${lang}'.`);
    }
  });

  // Teil 1 Checks (Items 21-30, 3 options each)
  const t1 = set.teil1;
  if (!t1 || !Array.isArray(t1.items) || t1.items.length !== 10) {
    throw new Error(`Set ${set.id} Teil 1 must have exactly 10 items (21-30). Found: ${t1 ? t1.items.length : 0}`);
  }

  t1.items.forEach((item, itemIdx) => {
    const expectedId = 21 + itemIdx;
    if (item.id !== expectedId) {
      throw new Error(`Teil 1 item expected id ${expectedId}, got ${item.id}`);
    }
    if (!Array.isArray(item.options) || item.options.length !== 3) {
      throw new Error(`Teil 1 item ${item.id} must have exactly 3 options (a, b, c).`);
    }
    if (!['a', 'b', 'c'].includes(item.correct)) {
      throw new Error(`Teil 1 item ${item.id} correct answer must be 'a', 'b', or 'c'. Got: ${item.correct}`);
    }
    REQUIRED_LANGS.forEach(lang => {
      if (!item.rule || !item.rule[lang]) {
        throw new Error(`Teil 1 item ${item.id} rule missing language '${lang}'.`);
      }
    });
  });

  // Teil 2 Checks (Items 31-40, WordBank with 15 options a-o)
  const t2 = set.teil2;
  if (!t2 || !Array.isArray(t2.items) || t2.items.length !== 10) {
    throw new Error(`Set ${set.id} Teil 2 must have exactly 10 items (31-40). Found: ${t2 ? t2.items.length : 0}`);
  }
  if (!Array.isArray(t2.wordBank) || t2.wordBank.length !== 15) {
    throw new Error(`Set ${set.id} Teil 2 wordBank must have exactly 15 words. Found: ${t2.wordBank.length}`);
  }

  const usedKeys = t2.items.map(item => item.correct);
  const uniqueUsedKeys = new Set(usedKeys);
  if (uniqueUsedKeys.size !== 10) {
    throw new Error(`Set ${set.id} Teil 2 has duplicated correct keys: ${usedKeys.join(', ')}`);
  }

  t2.items.forEach((item, itemIdx) => {
    const expectedId = 31 + itemIdx;
    if (item.id !== expectedId) {
      throw new Error(`Teil 2 item expected id ${expectedId}, got ${item.id}`);
    }
    const matchingWord = t2.wordBank.find(w => w.key === item.correct);
    if (!matchingWord) {
      throw new Error(`Teil 2 item ${item.id} correct key '${item.correct}' not in wordBank!`);
    }
    REQUIRED_LANGS.forEach(lang => {
      if (!item.rule || !item.rule[lang]) {
        throw new Error(`Teil 2 item ${item.id} rule missing language '${lang}'.`);
      }
    });
  });
});

console.log('✅ All Sprachbausteine sets passed schema, parity, and distractor uniqueness tests.');

// 3. Test Scoring and telc B1 60% Passing Formula
function calculateScore(userAnswers, set) {
  let scoreTeil1 = 0;
  let scoreTeil2 = 0;

  // Teil 1: 10 items * 1.5 pts = 15 pts
  set.teil1.items.forEach(item => {
    if (userAnswers[item.id] === item.correct) {
      scoreTeil1 += 1.5;
    }
  });

  // Teil 2: 10 items * 1.5 pts = 15 pts
  set.teil2.items.forEach(item => {
    if (userAnswers[item.id] === item.correct) {
      scoreTeil2 += 1.5;
    }
  });

  const totalScore = Math.round((scoreTeil1 + scoreTeil2) * 10) / 10;
  const isPassed = totalScore >= 18.0; // 60% of 30 pts = 18.0 pts
  return { scoreTeil1, scoreTeil2, totalScore, isPassed };
}

// Simulated perfect answers
const set1 = dataset[0];
const perfectAnswers = {};
set1.teil1.items.forEach(it => perfectAnswers[it.id] = it.correct);
set1.teil2.items.forEach(it => perfectAnswers[it.id] = it.correct);

const perfectResult = calculateScore(perfectAnswers, set1);
if (perfectResult.totalScore !== 30 || !perfectResult.isPassed) {
  throw new Error(`Perfect score expected 30 pts, got: ${JSON.stringify(perfectResult)}`);
}
console.log('✅ Perfect score calculation verified (30/30 pts, Passed: true).');

// Simulated passing boundary (12 items correct * 1.5 = 18 pts)
const borderAnswers = {};
set1.teil1.items.slice(0, 6).forEach(it => borderAnswers[it.id] = it.correct);
set1.teil2.items.slice(0, 6).forEach(it => borderAnswers[it.id] = it.correct);

const borderResult = calculateScore(borderAnswers, set1);
if (borderResult.totalScore !== 18 || !borderResult.isPassed) {
  throw new Error(`Border score expected 18 pts, got: ${JSON.stringify(borderResult)}`);
}
console.log('✅ Border 60% threshold verified (18/30 pts, Passed: true).');

// Simulated failing score (11 items correct * 1.5 = 16.5 pts)
const failAnswers = {};
set1.teil1.items.slice(0, 5).forEach(it => failAnswers[it.id] = it.correct);
set1.teil2.items.slice(0, 6).forEach(it => failAnswers[it.id] = it.correct);

const failResult = calculateScore(failAnswers, set1);
if (failResult.totalScore !== 16.5 || failResult.isPassed) {
  throw new Error(`Failing score expected 16.5 pts and false, got: ${JSON.stringify(failResult)}`);
}
console.log('✅ Failing score verified (16.5/30 pts, Passed: false).');

console.log('🎉 All Sprachbausteine tests passed successfully!');
process.exit(0);
