import unittest
import os
import json
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class TestCommercialAndLegalCompliance(unittest.TestCase):

    def test_license_and_trademark_disclaimer(self):
        """Verify LICENSE file exists and contains copyright and trademark disclaimers."""
        license_path = os.path.join(ROOT_DIR, "LICENSE")
        self.assertTrue(os.path.exists(license_path), "LICENSE file must exist in repository root.")
        with open(license_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("MIT License", content)
        self.assertIn("Ege Engin", content)
        self.assertIn("telc gGmbH", content)
        self.assertIn("Goethe-Institut", content)

    def test_legal_page_ddg_and_gdpr(self):
        """Verify legal.html exists with Impressum (§ 5 DDG) and DSGVO/GDPR privacy."""
        legal_path = os.path.join(ROOT_DIR, "legal.html")
        self.assertTrue(os.path.exists(legal_path), "legal.html must exist for commercial compliance.")
        with open(legal_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("Impressum", content)
        self.assertIn("Digitale-Dienste-Gesetz", content)
        self.assertIn("DSGVO", content)
        self.assertIn("telc", content)
        self.assertIn("localStorage", content)

    def test_trainer_html_commercial_footer(self):
        """Verify trainer.html contains trademark notice and links to legal documentation."""
        trainer_path = os.path.join(ROOT_DIR, "trainer.html")
        self.assertTrue(os.path.exists(trainer_path), "trainer.html must exist.")
        with open(trainer_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("legal.html", content)
        self.assertIn("telc", content)
        self.assertIn("vocab2000.js", content)
        self.assertIn("vocab_b2.js", content)
        self.assertIn("vocabTrainer.js", content)

    def test_manifest_json_validity(self):
        """Verify manifest.json is valid JSON with complete commercial branding."""
        manifest_path = os.path.join(ROOT_DIR, "manifest.json")
        self.assertTrue(os.path.exists(manifest_path), "manifest.json must exist.")
        with open(manifest_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        self.assertEqual(data.get("short_name"), "DeutschLernen")
        self.assertIn("DeutschLernen", data.get("name"))
        self.assertTrue(any("trainer.html" in s.get("url", "") for s in data.get("shortcuts", [])))
        # Verify 512x512 icon is present
        self.assertTrue(any("512x512" in icon.get("sizes", "") for icon in data.get("icons", [])))
        # Verify no A2-B1 in manifest
        self.assertNotIn("A2-B1", data.get("name"))
        self.assertNotIn("A2-B1", data.get("description"))

    def test_service_worker_offline_coverage(self):
        """Verify sw.js caches all essential offline assets including trainer & datasets."""
        sw_path = os.path.join(ROOT_DIR, "sw.js")
        self.assertTrue(os.path.exists(sw_path), "sw.js must exist.")
        with open(sw_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("trainer.html", content)
        self.assertIn("legal.html", content)
        self.assertIn("data/vocab2000.js", content)
        self.assertIn("data/vocab_b2.js", content)
        self.assertIn("js/vocabTrainer.js", content)
        self.assertIn("css/trainer.css", content)
        self.assertIn("icon-512.png", content)

    def test_index_html_telc_b1_adherence(self):
        """Verify index.html adheres strictly to telc Deutsch B1 exam rules (Rule 1 & Rule 8)."""
        index_path = os.path.join(ROOT_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("trainer.html", content)
        self.assertIn("legal.html", content)
        self.assertIn("180 / 300", content)
        self.assertIn("deutschlernen_theme", content)
        # Verify DTZ option is removed
        self.assertNotIn("Option B: telc Deutsch A2-B1 (DTZ)", content)

    def test_i18n_and_turkish_material_parity(self):
        """Verify Turkish and English materials parity and UI dynamic resolution."""
        index_path = os.path.join(ROOT_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            index_content = f.read()

        # Verify index.html loads modularized CSS and JS
        self.assertIn("css/portal.css", index_content, "index.html must reference css/portal.css")
        self.assertIn("js/portal.js", index_content, "index.html must reference js/portal.js")

        portal_js_path = os.path.join(ROOT_DIR, "js", "portal.js")
        self.assertTrue(os.path.exists(portal_js_path), "js/portal.js must exist")
        with open(portal_js_path, "r", encoding="utf-8") as f:
            portal_content = f.read()

        # Verify openMaterial and dynamic card re-rendering exist
        self.assertIn("function openMaterial(index)", portal_content)
        self.assertIn("renderCards(); // Re-render material cards", portal_content)
        self.assertIn("localStorage.setItem('site_lang', lang)", portal_content)

        # Extract material URLs specifically from the materials array
        materials_match = re.search(r"const materials = \[(.*?)\];", portal_content, re.DOTALL)
        self.assertIsNotNone(materials_match, "materials array not found in js/portal.js")
        mat_text = materials_match.group(1)

        en_matches = re.findall(r"en:\s*'([^']+)'", mat_text)
        tr_matches = re.findall(r"tr:\s*'([^']+)'", mat_text)
        self.assertEqual(len(en_matches), len(tr_matches))
        self.assertGreaterEqual(len(en_matches), 10)

        import urllib.parse
        for en_url in en_matches:
            rel = en_url.replace("./", "")
            full_path = os.path.join(ROOT_DIR, rel)
            self.assertTrue(os.path.exists(full_path), f"EN file missing: {full_path}")

        for tr_url in tr_matches:
            rel = urllib.parse.unquote(tr_url.replace("./", ""))
            full_path = os.path.join(ROOT_DIR, rel)
            self.assertTrue(os.path.exists(full_path), f"TR file missing: {full_path}")

        # Verify English curriculum files contain English table headers
        p1_path = os.path.join(ROOT_DIR, "docs", "en", "vocab_part1_verbs_adjectives.md")
        with open(p1_path, "r", encoding="utf-8") as f:
            p1_content = f.read()
        self.assertIn("| English", p1_content, "vocab_part1_verbs_adjectives.md must contain English headers")
        self.assertNotIn("benı", p1_content)

        p2_path = os.path.join(ROOT_DIR, "docs", "en", "vocab_part2_nouns_themes.md")
        with open(p2_path, "r", encoding="utf-8") as f:
            p2_content = f.read()
        self.assertIn("| English", p2_content, "vocab_part2_nouns_themes.md must contain English headers")

        grammar_path = os.path.join(ROOT_DIR, "docs", "en", "review_grammar_vocab.md")
        with open(grammar_path, "r", encoding="utf-8") as f:
            grammar_content = f.read()
        self.assertNotIn("benı", grammar_content, "Grammar review should not contain 'benı' typo")

    def test_trainer_i18n_keys_and_elements(self):
        """Verify trainer.html elements and vocabTrainer.js I18N key parity."""
        trainer_path = os.path.join(ROOT_DIR, "trainer.html")
        with open(trainer_path, "r", encoding="utf-8") as f:
            trainer_content = f.read()

        required_i18n_tags = [
            'data-i18n="arenaSubhint"',
            'data-i18n="levelA1"',
            'data-i18n="levelA2"',
            'data-i18n="levelB1"',
            'data-i18n="portalBack"',
            'data-i18n="impressumLink"',
            'data-i18n="privacyLink"',
            'data-i18n="termsLink"',
            'data-i18n="resetProgressBtn"',
            'data-i18n="accountBtn"',
            'data-i18n="feedbackBtn"',
            'data-i18n="accountTitle"',
            'data-i18n="feedbackTitle"'
        ]
        for tag in required_i18n_tags:
            self.assertIn(tag, trainer_content, f"Missing i18n tag in trainer.html: {tag}")

        # Check vocabTrainer.js I18N dictionary parity
        trainer_js_path = os.path.join(ROOT_DIR, "js", "vocabTrainer.js")
        with open(trainer_js_path, "r", encoding="utf-8") as f:
            js_content = f.read()

        en_block = re.search(r"en:\s*\{([^}]+)\}", js_content)
        tr_block = re.search(r"tr:\s*\{([^}]+)\}", js_content)
        self.assertIsNotNone(en_block)
        self.assertIsNotNone(tr_block)

        en_keys = set(re.findall(r"^\s*([a-zA-Z0-9_]+)\s*:\s*[\"']", en_block.group(1), re.MULTILINE))
        tr_keys = set(re.findall(r"^\s*([a-zA-Z0-9_]+)\s*:\s*[\"']", tr_block.group(1), re.MULTILINE))
        self.assertEqual(en_keys, tr_keys, f"Mismatched I18N keys: {en_keys ^ tr_keys}")

    def test_firebase_cloud_and_feedback_system(self):
        """Verify Firebase configuration, cloud sync, security rules, and CSV exporter."""
        # 1. Config
        cfg_path = os.path.join(ROOT_DIR, "js", "firebaseConfig.js")
        self.assertTrue(os.path.exists(cfg_path), "js/firebaseConfig.js must exist.")
        with open(cfg_path, "r", encoding="utf-8") as f:
            cfg_content = f.read()
        self.assertIn("FIREBASE_CONFIG", cfg_content)
        self.assertIn("isFirebaseConfigured", cfg_content)

        # 2. Service
        srv_path = os.path.join(ROOT_DIR, "js", "firebaseService.js")
        self.assertTrue(os.path.exists(srv_path), "js/firebaseService.js must exist.")
        with open(srv_path, "r", encoding="utf-8") as f:
            srv_content = f.read()
        self.assertIn("FirebaseService", srv_content)
        self.assertIn("syncProgress", srv_content)
        self.assertIn("submitFeedback", srv_content)
        self.assertIn("detectLocation", srv_content)

        # 3. Security Rules
        rules_path = os.path.join(ROOT_DIR, "firestore.rules")
        self.assertTrue(os.path.exists(rules_path), "firestore.rules must exist.")
        with open(rules_path, "r", encoding="utf-8") as f:
            rules_content = f.read()
        self.assertIn("match /users/{userId}", rules_content)
        self.assertIn("request.auth.uid == userId", rules_content)
        self.assertIn("match /feedback/{feedbackId}", rules_content)

        # 4. CSV Exporter
        exporter_path = os.path.join(ROOT_DIR, "scripts", "export_feedback.py")
        self.assertTrue(os.path.exists(exporter_path), "scripts/export_feedback.py must exist.")
        with open(exporter_path, "r", encoding="utf-8") as f:
            exp_content = f.read()
        self.assertIn("DEFAULT_CSV_OUTPUT", exp_content)
        self.assertIn("export_records_to_csv", exp_content)

        # 5. HTML integration checks
        trainer_path = os.path.join(ROOT_DIR, "trainer.html")
        with open(trainer_path, "r", encoding="utf-8") as f:
            tr_content = f.read()
        self.assertIn('id="sync-status-pill"', tr_content)
        self.assertIn('id="auth-modal"', tr_content)
        self.assertIn('id="feedback-modal"', tr_content)
        self.assertIn('id="btn-floating-feedback"', tr_content)
        self.assertIn('firebaseConfig.js', tr_content)
        self.assertIn('firebaseService.js', tr_content)

        index_path = os.path.join(ROOT_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            idx_content = f.read()
        self.assertIn('id="feedback-modal"', idx_content)
        self.assertIn('id="btn-floating-feedback"', idx_content)
        self.assertIn('firebaseConfig.js', idx_content)
        self.assertIn('firebaseService.js', idx_content)

    def test_no_tracked_cache_or_temp_files(self):
        """Verify no __pycache__, .pyc, or .DS_Store files are tracked in Git."""
        import subprocess
        result = subprocess.run(["git", "ls-files"], cwd=ROOT_DIR, capture_output=True, text=True)
        if result.returncode == 0:
            tracked = result.stdout.splitlines()
            forbidden = [f for f in tracked if "__pycache__" in f or f.endswith((".pyc", ".pyo", ".DS_Store"))]
            self.assertEqual(forbidden, [], f"Forbidden cache or OS files tracked in git: {forbidden}")


if __name__ == "__main__":
    unittest.main()
