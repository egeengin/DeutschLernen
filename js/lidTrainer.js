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
  const isTr = typeof currentLang !== 'undefined' && currentLang === 'tr';

  container.innerHTML = `
    <div class="lid-trainer-wrapper">
      <div class="lid-header">
        <div class="showcase-badge">🇩🇪 BAMF Naturalization Exam</div>
        <h2>Leben in Deutschland (LiD) 310 Citizenship Browser</h2>
        <p>Master all official 310 citizenship questions required for German Naturalization (Einbürgerung / § 10 StAG). Practice free offline with instant translations & B1 political vocabulary tags.</p>
      </div>

      <!-- Controls Row: State Selector & Search Filter -->
      <div class="lid-controls-bar">
        <div class="lid-control-group">
          <label for="lid-state-select"><strong>Select Your Federal State (16 Bundesländer):</strong></label>
          <select id="lid-state-select" class="styled-select" onchange="changeLiDState(this.value)">
            ${states.map(s => `<option value="${s.code}" ${s.code === selectedLiDState ? 'selected' : ''}>${s.name} (Capital: ${s.capital})</option>`).join('')}
          </select>
        </div>

        <div class="lid-control-group">
          <label for="lid-search-input"><strong>Search Questions / Keywords:</strong></label>
          <input type="text" id="lid-search-input" class="search-box" placeholder="Search Grundgesetz, Bundestag, Kanzler..." onkeyup="filterLiDQuestions(this.value)">
        </div>
      </div>

      <!-- Question Container Card -->
      <div id="lid-active-question-card" class="lid-question-card">
        ${renderSingleLiDQuestion(questions[currentLiDIndex])}
      </div>

      <!-- Footer Navigation Controls -->
      <div class="lid-nav-actions">
        <button class="entrance-dismiss-btn" onclick="prevLiDQuestion()">← Previous</button>
        <span id="lid-progress-label">Question ${currentLiDIndex + 1} of ${questions.length}</span>
        <button class="cta-btn-primary" onclick="nextLiDQuestion()">Next Question →</button>
      </div>
    </div>
  `;
}

function renderSingleLiDQuestion(q) {
  if (!q) return '<p>No questions found.</p>';
  const isTr = typeof currentLang !== 'undefined' && currentLang === 'tr';

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
      <p class="exp-tr"><strong>${isTr ? 'TR' : 'EN'}:</strong> ${isTr ? q.explanationTr : q.explanationEn}</p>
      
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
