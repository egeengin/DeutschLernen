/**
 * DeutschLernen - Hörverstehen Studio Application
 * telc Deutsch B1 Listening Exam Simulator:
 * - Real-Time TTS Speech Synthesizer with native German voice pacing
 * - Strict telc B1 Play-Limits (Teil 1: 1x, Teil 2: 2x, Teil 3: 2x)
 * - 30-Minute Countdown Exam Timer
 * - Instant Grading & telc B1 60% Threshold Calculator (45/75 Points)
 * - Synchronized Audio Script & Quad-Lingual Pedagogical Distractor Explanations
 */

(function() {
  'use strict';

  const I18N = {
    en: {
      brandTitle: "Hören Studio & Audio Exam",
      brandSub: "telc Deutsch B1 Listening Comprehension • Interactive Exam Audio Player & Simulator",
      homeLink: "🏠 Portal Home",
      vocabLink: "⚡ Vocab",
      sprechLink: "🗣️ Speaking",
      lesenLink: "📖 Reading",
      legalLink: "⚖️ Legal",
      timerLabel: "Exam Timer",
      btnStartTimer: "Start",
      btnPauseTimer: "Pause",
      btnResetTimer: "Reset",
      btnPlay: "▶ Play Audio",
      btnPauseAudio: "⏸ Pause",
      btnStopAudio: "⏹ Stop",
      playCountLabel: "Played",
      maxPlaysReached: "Max Plays Reached (telc Rule)",
      speedLabel: "Speed",
      tabQuestions: "📝 Questions",
      tabTranscript: "📜 Transcript",
      btnGradeExam: "✓ Evaluate & Grade Listening Exam",
      btnResetExam: "↺ Reset Exam",
      scorePassed: "Passed! (telc B1 Standard >= 60%)",
      scoreFail: "Review Needed (< 60%). Study the audio transcripts!",
      correctLabel: "Correct Answer",
      evidenceLabel: "Audio Evidence:",
      rightChoice: "Richtig (True)",
      wrongChoice: "Falsch (False)",
      testLabel: "Practice Test",
      modeStrictExam: "Official Exam Mode",
      modeStudy: "Interactive Study Mode",
      listenEvidenceBtn: "Listen to Evidence",
      btnTransToggle: "Translation",
      btnTranscriptToggle: "Transcript",
      btnToggleAllTrans: "All Translations",
      btnToggleAllTranscripts: "All Transcripts"
    },
    tr: {
      brandTitle: "Dinleme Stüdyosu & Sesli Sınav",
      brandSub: "telc Deutsch B1 Dinlediğini Anlama • İnteraktif Sınav Oynatıcı & Simülatör",
      homeLink: "🏠 Ana Portal",
      vocabLink: "⚡ Kelimeler",
      sprechLink: "🗣️ Konuşma",
      lesenLink: "📖 Okuma",
      legalLink: "⚖️ Künye",
      timerLabel: "Sınav Sayacı",
      btnStartTimer: "Başlat",
      btnPauseTimer: "Duraklat",
      btnResetTimer: "Sıfırla",
      btnPlay: "▶ Sesi Dinle",
      btnPauseAudio: "⏸ Duraklat",
      btnStopAudio: "⏹ Durdur",
      playCountLabel: "Dinlendi",
      maxPlaysReached: "Maksimum Dinleme Sınırına Ulaşıldı (telc Kuralı)",
      speedLabel: "Hız",
      tabQuestions: "📝 Sorular",
      tabTranscript: "📜 Ses Metni & Kanıt",
      btnGradeExam: "✓ Dinleme Sınavını Değerlendir",
      btnResetExam: "↺ Sıfırla",
      scorePassed: "Tebrikler! telc B1 Dinleme Barajı Geçildi (>= %60)",
      scoreFail: "Barajın Altında (< %60). Ses metinlerini ve açıklamaları inceleyiniz!",
      correctLabel: "Doğru Cevap",
      evidenceLabel: "Ses Metnindeki Kanıt:",
      rightChoice: "Richtig (Doğru)",
      wrongChoice: "Falsch (Yanlış)",
      testLabel: "Deneme Sınavı",
      modeStrictExam: "Resmi Sınav Modu",
      modeStudy: "İnteraktif Çalışma Modu",
      listenEvidenceBtn: "Kanıt Cümlesini Dinle",
      btnTransToggle: "Çeviri",
      btnTranscriptToggle: "Ses Metni",
      btnToggleAllTrans: "Tüm Çeviriler",
      btnToggleAllTranscripts: "Tüm Ses Metinleri"
    },
    ar: {
      brandTitle: "استوديو الاستماع والامتحان الصوتي",
      brandSub: "فهم المسموع لامتحان telc Deutsch B1 • مشغل صوتي تفاعلي ومحاكي للاختبار",
      homeLink: "🏠 البوابة الرئيسية",
      vocabLink: "⚡ المفردات",
      sprechLink: "🗣️ التحدث",
      lesenLink: "📖 القراءة",
      legalLink: "⚖️ بيانات النشر",
      timerLabel: "مؤقت الامتحان",
      btnStartTimer: "بدء",
      btnPauseTimer: "إيقاف مؤقت",
      btnResetTimer: "إعادة ضبط",
      btnPlay: "▶ تشغيل الصوت",
      btnPauseAudio: "⏸ إيقاف مؤقت",
      btnStopAudio: "⏹ إيقاف",
      playCountLabel: "تم الاستماع",
      maxPlaysReached: "تم استنفاد مرات الاستماع المسموحة (قاعدة telc)",
      speedLabel: "السرعة",
      tabQuestions: "📝 الأسئلة",
      tabTranscript: "📜 النص المسموع والدليل",
      btnGradeExam: "✓ تقييم وتصحيح امتحان الاستماع",
      btnResetExam: "↺ إعادة ضبط",
      scorePassed: "ناجح! (معيار telc B1 >= 60%)",
      scoreFail: "بحاجة للمراجعة (< 60%). راجع نصوص الاستماع!",
      correctLabel: "الإجابة الصحيحة",
      evidenceLabel: "الدليل من النص المسموع:",
      rightChoice: "Richtig (صحيح)",
      wrongChoice: "Falsch (خاطئ)",
      testLabel: "الاختبار التدريبي",
      modeStrictExam: "وضع الامتحان الرسمي",
      modeStudy: "وضع الدراسة التفاعلي",
      listenEvidenceBtn: "الاستماع لجملة الدليل",
      btnTransToggle: "الترجمة",
      btnTranscriptToggle: "النص الصوتي",
      btnToggleAllTrans: "كافة الترجمات",
      btnToggleAllTranscripts: "كافة النصوص"
    },
    uk: {
      brandTitle: "Студія аудіювання та звуковий іспит",
      brandSub: "Розуміння на слух telc Deutsch B1 • Інтерактивний аудіоплеєр та симулятор",
      homeLink: "🏠 Головний портал",
      vocabLink: "⚡ Словник",
      sprechLink: "🗣️ Мовлення",
      lesenLink: "📖 Читання",
      legalLink: "⚖️ Вихідні дані",
      timerLabel: "Таймер іспиту",
      btnStartTimer: "Старт",
      btnPauseTimer: "Пауза",
      btnResetTimer: "Скинути",
      btnPlay: "▶ Слухати аудіо",
      btnPauseAudio: "⏸ Пауза",
      btnStopAudio: "⏹ Зупинити",
      playCountLabel: "Прослухано",
      maxPlaysReached: "Вичерпано ліміт прослуховувань (правило telc)",
      speedLabel: "Швидкість",
      tabQuestions: "📝 Питання",
      tabTranscript: "📜 Транскрипт аудіо",
      btnGradeExam: "✓ Оцінити результати аудіювання",
      btnResetExam: "↺ Скинути",
      scorePassed: "Складено! (Стандарт telc B1 >= 60%)",
      scoreFail: "Потрібно повторити (< 60%). Опрацюйте тексти аудіо!",
      correctLabel: "Правильна відповідь",
      evidenceLabel: "Цитата з аудіо:",
      rightChoice: "Richtig (Правильно)",
      wrongChoice: "Falsch (Неправильно)",
      testLabel: "Тренувальний тест",
      modeStrictExam: "Офіційний режим іспиту",
      modeStudy: "Інтерактивний навчальний режим",
      listenEvidenceBtn: "Слухати цитату-доказ",
      btnTransToggle: "Переклад",
      btnTranscriptToggle: "Транскрипт",
      btnToggleAllTrans: "Усі переклади",
      btnToggleAllTranscripts: "Усі транскрипти"
    }
  };

  class HoerenApp {
    constructor() {
      this.dataset = (typeof window !== 'undefined' && window.HOEREN_DATASET) ? window.HOEREN_DATASET : [];
      this.currentTestIndex = 0;
      this.currentPart = 'teil1'; // 'teil1' | 'teil2' | 'teil3'
      this.activeItemIndex = 0;

      this.lang = (typeof localStorage !== 'undefined' && (localStorage.getItem('deutschlernen_lang') || localStorage.getItem('telc_lang'))) || 'en';
      if (!['en', 'tr', 'ar', 'uk'].includes(this.lang)) {
        this.lang = 'en';
      }

      // Translation and transcript display states
      this.showTranslations = {}; // { [itemId]: boolean }
      this.showTranscripts = {};   // { [itemId]: boolean }
      this.allTranslationsVisible = false;

      // Simulator mode ('exam' | 'study')
      this.mode = 'exam';
      this.readingPauseDone = {};
      this.pauseCountdownInterval = null;

      // Audio state
      this.speechSynth = (typeof window !== 'undefined' && window.speechSynthesis) ? window.speechSynthesis : null;
      this.isPlaying = false;
      this.activeUtterance = null;
      this.playbackRate = 1.0;
      this.playCounts = {}; // { [itemOrPartKey]: count }

      // Exam state
      this.userAnswers = {}; // { [itemId]: answerKey }
      this.isGraded = false;

      // Timer state (30 min standard for telc B1 Hörverstehen)
      this.timerSeconds = 30 * 60;
      this.timerRunning = false;
      this.timerInterval = null;

      this.init();
    }

    init() {
      this.bindElements();
      this.bindEvents();
      this.renderLanguage();
      this.renderTestSelector();
      this.renderPartTabs();
      this.loadPart('teil1');
      this.updateTimerDisplay();
    }

    bindElements() {
      this.dom = {
        testPills: document.getElementById('hr-test-pills'),
        partTabs: document.getElementById('hr-part-tabs'),
        testTitle: document.getElementById('hr-test-title'),
        partInstruction: document.getElementById('hr-part-instruction'),
        playerContainer: document.getElementById('hr-player-container'),
        btnPlay: document.getElementById('btn-play-audio'),
        btnStop: document.getElementById('btn-stop-audio'),
        btnRewind: document.getElementById('btn-rewind-5s'),
        speedSelect: document.getElementById('hr-speed-select'),
        speedControlGroup: document.getElementById('hr-speed-control-group'),
        playCountBadge: document.getElementById('hr-play-count-badge'),
        equalizer: document.getElementById('hr-equalizer'),
        questionsContainer: document.getElementById('hr-questions-container'),
        scoreBanner: document.getElementById('hr-score-banner'),
        timerDisplay: document.getElementById('hr-timer-display'),
        btnTimerToggle: document.getElementById('btn-timer-toggle'),
        btnTimerReset: document.getElementById('btn-timer-reset'),
        themeToggleBtn: document.getElementById('btn-theme-toggle'),
        btnModeExam: document.getElementById('btn-mode-exam'),
        btnModeStudy: document.getElementById('btn-mode-study'),
        readingPauseAlert: document.getElementById('hr-reading-pause-alert'),
        pauseCountdown: document.getElementById('hr-pause-countdown'),
        studyTranscriptPanel: document.getElementById('hr-study-transcript-panel'),
        studyTranscriptContent: document.getElementById('hr-study-transcript-content'),
        modeInfo: document.getElementById('hr-mode-info')
      };
    }

    bindEvents() {
      if (this.dom.btnPlay) {
        this.dom.btnPlay.addEventListener('click', () => this.togglePlayAudio());
      }
      if (this.dom.btnStop) {
        this.dom.btnStop.addEventListener('click', () => this.stopAudio());
      }
      if (this.dom.btnRewind) {
        this.dom.btnRewind.addEventListener('click', () => this.rewind5s());
      }
      if (this.dom.btnModeExam) {
        this.dom.btnModeExam.addEventListener('click', () => this.setMode('exam'));
      }
      if (this.dom.btnModeStudy) {
        this.dom.btnModeStudy.addEventListener('click', () => this.setMode('study'));
      }
      if (this.dom.speedSelect) {
        this.dom.speedSelect.addEventListener('change', (e) => {
          this.playbackRate = parseFloat(e.target.value) || 1.0;
        });
      }
      if (this.dom.btnTimerToggle) {
        this.dom.btnTimerToggle.addEventListener('click', () => this.toggleTimer());
      }
      if (this.dom.btnTimerReset) {
        this.dom.btnTimerReset.addEventListener('click', () => this.resetTimer());
      }
      if (this.dom.themeToggleBtn) {
        this.dom.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
      }
    }

    setMode(mode) {
      this.mode = mode;
      this.stopAudio();
      if (this.pauseCountdownInterval) {
        clearInterval(this.pauseCountdownInterval);
        this.pauseCountdownInterval = null;
      }
      if (this.dom.readingPauseAlert) this.dom.readingPauseAlert.style.display = 'none';

      if (mode === 'exam') {
        this.playbackRate = 1.0;
        if (this.dom.speedSelect) {
          this.dom.speedSelect.value = '1.0';
          this.dom.speedSelect.disabled = true;
        }
        if (this.dom.btnRewind) this.dom.btnRewind.style.display = 'none';
        if (this.dom.studyTranscriptPanel) this.dom.studyTranscriptPanel.style.display = 'none';
        if (this.dom.btnModeExam) {
          this.dom.btnModeExam.classList.add('active');
          this.dom.btnModeExam.style.background = 'linear-gradient(135deg, #8b5cf6, #6d28d9)';
          this.dom.btnModeExam.style.color = '#fff';
        }
        if (this.dom.btnModeStudy) {
          this.dom.btnModeStudy.classList.remove('active');
          this.dom.btnModeStudy.style.background = 'transparent';
          this.dom.btnModeStudy.style.color = 'var(--hr-text-muted)';
        }
        if (this.dom.modeInfo) {
          this.dom.modeInfo.textContent = '🔒 Offizielle telc Regeln: Teil 1 1x • Teil 2 2x • Teil 3 1x • Scrubbing gesperrt';
        }
      } else {
        if (this.dom.speedSelect) {
          this.dom.speedSelect.disabled = false;
        }
        if (this.dom.btnRewind) this.dom.btnRewind.style.display = 'inline-flex';
        if (this.dom.studyTranscriptPanel) this.dom.studyTranscriptPanel.style.display = 'block';
        if (this.dom.btnModeExam) {
          this.dom.btnModeExam.classList.remove('active');
          this.dom.btnModeExam.style.background = 'transparent';
          this.dom.btnModeExam.style.color = 'var(--hr-text-muted)';
        }
        if (this.dom.btnModeStudy) {
          this.dom.btnModeStudy.classList.add('active');
          this.dom.btnModeStudy.style.background = 'linear-gradient(135deg, #10b981, #059669)';
          this.dom.btnModeStudy.style.color = '#fff';
        }
        if (this.dom.modeInfo) {
          this.dom.modeInfo.textContent = '💡 Lernmodus aktiv: Unbegrenzt abspielen • Tempo einstellbar • Transkript sichtbar';
        }
        this.renderStudyTranscript();
      }

      const test = this.dataset[this.currentTestIndex];
      if (test && test[this.currentPart]) {
        this.updatePlayerControls(test[this.currentPart]);
      }
    }

    rewind5s() {
      this.stopAudio();
      this.playAudio();
    }

    renderStudyTranscript() {
      if (!this.dom.studyTranscriptContent) return;
      const test = this.dataset[this.currentTestIndex];
      if (!test) return;
      const partData = test[this.currentPart];
      if (!partData) return;

      const rawText = this.getAudioTargetText(partData);
      if (!rawText) {
        this.dom.studyTranscriptContent.innerHTML = '<span style="color:var(--hr-text-muted);">Kein Transkript verfügbar.</span>';
        return;
      }

      const sentences = rawText.match(/[^.!?]+[.!?]+/g) || [rawText];
      let html = '<div style="display:flex; flex-direction:column; gap:8px;">';
      sentences.forEach((sent) => {
        const clean = sent.trim();
        if (clean) {
          html += `
            <div class="hr-study-sentence" style="cursor:pointer; padding:8px 12px; border-radius:6px; background:rgba(255,255,255,0.04); border:1px solid var(--hr-border-card); transition:var(--hr-transition);" data-sent="${encodeURIComponent(clean)}" title="Klicken zum Anhören">
              <span style="color:#8b5cf6; margin-right:6px; font-weight:800;">▶</span> ${clean}
            </div>
          `;
        }
      });
      html += '</div>';

      this.dom.studyTranscriptContent.innerHTML = html;
      this.dom.studyTranscriptContent.querySelectorAll('.hr-study-sentence').forEach(el => {
        el.addEventListener('click', () => {
          const sentText = decodeURIComponent(el.getAttribute('data-sent') || '');
          this.speakSnippet(sentText);
        });
      });
    }

    speakSnippet(text) {
      if (!this.speechSynth || !text) return;
      this.speechSynth.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'de-DE';
      utter.rate = this.playbackRate;
      const voices = this.speechSynth.getVoices();
      const deVoice = voices.find(v => v.lang.startsWith('de') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('German')));
      if (deVoice) utter.voice = deVoice;
      this.isPlaying = true;
      if (this.dom.equalizer) this.dom.equalizer.classList.add('playing');
      utter.onend = () => {
        this.isPlaying = false;
        if (this.dom.equalizer) this.dom.equalizer.classList.remove('playing');
      };
      utter.onerror = () => {
        this.isPlaying = false;
        if (this.dom.equalizer) this.dom.equalizer.classList.remove('playing');
      };
      this.speechSynth.speak(utter);
    }

    renderLanguage() {
      const texts = I18N[this.lang] || I18N.en;
      if (typeof document !== 'undefined') {
        document.body.setAttribute('data-lang', this.lang);
        if (this.lang === 'ar') {
          document.documentElement.setAttribute('dir', 'rtl');
        } else {
          document.documentElement.setAttribute('dir', 'ltr');
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (texts[key]) el.textContent = texts[key];
        });

        document.querySelectorAll('.ls-lang-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-lang') === this.lang);
        });
      }

      this.renderTestSelector();
      this.renderPartTabs();
      this.renderCurrentView();
    }

    renderTestSelector() {
      if (!this.dom.testPills) return;
      this.dom.testPills.innerHTML = '';
      const texts = I18N[this.lang] || I18N.en;

      this.dataset.forEach((test, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `hr-test-btn ${this.currentTestIndex === idx ? 'active' : ''}`;
        const pillText = `${texts.testLabel || 'Test'} ${idx + 1}`;
        btn.innerHTML = `<span>🎯</span> <strong>${pillText}</strong>`;
        btn.title = (test.title && (test.title[this.lang] || test.title.de)) || pillText;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', this.currentTestIndex === idx ? 'true' : 'false');
        btn.addEventListener('click', () => this.selectTest(idx));
        this.dom.testPills.appendChild(btn);
      });
    }

    selectTest(idx) {
      if (idx === this.currentTestIndex && !this.isGraded) return;
      this.stopAudio();
      this.currentTestIndex = idx;
      this.currentPart = 'teil1';
      this.activeItemIndex = 0;
      this.userAnswers = {};
      this.isGraded = false;
      this.readingPauseDone = {};
      if (this.dom.scoreBanner) {
        this.dom.scoreBanner.style.display = 'none';
      }
      this.renderTestSelector();
      this.renderPartTabs();
      this.renderCurrentView();
    }

    setLanguage(newLang) {
      if (!['en', 'tr', 'ar', 'uk'].includes(newLang)) return;
      this.lang = newLang;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('deutschlernen_lang', newLang);
        localStorage.setItem('telc_lang', newLang);
      }
      this.renderLanguage();
    }

    renderPartTabs() {
      if (!this.dom.partTabs) return;
      this.dom.partTabs.innerHTML = '';
      const test = this.dataset[this.currentTestIndex];
      if (!test) return;

      const parts = [
        { key: 'teil1', label: 'Teil 1: Durchsagen (41–45 • 1x)' },
        { key: 'teil2', label: 'Teil 2: Interview (46–55 • 2x)' },
        { key: 'teil3', label: 'Teil 3: Telefon (56–60 • 1x)' }
      ];

      parts.forEach(p => {
        const btn = document.createElement('button');
        btn.className = `hr-part-btn ${this.currentPart === p.key ? 'active' : ''}`;
        btn.innerHTML = `<span>🎧</span> ${p.label}`;
        btn.addEventListener('click', () => this.loadPart(p.key));
        this.dom.partTabs.appendChild(btn);
      });
    }

    loadPart(partKey) {
      this.stopAudio();
      this.currentPart = partKey;
      this.activeItemIndex = 0;
      this.renderPartTabs();
      this.renderCurrentView();
      if (this.mode === 'study') {
        this.renderStudyTranscript();
      }
    }

    renderCurrentView() {
      const test = this.dataset[this.currentTestIndex];
      if (!test) return;
      const partData = test[this.currentPart];
      if (!partData) return;

      if (this.dom.testTitle) {
        const pName = (partData.partName && partData.partName[this.lang]) || partData.partName.de;
        this.dom.testTitle.textContent = `${test.title[this.lang] || test.title.de} — ${pName}`;
      }
      if (this.dom.partInstruction) {
        const deInstr = partData.instruction.de || '';
        const transInstr = (this.lang !== 'de' && partData.instruction[this.lang]) ? partData.instruction[this.lang] : '';
        this.dom.partInstruction.innerHTML = `
          <div class="hr-instruction-box">
            <div class="hr-instruction-main">${deInstr}</div>
            ${transInstr ? `<div class="hr-instruction-trans"><span class="hr-trans-badge">${this.lang.toUpperCase()}</span> ${transInstr}</div>` : ''}
          </div>
        `;
      }

      this.updatePlayerControls(partData);
      this.renderQuestions(partData);
      if (this.mode === 'study') {
        this.renderStudyTranscript();
      }
    }

    getAudioTargetText(partData) {
      if (this.currentPart === 'teil1') {
        const it = partData.items[this.activeItemIndex];
        return it ? it.audioText : '';
      } else if (this.currentPart === 'teil2') {
        return partData.audioText || '';
      } else if (this.currentPart === 'teil3') {
        const it = partData.items[this.activeItemIndex];
        return it ? it.audioText : '';
      }
      return '';
    }

    getAudioTargetKey() {
      const prefix = `test${this.currentTestIndex + 1}`;
      if (this.currentPart === 'teil2') {
        return `${prefix}_teil2`;
      }
      return `${prefix}_${this.currentPart}_item_${this.activeItemIndex}`;
    }

    getPartMaxPlays(partData) {
      if (this.mode === 'study') return 999;
      if (this.currentPart === 'teil2') return 2;
      return 1;
    }

    updatePlayerControls(partData) {
      const targetKey = this.getAudioTargetKey();
      const currentPlays = this.playCounts[targetKey] || 0;
      const maxPlays = this.getPartMaxPlays(partData);
      const isMaxReached = this.mode === 'exam' && currentPlays >= maxPlays;

      if (this.dom.playCountBadge) {
        this.dom.playCountBadge.textContent = this.mode === 'study' ? `${currentPlays}x (Unbegrenzt)` : `${currentPlays}x / Max ${maxPlays}x`;
      }

      if (this.dom.btnPlay) {
        this.dom.btnPlay.disabled = isMaxReached && !this.isPlaying;
        const texts = I18N[this.lang] || I18N.en;
        this.dom.btnPlay.innerHTML = this.isPlaying ? `<span>⏸</span> ${texts.btnPauseAudio}` : `<span>▶</span> ${texts.btnPlay}`;
      }
    }

    togglePlayAudio() {
      if (this.isPlaying) {
        this.pauseAudio();
      } else {
        this.playAudio();
      }
    }

    playAudio() {
      const test = this.dataset[this.currentTestIndex];
      const partData = test[this.currentPart];
      const targetKey = this.getAudioTargetKey();
      const currentPlays = this.playCounts[targetKey] || 0;
      const maxPlays = this.getPartMaxPlays(partData);

      if (this.mode === 'exam' && currentPlays >= maxPlays && !this.isPlaying) {
        return;
      }

      const textToSpeak = this.getAudioTargetText(partData);
      if (!textToSpeak) return;

      if (this.mode === 'exam' && currentPlays === 0 && !this.readingPauseDone[targetKey]) {
        this.runTimedReadingPause(targetKey, () => {
          this.executeSpeech(textToSpeak, partData, targetKey);
        });
        return;
      }

      this.executeSpeech(textToSpeak, partData, targetKey);
    }

    runTimedReadingPause(targetKey, callback) {
      if (this.dom.readingPauseAlert && this.dom.pauseCountdown) {
        this.dom.readingPauseAlert.style.display = 'block';
        let remaining = 10;
        this.dom.pauseCountdown.textContent = remaining;
        if (this.pauseCountdownInterval) clearInterval(this.pauseCountdownInterval);
        this.pauseCountdownInterval = setInterval(() => {
          remaining--;
          if (this.dom.pauseCountdown) this.dom.pauseCountdown.textContent = remaining;
          if (remaining <= 0) {
            clearInterval(this.pauseCountdownInterval);
            this.pauseCountdownInterval = null;
            this.readingPauseDone[targetKey] = true;
            if (this.dom.readingPauseAlert) this.dom.readingPauseAlert.style.display = 'none';
            callback();
          }
        }, 1000);
      } else {
        this.readingPauseDone[targetKey] = true;
        callback();
      }
    }

    executeSpeech(textToSpeak, partData, targetKey) {
      if (this.speechSynth) {
        this.speechSynth.cancel();
        const utter = new SpeechSynthesisUtterance(textToSpeak);
        utter.lang = 'de-DE';
        utter.rate = this.playbackRate;

        // Try to pick German voice
        const voices = this.speechSynth.getVoices();
        const deVoice = voices.find(v => v.lang.startsWith('de') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('German')));
        if (deVoice) utter.voice = deVoice;

        utter.onstart = () => {
          this.isPlaying = true;
          this.playCounts[targetKey] = (this.playCounts[targetKey] || 0) + 1;
          if (this.dom.equalizer) this.dom.equalizer.classList.add('playing');
          this.updatePlayerControls(partData);
        };

        utter.onend = () => {
          this.isPlaying = false;
          if (this.dom.equalizer) this.dom.equalizer.classList.remove('playing');
          this.updatePlayerControls(partData);
        };

        utter.onerror = () => {
          this.isPlaying = false;
          if (this.dom.equalizer) this.dom.equalizer.classList.remove('playing');
          this.updatePlayerControls(partData);
        };

        this.activeUtterance = utter;
        this.speechSynth.speak(utter);
      }
    }

    pauseAudio() {
      if (this.speechSynth && this.isPlaying) {
        this.speechSynth.pause();
        this.isPlaying = false;
        if (this.dom.equalizer) this.dom.equalizer.classList.remove('playing');
        const test = this.dataset[this.currentTestIndex];
        this.updatePlayerControls(test[this.currentPart]);
      }
    }

    stopAudio() {
      if (this.speechSynth) {
        this.speechSynth.cancel();
      }
      this.isPlaying = false;
      if (this.dom.equalizer) this.dom.equalizer.classList.remove('playing');
      const test = this.dataset[this.currentTestIndex];
      if (test && test[this.currentPart]) {
        this.updatePlayerControls(test[this.currentPart]);
      }
    }

    renderQuestions(partData) {
      if (!this.dom.questionsContainer) return;
      this.dom.questionsContainer.innerHTML = '';
      const texts = I18N[this.lang] || I18N.en;

      // Item selection bar for Teil 1 & Teil 3
      if (this.currentPart !== 'teil2' && partData.items.length > 1) {
        const itemBar = document.createElement('div');
        itemBar.style.cssText = 'display:flex; gap:6px; margin-bottom:12px; flex-wrap:wrap; align-items:center;';

        partData.items.forEach((item, idx) => {
          const btn = document.createElement('button');
          const isSel = idx === this.activeItemIndex;
          let extraClass = '';
          let indicator = '';

          if (this.isGraded) {
            const chosen = this.userAnswers[item.id];
            const isCor = chosen === item.correct;
            extraClass = isCor ? 'has-correct' : 'has-wrong';
            indicator = isCor ? ' ✓' : ' ✗';
          }

          btn.className = `hr-opt-btn ${isSel ? 'selected' : ''} ${extraClass}`;
          btn.innerHTML = `<strong>Aufgabe ${item.id}</strong>${indicator}`;
          btn.addEventListener('click', () => {
            this.stopAudio();
            this.activeItemIndex = idx;
            this.updatePlayerControls(partData);
            this.renderQuestions(partData);
          });
          itemBar.appendChild(btn);
        });

        this.dom.questionsContainer.appendChild(itemBar);
      }

      // Quick toolbar: Toggle all translations & transcripts
      const toolbarDiv = document.createElement('div');
      toolbarDiv.style.cssText = 'display:flex; justify-content:flex-end; gap:8px; margin-bottom:12px; flex-wrap:wrap;';
      const canShowTranscripts = (this.isGraded || this.mode === 'study');

      toolbarDiv.innerHTML = `
        <button type="button" class="hr-btn-trans-toggle" id="btn-toggle-all-trans">
          🌐 <span>${this.allTranslationsVisible ? (texts.btnToggleAllTrans + ' ✕') : texts.btnToggleAllTrans}</span>
        </button>
        ${canShowTranscripts ? `
          <button type="button" class="hr-btn-transcript-toggle" id="btn-toggle-all-transcripts">
            📜 <span>${texts.btnToggleAllTranscripts}</span>
          </button>
        ` : ''}
      `;
      this.dom.questionsContainer.appendChild(toolbarDiv);

      const btnAllTrans = toolbarDiv.querySelector('#btn-toggle-all-trans');
      if (btnAllTrans) {
        btnAllTrans.addEventListener('click', () => {
          this.allTranslationsVisible = !this.allTranslationsVisible;
          partData.items.forEach(it => {
            this.showTranslations[it.id] = this.allTranslationsVisible;
          });
          this.renderQuestions(partData);
        });
      }

      const btnAllTranscripts = toolbarDiv.querySelector('#btn-toggle-all-transcripts');
      if (btnAllTranscripts) {
        btnAllTranscripts.addEventListener('click', () => {
          const anyHidden = partData.items.some(it => !this.showTranscripts[it.id]);
          partData.items.forEach(it => {
            this.showTranscripts[it.id] = anyHidden;
          });
          this.renderQuestions(partData);
        });
      }

      // Render Item Cards
      const itemsToRender = (this.currentPart === 'teil2') ? partData.items : [partData.items[this.activeItemIndex]];

      itemsToRender.forEach(item => {
        if (!item) return;
        const card = document.createElement('div');
        card.className = 'hr-item-card';

        const chosen = this.userAnswers[item.id];
        const isCorrect = chosen === item.correct;

        // German-first statement or question, with optional translation
        let deQuestionOrStatement = '';
        let transQuestionOrStatement = '';
        let optionsHTML = '';

        if (this.currentPart === 'teil3') {
          // A / B / C options
          deQuestionOrStatement = (item.question && item.question.de) || '';
          transQuestionOrStatement = (this.lang !== 'de' && item.question && item.question[this.lang]) ? item.question[this.lang] : '';

          optionsHTML = `
            <div class="hr-statement-de">${deQuestionOrStatement}</div>
            ${transQuestionOrStatement ? `
              <div class="hr-statement-trans hr-trans-${item.id}" style="display:${this.showTranslations[item.id] ? 'block' : 'none'};">
                <span class="hr-trans-badge">${this.lang.toUpperCase()}</span> ${transQuestionOrStatement}
              </div>
            ` : ''}
            <div style="display:flex; flex-direction:column; gap:8px;">
          `;

          item.options.forEach(opt => {
            const isSel = chosen === opt.key;
            let statusClass = '';
            if (this.isGraded) {
              if (opt.key === item.correct) statusClass = 'opt-correct';
              else if (isSel && !isCorrect) statusClass = 'opt-wrong';
            }
            optionsHTML += `
              <button type="button" class="hr-opt-btn ${isSel ? 'selected' : ''} ${statusClass}" data-key="${opt.key}" style="text-align:left; min-height:44px;">
                <strong>${opt.key.toUpperCase()})</strong> ${opt.text}
              </button>
            `;
          });
          optionsHTML += `</div>`;
        } else {
          // Teil 1 & Teil 2: Richtig / Falsch buttons
          deQuestionOrStatement = item.statement.de;
          transQuestionOrStatement = (this.lang !== 'de' && item.statement && item.statement[this.lang]) ? item.statement[this.lang] : '';

          optionsHTML = `
            <div class="hr-statement-de">${deQuestionOrStatement}</div>
            ${transQuestionOrStatement ? `
              <div class="hr-statement-trans hr-trans-${item.id}" style="display:${this.showTranslations[item.id] ? 'block' : 'none'};">
                <span class="hr-trans-badge">${this.lang.toUpperCase()}</span> ${transQuestionOrStatement}
              </div>
            ` : ''}
            <div class="hr-options-group">
          `;

          ['richtig', 'falsch'].forEach(choice => {
            const isSel = chosen === choice;
            let statusClass = '';
            if (this.isGraded) {
              if (choice === item.correct) statusClass = 'opt-correct';
              else if (isSel && !isCorrect) statusClass = 'opt-wrong';
            }
            const labelMain = choice === 'richtig' ? 'Richtig' : 'Falsch';
            const subLabel = this.lang !== 'de' ? (choice === 'richtig' ? (texts.rightChoice.replace(/^Richtig\s*/, '')) : (texts.wrongChoice.replace(/^Falsch\s*/, ''))) : '';
            optionsHTML += `
              <button type="button" class="hr-opt-btn ${isSel ? 'selected' : ''} ${statusClass}" data-key="${choice}" style="flex:1; min-height:44px;">
                <span>${labelMain}</span>
                ${subLabel ? `<small style="display:inline-block; margin-left:4px; opacity:0.8; font-weight:normal;">${subLabel}</small>` : ''}
              </button>
            `;
          });
          optionsHTML += `</div>`;
        }

        // Transcript and explanation (revealed in study mode or after grading)
        let transcriptHTML = '';
        const shouldShowTranscript = (this.isGraded && this.showTranscripts[item.id] !== false) || (this.mode === 'study' && this.showTranscripts[item.id]);

        if (shouldShowTranscript) {
          const ruleText = (item.explanation && item.explanation[this.lang]) || (item.explanation && item.explanation.de) || '';
          const fullAudio = item.audioText || partData.audioText || '';
          const evidenceText = item.evidence || '';

          let highlightedAudio = fullAudio;
          if (evidenceText && fullAudio.includes(evidenceText)) {
            highlightedAudio = fullAudio.replace(evidenceText, `<mark class="hr-evidence-highlight" data-question-id="${item.id}">${evidenceText}</mark>`);
          } else if (evidenceText) {
            highlightedAudio = `<mark class="hr-evidence-highlight" data-question-id="${item.id}">[Beweis: ${evidenceText}]</mark> ` + fullAudio;
          }

          transcriptHTML = `
            <div class="hr-transcript-box" data-question-id="${item.id}">
              <div style="font-weight:800; color:var(--hr-text-gold); margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                <span>📜 ${texts.tabTranscript} & ${texts.evidenceLabel}</span>
                <div style="display:flex; gap:6px;">
                  <button type="button" class="hr-btn-evidence-play" data-speak="${encodeURIComponent(evidenceText || fullAudio)}" style="padding:4px 10px; font-size:11.5px; background:rgba(251,191,36,0.2); border:1px solid var(--hr-accent-warning); color:var(--hr-text-gold); border-radius:4px; cursor:pointer; font-weight:700;">
                    🔊 ${texts.listenEvidenceBtn || 'Beweissatz anhören'}
                  </button>
                  <button type="button" class="hr-btn-full-audio-play" data-speak="${encodeURIComponent(fullAudio)}" style="padding:4px 10px; font-size:11.5px; background:rgba(139,92,246,0.2); border:1px solid rgba(139,92,246,0.4); color:var(--hr-accent-purple); border-radius:4px; cursor:pointer; font-weight:700;">
                    ▶ ${texts.btnPlay}
                  </button>
                </div>
              </div>
              <div style="margin-bottom:8px; line-height:1.65; font-size:13.5px; color:var(--hr-text-main);">
                "${highlightedAudio}"
              </div>
              ${this.isGraded ? `
                <div style="font-weight:700; margin-top:8px; color:${isCorrect ? 'var(--hr-accent-success)' : 'var(--hr-accent-danger)'};">
                  ${isCorrect ? '✅ ' + texts.correctLabel : '❌ ' + texts.correctLabel + ': ' + item.correct.toUpperCase()}
                </div>
                ${ruleText ? `<div style="margin-top:6px; font-size:12.5px; color:var(--hr-text-muted); line-height:1.5;">💡 ${ruleText}</div>` : ''}
              ` : ''}
            </div>
          `;
        }

        const showTranscriptBtn = (this.isGraded || this.mode === 'study');

        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
            <div style="font-size:13px; font-weight:800; color:var(--hr-text-gold); display:flex; align-items:center; gap:8px;">
              <span>Aufgabe ${item.id}</span>
              <span style="font-size:11px; background:rgba(251,191,36,0.15); padding:2px 6px; border-radius:4px;">3.75 Pkt</span>
              ${this.isGraded ? (isCorrect ? '<span style="color:var(--hr-accent-success); font-weight:bold;">✓ Richtig</span>' : '<span style="color:var(--hr-accent-danger); font-weight:bold;">✗ Falsch</span>') : ''}
            </div>
            <div style="display:flex; gap:6px; align-items:center;">
              ${transQuestionOrStatement ? `
                <button type="button" class="hr-btn-trans-toggle btn-card-trans" data-qid="${item.id}" title="${texts.btnTransToggle}">
                  🌐 <span>${this.showTranslations[item.id] ? (this.lang.toUpperCase() + ' Gizle') : (this.lang.toUpperCase() + ' Çeviri')}</span>
                </button>
              ` : ''}
              ${showTranscriptBtn ? `
                <button type="button" class="hr-btn-transcript-toggle btn-card-transcript" data-qid="${item.id}" title="${texts.btnTranscriptToggle}">
                  📜 <span>${shouldShowTranscript ? (texts.tabTranscript + ' ✕') : texts.tabTranscript}</span>
                </button>
              ` : ''}
            </div>
          </div>
          ${optionsHTML}
          ${transcriptHTML}
        `;

        // Bind clicks on option buttons
        card.querySelectorAll('.hr-opt-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const k = btn.getAttribute('data-key');
            this.userAnswers[item.id] = k;
            this.renderQuestions(partData);
          });
        });

        // Bind translation toggle button
        const transBtn = card.querySelector('.btn-card-trans');
        if (transBtn) {
          transBtn.addEventListener('click', () => {
            this.showTranslations[item.id] = !this.showTranslations[item.id];
            this.renderQuestions(partData);
          });
        }

        // Bind transcript toggle button
        const transcriptBtn = card.querySelector('.btn-card-transcript');
        if (transcriptBtn) {
          transcriptBtn.addEventListener('click', () => {
            if (this.isGraded) {
              this.showTranscripts[item.id] = !(this.showTranscripts[item.id] !== false);
            } else {
              this.showTranscripts[item.id] = !this.showTranscripts[item.id];
            }
            this.renderQuestions(partData);
          });
        }

        // Bind evidence speech click
        card.querySelectorAll('.hr-btn-evidence-play').forEach(btn => {
          btn.addEventListener('click', () => {
            const speakText = decodeURIComponent(btn.getAttribute('data-speak') || '');
            this.speakSnippet(speakText);
          });
        });

        // Bind full audio speech click
        card.querySelectorAll('.hr-btn-full-audio-play').forEach(btn => {
          btn.addEventListener('click', () => {
            const speakText = decodeURIComponent(btn.getAttribute('data-speak') || '');
            this.speakSnippet(speakText);
          });
        });

        this.dom.questionsContainer.appendChild(card);
      });

      // Actions footer: Grade & Reset buttons
      const footerDiv = document.createElement('div');
      footerDiv.style.cssText = 'display:flex; gap:12px; margin-top:24px; flex-wrap:wrap;';
      footerDiv.innerHTML = `
        <button type="button" class="hr-btn-play" id="btn-grade-exam" style="flex:2;">
          ${texts.btnGradeExam}
        </button>
        <button type="button" class="hr-opt-btn" id="btn-reset-exam" style="flex:1;">
          ${texts.btnResetExam}
        </button>
      `;

      footerDiv.querySelector('#btn-grade-exam').addEventListener('click', () => this.gradeExam());
      footerDiv.querySelector('#btn-reset-exam').addEventListener('click', () => this.resetExam());

      this.dom.questionsContainer.appendChild(footerDiv);

      if (this.isGraded) {
        this.renderScoreBanner();
      }
    }

    gradeExam() {
      this.isGraded = true;
      const test = this.dataset[this.currentTestIndex];

      // Auto-open transcripts for all items so learner can study answers
      ['teil1', 'teil2', 'teil3'].forEach(pKey => {
        const part = test[pKey];
        if (part && part.items) {
          part.items.forEach(it => {
            this.showTranscripts[it.id] = true;
          });
        }
      });

      // Route missed questions to Fehlerheft
      if (typeof StorageEngine !== 'undefined') {
        ['teil1', 'teil2', 'teil3'].forEach(pKey => {
          const part = test[pKey];
          if (part && part.items) {
            part.items.forEach(it => {
              const chosen = this.userAnswers[it.id];
              if (chosen !== it.correct) {
                const stmtText = (it.statement && (it.statement[this.lang] || it.statement.de)) || (it.question && (it.question[this.lang] || it.question.de)) || it.title || `Aufgabe ${it.id}`;
                StorageEngine.addFehlerItem({
                  id: `hoeren_q_${it.id}`,
                  type: 'exam_question',
                  source: `hoeren.html (${pKey.toUpperCase()})`,
                  title: `Hören Aufgabe #${it.id}`,
                  detail: stmtText,
                  expected: String(it.correct).toUpperCase(),
                  actual: (chosen || 'keine Antwort').toUpperCase()
                });
              }
            });
          }
        });
      }

      this.renderQuestions(test[this.currentPart]);
      this.renderScoreBanner();

      if (this.dom.scoreBanner) {
        this.dom.scoreBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    renderScoreBanner() {
      if (!this.dom.scoreBanner) return;
      const test = this.dataset[this.currentTestIndex];
      const texts = I18N[this.lang] || I18N.en;

      // Count across all 20 questions
      let totalCorrect = 0;
      let totalQuestions = 0;

      ['teil1', 'teil2', 'teil3'].forEach(pKey => {
        const part = test[pKey];
        if (part && part.items) {
          part.items.forEach(it => {
            totalQuestions++;
            if (this.userAnswers[it.id] === it.correct) {
              totalCorrect++;
            }
          });
        }
      });

      // 75 points total, 3.75 pts per item. Passing bar: 60% = 45 points
      const points = Math.round(totalCorrect * 3.75 * 10) / 10;
      const isPassed = points >= 45.0;

      try {
        localStorage.setItem('telc_hoeren_score', points);
        if (typeof StorageEngine !== 'undefined') {
          StorageEngine.setExamScore('hoeren', points);
          StorageEngine.addXP(totalCorrect * 5);
        }
      } catch (e) {
        console.warn('Could not save telc_hoeren_score:', e);
      }

      this.dom.scoreBanner.style.display = 'block';
      this.dom.scoreBanner.style.marginBottom = '20px';
      this.dom.scoreBanner.style.padding = '16px 20px';
      this.dom.scoreBanner.style.borderRadius = 'var(--hr-radius-md)';
      this.dom.scoreBanner.style.border = `1px solid ${isPassed ? 'var(--hr-accent-success)' : 'var(--hr-accent-danger)'}`;
      this.dom.scoreBanner.style.background = isPassed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)';

      this.dom.scoreBanner.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-weight:900; font-size:16px; color:${isPassed ? 'var(--hr-accent-success)' : 'var(--hr-accent-danger)'};">
            ${isPassed ? '🏆 ' + texts.scorePassed : '⚠️ ' + texts.scoreFail}
          </span>
          <span style="font-weight:900; font-size:20px;">${points} / 75.0 Pkt</span>
        </div>
        <div style="font-size:13px; color:var(--hr-text-muted);">
          ${totalCorrect} von ${totalQuestions} Aufgaben korrekt beantwortet • telc B1 Bestehensgrenze: 45.0 / 75.0 Punkte (60%)
        </div>
      `;
    }

    resetExam() {
      this.userAnswers = {};
      this.isGraded = false;
      this.playCounts = {};
      this.stopAudio();
      if (this.dom.scoreBanner) {
        this.dom.scoreBanner.style.display = 'none';
      }
      const test = this.dataset[this.currentTestIndex];
      this.renderCurrentView();
    }

    toggleTimer() {
      if (this.timerRunning) {
        clearInterval(this.timerInterval);
        this.timerRunning = false;
        if (this.dom.btnTimerToggle) this.dom.btnTimerToggle.textContent = 'Start';
      } else {
        this.timerRunning = true;
        if (this.dom.btnTimerToggle) this.dom.btnTimerToggle.textContent = 'Pause';
        this.timerInterval = setInterval(() => {
          if (this.timerSeconds > 0) {
            this.timerSeconds--;
            this.updateTimerDisplay();
          } else {
            clearInterval(this.timerInterval);
            this.timerRunning = false;
            this.gradeExam();
          }
        }, 1000);
      }
    }

    resetTimer() {
      clearInterval(this.timerInterval);
      this.timerRunning = false;
      this.timerSeconds = 30 * 60;
      this.updateTimerDisplay();
      if (this.dom.btnTimerToggle) this.dom.btnTimerToggle.textContent = 'Start';
    }

    updateTimerDisplay() {
      if (!this.dom.timerDisplay) return;
      const mins = Math.floor(this.timerSeconds / 60);
      const secs = this.timerSeconds % 60;
      this.dom.timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
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

  if (typeof window !== 'undefined') {
    window.HoerenApp = HoerenApp;
    if (typeof document !== 'undefined' && document.addEventListener) {
      document.addEventListener('DOMContentLoaded', () => {
        window.HoerenAppInstance = new HoerenApp();
      });
    }
    window.setHoerenLang = function(lang) {
      if (window.HoerenAppInstance) {
        window.HoerenAppInstance.setLanguage(lang);
      }
    };
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { HoerenApp };
  }
})();
