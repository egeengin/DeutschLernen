#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Lexicon Part: Units 7, 8, 9, 10
(Gesundheit, Mobilitätswende, Integration & Einbürgerung, Datenschutz)
"""

import os
import sys

SCRIPTS_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from data_units_7_10_part1 import PART1
from data_units_7_10_part2 import PART2
from data_units_7_10_part3 import PART3
from data_units_7_10_part4 import PART4

PART_UNITS_7_10 = {}
PART_UNITS_7_10.update(PART1)
PART_UNITS_7_10.update(PART2)
PART_UNITS_7_10.update(PART3)
PART_UNITS_7_10.update(PART4)
