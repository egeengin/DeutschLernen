/**
 * DeutschLernen - Comprehensive Multilingual Grammar Curriculum (A1–B2)
 * Covers Rules, Pro Tricks, B1/B2 Exam Traps, and Interactive Drills.
 * Localized in DE, EN, TR, AR, UK.
 */

const GRAMMAR_DATA = [
  {
    "id": "a1_artikel",
    "level": "A1",
    "icon": "🔵🔴🟢",
    "title": {
      "de": "Bestimmte & Unbestimmte Artikel",
      "en": "Definite & Indefinite Articles (der, die, das)",
      "tr": "Belirli ve Belirsiz Artikeller (der, die, das)",
      "ar": "أدوات التعريف والتنكير (der, die, das)",
      "uk": "Означені та неозначені артиклі (der, die, das)"
    },
    "desc": {
      "de": "Maskulin (der), Feminin (die) und Neutral (das) sicher erkennen.",
      "en": "Master German noun genders, articles, and useful ending signals.",
      "tr": "Almancada eril (der), dişil (die) ve nötr (das) artikeller ve son ek ipuçları.",
      "ar": "إتقان أدوات التعريف والتنكير للمذكر والمؤنث والمحايد وعلامات النهايات.",
      "uk": "Визначення чоловічого (der), жіночого (die) та середнього (das) родів."
    },
    "ruleCard": {
      "summary": {
        "de": "Im Deutschen hat jedes Nomen ein grammatikalisches Geschlecht:\n• 🔵 Maskulin (der / ein / kein)\n• 🔴 Feminin (die / eine / keine)\n• 🟢 Neutral (das / ein / kein)\n\nSignalsuffixe:\n• Feminin (die): -ung, -heit, -keit, -schaft, -tion, -tät, -ie\n• Neutral (das): -chen, -lein, -ment, -um, -tum\n• Maskulin (der): -ling, -or, -ist, -ismus, -er (meistens Personen)",
        "en": "Every German noun has a grammatical gender:\n• 🔵 Masculine (der / ein / kein)\n• 🔴 Feminine (die / eine / keine)\n• 🟢 Neuter (das / ein / kein)\n\nKey Suffix Signals:\n• Feminine (die): -ung, -heit, -keit, -schaft, -tion, -tät, -ie\n• Neuter (das): -chen, -lein, -ment, -um, -tum\n• Masculine (der): -ling, -or, -ist, -ismus, -er (mostly agents/people)",
        "tr": "Almancada her ismin bir gramatik cinsiyeti vardır:\n• 🔵 Eril / Maskulin (der / ein / kein)\n• 🔴 Dişil / Feminin (die / eine / keine)\n• 🟢 Nötr / Neutral (das / ein / kein)\n\nSon Ek İpuçları:\n• Dişil (die): -ung, -heit, -keit, -schaft, -tion, -tät, -ie ile bitenler her zaman DİŞİDİR.\n• Nötr (das): -chen, -lein, -ment, -um küçültme ve yabancı kökenli ekler her zaman NÖTRDÜR.\n• Eril (der): -ling, -or, -ist, -ismus ile bitenler her zaman ERİLDİR.",
        "ar": "لكل اسم في اللغة الألمانية جنس نحوي محدد:\n• 🔵 مذكر (der / ein / kein)\n• 🔴 مؤنث (die / eine / keine)\n• 🟢 محايد (das / ein / kein)\n\nعلامات النهايات:\n• مؤنث (die): -ung, -heit, -keit, -schaft, -tion, -tät, -ie\n• محايد (das): -chen, -lein, -ment, -um\n• مذكر (der): -ling, -or, -ist, -ismus",
        "uk": "У німецькій мові кожен іменник має граматичний рід:\n• 🔵 Чоловічий (der / ein / kein)\n• 🔴 Жіночий (die / eine / keine)\n• 🟢 Середній (das / ein / kein)\n\nЗакінчення-маркери:\n• Жіночий (die): -ung, -heit, -keit, -schaft, -tion, -tät, -ie\n• Середній (das): -chen, -lein, -ment, -um\n• Чоловічий (der): -ling, -or, -ist, -ismus"
      },
      "proTip": {
        "de": "Lerne jedes neue deutsche Wort immer zusammen mit seinem Artikel und seiner Pluralform!",
        "en": "Always learn every new German noun together with its article and plural ending!",
        "tr": "Yeni bir kelime öğrenirken ASLA sadece kelimeyi ezberlemeyin; mutlaka artikeli ve çoğuluyla öğrenin!",
        "ar": "تعلم دائماً أي اسم ألماني جديد مع أداة تعريفه وصيغة الجمع الخاصة به!",
        "uk": "Завжди вивчайте кожен новий іменник разом з артиклем та формою множини!"
      }
    },
    "examples": [
      {
        "de": "Die Wohnung ist sehr hell und ruhig.",
        "en": "The apartment is very bright and quiet.",
        "tr": "Daire çok aydınlık ve sessizdir.",
        "ar": "الشقة مضيئة وهادئة للغاية.",
        "uk": "Квартира дуже світла і тиха."
      },
      {
        "de": "Das Mädchen liest ein interessantes Buch.",
        "en": "The girl is reading an interesting book.",
        "tr": "Kız çocuğu ilginç bir kitap okuyor.",
        "ar": "الفتاة تقرأ كتاباً ممتعاً.",
        "uk": "Дівчинка читає цікаву книгу."
      },
      {
        "de": "Der Lehrer erklärt die grammatikalische Regel.",
        "en": "The teacher is explaining the grammar rule.",
        "tr": "Öğretmen dilbilgisi kuralını açıklıyor.",
        "ar": "المعلم يشرح القاعدة النحوية.",
        "uk": "Вчитель пояснює граматичне правило."
      }
    ],
    "drills": [
      {
        "id": "a1_art_1",
        "prompt": "Wo liegt ___ Zeitung von heute?",
        "options": [
          "der",
          "die",
          "das",
          "ein"
        ],
        "answer": 1,
        "explanation": {
          "de": "Nomen auf -ung (Zeitung, Wohnung, Hoffnung) sind immer FEMININ (die).",
          "en": "Nouns ending in -ung (Zeitung, Wohnung, Hoffnung) are always FEMININE (die).",
          "tr": "-ung ile biten isimler (Zeitung, Wohnung, Hoffnung) her zaman DİŞİDİR (die).",
          "ar": "الأسماء المنتهية بـ -ung (مثل Zeitung) هي دائماً مؤنثة (die).",
          "uk": "Іменники із закінченням -ung завжди жіночого роду (die)."
        }
      },
      {
        "id": "a1_art_2",
        "prompt": "Ich möchte bitte ___ Glas Wasser trinken.",
        "options": [
          "ein",
          "eine",
          "einen",
          "eines"
        ],
        "answer": 0,
        "explanation": {
          "de": "'Glas' ist NEUTRAL (das Glas). Im Akkusativ bleibt der unbestimmte Artikel 'ein'.",
          "en": "'Glas' is NEUTER (das Glas). In the accusative case, the indefinite article remains 'ein'.",
          "tr": "'Glas' kelimesi NÖTRDÜR (das Glas). Akkusativ halinde belirsiz artikel 'ein' olarak kalır.",
          "ar": "كلمة 'Glas' محايدة (das Glas). في حالة النصب (Akkusativ) تبقى أداة التنكير 'ein'.",
          "uk": "'Glas' середнього роду (das Glas). У знахідному відмінку неозначений артикль залишається 'ein'."
        }
      },
      {
        "id": "a1_art_3",
        "prompt": "___ Computer auf dem Tisch gehört meinem Bruder.",
        "options": [
          "Der",
          "Die",
          "Das",
          "Eine"
        ],
        "answer": 0,
        "explanation": {
          "de": "'Computer' ist MASKULIN (der Computer).",
          "en": "'Computer' is MASCULINE (der Computer).",
          "tr": "'Computer' ERİLDİR (der Computer).",
          "ar": "كلمة 'Computer' مذكرة في الألمانية (der Computer).",
          "uk": "Слово 'Computer' чоловічого роду (der Computer)."
        }
      },
      {
        "id": "a1_art_4",
        "prompt": "Kennst du die Telefonnummer von ___ Bäckerei?",
        "options": [
          "der",
          "die",
          "das",
          "dem"
        ],
        "answer": 0,
        "explanation": {
          "de": "Nomen auf -ei (Bäckerei) sind feminin. Nach der Präposition 'von' folgt DATIV: 'die' wird zu 'der'.",
          "en": "Nouns ending in -ei are feminine. After the preposition 'von' Dative is required: 'die' becomes 'der'.",
          "tr": "-ei ile biten isimler (Bäckerei) dişildir. 'von' edatı Dativ gerektirir; Dativ'de 'die' -> 'der' olur.",
          "ar": "الأسماء المنتهية بـ -ei مؤنثة. بعد حرف الجر 'von' نستخدم Dativ، فتتحول 'die' إلى 'der'.",
          "uk": "Іменники на -ei жіночого роду. Прийменник 'von' вимагає Dativ: 'die' переходить у 'der'."
        }
      }
    ]
  },
  {
    "id": "a1_akkusativ",
    "level": "A1",
    "icon": "🎯",
    "title": {
      "de": "Nominativ vs. Akkusativ",
      "en": "Nominative vs. Accusative Case",
      "tr": "Yalın Hal vs. -i Hali (Nominativ vs. Akkusativ)",
      "ar": "حالة الرفع وحالة النصب (Nominativ vs. Akkusativ)",
      "uk": "Називний та знахідний відмінки (Nominativ vs. Akkusativ)"
    },
    "desc": {
      "de": "Objekte im Akkusativ: Warum nur der maskuline Artikel 'den/einen' wird.",
      "en": "Direct objects: Understand why only masculine articles change to den/einen.",
      "tr": "Cümledeki nesneler: Neden yalnızca eril artikeller 'den/einen' olur?",
      "ar": "المفعول به المباشر: لماذا يتغير المذكر فقط إلى den/einen في حالة النصب.",
      "uk": "Прямий додаток: чому лише чоловічий рід змінюється на den/einen."
    },
    "ruleCard": {
      "summary": {
        "de": "Der Nominativ ist das Subjekt (Wer/Was?). Der Akkusativ ist das direkte Objekt (Wen/Was?).\n\nGOLDENE REGEL:\nIm Akkusativ ändert sich NUR der maskuline Artikel:\n• 🔵 der ➔ den / ein ➔ einen / kein ➔ keinen\n• 🔴 die ➔ die / eine ➔ eine / keine ➔ keine (bleibt gleich!)\n• 🟢 das ➔ das / ein ➔ ein / kein ➔ kein (bleibt gleich!)\n• 🟣 Plural ➔ die / keine (bleibt gleich!)",
        "en": "Nominative is the subject (Who/What?). Accusative is the direct object (Whom/What?).\n\nGOLDEN RULE:\nIn the Accusative case, ONLY the masculine article changes:\n• 🔵 der ➔ den / ein ➔ einen / kein ➔ keinen\n• 🔴 die ➔ die / eine ➔ eine (unchanged!)\n• 🟢 das ➔ das / ein ➔ ein (unchanged!)\n• 🟣 Plural ➔ die / keine (unchanged!)",
        "tr": "Nominativ özneyi belirtir (Kim/Ne?). Akkusativ ise doğrudan nesnedir (Kimi/Neyi?).\n\nALTIN KURAL:\nAkkusativ halinde YALNIZCA eril (maskulin) artikel değişir:\n• 🔵 der ➔ den / ein ➔ einen / kein ➔ keinen\n• 🔴 die ➔ die / eine ➔ eine (aynı kalır!)\n• 🟢 das ➔ das / ein ➔ ein (aynı kalır!)\n• 🟣 Çoğul ➔ die / keine (aynı kalır!)",
        "ar": "حالة الرفع Nominativ تدل على الفاعل (من؟). حالة النصب Akkusativ تدل على المفعول به المباشر (ماذا؟).\n\nالقاعدة الذهبية:\nفي حالة النصب Akkusativ، يتغير المذكر فقط:\n• 🔵 der ➔ den / ein ➔ einen\n• 🔴 المؤنث والمحايد والجمع لا يتغير!",
        "uk": "Nominativ — це підмет (Хто/Що?). Akkusativ — це прямий додаток (Кого/Що?).\n\nЗОЛОТЕ ПРАВИЛО:\nУ знахідному відмінку змінюється ТІЛЬКИ чоловічий рід:\n• 🔵 der ➔ den / ein ➔ einen\n• 🔴 Жіночий, середній та множина не змінюються!"
      },
      "proTip": {
        "de": "Häufige Verben mit Akkusativ: haben, brauchen, suchen, kaufen, essen, trinken, sehen, finden, anrufen.",
        "en": "Common verbs requiring Accusative: haben, brauchen, suchen, kaufen, essen, trinken, sehen, finden, anrufen.",
        "tr": "Akkusativ alan yaygın fiiller: haben (sahip olmak), brauchen (ihtiyacı olmak), suchen (aramak), kaufen (satın almak), finden (bulmak).",
        "ar": "أشهر الأفعال التي تطلب Akkusativ: haben, brauchen, suchen, kaufen, essen, sehen, finden.",
        "uk": "Дієслова, що вимагають Akkusativ: haben, brauchen, suchen, kaufen, essen, trinken, sehen, finden."
      }
    },
    "examples": [
      {
        "de": "Ich habe einen neuen Laptop gekauft.",
        "en": "I bought a new laptop (der Laptop -> einen Laptop).",
        "tr": "Yeni bir dizüstü bilgisayar satın aldım (der Laptop -> einen Laptop).",
        "ar": "اشتريت حاسوباً محمولاً جديداً.",
        "uk": "Я купив новий ноутбук."
      },
      {
        "de": "Brauchst du den Schlüssel?",
        "en": "Do you need the key? (der Schlüssel -> den Schlüssel).",
        "tr": "Anahtara ihtiyacın var mı? (der Schlüssel -> den Schlüssel).",
        "ar": "هل تحتاج المفتاح؟",
        "uk": "Тобі потрібен ключ?"
      }
    ],
    "drills": [
      {
        "id": "a1_akk_1",
        "prompt": "Ich habe gestern ___ interessanten Film gesehen.",
        "options": [
          "einen",
          "ein",
          "eine",
          "einem"
        ],
        "answer": 0,
        "explanation": {
          "de": "'Film' ist maskulin (der Film). Als Akkusativobjekt nach 'sehen' wird 'ein' zu 'einen'.",
          "en": "'Film' is masculine (der Film). As the accusative object of 'sehen', 'ein' becomes 'einen'.",
          "tr": "'Film' eril bir kelimedir (der Film). 'sehen' fiilinden sonra nesne olduğu için 'ein' -> 'einen' olur.",
          "ar": "كلمة 'Film' مذكرة (der Film). كمفعول به بعد الفعل 'sehen' تصبح 'einen'.",
          "uk": "'Film' чоловічого роду (der Film). Як додаток після 'sehen', 'ein' стає 'einen'."
        }
      },
      {
        "id": "a1_akk_2",
        "prompt": "Suchst du ___ Brille? Sie liegt auf dem Tisch.",
        "options": [
          "deine",
          "deinen",
          "dein",
          "deiner"
        ],
        "answer": 0,
        "explanation": {
          "de": "'Brille' ist feminin (die Brille). Im Akkusativ ändert sich das Femininum nicht: 'deine'.",
          "en": "'Brille' is feminine (die Brille). Feminine nouns do not change in the accusative: 'deine'.",
          "tr": "'Brille' dişildir (die Brille). Dişil isimler Akkusativ halinde değişmez: 'deine'.",
          "ar": "كلمة 'Brille' مؤنثة (die Brille). المؤنث لا يتغير في حالة النصب: 'deine'.",
          "uk": "'Brille' жіночого роду (die Brille). Жіночий рід у знахідному відмінку не змінюється: 'deine'."
        }
      },
      {
        "id": "a1_akk_3",
        "prompt": "Mein Vater trinkt morgens keinen Tee, sondern ___ Kaffee.",
        "options": [
          "einen",
          "ein",
          "eine",
          "einer"
        ],
        "answer": 0,
        "explanation": {
          "de": "'Kaffee' ist maskulin (der Kaffee) ➔ Akkusativ: 'einen Kaffee'.",
          "en": "'Kaffee' is masculine (der Kaffee) ➔ Accusative: 'einen Kaffee'.",
          "tr": "'Kaffee' erildir (der Kaffee) ➔ Akkusativ: 'einen Kaffee'.",
          "ar": "كلمة 'Kaffee' مذكرة (der Kaffee) ➔ في النصب: 'einen Kaffee'.",
          "uk": "'Kaffee' чоловічого роду (der Kaffee) ➔ в Akkusativ: 'einen Kaffee'."
        }
      }
    ]
  },
  {
    "id": "a1_modalverben",
    "level": "A1",
    "icon": "⚡",
    "title": {
      "de": "Modalverben im Präsens",
      "en": "Modal Verbs (können, müssen, dürfen...)",
      "tr": "Tarz Fiilleri (Modalverben)",
      "ar": "الأفعال المساعدة (Modalverben)",
      "uk": "Модальні дієслова (Modalverben)"
    },
    "desc": {
      "de": "Klammerstruktur: Modalverb an Position 2, Vollverb im Infinitiv ganz am Ende.",
      "en": "Sentence bracket: Conjugated modal at Position 2, main infinitive at the absolute end.",
      "tr": "Fiil kenedi: Çekimli modalverb 2. sırada, asıl fiil yalın halde cümlenin en sonunda!",
      "ar": "بناء الجملة: الفعل المساعد في الموقع 2، والفعل الأساسي بالمصدر في نهاية الجملة.",
      "uk": "Рамкова конструкція: модальне дієслово на 2-й позиції, інфінітив у самому кінці."
    },
    "ruleCard": {
      "summary": {
        "de": "Modalverben drücken die Haltung zum Geschehen aus:\n• können: Fähigkeit / Möglichkeit (Ich kann schwimmen)\n• müssen: Zwang / Notwendigkeit (Ich muss arbeiten)\n• dürfen: Erlaubnis (Hier darf man parken)\n• wollen / möchten: Wunsch / Absicht (Ich möchte Deutsch lernen)\n• sollen: Ratschlag / Auftrag (Du sollst zum Arzt gehen)\n\nSATZBAU (KLAMMER):\nPosition 2: Konjugiertes Modalverb\nSatzende: Reiner Infinitiv",
        "en": "Modal verbs express attitude or necessity:\n• können: ability / possibility (I can swim)\n• müssen: necessity / obligation (I must work)\n• dürfen: permission (One is allowed to park here)\n• möchten / wollen: desire / intention (I would like to learn German)\n• sollen: advice / instruction (You should see a doctor)\n\nWORD ORDER (BRACKET):\nPosition 2: Conjugated modal verb\nEnd of Clause: Main verb in bare infinitive",
        "tr": "Modal fiiller cümlenin anlam tonunu belirler:\n• können: Yapabilmek, yetenek / olasılık\n• müssen: Zorunda olmak, mecburiyet\n• dürfen: İzinli olmak, yasaklar (darf nicht = yasak)\n• wollen / möchten: İstemek / rica etmek\n• sollen: -meli/-malı, tavsiye veya başkasının talimatı\n\nCÜMLE YAPISI:\n2. Sıra: Çekimli modalverb (kann, muss, darf...)\nCümlenin En Sonu: Asıl fiil mastar (Infinitiv) halde!",
        "ar": "الأفعال المساعدة تعبر عن الإمكانية والضرورة:\n• können: القدرة والاستطاعة\n• müssen: الإلزام والضرورة\n• dürfen: السماح والإذن\n• wollen / möchten: الرغبة والإرادة\n• sollen: النصيحة أو التكليف\n\nترتيب الجملة:\nالموقع 2: الفعل المساعد المصرف\nنهاية الجملة: الفعل الأساسي بصيغة المصدر (Infinitiv)",
        "uk": "Модальні дієслова виражають можливість, необхідність або бажання:\n• können: могти, вміти\n• müssen: мусити, бути зобов'язаним\n• dürfen: мати дозвіл\n• wollen / möchten: хотіти / хотілося б\n• sollen: бути повинним (за порадою чи вказівкою)\n\nПОРЯДОК СЛІВ:\nПозиція 2: модальне дієслово\nКінець речення: основне дієслово в інфінітиві"
      },
      "proTip": {
        "de": "Besonderheit: In den Formen für 'ich' und 'er/sie/es' haben Modalverben NIEMALS eine Endung! (ich kann, er kann / ich muss, er muss).",
        "en": "Notice that 'ich' and 'er/sie/es' forms NEVER take an ending with modal verbs! (ich kann = er kann).",
        "tr": "Önemli Kural: Modal fiillerde 'ich' ve 'er/sie/es' çekimlerinde ASLA ek gelmez ve ikisi birbirine tamamen eşittir! (ich kann = er kann / ich muss = er muss).",
        "ar": "قاعدة هامة: تصريف الضمير ich وتصريف er/sie/es مع الأفعال المساعدة متطابقان تماماً وبدون أي نهاية! (ich kann = er kann).",
        "uk": "Важливе правило: форми для 'ich' та 'er/sie/es' завжди однакові та не мають закінчень! (ich kann = er kann)."
      }
    },
    "examples": [
      {
        "de": "Ich kann sehr gut Deutsch sprechen.",
        "en": "I can speak German very well.",
        "tr": "Çok iyi Almanca konuşabiliyorum.",
        "ar": "أستطيع التحدث بالألمانية جيداً جداً.",
        "uk": "Я можу дуже добре розмовляти німецькою."
      },
      {
        "de": "Hier darf man nicht rauchen.",
        "en": "Smoking is not allowed here.",
        "tr": "Burada sigara içmek yasaktır (içilemez).",
        "ar": "لا يُسمح بالتدخين هنا.",
        "uk": "Тут не можна курити."
      }
    ],
    "drills": [
      {
        "id": "a1_mod_1",
        "prompt": "Mein Arzt sagt, ich ___ mehr Wasser trinken.",
        "options": [
          "soll",
          "solle",
          "sollt",
          "sollen"
        ],
        "answer": 0,
        "explanation": {
          "de": "Subjekt 'ich' bei 'sollen' ➔ 'ich soll'. Modalverben haben in der 1. Person Singular keine Endung -e!",
          "en": "Subject 'ich' for 'sollen' ➔ 'ich soll'. Modal verbs take no ending in the 1st person singular!",
          "tr": "'ich' öznesi ile 'sollen' ➔ 'ich soll'. Modal fiillerde 1. tekil şahısta '-e' eki gelmez!",
          "ar": "مع الضمير 'ich' يكون التصريف 'ich soll'. الأفعال المساعدة لا تأخذ نهاية -e مع المتكلم المفرد.",
          "uk": "З підметом 'ich' дієслово 'sollen' має форму 'ich soll'. У модальних дієсловах 1-ша особа однини не має закінчення -e."
        }
      },
      {
        "id": "a1_mod_2",
        "prompt": "Wir müssen heute lange im Büro ___.",
        "options": [
          "arbeiten",
          "gearbeitet",
          "arbeitet",
          "arbeite"
        ],
        "answer": 0,
        "explanation": {
          "de": "Nach dem Modalverb 'müssen' steht das Vollverb am Satzende im INFINITIV: 'arbeiten'.",
          "en": "After the modal verb 'müssen', the main verb sits at the end in the INFINITIVE: 'arbeiten'.",
          "tr": "Modal fiil 'müssen' kullanıldığı için cümlenin sonundaki asıl fiil MASTAR (Infinitiv) halde kalır: 'arbeiten'.",
          "ar": "بعد الفعل المساعد 'müssen' يأتي الفعل الأساسي في نهاية الجملة بصيغة المصدر (Infinitiv): 'arbeiten'.",
          "uk": "Після модального дієслова 'müssen' основне дієслово стоїть у кінці речення в ІНФІНІТИВІ: 'arbeiten'."
        }
      }
    ]
  },
  {
    "id": "a2_dativ",
    "level": "A2",
    "icon": "🎁",
    "title": {
      "de": "Dativ-Objekte & Feste Präpositionen",
      "en": "Dative Case & Fixed Prepositions",
      "tr": "Dativ Hali (-e Hali) ve Zorunlu Edatlar",
      "ar": "حالة الجر والأسماء المجرورة (Dativ)",
      "uk": "Давальний відмінок та прийменники (Dativ)"
    },
    "desc": {
      "de": "dem, der, dem, den + -n. Präpositionen: aus, bei, mit, nach, seit, von, zu.",
      "en": "Articles change to dem, der, dem, den + -n. Fixed prepositions always requiring Dative.",
      "tr": "Artikeller: dem, der, dem, den + -(e)n. Her zaman Dativ alan edatların şifresi.",
      "ar": "تغير الأدوات إلى dem, der, dem, den + n وحروف الجر الثابتة مع Dativ.",
      "uk": "Артиклі dem, der, dem, den + n та прийменники, які завжди вимагають Dativ."
    },
    "ruleCard": {
      "summary": {
        "de": "ARTIKEL IM DATIV:\n• 🔵 Maskulin: der ➔ dem / einem / keinem\n• 🔴 Feminin: die ➔ der / einer / keiner\n• 🟢 Neutral: das ➔ dem / einem / keinem\n• 🟣 Plural: die ➔ den + Nomen bekommt '-n' (den Kindern)!\n\nFESTE DATIV-PRÄPOSITIONEN (Immer Dativ!):\naus, bei, mit, nach, seit, von, zu, gegenüber",
        "en": "ARTICLES IN THE DATIVE:\n• 🔵 Masculine: der ➔ dem / einem / keinem\n• 🔴 Feminine: die ➔ der / einer / keiner\n• 🟢 Neuter: das ➔ dem / einem / keinem\n• 🟣 Plural: die ➔ den + noun takes '-n' (den Kindern)!\n\nALWAYS DATIVE PREPOSITIONS:\naus, bei, mit, nach, seit, von, zu, gegenüber",
        "tr": "DATIV ARTİKEL DEĞİŞİMLERİ:\n• 🔵 Eril: der ➔ dem / einem\n• 🔴 Dişil: die ➔ der / einer\n• 🟢 Nötr: das ➔ dem / einem\n• 🟣 Çoğul: die ➔ den + İsmin sonuna '-n' eklenir (den Kindern)!\n\nHER ZAMAN DATIV ALAN EDATLAR:\naus (den/dan), bei (yanında/de), mit (ile), nach (sonra/e), seit (-den beri), von (-den), zu (-e doğru)",
        "ar": "أدوات التعريف في حالة Dativ:\n• 🔵 مذكر: der ➔ dem\n• 🔴 مؤنث: die ➔ der\n• 🟢 محايد: das ➔ dem\n• 🟣 جمع: die ➔ den + إضافة n لآخر الاسم!\n\nحروف جر تأخذ دائماً Dativ:\naus, bei, mit, nach, seit, von, zu",
        "uk": "АРТИКЛІ В DATIV:\n• 🔵 Чоловічий: der ➔ dem\n• 🔴 Жіночий: die ➔ der\n• 🟢 Середній: das ➔ dem\n• 🟣 Множина: die ➔ den + закінчення -n до іменника!\n\nПРИЙМЕННИКИ З DATIV:\naus, bei, mit, nach, seit, von, zu"
      },
      "proTip": {
        "de": "Eselsbrücke für Dativ-Präpositionen: 'Mit nach von zu, aus bei seit' — klingen wie ein Reim!",
        "en": "Mnemonic rhyme: 'Aus, bei, mit, nach, seit, von, zu — always take the Dative crew!'",
        "tr": "Dativ edatlarını tekerleme gibi ezberleyin: 'Aus, bei, mit, nach, seit, von, zu' gördüğün an DATIV yap!",
        "ar": "احفظ حروف الجر كأنشودة: 'aus, bei, mit, nach, seit, von, zu' دائماً وأبداً Dativ!",
        "uk": "Запам'ятайте ритм: 'aus, bei, mit, nach, seit, von, zu' — завжди тільки Dativ!"
      }
    },
    "examples": [
      {
        "de": "Ich fahre jeden Morgen mit dem Bus zur Arbeit.",
        "en": "I go to work by bus every morning (mit dem Bus / zu der Arbeit).",
        "tr": "Her sabah otobüsle işe gidiyorum (mit dem Bus / zu der -> zur Arbeit).",
        "ar": "أذهب كل صباح بالحافلة إلى العمل.",
        "uk": "Я їжджу щоранку автобусом на роботу."
      },
      {
        "de": "Er wohnt schon seit einem Monat bei seinen Eltern.",
        "en": "He has been living with his parents for a month.",
        "tr": "Bir aydır anne ve babasının yanında kalıyor.",
        "ar": "يسكن منذ شهر عند والديه.",
        "uk": "Він живе вже місяць у своїх батьків."
      }
    ],
    "drills": [
      {
        "id": "a2_dat_1",
        "prompt": "Kommst du heute Abend mit ___ Freundin ins Kino?",
        "options": [
          "deiner",
          "deine",
          "deinem",
          "deinen"
        ],
        "answer": 0,
        "explanation": {
          "de": "'mit' verlangt immer DATIV. 'Freundin' ist feminin (die ➔ der): 'mit deiner Freundin'.",
          "en": "'mit' always takes DATIVE. 'Freundin' is feminine (die ➔ der): 'mit deiner Freundin'.",
          "tr": "'mit' her zaman DATIV alır. 'Freundin' dişildir (die ➔ der): 'mit deiner Freundin'.",
          "ar": "حرف الجر 'mit' يفرض دائماً Dativ. كلمة 'Freundin' مؤنثة (تتحول die إلى der): 'mit deiner Freundin'.",
          "uk": "'mit' завжди вимагає Dativ. 'Freundin' жіночого роду (die ➔ der): 'mit deiner Freundin'."
        }
      },
      {
        "id": "a2_dat_2",
        "prompt": "Wir schenken ___ Kindern ein schönes Buch.",
        "options": [
          "den",
          "dem",
          "die",
          "der"
        ],
        "answer": 0,
        "explanation": {
          "de": "'Kindern' ist Plural im Dativ. Der Dativ-Plural-Artikel lautet 'den'.",
          "en": "'Kindern' is plural in the Dative. The dative plural article is 'den'.",
          "tr": "'Kindern' çoğul Dativ'dedir. Çoğul Dativ artikeli her zaman 'den'dir.",
          "ar": "كلمة 'Kindern' جمع في حالة Dativ. أداة الجمع في حالة Dativ هي 'den'.",
          "uk": "'Kindern' — це множина в давальному відмінку (Dativ). Артикль множини в Dativ — 'den'."
        }
      }
    ]
  },
  {
    "id": "a2_wechselpraepositionen",
    "level": "A2",
    "icon": "🧭",
    "title": {
      "de": "Wechselpräpositionen: Wo? vs. Wohin?",
      "en": "Two-Way Prepositions (Dative vs. Accusative)",
      "tr": "Çift Durumlu Edatlar: Nerede? (Dativ) vs. Nereye? (Akkusativ)",
      "ar": "حروف الجر المزدوجة: أين؟ (Dativ) أم إلى أين؟ (Akkusativ)",
      "uk": "Прийменники подвійного керування: Де? чи Куди?"
    },
    "desc": {
      "de": "an, auf, hinter, in, neben, über, unter, vor, zwischen.",
      "en": "Position (Wo? ➔ Dative) versus Direction (Wohin? ➔ Accusative).",
      "tr": "Hareketsiz konum (Nerede? ➔ Dativ) vs Yönelme/Hareket (Nereye? ➔ Akkusativ).",
      "ar": "الموقع الثابت (أين؟ ➔ Dativ) مقابل الحركة والاتجاه (إلى أين؟ ➔ Akkusativ).",
      "uk": "Нерухоме місце (Де? ➔ Dativ) проти напрямку руху (Куди? ➔ Akkusativ)."
    },
    "ruleCard": {
      "summary": {
        "de": "9 WECHSELPRÄPOSITIONEN:\nan, auf, hinter, in, neben, über, unter, vor, zwischen\n\n1. WO? (Position / Stillstand / Zustand) ➔ DATIV\n• stehen, liegen, sitzen, hängen, sein\n• Das Buch liegt AUF DEM Tisch (Dativ: dem).\n\n2. WOHIN? (Bewegung / Zielrichtung / Aktion) ➔ AKKUSATIV\n• stellen, legen, setzen, hängen, gehen\n• Ich lege das Buch AUF DEN Tisch (Akkusativ: den).",
        "en": "9 TWO-WAY PREPOSITIONS:\nan, auf, hinter, in, neben, über, unter, vor, zwischen\n\n1. WHERE? (Location / Static position) ➔ DATIVE\n• stehen (stand), liegen (lie), sitzen (sit), sein (be)\n• The book lies ON THE table (auf dem Tisch).\n\n2. WHERE TO? (Action / Movement / Destination) ➔ ACCUSATIVE\n• stellen (put upright), legen (lay down), setzen (set), gehen (go)\n• I put the book ONTO THE table (auf den Tisch).",
        "tr": "9 ÇİFT DURUMLU EDAT:\nan, auf, hinter, in, neben, über, unter, vor, zwischen\n\n1. WO? (Nerede? - Sabit Durum / Konum) ➔ DATIV\n• Fiiller: stehen (ayakta durmak), liegen (yatay durmak), sitzen (oturmak)\n• Kitap masanın ÜSTÜNDE duruyor: auf DEM Tisch.\n\n2. WOHIN? (Nereye? - Hareket / Hedefe Yönelme) ➔ AKKUSATIV\n• Fiiller: stellen (dik koymak), legen (yatay koymak), setzen (oturtmak), gehen (gitmek)\n• Kitabı masanın ÜSTÜNE koyuyorum: auf DEN Tisch.",
        "ar": "9 حروف جر مزدوجة:\nan, auf, hinter, in, neben, über, unter, vor, zwischen\n\n1. أين؟ (Wo? - حالة ثبات وموقع) ➔ Dativ\n• الكتاب موضوع على الطاولة: auf dem Tisch\n\n2. إلى أين؟ (Wohin? - حركة وتغيير موقع) ➔ Akkusativ\n• أنا أضع الكتاب على الطاولة: auf den Tisch",
        "uk": "9 ПРИЙМЕННИКІВ ПОДВІЙНОГО КЕРУВАННЯ:\nan, auf, hinter, in, neben, über, unter, vor, zwischen\n\n1. ДЕ? (Wo? - спокій, місцезнаходження) ➔ Dativ\n• Книга лежить на столі: auf dem Tisch\n\n2. КУДИ? (Wohin? - дія, рух до мети) ➔ Akkusativ\n• Я кладу книгу на стіл: auf den Tisch"
      },
      "proTip": {
        "de": "Pärchen merken: 'liegen / stehen' ist passiv (Dativ), 'legen / stellen' ist aktiv (Akkusativ)!",
        "en": "Pair memory trick: 'liegen / stehen' is static (Dative), 'legen / stellen' is an action (Accusative)!",
        "tr": "Fiil çiftlerine dikkat: 'liegen / stehen' hareketsizdir (Dativ), 'legen / stellen' bir eylemdir (Akkusativ)!",
        "ar": "تذكر أزواج الأفعال: liegen/stehen سكون (Dativ)، بينما legen/stellen حركة ونقل (Akkusativ)!",
        "uk": "Парні дієслова: 'liegen / stehen' — стан (Dativ), 'legen / stellen' — дія переміщення (Akkusativ)!"
      }
    },
    "examples": [
      {
        "de": "Er geht in den Park (Wohin? ➔ Akkusativ).",
        "en": "He goes into the park (Where to? ➔ Accusative).",
        "tr": "Parka gidiyor (Nereye? ➔ Akkusativ).",
        "ar": "هو يذهب إلى الحديقة (إلى أين؟ ➔ Akkusativ).",
        "uk": "Він іде в парк (Куди? ➔ Akkusativ)."
      },
      {
        "de": "Er joggt im Park (Wo? ➔ Dativ: im = in dem).",
        "en": "He is jogging in the park (Where? ➔ Dative).",
        "tr": "Parkta koşuyor (Nerede? ➔ Dativ).",
        "ar": "هو يركض داخل الحديقة (أين؟ ➔ Dativ).",
        "uk": "Він бігає в парку (Де? ➔ Dativ)."
      }
    ],
    "drills": [
      {
        "id": "a2_wpr_1",
        "prompt": "Ich hänge das neue Bild an ___ Wand.",
        "options": [
          "die",
          "der",
          "dem",
          "den"
        ],
        "answer": 0,
        "explanation": {
          "de": "Frage: Wohin hänge ich das Bild? ➔ Akkusativ! 'Wand' ist feminin (die Wand) ➔ bleibt 'die Wand'.",
          "en": "Question: Where to do I hang the picture? ➔ Accusative! 'Wand' is feminine (die Wand) ➔ remains 'die'.",
          "tr": "Soru: Resmi nereye asıyorum? (Wohin?) ➔ Akkusativ! 'Wand' dişildir (die Wand) ➔ 'die' olarak kalır.",
          "ar": "السؤال: إلى أين أعلق اللوحة؟ ➔ Akkusativ! كلمة 'Wand' مؤنثة ➔ تبقى 'die'.",
          "uk": "Питання: Куди я вішаю картину? ➔ Akkusativ! Слово 'Wand' жіночого роду ➔ залишається 'die'."
        }
      },
      {
        "id": "a2_wpr_2",
        "prompt": "Das Bild hängt schon seit gestern an ___ Wand.",
        "options": [
          "der",
          "die",
          "dem",
          "den"
        ],
        "answer": 0,
        "explanation": {
          "de": "Frage: Wo hängt das Bild? ➔ Dativ! Feminin im Dativ: 'die' wird zu 'der Wand'.",
          "en": "Question: Where is the picture hanging? ➔ Dative! Feminine in Dative: 'die' becomes 'der'.",
          "tr": "Soru: Resim nerede asılı duruyor? (Wo?) ➔ Dativ! Dişil isim Dativ'de 'der' olur: 'an der Wand'.",
          "ar": "السؤال: أين معلقة اللوحة؟ (حالة ثبات) ➔ Dativ! المؤنث في Dativ يتحول إلى 'der'.",
          "uk": "Питання: Де висить картина? (стан) ➔ Dativ! Жіночий рід у Dativ стає 'der Wand'."
        }
      }
    ]
  },
  {
    "id": "b1_nebensaetze",
    "level": "B1",
    "icon": "🪝",
    "title": {
      "de": "Nebensätze (weil, dass, wenn, obwohl, damit, ob)",
      "en": "Subordinate Clauses (Verb-at-the-end)",
      "tr": "Yan Cümleler (Fiil En Sonda!)",
      "ar": "الجمل الجانبية (الفعل في نهاية الجملة)",
      "uk": "Підрядні речення (Дієслово в самому кінці)"
    },
    "desc": {
      "de": "Das konjugierte Verb wandert ausnahmslos an das absolute Satzende.",
      "en": "The conjugated verb sits at the very end of the subordinate clause.",
      "tr": "telc B1 sınavının en çok test edilen konusu: Çekimli fiil cümlenin en sonuna gider!",
      "ar": "الموضوع الأكثر تكراراً في امتحانات telc B1: الفعل المصرف يذهب إلى نهاية الجملة تماماً.",
      "uk": "Найважливіша тема іспиту telc B1: дієслово завжди стоїть у кінці речення!"
    },
    "ruleCard": {
      "summary": {
        "de": "NEBENSATZ-KONJUNKTIONEN:\n• weil (Grund: weil ich krank bin)\n• dass (Inhalt: Ich hoffe, dass du kommst)\n• wenn (Bedingung/Gegenwart: Wenn es regnet...)\n• als (Einmalig in der Vergangenheit: Als ich ein Kind war...)\n• obwohl (Gegengrund: obwohl er müde ist)\n• damit (Ziel: damit ich die Prüfung bestehe)\n• ob (Indirekte Ja/Nein-Frage: Ich weiß nicht, ob er kommt)\n\nVERB-VERB-REGEL AN DER KOMMASTELLE:\nBeginnt der Satz mit dem Nebensatz, folgt nach dem Komma sofort das Verb des Hauptsatzes:\n> Weil ich krank bin, BLEIBE ich zu Hause. (bin, bleibe!)",
        "en": "SUBORDINATING CONJUNCTIONS:\n• weil (because: weil ich krank bin)\n• dass (that: Ich weiß, dass er kommt)\n• wenn (if / whenever: Wenn es regnet...)\n• als (when in the past, one-time: Als ich jung war...)\n• obwohl (although: obwohl er müde ist)\n• damit (so that / in order to: damit wir gewinnen)\n• ob (whether / if: Ich frage mich, ob er Zeit hat)\n\nVERB-AT-THE-COMMA RULE:\nWhen the subordinate clause comes first, the main clause verb follows immediately after the comma:\n> Weil ich krank bin, BLEIBE ich zu Hause.",
        "tr": "YAN CÜMLE BAĞLAÇLARI:\n• weil (çünkü: weil ich krank bin)\n• dass (-dığı, ki: Ich hoffe, dass du kommst)\n• wenn (eğer / -dığında: Wenn es regnet...)\n• als (geçmişte tek sefer: Als ich ein Kind war...)\n• obwohl (-e rağmen: obwohl er müde ist)\n• damit (-sın diye, amacıyla: damit ich bestehe)\n• ob (-ıp -madığını: Ich weiß nicht, ob er kommt)\n\nVİRGÜLDE FİİL-FİİL KURALI:\nEğer cümle yan cümle ile başlarsa, virgülden hemen sonra ana cümlenin fiili gelir:\n> Weil ich krank bin, BLEIBE ich zu Hause. (Fiil-Fiil yan yana!)",
        "ar": "أدوات الربط للجمل الجانبية (Nebensatz):\n• weil (لأن)\n• dass (أنّ)\n• wenn (إذا / عندما)\n• als (عندما - في الماضي لحدث تم مرة واحدة)\n• obwohl (على الرغم من)\n• damit (لكي / من أجل أن)\n• ob (فيما إذا)\n\nقاعدة الفعل عند الفاصلة:\nإذا بدأت الجملة بـ Nebensatz، يأتي فعل الجملة الرئيسية مباشرة بعد الفاصلة:\n> Weil ich krank bin, bleibe ich zu Hause.",
        "uk": "СПОЛУЧНИКИ ПІДРЯДНИХ РЕЧЕНЬ:\n• weil (тому що)\n• dass (що)\n• wenn (якщо / коли)\n• als (коли — одноразово в минулому)\n• obwohl (хоча)\n• damit (щоб / для того щоб)\n• ob (чи)\n\nДІЄСЛОВО БІЛЯ КОМИ:\nЯкщо речення починається з підрядного, після коми одразу йде дієслово головного речення:\n> Weil ich krank bin, bleibe ich zu Hause."
      },
      "proTip": {
        "de": "Prüfungs-Geheimnis: Wenn in einer telc Sprachbausteine-Aufgabe direkt nach dem Komma eine Lücke ist und das Verb ganz hinten steht, MUSS es ein Nebensatz-Konnektor (weil/dass/obwohl/ob) sein!",
        "en": "Exam Secret: If a blank appears right after a comma and the conjugated verb is sitting at the very end, the answer MUST be a subordinating connector!",
        "tr": "telc Sınav Hilesi: Sprachbausteine testinde virgülden hemen sonra boşluk varsa ve cümlenin en sonunda fiil duruyorsa, o boşluğa KESİNLİKLE 'weil/dass/wenn/obwohl/ob' gelmelidir!",
        "ar": "سر الامتحان: في سؤال ملء الفراغات، إذا كان الفراغ بعد الفاصلة مباشرة والفعل في آخر الجملة، فالجواب حتماً أداة ربط فرعية!",
        "uk": "Секрет іспиту: якщо пропуск стоїть одразу після коми, а дієслово в самому кінці — відповіддю ОБОВ'ЯЗКОВО є підрядний сполучник!"
      }
    },
    "examples": [
      {
        "de": "Ich lerne jeden Tag Deutsch, damit ich die B1-Prüfung bestehe.",
        "en": "I study German every day so that I pass the B1 exam.",
        "tr": "B1 sınavını geçebilmek amacıyla her gün Almanca çalışıyorum.",
        "ar": "أتعلم الألمانية كل يوم لكي أنجح في امتحان B1.",
        "uk": "Я вчу німецьку щодня, щоб скласти іспит B1."
      },
      {
        "de": "Er geht zur Arbeit, obwohl er Fieber hat.",
        "en": "He goes to work although he has a fever.",
        "tr": "Ateşi olmasına rağmen işe gidiyor.",
        "ar": "يذهب إلى العمل على الرغم من إصابته بالحمى.",
        "uk": "Він іде на роботу, хоча має температуру."
      }
    ],
    "drills": [
      {
        "id": "b1_ns_1",
        "prompt": "Liebe Frau Müller, ich schreibe Ihnen, ___ ich meinen Termin leider verschieben muss.",
        "options": [
          "weil",
          "denn",
          "deshalb",
          "trotzdem"
        ],
        "answer": 0,
        "explanation": {
          "de": "Das Verb 'muss' steht ganz am Ende ➔ Nebensatz! 'weil' leitet einen Kausal-Nebensatz ein. ('denn' steht auf Pos 0, 'deshalb' auf Pos 1).",
          "en": "The conjugated verb 'muss' is at the end ➔ Subordinate clause! 'weil' introduces a reason.",
          "tr": "Fiil 'muss' cümlenin en sonundadır ➔ Yan cümle! Bu yüzden 'weil' gelmelidir. ('denn' 0. sırada kalır, 'deshalb' ise devrik yapar).",
          "ar": "الفعل 'muss' في نهاية الجملة ➔ جملة فرعية Nebensatz! الأداة المناسبة هي 'weil'.",
          "uk": "Дієслово 'muss' стоїть у самому кінці ➔ підрядне речення! Потрібен сполучник причини 'weil'."
        }
      },
      {
        "id": "b1_ns_2",
        "prompt": "Ich bin mir noch nicht sicher, ___ der Chef morgen im Büro sein wird.",
        "options": [
          "ob",
          "dass",
          "weil",
          "obwohl"
        ],
        "answer": 0,
        "explanation": {
          "de": "Bei Unsicherheit ('nicht sicher sein / keine Ahnung haben') verwendet man im Deutschen 'ob' (ob... oder nicht).",
          "en": "When expressing uncertainty ('not sure / no idea'), German always uses 'ob' (whether).",
          "tr": "Belirsizlik bildiren durumlarda ('emin değilim, bilmiyorum') Türkçe '-ıp -madığı' karşılığı olarak 'ob' kullanılır.",
          "ar": "عند الشك وعدم اليقين نستخدم 'ob' (فيما إذا كان المدير سيحضر أم لا).",
          "uk": "При невпевненості ('не впевнений') німецькою мовою завжди вживається 'ob' (чи)."
        }
      },
      {
        "id": "b1_ns_3",
        "prompt": "___ ich 10 Jahre alt war, bin ich das erste Mal nach Deutschland gereist.",
        "options": [
          "Als",
          "Wenn",
          "Wann",
          "Da"
        ],
        "answer": 0,
        "explanation": {
          "de": "Für ein einmaliges Ereignis in der Vergangenheit verwendet man IMMER 'als'. ('wenn' ist für wiederholte oder gegenwärtige Handlungen).",
          "en": "For a single, one-time event in the past, German ALWAYS uses 'als'. ('wenn' is for repeated/present actions).",
          "tr": "Geçmişte tek sefer gerçekleşmiş bir olay veya dönem için HER ZAMAN 'als' kullanılır! ('wenn' tekrarlanan veya şimdiki olaylar içindir).",
          "ar": "للحدث الذي وقع مرة واحدة في الماضي نستخدم دائماً 'als'.",
          "uk": "Для одноразової події в минулому ЗАВЖДИ вживається 'als'."
        }
      }
    ]
  },
  {
    "id": "b1_konnektoren",
    "level": "B1",
    "icon": "⚖️",
    "title": {
      "de": "Konnektoren: Position 0 vs. Position 1",
      "en": "Connectors: ADUSO (Pos 0) vs. Inversion (Pos 1)",
      "tr": "Bağlaçlar: ADUSO (0. Pozisyon) vs. Devrik Cümle (1. Pozisyon)",
      "ar": "أدوات الربط وتأثيرها على ترتيب الكلمات (الموقع 0 والموقع 1)",
      "uk": "Сполучники: Позиція 0 проти інверсії (Позиція 1)"
    },
    "desc": {
      "de": "ADUSO (aber, denn, und, sondern, oder) verändert nichts. Deshalb & trotzdem zwingen Inversion.",
      "en": "ADUSO connectors take position 0 (no word order change). Adverbs like deshalb force verb inversion.",
      "tr": "ADUSO kelime dizilimini bozmaz (Özne + Fiil). Deshalb, trotzdem, außerdem ise fiili başa çeker!",
      "ar": "أدوات ADUSO لا تغير الترتيب. بينما deshalb و trotzdem تجبر الفعل على التقدم قبل الفاعل.",
      "uk": "ADUSO не змінюють порядок слів. Прислівники типу deshalb вимагають інверсії (Дієслово + Підмет)."
    },
    "ruleCard": {
      "summary": {
        "de": "1. POSITION 0 (ADUSO — Keine Änderung der Wortstellung!):\n• Aber (ama), Denn (çünkü), Und (ve), Sondern (bilakis/aksine), Oder (veya)\n> Er ist müde, ABER er geht zur Arbeit. (Özne + Fiil normal durur!)\n\n2. POSITION 1 (Satzadverbien — ZWINGENDE INVERSION!):\n• deshalb, deswegen, daher (bu yüzden)\n• trotzdem (buna rağmen)\n• außerdem (ayrıca)\n• dann, danach (sonra)\n> Er ist müde. DESHALB GEHT ER nicht zur Arbeit. (Deshalb + FİİL + ÖZNE!)",
        "en": "1. POSITION 0 (ADUSO — Normal word order!):\n• Aber (but), Denn (because), Und (and), Sondern (but rather), Oder (or)\n> He is tired, BUT he goes to work. (Subj + Verb unaltered!)\n\n2. POSITION 1 (Adverbs — MANDATORY INVERSION!):\n• deshalb, deswegen (therefore)\n• trotzdem (nevertheless)\n• außerdem (furthermore)\n• dann, danach (then / after that)\n> He is tired. DESHALB GEHT ER to bed. (Connector + VERB + SUBJECT!)",
        "tr": "1. POZİSYON 0 (ADUSO — Cümle sıralaması ASLA DEĞİŞMEZ!):\n• Aber (ama), Denn (çünkü), Und (ve), Sondern (bilakis/aksine), Oder (veya)\n> Er ist müde, ABER er geht zur Arbeit. (Normal Özne + Fiil dizilimi korunur!)\n\n2. POZİSYON 1 (Devrik Cümle Yapanlar — FİİL HEMEN BAĞLAÇTAN SONRA GELİR!):\n• deshalb / deswegen (bu yüzden)\n• trotzdem (buna rağmen)\n• außerdem (ayrıca)\n• dann (o zaman / sonra)\n> Er ist krank. DESHALB BLEIBT ER zu Hause. (Deshalb + FİİL + Özne!)",
        "ar": "1. الموقع 0 (قاعدة ADUSO — الترتيب الطبيعي يبقى كما هو):\n• Aber, Denn, Und, Sondern, Oder\n> Er ist müde, aber er geht zur Arbeit.\n\n2. الموقع 1 (أدوات تجبر الفعل على التقدم قبل الفاعل):\n• deshalb, trotzdem, außerdem, dann\n> Er ist müde. Deshalb geht er nach Hause.",
        "uk": "1. ПОЗИЦІЯ 0 (ADUSO — прямий порядок слів):\n• Aber, Denn, Und, Sondern, Oder\n> Er ist müde, aber er geht zur Arbeit.\n\n2. ПОЗИЦІЯ 1 (Зворотний порядок слів — Дієслово перед підметом!):\n• deshalb, trotzdem, außerdem, dann\n> Er ist krank. Deshalb bleibt er zu Hause."
      },
      "proTip": {
        "de": "Unterscheide: 'weil' schickt das Verb ans ENDE (weil er krank ist). 'denn' ändert NICHTS (denn er ist krank). 'deshalb' holt das Verb auf POS 2 (deshalb ist er krank)!",
        "en": "The Great Trio: 'weil' sends verb to the END. 'denn' changes NOTHING. 'deshalb' forces VERB NEXT!",
        "tr": "Büyük Üçlü: 'weil' fiili EN SONA atar. 'denn' sıralamayı DEĞİŞTİRMEZ. 'deshalb' ise fiili HEMEN YANINA çeker!",
        "ar": "مقارنة هامة: 'weil' ترسل الفعل للنهاية، 'denn' لا تغير الترتيب، و 'deshalb' يتبعها الفعل مباشرة!",
        "uk": "Велика трійка: 'weil' відправляє дієслово в КІНЕЦЬ, 'denn' нічого НЕ ЗМІНЮЄ, 'deshalb' ставить ДІЄСЛОВО ОДРАЗУ після себе!"
      }
    },
    "examples": [
      {
        "de": "Ich habe viel gelernt, deshalb habe ich die Prüfung bestanden.",
        "en": "I studied a lot, therefore I passed the exam.",
        "tr": "Çok çalıştım, bu yüzden sınavı geçtim.",
        "ar": "درست كثيراً، لذلك نجحت في الامتحان.",
        "uk": "Я багато вчився, тому склав іспит."
      },
      {
        "de": "Es regnet stark, trotzdem gehen wir spazieren.",
        "en": "It is raining heavily, nevertheless we are going for a walk.",
        "tr": "Şiddetli yağmur yağıyor, buna rağmen yürüyüşe çıkıyoruz.",
        "ar": "تمطر بغزارة، ومع ذلك سنذهب في نزهة.",
        "uk": "Іде сильний дощ, проте ми йдемо гуляти."
      }
    ],
    "drills": [
      {
        "id": "b1_kon_1",
        "prompt": "Ich habe heute keine Zeit, ___ ich muss noch für die Prüfung lernen.",
        "options": [
          "denn",
          "weil",
          "deshalb",
          "obwohl"
        ],
        "answer": 0,
        "explanation": {
          "de": "Nach der Lücke folgt normales 'ich muss' (Subjekt + Verb an Pos 2) ➔ ADUSO-Konnektor 'denn'!",
          "en": "Normal word order follows ('ich muss') ➔ ADUSO connector 'denn' is required!",
          "tr": "Boşluktan sonra normal 'ich muss' (Özne + Fiil) gelmiş. Cümleyi devrik yapmayan veya fiili sona atmayan 'denn' doğrudur!",
          "ar": "يأتي بعد الفراغ ترتيب طبيعي للفاعل والفعل (ich muss) ➔ الأداة الصحيحة من ADUSO هي 'denn'.",
          "uk": "Після пропуску збережено прямий порядок слів 'ich muss' ➔ підходить сполучник 'denn'."
        }
      },
      {
        "id": "b1_kon_2",
        "prompt": "Das Wetter war furchtbar schlecht. ___ hatten wir im Urlaub viel Spaß.",
        "options": [
          "Trotzdem",
          "Weil",
          "Denn",
          "Obwohl"
        ],
        "answer": 0,
        "explanation": {
          "de": "Inversion folgt sofort: 'hatten wir' (Verb + Subjekt). Der logische Kontrast verlangt 'Trotzdem'.",
          "en": "Verb inversion follows ('hatten wir'). Contrast meaning requires 'Trotzdem' (nevertheless).",
          "tr": "Hemen arkasından devrik fiil gelmiş: 'hatten wir' (Fiil + Özne). Zıtlık bildiren bağlaç 'Trotzdem'dir.",
          "ar": "الفعل تقدم على الفاعل مباشرة (hatten wir) ➔ الأداة التي تفيد التناقض وتسبب هذا الترتيب هي 'Trotzdem'.",
          "uk": "Дієслово стоїть перед підметом 'hatten wir' ➔ за змістом протиставлення підходить 'Trotzdem'."
        }
      }
    ]
  },
  {
    "id": "b1_konjunktiv2",
    "level": "B1",
    "icon": "✨",
    "title": {
      "de": "Konjunktiv II (Höflichkeit & Wünsche)",
      "en": "Subjunctive II: Polite Requests & Unreal Wishes",
      "tr": "Konjunktiv II (Kibar İstekler, Hayaller ve Dilekler)",
      "ar": "صيغة التمني والطلب المهذب (Konjunktiv II)",
      "uk": "Умовний спосіб: ввічливі прохання та бажання (Konjunktiv II)"
    },
    "desc": {
      "de": "Könnten Sie...? Würden Sie bitte...? Ich hätte gern... Wenn ich reich wäre...",
      "en": "Polite requests in German letters and speaking: könnte, würde + Infinitiv, hätte, wäre.",
      "tr": "telc B1 mektup ve konuşma sınavının vazgeçilmezi: 'könnte, würde, hätte, wäre'.",
      "ar": "الأسلوب المهذب في كتابة الرسائل والتحدث لامتحان B1: könnte, würde, hätte, wäre.",
      "uk": "Основа успіху на іспиті B1 у листуванні та розмові: könnte, würde, hätte, wäre."
    },
    "ruleCard": {
      "summary": {
        "de": "HAUPTFORMEN IM KONJUNKTIV II:\n• haben ➔ ich hätte, du hättest, er hätte, wir hätten\n• sein ➔ ich wäre, du wärst, er wäre, wir wären\n• können ➔ ich könnte, du könntest, er könnte, wir könnten\n• Alle anderen Verben ➔ WÜRDE + INFINITIV ganz am Ende!\n  (Ich würde gern eine Reise machen)\n\nANWENDUNG:\n1. Höfliche Bitte (Mektup & Telefon):\n   > Könnten Sie mir bitte helfen?\n   > Ich würde mich über eine schnelle Antwort freuen.\n2. Höfliche Bestellung / Wunsch:\n   > Ich hätte gern einen Kaffee.\n3. Irreale Bedingung:\n   > Wenn ich viel Geld hätte, würde ich ein Haus kaufen.",
        "en": "KEY KONJUNKTIV II FORMS:\n• haben ➔ ich hätte, er hätte\n• sein ➔ ich wäre, er wäre\n• können ➔ ich könnte, er könnte\n• All other verbs ➔ WÜRDE + INFINITIVE at the very end!\n  (Ich würde gern helfen)\n\nUSE CASES:\n1. Polite requests (Letters & Phone calls):\n   > Könnten Sie mir bitte helfen?\n   > Ich würde mich über eine Antwort freuen.\n2. Ordering politely:\n   > Ich hätte gern einen Kaffee.\n3. Unreal conditionals:\n   > Wenn ich Zeit hätte, käme ich vorbei.",
        "tr": "EN ÇOK KULLANILAN KONJUNKTIV II KALIPLARI:\n• haben ➔ ich hätte (sahip olsaydım / olur muydum)\n• sein ➔ ich wäre (olsaydım / olurdum)\n• können ➔ ich könnte (yapabilir miydiniz?)\n• Diğer tüm fiiller ➔ WÜRDE + Cümlenin en sonunda YALIN FİİL!\n  (Ich würde mich freuen = Sevinirdim / Çok sevinirim)\n\nKULLANIM YERLERİ:\n1. Kibar Rica (B1 Mektup ve Konuşma sınavında ŞART!):\n   > 'Könnten Sie mir bitte helfen?' (Bana yardımcı olabilir miydiniz?)\n   > 'Ich würde mich über eine Antwort freuen.' (Yanıtınıza çok sevinirim.)\n2. Sipariş verirken:\n   > 'Ich hätte gern einen Kaffee.' (Bir kahve rica edebilir miyim?)",
        "ar": "أهم صيغ Konjunktiv II:\n• haben ➔ hätte (لو كان لدي)\n• sein ➔ wäre (لو كنت)\n• können ➔ könnte (هل بإمكانك بكل لطف؟)\n• باقي الأفعال ➔ würde + مصدر الفعل في نهاية الجملة!\n\nالاستخدام:\n1. الطلب المهذب في الرسائل والمحادثة:\n   > Könnten Sie mir bitte helfen?\n   > Ich würde mich sehr freuen.\n2. الطلب في المطعم أو المقهى:\n   > Ich hätte gern einen Kaffee.",
        "uk": "ОСНОВНІ ФОРМИ KONJUNKTIV II:\n• haben ➔ hätte\n• sein ➔ wäre\n• können ➔ könnte\n• Усі інші дієслова ➔ WÜRDE + ІНФІНІТИВ у кінці речення!\n\nЗАСТОСУВАННЯ:\n1. Ввічливе прохання (обов'язково для листування B1):\n   > Könnten Sie mir bitte helfen?\n   > Ich würde mich über eine Antwort freuen.\n2. Ввічливе замовлення:\n   > Ich hätte gern einen Kaffee."
      },
      "proTip": {
        "de": "Prüfungstipp: Schreiben Sie im B1-Brief NIEMALS 'Ich will einen Termin' (zu unhöflich!), sondern IMMER 'Ich möchte / Ich hätte gern / Könnte ich einen Termin bekommen?'.",
        "en": "Exam Tip: NEVER write 'Ich will' in your B1 letter (too rude!). ALWAYS use 'Ich möchte' or 'Ich hätte gern'!",
        "tr": "Sınav Püf Noktası: telc mektubunda ASLA 'Ich will einen Termin' (Randevu istiyorum) yazmayın, çok kabadır ve puan kırar! Her zaman 'Ich hätte gern einen Termin' veya 'Könnten Sie mir einen Termin geben?' yazın!",
        "ar": "نصيحة هامة للامتحان: لا تكتب أبداً 'Ich will' في رسائل telc B1 (تعتبر فجة جداً)، بل اكتب دائماً 'Ich hätte gern' أو 'Könnten Sie'.",
        "uk": "Порада для іспиту: НІКОЛИ не пишіть 'Ich will' у листі на рівні B1 (це грубо!). Завжди пишіть 'Ich hätte gern' або 'Könnten Sie'."
      }
    },
    "examples": [
      {
        "de": "Könnten Sie mir bitte die Unterlagen per E-Mail zusenden?",
        "en": "Could you please send me the documents by email?",
        "tr": "Belgeleri bana e-posta ile gönderebilir miydiniz lütfen?",
        "ar": "هل يمكنك التكرم بإرسال المستندات عبر البريد الإلكتروني؟",
        "uk": "Чи не могли б ви надіслати мені документи електронною поштою?"
      },
      {
        "de": "Wenn ich mehr Zeit hätte, würde ich einen Deutschkurs besuchen.",
        "en": "If I had more time, I would attend a German course.",
        "tr": "Daha fazla zamanım olsaydı, bir Almanca kursuna giderdim.",
        "ar": "لو كان لدي المزيد من الوقت، لالتحقت بدورة لغة ألمانية.",
        "uk": "Якби я мав більше часу, я б відвідував курси німецької."
      }
    ],
    "drills": [
      {
        "id": "b1_k2_1",
        "prompt": "___ Sie mir bitte sagen, wann der nächste Zug nach Berlin abfährt?",
        "options": [
          "Könnten",
          "Konnten",
          "Können",
          "Kann"
        ],
        "answer": 0,
        "explanation": {
          "de": "'Könnten' ist die höfliche Form (Konjunktiv II). 'Konnten' (ohne Umlaut) ist Vergangenheit (Präteritum).",
          "en": "'Könnten' (with umlaut) is the polite Subjunctive II. 'Konnten' is past tense.",
          "tr": "Noktalı 'Könnten' kibar rica halidir (Konjunktiv II). Noktasız 'Konnten' geçmiş zamandır (dün yapabildiniz mi?).",
          "ar": "صيغة 'Könnten' (مع أوملاوت) هي صيغة الأدب واللباقة. بينما 'Konnten' بدون أوملاوت هي ماضي بسيط.",
          "uk": "'Könnten' з умлаутом — це ввічлива форма (Konjunktiv II). 'Konnten' без умлаута — це минулий час."
        }
      },
      {
        "id": "b1_k2_2",
        "prompt": "Ich ___ mich sehr freuen, wenn Sie mir bald antworten.",
        "options": [
          "würde",
          "werde",
          "wurde",
          "worden"
        ],
        "answer": 0,
        "explanation": {
          "de": "Höfliche Floskel im B1-Brief: 'Ich würde mich sehr freuen' (Konjunktiv II mit würde + Infinitiv).",
          "en": "Standard polite letter formula: 'Ich würde mich sehr freuen' (Subjunctive II).",
          "tr": "B1 mektuplarının altın kapanış cümlesi: 'Ich würde mich sehr freuen' (Konjunktiv II).",
          "ar": "العبارة الذهبية في ختام رسائل B1 المهذبة: 'Ich würde mich sehr freuen'.",
          "uk": "Класична ввічлива фраза для закінчення листа B1: 'Ich würde mich sehr freuen'."
        }
      }
    ]
  },
  {
    "id": "b1_passiv",
    "level": "B1",
    "icon": "🏗️",
    "title": {
      "de": "Passiv (Präsens & Präteritum)",
      "en": "Passive Voice (werden / wurde + Partizip II)",
      "tr": "Edilgen Çatı (Passiv: werden/wurde + Partizip II)",
      "ar": "المبني للمجهول (Passiv)",
      "uk": "Пасивний стан (Passiv)"
    },
    "desc": {
      "de": "Die Handlung steht im Fokus, nicht die handelnde Person.",
      "en": "Focuses on the action itself rather than who is performing it.",
      "tr": "Özne değil, yapılan eylem önemlidir: 'wird gemacht' / 'wurde gemacht'.",
      "ar": "التركيز على الحدث نفسه وليس على الفاعل: يتم عمل / تم عمل.",
      "uk": "У центрі уваги сама дія, а не особа, яка її виконує."
    },
    "ruleCard": {
      "summary": {
        "de": "PASSIV-FORMEL:\nwerden (konjugiert an Pos 2) + ... + Partizip II (ganz am Ende)\n\n1. Passiv Präsens (Gegenwart):\n• Der Brief WIRD vom Chef GESCHRIEBEN.\n• Die Autos WERDEN in Deutschland PRODUZIERT.\n\n2. Passiv Präteritum (Vergangenheit):\n• Der Brief WURDE gestern GESCHRIEBEN.\n• Die Straßen WURDEN repariert.\n\nUrheber der Handlung: 'von' + Dativ (von der Firma, vom Arzt)",
        "en": "PASSIVE FORMULA:\nwerden (conjugated at Pos 2) + ... + Partizip II (at the very end)\n\n1. Present Passive:\n• Der Brief WIRD von mir GESCHRIEBEN (The letter is written).\n\n2. Past Passive (Präteritum):\n• Das Haus WURDE 1990 GEBAUT (The house was built in 1990).\n\nAgent (by whom): 'von' + Dative (vom Chef, von den Kollegen)",
        "tr": "PASSIV (EDİLGEN) FORMÜLÜ:\nwerden (çekimli halde 2. sırada) + ... + Partizip II (cümlenin en sonunda)\n\n1. Şimdiki / Geniş Zaman Passiv (Präsens):\n• 'Der Brief wird geschrieben.' (Mektup yazılıyor.)\n• 'Die Autos werden repariert.' (Arabalar tamir ediliyor.)\n\n2. Geçmiş Zaman Passiv (Präteritum):\n• 'Der Brief wurde gestern geschrieben.' (Mektup dün yazıldı.)\n• 'Das Haus wurde 1995 gebaut.' (Ev 1995'te inşa edildi.)\n\nEylemi yapan kişi/kurum: 'von' + Dativ ile belirtilir (von der Firma = şirket tarafından).",
        "ar": "قاعدة المبني للمجهول (Passiv):\nتصريف فعل werden في الموقع 2 + ... + اسم المفعول Partizip II في النهاية\n\n1. في الحاضر (Präsens):\n• Der Brief wird geschrieben (الرسالة تُكتب)\n\n2. في الماضي (Präteritum):\n• Der Brief wurde geschrieben (الرسالة كُتبت)\n\nالفاعل يُذكر اختيارياً باستخدام: 'von' + Dativ",
        "uk": "ФОРМУЛА ПАСИВУ:\nwerden (на 2-й позиції) + ... + Partizip II (у кінці речення)\n\n1. Пасив теперішнього часу (Präsens):\n• Der Brief wird geschrieben (Лист пишеться)\n\n2. Пасив минулого часу (Präteritum):\n• Das Haus wurde 1990 gebaut (Будинок був побудований у 1990)\n\nВиконавець дії зазначається через: 'von' + Dativ"
      },
      "proTip": {
        "de": "Achtung vor der Verwechslung: 'Ich werde arbeiten' (Futur I = Aktiv!) vs. 'Die Arbeit wird gemacht' (Passiv!). Im Passiv steht am Ende IMMER ein Partizip II mit 'ge-'!",
        "en": "Do not confuse Future Active (werde + Infinitiv) with Passive (wird + Partizip II with ge-!).",
        "tr": "Tuzak: 'werde + Mastar Fiil' Gelecek Zamandır (Futur: Ich werde lernen). 'wird + Partizip II (ge-)' ise Passiv'dir (Es wird gelernt)!",
        "ar": "احذر الخلط: werden + مصدر = زمن المستقبل. أما werden + اسم مفعول Partizip II = مبني للمجهول Passiv!",
        "uk": "Не плутайте: werden + інфінітив = майбутній час (Futur). werden + Partizip II = пасивний стан (Passiv)!"
      }
    },
    "examples": [
      {
        "de": "Das Auto wird heute in der Werkstatt repariert.",
        "en": "The car is being repaired in the workshop today.",
        "tr": "Araba bugün serviste tamir ediliyor.",
        "ar": "يتم إصلاح السيارة في الورشة اليوم.",
        "uk": "Автомобіль сьогодні ремонтують у майстерні."
      },
      {
        "de": "Das Gesetz wurde vom Parlament beschlossen.",
        "en": "The law was passed by parliament.",
        "tr": "Yasa parlamento tarafından kabul edildi.",
        "ar": "تم إقرار القانون من قِبل البرلمان.",
        "uk": "Закон був прийнятий парламентом."
      }
    ],
    "drills": [
      {
        "id": "b1_pas_1",
        "prompt": "Das alte Rathaus ___ im letzten Jahr komplett renoviert.",
        "options": [
          "wurde",
          "wird",
          "worden",
          "hat"
        ],
        "answer": 0,
        "explanation": {
          "de": "Signalwort 'im letzten Jahr' signalisiert Vergangenheit ➔ Passiv Präteritum: 'wurde renoviert'.",
          "en": "Time signal 'im letzten Jahr' indicates past tense ➔ Past Passive: 'wurde renoviert'.",
          "tr": "'im letzten Jahr' (geçen yıl) geçmiş zaman bildirir ➔ Passiv Präteritum: 'wurde renoviert' (tamamen yenilendi).",
          "ar": "العبارة الزمنية 'im letzten Jahr' تشير للماضي ➔ المبني للمجهول في الماضي: 'wurde renoviert'.",
          "uk": "Маркер часу 'im letzten Jahr' вказує на минулий час ➔ пасив у Präteritum: 'wurde renoviert'."
        }
      },
      {
        "id": "b1_pas_2",
        "prompt": "Viele wichtige E-Mails ___ täglich im Kundenservice beantwortet.",
        "options": [
          "werden",
          "wird",
          "wurden",
          "worden"
        ],
        "answer": 0,
        "explanation": {
          "de": "Pluralsubjekt 'Viele wichtige E-Mails' ➔ 3. Person Plural Präsens: 'werden beantwortet'.",
          "en": "Plural subject 'Viele wichtige E-Mails' ➔ 3rd person plural: 'werden beantwortet'.",
          "tr": "Özne çoğuldur ('Viele wichtige E-Mails') ➔ Çoğul geniş zaman Passiv: 'werden beantwortet'.",
          "ar": "الفاعل جمع 'Viele wichtige E-Mails' ➔ تصريف الجمع في الحاضر: 'werden beantwortet'.",
          "uk": "Підмет у множині 'Viele wichtige E-Mails' ➔ пасивна форма множини: 'werden beantwortet'."
        }
      }
    ]
  },
  {
    "id": "b2_nvv",
    "level": "B2",
    "icon": "💎",
    "title": {
      "de": "Nomen-Verb-Verbindungen (Funktionsverbgefüge)",
      "en": "Noun-Verb Collocations (B2–C1)",
      "tr": "İsim-Fiil Bağlantıları (Nomen-Verb-Verbindungen)",
      "ar": "المتلازمات اللفظية بين الاسم والفعل (B2–C1)",
      "uk": "Стійкі дієслівно-іменникові сполучення (B2–C1)"
    },
    "desc": {
      "de": "Gehobenes Deutsch: eine Entscheidung treffen, zur Verfügung stehen, in Betracht ziehen.",
      "en": "Elevated German writing: replace simple verbs with formal noun-verb pairs.",
      "tr": "İleri düzey Almanca: 'entscheiden' yerine 'eine Entscheidung treffen'.",
      "ar": "الألمانية الراقية للمستوى B2: استبدال الأفعال البسيطة بعبارات رسمية بليغة.",
      "uk": "Ділова та академічна німецька: заміна простих дієслів стійкими зворотами."
    },
    "ruleCard": {
      "summary": {
        "de": "Nomen-Verb-Verbindungen bestehen aus einem festen Nomen (oft mit Präposition) und einem Funktionsverb:\n\nWICHTIGE B2-KOMBINATIONEN:\n• eine Entscheidung treffen (= sich entscheiden)\n• zur Verfügung stehen (= verfügbar sein)\n• in Betracht ziehen (= überlegen, berücksichtigen)\n• Abschied nehmen von (= sich verabschieden)\n• einen Antrag stellen auf (= beantragen)\n• in Frage kommen (= möglich sein)\n• Kritik üben an (= kritisieren)\n• Rücksicht nehmen auf (= berücksichtigen)",
        "en": "Noun-verb collocations consist of a fixed noun (often with preposition) and a function verb:\n\nESSENTIAL B2 COMBINATIONS:\n• eine Entscheidung treffen (= to decide)\n• zur Verfügung stehen (= to be available)\n• in Betracht ziehen (= to consider)\n• Abschied nehmen von (= to say goodbye to)\n• einen Antrag stellen auf (= to apply for)\n• in Frage kommen (= to be considered / possible)\n• Kritik üben an (= to criticize)\n• Rücksicht nehmen auf (= to be considerate of)",
        "tr": "Nomen-Verb-Verbindungen (NVV), bir isim ile yardımcı işlevli bir fiilin oluşturduğu sabit kalıplardır:\n\nÖNEMLİ B2 KALIPLARI:\n• eine Entscheidung treffen = Karar vermek (entscheiden yerine)\n• zur Verfügung stehen = Hizmete hazır / mevcut olmak\n• in Betracht ziehen = Dikkate almak, hesaba katmak\n• Abschied nehmen von = Biriyle vedalaşmak\n• einen Antrag stellen auf = Resmi başvuruda bulunmak (beantragen yerine)\n• in Frage kommen = Söz konusu olmak, mümkün olmak\n• Kritik üben an = Birini/bir şeyi eleştirmek\n• Rücksicht nehmen auf = Birine saygı göstermek, gözetmek",
        "ar": "تركيبات الاسم والفعل الرسمية (NVV):\n• eine Entscheidung treffen (= يقرر)\n• zur Verfügung stehen (= يكون متاحاً وتحت التصرف)\n• in Betracht ziehen (= يأخذ بعين الاعتبار)\n• einen Antrag stellen auf (= يقدم طلباً رسمياً)\n• in Frage kommen (= يكون وارداً وممكناً)\n• Kritik üben an (= يوجه انتقاداً لـ)\n• Rücksicht nehmen auf (= يراعي مشاعر أو ظروف)",
        "uk": "Стійкі сполучення (NVV) складаються з іменника та функціонального дієслова:\n• eine Entscheidung treffen (= вирішити)\n• zur Verfügung stehen (= бути в розпорядженні/доступним)\n• in Betracht ziehen (= брати до уваги)\n• einen Antrag stellen auf (= подавати заяву)\n• in Frage kommen (= бути можливим/розглядатися)\n• Kritik üben an (= критикувати)\n• Rücksicht nehmen auf (= зважати на когось)"
      },
      "proTip": {
        "de": "Aktiv vs. Passiv-Bedeutung: 'etwas zur Verfügung STELLEN' = aktiv bereitstellen. 'zur Verfügung STEHEN' = passiv bereitstehen!",
        "en": "Watch out for active vs passive pairs: 'stellen' means you provide it; 'stehen' means it is available to you!",
        "tr": "'stellen' ile 'stehen' farkına dikkat: 'zur Verfügung STELLEN' bir şeyi sunmaktır (Aktif). 'zur Verfügung STEHEN' ise hizmete hazır bulunmaktır (Pasif)!",
        "ar": "انتبه للفرق بين stellen و stehen: stellen تعني أنت توفر الشيء، بينما stehen تعني الشيء متاح لك!",
        "uk": "Різниця між дією та станом: 'zur Verfügung stellen' — надавати щось (активно); 'zur Verfügung stehen' — бути наданим/доступним!"
      }
    },
    "examples": [
      {
        "de": "Wir müssen bis morgen eine wichtige Entscheidung treffen.",
        "en": "We must make an important decision by tomorrow.",
        "tr": "Yarına kadar önemli bir karar vermek zorundayız.",
        "ar": "يجب علينا اتخاذ قرار هام بحلول الغد.",
        "uk": "Ми повинні прийняти важливе рішення до завтра."
      },
      {
        "de": "Der Kundenservice steht Ihnen rund um die Uhr zur Verfügung.",
        "en": "Customer service is available to you around the clock.",
        "tr": "Müşteri hizmetleri 7/24 hizmetinize hazırdır.",
        "ar": "خدمة العملاء متاحة وتحت تصرفكم على مدار الساعة.",
        "uk": "Служба підтримки клієнтів доступна цілодобово."
      }
    ],
    "drills": [
      {
        "id": "b2_nvv_1",
        "prompt": "Das kommt für mich überhaupt nicht in ___!",
        "options": [
          "Frage",
          "Antwort",
          "Betracht",
          "Sinn"
        ],
        "answer": 0,
        "explanation": {
          "de": "Feste Wendung: 'in Frage kommen' = möglich sein / in Betracht kommen.",
          "en": "Fixed collocation: 'in Frage kommen' = to be an option / possible.",
          "tr": "Kalıp: 'in Frage kommen' = söz konusu olmak, mümkün olmak ('Das kommt nicht in Frage' = Asla söz konusu olamaz!).",
          "ar": "تعبير ثابت: 'in Frage kommen' يعني وارد أو ممكن (لا يمكن حدوث ذلك إطلاقاً!).",
          "uk": "Стійкий вираз: 'in Frage kommen' = бути можливим / розглядатися ('Це взагалі не обговорюється!')."
        }
      },
      {
        "id": "b2_nvv_2",
        "prompt": "Der Mieter hat einen schriftlichen Antrag auf Mietminderung ___.",
        "options": [
          "gestellt",
          "getroffen",
          "gelegt",
          "gezogen"
        ],
        "answer": 0,
        "explanation": {
          "de": "Feste Nomen-Verb-Verbindung: 'einen Antrag STELLEN auf' (beantragen) ➔ Partizip II: 'gestellt'.",
          "en": "Fixed noun-verb collocation: 'einen Antrag stellen' (to submit an application) ➔ 'gestellt'.",
          "tr": "Kalıp: 'einen Antrag STELLEN' (resmi başvuruda bulunmak) ➔ Partizip II: 'gestellt'.",
          "ar": "تعبير ثابت: 'einen Antrag stellen auf' (يقدم طلباً رسمياً) ➔ اسم المفعول: 'gestellt'.",
          "uk": "Стійке сполучення: 'einen Antrag stellen' (подати офіційну заяву) ➔ Partizip II: 'gestellt'."
        }
      }
    ]
  },
  {
    "id": "b2_doppelkonnektoren",
    "level": "B2",
    "icon": "🔗",
    "title": {
      "de": "Zweiteilige Konnektoren (sowohl... als auch, weder... noch)",
      "en": "Two-Part Connectors (neither... nor, not only... but also)",
      "tr": "Çift Parçalı Bağlaçlar (sowohl... als auch, weder... noch)",
      "ar": "أدوات الربط المزدوجة (لا هذا ولا ذاك، ليس فقط بل أيضاً)",
      "uk": "Парні сполучники (як... так і, ні... ні)"
    },
    "desc": {
      "de": "nicht nur... sondern auch, entweder... oder, je... desto/umso.",
      "en": "Complex sentence structures pairing two complementary elements.",
      "tr": "Hem... hem de, ne... ne de, ya... ya da, ne kadar... o kadar kalıpları.",
      "ar": "تراكيب لغوية متقدمة لربط فكرتين متكاملتين أو متناقضتين بدقة.",
      "uk": "Складні конструкції: не тільки... але й, або... або, що... то."
    },
    "ruleCard": {
      "summary": {
        "de": "ZWEITEILIGE KONNEKTOREN:\n\n1. Positiv verbindend (+ +):\n• sowohl ... als auch (= hem hem de)\n• nicht nur ... sondern auch (= sadece değil, aynı zamanda)\n\n2. Negativ ausschließend (- -):\n• weder ... noch (= ne ne de: braucht KEIN zusätzliches 'nicht'!)\n  > Ich trinke weder Kaffee noch Tee.\n\n3. Alternativ (oder/oder):\n• entweder ... oder (= ya ya da)\n\n4. Proportional:\n• je + Komparativ (Nebensatz: Verb am Ende!) ... desto/umso + Komparativ (Hauptsatz: Inversion!)\n  > Je mehr man lernt, desto besser spricht man.",
        "en": "TWO-PART CONNECTORS:\n\n1. Double Positive (+ +):\n• sowohl ... als auch (both ... and)\n• nicht nur ... sondern auch (not only ... but also)\n\n2. Double Negative (- -):\n• weder ... noch (neither ... nor: does NOT take an extra 'nicht'!)\n\n3. Alternative:\n• entweder ... oder (either ... or)\n\n4. Proportional:\n• je + comparative (verb at end), desto/umso + comparative (verb inversion)\n  > Je früher wir losfahren, desto eher kommen wir an.",
        "tr": "ÇİFT PARÇALI BAĞLAÇLAR:\n\n1. İki Olumlu Unsur (+ +):\n• sowohl ... als auch (hem ... hem de)\n• nicht nur ... sondern auch (sadece ... değil, aynı zamanda ... da)\n\n2. İki Olumsuz Unsur (- -):\n• weder ... noch (ne ... ne de: Cümleye ASLA ekstra 'nicht' veya 'kein' eklenmez!)\n  > Er spricht weder Englisch noch Deutsch.\n\n3. Alternatif Durumlar:\n• entweder ... oder (ya ... ya da)\n\n4. Orantı Bildiren (Ne kadar... o kadar):\n• Je + Komparativ (Fiil cümlenin en sonuna!), desto/umso + Komparativ (Fiil hemen başa!)\n  > Je mehr ich übe, desto schneller lerne ich.",
        "ar": "أدوات الربط المزدوجة:\n• sowohl ... als auch (كلا من ... و)\n• nicht nur ... sondern auch (ليس فقط ... بل أيضاً)\n• weder ... noch (لا ... ولا: لا تحتاج لنفي إضافي!)\n• entweder ... oder (إما ... أو)\n• je ... desto (كلما ... كلما: بعد je الفعل في النهاية، وبعد desto الفعل يتقدم)",
        "uk": "ПАРНІ СПОЛУЧНИКИ:\n• sowohl ... als auch (як ..., так і)\n• nicht nur ... sondern auch (не тільки ..., але й)\n• weder ... noch (ні ..., ні: не потребує додаткового заперечення!)\n• entweder ... oder (або ..., або)\n• je ... desto (чим ..., тим: після je дієслово в кінці, після desto — інверсія)"
      },
      "proTip": {
        "de": "Grammatik-Falle: 'weder ... noch' ist bereits vollkommen negativ. Setzen Sie niemals ein 'nicht' oder 'kein' dazu!",
        "en": "Grammar Trap: 'weder ... noch' already carries negative meaning. Never add 'nicht' or 'kein'!",
        "tr": "Büyük Hata Tuzağı: 'weder... noch' zaten negatif anlam taşır. Cümleye sakın 'nicht' veya 'kein' eklemeyin!",
        "ar": "فخ الامتحان: التركيب 'weder ... noch' ينفي الجملة تلقائياً، فلا تضع معه nicht أبداً!",
        "uk": "Пастка: 'weder ... noch' вже містить заперечення, ніколи не додавайте 'nicht' чи 'kein'!"
      }
    },
    "examples": [
      {
        "de": "Er spricht nicht nur fließend Deutsch, sondern auch perfekt Englisch.",
        "en": "He speaks not only fluent German, but also perfect English.",
        "tr": "O sadece akıcı Almanca değil, aynı zamanda kusursuz İngilizce de konuşuyor.",
        "ar": "هو لا يتحدث الألمانية بطلاقة فحسب، بل يتحدث الإنجليزية بشكل مثالي أيضاً.",
        "uk": "Він не тільки вільно розмовляє німецькою, але й бездоганно англійською."
      },
      {
        "de": "Je mehr man liest, desto größer wird der Wortschatz.",
        "en": "The more you read, the larger your vocabulary becomes.",
        "tr": "İnsan ne kadar çok okursa, kelime hazinesi o kadar genişler.",
        "ar": "كلما قرأ المرء أكثر، كلما زادت حصيلته اللغوية.",
        "uk": "Чим більше читаєш, тим більшим стає словниковий запас."
      }
    ],
    "drills": [
      {
        "id": "b2_dk_1",
        "prompt": "Dieser Bewerber hat ___ die notwendige Berufserfahrung ___ die geforderten Sprachkenntnisse.",
        "options": [
          "weder ... noch",
          "sowohl ... oder",
          "entweder ... noch",
          "nicht nur ... noch"
        ],
        "answer": 0,
        "explanation": {
          "de": "Das feste Konnektoren-Paar lautet 'weder ... noch' (weder A noch B).",
          "en": "The correct paired connector is 'weder ... noch' (neither A nor B).",
          "tr": "Doğru çift parçalı bağlaç 'weder ... noch'dur (ne A ne de B).",
          "ar": "الزوج الصحيح لأدوات الربط المزدوجة هو 'weder ... noch'.",
          "uk": "Правильна пара сполучників — 'weder ... noch' (ні те, ні інше)."
        }
      },
      {
        "id": "b2_dk_2",
        "prompt": "Je früher Sie den Antrag einreichen, ___ schneller erhalten Sie den Bescheid.",
        "options": [
          "desto",
          "denn",
          "als",
          "wie"
        ],
        "answer": 0,
        "explanation": {
          "de": "Auf 'je + Komparativ' folgt im Hauptsatz immer 'desto' (oder 'umso') + Komparativ.",
          "en": "After 'je + comparative', the main clause always takes 'desto' (or 'umso') + comparative.",
          "tr": "'je + Komparativ' yapısının ardından ana cümlede her zaman 'desto' (veya 'umso') gelir.",
          "ar": "بعد التركيب 'je + صيغة مقارنة' نستخدم دائماً 'desto' (أو umso) في الجملة الرئيسية.",
          "uk": "Після 'je + вищий ступінь' у головному реченні завжди вживається 'desto' (або 'umso')."
        }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GRAMMAR_DATA };
}
