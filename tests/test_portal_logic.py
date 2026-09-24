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

    def test_fehlerheft_localization_and_portal_clean_approach(self):
        """Verify Fehlerheft exact Turkish translation and clean portal layout structure."""
        fh_path = os.path.join(ROOT_DIR, "js", "fehlerheft.js")
        with open(fh_path, "r", encoding="utf-8") as f:
            fh_content = f.read()

        # Check exact required Turkish text
        self.assertIn('tr: "Hata defteriniz boş."', fh_content, "Fehlerheft must have exact Turkish text 'Hata defteriniz boş.'")
        self.assertIn('en: "Your mistake notebook is empty."', fh_content, "Fehlerheft must have English translation")

        # Verify setLang in portal.js calls renderFehlerheftDashboard
        self.assertIn("renderFehlerheftDashboard('fehlerheft-container')", self.portal_js,
                      "setLang in portal.js must trigger renderFehlerheftDashboard")

        # Verify toggleSchreibenShowcase exists in portal.js
        self.assertIn("function toggleSchreibenShowcase", self.portal_js)
        self.assertIn("window.toggleSchreibenShowcase = toggleSchreibenShowcase", self.portal_js)

        # Verify index.html clean layout: materials must appear before fehlerheft and schreiben-showcase in track-view-b1
        index_path = os.path.join(ROOT_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            index_html = f.read()

        b1_pos = index_html.find('id="track-view-b1"')
        materials_pos = index_html.find('id="materials"', b1_pos)
        fehlerheft_pos = index_html.find('id="fehlerheft-section"', b1_pos)
        showcase_pos = index_html.find('id="schreiben-showcase-section"', b1_pos)

        self.assertNotEqual(materials_pos, -1, "materials must be in track-view-b1")
        self.assertNotEqual(fehlerheft_pos, -1, "fehlerheft-section must be in track-view-b1")
        self.assertNotEqual(showcase_pos, -1, "schreiben-showcase-section must be in track-view-b1")

        self.assertLess(materials_pos, fehlerheft_pos, "Materials must come before Fehlerheft for a clean approach")
        self.assertLess(materials_pos, showcase_pos, "Materials must come before Schreiben Showcase for a clean approach")
        self.assertIn('id="schreiben-showcase-drawer"', index_html, "Schreiben showcase must have a collapsible drawer")
        self.assertIn('id="btn-toggle-showcase"', index_html, "Toggle button must exist for clean collapsible approach")

    def test_track_isolation_and_dynamic_hero_stats(self):
        """Verify dedicated track views and dynamic hero stats prevent B1 clutter on Vocab & LiD tracks."""
        index_path = os.path.join(ROOT_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            index_html = f.read()

        # Check track view containers
        self.assertIn('id="track-view-b1"', index_html)
        self.assertIn('id="track-view-vocab"', index_html)
        self.assertIn('id="track-view-lid"', index_html)

        # Check hero stats configuration and update function in portal.js
        self.assertIn("const HERO_STATS_CONFIG = {", self.portal_js)
        self.assertIn("function updateHeroStats(trackId)", self.portal_js)
        self.assertIn("updateHeroStats(trackId)", self.portal_js)

        # Check hash routing in portal.js
        self.assertIn("window.addEventListener('hashchange'", self.portal_js)
        self.assertIn("switchTrack('lid')", self.portal_js)
        self.assertIn("switchTrack('vocab')", self.portal_js)

        # Check back link in trainer.html points to index.html#vocab and persists vocab track
        trainer_path = os.path.join(ROOT_DIR, "trainer.html")
        with open(trainer_path, "r", encoding="utf-8") as f:
            trainer_html = f.read()
        self.assertIn('href="index.html#vocab"', trainer_html)
        self.assertIn("localStorage.setItem('deutschlernen_track', 'vocab')", trainer_html)
        self.assertIn('href="index.html#lid"', trainer_html)

    def test_lid_link_and_tour_translation_controls(self):
        """Verify Leben in Deutschland links work properly and tour 1 vs 2 translation controls exist."""
        lid_path = os.path.join(ROOT_DIR, "js", "lidTrainer.js")
        with open(lid_path, "r", encoding="utf-8") as f:
            lid_js = f.read()

        # Tour 1 & 2 UI text
        self.assertIn("transHintOpen:", lid_js)
        self.assertIn("transHintClose:", lid_js)
        self.assertIn("transActiveBadge:", lid_js)
        self.assertIn("transInactiveBadge:", lid_js)

        # Inline toggle controls and translation box
        self.assertIn("lid-trans-inline-hint-btn", lid_js)
        self.assertIn("lid-q-translation-box", lid_js)
        self.assertIn("lid-trans-mode-btn", lid_js)

        # Goal action strip handles LiD switch
        self.assertIn("switchTrack('lid')", self.portal_js)
        self.assertIn("lid-trainer-section", self.portal_js)

    def test_lid_exam_checklist_and_review_modes(self):
        """Verify Leben in Deutschland high-yield checklist dataset, dual review modes, and DOM hooks."""
        checklist_data_path = os.path.join(ROOT_DIR, "data", "lidChecklistData.js")
        checklist_js_path = os.path.join(ROOT_DIR, "js", "lidChecklist.js")
        index_path = os.path.join(ROOT_DIR, "index.html")

        self.assertTrue(os.path.exists(checklist_data_path), "lidChecklistData.js must exist")
        self.assertTrue(os.path.exists(checklist_js_path), "lidChecklist.js must exist")

        with open(checklist_data_path, "r", encoding="utf-8") as f:
            data_content = f.read()
        with open(checklist_js_path, "r", encoding="utf-8") as f:
            js_content = f.read()
        with open(index_path, "r", encoding="utf-8") as f:
            index_html = f.read()

        # Check dataset coverage: 25 facts and 6 categories
        self.assertIn("const LID_CHECKLIST_DATA = [", data_content)
        self.assertIn("const LID_CHECKLIST_CATEGORIES = {", data_content)
        for i in range(1, 26):
            self.assertIn(f"id: {i},", data_content, f"Checklist must include fact #{i}")

        # Check pureDe and multilingual mixed fields
        for field in ["pureDe:", "mixedTr:", "mixedEn:", "mixedAr:", "mixedUk:", "keywords:", "bamfQuestions:"]:
            count = len(re.findall(rf"\b{field}", data_content))
            self.assertEqual(count, 25, f"All 25 facts must define {field}")

        # Check dual review modes and methods in lidChecklist.js
        self.assertIn("renderLiDChecklist", js_content)
        self.assertIn("toggleLiDChecklistMode", js_content)
        self.assertIn("toggleLiDChecklistItem", js_content)
        self.assertIn("filterLiDChecklistByCategory", js_content)
        self.assertIn("filterLiDChecklistBySearch", js_content)
        self.assertIn("isLiDPureGermanMode", js_content)
        self.assertIn("deutschlernen_lid_checklist_progress", js_content)

        # Check DOM containers and scripts in index.html
        self.assertIn('id="lid-checklist-section"', index_html)
        self.assertIn('id="lid-checklist-container"', index_html)
        self.assertIn('src="data/lidChecklistData.js"', index_html)
        self.assertIn('src="js/lidChecklist.js"', index_html)

        # Check portal.js hooks
        self.assertIn("renderLiDChecklist('lid-checklist-container')", self.portal_js)

    def test_sidebar_track_specific_isolation_and_compact_hero(self):
        """Verify sidebar sub-navigation adapts per track and active bar is streamlined and compact."""
        index_path = os.path.join(ROOT_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            index_html = f.read()

        # Check DOM IDs for header and stats
        self.assertIn('id="sidebar-nav-header"', index_html)
        self.assertIn('id="hero-stats"', index_html)
        self.assertIn('id="hero-goal-strip"', index_html)

        # Verify closeMarkdown(true) is invoked when switching tracks
        self.assertIn("closeMarkdown(true);", self.portal_js)

        # Verify navigation helpers are defined
        for fn in ["openB1Module", "navigateToSection", "navigateToLiDStateMode", "navigateToLiDSimulation", "navigateToExaminerSuite"]:
            self.assertIn(f"function {fn}", self.portal_js)
            self.assertIn(f"window.{fn} = {fn}", self.portal_js)

        # Verify renderSidebar has distinct track branches
        self.assertIn("if (track === 'vocab')", self.portal_js)
        self.assertIn("else if (track === 'lid')", self.portal_js)

        # Verify CSS compact hero and sleek stats
        css_path = os.path.join(ROOT_DIR, "css", "portal.css")
        with open(css_path, "r", encoding="utf-8") as f:
            portal_css = f.read()
        self.assertIn(".sidebar-sub-divider", portal_css)
        self.assertIn(".hero-stat .val", portal_css)

    def test_minimalist_track_isolation_and_pastel_palette(self):
        """Verify switchTrack syncs goal to active track and pastel tokens are properly defined."""
        # 1. Goal synchronization in switchTrack
        self.assertIn("currentGoalId = 'goal-lid';", self.portal_js)
        self.assertIn("currentGoalId = 'goal-vocab';", self.portal_js)
        self.assertIn("updateGoalDisplays();", self.portal_js)

        # 2. Pre-synchronization in initEntranceGoal
        self.assertIn("let targetTrack = 'b1';", self.portal_js)
        self.assertIn("currentTrack = targetTrack;", self.portal_js)
        self.assertIn("switchTrack(targetTrack);", self.portal_js)

        # 3. Trending pastel CSS design tokens
        css_path = os.path.join(ROOT_DIR, "css", "portal.css")
        with open(css_path, "r", encoding="utf-8") as f:
            portal_css = f.read()
        self.assertIn("--pastel-sage", portal_css)
        self.assertIn("--pastel-butter", portal_css)
        self.assertIn("--pastel-lavender", portal_css)
        self.assertIn("--pastel-peach", portal_css)
        self.assertIn("--pastel-sky", portal_css)

        # 4. Clean sidebar without persistent B1 text leakage
        index_path = os.path.join(ROOT_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            index_html = f.read()
        self.assertNotIn("10 Modules & Plan", index_html)
        self.assertNotIn(">30-Day B1 Exam Plan<", index_html)
        self.assertNotIn("STUDY MODULES (10)", index_html)


if __name__ == "__main__":
    unittest.main()




