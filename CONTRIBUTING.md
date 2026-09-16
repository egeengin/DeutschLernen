# Contributing to DeutschLernen 🇩🇪

Thank you for your interest in contributing to **DeutschLernen**! We welcome contributions from educators, German learners, and developers.

To maintain the pedagogical integrity, exam precision, and commercial-grade code quality of this project, please follow these guidelines.

---

## 🎯 1. Target Exam Identity
- **Strict Requirement:** This project exclusively targets the single-level **telc Deutsch B1** exam.
- **Do not** refer to the dual-level A2-B1 exam (DTZ / Deutsch-Test für Zuwanderer).
- The passing standard is strictly **180 / 300 points** (Written $\ge 135 / 225$, Oral $\ge 45 / 75$).

---

## 🌍 2. 100% Bilingual Parity (EN & TR)
- Every single new study module, UI label, or vocabulary item must have an exact equivalent in both **English** and **Turkish**.
- When adding or modifying a markdown file in `docs/en/`, you must update or create the corresponding file in `docs/tr/`.

---

## 📚 3. Vocabulary Dataset Schema
Any new entry added to `data/vocab2000.js` or `data/vocab_b2.js` must strictly follow the JSON schema:

```javascript
{
  "id": 2001,
  "de": "die Neugier",
  "tr": "merak",
  "en": "curiosity",
  "pos": "noun",               // "verb", "noun", "adj", "adv", "prep", "conj", "phrase"
  "level": "B1",               // "A1", "A2", "B1", "B2"
  "example": "Seine Neugier war geweckt.",
  "example_tr": "Merakı uyandı.",
  "example_en": "His curiosity was piqued.",
  "synonyms": ["die Wissbegierde"],
  "antonyms": ["das Desinteresse"]
}
```

Rules:
- German headwords (`de`) must be unique.
- Nouns must include definite article (`der`, `die`, or `das`).
- Examples must be grammatically flawless German and natural, idiomatically accurate translations.

---

## 🧪 4. Automated Testing
Before submitting any pull request, run the test suite locally:

```bash
python -m unittest discover -s tests -v
```

All unit tests must pass:
- `test_vocab_quality.py`: Validates complete schema coverage, bilingual parity, and distractor pool viability.
- `test_quiz_engine.py`: Tests spaced repetition rotation and mistake queues.
- `test_compliance.py`: Audits legal notices, trademark disclaimers, and exam identity adherence.

---

## 💬 5. Commit Guidelines
We adhere to [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` for new features or modules
- `fix:` for bug fixes or typo corrections
- `docs:` for documentation updates
- `test:` for adding or updating unit tests
- `chore:` for repository maintenance or CI/CD updates

---

## ⚖️ 6. Intellectual Property & Copyright
- Do not paste copyrighted text directly from published textbooks (Hueber, Klett, Cornelsen, etc.).
- All example sentences, drills, and explanations must be original educational creations.
- By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
