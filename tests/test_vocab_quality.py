"""
Automated Test Suite for DeutschLernen Vocabulary Framework.
Validates:
- 100% Bilingual Parity (Turkish & English translations and example sentences)
- CEFR Level & Part of Speech (POS) schema correctness
- Strict adherence to project quality rules (RULES.md Rule 7)
- Distractor generation pool viability
"""

import json
import os
import sys
import unittest

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(BASE_DIR, ".."))
VOCAB2000_PATH = os.path.join(ROOT_DIR, "data", "vocab2000.js")
VOCAB_B2_PATH = os.path.join(ROOT_DIR, "data", "vocab_b2.js")

def load_js_vocab(file_path, var_name):
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Missing file: {file_path}")
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    start_idx = content.find(f"{var_name} = ") + len(f"{var_name} = ")
    end_idx = content.rfind(";")
    json_str = content[start_idx:end_idx].strip()
    return json.loads(json_str)

class TestVocabQuality(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.vocab2000 = load_js_vocab(VOCAB2000_PATH, "window.VOCAB_2000")
        cls.vocab_b2 = load_js_vocab(VOCAB_B2_PATH, "window.VOCAB_B2")

    def test_vocab2000_total_count(self):
        """Verify exactly 2000 entries exist in Core dataset."""
        self.assertEqual(len(self.vocab2000), 2000, f"Expected exactly 2000 entries, found {len(self.vocab2000)}")

    def test_vocab_b2_count(self):
        """Verify B2 Advanced study deck has valid entries."""
        self.assertGreaterEqual(len(self.vocab_b2), 50, f"Expected at least 50 B2 entries, found {len(self.vocab_b2)}")

    def test_bilingual_parity_and_schema(self):
        """Verify 100% bilingual parity (TR & EN) and complete schema for every single item."""
        valid_pos = {"verb", "noun", "adj", "adv", "prep", "conj", "phrase"}
        valid_levels = {"A1", "A2", "B1", "B2"}

        seen_de = set()
        missing_tr = 0
        missing_en = 0
        missing_ex_tr = 0
        missing_ex_en = 0
        invalid_pos = 0
        invalid_level = 0

        for item in self.vocab2000:
            word_id = item.get("id")
            de = item.get("de", "").strip()
            tr = item.get("tr", "").strip()
            en = item.get("en", "").strip()
            pos = item.get("pos", "").strip()
            level = item.get("level", "").strip()
            ex = item.get("example", "").strip()
            ex_tr = item.get("example_tr", "").strip()
            ex_en = item.get("example_en", "").strip()
            syns = item.get("synonyms")
            ants = item.get("antonyms")

            # Check uniqueness
            self.assertNotIn(de, seen_de, f"Duplicate German entry found: '{de}' (ID: {word_id})")
            seen_de.add(de)

            # Check bilingual translations
            if not tr: missing_tr += 1
            if not en: missing_en += 1
            if not ex_tr: missing_ex_tr += 1
            if not ex_en: missing_ex_en += 1

            # Check grammar & CEFR
            if pos not in valid_pos: invalid_pos += 1
            if level not in valid_levels: invalid_level += 1

            self.assertTrue(ex, f"Missing German example for ID {word_id}: '{de}'")
            self.assertIsInstance(syns, list, f"Synonyms must be a list for ID {word_id}")
            self.assertIsInstance(ants, list, f"Antonyms must be a list for ID {word_id}")

        self.assertEqual(missing_tr, 0, f"Found {missing_tr} items missing Turkish translation")
        self.assertEqual(missing_en, 0, f"Found {missing_en} items missing English translation")
        self.assertEqual(missing_ex_tr, 0, f"Found {missing_ex_tr} items missing Turkish example")
        self.assertEqual(missing_ex_en, 0, f"Found {missing_ex_en} items missing English example")
        self.assertEqual(invalid_pos, 0, f"Found {invalid_pos} items with invalid POS")
        self.assertEqual(invalid_level, 0, f"Found {invalid_level} items with invalid CEFR level")

    def test_b2_deck_schema(self):
        """Verify B2 Advanced study deck items adhere to quality schema."""
        for item in self.vocab_b2:
            self.assertTrue(item.get("de"))
            self.assertTrue(item.get("tr"))
            self.assertTrue(item.get("en"))
            self.assertTrue(item.get("example"))
            self.assertTrue(item.get("example_tr"))
            self.assertTrue(item.get("example_en"))
            self.assertEqual(item.get("level"), "B2")

    def test_distractor_pool_coverage(self):
        """Ensure adequate word pools exist per level & POS for 4-choice quiz distractors."""
        pos_counts = {}
        level_counts = {}
        for item in self.vocab2000:
            pos = item["pos"]
            lvl = item["level"]
            pos_counts[pos] = pos_counts.get(pos, 0) + 1
            level_counts[lvl] = level_counts.get(lvl, 0) + 1

        # Every main POS must have at least 50 words for robust 4-option randomization
        for main_pos in ["noun", "verb", "adj", "adv"]:
            self.assertGreater(pos_counts.get(main_pos, 0), 50, f"Insufficient pool for POS '{main_pos}'")

        # Every core CEFR level must have healthy representation
        for lvl in ["A1", "A2", "B1"]:
            self.assertGreater(level_counts.get(lvl, 0), 100, f"Insufficient pool for Level '{lvl}'")

    def test_synonyms_and_antonyms_coverage(self):
        """Verify presence of synonyms and antonyms for matching modes."""
        with_syns = sum(1 for x in self.vocab2000 if len(x.get("synonyms", [])) > 0)
        with_ants = sum(1 for x in self.vocab2000 if len(x.get("antonyms", [])) > 0)
        
        # We need a robust bank of synonyms and antonyms for modes 3 & 4
        self.assertGreaterEqual(with_syns, 200, f"Expected >= 200 items with synonyms, got {with_syns}")
        self.assertGreaterEqual(with_ants, 150, f"Expected >= 150 items with antonyms, got {with_ants}")

if __name__ == "__main__":
    unittest.main(verbosity=2)
