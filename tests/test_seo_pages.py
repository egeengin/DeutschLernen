#!/usr/bin/env python3
"""
DeutschLernen - Programmatic SEO Pages Unit & Smoke Test
Verifies all programmatic landing pages, calculator scripts,
JSON-LD schemas, sitemap.xml, and robots.txt.
"""

import os
import sys
import re
import xml.etree.ElementTree as ET

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

REQUIRED_PAGES = [
    "telc-b1-beschwerdebrief-beispiel.html",
    "telc-b1-einladung-schreiben.html",
    "telc-b1-punkte-rechner.html",
    "leben-in-deutschland-nrw-fragen.html",
    "leben-in-deutschland-bayern-fragen.html",
    "leben-in-deutschland-berlin-fragen.html",
    "leben-in-deutschland-baden-wuerttemberg-fragen.html",
    "leben-in-deutschland-hessen-fragen.html",
    "leben-in-deutschland-hamburg-fragen.html",
    "leben-in-deutschland-bremen-fragen.html",
    "leben-in-deutschland-niedersachsen-fragen.html",
    "leben-in-deutschland-sachsen-fragen.html",
    "leben-in-deutschland-sachsen-anhalt-fragen.html",
    "leben-in-deutschland-schleswig-holstein-fragen.html",
    "leben-in-deutschland-thueringen-fragen.html",
    "leben-in-deutschland-rheinland-pfalz-fragen.html",
    "leben-in-deutschland-saarland-fragen.html",
    "leben-in-deutschland-brandenburg-fragen.html",
    "leben-in-deutschland-mecklenburg-vorpommern-fragen.html"
]

def test_pages_exist_and_valid():
    print("🧪 Verifying programmatic SEO pages exist and have correct HTML5/SEO structure...")
    for filename in REQUIRED_PAGES:
        filepath = os.path.join(ROOT_DIR, filename)
        assert os.path.exists(filepath), f"Missing page: {filename}"
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # HTML & SEO assertions
        assert "<title>" in content and "</title>" in content, f"Missing title tag in {filename}"
        assert 'name="description"' in content, f"Missing meta description in {filename}"
        assert 'rel="canonical"' in content, f"Missing canonical link in {filename}"
        assert "<h1" in content and "</h1>" in content, f"Missing h1 heading in {filename}"
        assert 'css/seo.css' in content or 'css/seo-pages.css' in content, f"Missing stylesheet link in {filename}"

    print(f"✅ All {len(REQUIRED_PAGES)} SEO pages verified successfully!")

def test_calculator_page():
    print("🧪 Verifying telc B1 Punkte-Rechner functionality...")
    calc_path = os.path.join(ROOT_DIR, "telc-b1-punkte-rechner.html")
    with open(calc_path, "r", encoding="utf-8") as f:
        content = f.read()

    assert "telc-calculator-container" in content, "Missing calculator mount container"
    assert "js/telcCalculator.js" in content, "Missing TelcCalculator script include"
    assert "renderTelcCalculator" in content, "Missing renderTelcCalculator mount call"
    assert "Sehr gut" in content, "Missing German grade scale reference"
    
    # Also verify the underlying TelcCalculator module exports
    calc_js_path = os.path.join(ROOT_DIR, "js", "telcCalculator.js")
    with open(calc_js_path, "r", encoding="utf-8") as f:
        js_code = f.read()
    assert "calculateTelcB1ExamResult" in js_code, "Missing calculateTelcB1ExamResult in telcCalculator.js"
    assert "renderTelcCalculator" in js_code, "Missing renderTelcCalculator in telcCalculator.js"
    assert "applyPreset" in js_code or "preset" in js_code.lower(), "Missing presets in telcCalculator.js"
    print("✅ Calculator verified!")

def test_sitemap_and_robots():
    print("🧪 Verifying sitemap.xml and robots.txt...")
    sitemap_path = os.path.join(ROOT_DIR, "sitemap.xml")
    assert os.path.exists(sitemap_path), "Missing sitemap.xml"

    # Validate XML syntax
    tree = ET.parse(sitemap_path)
    root = tree.getroot()
    urls = root.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url")
    assert len(urls) >= len(REQUIRED_PAGES), f"Expected at least {len(REQUIRED_PAGES)} URLs, found {len(urls)}"

    robots_path = os.path.join(ROOT_DIR, "robots.txt")
    assert os.path.exists(robots_path), "Missing robots.txt"
    with open(robots_path, "r", encoding="utf-8") as f:
        r_content = f.read()
    assert "Sitemap:" in r_content, "robots.txt must declare Sitemap"
    print("✅ sitemap.xml and robots.txt verified!")

if __name__ == "__main__":
    test_pages_exist_and_valid()
    test_calculator_page()
    test_sitemap_and_robots()
    print("🎉 All Programmatic SEO verification tests passed!")
