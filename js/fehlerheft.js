/**
 * Dynamic Fehlerheft (Personalized Weak-Spot Notebook)
 * Collects quiz errors & syntax mistakes in LocalStorage to generate custom review decks.
 */

const FEHLERHEFT_STORAGE_KEY = 'deutschlernen_fehlerheft_items';

function getFehlerheftItems() {
  try {
    const raw = localStorage.getItem(FEHLERHEFT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function recordFehlerheftItem(item) {
  // item structure: { word: string, meaning: string, example: string, mistakeType: 'vocab'|'grammar'|'syntax', timestamp: number }
  const items = getFehlerheftItems();
  const existing = items.find(i => i.word.toLowerCase() === item.word.toLowerCase());
  
  if (!existing) {
    items.push({
      ...item,
      reviewCount: 1,
      lastReviewed: Date.now()
    });
  } else {
    existing.reviewCount += 1;
    existing.lastReviewed = Date.now();
  }

  localStorage.setItem(FEHLERHEFT_STORAGE_KEY, JSON.stringify(items));
}

function renderFehlerheftDashboard(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = getFehlerheftItems();
  const lang = typeof currentLang !== 'undefined' ? currentLang : (typeof localStorage !== 'undefined' ? (localStorage.getItem('site_lang') || localStorage.getItem('telc_lang') || 'en') : 'en');
  const isAr = lang === 'ar';

  const t = {
    badge: {
      en: "🧠 Personalized Mistake Deck",
      tr: "🧠 Kişiselleştirilmiş Hata Defteri",
      ar: "🧠 دفتر الأخطاء الشخصي",
      uk: "🧠 Персональний зошит помилок"
    },
    emptyTitle: {
      en: "Your mistake notebook is empty.",
      tr: "Hata defteriniz boş.",
      ar: "دفتر أخطائك فارغ.",
      uk: "Ваш зошит помилок порожній."
    },
    emptyDesc: {
      en: "As you take Vocabulary Trainer quizzes, grammar exercises, or BAMF citizenship questions, your mistakes will automatically collect here for targeted review.",
      tr: "Kelime Antrenörü, dilbilgisi alıştırmaları veya BAMF vatandaşlık testlerinde hata yaptıkça, yanlışlarınız hedefe yönelik tekrar için otomatik olarak burada toplanacaktır.",
      ar: "أثناء تدريبك على المفردات، أو حل تدريبات القواعد أو أسئلة التجنيس BAMF، سيتم حفظ أخطائك هنا تلقائياً لمراجعتها بتركيز.",
      uk: "Коли ви робите помилки у тренажері слів, граматиці або тесті на громадянство BAMF, вони автоматично з'являтимуться тут для цілеспрямованого повторення."
    },
    title: {
      en: `Personal Mistake Notebook (${items.length} Weak Spots)`,
      tr: `Kişisel Hata Defteriniz (${items.length} Zayıf Nokta)`,
      ar: `دفتر الأخطاء الرقمي (${items.length} أخطاء مسجلة)`,
      uk: `Цифровий зошит помилок (${items.length} слабких місць)`
    },
    desc: {
      en: "Review your personal mistake queue. Items drop off as you master them in practice drills.",
      tr: "Kişisel hata havuzunuzu gözden geçirin. Alıştırmalarda ustalaştıkça maddeler listeden kalkar.",
      ar: "راجع قائمة أخطائك المسجلة. يمكنك إزالة أي عنصر بمجرد إتقانه وحفظه.",
      uk: "Перегляньте свій список помилок. Елементи видаляються, коли ви їх засвоїте."
    },
    missed: { en: "Missed", tr: "Hata sayısı", ar: "مرات الخطأ", uk: "Помилок" },
    mastered: { en: "Mark Mastered ✓", tr: "Öğrenildi Olarak İşaretle ✓", ar: "تم الحفظ والإتقان ✓", uk: "Засвоєно ✓" },
    clearAll: { en: "Clear All Mistakes", tr: "Tüm Hataları Temizle", ar: "مسح جميع الأخطاء", uk: "Очистити всі помилки" }
  };

  const getT = (key) => t[key]?.[lang] || t[key]?.en || '';

  if (items.length === 0) {
    const actionLabel = {
      en: "⚡ Start 10-Word Quiz to Detect Weak Spots →",
      tr: "⚡ Eksikleri Belirlemek İçin 10 Kelimelik Teste Başla →",
      ar: "⚡ ابدأ اختباراً من 10 كلمات لاكتشاف نقاط ضعفك ←",
      uk: "⚡ Почніть тест на 10 слів для виявлення слабких місць →"
    }[lang] || "⚡ Start 10-Word Quiz to Detect Weak Spots →";

    const guideLabel = {
      en: "What gets automatically recorded here:",
      tr: "Burada otomatik olarak kaydedilenler:",
      ar: "ما يتم تسجيله وحفظه هنا تلقائياً:",
      uk: "Що тут записується автоматично:"
    }[lang] || "What gets automatically recorded here:";

    container.innerHTML = `
      <div class="fehlerheft-empty-card" ${isAr ? 'dir="rtl"' : ''}>
        <div class="empty-icon">🎉</div>
        <h3>${getT('emptyTitle')}</h3>
        <p>${getT('emptyDesc')}</p>
        <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap; margin:16px 0 20px; font-size:12px; color:var(--text-secondary);">
          <span style="font-weight:600; color:var(--accent-gold);">💡 ${guideLabel}</span>
          <span>• 📝 Missed Vocabulary & Articles</span>
          <span>• ⚖️ Grammar Cases (Dativ/Akkusativ)</span>
          <span>• 🔄 Syntax Inversion Slips</span>
        </div>
        <div>
          <a href="trainer.html?mode=mcq" class="card-link primary" style="display:inline-flex; align-items:center; gap:8px; padding:10px 20px; font-size:13px; font-weight:700; border-radius:10px; text-decoration:none;">
            ${actionLabel}
          </a>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="fehlerheft-wrapper" ${isAr ? 'dir="rtl"' : ''}>
      <div class="fehlerheft-header" style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px;">
        <div>
          <div class="showcase-badge">${getT('badge')}</div>
          <h2>${getT('title')}</h2>
          <p>${getT('desc')}</p>
        </div>
        <button class="entrance-dismiss-btn" onclick="clearAllFehlerheftItems()" style="font-size:12px; padding:6px 12px;">
          🗑️ ${getT('clearAll')}
        </button>
      </div>

      <div class="fehlerheft-items-grid">
        ${items.map((item, idx) => `
          <div class="fehlerheft-item-card">
            <div class="fh-type-badge ${item.mistakeType || 'vocab'}">${(item.mistakeType || 'vocab').toUpperCase()}</div>
            <h4 class="fh-word">${item.word}</h4>
            <p class="fh-meaning">${item.meaning}</p>
            ${item.example ? `<p class="fh-example"><em>"${item.example}"</em></p>` : ''}
            <div class="fh-footer">
              <span>${getT('missed')}: ${item.reviewCount}x</span>
              <button class="remove-fh-btn" onclick="removeFehlerheftItem(${idx})">${getT('mastered')}</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function removeFehlerheftItem(index) {
  const items = getFehlerheftItems();
  items.splice(index, 1);
  localStorage.setItem(FEHLERHEFT_STORAGE_KEY, JSON.stringify(items));
  renderFehlerheftDashboard('fehlerheft-container');
}

function clearAllFehlerheftItems() {
  localStorage.removeItem(FEHLERHEFT_STORAGE_KEY);
  renderFehlerheftDashboard('fehlerheft-container');
}

if (typeof window !== 'undefined') {
  window.getFehlerheftItems = getFehlerheftItems;
  window.recordFehlerheftItem = recordFehlerheftItem;
  window.renderFehlerheftDashboard = renderFehlerheftDashboard;
  window.removeFehlerheftItem = removeFehlerheftItem;
  window.clearAllFehlerheftItems = clearAllFehlerheftItems;
}
