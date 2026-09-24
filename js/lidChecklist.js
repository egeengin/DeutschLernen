/**
 * High-Yield Leben in Deutschland (LiD 310) Interactive Checklist & Read List
 * Provides two review modes:
 * 1. Mixed Bilingual: In user's native tongue (TR, EN, AR, UK) with German keywords emphasized.
 * 2. Pure German: Official German phrasing as encountered on the BAMF exam.
 * Features persistent checkboxes, progress tracking, category filtering, and instant search.
 */

const LID_CHECKLIST_STORAGE_KEY = 'deutschlernen_lid_checklist_progress';
const LID_CHECKLIST_MODE_KEY = 'deutschlernen_lid_checklist_mode';

let isLiDPureGermanMode = false;
try {
  if (typeof localStorage !== 'undefined') {
    isLiDPureGermanMode = localStorage.getItem(LID_CHECKLIST_MODE_KEY) === 'pure';
  }
} catch (e) {
  isLiDPureGermanMode = false;
}

let currentLiDChecklistCategory = 'all';
let currentLiDChecklistSearch = '';

const LID_CHECKLIST_UI_TEXT = {
  sectionBadge: {
    en: "📋 HIGH-YIELD EXAM REVIEW",
    tr: "📋 SINAV ÖZETİ & KONTROL LİSTESİ",
    ar: "📋 مراجعة هامة للامتحان",
    uk: "📋 ЕКЗАМЕНАЦІЙНИЙ КОНСПЕКТ"
  },
  title: {
    en: "25 High-Yield Facts for Leben in Deutschland",
    tr: "Leben in Deutschland İçin 25 Kritik Bilgi ve Kontrol Listesi",
    ar: "25 حقيقة أساسية لاجتياز اختبار الحياة في ألمانيا",
    uk: "25 ключових фактів для іспиту Життя в Німеччині"
  },
  subtitle: {
    en: "Master the most frequently tested constitutional principles, institutions, dates, and civic duties. Check them off as you study!",
    tr: "Sınavda en çok çıkan anayasal ilkeleri, devlet kurumlarını, tarihleri ve vatandaşlık görevlerini öğrenin. Çalıştıkça işaretleyin!",
    ar: "أتقن أهم المبادئ الدستورية ومؤسسات الدولة والتواريخ والواجبات المدنية الأكثر تكراراً في الامتحان. حدد ما حفظته!",
    uk: "Опануйте найважливіші конституційні засади, державні органи, дати та обов'язки. Позначайте вивчене!"
  },
  modeBilingual: {
    en: "🌐 Bilingual (with German Keywords)",
    tr: "🌐 İki Dilli (Almanca Terim Destekli)",
    ar: "🌐 ثنائي اللغة (مع مصطلحات ألمانية)",
    uk: "🌐 Двомовний (з німецькими термінами)"
  },
  modePureGerman: {
    en: "🇩🇪 Pure German (Exam Simulation)",
    tr: "🇩🇪 Saf Almanca (Sınav Formatı)",
    ar: "🇩🇪 ألماني خالص (صيغة الامتحان)",
    uk: "🇩🇪 Чиста німецька (Формат іспиту)"
  },
  modeSwitchBtn: {
    en: "Switch Mode: ",
    tr: "Mod Değiştir: ",
    ar: "تبديل الوضع: ",
    uk: "Змінити режим: "
  },
  progressTitle: {
    en: "Study Progress",
    tr: "Çalışma İlerlemesi",
    ar: "تقدم الدراسة",
    uk: "Прогрес вивчення"
  },
  reviewedCount: {
    en: "Mastered",
    tr: "Öğrenilen",
    ar: "المتقن",
    uk: "Вивчено"
  },
  checkAllBtn: {
    en: "✓ Check All",
    tr: "✓ Hepsini İşaretle",
    ar: "✓ تحديد الكل",
    uk: "✓ Позначити все"
  },
  resetBtn: {
    en: "↺ Reset Progress",
    tr: "↺ Sıfırla",
    ar: "↺ إعادة ضبط",
    uk: "↺ Скинути"
  },
  searchPlaceholder: {
    en: "🔍 Search constitutional facts, organs, dates...",
    tr: "🔍 Anayasa, kurumlar, tarihler ara...",
    ar: "🔍 ابحث في المبادئ الدستورية، التواريخ، المؤسسات...",
    uk: "🔍 Пошук статей, органів влади, дат..."
  },
  bamfLinkPrefix: {
    en: "BAMF Questions:",
    tr: "İlgili Sorular:",
    ar: "أسئلة BAMF ذات الصلة:",
    uk: "Питання BAMF:"
  },
  markDoneLabel: {
    en: "Mastered",
    tr: "Öğrendim",
    ar: "تم الحفظ",
    uk: "Вивчено"
  },
  markTodoLabel: {
    en: "To Review",
    tr: "Çalışılacak",
    ar: "للمراجعة",
    uk: "Повторити"
  },
  noResults: {
    en: "No facts match your search filter.",
    tr: "Aramanızla eşleşen bilgi bulunamadı.",
    ar: "لا توجد نتائج مطابقة لبحثك.",
    uk: "Не знайдено фактів за вашим запитом."
  }
};

function getLiDChecklistTranslation(key, lang) {
  const l = lang || (typeof currentLang !== 'undefined' ? currentLang : 'en');
  return LID_CHECKLIST_UI_TEXT[key]?.[l] || LID_CHECKLIST_UI_TEXT[key]?.en || '';
}

function getStoredLiDChecklistProgress() {
  try {
    if (typeof localStorage === 'undefined') return [];
    const raw = localStorage.getItem(LID_CHECKLIST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function setStoredLiDChecklistProgress(arr) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LID_CHECKLIST_STORAGE_KEY, JSON.stringify(arr));
    }
  } catch (e) {}
}

function toggleLiDChecklistItem(id) {
  const checked = getStoredLiDChecklistProgress();
  const numId = parseInt(id, 10);
  const idx = checked.indexOf(numId);
  if (idx > -1) {
    checked.splice(idx, 1);
  } else {
    checked.push(numId);
  }
  setStoredLiDChecklistProgress(checked);

  // Update card UI class and checkbox
  const card = document.getElementById(`lid-fact-card-${numId}`);
  const cb = document.getElementById(`lid-fact-cb-${numId}`);
  const statusBadge = document.getElementById(`lid-fact-status-${numId}`);
  const isDone = checked.includes(numId);
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

  if (card) card.classList.toggle('checked', isDone);
  if (cb) cb.checked = isDone;
  if (statusBadge) {
    statusBadge.textContent = isDone 
      ? `✓ ${getLiDChecklistTranslation('markDoneLabel', lang)}` 
      : `○ ${getLiDChecklistTranslation('markTodoLabel', lang)}`;
    statusBadge.className = `lid-fact-status-badge ${isDone ? 'done' : 'todo'}`;
  }

  updateLiDChecklistProgressBar();
}

function toggleLiDChecklistMode() {
  isLiDPureGermanMode = !isLiDPureGermanMode;
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LID_CHECKLIST_MODE_KEY, isLiDPureGermanMode ? 'pure' : 'mixed');
    }
  } catch (e) {}
  renderLiDChecklist('lid-checklist-container');
}

function checkAllLiDChecklistItems() {
  const items = typeof LID_CHECKLIST_DATA !== 'undefined' ? LID_CHECKLIST_DATA : [];
  const allIds = items.map(item => item.id);
  setStoredLiDChecklistProgress(allIds);
  renderLiDChecklist('lid-checklist-container');
}

function resetLiDChecklistItems() {
  setStoredLiDChecklistProgress([]);
  renderLiDChecklist('lid-checklist-container');
}

function filterLiDChecklistByCategory(cat) {
  currentLiDChecklistCategory = cat;
  renderLiDChecklistCards();
  // Update active pill
  document.querySelectorAll('.lid-checklist-cat-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
  });
}

function filterLiDChecklistBySearch(val) {
  currentLiDChecklistSearch = (val || '').trim().toLowerCase();
  renderLiDChecklistCards();
}

function updateLiDChecklistProgressBar() {
  const items = typeof LID_CHECKLIST_DATA !== 'undefined' ? LID_CHECKLIST_DATA : [];
  const checked = getStoredLiDChecklistProgress();
  const total = items.length;
  const count = checked.length;
  const percent = total > 0 ? Math.round((count / total) * 100) : 0;

  const countEl = document.getElementById('lid-checklist-progress-count');
  const barEl = document.getElementById('lid-checklist-progress-fill');
  const pctEl = document.getElementById('lid-checklist-progress-percent');

  if (countEl) countEl.textContent = `${count} / ${total}`;
  if (barEl) barEl.style.width = `${percent}%`;
  if (pctEl) pctEl.textContent = `${percent}%`;
}

function renderLiDChecklistCards() {
  const grid = document.getElementById('lid-checklist-cards-grid');
  if (!grid) return;

  const items = typeof LID_CHECKLIST_DATA !== 'undefined' ? LID_CHECKLIST_DATA : [];
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
  const checked = getStoredLiDChecklistProgress();

  let filtered = items;
  if (currentLiDChecklistCategory !== 'all') {
    filtered = filtered.filter(i => i.category === currentLiDChecklistCategory);
  }
  if (currentLiDChecklistSearch) {
    const q = currentLiDChecklistSearch;
    filtered = filtered.filter(i => 
      i.titleDe.toLowerCase().includes(q) ||
      i.pureDe.toLowerCase().includes(q) ||
      (i.keywords && i.keywords.some(k => k.toLowerCase().includes(q))) ||
      (i[`title${lang.charAt(0).toUpperCase() + lang.slice(1)}`] && i[`title${lang.charAt(0).toUpperCase() + lang.slice(1)}`].toLowerCase().includes(q)) ||
      (i[`mixed${lang.charAt(0).toUpperCase() + lang.slice(1)}`] && i[`mixed${lang.charAt(0).toUpperCase() + lang.slice(1)}`].toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 40px 20px; color:var(--text-muted); font-size:14px; background:var(--bg-card); border:1px dashed var(--border); border-radius:12px;">
        ${getLiDChecklistTranslation('noResults', lang)}
      </div>
    `;
    return;
  }

  const langKey = lang.charAt(0).toUpperCase() + lang.slice(1);

  grid.innerHTML = filtered.map(item => {
    const isDone = checked.includes(item.id);
    const title = isLiDPureGermanMode 
      ? item.titleDe 
      : (item[`title${langKey}`] || item.titleEn || item.titleDe);
    const bodyContent = isLiDPureGermanMode 
      ? item.pureDe 
      : (item[`mixed${langKey}`] || item.mixedEn || item.pureDe);

    return `
      <div class="lid-fact-card ${isDone ? 'checked' : ''}" id="lid-fact-card-${item.id}">
        <div class="lid-fact-card-header">
          <label class="lid-fact-checkbox-label">
            <input type="checkbox" id="lid-fact-cb-${item.id}" ${isDone ? 'checked' : ''} onchange="toggleLiDChecklistItem(${item.id})">
            <span class="lid-fact-custom-checkbox"></span>
            <span class="lid-fact-card-title">${title}</span>
          </label>
          <span class="lid-fact-status-badge ${isDone ? 'done' : 'todo'}" id="lid-fact-status-${item.id}">
            ${isDone ? `✓ ${getLiDChecklistTranslation('markDoneLabel', lang)}` : `○ ${getLiDChecklistTranslation('markTodoLabel', lang)}`}
          </span>
        </div>

        <div class="lid-fact-card-body" ${lang === 'ar' && !isLiDPureGermanMode ? 'dir="rtl"' : ''}>
          ${bodyContent}
        </div>

        <div class="lid-fact-card-footer">
          <div class="lid-fact-keywords">
            ${item.keywords.map(kw => `<span class="lid-fact-kw-pill">🏷️ ${kw}</span>`).join('')}
          </div>
          <div class="lid-fact-bamf-refs">
            <span>${getLiDChecklistTranslation('bamfLinkPrefix', lang)}</span>
            ${item.bamfQuestions.map(qNum => `
              <span class="lid-fact-q-pill" title="Official BAMF Question #${qNum}">#${qNum}</span>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderLiDChecklist(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
  const t = (k) => getLiDChecklistTranslation(k, lang);
  const categories = typeof LID_CHECKLIST_CATEGORIES !== 'undefined' ? LID_CHECKLIST_CATEGORIES : {};

  container.innerHTML = `
    <div class="lid-checklist-wrapper">
      <!-- Header with Badges & Mode Switcher -->
      <div class="lid-checklist-header">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
          <div>
            <div class="showcase-badge" style="background:rgba(245,158,11,0.15); color:var(--accent-gold); border-color:var(--accent-gold);">
              ${t('sectionBadge')}
            </div>
            <h2 style="font-size:24px; margin-top:8px; margin-bottom:6px; color:var(--text-primary);">${t('title')}</h2>
            <p style="font-size:14px; color:var(--text-secondary); max-width:680px; line-height:1.5;">${t('subtitle')}</p>
          </div>

          <!-- Dual Mode Toggle Button -->
          <div class="lid-checklist-mode-switch-box">
            <span style="font-size:12px; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">
              ${t('modeSwitchBtn')}
            </span>
            <button class="cta-btn-primary" id="btn-toggle-lid-checklist-mode" onclick="toggleLiDChecklistMode()" style="padding:10px 18px; font-size:13px; font-weight:700; display:inline-flex; align-items:center; gap:8px;">
              <span>${isLiDPureGermanMode ? t('modePureGerman') : t('modeBilingual')}</span>
              <span style="opacity:0.75; font-size:11px;">⇄</span>
            </button>
          </div>
        </div>

        <!-- Live Study Progress Bar & Quick Batch Actions -->
        <div class="lid-checklist-progress-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:8px;">
            <div style="font-size:13px; font-weight:700; color:var(--text-primary);">
              📊 ${t('progressTitle')}: <span id="lid-checklist-progress-count" style="color:var(--accent-gold);">0 / 25</span>
              (<span id="lid-checklist-progress-percent">0%</span>)
            </div>
            <div style="display:flex; gap:10px;">
              <button class="lid-checklist-action-btn" onclick="checkAllLiDChecklistItems()">${t('checkAllBtn')}</button>
              <button class="lid-checklist-action-btn" onclick="resetLiDChecklistItems()">${t('resetBtn')}</button>
            </div>
          </div>
          <div class="lid-checklist-progress-track">
            <div class="lid-checklist-progress-fill" id="lid-checklist-progress-fill" style="width: 0%;"></div>
          </div>
        </div>

        <!-- Filter Controls: Category Tabs & Search Bar -->
        <div class="lid-checklist-filter-row">
          <div class="lid-checklist-cat-pills" role="tablist">
            ${Object.keys(categories).map(catKey => {
              const label = categories[catKey][lang] || categories[catKey].en;
              const isActive = catKey === currentLiDChecklistCategory;
              return `
                <button class="lid-checklist-cat-pill ${isActive ? 'active' : ''}" data-cat="${catKey}" onclick="filterLiDChecklistByCategory('${catKey}')">
                  ${label}
                </button>
              `;
            }).join('')}
          </div>

          <div class="lid-checklist-search-box">
            <input type="text" id="lid-checklist-search-input" class="search-box" placeholder="${t('searchPlaceholder')}" onkeyup="filterLiDChecklistBySearch(this.value)" value="${currentLiDChecklistSearch}">
          </div>
        </div>
      </div>

      <!-- Checklist Fact Cards Grid -->
      <div class="lid-checklist-cards-grid" id="lid-checklist-cards-grid"></div>
    </div>
  `;

  renderLiDChecklistCards();
  updateLiDChecklistProgressBar();
}

if (typeof window !== 'undefined') {
  window.renderLiDChecklist = renderLiDChecklist;
  window.toggleLiDChecklistItem = toggleLiDChecklistItem;
  window.toggleLiDChecklistMode = toggleLiDChecklistMode;
  window.filterLiDChecklistByCategory = filterLiDChecklistByCategory;
  window.filterLiDChecklistBySearch = filterLiDChecklistBySearch;
  window.checkAllLiDChecklistItems = checkAllLiDChecklistItems;
  window.resetLiDChecklistItems = resetLiDChecklistItems;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    renderLiDChecklist,
    toggleLiDChecklistItem,
    toggleLiDChecklistMode,
    filterLiDChecklistByCategory,
    filterLiDChecklistBySearch,
    checkAllLiDChecklistItems,
    resetLiDChecklistItems,
    getStoredLiDChecklistProgress,
    setStoredLiDChecklistProgress
  };
}
