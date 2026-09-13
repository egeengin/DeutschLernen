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

    def test_index_html_telc_b1_adherence(self):
        """Verify index.html adheres strictly to telc Deutsch B1 exam rules (Rule 1 & Rule 8)."""
        index_path = os.path.join(ROOT_DIR, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("trainer.html", content)
        self.assertIn("legal.html", content)
        self.assertIn("180 / 300", content)
        # Verify DTZ option is removed
        self.assertNotIn("Option B: telc Deutsch A2-B1 (DTZ)", content)

if __name__ == "__main__":
    unittest.main()
