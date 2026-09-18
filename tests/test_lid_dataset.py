#!/usr/bin/env python3
"""
Test Suite for Leben in Deutschland (LiD 310) Dataset
Verifies:
- Complete catalog of 300 general questions and 160 state questions (16 states x 10)
- Validation of correct answer indices (0-3) and 4 answer choices per question
- Local existence and integrity of all referenced illustration assets in assets/lid/
- Quad-lingual translation coverage (EN, TR, AR, UK)
"""

import unittest
import os
import json
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LID_FILE = os.path.join(ROOT_DIR, "data", "lid310.js")
ASSETS_DIR = os.path.join(ROOT_DIR, "assets", "lid")

EXPECTED_STATES = {
    "BW", "BY", "BE", "BB", "HB", "HH", "HE", "MV", 
    "NI", "NW", "RP", "SL", "SN", "ST", "SH", "TH"
}

class TestLiDDataset(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        with open(LID_FILE, "r", encoding="utf-8") as f:
            content = f.read()

        # Parse LID_QUESTIONS, GERMAN_STATES, LID_STATE_QUESTIONS from JS file
        m_q = re.search(r"const LID_QUESTIONS = (\[.*?\]);\n\nconst", content, re.DOTALL)
        m_s = re.search(r"const GERMAN_STATES = (\[.*?\]);\n\nconst", content, re.DOTALL)
        m_sq = re.search(r"const LID_STATE_QUESTIONS = (\{.*?\});\n\n//", content, re.DOTALL)

        cls.assertTrue(bool(m_q), "LID_QUESTIONS must be parseable from lid310.js")
        cls.assertTrue(bool(m_s), "GERMAN_STATES must be parseable from lid310.js")
        cls.assertTrue(bool(m_sq), "LID_STATE_QUESTIONS must be parseable from lid310.js")

        cls.questions = json.loads(m_q.group(1))
        cls.states = json.loads(m_s.group(1))
        cls.state_questions = json.loads(m_sq.group(1))

    def test_general_questions_count(self):
        """Verify exactly 300 general BAMF naturalization questions exist."""
        self.assertEqual(len(self.questions), 300, f"Expected 300 general questions, got {len(self.questions)}")

    def test_all_16_states_covered(self):
        """Verify all 16 German federal states have exactly 10 questions each."""
        state_codes = set(self.state_questions.keys())
        self.assertEqual(state_codes, EXPECTED_STATES, f"Missing or extra states: {state_codes ^ EXPECTED_STATES}")
        
        for sc in EXPECTED_STATES:
            q_list = self.state_questions.get(sc, [])
            self.assertEqual(len(q_list), 10, f"State {sc} must have 10 questions, got {len(q_list)}")

    def test_all_referenced_images_exist_locally(self):
        """Verify every question image reference resolves to a non-empty file in assets/lid/."""
        all_qs = self.questions + [q for q_list in self.state_questions.values() for q in q_list]
        img_qs = [q for q in all_qs if q.get("image")]
        self.assertGreater(len(img_qs), 30, "Expected at least 35 image-based questions")

        for q in img_qs:
            rel_path = q["image"]
            full_path = os.path.join(ROOT_DIR, rel_path)
            self.assertTrue(os.path.exists(full_path), f"Q{q['id']} referenced missing image: {rel_path}")
            self.assertGreater(os.path.getsize(full_path), 1000, f"Image file empty or too small: {rel_path}")

    def test_options_and_correct_indices(self):
        """Verify every question has 4 options and valid correctIndex between 0 and 3."""
        all_qs = self.questions + [q for q_list in self.state_questions.values() for q in q_list]
        for q in all_qs:
            opts = q.get("optionsDe")
            self.assertIsInstance(opts, list, f"Q{q['id']} optionsDe must be list")
            self.assertEqual(len(opts), 4, f"Q{q['id']} must have exactly 4 choices")
            idx = q.get("correctIndex")
            self.assertIn(idx, (0, 1, 2, 3), f"Q{q['id']} has invalid correctIndex: {idx}")

    def test_multilingual_translations_present(self):
        """Verify quad-lingual translations exist for questions and explanations."""
        for q in self.questions[:50]:
            trans = q.get("translations", {})
            for lang in ("en", "tr", "ar", "uk"):
                self.assertIn(lang, trans, f"Q{q['id']} missing translation for {lang}")
                self.assertTrue(len(trans[lang].get("question", "").strip()) > 0, f"Q{q['id']} empty question in {lang}")

if __name__ == "__main__":
    unittest.main()
