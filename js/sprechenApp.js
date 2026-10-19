/**
 * DEUTSCHLERNEN - SPRECHEN STUDIO & AUDIO EXAM CONTROLLER
 * Full Web Audio API, MediaRecorder, SpeechRecognition, VU Visualizer & History
 */

(function () {
  'use strict';

  // State Management
  const state = {
    currentPart: 'teil3', // 'teil1', 'teil2', 'teil3', 'freies_sprechen'
    currentTopicIndex: 0,
    activeTopic: null,
    speechLang: 'de-DE',
    isRecording: false,
    audioStream: null,
    audioContext: null,
    audioSource: null,
    audioAnalyser: null,
    animFrame: null,
    mediaRecorder: null,
    recordedChunks: [],
    recordedBlob: null,
    recordedAudioUrl: null,
    recognition: null,
    restartTimer: null,
    durationInterval: null,
    startTime: 0,
    baseTranscript: '',
    hasDetectedSound: false,
    silenceCounter: 0,
    selectedDeviceId: '',
    examHistory: [],
    activeView: 'task',
    modelLang: 'tr',
    isSpeakingTTS: false
  };

  // DOM Elements cache
  let dom = {};

  function initDomElements() {
    dom = {
      // Nav & Controls
      partTabs: document.querySelectorAll('.part-tab-btn'),
      topicSelect: document.getElementById('topic-select'),
      topicTitle: document.getElementById('topic-title'),
      topicDesc: document.getElementById('topic-desc'),
      leitpunkteContainer: document.getElementById('leitpunkte-list'),
      promptCard: document.getElementById('speaking-prompt-card'),

      // Subview pills & panels
      pills: document.querySelectorAll('.sp-view-pill'),
      panelTask: document.getElementById('view-task-panel'),
      panelModel: document.getElementById('view-model-panel'),
      panelPhrases: document.getElementById('view-phrases-panel'),
      pillPartner: document.getElementById('pill-view-partner'),
      panelPartner: document.getElementById('view-partner-panel'),
      simTimer: document.getElementById('partner-sim-timer'),
      btnRestartSim: document.getElementById('btn-restart-sim'),
      simTurnLabel: document.getElementById('sim-turn-label'),
      simPartnerText: document.getElementById('sim-partner-text'),
      btnPartnerSpeak: document.getElementById('btn-partner-speak'),
      simOptionsGrid: document.getElementById('sim-options-grid'),
      simCheckProp: document.getElementById('sim-check-prop'),
      simCheckDisagree: document.getElementById('sim-check-disagree'),
      simCheckAgree: document.getElementById('sim-check-agree'),

      // Model Answer Controls
      btnTtsPlay: document.getElementById('btn-model-tts-play'),
      btnTtsStop: document.getElementById('btn-model-tts-stop'),
      ttsLabel: document.getElementById('model-tts-label'),
      ttsIcon: document.getElementById('model-tts-icon'),
      modelAnswerDe: document.getElementById('model-answer-de'),
      modelAnswerTrans: document.getElementById('model-answer-trans'),
      btnCopyModel: document.getElementById('btn-copy-model-text'),
      modelLangBtns: document.querySelectorAll('.model-lang-btn'),

      // Phrases & Vocab containers
      chipsContainer: document.getElementById('topic-redemittel-chips'),
      vocabContainer: document.getElementById('topic-vocab-cards'),

      // Recording & Controls
      btnToggleRecord: document.getElementById('btn-toggle-record'),
      recordBtnIcon: document.getElementById('record-btn-icon'),
      recordBtnText: document.getElementById('record-btn-text'),
      recTimer: document.getElementById('recording-timer'),
      recStatusBadge: document.getElementById('recording-status-badge'),
      waveVisualizer: document.getElementById('audio-wave-visualizer'),
      btnLangDe: document.getElementById('btn-lang-de'),
      btnLangTr: document.getElementById('btn-lang-tr'),

      // Diagnostics & Hardware
      btnToggleDiag: document.getElementById('btn-toggle-diag'),
      diagPanel: document.getElementById('mic-diag-panel'),
      diagSpeechStatus: document.getElementById('diag-speech-status'),
      diagPermStatus: document.getElementById('diag-perm-status'),
      diagDeviceName: document.getElementById('diag-device-name'),
      diagDeviceSelect: document.getElementById('diag-device-select'),
      diagVuFill: document.getElementById('diag-vu-fill'),
      diagVuLabel: document.getElementById('diag-vu-label'),

      // Transcript & Playback
      transcriptInput: document.getElementById('spoken-transcript-input'),
      btnClearTranscript: document.getElementById('btn-clear-transcript'),
      playbackCard: document.getElementById('audio-playback-card'),
      audioPlayback: document.getElementById('audio-playback-elem'),
      btnDownloadAudio: document.getElementById('btn-download-audio'),
      btnEvaluate: document.getElementById('btn-evaluate-speech'),

      // Evaluation & Results
      evalCard: document.getElementById('evaluation-result-card'),
      scoreTotal: document.getElementById('score-total-val'),
      scoreBadge: document.getElementById('eval-pass-badge'),
      scoreAufgabe: document.getElementById('score-aufgabe'),
      scoreStruktur: document.getElementById('score-struktur'),
      scoreWortschatz: document.getElementById('score-wortschatz'),
      scoreFluss: document.getElementById('score-fluss'),
      evalVerdict: document.getElementById('eval-verdict-text'),
      tagsCovered: document.getElementById('eval-covered-tags'),
      tagsMissed: document.getElementById('eval-missed-tags'),
      tagsRedemittel: document.getElementById('eval-redemittel-tags'),

      // History
      historyList: document.getElementById('exam-history-list'),
      btnClearHistory: document.getElementById('btn-clear-history')
    };
  }

  // Load Saved History from localStorage
  function loadHistory() {
    try {
      const saved = localStorage.getItem('deutschlernen_speaking_history');
      if (saved) {
        state.examHistory = JSON.parse(saved);
      }
    } catch (e) {
      state.examHistory = [];
    }
    renderHistory();
  }

  function saveHistoryRecord(record) {
    state.examHistory.unshift(record);
    if (state.examHistory.length > 25) {
      state.examHistory.pop();
    }
    try {
      localStorage.setItem('deutschlernen_speaking_history', JSON.stringify(state.examHistory));
    } catch (e) {}
    renderHistory();
  }

  function renderHistory() {
    if (!dom.historyList) return;
    if (state.examHistory.length === 0) {
      dom.historyList.innerHTML = `
        <div class="empty-history-hint">
          <p>🎙️ Noch keine Audio-Aufnahmen vorhanden. Wählen Sie ein Prüfungsthema und starten Sie Ihre erste mündliche Simulation!</p>
          <small>(Henüz ses kaydı bulunmuyor. Bir sınav konusu seçip ilk sözlü simülasyonunuza başlayın!)</small>
        </div>
      `;
      return;
    }

    dom.historyList.innerHTML = state.examHistory.map((item, idx) => {
      const isPass = (item.totalScore >= 60);
      const dateStr = new Date(item.timestamp).toLocaleString();
      return `
        <div class="history-card ${isPass ? 'passed' : 'failed'}">
          <div class="history-head">
            <div class="history-title-group">
              <span class="history-badge ${isPass ? 'pass' : 'fail'}">${isPass ? '✓ BESTANDEN' : '✗ WIEDERHOLEN'} (${item.totalScore}/100)</span>
              <h4 class="history-title">${escapeHtml(item.topicTitle)}</h4>
            </div>
            <span class="history-date">${dateStr} • ⏱️ ${item.duration}</span>
          </div>
          <div class="history-body">
            <p class="history-snippet">"<em>${escapeHtml(item.transcriptSnippet)}</em>"</p>
            <div class="history-stats-row">
              <span><strong>Aufgabe:</strong> ${item.scores.aufgabe}/25</span>
              <span><strong>Redemittel:</strong> ${item.scores.struktur}/25</span>
              <span><strong>Wortschatz:</strong> ${item.scores.wortschatz}/25</span>
              <span><strong>Wörter:</strong> ${item.wordCount}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Set Active Speaking Topic
  function loadSpeakingTopic(partKey, topicIndex = 0) {
    state.currentPart = partKey;
    state.currentTopicIndex = topicIndex;

    const catalog = window.SPEAKING_EXAM_TOPICS || {};
    const partTopics = catalog[partKey] || [];
    state.activeTopic = partTopics[topicIndex] || partTopics[0];

    if (!state.activeTopic) return;

    // Update Topic Selector Options
    if (dom.topicSelect) {
      dom.topicSelect.innerHTML = partTopics.map((top, idx) => `
        <option value="${idx}" ${idx === topicIndex ? 'selected' : ''}>${escapeHtml(top.title)}</option>
      `).join('');
    }

    if (dom.topicTitle) dom.topicTitle.textContent = state.activeTopic.title;
    if (dom.topicDesc) {
      dom.topicDesc.innerHTML = `
        <p>${escapeHtml(state.activeTopic.description)}</p>
        <p class="tr-desc" style="color:var(--text-muted); font-size:13px; margin-top:4px;">${escapeHtml(state.activeTopic.descriptionTr || '')}</p>
      `;
    }

    // Render Leitpunkte with Checkmarks
    if (dom.leitpunkteContainer) {
      dom.leitpunkteContainer.innerHTML = state.activeTopic.leitpunkte.map((lp, idx) => `
        <div class="leitpunkt-item" id="lp-box-${idx}">
          <div class="lp-status-dot"></div>
          <div class="lp-content">
            <span class="lp-label">${escapeHtml(lp.label)}</span>
            <small class="lp-keywords-hint">Schlüsselwörter: ${lp.keywords.slice(0, 5).join(', ')}</small>
          </div>
        </div>
      `).join('');
    }

    // Show/hide Partner Simulator pill for Teil 3
    if (dom.pillPartner) {
      dom.pillPartner.style.display = (partKey === 'teil3') ? 'inline-block' : 'none';
    }

    // Render Model Answer, Phrases and Vocab
    renderModelAnswer();
    renderPhrasesAndVocab();
    switchPromptView(state.activeView || 'task');

    // Reset evaluation card
    if (dom.evalCard) dom.evalCard.style.display = 'none';
  }

  // --- SUBVIEW SWITCHING (Task, Model Answer, Phrases, Partner Simulator) ---
  function switchPromptView(viewName) {
    state.activeView = viewName;
    if (dom.pills) {
      dom.pills.forEach(p => {
        p.classList.toggle('active', p.id === `pill-view-${viewName}`);
      });
    }

    if (dom.panelTask) dom.panelTask.style.display = (viewName === 'task') ? 'block' : 'none';
    if (dom.panelModel) dom.panelModel.style.display = (viewName === 'model') ? 'block' : 'none';
    if (dom.panelPhrases) dom.panelPhrases.style.display = (viewName === 'phrases') ? 'block' : 'none';
    if (dom.panelPartner) dom.panelPartner.style.display = (viewName === 'partner') ? 'block' : 'none';

    if (viewName === 'partner') {
      startPartnerSimulator();
    } else if (partnerSimState.interval) {
      clearInterval(partnerSimState.interval);
      partnerSimState.interval = null;
    }

    if (viewName !== 'model' && viewName !== 'partner' && state.isSpeakingTTS) {
      stopModelAnswerTTS();
    }
  }

  // --- INTERACTIVE PARTNER SIMULATOR (TEIL 3) ---
  const partnerSimData = [
    {
      turnLabel: "Runde 1: Vorschlag von Anna",
      partnerSpeech: "Hallo! Schön, dass wir zusammen planen. Ich habe mir schon Gedanken gemacht: Ich schlage vor, dass wir uns am Samstagabend um 19 Uhr in einem Restaurant in der Innenstadt treffen. Was hältst du davon?",
      options: [
        {
          type: "einwand",
          redemittelKey: "einwand",
          text: "Das ist ein schöner Vorschlag, aber ein Restaurant ist vielleicht für manche zu teuer. Wie wäre es, wenn wir stattdessen bei mir zu Hause feiern?",
          badge: "✋ Höflicher Einwand & Gegenvorschlag"
        },
        {
          type: "termin",
          redemittelKey: "einwand",
          text: "Samstagabend passt mir leider gar nicht, da ich Spätschicht habe. Könnten wir das Treffen vielleicht auf Sonntagnachmittag verschieben?",
          badge: "⏰ Terminverschiebung"
        },
        {
          type: "zustimmung",
          redemittelKey: "vorschlag",
          text: "Einverstanden, das ist eine prima Idee! Ich schlage vor, dass wir vorher reservieren, damit wir sicher einen Tisch bekommen.",
          badge: "💡 Zustimmung & Initiative"
        }
      ]
    },
    {
      turnLabel: "Runde 2: Annas Reaktion & Aufgabenverteilung",
      partnerSpeech: "Guter Punkt! Das klingt absolut vernünftig. Wir sollten auch überlegen, was wir vorbereiten müssen: Wer besorgt die Getränke und die Dekoration, und was machen wir mit der Musik?",
      options: [
        {
          type: "aufgabe",
          redemittelKey: "vorschlag",
          text: "Ich könnte mich um die Musik-Playlist und die Dekoration kümmern. Kannst du dafür die Getränke und ein paar Snacks einkaufen?",
          badge: "💡 Aufgabenverteilung vorschlagen"
        },
        {
          type: "einwand",
          redemittelKey: "einwand",
          text: "Musik ist wichtig, aber wir müssen vorher die Nachbarn informieren, damit es keinen Ärger wegen Ruhestörung gibt.",
          badge: "✋ Bedenken äußern"
        },
        {
          type: "kompromiss",
          redemittelKey: "kompromiss",
          text: "Wir könnten eine gemeinsame Liste erstellen und die Kosten durch alle teilen. Ich übernehme gerne die Abrechnung.",
          badge: "🤝 Finanzieller Kompromiss"
        }
      ]
    },
    {
      turnLabel: "Runde 3: Annas Bestätigung & Abschluss",
      partnerSpeech: "Perfekt! Das ist ein fairer Plan. Ich erstelle heute noch eine Nachricht für alle und kaufe die Getränke ein. Dann treffen wir uns eine Stunde vor Beginn zur Vorbereitung, einverstanden?",
      options: [
        {
          type: "abschluss",
          redemittelKey: "kompromiss",
          text: "Super, abgemacht! Ich bringe die Dekoration und die Musik mit. Wir telefonieren am Freitag noch einmal kurz zur Bestätigung. Bis dann!",
          badge: "🤝 Kompromiss besiegelt"
        },
        {
          type: "hilfe",
          redemittelKey: "vorschlag",
          text: "Klasse! Eine Stunde vorher reicht völlig. Wenn du noch Hilfe beim Tragen brauchst, sag mir einfach Bescheid. Bis Samstag!",
          badge: "💡 Hilfsangebot & Abschluss"
        }
      ]
    }
  ];

  let partnerSimState = {
    step: 0,
    timer: 180,
    interval: null,
    used: { vorschlag: false, einwand: false, kompromiss: false }
  };

  function startPartnerSimulator() {
    partnerSimState.step = 0;
    partnerSimState.timer = 180;
    partnerSimState.used = { vorschlag: false, einwand: false, kompromiss: false };
    updateSimChecklist();

    if (partnerSimState.interval) clearInterval(partnerSimState.interval);
    partnerSimState.interval = setInterval(() => {
      if (partnerSimState.timer > 0) {
        partnerSimState.timer--;
        const m = Math.floor(partnerSimState.timer / 60);
        const s = String(partnerSimState.timer % 60).padStart(2, '0');
        if (dom.simTimer) dom.simTimer.textContent = `${m}:${s}`;
      } else {
        clearInterval(partnerSimState.interval);
        partnerSimState.interval = null;
      }
    }, 1000);

    renderPartnerStep();
  }

  function restartPartnerSimulator() {
    startPartnerSimulator();
  }

  function renderPartnerStep() {
    if (partnerSimState.step >= partnerSimData.length) {
      if (dom.simTurnLabel) dom.simTurnLabel.textContent = "🏆 Prüfungssimulation abgeschlossen";
      if (dom.simPartnerText) {
        dom.simPartnerText.innerHTML = "<strong>Vielen Dank!</strong> Sie haben alle 3 Phasen der gemeinsamen Planung erfolgreich durchlaufen. Sie haben Vorschläge gemacht, auf Einwände reagiert und einen fairen Kompromiss erzielt.";
      }
      if (dom.simOptionsGrid) {
        dom.simOptionsGrid.innerHTML = `
          <div style="background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:8px; padding:12px; color:#34d399; font-weight:700; text-align:center;">
            🎉 Teil 3 telc B1 Partner-Dialog mit Erfolg simuliert! Überprüfen Sie Ihre Redezeit und prüfen Sie Ihre Antwort mit dem Bewertungsknopf unten.
          </div>
        `;
      }
      return;
    }

    const currentTurn = partnerSimData[partnerSimState.step];
    if (dom.simTurnLabel) dom.simTurnLabel.textContent = currentTurn.turnLabel;
    if (dom.simPartnerText) dom.simPartnerText.textContent = currentTurn.partnerSpeech;

    speakPartnerSpeech(currentTurn.partnerSpeech);

    if (dom.simOptionsGrid) {
      dom.simOptionsGrid.innerHTML = currentTurn.options.map((opt, oIdx) => `
        <button type="button" class="btn-sim-option" data-opt-idx="${oIdx}" style="text-align:left; background:rgba(255,255,255,0.04); border:1px solid var(--sp-border, #334155); border-radius:8px; padding:12px 14px; cursor:pointer; transition:var(--sp-transition); color:#f8fafc; display:flex; flex-direction:column; gap:4px;">
          <span style="font-size:11px; font-weight:800; color:#fbbf24;">${opt.badge}</span>
          <span style="font-size:13.5px; line-height:1.5;">"${escapeHtml(opt.text)}"</span>
        </button>
      `).join('');

      dom.simOptionsGrid.querySelectorAll('.btn-sim-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-opt-idx'), 10);
          chooseSimOption(idx);
        });
      });
    }
  }

  function chooseSimOption(optIdx) {
    const currentTurn = partnerSimData[partnerSimState.step];
    const chosen = currentTurn.options[optIdx];
    if (!chosen) return;

    if (chosen.redemittelKey && partnerSimState.used[chosen.redemittelKey] !== undefined) {
      partnerSimState.used[chosen.redemittelKey] = true;
      updateSimChecklist();
    }

    // Append to transcript
    if (dom.transcriptInput) {
      const currentVal = dom.transcriptInput.value.trim();
      const addition = `Ich: ${chosen.text}`;
      dom.transcriptInput.value = currentVal ? `${currentVal}\n\n${addition}` : addition;
      checkRealtimeLeitpunkte(dom.transcriptInput.value);
    }

    partnerSimState.step++;
    setTimeout(() => {
      renderPartnerStep();
    }, 400);
  }

  function updateSimChecklist() {
    if (dom.simCheckProp) {
      dom.simCheckProp.style.background = partnerSimState.used.vorschlag ? 'rgba(16,185,129,0.2)' : '';
      dom.simCheckProp.style.color = partnerSimState.used.vorschlag ? '#34d399' : '';
    }
    if (dom.simCheckDisagree) {
      dom.simCheckDisagree.style.background = partnerSimState.used.einwand ? 'rgba(16,185,129,0.2)' : '';
      dom.simCheckDisagree.style.color = partnerSimState.used.einwand ? '#34d399' : '';
    }
    if (dom.simCheckAgree) {
      dom.simCheckAgree.style.background = partnerSimState.used.kompromiss ? 'rgba(16,185,129,0.2)' : '';
      dom.simCheckAgree.style.color = partnerSimState.used.kompromiss ? '#34d399' : '';
    }
  }

  function speakPartnerSpeech(text) {
    if (!('speechSynthesis' in window) || !text) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'de-DE';
    utter.rate = 0.95;
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith('de') && (v.name.includes('Female') || v.name.includes('Hedda') || v.name.includes('Katja') || v.name.includes('Natural') || v.name.includes('Google'))) || voices.find(v => v.lang.startsWith('de'));
    if (deVoice) utter.voice = deVoice;
    window.speechSynthesis.speak(utter);
  }

  // --- RENDER MODEL ANSWER (MUSTERANTWORT) ---
  function renderModelAnswer() {
    if (!state.activeTopic || !state.activeTopic.modelAnswer) return;
    const ans = state.activeTopic.modelAnswer;

    if (dom.modelAnswerDe) {
      const rawDe = ans.de || '';
      const formatted = escapeHtml(rawDe).replace(/(Partner [AB]:)/g, '<span class="dialogue-speaker">$1</span>');
      dom.modelAnswerDe.innerHTML = formatted;
    }

    if (dom.modelAnswerTrans) {
      const transText = ans[state.modelLang] || ans.tr || ans.en || '';
      const formattedTrans = escapeHtml(transText).replace(/(Partner [AB]:|Şريك [أب]:|Партнер [АБ]:)/g, '<strong style="color:#60a5fa; display:block; margin-top:8px;">$1</strong>');
      dom.modelAnswerTrans.innerHTML = formattedTrans;
    }
  }

  // --- RENDER REDEMITTEL & VOCABULARY ---
  function renderPhrasesAndVocab() {
    if (!state.activeTopic) return;
    const phrases = state.activeTopic.redemittel || [];
    const vocab = state.activeTopic.keyVocab || [];

    if (dom.chipsContainer) {
      if (phrases.length === 0) {
        dom.chipsContainer.innerHTML = '<p style="color:var(--sp-text-muted); font-size:12px;">Bu konu için genel B1 kalıplarını kullanabilirsiniz.</p>';
      } else {
        dom.chipsContainer.innerHTML = phrases.map(rm => {
          const trans = rm[state.modelLang] || rm.tr || rm.en || '';
          return `
            <div class="phrase-chip-item" data-phrase="${escapeHtml(rm.phrase)}" title="Tıkla ve konuşma alanına ekle">
              <span class="phrase-chip-text">${escapeHtml(rm.phrase)}</span>
              <span class="phrase-chip-meaning">${escapeHtml(trans)}</span>
            </div>
          `;
        }).join('');

        // Wire click to insert phrase
        dom.chipsContainer.querySelectorAll('.phrase-chip-item').forEach(chip => {
          chip.addEventListener('click', () => {
            const phrase = chip.getAttribute('data-phrase');
            insertPhraseIntoTranscript(phrase);
          });
        });
      }
    }

    if (dom.vocabContainer) {
      if (vocab.length === 0) {
        dom.vocabContainer.innerHTML = '<p style="color:var(--sp-text-muted); font-size:12px;">Standart kelime haznenizi kullanın.</p>';
      } else {
        dom.vocabContainer.innerHTML = vocab.map(v => {
          const trans = v[state.modelLang] || v.tr || v.en || '';
          return `
            <div class="topic-vocab-card">
              <span class="topic-vocab-word">${escapeHtml(v.de)}</span>
              <span class="topic-vocab-plural">${escapeHtml(v.plural || '-')}</span>
              <span class="topic-vocab-trans">${escapeHtml(trans)}</span>
            </div>
          `;
        }).join('');
      }
    }
  }

  function insertPhraseIntoTranscript(phrase) {
    if (!dom.transcriptInput) return;
    const input = dom.transcriptInput;
    const start = input.selectionStart || input.value.length;
    const end = input.selectionEnd || input.value.length;
    const val = input.value;
    input.value = val.substring(0, start) + (start > 0 && !val[start - 1].match(/\s/) ? ' ' : '') + phrase + ' ' + val.substring(end);
    input.focus();
    const newPos = start + phrase.length + 2;
    input.setSelectionRange(newPos, newPos);
    checkRealtimeLeitpunkte(input.value);
  }

  // --- TEXT-TO-SPEECH (TTS) FOR MODEL ANSWER ---
  function playModelAnswerTTS() {
    if (!state.activeTopic || !state.activeTopic.modelAnswer || !('speechSynthesis' in window)) {
      alert('Tarayıcınız sesli sentezlemeyi (SpeechSynthesis) desteklemiyor.');
      return;
    }

    window.speechSynthesis.cancel();
    state.isSpeakingTTS = true;

    if (dom.btnTtsPlay) dom.btnTtsPlay.style.display = 'none';
    if (dom.btnTtsStop) dom.btnTtsStop.style.display = 'inline-flex';

    const textToSpeak = state.activeTopic.modelAnswer.de;
    const utter = new SpeechSynthesisUtterance(textToSpeak);
    utter.lang = 'de-DE';
    utter.rate = 0.95;

    // Pick German voice if available
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith('de')) || null;
    if (deVoice) utter.voice = deVoice;

    utter.onend = () => {
      stopModelAnswerTTS();
    };

    utter.onerror = () => {
      stopModelAnswerTTS();
    };

    window.speechSynthesis.speak(utter);
  }

  function stopModelAnswerTTS() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    state.isSpeakingTTS = false;
    if (dom.btnTtsPlay) dom.btnTtsPlay.style.display = 'inline-flex';
    if (dom.btnTtsStop) dom.btnTtsStop.style.display = 'none';
  }

  function copyModelToTranscript() {
    if (!state.activeTopic || !state.activeTopic.modelAnswer || !dom.transcriptInput) return;
    dom.transcriptInput.value = state.activeTopic.modelAnswer.de;
    checkRealtimeLeitpunkte(dom.transcriptInput.value);

    if (dom.btnCopyModel) {
      const origText = dom.btnCopyModel.textContent;
      dom.btnCopyModel.textContent = '✅ Metin Kopyalandı! Şimdi Ses Kaydı Alabilir veya Telaffuz Çalışabilirsiniz.';
      setTimeout(() => {
        dom.btnCopyModel.textContent = origText;
      }, 3000);
    }
  }

  // --- HARDWARE & MICROPHONE SETUP ---
  async function initMicrophoneHardware(deviceId) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('getUserMedia not supported in this browser');
    }

    if (state.audioStream) {
      try {
        state.audioStream.getTracks().forEach(t => t.stop());
      } catch (e) {}
      state.audioStream = null;
    }

    const audioConstraints = {
      channelCount: 1,
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true
    };

    if (deviceId) {
      audioConstraints.deviceId = { exact: deviceId };
    }

    state.audioStream = await navigator.mediaDevices.getUserMedia({ audio: audioConstraints });

    // Track mute / hardware events
    const audioTrack = state.audioStream.getAudioTracks()[0];
    if (audioTrack && dom.diagDeviceName) {
      dom.diagDeviceName.textContent = audioTrack.label || 'Mikrofon (Aktiv)';
    }

    return state.audioStream;
  }

  // Web Audio API Visualizer & VU Meter
  function setupAudioVisualizer(stream) {
    if (!stream) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!state.audioContext || state.audioContext.state === 'closed') {
        state.audioContext = new AudioCtx();
      }
      if (state.audioContext.state === 'suspended') {
        state.audioContext.resume().catch(() => {});
      }

      if (state.audioSource) {
        try { state.audioSource.disconnect(); } catch (e) {}
      }

      state.audioSource = state.audioContext.createMediaStreamSource(stream);
      state.audioAnalyser = state.audioContext.createAnalyser();
      state.audioAnalyser.fftSize = 64;
      state.audioAnalyser.smoothingTimeConstant = 0.4;
      state.audioSource.connect(state.audioAnalyser);

      const bufferLength = state.audioAnalyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const waveBars = dom.waveVisualizer ? dom.waveVisualizer.querySelectorAll('.wave-bar') : [];

      function drawWave() {
        if (!state.isRecording && (!dom.diagPanel || dom.diagPanel.style.display === 'none')) {
          return;
        }
        state.animFrame = requestAnimationFrame(drawWave);
        state.audioAnalyser.getByteFrequencyData(dataArray);

        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const avgVol = sum / bufferLength; // 0..255
        const normalizedVol = Math.min(100, Math.round((avgVol / 120) * 100));

        // Update live VU meter in diagnostic panel
        if (dom.diagVuFill) dom.diagVuFill.style.width = `${normalizedVol}%`;
        if (dom.diagVuLabel) dom.diagVuLabel.textContent = `${normalizedVol}%`;

        if (avgVol > 6) {
          state.hasDetectedSound = true;
          state.silenceCounter = 0;
          if (dom.waveVisualizer) dom.waveVisualizer.classList.add('audio-detected');
        } else {
          state.silenceCounter++;
        }

        // Animate wave visualizer bars
        if (waveBars && waveBars.length) {
          for (let i = 0; i < waveBars.length; i++) {
            const freqIdx = Math.floor((i / waveBars.length) * bufferLength);
            const val = dataArray[freqIdx] || avgVol;
            const h = Math.max(6, Math.min(32, Math.round(6 + (val / 255) * 26)));
            waveBars[i].style.height = `${h}px`;
            if (avgVol > 6) {
              waveBars[i].style.background = '#10b981';
              waveBars[i].style.boxShadow = '0 0 8px rgba(16, 185, 129, 0.7)';
            } else {
              waveBars[i].style.height = '6px';
              waveBars[i].style.background = '#ef4444';
              waveBars[i].style.boxShadow = 'none';
            }
          }
        }
      }

      drawWave();
    } catch (e) {
      console.warn('Audio visualizer error:', e);
    }
  }

  // Setup MediaRecorder for physical audio capture (.webm / .mp4 / .ogg)
  function setupMediaRecorder(stream) {
    if (typeof MediaRecorder === 'undefined' || !stream) return;
    try {
      let mimeType = '';
      const preferredMimes = [
        'audio/webm;codecs=opus',
        'audio/webm',
        'audio/mp4',
        'audio/ogg'
      ];
      for (const m of preferredMimes) {
        if (MediaRecorder.isTypeSupported(m)) {
          mimeType = m;
          break;
        }
      }

      state.mediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      state.recordedChunks = [];

      state.mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          state.recordedChunks.push(e.data);
        }
      };

      state.mediaRecorder.onstop = () => {
        if (state.recordedChunks.length > 0) {
          state.recordedBlob = new Blob(state.recordedChunks, { type: state.mediaRecorder.mimeType || 'audio/webm' });
          if (state.recordedAudioUrl) {
            URL.revokeObjectURL(state.recordedAudioUrl);
          }
          state.recordedAudioUrl = URL.createObjectURL(state.recordedBlob);

          if (dom.audioPlayback) {
            dom.audioPlayback.src = state.recordedAudioUrl;
          }
          if (dom.playbackCard) {
            dom.playbackCard.style.display = 'block';
          }
          if (dom.btnDownloadAudio) {
            dom.btnDownloadAudio.href = state.recordedAudioUrl;
            dom.btnDownloadAudio.download = `telc_b1_sprechen_${Date.now()}.webm`;
          }

          // Persist recording to StorageEngine IndexedDB
          if (typeof StorageEngine !== 'undefined' && state.recordedBlob) {
            StorageEngine.saveAudioBlob(`oral_${state.currentPart}_${Date.now()}`, state.recordedBlob).catch(() => {});
          }
        }
      };

      state.mediaRecorder.start(250);
    } catch (e) {
      console.warn('MediaRecorder error:', e);
    }
  }

  // --- WEB SPEECH RECOGNITION (DE / TR) ---
  function createSpeechRecognizer() {
    const SpeechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechAPI) return null;

    try {
      const rec = new SpeechAPI();
      rec.lang = state.speechLang;
      rec.continuous = true;
      rec.interimResults = true;
      rec.maxAlternatives = 1;

      rec.onstart = () => {
        if (dom.recStatusBadge) {
          dom.recStatusBadge.textContent = state.speechLang.startsWith('tr')
            ? '🎙️ Dinleniyor (Türkçe)...'
            : '🎙️ Höre zu (Deutsch)...';
          dom.recStatusBadge.className = 'rec-status-badge listening';
        }
      };

      rec.onspeechstart = () => {
        if (dom.recStatusBadge) {
          dom.recStatusBadge.textContent = '🗣️ Sprache erkannt – Transkription läuft...';
          dom.recStatusBadge.className = 'rec-status-badge active';
        }
      };

      rec.onresult = (event) => {
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res && res[0]) {
            if (res.isFinal) {
              state.baseTranscript += res[0].transcript + ' ';
            } else {
              interim += res[0].transcript;
            }
          }
        }

        const fullSpoken = (state.baseTranscript + interim).trim();
        if (dom.transcriptInput) {
          dom.transcriptInput.value = fullSpoken;
          dom.transcriptInput.scrollTop = dom.transcriptInput.scrollHeight;
        }

        // Realtime Leitpunkte Check
        checkRealtimeLeitpunkte(fullSpoken);
      };

      rec.onerror = (e) => {
        console.warn('SpeechRecognition error:', e.error);
        if (e.error === 'not-allowed') {
          alert('Mikrofon erişimi engellendi. Lütfen tarayıcı adres çubuğundaki kilit simgesinden mikrofona izin verin.');
          stopRecording();
        }
      };

      rec.onend = () => {
        if (state.isRecording) {
          if (state.restartTimer) clearTimeout(state.restartTimer);
          state.restartTimer = setTimeout(() => {
            if (state.isRecording) startSpeechLoop();
          }, 300);
        }
      };

      return rec;
    } catch (e) {
      console.warn('SpeechAPI init failed:', e);
      return null;
    }
  }

  function startSpeechLoop() {
    if (!state.isRecording) return;
    if (state.recognition) {
      try {
        state.recognition.onend = null;
        state.recognition.stop();
      } catch (e) {}
      state.recognition = null;
    }

    state.recognition = createSpeechRecognizer();
    if (!state.recognition) return;

    try {
      state.recognition.start();
    } catch (e) {
      if (state.restartTimer) clearTimeout(state.restartTimer);
      state.restartTimer = setTimeout(() => {
        if (state.isRecording) startSpeechLoop();
      }, 500);
    }
  }

  // Realtime Leitpunkte Highlight Check
  function checkRealtimeLeitpunkte(text) {
    if (!state.activeTopic || !state.activeTopic.leitpunkte) return;
    const spokenKeywords = (window.VoiceExamEngine ? window.VoiceExamEngine.extractKeywords(text) : []).map(k => k.toLowerCase());

    state.activeTopic.leitpunkte.forEach((lp, idx) => {
      const elBox = document.getElementById(`lp-box-${idx}`);
      if (!elBox) return;

      const hasHit = (lp.keywords || []).some(kw => spokenKeywords.some(sk => sk.includes(kw.toLowerCase()) || kw.toLowerCase().includes(sk)));
      if (hasHit) {
        elBox.classList.add('covered');
      } else {
        elBox.classList.remove('covered');
      }
    });
  }

  // --- RECORDING CONTROLS ---
  async function startRecording() {
    state.isRecording = true;
    state.hasDetectedSound = false;
    state.silenceCounter = 0;

    state.baseTranscript = dom.transcriptInput ? dom.transcriptInput.value.trim() : '';
    if (state.baseTranscript && !state.baseTranscript.endsWith(' ')) {
      state.baseTranscript += ' ';
    }

    updateUIForRecording(true);

    // 1. Speech Recognizer Loop: Start immediately and synchronously within the user gesture!
    startSpeechLoop();

    // 2. Hardware Mic Stream for visualizer and recording
    try {
      await initMicrophoneHardware(state.selectedDeviceId);
      if (state.audioStream) {
        setupAudioVisualizer(state.audioStream);
        setupMediaRecorder(state.audioStream);
      }
    } catch (err) {
      console.warn('Hardware mic error:', err);
    }

    // 3. Duration Timer
    state.startTime = Date.now();
    if (state.durationInterval) clearInterval(state.durationInterval);
    state.durationInterval = setInterval(() => {
      if (!state.isRecording) {
        clearInterval(state.durationInterval);
        return;
      }
      const elapsedSec = Math.floor((Date.now() - state.startTime) / 1000);
      const m = Math.floor(elapsedSec / 60);
      const s = String(elapsedSec % 60).padStart(2, '0');
      if (dom.recTimer) dom.recTimer.textContent = `${m}:${s}`;
    }, 1000);
  }

  function stopRecording() {
    state.isRecording = false;

    if (state.restartTimer) {
      clearTimeout(state.restartTimer);
      state.restartTimer = null;
    }

    if (state.durationInterval) {
      clearInterval(state.durationInterval);
      state.durationInterval = null;
    }

    if (state.recognition) {
      try {
        state.recognition.onend = null;
        state.recognition.stop();
      } catch (e) {}
      state.recognition = null;
    }

    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
      try { state.mediaRecorder.stop(); } catch (e) {}
    }

    if (state.animFrame) {
      cancelAnimationFrame(state.animFrame);
      state.animFrame = null;
    }

    if (state.audioStream) {
      try { state.audioStream.getTracks().forEach(t => t.stop()); } catch (e) {}
      state.audioStream = null;
    }

    if (state.audioSource) {
      try { state.audioSource.disconnect(); } catch (e) {}
      state.audioSource = null;
    }

    updateUIForRecording(false);
  }

  function toggleRecording() {
    if (state.isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }

  function updateUIForRecording(isRec) {
    if (isRec) {
      if (dom.btnToggleRecord) dom.btnToggleRecord.classList.add('recording');
      if (dom.recordBtnIcon) dom.recordBtnIcon.textContent = '⏹️';
      if (dom.recordBtnText) dom.recordBtnText.textContent = 'Aufnahme stoppen';
      if (dom.recStatusBadge) {
        dom.recStatusBadge.style.display = 'inline-flex';
        dom.recStatusBadge.textContent = '🔴 Aufnahme läuft...';
        dom.recStatusBadge.className = 'rec-status-badge active';
      }
      if (dom.waveVisualizer) {
        dom.waveVisualizer.style.display = 'inline-flex';
        dom.waveVisualizer.classList.add('pulsing');
      }
    } else {
      if (dom.btnToggleRecord) dom.btnToggleRecord.classList.remove('recording');
      if (dom.recordBtnIcon) dom.recordBtnIcon.textContent = '🎙️';
      if (dom.recordBtnText) dom.recordBtnText.textContent = 'Antwort einsprechen (Start)';
      if (dom.recStatusBadge) {
        dom.recStatusBadge.textContent = 'Bereit zur Aufnahme';
        dom.recStatusBadge.className = 'rec-status-badge';
      }
      if (dom.waveVisualizer) {
        dom.waveVisualizer.classList.remove('pulsing');
        dom.waveVisualizer.classList.remove('audio-detected');
        const waveBars = dom.waveVisualizer.querySelectorAll('.wave-bar');
        waveBars.forEach(bar => {
          bar.style.height = '6px';
          bar.style.background = '#ef4444';
          bar.style.boxShadow = 'none';
        });
      }
    }
  }

  // --- EVALUATION & SCORING ---
  function evaluateCurrentAnswer() {
    stopRecording();

    const spokenText = dom.transcriptInput ? dom.transcriptInput.value.trim() : '';
    if (!spokenText) {
      alert('Lütfen önce mikrofonla konuşun veya metin kutusuna cevabınızı yazın!');
      if (dom.transcriptInput) dom.transcriptInput.focus();
      return;
    }

    if (!window.VoiceExamEngine || !state.activeTopic) {
      alert('VoiceExamEngine yüklenemedi.');
      return;
    }

    const report = window.VoiceExamEngine.evaluateSpokenAnswer(spokenText, state.activeTopic);

    // Render Results in Evaluation Card
    if (dom.evalCard) {
      dom.evalCard.style.display = 'block';
      dom.evalCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (dom.scoreTotal) dom.scoreTotal.textContent = report.scores.total;
    if (dom.scoreBadge) {
      dom.scoreBadge.textContent = report.isPassed ? '✓ BESTANDEN (B1)' : '✗ NICHT BESTANDEN';
      dom.scoreBadge.className = 'eval-pass-badge ' + (report.isPassed ? 'pass' : 'fail');
    }

    if (dom.scoreAufgabe) dom.scoreAufgabe.textContent = `${report.scores.aufgabe} / 25`;
    if (dom.scoreStruktur) dom.scoreStruktur.textContent = `${report.scores.struktur} / 25`;
    if (dom.scoreWortschatz) dom.scoreWortschatz.textContent = `${report.scores.wortschatz} / 25`;
    if (dom.scoreFluss) dom.scoreFluss.textContent = `${report.scores.flussigkeit} / 25`;

    if (dom.evalVerdict) {
      dom.evalVerdict.innerHTML = `
        <p><strong>🇩🇪 Prüfer-Fazit:</strong> ${escapeHtml(report.verdict)}</p>
        <p style="color:var(--text-muted); font-size:13px; margin-top:4px;"><strong>🇹🇷 Sınav Değerlendirmesi:</strong> ${escapeHtml(report.verdictTr)}</p>
      `;
    }

    // Render Covered Leitpunkte
    if (dom.tagsCovered) {
      if (report.coveredLeitpunkte.length > 0) {
        dom.tagsCovered.innerHTML = report.coveredLeitpunkte.map(lp => `
          <span class="eval-tag covered">✓ ${escapeHtml(lp.label)} (${lp.hits} Treffer)</span>
        `).join('');
      } else {
        dom.tagsCovered.innerHTML = '<span class="eval-tag-empty">Keine Leitpunkte eindeutig erkannt</span>';
      }
    }

    // Render Missed Leitpunkte
    if (dom.tagsMissed) {
      if (report.missedLeitpunkte.length > 0) {
        dom.tagsMissed.innerHTML = report.missedLeitpunkte.map(lp => `
          <span class="eval-tag missed">⚠️ ${escapeHtml(lp.label)}</span>
        `).join('');
      } else {
        dom.tagsMissed.innerHTML = '<span class="eval-tag covered">✓ Alle Leitpunkte erfolgreich behandelt!</span>';
      }
    }

    // Render Redemittel
    if (dom.tagsRedemittel) {
      if (report.detectedRedemittel.length > 0) {
        dom.tagsRedemittel.innerHTML = report.detectedRedemittel.map(rm => `
          <span class="eval-tag redemittel">🔗 ${escapeHtml(rm.label)} [${rm.level}]</span>
        `).join('');
      } else {
        dom.tagsRedemittel.innerHTML = '<span class="eval-tag-empty">Keine B1-Konnektoren erkannt (Nutzen Sie: weil, obwohl, ich schlage vor...)</span>';
      }
    }

    // Save record to local history
    saveHistoryRecord({
      id: 'rec_' + Date.now(),
      timestamp: Date.now(),
      topicId: state.activeTopic.id,
      topicTitle: state.activeTopic.title,
      duration: dom.recTimer ? dom.recTimer.textContent : '0:00',
      totalScore: report.scores.total,
      scores: report.scores,
      wordCount: report.wordCount,
      transcriptSnippet: spokenText.length > 140 ? spokenText.slice(0, 140) + '...' : spokenText
    });

    try {
      const scaledSprechen = Math.round((report.scores.total / 100) * 75 * 10) / 10;
      localStorage.setItem('telc_voice_score', scaledSprechen);
      if (typeof StorageEngine !== 'undefined') {
        StorageEngine.setExamScore('sprechen', scaledSprechen);
        StorageEngine.addXP(Math.round(scaledSprechen));

        // Add missed Leitpunkte to Fehlerheft
        if (report.missedLeitpunkte && report.missedLeitpunkte.length > 0) {
          report.missedLeitpunkte.forEach(lp => {
            StorageEngine.addFehlerItem({
              id: `oral_lp_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
              type: 'exam_question',
              source: `sprechen.html (${state.currentPart})`,
              title: `Mündlich: Leitpunkt ausgelassen`,
              detail: `${state.activeTopic.title}: ${lp.label}`,
              expected: 'Leitpunkt im Vortrag behandeln',
              actual: 'Nicht erwähnt'
            });
          });
        }
      }
    } catch (e) {
      console.warn('Could not save telc_voice_score:', e);
    }
  }

  // --- MICROPHONE DIAGNOSTICS MODAL/PANEL ---
  async function toggleDiagnostics() {
    if (!dom.diagPanel) return;
    const isVisible = (dom.diagPanel.style.display !== 'none');
    if (isVisible) {
      dom.diagPanel.style.display = 'none';
      return;
    }

    dom.diagPanel.style.display = 'block';

    // 1. Web Speech API Check
    const SpeechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (dom.diagSpeechStatus) {
      if (SpeechAPI) {
        dom.diagSpeechStatus.textContent = '✅ Verfügbar (Web Speech API)';
        dom.diagSpeechStatus.className = 'diag-status success';
      } else {
        dom.diagSpeechStatus.textContent = '⚠️ Nicht nativ (Nur Audioaufnahme)';
        dom.diagSpeechStatus.className = 'diag-status warning';
      }
    }

    // 2. Permission Query Check
    if (dom.diagPermStatus && navigator.permissions && navigator.permissions.query) {
      try {
        const p = await navigator.permissions.query({ name: 'microphone' });
        if (p.state === 'granted') {
          dom.diagPermStatus.textContent = '✅ Erteilt (Mikrofonzugriff aktiv)';
          dom.diagPermStatus.className = 'diag-status success';
        } else if (p.state === 'prompt') {
          dom.diagPermStatus.textContent = '⏳ Wird abgefragt';
          dom.diagPermStatus.className = 'diag-status warning';
        } else {
          dom.diagPermStatus.textContent = '❌ Verweigert (Browsereinstellungen)';
          dom.diagPermStatus.className = 'diag-status error';
        }
      } catch (e) {
        dom.diagPermStatus.textContent = '✅ Standard';
      }
    }

    // 3. Audio Devices List
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && dom.diagDeviceSelect) {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioMics = devices.filter(d => d.kind === 'audioinput');
        dom.diagDeviceSelect.innerHTML = audioMics.map(m => `
          <option value="${m.deviceId}" ${m.deviceId === state.selectedDeviceId ? 'selected' : ''}>
            ${m.label || 'Mikrofon ' + m.deviceId.slice(0, 5)}
          </option>
        `).join('');
      } catch (e) {}
    }
  }

  // Helper Escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Event Listeners Setup
  function setupEventListeners() {
    // Part Tabs
    if (dom.partTabs) {
      dom.partTabs.forEach(btn => {
        btn.addEventListener('click', () => {
          dom.partTabs.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const partKey = btn.getAttribute('data-part');
          loadSpeakingTopic(partKey, 0);
        });
      });
    }

    // Topic Selection Change
    if (dom.topicSelect) {
      dom.topicSelect.addEventListener('change', (e) => {
        const idx = parseInt(e.target.value, 10) || 0;
        loadSpeakingTopic(state.currentPart, idx);
      });
    }

    // Record Button
    if (dom.btnToggleRecord) {
      dom.btnToggleRecord.addEventListener('click', toggleRecording);
    }

    // Language Toggle Buttons
    if (dom.btnLangDe) {
      dom.btnLangDe.addEventListener('click', () => {
        state.speechLang = 'de-DE';
        dom.btnLangDe.classList.add('active');
        if (dom.btnLangTr) dom.btnLangTr.classList.remove('active');
        if (state.isRecording) startSpeechLoop();
      });
    }

    if (dom.btnLangTr) {
      dom.btnLangTr.addEventListener('click', () => {
        state.speechLang = 'tr-TR';
        dom.btnLangTr.classList.add('active');
        if (dom.btnLangDe) dom.btnLangDe.classList.remove('active');
        if (state.isRecording) startSpeechLoop();
      });
    }

    // Diagnostics Button
    if (dom.btnToggleDiag) {
      dom.btnToggleDiag.addEventListener('click', toggleDiagnostics);
    }

    if (dom.diagDeviceSelect) {
      dom.diagDeviceSelect.addEventListener('change', (e) => {
        state.selectedDeviceId = e.target.value;
        if (state.isRecording) {
          startRecording();
        }
      });
    }

    // Clear Transcript Button
    if (dom.btnClearTranscript) {
      dom.btnClearTranscript.addEventListener('click', () => {
        if (dom.transcriptInput) dom.transcriptInput.value = '';
        state.baseTranscript = '';
        checkRealtimeLeitpunkte('');
      });
    }

    // Evaluate Button
    if (dom.btnEvaluate) {
      dom.btnEvaluate.addEventListener('click', evaluateCurrentAnswer);
    }

    // Clear History Button
    if (dom.btnClearHistory) {
      dom.btnClearHistory.addEventListener('click', () => {
        if (confirm('Tüm geçmiş ses kayıtları silinsin mi?')) {
          state.examHistory = [];
          try { localStorage.removeItem('deutschlernen_speaking_history'); } catch (e) {}
          renderHistory();
        }
      });
    }

    // Subview Pills (Task, Model, Phrases)
    if (dom.pills) {
      dom.pills.forEach(pill => {
        pill.addEventListener('click', () => {
          const viewName = pill.id.replace('pill-view-', '');
          switchPromptView(viewName);
        });
      });
    }

    // Model Answer TTS Controls
    if (dom.btnTtsPlay) {
      dom.btnTtsPlay.addEventListener('click', playModelAnswerTTS);
    }
    if (dom.btnTtsStop) {
      dom.btnTtsStop.addEventListener('click', stopModelAnswerTTS);
    }

    // Model Answer Copy Button
    if (dom.btnCopyModel) {
      dom.btnCopyModel.addEventListener('click', copyModelToTranscript);
    }

    // Model Answer Language Toggle
    if (dom.modelLangBtns) {
      dom.modelLangBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          dom.modelLangBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.modelLang = btn.getAttribute('data-lang') || 'tr';
          renderModelAnswer();
          renderPhrasesAndVocab();
        });
      });
    }

    // Partner Simulator Controls
    if (dom.btnRestartSim) {
      dom.btnRestartSim.addEventListener('click', restartPartnerSimulator);
    }
    if (dom.btnPartnerSpeak) {
      dom.btnPartnerSpeak.addEventListener('click', () => {
        if (partnerSimState.step < partnerSimData.length) {
          speakPartnerSpeech(partnerSimData[partnerSimState.step].partnerSpeech);
        }
      });
    }

    // Keyboard Shortcuts (Space for Record, Esc for Stop)
    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
        return;
      }
      if (e.key === 'r' || e.key === 'R') {
        toggleRecording();
      }
    });
  }

  // Application Bootstrapper
  document.addEventListener('DOMContentLoaded', () => {
    initDomElements();
    setupEventListeners();
    loadSpeakingTopic('teil3', 0);
    loadHistory();
  });

  // Export for testing or external access
  window.SprechenApp = {
    state,
    startRecording,
    stopRecording,
    evaluateCurrentAnswer,
    loadSpeakingTopic
  };
})();
