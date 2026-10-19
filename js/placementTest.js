/**
 * DeutschLernen - 15-Question Adaptive CEFR Placement Test (Einstufungstest)
 * Accurately diagnoses proficiency from A1 (Beginner) to C2 (Native Mastery).
 * Features:
 * - 15 High-Yield Authentic Grammar & Syntax Questions (A1 to C2)
 * - 100% 5-Language Translation Parity (DE, EN, TR, AR, UK)
 * - Instant Pedagogical Feedback & Grammar Explanations
 * - CEFR Level Determination Algorithm
 * - 1-Click Goal & Track Application into DeutschLernen Portal
 */

(function () {
  'use strict';

  const PLACEMENT_QUESTIONS = [
    // --- Level A1 (Questions 1 - 3) ---
    {
      id: 1,
      level: 'A1',
      sentence: "Das ist ___ Tisch für das Arbeitszimmer.",
      prompt: {
        de: "Wählen Sie den richtigen bestimmten Artikel im Nominativ:",
        en: "Choose the correct definite article in the nominative case:",
        tr: "Yalın halde (Nominativ) doğru belirli artikeli seçin:",
        ar: "اختر أداة التعريف الصحيحة في حالة الرفع (Nominativ):",
        uk: "Виберіть правильний означений артикль у називному відмінку (Nominativ):"
      },
      options: ["der", "die", "das", "den"],
      correct: 0,
      explanation: {
        de: "„Tisch“ ist ein maskulines Nomen (der Tisch) und steht hier als Subjektergänzung im Nominativ.",
        en: "'Tisch' is a masculine noun (der Tisch) and stands here as a predicate noun in the nominative case.",
        tr: "'Tisch' eril (maskulin) bir isimdir (der Tisch) ve burada yalın halde (Nominativ) yer almaktadır.",
        ar: "كلمة 'Tisch' اسم مذكر (der Tisch) وتأتي هنا في حالة الرفع (Nominativ).",
        uk: "'Tisch' — іменник чоловічого роду (der Tisch) і вживається тут у називному відмінку (Nominativ)."
      }
    },
    {
      id: 2,
      level: 'A1',
      sentence: "Woher ___ du? — Ich komme aus Ankara.",
      prompt: {
        de: "Wählen Sie die richtige Verbkonjugation im Präsens:",
        en: "Choose the correct present tense verb conjugation:",
        tr: "Şimdiki zamanda doğru fiil çekimini seçin:",
        ar: "اختر تصريف الفعل الصحيح في المضارع:",
        uk: "Виберіть правильну форму дієслова в теперішньому часі:"
      },
      options: ["kommst", "kommen", "kommt", "komme"],
      correct: 0,
      explanation: {
        de: "Die 2. Person Singular („du“) verlangt im Präsens regelmäßig die Endung „-st“: du kommst.",
        en: "The second-person singular pronoun 'du' takes the regular ending '-st' in the present tense: du kommst.",
        tr: "2. tekil şahıs olan 'du' zamiri şimdiki zamanda düzenli olarak '-st' eki alır: du kommst.",
        ar: "ضمير المخاطب المفرد 'du' يأخذ اللاحقة القياسية '-st' في المضارع: du kommst.",
        uk: "Займенник 2-ї особи однини 'du' у теперішньому часі приймає закінчення '-st': du kommst."
      }
    },
    {
      id: 3,
      level: 'A1',
      sentence: "Haben Sie ein Auto? — Nein, ich habe ___ Auto.",
      prompt: {
        de: "Wählen Sie den richtigen Negationsartikel im Akkusativ:",
        en: "Choose the correct negative article in the accusative case:",
        tr: "İsmin -i halinde (Akkusativ) doğru olumsuzluk artikelini seçin:",
        ar: "اختر أداة النفي الصحيحة في حالة النصب (Akkusativ):",
        uk: "Виберіть правильний заперечний артикль у знахідному відмінку (Akkusativ):"
      },
      options: ["kein", "nicht", "keine", "keinen"],
      correct: 0,
      explanation: {
        de: "„Auto“ ist ein neutrales Nomen (das Auto). Im Akkusativ lautet der Negationsartikel „kein“.",
        en: "'Auto' is a neuter noun (das Auto). In the accusative case, the negative article is 'kein'.",
        tr: "'Auto' nötr bir isimdir (das Auto). İsmin -i halinde (Akkusativ) olumsuzluk artikeli 'kein' olur.",
        ar: "'Auto' اسم محايد (das Auto). في حالة النصب (Akkusativ) تكون أداة النفي 'kein'.",
        uk: "'Auto' — іменник середнього роду (das Auto). У знахідному відмінку заперечний артикль — 'kein'."
      }
    },

    // --- Level A2 (Questions 4 - 6) ---
    {
      id: 4,
      level: 'A2',
      sentence: "Ich bin sehr müde, deshalb ___ ich heute früher schlafen gehen.",
      prompt: {
        de: "Wählen Sie das passende Modalverb nach Sinn:",
        en: "Choose the appropriate modal verb according to meaning:",
        tr: "Anlama en uygun modal fiili seçin:",
        ar: "اختر الفعل المساعد المناسب للمعنى:",
        uk: "Виберіть відповідне модальне дієслово за змістом:"
      },
      options: ["möchte", "darf", "soll", "kannst"],
      correct: 0,
      explanation: {
        de: "„möchte“ drückt den persönlichen Wunsch aus („ich möchte früher schlafen gehen“).",
        en: "'möchte' expresses a polite personal desire/wish ('I would like to go to sleep earlier').",
        tr: "'möchte' kişisel bir isteği/arzuyu ifade eder ('daha erken uyumak istiyorum').",
        ar: "'möchte' يعبر عن الرغبة الشخصية والنية المهذبة ('أود أن أنام مبكراً اليوم').",
        uk: "'möchte' виражає особисте бажання або намір ('я хотів би піти спати раніше')."
      }
    },
    {
      id: 5,
      level: 'A2',
      sentence: "Gestern ___ meine Schwester mit dem Zug nach Berlin gefahren.",
      prompt: {
        de: "Wählen Sie das richtige Hilfsverb für das Perfekt:",
        en: "Choose the correct auxiliary verb for the Perfekt tense:",
        tr: "Geçmiş zaman (Perfekt) için doğru yardımcı fiili seçin:",
        ar: "اختر الفعل المساعد الصحيح للماضي التام (Perfekt):",
        uk: "Виберіть правильне допоміжне дієслово для минулого часу (Perfekt):"
      },
      options: ["ist", "hat", "wird", "war"],
      correct: 0,
      explanation: {
        de: "Verben der Ortsveränderung (fahren, gehen, fliegen) bilden das Perfekt mit „sein“: ist gefahren.",
        en: "Verbs indicating a change of location (fahren, gehen, fliegen) form the Perfekt with 'sein': ist gefahren.",
        tr: "Yer/konum değişikliği bildiren fiiller (fahren, gehen, fliegen) Perfekt zamanını 'sein' ile kurar: ist gefahren.",
        ar: "أفعال الحركة والانتقال المكاني (fahren, gehen, fliegen) تصرف في الماضي مع الفعل المساعد 'sein': ist gefahren.",
        uk: "Дієслова переміщення в просторі (fahren, gehen, fliegen) утворюють Perfekt із допоміжним дієсловом 'sein': ist gefahren."
      }
    },
    {
      id: 6,
      level: 'A2',
      sentence: "Das Wörterbuch liegt auf ___ Schreibtisch.",
      prompt: {
        de: "Wechselpräposition mit Dativ (Position/Lage - Wo?):",
        en: "Two-way preposition with Dative (Position - Where?):",
        tr: "Dativ alan çift yönlü edat (Konum/Durum - Nerede?):",
        ar: "حرف جر مزدوج مع حالة المجرور (Dativ) للدلالة على المكان (أين؟):",
        uk: "Прийменник подвійного керування з давальним відмінком (Місцезнаходження - Де?):"
      },
      options: ["dem", "den", "das", "des"],
      correct: 0,
      explanation: {
        de: "Auf die Frage „Wo?“ verlangt die Wechselpräposition „auf“ den Dativ: auf dem Schreibtisch (maskulin).",
        en: "Answering the question 'Where?' (stationary state), the two-way preposition 'auf' requires the Dative: auf dem Schreibtisch.",
        tr: "'Nerede?' (Wo?) sorusuna yanıt verirken 'auf' edatı Dativ gerektirir: maskulin isimlerde 'dem Schreibtisch'.",
        ar: "عند الإجابة عن السؤال 'أين؟' (حالة السكون)، يتطلب حرف الجر 'auf' حالة Dativ: auf dem Schreibtisch.",
        uk: "На питання 'Де?' (Wo?) прийменник 'auf' вимагає давального відмінка (Dativ): auf dem Schreibtisch."
      }
    },

    // --- Level B1 (Questions 7 - 9) ---
    {
      id: 7,
      level: 'B1',
      sentence: "Er lernt jeden Tag fleißig Deutsch, weil er in Deutschland als Ingenieur arbeiten ___.",
      prompt: {
        de: "Wortstellung im Nebensatz mit der Konjunktion „weil“:",
        en: "Word order in a subordinate clause with the conjunction 'weil':",
        tr: "'weil' bağlacı içeren yan cümlede sözcük dizimi:",
        ar: "ترتيب الكلمات في الجملة الجانبية مع أداة الربط 'weil':",
        uk: "Порядок слів у підрядному реченні зі сполучником 'weil':"
      },
      options: ["möchte", "er möchte", "möchte er", "will möchten"],
      correct: 0,
      explanation: {
        de: "Im Kausalsatz mit „weil“ steht das finite Verb immer ganz am Satzende: „... arbeiten möchte.“",
        en: "In a causal subordinate clause introduced by 'weil', the conjugated finite verb always moves to the very end.",
        tr: "'weil' ile başlayan yan cümlelerde çekimli fiil daima cümlenin en sonuna gider: '... arbeiten möchte.'",
        ar: "في الجملة السببية التي تبدأ بـ 'weil'، يأتي الفعل المصرف دائماً في نهاية الجملة تماماً: '... arbeiten möchte.'",
        uk: "У підрядному причиновому реченні зі сполучником 'weil' відмінюване дієслово завжди стоїть наприкінці речення."
      }
    },
    {
      id: 8,
      level: 'B1',
      sentence: "___ es gestern in Strömen geregnet hat, haben wir einen langen Spaziergang im Wald gemacht.",
      prompt: {
        de: "Wählen Sie die passende konzessive Konjunktion:",
        en: "Choose the fitting concessive conjunction:",
        tr: "Uygun zıtlık/ödün (konzessiv) bağlacını seçin:",
        ar: "اختر أداة الربط التنازلية (المعارضة) المناسبة:",
        uk: "Виберіть відповідний допустовий сполучник:"
      },
      options: ["Obwohl", "Weil", "Trotzdem", "Deshalb"],
      correct: 0,
      explanation: {
        de: "„Obwohl“ leitet einen konzessiven Nebensatz mit Verb-Endstellung ein. „Trotzdem“ ist ein Hauptsatz-Adverb.",
        en: "'Obwohl' (although) introduces a concessive subordinate clause with verb-final order. 'Trotzdem' is a main clause adverb.",
        tr: "'Obwohl' (rağmen), fiili sona atan bir yan cümle bağlacıdır. 'Trotzdem' ise ana cümle zarfıdır.",
        ar: "'Obwohl' (على الرغم من) تبدأ جملة جانبية مع وضع الفعل في النهاية، بينما 'Trotzdem' تأتي في الجملة الرئيسية.",
        uk: "'Obwohl' (хоча) вводить допустове підрядне речення з дієсловом у кінці. 'Trotzdem' — прислівник головного речення."
      }
    },
    {
      id: 9,
      level: 'B1',
      sentence: "Entschuldigung, ___ Sie mir bitte sagen, wann der nächste Zug nach Frankfurt abfährt?",
      prompt: {
        de: "Höfliche Bitte im Konjunktiv II:",
        en: "Polite request in Konjunktiv II:",
        tr: "Konjunktiv II ile kibar rica/soru:",
        ar: "الطلب المهذب باستخدام صيغة Konjunktiv II:",
        uk: "Ввічливе прохання у формі Konjunktiv II:"
      },
      options: ["könnten", "können", "gekonnt", "hätten können"],
      correct: 0,
      explanation: {
        de: "„Könnten Sie...“ ist die standardsprachliche, hochgradig höfliche Form des Konjunktiv II der Gegenwart.",
        en: "'Könnten Sie...' is the idiomatic, highly polite Konjunktiv II form for requests in contemporary German.",
        tr: "'Könnten Sie...', günümüz Almancasında en yaygın ve kibar Konjunktiv II rica kalıbıdır.",
        ar: "'Könnten Sie...' هي الصيغة القياسية والمهذبة للغاية للتعبير عن الطلب في Konjunktiv II.",
        uk: "'Könnten Sie...' — це стандартна і найбільш ввічлива форма Konjunktiv II для висловлення прохання."
      }
    },

    // --- Level B2 (Questions 10 - 12) ---
    {
      id: 10,
      level: 'B2',
      sentence: "Der offizielle Abschlussbericht ___ bis kommenden Freitag von der Kommission eingereicht werden.",
      prompt: {
        de: "Passiv mit Modalverb:",
        en: "Passive voice with a modal verb:",
        tr: "Modal fiilli edilgen çatı (Passiv):",
        ar: "المبني للمجهول مع فعل مساعد (Passiv mit Modalverb):",
        uk: "Пасивний стан із модальним дієсловом:"
      },
      options: ["muss", "wird", "hat", "ist"],
      correct: 0,
      explanation: {
        de: "Die Konstruktion „Modalverb + Partizip II + werden“ bildet das Passiv mit Modalverb: „muss eingereicht werden“.",
        en: "The structure 'modal verb + Partizip II + werden' forms the passive with modal: 'muss eingereicht werden'.",
        tr: "'Modalverb + Partizip II + werden' yapısı modal fiilli Passiv kurar: 'muss eingereicht werden' (teslim edilmeli).",
        ar: "التركيب 'Modalverb + Partizip II + werden' يشكل المبني للمجهول مع فعل مساعد: 'muss eingereicht werden'.",
        uk: "Конструкція 'модальне дієслово + Partizip II + werden' утворює пасив із модальним дієсловом: 'muss eingereicht werden'."
      }
    },
    {
      id: 11,
      level: 'B2',
      sentence: "Frau Weber ist die geschätzte Kollegin, ___ Fachkompetenz das gesamte Projekt gerettet hat.",
      prompt: {
        de: "Relativpronomen im Genitiv (feminin):",
        en: "Relative pronoun in the Genitive case (feminine):",
        tr: "Dişil (feminin) isim için Genitiv ilgi zamiri:",
        ar: "ضمير وصل في حالة الإضافة (Genitiv) للمؤنث:",
        uk: "Відносний займенник у родовому відмінку (Genitiv, жіночий рід):"
      },
      options: ["deren", "dessen", "derer", "welcher"],
      correct: 0,
      explanation: {
        de: "Das Relativpronomen im Genitiv für feminine Bezugswörter (Frau Weber / die Kollegin) lautet ausnahmslos „deren“.",
        en: "The genitive relative pronoun for feminine singular antecedents (die Kollegin) is always 'deren' (whose).",
        tr: "Dişil tekil isimlere (die Kollegin) gönderme yapan Genitiv ilgi zamiri daima 'deren' (onun / kimin ki) olur.",
        ar: "ضمير الوصل في حالة Genitiv العائد على اسم مفرد مؤنث (die Kollegin) هو دائماً 'deren'.",
        uk: "Відносний займенник у Genitiv для жіночого роду (die Kollegin) завжди 'deren' (чиєї / якої)."
      }
    },
    {
      id: 12,
      level: 'B2',
      sentence: "Bei der strategischen Planung müssen wir auch unvorhersehbare Marktrisiken in Betracht ___.",
      prompt: {
        de: "Feste Nomen-Verb-Verbindung (NVV):",
        en: "Fixed Verb-Noun Collocation (Nomen-Verb-Verbindung):",
        tr: "Kalıplaşmış İsim-Fiil Bağlantısı (NVV):",
        ar: "تركيب اسمي-فعلي ثابت (Nomen-Verb-Verbindung):",
        uk: "Стійке дієслівно-іменне сполучення (Nomen-Verb-Verbindung):"
      },
      options: ["ziehen", "stellen", "bringen", "nehmen"],
      correct: 0,
      explanation: {
        de: "Die gehobene Verbindung lautet fest „etwas in Betracht ziehen“ (= etwas erwägen, berücksichtigen).",
        en: "The standard collocation is 'etwas in Betracht ziehen' (= to take into consideration / to contemplate).",
        tr: "Doğru ve yerleşik kalıp 'etwas in Betracht ziehen' şeklindedir (= hesaba katmak, dikkate almak).",
        ar: "التركيب اللغوي الصحيح هو 'etwas in Betracht ziehen' (= يأخذ في الحسبان / يدرس بعين الاعتبار).",
        uk: "Сталим сполученням є 'etwas in Betracht ziehen' (= брати до уваги, враховувати)."
      }
    },

    // --- Level C1 (Questions 13 - 14) ---
    {
      id: 13,
      level: 'C1',
      sentence: "___ der widrigen Witterungsbedingungen konnte die Expedition planmäßig zum Gipfel aufbrechen.",
      prompt: {
        de: "Gehobene konzessive Präposition mit Genitiv:",
        en: "Advanced concessive preposition with Genitive:",
        tr: "Genitiv alan ileri düzey ödün/zıtlık edatı:",
        ar: "حرف جر متقدم للمعارضة والتنازل يتطلب حالة الإضافة (Genitiv):",
        uk: "Вишуканий допустовий прийменник із родовим відмінком (Genitiv):"
      },
      options: ["Ungeachtet", "Infolgedessen", "Anlässlich", "Hinsichtlich"],
      correct: 0,
      explanation: {
        de: "„Ungeachtet“ (+ Genitiv) bedeutet „trotz“ auf C1-Strukturniveau und drückt einen konzessiven Umstand aus.",
        en: "'Ungeachtet' (+ Genitive) is an elevated academic preposition meaning 'regardless of / notwithstanding'.",
        tr: "'Ungeachtet' (+ Genitiv), akademik ve ileri düzeyde '-e rağmen / bakılmaksızın' (trotz) anlamına gelir.",
        ar: "'Ungeachtet' (+ Genitiv) تعني 'على الرغم من / بغض النظر عن' في السياق الأكاديمي واللغة الرفيعة.",
        uk: "'Ungeachtet' (+ Genitiv) — вишуканий синонім прийменника 'trotz' (незважаючи на / попри)."
      }
    },
    {
      id: 14,
      level: 'C1',
      sentence: "Die von den führenden Umweltforschern gestern in Genf ___ Studie stieß weltweit auf enorme Resonanz.",
      prompt: {
        de: "Erweitertes Partizipialattribut (Partizip II als Adjektiv):",
        en: "Extended participial attribute (Participle II as adjective):",
        tr: "Genişletilmiş sıfat tamlaması (Ortaç / Partizipialattribut):",
        ar: "النعت المشتق الموسع (Erweitertes Partizipialattribut):",
        uk: "Поширений дієприкметниковий зворот (Partizip II у ролі означення):"
      },
      options: ["veröffentlichte", "veröffentlichten", "veröffentlichende", "veröffentlichtes"],
      correct: 0,
      explanation: {
        de: "Bezugswort ist „die Studie“ (feminin, Nominativ, bestimmter Artikel „die“). Die schwache Adjektivendung ist „-e“: veröffentlichte.",
        en: "The noun is 'die Studie' (feminine, nominative with definite article). The weak adjective ending is '-e': veröffentlichte.",
        tr: "Nitelediği kelime 'die Studie' (dişil, yalın, belirli artikel) olduğu için zayıf sıfat çekim eki '-e' alır: veröffentlichte.",
        ar: "الاسم المنعوت هو 'die Studie' (مؤنث مرفوع مع أداة التعريف). اللاحقة الضعيفة للصفة هي '-e': veröffentlichte.",
        uk: "Означуваний іменник — 'die Studie' (жіночий рід, називний відмінок із визначеним артиклем), тому закінчення '-e': veröffentlichte."
      }
    },

    // --- Level C2 (Question 15) ---
    {
      id: 15,
      level: 'C2',
      sentence: "In der Pressemitteilung verlautbarte das Präsidium, man ___ sämtliche Anschuldigungen nachdrücklich zurück.",
      prompt: {
        de: "Indirekte Rede (Konjunktiv I in der gehobenen Schriftsprache):",
        en: "Indirect speech (Konjunktiv I in formal elevated written German):",
        tr: "Dolaylı anlatım (İleri edebi dilde Konjunktiv I):",
        ar: "الكلام المنقول بصيغة Konjunktiv I في الأسلوب الأدبي والصحفي الراقي:",
        uk: "Непряма мова (Konjunktiv I у вишуканій писемній мові):"
      },
      options: ["weise", "wiese", "weist", "weisen"],
      correct: 0,
      explanation: {
        de: "Für die 3. Person Singular („man“) wird im gehobenen Stil der Konjunktiv I Präsens verwendet: man weise (Stamm weis- + Endung -e).",
        en: "In formal literary register, indirect speech with third-person singular ('man') takes Konjunktiv I: 'man weise'.",
        tr: "Resmi/akademik dilde 3. tekil şahıs ('man') için dolaylı anlatımda Konjunktiv I kullanılır: man weise (weisen kökü + -e).",
        ar: "في الأسلوب الصحفي والأدبي الراقي، يستخدم Konjunktiv I للغائب المفرد ('man'): man weise.",
        uk: "В офіційно-діловому та академічному стилі для непрямої мови 3-ї особи ('man') вживається Konjunktiv I: man weise."
      }
    }
  ];

  class CEFRPlacementTest {
    constructor() {
      this.questions = PLACEMENT_QUESTIONS;
      this.currentIndex = 0;
      this.score = 0;
      this.answers = [];
      this.hasAnsweredCurrent = false;
      this.detectedLevel = 'A1';
      this.modalEl = null;
    }

    getLang() {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('site_lang') || localStorage.getItem('telc_lang') || 'en';
      }
      return 'en';
    }

    calculateLevel(score) {
      if (score <= 3) return { level: 'A1', label: 'A1 • Beginner', badgeCls: 'badge-a1', track: 'vocab' };
      if (score <= 6) return { level: 'A2', label: 'A2 • Elementary', badgeCls: 'badge-a2', track: 'vocab' };
      if (score <= 9) return { level: 'B1', label: 'B1 • Intermediate', badgeCls: 'badge-b1', track: 'b1' };
      if (score <= 12) return { level: 'B2', label: 'B2 • Upper Intermediate', badgeCls: 'badge-b2', track: 'b2' };
      if (score <= 14) return { level: 'C1', label: 'C1 • Advanced Academic', badgeCls: 'badge-c1', track: 'c1' };
      return { level: 'C2', label: 'C2 • Mastery & Native Fluency', badgeCls: 'badge-c2', track: 'c2' };
    }

    start() {
      this.currentIndex = 0;
      this.score = 0;
      this.answers = [];
      this.hasAnsweredCurrent = false;
      this.renderModal();
    }

    renderModal() {
      let modal = document.getElementById('placement-test-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'placement-test-modal';
        modal.className = 'placement-modal-backdrop';
        document.body.appendChild(modal);
      }
      this.modalEl = modal;
      this.modalEl.style.display = 'flex';
      this.renderCurrentQuestion();
    }

    close() {
      if (this.modalEl) {
        this.modalEl.style.display = 'none';
      }
    }

    renderCurrentQuestion() {
      if (!this.modalEl) return;
      const lang = this.getLang();
      const q = this.questions[this.currentIndex];
      const total = this.questions.length;
      const progressPct = Math.round((this.currentIndex / total) * 100);

      const promptText = (q.prompt && q.prompt[lang]) || q.prompt.en || q.prompt.de;
      const isRtl = lang === 'ar';

      const html = `
        <div class="placement-modal-card" role="dialog" aria-modal="true" aria-label="Placement Test">
          <div class="placement-header">
            <div class="placement-header-left">
              <span class="placement-badge">🎯 CEFR Diagnostic</span>
              <span class="placement-q-level badge-${q.level.toLowerCase()}">${q.level}</span>
            </div>
            <div class="placement-header-right">
              <span class="placement-counter">${this.currentIndex + 1} / ${total}</span>
              <button type="button" class="placement-btn-close" onclick="window.PlacementTest.close()" aria-label="Close Placement Test">&times;</button>
            </div>
          </div>

          <div class="placement-progress-bar">
            <div class="placement-progress-fill" style="width: ${progressPct}%"></div>
          </div>

          <div class="placement-body">
            <div class="placement-prompt-label" ${isRtl ? 'dir="rtl"' : ''}>${promptText}</div>
            <div class="placement-sentence" dir="ltr">${q.sentence.replace('___', '<span class="placement-blank">_______</span>')}</div>

            <div class="placement-options-grid" id="placement-options">
              ${q.options.map((opt, idx) => `
                <button type="button" class="placement-opt-btn" onclick="window.PlacementTest.submitAnswer(${idx})">
                  <span class="placement-opt-letter">${String.fromCharCode(65 + idx)}</span>
                  <span class="placement-opt-text" dir="ltr">${opt}</span>
                </button>
              `).join('')}
            </div>

            <div class="placement-feedback-card hidden" id="placement-feedback">
              <div class="placement-feedback-title" id="placement-feedback-title"></div>
              <div class="placement-feedback-text" id="placement-feedback-text" ${isRtl ? 'dir="rtl"' : ''}></div>
              <button type="button" class="btn-primary placement-btn-next" onclick="window.PlacementTest.next()">
                ${this.currentIndex + 1 === total ? (lang === 'tr' ? 'Sonuçları Gör →' : (lang === 'ar' ? 'عرض النتيجة ←' : (lang === 'uk' ? 'Дивитися результат →' : 'See Results →'))) : (lang === 'tr' ? 'Sıradaki Soru →' : (lang === 'ar' ? 'السؤال التالي ←' : (lang === 'uk' ? 'Наступне питання →' : 'Next Question →')))}
              </button>
            </div>
          </div>
        </div>
      `;

      this.modalEl.innerHTML = html;
      this.hasAnsweredCurrent = false;
    }

    submitAnswer(chosenIdx) {
      if (this.hasAnsweredCurrent) return;
      this.hasAnsweredCurrent = true;

      const q = this.questions[this.currentIndex];
      const isCorrect = (chosenIdx === q.correct);
      if (isCorrect) this.score++;

      this.answers.push({
        id: q.id,
        level: q.level,
        chosen: chosenIdx,
        correct: q.correct,
        isCorrect
      });

      const optBtns = this.modalEl.querySelectorAll('.placement-opt-btn');
      optBtns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correct) {
          btn.classList.add('correct');
        } else if (idx === chosenIdx && !isCorrect) {
          btn.classList.add('wrong');
        }
      });

      const lang = this.getLang();
      const feedbackCard = this.modalEl.querySelector('#placement-feedback');
      const feedbackTitle = this.modalEl.querySelector('#placement-feedback-title');
      const feedbackText = this.modalEl.querySelector('#placement-feedback-text');

      if (feedbackCard && feedbackTitle && feedbackText) {
        feedbackTitle.textContent = isCorrect 
          ? (lang === 'tr' ? '✓ Doğru! Harika bir kavrayış.' : (lang === 'ar' ? '✓ إجابة صحيحة وممتازة!' : (lang === 'uk' ? '✓ Правильно! Чудовий результат.' : '✓ Correct! Excellent grasp.')))
          : (lang === 'tr' ? '✗ Yanlış Seçim.' : (lang === 'ar' ? '✗ إجابة غير صحيحة.' : (lang === 'uk' ? '✗ Неправильна відповідь.' : '✗ Incorrect Option.')));
        feedbackTitle.className = `placement-feedback-title ${isCorrect ? 'text-green' : 'text-red'}`;

        const expl = (q.explanation && q.explanation[lang]) || q.explanation.en || q.explanation.de;
        feedbackText.textContent = expl;
        feedbackCard.classList.remove('hidden');
      }
    }

    next() {
      this.currentIndex++;
      if (this.currentIndex < this.questions.length) {
        this.renderCurrentQuestion();
      } else {
        this.renderResultScreen();
      }
    }

    renderResultScreen() {
      const result = this.calculateLevel(this.score);
      this.detectedLevel = result.level;
      const lang = this.getLang();
      const isRtl = lang === 'ar';
      const pct = Math.round((this.score / this.questions.length) * 100);

      const titleTexts = {
        de: "Ihr diagnostiziertes GER-Niveau:",
        en: "Your Diagnosed CEFR Level:",
        tr: "Tespit Edilen CEFR Seviyeniz:",
        ar: "مستواك اللغوي المكتشف وفق الإطار الأوروبي:",
        uk: "Ваш визначений рівень за шкалою CEFR:"
      };

      const descTexts = {
        de: `Sie haben ${this.score} von 15 Fragen richtig beantwortet (${pct}%). Wir empfehlen den optimalen Einstieg bei ${result.level}.`,
        en: `You answered ${this.score} out of 15 questions correctly (${pct}%). We recommend beginning your structured study path at ${result.level}.`,
        tr: `15 sorudan ${this.score} tanesini doğru yanıtladınız (%${pct}). Sizin için en ideal başlangıç seviyesi: ${result.level}.`,
        ar: `لقد أجبت بشكل صحيح على ${this.score} من أصل 15 سؤالاً (${pct}%). نوصي ببدء مسار دراستك المخصص عند المستوى ${result.level}.`,
        uk: `Ви правильно відповіли на ${this.score} із 15 питань (${pct}%). Рекомендуємо почати навчання з рівня ${result.level}.`
      };

      const ctaTexts = {
        de: `Mit Niveau ${result.level} starten →`,
        en: `Start Learning at Level ${result.level} →`,
        tr: `${result.level} Seviyesi ile Öğrenmeye Başla →`,
        ar: `ابدأ التعلم عند المستوى ${result.level} ←`,
        uk: `Почати навчання з рівня ${result.level} →`
      };

      const html = `
        <div class="placement-modal-card result-card" role="dialog" aria-modal="true">
          <div class="placement-header">
            <span class="placement-badge">🏆 Test Completed</span>
            <button type="button" class="placement-btn-close" onclick="window.PlacementTest.close()">&times;</button>
          </div>

          <div class="placement-result-body" ${isRtl ? 'dir="rtl"' : ''}>
            <div class="placement-result-trophy">🎓</div>
            <h2 class="placement-result-title">${titleTexts[lang] || titleTexts.en}</h2>
            
            <div class="placement-result-level-badge ${result.badgeCls}">
              ${result.label}
            </div>

            <p class="placement-result-desc">${descTexts[lang] || descTexts.en}</p>

            <div class="placement-level-breakdown">
              <span class="level-pill ${this.score >= 3 ? 'passed' : ''}">A1 (1-3)</span>
              <span class="level-pill ${this.score >= 6 ? 'passed' : ''}">A2 (4-6)</span>
              <span class="level-pill ${this.score >= 9 ? 'passed' : ''}">B1 (7-9)</span>
              <span class="level-pill ${this.score >= 12 ? 'passed' : ''}">B2 (10-12)</span>
              <span class="level-pill ${this.score >= 14 ? 'passed' : ''}">C1 (13-14)</span>
              <span class="level-pill ${this.score === 15 ? 'passed' : ''}">C2 (15)</span>
            </div>

            <div class="placement-result-actions">
              <button type="button" class="btn-primary placement-btn-apply" onclick="window.PlacementTest.applyLevel('${result.level}')">
                ${ctaTexts[lang] || ctaTexts.en}
              </button>
              <button type="button" class="btn-secondary placement-btn-restart" onclick="window.PlacementTest.start()">
                ${lang === 'tr' ? 'Testi Tekrar Yap ↻' : (lang === 'ar' ? 'إعادة الاختبار ↻' : (lang === 'uk' ? 'Пройти ще раз ↻' : 'Retake Test ↻'))}
              </button>
            </div>
          </div>
        </div>
      `;

      this.modalEl.innerHTML = html;
    }

    applyLevel(level) {
      try {
        localStorage.setItem('user_level', level);
        localStorage.setItem('entrance_level', level);
        localStorage.setItem('deutschlernen_track', level === 'B1' ? 'b1' : (['B2', 'C1', 'C2'].includes(level) ? 'vocab' : 'vocab'));
      } catch (e) {}

      // If on index.html with portal goal functions
      if (typeof window.selectGoalCard === 'function') {
        const goalMap = {
          A1: 'goal-vocab',
          A2: 'goal-vocab',
          B1: 'goal-b1',
          B2: 'goal-b2',
          C1: 'goal-c1',
          C2: 'goal-c2'
        };
        const goalId = goalMap[level] || 'goal-b1';
        window.selectGoalCard(goalId, level);
        if (typeof window.applyGoalSelection === 'function') {
          window.applyGoalSelection();
        }
      }

      this.close();

      // If user is on trainer.html, set deck & level
      if (window.VocabApp) {
        window.VocabApp.settings.level = level;
        if (['B2', 'C1', 'C2'].includes(level)) {
          window.VocabApp.settings.deck = level.toLowerCase();
        } else {
          window.VocabApp.settings.deck = 'core';
        }
        if (window.VocabApp.dom.levelSelector) window.VocabApp.dom.levelSelector.value = level;
        if (window.VocabApp.dom.deckSelector) window.VocabApp.dom.deckSelector.value = window.VocabApp.settings.deck;
        window.VocabApp.startNewDeck();
      }
    }
  }

  // Expose globally
  const placementTestInstance = new CEFRPlacementTest();
  window.PlacementTest = placementTestInstance;
  window.openPlacementTestModal = () => placementTestInstance.start();

})();
