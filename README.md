# 🇩🇪 DeutschLernen — telc Deutsch B1 Study Portal & Wortschatz Trainer 2000

[![CI & Test Suite](https://github.com/egeengin/DeutschLernen/actions/workflows/ci.yml/badge.svg)](https://github.com/egeengin/DeutschLernen/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![Target Certification](https://img.shields.io/badge/Target%20Exam-telc%20Deutsch%20B1-blue.svg)](https://www.telc.net/sprachpruefungen/deutsch/zertifikat-deutsch-telc-deutsch-b1.html)
[![Pass Threshold](https://img.shields.io/badge/Pass%20Threshold-180%20%2F%20300%20(60%25)-emerald.svg)](#exam-structure--passing-threshold)
[![Lexicon](https://img.shields.io/badge/Core%20Vocab-2%2C000%2B%20Words-f59e0b.svg)](data/vocab2000.js)
[![Bilingual Parity](https://img.shields.io/badge/Bilingual-English%20%26%20T%C3%BCrk%C3%A7e-crimson.svg)](#100-bilingual-parity)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20First-purple.svg)](sw.js)
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20Client--Side-brightgreen.svg)](legal.html#tab-datenschutz)

An open-source, zero-dependency, high-yield study portal and interactive vocabulary trainer engineered specifically for candidates preparing for the **telc Deutsch B1** exam in 30 days. Available with complete bilingual parity in both **English** and **Turkish**.

> 🌐 **Live Web Application:** [https://egeengin.github.io/DeutschLernen/](https://egeengin.github.io/DeutschLernen/)  
> ⚡ **Interactive Wortschatz Trainer:** [https://egeengin.github.io/DeutschLernen/trainer.html](https://egeengin.github.io/DeutschLernen/trainer.html)  
> ⚖️ **Legal Impressum & Privacy Policy:** [https://egeengin.github.io/DeutschLernen/legal.html](https://egeengin.github.io/DeutschLernen/legal.html)

---

## 📑 Table of Contents
- [Why DeutschLernen?](#-why-deutschlernen)
- [Exam Structure & Passing Threshold](#-exam-structure--passing-threshold)
- [Key Features](#-key-features)
- [Complete 10-Module Curriculum](#-complete-10-module-curriculum)
- [Pedagogical Algorithm: Smart Anti-Repetition](#-pedagogical-algorithm-smart-anti-repetition)
- [System Architecture](#-system-architecture)
- [Local Development & Testing](#-local-development--testing)
- [Contributing](#-contributing)
- [Legal & Trademark Notices](#-legal--trademark-notices)
- [License](#-license)

---

## 💡 Why DeutschLernen?
Most German learning platforms either focus on generalized conversational German or spread content over bloated multi-year timelines. **DeutschLernen** is laser-focused on the exact lexical, structural, and strategic demands of the single-level **telc Deutsch B1** examination:

1. **High-Yield 2,000-Word Core Lexicon:** Hand-curated A1–B1 essential verbs, nouns (with definite articles & plural endings), adjectives, and prepositions with original example sentences.
2. **Advanced B2 Vocabulary Deck:** A dedicated extension deck for ambitious learners aiming for higher linguistic range and sophisticated connector usage.
3. **Smart Anti-Repetition Spaced Rotation:** Automatically surfaces words you struggle with while preventing fatigue from repetitive questions.
4. **100% Client-Side Privacy:** No external trackers, no cookies, no user registration required. All streak data and mistakes are stored securely in your browser's `localStorage`.
5. **Zero Framework Overhead:** Ultra-fast page loads (<100ms), zero node dependencies at runtime, and complete offline PWA caching.

---

## 🎯 Exam Structure & Passing Threshold
This platform strictly adheres to the official **telc Deutsch B1** certification blueprint:

$$\text{Pass Condition: } \text{Total} \ge 180 / 300 \ (60\%) \quad \text{AND} \quad \text{Written} \ge 135 / 225 \quad \text{AND} \quad \text{Oral} \ge 45 / 75$$

| Examination Section | Parts / Tasks | Time Allowed | Max Points | Passing Bar (60%) |
|---|---|---|---|---|
| **Leseverstehen (Reading)** | 3 Parts (Matching, Headlines, Situations) | 90 min *(combined)* | **75 pts** | — |
| **Sprachbausteine (Grammar)** | 2 Parts (Cloze multiple choice + open vocabulary) | *(with Reading)* | **30 pts** | — |
| **Hörverstehen (Listening)** | 3 Parts (Global, Detail, Selective comprehension) | ~30 min | **75 pts** | — |
| **Schreiben (Writing)** | 1 Formal/Semi-formal letter from 2 prompts | 30 min | **45 pts** | — |
| **Subtotal: Written Exam** | *Reading + Grammar + Listening + Writing* | ~150 min | **225 pts** | **$\ge 135$ pts** |
| **Sprechen (Oral Exam)** | 3 Parts (Introduction, Presentation, Joint Planning) | ~15 min (Pair) | **75 pts** | **$\ge 45$ pts** |
| **Grand Total** | **All 5 Skills Combined** | **Full Exam** | **300 pts** | **$\ge 180$ pts** |

---

## ✨ Key Features

### 1. Interactive Wortschatz Trainer 2000
- **5 Drill Modes:**
  - 🇩🇪 ➔ 🌐 **German ➔ Meaning:** Multiple choice translating German headwords to your target language.
  - 🌐 ➔ 🇩🇪 **Meaning ➔ German:** Reverse translation challenging German recall.
  - 🔗 **Synonyms (DE ➔ DE):** Test German synonym pairs (e.g., *beginnen* ➔ *anfangen*).
  - ⚖️ **Antonyms (Opposites):** Match polar opposites (e.g., *schwierig* ➔ *einfach*).
  - ⚠️ **Review Mistakes:** Targeted focus mode filtering exclusively on terms missed in previous sessions.
- **Native German TTS Audio:** Clean, rate-adjusted (`0.92x`) text-to-speech with automatic selection of high-quality neural/natural German voices.
- **Keyboard Navigation:** Full accessibility supporting `1`–`4` for options, `Space` for pronunciation, and `Enter` for next word.
- **Instant Search Dictionary:** Search all 2,000+ words in German, Turkish, and English with instant POS and CEFR filtering.
- **Data Portability:** Export and import your study progress as a JSON backup file.

### 2. 100% Bilingual Parity
Every study module, card label, grammar explanation, and vocabulary entry is mirrored in both **English** and **Turkish**. The global language toggle updates the entire portal and trainer instantly without page refreshes.

### 3. Progressive Web App (PWA) & Offline Mode
Equipped with a custom Service Worker (`sw.js`) and Web App Manifest (`manifest.json`), the entire portal and all 2,000 vocabulary words can be cached and used completely offline on iOS, Android, and desktop browsers.

---

## 📚 Complete 10-Module Curriculum

| Module | Title (English) | Başlık (Türkçe) | Focus Area | English Resource | Türkçe Kaynak |
|:---:|---|---|---|:---:|:---:|
| **1** | Exam Guide | Sınav Rehberi | Overview, grading rubric, test tips | [View Guide](docs/en/telc_b1_exam_guide.md) | [Rehberi Gör](docs/tr/telc_b1_exam_guide.md) |
| **2** | 30-Day Plan | 1 Aylık Plan | Day-by-day structured timetable | [View Plan](docs/en/1_month_study_plan.md) | [Planı Gör](docs/tr/1_month_study_plan.md) |
| **3** | Grammar & Vocab | Dil Bilgisi & Kelime | Top 10 B1 topics + 30 practice drills | [View Grammar](docs/en/review_grammar_vocab.md) | [Dilbilgisini Gör](docs/tr/review_grammar_vocab.md) |
| **4** | Reading & Listening | Okuma ve Dinleme | Synonym strategies, keywords, timing | [View Skills](docs/en/review_reading_listening.md) | [Becerileri Gör](docs/tr/review_reading_listening.md) |
| **5** | Writing & Speaking | Yazma ve Konuşma | Letter templates, speaking phrase bank | [View Templates](docs/en/review_writing_speaking.md) | [Şablonları Gör](docs/tr/review_writing_speaking.md) |
| **6** | Diagnostic Exam | Tanılama Sınavı | Day-1 baseline assessment | [Take Exam](docs/en/mock_exam_diagnostic.md) | [Sınavı Çöz](docs/tr/mock_exam_diagnostic.md) |
| **7** | Final Mock Exam | Final Deneme Sınavı | Full exam simulation under timing | [Take Final](docs/en/mock_exam_final.md) | [Finali Çöz](docs/tr/mock_exam_final.md) |
| **8** | Free Resources | Ücretsiz Kaynaklar | Official practice tests, DW, YouTube | [View Links](docs/en/example_exams_resources.md) | [Linkleri Gör](docs/tr/example_exams_resources.md) |
| **9** | Vocab: Verbs & Adj | Kelime: Fiil & Sıfat | ~500 most-used verbs and adjectives | [View Verbs](docs/en/vocab_part1_verbs_adjectives.md) | [Fiilleri Gör](docs/tr/vocab_part1_fiiller_sifatlar.md) |
| **10** | Vocab: Nouns | Kelime: İsimler | ~550 nouns by exam themes | [View Nouns](docs/en/vocab_part2_nouns_themes.md) | [İsimleri Gör](docs/tr/vocab_part2_isimler_temalar.md) |

---

## 🧠 Pedagogical Algorithm: Smart Anti-Repetition
Rather than serving randomized cards that frustrate learners with either over-repetition or cognitive overload, the `DeckGenerator` in `js/vocabTrainer.js` uses an adaptive tripartite allocation:

- **50% Fresh Unseen Words:** Gradually introduces new vocabulary into the active working memory.
- **35% Mistakes & Review Queue:** Pulls words marked with `in_review: true` (terms answered incorrectly in past drills) until answered correctly 3 consecutive times.
- **15% Learning Reinforcement:** Surfaces words in the intermediate `learning` state to solidify long-term retention.
- **Level-Constrained Distractor Engine:** Generates 3 false options matching the same Part of Speech (POS) and difficulty level to prevent elimination guessing.

---

## 🏗️ System Architecture

```text
DeutschLernen/
├── .github/workflows/ci.yml       # GitHub Actions automated test & compliance workflow
├── index.html                     # Main SPA Study Portal with dynamic markdown reader
├── trainer.html                   # Interactive Wortschatz Trainer 2000 application
├── legal.html                     # German Impressum (§ 5 DDG) & DSGVO/GDPR Privacy Policy
├── sw.js                          # Service Worker for offline asset and dataset caching
├── manifest.json                  # PWA installation manifest with shortcuts
├── assets/
│   ├── branding/                  # Concept illustrations and original assets
│   └── icons/                     # PWA icons (192, 512) and browser favicons
├── css/
│   ├── portal.css                 # Main study portal stylesheets
│   └── trainer.css                # Polished dark/light UI tokens, responsive layouts
├── js/
│   ├── portal.js                  # Study portal SPA, markdown renderer, day tracker
│   ├── firebaseConfig.js          # Cloud Firestore configuration
│   ├── firebaseService.js         # Cloud sync and feedback service
│   └── vocabTrainer.js            # Spaced repetition engine, session tracker, TTS
├── data/
│   ├── vocab2000.js               # 2,000 Core A1-B1 words with full bilingual metadata
│   └── vocab_b2.js                # Advanced B2 study deck
├── docs/
│   ├── en/                        # 10 English study modules (Markdown)
│   ├── tr/                        # 10 Turkish study modules (Markdown)
│   └── study_materials.md         # Curriculum index and syllabus
├── scripts/
│   ├── export_feedback.py         # Feedback exporter to CSV
│   └── run_coverage.py            # Zero-dependency test coverage runner
├── tests/
│   ├── test_vocab_quality.py      # Validates 100% field completion and schema integrity
│   ├── test_quiz_engine.py        # Verifies anti-repetition, mistake queues, and distractors
│   ├── test_feedback_and_portal.py# Star rating, day tracker, and UI contracts
│   └── test_compliance.py         # Audits telc B1 adherence, legal pages, and i18n parity
├── LICENSE                        # MIT Open Source License with trademark disclaimers
├── RULES.md                       # Internal quality guidelines & guru best practices
└── README.md                      # Primary project documentation
```

---

## 💻 Local Development & Testing

### 1. Run Locally
Because modern browsers enforce CORS security restrictions on `fetch()` calls to local markdown files (`file:///`), serve the repository using a simple local web server:

```bash
# Using Python 3 (standard):
python -m http.server 8000

# Open in your browser:
# http://localhost:8000/
# http://localhost:8000/trainer.html
```

### 2. Run Automated Test Suite
The project includes automated validation with zero external dependencies:

```bash
python -m unittest discover -s tests -v
```

Expected output:
```text
test_i18n_and_turkish_material_parity ... ok
test_index_html_telc_b1_adherence ... ok
test_legal_page_ddg_and_gdpr ... ok
test_license_and_trademark_disclaimer ... ok
test_manifest_json_validity ... ok
test_service_worker_offline_coverage ... ok
test_trainer_html_commercial_footer ... ok
test_trainer_i18n_keys_and_elements ... ok
test_anti_repetition_across_sessions ... ok
test_choice_generation_uniqueness_de_meaning ... ok
test_mistake_recording_and_review_mode ... ok
test_synonym_and_antonym_modes_viability ... ok
test_b2_deck_schema ... ok
test_bilingual_parity_and_schema ... ok
test_distractor_pool_coverage ... ok
test_synonyms_and_antonyms_coverage ... ok
test_vocab2000_total_count ... ok
test_vocab_b2_count ... ok

Ran 18 tests in 0.085s - OK
```

---

## 🤝 Contributing
Contributions are welcome! Please ensure that any pull request meets our quality standards outlined in [RULES.md](RULES.md):
1. Maintain strict 100% bilingual parity (both English and Turkish translations + example sentences).
2. Every new vocabulary item must pass `test_vocab_quality.py`.
3. Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `test:`).
4. Run `python -m unittest discover -s tests` before opening a pull request.

---

## ⚖️ Legal & Trademark Notices
- **Trademark Disclaimer:** *telc®* is a registered trademark of **telc gGmbH** (Frankfurt am Main, Germany). *Goethe-Zertifikat®* is a registered trademark of **Goethe-Institut e.V.** (Munich, Germany). This educational platform is an independent study tool and is neither affiliated with, endorsed by, nor authorized by telc gGmbH or Goethe-Institut e.V.
- **German Impressum & Telecommunications Act Compliance:** Full legal disclosures in compliance with § 5 DDG (Digitale-Dienste-Gesetz) and GDPR/DSGVO are published at [`legal.html`](legal.html).
- **Client-Side Privacy:** Zero analytics trackers, zero advertisement cookies, zero external data transmission. All study logs are stored purely inside the user's browser `localStorage`.

---

## 📄 License
Released under the [MIT License](LICENSE).  
Copyright © 2026 **Ege Engin**. All rights reserved.
