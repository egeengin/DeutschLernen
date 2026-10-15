#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for scripts/reading_lexicon_parts/part_units_7_10.py
Generates contextual lexical data with 4-language translations for all 400 tokens in Units 7-10.
"""

import os
import sys
import json

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET_PATH = os.path.join(ROOT_DIR, "scripts", "reading_lexicon_parts", "part_units_7_10.py")

# We define the data in structured dictionary
# Part 1: Tokens A - E
print("Generating part_units_7_10.py...")
