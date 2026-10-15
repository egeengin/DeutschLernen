#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Full Lexicon Part for Units 7, 8, 9, 10
Gesundheit, Mobilitätswende, Integration & Einbürgerung, Datenschutz
"""
import os
import sys
import json

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET_PATH = os.path.join(ROOT_DIR, "scripts", "reading_lexicon_parts", "part_units_7_10.py")

data = {}

def add(token, de, displayDe, article, plural, pos, level, tr, en, ar, uk, ex_de, ex_tr, ex_en, ex_ar, ex_uk):
    data[token.lower()] = {
        "de": de,
        "displayDe": displayDe,
        "article": article,
        "plural": plural,
        "pos": pos,
        "level": level,
        "tr": tr,
        "en": en,
        "ar": ar,
        "uk": uk,
        "example_de": ex_de,
        "example_tr": ex_tr,
        "example_en": ex_en,
        "example_ar": ex_ar,
        "example_uk": ex_uk
    }

# We will populate all entries and write out
