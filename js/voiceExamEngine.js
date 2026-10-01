/**
 * DEUTSCHLERNEN - VOICE EXAM ENGINE & ORAL EXAM EVALUATOR
 * Inspired by clinical voice examination architecture (Web Speech API + Audio Analysis)
 * Tailored for telc Deutsch B1 / B2 Mündliche Prüfung (Sprechen)
 */

(function (global) {
  'use strict';

  // Common German Stop Words to exclude when extracting substantive content keywords
  const GERMAN_STOP_WORDS = new Set([
    'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einer', 'einem', 'einen', 'eines',
    'und', 'oder', 'aber', 'bei', 'mit', 'von', 'nach', 'zu', 'im', 'in', 'auf', 'für', 'um',
    'ist', 'sind', 'war', 'waren', 'wird', 'werden', 'hat', 'haben', 'hatte', 'hatten',
    'kann', 'können', 'konnte', 'muss', 'müssen', 'musste', 'soll', 'sollte', 'sollten',
    'will', 'wollen', 'wollte', 'darf', 'dürfen', 'durfte', 'möchte', 'möchten',
    'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'mich', 'mir', 'dich', 'dir', 'uns', 'euch', 'ihnen',
    'mein', 'meine', 'meinen', 'meinem', 'dein', 'deine', 'sein', 'seine', 'ihr', 'ihre', 'unser', 'unsere',
    'als', 'wie', 'so', 'auch', 'noch', 'schon', 'nicht', 'nur', 'sehr', 'viel', 'viele', 'etwas',
    'hier', 'da', 'dort', 'dann', 'mal', 'ja', 'nein', 'doch', 'gut', 'immer', 'wieder'
  ]);

  // Essential B1 / B2 Connectors & Redemittel Formulas with CEFR Scoring Weights
  const B1_REDEMITTEL_CATALOG = [
    // Opinion & Point of view
    { id: 'opinion_meiner_meinung', pattern: /meiner meinung nach/i, label: 'Meiner Meinung nach...', level: 'B1', weight: 1.2 },
    { id: 'opinion_ich_finde', pattern: /ich (finde|denke|glaube),? dass/i, label: 'Ich finde / denke, dass...', level: 'B1', weight: 1.0 },
    { id: 'opinion_standpunkt', pattern: /von meinem standpunkt/i, label: 'Von meinem Standpunkt aus...', level: 'B2', weight: 1.3 },

    // Proposals & Suggestions (Teil 3 Core)
    { id: 'prop_ich_schlage_vor', pattern: /ich schlage vor,? dass/i, label: 'Ich schlage vor, dass...', level: 'B1', weight: 1.5 },
    { id: 'prop_wie_waere_es', pattern: /wie w(ä|ae)re es,? wenn/i, label: 'Wie wäre es, wenn...?', level: 'B1', weight: 1.4 },
    { id: 'prop_was_haeltst_du', pattern: /was h(ä|ae)ltst du davon/i, label: 'Was hältst du davon, wenn...?', level: 'B1', weight: 1.4 },
    { id: 'prop_koennten_wir', pattern: /wir k(ö|oe)nnten (auch|vielleicht|zusammen)/i, label: 'Wir könnten vielleicht...', level: 'B1', weight: 1.2 },

    // Agreement & Approval
    { id: 'agree_einverstanden', pattern: /einverstanden|gute idee|prima idee|ausgezeichnete idee/i, label: 'Einverstanden / Gute Idee', level: 'B1', weight: 1.1 },
    { id: 'agree_zustimmen', pattern: /ich stimme dir zu|da hast du recht|ganz genau/i, label: 'Ich stimme dir zu / Da hast du recht', level: 'B1', weight: 1.2 },

    // Polite Disagreement & Alternatives
    { id: 'disagree_widersprechen', pattern: /das ist eine gute idee,? aber|einerseits.*andererseits/i, label: 'Das ist gut, aber... / Einerseits... andererseits', level: 'B1', weight: 1.4 },
    { id: 'disagree_besser_waere', pattern: /besser w(ä|ae)re es|ich bin mir nicht sicher/i, label: 'Besser wäre es / Ich bin nicht sicher', level: 'B1', weight: 1.2 },
    { id: 'disagree_anderer_vorschlag', pattern: /ich h(ä|ae)tte einen anderen vorschlag/i, label: 'Ich hätte einen anderen Vorschlag', level: 'B2', weight: 1.5 },

    // Structure & Sequencing (Teil 2 Core)
    { id: 'struct_zuerst', pattern: /zuerst|erstens|zu beginn/i, label: 'Zuerst / Erstens / Zu Beginn', level: 'B1', weight: 1.0 },
    { id: 'struct_danach', pattern: /danach|anschlie(ß|ss)end|au(ß|ss)erdem/i, label: 'Danach / Außerdem', level: 'B1', weight: 1.0 },
    { id: 'struct_vorteil_nachteil', pattern: /(ein|der) gro(ß|ss)e?r? vorteil|nachteil ist|auf der einen seite/i, label: 'Ein großer Vorteil / Nachteil ist...', level: 'B1', weight: 1.4 },
    { id: 'struct_heimatland', pattern: /in meinem heimatland|in meinem land|bei uns/i, label: 'In meinem Heimatland...', level: 'B1', weight: 1.3 },
    { id: 'struct_erfahrung', pattern: /meine pers(ö|oe)nliche erfahrung|ich habe die erfahrung gemacht/i, label: 'Meine persönliche Erfahrung ist...', level: 'B1', weight: 1.3 },
    { id: 'struct_zusammenfassung', pattern: /zusammenfassend|zum schluss|insgesamt kann man sagen/i, label: 'Zusammenfassend / Zum Schluss...', level: 'B1', weight: 1.3 },

    // Subordinate Clauses (Grammar indicators)
    { id: 'subord_weil', pattern: /weil /i, label: 'Nebensatz mit "weil"', level: 'A2', weight: 0.8 },
    { id: 'subord_obwohl', pattern: /obwohl /i, label: 'Konzessivsatz mit "obwohl"', level: 'B1', weight: 1.4 },
    { id: 'subord_damit', pattern: /damit /i, label: 'Finalsatz mit "damit"', level: 'B1', weight: 1.3 },
    { id: 'subord_deshalb', pattern: /deshalb|deswegen|aus diesem grund/i, label: 'Kausale Konnektoren (deshalb / aus diesem Grund)', level: 'B1', weight: 1.1 }
  ];

  // Official Speaking Examination Tasks Catalog (telc Deutsch B1 Format)
  const SPEAKING_EXAM_TOPICS = {
    teil1: [
      {
        id: 't1_default',
        title: 'Teil 1: Kontaktaufnahme (Sich vorstellen)',
        titleTr: 'Bölüm 1: Tanışma (Kendini Tanıtma)',
        durationMin: 3,
        description: 'Stellen Sie sich Ihrem Gesprächspartner und den Prüfern vor. Gehen Sie auf die folgenden Leitpunkte ein.',
        descriptionTr: 'Kendinizi sınav jürisine ve partnerinize tanıtın. Aşağıdaki yönergelere değinin.',
        leitpunkte: [
          { key: 'name', label: 'Name & Herkunft (Ad ve Memleket)', keywords: ['name', 'heiße', 'komme', 'herkunft', 'geboren', 'stadt', 'land'] },
          { key: 'wohnen', label: 'Wohnort & Wohnsituation (İkamet ve Yaşam)', keywords: ['wohne', 'wohnung', 'leben', 'lebe', 'deutschland', 'bezirk', 'zimmer', 'haus'] },
          { key: 'familie', label: 'Familie & Kinder (Aile ve Çocuklar)', keywords: ['familie', 'verheiratet', 'ledig', 'kinder', 'sohn', 'tochter', 'eltern', 'geschwister', 'allein'] },
          { key: 'beruf', label: 'Beruf & Ausbildung (Meslek ve Eğitim)', keywords: ['beruf', 'arbeite', 'beruflich', 'gelernt', 'studium', 'universität', 'schule', 'arzt', 'ingenieur', 'bereich', 'branche'] },
          { key: 'sprachen', label: 'Sprachen lernen (Diller ve Almanca)', keywords: ['sprache', 'sprachen', 'deutsch', 'englisch', 'muttersprache', 'lerne', 'gelernt', 'niveau', 'kurs'] },
          { key: 'hobbys', label: 'Hobbys & Freizeit (Hobiler ve Boş Zaman)', keywords: ['hobby', 'hobbys', 'freizeit', 'sport', 'musik', 'lesen', 'kochen', 'wochenende', 'gerne', 'reise'] }
        ]
      }
    ],
    teil2: [
      {
        id: 't2_haustiere',
        title: 'Teil 2: Präsentation – Haustiere (Evcil Hayvanlar)',
        titleTr: 'Bölüm 2: Sunum – Evcil Hayvanlar',
        durationMin: 4,
        description: 'Präsentieren Sie ein kurzes Thema (ca. 2-3 Minuten). Berichten Sie über Ihre Erfahrungen, die Situation in Ihrem Heimatland sowie Vor- und Nachteile.',
        descriptionTr: 'Kısa bir konu sunumu yapın (yaklaşık 2-3 dk). Kendi deneyiminizden, memleketinizdeki durumdan ve avantaj/dezavantajlardan bahsedin.',
        leitpunkte: [
          { key: 'erfahrung', label: 'Eigene persönliche Erfahrung (Kendi Deneyiminiz)', keywords: ['erfahrung', 'persönlich', 'gehabt', 'früher', 'hatte', 'hund', 'katze', 'tier'] },
          { key: 'heimatland', label: 'Situation im Heimatland (Memleketteki Durum)', keywords: ['heimatland', 'türkei', 'land', 'viele', 'menschen', 'häufig', 'wohnung', 'dorf'] },
          { key: 'vorteile', label: 'Vorteile von Haustieren (Evcil Hayvanın Avantajları)', keywords: ['vorteil', 'vorteile', 'freund', 'einsam', 'gesundheit', 'spazieren', 'freude', 'treu'] },
          { key: 'nachteile', label: 'Nachteile & Pflichten (Dezavantajlar ve Sorumluluklar)', keywords: ['nachteil', 'nachteile', 'kosten', 'zeit', 'tierarzt', 'schmutz', 'urlaub', 'pflege', 'aufwand'] },
          { key: 'meinung', label: 'Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)', keywords: ['meinung', 'fazit', 'schluss', 'finde', 'wichtig', 'verantwortung', 'zusammenfassend'] }
        ]
      },
      {
        id: 't2_medien',
        title: 'Teil 2: Präsentation – Soziale Medien & Internet (Sosyal Medya)',
        titleTr: 'Bölüm 2: Sunum – Sosyal Medya ve İnternet',
        durationMin: 4,
        description: 'Präsentieren Sie das Thema "Nutzung sozialer Medien im Alltag".',
        descriptionTr: '"Günlük Yaşamda Sosyal Medya Kullanımı" konusunu sunun.',
        leitpunkte: [
          { key: 'erfahrung', label: 'Eigene persönliche Erfahrung (Kendi Deneyiminiz)', keywords: ['erfahrung', 'nutze', 'täglich', 'instagram', 'youtube', 'smartphone', 'handy', 'internet', 'zeit'] },
          { key: 'heimatland', label: 'Situation im Heimatland (Memleketteki Durum)', keywords: ['heimatland', 'jugendliche', 'junge', 'beliebt', 'überall', 'verbreitet', 'netzwerk'] },
          { key: 'vorteile', label: 'Vorteile der Vernetzung (Sosyal Ağların Avantajları)', keywords: ['vorteil', 'vorteile', 'schnell', 'kontakt', 'nachrichten', 'freunde', 'information', 'lernen'] },
          { key: 'nachteile', label: 'Nachteile & Risiken (Riskler ve Dezavantajlar)', keywords: ['nachteil', 'nachteile', 'sucht', 'zeitverschwendung', 'datenschutz', 'falsch', 'augen', 'stress'] },
          { key: 'meinung', label: 'Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)', keywords: ['meinung', 'denke', 'glaube', 'grenze', 'balance', 'sinnvoll', 'kontrolle', 'fazit'] }
        ]
      },
      {
        id: 't2_verkehr',
        title: 'Teil 2: Präsentation – Öffentlicher Nahverkehr vs. Auto (Toplu Taşıma)',
        titleTr: 'Bölüm 2: Sunum – Toplu Taşıma mı Özel Araç mı?',
        durationMin: 4,
        description: 'Sollte man in der Stadt mehr Bus & Bahn oder das eigene Auto nutzen?',
        descriptionTr: 'Şehirde otobüs/tren mi yoksa şahsi araba mı tercih edilmeli?',
        leitpunkte: [
          { key: 'erfahrung', label: 'Eigene Erfahrung bei der Fortbewegung (Kendi Deneyiminiz)', keywords: ['fahre', 'bahn', 'zug', 'bus', 'auto', 'fahrrad', 'ticket', 'pendeln', 'arbeit'] },
          { key: 'heimatland', label: 'Situation im Heimatland (Memleketteki Durum)', keywords: ['heimatland', 'verkehr', 'stau', 'infrastruktur', 'metro', 'stadt', 'überfüllt'] },
          { key: 'vorteile', label: 'Vorteile von Bus & Bahn (Toplu Taşımanın Avantajları)', keywords: ['vorteil', 'umwelt', 'klima', 'co2', 'günstig', 'deutschlandticket', 'entspannt', 'parkplatz'] },
          { key: 'nachteile', label: 'Nachteile & Verspätungen (Dezavantajlar ve Gecikmeler)', keywords: ['nachteil', 'verspätung', 'ausfall', 'streik', 'unzuverlässig', 'flexibilität', 'voll'] },
          { key: 'meinung', label: 'Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)', keywords: ['meinung', 'kombination', 'zukunft', 'besser', 'investieren', 'zusammenfassend'] }
        ]
      }
    ],
    teil3: [
      {
        id: 't3_abschiedsparty',
        title: 'Teil 3: Gemeinsam planen – Abschiedsparty für einen Kollegen',
        titleTr: 'Bölüm 3: Birlikte Planlama – İş Arkadaşı İçin Veda Partisi',
        durationMin: 5,
        description: 'Ein Kollege verlässt die Firma / den Sprachkurs. Planen Sie gemeinsam mit Ihrem Partner eine gelungene Abschiedsfeier.',
        descriptionTr: 'Bir çalışma/kurs arkadaşınız ayrılıyor. Partnerinizle birlikte veda kutlamasını planlayın.',
        leitpunkte: [
          { key: 'wann', label: 'Wann? (Zaman, Tag & Uhrzeit)', keywords: ['wann', 'zeit', 'samstag', 'freitag', 'abend', 'uhr', 'termin', 'wochenende', 'nächste'] },
          { key: 'wo', label: 'Wo? (Ort, Raum oder Draußen)', keywords: ['wo', 'ort', 'raum', 'park', 'restaurant', 'café', 'garten', 'büro', 'bürgerhaus', 'mieten'] },
          { key: 'essen', label: 'Essen & Trinken (Yiyecek ve İçecekler)', keywords: ['essen', 'trinken', 'getränke', 'kuchen', 'buffet', 'pizza', 'fingerfood', 'mitbringen', 'kaufen'] },
          { key: 'geschenk', label: 'Geschenk & Überraschung (Hediye ve Sürpriz)', keywords: ['geschenk', 'überraschung', 'karte', 'gutschein', 'foto', 'blumen', 'sammeln', 'buch'] },
          { key: 'kosten', label: 'Wer bezahlt wofür? (Masrafların Bölüşümü)', keywords: ['bezahlen', 'kosten', 'geld', 'euro', 'teilen', 'hälfte', 'kasse', 'budget', 'pro person'] }
        ]
      },
      {
        id: 't3_wochenendausflug',
        title: 'Teil 3: Gemeinsam planen – Wochenendausflug',
        titleTr: 'Bölüm 3: Birlikte Planlama – Hafta Sonu Gezisi',
        durationMin: 5,
        description: 'Sie und Ihr Partner möchten am Wochenende einen gemeinsamen Tagesausflug machen. Planen Sie die Einzelheiten.',
        descriptionTr: 'Partnerinizle hafta sonu günübirlik geziye çıkmak istiyorsunuz. Detayları planlayın.',
        leitpunkte: [
          { key: 'wohin', label: 'Wohin? (Gidilecek Yer & Rota)', keywords: ['wohin', 'ziel', 'see', 'berge', 'museum', 'köln', 'düsseldorf', 'natur', 'stadt'] },
          { key: 'verkehr', label: 'Wie dorthin? (Ulaşım Aracı)', keywords: ['zug', 'bahn', 'auto', 'deutschlandticket', 'ticket', 'abfahrt', 'bahnhof'] },
          { key: 'verpflegung', label: 'Verpflegung & Picknick (Yiyecek & İçecek)', keywords: ['picknick', 'essen', 'sandwiches', 'wasser', 'restaurant', 'proviant', 'mitnehmen'] },
          { key: 'programm', label: 'Aktivitäten & Programm (Gezilecek Yerler)', keywords: ['programm', 'spaziergang', 'schloss', 'führung', 'besichtigen', 'fotos', 'schwimmen'] },
          { key: 'schlechtes_wetter', label: 'Plan B bei schlechtem Wetter (Hava Bozulursa)', keywords: ['wetter', 'regen', 'plan b', 'drinnen', 'kino', 'therme', 'regenschirm'] }
        ]
      }
    ],
    freies_sprechen: [
      {
        id: 'free_general',
        title: 'Freies Sprechen & Aussprachetraining',
        titleTr: 'Serbest Konuşma ve Telaffuz Pratiği',
        durationMin: 5,
        description: 'Sprechen Sie frei über ein beliebiges Thema oder beantworten Sie spontane Fragen. Die KI analysiert Ihren Redefluss, Wortschatz und B1-Konnektoren.',
        descriptionTr: 'İstediğiniz bir konuda serbest konuşun veya spontane cevaplar verin. Sistem akıcılığınızı, kelime dağarcığınızı ve B1 bağlaçlarınızı analiz eder.',
        leitpunkte: [
          { key: 'fluss', label: 'Flüssiger Redefluss & Struktur', keywords: ['weil', 'deshalb', 'obwohl', 'jedoch', 'außerdem', 'zudem', 'nämlich'] },
          { key: 'vielfalt', label: 'Thematischer Wortschatz', keywords: ['wichtig', 'bedeutung', 'gesellschaft', 'zukunft', 'situation', 'möglichkeit'] },
          { key: 'haltung', label: 'Eigene Argumente & Beispiele', keywords: ['beispiel', 'meinung', 'erfahrung', 'standpunkt', 'glaube', 'überzeugt'] }
        ]
      }
    ]
  };

  /**
   * Main Engine Class
   */
  class VoiceExamEngine {
    constructor(options = {}) {
      this.options = Object.assign({
        lang: 'de-DE',
        continuous: true,
        interimResults: true
      }, options);

      this.recognition = null;
      this.isListening = false;
      this.transcript = '';
      this.interimTranscript = '';
      this.onResultCallback = null;
      this.onStatusCallback = null;
      this.supported = false;

      this.initRecognition();
    }

    initRecognition() {
      const SpeechAPI = global.SpeechRecognition || global.webkitSpeechRecognition;
      if (SpeechAPI) {
        this.supported = true;
        this.recognition = new SpeechAPI();
        this.recognition.continuous = this.options.continuous;
        this.recognition.interimResults = this.options.interimResults;
        this.recognition.lang = this.options.lang;

        this.recognition.onstart = () => {
          this.isListening = true;
          if (this.onStatusCallback) this.onStatusCallback('listening');
        };

        this.recognition.onresult = (event) => {
          let interim = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            const res = event.results[i];
            if (res && res[0]) {
              if (res.isFinal) {
                this.transcript += res[0].transcript + ' ';
              } else {
                interim += res[0].transcript;
              }
            }
          }
          this.interimTranscript = interim;
          if (this.onResultCallback) {
            this.onResultCallback({
              finalText: this.transcript.trim(),
              interimText: interim.trim(),
              fullText: (this.transcript + interim).trim()
            });
          }
        };

        this.recognition.onerror = (event) => {
          if (this.onStatusCallback) this.onStatusCallback('error', event.error);
        };

        this.recognition.onend = () => {
          this.isListening = false;
          if (this.onStatusCallback) this.onStatusCallback('stopped');
        };
      } else {
        this.supported = false;
      }
    }

    setLanguage(lang) {
      this.options.lang = lang;
      if (this.recognition) {
        this.recognition.lang = lang;
      }
    }

    startListening(onResult, onStatus) {
      if (!this.supported) {
        if (onStatus) onStatus('unsupported');
        return false;
      }

      this.onResultCallback = onResult;
      this.onStatusCallback = onStatus;
      this.transcript = '';
      this.interimTranscript = '';

      try {
        this.recognition.start();
        return true;
      } catch (e) {
        return false;
      }
    }

    stopListening() {
      if (this.recognition && this.isListening) {
        try {
          this.recognition.stop();
        } catch (e) {}
      }
      this.isListening = false;
    }

    /**
     * Extracts substantive vocabulary keywords from candidate's spoken German
     * Cleans punctuation, converts to lower case, and filters stop words.
     * @param {string} text
     * @returns {Array<string>} Array of unique substantive keywords
     */
    static extractKeywords(text) {
      if (!text || typeof text !== 'string') return [];
      const clean = text
        .replace(/<[^>]*>/g, ' ')
        .toLowerCase()
        .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'«»]/g, ' ');

      const tokens = clean.split(/\s+/).filter(Boolean);
      const keywords = new Set();

      tokens.forEach(tok => {
        if (tok.length >= 3 && !GERMAN_STOP_WORDS.has(tok)) {
          keywords.add(tok);
        }
      });

      return Array.from(keywords);
    }

    /**
     * Detects B1 / B2 Connectors & Redemittel used in spoken text
     * @param {string} spokenText
     * @returns {Array<object>} Detected Redemittel objects with count and match text
     */
    static detectRedemittel(spokenText) {
      if (!spokenText || typeof spokenText !== 'string') return [];
      const detected = [];

      B1_REDEMITTEL_CATALOG.forEach(rm => {
        const matches = spokenText.match(rm.pattern);
        if (matches) {
          detected.push({
            id: rm.id,
            label: rm.label,
            level: rm.level,
            weight: rm.weight,
            matchedSnippet: matches[0]
          });
        }
      });

      return detected;
    }

    /**
     * Evaluates candidate spoken exam answer against official Leitpunkte criteria
     * @param {string} spokenText - Full transcribed text from candidate
     * @param {object} topic - Speaking topic object containing leitpunkte
     * @returns {object} Comprehensive evaluation report with scores and feedback
     */
    static evaluateSpokenAnswer(spokenText, topic) {
      const cleanText = (spokenText || '').trim();
      const wordCount = cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;
      const spokenKeywords = VoiceExamEngine.extractKeywords(cleanText);
      const detectedRedemittel = VoiceExamEngine.detectRedemittel(cleanText);

      const leitpunkte = (topic && topic.leitpunkte) ? topic.leitpunkte : [];
      const coveredLeitpunkte = [];
      const missedLeitpunkte = [];
      const matchedKeywordsSet = new Set();

      leitpunkte.forEach(lp => {
        const targetKeywords = lp.keywords || [];
        let hits = 0;
        const matchedHere = [];

        targetKeywords.forEach(kw => {
          const normKw = kw.toLowerCase();
          const found = spokenKeywords.some(sk => sk.includes(normKw) || normKw.includes(sk));
          if (found) {
            hits++;
            matchedHere.push(kw);
            matchedKeywordsSet.add(kw);
          }
        });

        // If at least 1-2 key terms or relevant keywords matched
        const isCovered = (targetKeywords.length <= 3 && hits >= 1) || (hits >= 2) || (targetKeywords.length > 0 && (hits / targetKeywords.length >= 0.25));

        const lpResult = {
          key: lp.key,
          label: lp.label,
          hits,
          matchedKeywords: matchedHere,
          isCovered
        };

        if (isCovered) {
          coveredLeitpunkte.push(lpResult);
        } else {
          missedLeitpunkte.push(lpResult);
        }
      });

      // Criterion 1: Aufgabengerechtheit (Task Completion / Leitpunkte) - Max 25
      const leitpunktRatio = leitpunkte.length > 0 ? (coveredLeitpunkte.length / leitpunkte.length) : 0.5;
      const scoreAufgabe = Math.round(leitpunktRatio * 25);

      // Criterion 2: Redemittel & Struktur (Connectors & Flow) - Max 25
      const redemittelScoreRaw = detectedRedemittel.reduce((acc, r) => acc + (r.weight * 5), 0);
      const scoreStruktur = Math.min(25, Math.round(redemittelScoreRaw));

      // Criterion 3: Wortschatz & Lexikalische Vielfalt - Max 25
      // Expected minimum 40 words for short tasks, 80 for presentation/dialogue
      const vocabBase = Math.min(15, Math.round((wordCount / 60) * 15));
      const keywordBonus = Math.min(10, Math.round((spokenKeywords.length / 15) * 10));
      const scoreWortschatz = Math.min(25, vocabBase + keywordBonus);

      // Criterion 4: Flüssigkeit & Gesamteindruck (Length & Completeness) - Max 25
      let scoreFlussigkeit = 10;
      if (wordCount >= 90) scoreFlussigkeit = 25;
      else if (wordCount >= 60) scoreFlussigkeit = 21;
      else if (wordCount >= 35) scoreFlussigkeit = 17;
      else if (wordCount >= 15) scoreFlussigkeit = 12;

      // Overall Score: Max 100 points, 60% passing mark for telc B1 (Pass threshold: 60/100)
      const totalScore = Math.min(100, Math.round(scoreAufgabe + scoreStruktur + scoreWortschatz + scoreFlussigkeit));
      const isPassed = totalScore >= 60;

      // Feedback message based on performance
      let verdict = '';
      let verdictTr = '';
      if (totalScore >= 85) {
        verdict = 'Sehr gut! Hervorragende Leistung mit reichhaltigen B1/B2-Redemitteln und vollständiger Erfüllung aller Leitpunkte.';
        verdictTr = 'Çok İyi! Harika bir performans, zengin B1/B2 kalıpları ve tüm Leitpunkt yönergelerinin eksiksiz tamamlanması.';
      } else if (totalScore >= 70) {
        verdict = 'Gut bestanden! Solide Struktur und gute Ausdrucksweise. Sie können noch an Übergängen und Details feilen.';
        verdictTr = 'İyi Dereceyle Geçti! Sağlam bir yapı ve iyi ifade kabiliyeti. Bağlaçlar ve detaylar biraz daha zenginleştirilebilir.';
      } else if (totalScore >= 60) {
        verdict = 'Bestanden (Ausreichend). Das Zielniveau wurde knapp erreicht. Bitte mehr auf Konnektoren (weil, obwohl, deshalb) und alle Prüfungspunkte achten.';
        verdictTr = 'Geçti (Yeterli). B1 barajı aşıldı ancak bağlaçlara (weil, obwohl, deshalb) ve eksik kalan soru noktalarına daha fazla dikkat edilmeli.';
      } else {
        verdict = 'Nicht bestanden. Bitte sprechen Sie ausführlicher, nutzen Sie die Redemittel-Vorgaben und decken Sie alle geforderten Punkte ab.';
        verdictTr = 'Kaldı (Geliştirilmeli). Lütfen daha uzun ve detaylı konuşun, önerilen kalıp ifadeleri kullanın ve tüm Leitpunkt maddelerine değinin.';
      }

      return {
        wordCount,
        uniqueKeywordsCount: spokenKeywords.length,
        matchedKeywords: Array.from(matchedKeywordsSet),
        detectedRedemittel,
        coveredLeitpunkte,
        missedLeitpunkte,
        scores: {
          aufgabe: scoreAufgabe,
          struktur: scoreStruktur,
          wortschatz: scoreWortschatz,
          flussigkeit: scoreFlussigkeit,
          total: totalScore
        },
        isPassed,
        verdict,
        verdictTr
      };
    }
  }

  // Export for node.js test suites & browser window
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      VoiceExamEngine,
      SPEAKING_EXAM_TOPICS,
      B1_REDEMITTEL_CATALOG,
      GERMAN_STOP_WORDS
    };
  } else {
    global.VoiceExamEngine = VoiceExamEngine;
    global.SPEAKING_EXAM_TOPICS = SPEAKING_EXAM_TOPICS;
    global.B1_REDEMITTEL_CATALOG = B1_REDEMITTEL_CATALOG;
  }
})(typeof window !== 'undefined' ? window : this);
