#!/usr/bin/env python3
"""
Unit tests for Multilingual Consistency and Cross-Language Contamination Prevention.

Verifies:
1. Strict quad-lingual coverage across EN, TR, AR, UK for sample evaluation data & rubric.
2. Prevention of language leakage (e.g. no German words like 'gemeinsam' in Turkish text,
   no English sentences in Arabic or Ukrainian fields).
3. Annotation popover localization for all 4 languages.
4. telc B1 rubric mathematical consistency, pass threshold (27/45), and realistic letter length (>=140 words).
5. UI strings dictionary parity in schreibenShowcase.js.
"""

import json
import os
import re
import unittest

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))


class TestMultilingualConsistency(unittest.TestCase):

    def setUp(self):
        self.sample_eval_path = os.path.join(ROOT_DIR, "js", "sampleEvaluationData.js")
        self.showcase_path = os.path.join(ROOT_DIR, "js", "schreibenShowcase.js")
        self.portal_path = os.path.join(ROOT_DIR, "js", "portal.js")

        with open(self.sample_eval_path, "r", encoding="utf-8") as f:
            self.sample_eval_js = f.read()

        with open(self.showcase_path, "r", encoding="utf-8") as f:
            self.showcase_js = f.read()

        with open(self.portal_path, "r", encoding="utf-8") as f:
            self.portal_js = f.read()

    def _extract_sample_data(self):
        """Extract SAMPLE_B1_EVALUATION JSON object using Node.js for absolute fidelity."""
        import subprocess
        node_code = """
        const { SAMPLE_B1_EVALUATION } = require('./js/sampleEvaluationData.js');
        console.log(JSON.stringify(SAMPLE_B1_EVALUATION));
        """
        proc = subprocess.run(
            ["node", "-e", node_code],
            cwd=ROOT_DIR,
            capture_output=True,
            text=True,
            check=True
        )
        return json.loads(proc.stdout)

    def test_sample_evaluation_quadlingual_completeness(self):
        """Verify all Leitpunkte, Criteria, Annotations, and Upgrades have EN, TR, AR, UK fields."""
        data = self._extract_sample_data()

        # 1. Leitpunkte
        leitpunkte = data["prompt"]["leitpunkte"]
        self.assertEqual(len(leitpunkte), 4, "Must contain all 4 telc B1 Leitpunkte")
        for lp in leitpunkte:
            for lang in ["En", "Tr", "Ar", "Uk"]:
                key = f"text{lang}"
                self.assertIn(key, lp, f"Leitpunkt {lp.get('id')} missing {key}")
                self.assertTrue(len(lp[key].strip()) > 5, f"Leitpunkt {lp.get('id')} has empty {key}")

        # 2. Criteria
        criteria = data["scores"]["criteria"]
        self.assertEqual(len(criteria), 3, "Must contain all 3 telc B1 criteria")
        for c in criteria:
            for lang in ["En", "Tr", "Ar", "Uk"]:
                title_key = f"title{lang}"
                summary_key = f"summary{lang}"
                self.assertIn(title_key, c, f"Criterion {c.get('id')} missing {title_key}")
                self.assertIn(summary_key, c, f"Criterion {c.get('id')} missing {summary_key}")
                self.assertTrue(len(c[title_key].strip()) > 5)
                self.assertTrue(len(c[summary_key].strip()) > 10)

        # 3. Annotations
        annotations = data["annotations"]
        self.assertGreaterEqual(len(annotations), 3, "Must contain at least 3 examiner annotations")
        for ann in annotations:
            for lang in ["En", "Tr", "Ar", "Uk"]:
                exp_key = f"explanation{lang}"
                self.assertIn(exp_key, ann, f"Annotation {ann.get('id')} missing {exp_key}")
                self.assertTrue(len(ann[exp_key].strip()) > 10)

        # 4. B1 Upgrades
        upgrades = data["b1Upgrades"]
        self.assertGreaterEqual(len(upgrades), 2, "Must contain at least 2 B1 sentence upgrades")
        for u in upgrades:
            for lang in ["En", "Tr", "Ar", "Uk"]:
                benefit_key = f"benefit{lang}"
                self.assertIn(benefit_key, u, f"Upgrade missing {benefit_key}")
                self.assertTrue(len(u[benefit_key].strip()) > 10)

    def test_no_language_leakage_in_turkish(self):
        """Verify Turkish content does not leak German or English words (e.g. 'gemeinsam' in textTr)."""
        data = self._extract_sample_data()

        # Check Leitpunkte textTr
        for lp in data["prompt"]["leitpunkte"]:
            text_tr = lp["textTr"]
            self.assertNotIn("gemeinsam", text_tr.lower(),
                             f"German word 'gemeinsam' leaked into Turkish Leitpunkt text: '{text_tr}'")
            self.assertNotIn("which trips", text_tr.lower(),
                             f"English phrase leaked into Turkish Leitpunkt text: '{text_tr}'")

        # Check Annotations explanationTr
        for ann in data["annotations"]:
            exp_tr = ann["explanationTr"]
            self.assertNotIn("when a sentence", exp_tr.lower())
            self.assertNotIn("after long vowels", exp_tr.lower())

        # Check Criteria summaryTr
        for c in data["scores"]["criteria"]:
            sum_tr = c["summaryTr"]
            self.assertNotIn("all 4 leitpunkte were addressed", sum_tr.lower())

    def test_no_language_leakage_in_arabic(self):
        """Verify Arabic content contains Arabic script and does not contain English sentences."""
        data = self._extract_sample_data()
        arabic_regex = re.compile(r"[\u0600-\u06FF]")

        for lp in data["prompt"]["leitpunkte"]:
            text_ar = lp["textAr"]
            self.assertTrue(arabic_regex.search(text_ar), f"Arabic text must contain Arabic characters: {text_ar}")
            self.assertNotIn("Which trips", text_ar)
            self.assertNotIn("What clothes", text_ar)

        for c in data["scores"]["criteria"]:
            sum_ar = c["summaryAr"]
            self.assertTrue(arabic_regex.search(sum_ar), f"Criterion summary must contain Arabic characters: {sum_ar}")
            self.assertNotIn("Score A", sum_ar)
            self.assertNotIn("Score B", sum_ar)

        for ann in data["annotations"]:
            exp_ar = ann["explanationAr"]
            self.assertTrue(arabic_regex.search(exp_ar), f"Annotation explanation must contain Arabic: {exp_ar}")
            self.assertNotIn("When a sentence", exp_ar)
            self.assertNotIn("standard German", exp_ar)

    def test_no_language_leakage_in_ukrainian(self):
        """Verify Ukrainian content contains Cyrillic script and does not contain English sentences."""
        data = self._extract_sample_data()
        cyrillic_regex = re.compile(r"[\u0400-\u04FF]")

        for lp in data["prompt"]["leitpunkte"]:
            text_uk = lp["textUk"]
            self.assertTrue(cyrillic_regex.search(text_uk), f"Ukrainian text must contain Cyrillic: {text_uk}")
            self.assertNotIn("Which trips", text_uk)
            self.assertNotIn("What clothes", text_uk)

        for c in data["scores"]["criteria"]:
            sum_uk = c["summaryUk"]
            self.assertTrue(cyrillic_regex.search(sum_uk), f"Criterion summary must contain Cyrillic: {sum_uk}")
            self.assertNotIn("Score A", sum_uk)
            self.assertNotIn("Score B", sum_uk)

        for ann in data["annotations"]:
            exp_uk = ann["explanationUk"]
            self.assertTrue(cyrillic_regex.search(exp_uk), f"Annotation explanation must contain Cyrillic: {exp_uk}")
            self.assertNotIn("When a sentence", exp_uk)
            self.assertNotIn("standard German", exp_uk)

    def test_b1_rubric_calculation_and_authentic_letter(self):
        """Audit the B1 rubric calculation formula and realistic letter length & German fidelity."""
        data = self._extract_sample_data()
        scores = data["scores"]

        # Formula: (Kriterium I + II + III) * 3 = Total / 45
        c1 = scores["criteria"][0]["rawScore"]
        c2 = scores["criteria"][1]["rawScore"]
        c3 = scores["criteria"][2]["rawScore"]
        raw_sum = c1 + c2 + c3

        self.assertEqual(scores["rawSum"], raw_sum, "rawSum must match the sum of raw scores")
        self.assertEqual(scores["multiplier"], 3, "telc B1 multiplier must be 3")
        self.assertEqual(scores["total"], raw_sum * 3, "Total score must equal rawSum * 3")
        self.assertEqual(scores["maxTotal"], 45, "Max total score for telc B1 Schreiben is 45")
        self.assertEqual(scores["passThreshold"], 27, "Pass threshold for telc B1 Schreiben is 27 (60%)")
        self.assertGreaterEqual(scores["total"], 27, "Sample passing letter must meet or exceed pass threshold 27")

        # Student submission audit
        submission = data["studentSubmission"]
        raw_text = submission["rawText"]
        words = len(re.findall(r"\b\w+\b", raw_text))

        self.assertGreaterEqual(words, 140, "Realistic B1 passing letter should be at least 140 words")
        self.assertNotIn("Write back soon!", raw_text, "Letter must not contain an English slip")
        self.assertIn("Liebe Marianne,", raw_text, "Must have informal greeting")
        self.assertIn("Viele Grüße,", raw_text, "Must have German informal closing")

        # Consistency: if Criterion I is Score A (5/5), all 4 Leitpunkte must be fulfilled
        if c1 == 5:
            for lp in data["prompt"]["leitpunkte"]:
                self.assertEqual(lp["status"], "fulfilled",
                                 f"When Criterion I is Score A, Leitpunkt {lp['id']} must be fulfilled, not partial")

    def test_schreiben_showcase_annotation_rendering_localization(self):
        """Verify renderAnnotatedText in schreibenShowcase.js does not hardcode explanationEn."""
        # Ensure it dynamically evaluates the active language key
        self.assertNotIn("${ann.explanationEn}</small>", self.showcase_js,
                         "renderAnnotatedText must not hardcode explanationEn; it must be localized")
        self.assertIn("SHOWCASE_I18N", self.showcase_js, "Must define SHOWCASE_I18N dictionary")

        # Verify SHOWCASE_I18N has all 4 languages
        for lang in ["en", "tr", "ar", "uk"]:
            self.assertIn(f"{lang}:", self.showcase_js, f"SHOWCASE_I18N must include language '{lang}'")

    def test_schreiben_showcase_ui_keys_parity(self):
        """Verify SHOWCASE_I18N has key parity across en, tr, ar, and uk."""
        import subprocess
        node_code = """
        const { SHOWCASE_I18N } = require('./js/schreibenShowcase.js');
        console.log(JSON.stringify(SHOWCASE_I18N));
        """
        proc = subprocess.run(
            ["node", "-e", node_code],
            cwd=ROOT_DIR,
            capture_output=True,
            text=True,
            check=True
        )
        i18n = json.loads(proc.stdout)
        en_keys = set(i18n["en"].keys())

        for lang in ["tr", "ar", "uk"]:
            lang_keys = set(i18n[lang].keys())
            missing = en_keys - lang_keys
            self.assertEqual(len(missing), 0, f"SHOWCASE_I18N['{lang}'] missing keys: {missing}")

    def test_lid_trainer_ui_keys_parity(self):
        """Verify LID_UI_TEXT has complete key and quad-lingual parity across en, tr, ar, and uk."""
        import subprocess
        node_code = """
        const { LID_UI_TEXT } = require('./js/lidTrainer.js');
        console.log(JSON.stringify(LID_UI_TEXT));
        """
        proc = subprocess.run(
            ["node", "-e", node_code],
            cwd=ROOT_DIR,
            capture_output=True,
            text=True,
            check=True
        )
        ui_text = json.loads(proc.stdout)
        expected_langs = {"en", "tr", "ar", "uk"}

        for key, trans_map in ui_text.items():
            self.assertIsInstance(trans_map, dict, f"LID_UI_TEXT['{key}'] must be a dictionary")
            for lang in expected_langs:
                self.assertIn(lang, trans_map, f"LID_UI_TEXT['{key}'] missing language '{lang}'")
                self.assertTrue(len(trans_map[lang].strip()) > 0, f"LID_UI_TEXT['{key}']['{lang}'] must not be empty")


if __name__ == "__main__":
    unittest.main()
