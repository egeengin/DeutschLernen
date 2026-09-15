"""
Automated Test Suite for DeutschLernen Quiz Engine & Anti-Repetition Rotation.
Validates:
- Anti-repetition across distinct login sessions
- Mistake queue recording and prioritization
- 4-choice distractor generation integrity across all 5 quiz modes
- Bilingual quiz generation (Turkish and English modes)
- Spaced repetition weighting logic
"""

import json
import os
import random
import unittest

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(BASE_DIR, ".."))
VOCAB2000_PATH = os.path.join(ROOT_DIR, "data", "vocab2000.js")
VOCAB_B2_PATH = os.path.join(ROOT_DIR, "data", "vocab_b2.js")

def load_js_vocab(file_path, var_name):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    start_idx = content.find(f"{var_name} = ") + len(f"{var_name} = ")
    end_idx = content.rfind(";")
    json_str = content[start_idx:end_idx].strip()
    return json.loads(json_str)


class SimulatedDeckGenerator:
    """Python reference simulator of DeckGenerator in js/vocabTrainer.js."""
    def __init__(self, vocab_pool):
        self.vocab = vocab_pool
        self.progress_map = {}
        self.total_sessions = 1

    def generate_deck(self, mode="de_meaning", level="all", deck_size=20):
        # Filter pool by level
        pool = [w for w in self.vocab if level == "all" or w["level"] == level]

        if mode == "mistakes":
            return [w for w in pool if self.progress_map.get(w["id"], {}).get("in_review", False)][:deck_size]

        if mode in ("synonyms", "antonyms"):
            key = "synonyms" if mode == "synonyms" else "antonyms"
            pool = [w for w in pool if len(w.get(key, [])) > 0]

        unseen = []
        due_review = []
        mastered = []

        for w in pool:
            entry = self.progress_map.get(w["id"])
            if not entry or entry.get("state") == "unseen":
                unseen.append(w)
            elif entry.get("in_review"):
                due_review.append(w)
            else:
                mastered.append(w)

        # Anti-repetition allocation
        quota_unseen = int(deck_size * 0.50)
        quota_review = int(deck_size * 0.35)

        selected = []
        selected.extend(random.sample(unseen, min(len(unseen), quota_unseen)))
        selected.extend(random.sample(due_review, min(len(due_review), quota_review)))

        remaining_slots = deck_size - len(selected)
        backup_pool = [w for w in pool if w not in selected]
        if backup_pool:
            selected.extend(random.sample(backup_pool, min(len(backup_pool), remaining_slots)))

        random.shuffle(selected)
        return selected

    def record_answer(self, word_id, is_correct):
        entry = self.progress_map.setdefault(word_id, {
            "correct_count": 0,
            "wrong_count": 0,
            "in_review": False,
            "state": "unseen",
            "last_session": self.total_sessions
        })
        entry["last_session"] = self.total_sessions
        if is_correct:
            entry["correct_count"] += 1
            entry["state"] = "learning" if entry["correct_count"] < 3 else "mastered"
            entry["in_review"] = False
        else:
            entry["wrong_count"] += 1
            entry["state"] = "learning"
            entry["in_review"] = True


class TestQuizEngine(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.vocab2000 = load_js_vocab(VOCAB2000_PATH, "window.VOCAB_2000")
        cls.vocab_b2 = load_js_vocab(VOCAB_B2_PATH, "window.VOCAB_B2")

    def test_anti_repetition_across_sessions(self):
        """Verify that consecutive sessions do not serve the exact same words."""
        sim = SimulatedDeckGenerator(self.vocab2000)

        # Session 1
        deck1 = sim.generate_deck(deck_size=20)
        for w in deck1:
            sim.record_answer(w["id"], is_correct=True)

        # Session 2
        sim.total_sessions += 1
        deck2 = sim.generate_deck(deck_size=20)

        # Overlap between session 1 and 2 should be strictly controlled (unseen prioritized)
        ids1 = {w["id"] for w in deck1}
        ids2 = {w["id"] for w in deck2}
        new_in_session2 = ids2 - ids1

        self.assertGreaterEqual(
            len(new_in_session2), 10,
            f"Expected at least 50% new words in session 2, got {len(new_in_session2)}/20"
        )

    def test_mistake_recording_and_review_mode(self):
        """Verify that wrong answers enter the review queue and are retrieved in mistakes mode."""
        sim = SimulatedDeckGenerator(self.vocab2000)

        deck = sim.generate_deck(deck_size=10)
        wrong_words = deck[:3]
        correct_words = deck[3:]

        for w in wrong_words:
            sim.record_answer(w["id"], is_correct=False)
        for w in correct_words:
            sim.record_answer(w["id"], is_correct=True)

        # In mistakes mode, only the 3 wrong words should be served
        review_deck = sim.generate_deck(mode="mistakes", deck_size=20)
        review_ids = {w["id"] for w in review_deck}
        for w in wrong_words:
            self.assertIn(w["id"], review_ids, f"Word {w['de']} was not found in review deck")
        for w in correct_words:
            self.assertNotIn(w["id"], review_ids, f"Word {w['de']} was incorrectly placed in review deck")

    def test_choice_generation_uniqueness_de_meaning(self):
        """Verify every word can generate 4 unique choices with exactly 1 correct answer."""
        for lang in ("tr", "en"):
            for item in self.vocab2000[:100]:  # Sample test
                correct_text = item[lang]
                # Distractors matching same POS
                unique_distractor_pool = list({
                    w[lang] for w in self.vocab2000 
                    if w["id"] != item["id"] and w["pos"] == item["pos"] and w[lang] != correct_text
                })
                self.assertGreaterEqual(len(unique_distractor_pool), 3, f"Not enough distractors for {item['de']} in {lang}")
                distractors = random.sample(unique_distractor_pool, 3)
                choices = [correct_text] + distractors
                self.assertEqual(len(set(choices)), 4, f"Choices are not unique for {item['de']} in {lang}")

    def test_synonym_and_antonym_modes_viability(self):
        """Verify synonym and antonym modes have enough viable questions with matching options."""
        syn_items = [w for w in self.vocab2000 if len(w.get("synonyms", [])) > 0]
        ant_items = [w for w in self.vocab2000 if len(w.get("antonyms", [])) > 0]

        self.assertGreaterEqual(len(syn_items), 200, "Too few synonym questions available")
        self.assertGreaterEqual(len(ant_items), 150, "Too few antonym questions available")

        # Test first 20 items for valid distractor pool
        for item in syn_items[:20]:
            syn = item["synonyms"][0]
            distractors = [
                w["de"] for w in self.vocab2000 
                if w["id"] != item["id"] and w["pos"] == item["pos"] and w["de"] != syn
            ]
            self.assertGreaterEqual(len(distractors), 3)

        for item in ant_items[:20]:
            ant = item["antonyms"][0]
            distractors = [
                w["de"] for w in self.vocab2000 
                if w["id"] != item["id"] and w["pos"] == item["pos"] and w["de"] != ant
            ]
            self.assertGreaterEqual(len(distractors), 3)

    def test_vocab_trainer_js_distractor_and_keyboard_guards(self):
        """Verify js/vocabTrainer.js source code ensures German-only distractors and keyboard guards."""
        js_path = os.path.join(ROOT_DIR, "js", "vocabTrainer.js")
        with open(js_path, "r", encoding="utf-8") as f:
            js_content = f.read()

        # Verify synonym/antonym distractors do NOT fall back to cand.en or cand.tr
        self.assertNotIn("(isEn ? cand.en : cand.tr)", js_content, "Synonym/antonym distractors must not fall back to EN/TR translations")
        self.assertIn("cand.de", js_content, "German fallback must be used for German quiz modes")

        # Verify keyboard shortcuts guard against input typing and open modals
        self.assertIn("['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)", js_content)
        self.assertIn("isAnyModalOpen", js_content)
        self.assertIn("e.key === 'Escape'", js_content)

    def test_srs_interval_and_timed_sprint_engine(self):
        """Verify js/vocabTrainer.js implements SM-2 SRS date-stamped scheduling and Timed Sprint drill."""
        js_path = os.path.join(ROOT_DIR, "js", "vocabTrainer.js")
        with open(js_path, "r", encoding="utf-8") as f:
            js_content = f.read()

        # Verify SM-2 interval expansion (1d, 3d, 7d)
        self.assertIn("nextReviewDate", js_content)
        self.assertIn("current.interval = 3", js_content)
        self.assertIn("current.interval = 7", js_content)
        self.assertIn("dueReview", js_content)

        # Verify Timed Sprint mode
        self.assertIn("startSprintMode", js_content)
        self.assertIn("tickSprintTimer", js_content)
        self.assertIn("finishSprint", js_content)
        self.assertIn("sprintModal", js_content)

    def test_headless_node_vocab_trainer(self):
        """Execute headless Node.js unit tests for js/vocabTrainer.js."""
        import subprocess
        import shutil
        node_bin = shutil.which("node")
        if not node_bin:
            self.skipTest("Node.js not installed in environment")
        js_test_path = os.path.join(BASE_DIR, "test_vocab_trainer.js")
        result = subprocess.run([node_bin, js_test_path], capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, f"Node.js tests failed:\nSTDOUT:\n{result.stdout}\nSTDERR:\n{result.stderr}")


if __name__ == "__main__":
    unittest.main()
