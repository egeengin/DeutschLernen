// Global State
let currentLang = 'en';
let currentTheme = localStorage.getItem('deutschlernen_theme') || localStorage.getItem('telc_theme') || localStorage.getItem('site_theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
let currentMdUrl = null;
let currentActiveMaterial = null;

// Material cards data
const materials = [
  { icon:'📋', title:'Exam Guide', titleTr:'Sınav Rehberi', desc:'Structure, scoring, strategies', descTr:'Yapı, puanlama, stratejiler', en:'./TELC_B1_Preparation/telc_b1_exam_guide.md', tr:'./TELC_B1_Haz%C4%B1rl%C4%B1k/telc_b1_exam_guide.md' },
  { icon:'📅', title:'1-Month Plan', titleTr:'1 Aylık Plan', desc:'Day-by-day study schedule', descTr:'Gün gün çalışma programı', en:'./TELC_B1_Preparation/1_month_study_plan.md', tr:'./TELC_B1_Haz%C4%B1rl%C4%B1k/1_month_study_plan.md' },
  { icon:'📝', title:'Grammar & Vocab', titleTr:'Dil Bilgisi ve Kelime', desc:'Nebensätze, Perfekt, prepositions + 30 exercises', descTr:'Nebensätze, Perfekt, edatlar + 30 alıştırma', en:'./TELC_B1_Preparation/review_grammar_vocab.md', tr:'./TELC_B1_Haz%C4%B1rl%C4%B1k/review_grammar_vocab.md' },
  { icon:'📖', title:'Reading & Listening', titleTr:'Okuma ve Dinleme', desc:'Synonym recognition, strategies, 6 exercises', descTr:'Eşanlamlı tanıma, stratejiler, 6 alıştırma', en:'./TELC_B1_Preparation/review_reading_listening.md', tr:'./TELC_B1_Haz%C4%B1rl%C4%B1k/review_reading_listening.md' },
  { icon:'✍️', title:'Writing & Speaking', titleTr:'Yazma ve Konuşma', desc:'Letter templates, model answer, speaking phrases', descTr:'Mektup şablonları, model cevap, konuşma ifadeleri', en:'./TELC_B1_Preparation/review_writing_speaking.md', tr:'./TELC_B1_Haz%C4%B1rl%C4%B1k/review_writing_speaking.md' },
  { icon:'🔍', title:'Diagnostic Exam', titleTr:'Tanılama Sınavı', desc:'Day 1 assessment — find your weak spots', descTr:'1. gün değerlendirmesi — zayıf noktalarınızı bulun', en:'./TELC_B1_Preparation/mock_exam_diagnostic.md', tr:'./TELC_B1_Haz%C4%B1rl%C4%B1k/mock_exam_diagnostic.md' },
  { icon:'🎯', title:'Final Mock Exam', titleTr:'Final Sınavı', desc:'Week 4 full simulation under exam conditions', descTr:'4. hafta sınav koşullarında tam simülasyon', en:'./TELC_B1_Preparation/mock_exam_final.md', tr:'./TELC_B1_Haz%C4%B1rl%C4%B1k/mock_exam_final.md' },
  { icon:'🌐', title:'Free Resources', titleTr:'Ücretsiz Kaynaklar', desc:'Official tests, YouTube, DW courses, websites', descTr:'Resmi testler, YouTube, DW kursları, web siteleri', en:'./TELC_B1_Preparation/example_exams_resources.md', tr:'./TELC_B1_Haz%C4%B1rl%C4%B1k/example_exams_resources.md' },
  { icon:'📚', title:'Vocab: Verbs', titleTr:'Kelime: Fiiller', desc:'~500 verbs & adjectives with examples', descTr:'~500 fiil ve sıfat, örneklerle', en:'./TELC_B1_Preparation/vocab_part1_verbs_adjectives.md', tr:'./TELC_B1_Haz%C4%B1rl%C4%B1k/vocab_part1_fiiller_sifatlar.md' },
  { icon:'📚', title:'Vocab: Nouns', titleTr:'Kelime: İsimler', desc:'~550 nouns by exam theme', descTr:'~550 isim, sınav temalarına göre', en:'./TELC_B1_Preparation/vocab_part2_nouns_themes.md', tr:'./TELC_B1_Haz%C4%B1rl%C4%B1k/vocab_part2_isimler_temalar.md' },
];

const navIds = ['exam-guide', 'study-plan', 'grammar', 'reading', 'writing', 'diagnostic', 'final-exam', 'resources', 'vocab1', 'vocab2'];
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;
  nav.innerHTML = '';
  materials.forEach((m, i) => {
    const id = navIds[i];
    nav.innerHTML += `<a href="#${id}" onclick="showSection('${id}')">
      <span class="icon">${m.icon}</span>
      <span data-en="${m.title}" data-tr="${m.titleTr}">${currentLang === 'en' ? m.title : m.titleTr}</span>
      <span class="num">${i+1}</span>
    </a>`;
  });
}

// Open Material dynamically matching current language
function openMaterial(index) {
  const m = materials[index];
  if (!m) return;
  const url = currentLang === 'en' ? m.en : m.tr;
  openMarkdown(url);
}

// Render material cards
function renderCards() {
  const cardsEl = document.getElementById('material-cards');
  if (!cardsEl) return;
  cardsEl.innerHTML = '';
  materials.forEach((m, i) => {
    const title = currentLang === 'en' ? m.title : m.titleTr;
    const desc = currentLang === 'en' ? m.desc : m.descTr;
    const btnText = currentLang === 'en' ? '📄 Open Module &rarr;' : '📄 Modülü Aç &rarr;';
    cardsEl.innerHTML += `<div class="card" onclick="openMaterial(${i})">
      <div class="card-icon">${m.icon}</div>
      <h3 data-en="${m.title}" data-tr="${m.titleTr}">${title}</h3>
      <p data-en="${m.desc}" data-tr="${m.descTr}">${desc}</p>
      <div class="card-links">
        <button class="card-link primary" onclick="event.stopPropagation(); openMaterial(${i});">
          <span data-en="📄 Open Module &rarr;" data-tr="📄 Modülü Aç &rarr;">${btnText}</span>
        </button>
      </div>
    </div>`;
  });
}

// Quiz data
const quizData = [
  { q: 'Ich bleibe zu Hause, ___ ich krank bin.', opts: ['dass','weil','wenn'], correct: 1, explain: 'weil = because. Reason clause → verb to end.' },
  { q: 'Ich bin müde. ___ bleibe ich zu Hause.', opts: ['Trotzdem','Außerdem','Deshalb'], correct: 2, explain: 'Deshalb = therefore. Position 1 → verb inversion.' },
  { q: 'Gestern ___ ich den ganzen Tag zu Hause ___.', opts: ['habe...geblieben','bin...geblieben','habe...gebleibt'], correct: 1, explain: 'bleiben = change of state → use sein. Irregular: geblieben.' },
  { q: '___ Sie mir bitte helfen?', opts: ['Können','Konnten','Könnten'], correct: 2, explain: 'Könnten = Konjunktiv II. Polite request form.' },
  { q: 'Das ist der Mann, ___ gestern bei uns war.', opts: ['der','den','dem'], correct: 0, explain: 'Relativpronomen Nominativ maskulin — der Mann ist Subjekt.' },
  { q: 'Ich warte ___ Bus.', opts: ['auf dem','auf den','auf der'], correct: 1, explain: 'warten auf + Akkusativ. den Bus = Akk maskulin.' },
  { q: 'Sie hat sich ___ die Verspätung entschuldigt.', opts: ['über','für','um'], correct: 1, explain: 'sich entschuldigen für + Akkusativ.' },
  { q: 'Ich interessiere mich ___ den Deutschkurs.', opts: ['für','um','an'], correct: 0, explain: 'sich interessieren für + Akkusativ.' },
];

// Render quiz
const quizEl = document.getElementById('quiz-container');
quizData.forEach((q, qi) => {
  let optsHtml = q.opts.map((o, oi) =>
    `<button class="quiz-opt" onclick="checkAnswer(${qi},${oi})">${String.fromCharCode(97+oi)}) ${o}</button>`
  ).join('');
  quizEl.innerHTML += `<div class="quiz-item" id="quiz-${qi}">
    <div class="quiz-q"><b>${qi+1}.</b> ${q.q}</div>
    <div class="quiz-options">${optsHtml}</div>
    <div class="quiz-explain" id="explain-${qi}">✅ ${q.explain}</div>
  </div>`;
});

  let quizAnswered = JSON.parse(localStorage.getItem('telc_quiz') || '{}');
  let sectionsVisited = JSON.parse(localStorage.getItem('telc_sections') || '{}');

function checkAnswer(qi, oi) {
  if (quizAnswered[qi] !== undefined) return;
  const item = document.getElementById(`quiz-${qi}`);
  const btns = item.querySelectorAll('.quiz-opt');
  const correct = quizData[qi].correct;
  btns.forEach((b, i) => {
    b.classList.add('disabled');
    if (i === correct) b.classList.add('correct');
    else if (i === oi && oi !== correct) b.classList.add('wrong');
  });
  document.getElementById(`explain-${qi}`).classList.add('show');
  quizAnswered[qi] = (oi === correct);
  localStorage.setItem('telc_quiz', JSON.stringify(quizAnswered));
  updateQuizScore();
  updateProgress();
}

function updateQuizScore() {
  const total = quizData.length;
  const answered = Object.keys(quizAnswered).length;
  const correctCount = Object.values(quizAnswered).filter(v => v).length;
  document.getElementById('quiz-score-display').textContent = `${correctCount}/${total}`;
}

function resetQuiz() {
  quizAnswered = {};
  localStorage.removeItem('telc_quiz');
  document.getElementById('quiz-container').innerHTML = '';
  quizData.forEach((q, qi) => {
    let optsHtml = q.opts.map((o, oi) =>
      `<button class="quiz-opt" onclick="checkAnswer(${qi},${oi})">${String.fromCharCode(97+oi)}) ${o}</button>`
    ).join('');
    document.getElementById('quiz-container').innerHTML += `<div class="quiz-item" id="quiz-${qi}">
      <div class="quiz-q"><b>${qi+1}.</b> ${q.q}</div>
      <div class="quiz-options">${optsHtml}</div>
      <div class="quiz-explain" id="explain-${qi}">✅ ${q.explain}</div>
    </div>`;
  });
  updateQuizScore();
  updateProgress();
}

function trackSection(id) {
  if (id && !sectionsVisited[id]) {
    sectionsVisited[id] = true;
    localStorage.setItem('telc_sections', JSON.stringify(sectionsVisited));
    updateProgress();
  }
}

function updateProgress() {
  // Logic kept for background tracking but UI calls removed
}

// Restore saved quiz state
function restoreQuiz() {
  Object.keys(quizAnswered).forEach(qi => {
    const item = document.getElementById(`quiz-${qi}`);
    if (!item) return;
    const btns = item.querySelectorAll('.quiz-opt');
    const correct = quizData[qi].correct;
    btns.forEach((b, i) => {
      b.classList.add('disabled');
      if (i === correct) b.classList.add('correct');
    });
    document.getElementById(`explain-${qi}`).classList.add('show');
  });
  updateQuizScore();
  updateProgress();
}
restoreQuiz();

// Flashcards
const vocabList = [
  { de: 'arbeiten', tr: 'çalışmak', en: 'to work', ex: 'Ich arbeite jeden Tag von 8 bis 17 Uhr.' },
  { de: 'wohnen', tr: 'yaşamak / oturmak', en: 'to live / reside', ex: 'Wir wohnen seit drei Jahren in Berlin.' },
  { de: 'kommen', tr: 'gelmek', en: 'to come', ex: 'Woher kommen Sie? – Ich komme aus der Türkei.' },
  { de: 'gehen', tr: 'gitmek', en: 'to go', ex: 'Ich gehe jeden Morgen zu Fuß zur Arbeit.' },
  { de: 'fahren', tr: 'sürmek / gitmek', en: 'to drive / ride', ex: 'Ich fahre mit dem Bus zur Schule.' },
  { de: 'machen', tr: 'yapmak', en: 'to do / make', ex: 'Was machst du am Wochenende?' },
  { de: 'haben', tr: 'sahip olmak', en: 'to have', ex: 'Ich habe drei Kinder.' },
  { de: 'sein', tr: 'olmak', en: 'to be', ex: 'Sie ist Ärztin von Beruf.' },
  { de: 'werden', tr: 'olmak (gelecek)', en: 'to become', ex: 'Ich möchte Lehrerin werden.' },
  { de: 'brauchen', tr: 'ihtiyaç duymak', en: 'to need', ex: 'Wir brauchen einen neuen Kühlschrank.' },
  { de: 'kaufen', tr: 'satın almak', en: 'to buy', ex: 'Ich kaufe jeden Tag frisches Gemüse.' },
  { de: 'kochen', tr: 'yemek pişirmek', en: 'to cook', ex: 'Meine Mutter kocht sehr lecker.' },
  { de: 'essen', tr: 'yemek (fiil)', en: 'to eat', ex: 'Was isst du gern?' },
  { de: 'trinken', tr: 'içmek', en: 'to drink', ex: 'Ich trinke jeden Morgen Kaffee.' },
  { de: 'schlafen', tr: 'uyumak', en: 'to sleep', ex: 'Ich schlafe immer acht Stunden.' },
  { de: 'lernen', tr: 'öğrenmek', en: 'to learn', ex: 'Ich lerne seit sechs Monaten Deutsch.' },
  { de: 'schreiben', tr: 'yazmak', en: 'to write', ex: 'Kannst du mir eine E-Mail schreiben?' },
  { de: 'lesen', tr: 'okumak', en: 'to read', ex: 'Ich lese gern Bücher.' },
  { de: 'sprechen', tr: 'konuşmak', en: 'to speak', ex: 'Sprechen Sie Deutsch?' },
  { de: 'hören', tr: 'duymak / dinlemek', en: 'to hear / listen', ex: 'Ich höre gern Musik.' }
];

let currentCard = 0;
function updateCard(immediate = false) {
  const card = document.getElementById('flashcard');
  card.classList.remove('flipped');
  setTimeout(() => {
    document.getElementById('fc-de').textContent = vocabList[currentCard].de;
    document.getElementById('fc-tr').textContent = currentLang === 'en' ? vocabList[currentCard].en : vocabList[currentCard].tr;
    document.getElementById('fc-ex').textContent = vocabList[currentCard].ex;
    document.getElementById('fc-count').textContent = `${currentCard + 1} / ${vocabList.length}`;
  }, immediate ? 0 : 150);
}
function flipCard() { document.getElementById('flashcard').classList.toggle('flipped'); }
function nextCard() { currentCard = (currentCard + 1) % vocabList.length; updateCard(); }
function prevCard() { currentCard = currentCard <= 0 ? vocabList.length - 1 : currentCard - 1; updateCard(); }

// Language toggle
// currentLang moved to top

// History API for Android/Browser Back Button
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.mdOpen) {
    // If state says md is open, attempt to open it without pushing state again
    openMarkdown(e.state.url, true);
  } else {
    // Otherwise close the md reader
    closeMarkdown(true);
  }
});

function goBackOrClose() {
  if (history.state && history.state.mdOpen) {
    history.back(); // Triggers popstate to close properly
  } else {
    closeMarkdown();
  }
}

function openMarkdown(url, skipHistory = false) {
  if (!skipHistory) {
    history.pushState({ mdOpen: true, url: url }, '', '#study-module');
  }

  const normalize = u => decodeURIComponent(u || '').replace(/^\.\//, '').replace(/^TELC_B1_Preparation\//, '').replace(/^TELC_B1_Hazırlık\//, '');
  const normUrl = normalize(url);
  currentActiveMaterial = materials.find(m => 
    normalize(m.en) === normUrl || 
    normalize(m.tr) === normUrl ||
    decodeURIComponent(m.en) === decodeURIComponent(url) || 
    decodeURIComponent(m.tr) === decodeURIComponent(url)
  );
  
  const mdView = document.getElementById('md-view');
  const mdContent = document.getElementById('md-content');
  mdView.classList.add('open');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
  
  mdContent.innerHTML = `<div class="md-loader">${currentLang === 'tr' ? 'İçerik yükleniyor...' : 'Loading content...'}</div>`;
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        const altUrl = url.includes('%') ? decodeURIComponent(url) : encodeURI(url);
        if (altUrl !== url) {
          return fetch(altUrl).then(r2 => {
            if (!r2.ok) throw new Error('File not found: ' + url);
            return r2.text();
          });
        }
        throw new Error('File not found');
      }
      return response.text();
    })
    .then(text => {
      // Set marked options for better standard rendering
      marked.setOptions({ breaks: true, gfm: true });
      mdContent.innerHTML = marked.parse(text);
      mdView.scrollTop = 0; // scroll to top when opened
      
      // Handle Mermaid charts explicitly
      const mermaidElements = mdContent.querySelectorAll('code.language-mermaid');
      if (mermaidElements.length > 0) {
        mermaid.initialize({ startOnLoad: false, theme: currentTheme === 'dark' ? 'dark' : 'default' });
        mermaidElements.forEach((el, index) => {
          const pre = el.parentElement;
          const mermaidDiv = document.createElement('div');
          mermaidDiv.className = 'mermaid';
          mermaidDiv.textContent = el.textContent;
          pre.replaceWith(mermaidDiv);
        });
        mermaid.run({ nodes: document.querySelectorAll('.mermaid') });
      }

      // Intercept internal MD links to prevent leaving the SPA
      mdContent.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href');
        if (href && href.endsWith('.md')) {
          a.onclick = (e) => {
            e.preventDefault();
            let newTarget = href;
            // Route seamlessly to correct language file
            if (currentLang === 'tr') {
              newTarget = href.replace('TELC_B1_Preparation', 'TELC_B1_Haz%C4%B1rl%C4%B1k').replace('TELC_B1_Hazırlık', 'TELC_B1_Haz%C4%B1rl%C4%B1k');
            } else {
              newTarget = href.replace('TELC_B1_Haz%C4%B1rl%C4%B1k', 'TELC_B1_Preparation').replace('TELC_B1_Hazırlık', 'TELC_B1_Preparation');
            }
            openMarkdown(newTarget);
          };
        }
      });

      // Inject Interactive Markdown Quizzes
      mdContent.querySelectorAll('.md-quiz').forEach((el, index) => {
        const qId = `mdq-${index}`;
        const question = el.getAttribute('data-question');
        const options = el.getAttribute('data-options').split('|');
        const answer = parseInt(el.getAttribute('data-answer'));
        const explain = el.getAttribute('data-explain');
        
        let optsHtml = options.map((opt, i) => 
          `<button class="quiz-opt" onclick="checkMdQuiz('${qId}', ${i}, ${answer})">${String.fromCharCode(97+i)}) ${opt}</button>`
        ).join('');

        el.innerHTML = `
          <div class="interactive-quiz-box" style="margin: 24px 0; padding: 20px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px solid var(--border);">
            <div style="font-weight:600; font-size:16px; margin-bottom:16px; color:var(--text-primary);">${question}</div>
            <div class="quiz-options" style="display:flex; flex-direction:column; gap:8px;">${optsHtml}</div>
            <div class="quiz-explain" id="exp-${qId}" style="display:none; margin-top:16px; padding:12px; border-radius:8px; background:rgba(245,158,11,0.05); border-left:4px solid var(--accent-gold); font-size:14px; color:var(--text-secondary);">
              <b>Explanation:</b> ${explain}
            </div>
          </div>
        `;
      });
    })
    .catch(err => {
      mdContent.innerHTML = `<div class="md-loader" style="color:var(--accent-red)">Error loading study material.<br>Make sure you are viewing this via the live GitHub Pages link and not locally.</div>`;
    });
}

window.checkMdQuiz = function(qId, selectedIdx, correctIdx) {
  const box = document.getElementById(qId);
  if (!box) return;
  const btns = box.querySelectorAll('.quiz-opt');
  btns.forEach((b, i) => {
    b.classList.add('disabled');
    b.onclick = null;
    if (i === correctIdx) b.classList.add('correct');
    if (i === selectedIdx && i !== correctIdx) b.classList.add('wrong');
  });
  const exp = document.getElementById(`exp-${qId}`);
  if (exp) {
    exp.style.display = 'block';
    exp.classList.add('animate');
    
    // Fix any potential data-tr elements inside explanation that need quick translation update
    exp.querySelectorAll('[data-en]').forEach(el => {
      el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });
  }
};

function closeMarkdown(skipHistory = false) {
  document.getElementById('md-view').classList.remove('open');
  document.body.style.overflow = '';
  if (!skipHistory && history.state && history.state.mdOpen) {
    history.pushState({ mdOpen: false }, '', window.location.pathname);
  }
}

// Theme Toggle
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('deutschlernen_theme', currentTheme);
  localStorage.setItem('telc_theme', currentTheme);
  localStorage.setItem('site_theme', currentTheme);
  updateThemeIcon();
  
  // Re-render markdown to fix Mermaid diagram themes dynamically
  if (document.getElementById('md-view').classList.contains('open') && currentMdUrl) {
    openMarkdown(currentMdUrl);
  }
}
function updateThemeIcon() {
  document.getElementById('theme-btn').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}
updateThemeIcon();

// Keyboard accessibility: Dismiss modal & markdown reader on Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('md-view').classList.contains('open')) {
      closeMarkdown();
    }
    const fbModal = document.getElementById('feedback-modal');
    if (fbModal && !fbModal.classList.contains('hidden')) {
      closeFeedbackModal();
    }
  }
});

// Day Tracker
let startDate = localStorage.getItem('telc_start_date');
if (!startDate) {
  startDate = new Date().toISOString();
  localStorage.setItem('telc_start_date', startDate);
}
function updateDayTracker() {
  const diffTime = Math.abs(new Date() - new Date(startDate));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  const dayText = currentLang === 'en' ? `Day ${Math.min(diffDays, 30)} of 30` : `30'un ${Math.min(diffDays, 30)}. Günü`;
  const dayEl = document.getElementById('day-counter');
  if (dayEl) dayEl.textContent = dayText;
}

// Search Filter
function filterCards() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const cards = document.querySelectorAll('#material-cards .card');
  cards.forEach(card => {
    // Check text of both data-en and data-tr attributes for all elements inside card
    const allTextNode = card.querySelectorAll('[data-en], [data-tr]');
    let fullText = card.textContent.toLowerCase();
    allTextNode.forEach(el => { fullText += ' ' + el.getAttribute('data-en').toLowerCase() + ' ' + el.getAttribute('data-tr').toLowerCase() });
    card.style.display = fullText.includes(query) ? '' : 'none';
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  localStorage.setItem('telc_lang', lang);
  try {
    const vs = JSON.parse(localStorage.getItem('deutschlernen_vocab_settings') || '{}');
    vs.lang = lang;
    localStorage.setItem('deutschlernen_vocab_settings', JSON.stringify(vs));
  } catch(e){}

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`.lang-btn[onclick*="${lang}"]`) || 
                    document.querySelector(`.lang-btn:${lang === 'en' ? 'first-child' : 'last-child'}`);
  if (activeBtn) activeBtn.classList.add('active');
  
  if (document.getElementById('fc-btn-en')) {
    if (lang === 'en') {
      document.getElementById('fc-btn-en').classList.add('primary');
      document.getElementById('fc-btn-tr').classList.remove('primary');
    } else {
      document.getElementById('fc-btn-tr').classList.add('primary');
      document.getElementById('fc-btn-en').classList.remove('primary');
    }
  }

  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute(`data-${lang}`) || el.getAttribute('data-en');
    if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.hasAttribute('placeholder')) {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  renderCards(); // Re-render material cards with proper Turkish / English titles and buttons
  renderSidebar(); // Re-render sidebar to update titles
  updateDayTracker();
  updateCard(true); // Redraw flashcard to match language instantly

  // Update rating label text to match language
  const starsWrap = document.getElementById('feedback-stars');
  if (starsWrap && typeof updateRatingDisplay === 'function') {
    const currentRating = parseInt(starsWrap.getAttribute('data-rating') || '5', 10);
    updateRatingDisplay(currentRating, false);
  }

  // Reload open markdown if user switches language while reading
  if (document.getElementById('md-view') && document.getElementById('md-view').classList.contains('open') && currentActiveMaterial) {
    const newUrl = lang === 'en' ? currentActiveMaterial.en : currentActiveMaterial.tr;
    openMarkdown(newUrl, true); // true = skip pushState
  }
}

// Initialize with saved language (persisted across sessions and pages)
const savedLang = localStorage.getItem('site_lang') || localStorage.getItem('telc_lang') || 'en';
setLang(savedLang);

// Active nav tracking
function showSection(id) {
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
  const active = document.querySelector(`.sidebar-nav a[href="#${id}"]`);
  if (active) active.classList.add('active');
  // Close mobile sidebar
  document.querySelector('.sidebar').classList.remove('open');
}

// Intersection observer for active nav
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
      const match = document.querySelector(`.sidebar-nav a[href="#${id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.section[id]').forEach(s => observer.observe(s));

// --- PWA Service Worker Registration ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW registered'))
            .catch(err => console.log('SW failed', err));
    });
}

// --- Heatmap Logic ---
function markStudyDay() {
    const today = new Date().toISOString().slice(0, 10);
    const heatmap = JSON.parse(localStorage.getItem('study_heatmap') || '{}');
    heatmap[today] = (heatmap[today] || 0) + 1;
    localStorage.setItem('study_heatmap', JSON.stringify(heatmap));
    renderHeatmap();
}

function renderHeatmap() {
    const container = document.getElementById('study-heatmap');
    if (!container) return;
    const data = JSON.parse(localStorage.getItem('study_heatmap') || '{}');
    const today = new Date();
    let html = '';
    // Show last 28 days (4 weeks)
    for (let i = 27; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const key = d.toISOString().slice(0, 10);
        const intensity = Math.min(data[key] || 0, 4);
        html += `<div class="heat-square" data-intensity="${intensity}" title="${key}: ${data[key] || 0} sessions"></div>`;
    }
    container.innerHTML = html;
}

// --- Community Feedback Handlers ---
const ratingLabels = {
  en: {
    5: "5/5 — Excellent",
    4: "4/5 — Very Good",
    3: "3/5 — Good",
    2: "2/5 — Needs Improvement",
    1: "1/5 — Poor"
  },
  tr: {
    5: "5/5 — Mükemmel",
    4: "4/5 — Çok İyi",
    3: "3/5 — İyi",
    2: "2/5 — Geliştirilmeli",
    1: "1/5 — Zayıf"
  }
};

function updateRatingDisplay(rating, isPreview = false) {
  const starsWrap = document.getElementById('feedback-stars');
  if (!starsWrap) return;
  const ratingText = document.getElementById('feedback-rating-text');
  const stars = starsWrap.querySelectorAll('span');
  
  stars.forEach((s, idx) => {
    const starVal = idx + 1;
    if (isPreview) {
      s.classList.toggle('hover', starVal <= rating);
    } else {
      s.classList.remove('hover');
      s.classList.toggle('selected', starVal <= rating);
      s.setAttribute('aria-checked', starVal === rating ? 'true' : 'false');
    }
  });

  if (ratingText) {
    const langKey = currentLang === 'tr' ? 'tr' : 'en';
    ratingText.textContent = ratingLabels[langKey][rating] || `${rating}/5`;
  }
}

function openFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  
  const statusMsg = document.getElementById('feedback-status-msg');
  if (statusMsg) {
    statusMsg.style.display = 'none';
    statusMsg.textContent = '';
  }

  const starsWrap = document.getElementById('feedback-stars');
  if (starsWrap) {
    const currentRating = parseInt(starsWrap.getAttribute('data-rating') || '5', 10);
    updateRatingDisplay(currentRating, false);
  }

  const locInput = document.getElementById('feedback-location');
  if (locInput && window.FirebaseService) {
    locInput.value = window.FirebaseService.detectLocation();
  }
}

function closeFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  if (modal) modal.classList.add('hidden');
}

function initFeedbackForm() {
  const starsWrap = document.getElementById('feedback-stars');
  if (starsWrap) {
    const stars = starsWrap.querySelectorAll('span');
    stars.forEach(star => {
      const starVal = parseInt(star.getAttribute('data-star') || '5', 10);
      
      // Click event
      star.addEventListener('click', () => {
        starsWrap.setAttribute('data-rating', starVal);
        updateRatingDisplay(starVal, false);
      });

      // Keyboard accessibility
      star.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') {
          e.preventDefault();
          starsWrap.setAttribute('data-rating', starVal);
          updateRatingDisplay(starVal, false);
        }
      });

      // Hover preview
      star.addEventListener('mouseenter', () => {
        updateRatingDisplay(starVal, true);
      });
    });

    // Mouseleave restores selected rating
    starsWrap.addEventListener('mouseleave', () => {
      const currentRating = parseInt(starsWrap.getAttribute('data-rating') || '5', 10);
      updateRatingDisplay(currentRating, false);
    });

    // Initial render
    const initialRating = parseInt(starsWrap.getAttribute('data-rating') || '5', 10);
    updateRatingDisplay(initialRating, false);
  }

  const modal = document.getElementById('feedback-modal');
  if (modal) {
    // Backdrop click to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeFeedbackModal();
    });
  }

  const form = document.getElementById('feedback-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const statusMsg = document.getElementById('feedback-status-msg');
      const submitBtn = document.getElementById('btn-submit-feedback');
      const username = (document.getElementById('feedback-username')?.value || '').trim() || 'Anonymous';
      const location = (document.getElementById('feedback-location')?.value || '').trim();
      const category = document.getElementById('feedback-category')?.value || 'General';
      const rating = parseInt(document.getElementById('feedback-stars')?.getAttribute('data-rating') || '5', 10);
      const message = (document.getElementById('feedback-message')?.value || '').trim();

      if (!message) return;

      if (submitBtn) submitBtn.disabled = true;
      try {
        if (window.FirebaseService) {
          await window.FirebaseService.submitFeedback({ username, location, category, rating, message });
        }
        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.className = 'auth-notice-msg success';
          statusMsg.textContent = currentLang === 'en' 
            ? "Thank you! Your feedback has been received." 
            : "Teşekkür ederiz! Geri bildiriminiz başarıyla iletildi.";
        }
        form.reset();
        if (starsWrap) {
          starsWrap.setAttribute('data-rating', '5');
          updateRatingDisplay(5, false);
        }
        setTimeout(() => {
          closeFeedbackModal();
          if (statusMsg) statusMsg.style.display = 'none';
          if (submitBtn) submitBtn.disabled = false;
        }, 1800);
      } catch (err) {
        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.className = 'auth-notice-msg error';
          statusMsg.textContent = err.message || (currentLang === 'en' ? "Submission failed" : "Gönderim başarısız oldu");
        }
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }
}

// Initialize components
initFeedbackForm();
