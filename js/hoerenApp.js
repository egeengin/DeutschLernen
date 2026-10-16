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
      wrongChoice: "Falsch (False)"
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
      wrongChoice: "Falsch (Yanlış)"
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
      wrongChoice: "Falsch (خاطئ)"
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
      wrongChoice: "Falsch (Неправильно)"
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
      this.renderPartTabs();
      this.loadPart('teil1');
      this.updateTimerDisplay();
    }

    bindElements() {
      this.dom = {
        partTabs: document.getElementById('hr-part-tabs'),
        testTitle: document.getElementById('hr-test-title'),
        partInstruction: document.getElementById('hr-part-instruction'),
        playerContainer: document.getElementById('hr-player-container'),
        btnPlay: document.getElementById('btn-play-audio'),
        btnStop: document.getElementById('btn-stop-audio'),
        speedSelect: document.getElementById('hr-speed-select'),
        playCountBadge: document.getElementById('hr-play-count-badge'),
        equalizer: document.getElementById('hr-equalizer'),
        questionsContainer: document.getElementById('hr-questions-container'),
        scoreBanner: document.getElementById('hr-score-banner'),
        timerDisplay: document.getElementById('hr-timer-display'),
        btnTimerToggle: document.getElementById('btn-timer-toggle'),
        btnTimerReset: document.getElementById('btn-timer-reset'),
        themeToggleBtn: document.getElementById('btn-theme-toggle')
      };
    }

    bindEvents() {
      if (this.dom.btnPlay) {
        this.dom.btnPlay.addEventListener('click', () => this.togglePlayAudio());
      }
      if (this.dom.btnStop) {
        this.dom.btnStop.addEventListener('click', () => this.stopAudio());
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
        { key: 'teil3', label: 'Teil 3: Telefon (56–60 • 2x)' }
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
        this.dom.partInstruction.textContent = (partData.instruction && partData.instruction[this.lang]) || partData.instruction.de;
      }

      this.updatePlayerControls(partData);
      this.renderQuestions(partData);
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
      if (this.currentPart === 'teil2') {
        return `test1_teil2`;
      }
      return `test1_${this.currentPart}_item_${this.activeItemIndex}`;
    }

    updatePlayerControls(partData) {
      const targetKey = this.getAudioTargetKey();
      const currentPlays = this.playCounts[targetKey] || 0;
      const maxPlays = partData.maxPlays || (this.currentPart === 'teil1' ? 1 : 2);
      const isMaxReached = currentPlays >= maxPlays;

      if (this.dom.playCountBadge) {
        this.dom.playCountBadge.textContent = `${currentPlays}x / Max ${maxPlays}x`;
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
      const maxPlays = partData.maxPlays || (this.currentPart === 'teil1' ? 1 : 2);

      if (currentPlays >= maxPlays && !this.isPlaying) {
        return;
      }

      const textToSpeak = this.getAudioTargetText(partData);
      if (!textToSpeak) return;

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
        itemBar.style.cssText = 'display:flex; gap:6px; margin-bottom:16px; flex-wrap:wrap;';

        partData.items.forEach((item, idx) => {
          const btn = document.createElement('button');
          btn.className = `hr-opt-btn ${idx === this.activeItemIndex ? 'selected' : ''}`;
          btn.innerHTML = `<strong>Aufgabe ${item.id}</strong>`;
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

      // Render Item Cards
      const itemsToRender = (this.currentPart === 'teil2') ? partData.items : [partData.items[this.activeItemIndex]];

      itemsToRender.forEach(item => {
        if (!item) return;
        const card = document.createElement('div');
        card.className = 'hr-item-card';

        const chosen = this.userAnswers[item.id];
        const isCorrect = chosen === item.correct;

        let optionsHTML = '';

        if (this.currentPart === 'teil3') {
          // A / B / C options
          const qText = (item.question && item.question[this.lang]) || item.question.de;
          optionsHTML = `<div style="font-weight:700; margin-bottom:10px; font-size:14px;">${qText}</div>`;
          optionsHTML += `<div style="display:flex; flex-direction:column; gap:8px;">`;

          item.options.forEach(opt => {
            const isSel = chosen === opt.key;
            let statusClass = '';
            if (this.isGraded) {
              if (opt.key === item.correct) statusClass = 'opt-correct';
              else if (isSel && !isCorrect) statusClass = 'opt-wrong';
            }
            optionsHTML += `
              <button type="button" class="hr-opt-btn ${isSel ? 'selected' : ''} ${statusClass}" data-key="${opt.key}" style="text-align:left;">
                <strong>${opt.key.toUpperCase()})</strong> ${opt.text}
              </button>
            `;
          });
          optionsHTML += `</div>`;
        } else {
          // Richtig / Falsch buttons
          const stmtText = (item.statement && item.statement[this.lang]) || item.statement.de;
          optionsHTML = `<div style="font-weight:700; margin-bottom:10px; font-size:14px;">${stmtText}</div>`;
          optionsHTML += `<div class="hr-options-group">`;

          ['richtig', 'falsch'].forEach(choice => {
            const isSel = chosen === choice;
            let statusClass = '';
            if (this.isGraded) {
              if (choice === item.correct) statusClass = 'opt-correct';
              else if (isSel && !isCorrect) statusClass = 'opt-wrong';
            }
            const label = choice === 'richtig' ? texts.rightChoice : texts.wrongChoice;
            optionsHTML += `
              <button type="button" class="hr-opt-btn ${isSel ? 'selected' : ''} ${statusClass}" data-key="${choice}">
                ${label}
              </button>
            `;
          });
          optionsHTML += `</div>`;
        }

        // Transcript and explanation (revealed after grading)
        let transcriptHTML = '';
        if (this.isGraded) {
          const ruleText = (item.explanation && item.explanation[this.lang]) || (item.explanation && item.explanation.de) || '';
          transcriptHTML = `
            <div class="hr-transcript-box">
              <div style="font-weight:800; color:var(--hr-text-gold); margin-bottom:6px;">
                📜 ${texts.tabTranscript} & ${texts.evidenceLabel}
              </div>
              <div style="margin-bottom:8px; font-style:italic;">
                "${item.audioText || partData.audioText || ''}"
              </div>
              <div style="font-weight:700; color:${isCorrect ? 'var(--hr-accent-success)' : 'var(--hr-accent-danger)'};">
                ${isCorrect ? '✅ ' + texts.correctLabel : '❌ ' + texts.correctLabel + ': ' + item.correct.toUpperCase()}
              </div>
              <div style="margin-top:6px; font-size:12.5px;">${ruleText}</div>
            </div>
          `;
        }

        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:12.5px; font-weight:800; color:var(--hr-text-gold);">
            <span>Aufgabe ${item.id}</span>
            <span>3.75 Pkt</span>
          </div>
          ${optionsHTML}
          ${transcriptHTML}
        `;

        // Bind clicks
        card.querySelectorAll('.hr-opt-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const k = btn.getAttribute('data-key');
            this.userAnswers[item.id] = k;
            this.renderQuestions(partData);
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
