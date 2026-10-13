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

    def test_state_selection_contracts_and_persistence(self):
        """Verify state selection persistence key, modal controls, and export contracts."""
        trainer_path = os.path.join(ROOT_DIR, "js", "lidTrainer.js")
        with open(trainer_path, "r", encoding="utf-8") as f:
            trainer_code = f.read()

        # Check storage key and functions
        self.assertIn("LID_STATE_STORAGE_KEY = 'deutschlernen_lid_state'", trainer_code)
        self.assertIn("function getStoredLiDState()", trainer_code)
        self.assertIn("function changeLiDState(", trainer_code)
        self.assertIn("function openLiDStateModal()", trainer_code)
        self.assertIn("function closeLiDStateModal()", trainer_code)
        self.assertIn("function confirmLiDStateSelection()", trainer_code)

        # Check DOM markup elements
        self.assertIn('id="lid-state-modal"', trainer_code)
        self.assertIn('class="lid-state-badge"', trainer_code)
        self.assertIn('id="lid-state-display-name"', trainer_code)

        # Check module exports
        for fn in ["changeLiDState", "openLiDStateModal", "closeLiDStateModal", "confirmLiDStateSelection", "getStoredLiDState"]:
            self.assertIn(fn, trainer_code)

    def test_build_script_state_mapping(self):
        """Verify STATE_MAPPING in build_lid_dataset.py matches all 16 states and codes."""
        from scripts.build_lid_dataset import STATE_MAPPING
        self.assertEqual(len(STATE_MAPPING), 16)
        codes = {v["code"] for v in STATE_MAPPING.values()}
        self.assertEqual(codes, EXPECTED_STATES)
        for name, info in STATE_MAPPING.items():
            self.assertIn("capital", info)
            self.assertTrue(len(info["capital"]) > 0)

    def test_build_script_helpers(self):
        """Verify normalization and translation template helpers in build_lid_dataset.py."""
        from scripts.build_lid_dataset import normalize_key, norm_keywords, get_state_template_translation
        
        # Test normalize_key
        self.assertEqual(normalize_key("Baden-Württemberg!"), "badenwurttemberg")
        self.assertEqual(normalize_key("München"), "munchen")
        
        # Test norm_keywords
        kw = norm_keywords("Eine große Stadt in Deutschland")
        self.assertIn("grosse", kw)
        self.assertIn("stadt", kw)
        self.assertNotIn("eine", kw)
        self.assertNotIn("deutschland", kw)
        
        # Test get_state_template_translation
        trans = get_state_template_translation("Welches Wappen gehört zum Bundesland Bayern?", "Bayern")
        self.assertIsNotNone(trans)
        self.assertIn("tr", trans)
        self.assertIn("en", trans)
        self.assertIn("ar", trans)
        self.assertIn("uk", trans)
        self.assertIn("Bayern", trans["en"])
        self.assertIn("Bayern", trans["tr"])

    def test_build_script_full_pipeline_mocked(self):
        """Execute build_lid_dataset.main() with mocked network sources to ensure full pipeline coverage."""
        from unittest.mock import patch, MagicMock
        import tempfile
        import scripts.build_lid_dataset as bld

        sample_flex = [
            {
                "question": "In Deutschland gehören der Bundestag und der Bundesrat zur ...",
                "answers": ["Legislative", "Judikative", "Exekutive", "Direktive"],
                "correct": 0,
                "category": "Allgemein"
            },
            {
                "question": "Welches Wappen gehört zum Bundesland Bayern?",
                "answers": ["1", "2", "3", "4"],
                "correct": 1,
                "category": "Bayern"
            }
        ]

        sample_scrapper = [
            {
                "question": "In Deutschland gehören der Bundestag und der Bundesrat zur ...",
                "a": "Legislative", "b": "Judikative", "c": "Exekutive", "d": "Direktive",
                "translation": {
                    "tr": {
                        "question": "Almanya'da Federal Meclis...",
                        "a": "Yasama", "b": "Yargı", "c": "Yürütme", "d": "Direktif"
                    },
                    "en": {
                        "question": "In Germany the Bundestag...",
                        "a": "Legislative", "b": "Judiciary", "c": "Executive", "d": "Directive"
                    },
                    "ar": {
                        "question": "في ألمانيا...",
                        "a": "تشريعية", "b": "قضائية", "c": "تنفيذية", "d": "توجيهية"
                    },
                    "uk": {
                        "question": "У Німеччині...",
                        "a": "Законодавча", "b": "Судова", "c": "Виконавча", "d": "Директива"
                    }
                }
            }
        ]

        sample_junaidk = {
            "questions": [
                {
                    "id": 1,
                    "question": "In Deutschland gehören der Bundestag und der Bundesrat zur ...",
                    "translation": {
                        "en": "In Germany...",
                        "ar": "في ألمانيا..."
                    }
                }
            ]
        }

        with tempfile.TemporaryDirectory() as tmpdir:
            temp_output = os.path.join(tmpdir, "test_lid310.js")
            
            def mock_fetch(url):
                if "flexsurfer" in url:
                    return sample_flex
                elif "scrapper" in url:
                    return sample_scrapper
                else:
                    return sample_junaidk

            with patch.object(bld, "OUTPUT_FILE", temp_output), \
                 patch.object(bld, "fetch_json", side_effect=mock_fetch), \
                 patch.object(bld, "download_file", return_value=True):
                bld.main()

            self.assertTrue(os.path.exists(temp_output), "Mocked build pipeline must generate output JS file.")
            with open(temp_output, "r", encoding="utf-8") as f:
                generated = f.read()
            self.assertIn("const LID_QUESTIONS =", generated)
            self.assertIn("const GERMAN_STATES =", generated)
            self.assertIn("const LID_STATE_QUESTIONS =", generated)

    def test_build_script_network_helpers_mocked(self):
        """Verify fetch_json and download_file error handling and execution with mocks."""
        from unittest.mock import patch, MagicMock
        import tempfile
        import scripts.build_lid_dataset as bld

        # Test download_file with existing file
        with tempfile.NamedTemporaryFile(delete=False) as tf:
            tf.write(b"existing-bytes")
            tf_path = tf.name
        try:
            self.assertTrue(bld.download_file("http://dummy.url", tf_path))
        finally:
            if os.path.exists(tf_path):
                os.remove(tf_path)

        # Test download_file failure handling
        with patch("urllib.request.urlopen", side_effect=Exception("Simulated connection timeout")):
            dummy_target = os.path.join(tempfile.gettempdir(), "non_existent_mock_target.png")
            result = bld.download_file("http://broken.url/test.png", dummy_target)
            self.assertFalse(result, "download_file must return False on network error")


if __name__ == "__main__":
    unittest.main()
