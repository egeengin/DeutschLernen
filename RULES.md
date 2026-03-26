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

---

## 🚀 Guru Best Practices 

*To evolve this portal into an enterprise-grade EdTech application, industry experts (gurus) recommend the following architectural and developmental best practices:*

### A. Progress to a PWA (Progressive Web App)
- **Offline Mode:** Students often study on public transport. Implementing a `Service Worker` and a `manifest.json` will allow users to install this portal securely to their phone's home screen and use the quizzes entirely offline.

### B. Scalable Internationalization (i18n)
- Currently, translations rely on `data-en` and `data-tr` attributes manipulated via DOM selecting. 
- **Guru Standard:** If a third language (e.g., Arabic or Spanish) is added later, transition to a dedicated JSON-based dictionary system (e.g., `i18next`) to separate presentation markup from content translation logic.

### C. Automated CI/CD Pipelines
- **GitHub Actions:** Set up workflows that automatically run `markdownlint` and `eslint` on every Pull Request.
- **Formatting:** Enforce a tool like `Prettier` to guarantee perfectly consistent document formatting across the entire repository.

### D. Componentization & State Management
- If the `index.html` file grows beyond 1,500 lines, it should be refactored into a lightweight component framework (like Alpine.js, Vue, or React) or broken into ES6 modules (`quizEngine.js`, `markdownRouter.js`, `themeManager.js`) for massive maintainability improvements.

### E. Accessibility (A11y)
- EdTech tools must be accessible to everyone. Ensure all interactive quiz buttons (`.quiz-opt`) are navigable entirely via keyboard (`Tab` and `Enter`), and provide adequate ARIA labels for screen readers.

### F. Gamification & Advanced Analytics
- Replace the simple `localStorage` Day Tracker with a visual **Heatmap** (like GitHub contributions) showing study streaks.
- Add persistent scoring metrics to the interactive quizzes to provide users a dashboard of their weakest grammatical areas.
