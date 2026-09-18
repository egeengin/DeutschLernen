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
  const isTr = typeof currentLang !== 'undefined' && currentLang === 'tr';

  if (items.length === 0) {
    container.innerHTML = `
      <div class="fehlerheft-empty-card">
        <div class="empty-icon">🎉</div>
        <h3>Dein Fehlerheft ist leer! (No Weak Spots Yet)</h3>
        <p>As you take Vocabulary Trainer quizzes or practice telc B1 exercises, your missed words and grammar errors will automatically collect here for targeted review.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="fehlerheft-wrapper">
      <div class="fehlerheft-header">
        <div class="showcase-badge">🧠 Personalized Review</div>
        <h2>Dein Digitales Fehlerheft (${items.length} Weak Spots)</h2>
        <p>Review your personal mistake queue. Items drop off as you master them in practice drills.</p>
      </div>

      <div class="fehlerheft-items-grid">
        ${items.map((item, idx) => `
          <div class="fehlerheft-item-card">
            <div class="fh-type-badge ${item.mistakeType || 'vocab'}">${(item.mistakeType || 'vocab').toUpperCase()}</div>
            <h4 class="fh-word">${item.word}</h4>
            <p class="fh-meaning">${item.meaning}</p>
            ${item.example ? `<p class="fh-example"><em>"${item.example}"</em></p>` : ''}
            <div class="fh-footer">
              <span>Missed: ${item.reviewCount}x</span>
              <button class="remove-fh-btn" onclick="removeFehlerheftItem(${idx})">Mark Festhalt/Mastered ✓</button>
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

if (typeof window !== 'undefined') {
  window.getFehlerheftItems = getFehlerheftItems;
  window.recordFehlerheftItem = recordFehlerheftItem;
  window.renderFehlerheftDashboard = renderFehlerheftDashboard;
  window.removeFehlerheftItem = removeFehlerheftItem;
}
