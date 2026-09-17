# scripts/build_2000_dataset.py
"""
Compiles exactly 2000 German vocabulary items covering A1, A2, and B1 CEFR levels.
Outputs to:
  1. data/vocab2000.js as `window.VOCAB_2000 = [...]` (Exactly 2000 entries)
  2. data/vocab_b2.js as `window.VOCAB_B2 = [...]` (Advanced B2 Study Deck)
"""

import json
import os
import sys

print("Initializing 2000 Words Vocabulary Compiler & B2 Deck Builder...")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(BASE_DIR, ".."))
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)

DATA_DIR = os.path.join(ROOT_DIR, "data")
os.makedirs(DATA_DIR, exist_ok=True)

VOCAB2000_PATH = os.path.join(DATA_DIR, "vocab2000.js")
VOCAB_B2_PATH = os.path.join(DATA_DIR, "vocab_b2.js")
VOCAB_C1_PATH = os.path.join(DATA_DIR, "vocab_c1.js")

CORE_ENTRIES = []
SEEN_CORE = set()

# Import Arabic & Ukrainian translation overlay
try:
    from scripts.vocab_sources.translations_ar_uk import TRANSLATIONS_AR_UK
except ImportError:
    TRANSLATIONS_AR_UK = {}

def register_core(de, tr, en, pos, level, ex, ex_tr, ex_en, syns=None, ants=None):
    clean_de = de.strip()
    if clean_de in SEEN_CORE:
        return
    if len(CORE_ENTRIES) >= 2000:
        return
    SEEN_CORE.add(clean_de)
    # Look up Arabic/Ukrainian translations from overlay
    overlay = TRANSLATIONS_AR_UK.get(clean_de, {})
    CORE_ENTRIES.append({
        "id": len(CORE_ENTRIES) + 1,
        "de": clean_de,
        "tr": tr.strip(),
        "en": en.strip(),
        "ar": overlay.get("ar", ""),
        "uk": overlay.get("uk", ""),
        "pos": pos.strip(),
        "level": level.strip(),
        "example": ex.strip(),
        "example_tr": ex_tr.strip(),
        "example_en": ex_en.strip(),
        "example_ar": overlay.get("example_ar", ""),
        "example_uk": overlay.get("example_uk", ""),
        "synonyms": syns or [],
        "antonyms": ants or []
    })

# Load all core sources
from scripts.vocab_sources.verbs import VERBS
from scripts.vocab_sources.verbs_part1 import VERBS_P1
from scripts.vocab_sources.verbs_part2 import VERBS_P2
from scripts.vocab_sources.verbs_extra import VERBS_EXTRA
from scripts.vocab_sources.verbs_daily_actions import VERBS_DAILY_ACTIONS
from scripts.vocab_sources.nouns_part1 import NOUNS_P1
from scripts.vocab_sources.nouns_part2 import NOUNS_P2
from scripts.vocab_sources.nouns_part3 import NOUNS_P3
from scripts.vocab_sources.nouns_part4 import NOUNS_P4
from scripts.vocab_sources.nouns_part5 import NOUNS_P5
from scripts.vocab_sources.nouns_daily_life import NOUNS_DAILY_LIFE
from scripts.vocab_sources.vocab_supplement_b1 import VOCAB_SUPPLEMENT
from scripts.vocab_sources.core_b1_expansion import CORE_B1_EXPANSION
from scripts.vocab_sources.final_boost_2000 import FINAL_BOOST_2000
from scripts.vocab_sources.extra_boost_2000 import EXTRA_BOOST_2000
from scripts.vocab_sources.final_push_200 import FINAL_PUSH_200
from scripts.vocab_sources.final_milestone_120 import FINAL_MILESTONE_120
from scripts.vocab_sources.final_completion_100 import FINAL_COMPLETION_100
from scripts.vocab_sources.adjectives_all import ADJECTIVES_DATA
from scripts.vocab_sources.adjectives_part2 import ADJECTIVES_P2
from scripts.vocab_sources.connectors_phrases import CONNECTORS_AND_PHRASES
from scripts.vocab_sources.adverbs_particles import ADVERBS_AND_PARTICLES
from scripts.vocab_sources.b2_advanced import B2_ADVANCED_DATA
from scripts.vocab_sources.c1_academic import C1_ACADEMIC_DATA

core_sources = [
    VERBS, VERBS_P1, VERBS_P2, VERBS_EXTRA, VERBS_DAILY_ACTIONS,
    NOUNS_P1, NOUNS_P2, NOUNS_P3, NOUNS_P4, NOUNS_P5, NOUNS_DAILY_LIFE,
    VOCAB_SUPPLEMENT, CORE_B1_EXPANSION, FINAL_BOOST_2000, EXTRA_BOOST_2000,
    FINAL_PUSH_200, FINAL_MILESTONE_120, FINAL_COMPLETION_100, ADJECTIVES_DATA,
    ADJECTIVES_P2, CONNECTORS_AND_PHRASES, ADVERBS_AND_PARTICLES
]

for src in core_sources:
    for item in src:
        register_core(item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8], item[9])

print(f"Total compiled Core entries: {len(CORE_ENTRIES)}")
assert len(CORE_ENTRIES) == 2000, f"Expected 2000 entries, but got {len(CORE_ENTRIES)}"

def build_datasets(output_vocab2000=VOCAB2000_PATH, output_vocab_b2=VOCAB_B2_PATH, output_vocab_c1=VOCAB_C1_PATH):
    """Builds and serializes VOCAB_2000, VOCAB_B2, and VOCAB_C1 JavaScript files."""
    os.makedirs(os.path.dirname(os.path.abspath(output_vocab2000)), exist_ok=True)
    os.makedirs(os.path.dirname(os.path.abspath(output_vocab_b2)), exist_ok=True)
    os.makedirs(os.path.dirname(os.path.abspath(output_vocab_c1)), exist_ok=True)

    # Write vocab2000.js
    with open(output_vocab2000, "w", encoding="utf-8") as f:
        f.write("/**\n * DeutschLernen - 2000 Essential German Words (CEFR A1, A2, B1)\n")
        f.write(" * Built for telc Deutsch B1 exam candidates and serious German learners.\n")
        f.write(" * 100% Offline-capable, zero CORS dependency.\n */\n\n")
        f.write("window.VOCAB_2000 = ")
        json.dump(CORE_ENTRIES, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Successfully generated: {output_vocab2000} ({len(CORE_ENTRIES)} entries)")

    # Build and write vocab_b2.js
    B2_ENTRIES = []
    SEEN_B2 = set()
    for item in B2_ADVANCED_DATA:
        clean_de = item[0].strip()
        if clean_de in SEEN_B2:
            continue
        SEEN_B2.add(clean_de)
        overlay = TRANSLATIONS_AR_UK.get(clean_de, {})
        B2_ENTRIES.append({
            "id": len(B2_ENTRIES) + 1,
            "de": clean_de,
            "tr": item[1].strip(),
            "en": item[2].strip(),
            "ar": overlay.get("ar", ""),
            "uk": overlay.get("uk", ""),
            "pos": item[3].strip(),
            "level": item[4].strip(),
            "example": item[5].strip(),
            "example_tr": item[6].strip(),
            "example_en": item[7].strip(),
            "example_ar": overlay.get("example_ar", ""),
            "example_uk": overlay.get("example_uk", ""),
            "synonyms": item[8] or [],
            "antonyms": item[9] or []
        })

    with open(output_vocab_b2, "w", encoding="utf-8") as f:
        f.write("/**\n * DeutschLernen - Advanced B2 German Study Deck\n")
        f.write(" * Specialized vocabulary for academic, workplace, and higher CEFR transition.\n */\n\n")
        f.write("window.VOCAB_B2 = ")
        json.dump(B2_ENTRIES, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Successfully generated: {output_vocab_b2} ({len(B2_ENTRIES)} entries)")

    # Build and write vocab_c1.js
    C1_ENTRIES = []
    SEEN_C1 = set()
    for item in C1_ACADEMIC_DATA:
        clean_de = item[0].strip()
        if clean_de in SEEN_C1:
            continue
        SEEN_C1.add(clean_de)
        overlay = TRANSLATIONS_AR_UK.get(clean_de, {})
        C1_ENTRIES.append({
            "id": len(C1_ENTRIES) + 1,
            "de": clean_de,
            "tr": item[1].strip(),
            "en": item[2].strip(),
            "ar": overlay.get("ar", ""),
            "uk": overlay.get("uk", ""),
            "pos": item[3].strip(),
            "level": item[4].strip(),
            "example": item[5].strip(),
            "example_tr": item[6].strip(),
            "example_en": item[7].strip(),
            "example_ar": overlay.get("example_ar", ""),
            "example_uk": overlay.get("example_uk", ""),
            "synonyms": item[8] or [],
            "antonyms": item[9] or []
        })

    with open(output_vocab_c1, "w", encoding="utf-8") as f:
        f.write("/**\n * DeutschLernen - Academic C1 German Study Deck\n")
        f.write(" * High-yield vocabulary for C1 Hochschule, university studies, and academic mastery.\n */\n\n")
        f.write("window.VOCAB_C1 = ")
        json.dump(C1_ENTRIES, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Successfully generated: {output_vocab_c1} ({len(C1_ENTRIES)} entries)")
    return len(CORE_ENTRIES), len(B2_ENTRIES)

if __name__ == "__main__":
    build_datasets()

