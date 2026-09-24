/**
 * Leben in Deutschland (LiD) 310 Citizenship Test Browser & Quiz Component
 * 100% Free Client-Side PWA Feature for SEO lead generation and citizenship prep.
 * Features:
 * 1. Full 310 questions browser with Bundesland selector & search.
 * 2. Authentic BAMF 33-question / 60-minute timed exam simulation mode (§ 10 StAG pass threshold >= 17/33).
 * 3. Automatic error capture into personal Fehlerheft review deck.
 */

const LID_STATE_STORAGE_KEY = 'deutschlernen_lid_state';

function getStoredLiDState() {
  try {
    if (typeof localStorage === 'undefined') return '';
    return localStorage.getItem(LID_STATE_STORAGE_KEY) || '';
  } catch (e) {
    return '';
  }
}

let currentLiDIndex = 0;
let selectedLiDState = getStoredLiDState() || 'NW';
let userLiDScore = 0;
let hasAutoPromptedState = false;

// Exam Simulation Mode State
let isLiDExamMode = false;
let lidExamQuestions = [];
let lidExamAnswers = {}; // index -> boolean
let lidExamTimerInterval = null;
let lidExamSecondsLeft = 3600; // 60 minutes

// Starred / Favorite Questions Persistence
const LID_STARRED_STORAGE_KEY = 'deutschlernen_lid_starred';
let isLiDStarredOnly = false;

// On-Demand Translation Mode (Default: False for Pure German Immersion)
const LID_SHOW_TRANS_STORAGE_KEY = 'deutschlernen_lid_show_trans';
let isLiDTranslationEnabled = false;
try {
  if (typeof localStorage !== 'undefined') {
    isLiDTranslationEnabled = localStorage.getItem(LID_SHOW_TRANS_STORAGE_KEY) === 'true';
  }
} catch (e) {
  isLiDTranslationEnabled = false;
}

function toggleLiDTranslation() {
  isLiDTranslationEnabled = !isLiDTranslationEnabled;
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LID_SHOW_TRANS_STORAGE_KEY, isLiDTranslationEnabled ? 'true' : 'false');
    }
  } catch (e) {}
  updateLiDView();
}

function getStarredLiDQuestionIds() {
  try {
    if (typeof localStorage === 'undefined') return [];
    const raw = localStorage.getItem(LID_STARRED_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function toggleLiDStar(qId, btnEl) {
  try {
    if (typeof localStorage === 'undefined') return;
    let starred = getStarredLiDQuestionIds();
    const idx = starred.indexOf(qId);
    let isStarred = false;
    if (idx > -1) {
      starred.splice(idx, 1);
      isStarred = false;
    } else {
      starred.push(qId);
      isStarred = true;
    }
    localStorage.setItem(LID_STARRED_STORAGE_KEY, JSON.stringify(starred));

    // Update star filter count in UI
    const countSpan = document.getElementById('lid-starred-count');
    if (countSpan) {
      countSpan.textContent = starred.length;
    }

    if (btnEl) {
      const starLabel = btnEl.getAttribute('data-star-label') || 'Star';
      const starredLabel = btnEl.getAttribute('data-starred-label') || 'Starred';
      if (isStarred) {
        btnEl.classList.add('starred');
        btnEl.innerHTML = `⭐ ${starredLabel}`;
        btnEl.title = starredLabel;
      } else {
        btnEl.classList.remove('starred');
        btnEl.innerHTML = `☆ ${starLabel}`;
        btnEl.title = starLabel;
      }
    }

    if (isLiDStarredOnly) {
      const pool = getActiveLiDQuestionsPool();
      if (currentLiDIndex >= pool.length && pool.length > 0) {
        currentLiDIndex = pool.length - 1;
      }
      updateLiDView();
    }
  } catch (e) {
    console.error("Error toggling LiD star:", e);
  }
}

function toggleLiDStarredFilter() {
  if (isLiDExamMode) return;
  isLiDStarredOnly = !isLiDStarredOnly;
  currentLiDIndex = 0;

  const filterBtn = document.getElementById('lid-filter-starred-btn');
  if (filterBtn) {
    if (isLiDStarredOnly) {
      filterBtn.classList.add('active');
    } else {
      filterBtn.classList.remove('active');
    }
  }
  updateLiDView();
}

const LID_UI_TEXT = {
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
  ofLabel: { en: "of", tr: "/", ar: "من", uk: "з" },
  startExam: {
    en: "⏱️ Timed Exam Mode (33 Qs / 60 Min)",
    tr: "⏱️ Zaman Ayarlı Sınav Modu (33 Soru / 60 Dk)",
    ar: "⏱️ محاكاة الامتحان (33 سؤال / 60 دقيقة)",
    uk: "⏱️ Режим іспиту (33 питання / 60 хв)"
  },
  exitExam: {
    en: "✕ Exit Exam Mode",
    tr: "✕ Sınav Modundan Çık",
    ar: "✕ إنهاء المحاكاة",
    uk: "✕ Вийти з режиму іспиту"
  },
  submitExam: {
    en: "📊 Grade Exam Now",
    tr: "📊 Sınavı Puanla",
    ar: "📊 إنهاء وتقييم الامتحان",
    uk: "📊 Оцінити іспит"
  },
  starBtn: { en: "Star", tr: "Yıldızla", ar: "تمييز", uk: "Зірочка" },
  starredBtn: { en: "Starred", tr: "Yıldızlı", ar: "مميز", uk: "Зі зірочкою" },
  filterStarred: { en: "⭐ Starred", tr: "⭐ Yıldızlılar", ar: "⭐ المميزة", uk: "⭐ Зі зірочкою" },
  starredEmpty: {
    en: "⭐ No starred questions yet. Click ☆ Star on any tricky question to review it here!",
    tr: "⭐ Henüz yıldızlı soru yok. Zorlandığınız sorularda ☆ Yıldızla butonuna tıklayarak burada toplayabilirsiniz!",
    ar: "⭐ لا توجد أسئلة مميزة بنجمة بعد. انقر فوق ☆ تمييز على أي سؤال صعب لمراجعته هنا!",
    uk: "⭐ Ще немає збережених питань. Натисніть ☆ Зірочка на складному питанні, щоб зберегти його тут!"
  },
  stateModalBadge: {
    en: "📍 State Setup",
    tr: "📍 Eyalet Seçimi",
    ar: "📍 تحديد الولاية",
    uk: "📍 Вибір землі"
  },
  stateModalTitle: {
    en: "Select Your Federal State",
    tr: "Federal Eyaletinizi Seçin",
    ar: "اختر ولايتك الفيدرالية",
    uk: "Оберіть вашу федеральну землю"
  },
  stateModalDesc: {
    en: "The citizenship exam includes 3 state-specific questions (Questions 301–310). Choose your state once — you can change it anytime with the ⚙️ Change button.",
    tr: "Vatandaşlık sınavında eyaletinize özel 3 soru (301–310. sorular) yer alır. Eyaletinizi bir kez seçin — dilediğiniz an ⚙️ Değiştir butonuyla güncelleyebilirsiniz.",
    ar: "يتضمن امتحان التجنيس 3 أسئلة خاصة بولايتك (الأسئلة 301-310). اختر ولايتك مرة واحدة — ويمكنك تغييرها في أي وقت عبر زر ⚙️ تغيير.",
    uk: "Іспит на громадянство включає 3 питання для вашої землі (питання 301–310). Оберіть землю один раз — ви можете змінити її в будь-який час кнопкою ⚙️ Змінити."
  },
  stateKicker: {
    en: "EXAM STATE",
    tr: "SINAV EYALETİ",
    ar: "ولاية الامتحان",
    uk: "ЗЕМЛЯ ІСПИТУ"
  },
  changeStateBtn: {
    en: "Change ⚙️",
    tr: "Değiştir ⚙️",
    ar: "تغيير ⚙️",
    uk: "Змінити ⚙️"
  },
  saveStateBtn: {
    en: "Save State & Continue →",
    tr: "Eyaleti Kaydet ve Devam Et →",
    ar: "حفظ ومتابعة ←",
    uk: "Зберегти та продовжити →"
  },
  cancelBtn: {
    en: "Cancel",
    tr: "Vazgeç",
    ar: "إلغاء",
    uk: "Скасувати"
  },
  toggleTransOn: {
    en: "🌐 Show Translation (Tour 1)",
    tr: "🌐 Çeviriyi Göster (1. Tur)",
    ar: "🌐 إظهار الترجمة (الجولة 1)",
    uk: "🌐 Показати переклад (1-й тур)"
  },
  toggleTransOff: {
    en: "🌐 Hide Translation (Tour 2)",
    tr: "🌐 Çeviriyi Gizle (2. Tur)",
    ar: "🌐 إخفاء الترجمة (الجولة 2)",
    uk: "🌐 Сховати переклад (2-й тур)"
  },
  transActiveBadge: {
    en: "🌐 Translation: ON (Tour 1 / Learning)",
    tr: "🌐 Çeviri: AÇIK (1. Tur / Öğrenme)",
    ar: "🌐 الترجمة: مفعّلة (الجولة 1 / تعلّم)",
    uk: "🌐 Переклад: УВІМК (1-й тур / Навчання)"
  },
  transInactiveBadge: {
    en: "🌐 Translation: OFF (Tour 2 / Exam Prep)",
    tr: "🌐 Çeviri: KAPALI (2. Tur / Sınav Pratiği)",
    ar: "🌐 الترجمة: معطّلة (الجولة 2 / محاكاة الامتحان)",
    uk: "🌐 Переклад: ВИМК (2-й тур / Іспит)"
  },
  transHintOpen: {
    en: "🌐 Show Translation (Tour 1 / Learning)",
    tr: "🌐 Türkçe Çeviriyi Göster (1. Tur)",
    ar: "🌐 إظهار الترجمة (الجولة 1)",
    uk: "🌐 Показати переклад (1-й тур)"
  },
  transHintClose: {
    en: "✕ Hide (Tour 2)",
    tr: "✕ Gizle (2. Tur)",
    ar: "✕ إخفاء (الجولة 2)",
    uk: "✕ Сховати (2-й тур)"
  }
};

function getLiDTranslation(key, lang) {
  const l = lang || (typeof currentLang !== 'undefined' ? currentLang : 'en');
  return LID_UI_TEXT[key]?.[l] || LID_UI_TEXT[key]?.en || '';
}

function renderLiDTrainer(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const questions = getActiveLiDQuestionsPool();
  const states = typeof GERMAN_STATES !== 'undefined' ? GERMAN_STATES : [];
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
  const starredIds = getStarredLiDQuestionIds();

  const t = (key) => getLiDTranslation(key, lang);

  const timerMin = Math.floor(lidExamSecondsLeft / 60);
  const timerSec = String(lidExamSecondsLeft % 60).padStart(2, '0');
  const answeredCount = Object.keys(lidExamAnswers).length;

  const currentStateObj = states.find(s => s.code === selectedLiDState) || { name: selectedLiDState };

  container.innerHTML = `
    <div class="lid-trainer-wrapper">
      <div class="lid-header">
        <div class="showcase-badge">${t('badge')}</div>
        <h2>${t('title')}</h2>
        <p>${t('desc')}</p>
      </div>

      <!-- Controls Row: State Selector Badge, Search Filter, Starred Filter, Exam Mode Trigger -->
      <div class="lid-controls-bar" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px;">
        <div style="display:flex; gap:16px; flex-wrap:wrap; flex:1; align-items:flex-end;">
          <div class="lid-control-group" style="display:flex; align-items:flex-end;">
            <div class="lid-state-badge" onclick="${!isLiDExamMode ? 'openLiDStateModal()' : ''}" role="button" tabindex="0" title="${t('changeStateBtn')}" style="${isLiDExamMode ? 'opacity:0.6; cursor:not-allowed;' : ''}">
              <span class="lid-state-badge-icon">📍</span>
              <div class="lid-state-badge-details">
                <span class="lid-state-badge-kicker">${t('stateKicker')}</span>
                <span class="lid-state-badge-name" id="lid-state-display-name">${currentStateObj.name}</span>
              </div>
              ${!isLiDExamMode ? `<span class="lid-state-badge-action">${t('changeStateBtn')}</span>` : ''}
            </div>
          </div>

          ${!isLiDExamMode ? `
          <div class="lid-control-group">
            <label for="lid-search-input"><strong>Search:</strong></label>
            <input type="text" id="lid-search-input" class="search-box" placeholder="${t('searchPlaceholder')}" onkeyup="filterLiDQuestions(this.value)">
          </div>
          <div class="lid-control-group" style="display:flex; align-items:flex-end; gap:8px; flex-wrap:wrap;">
            <button id="lid-filter-starred-btn" class="lid-star-filter-btn ${isLiDStarredOnly ? 'active' : ''}" onclick="toggleLiDStarredFilter()" title="${t('filterStarred')}">
              ${t('filterStarred')} (<span id="lid-starred-count">${starredIds.length}</span>)
            </button>
            <button id="lid-trans-mode-btn" class="lid-star-filter-btn ${isLiDTranslationEnabled ? 'active' : ''}" onclick="toggleLiDTranslation()" title="${isLiDTranslationEnabled ? t('toggleTransOff') : t('toggleTransOn')}">
              ${isLiDTranslationEnabled ? t('transActiveBadge') : t('transInactiveBadge')}
            </button>
            <button id="lid-checklist-nav-btn" class="lid-star-filter-btn" onclick="document.getElementById('lid-checklist-section')?.scrollIntoView({ behavior: 'smooth' })" title="Jump to 25 High-Yield Facts & Checklist">
              📋 ${lang === 'tr' ? 'Özet & Kontrol Listesi' : (lang === 'ar' ? 'ملخص الامتحان' : (lang === 'uk' ? 'Конспект & Чекліст' : 'Exam Checklist (25 Facts)'))}
            </button>
          </div>
          ` : ''}
        </div>

        <div>
          ${!isLiDExamMode ? `
            <button class="cta-btn-primary" onclick="startLiDExamSimulation()" style="padding:10px 18px; font-weight:700; background:linear-gradient(135deg, #d97706 0%, #b45309 100%);">
              ${t('startExam')}
            </button>
          ` : `
            <div style="display:flex; gap:8px; align-items:center;">
              <button class="cta-btn-primary" onclick="finishLiDExam()" style="padding:8px 16px; font-weight:700;">
                ${t('submitExam')} (${answeredCount}/33)
              </button>
              <button class="entrance-dismiss-btn" onclick="exitLiDExamSimulation()" style="padding:8px 12px; font-size:13px;">
                ${t('exitExam')}
              </button>
            </div>
          `}
        </div>
      </div>

      ${isLiDExamMode ? `
      <!-- Exam Simulation Active Banner -->
      <div style="background:rgba(217, 119, 6, 0.12); border:1px solid var(--accent-gold); border-radius:10px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div style="font-weight:700; color:var(--text-primary);">
          🏛️ <strong>Offizieller BAMF Einbürgerungstest:</strong> 30 Allgemeine Fragen + 3 Landesfragen (${selectedLiDState})
        </div>
        <div style="display:flex; align-items:center; gap:16px;">
          <div style="font-size:14px; font-weight:600; color:var(--text-muted);">
            Answered: <strong style="color:var(--text-primary);">${answeredCount} / 33</strong>
          </div>
          <div id="lid-exam-timer-display" style="background:#0f172a; color:#fbbf24; border:1px solid #f59e0b; padding:4px 12px; border-radius:6px; font-family:monospace; font-size:16px; font-weight:bold;">
            ⏱️ ${timerMin}:${timerSec}
          </div>
        </div>
      </div>
      ` : ''}

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

      <!-- One-Time / Change State Selector Modal -->
      <div id="lid-state-modal" class="entrance-modal-overlay" style="display:none;" role="dialog" aria-modal="true" aria-labelledby="lid-state-modal-title">
        <div class="entrance-modal-card" style="max-width: 520px; padding: 28px;">
          <div class="entrance-header" style="margin-bottom: 20px;">
            <div class="entrance-badge">${t('stateModalBadge')}</div>
            <h2 id="lid-state-modal-title" style="font-size: 20px; margin-top: 8px;">${t('stateModalTitle')}</h2>
            <p class="entrance-subtitle" style="font-size: 13px; margin-top: 6px; line-height: 1.5;">${t('stateModalDesc')}</p>
          </div>

          <div style="margin: 20px 0;">
            <label for="lid-state-select" style="display:block; font-size:12px; font-weight:700; color:var(--text-muted); margin-bottom:8px; text-transform:uppercase;">
              ${t('selectState')}
            </label>
            <select id="lid-state-select" class="styled-select" style="width:100%; font-size:14px; padding:12px 14px;">
              ${states.map(s => `<option value="${s.code}" ${s.code === selectedLiDState ? 'selected' : ''}>${s.name} (Capital: ${s.capital})</option>`).join('')}
            </select>
          </div>

          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:24px;">
            <button class="entrance-dismiss-btn" onclick="closeLiDStateModal()" id="btn-cancel-state-modal" style="padding:10px 18px; font-size:13px;">
              ${t('cancelBtn')}
            </button>
            <button class="cta-btn-primary" onclick="confirmLiDStateSelection()" style="padding:10px 20px; font-weight:700; font-size:13px;">
              ${t('saveStateBtn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // One-time prompt check: if state has never been chosen by user, prompt once
  if (!getStoredLiDState() && !hasAutoPromptedState && !isLiDExamMode) {
    hasAutoPromptedState = true;
    setTimeout(() => {
      openLiDStateModal();
    }, 400);
  }
}

function renderSingleLiDQuestion(q) {
  if (!q) return '<p style="text-align:center; padding:30px; color:var(--text-muted);">No questions available.</p>';
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

  const transObj = q.translations?.[lang] || q.translations?.en;
  let qTrans = transObj?.question || '';
  if (qTrans === q.questionDe) qTrans = '';

  let transExp = q.explanationEn || '';
  let transLangLabel = 'EN';
  let isRtl = false;

  if (lang === 'tr') {
    transExp = q.explanationTr || transObj?.context || '';
    transLangLabel = 'TR';
  } else if (lang === 'ar') {
    transExp = q.explanationAr || transObj?.context || '';
    transLangLabel = 'AR';
    isRtl = true;
  } else if (lang === 'uk') {
    transExp = q.explanationUk || transObj?.context || '';
    transLangLabel = 'UK';
  } else {
    transExp = q.explanationEn || transObj?.context || '';
    transLangLabel = 'EN';
  }

  // If in exam mode and already answered
  const isAnswered = isLiDExamMode && lidExamAnswers[currentLiDIndex] !== undefined;

  const starredIds = getStarredLiDQuestionIds();
  const isStarred = starredIds.includes(q.id);
  const starLabel = getLiDTranslation('starBtn', lang);
  const starredLabel = getLiDTranslation('starredBtn', lang);

  return `
    <div class="lid-q-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <div>
        <span class="lid-q-cat">📂 ${q.category || 'Staatsbürgerschaft & Recht'}</span>
        <span class="lid-q-id">${isLiDExamMode ? `Exam Q#${currentLiDIndex + 1}` : `BAMF Q#${q.id}`}</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button class="lid-trans-toggle-btn ${isLiDTranslationEnabled ? 'active' : ''}" onclick="toggleLiDTranslation()" title="${isLiDTranslationEnabled ? getLiDTranslation('toggleTransOff', lang) : getLiDTranslation('toggleTransOn', lang)}">
          ${isLiDTranslationEnabled ? getLiDTranslation('toggleTransOff', lang) : getLiDTranslation('toggleTransOn', lang)}
        </button>
        ${!isLiDExamMode ? `
          <button class="lid-star-btn ${isStarred ? 'starred' : ''}" onclick="toggleLiDStar(${q.id}, this)" data-star-label="${starLabel}" data-starred-label="${starredLabel}" title="${isStarred ? starredLabel : starLabel}">
            ${isStarred ? '⭐ ' + starredLabel : '☆ ' + starLabel}
          </button>
        ` : ''}
      </div>
    </div>
    
    <h3 class="lid-q-text">${q.questionDe}</h3>
    ${isLiDTranslationEnabled && qTrans ? `
      <div class="lid-q-translation-box" style="display:flex; justify-content:space-between; align-items:flex-start; background:rgba(59,130,246,0.08); border-left:3px solid #3b82f6; padding:8px 12px; border-radius:6px; margin-top:6px; margin-bottom:14px; gap:8px;">
        <span class="lid-q-translation" ${isRtl ? 'dir="rtl" style="text-align:right;"' : ''} style="font-size:14px; color:var(--text-primary); font-style:italic; line-height:1.4;">
          🌐 <strong>${transLangLabel}:</strong> ${qTrans}
        </span>
        <button class="lid-trans-quick-hide" onclick="toggleLiDTranslation()" style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:12px; white-space:nowrap; padding:2px 6px; border-radius:4px;" title="${getLiDTranslation('toggleTransOff', lang)}">
          ${getLiDTranslation('transHintClose', lang)}
        </button>
      </div>
    ` : (!isLiDTranslationEnabled && qTrans ? `
      <div style="margin-top:4px; margin-bottom:12px;">
        <button class="lid-trans-inline-hint-btn" onclick="toggleLiDTranslation()" title="${getLiDTranslation('toggleTransOn', lang)}">
          ${getLiDTranslation('transHintOpen', lang)}
        </button>
      </div>
    ` : '')}

    ${q.image ? `
      <div class="lid-q-image-container" style="text-align:center; margin:16px 0;">
        <img src="${q.image}" class="lid-q-img" alt="BAMF Frage Abbildung" style="max-width:100%; max-height:280px; object-fit:contain; border-radius:8px; border:1px solid var(--border); box-shadow:0 4px 12px rgba(0,0,0,0.15); background:#ffffff; padding:6px;">
      </div>
    ` : ''}

    <div class="lid-options-list">
      ${q.optionsDe.map((opt, idx) => {
        let extraClass = '';
        if (isAnswered) {
          if (idx === q.correctIndex) extraClass = ' correct';
          else if (!lidExamAnswers[currentLiDIndex]) extraClass = ' wrong';
        }
        const optTrans = transObj?.options?.[idx] || '';
        return `
          <button class="lid-opt-btn${extraClass}" ${isAnswered ? 'disabled' : ''} onclick="checkLiDAnswer(${idx}, ${q.correctIndex}, this)">
            <span class="opt-letter">${String.fromCharCode(65 + idx)}.</span>
            <div style="flex:1;">
              <span class="opt-text">${opt}</span>
              ${isLiDTranslationEnabled && optTrans && optTrans !== opt ? `<span class="opt-trans" ${isRtl ? 'dir="rtl" style="text-align:right;"' : ''} style="display:block; font-size:12px; color:var(--text-muted); margin-top:2px;">${optTrans}</span>` : ''}
            </div>
          </button>
        `;
      }).join('')}
    </div>

    <!-- Explanation Box -->
    <div id="lid-explanation-${q.id}" class="lid-explanation-box" style="display:${isAnswered ? 'block' : 'none'};">
      <h4>💡 Official BAMF Explanation:</h4>
      <p class="exp-de"><strong>DE:</strong> ${q.explanationDe}</p>
      ${isLiDTranslationEnabled && transExp ? `
      <p class="exp-trans" ${isRtl ? 'dir="rtl" style="text-align:right; font-family:system-ui, sans-serif;"' : ''}>
        <strong>${transLangLabel}:</strong> ${transExp}
      </p>
      ` : ''}
      
      <!-- B1 Vocab Tags Cross-Link -->
      ${q.b1VocabTags && q.b1VocabTags.length > 0 ? `
      <div class="lid-vocab-crosslink">
        <span>📚 Related B1 Political Vocabulary:</span>
        <div class="vocab-tag-pills">
          ${q.b1VocabTags.map(tag => `
            <a href="trainer.html?search=${encodeURIComponent(tag)}" class="vocab-pill-link" target="_blank" title="Practice in Vocab Trainer">⚡ ${tag}</a>
          `).join('')}
        </div>
      </div>
      ` : ''}
    </div>
  `;
}

function getActiveLiDQuestionsPool() {
  if (isLiDExamMode && lidExamQuestions.length > 0) {
    return lidExamQuestions;
  }

  const general = typeof LID_QUESTIONS !== 'undefined' ? LID_QUESTIONS : [];
  const stateMap = typeof LID_STATE_QUESTIONS !== 'undefined' ? LID_STATE_QUESTIONS : {};
  const stateSpecific = stateMap[selectedLiDState] || [];
  
  let pool = [...general, ...stateSpecific];

  if (!isLiDExamMode && isLiDStarredOnly) {
    const starred = getStarredLiDQuestionIds();
    pool = pool.filter(q => starred.includes(q.id));
  }

  const searchInput = document.getElementById('lid-search-input');
  const term = (searchInput && searchInput.value) ? searchInput.value.trim().toLowerCase() : '';

  if (term) {
    pool = pool.filter(q => 
      q.questionDe.toLowerCase().includes(term) ||
      (q.explanationDe && q.explanationDe.toLowerCase().includes(term)) ||
      (q.b1VocabTags && q.b1VocabTags.some(t => t.toLowerCase().includes(term)))
    );
  }

  return pool;
}

function checkLiDAnswer(selectedIdx, correctIdx, btnEl) {
  const parentContainer = btnEl.closest('.lid-options-list');
  const buttons = parentContainer.querySelectorAll('.lid-opt-btn');
  buttons.forEach(b => b.disabled = true);

  const isCorrect = (selectedIdx === correctIdx);

  if (isCorrect) {
    btnEl.classList.add('correct');
    if (isLiDExamMode) {
      lidExamAnswers[currentLiDIndex] = true;
    }
  } else {
    btnEl.classList.add('wrong');
    if (buttons[correctIdx]) buttons[correctIdx].classList.add('correct');
    if (isLiDExamMode) {
      lidExamAnswers[currentLiDIndex] = false;
    }

    // Automatically capture mistake into personal Fehlerheft review deck
    const pool = getActiveLiDQuestionsPool();
    const currentQ = pool[currentLiDIndex];
    if (currentQ && typeof recordFehlerheftItem === 'function') {
      recordFehlerheftItem({
        word: currentQ.questionDe,
        meaning: currentQ.explanationDe || currentQ.explanationEn || '',
        example: `Correct: ${currentQ.optionsDe[correctIdx]}`,
        mistakeType: 'syntax'
      });
      if (typeof renderFehlerheftDashboard === 'function') {
        renderFehlerheftDashboard('fehlerheft-container');
      }
    }
  }

  const expBox = parentContainer.nextElementSibling;
  if (expBox) expBox.style.display = 'block';

  if (isLiDExamMode) {
    updateLiDExamStatus();
  }
}

function updateLiDExamStatus() {
  const answeredCount = Object.keys(lidExamAnswers).length;
  const submitBtn = document.querySelector("button[onclick='finishLiDExam()']");
  if (submitBtn) {
    submitBtn.textContent = `📊 Grade Exam Now (${answeredCount}/33)`;
  }
}

function nextLiDQuestion() {
  const pool = getActiveLiDQuestionsPool();
  if (currentLiDIndex < pool.length - 1) {
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
  if (isLiDExamMode) return;
  selectedLiDState = stateCode;
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LID_STATE_STORAGE_KEY, stateCode);
    }
  } catch (e) {}
  currentLiDIndex = 0;
  updateLiDView();

  const states = typeof GERMAN_STATES !== 'undefined' ? GERMAN_STATES : [];
  const stateObj = states.find(s => s.code === stateCode);
  const stateName = stateObj ? stateObj.name : stateCode;

  const displayNameEl = document.getElementById('lid-state-display-name');
  if (displayNameEl) {
    displayNameEl.textContent = stateName;
  }

  const stateSelect = document.getElementById('lid-state-select');
  if (stateSelect) {
    stateSelect.value = stateCode;
  }
}

function openLiDStateModal() {
  const modal = document.getElementById('lid-state-modal');
  if (!modal) return;
  const select = document.getElementById('lid-state-select');
  if (select) {
    select.value = selectedLiDState;
  }
  modal.style.display = 'flex';
  requestAnimationFrame(() => {
    modal.classList.add('open');
  });
}

function closeLiDStateModal() {
  const modal = document.getElementById('lid-state-modal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 250);
}

function confirmLiDStateSelection() {
  const select = document.getElementById('lid-state-select');
  const code = select ? select.value : selectedLiDState;
  changeLiDState(code);
  closeLiDStateModal();
}

function filterLiDQuestions(term) {
  if (isLiDExamMode) return;
  currentLiDIndex = 0;
  updateLiDView();
}

function updateLiDView() {
  const card = document.getElementById('lid-active-question-card');
  const label = document.getElementById('lid-progress-label');
  const pool = getActiveLiDQuestionsPool();
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

  const qLabel = lang === 'tr' ? 'Soru' : (lang === 'ar' ? 'سؤال' : (lang === 'uk' ? 'Питання' : 'Question'));
  const ofLabel = lang === 'tr' ? '/' : (lang === 'ar' ? 'من' : (lang === 'uk' ? 'з' : 'of'));

  if (card) {
    if (pool.length > 0 && pool[currentLiDIndex]) {
      card.innerHTML = renderSingleLiDQuestion(pool[currentLiDIndex]);
    } else {
      if (isLiDStarredOnly) {
        card.innerHTML = `<div style="text-align:center; padding:36px 20px; color:var(--text-muted); font-size:15px; line-height:1.6;">${getLiDTranslation('starredEmpty', lang)}</div>`;
      } else {
        card.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-muted);">🔍 No questions match your search filter. Try clearing the search box.</div>`;
      }
    }
  }
  if (label) {
    label.textContent = pool.length > 0 ? `${qLabel} ${currentLiDIndex + 1} ${ofLabel} ${pool.length}` : `${qLabel} 0 ${ofLabel} 0`;
  }

  const transModeBtn = document.getElementById('lid-trans-mode-btn');
  if (transModeBtn) {
    if (isLiDTranslationEnabled) {
      transModeBtn.classList.add('active');
      transModeBtn.textContent = getLiDTranslation('transActiveBadge', lang);
      transModeBtn.title = getLiDTranslation('toggleTransOff', lang);
    } else {
      transModeBtn.classList.remove('active');
      transModeBtn.textContent = getLiDTranslation('transInactiveBadge', lang);
      transModeBtn.title = getLiDTranslation('toggleTransOn', lang);
    }
  }
}

/**
 * BAMF 310 Timed Exam Simulation Mode
 * Generates 30 general questions + 3 state questions = 33 total
 * 60 minutes countdown
 */
function startLiDExamSimulation() {
  const general = typeof LID_QUESTIONS !== 'undefined' ? [...LID_QUESTIONS] : [];
  const stateMap = typeof LID_STATE_QUESTIONS !== 'undefined' ? LID_STATE_QUESTIONS : {};
  const stateSpecific = stateMap[selectedLiDState] ? [...stateMap[selectedLiDState]] : [];

  // Shuffle helper
  const shuffle = (arr) => arr.slice().sort(() => Math.random() - 0.5);

  // Helper to sample N questions (repeats with shuffle if bank is smaller than target)
  const sampleN = (source, n) => {
    if (!source || source.length === 0) return [];
    if (source.length >= n) return shuffle(source).slice(0, n);
    let result = [];
    while (result.length < n) {
      result = result.concat(shuffle(source));
    }
    return result.slice(0, n);
  };

  const sampledGeneral = sampleN(general, 30);
  const statePool = stateSpecific.length > 0 ? stateSpecific : general;
  const sampledState = sampleN(statePool, 3);

  lidExamQuestions = [...sampledGeneral, ...sampledState];
  lidExamAnswers = {};
  isLiDExamMode = true;
  currentLiDIndex = 0;
  lidExamSecondsLeft = 3600; // 60 minutes

  if (lidExamTimerInterval) clearInterval(lidExamTimerInterval);
  lidExamTimerInterval = setInterval(() => {
    lidExamSecondsLeft--;
    const timerDisplay = document.getElementById('lid-exam-timer-display');
    if (timerDisplay) {
      const m = Math.floor(lidExamSecondsLeft / 60);
      const s = String(lidExamSecondsLeft % 60).padStart(2, '0');
      timerDisplay.textContent = `⏱️ ${m}:${s}`;
      if (lidExamSecondsLeft <= 300) {
        timerDisplay.style.color = '#ef4444';
        timerDisplay.style.borderColor = '#ef4444';
      }
    }
    if (lidExamSecondsLeft <= 0) {
      clearInterval(lidExamTimerInterval);
      finishLiDExam();
    }
  }, 1000);

  renderLiDTrainer('lid-trainer-container');
}

function finishLiDExam() {
  if (lidExamTimerInterval) clearInterval(lidExamTimerInterval);

  const correctCount = Object.values(lidExamAnswers).filter(v => v === true).length;
  const totalCount = lidExamQuestions.length || 33;
  const passed = correctCount >= 17; // BAMF Einbürgerung pass threshold is 17/33
  const timeSpentMin = Math.floor((3600 - lidExamSecondsLeft) / 60);

  const card = document.getElementById('lid-active-question-card');
  if (card) {
    card.innerHTML = `
      <div class="lid-exam-result-card" style="text-align:center; padding:30px 20px;">
        <div style="font-size:52px; margin-bottom:12px;">${passed ? '🎉' : '⚠️'}</div>
        <div class="showcase-badge" style="background:${passed ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)'}; color:${passed ? '#22c55e' : '#ef4444'};">
          ${passed ? 'BESTANDEN (Passed BAMF Einbürgerung)' : 'NICHT BESTANDEN (Need 17/33)'}
        </div>
        <h2 style="margin:16px 0 8px 0; font-size:28px;">
          Your Score: <span style="color:${passed ? 'var(--accent-gold)' : '#ef4444'};">${correctCount} / ${totalCount}</span> (${Math.round((correctCount/totalCount)*100)}%)
        </h2>
        <p style="color:var(--text-muted); font-size:15px; max-width:550px; margin:0 auto 24px auto;">
          ${passed 
            ? `Herzlichen Glückwunsch! You met the official requirements for German Naturalization according to § 10 StAG (minimum 17 points required). Time taken: ${timeSpentMin} minutes.`
            : `You scored ${correctCount} points. Naturalization (§ 10 StAG) requires at least 17 correct answers. Your missed questions have been automatically added to your Fehlerheft review deck below.`
          }
        </p>

        <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap; margin-top:20px;">
          <button class="cta-btn-primary" onclick="startLiDExamSimulation()" style="padding:10px 20px;">
            🔄 Retake Simulation
          </button>
          <a href="#fehlerheft-container" class="entrance-dismiss-btn" style="text-decoration:none; padding:10px 20px; display:inline-block;">
            ${(typeof currentLang !== 'undefined' && currentLang === 'tr') ? '🧠 Hata Defterini İncele' : ((typeof currentLang !== 'undefined' && currentLang === 'ar') ? '🧠 مراجعة دفتر الأخطاء' : ((typeof currentLang !== 'undefined' && currentLang === 'uk') ? '🧠 Переглянути зошит помилок' : '🧠 Review Mistake Deck'))}
          </a>
          <button class="entrance-dismiss-btn" onclick="exitLiDExamSimulation()" style="padding:10px 20px;">
            🚪 Exit to Full Question Browser
          </button>
        </div>
      </div>
    `;
  }
}

function exitLiDExamSimulation() {
  if (lidExamTimerInterval) clearInterval(lidExamTimerInterval);
  isLiDExamMode = false;
  lidExamQuestions = [];
  lidExamAnswers = {};
  currentLiDIndex = 0;
  lidExamSecondsLeft = 3600;
  renderLiDTrainer('lid-trainer-container');
}

if (typeof window !== 'undefined') {
  window.renderLiDTrainer = renderLiDTrainer;
  window.checkLiDAnswer = checkLiDAnswer;
  window.nextLiDQuestion = nextLiDQuestion;
  window.prevLiDQuestion = prevLiDQuestion;
  window.changeLiDState = changeLiDState;
  window.openLiDStateModal = openLiDStateModal;
  window.closeLiDStateModal = closeLiDStateModal;
  window.confirmLiDStateSelection = confirmLiDStateSelection;
  window.getStoredLiDState = getStoredLiDState;
  window.filterLiDQuestions = filterLiDQuestions;
  window.getActiveLiDQuestionsPool = getActiveLiDQuestionsPool;
  window.startLiDExamSimulation = startLiDExamSimulation;
  window.finishLiDExam = finishLiDExam;
  window.exitLiDExamSimulation = exitLiDExamSimulation;
  window.toggleLiDStar = toggleLiDStar;
  window.toggleLiDStarredFilter = toggleLiDStarredFilter;
  window.getStarredLiDQuestionIds = getStarredLiDQuestionIds;
  window.toggleLiDTranslation = toggleLiDTranslation;
  window.LID_UI_TEXT = LID_UI_TEXT;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    renderLiDTrainer,
    checkLiDAnswer,
    nextLiDQuestion,
    prevLiDQuestion,
    changeLiDState,
    openLiDStateModal,
    closeLiDStateModal,
    confirmLiDStateSelection,
    getStoredLiDState,
    filterLiDQuestions,
    getActiveLiDQuestionsPool,
    startLiDExamSimulation,
    finishLiDExam,
    exitLiDExamSimulation,
    toggleLiDStar,
    toggleLiDStarredFilter,
    getStarredLiDQuestionIds,
    toggleLiDTranslation,
    LID_UI_TEXT
  };
}
