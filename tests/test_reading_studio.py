import unittest
import os
import re
import json

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class TestReadingStudio(unittest.TestCase):
    """Automated test suite verifying the Lesen Studio (Readlang & Todaii hybrid) module."""

    def test_lesen_html_exists_and_valid(self):
        """Verify lesen.html exists, has valid structure and loads all required scripts."""
        path = os.path.join(ROOT_DIR, "lesen.html")
        self.assertTrue(os.path.exists(path), "lesen.html must exist.")
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()

        self.assertIn("<!DOCTYPE html>", content)
        self.assertIn("css/lesen.css", content)
        self.assertIn("data/vocab2000.js", content)
        self.assertIn("data/readingData.js", content)
        self.assertIn("js/lesenApp.js", content)
        self.assertIn("lookup-modal", content)
        self.assertIn("part-tabs", content)
        self.assertIn("questions-container", content)
        self.assertIn("saved-words-list", content)

    def test_reading_css_integrity(self):
        """Verify css/lesen.css contains essential styling, dark/light theme, and RTL support."""
        path = os.path.join(ROOT_DIR, "css", "lesen.css")
        self.assertTrue(os.path.exists(path), "css/lesen.css must exist.")
        with open(path, "r", encoding="utf-8") as f:
            css = f.read()

        self.assertIn(":root", css)
        self.assertIn("data-theme=\"light\"", css)
        self.assertIn(".w-tok", css)
        self.assertIn(".ls-lookup-modal", css)
        self.assertIn("[dir=\"rtl\"]", css)

    def test_reading_js_app_integrity(self):
        """Verify js/lesenApp.js contains core engine features for Readlang & Todaii modes."""
        path = os.path.join(ROOT_DIR, "js", "lesenApp.js")
        self.assertTrue(os.path.exists(path), "js/lesenApp.js must exist.")
        with open(path, "r", encoding="utf-8") as f:
            js = f.read()

        self.assertIn("class LesenApp", js)
        self.assertIn("tokenizeText", js)
        self.assertIn("openWordLookup", js)
        self.assertIn("handleAnswer", js)
        self.assertIn("toggleTimer", js)
        self.assertIn("deutschlernen_saved_reading_words", js)

    def test_reading_dataset_multilingual_parity(self):
        """Verify data/readingData.js has full 4-language parity (EN, TR, AR, UK) across all fields."""
        path = os.path.join(ROOT_DIR, "data", "readingData.js")
        self.assertTrue(os.path.exists(path), "data/readingData.js must exist.")
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()

        # Extract JSON array from window.READING_DATASET = [...]
        match = re.search(r'window\.READING_DATASET\s*=\s*(\[[\s\S]*?\]);\s*$', content.strip())
        self.assertIsNotNone(match, "window.READING_DATASET must be defined as an array.")
        
        data = json.loads(match.group(1))
        self.assertGreaterEqual(len(data), 4, "Must contain at least 4 telc B1 reading units.")

        required_langs = ['de', 'en', 'tr', 'ar', 'uk']
        trans_langs = ['en', 'tr', 'ar', 'uk']

        for unit in data:
            self.assertIn('id', unit)
            self.assertIn('part', unit)
            self.assertIn('level', unit)
            self.assertEqual(unit['level'], 'B1')

            # Verify title and summary in 5 languages
            for lang in required_langs:
                self.assertIn(lang, unit['title'], f"Missing {lang} title in {unit['id']}")
                self.assertTrue(unit['title'][lang].strip(), f"Empty {lang} title in {unit['id']}")
                self.assertIn(lang, unit['summary'], f"Missing {lang} summary in {unit['id']}")
                self.assertTrue(unit['summary'][lang].strip(), f"Empty {lang} summary in {unit['id']}")

            # Verify content paragraphs
            self.assertGreaterEqual(len(unit['contentParagraphs']), 2, f"Unit {unit['id']} needs >=2 paragraphs")
            for para in unit['contentParagraphs']:
                self.assertIn('id', para)
                self.assertTrue(para['de'].strip())

            # Verify glossary items
            self.assertGreaterEqual(len(unit['glossary']), 4, f"Unit {unit['id']} needs >=4 glossary items")
            for gloss in unit['glossary']:
                self.assertTrue(gloss['de'].strip())
                for lang in trans_langs:
                    self.assertIn(lang, gloss, f"Missing {lang} translation in glossary {gloss['de']}")
                    self.assertTrue(gloss[lang].strip(), f"Empty {lang} translation in glossary {gloss['de']}")

            # Verify questions
            self.assertGreaterEqual(len(unit['questions']), 3, f"Unit {unit['id']} needs >=3 questions")
            for q in unit['questions']:
                self.assertIn('id', q)
                self.assertIn('paragraphRef', q)
                self.assertIn(q['type'], ['multiple_choice', 'true_false'])
                self.assertIn('correct', q)
                self.assertGreaterEqual(q['correct'], 0)
                self.assertLess(q['correct'], len(q['options']))

                # Verify prompts & explanations in 5 languages
                for lang in required_langs:
                    self.assertIn(lang, q['prompt'], f"Missing {lang} prompt in question {q['id']}")
                    self.assertTrue(q['prompt'][lang].strip())
                    self.assertIn(lang, q['explanation'], f"Missing {lang} explanation in question {q['id']}")
                    self.assertTrue(q['explanation'][lang].strip())

                # Verify options
                for opt in q['options']:
                    for lang in required_langs:
                        self.assertIn(lang, opt, f"Missing {lang} option text in question {q['id']}")
                        self.assertTrue(opt[lang].strip())

    def test_exam_identity_compliance(self):
        """Verify telc Deutsch B1 naming compliance and zero usage of banned terms like DTZ."""
        files_to_check = [
            os.path.join(ROOT_DIR, "lesen.html"),
            os.path.join(ROOT_DIR, "js", "lesenApp.js"),
            os.path.join(ROOT_DIR, "data", "readingData.js")
        ]
        banned = ["DTZ", "Deutsch-Test für Zuwanderer", "A2-B1", "Zertifikat Deutsch"]
        for fpath in files_to_check:
            with open(fpath, "r", encoding="utf-8") as f:
                content = f.read()
            for b in banned:
                self.assertNotIn(b, content, f"Banned phrase '{b}' found in {fpath}")

    def test_service_worker_asset_caching(self):
        """Verify sw.js caches the new lesen module files."""
        sw_path = os.path.join(ROOT_DIR, "sw.js")
        with open(sw_path, "r", encoding="utf-8") as f:
            content = f.read()

        self.assertIn("./lesen.html", content)
        self.assertIn("./css/lesen.css", content)
        self.assertIn("./js/lesenApp.js", content)
        self.assertIn("./data/readingData.js", content)

    def test_cross_navigation_links(self):
        """Verify all portal pages link to lesen.html."""
        pages = ["index.html", "trainer.html", "sprechen.html"]
        for page in pages:
            path = os.path.join(ROOT_DIR, page)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            self.assertIn("lesen.html", content, f"{page} must link to lesen.html")

if __name__ == "__main__":
    unittest.main()
