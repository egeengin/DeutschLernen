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
        self.assertIn('card-goal-lid', index_html)

        # Check portal.js goal config & persistence
        self.assertIn("const GOAL_CONFIG = {", self.portal_js)
        self.assertIn("'goal-a1-a2':", self.portal_js)
        self.assertIn("'goal-b1':", self.portal_js)
        self.assertIn("'goal-b2':", self.portal_js)
        self.assertIn("'goal-vocab':", self.portal_js)
        self.assertIn("'goal-lid':", self.portal_js)
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

    def test_multilingual_arabic_ukrainian_support(self):
        """Verify Arabic and Ukrainian support across portal.js, vocabTrainer.js, and index.html."""
        index_path = os.path.join(ROOT_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            index_html = f.read()

        # Check global lang buttons in index.html for EN, TR, AR, UK
        self.assertIn("onclick=\"setLang('ar')\"", index_html)
        self.assertIn("onclick=\"setLang('uk')\"", index_html)
        self.assertIn('value="ar"', index_html)
        self.assertIn('value="uk"', index_html)

        # Check data-ar and data-uk attribute parity with data-en
        en_count = len(re.findall(r'data-en="[^"]*"', index_html))
        ar_count = len(re.findall(r'data-ar="[^"]*"', index_html))
        uk_count = len(re.findall(r'data-uk="[^"]*"', index_html))
        self.assertGreater(en_count, 50, "Should have dozens of multilingual elements in index.html")
        self.assertEqual(en_count, ar_count, "All data-en elements must have data-ar")
        self.assertEqual(en_count, uk_count, "All data-en elements must have data-uk")

        # Check rating labels for AR and UK in portal.js and vocabTrainer.js
        expected_ar = {
            1: "1/5 — ضعيف",
            2: "2/5 — يحتاج تحسين",
            3: "3/5 — جيد",
            4: "4/5 — جيد جداً",
            5: "5/5 — ممتاز"
        }
        expected_uk = {
            1: "1/5 — Погано",
            2: "2/5 — Потребує покращення",
            3: "3/5 — Добре",
            4: "4/5 — Дуже добре",
            5: "5/5 — Відмінно"
        }

        for score, label in expected_ar.items():
            self.assertIn(label, self.portal_js)
            self.assertIn(label, self.trainer_js)

        for score, label in expected_uk.items():
            self.assertIn(label, self.portal_js)
            self.assertIn(label, self.trainer_js)

        # Check helper methods in vocabTrainer.js
        self.assertIn("getMeaning(item)", self.trainer_js)
        self.assertIn("getExample(item)", self.trainer_js)
        self.assertIn("setLanguage(lang)", self.trainer_js)

    def test_portal_declaration_order_no_reference_error(self):
        """Verify that ratingLabels is defined before setLang is invoked in portal.js to prevent TDZ ReferenceError."""
        rating_labels_pos = self.portal_js.find("const ratingLabels = {")
        set_lang_invoked_pos = self.portal_js.find("setLang(savedLang);")
        self.assertNotEqual(rating_labels_pos, -1, "ratingLabels must be declared in portal.js")
        self.assertNotEqual(set_lang_invoked_pos, -1, "setLang(savedLang) must be invoked in portal.js")
        self.assertLess(rating_labels_pos, set_lang_invoked_pos,
                        "ratingLabels must be defined before setLang(savedLang) is executed to prevent ReferenceError")

    def test_firebase_auth_resilience_and_redirect_methods(self):
        """Verify FirebaseService supports redirect sign-in, formatAuthError, and GoogleAuthProvider configuration."""
        fb_path = os.path.join(ROOT_DIR, "js", "firebaseService.js")
        with open(fb_path, "r", encoding="utf-8") as f:
            fb_content = f.read()

        self.assertIn("signInWithRedirect", fb_content)
        self.assertIn("getRedirectResult", fb_content)
        self.assertIn("formatAuthError", fb_content)
        self.assertIn("auth/unauthorized-domain", fb_content)
        self.assertIn("auth/popup-blocked", fb_content)
        self.assertIn("auth/cancelled-popup-request", fb_content)
        self.assertIn("select_account", fb_content)

    def test_sidebar_multilingual_no_leakage(self):
        """Verify left sidebar has complete multilingual contracts across EN, TR, AR, UK with zero leakage."""
        index_path = os.path.join(ROOT_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            index_html = f.read()

        # Find sidebar block
        sidebar_start = index_html.find('<nav class="sidebar"')
        sidebar_end = index_html.find('</nav>', sidebar_start)
        self.assertNotEqual(sidebar_start, -1, "Sidebar must exist in index.html")
        sidebar_html = index_html[sidebar_start:sidebar_end]

        # Verify key sidebar elements have data-en, data-tr, data-ar, data-uk
        sidebar_data_en = re.findall(r'data-en="([^"]+)"', sidebar_html)
        sidebar_data_tr = re.findall(r'data-tr="([^"]+)"', sidebar_html)
        sidebar_data_ar = re.findall(r'data-ar="([^"]+)"', sidebar_html)
        sidebar_data_uk = re.findall(r'data-uk="([^"]+)"', sidebar_html)

        self.assertEqual(len(sidebar_data_en), len(sidebar_data_tr), "Sidebar data-tr count must match data-en")
        self.assertEqual(len(sidebar_data_en), len(sidebar_data_ar), "Sidebar data-ar count must match data-en")
        self.assertEqual(len(sidebar_data_en), len(sidebar_data_uk), "Sidebar data-uk count must match data-en")
        self.assertGreaterEqual(len(sidebar_data_en), 6, "Sidebar must contain at least 6 translatable elements")

        # Verify all 10 materials have all 4 language titles
        mat_match = re.search(r"const materials = \[(.*?)\];", self.portal_js, re.DOTALL)
        self.assertIsNotNone(mat_match, "materials array must exist in portal.js")
        mat_content = mat_match.group(1)
        for key in ["titleTr", "titleAr", "titleUk"]:
            count = len(re.findall(rf"{key}:", mat_content))
            self.assertEqual(count, 10, f"Materials must define 10 occurrences of {key}")

        # Verify getMaterialField does not leak Turkish in en, ar, uk
        self.assertIn("if (currentLang === 'tr') return m[field + 'Tr']", self.portal_js)
        self.assertIn("if (currentLang === 'ar') return m[field + 'Ar']", self.portal_js)
        self.assertIn("if (currentLang === 'uk') return m[field + 'Uk']", self.portal_js)

        # Verify GOAL_CONFIG has full 4-language parity for all goals
        goal_ids = ['goal-a1-a2', 'goal-b1', 'goal-b2', 'goal-c1', 'goal-vocab', 'goal-lid']
        for gid in goal_ids:
            self.assertIn(f"'{gid}':", self.portal_js)
            for lang_suffix in ['En', 'Tr', 'Ar', 'Uk']:
                self.assertIn(f"name{lang_suffix}:", self.portal_js, f"Missing name{lang_suffix} in portal.js")
                self.assertIn(f"hint{lang_suffix}:", self.portal_js, f"Missing hint{lang_suffix} in portal.js")

    def test_service_worker_auth_bypass(self):
        """Verify service worker explicitly bypasses Firebase Auth, Firestore, and non-GET requests."""
        sw_path = os.path.join(ROOT_DIR, "sw.js")
        with open(sw_path, "r", encoding="utf-8") as f:
            sw_content = f.read()

        self.assertIn("event.request.method !== 'GET'", sw_content)
        self.assertIn("identitytoolkit.googleapis.com", sw_content)
        self.assertIn("firestore.googleapis.com", sw_content)
        self.assertIn("securetoken.googleapis.com", sw_content)


if __name__ == "__main__":
    unittest.main()


