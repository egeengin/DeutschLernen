/**
 * DeutschLernen - Grammatik Studio Interactive Engine (A1–B2)
 * Inspired by Bluemind German Grammar (A1-A2-B1-B2)
 * Full Quad-Lingual & Native German Support: DE, EN, TR, AR, UK
 * Accessible, WCAG AA, RTL-Compatible for Arabic, Web Speech Audio Support
 */

(function () {
  'use strict';

  // --- UI Translation Dictionary ---
  const I18N = {
    de: {
      appTitle: "Grammatik Studio",
      subtitle: "Regeln, Prüfungstricks & interaktive Übungen (A1–B2)",
      portalBack: "← Hauptportal",
      dashboardBack: "📊 Dashboard",
      trainerLink: "⚡ Wortschatz",
      lesenLink: "📖 Lesen",
      hoerenLink: "🎧 Hören",
      searchPlaceholder: "Thema suchen (z.B. Akkusativ, Passiv, Konjunktiv)...",
      levelAll: "Alle Stufen",
      rulesTab: "📖 Regeln & Beispiele",
      drillsTab: "⚡ Übungen & Quiz",
      proTipHeader: "💡 Prüfungstipp & telc-Falle",
      examplesHeader: "🗣️ Beispielsätze (mit Audio)",
      listenAudio: "Anhören",
      startDrill: "Übung starten",
      dontKnowBtn: "🤷 Ich weiß nicht (Erklärung anzeigen)",
      nextQuestion: "Nächste Frage →",
      finishTopic: "Ergebnis anzeigen 🏆",
      scoreTitle: "Übung abgeschlossen!",
      scoreSubtitle: "Dein Ergebnis für dieses Thema:",
      retryDrill: "🔄 Noch einmal üben",
      backToTopics: "← Themenliste",
      completedBadge: "Abgeschlossen",
      progressLabel: "Grammatik-Fortschritt",
      correctFeedback: "✅ Richtig! Hervorragend!",
      wrongFeedback: "❌ Leider falsch. Richtige Antwort: ",
      dontKnowFeedback: "💡 Kein Problem! Hier ist die richtige Lösung und Erklärung:",
      topicEmpty: "Kein Thema ausgewählt. Wähle ein Thema aus der Liste links.",
      noSearchResults: "Keine passenden Grammatikthemen gefunden.",
      drillsCount: "Fragen",
      examRelevance: "telc / Goethe Prüfungsrelevant"
    },
    en: {
      appTitle: "Grammar Studio",
      subtitle: "Rules, Exam Secrets & Interactive Drills (A1–B2)",
      portalBack: "← Main Portal",
      dashboardBack: "📊 Dashboard",
      trainerLink: "⚡ Vocab Trainer",
      lesenLink: "📖 Reading",
      hoerenLink: "🎧 Listening",
      searchPlaceholder: "Search topic (e.g., Accusative, Passive, Konjunktiv)...",
      levelAll: "All Levels",
      rulesTab: "📖 Rules & Cheat-Sheet",
      drillsTab: "⚡ Practice Drills",
      proTipHeader: "💡 Exam Secret & telc Trap",
      examplesHeader: "🗣️ Example Sentences (with Audio)",
      listenAudio: "Listen",
      startDrill: "Start Practice Drills",
      dontKnowBtn: "🤷 I don't know (Show Explanation)",
      nextQuestion: "Next Question →",
      finishTopic: "View Results 🏆",
      scoreTitle: "Drill Completed!",
      scoreSubtitle: "Your score for this topic:",
      retryDrill: "🔄 Practice Again",
      backToTopics: "← Topic List",
      completedBadge: "Completed",
      progressLabel: "Grammar Progress",
      correctFeedback: "✅ Correct! Excellent work!",
      wrongFeedback: "❌ Incorrect. Correct answer: ",
      dontKnowFeedback: "💡 No worries! Here is the correct answer and rule explanation:",
      topicEmpty: "No topic selected. Please pick a grammar topic from the list.",
      noSearchResults: "No matching grammar topics found.",
      drillsCount: "Questions",
      examRelevance: "telc / Goethe Exam Relevant"
    },
    tr: {
      appTitle: "Grammatik Stüdyosu",
      subtitle: "Kurallar, Sınav Hileleri ve Pratik Alıştırmalar (A1–B2)",
      portalBack: "← Ana Portal",
      dashboardBack: "📊 Dashboard",
      trainerLink: "⚡ Kelime",
      lesenLink: "📖 Okuma",
      hoerenLink: "🎧 Dinleme",
      searchPlaceholder: "Konularda ara (Akkusativ, Passiv, Konjunktiv)...",
      levelAll: "Tüm Seviyeler",
      rulesTab: "📖 Kural ve Özet Kartı",
      drillsTab: "⚡ İnteraktif Alıştırmalar",
      proTipHeader: "💡 Sınav Püf Noktası ve telc Tuzağı",
      examplesHeader: "🗣️ Örnek Cümleler (Sesli Dinle)",
      listenAudio: "Dinle",
      startDrill: "Alıştırmaları Başlat",
      dontKnowBtn: "🤷 Bilmiyorum (Cevabı ve Kuralı Göster)",
      nextQuestion: "Sonraki Soru →",
      finishTopic: "Sonuçları Gör 🏆",
      scoreTitle: "Alıştırma Tamamlandı!",
      scoreSubtitle: "Bu konu için başarı sonucunuz:",
      retryDrill: "🔄 Yeniden Çöz",
      backToTopics: "← Konu Listesi",
      completedBadge: "Tamamlandı",
      progressLabel: "Grammar İlerlemesi",
      correctFeedback: "✅ Harika! Doğru cevap!",
      wrongFeedback: "❌ Yanlış cevap. Doğru olan: ",
      dontKnowFeedback: "💡 Hiç sorun değil! İşte doğru çözüm ve kural açıklaması:",
      topicEmpty: "Henüz bir konu seçilmedi. Lütfen sol taraftan bir konu seçin.",
      noSearchResults: "Aramanıza uygun dilbilgisi konusu bulunamadı.",
      drillsCount: "Soru",
      examRelevance: "telc / Goethe Sınavlarında Çok Çıkar"
    },
    ar: {
      appTitle: "استوديو القواعد الألمانية",
      subtitle: "شرح القواعد، أسرار الامتحانات، وتمارين تفاعلية (A1–B2)",
      portalBack: "← البوابة الرئيسية",
      dashboardBack: "📊 لوحة التحكم",
      trainerLink: "⚡ المفردات",
      lesenLink: "📖 القراءة",
      hoerenLink: "🎧 الاستماع",
      searchPlaceholder: "ابحث في القواعد (مثل Akkusativ, Passiv, Konjunktiv)...",
      levelAll: "جميع المستويات",
      rulesTab: "📖 شرح القاعدة والملخص",
      drillsTab: "⚡ تمارين تفاعلية واختبارات",
      proTipHeader: "💡 سر الامتحان وفخاخ telc الشائعة",
      examplesHeader: "🗣️ أمثلة تطبيقية (مع نطق صوتي)",
      listenAudio: "استمع",
      startDrill: "بدء التمارين التفاعلية",
      dontKnowBtn: "🤷 لا أعرف (إظهار الحل والشرح)",
      nextQuestion: "السؤال التالي ←",
      finishTopic: "عرض النتيجة 🏆",
      scoreTitle: "اكتمل التمرين!",
      scoreSubtitle: "نتيجتك في هذا الدرس:",
      retryDrill: "🔄 إعادة التدريب",
      backToTopics: "← قائمة المواضيع",
      completedBadge: "مكتمل",
      progressLabel: "مستوى التقدم في القواعد",
      correctFeedback: "✅ إجابة صحيحة! أحسنت!",
      wrongFeedback: "❌ إجابة خاطئة. الإجابة الصحيحة هي: ",
      dontKnowFeedback: "💡 لا تقلق! إليك الإجابة الصحيحة والشرح التفصيلي:",
      topicEmpty: "لم يتم اختيار أي موضوع. الرجاء اختيار درس من القائمة.",
      noSearchResults: "لم يتم العثور على مواضيع مطابقة لبحثك.",
      drillsCount: "أسئلة",
      examRelevance: "هام جداً لامتحانات telc و Goethe"
    },
    uk: {
      appTitle: "Граматична Студія",
      subtitle: "Правила, секрети іспитів та інтерактивні вправи (A1–B2)",
      portalBack: "← Головний портал",
      dashboardBack: "📊 Панель",
      trainerLink: "⚡ Словник",
      lesenLink: "📖 Читання",
      hoerenLink: "🎧 Слухання",
      searchPlaceholder: "Пошук теми (наприклад, Akkusativ, Passiv, Konjunktiv)...",
      levelAll: "Усі рівні",
      rulesTab: "📖 Правила та конспект",
      drillsTab: "⚡ Інтерактивні вправи",
      proTipHeader: "💡 Секрет іспиту та пастки telc",
      examplesHeader: "🗣️ Приклади речень (з озвученням)",
      listenAudio: "Слухати",
      startDrill: "Почати вправи",
      dontKnowBtn: "🤷 Не знаю (Показати пояснення)",
      nextQuestion: "Наступне питання →",
      finishTopic: "Переглянути результат 🏆",
      scoreTitle: "Вправу завершено!",
      scoreSubtitle: "Ваш результат за цією темою:",
      retryDrill: "🔄 Спробувати ще раз",
      backToTopics: "← Список тем",
      completedBadge: "Завершено",
      progressLabel: "Прогрес у граматиці",
      correctFeedback: "✅ Правильно! Чудова робота!",
      wrongFeedback: "❌ Неправильно. Правильна відповідь: ",
      dontKnowFeedback: "💡 Нічого страшного! Ось правильна відповідь та пояснення правила:",
      topicEmpty: "Тему не обрано. Будь ласка, оберіть тему зі списку ліворуч.",
      noSearchResults: "Не знайдено відповідних граматичних тем.",
      drillsCount: "Питань",
      examRelevance: "Важливо для іспитів telc / Goethe"
    }
  };

  class GrammarApp {
    constructor() {
      this.topics = (typeof GRAMMAR_DATA !== 'undefined' && Array.isArray(GRAMMAR_DATA)) ? GRAMMAR_DATA : [];
      
      // Load language preference
      this.lang = (typeof localStorage !== 'undefined' && (
        localStorage.getItem('deutschlernen_lang') ||
        localStorage.getItem('site_lang') ||
        localStorage.getItem('telc_lang')
      )) || 'en';
      if (!I18N[this.lang]) this.lang = 'en';

      this.currentLevel = 'ALL';
      this.searchQuery = '';
      this.activeTopicId = this.topics.length > 0 ? this.topics[0].id : null;
      this.activeTab = 'rules'; // 'rules' or 'drills'

      // Drill State
      this.currentDrillIndex = 0;
      this.drillUserAnswers = {}; // { [drillId]: { selected, isCorrect, skipped } }
      this.drillAnswered = false;

      // Persistence
      this.progress = this.loadProgress();

      // Audio
      this.synth = (typeof window !== 'undefined' && 'speechSynthesis' in window) ? window.speechSynthesis : null;
      this.germanVoice = null;
      this.initVoices();

      this.bindDOMElements();
      this.bindEvents();
      this.applyLanguage();
      this.renderTopicList();
      this.renderActiveTopic();
      this.updateOverallProgress();
    }

    initVoices() {
      if (!this.synth) return;
      const updateVoices = () => {
        const voices = this.synth.getVoices();
        this.germanVoice = voices.find(v => v.lang === 'de-DE' || v.lang.startsWith('de')) || null;
      };
      updateVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = updateVoices;
      }
    }

    loadProgress() {
      try {
        const raw = localStorage.getItem('deutschlernen_grammar_progress');
        return raw ? JSON.parse(raw) : {};
      } catch (e) {
        return {};
      }
    }

    saveProgress(topicId, scoreData) {
      this.progress[topicId] = scoreData;
      try {
        localStorage.setItem('deutschlernen_grammar_progress', JSON.stringify(this.progress));
        if (typeof window !== 'undefined' && window.StorageEngine) {
          window.StorageEngine.saveGrammarScore?.(topicId, scoreData);
        }
      } catch (e) {
        console.warn('Storage save failed', e);
      }
      this.updateOverallProgress();
    }

    bindDOMElements() {
      this.dom = {
        topicList: document.getElementById('topic-list'),
        activeTopicTitle: document.getElementById('active-topic-title'),
        activeTopicLevel: document.getElementById('active-topic-level'),
        activeTopicDesc: document.getElementById('active-topic-desc'),
        rulesSection: document.getElementById('rules-section'),
        drillsSection: document.getElementById('drills-section'),
        ruleSummary: document.getElementById('rule-summary-text'),
        ruleProTip: document.getElementById('rule-protip-text'),
        examplesList: document.getElementById('examples-list'),
        tabRules: document.getElementById('tab-btn-rules'),
        tabDrills: document.getElementById('tab-btn-drills'),
        btnStartDrill: document.getElementById('btn-start-drill'),
        btnDontKnow: document.getElementById('btn-dont-know'),
        btnNextDrill: document.getElementById('btn-next-drill'),
        drillPrompt: document.getElementById('drill-prompt'),
        drillOptionsContainer: document.getElementById('drill-options-container'),
        drillFeedbackBox: document.getElementById('drill-feedback-box'),
        drillCounter: document.getElementById('drill-counter'),
        drillProgressBar: document.getElementById('drill-progress-bar'),
        drillResultsCard: document.getElementById('drill-results-card'),
        drillActiveCard: document.getElementById('drill-active-card'),
        drillScoreNumber: document.getElementById('drill-score-number'),
        drillScorePercent: document.getElementById('drill-score-percent'),
        btnRetryDrill: document.getElementById('btn-retry-drill'),
        btnBackToList: document.getElementById('btn-back-to-list'),
        searchInput: document.getElementById('grammar-search-input'),
        overallProgressBar: document.getElementById('overall-progress-bar'),
        overallProgressPercent: document.getElementById('overall-progress-percent'),
        levelChips: document.querySelectorAll('.level-chip'),
        langButtons: document.querySelectorAll('.lang-btn'),
        themeToggle: document.getElementById('theme-toggle-btn'),
        mainWorkspace: document.getElementById('grammar-workspace'),
        mobileBackBtn: document.getElementById('mobile-back-to-list')
      };
    }

    bindEvents() {
      // Level chips filter
      this.dom.levelChips?.forEach(chip => {
        chip.addEventListener('click', (e) => {
          this.dom.levelChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.currentLevel = chip.getAttribute('data-level') || 'ALL';
          this.renderTopicList();
        });
      });

      // Search input
      this.dom.searchInput?.addEventListener('input', (e) => {
        this.searchQuery = (e.target.value || '').toLowerCase().trim();
        this.renderTopicList();
      });

      // Tab switching: Rules vs Drills
      this.dom.tabRules?.addEventListener('click', () => this.switchTab('rules'));
      this.dom.tabDrills?.addEventListener('click', () => this.switchTab('drills'));
      this.dom.btnStartDrill?.addEventListener('click', () => this.switchTab('drills'));

      // Drill interaction
      this.dom.btnDontKnow?.addEventListener('click', () => this.handleDontKnow());
      this.dom.btnNextDrill?.addEventListener('click', () => this.handleNextDrill());
      this.dom.btnRetryDrill?.addEventListener('click', () => this.restartDrills());
      this.dom.btnBackToList?.addEventListener('click', () => this.switchTab('rules'));

      // Mobile back to topic list
      this.dom.mobileBackBtn?.addEventListener('click', () => {
        document.body.classList.remove('mobile-viewing-topic');
      });

      // Language Switcher buttons
      this.dom.langButtons?.forEach(btn => {
        btn.addEventListener('click', () => {
          const newLang = btn.getAttribute('data-lang');
          if (newLang && I18N[newLang]) {
            this.setLanguage(newLang);
          }
        });
      });

      // Theme toggle
      this.dom.themeToggle?.addEventListener('click', () => {
        const isLight = document.documentElement.classList.contains('light-mode');
        if (isLight) {
          document.documentElement.classList.remove('light-mode');
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('deutschlernen_theme', 'dark');
          this.dom.themeToggle.textContent = '☀️';
        } else {
          document.documentElement.classList.add('light-mode');
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('deutschlernen_theme', 'light');
          this.dom.themeToggle.textContent = '🌙';
        }
      });
    }

    setLanguage(newLang) {
      if (!I18N[newLang]) return;
      this.lang = newLang;
      try {
        localStorage.setItem('deutschlernen_lang', newLang);
        localStorage.setItem('site_lang', newLang);
        localStorage.setItem('telc_lang', newLang);
      } catch (e) {}

      this.applyLanguage();
      this.renderTopicList();
      this.renderActiveTopic();
    }

    applyLanguage() {
      const texts = I18N[this.lang] || I18N.en;

      // RTL handling for Arabic
      if (this.lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', this.lang);
      }
      document.body.setAttribute('data-lang', this.lang);

      // Translate static i18n markers
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
          el.textContent = texts[key];
        }
      });

      // Translate placeholders
      if (this.dom.searchInput) {
        this.dom.searchInput.placeholder = texts.searchPlaceholder;
      }

      // Update active state in language selector pills
      this.dom.langButtons?.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === this.lang);
      });
    }

    switchTab(tab) {
      this.activeTab = tab;
      const isRules = tab === 'rules';
      
      this.dom.tabRules?.classList.toggle('active', isRules);
      this.dom.tabDrills?.classList.toggle('active', !isRules);
      
      if (this.dom.rulesSection) this.dom.rulesSection.style.display = isRules ? 'block' : 'none';
      if (this.dom.drillsSection) this.dom.drillsSection.style.display = !isRules ? 'block' : 'none';

      if (!isRules) {
        this.renderCurrentDrill();
      }
    }

    getLocalizedText(obj) {
      if (!obj) return '';
      if (typeof obj === 'string') return obj;
      return obj[this.lang] || obj['en'] || obj['de'] || Object.values(obj)[0] || '';
    }

    renderTopicList() {
      if (!this.dom.topicList) return;
      this.dom.topicList.innerHTML = '';

      const filtered = this.topics.filter(topic => {
        const matchLevel = this.currentLevel === 'ALL' || topic.level === this.currentLevel;
        if (!matchLevel) return false;
        if (!this.searchQuery) return true;
        
        const titleText = this.getLocalizedText(topic.title).toLowerCase();
        const descText = this.getLocalizedText(topic.desc).toLowerCase();
        const deTitle = (topic.title && topic.title.de ? topic.title.de : '').toLowerCase();
        return titleText.includes(this.searchQuery) || descText.includes(this.searchQuery) || deTitle.includes(this.searchQuery);
      });

      if (filtered.length === 0) {
        const emptyItem = document.createElement('div');
        emptyItem.className = 'topic-empty-state';
        emptyItem.textContent = (I18N[this.lang] || I18N.en).noSearchResults;
        this.dom.topicList.appendChild(emptyItem);
        return;
      }

      filtered.forEach(topic => {
        const item = document.createElement('div');
        const isActive = topic.id === this.activeTopicId;
        const progressInfo = this.progress[topic.id];
        const isDone = progressInfo && progressInfo.completed;

        item.className = `topic-nav-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`;
        item.setAttribute('data-id', topic.id);

        const levelBadgeClass = `badge-level-${topic.level.toLowerCase()}`;
        const title = this.getLocalizedText(topic.title);
        const drillCount = topic.drills ? topic.drills.length : 0;
        const drillText = (I18N[this.lang] || I18N.en).drillsCount;

        item.innerHTML = `
          <div class="topic-item-header">
            <span class="topic-icon">${topic.icon || '📌'}</span>
            <span class="topic-level-badge ${levelBadgeClass}">${topic.level}</span>
            ${isDone ? '<span class="topic-done-icon" title="Completed">✓</span>' : ''}
          </div>
          <div class="topic-item-title">${title}</div>
          <div class="topic-item-meta">
            <span>⚡ ${drillCount} ${drillText}</span>
            ${progressInfo ? `<span>⭐ ${progressInfo.score}/${progressInfo.total}</span>` : ''}
          </div>
        `;

        item.addEventListener('click', () => {
          this.activeTopicId = topic.id;
          this.currentDrillIndex = 0;
          this.drillUserAnswers = {};
          this.drillAnswered = false;
          this.renderTopicList();
          this.renderActiveTopic();
          document.body.classList.add('mobile-viewing-topic');
        });

        this.dom.topicList.appendChild(item);
      });
    }

    renderActiveTopic() {
      const topic = this.topics.find(t => t.id === this.activeTopicId);
      if (!topic) return;

      const texts = I18N[this.lang] || I18N.en;

      // Header
      if (this.dom.activeTopicTitle) {
        this.dom.activeTopicTitle.textContent = this.getLocalizedText(topic.title);
      }
      if (this.dom.activeTopicLevel) {
        this.dom.activeTopicLevel.textContent = topic.level;
        this.dom.activeTopicLevel.className = `active-level-pill badge-level-${topic.level.toLowerCase()}`;
      }
      if (this.dom.activeTopicDesc) {
        this.dom.activeTopicDesc.textContent = this.getLocalizedText(topic.desc);
      }

      // Rule Summary
      if (this.dom.ruleSummary) {
        const rawSummary = this.getLocalizedText(topic.ruleCard?.summary);
        this.dom.ruleSummary.innerHTML = this.formatMarkdownText(rawSummary);
      }

      // Pro Tip
      if (this.dom.ruleProTip) {
        const rawProTip = this.getLocalizedText(topic.ruleCard?.proTip);
        this.dom.ruleProTip.innerHTML = this.formatMarkdownText(rawProTip);
      }

      // Examples with TTS
      if (this.dom.examplesList) {
        this.dom.examplesList.innerHTML = '';
        if (topic.examples && Array.isArray(topic.examples)) {
          topic.examples.forEach(ex => {
            const card = document.createElement('div');
            card.className = 'example-card';

            const deSentence = ex.de || '';
            const translatedSentence = this.getLocalizedText(ex);

            card.innerHTML = `
              <div class="example-de-row">
                <span class="example-de">${deSentence}</span>
                <button class="btn-audio-play" title="${texts.listenAudio}" aria-label="${texts.listenAudio}">
                  🔊
                </button>
              </div>
              ${this.lang !== 'de' ? `<div class="example-translated">${translatedSentence}</div>` : ''}
            `;

            const audioBtn = card.querySelector('.btn-audio-play');
            audioBtn?.addEventListener('click', (e) => {
              e.stopPropagation();
              this.speakGerman(deSentence, audioBtn);
            });

            this.dom.examplesList.appendChild(card);
          });
        }
      }

      // Refresh Drills View
      this.renderCurrentDrill();
    }

    formatMarkdownText(text) {
      if (!text) return '';
      // Safe HTML escaping
      let safe = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // Bold **word**
      safe = safe.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Bullets • or >
      safe = safe.replace(/^• (.*?)$/gm, '<li class="rule-bullet">$1</li>');
      safe = safe.replace(/^> (.*?)$/gm, '<blockquote class="rule-quote">$1</blockquote>');
      // Line breaks
      safe = safe.replace(/\n/g, '<br>');
      return safe;
    }

    speakGerman(text, buttonEl) {
      if (!this.synth) return;
      this.synth.cancel();

      const cleanText = text.replace(/[🔵🔴🟢•\*]/g, '').trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      if (this.germanVoice) utterance.voice = this.germanVoice;

      if (buttonEl) {
        buttonEl.classList.add('playing');
        utterance.onend = () => buttonEl.classList.remove('playing');
        utterance.onerror = () => buttonEl.classList.remove('playing');
      }

      this.synth.speak(utterance);
    }

    renderCurrentDrill() {
      const topic = this.topics.find(t => t.id === this.activeTopicId);
      if (!topic || !topic.drills || topic.drills.length === 0) return;

      const drills = topic.drills;
      const texts = I18N[this.lang] || I18N.en;

      // If finished all drills
      if (this.currentDrillIndex >= drills.length) {
        this.renderDrillSummary(topic);
        return;
      }

      if (this.dom.drillActiveCard) this.dom.drillActiveCard.style.display = 'block';
      if (this.dom.drillResultsCard) this.dom.drillResultsCard.style.display = 'none';

      const drill = drills[this.currentDrillIndex];
      this.drillAnswered = false;

      // Update counter and progress bar
      if (this.dom.drillCounter) {
        this.dom.drillCounter.textContent = `${this.currentDrillIndex + 1} / ${drills.length}`;
      }
      if (this.dom.drillProgressBar) {
        const percent = Math.round((this.currentDrillIndex / drills.length) * 100);
        this.dom.drillProgressBar.style.width = `${percent}%`;
      }

      // Prompt
      if (this.dom.drillPrompt) {
        this.dom.drillPrompt.innerHTML = `<span class="prompt-text">${drill.prompt}</span>`;
      }

      // Options
      if (this.dom.drillOptionsContainer) {
        this.dom.drillOptionsContainer.innerHTML = '';
        drill.options.forEach((optText, optIdx) => {
          const btn = document.createElement('button');
          btn.className = 'drill-option-btn';
          btn.setAttribute('data-index', optIdx);
          btn.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
            <span class="option-label">${optText}</span>
          `;

          btn.addEventListener('click', () => {
            if (this.drillAnswered) return;
            this.handleOptionSelect(optIdx, drill);
          });

          this.dom.drillOptionsContainer.appendChild(btn);
        });
      }

      // Reset feedback and control buttons
      if (this.dom.drillFeedbackBox) {
        this.dom.drillFeedbackBox.style.display = 'none';
        this.dom.drillFeedbackBox.className = 'drill-feedback-box';
        this.dom.drillFeedbackBox.innerHTML = '';
      }

      if (this.dom.btnDontKnow) {
        this.dom.btnDontKnow.style.display = 'inline-flex';
        this.dom.btnDontKnow.disabled = false;
      }
      if (this.dom.btnNextDrill) {
        this.dom.btnNextDrill.style.display = 'none';
      }
    }

    handleOptionSelect(selectedIdx, drill) {
      this.drillAnswered = true;
      const isCorrect = selectedIdx === drill.answer;
      const texts = I18N[this.lang] || I18N.en;

      this.drillUserAnswers[drill.id] = {
        selected: selectedIdx,
        isCorrect: isCorrect,
        skipped: false
      };

      // Mark buttons
      const buttons = this.dom.drillOptionsContainer?.querySelectorAll('.drill-option-btn');
      buttons?.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === drill.answer) {
          btn.classList.add('correct');
        } else if (idx === selectedIdx) {
          btn.classList.add('incorrect');
        }
      });

      // Show Feedback
      if (this.dom.drillFeedbackBox) {
        this.dom.drillFeedbackBox.style.display = 'block';
        this.dom.drillFeedbackBox.className = `drill-feedback-box ${isCorrect ? 'box-correct' : 'box-wrong'}`;

        const explanation = this.getLocalizedText(drill.explanation);
        const headerText = isCorrect ? texts.correctFeedback : texts.wrongFeedback + `<strong>${drill.options[drill.answer]}</strong>`;

        this.dom.drillFeedbackBox.innerHTML = `
          <div class="feedback-title">${headerText}</div>
          <div class="feedback-explanation">${explanation}</div>
        `;
      }

      // Toggle action buttons
      if (this.dom.btnDontKnow) this.dom.btnDontKnow.style.display = 'none';
      if (this.dom.btnNextDrill) {
        this.dom.btnNextDrill.style.display = 'inline-flex';
        const isLast = this.currentDrillIndex + 1 >= (this.topics.find(t => t.id === this.activeTopicId)?.drills.length || 0);
        this.dom.btnNextDrill.textContent = isLast ? texts.finishTopic : texts.nextQuestion;
      }
    }

    handleDontKnow() {
      if (this.drillAnswered) return;
      this.drillAnswered = true;

      const topic = this.topics.find(t => t.id === this.activeTopicId);
      if (!topic || !topic.drills) return;

      const drill = topic.drills[this.currentDrillIndex];
      const texts = I18N[this.lang] || I18N.en;

      this.drillUserAnswers[drill.id] = {
        selected: -1,
        isCorrect: false,
        skipped: true
      };

      // Highlight correct answer in green
      const buttons = this.dom.drillOptionsContainer?.querySelectorAll('.drill-option-btn');
      buttons?.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === drill.answer) {
          btn.classList.add('correct');
        }
      });

      // Show explanation card
      if (this.dom.drillFeedbackBox) {
        this.dom.drillFeedbackBox.style.display = 'block';
        this.dom.drillFeedbackBox.className = 'drill-feedback-box box-dontknow';

        const explanation = this.getLocalizedText(drill.explanation);
        this.dom.drillFeedbackBox.innerHTML = `
          <div class="feedback-title">${texts.dontKnowFeedback} <strong>${drill.options[drill.answer]}</strong></div>
          <div class="feedback-explanation">${explanation}</div>
        `;
      }

      // Next button
      if (this.dom.btnDontKnow) this.dom.btnDontKnow.style.display = 'none';
      if (this.dom.btnNextDrill) {
        this.dom.btnNextDrill.style.display = 'inline-flex';
        const isLast = this.currentDrillIndex + 1 >= topic.drills.length;
        this.dom.btnNextDrill.textContent = isLast ? texts.finishTopic : texts.nextQuestion;
      }
    }

    handleNextDrill() {
      this.currentDrillIndex++;
      this.renderCurrentDrill();
    }

    renderDrillSummary(topic) {
      if (this.dom.drillActiveCard) this.dom.drillActiveCard.style.display = 'none';
      if (this.dom.drillResultsCard) this.dom.drillResultsCard.style.display = 'block';

      const drills = topic.drills || [];
      const total = drills.length;
      let correct = 0;

      drills.forEach(d => {
        const record = this.drillUserAnswers[d.id];
        if (record && record.isCorrect) correct++;
      });

      const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

      if (this.dom.drillScoreNumber) {
        this.dom.drillScoreNumber.textContent = `${correct} / ${total}`;
      }
      if (this.dom.drillScorePercent) {
        this.dom.drillScorePercent.textContent = `${percent}%`;
        this.dom.drillScorePercent.className = `score-badge ${percent >= 70 ? 'badge-pass' : 'badge-retry'}`;
      }

      // Save progress
      this.saveProgress(topic.id, {
        score: correct,
        total: total,
        percent: percent,
        completed: true,
        lastCompletedAt: new Date().toISOString()
      });

      this.renderTopicList();
    }

    restartDrills() {
      this.currentDrillIndex = 0;
      this.drillUserAnswers = {};
      this.drillAnswered = false;
      this.renderCurrentDrill();
    }

    updateOverallProgress() {
      const totalTopics = this.topics.length;
      if (totalTopics === 0) return;

      const completedCount = Object.values(this.progress).filter(p => p && p.completed).length;
      const percent = Math.round((completedCount / totalTopics) * 100);

      if (this.dom.overallProgressBar) {
        this.dom.overallProgressBar.style.width = `${percent}%`;
      }
      if (this.dom.overallProgressPercent) {
        this.dom.overallProgressPercent.textContent = `${percent}% (${completedCount}/${totalTopics})`;
      }
    }
  }

  // Auto-instantiate on DOM load
  if (typeof window !== 'undefined') {
    window.GrammarAppInstance = null;
    document.addEventListener('DOMContentLoaded', () => {
      window.GrammarAppInstance = new GrammarApp();
    });
  }

  // Node export for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GrammarApp, I18N };
  }
})();
