#!/usr/bin/env python3
"""
Unit tests for build_2000_dataset compiler and study material generators.
Verifies data generation routines, deduplication logic, and target file alignment.
"""

import os
import sys
import unittest

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)

from scripts.build_2000_dataset import register_core, CORE_ENTRIES, SEEN_CORE
import scripts.generate_grammar as gen_grammar
import scripts.generate_rl as gen_rl
import scripts.generate_ws as gen_ws


class TestDatasetAndGenerators(unittest.TestCase):

    def test_register_core_deduplication(self):
        """Verify register_core ignores duplicate German headwords."""
        self.assertGreater(len(SEEN_CORE), 1000)
        existing_word = next(iter(SEEN_CORE))
        count_before = len(CORE_ENTRIES)

        # Attempt to register an existing headword
        register_core(existing_word, "duplicate_tr", "duplicate_en", "verb", "A1", "Ex", "Ör", "Ex")
        self.assertEqual(len(CORE_ENTRIES), count_before, "Duplicate German word should not increase entry count")

    def test_generator_script_targets_exist_in_docs(self):
        """Verify generator target paths correctly resolve to existing docs/en and docs/tr files."""
        generators = [
            (gen_grammar, "review_grammar_vocab.md"),
            (gen_rl, "review_reading_listening.md"),
            (gen_ws, "review_writing_speaking.md"),
        ]

        for mod, expected_filename in generators:
            self.assertTrue(os.path.isabs(mod.EN_FILE), f"{mod.__name__} EN_FILE must be an absolute path")
            self.assertTrue(os.path.isabs(mod.TR_FILE), f"{mod.__name__} TR_FILE must be an absolute path")
            self.assertTrue(mod.EN_FILE.endswith(os.path.join("docs", "en", expected_filename)))
            self.assertTrue(mod.TR_FILE.endswith(os.path.join("docs", "tr", expected_filename)))
            self.assertTrue(os.path.exists(mod.EN_FILE), f"Generated EN file missing on disk: {mod.EN_FILE}")
            self.assertTrue(os.path.exists(mod.TR_FILE), f"Generated TR file missing on disk: {mod.TR_FILE}")

    def test_generated_content_telc_b1_compliance(self):
        """Verify generator markdown content adheres to telc Deutsch B1 exam specifications."""
        # Check grammar content
        self.assertIn("Sprachbausteine", gen_grammar.en_content)
        self.assertIn("Nebensätze", gen_grammar.en_content)
        self.assertIn("md-quiz", gen_grammar.en_content)
        
        # Check reading & listening content
        self.assertIn("Lesen & Hören", gen_rl.en_content)
        self.assertIn("md-quiz", gen_rl.en_content)

        # Check writing & speaking content
        self.assertIn("Schreiben & Sprechen", gen_ws.en_content)
        self.assertIn("Teil 1", gen_ws.en_content)
        self.assertIn("Teil 2", gen_ws.en_content)

    def test_build_datasets_function_output(self):
        """Verify build_datasets successfully writes valid VOCAB_2000 and VOCAB_B2 files."""
        import tempfile
        from scripts.build_2000_dataset import build_datasets

        with tempfile.TemporaryDirectory() as tmpdir:
            tmp_vocab2000 = os.path.join(tmpdir, "vocab2000.js")
            tmp_vocab_b2 = os.path.join(tmpdir, "vocab_b2.js")

            count_core, count_b2 = build_datasets(tmp_vocab2000, tmp_vocab_b2)

            self.assertEqual(count_core, 2000)
            self.assertGreater(count_b2, 50)
            self.assertTrue(os.path.exists(tmp_vocab2000))
            self.assertTrue(os.path.exists(tmp_vocab_b2))

            with open(tmp_vocab2000, "r", encoding="utf-8") as f:
                core_content = f.read()
            self.assertIn("window.VOCAB_2000 =", core_content)

            with open(tmp_vocab_b2, "r", encoding="utf-8") as f:
                b2_content = f.read()
            self.assertIn("window.VOCAB_B2 =", b2_content)


if __name__ == "__main__":
    unittest.main()

