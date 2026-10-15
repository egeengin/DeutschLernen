#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Merges speaking topics from part1, part2, and part3 and injects them into js/voiceExamEngine.js
"""

import json
import os
import re
import sys

# Ensure scripts dir is on sys.path
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, SCRIPT_DIR)

from build_speaking_topics_part1 import TEIL_1
from build_speaking_topics_part2 import TEIL_2
from build_speaking_topics_part3 import TEIL_3, FREIES_SPRECHEN

CATALOG = {
    "teil1": TEIL_1,
    "teil2": TEIL_2,
    "teil3": TEIL_3,
    "freies_sprechen": FREIES_SPRECHEN
}

print(f"Loaded: teil1={len(CATALOG['teil1'])}, teil2={len(CATALOG['teil2'])}, teil3={len(CATALOG['teil3'])}, freies={len(CATALOG['freies_sprechen'])}")

catalog_json = json.dumps(CATALOG, ensure_ascii=False, indent=2)

voice_engine_path = os.path.join(os.path.dirname(SCRIPT_DIR), "js", "voiceExamEngine.js")
with open(voice_engine_path, "r", encoding="utf-8") as f:
    content = f.read()

pattern = re.compile(r'  // Official Speaking Examination Tasks Catalog \(telc Deutsch B1 Format\)\r?\n  const SPEAKING_EXAM_TOPICS = \{.*?\r?\n  \};\r?\n', re.DOTALL)

replacement = f"  // Official Speaking Examination Tasks Catalog (telc Deutsch B1 Format)\n  const SPEAKING_EXAM_TOPICS = {catalog_json};\n"

new_content, count = pattern.subn(lambda m: replacement, content)
if count != 1:
    raise ValueError(f"Expected 1 substitution, got {count}")

with open(voice_engine_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Successfully updated {voice_engine_path} with all 19 speaking topics!")
