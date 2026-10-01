/**
 * Unit Test Suite for VoiceExamEngine
 * Validates keyword extraction, stop-word removal, Redemittel detection, and B1 scoring accuracy
 */

const assert = require('assert');
const { VoiceExamEngine, SPEAKING_EXAM_TOPICS, B1_REDEMITTEL_CATALOG } = require('../js/voiceExamEngine.js');

console.log('🧪 Starting VoiceExamEngine test suite...');

// Test 1: Keyword extraction & Stop words
const sampleSpeech = "Ich heiße Ahmet und ich wohne seit zwei Jahren in Berlin mit meiner Familie.";
const kws = VoiceExamEngine.extractKeywords(sampleSpeech);
console.log('Extracted keywords:', kws);
assert(kws.includes('ahmet'), 'Should include substantive name');
assert(kws.includes('berlin'), 'Should include city');
assert(kws.includes('familie'), 'Should include familie');
assert(!kws.includes('ich'), 'Should filter stop word "ich"');
assert(!kws.includes('und'), 'Should filter stop word "und"');

// Test 2: Redemittel detection
const speechWithConnectors = `
Ich schlage vor, dass wir am Samstag eine Abschiedsparty feiern.
Meiner Meinung nach ist das eine gute Idee, weil wir alle zusammenkommen können.
Obwohl es regnen könnte, haben wir einen Raum gemietet.
Deshalb teilen wir uns die Kosten.
`;

const detectedRm = VoiceExamEngine.detectRedemittel(speechWithConnectors);
console.log('Detected Redemittel count:', detectedRm.length);
assert(detectedRm.length >= 4, 'Should detect at least 4 B1 connectors');
const labels = detectedRm.map(r => r.label);
assert(labels.some(l => l.includes('Ich schlage vor')), 'Should detect proposal');
assert(labels.some(l => l.includes('Meiner Meinung nach')), 'Should detect opinion');
assert(labels.some(l => l.includes('obwohl')), 'Should detect obwohl');
assert(labels.some(l => l.includes('weil')), 'Should detect weil');

// Test 3: Full Evaluation against Teil 3 (Abschiedsparty)
const topicT3 = SPEAKING_EXAM_TOPICS.teil3[0];
const fullSpeech = `
Hallo! Ich schlage vor, dass wir am Samstagabend um 19 Uhr eine Abschiedsparty für unseren Kollegen im Park oder in einem Raum feiern.
Ich kann mich um die Getränke und den Kuchen kümmern, oder wir bestellen eine Pizza.
Wir sollten auch ein schönes Geschenk kaufen, zum Beispiel einen Gutschein oder ein Buch, und dafür Geld sammeln.
Die Kosten teilen wir uns einfach durch alle Teilnehmer. Was hältst du davon?
`;

const evalResult = VoiceExamEngine.evaluateSpokenAnswer(fullSpeech, topicT3);
console.log('Evaluation result score:', evalResult.scores.total, 'Passed:', evalResult.isPassed);
assert(evalResult.scores.total >= 75, 'Rich B1 speech should score >= 75');
assert(evalResult.isPassed === true, 'Rich B1 speech should pass exam threshold');
assert(evalResult.coveredLeitpunkte.length >= 4, 'Should cover at least 4 of 5 Leitpunkte');
assert(evalResult.matchedKeywords.length >= 5, 'Should match key vocabulary');

// Test 4: Weak speech evaluation
const weakSpeech = "Ja, hallo. Ich bin hier.";
const weakResult = VoiceExamEngine.evaluateSpokenAnswer(weakSpeech, topicT3);
console.log('Weak speech total score:', weakResult.scores.total, 'Passed:', weakResult.isPassed);
assert(weakResult.scores.total < 60, 'Weak speech should score below 60 passing bar');
assert(weakResult.isPassed === false, 'Weak speech should fail');

console.log('✅ All VoiceExamEngine unit tests passed successfully!');
