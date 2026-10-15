#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import os
import re
import sys

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT_DIR, "scripts"))
from expand_units_7_to_10 import ALL_NEW_UNITS
from build_reading_lexicon import ALL_LEXICON

def main():
    new_words = set()
    for u in ALL_NEW_UNITS:
        for p in u['contentParagraphs']:
            tokens = re.findall(r'[a-zA-ZäöüÄÖÜß]+', p['de'])
            for t in tokens:
                new_words.add(t)

    print(f"Total raw tokens in Units 7-10: {len(new_words)}")
    missing = [w for w in sorted(new_words, key=lambda s: s.lower()) if w.lower() not in ALL_LEXICON]
    print(f"Tokens not in ALL_LEXICON: {len(missing)}")
    
    with open(os.path.join(ROOT_DIR, "scratch_missing_7_10.json"), "w", encoding="utf-8") as f:
        json.dump(missing, f, ensure_ascii=False, indent=2)
    print("Saved to scratch_missing_7_10.json")

if __name__ == "__main__":
    main()
