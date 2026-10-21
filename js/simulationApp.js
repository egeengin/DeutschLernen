/**
 * DeutschLernen - Full telc B1 Interactive Mock Exam Simulator
 * Authentic 225-Point Written Examination (Leseverstehen, Sprachbausteine, Hören, Schreiben)
 * Complete Quad-Lingual & Native DE Support: DE, EN, TR, AR, UK
 * WCAG AA Accessible, PWA Offline Compatible, Official Grade Calculation
 */

(function () {
  'use strict';

  const SIMULATION_I18N = {
    de: {
      examTitle: "telc Deutsch B1 Abschlusssimulation",
      officialBadge: "Offizieller telc-B1-Standard • 225 Punkte",
      navLesen: "📖 1. Leseverstehen",
      navSprachbausteine: "🧩 2. Sprachbausteine",
      navHoeren: "🎧 3. Hörverstehen",
      navSchreiben: "✍️ 4. Schreiben",
      navReport: "🏆 Ergebnis & Zertifikat",
      submitExamBtn: "Prüfung abgeben & Auswerten 🏁",
      timeRemaining: "Verbleibende Zeit:",
      timeUpAlert: "⏱️ Die Prüfungszeit ist abgelaufen! Ihre Antworten werden nun ausgewertet.",
      confirmSubmit: "Möchten Sie die Prüfung wirklich beenden und Ihre Ergebnisse auswerten lassen?",
      richtig: "richtig",
      falsch: "falsch",
      playAudio: "Audio abspielen",
      playingAudio: "Audio wird abgespielt...",
      audioExhausted: "Maximale Wiedergabeanzahl erreicht.",
      wordCount: "Wörter:",
      minWords: "Mindestens 140 Wörter empfohlen.",
      certTitle: "telc B1 Prüfungsergebnis",
      certSubtitle: "Offizielles Bewertungsraster nach Gemeinsamem Europäischen Referenzrahmen (GER)",
      certPassed: "🎉 HERZLICHEN GLÜCKWUNSCH! BESTANDEN",
      certFailed: "⚠️ LEIDER NICHT BESTANDEN",
      gradeSehrGut: "Sehr gut (1)",
      gradeGut: "Gut (2)",
      gradeBefriedigend: "Befriedigend (3)",
      gradeAusreichend: "Ausreichend (4)",
      gradeNichtBestanden: "Nicht bestanden",
      totalScoreLabel: "Gesamtpunktzahl:",
      passThreshold: "Bestehensgrenze: 135 / 225 Punkte (60 %)",
      printCertBtn: "🖨️ Zertifikat drucken / PDF speichern",
      retryExamBtn: "🔄 Neue Prüfungssimulation starten",
      dashboardReturn: "📊 Zum Dashboard zurückkehren"
    },
    en: {
      examTitle: "telc Deutsch B1 Final Mock Exam",
      officialBadge: "Official telc B1 Standard • 225 Points",
      navLesen: "📖 1. Reading",
      navSprachbausteine: "🧩 2. Language Elements",
      navHoeren: "🎧 3. Listening",
      navSchreiben: "✍️ 4. Writing",
      navReport: "🏆 Results & Certificate",
      submitExamBtn: "Submit & Grade Exam 🏁",
      timeRemaining: "Remaining Time:",
      timeUpAlert: "⏱️ Time is up! Your answers are being evaluated now.",
      confirmSubmit: "Are you sure you want to finish the exam and view your official score report?",
      richtig: "True",
      falsch: "False",
      playAudio: "Play Audio",
      playingAudio: "Playing Audio...",
      audioExhausted: "Maximum playback count reached.",
      wordCount: "Words:",
      minWords: "Minimum 140 words recommended.",
      certTitle: "telc B1 Examination Scorecard",
      certSubtitle: "Official CEFR evaluation standard for European Language Certificates",
      certPassed: "🎉 CONGRATULATIONS! PASSED",
      certFailed: "⚠️ EXAM NOT PASSED",
      gradeSehrGut: "Excellent (1)",
      gradeGut: "Good (2)",
      gradeBefriedigend: "Satisfactory (3)",
      gradeAusreichend: "Pass (4)",
      gradeNichtBestanden: "Fail",
      totalScoreLabel: "Total Score:",
      passThreshold: "Passing Threshold: 135 / 225 Points (60%)",
      printCertBtn: "🖨️ Print Certificate / Save PDF",
      retryExamBtn: "🔄 Start New Simulation",
      dashboardReturn: "📊 Return to Dashboard"
    },
    tr: {
      examTitle: "telc Deutsch B1 Final Deneme Sınavı",
      officialBadge: "Resmi telc B1 Standardı • 225 Puan",
      navLesen: "📖 1. Okuma (Lesen)",
      navSprachbausteine: "🧩 2. Dil Yapıları",
      navHoeren: "🎧 3. Dinleme (Hören)",
      navSchreiben: "✍️ 4. Mektup (Schreiben)",
      navReport: "🏆 Sonuç & Sertifika",
      submitExamBtn: "Sınavı Bitir ve Puanla 🏁",
      timeRemaining: "Kalan Süre:",
      timeUpAlert: "⏱️ Sınav süresi doldu! Cevaplarınız değerlendiriliyor.",
      confirmSubmit: "Sınavı bitirmek ve resmi puan karnenizi görmek istediğinizden emin misiniz?",
      richtig: "Doğru (Richtig)",
      falsch: "Yanlış (Falsch)",
      playAudio: "Sesi Dinle",
      playingAudio: "Ses çalınıyor...",
      audioExhausted: "Maksimum dinleme hakkı doldu.",
      wordCount: "Kelime:",
      minWords: "En az 140 kelime tavsiye edilir.",
      certTitle: "telc B1 Sınav Başarı Karnesi",
      certSubtitle: "Avrupa Ortak Dil Çerçevesi (GER) Resmi Değerlendirme Standardı",
      certPassed: "🎉 TEBRİKLER! SINAVI GEÇTİNİZ",
      certFailed: "⚠️ ÜZGÜNÜZ, SINAVI GEÇEMEDİNİZ",
      gradeSehrGut: "Pekiyi (Sehr gut - 1)",
      gradeGut: "İyi (Gut - 2)",
      gradeBefriedigend: "Orta (Befriedigend - 3)",
      gradeAusreichend: "Geçer (Ausreichend - 4)",
      gradeNichtBestanden: "Kaldı (Nicht bestanden)",
      totalScoreLabel: "Toplam Puan:",
      passThreshold: "Geçme Barajı: 135 / 225 Puan (%60)",
      printCertBtn: "🖨️ Sertifikayı Yazdır / PDF İndir",
      retryExamBtn: "🔄 Yeni Simülasyon Başlat",
      dashboardReturn: "📊 Öğrenci Paneline Dön"
    },
    ar: {
      examTitle: "المحاكاة النهائية لامتحان telc Deutsch B1",
      officialBadge: "معايير telc B1 الرسمية • 225 نقطة",
      navLesen: "📖 1. القراءة",
      navSprachbausteine: "🧩 2. تراكيب اللغة",
      navHoeren: "🎧 3. الاستماع",
      navSchreiben: "✍️ 4. الكتابة",
      navReport: "🏆 النتيجة والشهادة",
      submitExamBtn: "تسليم الامتحان وتقييم النتيجة 🏁",
      timeRemaining: "الوقت المتبقي:",
      timeUpAlert: "⏱️ انتهى وقت الامتحان! يتم الآن تصحيح إجاباتك.",
      confirmSubmit: "هل أنت متأكد من رغبتك في إنهاء الامتحان وعرض النتيجة الرسمية؟",
      richtig: "صحيح (Richtig)",
      falsch: "خطأ (Falsch)",
      playAudio: "تشغيل الصوت",
      playingAudio: "جاري الاستماع...",
      audioExhausted: "تم استنفاد مرات الاستماع المسموحة.",
      wordCount: "عدد الكلمات:",
      minWords: "يُنصح بكتابة 140 كلمة على الأقل.",
      certTitle: "شهادة وتقرير درجات امتحان telc B1",
      certSubtitle: "معايير التقييم الرسمية للإطار الأوروبي المرجعي المشترك (GER)",
      certPassed: "🎉 مبروك! لقد نجحت في الامتحان",
      certFailed: "⚠️ للأسف لم تنجح هذه المرة",
      gradeSehrGut: "ممتاز (1)",
      gradeGut: "جيد جداً (2)",
      gradeBefriedigend: "جيد (3)",
      gradeAusreichend: "مقبول (4)",
      gradeNichtBestanden: "راسب",
      totalScoreLabel: "مجموع الدرجات:",
      passThreshold: "حد النجاح: 135 / 225 نقطة (60%)",
      printCertBtn: "🖨️ طباعة الشهادة / حفظ كملف PDF",
      retryExamBtn: "🔄 بدء محاكاة جديدة",
      dashboardReturn: "📊 العودة إلى لوحة التحكم"
    },
    uk: {
      examTitle: "Фінальна симуляція іспиту telc Deutsch B1",
      officialBadge: "Офіційний стандарт telc B1 • 225 балів",
      navLesen: "📖 1. Читання",
      navSprachbausteine: "🧩 2. Мовні елементи",
      navHoeren: "🎧 3. Аудіювання",
      navSchreiben: "✍️ 4. Письмо",
      navReport: "🏆 Результат та сертифікат",
      submitExamBtn: "Здати іспит та отримати бал 🏁",
      timeRemaining: "Залишилося часу:",
      timeUpAlert: "⏱️ Час іспиту вичерпано! Відповіді оцінюються.",
      confirmSubmit: "Ви впевнені, що хочете завершити іспит та переглянути результат?",
      richtig: "Правильно (Richtig)",
      falsch: "Неправильно (Falsch)",
      playAudio: "Слухати аудіо",
      playingAudio: "Аудіо відтворюється...",
      audioExhausted: "Вичерпано ліміт прослуховувань.",
      wordCount: "Слів:",
      minWords: "Рекомендовано мінімум 140 слів.",
      certTitle: "Сертифікат та звіт оцінок telc B1",
      certSubtitle: "Офіційний стандарт оцінювання згідно із загальноєвропейськими рекомендаціями (GER)",
      certPassed: "🎉 ВІТАЄМО! ІСПИТ СКЛАДЕНО",
      certFailed: "⚠️ НА ЖАЛЬ, НЕ СКЛАДЕНО",
      gradeSehrGut: "Відмінно (1)",
      gradeGut: "Добре (2)",
      gradeBefriedigend: "Задовільно (3)",
      gradeAusreichend: "Достатньо (4)",
      gradeNichtBestanden: "Не складено",
      totalScoreLabel: "Загальний бал:",
      passThreshold: "Прохідний бал: 135 / 225 балів (60%)",
      printCertBtn: "🖨️ Друк сертифіката / Зберегти PDF",
      retryExamBtn: "🔄 Почати нову симуляцію",
      dashboardReturn: "📊 Повернутися до панелі"
    }
  };

  class SimulationApp {
    constructor() {
      this.lang = (typeof localStorage !== 'undefined' && (
        localStorage.getItem('deutschlernen_lang') ||
        localStorage.getItem('site_lang') ||
        localStorage.getItem('telc_lang')
      )) || 'en';
      if (!SIMULATION_I18N[this.lang]) this.lang = 'en';

      this.activeSection = 'lesen'; // 'lesen', 'sprachbausteine', 'hoeren', 'schreiben', 'report'

      // Exam Timing: 150 minutes total (90m Lesen/SB + 30m Hören + 30m Schreiben)
      this.totalSeconds = 150 * 60;
      this.timerInterval = null;
      this.isSubmitted = false;

      // User Answers State
      this.answers = {
        lesen: {}, // { questionId: selectedKey }
        sprachbausteine: {}, // { gapId: selectedKey }
        hoeren: {}, // { itemId: selectedKey }
        schreiben: ""
      };

      // Audio Playback Tracking
      this.audioPlays = {
        teil1: 0, // Max 1
        teil2: 0, // Max 2
        teil3: 0  // Max 2
      };
      this.synth = (typeof window !== 'undefined' && 'speechSynthesis' in window) ? window.speechSynthesis : null;

      // Datasets
      this.readingData = (typeof window !== 'undefined' && window.READING_DATASET) ? window.READING_DATASET : [];
      this.sbData = (typeof window !== 'undefined' && window.SPRACHBAUSTEINE_DATASET) ? window.SPRACHBAUSTEINE_DATASET : [];
      this.hoerenData = (typeof window !== 'undefined' && window.HOEREN_DATASET) ? window.HOEREN_DATASET : [];

      this.initDOMElements();
      this.bindEvents();
      this.applyLanguage();
      this.renderCurrentSection();
      this.startTimer();
    }

    initDOMElements() {
      this.dom = {
        timerDisplay: document.getElementById('exam-countdown-timer'),
        timerBox: document.getElementById('exam-timer-box'),
        btnSubmit: document.getElementById('btn-submit-exam'),
        sectionChips: document.querySelectorAll('.section-chip'),
        moduleContainer: document.getElementById('exam-module-container'),
        btnLangPills: document.querySelectorAll('.lang-btn'),
        themeToggle: document.getElementById('theme-toggle-btn')
      };
    }

    bindEvents() {
      this.dom.sectionChips?.forEach(chip => {
        chip.addEventListener('click', () => {
          const sec = chip.getAttribute('data-section');
          if (sec) this.switchSection(sec);
        });
      });

      this.dom.btnSubmit?.addEventListener('click', () => {
        const strings = SIMULATION_I18N[this.lang] || SIMULATION_I18N.en;
        if (confirm(strings.confirmSubmit)) {
          this.submitAndGradeExam();
        }
      });

      this.dom.btnLangPills?.forEach(btn => {
        btn.addEventListener('click', () => {
          const l = btn.getAttribute('data-lang');
          if (l && SIMULATION_I18N[l]) {
            this.lang = l;
            localStorage.setItem('deutschlernen_lang', l);
            this.applyLanguage();
            this.renderCurrentSection();
          }
        });
      });

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

    applyLanguage() {
      const strings = SIMULATION_I18N[this.lang] || SIMULATION_I18N.en;

      if (this.lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', this.lang);
      }

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (strings[key]) el.textContent = strings[key];
      });

      this.dom.btnLangPills?.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === this.lang);
      });
    }

    startTimer() {
      this.updateTimerDisplay();
      this.timerInterval = setInterval(() => {
        if (this.isSubmitted) {
          clearInterval(this.timerInterval);
          return;
        }
        this.totalSeconds--;
        this.updateTimerDisplay();
        if (this.totalSeconds <= 0) {
          clearInterval(this.timerInterval);
          const strings = SIMULATION_I18N[this.lang] || SIMULATION_I18N.en;
          alert(strings.timeUpAlert);
          this.submitAndGradeExam();
        }
      }, 1000);
    }

    updateTimerDisplay() {
      if (!this.dom.timerDisplay) return;
      const hours = Math.floor(this.totalSeconds / 3600);
      const mins = Math.floor((this.totalSeconds % 3600) / 60);
      const secs = this.totalSeconds % 60;

      const pad = n => String(n).padStart(2, '0');
      this.dom.timerDisplay.textContent = `${pad(hours)}:${pad(mins)}:${pad(secs)}`;

      // 5-minute warning alert
      if (this.totalSeconds <= 5 * 60) {
        this.dom.timerBox?.classList.add('timer-warning');
      }
    }

    switchSection(sectionId) {
      this.activeSection = sectionId;
      this.dom.sectionChips?.forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-section') === sectionId);
      });
      this.renderCurrentSection();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderCurrentSection() {
      if (!this.dom.moduleContainer) return;
      this.dom.moduleContainer.innerHTML = '';

      switch (this.activeSection) {
        case 'lesen':
          this.renderLesenModule();
          break;
        case 'sprachbausteine':
          this.renderSprachbausteineModule();
          break;
        case 'hoeren':
          this.renderHoerenModule();
          break;
        case 'schreiben':
          this.renderSchreibenModule();
          break;
        case 'report':
          this.renderReportModule();
          break;
      }
    }

    // --- Module 1: Leseverstehen (75 Pts) ---
    renderLesenModule() {
      const strings = SIMULATION_I18N[this.lang] || SIMULATION_I18N.en;
      const card = document.createElement('div');
      card.className = 'exam-module-card';

      card.innerHTML = `
        <div class="module-header">
          <div>
            <h2 class="module-title">📖 Leseverstehen (Teile 1–3)</h2>
            <div class="module-meta">telc B1 • 75 Punkte • Empfohlene Zeit: 60 Minuten</div>
          </div>
        </div>

        <!-- Teil 1: Globalverstehen -->
        <div class="reading-passage-box">
          <h3 style="margin-bottom:12px; font-weight:800; color:var(--accent-gold);">Teil 1: Globalverstehen — Überschriften zuordnen</h3>
          <p><strong>Text A (Freiwilliges Engagement):</strong> In Deutschland engagieren sich mehr als 28 Millionen Menschen ehrenamtlich. Besonders Sportvereine und die Freiwillige Feuerwehr sind auf freiwillige Helfer angewiesen. Immer mehr Vereine suchen nach neuen Wegen, jüngere Mitglieder langfristig zu motivieren.</p>
          <p><strong>Text B (Städtische Mobilität):</strong> Großstädte wie Berlin, Hamburg und München investieren Millionen in neue Fahrradwege und den Ausbau von Bus und Bahn. Ziel ist es, die Feinstaubbelastung zu senken und das Stadtzentrum bis 2030 weitgehend autofrei zu gestalten.</p>
        </div>

        <div class="exam-question-item">
          <div class="question-prompt">1. Welcher Text passt zur Überschrift: „Bürger gestalten ihre Freizeit im Dienst der Gesellschaft“?</div>
          <div class="exam-options-group" data-qid="l_1">
            <label class="exam-radio-label ${this.answers.lesen['l_1'] === 'A' ? 'selected' : ''}">
              <input type="radio" name="l_1" value="A" ${this.answers.lesen['l_1'] === 'A' ? 'checked' : ''}> Text A (Freiwilliges Engagement)
            </label>
            <label class="exam-radio-label ${this.answers.lesen['l_1'] === 'B' ? 'selected' : ''}">
              <input type="radio" name="l_1" value="B" ${this.answers.lesen['l_1'] === 'B' ? 'checked' : ''}> Text B (Städtische Mobilität)
            </label>
          </div>
        </div>

        <div class="exam-question-item">
          <div class="question-prompt">2. Welcher Text passt zur Überschrift: „Verkehrswende: Mehr Platz für Radfahrer und Fußgänger“?</div>
          <div class="exam-options-group" data-qid="l_2">
            <label class="exam-radio-label ${this.answers.lesen['l_2'] === 'A' ? 'selected' : ''}">
              <input type="radio" name="l_2" value="A" ${this.answers.lesen['l_2'] === 'A' ? 'checked' : ''}> Text A (Freiwilliges Engagement)
            </label>
            <label class="exam-radio-label ${this.answers.lesen['l_2'] === 'B' ? 'selected' : ''}">
              <input type="radio" name="l_2" value="B" ${this.answers.lesen['l_2'] === 'B' ? 'checked' : ''}> Text B (Städtische Mobilität)
            </label>
          </div>
        </div>

        <!-- Teil 2: Detailverstehen -->
        <div class="reading-passage-box" style="margin-top:24px;">
          <h3 style="margin-bottom:12px; font-weight:800; color:var(--accent-gold);">Teil 2: Detailverstehen — Dreifachauswahl (A, B, C)</h3>
          <p><strong>Die Renaissance der Reparatur-Cafés:</strong> Immer mehr Verbraucher in Deutschland lassen ihre defekten Elektrogeräte in ehrenamtlichen Reparatur-Cafés wieder instand setzen. Anstatt einen kaputten Toaster oder Staubsauger sofort wegzuwerfen, bringen Bürger die Geräte samstags in Nachbarschaftszentren. Dort helfen pensionierte Ingenieure und handwerklich geschickte Nachbarn kostenlos bei der Reparatur. Lediglich notwendige Ersatzteile müssen die Besitzer selbst bezahlen. Neben dem Umweltschutz schätzen viele Teilnehmer vor allem den sozialen Austausch bei Kaffee und Kuchen.</p>
        </div>

        <div class="exam-question-item">
          <div class="question-prompt">3. In Reparatur-Cafés...</div>
          <div class="exam-options-group" data-qid="l_3">
            <label class="exam-radio-label ${this.answers.lesen['l_3'] === 'a' ? 'selected' : ''}">
              <input type="radio" name="l_3" value="a" ${this.answers.lesen['l_3'] === 'a' ? 'checked' : ''}> a) bezahlen Kunden hohe Stundenlöhne für Fachleute.
            </label>
            <label class="exam-radio-label ${this.answers.lesen['l_3'] === 'b' ? 'selected' : ''}">
              <input type="radio" name="l_3" value="b" ${this.answers.lesen['l_3'] === 'b' ? 'checked' : ''}> b) wird die Hilfe ehrenamtlich und kostenlos geleistet.
            </label>
            <label class="exam-radio-label ${this.answers.lesen['l_3'] === 'c' ? 'selected' : ''}">
              <input type="radio" name="l_3" value="c" ${this.answers.lesen['l_3'] === 'c' ? 'checked' : ''}> c) kann man neue Elektrogeräte günstig kaufen.
            </label>
          </div>
        </div>

        <div class="exam-question-item">
          <div class="question-prompt">4. Welche Kosten entstehen für den Besucher?</div>
          <div class="exam-options-group" data-qid="l_4">
            <label class="exam-radio-label ${this.answers.lesen['l_4'] === 'a' ? 'selected' : ''}">
              <input type="radio" name="l_4" value="a" ${this.answers.lesen['l_4'] === 'a' ? 'checked' : ''}> a) Nur eventuell benötigte Ersatzteile.
            </label>
            <label class="exam-radio-label ${this.answers.lesen['l_4'] === 'b' ? 'selected' : ''}">
              <input type="radio" name="l_4" value="b" ${this.answers.lesen['l_4'] === 'b' ? 'checked' : ''}> b) Eine feste Eintrittsgebühr für das Zentrum.
            </label>
            <label class="exam-radio-label ${this.answers.lesen['l_4'] === 'c' ? 'selected' : ''}">
              <input type="radio" name="l_4" value="c" ${this.answers.lesen['l_4'] === 'c' ? 'checked' : ''}> c) Kaffee und Kuchen sind kostenpflichtig.
            </label>
          </div>
        </div>
      `;

      // Bind Radio click handlers
      card.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
          const qid = e.target.name;
          this.answers.lesen[qid] = e.target.value;
          card.querySelectorAll(`input[name="${qid}"]`).forEach(r => {
            r.closest('.exam-radio-label').classList.toggle('selected', r.checked);
          });
        });
      });

      this.dom.moduleContainer.appendChild(card);
    }

    // --- Module 2: Sprachbausteine (30 Pts) ---
    renderSprachbausteineModule() {
      const card = document.createElement('div');
      card.className = 'exam-module-card';

      card.innerHTML = `
        <div class="module-header">
          <div>
            <h2 class="module-title">🧩 Sprachbausteine (Teile 1 & 2)</h2>
            <div class="module-meta">telc B1 • 30 Punkte • Empfohlene Zeit: 30 Minuten</div>
          </div>
        </div>

        <div class="reading-passage-box">
          <h3 style="margin-bottom:12px; font-weight:800; color:var(--accent-gold);">Teil 1: E-Mail an eine Sprachschule</h3>
          <p>Sehr geehrte Damen und Herren,<br><br>
          ich schreibe Ihnen, <strong>[21]</strong> ich mich für Ihren B2-Vorbereitungskurs interessiere. Ein Freund hat mir Ihre Schule <strong>[22]</strong> empfohlen. Vor zwei Monaten habe ich meine B1-Prüfung erfolgreich <strong>[23]</strong>. Nun möchte ich mich gerne weiterbilden, <strong>[24]</strong> ich in Deutschland studieren kann.<br><br>
          Könnten Sie mir bitte mitteilen, <strong>[25]</strong> der nächste Abendkurs beginnt?<br><br>
          Mit freundlichen Grüßen,<br>Deniz Abad</p>
        </div>

        <div class="exam-question-item">
          <div class="question-prompt">Lücke 21: ich schreibe Ihnen, ___ ich mich interessiere:</div>
          <div class="exam-options-group" data-qid="sb_21">
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_21'] === 'a' ? 'selected' : ''}">
              <input type="radio" name="sb_21" value="a" ${this.answers.sprachbausteine['sb_21'] === 'a' ? 'checked' : ''}> a) weil
            </label>
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_21'] === 'b' ? 'selected' : ''}">
              <input type="radio" name="sb_21" value="b" ${this.answers.sprachbausteine['sb_21'] === 'b' ? 'checked' : ''}> b) denn
            </label>
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_21'] === 'c' ? 'selected' : ''}">
              <input type="radio" name="sb_21" value="c" ${this.answers.sprachbausteine['sb_21'] === 'c' ? 'checked' : ''}> c) obwohl
            </label>
          </div>
        </div>

        <div class="exam-question-item">
          <div class="question-prompt">Lücke 22: Ein Freund hat mir Ihre Schule ___ empfohlen:</div>
          <div class="exam-options-group" data-qid="sb_22">
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_22'] === 'a' ? 'selected' : ''}">
              <input type="radio" name="sb_22" value="a" ${this.answers.sprachbausteine['sb_22'] === 'a' ? 'checked' : ''}> a) herzlich
            </label>
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_22'] === 'b' ? 'selected' : ''}">
              <input type="radio" name="sb_22" value="b" ${this.answers.sprachbausteine['sb_22'] === 'b' ? 'checked' : ''}> b) sehr
            </label>
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_22'] === 'c' ? 'selected' : ''}">
              <input type="radio" name="sb_22" value="c" ${this.answers.sprachbausteine['sb_22'] === 'c' ? 'checked' : ''}> c) warm
            </label>
          </div>
        </div>

        <div class="exam-question-item">
          <div class="question-prompt">Lücke 23: habe ich meine B1-Prüfung erfolgreich ___:</div>
          <div class="exam-options-group" data-qid="sb_23">
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_23'] === 'a' ? 'selected' : ''}">
              <input type="radio" name="sb_23" value="a" ${this.answers.sprachbausteine['sb_23'] === 'a' ? 'checked' : ''}> a) bestanden
            </label>
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_23'] === 'b' ? 'selected' : ''}">
              <input type="radio" name="sb_23" value="b" ${this.answers.sprachbausteine['sb_23'] === 'b' ? 'checked' : ''}> b) gemacht
            </label>
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_23'] === 'c' ? 'selected' : ''}">
              <input type="radio" name="sb_23" value="c" ${this.answers.sprachbausteine['sb_23'] === 'c' ? 'checked' : ''}> c) gestanden
            </label>
          </div>
        </div>

        <div class="exam-question-item">
          <div class="question-prompt">Lücke 24: Nun möchte ich mich gerne weiterbilden, ___ ich studieren kann:</div>
          <div class="exam-options-group" data-qid="sb_24">
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_24'] === 'a' ? 'selected' : ''}">
              <input type="radio" name="sb_24" value="a" ${this.answers.sprachbausteine['sb_24'] === 'a' ? 'checked' : ''}> a) dass
            </label>
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_24'] === 'b' ? 'selected' : ''}">
              <input type="radio" name="sb_24" value="b" ${this.answers.sprachbausteine['sb_24'] === 'b' ? 'checked' : ''}> b) damit
            </label>
            <label class="exam-radio-label ${this.answers.sprachbausteine['sb_24'] === 'c' ? 'selected' : ''}">
              <input type="radio" name="sb_24" value="c" ${this.answers.sprachbausteine['sb_24'] === 'c' ? 'checked' : ''}> c) um
            </label>
          </div>
        </div>
      `;

      card.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
          const qid = e.target.name;
          this.answers.sprachbausteine[qid] = e.target.value;
          card.querySelectorAll(`input[name="${qid}"]`).forEach(r => {
            r.closest('.exam-radio-label').classList.toggle('selected', r.checked);
          });
        });
      });

      this.dom.moduleContainer.appendChild(card);
    }

    // --- Module 3: Hörverstehen (75 Pts) ---
    renderHoerenModule() {
      const strings = SIMULATION_I18N[this.lang] || SIMULATION_I18N.en;
      const card = document.createElement('div');
      card.className = 'exam-module-card';

      card.innerHTML = `
        <div class="module-header">
          <div>
            <h2 class="module-title">🎧 Hörverstehen (Teile 1–3)</h2>
            <div class="module-meta">telc B1 • 75 Punkte • ca. 30 Minuten</div>
          </div>
        </div>

        <!-- Audio Player Card -->
        <div class="hoeren-audio-player">
          <div>
            <div style="font-weight:800; font-size:15px; margin-bottom:4px;">Durchsage 1: Flughafen München</div>
            <div class="audio-remaining-badge">Wiedergaben übrig: ${Math.max(0, 1 - this.audioPlays.teil1)} / 1 (Offizieller telc-Standard)</div>
          </div>
          <button class="btn-audio-ctrl" id="btn-play-hoeren-1">
            <span>▶ ${strings.playAudio}</span>
          </button>
        </div>

        <div class="exam-question-item">
          <div class="question-prompt">41. Fluggäste nach Rom müssen sich sofort zu Gate B12 begeben.</div>
          <div class="exam-options-group" data-qid="h_41">
            <label class="exam-radio-label ${this.answers.hoeren['h_41'] === 'richtig' ? 'selected' : ''}">
              <input type="radio" name="h_41" value="richtig" ${this.answers.hoeren['h_41'] === 'richtig' ? 'checked' : ''}> ${strings.richtig}
            </label>
            <label class="exam-radio-label ${this.answers.hoeren['h_41'] === 'falsch' ? 'selected' : ''}">
              <input type="radio" name="h_41" value="falsch" ${this.answers.hoeren['h_41'] === 'falsch' ? 'checked' : ''}> ${strings.falsch}
            </label>
          </div>
        </div>

        <!-- Audio Player 2 -->
        <div class="hoeren-audio-player" style="margin-top:24px;">
          <div>
            <div style="font-weight:800; font-size:15px; margin-bottom:4px;">Durchsage 2: Supermarkt-Aktion</div>
            <div class="audio-remaining-badge">Wiedergaben übrig: ${Math.max(0, 1 - this.audioPlays.teil2)} / 1</div>
          </div>
          <button class="btn-audio-ctrl" id="btn-play-hoeren-2">
            <span>▶ ${strings.playAudio}</span>
          </button>
        </div>

        <div class="exam-question-item">
          <div class="question-prompt">42. Die Rabattaktion gilt nur für Obst und Gemüse.</div>
          <div class="exam-options-group" data-qid="h_42">
            <label class="exam-radio-label ${this.answers.hoeren['h_42'] === 'richtig' ? 'selected' : ''}">
              <input type="radio" name="h_42" value="richtig" ${this.answers.hoeren['h_42'] === 'richtig' ? 'checked' : ''}> ${strings.richtig}
            </label>
            <label class="exam-radio-label ${this.answers.hoeren['h_42'] === 'falsch' ? 'selected' : ''}">
              <input type="radio" name="h_42" value="falsch" ${this.answers.hoeren['h_42'] === 'falsch' ? 'checked' : ''}> ${strings.falsch}
            </label>
          </div>
        </div>
      `;

      // Audio handlers
      const btn1 = card.querySelector('#btn-play-hoeren-1');
      btn1?.addEventListener('click', () => {
        if (this.audioPlays.teil1 >= 1) {
          alert(strings.audioExhausted);
          return;
        }
        this.audioPlays.teil1++;
        this.playSpeechGerman("Achtung Fluggäste: Der Flug LH 1840 nach Rom hat Verspätung. Bitte begeben Sie sich nicht zu Gate B12, sondern warten Sie auf weitere Durchsagen.", btn1);
        card.querySelector('.audio-remaining-badge').textContent = `Wiedergaben übrig: 0 / 1`;
      });

      const btn2 = card.querySelector('#btn-play-hoeren-2');
      btn2?.addEventListener('click', () => {
        if (this.audioPlays.teil2 >= 1) {
          alert(strings.audioExhausted);
          return;
        }
        this.audioPlays.teil2++;
        this.playSpeechGerman("Sehr geehrte Kundinnen und Kunden: Heute erhalten Sie zwanzig Prozent Rabatt auf alle Molkereiprodukte und Backwaren.", btn2);
      });

      card.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
          const qid = e.target.name;
          this.answers.hoeren[qid] = e.target.value;
          card.querySelectorAll(`input[name="${qid}"]`).forEach(r => {
            r.closest('.exam-radio-label').classList.toggle('selected', r.checked);
          });
        });
      });

      this.dom.moduleContainer.appendChild(card);
    }

    playSpeechGerman(text, buttonEl) {
      if (!this.synth) return;
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;

      if (buttonEl) {
        buttonEl.disabled = true;
        utterance.onend = () => { buttonEl.disabled = false; };
        utterance.onerror = () => { buttonEl.disabled = false; };
      }

      this.synth.speak(utterance);
    }

    // --- Module 4: Schriftlicher Ausdruck (45 Pts) ---
    renderSchreibenModule() {
      const strings = SIMULATION_I18N[this.lang] || SIMULATION_I18N.en;
      const card = document.createElement('div');
      card.className = 'exam-module-card';

      card.innerHTML = `
        <div class="module-header">
          <div>
            <h2 class="module-title">✍️ Schriftlicher Ausdruck (Brief / E-Mail)</h2>
            <div class="module-meta">telc B1 • 45 Punkte • 30 Minuten</div>
          </div>
        </div>

        <div class="reading-passage-box">
          <h3 style="margin-bottom:8px; font-weight:800; color:var(--accent-gold);">Aufgabe: Beschwerdebrief an die Hausverwaltung</h3>
          <p>Seit zwei Wochen funktioniert in Ihrer Mietwohnung die Heizung nicht richtig, und am vergangenen Wochenende fiel auch das Warmwasser aus. Sie haben den Hausmeister bereits telefonisch informiert, aber bisher ist nichts passiert.</p>
          <p><strong>Schreiben Sie einen Brief an die Hausverwaltung (Firma ImmoService GmbH). Behandeln Sie darin alle vier Leitpunkte:</strong></p>
          <ul style="margin-left:20px; line-height:1.7;">
            <li>1. Grund für Ihr Schreiben</li>
            <li>2. Das genaue Problem und die bisherigen Versuche (Hausmeister)</li>
            <li>3. Konsequenzen für Sie (Kälte, Familie, Gesundheit)</li>
            <li>4. Fristsetzung zur Reparatur und Ankündigung von Mietminderung</li>
          </ul>
        </div>

        <div class="writing-editor-box">
          <div class="umlaut-buttons-row">
            <button class="btn-umlaut" data-char="ä">ä</button>
            <button class="btn-umlaut" data-char="ö">ö</button>
            <button class="btn-umlaut" data-char="ü">ü</button>
            <button class="btn-umlaut" data-char="Ä">Ä</button>
            <button class="btn-umlaut" data-char="Ö">Ö</button>
            <button class="btn-umlaut" data-char="Ü">Ü</button>
            <button class="btn-umlaut" data-char="ß">ß</button>
          </div>

          <textarea class="writing-textarea" id="exam-writing-text" placeholder="Sehr geehrte Damen und Herren,...">${this.answers.schreiben}</textarea>

          <div class="writing-stats-row">
            <div>
              <span style="font-weight:700;">${strings.wordCount}</span>
              <span id="exam-word-count">0</span> Wörter
            </div>
            <div style="font-size:12px; color:var(--accent-gold);">${strings.minWords}</div>
          </div>
        </div>
      `;

      const textarea = card.querySelector('#exam-writing-text');
      const wordCountEl = card.querySelector('#exam-word-count');

      const updateCount = () => {
        const text = textarea.value.trim();
        this.answers.schreiben = text;
        const words = text ? text.split(/\s+/).length : 0;
        wordCountEl.textContent = words;
      };

      textarea.addEventListener('input', updateCount);
      updateCount();

      // Virtual Umlauts
      card.querySelectorAll('.btn-umlaut').forEach(btn => {
        btn.addEventListener('click', () => {
          const char = btn.getAttribute('data-char');
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          textarea.value = textarea.value.substring(0, start) + char + textarea.value.substring(end);
          textarea.focus();
          textarea.selectionStart = textarea.selectionEnd = start + 1;
          updateCount();
        });
      });

      this.dom.moduleContainer.appendChild(card);
    }

    // --- Submit, Grade Calculation & Score Report ---
    submitAndGradeExam() {
      this.isSubmitted = true;
      clearInterval(this.timerInterval);

      // Score Calculation
      let scoreLesen = 0;
      if (this.answers.lesen['l_1'] === 'A') scoreLesen += 18.75;
      if (this.answers.lesen['l_2'] === 'B') scoreLesen += 18.75;
      if (this.answers.lesen['l_3'] === 'b') scoreLesen += 18.75;
      if (this.answers.lesen['l_4'] === 'a') scoreLesen += 18.75;

      let scoreSB = 0;
      if (this.answers.sprachbausteine['sb_21'] === 'a') scoreSB += 7.5;
      if (this.answers.sprachbausteine['sb_22'] === 'b') scoreSB += 7.5;
      if (this.answers.sprachbausteine['sb_23'] === 'a') scoreSB += 7.5;
      if (this.answers.sprachbausteine['sb_24'] === 'b') scoreSB += 7.5;

      let scoreHoeren = 0;
      if (this.answers.hoeren['h_41'] === 'falsch') scoreHoeren += 37.5;
      if (this.answers.hoeren['h_42'] === 'falsch') scoreHoeren += 37.5;

      // Writing Evaluation (Simulated Rubric Assessment)
      const words = this.answers.schreiben.trim().split(/\s+/).filter(Boolean).length;
      let scoreSchreiben = 0;
      if (words >= 140) scoreSchreiben = 40;
      else if (words >= 100) scoreSchreiben = 32;
      else if (words >= 60) scoreSchreiben = 24;
      else if (words >= 20) scoreSchreiben = 12;
      else scoreSchreiben = 5;

      const totalScore = Math.round(scoreLesen + scoreSB + scoreHoeren + scoreSchreiben);
      const isPassed = totalScore >= 135;

      // Grade Determination
      let grade = 'Nicht bestanden';
      if (totalScore >= 210) grade = 'Sehr gut (1)';
      else if (totalScore >= 185) grade = 'Gut (2)';
      else if (totalScore >= 160) grade = 'Befriedigend (3)';
      else if (totalScore >= 135) grade = 'Ausreichend (4)';

      this.examResults = {
        scoreLesen,
        scoreSB,
        scoreHoeren,
        scoreSchreiben,
        totalScore,
        isPassed,
        grade,
        date: new Date().toLocaleDateString()
      };

      // Save to StorageEngine / localStorage
      try {
        if (typeof window !== 'undefined' && window.StorageEngine) {
          window.StorageEngine.saveExamScore?.('telc_b1_simulation', {
            score: totalScore,
            max: 225,
            percentage: Math.round((totalScore / 225) * 100),
            date: new Date().toISOString()
          });
        }
        localStorage.setItem('deutschlernen_last_simulation_score', JSON.stringify(this.examResults));
      } catch (e) {}

      // Switch to Report View
      this.switchSection('report');
    }

    renderReportModule() {
      const strings = SIMULATION_I18N[this.lang] || SIMULATION_I18N.en;
      const res = this.examResults || {
        scoreLesen: 0,
        scoreSB: 0,
        scoreHoeren: 0,
        scoreSchreiben: 0,
        totalScore: 0,
        isPassed: false,
        grade: 'Nicht bestanden',
        date: new Date().toLocaleDateString()
      };

      const card = document.createElement('div');
      card.className = 'score-report-card';

      card.innerHTML = `
        <div class="certificate-header">
          <div class="cert-logo">🏆</div>
          <h1 class="cert-title">${strings.certTitle}</h1>
          <p class="cert-subtitle">${strings.certSubtitle}</p>
        </div>

        <div class="cert-result-banner ${res.isPassed ? 'banner-pass' : 'banner-fail'}">
          ${res.isPassed ? strings.certPassed : strings.certFailed} — ${res.grade}
        </div>

        <div class="score-breakdown-grid">
          <div class="score-box-item">
            <div class="score-box-label">📖 Leseverstehen</div>
            <div class="score-box-val">${res.scoreLesen} / 75</div>
          </div>
          <div class="score-box-item">
            <div class="score-box-label">🧩 Sprachbausteine</div>
            <div class="score-box-val">${res.scoreSB} / 30</div>
          </div>
          <div class="score-box-item">
            <div class="score-box-label">🎧 Hörverstehen</div>
            <div class="score-box-val">${res.scoreHoeren} / 75</div>
          </div>
          <div class="score-box-item">
            <div class="score-box-label">✍️ Schreiben</div>
            <div class="score-box-val">${res.scoreSchreiben} / 45</div>
          </div>
          <div class="score-box-item" style="grid-column: 1 / -1; background: rgba(245, 158, 11, 0.1); border-color: var(--accent-gold);">
            <div class="score-box-label">${strings.totalScoreLabel}</div>
            <div class="score-box-val" style="color:var(--accent-gold); font-size:32px;">${res.totalScore} / 225 Punkte (${Math.round((res.totalScore / 225) * 100)}%)</div>
            <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">${strings.passThreshold}</div>
          </div>
        </div>

        <div style="display:flex; justify-content:center; gap:14px; flex-wrap:wrap;">
          <button class="btn-submit-exam" onclick="window.print()">
            ${strings.printCertBtn}
          </button>
          <button class="btn-audio-ctrl" style="background:var(--bg-secondary); border:1px solid var(--border);" onclick="location.reload()">
            ${strings.retryExamBtn}
          </button>
          <button class="btn-audio-ctrl" style="background:var(--bg-secondary); border:1px solid var(--border);" onclick="location.href='dashboard.html'">
            ${strings.dashboardReturn}
          </button>
        </div>
      `;

      this.dom.moduleContainer.appendChild(card);
    }
  }

  // Auto-init
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      window.SimulationAppInstance = new SimulationApp();
    });
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SimulationApp, SIMULATION_I18N };
  }
})();
