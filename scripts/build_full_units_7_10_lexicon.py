#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Builder for scripts/reading_lexicon_parts/part_units_7_10.py
Compiles comprehensive B1 vocabulary for Units 7, 8, 9, 10
with exact 4-language translations (TR, EN, AR, UK), German articles, plurals,
pedagogical example sentences, and grammar metadata.
"""

import os
import sys
import json
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET_FILE = os.path.join(ROOT_DIR, "scripts", "reading_lexicon_parts", "part_units_7_10.py")

print("Building part_units_7_10.py...")
