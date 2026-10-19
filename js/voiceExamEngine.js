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
    { id: 'subord_deshalb', pattern: /deshalb|deswegen|aus diesem grund/i, label: 'Kausale Konnektoren (deshalb / aus diesem Grund)', level: 'B1', weight: 1.1 },

    // Advanced C1 Redemittel & Academic Discourse
    { id: 'c1_in_anbetracht', pattern: /in anbetracht (der tatsache|dessen)|angesichts/i, label: 'In Anbetracht der Tatsache / Angesichts...', level: 'C1', weight: 1.7 },
    { id: 'c1_ungeachtet', pattern: /ungeachtet dessen|nichtsdestotrotz|nichtsdestoweniger/i, label: 'Ungeachtet dessen / Nichtsdestotrotz...', level: 'C1', weight: 1.7 },
    { id: 'c1_in_betracht', pattern: /in betracht (zieh|zog)|in erw(ä|ae)gung (zieh|zog)|zieht.*in (betracht|erw(ä|ae)gung)/i, label: 'In Betracht / Erwägung ziehen...', level: 'C1', weight: 1.6 },
    { id: 'c1_zu_bedenken', pattern: /zu bedenken (geb|gib|gab)|gibt.*zu bedenken/i, label: 'Zu bedenken geben / Berücksichtigen...', level: 'C1', weight: 1.6 },
    { id: 'c1_zum_ausdruck', pattern: /zum ausdruck (bring|brach)|bringt.*zum ausdruck/i, label: 'Zum Ausdruck bringen...', level: 'C1', weight: 1.5 },

    // Mastery C2 Elevated Idiomatic Formulas & Stylistics
    { id: 'c2_im_lichte', pattern: /im lichte (dieser|der)|unter diesem blickwinkel/i, label: 'Im Lichte dieser Erwägungen...', level: 'C2', weight: 2.0 },
    { id: 'c2_in_abrede', pattern: /in abrede stell|au(ß|ss)er zweifel steh|steht.*au(ß|ss)er zweifel/i, label: 'In Abrede stellen / Außer Zweifel stehen...', level: 'C2', weight: 2.0 },
    { id: 'c2_den_ausschlag', pattern: /den ausschlag (geb|gib|gab)|gibt.*den ausschlag|ins gewicht (fall|f(ä|ae)ll|fiel)/i, label: 'Den Ausschlag geben / Ins Gewicht fallen...', level: 'C2', weight: 1.9 },
    { id: 'c2_massgebend', pattern: /ma(ß|ss)gebend daf(ü|ue)r ist|ausschlaggebend ist/i, label: 'Maßgebend / Ausschlaggebend ist...', level: 'C2', weight: 1.9 }
  ];

  // Official Speaking Examination Tasks Catalog (telc Deutsch B1 Format)
  const SPEAKING_EXAM_TOPICS = {
  "teil1": [
    {
      "id": "t1_default",
      "title": "Teil 1: Kontaktaufnahme (Sich vorstellen)",
      "titleTr": "Bölüm 1: Tanışma (Kendini Tanıtma)",
      "titleEn": "Part 1: Getting to Know Each Other (Self-Introduction)",
      "titleAr": "الجزء 1: التعارف (تقديم النفس)",
      "titleUk": "Частина 1: Знайомство (Розповідь про себе)",
      "durationMin": 3,
      "description": "Stellen Sie sich Ihrem Gesprächspartner und den Prüfern vor. Gehen Sie auf die folgenden Leitpunkte ein.",
      "descriptionTr": "Kendinizi sınav jürisine ve partnerinize tanıtın. Aşağıdaki yönergelere değinin.",
      "descriptionEn": "Introduce yourself to your speaking partner and examiners covering all listed guiding points.",
      "descriptionAr": "قدم نفسك لشريكك في المحادثة والممتحنين وتحدث حول جميع النقاط التوجيهية.",
      "descriptionUk": "Представтеся своєму партнеру та екзаменаторам, розкриваючи всі зазначені пункти.",
      "leitpunkte": [
        {
          "key": "name",
          "label": "Name & Herkunft (Ad ve Memleket)",
          "labelTr": "Adınız, yaşınız ve memleketiniz",
          "labelEn": "Name, age, and country of origin",
          "labelAr": "الاسم والسن والبلد الأصلي",
          "labelUk": "Ім'я, вік та країна походження",
          "keywords": [
            "name",
            "heiße",
            "komme",
            "herkunft",
            "geboren",
            "stadt",
            "land",
            "jahre",
            "alt"
          ]
        },
        {
          "key": "wohnen",
          "label": "Wohnort & Wohnsituation (İkamet ve Yaşam)",
          "labelTr": "Yaşadığınız şehir ve konut durumu",
          "labelEn": "Place of residence and living situation",
          "labelAr": "مكان الإقامة ونوع السكن",
          "labelUk": "Місце проживання та житлові умови",
          "keywords": [
            "wohne",
            "wohnung",
            "leben",
            "lebe",
            "deutschland",
            "bezirk",
            "zimmer",
            "haus",
            "stadtteil",
            "miete"
          ]
        },
        {
          "key": "familie",
          "label": "Familie & Kinder (Aile ve Çocuklar)",
          "labelTr": "Aile durumu ve çocuklar",
          "labelEn": "Family situation and children",
          "labelAr": "الوضع العائلي والأطفال",
          "labelUk": "Сімейний стан та діти",
          "keywords": [
            "familie",
            "verheiratet",
            "ledig",
            "kinder",
            "sohn",
            "tochter",
            "eltern",
            "geschwister",
            "allein",
            "zusammen"
          ]
        },
        {
          "key": "beruf",
          "label": "Beruf & Ausbildung (Meslek ve Eğitim)",
          "labelTr": "Meslek, çalışma ve eğitim geçmişi",
          "labelEn": "Profession, job, and education",
          "labelAr": "المهنة والتعليم والخبرة العملية",
          "labelUk": "Професія, робота та освіта",
          "keywords": [
            "beruf",
            "arbeite",
            "beruflich",
            "gelernt",
            "studium",
            "universität",
            "schule",
            "arzt",
            "ingenieur",
            "bereich",
            "branche",
            "tätig"
          ]
        },
        {
          "key": "sprachen",
          "label": "Sprachen lernen (Diller ve Almanca)",
          "labelTr": "Bildiğiniz diller ve Almanca öğrenme süreci",
          "labelEn": "Languages spoken and German learning journey",
          "labelAr": "اللغات التي تتحدثها ورحلة تعلم الألمانية",
          "labelUk": "Мови, якими володієте, та вивчення німецької",
          "keywords": [
            "sprache",
            "sprachen",
            "deutsch",
            "englisch",
            "muttersprache",
            "lerne",
            "gelernt",
            "niveau",
            "kurs",
            "spreche"
          ]
        },
        {
          "key": "hobbys",
          "label": "Hobbys & Freizeit (Hobiler ve Boş Zaman)",
          "labelTr": "Hobileriniz ve boş zaman aktiviteleriniz",
          "labelEn": "Hobbies and free-time activities",
          "labelAr": "الهوايات وأوقات الفراغ",
          "labelUk": "Хобі та вільний час",
          "keywords": [
            "hobby",
            "hobbys",
            "freizeit",
            "sport",
            "musik",
            "lesen",
            "kochen",
            "wochenende",
            "gerne",
            "reise",
            "spazieren",
            "treffe"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Guten Tag! Mein Name ist Deniz Kaya. Ich bin 32 Jahre alt und komme ursprünglich aus Izmir in der Türkei. Seit zwei Jahren lebe ich mit meiner Familie hier in Köln. Wir haben eine gemütliche Dreizimmerwohnung im Stadtteil Ehrenfeld gemietet. Ich bin verheiratet und wir haben eine fünfjährige Tochter, die bereits in den Kindergarten geht. Von Beruf bin ich Informatiker. In meiner Heimat habe ich Softwareentwicklung studiert und arbeite derzeit bei einem mittelständischen IT-Unternehmen in Köln. Meine Muttersprache ist Türkisch, außerdem spreche ich fließend Englisch und lerne seit anderthalb Jahren intensiv Deutsch, um das telc B1-Zertifikat zu erwerben. In meiner Freizeit mache ich sehr gerne Sport, koche am Wochenende für meine Familie und gehe gerne am Rhein spazieren.",
        "tr": "İyi günler! Adım Deniz Kaya. 32 yaşındayım ve aslen Türkiye'nin İzmir şehrinden geliyorum. İki yıldır ailemle birlikte Köln'de yaşıyorum. Ehrenfeld semtinde üç odalı rahat bir ev kiraladık. Evliyim ve kreşe giden beş yaşında bir kızımız var. Mesleğim bilgisayar mühendisliği. Memleketimde yazılım geliştirme okudum ve şu anda Köln'de orta ölçekli bir bilişim şirketinde çalışıyorum. Ana dilim Türkçe, ayrıca akıcı İngilizce konuşuyorum ve telc B1 sertifikasını almak için bir buçuk yıldır yoğun şekilde Almanca öğreniyorum. Boş zamanlarımda spor yapmaktan, hafta sonları aileme yemek pişirmekten ve Ren nehri kıyısında yürüyüş yapmaktan büyük keyif alıyorum.",
        "en": "Good day! My name is Deniz Kaya. I am 32 years old and originally from Izmir, Turkey. For two years, I have been living here in Cologne with my family. We rent a cozy three-room apartment in the Ehrenfeld district. I am married and we have a five-year-old daughter who already attends kindergarten. By profession, I am a computer scientist. In my home country, I studied software engineering, and I currently work at a medium-sized IT firm in Cologne. My mother tongue is Turkish; in addition, I speak fluent English and have been learning German intensively for a year and a half to earn the telc B1 certificate. In my free time, I really enjoy playing sports, cooking for my family on weekends, and walking along the Rhine.",
        "ar": "طاب يومكم! اسمي دينيز كايا. أبلغ من العمر 32 عامًا وأصولي من مدينة إزمير في تركيا. أعيش مع عائلتي منذ عامين هنا في كولونيا. لقد استأجرنا شقة مريحة من ثلاث غرف في حي إيرنفيلد. أنا متزوج ولدينا ابنة في الخامسة من عمرها تذهب بالفعل إلى روضة الأطفال. مهنتي مهندس برمجيات. في بلدي درست هندسة البرمجيات وأعمل حاليًا في شركة تكنولوجيا متوسطة الحجم في كولونيا. لغتي الأم هي التركية، وأتحدث الإنجليزية بطلاقة، وأتعلم الألمانية بشكل مكثف منذ عام ونصف للحصول على شهادة telc B1. في أوقات فراغي، أحب ممارسة الرياضة، والطهي لعائلتي في عطلات نهاية الأسبوع، والتنزه على ضفاف نهر الراين.",
        "uk": "Доброго дня! Мене звати Деніз Кая. Мені 32 роки, я родом з Ізміра в Туреччині. Вже два роки я живу зі своєю сім'єю тут, у Кельні. Ми орендуємо затишну трикімнатну квартиру в районі Еренфельд. Я одружений, у нас є п'ятирічна донька, яка вже ходить до дитячого садка. За фахом я інженер-програміст. На батьківщині я вивчав розробку програмного забезпечення, а зараз працюю в середній ІТ-компанії в Кельні. Моя рідна мова — турецька, крім того, я вільно володію англійською та вже півтора року інтенсивно вивчаю німецьку, щоб отримати сертифікат telc B1. У вільний час я дуже люблю займатися спортом, готувати для сім'ї на вихідних та гуляти вздовж Рейну."
      },
      "redemittel": [
        {
          "phrase": "Mein Name ist... / Ich heiße...",
          "tr": "Adım... / Ben...",
          "en": "My name is... / I am called...",
          "category": "Vorstellung"
        },
        {
          "phrase": "Ich komme ursprünglich aus...",
          "tr": "Aslen ...'den geliyorum.",
          "en": "I am originally from...",
          "category": "Herkunft"
        },
        {
          "phrase": "Seit ... Jahren lebe und wohne ich in...",
          "tr": "... yıldır ...'da yaşıyorum.",
          "en": "For ... years I have lived in...",
          "category": "Wohnort"
        },
        {
          "phrase": "Von Beruf bin ich... / Ich arbeite als...",
          "tr": "Mesleğim... / ... olarak çalışıyorum.",
          "en": "By profession I am... / I work as...",
          "category": "Beruf"
        },
        {
          "phrase": "Meine Muttersprache ist..., außerdem spreche ich...",
          "tr": "Ana dilim..., ayrıca ... konuşuyorum.",
          "en": "My mother tongue is..., in addition I speak...",
          "category": "Sprachen"
        },
        {
          "phrase": "In meiner Freizeit beschäftige ich mich gern mit...",
          "tr": "Boş zamanlarımda severek ... ile ilgilenirim.",
          "en": "In my leisure time I enjoy doing...",
          "category": "Hobbys"
        }
      ],
      "keyVocab": [
        {
          "de": "die Herkunft",
          "article": "die",
          "plural": "die Herkünfte",
          "tr": "köken, memleket",
          "en": "origin"
        },
        {
          "de": "der Wohnort",
          "article": "der",
          "plural": "die Wohnorte",
          "tr": "ikamet yeri",
          "en": "place of residence"
        },
        {
          "de": "die Berufserfahrung",
          "article": "die",
          "plural": "die Berufserfahrungen",
          "tr": "iş tecrübesi",
          "en": "work experience"
        },
        {
          "de": "die Muttersprache",
          "article": "die",
          "plural": "die Muttersprachen",
          "tr": "ana dil",
          "en": "mother tongue"
        },
        {
          "de": "die Ausbildung",
          "article": "die",
          "plural": "die Ausbildungen",
          "tr": "mesleki eğitim",
          "en": "vocational training"
        },
        {
          "de": "die Freizeitbeschäftigung",
          "article": "die",
          "plural": "die Freizeitbeschäftigungen",
          "tr": "boş zaman aktivitesi",
          "en": "leisure activity"
        }
      ]
    },
    {
      "id": "t1_beruf",
      "title": "Teil 1: Schwerpunkt Beruf, Werdegang & Zukunftspläne",
      "titleTr": "Bölüm 1: Meslek, Kariyer Geçmişi ve Gelecek Hedefleri",
      "titleEn": "Part 1: Focus on Profession, Career & Future Plans",
      "titleAr": "الجزء 1: التركيز على المهنة والمسار المهني والخطط المستقبلية",
      "titleUk": "Частина 1: Професія, кар'єрний шлях та плани на майбутнє",
      "durationMin": 3,
      "description": "Erzählen Sie vertiefend über Ihren erlernten Beruf, Ihre berufliche Tätigkeit in Deutschland und Ihre Karriereziele.",
      "descriptionTr": "Eğitimini aldığınız meslek, Almanya'daki iş hayatınız ve gelecekteki kariyer hedefleriniz hakkında ayrıntılı bilgi verin.",
      "descriptionEn": "Elaborate in depth on your learned profession, your work experience in Germany, and your career goals.",
      "descriptionAr": "تحدث بعمق عن مهنتك التي تعلمتها، وعملك في ألمانيا، وأهدافك المهنية المستقبلية.",
      "descriptionUk": "Розкажіть детальніше про свою освіту, роботу в Німеччині та кар'єрні плани.",
      "leitpunkte": [
        {
          "key": "ausbildung",
          "label": "Ausbildung / Studium im Heimatland",
          "labelTr": "Memleketteki mesleki eğitim veya üniversite",
          "labelEn": "Vocational training or university in home country",
          "labelAr": "التعليم المهني أو الجامعي في الوطن الأم",
          "labelUk": "Освіта або навчання на батьківщині",
          "keywords": [
            "studium",
            "ausbildung",
            "universität",
            "diplom",
            "heimatland",
            "fach",
            "abgeschlossen",
            "theorie"
          ]
        },
        {
          "key": "alltag",
          "label": "Aktuelle Arbeit & Berufsalltag in Deutschland",
          "labelTr": "Şu anki işiniz ve günlük iş temposu",
          "labelEn": "Current job and daily work routine in Germany",
          "labelAr": "العمل الحالي والروتين اليومي في ألمانيا",
          "labelUk": "Поточна робота та щоденні обов'язки в Німеччині",
          "keywords": [
            "arbeite",
            "beruf",
            "kollegen",
            "aufgaben",
            "alltag",
            "firma",
            "betrieb",
            "deutschland",
            "stunden",
            "vertrag"
          ]
        },
        {
          "key": "anerkennung",
          "label": "Anerkennung & Qualifikationen",
          "labelTr": "Diploma denkliği ve sertifikalar",
          "labelEn": "Degree recognition and certifications",
          "labelAr": "معادلة الشهادات والمؤهلات المهنية",
          "labelUk": "Визнання диплома та підвищення кваліфікації",
          "keywords": [
            "anerkennung",
            "urkunde",
            "amt",
            "zeugnis",
            "zertifikat",
            "prüfung",
            "qualifikation",
            "verfahren"
          ]
        },
        {
          "key": "zukunft",
          "label": "Zukunftspläne & Weiterbildung",
          "labelTr": "Gelecek planları ve ileri eğitim hedefleri",
          "labelEn": "Future ambitions and further training",
          "labelAr": "الخطط المستقبلية والتدريب الإضافي",
          "labelUk": "Плани на майбутнє та подальший розвиток",
          "keywords": [
            "zukunft",
            "weiterbildung",
            "weiterentwickeln",
            "ziel",
            "vor",
            "möchte",
            "hoffe",
            "selbstständig",
            "aufstieg"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Ich möchte Ihnen gerne meinen beruflichen Werdegang vorstellen. In meinem Heimatland habe ich fünf Jahre lang Elektrotechnik an der Universität studiert und danach als Ingenieur bei einem Energieunternehmen gearbeitet. Als ich vor zwei Jahren nach Deutschland gezogen bin, war der erste wichtige Schritt die offizielle Anerkennung meines Hochschulabschlusses. Die zuständige Behörde hat meine Zeugnisse geprüft, und ich habe die Gleichwertigkeit bescheinigt bekommen. Aktuell arbeite ich als technischer Berater in Vollzeit bei einem mittelständischen Unternehmen. Mein Arbeitsalltag ist sehr abwechslungsreich: Ich erstelle Schaltpläne, berate Kunden und arbeite eng mit meinen deutschen Kolleginnen und Kollegen zusammen. Für meine berufliche Zukunft plane ich, mich im Bereich erneuerbare Energien weiterzubilden, weil diese Branche in Deutschland enormes Potenzial hat.",
        "tr": "Size kariyer geçmişimden bahsetmek isterim. Memleketimde beş yıl boyunca üniversitede elektrik mühendisliği okudum ve ardından bir enerji şirketinde mühendis olarak çalıştım. İki yıl önce Almanya'ya taşındığımda, ilk önemli adım üniversite diplomamın resmi denkliğini almaktı. Yetkili makam belgelerimi inceledi ve denklik belgesi verdi. Şu anda orta ölçekli bir firmada tam zamanlı teknik danışman olarak çalışıyorum. Günlük işim oldukça çeşitli: Elektrik devre şemaları hazırlıyorum, müşterilere danışmanlık veriyorum ve Alman meslektaşlarımla yakın iş birliği içinde çalışıyorum. Gelecekte ise yenilenebilir enerji alanında uzmanlık eğitimi almayı planlıyorum, çünkü bu sektörün Almanya'da büyük bir geleceği var.",
        "en": "I would like to present my professional background. In my home country, I studied electrical engineering at university for five years and then worked as an engineer at an energy company. When I moved to Germany two years ago, the first essential step was the official recognition of my degree. The responsible authority reviewed my credentials and granted full equivalence. Currently, I work full-time as a technical consultant at a medium-sized company. My daily work routine is very diverse: I design circuit schematics, advise clients, and work closely with my German colleagues. For my career future, I plan to pursue further training in renewable energy, as this sector holds tremendous potential in Germany.",
        "ar": "أود أن أقدم لكم مساري المهني. في بلدي الأم، درست الهندسة الكهربائية في الجامعة لمدة خمس سنوات ثم عملت كمهندس في شركة طاقة. عندما انتقلت إلى ألمانيا قبل عامين، كانت الخطوة الأولى الهامة هي الاعتراف الرسمي بمؤهلي الجامعي. قامت الجهة المختصة بمراجعة شهاداتي واعتماد المعادلة. أعمل حاليًا بدوام كامل كمستشار تقني في شركة متوسطة الحجم. روتيني اليومي في العمل متنوع للغاية: أقوم بإعداد المخططات الكهربائية، وتقديم المشورة للعملاء، والتعاون الوثيق مع زملائي الألمان. وفي المستقبل، أخطط لمواصلة التدريب في مجال الطاقة المتجددة لأن هذا القطاع يتمتع بإمكانيات هائلة في ألمانيا.",
        "uk": "Я хотів би розповісти про свій професійний шлях. На батьківщині я п'ять років вивчав електротехніку в університеті, а потім працював інженером в енергетичній компанії. Коли я два роки тому переїхав до Німеччини, першим важливим кроком було офіційне визнання мого диплома. Відповідне відомство перевірило мої документи та підтвердило еквівалентність кваліфікації. Зараз я працюю на повну ставку технічним консультантом у середній компанії. Мій робочий день дуже різноманітний: я складаю схеми, консультую клієнтів і тісно співпрацюю з німецькими колегами. У майбутньому я планую підвищити кваліфікацію у сфері відновлюваної енергетики, оскільки ця галузь у Німеччині має колосальний потенціал."
      },
      "redemittel": [
        {
          "phrase": "In meinem Heimatland habe ich ... studiert / gelernt.",
          "tr": "Memleketimde ... okudum / öğrendim.",
          "en": "In my home country I studied / trained in...",
          "category": "Ausbildung"
        },
        {
          "phrase": "Ein wichtiger Schritt war die Anerkennung meiner Zeugnisse.",
          "tr": "Önemli bir adım diplomalarımın denkliğiydi.",
          "en": "An important step was the recognition of my diplomas.",
          "category": "Anerkennung"
        },
        {
          "phrase": "Derzeit bin ich als ... in Vollzeit / Teilzeit tätig.",
          "tr": "Şu anda tam / yarı zamanlı olarak ... pozisyonunda çalışıyorum.",
          "en": "Currently I am employed full-time / part-time as...",
          "category": "Beruf"
        },
        {
          "phrase": "Zu meinen Hauptaufgaben gehört...",
          "tr": "Başlıca görevlerim arasında ... yer alır.",
          "en": "My core responsibilities include...",
          "category": "Aufgaben"
        },
        {
          "phrase": "In der Zukunft habe ich vor, mich im Bereich ... weiterzubilden.",
          "tr": "Gelecekte ... alanında ileri eğitim almayı planlıyorum.",
          "en": "In the future I intend to specialize further in...",
          "category": "Zukunft"
        }
      ],
      "keyVocab": [
        {
          "de": "die Anerkennung",
          "article": "die",
          "plural": "die Anerkennungen",
          "tr": "denklik, tanınma",
          "en": "recognition"
        },
        {
          "de": "die Weiterbildung",
          "article": "die",
          "plural": "die Weiterbildungen",
          "tr": "ileri mesleki eğitim",
          "en": "further education"
        },
        {
          "de": "das Zeugnis",
          "article": "das",
          "plural": "die Zeugnisse",
          "tr": "diploma, karne, referans belgesi",
          "en": "certificate / transcript"
        },
        {
          "de": "der Arbeitsvertrag",
          "article": "der",
          "plural": "die Arbeitsverträge",
          "tr": "iş sözleşmesi",
          "en": "employment contract"
        },
        {
          "de": "die Gleichwertigkeit",
          "article": "die",
          "plural": "-",
          "tr": "eşdeğerlik, denklik",
          "en": "equivalence"
        }
      ]
    },
    {
      "id": "t1_wohnen",
      "title": "Teil 1: Schwerpunkt Wohnen & Alltag in Deutschland",
      "titleTr": "Bölüm 1: Almanya'da Konut, Yaşam ve Mahalle İlişkileri",
      "titleEn": "Part 1: Focus on Living & Everyday Life in Germany",
      "titleAr": "الجزء 1: التركيز على السكن والحياة اليومية في ألمانيا",
      "titleUk": "Частина 1: Житло та повсякденне життя в Німеччині",
      "durationMin": 3,
      "description": "Berichten Sie über Ihre Erfahrungen bei der Wohnungssuche, Ihre Wohnsituation und Ihr Verhältnis zu den Nachbarn.",
      "descriptionTr": "Ev arama tecrübeniz, mevcut ev durumunuz ve komşularınızla olan ilişkileriniz hakkında bilgi verin.",
      "descriptionEn": "Describe your experiences searching for housing, your current accommodation, and your neighborhood relationships.",
      "descriptionAr": "تحدث عن تجاربك في البحث عن سكن، ووضعك السكني الحالي، وعلاقتك بالجيران.",
      "descriptionUk": "Розкажіть про свій досвід пошуку житла, поточні умови проживання та стосунки із сусідами.",
      "leitpunkte": [
        {
          "key": "suche",
          "label": "Wohnungssuche in Deutschland",
          "labelTr": "Almanya'da ev arama süreci",
          "labelEn": "Flat hunting process in Germany",
          "labelAr": "تجربة البحث عن شقة في ألمانيا",
          "labelUk": "Пошук житла в Німеччині",
          "keywords": [
            "suche",
            "wohnungssuche",
            "inserat",
            "portal",
            "besichtigung",
            "schwer",
            "makler",
            "kaution",
            "schufa"
          ]
        },
        {
          "key": "wohnung",
          "label": "Aktuelle Wohnung & Lage",
          "labelTr": "Mevcut daire ve konumu",
          "labelEn": "Current apartment and neighborhood location",
          "labelAr": "الشقة الحالية والموقع الجغرافي",
          "labelUk": "Поточна квартира та розташування",
          "keywords": [
            "wohnung",
            "zimmer",
            "balkon",
            "garten",
            "miete",
            "warmmiete",
            "ruhig",
            "verkehrsgünstig",
            "stadtteil"
          ]
        },
        {
          "key": "nachbarn",
          "label": "Nachbarschaft & Hausordnung",
          "labelTr": "Komşular ve apartman kuralları (Hausordnung)",
          "labelEn": "Neighbors and house rules (Hausordnung)",
          "labelAr": "الجيران وقواعد المبنى الداخلي (Hausordnung)",
          "labelUk": "Сусіди та правила будинку (Hausordnung)",
          "keywords": [
            "nachbarn",
            "hausordnung",
            "ruhezeiten",
            "kontakt",
            "hilfe",
            "freundlich",
            "grüßen",
            "mülltrennung"
          ]
        },
        {
          "key": "wohlfuehlen",
          "label": "Einleben & Zufriedenheit",
          "labelTr": "Alışma süreci ve memnuniyet",
          "labelEn": "Settling in and overall satisfaction",
          "labelAr": "الاندماج والشعور بالراحة والرضا",
          "labelUk": "Адаптація та задоволення життям",
          "keywords": [
            "wohlfühlen",
            "leben",
            "zufrieden",
            "alltag",
            "glücklich",
            "zentrum",
            "einkaufen",
            "spielplatz"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Über das Thema Wohnen in Deutschland möchte ich gerne berichten, weil die Wohnungssuche für Zugewanderte oft eine große Herausforderung darstellt. Als wir vor zwei Jahren ankamen, haben wir monatelang auf verschiedenen Online-Portalen gesucht und viele Unterlagen wie SCHUFA-Auskunft und Gehaltsnachweise vorbereitet. Glücklicherweise haben wir schließlich eine schöne Dreizimmerwohnung am Stadtrand gefunden. Die Wohnung hat einen kleinen Balkon und liegt in einer sehr ruhigen Gegend mit vielen Grünflächen. In unserem Haus wohnen sechs Parteien. Das Verhältnis zu den Nachbarn ist sehr freundlich und respektvoll. Wir achten alle auf die gesetzlichen Ruhezeiten und helfen uns gegenseitig, wenn Pakete geliefert werden oder jemand verreist ist. Besonders die strenge Mülltrennung war am Anfang neu für mich, aber mittlerweile klappt das reibungslos. Wir fühlen uns hier sehr wohl und heimisch.",
        "tr": "Almanya'da konut ve yaşam konusu hakkında bilgi vermek istiyorum, çünkü yeni gelenler için ev bulmak genellikle büyük bir zorluktur. İki yıl önce geldiğimizde internet portallarında aylarca arama yaptık; SCHUFA belgesi ve maaş bordrosu gibi pek çok evrak hazırladık. Şansımıza nihayet şehrin kenarında çok güzel üç odalı bir daire bulabildik. Evimizin küçük bir balkonu var ve bol yeşil alanı olan sakin bir semtte yer alıyor. Binamızda altı daire bulunuyor. Komşularımızla ilişkilerimiz oldukça samimi ve saygılı. Hepimiz yasal dinlenme saatlerine (Ruhezeiten) özen gösteriyoruz; kargolar geldiğinde veya birimiz seyahate çıktığında birbirimize yardımcı oluyoruz. Başlangıçta özellikle sıkı çöp ayrıştırma kuralı benim için yeniydi, ancak artık sorunsuz şekilde uyguluyorum. Burada kendimizi çok huzurlu ve evimizde hissediyoruz.",
        "en": "I would like to speak about living in Germany, as finding housing is often a significant hurdle for newcomers. When we arrived two years ago, we spent months searching on online property portals and preparing paperwork like credit scores (SCHUFA) and proof of income. Fortunately, we eventually found a lovely three-room apartment on the city outskirts. The apartment has a small balcony and is situated in a tranquil neighborhood with plenty of greenery. Six families live in our building. The relationship with our neighbors is polite and respectful. We all adhere to the official quiet hours (Ruhezeiten) and help each other with package deliveries or when someone travels. The strict waste separation was novel to me initially, but now it works smoothly. We truly feel at home here.",
        "ar": "أود الحديث عن موضوع السكن في ألمانيا، لأن البحث عن شقة غالبًا ما يشكل تحديًا كبيرًا للقادمين الجدد. عندما وصلنا قبل عامين، بحثنا لشهور عبر المواقع الإلكترونية وأعددنا وثائق مثل فحص الائتمان (SCHUFA) وإثباتات الدخل. لحسن الحظ، عثرنا أخيرًا على شقة جميلة من ثلاث غرف في ضواحي المدينة. تحتوي الشقة على شرفة صغيرة وتقع في منطقة هادئة مليئة بالمساحات الخضراء. يعيش في المبنى ست عائلات. العلاقة مع الجيران ودية للغاية وقائمة على الاحترام المتبادل؛ حيث نلتزم جميعًا بأوقات الهدوء الرسمية، ونساعد بعضنا عند استلام الطرود. في البداية كان فرز النفايات أمرًا جديدًا عليّ، لكنه أصبح روتينًا سهلاً الآن. نشعر براحة حقيقية وكأننا في بيتنا.",
        "uk": "Я хочу розповісти про житло в Німеччині, оскільки пошук квартири для новоприбулих нерідко стає серйозним випробуванням. Коли ми приїхали два роки тому, ми місяцями шукали варіанти на порталах нерухомості та збирали документи, такі як довідка SCHUFA та довідки про доходи. На щастя, нам вдалося знайти гарну трикімнатну квартиру на околиці міста. Вона має невеликий балкон і розташована в тихому районі з парками. У нашому будинку шість сімей. Стосунки із сусідами дуже доброзичливі та шанобливі. Ми дотримуємося правил тиші (Ruhezeiten) та допомагаємо одне одному з доставкою посилок. Спочатку сортування сміття було для мене незвичним, але тепер це стало звичною нормою. Ми почуваємося тут як удома."
      },
      "redemittel": [
        {
          "phrase": "Die Wohnungssuche war am Anfang eine große Herausforderung.",
          "tr": "Ev arayışı başlangıçta büyük bir zorluktu.",
          "en": "Flat hunting was a big challenge at first.",
          "category": "Suche"
        },
        {
          "phrase": "Ich wohne in einer ...-Zimmer-Wohnung mit Balkon / Garten.",
          "tr": "Balkonlu / bahçeli ... odalı bir dairede oturuyorum.",
          "en": "I live in a ...-room apartment with balcony / garden.",
          "category": "Wohnung"
        },
        {
          "phrase": "Das Verhältnis zu den Nachbarn ist sehr gut / freundlich.",
          "tr": "Komşularla ilişkiler çok iyi / dostça.",
          "en": "The relationship with the neighbors is very good / friendly.",
          "category": "Nachbarn"
        },
        {
          "phrase": "Wir achten alle auf die gesetzlichen Ruhezeiten.",
          "tr": "Hepimiz yasal dinlenme/sessizlik saatlerine dikkat ederiz.",
          "en": "We all observe the official quiet hours.",
          "category": "Hausordnung"
        },
        {
          "phrase": "Insgesamt fühle ich mich hier sehr wohl und sicher.",
          "tr": "Genel olarak burada kendimi çok huzurlu ve güvende hissediyorum.",
          "en": "Overall, I feel very comfortable and secure here.",
          "category": "Fazit"
        }
      ],
      "keyVocab": [
        {
          "de": "die Warmmiete",
          "article": "die",
          "plural": "die Warmmieten",
          "tr": "ısınma/giderler dahil kira",
          "en": "warm rent (incl. heating)"
        },
        {
          "de": "die Kaution",
          "article": "die",
          "plural": "die Kautionen",
          "tr": "depozito",
          "en": "security deposit"
        },
        {
          "de": "die Hausordnung",
          "article": "die",
          "plural": "die Hausordnungen",
          "tr": "bina iç kuralları",
          "en": "house rules"
        },
        {
          "de": "die Ruhezeit",
          "article": "die",
          "plural": "die Ruhezeiten",
          "tr": "sessizlik saatleri (13-15 ve 22-06)",
          "en": "quiet hours"
        },
        {
          "de": "die Mülltrennung",
          "article": "die",
          "plural": "-",
          "tr": "çöp ayrıştırma",
          "en": "waste separation"
        }
      ]
    }
  ],
  "teil2": [
    {
      "id": "t2_haustiere",
      "title": "Teil 2: Präsentation – Haustiere im Alltag",
      "titleTr": "Bölüm 2: Sunum – Günlük Yaşamda Evcil Hayvanlar",
      "titleEn": "Part 2: Presentation – Pets in Daily Life",
      "titleAr": "الجزء 2: العرض التقديمي – الحيوانات الأليفة في الحياة اليومية",
      "titleUk": "Частина 2: Презентація – Домашні тварини в повсякденному житті",
      "durationMin": 4,
      "description": "Präsentieren Sie ein kurzes Thema (ca. 2-3 Minuten). Berichten Sie über Ihre Erfahrungen, die Situation in Ihrem Heimatland sowie Vor- und Nachteile.",
      "descriptionTr": "Kısa bir konu sunumu yapın (yaklaşık 2-3 dk). Kendi deneyiminizden, memleketinizdeki durumdan ve avantaj/dezavantajlardan bahsedin.",
      "descriptionEn": "Present a short topic (approx. 2-3 minutes). Report on personal experience, the situation in your home country, and pros & cons.",
      "descriptionAr": "قدم عرضًا قصيرًا (حوالي 2-3 دقائق). تحدث عن تجاربك، والوضع في بلدك الأصلي، والمزايا والعيوب.",
      "descriptionUk": "Підготуйте коротку презентацію (приблизно 2-3 хвилини). Розкажіть про особистий досвід, ситуацію на батьківщині, переваги та недоліки.",
      "leitpunkte": [
        {
          "key": "erfahrung",
          "label": "Eigene persönliche Erfahrung (Kendi Deneyiminiz)",
          "labelTr": "Evcil hayvanlarla kişisel geçmişiniz",
          "labelEn": "Personal experience with pets",
          "labelAr": "التجربة الشخصية مع الحيوانات الأليفة",
          "labelUk": "Особистий досвід утримання тварин",
          "keywords": [
            "erfahrung",
            "persönlich",
            "gehabt",
            "früher",
            "hatte",
            "hund",
            "katze",
            "tier",
            "aufgewachsen"
          ]
        },
        {
          "key": "heimatland",
          "label": "Situation im Heimatland (Memleketteki Durum)",
          "labelTr": "Memleketinizde hayvan sahiplenme alışkanlıkları",
          "labelEn": "Situation regarding pets in your home country",
          "labelAr": "وضع الحيوانات الأليفة في الوطن الأم",
          "labelUk": "Ставлення до домашніх тварин на батьківщині",
          "keywords": [
            "heimatland",
            "türkei",
            "land",
            "viele",
            "menschen",
            "häufig",
            "wohnung",
            "dorf",
            "tiere",
            "straßentiere"
          ]
        },
        {
          "key": "vorteile",
          "label": "Vorteile von Haustieren (Evcil Hayvanın Avantajları)",
          "labelTr": "Dostluk, sevgi, psikolojik faydalar",
          "labelEn": "Companionship, stress reduction, and joy",
          "labelAr": "المزايا النفسية والرفقة الإيجابية",
          "labelUk": "Психологічна користь, вірність та радість",
          "keywords": [
            "vorteil",
            "vorteile",
            "freund",
            "einsam",
            "gesundheit",
            "spazieren",
            "freude",
            "treu",
            "beruhigend"
          ]
        },
        {
          "key": "nachteile",
          "label": "Nachteile & Pflichten (Dezavantajlar ve Sorumluluklar)",
          "labelTr": "Veteriner masrafları, temizlik, tatil kısıtları",
          "labelEn": "Costs, vet care, time, and vacation limits",
          "labelAr": "التكاليف البيطرية، النظافة، وتقييد السفر",
          "labelUk": "Витрати, догляд, ветеринар та обмеження у відпустці",
          "keywords": [
            "nachteil",
            "nachteile",
            "kosten",
            "zeit",
            "tierarzt",
            "schmutz",
            "urlaub",
            "pflege",
            "aufwand",
            "haare"
          ]
        },
        {
          "key": "meinung",
          "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
          "labelTr": "Son değerlendirme ve öneriniz",
          "labelEn": "Personal opinion, recommendation, and conclusion",
          "labelAr": "الرأي الشخصي والخلاصة الختامية",
          "labelUk": "Власна думка та підсумковий висновок",
          "keywords": [
            "meinung",
            "fazit",
            "schluss",
            "finde",
            "wichtig",
            "verantwortung",
            "zusammenfassend",
            "entscheidung"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Guten Tag, verehrte Prüferinnen und Prüfer. Das Thema meiner heutigen Präsentation lautet 'Haustiere im Alltag'. Ich habe dieses Thema gewählt, weil Tiere für viele Menschen treue Lebensbegleiter sind. Zuerst möchte ich von meinen persönlichen Erfahrungen berichten: Als Kind bin ich auf dem Land mit einem Hund und zwei Katzen aufgewachsen. Das war eine wunderschöne Zeit, weil Tiere Kindern Verantwortungsbewusstsein beibringen. In meinem Heimatland halten viele Menschen Haustiere, besonders auf dem Land als Wachhunde oder Katzen im Garten. In großen Städten wird es jedoch immer beliebter, auch in Wohnungen Katzen oder kleine Hunde zu halten. Ein großer Vorteil von Haustieren ist, dass man sich niemals einsam fühlt. Besonders ältere Menschen oder Alleinstehende profitieren sehr von der Gesellschaft eines Hundes. Außerdem bewegt man sich durch die täglichen Spaziergänge an der frischen Luft viel mehr. Auf der anderen Seite gibt es aber auch deutliche Nachteile: Haustiere kosten viel Geld für Futter, Steuern und teure Tierarztbesuche. Zudem ist man bei Urlaubsreisen eingeschränkt, weil man vorher eine Betreuung organisieren muss. Meiner Meinung nach sollte man sich nur dann ein Tier anschaffen, wenn man genügend Zeit, Geld und Platz hat. Zusammenfassend kann man sagen, dass Haustiere das Leben bereichern, aber eine lebenslange Verantwortung bedeuten. Ich bedanke mich herzlich für Ihre Aufmerksamkeit und freue mich auf Ihre Fragen.",
        "tr": "İyi günler değerli jüri üyeleri. Bugünkü sunumumun konusu 'Günlük Yaşamda Evcil Hayvanlar'. Bu konuyu seçtim çünkü hayvanlar birçok insan için sadık birer hayat arkadaşıdır. Öncelikle kişisel deneyimlerimden bahsetmek istiyorum: Çocukken köyde bir köpek ve iki kediyle büyüdüm. Bu harika bir dönemdi, çünkü hayvanlar çocuklara sorumluluk bilinci kazandırır. Memleketimde birçok kişi özellikle kırsal kesimde bekçi köpeği veya bahçede kedi besler. Büyük şehirlerde ise apartman dairelerinde kedi veya küçük köpek beslemek giderek yaygınlaşıyor. Evcil hayvanların en büyük avantajı, insanın asla yalnız hissetmemesidir. Özellikle yaşlılar veya yalnız yaşayanlar bir köpeğin arkadaşlığından çok fayda görür. Ayrıca her gün temiz havada yürüyüş yaparak daha çok hareket edersiniz. Öte yandan belirgin dezavantajlar da vardır: Evcil hayvanlar mama, vergi ve pahalı veteriner kontrolleri nedeniyle ciddi masraf yaratır. Ayrıca tatile çıkarken önceden bakım ayarlamak zorunda olduğunuz için hareket alanınız kısıtlanır. Bence bir hayvan ancak yeterli zaman, bütçe ve yaşam alanı olduğunda sahiplenilmelidir. Özetle, evcil hayvanlar hayatımızı zenginleştirir fakat ömür boyu süren bir sorumluluk anlamına gelir. Dinlediğiniz için teşekkür ederim, sorularınızı yanıtlamaktan memnuniyet duyarım.",
        "en": "Good day, esteemed examiners. The topic of my presentation today is 'Pets in Daily Life'. I chose this topic because animals are faithful companions to many people. First, I would like to share my personal experience: As a child, I grew up in the countryside with a dog and two cats. It was a wonderful time because animals teach children a sense of responsibility. In my home country, many people keep pets, particularly in rural areas as guard dogs or outdoor cats. In large cities, however, keeping cats or small dogs in apartments is becoming increasingly popular. A major advantage of pets is that one never feels lonely. Elderly or single individuals especially benefit from a dog's companionship. In addition, daily walks in fresh air encourage regular physical exercise. On the other hand, there are tangible drawbacks: pets incur considerable expenses for food, taxes, and veterinary bills. Moreover, vacation travel becomes limited since pet care must be arranged in advance. In my opinion, one should only adopt an animal if one has adequate time, finances, and living space. In conclusion, pets enrich life immensely, but they represent a lifelong commitment. Thank you for your attention, and I welcome your questions.",
        "ar": "طاب يومكم أيها الممتحنون الكرام. موضوع عرضي اليوم هو 'الحيوانات الأليفة في الحياة اليومية'. اخترت هذا الموضوع لأن الحيوانات رفقاء مخلصون للإنسان. أولاً، أود الحديث عن تجربتي الشخصية: عندما كنت طفلاً نشأت في الريف مع كلب وقطتين. كانت فترة رائعة لأن تربية الحيوانات تغرس في الأطفال روح المسؤولية. في بلدي الأم، يربي العديد من الناس الحيوانات، خاصة في القرى لحراسة المنازل. أما في المدن الكبرى، فقد أصبح من الشائع تربية القطط أو الكلاب الصغيرة داخل الشقق. من أبرز المزايا أن الشخص لا يشعر بالوحدة أبدًا؛ حيث يستفيد كبار السن والأفراد الذين يعيشون بمفردهم بشكل كبير من رعاية كلب. علاوة على ذلك، يمارس المرء الرياضة يوميًا من خلال المشي في الهواء الطلق. في المقابل، توجد عيوب واضحة؛ فالطعام والرعاية البيطرية باهظة الثمن، كما يُقيد السفر لقضاء العطلات بضرورة إيجاد من يرعى الحيوان. برأيي الشخصي، لا ينبغي للمرء اقتناء حيوان إلا إذا توافر لديه الوقت الكافي والميزانية والمساحة المناسبة. وختامًا، تثري الحيوانات الأليفة الحياة لكنها تمثل مسؤولية دائمة. شكرًا لحسن استماعكم وأرحب بأسئلتكم.",
        "uk": "Доброго дня, шановні екзаменатори. Тема моєї сьогоднішньої презентації — 'Домашні тварини в повсякденному житті'. Я обрав цю тему, тому що тварини є вірними друзями людини. Спочатку я хотів би поділитися власним досвідом: у дитинстві я ріс у селі з собакою та двома котами. Це був чудовий час, адже тварини навчають дітей відповідальності. На моїй батьківщині багато людей тримають тварин, особливо в сільській місцевості для охорони будинку. У великих містах стає все популярнішим заводити котів чи маленьких собак у квартирах. Великою перевагою є те, що людина ніколи не відчуває самотності. Крім того, щоденні прогулянки на свіжому повітрі сприяють активному способу життя. З іншого боку, є суттєві мінуси: тварини потребують значних витрат на корм, податки та ветеринарів. Також виникають труднощі під час відпусток, адже потрібно заздалегідь знайти догляд. На мою думку, заводити тварину варто лише за наявності достатнього часу, коштів та простору. Підсумовуючи, тварини роблять наше життя багатшим, але це відповідальність на все життя. Дякую за увагу та з радістю відповім на ваші запитання."
      },
      "redemittel": [
        {
          "phrase": "Das Thema meiner heutigen Präsentation lautet...",
          "tr": "Bugünkü sunumumun başlığı...",
          "en": "The topic of my presentation today is...",
          "category": "Einleitung"
        },
        {
          "phrase": "Zuerst möchte ich von meinen persönlichen Erfahrungen berichten.",
          "tr": "İlk olarak şahsi deneyimlerimden bahsetmek isterim.",
          "en": "First, I would like to report on my personal experiences.",
          "category": "Erfahrung"
        },
        {
          "phrase": "In meinem Heimatland ist die Situation so, dass...",
          "tr": "Memleketimde durum şöyledir ki...",
          "en": "In my home country the situation is that...",
          "category": "Heimatland"
        },
        {
          "phrase": "Ein wesentlicher Vorteil ist, dass...",
          "tr": "En önemli avantaj şudur ki...",
          "en": "A key advantage is that...",
          "category": "Vorteile"
        },
        {
          "phrase": "Auf der anderen Seite muss man bedenken, dass...",
          "tr": "Diğer yandan şunu da hesaba katmak gerekir ki...",
          "en": "On the other hand, one must consider that...",
          "category": "Nachteile"
        },
        {
          "phrase": "Meiner Meinung nach... / Zusammenfassend lässt sich sagen...",
          "tr": "Bana göre... / Özetle söylenebilir ki...",
          "en": "In my opinion... / In conclusion, one can state that...",
          "category": "Fazit"
        }
      ],
      "keyVocab": [
        {
          "de": "das Haustier",
          "article": "das",
          "plural": "die Haustiere",
          "tr": "evcil hayvan",
          "en": "pet"
        },
        {
          "de": "der Lebensbegleiter",
          "article": "der",
          "plural": "die Lebensbegleiter",
          "tr": "hayat arkadaşı / yoldaş",
          "en": "life companion"
        },
        {
          "de": "die Verantwortung",
          "article": "die",
          "plural": "die Verantwortungen",
          "tr": "sorumluluk",
          "en": "responsibility"
        },
        {
          "de": "der Tierarzt",
          "article": "der",
          "plural": "die Tierärzte",
          "tr": "veteriner hekim",
          "en": "veterinarian"
        },
        {
          "de": "die Einsamkeit",
          "article": "die",
          "plural": "-",
          "tr": "yalnızlık",
          "en": "loneliness"
        }
      ]
    },
    {
      "id": "t2_medien",
      "title": "Teil 2: Präsentation – Soziale Medien & Smartphone-Nutzung",
      "titleTr": "Bölüm 2: Sunum – Sosyal Medya ve Akıllı Telefon Kullanımı",
      "titleEn": "Part 2: Presentation – Social Media & Smartphone Usage",
      "titleAr": "الجزء 2: العرض التقديمي – وسائل التواصل الاجتماعي واستخدام الهواتف الذكية",
      "titleUk": "Частина 2: Презентація – Соціальні мережі та використання смартфонів",
      "durationMin": 4,
      "description": "Präsentieren Sie das Thema 'Nutzung sozialer Medien im Alltag'. Gehen Sie auf persönliche Nutzung, Vor- und Nachteile sowie Risiken ein.",
      "descriptionTr": "'Günlük Yaşamda Sosyal Medya Kullanımı' konusunu sunun. Kişisel kullanım, avantaj ve dezavantajlara değinin.",
      "descriptionEn": "Present the topic 'Usage of Social Media in Daily Life', detailing your habits, pros, cons, and risks.",
      "descriptionAr": "قدم موضوع 'استخدام وسائل التواصل الاجتماعي في الحياة اليومية'، متناولاً العادات والمزايا والعيوب والمخاطر.",
      "descriptionUk": "Представте тему 'Використання соціальних мереж у повсякденному житті', висвітлюючи звички, плюси та мінуси.",
      "leitpunkte": [
        {
          "key": "erfahrung",
          "label": "Eigene persönliche Erfahrung (Kendi Deneyiminiz)",
          "labelTr": "Günlük sosyal medya ve ekran süreniz",
          "labelEn": "Daily personal social media habits and screentime",
          "labelAr": "العادات الشخصية اليومية مع الهاتف ووسائل التواصل",
          "labelUk": "Особистий щоденний екранний час та звички",
          "keywords": [
            "erfahrung",
            "nutze",
            "täglich",
            "instagram",
            "youtube",
            "smartphone",
            "handy",
            "internet",
            "zeit",
            "stunden"
          ]
        },
        {
          "key": "heimatland",
          "label": "Situation im Heimatland (Memleketteki Durum)",
          "labelTr": "Memleketinizde gençlerin ve toplumun kullanımı",
          "labelEn": "Popularity among youth and society in your home country",
          "labelAr": "شعبية شبكات التواصل بين الشباب في الوطن الأم",
          "labelUk": "Популярність соціальних мереж на батьківщині",
          "keywords": [
            "heimatland",
            "jugendliche",
            "junge",
            "beliebt",
            "überall",
            "verbreitet",
            "netzwerk",
            "familie",
            "nachrichten"
          ]
        },
        {
          "key": "vorteile",
          "label": "Vorteile der Vernetzung (Sosyal Ağların Avantajları)",
          "labelTr": "Hızlı iletişim, bilgi edinme, öğrenme",
          "labelEn": "Instant communication, news access, and learning",
          "labelAr": "التواصل الفوري والوصول إلى المعرفة والتعلم",
          "labelUk": "Миттєвий зв'язок, доступ до новин та навчання",
          "keywords": [
            "vorteil",
            "vorteile",
            "schnell",
            "kontakt",
            "nachrichten",
            "freunde",
            "information",
            "lernen",
            "austausch"
          ]
        },
        {
          "key": "nachteile",
          "label": "Nachteile & Risiken (Riskler ve Dezavantajlar)",
          "labelTr": "Bağımlılık, zaman kaybı, gizlilik, göz yorgunluğu",
          "labelEn": "Addiction, time wastage, privacy concerns, and stress",
          "labelAr": "الإدمان، إهدار الوقت، انتهاك الخصوصية، والتوتر",
          "labelUk": "Залежність, втрата часу, конфіденційність та стрес",
          "keywords": [
            "nachteil",
            "nachteile",
            "sucht",
            "zeitverschwendung",
            "datenschutz",
            "falsch",
            "augen",
            "stress",
            "schlaf"
          ]
        },
        {
          "key": "meinung",
          "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
          "labelTr": "Dengeli kullanım ve kişisel öneriniz",
          "labelEn": "Balanced usage, digital well-being, and conclusion",
          "labelAr": "الاستخدام المتوازن والخلاصة الختامية",
          "labelUk": "Збалансоване використання та підсумок",
          "keywords": [
            "meinung",
            "denke",
            "glaube",
            "grenze",
            "balance",
            "sinnvoll",
            "kontrolle",
            "fazit",
            "bewusst"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Sehr geehrte Prüferinnen und Prüfer, ich möchte Ihnen heute ein Thema vorstellen, das uns alle betrifft: 'Soziale Medien und Smartphone-Nutzung im Alltag'. Ich persönlich nutze soziale Netzwerke wie WhatsApp und YouTube täglich etwa ein bis zwei Stunden. Vor allem YouTube hilft mir enorm beim Deutschlernen und beim Verfolgen von Nachrichten. In meinem Heimatland sind soziale Medien extrem populär. Fast jeder Jugendliche und viele ältere Menschen besitzen ein Smartphone und bleiben über Gruppen mit Verwandten im Ausland in Kontakt. Ein großer Vorteil dieser Plattformen ist die weltweite Vernetzung: Man kann in Sekundenschnelle Nachrichten verschicken, Videoanrufe mit der Familie führen und berufliche Kontakte knüpfen. Allerdings bringen soziale Medien auch gravierende Nachteile mit sich: Viele Menschen verbringen zu viel Zeit vor dem Bildschirm, was zu Konzentrationsproblemen und Schlafmangel führt. Zudem gibt es Gefahren durch Fehlinformationen und mangelnden Datenschutz. Meiner Meinung nach sind soziale Medien nützliche Werkzeuge, wenn man sie bewusst und mit festen Zeitlimits nutzt. Zusammenfassend lässt sich sagen, dass ein gesunder Mittelweg der beste Schlüssel zur digitalen Welt ist. Vielen Dank für Ihre Aufmerksamkeit.",
        "tr": "Değerli jüri üyeleri, bugün hepimizi doğrudan ilgilendiren bir konuyu sunmak istiyorum: 'Günlük Yaşamda Sosyal Medya ve Akıllı Telefon Kullanımı'. Kişisel olarak WhatsApp ve YouTube gibi ağları günde yaklaşık bir-iki saat kullanıyorum. Özellikle YouTube Almanca öğrenmemde ve güncel haberleri takip etmemde bana çok yardımcı oluyor. Memleketimde sosyal medya son derece yaygın. Neredeyse her genç ve birçok yetişkin bir akıllı telefona sahip; yurt dışındaki akrabalarıyla sürekli grup sohbetleri üzerinden iletişimde kalıyor. Bu platformların en büyük avantajı küresel ağ bağlantısıdır: Saniyeler içinde mesaj gönderebilir, aileyle görüntülü konuşabilir ve mesleki bağlantılar kurabilirsiniz. Ne var ki sosyal medyanın ciddi dezavantajları da bulunmaktadır: Birçok kişi ekran başında saatlerce vakit kaybediyor; bu da odaklanma sorununa ve uykusuzluğa yol açıyor. Ayrıca yanıltıcı haberler ve kişisel verilerin gizliliği riski mevcuttur. Bence sosyal medya bilinçli ve belirli zaman sınırları koyularak kullanıldığında çok faydalı bir araçtır. Özetle, dijital dünyada en doğru yaklaşım dengeli ve ölçülü kullanımdır. İlginiz için teşekkür ederim.",
        "en": "Respected examiners, today I would like to present a topic that affects all of us: 'Social Media and Smartphone Usage in Everyday Life'. Personally, I use platforms such as WhatsApp and YouTube for about one to two hours daily. YouTube in particular assists me greatly in learning German and following current news. In my home country, social media is exceptionally popular. Nearly every young person and many seniors own a smartphone to stay in close touch with relatives abroad. A decisive benefit of these networks is instantaneous global connectivity: one can send messages in seconds, hold video calls with family, and build professional networks. However, social media entails serious drawbacks: many individuals spend excessive time in front of screens, leading to impaired concentration and poor sleep quality. Moreover, misinformation and privacy issues present real concerns. In my view, social media is a beneficial instrument if utilized consciously and with time boundaries. In conclusion, moderation and digital balance represent the healthiest approach. Thank you for your attention.",
        "ar": "حضرات الممتحنين المحترمين، أود أن أقدم لكم اليوم موضوعًا يمس حياتنا جميعًا وهو: 'وسائل التواصل الاجتماعي واستخدام الهواتف الذكية في الحياة اليومية'. أنا شخصيًا أستخدم شبكات مثل واتساب ويوتيوب لمدة ساعة أو ساعتين يوميًا، ويساعدني يوتيوب بشكل فعال في تعلم اللغة الألمانية ومتابعة الأخبار. في بلدي الأم، تحظى شبكات التواصل بشعبية جارفة؛ حيث يمتلك جميع الشباب تقريبًا هواتف ذكية ويبقون على اتصال دائم مع أقاربهم في الخارج. الميزة الكبرى لهذه المنصات هي التواصل العالمي الفوري: يمكن إرسال الرسائل في ثوانٍ، وإجراء مكالمات فيديو عائلية، وبناء شبكات مهنية. غير أن لها أضرارًا جسيمة؛ حيث يهدر الكثيرون ساعات طويلة أمام الشاشات مما يسبب قلة النوم وتشتت التركيز، فضلاً عن مخاطر الأخبار الزائفة وانتهاك الخصوصية. برأيي، تعد هذه الوسائل مفيدة جدًا إذا استُخدمت بوعي وبحدود زمنية محددة. وخلاصة القول، إن التوازن الرقمي هو الخيار الأمثل. شكرًا لحسن استماعكم.",
        "uk": "Шановні екзаменатори, сьогодні я хочу представити тему, яка стосується кожного з нас: 'Соціальні мережі та використання смартфонів у повсякденному житті'. Особисто я користуюся платформами, такими як WhatsApp та YouTube, приблизно 1-2 години на день. YouTube дуже допомагає мені у вивченні німецької мови та перегляді новин. На моїй батьківщині соціальні мережі надзвичайно популярні. Майже кожен підліток та багато дорослих мають смартфон і підтримують зв'язок із родичами за кордоном. Головною перевагою є миттєвий глобальний зв'язок: можна за секунди надіслати повідомлення, здійснити відеодзвінок або знайти корисну інформацію. Однак існують і вагомі недоліки: надмірний екранний час спричиняє проблеми зі сном та концентрацією, а також існують ризики дезінформації та витоку даних. На мою думку, соціальні мережі корисні, якщо користуватися ними усвідомлено та встановлювати часові межі. Підсумовуючи, здоровий баланс є найкращим рішенням у цифровому світі. Дякую за увагу."
      },
      "redemittel": [
        {
          "phrase": "Heute möchte ich über die Nutzung sozialer Medien sprechen.",
          "tr": "Bugün sosyal medya kullanımı hakkında konuşmak istiyorum.",
          "en": "Today I would like to speak about social media usage.",
          "category": "Einleitung"
        },
        {
          "phrase": "Ich persönlich verbringe täglich etwa ... Stunden am Smartphone.",
          "tr": "Şahsen akıllı telefonda günde yaklaşık ... saat geçiriyorum.",
          "en": "I personally spend about ... hours a day on the smartphone.",
          "category": "Erfahrung"
        },
        {
          "phrase": "Ein unbestreitbarer Vorteil ist die schnelle Vernetzung.",
          "tr": "Tartışılmaz bir avantaj hızlı iletişim ağıdır.",
          "en": "An indisputable advantage is rapid networking.",
          "category": "Vorteile"
        },
        {
          "phrase": "Ein großes Risiko liegt in der Ablenkung und im Datenschutz.",
          "tr": "Büyük bir risk dikkat dağılması ve veri gizliliğindedir.",
          "en": "A major risk lies in distraction and privacy issues.",
          "category": "Nachteile"
        },
        {
          "phrase": "Zusammenfassend ist eine bewusste Nutzung der richtige Weg.",
          "tr": "Özetle bilinçli kullanım en doğru yoldur.",
          "en": "In conclusion, mindful usage is the right path.",
          "category": "Fazit"
        }
      ],
      "keyVocab": [
        {
          "de": "das Netzwerk",
          "article": "das",
          "plural": "die Netzwerke",
          "tr": "sosyal ağ, bağlantı",
          "en": "network"
        },
        {
          "de": "die Vernetzung",
          "article": "die",
          "plural": "-",
          "tr": "birbirine bağlanma, iletişim ağı",
          "en": "interconnectivity"
        },
        {
          "de": "der Datenschutz",
          "article": "der",
          "plural": "-",
          "tr": "kişisel verilerin korunması",
          "en": "data protection"
        },
        {
          "de": "die Zeitverschwendung",
          "article": "die",
          "plural": "-",
          "tr": "zaman israfı",
          "en": "waste of time"
        },
        {
          "de": "die Bildschirmzeit",
          "article": "die",
          "plural": "die Bildschirmzeiten",
          "tr": "ekran süresi",
          "en": "screen time"
        }
      ]
    },
    {
      "id": "t2_verkehr",
      "title": "Teil 2: Präsentation – Öffentlicher Nahverkehr vs. Auto",
      "titleTr": "Bölüm 2: Sunum – Toplu Taşıma mı Özel Araç mı?",
      "titleEn": "Part 2: Presentation – Public Transit vs. Private Car",
      "titleAr": "الجزء 2: العرض التقديمي – النقل العام مقابل السيارة الخاصة",
      "titleUk": "Частина 2: Презентація – Громадський транспорт проти автомобіля",
      "durationMin": 4,
      "description": "Sollte man in der Stadt mehr Bus & Bahn oder das eigene Auto nutzen? Vergleichen Sie beide Mobilitätsformen.",
      "descriptionTr": "Şehirde otobüs/tren mi yoksa şahsi araba mı tercih edilmeli? İki ulaşım biçimini karşılaştırın.",
      "descriptionEn": "Should one use buses and trains or private cars in the city? Compare both mobility modes.",
      "descriptionAr": "هل ينبغي استخدام الحافلات والقطارات أم السيارة الخاصة في المدينة؟ قارن بين وسيلتي النقل.",
      "descriptionUk": "Чи варто користуватися громадським транспортом або автомобілем у місті? Порівняйте обидва види транспорту.",
      "leitpunkte": [
        {
          "key": "erfahrung",
          "label": "Eigene Erfahrung bei der Fortbewegung",
          "labelTr": "İşe ve şehre giderken kişisel ulaşım tercihiniz",
          "labelEn": "Personal commute and transport preferences",
          "labelAr": "التجربة الشخصية في التنقل اليومي",
          "labelUk": "Особистий досвід щоденних поїздок",
          "keywords": [
            "fahre",
            "bahn",
            "zug",
            "bus",
            "auto",
            "fahrrad",
            "ticket",
            "pendeln",
            "arbeit",
            "täglich"
          ]
        },
        {
          "key": "heimatland",
          "label": "Situation im Heimatland (Memleketteki Durum)",
          "labelTr": "Memleketinizde toplu taşıma ve trafik yoğunluğu",
          "labelEn": "Public transit infrastructure and traffic in home country",
          "labelAr": "البنية التحتية للنقل العام والازدحام في الوطن الأم",
          "labelUk": "Громадський транспорт та затори на батьківщині",
          "keywords": [
            "heimatland",
            "verkehr",
            "stau",
            "infrastruktur",
            "metro",
            "stadt",
            "überfüllt",
            "auto",
            "benzin"
          ]
        },
        {
          "key": "vorteile",
          "label": "Vorteile von Bus & Bahn (Toplu Taşımanın Avantajları)",
          "labelTr": "Çevre dostu, ekonomik, park derdi yok",
          "labelEn": "Eco-friendly, cost savings, no parking hassle",
          "labelAr": "صديق للبيئة، اقتصادي، وتجنب عناء ركن السيارة",
          "labelUk": "Екологічність, економія коштів та відсутність проблем з паркуванням",
          "keywords": [
            "vorteil",
            "umwelt",
            "klima",
            "co2",
            "günstig",
            "deutschlandticket",
            "entspannt",
            "parkplatz",
            "sparen"
          ]
        },
        {
          "key": "nachteile",
          "label": "Nachteile & Verspätungen (Dezavantajlar ve Gecikmeler)",
          "labelTr": "Rötarlar, grevler, kalabalık vagonlar",
          "labelEn": "Delays, strikes, overcrowding, inflexibility",
          "labelAr": "التأخيرات، الإضرابات، والازدحام في أوقات الذروة",
          "labelUk": "Запізнення, страйки, переповнені вагони та залежність від розкладу",
          "keywords": [
            "nachteil",
            "verspätung",
            "ausfall",
            "streik",
            "unzuverlässig",
            "flexibilität",
            "voll",
            "warten"
          ]
        },
        {
          "key": "meinung",
          "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
          "labelTr": "Kişisel kanaatiniz ve geleceğin ulaşımı",
          "labelEn": "Personal opinion, recommendation, and conclusion",
          "labelAr": "الرأي الشخصي والتوصية الختامية",
          "labelUk": "Власна думка та підсумок",
          "keywords": [
            "meinung",
            "kombination",
            "zukunft",
            "besser",
            "investieren",
            "zusammenfassend",
            "fahrrad",
            "überzeugt"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Sehr geehrte Prüferinnen und Prüfer, ich präsentiere Ihnen heute das Thema 'Öffentlicher Nahverkehr versus Auto'. Mobilität ist für uns alle im Alltag ein entscheidender Faktor. Ich persönlich fahre fast jeden Tag mit der Straßenbahn und dem Regionalzug zur Arbeit, da ich das Deutschlandticket besitze. So kann ich während der Fahrt entspannt lesen oder Deutsch lernen. In meinem Heimatland haben die meisten Familien ein eigenes Auto, weil das Busnetz in vielen Kleinstädten nicht gut ausgebaut ist. In Großstädten wie Istanbul gibt es zwar eine moderne Metro, aber die Straßen sind ständig überlastet und der Stau kostet Nerven. Ein großer Vorteil von Bus und Bahn in Deutschland ist der Klimaschutz: Öffentliche Verkehrsmittel stoßen viel weniger CO2 aus als Autos. Außerdem spart man sich die teure Parkplatzsuche und hohe Benzinkosten. Der größte Nachteil des Nahverkehrs sind jedoch unvorhersehbare Verspätungen, Zugausfälle und Streiks. Wer pünktlich zu einem Arzttermin muss, ist mit dem Auto oft flexibler. Meiner Meinung nach ist in Großstädten der öffentliche Nahverkehr die vernünftigste Wahl, während man auf dem Land oft noch auf das Auto angewiesen ist. Eine kluge Kombination aus Bahn und Fahrrad halte ich für die beste Lösung. Ich danke Ihnen für Ihre Aufmerksamkeit und freue mich auf Ihre Fragen.",
        "tr": "Değerli jüri üyeleri, bugün sizlere 'Toplu Taşıma mı Özel Araç mı?' başlıklı sunumumu yapacağım. Ulaşım günlük hayatımızda hepimiz için belirleyici bir faktördür. Kişisel olarak Deutschlandticket sahibi olduğum için işe neredeyse her gün tramvay ve bölgesel trenle gidip geliyorum. Bu sayede yol boyunca rahatça kitap okuyabiliyor veya Almanca çalışabiliyorum. Memleketimde çoğu ailenin şahsi bir arabası vardır; çünkü küçük şehirlerde otobüs hatları yeterince gelişmemiştir. İstanbul gibi metropollerde modern metro ağları olsa da yollar sürekli tıkalıdır ve trafik insanı çok yorar. Almanya'da otobüs ve trenin en büyük avantajı çevre ve iklim korumasıdır: Toplu taşıma araçları şahsi araçlara kıyasla çok daha az karbon salınımı yapar. Ayrıca pahalı otopark arama stresinden ve yüksek benzin masrafından kurtulursunuz. Ancak toplu taşımanın en büyük dezavantajı beklenmedik rötarlar, tren iptalleri ve grevlerdir. Doktora vaktinde yetişmesi gereken biri arabayla çoğu zaman daha esnektir. Bana göre büyük şehirlerde toplu taşıma en mantıklı seçenektir, ancak kırsal kesimde araba hâlâ vazgeçilmezdir. Tren ve bisiklet kombinasyonunu geleceğin en iyi çözümü olarak görüyorum. Dinlediğiniz için teşekkür ederim.",
        "en": "Respected examiners, today I present to you the topic 'Public Transit versus Private Car'. Mobility is a crucial element in our daily lives. Personally, I commute to work almost every day using the tram and regional train since I own the Deutschlandticket. This allows me to read comfortably or practice German during the ride. In my home country, most families own a car because bus networks in smaller towns are often underdeveloped. While metropolitan centers like Istanbul feature modern metros, roads suffer from permanent congestion and immense traffic stress. A profound advantage of public transit in Germany is environmental protection: public transport emits far less carbon dioxide than individual cars. Additionally, commuters save on expensive parking and high fuel costs. Nevertheless, the main drawback of transit includes unforeseen delays, cancellations, and labor strikes. Anyone needing to reach an urgent appointment often finds a car more flexible. In my view, public transit is the sensible choice in metropolitan areas, whereas rural areas remain car-dependent. A smart integration of trains and bicycles represents the finest solution. Thank you for your attention.",
        "ar": "حضرات الممتحنين الكرام، أقدم لكم اليوم موضوع 'النقل العام مقابل السيارة الخاصة'. يعد التنقل عنصرًا حاسمًا في حياتنا اليومية. أنا شخصيًا أتنقل يوميًا بواسطة الترام والقطار الإقليمي للوصول إلى العمل لأنني أمتلك تذكرة ألمانيا (Deutschlandticket). يتيح لي ذلك القراءة والاسترخاء أثناء الرحلة. في بلدي الأم، تمتلك معظم العائلات سيارة خاصة لعدم توفر شبكة حافلات كافية في المدن الصغيرة. ورغم وجود مترو حديث في المدن الكبرى مثل إسطنبول، فإن الازدحام المروري الدائم يسبب إرهاقًا شديدًا. الميزة الكبرى لقطارات وحافلات ألمانيا هي حماية المناخ؛ إذ تصدر انبعاثات كربونية أقل بكثير، وتوفر عناء البحث عن مواقف باهظة وتكاليف الوقود. بالمقابل، يكمن العيب الرئيسي في التأخيرات غير المتوقعة والإضرابات؛ فالسيارة تمنح مرونة أكبر في الحالات الطارئة. برأيي الشخصي، يعد النقل العام الخيار الأذكى في المدن الكبرى، بينما يظل الريف معتمدًا على السيارات، والجمع بين القطار والدراجة الهوائية هو الحل الأمثل. شكرًا لحسن استماعكم.",
        "uk": "Шановні екзаменатори, сьогодні я презентую тему 'Громадський транспорт проти автомобіля'. Мобільність є ключовим фактором нашого повсякденного життя. Особисто я щодня їжджу на роботу трамваєм та регіональним поїздом, оскільки маю Deutschlandticket. Це дозволяє мені читати або вчити німецьку мову в дорозі. На моїй батьківщині більшість сімей мають власне авто через недостатньо розвинений транспорт у невеликих містах. Хоча у мегаполісах є метро, автомобільні затори забирають багато сил. Головною перевагою поїздів та автобусів у Німеччині є екологічність: громадський транспорт викидає значно менше CO2, ніж автомобілі. До того ж ви заощаджуєте на пальному та паркуванні. Проте вагомим недоліком є несподівані запізнення, скасування рейсів та страйки. На мою думку, у великих містах громадський транспорт є найрозумнішим вибором, тоді як у сільській місцевості авто залишається необхідним. Поєднання поїзда та велосипеда є найкращою моделлю майбутнього. Дякую за увагу."
      },
      "redemittel": [
        {
          "phrase": "Heute möchte ich das Thema öffentliche Verkehrsmittel vorstellen.",
          "tr": "Bugün toplu taşıma araçları konusunu sunmak istiyorum.",
          "en": "Today I would like to present the topic of public transportation.",
          "category": "Einleitung"
        },
        {
          "phrase": "Für den täglichen Arbeitsweg nutze ich meistens...",
          "tr": "İşe günlük gidiş geliş için çoğunlukla ... kullanıyorum.",
          "en": "For my daily commute I mostly use...",
          "category": "Erfahrung"
        },
        {
          "phrase": "Ein unschlagbarer Vorteil von Bus und Bahn ist der Umweltschutz.",
          "tr": "Otobüs ve trenin tartışılmaz bir avantajı çevre korumasıdır.",
          "en": "An unbeatable advantage of public transit is environmental protection.",
          "category": "Vorteile"
        },
        {
          "phrase": "Nachteilig sind vor allem Verspätungen und Ausfälle.",
          "tr": "Dezavantaj olarak özellikle gecikmeler ve sefer iptalleri öne çıkar.",
          "en": "Major drawbacks are delays and cancellations.",
          "category": "Nachteile"
        },
        {
          "phrase": "Meiner Ansicht nach ist eine Kombination die zukunftssicherste Lösung.",
          "tr": "Benim görüşüme göre kombinasyon en geleceğe dönük çözümdür.",
          "en": "In my view, a combination is the most future-proof solution.",
          "category": "Fazit"
        }
      ],
      "keyVocab": [
        {
          "de": "der Nahverkehr",
          "article": "der",
          "plural": "-",
          "tr": "şehir içi / yerel toplu taşıma",
          "en": "local public transit"
        },
        {
          "de": "die Verspätung",
          "article": "die",
          "plural": "die Verspätungen",
          "tr": "rötar, gecikme",
          "en": "delay"
        },
        {
          "de": "der Klimaschutz",
          "article": "der",
          "plural": "-",
          "tr": "iklimin korunması",
          "en": "climate protection"
        },
        {
          "de": "der Berufsverkehr",
          "article": "der",
          "plural": "-",
          "tr": "işe gidiş-dönüş trafiği",
          "en": "rush hour traffic"
        },
        {
          "de": "die Flexibilität",
          "article": "die",
          "plural": "-",
          "tr": "esneklik",
          "en": "flexibility"
        }
      ]
    },
    {
      "id": "t2_ernaehrung",
      "title": "Teil 2: Präsentation – Gesunde Ernährung & Fast Food",
      "titleTr": "Bölüm 2: Sunum – Sağlıklı Beslenme ve Hızlı Yemek (Fast Food)",
      "titleEn": "Part 2: Presentation – Healthy Nutrition & Fast Food",
      "titleAr": "الجزء 2: العرض التقديمي – التغذية الصحية والوجبات السريعة",
      "titleUk": "Частина 2: Презентація – Здорове харчування та фастфуд",
      "durationMin": 4,
      "description": "Ernähren wir uns gesund oder greifen wir zu oft zu Fertiggerichten? Berichten Sie über Vor- und Nachteile sowie Essgewohnheiten.",
      "descriptionTr": "Sağlıklı mı besleniyoruz yoksa hazır gıdalara mı yöneliyoruz? Beslenme alışkanlıkları ve avantaj/dezavantajları anlatın.",
      "descriptionEn": "Do we eat healthily or rely too often on convenience foods? Discuss eating habits and pros and cons.",
      "descriptionAr": "هل نتناول طعامًا صحيًا أم نلجأ كثيرًا للوجبات السريعة؟ تحدث عن عادات الأكل والمزايا والعيوب.",
      "descriptionUk": "Чи харчуємося ми здорово, чи занадто часто обираємо фастфуд? Розкажіть про звички та плюси і мінуси.",
      "leitpunkte": [
        {
          "key": "erfahrung",
          "label": "Eigene Ernährungsgewohnheiten (Kendi Beslenme Alışkanlığınız)",
          "labelTr": "Evde yemek pişirme ve beslenme rutini",
          "labelEn": "Personal home-cooking and dietary routine",
          "labelAr": "عادات الطهي الشخصية والنظام الغذائي اليومي",
          "labelUk": "Особисті звички приготування їжі та раціон",
          "keywords": [
            "erfahrung",
            "koche",
            "frisch",
            "gemüse",
            "obst",
            "selbst",
            "küche",
            "fleisch",
            "gesund",
            "essen"
          ]
        },
        {
          "key": "heimatland",
          "label": "Esskultur im Heimatland (Memleketteki Yemek Kültürü)",
          "labelTr": "Memleketinizde taze yemek ve sofra kültürü",
          "labelEn": "Food culture and culinary traditions in home country",
          "labelAr": "ثقافة الطعام وتقاليد الطهي في الوطن الأم",
          "labelUk": "Культура харчування та кулінарні традиції на батьківщині",
          "keywords": [
            "heimatland",
            "tradition",
            "frisch",
            "markt",
            "familie",
            "zusammen",
            "speisen",
            "kultur",
            "gewürze"
          ]
        },
        {
          "key": "vorteile",
          "label": "Vorteile von frischem Essen (Taze Yemeğin Avantajları)",
          "labelTr": "Vitaminler, bağışıklık, zindelik, lezzet",
          "labelEn": "Vitamins, vitality, immune system, taste",
          "labelAr": "الفيتامينات، المناعة، الطاقة، والمذاق الطيب",
          "labelUk": "Вітаміни, міцний імунітет, енергія та чудовий смак",
          "keywords": [
            "vorteil",
            "gesundheit",
            "vitamine",
            "energie",
            "abwehrkräfte",
            "fettarm",
            "schmeckt",
            "körper",
            "wohlbefinden"
          ]
        },
        {
          "key": "nachteile",
          "label": "Nachteile von Fast Food & Zeitmangel (Hazır Gıda & Zaman)",
          "labelTr": "Aşırı yağ, şeker, obezite, katkı maddeleri",
          "labelEn": "Excess sugar, fat, obesity, and additive risks",
          "labelAr": "الدهون والسكريات الزائدة والسمنة والمواد الحافظة",
          "labelUk": "Зайвий цукор, жири, ризик ожиріння та хімічні домішки",
          "keywords": [
            "nachteil",
            "fast food",
            "fett",
            "zucker",
            "gewicht",
            "krank",
            "teuer",
            "fertiggerichte",
            "ungesund"
          ]
        },
        {
          "key": "meinung",
          "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
          "labelTr": "Dengeli beslenme önerisi ve sonuç",
          "labelEn": "Recommendation on nutritional balance and conclusion",
          "labelAr": "نصيحة غذائية متوازنة والخلاصة الختامية",
          "labelUk": "Власна думка та підсумок",
          "keywords": [
            "meinung",
            "balance",
            "kochen",
            "planen",
            "wichtig",
            "gesund",
            "lebensqualität",
            "zusammenfassend"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Guten Tag, verehrte Prüferinnen und Prüfer. Das Thema meiner heutigen Präsentation lautet 'Gesunde Ernährung und Fast Food im Alltag'. Essen ist nicht nur reine Nahrungsaufnahme, sondern bestimmt maßgeblich unser Wohlbefinden. Ich persönlich koche sehr gerne selbst: Unter der Woche bereite ich frisches Gemüse, Hülsenfrüchte und Reis zu. Wenn ich wenig Zeit habe, mache ich mir einen schnellen Salat. In meinem Heimatland hat die Esskultur einen sehr hohen Stellenwert. Man kauft Obst und Gemüse frisch auf dem Wochenmarkt und kocht traditionell mit viel Olivenöl. Das gemeinsame Essen mit der Großfamilie ist ein wichtiges Ritual. Ein wesentlicher Vorteil von frischer Ernährung ist die Gesundheit: Der Körper bekommt alle notwendigen Vitamine, man fühlt sich fit und beugt chronischen Krankheiten vor. Auf der anderen Seite ist Fast Food verlockend, weil es extrem schnell zubereitet ist und man nach einem anstrengenden Arbeitstag nicht kochen muss. Allerdings enthält Fast Food viel zu viel Zucker, ungesunde Fette und Geschmacksverstärker, was auf Dauer zu Übergewicht und Müdigkeit führt. Meiner Meinung nach sollte man den Großteil seiner Mahlzeiten frisch zubereiten und Fast Food nur als seltene Ausnahme betrachten. Eine gute Wochenplanung beim Einkaufen spart Zeit und Geld. Ich danke Ihnen für Ihre Aufmerksamkeit und freue mich auf Ihre Fragen.",
        "tr": "İyi günler değerli jüri üyeleri. Bugünkü sunumumun konusu 'Günlük Yaşamda Sağlıklı Beslenme ve Fast Food'. Yemek yemek yalnızca karın doyurmak değil, aynı zamanda sağlığımızı ve yaşam kalitemizi belirleyen bir unsurdur. Şahsen evde kendim yemek yapmayı çok severim: Hafta içi taze sebze, bakliyat ve pilav pişiririm. Vaktim az olduğunda ise hızlı bir salata hazırlarım. Memleketimde sofra ve yemek kültürü çok önemlidir. Meyve ve sebzeler haftalık pazarlardan taze alınır ve yemekler geleneksel olarak bol zeytinyağıyla pişirilir. Kalabalık aileyle masaya oturmak vazgeçilmez bir gelenektir. Taze beslenmenin en büyük avantajı sağlıktır: Vücut gerekli vitaminleri alır, insan kendini zinde hisseder ve kronik hastalıklardan korunur. Diğer taraftan fast food çok pratik görünür, çünkü yoğun bir iş gününün ardından yemek yapma zahmetinden kurtarır. Ancak hazır yiyecekler aşırı şeker, zararlı yağlar ve katkı maddeleri içerir; bu da zamanla kilo alımına ve halsizliğe yol açar. Bence yemeklerin büyük bölümü evde taze pişirilmeli, fast food ise sadece nadir bir istisna olarak kalmalıdır. İyi bir haftalık alışveriş planı hem zaman hem para tasarrufu sağlar. Dinlediğiniz için teşekkür ederim.",
        "en": "Good day, esteemed examiners. The topic of my presentation today is 'Healthy Nutrition and Fast Food in Everyday Life'. Food is not merely fuel, but fundamentally shapes our well-being and health. Personally, I really enjoy cooking for myself: during the week, I prepare fresh vegetables, legumes, and rice. When time is tight, I make a quick salad. In my home country, culinary culture occupies a central place. People buy produce fresh from weekly farmers' markets and cook traditionally with olive oil. Dining together with the extended family is a cherished ritual. A decisive advantage of fresh food is longevity and vigor: the body receives vital micronutrients, one feels energized, and chronic illnesses are prevented. Conversely, fast food appeals because of speed and convenience after an exhausting workday. Nonetheless, fast food contains excessive sugar, unhealthy trans fats, and artificial additives, leading to obesity and fatigue. In my view, one should prepare the vast majority of meals from fresh ingredients and treat fast food as a rare indulgence. Thoughtful weekly meal planning saves both time and money. Thank you for your attention.",
        "ar": "طاب يومكم أيها الممتحنون الكرام. موضوع عرضي اليوم هو 'التغذية الصحية والوجبات السريعة في الحياة اليومية'. الأكل ليس مجرد حاجة بيولوجية، بل يحدد بشكل قاطع مستوى صحتنا وطاقتنا. أنا شخصيًا أفضل الطهي بنفسي في المنزل؛ أعد خلال الأسبوع الخضار الطازجة والبقوليات والأرز، وعندما يضيق الوقت أصنع طبق سلطة سريع. في بلدي الأم، تحتل ثقافة الطعام مكانة رفيعة جدًا؛ حيث نشتري الخضار والفواكه طازجة من الأسواق الأسبوعية ونطهو بزيت الزيتون، كما أن تناول الطعام مع العائلة طقس يومي دافئ. الميزة الأساسية للأكل الطازج هي الوقاية من الأمراض وتزويد الجسم بالفيتامينات اللازمة للنشاط. بالمقابل، يغري الطعام السريع الناس لسرعته وتوفير وقت الطهي بعد يوم عمل مجهد، إلا أنه مليء بالدهون والسكريات والمواد الحافظة التي تؤدي إلى السمنة والخمول. برأيي الشخصي، يجب أن تكون الوجبات المنزلية هي القاعدة والوجبات السريعة استثناءً نادراً، فالتخطيط الأسبوعي للمشتريات يوفر المال والوقت. شكرًا لحسن استماعكم.",
        "uk": "Доброго дня, шановні екзаменатори. Тема моєї презентації — 'Здорове харчування та фастфуд у повсякденному житті'. Їжа безпосередньо впливає на наше самопочуття та здоров'я. Особисто я дуже люблю готувати вдома: протягом тижня я готую свіжі овочі, бобові та каші, а коли бракує часу — швидкий салат. На моїй батьківщині культура харчування має велике значення. Овочі та фрукти купують свіжими на ринках, а спільні сімейні обіди є теплою традицією. Головною перевагою свіжої їжі є здоров'я: організм отримує необхідні вітаміни, покращується імунітет та з'являється енергія. З іншого боку, фастфуд приваблює швидкістю після важкого робочого дня. Проте він містить забагато цукру, трансжирів та консервантів, що призводить до зайвої ваги та втоми. На мою думку, більшість страв потрібно готувати вдома зі свіжих продуктів, а фастфуд залишати рідкісним винятком. Планування покупок на тиждень заощаджує і час, і бюджет. Дякую за увагу."
      },
      "redemittel": [
        {
          "phrase": "Mein heutiges Thema befasst sich mit gesunder Ernährung.",
          "tr": "Bugünkü konum sağlıklı beslenme üzerine odaklanıyor.",
          "en": "My topic today focuses on healthy nutrition.",
          "category": "Einleitung"
        },
        {
          "phrase": "Ich versuche, mich möglichst ausgewogen und frisch zu ernähren.",
          "tr": "Mümkün olduğunca dengeli ve taze beslenmeye çalışıyorum.",
          "en": "I try to eat as balanced and freshly as possible.",
          "category": "Erfahrung"
        },
        {
          "phrase": "Ein unschätzbarer Vorteil frischer Küche sind die Vitamine.",
          "tr": "Taze mutfağın paha biçilmez avantajı vitaminlerdir.",
          "en": "An invaluable advantage of fresh cooking is vitamins.",
          "category": "Vorteile"
        },
        {
          "phrase": "Der Verzehr von Fast Food führt langfristig zu gesundheitlichen Problemen.",
          "tr": "Uzun vadede hazır yemek tüketimi sağlık sorunlarına yol açar.",
          "en": "Consuming fast food leads to long-term health issues.",
          "category": "Nachteile"
        },
        {
          "phrase": "Mein Fazit lautet: Selbstkochen ist die beste Investition in die Gesundheit.",
          "tr": "Sonuç olarak: Evde yemek pişirmek sağlığa yapılan en iyi yatırımdır.",
          "en": "My conclusion is: cooking for oneself is the best investment in health.",
          "category": "Fazit"
        }
      ],
      "keyVocab": [
        {
          "de": "die Ernährung",
          "article": "die",
          "plural": "-",
          "tr": "beslenme",
          "en": "nutrition"
        },
        {
          "de": "das Fertiggericht",
          "article": "das",
          "plural": "die Fertiggerichte",
          "tr": "hazır yemek",
          "en": "convenience food"
        },
        {
          "de": "die Abwehrkräfte",
          "article": "die",
          "plural": "die Abwehrkräfte",
          "tr": "bağışıklık sistemi",
          "en": "immune defenses"
        },
        {
          "de": "das Übergewicht",
          "article": "das",
          "plural": "-",
          "tr": "aşırı kilo, obezite",
          "en": "overweight / obesity"
        },
        {
          "de": "die Ausgewogenheit",
          "article": "die",
          "plural": "-",
          "tr": "denge, ölçülülük",
          "en": "balance"
        }
      ]
    },
    {
      "id": "t2_online_shopping",
      "title": "Teil 2: Präsentation – Einkaufen im Internet vs. im Geschäft",
      "titleTr": "Bölüm 2: Sunum – İnternetten Alışveriş mi Mağazadan Alışveriş mi?",
      "titleEn": "Part 2: Presentation – Online Shopping vs. Brick-and-Mortar Stores",
      "titleAr": "الجزء 2: العرض التقديمي – التسوق عبر الإنترنت مقابل المتاجر التقليدية",
      "titleUk": "Частина 2: Презентація – Онлайн-покупки проти традиційних магазинів",
      "durationMin": 4,
      "description": "Kaufen wir lieber bequem vom Sofa aus ein oder schätzen wir die persönliche Beratung im Laden? Vergleichen Sie beide Einkaufsformen.",
      "descriptionTr": "Koltuğumuzdan rahatça mı sipariş veriyoruz yoksa mağazadaki birebir danışmanlığı mı tercih ediyoruz? İki yöntemi kıyaslayın.",
      "descriptionEn": "Do we prefer shopping from the couch or value personal advice in stores? Compare both methods.",
      "descriptionAr": "هل نفضل الشراء المريح من المنزل أم نقدر الاستشارة الشخصية في المتاجر؟ قارن بين طريقتي التسوق.",
      "descriptionUk": "Чи ми віддаємо перевагу онлайн-замовленням, чи цінуємо консультації в магазинах? Порівняйте обидва способи.",
      "leitpunkte": [
        {
          "key": "erfahrung",
          "label": "Eigene persönliche Einkaufserfahrung",
          "labelTr": "İnternet ve mağaza alışveriş deneyiminiz",
          "labelEn": "Personal shopping habits (online vs. retail)",
          "labelAr": "التجربة الشخصية في الشراء الرقمي ومن المتاجر",
          "labelUk": "Особистий досвід покупок в інтернеті та магазинах",
          "keywords": [
            "erfahrung",
            "bestelle",
            "online",
            "laden",
            "geschäft",
            "kleidung",
            "elektronik",
            "paket",
            "kauf"
          ]
        },
        {
          "key": "heimatland",
          "label": "Situation im Heimatland (Memleketteki Durum)",
          "labelTr": "Memleketinizde e-ticaret ve çarşı kültürü",
          "labelEn": "E-commerce versus local bazaar culture in home country",
          "labelAr": "التجارة الإلكترونية مقابل ثقافة الأسواق في الوطن الأم",
          "labelUk": "Розвиток інтернет-торгівлі та ринків на батьківщині",
          "keywords": [
            "heimatland",
            "basar",
            "markt",
            "online",
            "beliebt",
            "geschäfte",
            "stadtzentrum",
            "bezahlen"
          ]
        },
        {
          "key": "vorteile",
          "label": "Vorteile des Online-Shoppings (Online Alışverişin Avantajları)",
          "labelTr": "Zaman tasarrufu, geniş ürün çeşitliliği, fiyat kıyaslama",
          "labelEn": "Convenience, vast selection, price comparisons",
          "labelAr": "توفير الوقت، كثرة الخيارات، ومقارنة الأسعار بسهولة",
          "labelUk": "Зручність, величезний вибір та порівняння цін",
          "keywords": [
            "vorteil",
            "bequem",
            "auswahl",
            "preise",
            "vergleichen",
            "lieferung",
            "haustür",
            "rund um die uhr"
          ]
        },
        {
          "key": "nachteile",
          "label": "Nachteile & Risiken (Dezavantajlar ve Mağazaların Önemi)",
          "labelTr": "İadeler, kargo kirliliği, dokunamama, yerel esnafın zorlanması",
          "labelEn": "Returns, packaging waste, lack of tactile touch, empty high streets",
          "labelAr": "الإرجاع، نفايات التغليف، عدم معاينة الجودة، وإغلاق المتاجر المحلية",
          "labelUk": "Повернення, сміття від пакування, неможливість примірки та занепад міських крамниць",
          "keywords": [
            "nachteil",
            "rücksendung",
            "retoure",
            "anprobieren",
            "beratung",
            "innenstadt",
            "müll",
            "pakete"
          ]
        },
        {
          "key": "meinung",
          "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
          "labelTr": "Dengeli alışveriş yaklaşımı ve sonuç",
          "labelEn": "Balanced consumer approach and conclusion",
          "labelAr": "الرأي الشخصي والجمع بين الطريقتين",
          "labelUk": "Власна думка та висновок",
          "keywords": [
            "meinung",
            "kombination",
            "bücher",
            "elektronik",
            "lokal",
            "unterstützen",
            "fazit",
            "zusammenfassend"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Sehr geehrte Damen und Herren, heute möchte ich Ihnen das Thema 'Einkaufen im Internet versus im Geschäft' präsentieren. Der Handel hat sich in den letzten Jahren rasant gewandelt. Ich persönlich nutze beide Möglichkeiten: Bücher und Elektronikartikel bestelle ich meistens online, weil die Auswahl größer ist und man Kundenbewertungen lesen kann. Kleidung und Schuhe kaufe ich dagegen lieber in der Innenstadt, weil ich die Sachen direkt anprobieren und die Stoffqualität spüren möchte. In meinem Heimatland hat der traditionelle Handel auf Basaren und in Fachgeschäften eine lange Geschichte. Gleichzeitig wächst der Online-Handel extrem schnell, weil vor allem junge Leute Apps auf dem Smartphone nutzen. Der größte Vorteil des Online-Shoppings ist die enorme Bequemlichkeit: Man kann rund um die Uhr einkaufen, Preise vergleichen und sich die Pakete direkt an die Haustür liefern lassen. Die Kehrseite sind jedoch die vielen Retouren und der Verpackungsmüll, der die Umwelt belastet. Zudem leiden die Innenstädte, wenn viele traditionelle Läden schließen müssen, weil die Kunden nur noch im Internet bestellen. Meiner Meinung nach sollten wir lokale Händler unterstützen, besonders bei Lebensmitteln und Kleidung. Für standardisierte Produkte ist das Internet jedoch unschlagbar. Eine gute Mischung ist der beste Weg. Vielen Dank für Ihre Aufmerksamkeit.",
        "tr": "Değerli jüri üyeleri, bugün sizlere 'İnternetten Alışveriş mi Mağazadan Alışveriş mi?' konusunu sunmak istiyorum. Ticaret son yıllarda büyük bir değişim geçirdi. Şahsen ben her iki imkandan da faydalanıyorum: Kitapları ve elektronik eşyaları ürün çeşitliliği fazla olduğu ve kullanıcı yorumlarını okuyabildiğim için internetten sipariş ediyorum. Kıyafet ve ayakkabıyı ise kumaşını hissedip doğrudan deneyebilmek için şehir merkezindeki mağazalardan almayı tercih ediyorum. Memleketimde çarşı ve geleneksel dükkan kültürü köklüdür; bununla birlikte özellikle akıllı telefon uygulamaları sayesinde e-ticaret de hızla büyümektedir. İnternetten alışverişin en büyük avantajı kuşkusuz rahatlıktır: 7/24 alışveriş yapabilir, fiyatları saniyeler içinde karşılaştırabilir ve kargonuzu kapınızdan teslim alabilirsiniz. Madalyonun diğer yüzünde ise sürekli iadeler ve çevreye zarar veren devasa ambalaj atıkları yer alıyor. Ayrıca herkes internetten sipariş verince şehir merkezlerindeki esnaflar dükkanlarını kapatmak zorunda kalıyor. Bence özellikle gıda ve giyimde yerel esnafı desteklemeliyiz. Standart ürünlerde ise internet eşsiz bir kolaylıktır. En doğrusu ikisi arasında dengeli bir tercih yapmaktır. İlginiz için teşekkür ederim.",
        "en": "Respected examiners, today I would like to present the topic 'Online Shopping versus Brick-and-Mortar Stores'. Retail has undergone rapid transformation recently. Personally, I utilize both channels: I order books and electronics online because the selection is immense and client reviews are helpful. For clothing and shoes, however, I prefer walking into local shops to try garments on and inspect fabric quality. In my home country, shopping in bazaars and specialized stores has deep roots. At the same time, mobile commerce is expanding dramatically among younger generations. The predominant advantage of online retail is pure convenience: one can shop 24/7, evaluate price differences instantly, and receive packages at the front door. The downside involves massive return rates and packaging waste that burdens the environment. Furthermore, downtown centers suffer when beloved local shops close due to online competition. In my opinion, we should actively support local retail for groceries and apparel, while relying on the internet for standardized commodities. A balanced mixture represents the wisest approach. Thank you for your attention.",
        "ar": "حضرات الممتحنين الكرام، أقدم لكم اليوم موضوع 'التسوق عبر الإنترنت مقابل الشراء من المتاجر'. لقد شهد قطاع التجارة تحولاً هائلاً مؤخراً. أنا شخصياً أستخدم الطريقتين: أطلب الكتب والأجهزة الإلكترونية عبر الإنترنت للاستفادة من وفرة الخيارات وقراءة آراء المشترين، بينما أفضل شراء الملابس والأحذية من وسط المدينة لتجربة المقاسات ولمس جودة الأقمشة. في بلدي الأم، تحتل الأسواق التقليدية والبازارات مكانة تاريخية، إلى جانب النمو السريع للشراء عبر تطبيقات الهاتف. الميزة الكبرى للتسوق الرقمي هي الراحة المطلقة؛ حيث يمكن الشراء على مدار الساعة ومقارنة الأسعار وتلقي الطرود عند عتبة المنزل. في المقابل، تسبب كثرة المرتجعات ونفايات التغليف عبئًا بيئيًا، فضلاً عن تضرر مراكز المدن وإغلاق المتاجر العريقة. برأيي الشخصي، يجب علينا دعم التجار المحليين خاصة في الأغذية والملابس، مع الاستفادة من الإنترنت في السلع المعيارية. إن الجمع بين الخيارين هو المسار الأفضل. شكرًا لحسن استماعكم.",
        "uk": "Шановні екзаменатори, сьогодні я презентую тему 'Покупки в інтернеті проти традиційних магазинів'. Торгівля за останні роки зазнала величезних змін. Особисто я користуюся обома форматами: книги та електроніку замовляю онлайн завдяки великому вибору та відгукам. Одяг та взуття купую в магазинах міста, щоб мати змогу приміряти речі та оцінити якість тканини. На моїй батьківщині ринки та традиційні крамниці мають давню культуру, водночас онлайн-торгівля стрімко зростає серед молоді. Головною перевагою покупок в мережі є максимальний комфорт: шопінг цілодобово, порівняння цін та доставка додому. Проте мінусами є велика кількість повернень та гори пакувального сміття, що шкодить природі. Крім того, занепадають центри міст через закриття місцевих крамниць. На мою думку, варто підтримувати місцевий бізнес, особливо купуючи продукти та одяг, а для стандартизованих товарів використовувати інтернет. Розумний баланс є найкращим виходом. Дякую за увагу."
      },
      "redemittel": [
        {
          "phrase": "In meiner Präsentation vergleiche ich das Online-Shopping mit dem Einzelhandel.",
          "tr": "Sunumumda online alışveriş ile perakende mağazaları kıyaslıyorum.",
          "en": "In my presentation I compare online shopping with retail stores.",
          "category": "Einleitung"
        },
        {
          "phrase": "Für bestimmte Artikel wie Bücher bevorzuge ich das Internet.",
          "tr": "Kitap gibi belirli ürünler için interneti tercih ediyorum.",
          "en": "For certain items like books I prefer the internet.",
          "category": "Erfahrung"
        },
        {
          "phrase": "Ein riesiger Vorteil ist die zeitliche Unabhängigkeit.",
          "tr": "Çok büyük bir avantaj zamandan bağımsız olmaktır.",
          "en": "A huge advantage is complete time independence.",
          "category": "Vorteile"
        },
        {
          "phrase": "Ein gravierender Nachteil betrifft die Müllberge durch Verpackungen.",
          "tr": "Ciddi bir dezavantaj ambalajlardan kaynaklanan çöp dağlarıdır.",
          "en": "A severe drawback concerns packaging waste mountains.",
          "category": "Nachteile"
        },
        {
          "phrase": "Mein Rat lautet, den lokalen Handel nicht zu vergessen.",
          "tr": "Tavsiyem yerel ticareti ve esnafı unutmamaktır.",
          "en": "My advice is not to neglect local retail.",
          "category": "Fazit"
        }
      ],
      "keyVocab": [
        {
          "de": "der Online-Handel",
          "article": "der",
          "plural": "-",
          "tr": "çevrim içi ticaret, e-ticaret",
          "en": "e-commerce"
        },
        {
          "de": "die Rücksendung",
          "article": "die",
          "plural": "die Rücksendungen",
          "tr": "iade, geri gönderme (Retoure)",
          "en": "product return"
        },
        {
          "de": "die Beratung",
          "article": "die",
          "plural": "die Beratungen",
          "tr": "danışmanlık, müşteri hizmeti",
          "en": "customer advice"
        },
        {
          "de": "die Innenstadt",
          "article": "die",
          "plural": "die Innenstädte",
          "tr": "şehir merkezi",
          "en": "city center / downtown"
        },
        {
          "de": "der Verpackungsmüll",
          "article": "der",
          "plural": "-",
          "tr": "ambalaj atığı",
          "en": "packaging waste"
        }
      ]
    },
    {
      "id": "t2_urlaub",
      "title": "Teil 2: Präsentation – Urlaub im Heimatland oder Auslandsreisen",
      "titleTr": "Bölüm 2: Sunum – Memlekette Tatil mi Yurt Dışı Seyahati mi?",
      "titleEn": "Part 2: Presentation – Holiday at Home vs. Traveling Abroad",
      "titleAr": "الجزء 2: العرض التقديمي – قضاء العطلة في الوطن مقابل السفر للخارج",
      "titleUk": "Частина 2: Презентація – Відпустка на батьківщині чи подорож за кордон",
      "durationMin": 4,
      "description": "Verbringen Sie den Urlaub lieber in der Heimat oder entdecken Sie fremde Länder? Vergleichen Sie beide Reisearten.",
      "descriptionTr": "Tatilinizi memleketinizde mi geçirmeyi seversiniz yoksa yeni ülkeler keşfetmeyi mi? İki tatil türünü kıyaslayın.",
      "descriptionEn": "Do you prefer vacationing in your home country or exploring foreign destinations? Compare both styles.",
      "descriptionAr": "هل تفضل قضاء العطلة في وطنك أم اكتشاف بلدان جديدة؟ قارن بين نوعي السفر.",
      "descriptionUk": "Чи ви любите відпочивати на батьківщині, чи відкривати нові країни? Порівняйте обидва варіанти.",
      "leitpunkte": [
        {
          "key": "erfahrung",
          "label": "Eigene Reiseerfahrungen",
          "labelTr": "Kişisel tatil ve seyahat tercihleriniz",
          "labelEn": "Personal travel memories and vacation styles",
          "labelAr": "التجارب والذكريات الشخصية في السفر والعطلات",
          "labelUk": "Особистий досвід подорожей та відпочинку",
          "keywords": [
            "erfahrung",
            "reise",
            "urlaub",
            "meer",
            "berge",
            "strand",
            "hotel",
            "sommer",
            "ausland",
            "heimat"
          ]
        },
        {
          "key": "heimatland",
          "label": "Situation im Heimatland (Memleketteki Durum)",
          "labelTr": "Memleketinizde tatil alışkanlıkları ve turizm",
          "labelEn": "Vacation traditions and tourism in home country",
          "labelAr": "عادات قضاء العطلات والسياحة في الوطن الأم",
          "labelUk": "Традиції відпочинку та туризм на батьківщині",
          "keywords": [
            "heimatland",
            "verwandte",
            "besuchen",
            "dorf",
            "küste",
            "sommerurlaub",
            "familie",
            "beliebt"
          ]
        },
        {
          "key": "vorteile",
          "label": "Vorteile von Reisen (Seyahatin ve Memleketin Avantajları)",
          "labelTr": "Yeni kültürler, dinlenme, akraba ziyareti, dil pratiği",
          "labelEn": "Cultural horizon, family visits, relaxation, language practice",
          "labelAr": "التعرف على ثقافات جديدة، زيارة الأقارب، والاسترخاء",
          "labelUk": "Пізнання нових культур, зустріч із родичами та мовна практика",
          "keywords": [
            "vorteil",
            "kultur",
            "erholung",
            "sprache",
            "erweitern",
            "horizont",
            "abschalten",
            "tradition"
          ]
        },
        {
          "key": "nachteile",
          "label": "Nachteile & Hürden (Maliyet, İklim, Uçuş Stresi)",
          "labelTr": "Yüksek bilet fiyatları, vize, uçuş stresi, çevre etkisi",
          "labelEn": "High flight costs, visas, flight stress, climate impact",
          "labelAr": "التكاليف الباهظة، التأشيرات، إرهاق السفر، والأثر البيئي",
          "labelUk": "Високі ціни, візи, стрес від перельотів та вплив на екологію",
          "keywords": [
            "nachteil",
            "kosten",
            "flug",
            "teuer",
            "visum",
            "stress",
            "klima",
            "co2",
            "anstrengend"
          ]
        },
        {
          "key": "meinung",
          "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
          "labelTr": "Son değerlendirme ve tavsiyeniz",
          "labelEn": "Personal opinion, travel advice, and conclusion",
          "labelAr": "الرأي الشخصي والخلاصة الختامية",
          "labelUk": "Власна думка та підсумок",
          "keywords": [
            "meinung",
            "abstand",
            "mix",
            "entdecken",
            "heimat",
            "ausland",
            "fazit",
            "wichtig"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Sehr geehrte Prüferinnen und Prüfer, heute präsentiere ich Ihnen das Thema 'Urlaub im Heimatland oder Auslandsreisen'. Das Reisen bietet eine hervorragende Gelegenheit, dem stressigen Alltag zu entfliehen. Ich persönlich liebe beide Optionen: Wenn ich Urlaub im Heimatland mache, steht das Wiedersehen mit meiner Familie und alten Freunden im Mittelpunkt. Das gibt mir Kraft und Geborgenheit. Auf der anderen Seite reise ich unheimlich gerne in andere europäische Länder, um neue Kulturen, historische Städte und fremde Sprachen kennenzulernen. In meinem Heimatland verbringen viele Menschen ihren Sommerurlaub an den sonnigen Küsten des Mittelmeers oder fahren in die Heimatdörfer, um die Großeltern zu besuchen. Ein wesentlicher Vorteil von Auslandsreisen ist die Erweiterung des persönlichen Horizonts: Man gewinnt Verständnis für andere Lebensweisen und sammelt unvergessliche Eindrücke. Allerdings sind Fernreisen oft sehr teuer, Flüge belasten das Klima und manchmal gibt es Sprachbarrieren oder Visumsprobleme. Urlaub in der Heimat ist oft günstiger und emotional erfüllender. Meiner Meinung nach ist eine gesunde Mischung ideal: Man sollte alle paar Jahre neue Länder erkunden, aber auch regelmäßig in die Heimat zurückkehren, um seine Wurzeln zu pflegen. Ich bedanke mich für Ihre Aufmerksamkeit und stehe für Ihre Fragen bereit.",
        "tr": "Değerli jüri üyeleri, bugün sizlere 'Memlekette Tatil mi Yurt Dışı Seyahati mi?' konusunu sunacağım. Seyahat etmek stresli günlük hayattan uzaklaşmak için harika bir fırsattır. Şahsen her iki seçeneği de çok seviyorum: Memleketime tatile gittiğimde ailemi ve eski dostlarımı görmek her şeyin merkezindedir; bu bana büyük bir huzur ve enerji verir. Diğer yandan yeni kültürler, tarihi şehirler ve yabancı diller keşfetmek için Avrupa ülkelerine seyahat etmeyi de çok severim. Memleketimde birçok insan yaz tatilini Akdeniz veya Ege kıyılarında geçirir ya da büyükanne ve büyükbabaları ziyaret etmek için köylerine gider. Yurt dışı seyahatlerinin en büyük avantajı insanın ufkunu genişletmesidir: Farklı yaşam tarzlarını yakından tanır ve unutulmaz anılar biriktirirsiniz. Bununla birlikte yurt dışı seyahatleri genellikle çok pahalıdır, uçuşlar çevreye karbon yükü bindirir, ayrıca vize ve dil engeli yaşanabilir. Memlekette tatil ise çoğu zaman daha ekonomik ve duygusal olarak daha doyurucudur. Bence en ideali dengeli bir dağılımdır: İnsan birkaç yılda bir yeni ülkeler keşfetmeli, ama köklerini tazelemek için düzenli olarak memleketine de gitmelidir. Dinlediğiniz için teşekkür ederim.",
        "en": "Respected examiners, today I present the topic 'Vacation in One's Home Country versus Traveling Abroad'. Traveling provides an exceptional opportunity to decompress from hectic work routines. Personally, I cherish both alternatives: holidaying in my home country centers on reuniting with family and long-time friends, which provides emotional warmth. On the other hand, exploring different European nations broadens horizons through historic architecture, varied cultures, and foreign languages. In my home country, many families vacation along Mediterranean coasts or visit ancestral villages. A prime benefit of foreign travel is cultural enrichment: one develops tolerance for diverse lifestyles and builds memories. Nonetheless, international travel can be financially demanding; aviation contributes to carbon emissions, and visa formalities can be stressful. Staying in one's homeland is often more affordable and emotionally restorative. In my view, an alternating approach is optimal: exploring new foreign regions every few years while returning home regularly to maintain family roots. Thank you for your attention.",
        "ar": "حضرات الممتحنين الكرام، أقدم لكم اليوم موضوع 'قضاء العطلة في الوطن الأم مقابل السفر إلى الخارج'. يوفر السفر فرصة استثنائية للابتعاد عن ضغوط العمل اليومية. أنا شخصيًا أحب كلا الخيارين: عندما أقضي عطلتي في بلدي الأم، يكون لقاء عائلتي وأصدقائي القدامى هو الأهم، مما يمنحني راحة نفسية عميقة. من ناحية أخرى، أعشق السفر إلى بلدان أوروبية جديدة لاكتشاف ثقافات ولغات وعمارة تاريخية مختلفة. في بلدي الأم، يقضي الكثيرون عطلات الصيف على شواطئ البحر أو يسافرون للقرى لزيارة الأجداد. الميزة الكبرى للسفر الخارجي هي توسيع الآفاق الفكرية وبناء ذكريات لا تُنسى. غير أن السفر الدولي باهظ التكاليف وتلوث الطائرات البيئة، إلى جانب تعقيدات التأشيرات. أما العطلة في الوطن فهي أوفر ماديًا وأكثر دفئًا عاطفيًا. برأيي، إن الجمع المتوازن هو الأفضل؛ بحيث يستكشف المرء بلدانًا جديدة بين الحين والآخر دون أن ينسى زيارة وطنه بانتظام. شكرًا لحسن استماعكم.",
        "uk": "Шановні екзаменатори, сьогодні я презентую тему 'Відпустка на батьківщині чи подорож за кордон'. Подорожі — це чудовий спосіб відновити сили після напруженої праці. Особисто я ціную обидва варіанти: відпустка на батьківщині дарує радість зустрічі з рідними та друзями, що зігріває душу. З іншого боку, мені дуже подобається відкривати нові європейські країни, знайомитися з іншими культурами та практиconnected мову. На моїй батьківщині багато людей влітку їдуть до моря або в села до бабусь і дідусів. Головною перевагою закордонних поїздок є розширення світогляду та незабутні враження. Проте далекі подорожі коштують дорого, авіаперельоти шкодять клімату, а оформлення віз забирає час. Відпочинок удома значно дешевший та емоційно рідніший. На мою думку, найкраще чергувати ці поїздки: час від часу відкривати новий світ, але обов'язково повертатися додому до свого коріння. Дякую за увагу."
      },
      "redemittel": [
        {
          "phrase": "Mein heutiges Thema lautet Urlaub im In- oder Ausland.",
          "tr": "Bugünkü konum yurt içi veya yurt dışı tatili.",
          "en": "My topic today is vacationing at home or abroad.",
          "category": "Einleitung"
        },
        {
          "phrase": "Wenn ich Urlaub habe, reise ich am liebsten...",
          "tr": "Tatildeyken en çok ... seyahat etmeyi severim.",
          "en": "When I have vacation I prefer to travel to...",
          "category": "Erfahrung"
        },
        {
          "phrase": "Ein unschätzbarer Vorteil von Auslandsreisen ist die Horizonterweiterung.",
          "tr": "Yurt dışı seyahatinin paha biçilmez faydası ufuk açmasıdır.",
          "en": "An invaluable benefit of travel is broadening one's horizons.",
          "category": "Vorteile"
        },
        {
          "phrase": "Häufige Hürden sind hohe Kosten und Flugstress.",
          "tr": "Sık karşılaşılan engeller yüksek maliyet ve uçuş stresidir.",
          "en": "Frequent hurdles are high expenses and travel stress.",
          "category": "Nachteile"
        },
        {
          "phrase": "Zusammenfassend halte ich eine Kombination für ideal.",
          "tr": "Özetle bir kombinasyonun ideal olduğunu düşünüyorum.",
          "en": "In conclusion, I consider a combination ideal.",
          "category": "Fazit"
        }
      ],
      "keyVocab": [
        {
          "de": "die Horizonterweiterung",
          "article": "die",
          "plural": "-",
          "tr": "ufuk açma, dünya görüşünü genişletme",
          "en": "broadening of horizons"
        },
        {
          "de": "die Erholung",
          "article": "die",
          "plural": "-",
          "tr": "dinlenme, istirahat",
          "en": "recovery / relaxation"
        },
        {
          "de": "die Sprachbarriere",
          "article": "die",
          "plural": "die Sprachbarrieren",
          "tr": "dil engeli",
          "en": "language barrier"
        },
        {
          "de": "das Reiseziel",
          "article": "das",
          "plural": "die Reiseziele",
          "tr": "seyahat rotası, varış noktası",
          "en": "travel destination"
        },
        {
          "de": "das Heimweh",
          "article": "das",
          "plural": "-",
          "tr": "sıla hasreti, memleket özlemi",
          "en": "homesickness"
        }
      ]
    },
    {
      "id": "t2_sport",
      "title": "Teil 2: Präsentation – Sport und Bewegung im Alltag",
      "titleTr": "Bölüm 2: Sunum – Günlük Yaşamda Spor ve Hareket",
      "titleEn": "Part 2: Presentation – Sports & Physical Exercise in Daily Life",
      "titleAr": "الجزء 2: العرض التقديمي – الرياضة والنشاط البدني في الحياة اليومية",
      "titleUk": "Частина 2: Презентація – Спорт та фізична активність у повсякденні",
      "durationMin": 4,
      "description": "Wie wichtig ist regelmäßige Bewegung für unsere Gesundheit und wie lässt sich Sport in den stressigen Alltag integrieren?",
      "descriptionTr": "Düzenli hareket sağlığımız için ne kadar önemli ve spor yoğun günlük yaşama nasıl dahil edilir?",
      "descriptionEn": "How important is regular exercise for health and how can sports be integrated into a busy daily routine?",
      "descriptionAr": "ما مدى أهمية الحركة المنتظمة لصحتنا وكيف يمكن دمج الرياضة في جدول اليوم المزدحم؟",
      "descriptionUk": "Наскільки важливий регулярний рух для здоров'я і як інтегрувати спорт у насичений щоденний графік?",
      "leitpunkte": [
        {
          "key": "erfahrung",
          "label": "Eigene sportliche Aktivitäten",
          "labelTr": "Yaptığınız sporlar ve haftalık rutininiz",
          "labelEn": "Personal sports activities and weekly routine",
          "labelAr": "الأنشطة الرياضية الشخصية والروتين الأسبوعي",
          "labelUk": "Особисті спортивні заняття та щотижневий графік",
          "keywords": [
            "erfahrung",
            "sport",
            "joggen",
            "fitnessstudio",
            "schwimmen",
            "fahrrad",
            "spazieren",
            "woche",
            "training"
          ]
        },
        {
          "key": "heimatland",
          "label": "Situation im Heimatland (Memleketteki Durum)",
          "labelTr": "Memleketinizde spor yapma alışkanlıkları ve kulüpler",
          "labelEn": "Sports culture and community clubs in home country",
          "labelAr": "ثقافة الرياضة والنوادي الشعبية في الوطن الأم",
          "labelUk": "Культура спорту та секцій на батьківщині",
          "keywords": [
            "heimatland",
            "fußball",
            "verein",
            "beliebt",
            "jugendliche",
            "männer",
            "frauen",
            "bewegung",
            "parks"
          ]
        },
        {
          "key": "vorteile",
          "label": "Vorteile von Bewegung (Sporun ve Hareketin Faydaları)",
          "labelTr": "Stres azaltma, kalp sağlığı, enerji, kilo kontrolü",
          "labelEn": "Stress reduction, cardiovascular health, mental energy",
          "labelAr": "تخفيف التوتر، صحة القلب، وتجديد النشاط والتركيز",
          "labelUk": "Зниження стресу, здоров'я серця, енергія та контроль ваги",
          "keywords": [
            "vorteil",
            "gesundheit",
            "herz",
            "stressabbau",
            "ausdauer",
            "energie",
            "gewicht",
            "rücken",
            "laune"
          ]
        },
        {
          "key": "nachteile",
          "label": "Hürden & Verletzungsrisiko (Zaman Yokluğu, Maliyet, Sakatlık)",
          "labelTr": "Vakitsizlik, üyelik ücretleri, yaralanma riski",
          "labelEn": "Lack of time, gym fees, injury risks, fatigue",
          "labelAr": "ضيق الوقت، رسوم النوادي، ومخاطر الإصابات العضلية",
          "labelUk": "Брак часу, вартість абонементів та ризик травм",
          "keywords": [
            "nachteil",
            "zeitmangel",
            "teuer",
            "beitrag",
            "faul",
            "müde",
            "verletzung",
            "muskelkater",
            "hürde"
          ]
        },
        {
          "key": "meinung",
          "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
          "labelTr": "Pratik öneriniz ve sonuç",
          "labelEn": "Personal recommendation and conclusion",
          "labelAr": "الرأي الشخصي والخلاصة الختامية",
          "labelUk": "Власна думка та підсумок",
          "keywords": [
            "meinung",
            "alltag",
            "treppe",
            "spaziergang",
            "disziplin",
            "wichtig",
            "fazit",
            "überzeugt"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Guten Tag, verehrte Prüferinnen und Prüfer. Das Thema meiner Präsentation lautet 'Sport und Bewegung im Alltag'. Bewegung ist für Körper und Geist von grundlegender Bedeutung. Ich persönlich versuche, mich mindestens dreimal in der Woche sportlich zu betätigen: Ich gehe zweimal joggen und fahre bei gutem Wetter mit dem Fahrrad zur Arbeit. Das hilft mir, nach einem langen Tag am Schreibtisch den Kopf frei zu bekommen. In meinem Heimatland ist Fußball die mit Abstand beliebteste Sportart. Viele junge Menschen spielen am Wochenende auf Bolzplätzen. Allerdings treiben ältere Menschen in der Heimat leider eher selten Sport, weil es in vielen Wohngegenden an Parks und sicheren Fahrradwegen fehlt. Der größte Vorteil von regelmäßiger Bewegung ist der Stressabbau: Sport stärkt das Herz-Kreislauf-System, beugt lästigen Rückenschmerzen vor und verbessert die Laune spürbar. Die größte Hürde für viele Berufstätige ist jedoch der Zeitmangel. Nach Feierabend ist man oft erschöpft und kann sich nur schwer aufraffen. Außerdem sind manche Fitnessstudios recht teuer. Meiner Meinung nach muss man nicht zwingend teure Verträge abschließen. Schon kleine Gewohnheiten im Alltag machen einen großen Unterschied: die Treppe statt des Aufzugs nehmen oder in der Mittagspause einen zügigen Spaziergang machen. Zusammenfassend ist Bewegung die beste Medizin. Vielen Dank für Ihre Aufmerksamkeit.",
        "tr": "İyi günler değerli jüri üyeleri. Sunumumun konusu 'Günlük Yaşamda Spor ve Hareket'. Hareket etmek hem beden hem zihin sağlığı için vazgeçilmez bir unsurdur. Şahsen haftada en az üç kez spor yapmaya özen gösteriyorum: İki kez koşuya çıkıyorum ve havalar güzel olduğunda işe bisikletle gidip geliyorum. Bu, tüm gün masa başında oturduktan sonra zihnimi boşaltmama çok yardımcı oluyor. Memleketimde futbol açık ara en popüler spordur; gençler hafta sonları halı sahalarda maç yapar. Ne var ki yaşlılar park ve bisiklet yolları yetersiz olduğu için nadiren spor yaparlar. Düzenli sporun en büyük avantajı stres azaltmasıdır: Kalp ve dolaşım sistemini güçlendirir, sırt ağrılarını önler ve insanın moralini yükseltir. Ancak çalışanlar için en büyük engel vakit darlığıdır. İş çıkışında insan yorgun hisseder ve harekete geçmekte zorlanır; ayrıca spor salonları masraflı olabilir. Bence spora başlamak için pahalı salon üyeliklerine gerek yoktur. Asansör yerine merdivenleri kullanmak veya öğle molasında yürüyüş yapmak gibi küçük alışkanlıklar bile büyük fark yaratır. Özetle, hareket en iyi ilaçtır. İlginiz için teşekkür ederim.",
        "en": "Good day, esteemed examiners. The topic of my presentation is 'Sports and Physical Exercise in Daily Life'. Movement is of fundamental importance for both body and mind. Personally, I strive to engage in athletic activity at least three times a week: I go jogging twice and bike to work when weather permits. This clears my head after sitting at a desk all day. In my home country, soccer is overwhelmingly the most popular sport, with youth playing on community pitches every weekend. Unfortunately, older adults exercise rarely due to a shortage of public parks and bicycle infrastructure. The most significant benefit of regular workout is stress relief: exercise fortifies the cardiovascular system, prevents chronic back pain, and lifts one's mood. However, the most prevalent obstacle is time constraints. After work, one feels fatigued and struggles to stay motivated. Furthermore, fitness clubs can be costly. In my view, expensive memberships are not mandatory. Small lifestyle habits make a massive difference: opting for stairs over elevators or taking brisk walks during lunch breaks. In conclusion, physical movement is the best medicine. Thank you for your attention.",
        "ar": "طاب يومكم أيها الممتحنون الكرام. موضوع عرضي هو 'الرياضة والنشاط البدني في الحياة اليومية'. الحركة ذات أهمية جوهرية لصحة الجسد والعقل معًا. أنا شخصيًا أحرص على ممارسة الرياضة ثلاث مرات أسبوعيًا على الأقل؛ أمارس الجري مرتين وأركب الدراجة إلى العمل في الأيام المعتدلة، مما يمنحني صفاءً ذهنيًا بعد يوم طويل خلف المكتب. في بلدي الأم، تحتل كرة القدم الصدارة ويلعبها الشباب بكثرة، لكن كبار السن نادرًا ما يمارسون الرياضة لقلة المسارات الآمنة والحدائق المجهزة. الميزة الأهم للنشاط البدني هي تفريغ التوتر العصبي؛ فالرياضة تقوي القلب وتحمي من آلام الظهر وتحسن المزاج بشكل ملحوظ. في المقابل، يمثل ضيق الوقت العائق الأكبر لدى العاملين، إلى جانب تكلفة الاشتراكات في الأندية. برأيي الشخصي، لا يتطلب الأمر نوادي باهظة؛ فالعادات الصغيرة مثل صعود الدرج والمشي في استراحة الغداء تحدث فارقًا جوهريًا. وخلاصة القول، إن الحركة هي خير دواء. شكرًا لحسن استماعكم.",
        "uk": "Доброго дня, шановні екзаменатори. Тема моєї презентації — 'Спорт та фізична активність у повсякденні'. Рух має вирішальне значення для нашого фізичного та психічного здоров'я. Особисто я намагаюся тренуватися щонайменше тричі на тиждень: двічі бігаю та за гарної погоди їжджу на роботу велосипедом. Це чудово знімає напругу після сидячої роботи. На моїй батьківщині футбол є найпопулярнішим видом спорту серед молоді. Проте літні люди займаються спортом рідко через нестачу безпечних велодоріжок та парків. Головною перевагою регулярних тренувань є боротьба зі стресом: зміцнюється серцево-судинна система, зникає біль у спині та покращується настрій. Найбільшою перешкодою залишається брак часу та втома після роботи, а абонементи у зали іноді дорогі. На мою думку, не обов'язково платити великі гроші. Навіть дрібні звички, такі як сходи замість ліфта чи прогулянка в обідню перерву, дають прекрасний результат. Підсумовуючи, рух — це найкращі ліки. Дякую за увагу."
      },
      "redemittel": [
        {
          "phrase": "Heute präsentiere ich Ihnen das Thema Sport und Gesundheit.",
          "tr": "Bugün sizlere spor ve sağlık konusunu sunuyorum.",
          "en": "Today I present the topic of sports and health.",
          "category": "Einleitung"
        },
        {
          "phrase": "Um mich fit zu halten, mache ich regelmäßig...",
          "tr": "Zinde kalmak için düzenli olarak ... yapıyorum.",
          "en": "To stay fit I regularly do...",
          "category": "Erfahrung"
        },
        {
          "phrase": "Regelmäßige Bewegung stärkt die Abwehrkräfte und baut Stress ab.",
          "tr": "Düzenli hareket bağışıklığı güçlendirir ve stresi azaltır.",
          "en": "Regular exercise strengthens the immune system and lowers stress.",
          "category": "Vorteile"
        },
        {
          "phrase": "Viele Menschen klagen über Zeitmangel nach der Arbeit.",
          "tr": "Birçok insan işten sonra zaman yetersizliğinden yakınır.",
          "en": "Many people complain about lack of time after work.",
          "category": "Nachteile"
        },
        {
          "phrase": "Abschließend bin ich überzeugt, dass jede Bewegung zählt.",
          "tr": "Son olarak, her hareketin önemli olduğuna inanıyorum.",
          "en": "In conclusion, I am convinced that every bit of movement counts.",
          "category": "Fazit"
        }
      ],
      "keyVocab": [
        {
          "de": "die Bewegung",
          "article": "die",
          "plural": "die Bewegungen",
          "tr": "hareket, egzersiz",
          "en": "movement / physical activity"
        },
        {
          "de": "der Stressabbau",
          "article": "der",
          "plural": "-",
          "tr": "stresin atılması, rahatlama",
          "en": "stress reduction"
        },
        {
          "de": "das Herz-Kreislauf-System",
          "article": "das",
          "plural": "-",
          "tr": "kalp-dolaşım sistemi",
          "en": "cardiovascular system"
        },
        {
          "de": "der Zeitmangel",
          "article": "der",
          "plural": "-",
          "tr": "zaman yetersizliği, vakitsizlik",
          "en": "lack of time"
        },
        {
          "de": "die Ausdauer",
          "article": "die",
          "plural": "-",
          "tr": "dayanıklılık, kondisyon",
          "en": "endurance / stamina"
        }
      ]
    },
    {
      "id": "t2_sprachen_lernen",
      "title": "Teil 2: Präsentation – Fremdsprachen lernen im Erwachsenenalter",
      "titleTr": "Bölüm 2: Sunum – Yetişkinlikte Yabancı Dil Öğrenimi",
      "titleEn": "Part 2: Presentation – Learning Foreign Languages as an Adult",
      "titleAr": "الجزء 2: العرض التقديمي – تعلم اللغات الأجنبية في سن الرشد",
      "titleUk": "Частина 2: Презентація – Вивчення іноземних мов у дорослому віці",
      "durationMin": 4,
      "description": "Welche Chancen und Herausforderungen bringt das Deutschlernen für Erwachsene mit sich? Berichten Sie über Ihre Erfahrungen und Methoden.",
      "descriptionTr": "Yetişkinlikte Almanca öğrenmek hangi fırsat ve zorlukları beraberinde getirir? Yöntem ve deneyimlerinizi anlatın.",
      "descriptionEn": "What opportunities and hurdles come with learning German as an adult? Discuss your methods and experiences.",
      "descriptionAr": "ما هي الفرص والتحديات المرتبطة بتعلم الألمانية في سن الرشد؟ تحدث عن تجاربك وطرائقك.",
      "descriptionUk": "Які можливості та труднощі несе вивчення німецької мови в дорослому віці? Поділіться досвідом та методами.",
      "leitpunkte": [
        {
          "key": "erfahrung",
          "label": "Eigene Erfahrungen beim Deutschlernen",
          "labelTr": "Almanca kursu, pratik ve öğrenme süreciniz",
          "labelEn": "Personal journey learning German and attending classes",
          "labelAr": "التجربة الشخصية في دورات الألمانية وممارسة اللغة",
          "labelUk": "Особистий досвід на курсах та практика німецької",
          "keywords": [
            "erfahrung",
            "deutsch",
            "kurs",
            "grammatik",
            "vokabeln",
            "sprechen",
            "schwer",
            "monate",
            "lernen",
            "üben"
          ]
        },
        {
          "key": "heimatland",
          "label": "Fremdsprachen im Heimatland (Memleketteki Durum)",
          "labelTr": "Memleketinizde yabancı dil eğitimi ve önemi",
          "labelEn": "Foreign language education in home country",
          "labelAr": "تعليم اللغات الأجنبية في المدارس بالوطن الأم",
          "labelUk": "Вивчення іноземних мов на батьківщині",
          "keywords": [
            "heimatland",
            "schule",
            "englisch",
            "unterricht",
            "wichtig",
            "fremdsprache",
            "grammatik",
            "lehrer"
          ]
        },
        {
          "key": "vorteile",
          "label": "Vorteile neuer Sprachen (Yeni Dilin Avantajları)",
          "labelTr": "İş imkanları, entegrasyon, özgüven, beyin jimnastiği",
          "labelEn": "Career opportunities, social integration, mental agility",
          "labelAr": "فرص العمل، الاندماج الاجتماعي، وتنشيط الذاكرة",
          "labelUk": "Кар'єрні можливості, соціальна інтеграція та розвиток пам'яті",
          "keywords": [
            "vorteil",
            "arbeit",
            "beruf",
            "integration",
            "kontakt",
            "selbstvertrauen",
            "gehirn",
            "chancen",
            "verstehen"
          ]
        },
        {
          "key": "nachteile",
          "label": "Hürden für Erwachsene (Yetişkinlerin Yaşadığı Zorluklar)",
          "labelTr": "Hata yapma korkusu, artikeller, zaman kısıtı",
          "labelEn": "Fear of mistakes, complex articles, time pressure with work/family",
          "labelAr": "الخوف من ارتكاب الأخطاء، تعقيد أدوات التعريف، وضيق الوقت",
          "labelUk": "Страх помилок, складні артиклі та поєднання навчання з роботою/сім'єю",
          "keywords": [
            "nachteil",
            "angst",
            "fehler",
            "artikel",
            "der die das",
            "zeit",
            "schwer",
            "kopf",
            "geduld"
          ]
        },
        {
          "key": "meinung",
          "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
          "labelTr": "Öğrenme ipucunuz ve başarı anahtarı",
          "labelEn": "Learning tips and overall conclusion",
          "labelAr": "نصائح للتعلم والخلاصة الختامية",
          "labelUk": "Поради щодо вивчення та підсумок",
          "keywords": [
            "meinung",
            "sprechen",
            "alltag",
            "mut",
            "regelmäßig",
            "tipp",
            "fazit",
            "erfolg"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Sehr geehrte Prüferinnen und Prüfer, ich freue mich, Ihnen heute das Thema 'Fremdsprachen lernen im Erwachsenenalter' vorzustellen. Für mich persönlich ist das Deutschlernen derzeit der wichtigste Meilenstein meines Lebens. Seit über einem Jahr besuche ich intensiv Sprachkurse. Die deutsche Grammatik mit den vier Fällen und den Artikeln 'der, die, das' ist zwar anspruchsvoll, aber mit täglichem Üben mache ich stetig Fortschritte. In meinem Heimatland lernt man in der Schule meistens Englisch, allerdings oft sehr theoretisch mit wenig Sprechpraxis. Erst als Erwachsener begreift man, wie entscheidend lebendige Kommunikation ist. Der größte Vorteil des Sprachenlernens ist die gesellschaftliche und berufliche Teilhabe: Wer die Landessprache spricht, findet leichter eine qualifizierte Arbeit, kann Behördengänge selbstständig erledigen und findet schnell Freunde. Außerdem hält das Sprachenlernen das Gehirn jung und flexibel. Die größte Hürde für Erwachsene ist die Hemmung, Fehler zu machen. Kinder lernen spielerisch, während Erwachsene oft Angst vor Kritik haben. Zudem muss man das Lernen mit Beruf und Familie vereinbaren. Meiner Meinung nach ist der Schlüssel zum Erfolg der Mut zum Sprechen im Alltag: beim Bäcker, im Verein oder mit Nachbarn. Zusammenfassend ist Sprache der Schlüssel zur Welt. Ich danke Ihnen für Ihre Aufmerksamkeit und freue mich auf Ihre Fragen.",
        "tr": "Değerli jüri üyeleri, bugün sizlere 'Yetişkinlikte Yabancı Dil Öğrenimi' konusunu sunmaktan memnuniyet duyuyorum. Benim için Almanca öğrenmek şu anda hayatımın en önemli dönüm noktasıdır. Bir yılı aşkın süredir yoğun bir dil kursuna devam ediyorum. Dört ismin hali ve 'der, die, das' artikelleriyle Alman grameri zorlu olsa da günlük pratikle düzenli ilerleme kaydediyorum. Memleketimde okullarda genellikle İngilizce öğretilir, fakat eğitim çoğunlukla teoriktir ve konuşma pratiği azdır. İnsan yetişkin olunca canlı iletişimin ne kadar hayati olduğunu daha iyi anlıyor. Yeni bir dil öğrenmenin en büyük avantajı toplumsal ve mesleki katılımdır: Yaşadığı ülkenin dilini konuşan kişi nitelikli bir iş bulur, resmi dairelerde işlerini kendi halleder ve kolayca çevre edinir. Ayrıca yabancı dil öğrenmek beyni zinde tutar. Yetişkinler için en büyük engel ise hata yapma korkusudur. Çocuklar oyun oynar gibi öğrenirken yetişkinler eleştirilmekten çekinir; ayrıca iş ve aile arasında vakit bulmak zordur. Bence başarının sırrı günlük hayatta fırında, sokakta veya komşularla konuşma cesareti göstermektir. Özetle, dil dünyaya açılan en önemli kapıdır. İlginiz için teşekkür ederim.",
        "en": "Respected examiners, I am pleased to present the topic 'Learning Foreign Languages as an Adult'. For me, acquiring German is currently the most significant milestone in my life. I have attended intensive language courses for over a year. While German grammar with its four cases and three grammatical genders ('der, die, das') is demanding, regular practice yields steady progress. In my home country, schools teach mostly English, but instruction is heavily theoretical with minimal speaking practice. Only as adults do we comprehend how crucial authentic conversation is. The supreme advantage of language acquisition is social and economic integration: speaking the local language opens doors to skilled employment, enables independent bureaucracy handling, and builds friendships. Furthermore, learning languages enhances cognitive agility. The primary barrier for adults is hesitation and fear of speaking mistakes. Children learn intuitively, whereas adults worry about critique; additionally, balancing study with work and family demands strict discipline. In my view, the secret to fluency is the courage to speak in everyday situations: at the bakery, in sports clubs, and with neighbors. In conclusion, language is the key to integration. Thank you for your attention.",
        "ar": "حضرات الممتحنين الكرام، يسعدني أن أقدم لكم موضوع 'تعلم اللغات الأجنبية في سن الرشد'. بالنسبة لي شخصيًا، يعد تعلم اللغة الألمانية أهم محطة في حياتي حاليًا. أحضر دورات لغة مكثفة منذ أكثر من عام، ورغم صعوبة القواعد وأدوات التعريف الألمانية، إلا أن الممارسة اليومية تضمن تقدمًا ملموسًا. في بلدي الأم، يتم تدريس الإنجليزية بشكل نظري في المدارس دون ممارسة كافية للمحادثة، لكن الإنسان يدرك في الكبر مدى حيوية التواصل الحقيقي. الميزة الأكبر لإتقان لغة جديدة هي الاندماج الاجتماعي والمهني؛ فمن يتحدث لغة البلد يجد عملاً كريمًا وينجز معاملاته الإدارية بنفسه ويكتسب أصدقاء جدد، كما تحافظ اللغة على مرونة الدماغ. أما العائق الأكبر لدى الكبار فهو الخجل والخوف من الخطأ وضيق الوقت مع التزامات الأسرة والعمل. برأيي الشخصي، مفتاح النجاح يكمن في الشجاعة والتحدث في مواقف الحياة اليومية كالمخبز ومحادثة الجيران. وخلاصة القول، إن اللغة هي مفتاح الاندماج الحقيقي. شكرًا لحسن استماعكم.",
        "uk": "Шановні екзаменатори, я радий представити тему 'Вивчення іноземних мов у дорослому віці'. Особисто для мене вивчення німецької мови є найважливішим етапом у житті. Вже понад рік я відвідую інтенсивні мовні курси. Німецька граматика з чотирма відмінками та артиклями складна, але щоденна праця дає впевнений прогрес. На моїй батьківщині в школах вивчають переважно англійську, проте уроки здебільшого теоретичні з мінімумом розмовної практики. Головною перевагою нової мови є інтеграція та кар'єра: той, хто володіє мовою, знаходить кваліфіковану роботу, самостійно вирішує справи в установах і легко знаходить друзів. Найбільшою перешкодою для дорослих є мовний бар'єр та страх зробити помилку, а також нестача часу через роботу та родину. На мою думку, запорукою успіху є сміливість говорити у побутових ситуаціях: у крамниці, з сусідами та колегами. Підсумовуючи, мова — це ключ до всього світу. Дякую за увагу."
      },
      "redemittel": [
        {
          "phrase": "In meinem heutigen Vortrag spreche ich über das Fremdsprachenlernen.",
          "tr": "Bugünkü sunumumda yabancı dil öğrenimi hakkında konuşuyorum.",
          "en": "In my presentation today I talk about language learning.",
          "category": "Einleitung"
        },
        {
          "phrase": "Seit mehr als einem Jahr lerne ich intensiv Deutsch.",
          "tr": "Bir yılı aşkın süredir yoğun bir şekilde Almanca öğreniyorum.",
          "en": "For more than a year I have been learning German intensively.",
          "category": "Erfahrung"
        },
        {
          "phrase": "Die Beherrschung der Landessprache ist die Basis für beruflichen Erfolg.",
          "tr": "Ülke diline hakimiyet mesleki başarının temelidir.",
          "en": "Command of the national language is the foundation for career success.",
          "category": "Vorteile"
        },
        {
          "phrase": "Erwachsene haben oft Angst davor, grammatikalische Fehler zu machen.",
          "tr": "Yetişkinler genellikle dilbilgisi hatası yapmaktan korkarlar.",
          "en": "Adults often fear making grammatical mistakes.",
          "category": "Nachteile"
        },
        {
          "phrase": "Zusammenfassend braucht man vor allem Mut und regelmäßige Übung.",
          "tr": "Özetle en çok cesaret ve düzenli pratiğe ihtiyaç vardır.",
          "en": "In conclusion, one needs courage and regular practice above all.",
          "category": "Fazit"
        }
      ],
      "keyVocab": [
        {
          "de": "die Sprachpraxis",
          "article": "die",
          "plural": "-",
          "tr": "konuşma/dil pratiği",
          "en": "language practice"
        },
        {
          "de": "die Hemmung",
          "article": "die",
          "plural": "die Hemmungen",
          "tr": "çekingenlik, tutukluk",
          "en": "inhibition / hesitation"
        },
        {
          "de": "die Teilhabe",
          "article": "die",
          "plural": "-",
          "tr": "toplumsal katılım",
          "en": "participation / involvement"
        },
        {
          "de": "der Meilenstein",
          "article": "der",
          "plural": "die Meilensteine",
          "tr": "dönüm noktası",
          "en": "milestone"
        },
        {
          "de": "die Selbstsicherheit",
          "article": "die",
          "plural": "-",
          "tr": "özgüven, kendine güven",
          "en": "self-confidence"
        }
      ]
    }
  ],
  "teil3": [
    {
      "id": "t3_abschiedsparty",
      "title": "Teil 3: Gemeinsam planen – Abschiedsparty für einen Kollegen",
      "titleTr": "Bölüm 3: Birlikte Planlama – İş Arkadaşı İçin Veda Partisi",
      "titleEn": "Part 3: Joint Planning – Farewell Party for a Colleague",
      "titleAr": "الجزء 3: التخطيط المشترك – حفل وداع لزميل في العمل",
      "titleUk": "Частина 3: Спільне планування – Прощальна вечірка для колеги",
      "durationMin": 5,
      "description": "Ein Kollege verlässt die Firma / den Sprachkurs. Planen Sie gemeinsam mit Ihrem Partner eine gelungene Abschiedsfeier.",
      "descriptionTr": "Bir çalışma/kurs arkadaşınız ayrılıyor. Partnerinizle birlikte veda kutlamasını planlayın.",
      "descriptionEn": "A colleague is leaving the company / language course. Plan a farewell celebration together with your partner.",
      "descriptionAr": "زميل لك سيغادر الشركة أو دورة اللغة. خطط لحفل وداع ناجح ومميز بالاشتراك مع شريكك.",
      "descriptionUk": "Колега залишає компанію або мовний курс. Сплануйте разом із партнером прощальну вечірку.",
      "leitpunkte": [
        {
          "key": "wann",
          "label": "Wann? (Zaman, Tag & Uhrzeit)",
          "labelTr": "Kutlama ne zaman, hangi gün ve saatte?",
          "labelEn": "When? Date, weekday, and time",
          "labelAr": "الموعد واليوم وساعة الحفل",
          "labelUk": "Коли? Дата, день тижня та точний час",
          "keywords": [
            "wann",
            "zeit",
            "samstag",
            "freitag",
            "abend",
            "uhr",
            "termin",
            "wochenende",
            "nächste"
          ]
        },
        {
          "key": "wo",
          "label": "Wo? (Ort, Raum oder Draußen)",
          "labelTr": "Nerede? Mekan, oda veya açık hava",
          "labelEn": "Where? Location, room, garden, or restaurant",
          "labelAr": "مكان الحفل (قاعة، حديقة، أو مطعم)",
          "labelUk": "Де? Локація, зал, ресторан чи природа",
          "keywords": [
            "wo",
            "ort",
            "raum",
            "park",
            "restaurant",
            "café",
            "garten",
            "büro",
            "bürgerhaus",
            "mieten"
          ]
        },
        {
          "key": "essen",
          "label": "Essen & Trinken (Yiyecek ve İçecekler)",
          "labelTr": "Yiyecek ve içecekler nasıl organize edilecek?",
          "labelEn": "Food and beverages arrangements",
          "labelAr": "المأكولات والمشروبات وتحضير البوفيه",
          "labelUk": "Їжа та напої, фуршет або замовлення",
          "keywords": [
            "essen",
            "trinken",
            "getränke",
            "kuchen",
            "buffet",
            "pizza",
            "fingerfood",
            "mitbringen",
            "kaufen",
            "saft"
          ]
        },
        {
          "key": "geschenk",
          "label": "Geschenk & Überraschung (Hediye ve Sürpriz)",
          "labelTr": "Ortak hediye, tebrik kartı veya sürpriz",
          "labelEn": "Gift, card, or surprise farewell idea",
          "labelAr": "الهدية التذكارية والبطاقة والمفاجأة",
          "labelUk": "Спільний подарунок, листівка або сюрприз",
          "keywords": [
            "geschenk",
            "überraschung",
            "karte",
            "gutschein",
            "foto",
            "blumen",
            "sammeln",
            "buch",
            "album"
          ]
        },
        {
          "key": "kosten",
          "label": "Wer bezahlt wofür? (Masrafların Bölüşümü)",
          "labelTr": "Bütçe ve masrafların paylaşımı",
          "labelEn": "Who pays what? Budget and cost splitting",
          "labelAr": "توزيع التكاليف والميزانية بين المشاركين",
          "labelUk": "Хто за що платить? Розподіл витрат і бюджет",
          "keywords": [
            "bezahlen",
            "kosten",
            "geld",
            "euro",
            "teilen",
            "hälfte",
            "kasse",
            "budget",
            "pro person",
            "sammeln"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Hier ist ein vorbildlicher Dialog zwischen Partner A und Partner B für die telc B1 Prüfung:\n\nPartner A: Hallo! Wie du weißt, verlässt unser Kollege Thomas nächsten Monat unser Team. Ich finde, wir sollten unbedingt eine schöne Abschiedsfeier für ihn organisieren. Was meinst du dazu?\n\nPartner B: Das ist eine ausgezeichnete Idee! Thomas hat uns immer so toll unterstützt. Wann hättest du denn Zeit? Ich schlage vor, dass wir die Feier am nächsten Freitagabend ab 18:30 Uhr machen, direkt nach der Arbeit.\n\nPartner A: Freitagabend passt mir hervorragend. Aber wo wollen wir feiern? Wenn das Wetter schön ist, könnten wir in den Stadtpark gehen, oder wir mieten einen kleinen Raum im Bürgerhaus.\n\nPartner B: Im Park ist es zwar nett, aber das Wetter ist im Moment unbeständig. Besser wäre es, wenn wir einen Tisch in dem italienischen Restaurant um die Ecke reservieren. Da sind wir wetterunabhängig.\n\nPartner A: Einverstanden! Ich kann morgen dort anrufen und für 15 Personen reservieren. Wie machen wir das mit dem Essen und den Getränken? Jeder bestellt sein eigenes Gericht, und für das Dessert bringen wir vielleicht einen Kuchen mit?\n\nPartner B: Genau so machen wir das! Ich backe gerne einen Schokoladenkuchen. Und wir brauchen natürlich noch ein persönliches Abschiedsgeschenk. Wie wäre es mit einem Fotobuch mit Erinnerungsfotos und einem Reisegutschein?\n\nPartner A: Das wird ihn riesig freuen! Ich gestalte das Fotobuch online. Wenn jeder Kollege etwa 10 Euro dazugibt, reicht das locker für das Geschenk und den Gutschein. Ich sammle das Geld bis Mittwoch ein.\n\nPartner B: Perfekt! Dann haben wir alles Wichtige geregelt: Termin, Restaurant, Kuchen und Geschenk. Ich freue mich schon auf Freitag!",
        "tr": "İşte telc B1 sınavı için örnek Partner A ve Partner B diyalogu:\n\nPartner A: Merhaba! Bildiğin gibi iş arkadaşımız Thomas gelecek ay ekibimizden ayrılıyor. Bence onun için mutlaka güzel bir veda partisi düzenlemeliyiz. Ne dersin?\n\nPartner B: Harika bir fikir! Thomas bize her zaman çok yardımcı oldu. Ne zaman vaktin var? Cuma akşamı iş çıkışı saat 18:30 gibi kutlamayı yapmamızı öneriyorum.\n\nPartner A: Cuma akşamı bana çok uyar. Peki nerede kutlayacağız? Hava güzel olursa şehir parkına gidebiliriz veya mahalle evinden küçük bir salon kiralayabiliriz.\n\nPartner B: Park güzel ama şu sıralar hava çok değişken. Köşedeki İtalyan restoranında masa ayırtmamız çok daha garanti olur. Böylece yağmur derdimiz olmaz.\n\nPartner A: Anlaştık! Yarın orayı arayıp 15 kişilik yer ayırtabilirim. Yiyecek ve içecek işini nasıl çözeriz? Herkes kendi yemeğini sipariş eder, tatlı olarak da belki bir pasta götürürüz?\n\nPartner B: Kesinlikle öyle yapalım! Çikolatalı bir pastayı severek pişiririm. Tabii bir de anlamlı bir hediye ayarlamamız lazım. Hatıra fotoğraflarının olduğu bir albüm ve bir seyahat hediye çeki nasıl olur?\n\nPartner A: Buna çok sevinecektir! Fotoğraf albümünü internetten ben hazırlarım. Her arkadaşımız yaklaşık 10 Euro verirse hediye ve çek için rahatça yeter. Çarşambaya kadar parayı ben toplarım.\n\nPartner B: Mükemmel! Böylece en önemli şeyleri kararlaştırdık: Tarih, mekan, pasta ve hediye. Şimdiden sabırsızlanıyorum!",
        "en": "Here is an exemplary dialogue between Partner A and Partner B for telc B1:\n\nPartner A: Hello! As you know, our colleague Thomas is leaving our team next month. I think we should definitely organize a nice farewell party for him. What do you think?\n\nPartner B: That is an excellent idea! Thomas has always supported us so well. When would you have time? I suggest having the party next Friday evening at 6:30 PM, right after work.\n\nPartner A: Friday evening suits me wonderfully. But where should we celebrate? If weather permits, we could go to the park, or rent a small room at the community center.\n\nPartner B: The park is nice, but the weather is unsettled right now. It would be better to reserve a table at the Italian restaurant around the corner so we don't depend on the weather.\n\nPartner A: Agreed! I can call them tomorrow and reserve for 15 people. How shall we handle food and drinks? Everyone orders their own meal, and for dessert we bring a cake?\n\nPartner B: Exactly! I will gladly bake a chocolate cake. And of course, we need a personal farewell gift. What about a photo book with shared memories and a travel voucher?\n\nPartner A: He will be thrilled! I can design the photo book online. If every colleague pitches in about 10 euros, that easily covers the gift and voucher. I'll collect the money by Wednesday.\n\nPartner B: Perfect! Then we have settled everything: date, restaurant, cake, and gift. Looking forward to Friday!",
        "ar": "إليكم حوار نموذجي بين الشريك أ والشريك ب لامتحان telc B1:\n\nالشريك أ: مرحبًا! كما تعلم، سيغادر زميلنا توماس فريقنا الشهر المقبل. أعتقد أنه ينبغي علينا تنظيم حفل وداع جميل له. ما رأيك؟\n\nالشريك ب: فكرة ممتازة! لقد ساعدنا توماس دائمًا. متى يناسبك الوقت؟ أقترح إقامة الحفل مساء الجمعة القادم في الساعة 6:30 بعد انتهاء العمل مباشرة.\n\nالشريك أ: مساء الجمعة يناسبني جدًا. ولكن أين نحتفل؟ إن كان الطقس لطيفًا يمكننا الذهاب لحديقة المدينة، أو استئجار قاعة صغيرة.\n\nالشريك ب: الحديقة خيار جميل لكن الطقس متقلب حاليًا. من الأفضل حجز طاولة في المطعم الإيطالي القريب لنتجنب مفاجآت المطر.\n\nالشريك أ: موافق! سأتصل بهم غدًا للحجز لـ 15 شخصًا. ماذا عن الطعام؟ يطلب كل شخص وجبته، ونحضر كعكة للتحلية؟\n\nالشريك ب: بالضبط! سأخبز كعكة الشوكولاتة بكل سرور. ونحتاج أيضًا لهدية وداع تذكارية، ما رأيك بألبوم صور يجمع ذكرياتنا مع قسيمة سفر؟\n\nالشريك أ: سيفرح بذلك كثيرًا! سأصمم الألبوم عبر الإنترنت. إذا دفع كل زميل 10 يورو فستكفي الهدية تمامًا. سأجمع المبلغ حتى الأربعاء.\n\nالشريك ب: ممتاز! هكذا اتفقنا على الموعد والمكان والكعكة والهدية. أتطلع ليوم الجمعة!",
        "uk": "Ось зразковий діалог між Партнером А та Партнером Б для іспиту telc B1:\n\nПартнер А: Привіт! Як ти знаєш, наш колега Томас наступного місяця залишає нашу команду. Я вважаю, що ми обов'язково маємо влаштувати для нього прощальну вечірку. Що скажеш?\n\nПартнер Б: Чудова ідея! Томас завжди нам допомагав. Коли ти маєш час? Я пропоную зібратися наступної п'ятниці о 18:30 відразу після роботи.\n\nПартнер А: П'ятниця вечір мені ідеально підходить. Але де святкуватимемо? Якщо погода гарна, можна піти в парк, або орендувати залу.\n\nПартнер Б: У парку добре, але погода зараз мінлива. Краще забронювати столик в італійському ресторані за рогом, щоб не залежати від дощу.\n\nПартнер А: Згоден! Я можу зателефонувати завтра та забронювати місця на 15 осіб. Як щодо їжі? Кожен замовить собі страву, а на десерт принесемо торт?\n\nПартнер Б: Саме так! Я із задоволенням спечу шоколадний торт. І нам ще потрібен пам'ятний подарунок. Як щодо фотоальбому зі спільними фотографіями та сертифіката на подорож?\n\nПартнер А: Він буде в захваті! Я оформлю фотоальбом онлайн. Якщо кожен колега здасть приблизно по 10 євро, цього вистачить. Я зберу кошти до середи.\n\nПартнер Б: Чудово! Ми все узгодили: час, ресторан, торт і подарунок. З нетерпінням чекаю п'ятниці!"
      },
      "redemittel": [
        {
          "phrase": "Ich schlage vor, dass wir am Freitagabend feiern.",
          "tr": "Cuma akşamı kutlama yapmamızı öneriyorum.",
          "en": "I suggest we celebrate on Friday evening.",
          "category": "Vorschlag"
        },
        {
          "phrase": "Das ist eine ausgezeichnete Idee! Wann hättest du Zeit?",
          "tr": "Harika bir fikir! Ne zaman vaktin olur?",
          "en": "That is an excellent idea! When would you have time?",
          "category": "Zustimmung"
        },
        {
          "phrase": "Besser wäre es, wenn wir einen Tisch reservieren.",
          "tr": "Masa ayırtmamız çok daha iyi olur.",
          "en": "It would be better if we reserve a table.",
          "category": "Gegenvorschlag"
        },
        {
          "phrase": "Ich kann mich um die Reservierung kümmern.",
          "tr": "Rezervasyon işini ben üstlenebilirim.",
          "en": "I can take care of the reservation.",
          "category": "Aufgaben"
        },
        {
          "phrase": "Was hältst du von einem gemeinsamen Gutschein?",
          "tr": "Ortak bir hediye çekine ne dersin?",
          "en": "What do you think about a joint gift voucher?",
          "category": "Vorschlag"
        },
        {
          "phrase": "Einverstanden! Dann haben wir alles Wesentliche geregelt.",
          "tr": "Anlaştık! Böylece gereken her şeyi kararlaştırdık.",
          "en": "Agreed! Then we have settled all essential points.",
          "category": "Vereinbarung"
        }
      ],
      "keyVocab": [
        {
          "de": "die Abschiedsfeier",
          "article": "die",
          "plural": "die Abschiedsfeiern",
          "tr": "veda kutlaması, veda partisi",
          "en": "farewell celebration"
        },
        {
          "de": "der Gutschein",
          "article": "der",
          "plural": "die Gutscheine",
          "tr": "hediye çeki, kupon",
          "en": "gift voucher"
        },
        {
          "de": "die Reservierung",
          "article": "die",
          "plural": "die Reservierungen",
          "tr": "rezervasyon",
          "en": "reservation"
        },
        {
          "de": "die Überraschung",
          "article": "die",
          "plural": "die Überraschungen",
          "tr": "sürpriz",
          "en": "surprise"
        },
        {
          "de": "das Fotobuch",
          "article": "das",
          "plural": "die Fotobücher",
          "tr": "fotoğraf albümü",
          "en": "photo album"
        }
      ]
    },
    {
      "id": "t3_wochenendausflug",
      "title": "Teil 3: Gemeinsam planen – Wochenendausflug",
      "titleTr": "Bölüm 3: Birlikte Planlama – Hafta Sonu Gezisi",
      "titleEn": "Part 3: Joint Planning – Weekend Excursion",
      "titleAr": "الجزء 3: التخطيط المشترك – رحلة عطلة نهاية الأسبوع",
      "titleUk": "Частина 3: Спільне планування – Заміська поїздка на вихідні",
      "durationMin": 5,
      "description": "Sie und Ihr Partner möchten am Wochenende einen gemeinsamen Tagesausflug machen. Planen Sie die Einzelheiten.",
      "descriptionTr": "Partnerinizle hafta sonu günübirlik geziye çıkmak istiyorsunuz. Detayları planlayın.",
      "descriptionEn": "You and your partner want to organize a joint day trip on the weekend. Plan the details.",
      "descriptionAr": "تريد أنت وشريكك القيام برحلة ليوم كامل في عطلة نهاية الأسبوع. خططا للتفاصيل سويًا.",
      "descriptionUk": "Ви з партнером хочете вирушити в спільну поїздку на вихідних. Сплануйте всі деталі.",
      "leitpunkte": [
        {
          "key": "wohin",
          "label": "Wohin? (Gidilecek Yer & Rota)",
          "labelTr": "Gezi rotası nereye olmalı?",
          "labelEn": "Destination: lake, mountains, museum, or nearby historic town",
          "labelAr": "الوجهة (بحيرة، جبال، متحف، أو مدينة تاريخية)",
          "labelUk": "Куди? Озеро, гори, музей чи старовинне місто",
          "keywords": [
            "wohin",
            "ziel",
            "see",
            "berge",
            "museum",
            "köln",
            "düsseldorf",
            "natur",
            "stadt",
            "ausflug"
          ]
        },
        {
          "key": "verkehr",
          "label": "Wie dorthin? (Ulaşım Aracı)",
          "labelTr": "Hangi araçla gidilecek?",
          "labelEn": "Transportation: train, Deutschlandticket, or car",
          "labelAr": "وسيلة النقل (القطار، تذكرة ألمانيا، أم بالسيارة)",
          "labelUk": "Чим дістатися? Поїзд, квиток Deutschlandticket чи авто",
          "keywords": [
            "zug",
            "bahn",
            "auto",
            "deutschlandticket",
            "ticket",
            "abfahrt",
            "bahnhof",
            "regionalbahn"
          ]
        },
        {
          "key": "verpflegung",
          "label": "Verpflegung & Picknick (Yiyecek & İçecek)",
          "labelTr": "Yemek ve içecekler nasıl çözülecek?",
          "labelEn": "Food, snacks, drinks, picnic or restaurant",
          "labelAr": "الطعام والشراب والنزهة في الهواء الطلق",
          "labelUk": "Харчування, перекус, пікнік чи обід у ресторані",
          "keywords": [
            "picknick",
            "essen",
            "sandwiches",
            "wasser",
            "restaurant",
            "proviant",
            "mitnehmen",
            "obst",
            "brot"
          ]
        },
        {
          "key": "programm",
          "label": "Aktivitäten & Programm (Gezilecek Yerler)",
          "labelTr": "Görülmesi gereken yerler ve aktiviteler",
          "labelEn": "Activities: sightseeing, castle tour, walk, photos",
          "labelAr": "البرنامج السياحي والأنشطة والتقاط الصور",
          "labelUk": "Програма: екскурсія, замок, прогулянка чи музей",
          "keywords": [
            "programm",
            "spaziergang",
            "schloss",
            "führung",
            "besichtigen",
            "fotos",
            "schwimmen",
            "wandern"
          ]
        },
        {
          "key": "schlechtes_wetter",
          "label": "Plan B bei schlechtem Wetter (Hava Bozulursa)",
          "labelTr": "Hava yağmurlu olursa alternatif plan",
          "labelEn": "Backup plan in case of rain: cinema, museum, thermal bath",
          "labelAr": "خطة بديلة في حال هطول الأمطار (متحف أو سينما)",
          "labelUk": "План 'Б' на випадок дощу (музей, кіно чи термальні басейни)",
          "keywords": [
            "wetter",
            "regen",
            "plan b",
            "drinnen",
            "kino",
            "therme",
            "regenschirm",
            "museum"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Modelldialog für die Prüfung:\n\nPartner A: Hallo! Das Wetter soll am Samstag richtig schön werden. Hast du Lust, dass wir einen gemeinsamen Tagesausflug machen?\n\nPartner B: Sehr gerne! Ich wollte ohnehin mal wieder raus aus der Stadt. Wohin wollen wir denn fahren? Ich schlage vor, dass wir an den Rhein nach Königswinter fahren und das Schloss Drachenburg besichtigen.\n\nPartner A: Das klingt fantastisch! Dort hat man eine herrliche Aussicht über das Rheintal. Wie kommen wir am besten dorthin? Fahren wir mit dem Auto oder mit dem Zug?\n\nPartner B: Da wir beide das Deutschlandticket haben, können wir ganz bequem die Regionalbahn nehmen. Die Fahrt dauert nur etwa 40 Minuten und wir sparen uns die Parkplatzsuche. Was meinst du, treffen wir uns um 9:30 Uhr am Hauptbahnhof?\n\nPartner A: 9:30 Uhr passt mir super. Wie machen wir das mit dem Essen? Wollen wir ein Picknick mitnehmen oder vor Ort in ein Café gehen?\n\nPartner B: Ich finde ein Picknick oben auf dem Berg viel gemütlicher! Ich kann belegte Brötchen, etwas Obst und Mineralwasser einpacken. Wenn du möchtest, kannst du eine Thermoskanne Kaffee und ein paar Kekse mitbringen.\n\nPartner A: Abgemacht, das mache ich sehr gern. Und was machen wir, falls es wider Erwarten doch regnen sollte? Haben wir einen Plan B?\n\nPartner B: Für den Fall können wir in Bonn aussteigen und das Haus der Geschichte oder das Kunstmuseum besuchen. Da sind wir im Trockenen.\n\nPartner A: Großartig! Dann treffen wir uns am Samstag um 9:30 Uhr an Gleis 3. Ich freue mich schon sehr!",
        "tr": "Sınav için model diyalog:\n\nPartner A: Merhaba! Cumartesi günü havanın çok güzel olacağı söyleniyor. Birlikte günübirlik bir geziye çıkmaya ne dersin?\n\nPartner B: Çok isterim! Ben de şehirden biraz uzaklaşmak istiyordum. Nereye gidelim? Ren nehri kıyısındaki Königswinter'e gidip Drachenburg Kalesi'ni görmeyi öneriyorum.\n\nPartner A: Kulağa harika geliyor! Oradan Ren vadisinin manzarası muhteşemdir. Nasıl gidelim? Arabayla mı trenle mi?\n\nPartner B: İkimizde de Deutschlandticket olduğuna göre bölgesel trenle çok rahat gidebiliriz. Yolculuk sadece 40 dakika sürüyor ve otopark arama derdi olmuyor. Sabah 9:30'da ana garda buluşalım mı?\n\nPartner A: 9:30 bana çok uygun. Yemek işini nasıl yapalım? Piknik mi yapalım yoksa kafeye mi oturalım?\n\nPartner B: Dağın tepesinde piknik yapmak bence çok daha keyifli! Ben sandviç, biraz meyve ve su hazırlarım. İstersen sen de bir termos kahve ve kurabiye getirebilirsin.\n\nPartner A: Anlaştık, seve seve getiririm. Peki ya beklenenin aksine yağmur yağarsa? Bir B planımız var mı?\n\nPartner B: Yağmur yağarsa Bonn'da inip Tarih Müzesi'ni (Haus der Geschichte) veya sanat galerisini gezebiliriz, böylece ıslanmayız.\n\nPartner A: Harika! O halde cumartesi sabahı 9:30'da 3 numaralı peronda buluşuyoruz. Çok heyecanlandım!",
        "en": "Exemplary test dialogue:\n\nPartner A: Hello! The weather is forecasted to be sunny on Saturday. Would you like to go on a day trip together?\n\nPartner B: I'd love to! I was hoping to get out of the city. Where should we go? I suggest heading along the Rhine to Königswinter to visit Drachenburg Castle.\n\nPartner A: That sounds fantastic! The view over the Rhine valley from up there is breathtaking. How should we travel? By car or train?\n\nPartner B: Since both of us have the Deutschlandticket, taking the regional train is very convenient. The ride takes only 40 minutes, and we avoid searching for parking. How about meeting at 9:30 AM at the central station?\n\nPartner A: 9:30 AM suits me well. How shall we arrange meals? A picnic or visiting a café?\n\nPartner B: A picnic on top of the hill is much cozier! I can prepare sandwiches, fruit, and mineral water. If you like, you could bring a thermos of hot coffee and cookies.\n\nPartner A: Done deal, I'll happily do that. And what if it rains unexpectedly? Do we have a plan B?\n\nPartner B: In that case, we can get off in Bonn and explore the House of History museum, staying warm and dry indoors.\n\nPartner A: Excellent! See you Saturday at 9:30 AM on platform 3. Looking forward to it!",
        "ar": "حوار نموذجي للاختبار:\n\nالشريك أ: مرحبًا! التوقعات الجوية تشير إلى طقس رائع يوم السبت. هل ترغب في القيام برحلة يومية مشتركة؟\n\nالشريك ب: بكل سرور! كنت أود الخروج من المدينة. إلى أين نقصد؟ أقترح الذهاب لمدينة كونيغزفينتر على نهر الراين وزيارة قلعة دراخنبورغ.\n\nالشريك أ: فكرة رائعة! المنظر من هناك يطل بشكل خلاب على الوادي. كيف نذهب؟ بالسيارة أم بالقطار؟\n\nالشريك ب: بما أن كلانا يمتلك تذكرة ألمانيا، فالقطار الإقليمي خيار مريح واقتصادي؛ الرحلة تستغرق 40 دقيقة فقط وتجنبنا عناء المواقف. ما رأيك في اللقاء بالساعة 9:30 في المحطة الرئيسية؟\n\nالشريك أ: الساعة 9:30 مناسبة تمامًا. ماذا بشأن الطعام؟ هل نقيم نزهة خلوية أم نجلس في مقهى؟\n\nالشريك ب: النزهة على الجبل أكثر متعة! يمكنني تجهيز شطائر وفواكه ومياه. وإذا أردت يمكنك إحضار ترمس قهوة وبعض البسكويت.\n\nالشريك أ: اتفقنا! سأفعل ذلك. وماذا لو فاجأنا المطر؟ هل لدينا خطة بديلة؟\n\nالشريك ب: في حال هطول المطر يمكننا النزول في بون وزيارة متحف التاريخ الوطني، فنكون في مأمن من البلل.\n\nالشريك أ: رائع! نلتقي السبت في الساعة 9:30 على الرصيف 3. أنا متحمس جدًا!",
        "uk": "Зразковий діалог для іспиту:\n\nПартнер А: Привіт! У суботу обіцяють чудову сонячну погоду. Як ти дивишся на те, щоб організувати спільну одноденну поїздку?\n\nПартнер Б: Із задоволенням! Я саме хотів вирватися з міста. Куди поїдемо? Пропоную вирушити на Рейн у Кенігсвінтер та відвідати замок Драхенбург.\n\nПартнер А: Звучить чудово! Звідти відкривається приголомшливий краєвид на долину річки. Як краще дістатися: машиною чи поїздом?\n\nПартнер Б: Оскільки ми обоє маємо Deutschlandticket, поїздка регіональним поїздом буде дуже зручною — лише 40 хвилин, і не треба шукати паркування. Давай зустрінемося о 9:30 на головному вокзалі?\n\nПартнер А: 9:30 чудово підходить. А як щодо харчування? Влаштуємо пікнік чи зайдемо в кафе?\n\nПартнер Б: Пікнік на горі значно затишніший! Я візьму бутерброди, фрукти та воду. А ти міг би взяти термос із кавою та печиво.\n\nПартнер А: Домовилися! А якщо раптом піде дощ? Який у нас запасний план?\n\nПартнер Б: Якщо піде дощ, ми зможемо вийти в Бонні та відвідати Будинок історії або музей мистецтв.\n\nПартнер А: Чудово! Тоді до зустрічі в суботу о 9:30 на третій колії. Дуже чекаю!"
      },
      "redemittel": [
        {
          "phrase": "Hast du Lust, am Wochenende einen Ausflug zu machen?",
          "tr": "Hafta sonu bir geziye çıkmak ister misin?",
          "en": "Would you like to make a trip this weekend?",
          "category": "Vorschlag"
        },
        {
          "phrase": "Ich schlage vor, dass wir mit der Regionalbahn fahren.",
          "tr": "Bölgesel trenle gitmemizi öneriyorum.",
          "en": "I suggest taking the regional train.",
          "category": "Vorschlag"
        },
        {
          "phrase": "Einverstanden, das Deutschlandticket macht das sehr günstig.",
          "tr": "Anlaştık, Deutschlandticket bunu çok hesaplı kılıyor.",
          "en": "Agreed, the Deutschlandticket makes it very affordable.",
          "category": "Zustimmung"
        },
        {
          "phrase": "Wie machen wir das mit dem Essen und der Verpflegung?",
          "tr": "Yiyecek ve erzak işini nasıl yapıyoruz?",
          "en": "How shall we handle food and provisions?",
          "category": "Planung"
        },
        {
          "phrase": "Als Plan B bei Regen können wir ein Museum besuchen.",
          "tr": "Yağmur için B planı olarak bir müzeyi ziyaret edebiliriz.",
          "en": "As plan B for rain we can visit a museum.",
          "category": "Alternative"
        }
      ],
      "keyVocab": [
        {
          "de": "der Tagesausflug",
          "article": "der",
          "plural": "die Tagesausflüge",
          "tr": "günübirlik gezi",
          "en": "day trip"
        },
        {
          "de": "die Sehenswürdigkeit",
          "article": "die",
          "plural": "die Sehenswürdigkeiten",
          "tr": "tarihi/turistik yer",
          "en": "sight / tourist attraction"
        },
        {
          "de": "die Verpflegung",
          "article": "die",
          "plural": "-",
          "tr": "kumanya, yiyecek-içecek",
          "en": "catering / provisions"
        },
        {
          "de": "der Gleis",
          "article": "der",
          "plural": "die Gleise",
          "tr": "tren peronu / rayı",
          "en": "track / platform"
        },
        {
          "de": "die Aussicht",
          "article": "die",
          "plural": "die Aussichten",
          "tr": "manzara",
          "en": "view / panorama"
        }
      ]
    },
    {
      "id": "t3_schulfest",
      "title": "Teil 3: Gemeinsam planen – Ein Schulfest / Kindergartenfest organisieren",
      "titleTr": "Bölüm 3: Birlikte Planlama – Okul / Anaokulu Şenliği Düzenleme",
      "titleEn": "Part 3: Joint Planning – Organizing a School / Kindergarten Festival",
      "titleAr": "الجزء 3: التخطيط المشترك – تنظيم حفل مدرسي أو لروضة الأطفال",
      "titleUk": "Частина 3: Спільне планування – Організація шкільного свята",
      "durationMin": 5,
      "description": "Die Schule / der Kindergarten Ihrer Kinder plant ein großes Sommerfest. Organisieren Sie die Vorbereitungen mit einem anderen Elternteil.",
      "descriptionTr": "Çocuklarınızın okulu veya anaokulu büyük bir yaz şenliği planlıyor. Başka bir veliyle birlikte hazırlıkları organize edin.",
      "descriptionEn": "Your children's school/kindergarten is organizing a summer party. Coordinate the preparations with a fellow parent.",
      "descriptionAr": "تنظم مدرسة أو روضة أطفالك احتفالاً صيفياً كبيراً. نسق التحضيرات مع ولي أمر آخر.",
      "descriptionUk": "Школа або дитячий садок ваших дітей планує літнє свято. Організуйте підготовку разом з іншим із батьків.",
      "leitpunkte": [
        {
          "key": "wann_wo",
          "label": "Wann & Wo? (Zaman ve Mekan)",
          "labelTr": "Şenlik nerede ve saat kaçta düzenlenecek?",
          "labelEn": "Time and location (schoolyard or gym)",
          "labelAr": "الموعد والمكان (فناء المدرسة أم الصالة)",
          "labelUk": "Час та місце (шкільне подвір'я чи спортивна зала)",
          "keywords": [
            "samstag",
            "nachmittag",
            "schulhof",
            "uhr",
            "wiese",
            "aula",
            "turnhalle"
          ]
        },
        {
          "key": "spiele",
          "label": "Spiele & Aktivitäten für Kinder (Oyunlar & Eğlence)",
          "labelTr": "Çocuklar için yarışmalar, yüz boyama, oyun istasyonları",
          "labelEn": "Games, face painting, sports stations for kids",
          "labelAr": "ألعاب الأطفال، الرسم على الوجوه، والمسابقات",
          "labelUk": "Ігри, аквагрим, конкурси та естафети для дітей",
          "keywords": [
            "spiele",
            "kinderschminken",
            "sackhüpfen",
            "stationen",
            "musik",
            "gewinne",
            "fußball"
          ]
        },
        {
          "key": "buffet",
          "label": "Essen & Internationales Buffet (Yiyecek & Büfe)",
          "labelTr": "Velilerden yemekler, kekler ve içecekler",
          "labelEn": "International parent buffet, cake donations, drinks",
          "labelAr": "بوفيه دولي من الأمهات والآباء والمشروبات",
          "labelUk": "Міжнародний фуршет від батьків, випічка та напої",
          "keywords": [
            "kuchen",
            "buffet",
            "eltern",
            "spenden",
            "grillen",
            "würstchen",
            "saft",
            "salat"
          ]
        },
        {
          "key": "einladung",
          "label": "Einladungen & Plakate (Duyuru & Afişler)",
          "labelTr": "Velilere mektup, afişler ve duyuru kanalları",
          "labelEn": "Parent invitations, flyers, bulletin board posters",
          "labelAr": "بطاقات الدعوة والملصقات في المدرسة",
          "labelUk": "Запрошення для батьків та яскраві плакати",
          "keywords": [
            "plakat",
            "einladung",
            "aushang",
            "brief",
            "flyer",
            "elternbeirat",
            "whatsapp"
          ]
        },
        {
          "key": "aufgaben",
          "label": "Aufgabenverteilung & Helferliste (Görev Dağılımı)",
          "labelTr": "Kim ne yapacak? Stand nöbetleri ve temizlik",
          "labelEn": "Task allocation: shifts, setup, and cleanup crew",
          "labelAr": "توزيع المهام وجدول النظافة والترتيب",
          "labelUk": "Розподіл обов'язків, чергування та прибирання",
          "keywords": [
            "aufbau",
            "abbau",
            "putzen",
            "helfer",
            "liste",
            "schicht",
            "übernehmen"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Modelldialog für die telc B1 Prüfung:\n\nPartner A: Hallo Sarah! Hast du schon gehört? Unsere Grundschule möchte nächsten Monat ein großes Sommerfest veranstalten. Die Schulleitung sucht engagierte Eltern für die Organisation. Wollen wir das gemeinsam übernehmen?\n\nPartner B: Sehr gerne! Meine Kinder freuen sich schon riesig darauf. Wann soll das Fest denn stattfinden? Ich schlage Samstag, den 15. Juni, von 14:00 bis 18:00 Uhr auf dem Schulhof vor.\n\nPartner A: Der Termin ist perfekt. Und falls es regnet, können wir problemlos in die Turnhalle ausweichen. Welche Aktivitäten bieten wir für die Kinder an?\n\nPartner B: Wir sollten unbedingt Kinderschminken und eine Spiele-Rallye mit Sackhüpfen und Dosenwerfen machen. Meine Nachbarin kann toll schminken, ich frage sie heute Abend.\n\nPartner A: Klasse! Ich kümmere mich um kleine Medaillen und Preise für die Kinder. Wie organisieren wir das Buffet? Wir könnten die Eltern bitten, landestypische Fingerfood-Spezialitäten und Kuchen mitzubringen.\n\nPartner B: Genau, ein internationales Buffet spiegelt unsere bunte Schulgemeinschaft wider! Ich erstelle eine Online-Liste, in die sich die Eltern mit ihren Gerichten eintragen können.\n\nPartner A: Super. Ich übernehme das Design der Einladungsplakate und hänge sie am Schuleingang aus. Brauchen wir noch Hilfe beim Auf- und Abbau der Tische?\n\nPartner B: Ja, wir sollten zwei Schichten einteilen: Eine Gruppe baut um 12:30 Uhr auf, und die zweite Gruppe hilft ab 18:00 Uhr beim Aufräumen.\n\nPartner A: Ausgezeichnet! Dann schreiben wir heute der Schulleitung und schicken die Helferliste herum. Das wird ein großartiges Fest!",
        "tr": "Sınav için model diyalog:\n\nPartner A: Merhaba Sarah! Duydun mu? İlkokulumuz gelecek ay büyük bir yaz şenliği düzenlemek istiyor. Okul yönetimi organizasyon için gönüllü veliler arıyor. Birlikte üstlenelim mi?\n\nPartner B: Çok sevinirim! Çocuklarım şimdiden sabırsızlanıyor. Şenlik ne zaman olsun? 15 Haziran Cumartesi günü 14:00 ile 18:00 saatleri arasında okul bahçesinde yapmayı öneriyorum.\n\nPartner A: Tarih mükemmel. Yağmur yağarsa da spor salonuna geçeriz. Çocuklar için ne gibi oyunlar hazırlayalım?\n\nPartner B: Mutlaka yüz boyama standı ve çuval yarışı ile konserve devirme gibi istasyonlar kurmalıyız. Komşum çok güzel yüz boyuyor, bu akşam ona sorarım.\n\nPartner A: Harika! Ben de çocuklar için küçük madalyalar ve hediyeler ayarlarım. Peki açık büfeyi nasıl çözeriz? Velilerden kendi kültürlerine özgü atıştırmalıklar ve kek getirmelerini rica edebiliriz.\n\nPartner B: Kesinlikle! Uluslararası bir büfe okulumuzun kültürel zenginliğini çok güzel yansıtır. Velilerin getireceği yemekleri yazabileceği bir online liste açarım.\n\nPartner A: Süper. Ben de afişleri tasarlayıp okul girişine asarım. Masaları kurmak ve toplamak için de yardıma ihtiyacımız olacak mı?\n\nPartner B: Evet, iki vardiya oluşturalım: Birinci grup saat 12:30'da masaları kurar, ikinci grup da saat 18:00'de etrafı toplar.\n\nPartner A: Kusursuz! O halde bugün okul idaresine yazıp listeyi velilere iletelim. Şahane bir şenlik olacak!",
        "en": "Exemplary test dialogue:\n\nPartner A: Hello Sarah! Have you heard? Our primary school wants to host a grand summer festival next month, and the principal is looking for parent organizers. Shall we take this on together?\n\nPartner B: Gladly! My kids are already thrilled. When should the festival happen? I suggest Saturday, June 15th, from 2:00 PM to 6:00 PM in the schoolyard.\n\nPartner A: That date is ideal. If it rains, we can relocate into the gymnasium. What activities should we prepare for the kids?\n\nPartner B: We definitely need face painting and game stations like sack races and can tossing. My neighbor is an artist at face painting; I'll ask her tonight.\n\nPartner A: Splendid! I'll secure small medals and prizes for the children. How shall we handle the food? We could ask parents to bring international finger food and cakes.\n\nPartner B: Exactly, an international buffet reflects our diverse community wonderfully! I'll set up a digital sign-up sheet for parents.\n\nPartner A: Great. I'll design the announcement posters and hang them at the school foyer. Do we need volunteers for setup and teardown?\n\nPartner B: Yes, let's create two volunteer shifts: group one sets up tables at 12:30 PM, and group two helps clean up at 6:00 PM.\n\nPartner A: Terrific! We'll notify the school office and circulate the list today. It's going to be a wonderful celebration!",
        "ar": "حوار نموذجي للاختبار:\n\nالشريك أ: مرحبًا سارة! هل سمعتِ الخبر؟ تخطط المدرسة لإقامة حفل صيفي كبير الشهر المقبل وتبحث الإدارة عن أولياء أمور للمساعدة. هل نتولى الأمر معًا؟\n\nالشريك ب: بكل سرور! أطفالي متحمسون جدًا. متى نقيم الحفل؟ أقترح يوم السبت 15 يونيو من الساعة 2:00 إلى 6:00 مساءً في فناء المدرسة.\n\nالشريك أ: الموعد رائع، وإذا أمطرت السماء يمكننا الانتقال للصالة الرياضية. ما الأنشطة التي سنقدمها للأطفال؟\n\nالشريك ب: يجب تخصيص ركن للرسم على الوجوه ومسابقات القفز بالأكياس. جارتي تجيد الرسم وسأسألها اليوم.\n\nالشريك أ: رائع! وسأتولى أنا شراء ميداليات وجوائز رمزية للأطفال. كيف ننظم البوفيه؟ يمكننا دعوة الآباء لإحضار مأكولات تقليدية وكعك من مختلف البلدان.\n\nالشريك ب: فكرة مبهجة تعكس تنوع مدرستنا! سأنشئ قائمة إلكترونية ليسجل كل ولي أمر ما سيحضره.\n\nالشريك أ: ممتاز. وسأصمم ملصقات الإعلان وأعلقها عند مدخل المدرسة. هل نحتاج لمتطوعين في الترتيب؟\n\nالشريك ب: نعم، نقسم المتطوعين لنوبتين: الأولى للترتيب عند 12:30، والثانية للتنظيف بعد السادسة مساءً.\n\nالشريك أ: مذهل! سنخاطب الإدارة اليوم. سيكون حفلاً لا يُنسى!",
        "uk": "Зразковий діалог для іспиту:\n\nПартнер А: Привіт, Сара! Ти вже чула? Наша школа планує велике літнє свято наступного місяця, і вчителі шукають активних батьків. Візьмемося за організацію разом?\n\nПартнер Б: Залюбки! Мої діти вже в захваті. Коли проведемо свято? Я пропоную суботу, 15 червня, з 14:00 до 18:00 на шкільному подвір'ї.\n\nПартнер А: Чудовий час. А в разі дощу зможемо перейти до спортивної зали. Які розваги приготуємо для дітей?\n\nПартнер Б: Обов'язково треба зробити аквагрим та веселі старти зі стрибками в мішках. Моя сусідка чудово малює на обличчі, я домовлюся з нею.\n\nПартнер А: Чудово! Я подбаю про медалі та маленькі призи. А як щодо фуршету? Можемо попросити батьків принести традиційні страви та випічку.\n\nПартнер Б: Так, міжнародний стіл покаже колорит нашої школи! Я зроблю онлайн-таблицю, щоб батьки записалися.\n\nПартнер А: Добре, а я намалюю плакати та повішу їх біля входу. Нам знадобляться помічники для розстановки столів?\n\nПартнер Б: Так, розділимо чергування: перша група розставляє столи о 12:30, а друга прибирає о 18:00.\n\nПартнер А: Ідеально! Сьогодні ж повідомимо директора. Свято буде незабутнім!"
      },
      "redemittel": [
        {
          "phrase": "Wir sollten ein internationales Buffet für die Eltern organisieren.",
          "tr": "Veliler için uluslararası bir açık büfe düzenlemeliyiz.",
          "en": "We should organize an international buffet for parents.",
          "category": "Vorschlag"
        },
        {
          "phrase": "Das ist ein hervorragender Vorschlag, ich stimme dir vollkommen zu.",
          "tr": "Bu mükemmel bir öneri, sana tamamen katılıyorum.",
          "en": "That is an excellent proposal, I completely agree with you.",
          "category": "Zustimmung"
        },
        {
          "phrase": "Ich kann mich um die Spiele und die Preise kümmern.",
          "tr": "Oyunlar ve ödüllerle ben ilgilenebilirim.",
          "en": "I can take care of the games and prizes.",
          "category": "Aufgaben"
        },
        {
          "phrase": "Für den Fall von schlechtem Wetter weichen wir in die Turnhalle aus.",
          "tr": "Kötü hava durumunda spor salonuna geçeriz.",
          "en": "In case of bad weather we relocate to the gym.",
          "category": "Alternative"
        },
        {
          "phrase": "Lass uns zwei Schichten für den Auf- und Abbau einteilen.",
          "tr": "Kurulum ve toplama için iki vardiya belirleyelim.",
          "en": "Let's organize two shifts for setup and cleanup.",
          "category": "Vereinbarung"
        }
      ],
      "keyVocab": [
        {
          "de": "das Sommerfest",
          "article": "das",
          "plural": "die Sommerfeste",
          "tr": "yaz şenliği, yaz festivali",
          "en": "summer festival"
        },
        {
          "de": "das Kinderschminken",
          "article": "das",
          "plural": "-",
          "tr": "çocuk yüz boyama etkinliği",
          "en": "face painting"
        },
        {
          "de": "der Schulhof",
          "article": "der",
          "plural": "die Schulhöfe",
          "tr": "okul bahçesi",
          "en": "schoolyard"
        },
        {
          "de": "die Turnhalle",
          "article": "die",
          "plural": "die Turnhallen",
          "tr": "spor salonu",
          "en": "gymnasium"
        },
        {
          "de": "der Helfer",
          "article": "der",
          "plural": "die Helfer",
          "tr": "gönüllü yardımcı",
          "en": "helper / volunteer"
        }
      ]
    },
    {
      "id": "t3_kranker_freund",
      "title": "Teil 3: Gemeinsam planen – Einem kranken Nachbarn / Freund helfen",
      "titleTr": "Bölüm 3: Birlikte Planlama – Hasta Bir Komşuya / Arkadaşa Yardım Etme",
      "titleEn": "Part 3: Joint Planning – Helping a Sick Neighbor / Friend",
      "titleAr": "الجزء 3: التخطيط المشترك – مساعدة جار أو صديق مريض",
      "titleUk": "Частина 3: Спільне планування – Допомога хворому сусідові чи другу",
      "durationMin": 5,
      "description": "Ein guter Freund / Nachbar hat sich das Bein gebrochen und kann seine Wohnung nicht verlassen. Planen Sie konkrete Hilfsmaßnahmen.",
      "descriptionTr": "İyi bir arkadaşınız/komşunuz bacağını kırdı ve evden çıkamıyor. Ona somut yardım adımlarını birlikte planlayın.",
      "descriptionEn": "A close friend/neighbor fractured a leg and cannot leave the flat. Coordinate practical aid together.",
      "descriptionAr": "أصيب صديقك أو جارك بكسر في ساقه ولا يستطيع مغادرة شقته. خططا لتقديم مساعدة عملية له.",
      "descriptionUk": "Близький друг або сусід зламав ногу і не може виходити з дому. Сплануйте практичну допомогу.",
      "leitpunkte": [
        {
          "key": "einkaufen",
          "label": "Einkaufen & Medikamente (Alışveriş & İlaç)",
          "labelTr": "Market alışverişi ve eczaneden ilaç temini",
          "labelEn": "Groceries, pharmacy runs, prescription collection",
          "labelAr": "شراء الأغذية وجلب الأدوية من الصيدلية",
          "labelUk": "Купівля продуктів та ліків в аптеці за рецептом",
          "keywords": [
            "einkaufen",
            "supermarkt",
            "apotheke",
            "medikamente",
            "rezept",
            "liste",
            "besorgen",
            "drogerie"
          ]
        },
        {
          "key": "haushalt",
          "label": "Haushalt & Kochen (Ev İşleri & Sıcak Yemek)",
          "labelTr": "Yemek pişirme, temizlik ve çöp atma",
          "labelEn": "Cooking fresh meals, light cleaning, taking out bins",
          "labelAr": "الطهي والتنظيف البسيط وإخراج القمامة",
          "labelUk": "Приготування гарячої їжі, легке прибирання та сміття",
          "keywords": [
            "kochen",
            "suppe",
            "essen",
            "müll",
            "putzen",
            "wäsche",
            "haushalt",
            "bringen"
          ]
        },
        {
          "key": "arzt",
          "label": "Fahrten zum Arzt (Doktor Ziyareti & Ulaşım)",
          "labelTr": "Hastaneye / doktora gidiş gelişte refakat",
          "labelEn": "Transportation and escorting to medical checks",
          "labelAr": "المرافقة إلى مواعيد الطبيب والمستشفى",
          "labelUk": "Супровід до лікаря або лікарні",
          "keywords": [
            "arzt",
            "kontrolle",
            "fahren",
            "auto",
            "begleiten",
            "termin",
            "abholen",
            "krücken"
          ]
        },
        {
          "key": "besuch",
          "label": "Gesellschaft & Aufmunterung (Ziyaret & Moral)",
          "labelTr": "Ziyaret saatleri, moral verme, kitap veya film",
          "labelEn": "Visits, cheering up, books, board games",
          "labelAr": "الزيارة والتسلية ورفع المعنويات",
          "labelUk": "Відвідини, підтримка настрою, книги та фільми",
          "keywords": [
            "besuchen",
            "zeit",
            "gesellschaft",
            "einsam",
            "langweilig",
            "buch",
            "spiel",
            "aufmuntern",
            "tee"
          ]
        },
        {
          "key": "organisation",
          "label": "Absprache & Aufgabenteilung (İş Bölümü)",
          "labelTr": "Haftalık takvim ve kimin hangi gün yardım edeceği",
          "labelEn": "Weekly schedule and coordinating with other neighbors",
          "labelAr": "جدول أسبوعي لتوزيع الأيام بين المتطوعين",
          "labelUk": "Графік чергування на тиждень",
          "keywords": [
            "tage",
            "montag",
            "mittwoch",
            "samstag",
            "plan",
            "aufteilen",
            "telefonieren",
            "gruppe"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Modelldialog für die telc B1 Prüfung:\n\nPartner A: Hallo David! Hast du mitbekommen, dass unser Nachbar Herr Müller gestürzt ist und sich das Bein gebrochen hat? Er wohnt im dritten Stock und kann die Treppe überhaupt nicht bewältigen.\n\nPartner B: Oh nein, das tut mir schrecklich leid! Herr Müller ist doch immer so hilfsbereit. Wir müssen ihn unbedingt in den nächsten Wochen unterstützen. Wie können wir ihm am besten helfen?\n\nPartner A: Als Erstes braucht er regelmäßig Lebensmittel und seine Medikamente aus der Apotheke. Ich schlage vor, dass ich montags und donnerstags nach der Arbeit für ihn einkaufe. Er kann mir einfach einen Einkaufszettel schreiben.\n\nPartner B: Das ist sehr lieb von dir. Dann übernehme ich das Kochen: Ich bereite jeden zweiten Tag eine warme Gemüsesuppe oder ein nahrhaftes Gericht zu und bringe es ihm mittags vorbei. Er kann ja im Moment kaum am Herd stehen.\n\nPartner A: Wunderbar! Außerdem muss er nächste Woche Dienstag zur Röntgenkontrolle in die orthopädische Praxis. Ich habe ein Auto und kann ihn gerne hinfahren und die Treppen hinunterbegleiten.\n\nPartner B: Perfekt! Und damit ihm zu Hause die Decke nicht auf den Kopf fällt, sollten wir ihn auch regelmäßig besuchen. Ich kann am Wochenende vorbeischauen, ein paar Zeitschriften mitbringen und eine Runde Schach mit ihm spielen.\n\nPartner A: Eine tolle Idee! So fühlt er sich nicht einsam. Lass uns eine kurze Nachricht schreiben und ihm unseren Wochenplan vorschlagen.\n\nPartner B: Einverstanden! Herr Müller wird bestimmt sehr erleichtert sein. Solidarität unter Nachbarn ist das Wichtigste!",
        "tr": "Sınav için model diyalog:\n\nPartner A: Merhaba David! Komşumuz Bay Müller'in düşüp bacağını kırdığını duydun mu? Üçüncü katta oturuyor ve merdivenleri kesinlikle inip çıkamıyor.\n\nPartner B: Çok üzüldüm! Bay Müller her zaman herkese yardım eden biridir. Önümüzdeki haftalarda ona mutlaka destek olmalıyız. Ona en iyi nasıl yardım edebiliriz?\n\nPartner A: İlk olarak market alışverişine ve eczaneden ilaçlarına ihtiyacı var. Pazartesi ve perşembe günleri iş çıkışı alışverişini ben üstlenebilirim. Bana bir ihtiyaç listesi yazması yeterli.\n\nPartner B: Çok iyi düşünmüşsün. Ben de yemek işini alayım: İki günde bir taze bir çorba veya sıcak bir yemek pişirip öğlen ona götürebilirim. Şu halde ocak başında ayakta duramaz.\n\nPartner A: Harika! Ayrıca salı günü ortopedi kliniğine röntgen kontrolüne gitmesi gerekecek. Benim arabam var, onu kliniğe götürüp merdivenlerde koluna girebilirim.\n\nPartner B: Mükemmel! Evde canı sıkılmasın diye onu sık sık ziyaret de etmeliyiz. Hafta sonu uğrayıp dergi götürebilir, onunla satranç oynayabilirim.\n\nPartner A: Çok güzel bir fikir! Böylece kendini yalnız hissetmez. Hemen bir mesaj yazıp bu haftalık yardım planımızı ona iletelim.\n\nPartner B: Anlaştık! Bay Müller çok rahatlayacaktır. Komşular arası dayanışma en güzel şeydir!",
        "en": "Exemplary test dialogue:\n\nPartner A: Hello David! Did you hear that our neighbor Mr. Müller slipped and fractured his leg? He lives on the third floor and cannot manage the stairs at all.\n\nPartner B: Oh no, that is terrible! Mr. Müller is always so helpful to everyone. We must support him over the coming weeks. How can we best assist him?\n\nPartner A: First and foremost, he needs groceries and prescription medicine from the pharmacy. I suggest that I handle his shopping on Mondays and Thursdays after work. He can simply hand me a list.\n\nPartner B: That's very kind of you. In that case, I will take care of meals: I can cook a nutritious soup or warm dish every other day and deliver it at lunchtime. Standing at the stove is impossible for him right now.\n\nPartner A: Wonderful! Additionally, he has an X-ray checkup next Tuesday at the orthopedist. I have a car and can drive him there and guide him down the staircase.\n\nPartner B: Perfect! And to prevent him from feeling isolated, we should visit regularly. I can drop by on the weekend, bring some magazines, and play a game of chess with him.\n\nPartner A: Lovely idea! That will keep his spirits high. Let's write him a note with our weekly schedule right away.\n\nPartner B: Agreed! Mr. Müller will be so relieved. Good neighborly solidarity is what truly matters!",
        "ar": "حوار نموذجي للاختبار:\n\nالشريك أ: مرحبًا ديفيد! هل علمت أن جارنا السيد مولر سقط وكسرت ساقه؟ هو يسكن في الطابق الثالث ولا يمكنه صعود أو نزول الدرج مطلقًا.\n\nالشريك ب: يا للأسف! السيد مولر دائم المساعدة للجميع. يجب أن نقف بجانبه في الأسابيع القادمة. كيف يمكننا مساعدته بأفضل شكل؟\n\nالشريك أ: يحتاج أولاً للأغذية وأدويته من الصيدلية. أقترح أن أتولى التسوق له يومي الاثنين والخميس بعد العمل بموجب قائمة يكتبها لي.\n\nالشريك ب: هذا لطف كبير منك! وأنا سأتولى أمر الطعام؛ سأطهو له حساءً دافئاً أو وجبة مغذية كل يومين وأحضرها له ظهراً، فلا يمكنه الوقوف عند الموقد حالياً.\n\nالشريك أ: رائع! ولديه فحص أشعة يوم الثلاثاء القادم، وأنا لدي سيارة ويمكنني توصيله ومساعدته في نزول الدرج.\n\nالشريك ب: ممتاز! وحتى لا يشعر بالملل والعزلة سنزوره بانتظام؛ سأمر عليه في عطلة نهاية الأسبوع لنجلب له مجلات ونلعب الشطرنج معًا.\n\nالشريك أ: فكرة رائعة لرفع معنوياته! لنكتب له جدولنا الأسبوعي ونرسله له الآن.\n\nالشريك ب: اتفقنا! سيشعر براحة كبيرة. التضامن بين الجيران هو أسمى ما يكون!",
        "uk": "Зразковий діалог для іспиту:\n\nПартнер А: Привіт, Давиде! Ти чув, що наш сусід пан Мюллер упав і зламав ногу? Він живе на четвертому поверсі і зовсім не може спускатися сходами.\n\nПартнер Б: Як шкода! Пан Мюллер завжди всім допомагає. Ми обов'язково маємо підтримати його цими тижнями. Чим ми можемо допомогти?\n\nПартнер А: Насамперед йому потрібні продукти та ліки з аптеки. Я пропоную купувати для нього все необхідне щопонеділка та щочетверга після роботи за списком.\n\nПартнер Б: Це дуже благородно! Тоді я візьму на себе гарячі обіди: через день готуватиму теплий суп або корисну страву і заноситиму в обід.\n\nПартнер А: Чудово! Крім того, у вівторок у нього огляд у лікаря. У мене є авто, я можу відвезти його та допомогти зі сходами.\n\nПартнер Б: Прекрасно! І щоб він не сумував на самоті, ми маємо провідувати його. На вихідних я можу зайти пограти з ним у шахи та принести свіжі журнали.\n\nПартнер А: Чудова ідея! Складемо графік і передамо йому сьогодні.\n\nПартнер Б: Згода! Пан Мюллер відчує полегшення. Сусідська взаємодопомога — це найголовніше!"
      },
      "redemittel": [
        {
          "phrase": "Wir sollten unserem Nachbarn in dieser Situation beistehen.",
          "tr": "Bu durumda komşumuza destek olmalıyız.",
          "en": "We should stand by our neighbor in this situation.",
          "category": "Vorschlag"
        },
        {
          "phrase": "Ich kann die Einkäufe im Supermarkt und in der Apotheke übernehmen.",
          "tr": "Market ve eczane alışverişlerini ben üstlenebilirim.",
          "en": "I can handle the supermarket and pharmacy errands.",
          "category": "Aufgaben"
        },
        {
          "phrase": "Wenn du die Einkäufe machst, koche ich das Essen.",
          "tr": "Sen alışverişi yaparsan, ben yemeği pişiririm.",
          "en": "If you do the shopping, I will cook the meals.",
          "category": "Aufgabenteilung"
        },
        {
          "phrase": "Ich fahre ihn mit dem Auto zum Arzttermin.",
          "tr": "Onu arabamla doktor randevusuna götürürüm.",
          "en": "I will drive him to his doctor's appointment.",
          "category": "Hilfe"
        },
        {
          "phrase": "Einverstanden, das entlastet ihn enorm.",
          "tr": "Anlaştık, bu onun yükünü çok hafifletir.",
          "en": "Agreed, that will relieve him immensely.",
          "category": "Vereinbarung"
        }
      ],
      "keyVocab": [
        {
          "de": "die Hilfsbereitschaft",
          "article": "die",
          "plural": "-",
          "tr": "yardımseverlik",
          "en": "helpfulness / solidarity"
        },
        {
          "de": "die Krücke",
          "article": "die",
          "plural": "die Krücken",
          "tr": "koltuk değneği",
          "en": "crutch"
        },
        {
          "de": "das Rezept",
          "article": "das",
          "plural": "die Rezepte",
          "tr": "doktor reçetesi",
          "en": "prescription"
        },
        {
          "de": "die Genesung",
          "article": "die",
          "plural": "-",
          "tr": "iyileşme, şifa bulma",
          "en": "recovery"
        },
        {
          "de": "die Nachbarschaftshilfe",
          "article": "die",
          "plural": "-",
          "tr": "komşuluk yardımlaşması",
          "en": "neighborhood assistance"
        }
      ]
    },
    {
      "id": "t3_geburtstag",
      "title": "Teil 3: Gemeinsam planen – Eine Geburtstagsüberraschung planen",
      "titleTr": "Bölüm 3: Birlikte Planlama – Ortak Doğum Günü Sürprizi",
      "titleEn": "Part 3: Joint Planning – Planning a Birthday Surprise Party",
      "titleAr": "الجزء 3: التخطيط المشترك – التخطيط لحفلة عيد ميلاد مفاجئة",
      "titleUk": "Частина 3: Спільне планування – Сюрприз на день народження",
      "durationMin": 5,
      "description": "Ein gemeinsamer Freund wird 30 Jahre alt. Planen Sie eine unvergessliche Überraschungsparty.",
      "descriptionTr": "Ortak bir arkadaşınız 30 yaşına giriyor. Unutulmaz bir sürpriz doğum günü partisi planlayın.",
      "descriptionEn": "A mutual friend turns 30. Organize an unforgettable surprise birthday celebration.",
      "descriptionAr": "يتم صديق مشترك عامه الثلاثين. خططا لحفلة عيد ميلاد مفاجئة لا تُنسى.",
      "descriptionUk": "Спільному другові виповнюється 30 років. Організуйте незабутнє свято-сюрприз.",
      "leitpunkte": [
        {
          "key": "wann_wo",
          "label": "Wann & Wo? (Zaman ve Mekan)",
          "labelTr": "Sürpriz kutlama nerede ve ne zaman?",
          "labelEn": "Date, time, and secret venue",
          "labelAr": "الموعد والمكان السري للحفلة",
          "labelUk": "Дата, час та таємне місце зустрічі",
          "keywords": [
            "samstag",
            "abend",
            "wohnung",
            "garten",
            "überraschung",
            "uhr",
            "lokal",
            "club"
          ]
        },
        {
          "key": "gaeste",
          "label": "Gästeliste & Einladungen (Davetli Listesi)",
          "labelTr": "Kimler çağrılacak ve gizlilik nasıl korunacak?",
          "labelEn": "Guest list and keeping the secret",
          "labelAr": "قائمة المدعوين والحفاظ على سرية المفاجأة",
          "labelUk": "Список гостей та збереження таємниці",
          "keywords": [
            "gäste",
            "freunde",
            "familie",
            "einladen",
            "heimlich",
            "geheim",
            "gruppe",
            "überraschen"
          ]
        },
        {
          "key": "torte",
          "label": "Geburtstagstorte & Dekoration (Pasta ve Süsleme)",
          "labelTr": "Doğum günü pastası, balonlar ve süsler",
          "labelEn": "Birthday cake, candles, balloons, decorations",
          "labelAr": "كعكة عيد الميلاد والشموع والبالونات والزينة",
          "labelUk": "Торт зі свічками, кульки та святковий декор",
          "keywords": [
            "torte",
            "kuchen",
            "kerzen",
            "ballons",
            "deko",
            "musik",
            "lichterkette"
          ]
        },
        {
          "key": "geschenk",
          "label": "Gemeinschaftsgeschenk (Ortak Büyük Hediye)",
          "labelTr": "Herkesin katıldığı ortak hediye fikri",
          "labelEn": "Joint major gift and collecting money",
          "labelAr": "هدية مشتركة مميزة وجمع التبرعات من الأصدقاء",
          "labelUk": "Спільний великий подарунок та збір коштів",
          "keywords": [
            "geschenk",
            "geld",
            "gutschein",
            "reise",
            "fahrrad",
            "sammeln",
            "karte"
          ]
        },
        {
          "key": "clou",
          "label": "Wie locken wir ihn/sie dorthin? (Sürprizin İpuçları)",
          "labelTr": "Arkadaşı mekana nasıl çaktırmadan getireceğiz?",
          "labelEn": "The excuse to lure the friend to the venue unnoticed",
          "labelAr": "الحيلة الذكية لجلب الصديق إلى المكان دون أن يشك",
          "labelUk": "Як непомітно заманити іменинника на локацію",
          "keywords": [
            "vorwand",
            "ausrede",
            "abholen",
            "ankommen",
            "überraschung",
            "licht aus"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Modelldialog für die telc B1 Prüfung:\n\nPartner A: Hallo Julia! Unser bester Freund Marco wird in zwei Wochen 30 Jahre alt. Das ist ein runder Geburtstag, den wir unbedingt mit einer großen Überraschungsparty feiern müssen! Was hältst du davon?\n\nPartner B: Das ist genial! 30 wird man schließlich nur einmal. Ich habe mit seiner Verlobten gesprochen: Wir können die Party heimlich in seinem Garten und Wohnzimmer machen. Wann passt es am besten? Ich schlage Samstagabend ab 19 Uhr vor.\n\nPartner A: Samstagabend ist perfekt. Wie bringen wir Marco dazu, um 19:30 Uhr dorthin zu kommen, ohne dass er Verdacht schöpft?\n\nPartner B: Seine Verlobte lockt ihn mit der Ausrede weg, dass sie zu zweit schick essen gehen wollen. Wenn sie zurückkommen, ist das Haus dunkel und alle Gäste rufen 'Überraschung!'\n\nPartner A: Ein genialer Plan! Ich erstelle heute eine geheime Chatgruppe mit allen Freunden und Verwandten. Ich kümmere mich auch um die Dekoration: bunte Ballons, Girlanden und eine schöne Lichterkette.\n\nPartner B: Sehr schön. Und ich bestelle eine große Geburtstagstorte bei der Konditorei. Wie machen wir das mit dem Geschenk? Marco wünscht sich doch schon lange ein neues Trekking-Fahrrad.\n\nPartner A: Großartig! Wenn jeder Gast 20 Euro in die Kasse gibt, haben wir das Geld für das Fahrrad zusammen. Ich besorge eine schöne Glückwunschkarte, auf der alle unterschreiben können.\n\nPartner B: Wunderbar! Dann ist der Plan komplett: Garten, geheime Einladungen, Torte und das Gemeinschaftsgeschenk. Marco wird Augen machen!",
        "tr": "Sınav için model diyalog:\n\nPartner A: Merhaba Julia! En yakın arkadaşımız Marco iki hafta sonra 30 yaşına giriyor. Bu çok önemli bir yaş ve mutlaka büyük bir sürpriz parti yapmalıyız! Ne dersin?\n\nPartner B: Harika bir fikir! İnsan 30 yaşına bir kez girer. Nişanlısıyla konuştum: Partiyi gizlice onun evinde ve bahçesinde yapabiliriz. Cumartesi akşamı saat 19:00'da toplamaya başlayalım.\n\nPartner A: Cumartesi akşamı çok uygun. Peki Marco'nun şüphelenmeden saat 19:30'da eve gelmesini nasıl sağlayacağız?\n\nPartner B: Nişanlısı baş başa yemeğe çıkacakları bahanesiyle onu dışarı çıkaracak. Eve döndüklerinde ışıklar kapalı olacak ve hep bir ağızdan 'Sürpriz!' diye bağıracağız.\n\nPartner A: Kusursuz plan! Ben tüm arkadaşlarla gizli bir sohbet grubu kurup davetleri yönetirim. Süslemeleri de alırım: rengarenk balonlar ve ışıklar.\n\nPartner B: Çok iyi. Ben de pastaneden büyük bir doğum günü pastası sipariş ederim. Hediye olarak ne yapalım? Marco uzun zamandır yeni bir dağ bisikleti istiyordu.\n\nPartner A: Süper! Herkes 20 Euro verirse bisiklet parasını rahatça toplarız. Herkesin imzalayacağı güzel bir tebrik kartı da alırım.\n\nPartner B: Mükemmel! Böylece planımız hazır: Mekan, davetliler, pasta ve bisiklet hediyesi. Marco sevinçten havalara uçacak!",
        "en": "Exemplary test dialogue:\n\nPartner A: Hello Julia! Our good friend Marco turns 30 in two weeks. That's a major milestone, and we simply have to celebrate it with a surprise party! What do you think?\n\nPartner B: That's brilliant! You only turn 30 once. I spoke with his fiancée: we can throw the party secretly in his house and backyard. I suggest Saturday evening from 7:00 PM onwards.\n\nPartner A: Saturday evening is spot on. How do we get Marco to arrive at 7:30 PM without getting suspicious?\n\nPartner B: His fiancée will lure him away on the pretext of going out for a fancy romantic dinner. When they return, all lights will be off and we shout 'Surprise!'\n\nPartner A: Genius! I'll set up a secret messaging group with all friends and relatives today. I'll also buy decorations: vibrant balloons and fairy lights.\n\nPartner B: Wonderful. And I will order a large personalized birthday cake from the bakery. What about the gift? Marco has been dreaming of a new trekking bicycle for ages.\n\nPartner A: Splendid! If everyone contributes 20 euros, we have enough for the bicycle. I'll get a big card for everyone to sign.\n\nPartner B: Fantastic! The plan is airtight: location, secret invites, cake, and the bicycle gift. Marco will be blown away!",
        "ar": "حوار نموذجي للاختبار:\n\nالشريك أ: مرحبًا جوليا! سيبلغ صديقنا ماركو سن الثلاثين بعد أسبوعين. إنها مناسبة خاصة ويجب أن نحتفل بها بحفلة مفاجئة! ما رأيك؟\n\nالشريك ب: فكرة رائعة! تحدثت مع خطيبته ويمكننا إقامة الحفل سراً في حديقة منزله وصالونه مساء السبت بدءًا من الساعة 7:00.\n\nالشريك أ: مساء السبت مناسب جدًا. ولكن كيف نجعل ماركو يأتي في الساعة 7:30 دون أن يشك في الأمر؟\n\nالشريك ب: ستأخذه خطيبته بحيلة عشاء رومانسي في مطعم، وعند عودتهما سيكون المنزل مظلمًا لنصرخ جميعًا: 'مفاجأة!'\n\nالشريك أ: حيلة ذكية! سأنشئ مجموعة سرية للأصدقاء اليوم، وأتولى الزينة والبالونات الملونة.\n\nالشريك ب: وأنا سأطلب كعكة مميزة من المتجر. ماذا عن الهدية؟ يتمنى ماركو منذ فترة دراجة هوائية جديدة.\n\nالشريك أ: عظيم! إذا دفع كل ضيف 20 يورو سنجمع ثمن الدراجة بسهولة مع بطاقة تهنئة يوقعها الجميع.\n\nالشريك ب: ممتاز! اكتملت الخطة: المكان، الدعوات السرية، الكعكة وهدية الدراجة. سيفرح ماركو كثيرًا!",
        "uk": "Зразковий діалог для іспиту:\n\nПартнер А: Привіт, Юліє! Нашому другові Марко за два тижні виповнюється 30 років. Це кругла дата, яку ми маємо відзначити вечіркою-сюрпризом! Як тобі ідея?\n\nПартнер Б: Чудово! 30 буває раз у житті. Я вже поговорила з його нареченою: ми можемо таємно зібратися в його будинку та саду в суботу о 19:00.\n\nПартнер А: Субота ідеально підходить. А як заманити Марка додому о 19:30, щоб він нічого не запідозрив?\n\nПартнер Б: Наречена виманить його під приводом вечері в ресторані. А коли вони повернуться, світло буде вимкнено, і всі вигукнуть: 'Сюрприз!'\n\nПартнер А: Геніальний план! Я створю таємний чат для друзів і подбаю про святкові кульки та гірлянди.\n\nПартнер Б: А я замовлю великий торт. Що подаруємо? Марко давно мріє про новий гірський велосипед.\n\nПартнер А: Прекрасно! Скинемося по 20 євро і купимо велосипед із вітальною листівкою від усіх.\n\nПартнер Б: Домовилися! Все сплановано: локація, таємні гості, торт і подарунок. Марко буде в захваті!"
      },
      "redemittel": [
        {
          "phrase": "Lass uns eine heimliche Überraschungsparty planen.",
          "tr": "Hadi gizli bir sürpriz parti planlayalım.",
          "en": "Let's plan a secret surprise party.",
          "category": "Vorschlag"
        },
        {
          "phrase": "Unter einem Vorwand locken wir ihn dorthin.",
          "tr": "Bir bahane uydurarak onu oraya çekeriz.",
          "en": "Under a pretext we will lure him there.",
          "category": "Planung"
        },
        {
          "phrase": "Wir sollten ein gemeinsames Geschenk besorgen.",
          "tr": "Ortak bir hediye ayarlamalıyız.",
          "en": "We should arrange a joint gift.",
          "category": "Geschenk"
        },
        {
          "phrase": "Ich erstelle eine geheime Chatgruppe für alle Freunde.",
          "tr": "Tüm arkadaşlar için gizli bir mesajlaşma grubu kurarım.",
          "en": "I'll create a secret group chat for all friends.",
          "category": "Aufgaben"
        },
        {
          "phrase": "Abgemacht! Das wird eine unvergessliche Feier.",
          "tr": "Anlaştık! Bu unutulmaz bir kutlama olacak.",
          "en": "Done deal! That will be an unforgettable celebration.",
          "category": "Vereinbarung"
        }
      ],
      "keyVocab": [
        {
          "de": "die Überraschungsparty",
          "article": "die",
          "plural": "die Überraschungspartys",
          "tr": "sürpriz parti",
          "en": "surprise party"
        },
        {
          "de": "die Ausrede",
          "article": "die",
          "plural": "die Ausreden",
          "tr": "bahane",
          "en": "excuse / pretext"
        },
        {
          "de": "das Gemeinschaftsgeschenk",
          "article": "das",
          "plural": "die Gemeinschaftsgeschenke",
          "tr": "ortaklaşa alınan hediye",
          "en": "joint gift"
        },
        {
          "de": "die Konditorei",
          "article": "die",
          "plural": "die Konditoreien",
          "tr": "pastane",
          "en": "pastry shop / confectionery"
        },
        {
          "de": "die Geheimhaltung",
          "article": "die",
          "plural": "-",
          "tr": "gizlilik, sır tutma",
          "en": "secrecy"
        }
      ]
    },
    {
      "id": "t3_lerntreff",
      "title": "Teil 3: Gemeinsam planen – Einen Deutsch-Lerntreff / Stammtisch gründen",
      "titleTr": "Bölüm 3: Birlikte Planlama – Almanca Konuşma & Çalışma Kulübü Kurma",
      "titleEn": "Part 3: Joint Planning – Founding a German Study & Conversation Group",
      "titleAr": "الجزء 3: التخطيط المشترك – تأسيس ملتقى لممارسة ودراسة الألمانية",
      "titleUk": "Частина 3: Спільне планування – Створення розмовного клубу німецької мови",
      "durationMin": 5,
      "description": "Sie und Ihr Partner möchten mit anderen Lernenden einen wöchentlichen Deutsch-Stammtisch gründen, um für die telc B1 Prüfung zu trainieren.",
      "descriptionTr": "Partnerinizle birlikte telc B1 sınavına hazırlanmak için diğer öğrencilerle haftalık bir konuşma/çalışma kulübü kurmak istiyorsunuz.",
      "descriptionEn": "You and your partner wish to establish a weekly German conversation meetup to practice for the telc B1 exam.",
      "descriptionAr": "تريد أنت وشريكك تأسيس ملتقى أسبوعي لممارسة اللغة الألمانية والاستعداد لامتحان telc B1.",
      "descriptionUk": "Ви з партнером хочете заснувати щотижневий розмовний клуб для підготовки до іспиту telc B1.",
      "leitpunkte": [
        {
          "key": "termin",
          "label": "Wann? (Wochentag & Rhythmus)",
          "labelTr": "Haftanın hangi günü ve saatinde toplanılacak?",
          "labelEn": "Weekday, regularity, and time slot",
          "labelAr": "اليوم الأسبوعي وساعة اللقاء المنتظم",
          "labelUk": "День тижня, регулярність та час зустрічей",
          "keywords": [
            "wann",
            "mittwoch",
            "donnerstag",
            "wöchentlich",
            "uhr",
            "abend",
            "feiertag"
          ]
        },
        {
          "key": "ort",
          "label": "Wo? (Ruhiger Treffpunkt)",
          "labelTr": "Nerede? Kütüphane, kafe veya park",
          "labelEn": "Venue: library study room, quiet café, or park",
          "labelAr": "المكان المناسب (مكتبة عامة أو مقهى هادئ)",
          "labelUk": "Місце: бібліотека, тихе кафе або парк",
          "keywords": [
            "bibliothek",
            "café",
            "raum",
            "treffpunkt",
            "park",
            "zentral",
            "ruhig"
          ]
        },
        {
          "key": "inhalte",
          "label": "Was üben? (Sprechen, Grammatik, Spiele)",
          "labelTr": "Neler çalışılacak? Konuşma pratiği, sunumlar, oyunlar",
          "labelEn": "Agenda: speaking drills, presentations, mock tests",
          "labelAr": "المحتوى التعليمي (المحادثة، القواعد، وألعاب الكلمات)",
          "labelUk": "Що тренувати: розмовну практику, граматику та ігри",
          "keywords": [
            "sprechen",
            "grammatik",
            "teil 2",
            "präsentation",
            "redemittel",
            "wortschatz",
            "spiele"
          ]
        },
        {
          "key": "regeln",
          "label": "Sprachregeln (Goldene Regel: Nur Deutsch)",
          "labelTr": "Altın kural: Yalnızca Almanca konuşulacak",
          "labelEn": "Ground rules: speak only German, polite feedback",
          "labelAr": "قواعد الجلسة (القاعدة الذهبية: التحدث بالألمانية فقط)",
          "labelUk": "Золоте правило: говорити виключно німецькою мовою",
          "keywords": [
            "regel",
            "nur deutsch",
            "muttersprache",
            "kein englisch",
            "fehler",
            "korrigieren",
            "freundlich"
          ]
        },
        {
          "key": "mitglieder",
          "label": "Mitglieder werben (Duyuru & Adaylar)",
          "labelTr": "Yeni üyeler nereden bulunacak? Kurs panosu, sosyal medya",
          "labelEn": "Recruiting participants via bulletin board or group chat",
          "labelAr": "دعوة المشاركين عبر لوحة إعلانات المعهد ومجموعات التواصل",
          "labelUk": "Залучення учасників через оголошення на курсах та в чатах",
          "keywords": [
            "zettel",
            "aushang",
            "sprachschule",
            "whatsapp",
            "kurs",
            "teilnehmer",
            "gruppe"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Modelldialog für die telc B1 Prüfung:\n\nPartner A: Hallo Alex! Im Sprachkurs haben wir leider oft zu wenig Zeit, um frei zu sprechen. Ich schlage vor, dass wir einen wöchentlichen Deutsch-Stammtisch gründen, damit wir uns optimal auf die mündliche telc B1 Prüfung vorbereiten. Was hältst du davon?\n\nPartner B: Das ist eine fantastische Idee! Genau das fehlt uns. Wann wollen wir uns treffen? Ich finde Donnerstagnachmittag ab 17:30 Uhr ideal, weil der Kurs da schon vorbei ist.\n\nPartner A: Donnerstag 17:30 Uhr passt mir sehr gut. Wo wollen wir uns zusammensetzen? In einem normalen Café ist es oft recht laut. Wie wäre es mit der Stadtbibliothek? Dort gibt es kostenlose Gruppenarbeitsräume, in denen man ungestört sprechen kann.\n\nPartner B: Perfekt! In der Bibliothek können wir auch Wörterbücher und Grammatikbücher direkt nutzen. Wie gestalten wir den Ablauf unserer Treffen?\n\nPartner A: Wir sollten jedes Mal 90 Minuten einplanen: In der ersten halben Stunde üben wir die Teil-2-Präsentationen mit Feedback, danach trainieren wir Teil-3-Planungsdialoge und Wortschatzspiele.\n\nPartner B: Ganz wichtig ist eine feste Regel: Während des gesamten Treffens sprechen wir ausnahmslos Deutsch, auch wenn wir nach Wörtern suchen müssen. Keine Muttersprache und kein Englisch!\n\nPartner A: Absolut einverstanden! Wie finden wir noch drei oder vier motivierte Mitstreiter aus anderen Kursen?\n\nPartner B: Ich hänge morgen einen Zettel ans Schwarze Brett in unserer Sprachschule und teile die Einladung in unserer Kurs-Gruppe.\n\nPartner A: Wunderbar! Dann starten wir nächsten Donnerstag um 17:30 Uhr in Raum 2 der Stadtbibliothek. Ich freue mich auf die gemeinsame Vorbereitung!",
        "tr": "Sınav için model diyalog:\n\nPartner A: Merhaba Alex! Dil kursunda maalesef serbest konuşmaya yeterince vakit bulamıyoruz. Sözlü telc B1 sınavına en iyi şekilde hazırlanmak için haftalık bir Almanca konuşma kulübü kuralım diyorum. Ne dersin?\n\nPartner B: Harika bir fikir! Tam da ihtiyacımız olan şey bu. Ne zaman buluşalım? Perşembe günleri kurs çıkışı saat 17:30 bence ideal.\n\nPartner A: Perşembe 17:30 bana çok uyar. Nerede oturalım? Normal kafeler genelde gürültülü oluyor. Şehir kütüphanesine ne dersin? Orada ücretsiz ve sessiz grup çalışma odaları var.\n\nPartner B: Mükemmel! Kütüphanede sözlük ve gramer kitaplarından da anında faydalanabiliriz. Peki toplantının akışını nasıl planlayalım?\n\nPartner A: Her buluşma için 90 dakika ayıralım: İlk yarım saatte Bölüm 2 sunumlarını yapıp birbirimize geri bildirim veririz, ardından Bölüm 3 diyalogları ve kelime oyunları oynarız.\n\nPartner B: Çok önemli bir altın kural koymalıyız: Buluşma boyunca kelime bulmakta zorlansak bile istisnasız sadece Almanca konuşulacak. Asla ana dil veya İngilizce yok!\n\nPartner A: Kesinlikle katılıyorum! Diğer sınıflardan üç dört hevesli arkadaş daha nasıl buluruz?\n\nPartner B: Yarın dil okulunun ilan panosuna bir duyuru asarım ve kurs grubumuzda paylaşırım.\n\nPartner A: Süper! O halde önümüzdeki perşembe 17:30'da kütüphanenin 2 numaralı odasında başlıyoruz. Birlikte çok iyi hazırlanacağız!",
        "en": "Exemplary test dialogue:\n\nPartner A: Hello Alex! In class we rarely get sufficient time for free conversation. I propose establishing a weekly German conversation circle to prepare thoroughly for the oral telc B1 exam. What do you think?\n\nPartner B: That's a fantastic idea! That is precisely what we need. When should we meet? I find Thursdays at 5:30 PM ideal, right after our class concludes.\n\nPartner A: Thursday at 5:30 PM works great. Where should we gather? Regular cafés are frequently noisy. What about the municipal library? They provide free group study rooms where we can speak undisturbed.\n\nPartner B: Perfect! At the library we have immediate access to dictionaries and reference books. How shall we structure the agenda?\n\nPartner A: Let's allocate 90 minutes per session: the first 30 minutes for Part 2 presentations with peer feedback, followed by Part 3 planning dialogues and vocabulary games.\n\nPartner B: One ground rule is essential: throughout the session we speak exclusively German, even when searching for words. No mother tongues and no English!\n\nPartner A: Completely agreed! How do we recruit three or four other dedicated learners from other classes?\n\nPartner B: Tomorrow I'll pin a notice on the school bulletin board and share an invite in our messaging chat.\n\nPartner A: Splendid! Let's kick off next Thursday at 5:30 PM in Study Room 2 at the library. Looking forward to our preparation!",
        "ar": "حوار نموذجي للاختبار:\n\nالشريك أ: مرحبًا أليكس! في الدورة نادرًا ما يتسع الوقت للمحادثة الحرة. أقترح إنشاء ملتقى أسبوعي لممارسة الألمانية للاستعداد لامتحان telc B1 الشفهي. ما رأيك؟\n\nالشريك ب: فكرة عبقرية! هذا ما ينقصنا تمامًا. متى نلتقي؟ أقترح يوم الخميس بعد انتهاء الدورة في الساعة 5:30 مساءً.\n\nالشريك أ: الخميس 5:30 يناسبني جدًا. أين نجلس؟ المقاهي العادية صاخبة، ما رأيك في مكتبة المدينة؟ تتوفر هناك غرف دراسة جماعية مجانية وهادئة.\n\nالشريك ب: ممتاز! وتتوفر المعاجم وكتب القواعد عند الحاجة. كيف نقسم وقت الجلسة؟\n\nالشريك أ: نخصص 90 دقيقة لكل جلسة: أول نصف ساعة لعروض الجزء الثاني مع إبداء الملاحظات، ثم حوارات التخطيط للجزء الثالث وألعاب الكلمات.\n\nالشريك ب: ويجب فرض قاعدة ذهبية صارمة: طوال الجلسة نتحدث بالألمانية فقط، دون استخدام الإنجليزية أو اللغات الأم حتى لو تعثرنا في التعبير!\n\nالشريك أ: متفق معك تمامًا! كيف نجد ثلاثة أو أربعة زملاء متحمسين للانضمام إلينا؟\n\nالشريك ب: سأعلق إعلانًا على لوحة الإعلانات في المعهد غدًا وأنشر الدعوة في مجموعة الواتساب.\n\nالشريك أ: رائع! نبدأ الخميس القادم في الساعة 5:30 في الغرفة 2 بمكتبة المدينة. أنا متفائل جدًا بنجاحنا!",
        "uk": "Зразковий діалог для іспиту:\n\nПартнер А: Привіт, Алексе! На мовних курсах нам часто бракує часу для вільного спілкування. Я пропоную заснувати щотижневий клуб німецької мови, щоб підготуватися до усної частини telc B1. Як ти дивишся на це?\n\nПартнер Б: Фантастична ідея! Це саме те, що нам потрібно. Коли зустрінемося? Четвер о 17:30 після занять підійде ідеально.\n\nПартнер А: Четвер о 17:30 мені підходить. А де збиратимемося? У звичайних кафе галасливо. Як щодо міської бібліотеки? Там є безкоштовні кімнати для групових занять.\n\nПартнер Б: Чудово! Там є словники та довідники. Який розклад зробимо?\n\nПартнер А: Виділимо 90 хвилин: перші пів години — презентації Частини 2 зі зворотним зв'язком, далі — діалоги планування Частини 3 та мовні ігри.\n\nПартнер Б: Головне — встановити залізне правило: говорити виключно німецькою мовою. Жодної рідної мови чи англійської, навіть якщо важко підібрати слова!\n\nПартнер А: Повністю згоден! Як нам знайти ще трьох-чотирьох учасників?\n\nПартнер Б: Завтра я повішу оголошення на дошці в мовній школі та напишу в наш чат.\n\nПартнер А: Прекрасно! Починаємо наступного четверга о 17:30 у кімнаті 2 бібліотеки. Буде продуктивно!"
      },
      "redemittel": [
        {
          "phrase": "Ich schlage vor, dass wir uns einmal pro Woche zum Sprechen treffen.",
          "tr": "Haftada bir kez konuşmak için buluşmamızı öneriyorum.",
          "en": "I suggest meeting once a week to speak German.",
          "category": "Vorschlag"
        },
        {
          "phrase": "Die Stadtbibliothek ist ein idealer und ruhiger Ort dafür.",
          "tr": "Şehir kütüphanesi bunun için ideal ve sessiz bir yerdir.",
          "en": "The city library is an ideal and quiet venue for this.",
          "category": "Ort"
        },
        {
          "phrase": "Unsere wichtigste Regel lautet: ausnahmslos nur Deutsch sprechen.",
          "tr": "En önemli kuralımız: istisnasız sadece Almanca konuşmak.",
          "en": "Our primary rule is: speak exclusively German without exception.",
          "category": "Regel"
        },
        {
          "phrase": "Wir können uns gegenseitig korrigieren und Feedback geben.",
          "tr": "Birbirimizi düzeltebilir ve geri bildirimde bulunabiliriz.",
          "en": "We can correct each other and provide feedback.",
          "category": "Zusammenarbeit"
        },
        {
          "phrase": "Einverstanden! Dann hänge ich morgen den Zettel aus.",
          "tr": "Anlaştık! O halde yarın duyuruyu asıyorum.",
          "en": "Agreed! Then I will post the notice tomorrow.",
          "category": "Vereinbarung"
        }
      ],
      "keyVocab": [
        {
          "de": "der Stammtisch",
          "article": "der",
          "plural": "die Stammtische",
          "tr": "müdavimler buluşması / kulübü",
          "en": "regular meetup / study circle"
        },
        {
          "de": "der Gruppenarbeitsraum",
          "article": "der",
          "plural": "die Gruppenarbeitsräume",
          "tr": "grup çalışma odası",
          "en": "group study room"
        },
        {
          "de": "die Sprachpraxis",
          "article": "die",
          "plural": "-",
          "tr": "konuşma pratiği",
          "en": "spoken language practice"
        },
        {
          "de": "das Schwarze Brett",
          "article": "das",
          "plural": "-",
          "tr": "duyuru panosu",
          "en": "bulletin board"
        },
        {
          "de": "die Hemmung",
          "article": "die",
          "plural": "die Hemmungen",
          "tr": "çekingenlik, tutukluk",
          "en": "inhibition"
        }
      ]
    }
  ],
  "freies_sprechen": [
    {
      "id": "free_general",
      "title": "Freies Sprechen & Aussprachetraining",
      "titleTr": "Serbest Konuşma ve Telaffuz Pratiği",
      "titleEn": "Free Speaking & Pronunciation Training",
      "titleAr": "التحدث الحر والتدريب على النطق السليم",
      "titleUk": "Вільне мовлення та тренування вимови",
      "durationMin": 5,
      "description": "Sprechen Sie frei über ein beliebiges Thema oder beantworten Sie spontane Fragen. Die KI analysiert Ihren Redefluss, Wortschatz und B1-Konnektoren.",
      "descriptionTr": "İstediğiniz bir konuda serbest konuşun veya spontane cevaplar verin. Sistem akıcılığınızı, kelime dağarcığınızı ve B1 bağlaçlarınızı analiz eder.",
      "descriptionEn": "Speak freely on any topic or answer spontaneous questions. The system analyzes fluency, vocabulary, and B1 connectors.",
      "descriptionAr": "تحدث بحرية حول أي موضوع أو أجب عن أسئلة عفوية. يحلل النظام الطلاقة والمفردات والروابط اللغوية.",
      "descriptionUk": "Говоріть вільно на будь-яку тему. Система аналізує плавність мовлення, словниковий запас та сполучники B1.",
      "leitpunkte": [
        {
          "key": "fluss",
          "label": "Flüssiger Redefluss & Struktur",
          "labelTr": "Akıcı konuşma ve B1 bağlaçları (weil, obwohl, deshalb)",
          "labelEn": "Fluent flow & B1 connectors",
          "labelAr": "الطلاقة واستخدام الروابط المنطقية",
          "labelUk": "Плавність мовлення та сполучники",
          "keywords": [
            "weil",
            "deshalb",
            "obwohl",
            "jedoch",
            "außerdem",
            "zudem",
            "nämlich",
            "daher",
            "trotzdem"
          ]
        },
        {
          "key": "vielfalt",
          "label": "Thematischer Wortschatz",
          "labelTr": "Geniş kelime haznesi ve zengin ifadeler",
          "labelEn": "Thematic vocabulary & expressions",
          "labelAr": "المفردات التخصصية والمتنوعة",
          "labelUk": "Тематичний словниковий запас",
          "keywords": [
            "wichtig",
            "bedeutung",
            "gesellschaft",
            "zukunft",
            "situation",
            "möglichkeit",
            "erfahrung",
            "entwicklung"
          ]
        },
        {
          "key": "haltung",
          "label": "Eigene Argumente & Beispiele",
          "labelTr": "Kendi argümanlarınız ve somut örnekler",
          "labelEn": "Personal arguments & concrete examples",
          "labelAr": "الحجج الشخصية والأمثلة الواقعية",
          "labelUk": "Власні аргументи та життєві приклади",
          "keywords": [
            "beispiel",
            "meinung",
            "erfahrung",
            "standpunkt",
            "glaube",
            "überzeugt",
            "finde",
            "ansicht"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Musterbeispiel für freies Sprechen:\n'Ich möchte heute spontan darüber sprechen, warum das lebenslange Lernen in unserer modernen Gesellschaft so wichtig ist. Meiner Meinung nach reicht eine einmalige Ausbildung heute nicht mehr aus, weil sich die Arbeitswelt durch Technologie rasant verändert. Obwohl viele Erwachsene nach Feierabend müde sind, lohnt es sich, neue Kompetenzen zu erwerben. Deshalb versuche ich jeden Tag, mindestens eine Stunde Deutsch zu üben und Fachartikel zu lesen. Zusammenfassend glaube ich, dass Neugier und kontinuierliche Weiterbildung der beste Schlüssel für eine sichere berufliche Zukunft sind.'",
        "tr": "Serbest konuşma için model örnek:\n'Bugün modern toplumumuzda hayat boyu öğrenmenin neden bu kadar önemli olduğu hakkında spontane konuşmak istiyorum. Bana göre teknolojinin iş dünyasını hızla değiştirdiği günümüzde tek bir mesleki eğitim artık yeterli değildir. Birçok yetişkin iş çıkışında yorgun olsa da yeni beceriler edinmek her zaman değerlidir. Bu yüzden her gün en az bir saat Almanca çalışmaya ve mesleki makaleler okumaya gayret ediyorum. Özetle, merak duygusu ve sürekli eğitimin güvenli bir mesleki gelecek için en önemli anahtar olduğuna inanıyorum.'",
        "en": "Exemplary response for free speaking:\n'Today I would like to speak spontaneously about why lifelong learning is so vital in modern society. In my opinion, completing an education once is no longer sufficient because technology transforms the working world rapidly. Although many adults are tired after work, acquiring new competencies is always rewarding. Therefore, I try to practice German and read trade articles for at least an hour every day. In conclusion, curiosity and continuous training are the finest keys to a secure career future.'",
        "ar": "نموذج للتحدث الحر:\n'أود اليوم أن أتحدث بعفوية عن أهمية التعلم المستمر مدى الحياة في مجتمعنا الحديث. برأيي الشخصي، لم يعد التعليم المدرسي أو الجامعي لمرة واحدة كافياً في عصر التطور التكنولوجي المتسارع. ورغم شعور البالغين بالإرهاق بعد العمل، فإن اكتساب مهارات جديدة يستحق الجهد دائمًا؛ ولذلك أحرص على ممارسة الألمانية وقراءة المقالات يوميًا. وختامًا، أرى أن الفضول المعرفي والتطوير الدائم هما أفضل ضمان لمستقبل مهني آمن.'",
        "uk": "Зразок для вільного мовлення:\n'Сьогодні я хочу спонтанно розповісти про те, чому навчання протягом усього життя є таким важливим у сучасному суспільстві. На мою думку, одноразової освіти сьогодні недостатньо, оскільки технології стрімко змінюють ринок праці. Хоча дорослі втомлюються після роботи, набуття нових навичок завжди варте зусиль. Тому я щодня намагаюся принаймні годину присвячувати німецькій мові. Підсумовуючи, допитливість і постійний розвиток є надійним ключем до впевненого професійного майбутнього.'"
      },
      "redemittel": [
        {
          "phrase": "Ich möchte spontan über das Thema ... sprechen.",
          "tr": "Spontane olarak ... konusu hakkında konuşmak istiyorum.",
          "en": "I'd like to speak spontaneously about the topic of...",
          "category": "Einleitung"
        },
        {
          "phrase": "Meiner Ansicht nach ist dieser Aspekt von zentraler Bedeutung.",
          "tr": "Bana göre bu boyut merkezi bir öneme sahiptir.",
          "en": "In my view, this aspect is of central significance.",
          "category": "Meinung"
        },
        {
          "phrase": "Obwohl es Herausforderungen gibt, sehe ich große Chancen.",
          "tr": "Zorluklar olsa da büyük fırsatlar görüyorum.",
          "en": "Although challenges exist, I see great opportunities.",
          "category": "Konnektor"
        },
        {
          "phrase": "Deshalb bin ich fest davon überzeugt, dass...",
          "tr": "Bu nedenle kesinlikle şuna inanıyorum ki...",
          "en": "Therefore, I am firmly convinced that...",
          "category": "Fazit"
        }
      ],
      "keyVocab": [
        {
          "de": "das lebenslange Lernen",
          "article": "das",
          "plural": "-",
          "tr": "hayat boyu öğrenme",
          "en": "lifelong learning"
        },
        {
          "de": "die Kompetenz",
          "article": "die",
          "plural": "die Kompetenzen",
          "tr": "yetkinlik, beceri",
          "en": "competence / skill"
        },
        {
          "de": "der Wandel",
          "article": "der",
          "plural": "-",
          "tr": "dönüşüm, değişim",
          "en": "transformation / change"
        }
      ]
    },
    {
      "id": "free_interview",
      "title": "Spontane Prüferfragen & Schlagfertigkeit",
      "titleTr": "Spontane Jüri Soruları ve Hızlı Yanıt Simülatörü",
      "titleEn": "Spontaneous Examiner Inquiries & Quick Response",
      "titleAr": "أسئلة الممتحنين المفاجئة وسرعة البديهة",
      "titleUk": "Спонтанні запитання екзаменаторів та швидкі відповіді",
      "durationMin": 4,
      "description": "Reagieren Sie spontan auf unerwartete Prüferfragen (z.B. nach Ihrer Präsentation). Trainieren Sie professionelle B1-Rückfragen und klare Stellungnahmen.",
      "descriptionTr": "Beklenmedik jüri sorularına (örneğin sunumunuzun ardından) spontane yanıtlar verin. Profesyonel geri dönüşler ve net fikir bildirme pratiği yapın.",
      "descriptionEn": "React spontaneously to unexpected examiner inquiries following your presentation. Practice polite clarifications and clear reasoning.",
      "descriptionAr": "تدرب على الرد السريع على أسئلة الممتحنين غير المتوقعة بعد العرض التقديمي بأسلوب واثق ومهذب.",
      "descriptionUk": "Тренуйтеся швидко відповідати на несподівані запитання екзаменаторів після презентації.",
      "leitpunkte": [
        {
          "key": "verstaendnis",
          "label": "Verständnis & Höfliche Rückfrage",
          "labelTr": "Soruyu anlama ve gerekirse kibarca tekrar ettirme",
          "labelEn": "Confirming question comprehension politely",
          "labelAr": "فهم السؤال وإعادة الاستيضاح بأدب",
          "labelUk": "Розуміння запитання та ввічливе уточнення",
          "keywords": [
            "verstanden",
            "wiederholen",
            "frage",
            "meinen",
            "genau",
            "interessant"
          ]
        },
        {
          "key": "begruendung",
          "label": "Klare Begründung & Gegenbeispiel",
          "labelTr": "Net gerekçelendirme ve karşı örnek verme",
          "labelEn": "Clear reasoning with counter-examples",
          "labelAr": "تقديم تعليل واضح مع أمثلة داعمة",
          "labelUk": "Чітке обґрунтування та наочні приклади",
          "keywords": [
            "weil",
            "nämlich",
            "beispielsweise",
            "grund",
            "erfahrung",
            "erklären"
          ]
        },
        {
          "key": "abschluss",
          "label": "Runder Abschluss & Bestätigung",
          "labelTr": "Toparlayıcı kapanış ve tatmin edici yanıt",
          "labelEn": "Confident concluding wrap-up",
          "labelAr": "خاتمة واثقة وموجزة تلبي السؤال",
          "labelUk": "Впевнений підсумок відповіді",
          "keywords": [
            "hoffe",
            "beantwortet",
            "fazit",
            "kurz gesagt",
            "deshalb",
            "standpunkt"
          ]
        }
      ],
      "modelAnswer": {
        "de": "Musterdialog bei einer Prüfer-Nachfrage:\n\nPrüfer: 'Sie haben in Ihrer Präsentation gesagt, dass Haustiere gut gegen Einsamkeit sind. Aber was sagen Sie dazu, dass viele Mieter wegen ihrer Hunde Streit mit dem Vermieter oder den Nachbarn bekommen?'\n\nKandidat: 'Das ist eine sehr berechtigte und interessante Frage, vielen Dank. Es stimmt natürlich, dass bellende Hunde oder Schmutz im Treppenhaus zu Konflikten führen können. Meiner Meinung nach liegt die Verantwortung jedoch beim Tierhalter: Vor dem Einzug muss man unbedingt die schriftliche Erlaubnis des Vermieters einholen und die Hausordnung strikt respektieren. Zudem sollte man mit dem Hund eine Hundeschule besuchen, damit er gut erzogen ist und nicht stundenlang bellt. Wenn man gegenseitige Rücksichtnahme lebt, lassen sich fast alle Probleme friedlich lösen. Ich hoffe, das beantwortet Ihre Frage.'",
        "tr": "Jüri ek sorusu için model yanıt:\n\nJüri: 'Sunumunuzda evcil hayvanların yalnızlığa iyi geldiğini söylediniz. Peki birçok kiracının köpekleri yüzünden ev sahibiyle veya komşularıyla tartışmasına ne diyorsunuz?'\n\nAday: 'Bu çok haklı ve ilginç bir soru, çok teşekkür ederim. Elbette havlayan köpeklerin veya merdivenlerdeki kirliliğin apartmanda anlaşmazlıklara yol açabildiği bir gerçektir. Ancak bana göre asıl sorumluluk hayvan sahibindedir: Eve taşınmadan önce mutlaka ev sahibinden yazılı izin alınmalı ve bina iç kurallarına (Hausordnung) sıkı sıkıya uyulmalıdır. Ayrıca köpeğin iyi eğitilmesi ve saatlerce havlamaması için bir köpek eğitim okuluna gidilmelidir. Karşılıklı saygı ve anlayış gösterildiğinde neredeyse tüm sorunlar barışçıl şekilde çözülebilir. Umarım bu açıklamam sorunuzu yanıtlamıştır.'",
        "en": "Exemplary response to examiner inquiry:\n\nExaminer: 'You mentioned that pets combat loneliness. But what about tenants getting into serious disputes with landlords or neighbors over dogs?'\n\nCandidate: 'That is a very pertinent and intriguing question, thank you. It is true that barking dogs or dirt in stairwells can trigger friction. In my view, however, responsibility rests squarely with the pet owner: prior to moving in, one must obtain the landlord's written consent and adhere strictly to house rules. Furthermore, one should attend dog obedience school so the animal is well-trained and does not bark incessantly. When mutual consideration is practiced, virtually all conflicts can be resolved amicably. I hope that addresses your inquiry.'",
        "ar": "نموذج للإجابة على سؤال الممتحن:\n\nالممتحن: 'ذكرت أن الحيوانات تخفف الشعور بالوحدة، ولكن ماذا عن الخلافات التي تنشأ بين المستأجرين والجيران أو صاحب البناية بسبب الكلاب؟'\n\nالمترشح: 'هذا سؤال وجيه ومهم للغاية، شكرًا لك. صحيح أن نباح الكلاب أو الأوساخ قد تسبب خلافات، لكن المسؤولية تقع بالدرجة الأولى على عاتق صاحب الحيوان؛ حيث يجب أخذ إذن خطي مسبق من المالك واحترام قواعد البناء بدقة، وإلحاق الحيوان بتدريب سلوكي حتى لا يزعج الجيران بالنباح المستمر. فعندما يسود الاحترام المتبادل، يمكن حل جميع المشكلات بود. آمل أن يكون هذا جوابًا وافيًا لسؤالكم.'",
        "uk": "Зразок відповіді на додаткове запитання екзаменатора:\n\nЕкзаменатор: 'Ви зазначили, що тварини рятують від самотності. Але що ви скажете про конфлікти орендарів із сусідами чи орендодавцем через собак?'\n\nКандидат: 'Це дуже слушне та важливе запитання, дякую. Дійсно, гавкіт собак чи бруд у під'їзді можуть провокувати конфлікти. Проте відповідальність лежить на господареві: перед заселенням необхідно отримати письмовий дозвіл власника квартири та суворо дотримуватися правил будинку. Крім того, варто пройти дресирування, щоб собака був вихованим. За взаємної поваги більшість непорозумінь легко вирішуються мирно. Сподіваюся, я відповів на ваше запитання.'"
      },
      "redemittel": [
        {
          "phrase": "Das ist eine sehr interessante und berechtigte Frage.",
          "tr": "Bu çok ilginç ve haklı bir soru.",
          "en": "That is a very interesting and justified question.",
          "category": "Reaktion"
        },
        {
          "phrase": "Dazu möchte ich folgendes anmerken...",
          "tr": "Bu hususta şunları belirtmek isterim...",
          "en": "On this point I would like to note the following...",
          "category": "Begründung"
        },
        {
          "phrase": "Einerseits stimmt das, andererseits muss man bedenken, dass...",
          "tr": "Bir yandan bu doğru, diğer yandan şunu düşünmek gerekir ki...",
          "en": "On the one hand that is true, on the other hand one must consider...",
          "category": "Gegenargument"
        },
        {
          "phrase": "Ich hoffe, ich konnte Ihre Frage damit zufriedenstellend beantworten.",
          "tr": "Umarım bu açıklamamla sorunuzu tatmin edici şekilde yanıtlayabilmişimdir.",
          "en": "I hope I was able to answer your question satisfactorily.",
          "category": "Abschluss"
        }
      ],
      "keyVocab": [
        {
          "de": "die Nachfrage",
          "article": "die",
          "plural": "die Nachfragen",
          "tr": "ek soru, açıklama talebi",
          "en": "follow-up question"
        },
        {
          "de": "die Rücksichtnahme",
          "article": "die",
          "plural": "-",
          "tr": "saygı gösterme, anlayışlı davranma",
          "en": "mutual consideration"
        },
        {
          "de": "die Stellungnahme",
          "article": "die",
          "plural": "die Stellungnahmen",
          "tr": "görüş bildirme, açıklama",
          "en": "statement / opinion"
        },
        {
          "de": "die Schlagfertigkeit",
          "article": "die",
          "plural": "-",
          "tr": "hazırcevaplık, kıvrak zeka",
          "en": "quick-wittedness"
        }
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
