#!/usr/bin/env python3
"""
Unit tests for Service Worker offline cache assets, PWA manifest, and icon integrity.
Guarantees 100% of cached files physically exist on disk and are readable.
"""

import json
import os
import re
import unittest
import urllib.parse

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))


class TestServiceWorkerAndPWAAssets(unittest.TestCase):

    def setUp(self):
        self.sw_path = os.path.join(ROOT_DIR, "sw.js")
        self.manifest_path = os.path.join(ROOT_DIR, "manifest.json")
        self.assertTrue(os.path.exists(self.sw_path), "sw.js must exist.")
        self.assertTrue(os.path.exists(self.manifest_path), "manifest.json must exist.")

    def test_sw_cache_version_v8(self):
        """Verify service worker cache version is deutschlernen-v8 or newer (v9)."""
        with open(self.sw_path, "r", encoding="utf-8") as f:
            content = f.read()
        version_match = re.search(r"const CACHE_NAME = ['\"]deutschlernen-v(\d+)['\"];", content)
        self.assertIsNotNone(version_match, "sw.js must define a versioned CACHE_NAME.")
        self.assertGreaterEqual(int(version_match.group(1)), 8, "CACHE_NAME must be at least v8 or newer.")

    def test_all_sw_assets_exist_on_disk(self):
        """Verify that 100% of URLs listed in sw.js ASSETS physically exist on disk."""
        with open(self.sw_path, "r", encoding="utf-8") as f:
            content = f.read()

        match = re.search(r"const ASSETS = \[(.*?)\];", content, re.DOTALL)
        self.assertIsNotNone(match, "ASSETS array not found in sw.js")

        raw_urls = re.findall(r"['\"]([^'\"]+)['\"]", match.group(1))
        self.assertGreaterEqual(len(raw_urls), 30, "ASSETS should contain at least 30 cached items")

        missing_assets = []
        empty_assets = []

        for raw_url in raw_urls:
            # Normalize URL to relative disk path
            clean_url = raw_url.strip()
            if clean_url in ("./", "/"):
                # Root refers to index.html
                rel_path = "index.html"
            else:
                rel_path = clean_url.lstrip("./").lstrip("/")
                rel_path = urllib.parse.unquote(rel_path)

            disk_path = os.path.join(ROOT_DIR, rel_path)
            if not os.path.exists(disk_path):
                missing_assets.append((raw_url, disk_path))
            elif os.path.getsize(disk_path) == 0:
                empty_assets.append((raw_url, disk_path))

        self.assertEqual(missing_assets, [], f"Missing files referenced in sw.js ASSETS: {missing_assets}")
        self.assertEqual(empty_assets, [], f"Zero-byte files referenced in sw.js ASSETS: {empty_assets}")

    def test_manifest_icons_exist_on_disk(self):
        """Verify all icons referenced in manifest.json exist on disk."""
        with open(self.manifest_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        icons = data.get("icons", [])
        self.assertGreaterEqual(len(icons), 2, "manifest.json must have at least 192 and 512 icons")

        for icon_entry in icons:
            src = icon_entry.get("src", "")
            clean_src = src.lstrip("./").lstrip("/")
            disk_path = os.path.join(ROOT_DIR, clean_src)
            self.assertTrue(os.path.exists(disk_path), f"Manifest icon missing on disk: {src} -> {disk_path}")
            self.assertGreater(os.path.getsize(disk_path), 1000, f"Manifest icon suspiciously small: {disk_path}")

        # Check shortcuts icons
        for shortcut in data.get("shortcuts", []):
            for sc_icon in shortcut.get("icons", []):
                src = sc_icon.get("src", "")
                clean_src = src.lstrip("./").lstrip("/")
                disk_path = os.path.join(ROOT_DIR, clean_src)
                self.assertTrue(os.path.exists(disk_path), f"Shortcut icon missing: {src} -> {disk_path}")

    def test_html_pages_link_valid_icons(self):
        """Verify index.html, trainer.html, and legal.html reference existing icons."""
        pages = ["index.html", "trainer.html", "legal.html"]
        icon_pattern = re.compile(r'<link\s+[^>]*rel=["\'](?:icon|apple-touch-icon)["\'][^>]*href=["\']([^"\']+)["\']', re.IGNORECASE)

        for page in pages:
            page_path = os.path.join(ROOT_DIR, page)
            self.assertTrue(os.path.exists(page_path), f"{page} must exist")
            with open(page_path, "r", encoding="utf-8") as f:
                content = f.read()

            matches = icon_pattern.findall(content)
            self.assertGreaterEqual(len(matches), 2, f"{page} must have at least 2 icon link tags")

            for href in matches:
                clean_href = href.lstrip("./").lstrip("/")
                disk_path = os.path.join(ROOT_DIR, clean_href)
                self.assertTrue(os.path.exists(disk_path), f"{page} links to missing icon: {href} -> {disk_path}")


if __name__ == "__main__":
    unittest.main()
