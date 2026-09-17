#!/usr/bin/env python3
"""
Unit tests for scripts/export_feedback.py
Verifies Firestore field conversion, CSV formatting, BOM header, non-ASCII handling, and CLI parsing.
"""

import csv
import io
import os
import sys
import tempfile
import unittest

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)

from scripts.export_feedback import parse_firestore_fields, export_records_to_csv


class TestExportFeedback(unittest.TestCase):

    def test_parse_firestore_fields_all_types(self):
        """Test Firestore REST API raw document parsing for all field types."""
        raw_doc = {
            "name": "projects/deutschlernen/databases/(default)/documents/feedback/feedback_abc_123",
            "createTime": "2026-09-16T12:00:00.000Z",
            "fields": {
                "username": {"stringValue": "Ege Engin"},
                "rating": {"integerValue": "5"},
                "score_ratio": {"doubleValue": "4.85"},
                "is_verified": {"booleanValue": True},
                "submitted_at": {"timestampValue": "2026-09-16T12:00:00Z"},
                "custom_data": {"mapValue": {"dummy": "val"}},
            }
        }

        parsed = parse_firestore_fields(raw_doc)
        self.assertEqual(parsed["id"], "feedback_abc_123")
        self.assertEqual(parsed["createTime"], "2026-09-16T12:00:00.000Z")
        self.assertEqual(parsed["username"], "Ege Engin")
        self.assertEqual(parsed["rating"], 5)
        self.assertAlmostEqual(parsed["score_ratio"], 4.85)
        self.assertTrue(parsed["is_verified"])
        self.assertEqual(parsed["submitted_at"], "2026-09-16T12:00:00Z")
        self.assertIn("dummy", parsed["custom_data"])

    def test_parse_firestore_fields_fallback_id(self):
        """Test doc with direct id field instead of full resource name path."""
        raw_doc = {
            "id": "direct_id_999",
            "fields": {
                "message": {"stringValue": "Harika bir uygulama!"}
            }
        }
        parsed = parse_firestore_fields(raw_doc)
        self.assertEqual(parsed["id"], "direct_id_999")
        self.assertEqual(parsed["message"], "Harika bir uygulama!")

    def test_export_records_to_csv_utf8_sig_and_formatting(self):
        """Test CSV file output format, BOM presence, Turkish characters, and quoting."""
        test_records = [
            {
                "id": "fb_001",
                "createTime": "2026-09-16T10:15:30Z",
                "username": "Ayşe Yılmaz",
                "location": "İstanbul, Türkiye",
                "category": "Vocab",
                "rating": 5,
                "message": "Çok güzel ve faydalı, özellikle \"sprint\" modunu çok beğendim!\nYeni kelimeler eklensin lütfen.",
                "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
            },
            {
                "id": "fb_002",
                # Missing optional fields to verify defaults
            }
        ]

        with tempfile.TemporaryDirectory() as tmpdir:
            out_csv = os.path.join(tmpdir, "test_feedback.csv")
            export_records_to_csv(test_records, out_csv)

            self.assertTrue(os.path.exists(out_csv))

            # Verify UTF-8-sig BOM (\xef\xbb\xbf)
            with open(out_csv, "rb") as raw_f:
                header_bytes = raw_f.read(3)
                self.assertEqual(header_bytes, b"\xef\xbb\xbf", "CSV should start with UTF-8 BOM for Excel compatibility")

            # Verify parsed CSV structure
            with open(out_csv, "r", encoding="utf-8-sig") as csv_f:
                reader = list(csv.reader(csv_f))

            self.assertEqual(len(reader), 3)  # Header + 2 rows

            headers = reader[0]
            self.assertEqual(headers, [
                "Timestamp", "FeedbackID", "Username", "Location",
                "Category", "Rating", "Message", "Device/UserAgent"
            ])

            row1 = reader[1]
            self.assertEqual(row1[0], "2026-09-16T10:15:30Z")
            self.assertEqual(row1[1], "fb_001")
            self.assertEqual(row1[2], "Ayşe Yılmaz")
            self.assertEqual(row1[3], "İstanbul, Türkiye")
            self.assertEqual(row1[4], "Vocab")
            self.assertEqual(row1[5], "5")
            self.assertIn("Ayşe Yılmaz", row1[2])
            self.assertNotIn("\n", row1[6])  # Newlines sanitized to space for clean CSV rows
            self.assertIn("Yeni kelimeler eklensin", row1[6])

            row2 = reader[2]
            self.assertEqual(row2[1], "fb_002")
            self.assertEqual(row2[2], "Anonymous")  # default
            self.assertEqual(row2[3], "Unknown")    # default
            self.assertEqual(row2[4], "General")    # default

    def test_export_records_to_csv_empty_list(self):
        """Test export with an empty list creates valid headers only."""
        with tempfile.TemporaryDirectory() as tmpdir:
            out_csv = os.path.join(tmpdir, "empty_feedback.csv")
            export_records_to_csv([], out_csv)
            with open(out_csv, "r", encoding="utf-8-sig") as f:
                lines = f.readlines()
            self.assertEqual(len(lines), 1)
            self.assertIn("Timestamp,FeedbackID", lines[0])

    def test_cli_main_sample_flag(self):
        """Test executing main() with --sample flag writes demo records."""
        from unittest.mock import patch
        from scripts.export_feedback import main

        with tempfile.TemporaryDirectory() as tmpdir:
            out_csv = os.path.join(tmpdir, "sample_out.csv")
            test_argv = ["export_feedback.py", "--sample", "--output", out_csv]
            with patch.object(sys, "argv", test_argv):
                main()

            self.assertTrue(os.path.exists(out_csv))
            with open(out_csv, "r", encoding="utf-8-sig") as f:
                reader = list(csv.reader(f))
            self.assertEqual(len(reader), 3)  # Header + 2 sample rows
            self.assertEqual(reader[1][1], "fb_sample_01")
            self.assertEqual(reader[2][1], "fb_sample_02")

    def test_cli_main_input_json_file(self):
        """Test executing main() with --input flag reading local JSON backup."""
        import json
        from unittest.mock import patch
        from scripts.export_feedback import main

        sample_json_data = [
            {
                "id": "backup_001",
                "createTime": "2026-09-16T15:00:00Z",
                "username": "Hans",
                "location": "Hamburg",
                "category": "Vocabulary",
                "rating": 5,
                "message": "Sehr gute App!",
                "userAgent": "Firefox"
            }
        ]

        with tempfile.TemporaryDirectory() as tmpdir:
            in_json = os.path.join(tmpdir, "backup.json")
            out_csv = os.path.join(tmpdir, "backup_out.csv")
            with open(in_json, "w", encoding="utf-8") as jf:
                json.dump(sample_json_data, jf)

            test_argv = ["export_feedback.py", "--input", in_json, "--output", out_csv]
            with patch.object(sys, "argv", test_argv):
                main()

            self.assertTrue(os.path.exists(out_csv))
            with open(out_csv, "r", encoding="utf-8-sig") as f:
                reader = list(csv.reader(f))
            self.assertEqual(len(reader), 2)  # Header + 1 record
            self.assertEqual(reader[1][1], "backup_001")
            self.assertEqual(reader[1][2], "Hans")
            self.assertEqual(reader[1][6], "Sehr gute App!")

    def test_cli_main_input_firestore_dict_format(self):
        """Test executing main() with --input where JSON is wrapped in a documents/fields dict."""
        import json
        from unittest.mock import patch
        from scripts.export_feedback import main

        raw_firestore_export = {
            "documents": [
                {
                    "name": "projects/p1/databases/(default)/documents/feedback/doc_fs_99",
                    "createTime": "2026-09-16T16:00:00Z",
                    "fields": {
                        "username": {"stringValue": "Klaus"},
                        "location": {"stringValue": "Köln"},
                        "category": {"stringValue": "Grammar"},
                        "rating": {"integerValue": "4"},
                        "message": {"stringValue": "Nebensätze Übungen sind hilfreich."}
                    }
                }
            ]
        }

        with tempfile.TemporaryDirectory() as tmpdir:
            in_json = os.path.join(tmpdir, "fs_dump.json")
            out_csv = os.path.join(tmpdir, "fs_out.csv")
            with open(in_json, "w", encoding="utf-8") as jf:
                json.dump(raw_firestore_export, jf)

            test_argv = ["export_feedback.py", "--input", in_json, "--output", out_csv]
            with patch.object(sys, "argv", test_argv):
                main()

            self.assertTrue(os.path.exists(out_csv))
            with open(out_csv, "r", encoding="utf-8-sig") as f:
                reader = list(csv.reader(f))
            self.assertEqual(len(reader), 2)
            self.assertEqual(reader[1][1], "doc_fs_99")
            self.assertEqual(reader[1][2], "Klaus")
            self.assertEqual(reader[1][5], "4")

    def test_fetch_from_firestore_rest_success(self):
        """Test fetch_from_firestore_rest parses documents returned by REST API."""
        import io
        import json
        from unittest.mock import patch, MagicMock
        from scripts.export_feedback import fetch_from_firestore_rest

        mock_payload = {
            "documents": [
                {
                    "name": "projects/test/databases/(default)/documents/feedback/doc_rest_1",
                    "createTime": "2026-09-16T18:00:00Z",
                    "fields": {
                        "username": {"stringValue": "Marta"},
                        "rating": {"integerValue": "5"},
                        "message": {"stringValue": "Super App!"}
                    }
                }
            ]
        }
        mock_resp = MagicMock()
        mock_resp.read.return_value = json.dumps(mock_payload).encode("utf-8")
        mock_resp.__enter__.return_value = mock_resp

        with patch("urllib.request.urlopen", return_value=mock_resp):
            records = fetch_from_firestore_rest("test-project", api_key="secret-key", auth_token="bearer-token")

        self.assertEqual(len(records), 1)
        self.assertEqual(records[0]["id"], "doc_rest_1")
        self.assertEqual(records[0]["username"], "Marta")
        self.assertEqual(records[0]["rating"], 5)

    def test_fetch_from_firestore_rest_http_error_403(self):
        """Test fetch_from_firestore_rest gracefully handles 403 Forbidden without crashing."""
        import urllib.error
        from unittest.mock import patch
        from scripts.export_feedback import fetch_from_firestore_rest

        err = urllib.error.HTTPError("http://example.com", 403, "Forbidden", {}, None)
        with patch("urllib.request.urlopen", side_effect=err):
            records = fetch_from_firestore_rest("test-project")
        self.assertEqual(records, [])

    def test_fetch_from_firestore_rest_network_error(self):
        """Test fetch_from_firestore_rest handles general network exceptions."""
        from unittest.mock import patch
        from scripts.export_feedback import fetch_from_firestore_rest

        with patch("urllib.request.urlopen", side_effect=OSError("Network down")):
            records = fetch_from_firestore_rest("test-project")
        self.assertEqual(records, [])

    def test_cli_main_no_arguments_fallback(self):
        """Test executing main() without arguments triggers demo fallback export."""
        from unittest.mock import patch
        from scripts.export_feedback import main

        with tempfile.TemporaryDirectory() as tmpdir:
            out_csv = os.path.join(tmpdir, "demo_out.csv")
            test_argv = ["export_feedback.py", "--output", out_csv]
            with patch.object(sys, "argv", test_argv):
                main()

            self.assertTrue(os.path.exists(out_csv))
            with open(out_csv, "r", encoding="utf-8-sig") as f:
                reader = list(csv.reader(f))
            self.assertEqual(len(reader), 2)  # Header + 1 demo record
            self.assertEqual(reader[1][1], "fb_demo_01")

    def test_cli_main_missing_input_file_exits(self):
        """Test executing main() with a non-existent input file exits with code 1."""
        from unittest.mock import patch
        from scripts.export_feedback import main

        test_argv = ["export_feedback.py", "--input", "non_existent_file_xyz_123.json"]
        with patch.object(sys, "argv", test_argv):
            with self.assertRaises(SystemExit) as cm:
                main()
            self.assertEqual(cm.exception.code, 1)

    def test_cli_main_project_id_flag(self):
        """Test executing main() with --project-id calls fetch_from_firestore_rest."""
        from unittest.mock import patch
        from scripts.export_feedback import main

        mock_records = [
            {"id": "doc_cli_1", "username": "Sara", "rating": 5, "message": "Toll"}
        ]
        with tempfile.TemporaryDirectory() as tmpdir:
            out_csv = os.path.join(tmpdir, "proj_out.csv")
            test_argv = ["export_feedback.py", "--project-id", "my-project", "--output", out_csv]
            with patch("scripts.export_feedback.fetch_from_firestore_rest", return_value=mock_records):
                with patch.object(sys, "argv", test_argv):
                    main()

            self.assertTrue(os.path.exists(out_csv))
            with open(out_csv, "r", encoding="utf-8-sig") as f:
                reader = list(csv.reader(f))
            self.assertEqual(len(reader), 2)
            self.assertEqual(reader[1][1], "doc_cli_1")


    def test_runpy_main_export_feedback(self):
        """Test invoking scripts/export_feedback.py as __main__ using runpy."""
        import runpy
        from unittest.mock import patch
        import io
        from contextlib import redirect_stdout

        with tempfile.TemporaryDirectory() as tmpdir:
            out_csv = os.path.join(tmpdir, "main_out.csv")
            test_argv = ["export_feedback.py", "--sample", "--output", out_csv]
            script_path = os.path.join(ROOT_DIR, "scripts", "export_feedback.py")
            with patch.object(sys, "argv", test_argv):
                with redirect_stdout(io.StringIO()):
                    runpy.run_path(script_path, run_name="__main__")
            self.assertTrue(os.path.exists(out_csv))


if __name__ == "__main__":
    unittest.main()

