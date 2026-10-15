#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Appends UNIT_5 and UNIT_6 to data/readingData.js
"""

import os
import json
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET_PATH = os.path.join(ROOT_DIR, "data", "readingData.js")

import sys
sys.path.insert(0, os.path.join(ROOT_DIR, "scripts"))
from expand_reading_units import UNIT_5, UNIT_6

with open(TARGET_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# Check if already present
if "lese-teil1-ausbildung" in content:
    print("Units 5 and 6 already present in readingData.js")
    sys.exit(0)

# Replace the closing "];" with the serialized new units and "];"
idx = content.rfind("];")
if idx == -1:
    print("Error: Could not locate closing ]; in readingData.js")
    sys.exit(1)

u5_json = json.dumps(UNIT_5, ensure_ascii=False, indent=2)
u6_json = json.dumps(UNIT_6, ensure_ascii=False, indent=2)

# Indent by 2 spaces
u5_indented = "\n".join("  " + line for line in u5_json.split("\n"))
u6_indented = "\n".join("  " + line for line in u6_json.split("\n"))

append_str = ",\n" + u5_indented + ",\n" + u6_indented + "\n];\n"

new_content = content[:idx] + append_str

with open(TARGET_PATH, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Successfully appended Unit 5 and Unit 6 into {TARGET_PATH}")
