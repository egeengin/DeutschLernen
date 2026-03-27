# 📖 DeutschLernen Project Guidelines & Rules

Welcome to the **DeutschLernen (TELC B1 Study Portal)** repository. All contributors and AI agents working on this project must strictly adhere to the following rules to maintain high quality, consistency, and professional standards.

---

## 🛑 Core Operational Rules

### 1. Obey Markdownlint Rules

- All Markdown files (`.md`) must pass strict `markdownlint` standards.
- Avoid trailing spaces, ensure proper heading increments (H1 -> H2 -> H3), use spacing consistently around lists, and never use inline HTML unless explicitly defined (like `<div class="md-quiz">`).
- Keep code blocks correctly fenced with language hints (e.g., `mermaid`, `text`).

### 2. Check and Verify Results Always

- Never commit broken code or untested translations.
- For Javascript/HTML changes: Verify that the Single Page Application (SPA) routing, `localStorage` trackers, and global language toggles function seamlessly without page refreshing.
- For Content changes: Verify that German grammar examples are technically flawless and match B1 (Zertifikat Deutsch) specifications exactly.

### 3. Maintain Bilingual Parity (EN & TR)

- **Every** new module, feature, or text update must be attempted in both English and Turkish simultaneously.
- If a file is created or updated in `TELC_B1_Preparation/` (English), its exact structural equivalent must be created or updated in `TELC_B1_Hazırlık/` (Turkish). No exceptions.

### 4. Provide External Data References

- Any external data, exam structures, official TELC guidelines, or vocabulary lists must be explicitly referenced.
- **At the bottom of every Markdown page**, include a `## References` section containing valid URL links to the original sources (e.g., Goethe-Institut, DW Learn German, official TELC mock exams).

### 5. Exam Identity: telc Deutsch A2-B1 ≠ DTZ

- 🛑 **CRITICAL:** This project targets the **telc Deutsch A2-B1** exam — NOT the DTZ (Deutsch-Test für Zuwanderer).
- These are **two different exams** with different structures, different Schreiben tasks, and different target audiences.
- The **DTZ** is specifically for immigrants applying for residence permits. The **telc Deutsch A2-B1** is the general dual-level certification.
- **Never** use "DTZ" or "Deutsch-Test für Zuwanderer" when referring to the target exam in any file.
- When linking to telc resources, use the telc Deutsch A2-B1 product page: `https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-a2-b1/`

---

## 🚀 Guru Best Practices

*To evolve this portal into an enterprise-grade EdTech application, industry experts (gurus) recommend the following architectural and developmental best practices:*

### A. Progress to a PWA (Progressive Web App)

**Why:** Students often study on public transport. A PWA allows installation to the phone home screen and full offline use of quizzes.

**How — Real Example (Service Worker Registration):**

Add this to the bottom of `index.html` before `</body>`:

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.error('SW failed:', err));
  }
</script>
```

Create `/manifest.json`:

```json
{
  "name": "DeutschLernen B1 Portal",
  "short_name": "DeutschB1",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#e94560",
  "icons": [{ "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" }]
}
```

Link it in `<head>`: `<link rel="manifest" href="/manifest.json">`

---

### B. Scalable Internationalization (i18n)

**Why:** The current `data-en`/`data-tr` DOM approach breaks if a third language is added.

**How — Real Example (i18next JSON dictionary):**

```bash
npm install i18next
```

`/locales/en/translation.json`:

```json
{
  "quiz_check": "Check Answer",
  "quiz_correct": "✅ Correct!",
  "quiz_wrong": "❌ Try again.",
  "day_tracker": "Day {{day}} of 30"
}
```

`/locales/tr/translation.json`:

```json
{
  "quiz_check": "Cevabı Kontrol Et",
  "quiz_correct": "✅ Doğru!",
  "quiz_wrong": "❌ Tekrar deneyin.",
  "day_tracker": "30 günün {{day}}. günü"
}
```

Init in `app.js`:

```javascript
import i18next from 'i18next';
i18next.init({ lng: 'en', resources: { en: { translation: enJSON }, tr: { translation: trJSON } } });
document.getElementById('quiz-btn').textContent = i18next.t('quiz_check');
```

---

### C. Automated CI/CD Pipelines

**Why:** Catch Markdown or JS errors automatically on every commit — before the student ever sees broken content.

**How — Real Example (GitHub Actions):**

Create `.github/workflows/lint.yml`:

```yaml
name: Lint & Validate

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npx markdownlint-cli "**/*.md" --ignore node_modules
      - run: npx eslint index.html --ext .js
```

Add to `package.json`:

```json
{
  "devDependencies": {
    "markdownlint-cli": "^0.39.0",
    "eslint": "^8.57.0"
  }
}
```

---

### D. Componentization & State Management

**Why:** `index.html` is already >1,500 lines. Breaking it into ES6 modules improves maintainability dramatically.

**How — Real Example (ES6 Module Split):**

`/js/quizEngine.js`:

```javascript
export function initQuiz(container) {
  const question = container.dataset.question;
  const options = container.dataset.options.split('|');
  const correct = parseInt(container.dataset.answer, 10);
  // Render question + buttons...
  container.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    btn.addEventListener('click', () => checkAnswer(btn, i === correct, container.dataset.explain));
  });
}

function checkAnswer(btn, isCorrect, explanation) {
  btn.classList.add(isCorrect ? 'correct' : 'wrong');
  document.getElementById('quiz-explain').textContent = explanation;
}
```

`index.html`:

```html
<script type="module">
  import { initQuiz } from './js/quizEngine.js';
  document.querySelectorAll('.md-quiz').forEach(initQuiz);
</script>
```

---

### E. Accessibility (A11y)

**Why:** EdTech tools must be accessible to everyone, including keyboard-only and screen reader users.

**How — Real Example (ARIA + Keyboard Navigation):**

Current quiz buttons should become:

```html
<div role="group" aria-labelledby="q1-label">
  <p id="q1-label">Wählen Sie die richtige Antwort:</p>
  <button class="quiz-opt"
          aria-pressed="false"
          tabindex="0"
          onkeydown="if(event.key==='Enter'||event.key===' ')this.click()">
    Option A
  </button>
</div>
```

CSS focus style (mandatory — never remove outline):

```css
.quiz-opt:focus-visible {
  outline: 3px solid #e94560;
  outline-offset: 2px;
}
```

---

### F. Gamification & Advanced Analytics

**Why:** A visual streak heatmap (like GitHub contributions) provides a powerful daily motivation loop. Persistent quiz scoring reveals which grammar areas need most attention.

**How — Real Example (localStorage Heatmap Data Structure):**

```javascript
// Save study activity per day
function markStudyDay() {
  const today = new Date().toISOString().slice(0, 10); // "2026-03-26"
  const heatmap = JSON.parse(localStorage.getItem('study_heatmap') || '{}');
  heatmap[today] = (heatmap[today] || 0) + 1; // increment sessions
  localStorage.setItem('study_heatmap', JSON.stringify(heatmap));
}

// Render SVG heatmap (GitHub-style 7-row grid)
function renderHeatmap() {
  const data = JSON.parse(localStorage.getItem('study_heatmap') || '{}');
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const intensity = Math.min(data[key] || 0, 4); // 0-4 scale
    document.getElementById(`day-${30 - i}`).dataset.intensity = intensity;
  }
}
```

CSS heatmap squares:

```css
[data-intensity="0"] { background: #1a1a2e; }
[data-intensity="1"] { background: #4a1942; }
[data-intensity="2"] { background: #8b2252; }
[data-intensity="3"] { background: #c73866; }
[data-intensity="4"] { background: #e94560; }
```

---

## ✅ Current Verification Status (March 2026)

| Feature | Status | Notes |
| --- | --- | --- |
| Quiz engine (md-quiz) | ✅ Working | EN + TR toggles correctly |
| Language toggle (EN/TR) | ✅ Working | localStorage persists preference |
| Day Tracker | ✅ Working | Persists across page refresh |
| Mermaid diagrams | ✅ Working | Renders in index.html SPA |
| PWA / Service Worker | ✅ Working | See Guru Rule A above |
| Heatmap tracker | ✅ Working | See Guru Rule F above |
| GitHub Actions CI | ⏳ Planned | See Guru Rule C above |
