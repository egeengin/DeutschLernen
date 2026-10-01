#!/usr/bin/env python3
"""
Unit tests for Sprechen Voice Exam Engine & Oral Exam Studio.
Runs node tests/test_voice_exam_engine.js and verifies engine integrity.
"""

import subprocess
import os
import unittest

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class TestVoiceExamStudio(unittest.TestCase):

    def test_voice_exam_engine_js_passes(self):
        """Execute node tests/test_voice_exam_engine.js and ensure exit code 0."""
        test_script = os.path.join(ROOT_DIR, "tests", "test_voice_exam_engine.js")
        self.assertTrue(os.path.exists(test_script), "test_voice_exam_engine.js must exist.")

        result = subprocess.run(["node", test_script], capture_output=True, text=True, cwd=ROOT_DIR)
        self.assertEqual(result.returncode, 0, f"VoiceExamEngine tests failed:\n{result.stderr}\n{result.stdout}")
        self.assertIn("All VoiceExamEngine unit tests passed successfully", result.stdout)

    def test_sprechen_html_and_assets_exist(self):
        """Verify sprechen.html, sprechen.css, and related scripts exist and are not empty."""
        files = [
            os.path.join(ROOT_DIR, "sprechen.html"),
            os.path.join(ROOT_DIR, "css", "sprechen.css"),
            os.path.join(ROOT_DIR, "js", "voiceExamEngine.js"),
            os.path.join(ROOT_DIR, "js", "sprechenApp.js")
        ]
        for f in files:
            self.assertTrue(os.path.exists(f), f"File {f} must exist.")
            self.assertGreater(os.path.getsize(f), 500, f"File {f} must not be empty.")

    def test_sprechen_html_has_required_elements(self):
        """Verify sprechen.html contains key controls, VU-meter, and audio playback."""
        html_path = os.path.join(ROOT_DIR, "sprechen.html")
        with open(html_path, "r", encoding="utf-8") as f:
            content = f.read()

        self.assertIn("btn-toggle-record", content)
        self.assertIn("audio-wave-visualizer", content)
        self.assertIn("spoken-transcript-input", content)
        self.assertIn("audio-playback-elem", content)
        self.assertIn("btn-evaluate-speech", content)
        self.assertIn("evaluation-result-card", content)


if __name__ == "__main__":
    unittest.main()
