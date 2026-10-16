/**
 * DeutschLernen - Lesen Studio Application (Readlang + Todaii German Hybrid)
 * Interactive click-to-lookup reader with instant 4-language translation,
 * telc B1 exam questions, paragraph locator, audio pronunciation, and vocabulary notebook.
 */

(function() {
  'use strict';

  // UI Translation Dictionary for Portal Controls
  const I18N = {
    en: {
      brandTitle: "Lesen Studio & Exam Reader",
      brandSub: "telc Deutsch B1 Reading Comprehension • Interactive Readlang & Todaii Studio",
      homeLink: "🏠 Portal Home",
      vocabLink: "⚡ Vocab Trainer",
      sprechLink: "🗣️ Speaking Studio",
      legalLink: "⚖️ Impressum",
      btnListen: "🔊 Listen to Text",
      btnStopListen: "⏹️ Stop Audio",
      glossaryToggle: "✨ Highlight B1 Vocab",
      tabQuestions: "📝 Exam Questions",
      tabSavedWords: "⭐ Saved Words",
      timerLabel: "Exam Timer",
      btnStartTimer: "Start",
      btnPauseTimer: "Pause",
      btnResetTimer: "Reset",
      locateBtn: "🎯 Show in text",
      explanationLabel: "Pedagogical Explanation:",
      scoreLabel: "Exam Score:",
      passedBadge: "Passed! (telc B1 Standard)",
      studyMoreBadge: "Review Mistakes",
      savedEmpty: "No words saved yet. Click on any German word in the text to look up and save it!",
      addWordBtn: "⭐ Add to Vocabulary",
      wordSavedBtn: "✓ In Vocabulary",
      wordRemovedBtn: "Removed",
      listenWord: "🔊 Pronounce",
      clearAllSaved: "🗑️ Clear All Saved",
      activeLevel: "Level B1",
      estTime: "12 min standard",
      allRightsReserved: "Educational preparation suite for telc Deutsch B1 candidates.",
      trackLesen: "Reading Comprehension (Parts 1–3 • 75 Pts)",
      trackSprachbausteine: "Language Elements (Parts 1–2 • 30 Pts)",
      sbTeil1Tab: "Part 1: Letter (21–30)",
      sbTeil2Tab: "Part 2: Text (31–40)",
      sbCheckBtn: "✓ Check Answers",
      sbResetBtn: "↺ Reset",
      sbScorePassed: "Passed! (telc B1 Standard >= 60%)",
      sbScoreFail: "Review Needed (< 60%). Study the grammar explanations!",
      sbWordBankHeading: "Word Bank (a–o): Select matching word for each gap",
      sbSelectPlaceholder: "-- Select word --"
    },
    tr: {
      brandTitle: "Okuma Stüdyosu & Sınav Okuyucu",
      brandSub: "telc Deutsch B1 Okuduğunu Anlama • İnteraktif Readlang & Todaii Stüdyosu",
      homeLink: "🏠 Ana Portal",
      vocabLink: "⚡ Kelime Antrenörü",
      sprechLink: "🗣️ Konuşma Stüdyosu",
      legalLink: "⚖️ Künye & Gizlilik",
      btnListen: "🔊 Metni Dinle",
      btnStopListen: "⏹️ Sesi Durdur",
      glossaryToggle: "✨ B1 Kelimeleri Vurgula",
      tabQuestions: "📝 Sınav Soruları",
      tabSavedWords: "⭐ Kaydedilen Kelimeler",
      timerLabel: "Sınav Sayacı",
      btnStartTimer: "Başlat",
      btnPauseTimer: "Duraklat",
      btnResetTimer: "Sıfırla",
      locateBtn: "🎯 Metinde göster",
      explanationLabel: "Açıklama & Kanıt Cümlesi:",
      scoreLabel: "Sınav Skoru:",
      passedBadge: "Başarılı! (telc B1 Barajı Geçildi)",
      studyMoreBadge: "Hataları Tekrar İncele",
      savedEmpty: "Henüz kelime kaydedilmedi. Metindeki herhangi bir Almanca kelimeye dokunarak anlamını öğrenip kaydedebilirsiniz!",
      addWordBtn: "⭐ Kelimelerime Ekle",
      wordSavedBtn: "✓ Kelimelerimde Kayıtlı",
      wordRemovedBtn: "Kaldırıldı",
      listenWord: "🔊 Telaffuz Et",
      clearAllSaved: "🗑️ Tümünü Temizle",
      activeLevel: "Seviye B1",
      estTime: "12 dk standart süre",
      allRightsReserved: "telc Deutsch B1 adayları için kapsamlı eğitim stüdyosu.",
      trackLesen: "Okuduğunu Anlama (Bölüm 1–3 • 75 Puan)",
      trackSprachbausteine: "Dilbilgisi / Dil Öğeleri (Bölüm 1–2 • 30 Puan)",
      sbTeil1Tab: "Bölüm 1: Mektup (21–30)",
      sbTeil2Tab: "Bölüm 2: Metin (31–40)",
      sbCheckBtn: "✓ Cevapları Kontrol Et",
      sbResetBtn: "↺ Sıfırla",
      sbScorePassed: "Tebrikler! telc B1 Barajı Geçildi (>= %60)",
      sbScoreFail: "Barajın Altında (< %60). Dilbilgisi açıklamalarını inceleyiniz!",
      sbWordBankHeading: "Kelime Kutusu (a–o): Her boşluk için uygun kelimeyi seçiniz",
      sbSelectPlaceholder: "-- Kelime seçiniz --"
    },
    ar: {
      brandTitle: "استوديو القراءة وقارئ الامتحان",
      brandSub: "فهم المقروء لامتحان telc Deutsch B1 • استوديو تفاعلي بأسلوب Readlang و Todaii",
      homeLink: "🏠 البوابة الرئيسية",
      vocabLink: "⚡ مدرب المفردات",
      sprechLink: "🗣️ استوديو التحدث",
      legalLink: "⚖️ بيانات النشر",
      btnListen: "🔊 الاستماع للنص",
      btnStopListen: "⏹️ إيقاف الصوت",
      glossaryToggle: "✨ تمييز مفردات B1",
      tabQuestions: "📝 أسئلة الامتحان",
      tabSavedWords: "⭐ الكلمات المحفوظة",
      timerLabel: "مؤقت الامتحان",
      btnStartTimer: "بدء",
      btnPauseTimer: "إيقاف مؤقت",
      btnResetTimer: "إعادة ضبط",
      locateBtn: "🎯 تحديد في النص",
      explanationLabel: "الشرح والدليل من النص:",
      scoreLabel: "نتيجة الاختبار:",
      passedBadge: "ناجح! (اجتياز معيار telc B1)",
      studyMoreBadge: "راجع الأخطاء",
      savedEmpty: "لم يتم حفظ أي كلمات بعد. انقر على أي كلمة ألمانية في النص لمعرفة معناها وحفظها!",
      addWordBtn: "⭐ إضافة إلى مفرداتي",
      wordSavedBtn: "✓ محفوظ في المفردات",
      wordRemovedBtn: "تمت الإزالة",
      listenWord: "🔊 نطق الكلمة",
      clearAllSaved: "🗑️ مسح الكل",
      activeLevel: "المستوى B1",
      estTime: "الوقت القياسي 12 دقيقة",
      allRightsReserved: "مجموعة تدريب تعليمية لمرشحي امتحان telc Deutsch B1.",
      trackLesen: "فهم المقروء (الأجزاء 1–3 • 75 نقطة)",
      trackSprachbausteine: "تراكيب اللغة (الأجزاء 1–2 • 30 نقطة)",
      sbTeil1Tab: "الجزء 1: الرسالة (21–30)",
      sbTeil2Tab: "الجزء 2: النص (31–40)",
      sbCheckBtn: "✓ التحقق من الإجابات",
      sbResetBtn: "↺ إعادة ضبط",
      sbScorePassed: "ناجح! (معيار telc B1 >= 60%)",
      sbScoreFail: "بحاجة للمراجعة (< 60%). ادرس الشروحات النحوية!",
      sbWordBankHeading: "صندوق الكلمات (a–o): اختر الكلمة المناسبة لكل فراغ",
      sbSelectPlaceholder: "-- اختر الكلمة --"
    },
    uk: {
      brandTitle: "Студія читання та екзаменаційний рідер",
      brandSub: "Розуміння прочитаного telc Deutsch B1 • Інтерактивна студія Readlang & Todaii",
      homeLink: "🏠 Головний портал",
      vocabLink: "⚡ Тренажер слів",
      sprechLink: "🗣️ Студія мовлення",
      legalLink: "⚖️ Вихідні дані",
      btnListen: "🔊 Слухати текст",
      btnStopListen: "⏹️ Зупинити аудіо",
      glossaryToggle: "✨ Виділити слова B1",
      tabQuestions: "📝 Екзаменаційні питання",
      tabSavedWords: "⭐ Збережені слова",
      timerLabel: "Таймер іспиту",
      btnStartTimer: "Старт",
      btnPauseTimer: "Пауза",
      btnResetTimer: "Скинути",
      locateBtn: "🎯 Показати в тексті",
      explanationLabel: "Пояснення та цитата з тексту:",
      scoreLabel: "Результат тесту:",
      passedBadge: "Складено! (Стандарт telc B1)",
      studyMoreBadge: "Повторіть помилки",
      savedEmpty: "Ще немає збережених слів. Натисніть на будь-яке німецьке слово в тексті, щоб дізнатися переклад і зберегти його!",
      addWordBtn: "⭐ Додати до моїх слів",
      wordSavedBtn: "✓ Збережено в словнику",
      wordRemovedBtn: "Видалено",
      listenWord: "🔊 Озвучити слово",
      clearAllSaved: "🗑️ Очистити все",
      activeLevel: "Рівень B1",
      estTime: "12 хв стандарт",
      allRightsReserved: "Навчальний комплекс для підготовки до іспиту telc Deutsch B1.",
      trackLesen: "Розуміння прочитаного (Частини 1–3 • 75 балів)",
      trackSprachbausteine: "Мовні елементи (Частини 1–2 • 30 балів)",
      sbTeil1Tab: "Частина 1: Лист (21–30)",
      sbTeil2Tab: "Частина 2: Текст (31–40)",
      sbCheckBtn: "✓ Перевірити відповіді",
      sbResetBtn: "↺ Скинути",
      sbScorePassed: "Складено! (Стандарт telc B1 >= 60%)",
      sbScoreFail: "Потрібно повторити (< 60%). Опрацюйте пояснення!",
      sbWordBankHeading: "Банк слів (a–o): Оберіть відповідне слово для кожного пропуску",
      sbSelectPlaceholder: "-- Оберіть слово --"
    }
  };

  class LesenApp {
    constructor() {
      this.dataset = window.READING_DATASET || [];
      this.currentUnitIndex = 0;
      this.lang = localStorage.getItem('deutschlernen_lang') || localStorage.getItem('telc_lang') || 'en';
      if (!['en', 'tr', 'ar', 'uk'].includes(this.lang)) {
        this.lang = 'en';
      }

      this.fontSize = 'md';
      this.highlightGlossary = true;
      this.activeTab = 'questions'; // 'questions' or 'vocab'

      // Saved words state
      this.savedWords = this.loadSavedWords();

      // Quiz state (Leseverstehen)
      this.userAnswers = {}; // { questionId: selectedIndex }

      // Sprachbausteine state
      this.activeTrack = 'lesen'; // 'lesen' or 'sprachbausteine'
      this.sbDataset = (typeof window !== 'undefined' && window.SPRACHBAUSTEINE_DATASET) ? window.SPRACHBAUSTEINE_DATASET : [];
      this.currentSbSetIndex = 0;
      this.currentSbSubpart = 'teil1'; // 'teil1' or 'teil2'
      this.sbAnswers = {}; // { [itemId]: selectedKey }
      this.sbChecked = false;

      // Timer state
      this.timerSeconds = 12 * 60; // 12 min default
      this.timerInitial = 12 * 60;
      this.timerRunning = false;
      this.timerInterval = null;

      // Audio state
      this.speechSynth = (typeof window !== 'undefined' && window.speechSynthesis) ? window.speechSynthesis : null;
      this.isSpeaking = false;
      this.activeUtterance = null;

      this.init();
    }

    init() {
      this.bindElements();
      this.bindEvents();
      this.renderLanguage();
      this.renderPartTabs();
      this.loadUnit(0);
      this.renderSavedWordsList();
      this.updateTimerDisplay();
    }

    bindElements() {
      this.dom = {
        btnTrackLesen: document.getElementById('btn-track-lesen'),
        btnTrackSprachbausteine: document.getElementById('btn-track-sprachbausteine'),
        partTabs: document.getElementById('part-tabs'),
        articleTitle: document.getElementById('article-title'),
        articleSummary: document.getElementById('article-summary'),
        articleBody: document.getElementById('article-body'),
        badgePart: document.getElementById('badge-part'),
        badgeLevel: document.getElementById('badge-level'),
        badgeTime: document.getElementById('badge-time'),
        btnListenText: document.getElementById('btn-listen-text'),
        btnToggleGlossary: document.getElementById('btn-toggle-glossary'),
        btnFontDec: document.getElementById('btn-font-dec'),
        btnFontInc: document.getElementById('btn-font-inc'),
        studioTabs: document.getElementById('studio-tabs'),
        questionsContainer: document.getElementById('questions-container'),
        vocabContainer: document.getElementById('vocab-container'),
        scoreBanner: document.getElementById('score-banner'),
        savedWordsList: document.getElementById('saved-words-list'),
        timerDisplay: document.getElementById('timer-display'),
        btnTimerToggle: document.getElementById('btn-timer-toggle'),
        btnTimerReset: document.getElementById('btn-timer-reset'),
        lookupModal: document.getElementById('lookup-modal'),
        lookupWord: document.getElementById('lookup-word'),
        lookupFormBadge: document.getElementById('lookup-form-badge'),
        lookupArtBadge: document.getElementById('lookup-art-badge'),
        lookupTrans: document.getElementById('lookup-trans'),
        lookupMeta: document.getElementById('lookup-meta'),
        lookupGrammar: document.getElementById('lookup-grammar'),
        lookupGrammarTitle: document.getElementById('lookup-grammar-title'),
        lookupGrammarText: document.getElementById('lookup-grammar-text'),
        lookupExamples: document.getElementById('lookup-examples'),
        lookupExamplesTitle: document.getElementById('lookup-examples-title'),
        lookupExamplesList: document.getElementById('lookup-examples-list'),
        lookupClose: document.getElementById('lookup-close'),
        btnSaveVocab: document.getElementById('btn-save-vocab'),
        btnPronounceWord: document.getElementById('btn-pronounce-word'),
        themeToggleBtn: document.getElementById('btn-theme-toggle')
      };
    }

    bindEvents() {
      // Track Switching (Lesen vs Sprachbausteine)
      if (this.dom.btnTrackLesen) {
        this.dom.btnTrackLesen.addEventListener('click', () => this.switchTrack('lesen'));
      }
      if (this.dom.btnTrackSprachbausteine) {
        this.dom.btnTrackSprachbausteine.addEventListener('click', () => this.switchTrack('sprachbausteine'));
      }

      // Audio full text toggle
      if (this.dom.btnListenText) {
        this.dom.btnListenText.addEventListener('click', () => this.toggleTextAudio());
      }

      // Highlight glossary toggle
      if (this.dom.btnToggleGlossary) {
        this.dom.btnToggleGlossary.addEventListener('click', () => {
          this.highlightGlossary = !this.highlightGlossary;
          this.dom.btnToggleGlossary.classList.toggle('active', this.highlightGlossary);
          this.renderArticleBody();
        });
      }

      // Font size controls
      if (this.dom.btnFontDec) {
        this.dom.btnFontDec.addEventListener('click', () => {
          if (this.fontSize === 'xl') this.setFontSize('lg');
          else if (this.fontSize === 'lg') this.setFontSize('md');
        });
      }
      if (this.dom.btnFontInc) {
        this.dom.btnFontInc.addEventListener('click', () => {
          if (this.fontSize === 'md') this.setFontSize('lg');
          else if (this.fontSize === 'lg') this.setFontSize('xl');
        });
      }

      // Studio Tabs (Questions vs Saved Words)
      const tabBtns = document.querySelectorAll('.ls-studio-tab-btn');
      tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const tab = e.currentTarget.getAttribute('data-tab');
          this.switchStudioTab(tab);
        });
      });

      // Timer Controls
      if (this.dom.btnTimerToggle) {
        this.dom.btnTimerToggle.addEventListener('click', () => this.toggleTimer());
      }
      if (this.dom.btnTimerReset) {
        this.dom.btnTimerReset.addEventListener('click', () => this.resetTimer());
      }

      // Lookup Modal Controls
      if (this.dom.lookupClose) {
        this.dom.lookupClose.addEventListener('click', () => this.closeLookup());
      }
      if (this.dom.btnPronounceWord) {
        this.dom.btnPronounceWord.addEventListener('click', () => {
          const word = this.dom.lookupWord.getAttribute('data-word') || '';
          this.pronounceWord(word);
        });
      }
      if (this.dom.btnSaveVocab) {
        this.dom.btnSaveVocab.addEventListener('click', () => this.toggleSaveCurrentWord());
      }

      // Close modal on click outside
      document.addEventListener('click', (e) => {
        if (this.dom.lookupModal && this.dom.lookupModal.classList.contains('active')) {
          if (!this.dom.lookupModal.contains(e.target) && !e.target.classList.contains('w-tok')) {
            this.closeLookup();
          }
        }
      });

      // Reposition modal dynamically on scroll or resize
      if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
        window.addEventListener('scroll', () => {
          if (this.dom.lookupModal && this.dom.lookupModal.classList.contains('active') && this.activeWordElement) {
            this.positionLookupModal(this.activeWordElement);
          }
        }, { passive: true });

        window.addEventListener('resize', () => {
          if (this.dom.lookupModal && this.dom.lookupModal.classList.contains('active') && this.activeWordElement) {
            this.positionLookupModal(this.activeWordElement);
          }
        }, { passive: true });
      }

      // Close modal on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.dom.lookupModal && this.dom.lookupModal.classList.contains('active')) {
          this.closeLookup();
        }
      });

      // Theme toggle
      if (this.dom.themeToggleBtn) {
        this.dom.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
      }
    }

    setFontSize(size) {
      this.fontSize = size;
      if (this.dom.articleBody) {
        this.dom.articleBody.classList.remove('font-lg', 'font-xl');
        if (size === 'lg') this.dom.articleBody.classList.add('font-lg');
        if (size === 'xl') this.dom.articleBody.classList.add('font-xl');
      }
    }

    switchStudioTab(tab) {
      this.activeTab = tab;
      document.querySelectorAll('.ls-studio-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
      });
      if (this.dom.questionsContainer) {
        this.dom.questionsContainer.style.display = tab === 'questions' ? 'block' : 'none';
      }
      if (this.dom.vocabContainer) {
        this.dom.vocabContainer.style.display = tab === 'vocab' ? 'block' : 'none';
      }
    }

    renderLanguage() {
      const texts = I18N[this.lang] || I18N.en;
      document.body.setAttribute('data-lang', this.lang);
      if (this.lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }

      // Update static UI data-i18n elements
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) el.textContent = texts[key];
      });

      // Update lang buttons active state
      document.querySelectorAll('.ls-lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === this.lang);
      });

      // Update units and current view
      if (this.activeTrack === 'sprachbausteine') {
        this.renderSbTabs();
        this.renderSbCurrent();
      } else {
        this.renderPartTabs();
        this.renderCurrentUnit();
      }
      this.renderSavedWordsList();
    }

    setLanguage(newLang) {
      if (!['en', 'tr', 'ar', 'uk'].includes(newLang)) return;
      this.lang = newLang;
      localStorage.setItem('deutschlernen_lang', newLang);
      localStorage.setItem('telc_lang', newLang);
      this.renderLanguage();
    }

    renderPartTabs() {
      if (!this.dom.partTabs) return;
      this.dom.partTabs.innerHTML = '';

      this.dataset.forEach((unit, idx) => {
        const btn = document.createElement('button');
        btn.className = `ls-part-btn ${idx === this.currentUnitIndex ? 'active' : ''}`;
        const pName = (unit.partName && unit.partName[this.lang]) || unit.part;
        btn.innerHTML = `<span>📖 ${unit.part}:</span> ${pName}`;
        btn.addEventListener('click', () => this.loadUnit(idx));
        this.dom.partTabs.appendChild(btn);
      });
    }

    loadUnit(index) {
      if (index < 0 || index >= this.dataset.length) return;
      this.currentUnitIndex = index;
      this.userAnswers = {};
      this.stopTextAudio();

      const unit = this.dataset[index];
      this.timerInitial = (unit.timeEstimateMin || 12) * 60;
      this.timerSeconds = this.timerInitial;
      this.timerRunning = false;
      if (this.timerInterval) clearInterval(this.timerInterval);
      this.updateTimerDisplay();

      // Update tab active classes
      document.querySelectorAll('.ls-part-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
      });

      this.renderCurrentUnit();
    }

    renderCurrentUnit() {
      const unit = this.dataset[this.currentUnitIndex];
      if (!unit) return;

      if (this.dom.badgePart) this.dom.badgePart.textContent = unit.part;
      if (this.dom.badgeLevel) this.dom.badgeLevel.textContent = `CEFR ${unit.level}`;
      if (this.dom.badgeTime) this.dom.badgeTime.textContent = `⏱️ ${unit.timeEstimateMin} Min.`;

      if (this.dom.articleTitle) {
        this.dom.articleTitle.textContent = unit.title[this.lang] ? `${unit.title.de} (${unit.title[this.lang]})` : unit.title.de;
      }

      if (this.dom.articleSummary) {
        this.dom.articleSummary.textContent = unit.summary[this.lang] || unit.summary.de;
      }

      this.renderArticleBody();
      this.renderQuestions();
    }

    renderArticleBody() {
      const unit = this.dataset[this.currentUnitIndex];
      if (!unit || !this.dom.articleBody) return;

      this.dom.articleBody.innerHTML = '';

      unit.contentParagraphs.forEach(para => {
        const pEl = document.createElement('div');
        pEl.className = 'ls-paragraph';
        pEl.id = `para-${para.id}`;

        // Tokenize paragraph text preserving spaces & punctuation
        const tokenizedHTML = this.tokenizeText(para.de, unit.glossary);
        pEl.innerHTML = tokenizedHTML;

        this.dom.articleBody.appendChild(pEl);
      });

      // Bind click on word tokens
      this.dom.articleBody.querySelectorAll('.w-tok').forEach(tok => {
        tok.addEventListener('click', (e) => {
          e.stopPropagation();
          const cleanWord = tok.getAttribute('data-clean');
          const fullToken = tok.textContent.trim();
          this.openWordLookup(cleanWord, fullToken, tok);
        });
      });
    }

    tokenizeText(rawText, unitGlossary) {
      // Split on word boundaries while keeping words and non-words
      // Support German umlauts and ß
      const regex = /([a-zA-ZäöüÄÖÜß]+|[^a-zA-ZäöüÄÖÜß\s]+|\s+)/g;
      const tokens = rawText.match(regex) || [];

      // Create lookup map of glossary entries
      const glossaryMap = new Set();
      (unitGlossary || []).forEach(g => {
        const cleanNoArt = g.de.replace(/^(der|die|das|sich)\s+/i, '');
        const base = cleanNoArt.split(/[,(/]/)[0].trim().toLowerCase();
        if (base) glossaryMap.add(base);
        cleanNoArt.split(/[\s,/-]+/).forEach(w => {
          const wClean = w.trim().toLowerCase();
          if (wClean.length >= 3 && !['und', 'der', 'die', 'das', 'den', 'dem', 'des', 'von', 'vor', 'mit', 'auf', 'für', 'sich', 'in'].includes(wClean)) {
            glossaryMap.add(wClean);
          }
        });
      });

      return tokens.map(tok => {
        if (/^[a-zA-ZäöüÄÖÜß]+$/.test(tok)) {
          const lower = tok.toLowerCase();
          const isGlossary = glossaryMap.has(lower) || this.isPartialGlossaryMatch(lower, glossaryMap);
          const isSaved = this.isWordSaved(lower);

          let classes = ['w-tok'];
          if (isGlossary && this.highlightGlossary) classes.push('has-glossary');
          if (isSaved) classes.push('saved-word');

          return `<span class="${classes.join(' ')}" data-clean="${tok}">${tok}</span>`;
        } else if (tok === '\n') {
          return '<br>';
        } else {
          return tok;
        }
      }).join('');
    }

    isPartialGlossaryMatch(lower, glossaryMap) {
      for (const base of glossaryMap) {
        if (lower.startsWith(base) || base.startsWith(lower)) {
          return true;
        }
      }
      return false;
    }

    openWordLookup(cleanWord, fullToken, element) {
      if (!this.dom.lookupModal) return;

      const unit = this.dataset[this.currentUnitIndex];
      const match = this.findWordData(cleanWord, unit ? unit.glossary : []);
      if (!match) return;

      this.currentLookupData = match;

      // Fill modal data
      this.dom.lookupWord.textContent = match.displayDe;
      this.dom.lookupWord.setAttribute('data-word', match.de);

      // Article badge
      if (this.dom.lookupArtBadge) {
        this.dom.lookupArtBadge.className = 'ls-art-badge';
        if (match.article) {
          this.dom.lookupArtBadge.textContent = match.article;
          this.dom.lookupArtBadge.classList.add(`ls-art-${match.article.toLowerCase()}`);
          this.dom.lookupArtBadge.style.display = 'inline-block';
        } else {
          this.dom.lookupArtBadge.style.display = 'none';
        }
      }

      // Translation in user language
      const trans = match[this.lang] || match.en || match.tr || match.de;
      this.dom.lookupTrans.textContent = trans;

      // Metadata (Plural, POS, level)
      let metaStr = match.pos ? `[${match.pos}${match.level ? ' • ' + match.level : ''}] ` : '';
      if (match.plural && match.plural !== '-') metaStr += `Plural: ${match.plural}`;
      this.dom.lookupMeta.textContent = metaStr;

      // Context form badge (e.g. if lemma is "älter" but text is "älteren")
      if (this.dom.lookupFormBadge) {
        if (cleanWord.toLowerCase() !== (match.displayDe || '').toLowerCase()) {
          const formLabels = {
            tr: `Metinde: ${cleanWord}`,
            en: `In text: ${cleanWord}`,
            ar: `في النص: ${cleanWord}`,
            uk: `У тексті: ${cleanWord}`
          };
          this.dom.lookupFormBadge.textContent = formLabels[this.lang] || formLabels.en;
          this.dom.lookupFormBadge.style.display = 'inline-block';
        } else {
          this.dom.lookupFormBadge.style.display = 'none';
        }
      }

      // Contextual Grammar Insight Box
      if (this.dom.lookupGrammar && this.dom.lookupGrammarText) {
        if (match.grammar) {
          const gramText = match.grammar[this.lang] || match.grammar.tr || match.grammar.en || '';
          if (gramText) {
            this.dom.lookupGrammarText.textContent = gramText;
            if (this.dom.lookupGrammarTitle) {
              let titleText = "";
              if (match.grammar.title && match.grammar.title[this.lang]) {
                titleText = match.grammar.title[this.lang];
              } else if (match.grammar.title && (match.grammar.title.en || match.grammar.title.tr)) {
                titleText = match.grammar.title.en || match.grammar.title.tr;
              } else {
                const lowerW = cleanWord.toLowerCase();
                if (lowerW.endsWith('en') && (match.pos === 'adj' || (match.grammar.tr && match.grammar.tr.includes('-en')))) {
                  const titles = {
                    tr: "💡 Neden \"-en\" takısı aldı? (Gramer İpucu)",
                    en: "💡 Why the \"-en\" ending? (Grammar Insight)",
                    ar: "💡 لماذا لاحقة \"-en\"؟ (لمحة نحوية)",
                    uk: "💡 Чому закінчення \"-en\"? (Граматичний коментар)"
                  };
                  titleText = titles[this.lang] || titles.en;
                } else if (lowerW.endsWith('s') && match.pos === 'noun') {
                  const titles = {
                    tr: "💡 Neden \"-s\" takısı aldı? (Genitiv İpucu)",
                    en: "💡 Why the \"-s\" ending? (Genitive Insight)",
                    ar: "💡 لماذا لاحقة \"-s\"؟ (إضافة Genitiv)",
                    uk: "💡 Чому закінчення \"-s\"? (Родовий відмінок)"
                  };
                  titleText = titles[this.lang] || titles.en;
                } else if (lowerW.endsWith('n') && match.pos === 'noun') {
                  const titles = {
                    tr: "💡 Neden \"-n\" takısı aldı? (Dativ Plural İpucu)",
                    en: "💡 Why the \"-n\" ending? (Dative Plural Insight)",
                    ar: "💡 لماذا لاحقة \"-n\"؟ (جمع Dativ)",
                    uk: "💡 Чому закінчення \"-n\"? (Давальний відмінок множини)"
                  };
                  titleText = titles[this.lang] || titles.en;
                } else {
                  const titles = {
                    tr: "💡 Gramer & Bağlam İpucu",
                    en: "💡 Grammar & Context Insight",
                    ar: "💡 لمحة نحوية وسياقية",
                    uk: "💡 Граматичний коментар"
                  };
                  titleText = titles[this.lang] || titles.en;
                }
              }
              this.dom.lookupGrammarTitle.textContent = titleText;
            }
            this.dom.lookupGrammar.style.display = 'block';
          } else {
            this.dom.lookupGrammar.style.display = 'none';
          }
        } else {
          this.dom.lookupGrammar.style.display = 'none';
        }
      }

      // Multiple Example Sentences Section
      if (this.dom.lookupExamples && this.dom.lookupExamplesList) {
        const exList = (match.examples && match.examples.length > 0) ? match.examples : (match.example_de ? [{
          de: match.example_de,
          tr: match.example_tr,
          en: match.example_en,
          ar: match.example_ar,
          uk: match.example_uk
        }] : []);

        if (exList.length > 0) {
          this.dom.lookupExamplesList.innerHTML = '';
          exList.forEach((ex, idx) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'ls-example-item';

            const deEl = document.createElement('div');
            deEl.className = 'ls-example-de';
            deEl.innerHTML = `<span class="ls-example-idx">${idx + 1}</span><span>${ex.de}</span>`;

            const transText = ex[this.lang] || ex.tr || ex.en || '';
            const transEl = document.createElement('div');
            transEl.className = 'ls-example-trans';
            transEl.textContent = transText;

            itemEl.appendChild(deEl);
            if (transText) itemEl.appendChild(transEl);
            this.dom.lookupExamplesList.appendChild(itemEl);
          });

          if (this.dom.lookupExamplesTitle) {
            const exTitles = {
              tr: `📚 Örnek Cümleler (${exList.length})`,
              en: `📚 Example Sentences (${exList.length})`,
              ar: `📚 جمل توضيحية (${exList.length})`,
              uk: `📚 Приклади речень (${exList.length})`
            };
            this.dom.lookupExamplesTitle.textContent = exTitles[this.lang] || exTitles.en;
          }
          this.dom.lookupExamples.style.display = 'block';
        } else {
          this.dom.lookupExamples.style.display = 'none';
        }
      }

      // Update save button state
      this.updateSaveButtonUI(match.de);

      // Position modal
      this.positionLookupModal(element);
    }

    positionLookupModal(element) {
      if (!element || !this.dom.lookupModal) return;

      // Highlight active word token
      if (this.activeWordElement && this.activeWordElement !== element) {
        this.activeWordElement.classList.remove('active-lookup');
      }
      this.activeWordElement = element;
      element.classList.add('active-lookup');

      const modal = this.dom.lookupModal;

      // Make active and reset previous inline maxHeight to measure true rendered height
      modal.classList.add('active');
      modal.style.maxHeight = '';

      const rect = element.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const edgeMargin = 12;
      const gap = 8;

      // If word is scrolled off screen, close lookup
      if (rect.bottom < 0 || rect.top > vh) {
        this.closeLookup();
        return;
      }

      // Compute modal width and actual rendered height
      const modalWidth = Math.min(modal.offsetWidth || 360, vw - (edgeMargin * 2));
      const naturalHeight = modal.offsetHeight || 320;

      const spaceAbove = rect.top - edgeMargin - gap;
      const spaceBelow = vh - rect.bottom - edgeMargin - gap;

      // Decision: place ABOVE ("kelimenin hemen üstünde") or BELOW
      // We prefer placing above if it fits, or if spaceAbove >= spaceBelow (word in lower half)
      let placeAbove = false;
      if (spaceAbove >= naturalHeight) {
        placeAbove = true;
      } else if (spaceBelow >= naturalHeight) {
        placeAbove = false;
      } else {
        placeAbove = spaceAbove >= spaceBelow;
      }

      let top;
      if (placeAbove) {
        if (naturalHeight > spaceAbove) {
          const maxH = Math.max(160, Math.floor(spaceAbove));
          modal.style.maxHeight = `${maxH}px`;
          top = Math.max(edgeMargin, rect.top - maxH - gap);
        } else {
          top = rect.top - naturalHeight - gap;
        }
      } else {
        if (naturalHeight > spaceBelow) {
          const maxH = Math.max(160, Math.floor(spaceBelow));
          modal.style.maxHeight = `${maxH}px`;
          top = rect.bottom + gap;
        } else {
          top = rect.bottom + gap;
        }
      }

      // Safety check: Ensure modal never overflows top or bottom of viewport
      const currentHeight = modal.offsetHeight || naturalHeight;
      if (top + currentHeight > vh - edgeMargin) {
        top = Math.max(edgeMargin, vh - currentHeight - edgeMargin);
      }
      if (top < edgeMargin) {
        top = edgeMargin;
      }

      // Horizontal centering relative to the word, clamped to viewport bounds
      let left = rect.left + (rect.width / 2) - (modalWidth / 2);
      if (left < edgeMargin) {
        left = edgeMargin;
      } else if (left + modalWidth > vw - edgeMargin) {
        left = vw - modalWidth - edgeMargin;
      }

      modal.style.top = `${Math.round(top)}px`;
      modal.style.left = `${Math.round(left)}px`;
    }

    closeLookup() {
      if (this.activeWordElement) {
        this.activeWordElement.classList.remove('active-lookup');
        this.activeWordElement = null;
      }
      if (this.dom.lookupModal) {
        this.dom.lookupModal.classList.remove('active');
        this.dom.lookupModal.style.maxHeight = '';
      }
    }

    findWordData(cleanWord, unitGlossary) {
      if (!cleanWord) return null;
      const lower = cleanWord.toLowerCase();

      // 0. Dedicated Reading Studio Lexicon (Exact contextual definitions for 100% of reading words)
      if (typeof window !== 'undefined' && window.READING_LEXICON && window.READING_LEXICON[lower]) {
        const item = window.READING_LEXICON[lower];
        return {
          de: item.de || cleanWord,
          displayDe: item.displayDe || item.de || cleanWord,
          article: item.article || '',
          plural: item.plural || '',
          pos: item.pos || '',
          level: item.level || 'B1',
          en: item.en || '',
          tr: item.tr || '',
          ar: item.ar || '',
          uk: item.uk || '',
          example_de: item.example_de || '',
          example_tr: item.example_tr || '',
          example_en: item.example_en || '',
          example_ar: item.example_ar || '',
          example_uk: item.example_uk || '',
          grammar: item.grammar || null,
          examples: item.examples || [],
          forms: [lower]
        };
      }

      // Stopwords to prevent short particles, prepositions, and articles from being registered as search forms
      const STOPWORDS = new Set([
        'und', 'oder', 'aber', 'denn', 'doch', 'weil', 'dass', 'da',
        'der', 'die', 'das', 'den', 'dem', 'des',
        'ein', 'eine', 'einer', 'einem', 'einen', 'eines',
        'von', 'vom', 'vor', 'mit', 'auf', 'für', 'sich', 'in', 'im',
        'an', 'am', 'zu', 'zur', 'zum', 'aus', 'bei', 'beim', 'nach',
        'über', 'unter', 'als', 'wie', 'nur', 'auch', 'nicht', 'so',
        'ist', 'sind', 'war', 'hat', 'haben', 'hatte', 'wird', 'werden',
        'sg.', 'pl.', 'nur'
      ]);

      // Normalize any vocabulary entry
      const parseEntry = (item, isGlossary) => {
        const rawDe = (item.de || '').trim();
        let article = item.article || '';
        if (!article) {
          const m = rawDe.match(/^(der|die|das)\s+/i);
          if (m) article = m[1].toLowerCase();
        }

        const cleanNoArt = rawDe.replace(/^(der|die|das|sich)\s+/i, '');
        const mainLemma = cleanNoArt.split(/[,(/]/)[0].trim();

        const forms = new Set();
        if (mainLemma) forms.add(mainLemma.toLowerCase());
        forms.add(cleanNoArt.toLowerCase());
        forms.add(rawDe.toLowerCase());

        cleanNoArt.split(/[\s,/-]+/).forEach(part => {
          const p = part.trim().toLowerCase();
          if (p.length >= 3 && !STOPWORDS.has(p)) {
            forms.add(p);
          }
        });

        const paren = rawDe.match(/\(([^)]+)\)/);
        if (paren) {
          paren[1].split(/[,/\s]+/).forEach(p => {
            const pClean = p.replace(/^(hat|ist)\s+/, '').trim().toLowerCase();
            if (pClean && pClean.length >= 3 && !STOPWORDS.has(pClean)) {
              forms.add(pClean);
            }
          });
        }

        if (rawDe.includes('/')) {
          rawDe.split('/').forEach(part => {
            const pClean = part.replace(/^(der|die|das|sich)\s+/i, '').split(/[,(/]/)[0].trim().toLowerCase();
            if (pClean && pClean.length >= 3 && !STOPWORDS.has(pClean)) forms.add(pClean);
          });
        }

        return {
          de: rawDe,
          displayDe: mainLemma || rawDe,
          article: article,
          plural: item.plural || '',
          pos: item.pos || '',
          level: item.level || (isGlossary ? 'B1' : ''),
          en: item.en || '',
          tr: item.tr || '',
          ar: item.ar || '',
          uk: item.uk || '',
          example_de: item.example_de || item.example || '',
          example_tr: item.example_tr || '',
          example_en: item.example_en || '',
          example_ar: item.example_ar || '',
          example_uk: item.example_uk || '',
          forms: Array.from(forms)
        };
      };

      // 1. Check unit glossary first (priority for the current reading unit)
      const parsedGlossary = (unitGlossary || []).map(g => parseEntry(g, true));
      for (const entry of parsedGlossary) {
        if (entry.forms.includes(lower)) {
          return entry;
        }
      }

      // 2. Prepare dictionary pool (VOCAB_2000, VOCAB_B2, VOCAB_C1)
      if (!this._cachedVocabPool) {
        const pool = [];
        if (window.VOCAB_2000 && Array.isArray(window.VOCAB_2000)) {
          pool.push(...window.VOCAB_2000);
        }
        if (window.VOCAB_B2 && Array.isArray(window.VOCAB_B2)) {
          pool.push(...window.VOCAB_B2);
        }
        if (window.VOCAB_C1 && Array.isArray(window.VOCAB_C1)) {
          pool.push(...window.VOCAB_C1);
        }
        this._cachedVocabPool = pool.map(item => parseEntry(item, false));
      }

      for (const entry of this._cachedVocabPool) {
        if (entry.forms.includes(lower)) {
          return entry;
        }
      }

      // 3. German inflection & morphological stemming candidates
      const candidates = [];
      const isNounSuffix = (lower.endsWith('schaften') || lower.endsWith('ungen') || lower.endsWith('heiten') || lower.endsWith('keiten') || lower.endsWith('innen'));

      // A. Separable prefix with 'zu': entgegenzuwirken -> entgegenwirken, abzuschalten -> abschalten
      if (lower.includes('zu') && lower.length >= 7) {
        candidates.push(lower.replace('zu', ''));
      }

      // B. Noun feminine plurals: -innen -> -in, or base
      if (lower.endsWith('innen') && lower.length >= 7) {
        candidates.push(lower.slice(0, -5) + 'in');
        candidates.push(lower.slice(0, -5));
      }

      // C. Suffixes -ungen, -heiten, -keiten, -schaften
      if (lower.endsWith('ungen') && lower.length >= 6) candidates.push(lower.slice(0, -2));
      if (lower.endsWith('schaften') && lower.length >= 9) candidates.push(lower.slice(0, -2));
      if (lower.endsWith('heiten') && lower.length >= 7) candidates.push(lower.slice(0, -2));
      if (lower.endsWith('keiten') && lower.length >= 7) candidates.push(lower.slice(0, -2));

      // D. Common noun/adjective declensions: -en, -n, -er, -es, -em, -e, -s
      if (lower.endsWith('en') && lower.length >= 4) {
        candidates.push(lower.slice(0, -2));
        candidates.push(lower.slice(0, -1));
      }
      if (lower.endsWith('em') && lower.length >= 4) candidates.push(lower.slice(0, -2));
      if (lower.endsWith('er') && lower.length >= 4) candidates.push(lower.slice(0, -2));
      if (lower.endsWith('es') && lower.length >= 4) {
        candidates.push(lower.slice(0, -2));
        candidates.push(lower.slice(0, -1));
      }
      if (lower.endsWith('e') && lower.length >= 4) candidates.push(lower.slice(0, -1));
      if (lower.endsWith('s') && lower.length >= 4) candidates.push(lower.slice(0, -1));

      // E. Verb past/3rd person (only if not a noun suffix): -te -> -en, -ten -> -en, -t -> -en
      if (!isNounSuffix) {
        if (lower.endsWith('te') && lower.length >= 5) candidates.push(lower.slice(0, -2) + 'en');
        if (lower.endsWith('ten') && lower.length >= 6) candidates.push(lower.slice(0, -3) + 'en');
        if (lower.endsWith('t') && lower.length >= 4) candidates.push(lower.slice(0, -1) + 'en');
      }

      // F. Umlaut stripping for stem variants (ä -> a, ö -> o, ü -> u)
      const unumlaut = (s) => s.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u');
      const umlautVariants = [];
      candidates.forEach(c => {
        const u = unumlaut(c);
        if (u !== c) umlautVariants.push(u);
      });
      candidates.push(...umlautVariants);

      // Check candidates against glossary first, then dictionary pool
      for (const cand of candidates) {
        if (!cand || cand.length < 3) continue;
        for (const entry of parsedGlossary) {
          if (entry.forms.includes(cand)) return entry;
        }
        for (const entry of this._cachedVocabPool) {
          if (entry.forms.includes(cand)) return entry;
        }
      }

      // 4. German Compound Noun Suffix (Kompositum) matching with longest-base selection
      // e.g. Sportverein ends with Verein, Berufsalltag ends with Alltag, Arbeitsmodell ends with Modell
      // Prevents sub-word collisions (e.g. Kaufpreis must NOT match Reis)
      if (lower.length >= 6) {
        const compoundTargets = [lower, lower.endsWith('en') ? lower.slice(0, -2) : null, lower.endsWith('e') ? lower.slice(0, -1) : null, lower.endsWith('s') ? lower.slice(0, -1) : null].filter(Boolean);
        let bestCompound = null;
        let maxBaseLen = 0;

        for (const target of compoundTargets) {
          const testEntry = (entry) => {
            if (entry.pos === 'noun') {
              const base = entry.displayDe.toLowerCase();
              if (base.length >= 4 && (target.length - base.length >= 3) && target.endsWith(base)) {
                if (base.length > maxBaseLen) {
                  bestCompound = entry;
                  maxBaseLen = base.length;
                }
              }
            }
          };

          for (const entry of parsedGlossary) testEntry(entry);
          for (const entry of this._cachedVocabPool) testEntry(entry);
        }

        if (bestCompound) return bestCompound;
      }

      // 5. Fallback generic entry
      const fallbacks = {
        tr: `Almanca sözcük: ${cleanWord}`,
        en: `German term: ${cleanWord}`,
        ar: `كلمة ألمانية: ${cleanWord}`,
        uk: `Німецьке слово: ${cleanWord}`
      };
      return {
        de: cleanWord,
        displayDe: cleanWord,
        article: '',
        plural: '',
        pos: 'Wort',
        level: '',
        en: fallbacks.en,
        tr: fallbacks.tr,
        ar: fallbacks.ar,
        uk: fallbacks.uk,
        example_de: ''
      };
    }

    pronounceWord(word) {
      if (!this.speechSynth) return;
      const clean = word.replace(/^(der|die|das)\s+/i, '');
      const utter = new SpeechSynthesisUtterance(clean);
      utter.lang = 'de-DE';
      utter.rate = 0.9;
      this.speechSynth.cancel();
      this.speechSynth.speak(utter);
    }

    toggleTextAudio() {
      if (this.isSpeaking) {
        this.stopTextAudio();
      } else {
        this.startTextAudio();
      }
    }

    startTextAudio() {
      if (!this.speechSynth) return;
      const unit = this.dataset[this.currentUnitIndex];
      if (!unit) return;

      const fullText = unit.contentParagraphs.map(p => p.de).join('. ');
      this.activeUtterance = new SpeechSynthesisUtterance(fullText);
      this.activeUtterance.lang = 'de-DE';
      this.activeUtterance.rate = 0.92;

      this.activeUtterance.onend = () => {
        this.stopTextAudio();
      };
      this.activeUtterance.onerror = () => {
        this.stopTextAudio();
      };

      this.speechSynth.cancel();
      this.speechSynth.speak(this.activeUtterance);
      this.isSpeaking = true;

      const texts = I18N[this.lang] || I18N.en;
      if (this.dom.btnListenText) {
        this.dom.btnListenText.innerHTML = `<span>⏹️</span> ${texts.btnStopListen}`;
        this.dom.btnListenText.classList.add('active');
      }
    }

    stopTextAudio() {
      if (this.speechSynth) {
        this.speechSynth.cancel();
      }
      this.isSpeaking = false;
      const texts = I18N[this.lang] || I18N.en;
      if (this.dom.btnListenText) {
        this.dom.btnListenText.innerHTML = `<span>🔊</span> ${texts.btnListen}`;
        this.dom.btnListenText.classList.remove('active');
      }
    }

    // Timer Implementation
    toggleTimer() {
      if (this.timerRunning) {
        this.pauseTimer();
      } else {
        this.startTimer();
      }
    }

    startTimer() {
      this.timerRunning = true;
      const texts = I18N[this.lang] || I18N.en;
      if (this.dom.btnTimerToggle) this.dom.btnTimerToggle.textContent = texts.btnPauseTimer;

      this.timerInterval = setInterval(() => {
        if (this.timerSeconds > 0) {
          this.timerSeconds--;
          this.updateTimerDisplay();
        } else {
          this.pauseTimer();
          alert("⏱️ Zeit abgelaufen! (Time is up for this telc reading unit)");
        }
      }, 1000);
    }

    pauseTimer() {
      this.timerRunning = false;
      if (this.timerInterval) clearInterval(this.timerInterval);
      const texts = I18N[this.lang] || I18N.en;
      if (this.dom.btnTimerToggle) this.dom.btnTimerToggle.textContent = texts.btnStartTimer;
    }

    resetTimer() {
      this.pauseTimer();
      this.timerSeconds = this.timerInitial;
      this.updateTimerDisplay();
    }

    updateTimerDisplay() {
      if (!this.dom.timerDisplay) return;
      const min = Math.floor(this.timerSeconds / 60);
      const sec = this.timerSeconds % 60;
      this.dom.timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    }

    // Questions & Exam Evaluation
    renderQuestions() {
      const unit = this.dataset[this.currentUnitIndex];
      if (!unit || !this.dom.questionsContainer) return;

      this.dom.questionsContainer.innerHTML = '';
      const texts = I18N[this.lang] || I18N.en;
      const langFlags = { tr: '🇹🇷', en: '🇬🇧', ar: '🇸🇦', uk: '🇺🇦' };
      const flag = langFlags[this.lang] || '🌐';

      unit.questions.forEach((q, qIndex) => {
        const qCard = document.createElement('div');
        qCard.className = 'ls-q-card';
        qCard.id = `q-card-${q.id}`;

        const germanPrompt = q.prompt.de;
        const transPrompt = (this.lang !== 'de' && q.prompt[this.lang] && q.prompt[this.lang] !== germanPrompt)
          ? `<div class="ls-q-prompt-sub">${flag} ${q.prompt[this.lang]}</div>`
          : '';

        qCard.innerHTML = `
          <div class="ls-q-header">
            <span class="ls-q-number">Aufgabe ${qIndex + 1}</span>
            <button class="ls-btn-locate" data-para="${q.paragraphRef}">
              ${texts.locateBtn}
            </button>
          </div>
          <div class="ls-q-prompt">
            <div class="ls-q-prompt-de">${germanPrompt}</div>
            ${transPrompt}
          </div>
          <div class="ls-options-grid" id="opt-grid-${q.id}"></div>
          <div class="ls-explanation-box" id="exp-${q.id}" style="display:none;"></div>
        `;

        const optGrid = qCard.querySelector(`#opt-grid-${q.id}`);
        const letters = ['A', 'B', 'C', 'D'];

        q.options.forEach((opt, optIndex) => {
          const optBtn = document.createElement('button');
          optBtn.className = 'ls-opt-btn';
          const optText = opt.de;
          const letter = q.type === 'true_false' ? (optIndex === 0 ? '✓' : '✗') : letters[optIndex];
          const translationTooltip = (this.lang !== 'de' && opt[this.lang] && opt[this.lang] !== opt.de) ? opt[this.lang] : '';

          if (translationTooltip) {
            optBtn.title = translationTooltip;
          }

          optBtn.innerHTML = `
            <span class="ls-opt-letter">${letter}</span>
            <div class="ls-opt-content">
              <span class="ls-opt-text">${optText}</span>
            </div>
          `;

          optBtn.addEventListener('click', () => this.handleAnswer(q, optIndex, qCard));
          optGrid.appendChild(optBtn);
        });

        const locateBtn = qCard.querySelector('.ls-btn-locate');
        locateBtn.addEventListener('click', () => {
          this.highlightParagraph(q.paragraphRef);
        });

        this.dom.questionsContainer.appendChild(qCard);
      });

      this.updateScoreUI();
    }

    handleAnswer(question, selectedIndex, qCard) {
      this.userAnswers[question.id] = selectedIndex;

      const optGrid = qCard.querySelector(`#opt-grid-${question.id}`);
      const expBox = qCard.querySelector(`#exp-${question.id}`);
      const buttons = optGrid.querySelectorAll('.ls-opt-btn');

      buttons.forEach((btn, idx) => {
        btn.classList.add('locked');
        if (idx === question.correct) {
          btn.classList.add('selected-correct');
        } else if (idx === selectedIndex) {
          btn.classList.add('selected-wrong');
        }

        // Post-answer pedagogical feedback: reveal translation below German option once answered
        const opt = question.options[idx];
        if (this.lang !== 'de' && opt && opt[this.lang] && opt[this.lang] !== opt.de) {
          const contentEl = btn.querySelector('.ls-opt-content');
          if (contentEl && !contentEl.querySelector('.ls-opt-trans')) {
            const transEl = document.createElement('span');
            transEl.className = 'ls-opt-trans';
            transEl.textContent = opt[this.lang];
            contentEl.appendChild(transEl);
          }
        }
      });

      // Show explanation
      const expText = question.explanation[this.lang] || question.explanation.de;
      const texts = I18N[this.lang] || I18N.en;
      expBox.style.display = 'block';
      expBox.innerHTML = `<strong>${texts.explanationLabel}</strong><br>${expText}`;

      this.updateScoreUI();
    }

    highlightParagraph(paraId) {
      const targetP = document.getElementById(`para-${paraId}`);
      if (targetP) {
        document.querySelectorAll('.ls-paragraph').forEach(p => p.classList.remove('highlight-target'));
        targetP.classList.add('highlight-target');
        targetP.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    updateScoreUI() {
      if (!this.dom.scoreBanner) return;
      const unit = this.dataset[this.currentUnitIndex];
      if (!unit) return;

      const total = unit.questions.length;
      const answeredKeys = Object.keys(this.userAnswers);
      if (answeredKeys.length === 0) {
        this.dom.scoreBanner.style.display = 'none';
        return;
      }

      let correctCount = 0;
      unit.questions.forEach(q => {
        if (this.userAnswers[q.id] === q.correct) correctCount++;
      });

      const texts = I18N[this.lang] || I18N.en;
      const isComplete = answeredKeys.length === total;
      const isPassed = correctCount >= Math.ceil(total * 0.6); // 60% telc threshold

      if (isComplete) {
        try {
          const scaledLesen = Math.round((correctCount / total) * 75 * 10) / 10;
          localStorage.setItem('telc_lesen_score', scaledLesen);
        } catch (e) {}
      }

      this.dom.scoreBanner.style.display = 'block';
      this.dom.scoreBanner.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <div>
            <strong>${texts.scoreLabel}</strong> ${correctCount} / ${total}
          </div>
          <div>
            ${isComplete ? (isPassed ? `<span class="ls-badge badge-level">${texts.passedBadge}</span>` : `<span class="ls-badge" style="background:rgba(239,68,68,0.2); color:#f87171; border-color:rgba(239,68,68,0.3);">${texts.studyMoreBadge}</span>`) : ''}
          </div>
        </div>
      `;
    }

    // Vocabulary Deck (Vokabelheft)
    loadSavedWords() {
      try {
        const raw = localStorage.getItem('deutschlernen_saved_reading_words');
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    saveSavedWords() {
      try {
        localStorage.setItem('deutschlernen_saved_reading_words', JSON.stringify(this.savedWords));
      } catch (e) {}
    }

    isWordSaved(wordClean) {
      const lower = wordClean.toLowerCase();
      return this.savedWords.some(w => w.de.toLowerCase().includes(lower) || lower.includes(w.de.toLowerCase()));
    }

    toggleSaveCurrentWord() {
      if (!this.currentLookupData) return;
      const wordObj = this.currentLookupData;
      const idx = this.savedWords.findIndex(w => w.de.toLowerCase() === wordObj.de.toLowerCase());

      if (idx > -1) {
        this.savedWords.splice(idx, 1);
      } else {
        this.savedWords.unshift({
          de: wordObj.de,
          article: wordObj.article,
          pos: wordObj.pos,
          en: wordObj.en,
          tr: wordObj.tr,
          ar: wordObj.ar,
          uk: wordObj.uk,
          date: new Date().toISOString()
        });
      }

      this.saveSavedWords();
      this.updateSaveButtonUI(wordObj.de);
      this.renderSavedWordsList();
      this.renderArticleBody(); // Re-highlight tokens
    }

    updateSaveButtonUI(wordDe) {
      if (!this.dom.btnSaveVocab) return;
      const texts = I18N[this.lang] || I18N.en;
      const isSaved = this.savedWords.some(w => w.de.toLowerCase() === wordDe.toLowerCase());

      if (isSaved) {
        this.dom.btnSaveVocab.textContent = texts.wordSavedBtn;
        this.dom.btnSaveVocab.classList.add('saved');
      } else {
        this.dom.btnSaveVocab.textContent = texts.addWordBtn;
        this.dom.btnSaveVocab.classList.remove('saved');
      }
    }

    renderSavedWordsList() {
      if (!this.dom.savedWordsList) return;
      const texts = I18N[this.lang] || I18N.en;

      if (this.savedWords.length === 0) {
        this.dom.savedWordsList.innerHTML = `
          <div style="padding: 24px 16px; text-align:center; color: var(--ls-text-muted); font-size:13.5px;">
            ${texts.savedEmpty}
          </div>
        `;
        return;
      }

      this.dom.savedWordsList.innerHTML = '';
      this.savedWords.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'ls-vocab-item';
        const trans = item[this.lang] || item.en || item.tr || '';

        itemEl.innerHTML = `
          <div>
            <div class="ls-vocab-de">
              ${item.article ? `<span class="ls-art-badge ls-art-${item.article.toLowerCase()}">${item.article}</span> ` : ''}
              ${item.de}
            </div>
            <div class="ls-vocab-tr">${trans}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <button class="ls-vocab-del" title="${texts.listenWord}" data-action="audio">🔊</button>
            <button class="ls-vocab-del" title="Löschen" data-action="delete">✕</button>
          </div>
        `;

        itemEl.querySelector('[data-action="audio"]').addEventListener('click', () => {
          this.pronounceWord(item.de);
        });

        itemEl.querySelector('[data-action="delete"]').addEventListener('click', () => {
          this.savedWords.splice(index, 1);
          this.saveSavedWords();
          this.renderSavedWordsList();
          this.renderArticleBody();
        });

        this.dom.savedWordsList.appendChild(itemEl);
      });
    }

    /* ==========================================================================
       SPRACHBAUSTEINE METHODS
       ========================================================================== */
    switchTrack(track) {
      if (track !== 'lesen' && track !== 'sprachbausteine') return;
      this.activeTrack = track;

      if (this.dom.btnTrackLesen) {
        this.dom.btnTrackLesen.classList.toggle('active', track === 'lesen');
      }
      if (this.dom.btnTrackSprachbausteine) {
        this.dom.btnTrackSprachbausteine.classList.toggle('active', track === 'sprachbausteine');
      }

      if (this.isSpeaking) {
        this.stopTextAudio();
      }

      if (track === 'sprachbausteine') {
        this.timerSeconds = 20 * 60;
        this.timerInitial = 20 * 60;
        this.updateTimerDisplay();
        this.renderSbTabs();
        this.loadSbSet(this.currentSbSetIndex || 0, this.currentSbSubpart || 'teil1');
      } else {
        this.timerSeconds = 12 * 60;
        this.timerInitial = 12 * 60;
        this.updateTimerDisplay();
        this.renderPartTabs();
        this.loadUnit(this.currentUnitIndex || 0);
      }
    }

    renderSbTabs() {
      if (!this.dom.partTabs) return;
      this.dom.partTabs.innerHTML = '';

      if (!this.sbDataset || this.sbDataset.length === 0) {
        if (typeof window !== 'undefined' && window.SPRACHBAUSTEINE_DATASET) {
          this.sbDataset = window.SPRACHBAUSTEINE_DATASET;
        }
      }

      this.sbDataset.forEach((set, sIdx) => {
        // Teil 1 Tab
        const btn1 = document.createElement('button');
        const isAct1 = sIdx === this.currentSbSetIndex && this.currentSbSubpart === 'teil1';
        btn1.className = `ls-part-btn ${isAct1 ? 'active' : ''}`;
        btn1.innerHTML = `<span>🧩 Test ${sIdx + 1}:</span> Teil 1 (Brief)`;
        btn1.addEventListener('click', () => this.loadSbSet(sIdx, 'teil1'));
        this.dom.partTabs.appendChild(btn1);

        // Teil 2 Tab
        const btn2 = document.createElement('button');
        const isAct2 = sIdx === this.currentSbSetIndex && this.currentSbSubpart === 'teil2';
        btn2.className = `ls-part-btn ${isAct2 ? 'active' : ''}`;
        btn2.innerHTML = `<span>🧩 Test ${sIdx + 1}:</span> Teil 2 (Text)`;
        btn2.addEventListener('click', () => this.loadSbSet(sIdx, 'teil2'));
        this.dom.partTabs.appendChild(btn2);
      });
    }

    loadSbSet(setIdx, subpart) {
      if (setIdx < 0 || setIdx >= this.sbDataset.length) return;
      this.currentSbSetIndex = setIdx;
      this.currentSbSubpart = subpart || 'teil1';
      this.sbAnswers = {};
      this.sbChecked = false;

      if (this.dom.scoreBanner) {
        this.dom.scoreBanner.style.display = 'none';
        this.dom.scoreBanner.innerHTML = '';
      }

      this.renderSbTabs();
      this.renderSbCurrent();
    }

    renderSbCurrent() {
      const set = this.sbDataset[this.currentSbSetIndex];
      if (!set) return;
      const task = set[this.currentSbSubpart];
      if (!task) return;

      if (this.dom.badgePart) {
        this.dom.badgePart.textContent = (task.title && task.title[this.lang]) || task.title.de;
      }
      if (this.dom.badgeLevel) {
        this.dom.badgeLevel.textContent = "telc B1 • 15 Pkt";
      }
      if (this.dom.badgeTime) {
        this.dom.badgeTime.textContent = "⏱️ 10 Min.";
      }
      if (this.dom.articleTitle) {
        const setT = (set.title && set.title[this.lang]) || set.title.de;
        const taskT = (task.title && task.title[this.lang]) || task.title.de;
        this.dom.articleTitle.textContent = `${setT} — ${taskT}`;
      }
      if (this.dom.articleSummary) {
        this.dom.articleSummary.textContent = (task.instruction && task.instruction[this.lang]) || task.instruction.de;
      }

      this.renderSbArticleBody(task);
      this.renderSbQuestions(task);
    }

    renderSbArticleBody(task) {
      if (!this.dom.articleBody || !task || !task.textTemplate) return;
      this.dom.articleBody.innerHTML = '';

      const paragraphs = task.textTemplate.split('\n\n');

      paragraphs.forEach((paraText, pIdx) => {
        const pEl = document.createElement('div');
        pEl.className = 'ls-paragraph';
        pEl.id = `sb-para-${pIdx + 1}`;

        // Split paragraph by gaps: e.g. {21}, {22}, etc.
        const parts = paraText.split(/(\{\d+\})/g);

        parts.forEach(part => {
          const gapMatch = part.match(/^\{(\d+)\}$/);
          if (gapMatch) {
            const gapId = parseInt(gapMatch[1], 10);
            const chosenKey = this.sbAnswers[gapId];
            let displayText = '____';

            if (chosenKey) {
              if (task.wordBank) {
                const wObj = task.wordBank.find(w => w.key === chosenKey);
                if (wObj) displayText = wObj.word;
              } else {
                const it = task.items.find(i => i.id === gapId);
                if (it) {
                  const opt = it.options.find(o => o.key === chosenKey);
                  if (opt) displayText = opt.text;
                }
              }
            }

            const pill = document.createElement('span');
            pill.className = `sb-gap-pill ${chosenKey ? 'filled' : ''}`;
            pill.id = `sb-gap-${gapId}`;
            pill.setAttribute('data-gap', gapId);
            pill.innerHTML = `[ <strong>${gapId}:</strong> <span class="gap-text">${displayText}</span> ]`;

            pill.addEventListener('click', () => {
              const targetCard = document.getElementById(`sb-item-card-${gapId}`);
              if (targetCard) {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetCard.classList.add('active-focus');
                setTimeout(() => targetCard.classList.remove('active-focus'), 1600);
              }
            });

            pEl.appendChild(pill);
          } else if (part.trim().length > 0) {
            // Normal text chunk: tokenize so Readlang tap-to-translate works!
            const tokenized = this.tokenizeText(part, []);
            const spanChunk = document.createElement('span');
            spanChunk.innerHTML = tokenized;
            pEl.appendChild(spanChunk);
          } else {
            pEl.appendChild(document.createTextNode(part));
          }
        });

        this.dom.articleBody.appendChild(pEl);
      });

      // Bind click on word tokens
      this.dom.articleBody.querySelectorAll('.w-tok').forEach(tok => {
        tok.addEventListener('click', (e) => {
          e.stopPropagation();
          const cleanWord = tok.getAttribute('data-clean');
          const fullToken = tok.textContent.trim();
          this.openWordLookup(cleanWord, fullToken, tok);
        });
      });
    }

    renderSbQuestions(task) {
      if (!this.dom.questionsContainer || !task) return;
      this.dom.questionsContainer.innerHTML = '';
      const texts = I18N[this.lang] || I18N.en;

      // Score Banner placeholder
      const scoreBanner = document.createElement('div');
      scoreBanner.id = 'sb-score-banner';
      scoreBanner.style.display = this.sbChecked ? 'block' : 'none';
      this.dom.questionsContainer.appendChild(scoreBanner);

      // Teil 2 Word Bank Header
      if (task.wordBank && Array.isArray(task.wordBank)) {
        const wbCard = document.createElement('div');
        wbCard.className = 'sb-wordbank-container';
        wbCard.innerHTML = `<div style="width:100%; font-size:12px; font-weight:800; color:var(--ls-text-gold); margin-bottom:6px;">📦 ${texts.sbWordBankHeading}</div>`;

        task.wordBank.forEach(wObj => {
          const isUsed = Object.values(this.sbAnswers).includes(wObj.key);
          const chip = document.createElement('span');
          chip.className = `sb-word-chip ${isUsed ? 'used' : ''}`;
          chip.innerHTML = `<span class="chip-key">${wObj.key.toUpperCase()}</span> <span>${wObj.word}</span>`;
          wbCard.appendChild(chip);
        });

        this.dom.questionsContainer.appendChild(wbCard);
      }

      // Render Each Item
      task.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'sb-item-card';
        card.id = `sb-item-card-${item.id}`;

        const isAnswered = Boolean(this.sbAnswers[item.id]);
        const chosen = this.sbAnswers[item.id];
        const isCorrect = chosen === item.correct;

        let optionsHTML = '';

        if (item.options) {
          // Teil 1: 3 options (a, b, c)
          optionsHTML = `<div class="sb-options-row">`;
          item.options.forEach(opt => {
            const isSel = chosen === opt.key;
            let statusClass = '';
            if (this.sbChecked) {
              if (opt.key === item.correct) statusClass = 'opt-correct';
              else if (isSel && !isCorrect) statusClass = 'opt-wrong';
            }
            optionsHTML += `
              <button type="button" class="sb-opt-pill ${isSel ? 'selected' : ''} ${statusClass}" data-key="${opt.key}">
                <strong>${opt.key})</strong> ${opt.text}
              </button>
            `;
          });
          optionsHTML += `</div>`;
        } else if (task.wordBank) {
          // Teil 2: Select Dropdown with 15 words
          optionsHTML = `<div style="display:flex; gap:8px; align-items:center;">
            <select class="sb-select-pill" style="flex:1; padding:8px 12px; background:var(--ls-bg-card); color:var(--ls-text-main); border:1px solid var(--ls-border-card); border-radius:var(--ls-radius-sm); font-size:13px; font-weight:700;">
              <option value="">${texts.sbSelectPlaceholder}</option>
              ${task.wordBank.map(w => `<option value="${w.key}" ${chosen === w.key ? 'selected' : ''}>${w.key.toUpperCase()}: ${w.word}</option>`).join('')}
            </select>
          </div>`;
        }

        // Rule Explanation Box (visible after checking)
        let ruleHTML = '';
        if (this.sbChecked) {
          const ruleText = (item.rule && item.rule[this.lang]) || (item.rule && item.rule.de) || '';
          ruleHTML = `
            <div class="sb-rule-box">
              <div style="font-weight:800; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                <span>${isCorrect ? '✅' : '❌'}</span>
                <span>${isCorrect ? 'Richtig' : 'Korrekt: ' + (item.correctWord || item.correct).toUpperCase()}</span>
              </div>
              <div>${ruleText}</div>
            </div>
          `;
        }

        card.innerHTML = `
          <div class="sb-item-header">
            <span>Lücke ${item.id}</span>
            <span style="font-size:11px; color:var(--ls-text-gold);">1.5 Pkt</span>
          </div>
          ${optionsHTML}
          ${ruleHTML}
        `;

        // Bind Option Button Clicks (Teil 1)
        card.querySelectorAll('.sb-opt-pill').forEach(btn => {
          btn.addEventListener('click', () => {
            const k = btn.getAttribute('data-key');
            this.selectSbAnswer(item.id, k);
          });
        });

        // Bind Dropdown Changes (Teil 2)
        const selEl = card.querySelector('.sb-select-pill');
        if (selEl) {
          selEl.addEventListener('change', (e) => {
            this.selectSbAnswer(item.id, e.target.value);
          });
        }

        this.dom.questionsContainer.appendChild(card);
      });

      // Check & Reset Buttons
      const actionsDiv = document.createElement('div');
      actionsDiv.style.cssText = 'display:flex; gap:10px; margin-top:20px;';
      actionsDiv.innerHTML = `
        <button type="button" class="ls-btn-save-vocab" id="btn-check-sb" style="flex:2; padding:12px; font-weight:800;">
          ${texts.sbCheckBtn}
        </button>
        <button type="button" class="ls-tool-btn" id="btn-reset-sb" style="flex:1; padding:12px;">
          ${texts.sbResetBtn}
        </button>
      `;

      actionsDiv.querySelector('#btn-check-sb').addEventListener('click', () => this.checkSbAnswers());
      actionsDiv.querySelector('#btn-reset-sb').addEventListener('click', () => this.resetSbAnswers());

      this.dom.questionsContainer.appendChild(actionsDiv);

      if (this.sbChecked) {
        this.updateSbScoreBanner();
      }
    }

    selectSbAnswer(itemId, key) {
      if (!key) {
        delete this.sbAnswers[itemId];
      } else {
        this.sbAnswers[itemId] = key;
      }

      const task = this.sbDataset[this.currentSbSetIndex][this.currentSbSubpart];

      // Update Inline Gap Pill
      const pill = document.getElementById(`sb-gap-${itemId}`);
      if (pill) {
        const textSpan = pill.querySelector('.gap-text');
        if (textSpan) {
          if (!key) {
            textSpan.textContent = '____';
            pill.classList.remove('filled');
          } else {
            let wordText = key;
            if (task.wordBank) {
              const wObj = task.wordBank.find(w => w.key === key);
              if (wObj) wordText = wObj.word;
            } else if (task.items) {
              const it = task.items.find(i => i.id === itemId);
              if (it) {
                const opt = it.options.find(o => o.key === key);
                if (opt) wordText = opt.text;
              }
            }
            textSpan.textContent = wordText;
            pill.classList.add('filled');
          }
        }
      }

      // Re-render questions to update wordBank chips & selected states
      this.renderSbQuestions(task);
    }

    checkSbAnswers() {
      this.sbChecked = true;
      const set = this.sbDataset[this.currentSbSetIndex];
      const task = set[this.currentSbSubpart];

      // Update inline pills with .correct or .incorrect
      task.items.forEach(item => {
        const pill = document.getElementById(`sb-gap-${item.id}`);
        if (pill) {
          const chosen = this.sbAnswers[item.id];
          const isCorrect = chosen === item.correct;
          pill.classList.remove('correct', 'incorrect');
          pill.classList.add(isCorrect ? 'correct' : 'incorrect');

          const textSpan = pill.querySelector('.gap-text');
          if (textSpan) {
            if (isCorrect) {
              // keep chosen word
            } else {
              let correctWord = item.correctWord || '';
              if (!correctWord && item.options) {
                const o = item.options.find(opt => opt.key === item.correct);
                if (o) correctWord = o.text;
              }
              textSpan.innerHTML = `<del>${textSpan.textContent}</del> → <strong>${correctWord}</strong>`;
            }
          }
        }
      });

      this.renderSbQuestions(task);
      this.updateSbScoreBanner();

      const banner = document.getElementById('sb-score-banner');
      if (banner) {
        banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    updateSbScoreBanner() {
      const banner = document.getElementById('sb-score-banner');
      if (!banner) return;
      const texts = I18N[this.lang] || I18N.en;
      const set = this.sbDataset[this.currentSbSetIndex];
      const task = set[this.currentSbSubpart];

      let correctCount = 0;
      task.items.forEach(it => {
        if (this.sbAnswers[it.id] === it.correct) {
          correctCount++;
        }
      });

      const pointsEarned = Math.round(correctCount * 1.5 * 10) / 10;
      const maxPoints = 15.0;
      const isPassed = pointsEarned >= 9.0; // 60% of 15 pts = 9.0

      try {
        const scaledSb = Math.round((pointsEarned / maxPoints) * 30 * 10) / 10;
        localStorage.setItem('telc_sprachbausteine_score', scaledSb);
      } catch (e) {}

      banner.style.display = 'block';
      banner.style.marginBottom = '16px';
      banner.style.padding = '14px 16px';
      banner.style.borderRadius = 'var(--ls-radius-md)';
      banner.style.border = `1px solid ${isPassed ? 'var(--ls-accent-success)' : 'var(--ls-accent-danger)'}`;
      banner.style.background = isPassed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)';

      banner.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-weight:900; font-size:15px; color:${isPassed ? 'var(--ls-accent-success)' : 'var(--ls-accent-danger)'};">
            ${isPassed ? '🏆 ' + texts.sbScorePassed : '⚠️ ' + texts.sbScoreFail}
          </span>
          <span style="font-weight:900; font-size:18px;">${pointsEarned} / ${maxPoints} Pkt</span>
        </div>
        <div style="font-size:12.5px; color:var(--ls-text-muted);">
          ${correctCount} von 10 Lücken korrekt beantwortet • telc B1 Bestehensgrenze: 9.0 / 15.0 Punkte (60%)
        </div>
      `;
    }

    resetSbAnswers() {
      this.sbAnswers = {};
      this.sbChecked = false;
      const set = this.sbDataset[this.currentSbSetIndex];
      const task = set[this.currentSbSubpart];
      this.renderSbArticleBody(task);
      this.renderSbQuestions(task);
    }

    toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('deutschlernen_theme', next);
      localStorage.setItem('site_theme', next);
      if (next === 'light') {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }
  }

  // Expose class & instance globally and auto-start on DOMContentLoaded
  if (typeof window !== 'undefined') {
    window.LesenApp = LesenApp;
    if (typeof document !== 'undefined' && document.addEventListener) {
      document.addEventListener('DOMContentLoaded', () => {
        window.LesenAppInstance = new LesenApp();
      });
    }
  }

  // Global helper for language buttons
  if (typeof window !== 'undefined') {
    window.setLesenLang = function(lang) {
      if (window.LesenAppInstance) {
        window.LesenAppInstance.setLanguage(lang);
      }
    };
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LesenApp };
  }
})();
