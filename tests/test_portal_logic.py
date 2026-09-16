#!/usr/bin/env python3
"""
Unit tests for Study Portal and Vocab Trainer core logic contracts,
bilingual UI state, theme management, and star rating badge resolution.
"""

import json
import os
import re
import unittest

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))


class TestPortalLogicAndContracts(unittest.TestCase):

    def setUp(self):
        self.portal_path = os.path.join(ROOT_DIR, "js", "portal.js")
        self.trainer_path = os.path.join(ROOT_DIR, "js", "vocabTrainer.js")
        with open(self.portal_path, "r", encoding="utf-8") as f:
            self.portal_js = f.read()
        with open(self.trainer_path, "r", encoding="utf-8") as f:
            self.trainer_js = f.read()

    def test_star_rating_labels_parity_and_coverage(self):
        """Verify star rating score badge labels 1 to 5 exist in both portal.js and vocabTrainer.js."""
        expected_en = {
            1: "1/5 — Poor",
            2: "2/5 — Needs Improvement",
            3: "3/5 — Good",
            4: "4/5 — Very Good",
            5: "5/5 — Excellent"
        }
        expected_tr = {
            1: "1/5 — Zayıf",
            2: "2/5 — Geliştirilmeli",
            3: "3/5 — İyi",
            4: "4/5 — Çok İyi",
            5: "5/5 — Mükemmel"
        }

        for score, label_en in expected_en.items():
            self.assertIn(label_en, self.portal_js, f"portal.js missing EN rating label for {score}")
            self.assertIn(label_en, self.trainer_js, f"vocabTrainer.js missing EN rating label for {score}")

        for score, label_tr in expected_tr.items():
            self.assertIn(label_tr, self.portal_js, f"portal.js missing TR rating label for {score}")
            self.assertIn(label_tr, self.trainer_js, f"vocabTrainer.js missing TR rating label for {score}")

    def test_theme_keys_consistency(self):
        """Verify both portal.js and vocabTrainer.js check and set the primary theme key deutschlernen_theme."""
        self.assertIn("deutschlernen_theme", self.portal_js)
        self.assertIn("deutschlernen_theme", self.trainer_js)
        self.assertIn("data-theme", self.portal_js)
        self.assertIn("data-theme", self.trainer_js)

    def test_materials_count_and_bilingual_routes(self):
        """Verify portal.js contains exactly 10 study materials with valid docs/en and docs/tr routes."""
        materials_match = re.search(r"const materials = \[(.*?)\];", self.portal_js, re.DOTALL)
        self.assertIsNotNone(materials_match)

        en_paths = re.findall(r"en:\s*'([^']+)'", materials_match.group(1))
        tr_paths = re.findall(r"tr:\s*'([^']+)'", materials_match.group(1))

        self.assertEqual(len(en_paths), 10, "Study portal must offer exactly 10 materials in English")
        self.assertEqual(len(tr_paths), 10, "Study portal must offer exactly 10 materials in Turkish")

        for p in en_paths:
            self.assertTrue(p.startswith("./docs/en/"), f"EN path should use ./docs/en/: {p}")
            disk_p = os.path.join(ROOT_DIR, p.replace("./", ""))
            self.assertTrue(os.path.exists(disk_p), f"EN file must exist on disk: {disk_p}")

        for p in tr_paths:
            self.assertTrue(p.startswith("./docs/tr/"), f"TR path should use ./docs/tr/: {p}")
            disk_p = os.path.join(ROOT_DIR, p.replace("./", ""))
            self.assertTrue(os.path.exists(disk_p), f"TR file must exist on disk: {disk_p}")

    def test_study_plan_30_day_milestones(self):
        """Verify 30-day study plan documents in both languages contain the 4-week structure."""
        en_plan = os.path.join(ROOT_DIR, "docs", "en", "1_month_study_plan.md")
        tr_plan = os.path.join(ROOT_DIR, "docs", "tr", "1_month_study_plan.md")

        with open(en_plan, "r", encoding="utf-8") as f:
            en_content = f.read()
        with open(tr_plan, "r", encoding="utf-8") as f:
            tr_content = f.read()

        self.assertIn("Week 1", en_content)
        self.assertIn("Week 4", en_content)
        self.assertIn("1. Hafta", tr_content)
        self.assertIn("4. Hafta", tr_content)

    def test_markdown_quiz_elements_parity(self):
        """Verify markdown files with interactive quizzes contain valid data-question and data-options."""
        md_files = []
        for root_dir_name in ["docs/en", "docs/tr"]:
            dir_path = os.path.join(ROOT_DIR, root_dir_name)
            for fname in os.listdir(dir_path):
                if fname.endswith(".md"):
                    md_files.append(os.path.join(dir_path, fname))

        quiz_count = 0
        quiz_regex = re.compile(r'<div\s+class="md-quiz"[^>]*data-question="([^"]+)"[^>]*data-options="([^"]+)"[^>]*data-answer="(\d+)"', re.DOTALL)

        for fpath in md_files:
            with open(fpath, "r", encoding="utf-8") as f:
                content = f.read()
            for match in quiz_regex.finditer(content):
                quiz_count += 1
                q, opts, ans = match.group(1), match.group(2).split("|"), int(match.group(3))
                self.assertGreaterEqual(len(opts), 2, f"Quiz question must have >=2 options: {q}")
                self.assertTrue(0 <= ans < len(opts), f"Quiz answer index {ans} out of bounds for options: {opts}")

        self.assertGreater(quiz_count, 10, "Should find multiple interactive markdown quizzes across curriculum")

    def test_entrance_modal_and_goal_configuration(self):
        """Verify entrance modal markup, goals configuration, and persistence hooks."""
        index_path = os.path.join(ROOT_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            index_html = f.read()

        # Check DOM entrance modal hooks
        self.assertIn('id="entrance-modal"', index_html)
        self.assertIn('id="current-goal-btn"', index_html)
        self.assertIn('class="sidebar-goal-badge"', index_html)
        self.assertIn('id="hero-goal-strip"', index_html)
        self.assertIn('card-goal-a1-a2', index_html)
        self.assertIn('card-goal-b1', index_html)
        self.assertIn('card-goal-b2', index_html)
        self.assertIn('card-goal-vocab', index_html)

        # Check portal.js goal config & persistence
        self.assertIn("const GOAL_CONFIG = {", self.portal_js)
        self.assertIn("'goal-a1-a2':", self.portal_js)
        self.assertIn("'goal-b1':", self.portal_js)
        self.assertIn("'goal-b2':", self.portal_js)
        self.assertIn("'goal-vocab':", self.portal_js)
        self.assertIn("deutschlernen_goal", self.portal_js)
        self.assertIn("deutschlernen_level", self.portal_js)

    def test_multi_level_trainer_contracts(self):
        """Verify trainer.html and vocabTrainer.js support A1, A2, B1, and B2 CEFR levels."""
        trainer_path = os.path.join(ROOT_DIR, "trainer.html")
        with open(trainer_path, "r", encoding="utf-8") as f:
            trainer_html = f.read()

        # Check trainer.html has all CEFR level options
        self.assertIn('value="A1"', trainer_html)
        self.assertIn('value="A2"', trainer_html)
        self.assertIn('value="B1"', trainer_html)
        self.assertIn('value="B2"', trainer_html)
        self.assertIn('data-i18n="levelB2"', trainer_html)

        # Check vocabTrainer.js I18N support
        self.assertIn('levelB2: "B2 Level"', self.trainer_js)
        self.assertIn('levelB2: "B2 Seviyesi"', self.trainer_js)
        # Check URL parameter parsing
        self.assertIn("params.get('level')", self.trainer_js)


if __name__ == "__main__":
    unittest.main()
