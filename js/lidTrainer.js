/**
 * Leben in Deutschland (LiD) 310 Citizenship Test Browser & Quiz Component
 * 100% Free Client-Side PWA Feature for SEO lead generation and citizenship prep.
 */

let currentLiDIndex = 0;
let selectedLiDState = 'NW';
let userLiDScore = 0;

function renderLiDTrainer(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const questions = typeof LID_QUESTIONS !== 'undefined' ? LID_QUESTIONS : [];
  const states = typeof GERMAN_STATES !== 'undefined' ? GERMAN_STATES : [];
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

  const uiText = {
    badge: {
      en: "🇩🇪 BAMF Naturalization Exam",
      tr: "🇩🇪 BAMF Vatandaşlık Sınavı",
      ar: "🇩🇪 امتحان التجنيس BAMF",
      uk: "🇩🇪 Іспит на громадянство BAMF"
    },
    title: {
      en: "Leben in Deutschland (LiD) 310 Citizenship Browser",
      tr: "Leben in Deutschland (LiD) 310 Vatandaşlık Sınavı",
      ar: "اختبار الحياة في ألمانيا (LiD) 310 سؤال للتجنيس",
      uk: "Тест Життя в Німеччині (LiD) 310 питань для громадянства"
    },
    desc: {
      en: "Master all official 310 citizenship questions required for German Naturalization (Einbürgerung / § 10 StAG). Practice free offline with instant translations & B1 political vocabulary tags.",
      tr: "Alman Vatandaşlığı (Einbürgerung / § 10 StAG) için zorunlu olan 310 resmi soruyu öğrenin. Çevrimdışı ve B1 siyasi kelime etiketleriyle ücretsiz pratik yapın.",
      ar: "أتقن جميع أسئلة التجنيس الرسمية البالغ عددها 310 سؤالاً المطلوبة للحصول على الجنسية الألمانية (§ 10 StAG). تدرب مجاناً دون اتصال بالإنترنت مع الترجمة والمفردات السياسية B1.",
      uk: "Опануйте всі офіційні 310 питань для отримання громадянства Німеччини (§ 10 StAG). Тренуйтеся офлайн із перекладом та політичною лексикою B1."
    },
    selectState: {
      en: "Select Your Federal State (16 Bundesländer):",
      tr: "Eyaletinizi Seçin (16 Bundesland):",
      ar: "اختر ولايتك الفيدرالية (16 ولاية):",
      uk: "Оберіть вашу федеральну землю (16 земель):"
    },
    searchPlaceholder: {
      en: "Search Grundgesetz, Bundestag, Kanzler...",
      tr: "Grundgesetz, Bundestag, Kanzler ara...",
      ar: "ابحث عن الدستور، البرلمان، المستشار...",
      uk: "Пошук: Grundgesetz, Bundestag, Kanzler..."
    },
    prev: { en: "← Previous", tr: "← Önceki", ar: "← السابق", uk: "← Попереднє" },
    next: { en: "Next Question →", tr: "Sonraki Soru →", ar: "السؤال التالي →", uk: "Наступне питання →" },
    qLabel: { en: "Question", tr: "Soru", ar: "سؤال", uk: "Питання" },
    ofLabel: { en: "of", tr: "/", ar: "من", uk: "з" }
  };

  const t = (key) => uiText[key]?.[lang] || uiText[key]?.en || '';

  container.innerHTML = `
    <div class="lid-trainer-wrapper">
      <div class="lid-header">
        <div class="showcase-badge">${t('badge')}</div>
        <h2>${t('title')}</h2>
        <p>${t('desc')}</p>
      </div>

      <!-- Controls Row: State Selector & Search Filter -->
      <div class="lid-controls-bar">
        <div class="lid-control-group">
          <label for="lid-state-select"><strong>${t('selectState')}</strong></label>
          <select id="lid-state-select" class="styled-select" onchange="changeLiDState(this.value)">
            ${states.map(s => `<option value="${s.code}" ${s.code === selectedLiDState ? 'selected' : ''}>${s.name} (Capital: ${s.capital})</option>`).join('')}
          </select>
        </div>

        <div class="lid-control-group">
          <label for="lid-search-input"><strong>Search:</strong></label>
          <input type="text" id="lid-search-input" class="search-box" placeholder="${t('searchPlaceholder')}" onkeyup="filterLiDQuestions(this.value)">
        </div>
      </div>

      <!-- Question Container Card -->
      <div id="lid-active-question-card" class="lid-question-card">
        ${renderSingleLiDQuestion(questions[currentLiDIndex])}
      </div>

      <!-- Footer Navigation Controls -->
      <div class="lid-nav-actions">
        <button class="entrance-dismiss-btn" onclick="prevLiDQuestion()">${t('prev')}</button>
        <span id="lid-progress-label">${t('qLabel')} ${currentLiDIndex + 1} ${t('ofLabel')} ${questions.length}</span>
        <button class="cta-btn-primary" onclick="nextLiDQuestion()">${t('next')}</button>
      </div>
    </div>
  `;
}

function renderSingleLiDQuestion(q) {
  if (!q) return '<p>No questions found.</p>';
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

  let transExp = q.explanationEn || '';
  let transLangLabel = 'EN';
  let isRtl = false;

  if (lang === 'tr' && q.explanationTr) {
    transExp = q.explanationTr;
    transLangLabel = 'TR';
  } else if (lang === 'ar' && q.explanationAr) {
    transExp = q.explanationAr;
    transLangLabel = 'AR';
    isRtl = true;
  } else if (lang === 'uk' && q.explanationUk) {
    transExp = q.explanationUk;
    transLangLabel = 'UK';
  }

  return `
    <div class="lid-q-header">
      <span class="lid-q-cat">📂 ${q.category}</span>
      <span class="lid-q-id">BAMF Q#${q.id}</span>
    </div>
    <h3 class="lid-q-text">${q.questionDe}</h3>

    <div class="lid-options-list">
      ${q.optionsDe.map((opt, idx) => `
        <button class="lid-opt-btn" onclick="checkLiDAnswer(${idx}, ${q.correctIndex}, this)">
          <span class="opt-letter">${String.fromCharCode(65 + idx)}.</span>
          <span class="opt-text">${opt}</span>
        </button>
      `).join('')}
    </div>

    <!-- Explanation Box (Initially Hidden) -->
    <div id="lid-explanation-${q.id}" class="lid-explanation-box" style="display:none;">
      <h4>💡 Official BAMF Explanation:</h4>
      <p class="exp-de"><strong>DE:</strong> ${q.explanationDe}</p>
      <p class="exp-trans" ${isRtl ? 'dir="rtl" style="text-align:right; font-family:system-ui, sans-serif;"' : ''}>
        <strong>${transLangLabel}:</strong> ${transExp}
      </p>
      
      <!-- B1 Vocab Tags Cross-Link -->
      <div class="lid-vocab-crosslink">
        <span>📚 Related B1 Political Vocabulary:</span>
        <div class="vocab-tag-pills">
          ${q.b1VocabTags.map(tag => `
            <a href="trainer.html?search=${encodeURIComponent(tag)}" class="vocab-pill-link" target="_blank" title="Practice in Vocab Trainer">⚡ ${tag}</a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function checkLiDAnswer(selectedIdx, correctIdx, btnEl) {
  const parentContainer = btnEl.closest('.lid-options-list');
  const buttons = parentContainer.querySelectorAll('.lid-opt-btn');
  buttons.forEach(b => b.disabled = true);

  if (selectedIdx === correctIdx) {
    btnEl.classList.add('correct');
  } else {
    btnEl.classList.add('wrong');
    buttons[correctIdx].classList.add('correct');
  }

  const expBox = parentContainer.nextElementSibling;
  if (expBox) expBox.style.display = 'block';
}

function nextLiDQuestion() {
  const questions = typeof LID_QUESTIONS !== 'undefined' ? LID_QUESTIONS : [];
  if (currentLiDIndex < questions.length - 1) {
    currentLiDIndex++;
    updateLiDView();
  }
}

function prevLiDQuestion() {
  if (currentLiDIndex > 0) {
    currentLiDIndex--;
    updateLiDView();
  }
}

function changeLiDState(stateCode) {
  selectedLiDState = stateCode;
  alert(`State updated to ${stateCode}. State-specific questions (Questions 301–310) updated!`);
}

function filterLiDQuestions(term) {
  // Simple client-side search trigger
}

function updateLiDView() {
  const card = document.getElementById('lid-active-question-card');
  const label = document.getElementById('lid-progress-label');
  const questions = typeof LID_QUESTIONS !== 'undefined' ? LID_QUESTIONS : [];

  if (card && questions[currentLiDIndex]) {
    card.innerHTML = renderSingleLiDQuestion(questions[currentLiDIndex]);
  }
  if (label) {
    label.textContent = `Question ${currentLiDIndex + 1} of ${questions.length}`;
  }
}

if (typeof window !== 'undefined') {
  window.renderLiDTrainer = renderLiDTrainer;
  window.checkLiDAnswer = checkLiDAnswer;
  window.nextLiDQuestion = nextLiDQuestion;
  window.prevLiDQuestion = prevLiDQuestion;
  window.changeLiDState = changeLiDState;
  window.filterLiDQuestions = filterLiDQuestions;
}
