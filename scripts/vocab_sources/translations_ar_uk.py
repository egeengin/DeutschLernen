# scripts/vocab_sources/translations_ar_uk.py
"""
Arabic (Modern Standard Arabic) and Ukrainian translations overlay.
Keyed by German word (de field) for lookup during build.
Each entry: { "ar": ..., "example_ar": ..., "uk": ..., "example_uk": ... }

This file provides translations for the highest-frequency A1 core words.
Words not listed here will receive empty strings (the UI falls back to English).
"""

# fmt: off
TRANSLATIONS_AR_UK = {
    # ─── Top Auxiliary & Modals ───────────────────────────────────────
    "sein (ist, war, ist gewesen)": {
        "ar": "يكون", "example_ar": "هو أفضل أصدقائي.",
        "uk": "бути", "example_uk": "Він мій найкращий друг.",
    },
    "haben (hat, hatte, hat gehabt)": {
        "ar": "يملك", "example_ar": "لدي طفلان.",
        "uk": "мати", "example_uk": "У мене двоє дітей.",
    },
    "werden (wird, wurde, ist geworden)": {
        "ar": "يصبح", "example_ar": "يريد أن يصبح طبيباً.",
        "uk": "ставати", "example_uk": "Він хоче стати лікарем.",
    },
    "können (kann, konnte, hat gekonnt)": {
        "ar": "يستطيع", "example_ar": "هل تستطيع التحدث بالألمانية؟",
        "uk": "могти", "example_uk": "Ти можеш розмовляти німецькою?",
    },
    "müssen (muss, musste, hat gemusst)": {
        "ar": "يجب", "example_ar": "يجب أن أكون في الموعد اليوم.",
        "uk": "мусити", "example_uk": "Я мушу бути вчасно сьогодні.",
    },
    "wollen (will, wollte, hat gewollt)": {
        "ar": "يريد", "example_ar": "نريد شراء منزل.",
        "uk": "хотіти", "example_uk": "Ми хочемо купити будинок.",
    },
    "sollen (soll, sollte, hat gesollt)": {
        "ar": "ينبغي", "example_ar": "يجب عليك أن تأكل المزيد من الفواكه.",
        "uk": "повинен", "example_uk": "Тобі слід їсти більше фруктів.",
    },
    "dürfen (darf, durfte, hat gedurft)": {
        "ar": "يُسمح له", "example_ar": "هل يُسمح لي بالوقوف هنا؟",
        "uk": "мати дозвіл", "example_uk": "Чи можу я тут паркуватися?",
    },
    "mögen (mag, mochte, hat gemocht)": {
        "ar": "يحب", "example_ar": "أحب عصير البرتقال الطازج.",
        "uk": "любити", "example_uk": "Я люблю свіжий апельсиновий сік.",
    },
    "möchten (möchte)": {
        "ar": "يودّ", "example_ar": "أود ترتيب موعد.",
        "uk": "хотіти (ввічливо)", "example_uk": "Я хотів би домовитися про зустріч.",
    },
    "wissen (weiß, wusste, hat gewusst)": {
        "ar": "يعرف (حقيقة)", "example_ar": "لا أعرف أين يسكن.",
        "uk": "знати", "example_uk": "Я не знаю, де він живе.",
    },
    "brauchen (braucht, brauchte, hat gebraucht)": {
        "ar": "يحتاج", "example_ar": "هل تحتاج شيئاً آخر؟",
        "uk": "потребувати", "example_uk": "Тобі ще щось потрібно?",
    },
    "lassen (lässt, ließ, hat gelassen)": {
        "ar": "يدع، يترك", "example_ar": "دعني أشرح ذلك بإيجاز!",
        "uk": "дозволяти, залишати", "example_uk": "Дозволь мені це коротко пояснити!",
    },
    "tun (tut, tat, hat getan)": {
        "ar": "يفعل", "example_ar": "ماذا يمكنني أن أفعل لك؟",
        "uk": "робити", "example_uk": "Що я можу для Вас зробити?",
    },
    "gehören (gehört, gehörte, hat gehört)": {
        "ar": "ينتمي إلى", "example_ar": "لمن تنتمي هذه الحقيبة؟",
        "uk": "належати", "example_uk": "Кому належить ця валіза?",
    },

    # ─── Daily Motion & Travel ────────────────────────────────────────
    "gehen (geht, ging, ist gegangen)": {
        "ar": "يذهب، يمشي", "example_ar": "نذهب سيراً على الأقدام إلى المحطة.",
        "uk": "йти, ходити", "example_uk": "Ми йдемо пішки до вокзалу.",
    },
    "kommen (kommt, kam, ist gekommen)": {
        "ar": "يأتي", "example_ar": "هل ستأتي هذا المساء؟",
        "uk": "приходити", "example_uk": "Ти прийдеш сьогодні ввечері?",
    },
    "fahren (fährt, fuhr, ist gefahren)": {
        "ar": "يقود، يسافر", "example_ar": "أسافر بالدراجة كل يوم.",
        "uk": "їхати, водити", "example_uk": "Я щодня їжджу на велосипеді.",
    },
    "fliegen (fliegt, flog, ist geflogen)": {
        "ar": "يطير", "example_ar": "في الصيف نسافر جواً إلى روما.",
        "uk": "літати", "example_uk": "Влітку ми летимо до Рима.",
    },
    "laufen (läuft, lief, ist gelaufen)": {
        "ar": "يركض، يمشي", "example_ar": "الأطفال يركضون في الحديقة.",
        "uk": "бігти, ходити", "example_uk": "Діти бігають у парку.",
    },

    # ─── Daily Life Essentials ────────────────────────────────────────
    "machen (macht, machte, hat gemacht)": {
        "ar": "يصنع، يفعل", "example_ar": "ماذا تفعل هذا المساء؟",
        "uk": "робити", "example_uk": "Що ти робиш сьогодні ввечері?",
    },
    "sagen (sagt, sagte, hat gesagt)": {
        "ar": "يقول", "example_ar": "ماذا قلت؟",
        "uk": "говорити, казати", "example_uk": "Що ти сказав?",
    },
    "sprechen (spricht, sprach, hat gesprochen)": {
        "ar": "يتحدث", "example_ar": "هل تتحدث الإنجليزية؟",
        "uk": "розмовляти", "example_uk": "Ви розмовляєте англійською?",
    },
    "essen (isst, aß, hat gegessen)": {
        "ar": "يأكل", "example_ar": "هل أكلت اليوم؟",
        "uk": "їсти", "example_uk": "Ти сьогодні їв?",
    },
    "trinken (trinkt, trank, hat getrunken)": {
        "ar": "يشرب", "example_ar": "أشرب القهوة كل صباح.",
        "uk": "пити", "example_uk": "Я п'ю каву кожного ранку.",
    },
    "schlafen (schläft, schlief, hat geschlafen)": {
        "ar": "ينام", "example_ar": "نمت جيداً الليلة الماضية.",
        "uk": "спати", "example_uk": "Я добре спав минулої ночі.",
    },
    "arbeiten (arbeitet, arbeitete, hat gearbeitet)": {
        "ar": "يعمل", "example_ar": "أعمل في شركة كبيرة.",
        "uk": "працювати", "example_uk": "Я працюю у великій компанії.",
    },
    "lernen (lernt, lernte, hat gelernt)": {
        "ar": "يتعلم", "example_ar": "أتعلم الألمانية منذ ستة أشهر.",
        "uk": "вчити, навчатися", "example_uk": "Я вчу німецьку шість місяців.",
    },
    "lesen (liest, las, hat gelesen)": {
        "ar": "يقرأ", "example_ar": "أحب قراءة الكتب.",
        "uk": "читати", "example_uk": "Я люблю читати книги.",
    },
    "schreiben (schreibt, schrieb, hat geschrieben)": {
        "ar": "يكتب", "example_ar": "أكتب رسالة إلى صديقي.",
        "uk": "писати", "example_uk": "Я пишу листа другові.",
    },
    "spielen (spielt, spielte, hat gespielt)": {
        "ar": "يلعب", "example_ar": "الأطفال يلعبون في الحديقة.",
        "uk": "грати", "example_uk": "Діти грають у саду.",
    },
    "kaufen (kauft, kaufte, hat gekauft)": {
        "ar": "يشتري", "example_ar": "أريد شراء خبز طازج.",
        "uk": "купувати", "example_uk": "Я хочу купити свіжий хліб.",
    },
    "kochen (kocht, kochte, hat gekocht)": {
        "ar": "يطبخ", "example_ar": "أطبخ العشاء كل يوم.",
        "uk": "готувати", "example_uk": "Я готую вечерю кожного дня.",
    },
    "wohnen (wohnt, wohnte, hat gewohnt)": {
        "ar": "يسكن", "example_ar": "أسكن في برلين.",
        "uk": "мешкати, жити", "example_uk": "Я живу в Берліні.",
    },
    "helfen (hilft, half, hat geholfen)": {
        "ar": "يساعد", "example_ar": "هل يمكنك مساعدتي من فضلك؟",
        "uk": "допомагати", "example_uk": "Чи можеш ти мені допомогти?",
    },
    "finden (findet, fand, hat gefunden)": {
        "ar": "يجد", "example_ar": "هل وجدت مفاتيحك؟",
        "uk": "знаходити", "example_uk": "Ти знайшов свої ключі?",
    },
    "geben (gibt, gab, hat gegeben)": {
        "ar": "يعطي", "example_ar": "يمكنك إعطائي الكتاب من فضلك؟",
        "uk": "давати", "example_uk": "Чи можеш ти дати мені книгу?",
    },
    "nehmen (nimmt, nahm, hat genommen)": {
        "ar": "يأخذ", "example_ar": "آخذ القطار كل صباح.",
        "uk": "брати", "example_uk": "Я беру поїзд кожного ранку.",
    },
    "sehen (sieht, sah, hat gesehen)": {
        "ar": "يرى", "example_ar": "هل ترى ذلك المبنى الكبير؟",
        "uk": "бачити", "example_uk": "Ти бачиш ту велику будівлю?",
    },
    "hören (hört, hörte, hat gehört)": {
        "ar": "يسمع", "example_ar": "أسمع الموسيقى كل يوم.",
        "uk": "чути, слухати", "example_uk": "Я слухаю музику кожного дня.",
    },
    "verstehen (versteht, verstand, hat verstanden)": {
        "ar": "يفهم", "example_ar": "هل تفهم هذه الجملة؟",
        "uk": "розуміти", "example_uk": "Ти розумієш це речення?",
    },
    "denken (denkt, dachte, hat gedacht)": {
        "ar": "يفكر", "example_ar": "أفكر في المستقبل.",
        "uk": "думати", "example_uk": "Я думаю про майбутнє.",
    },
    "glauben (glaubt, glaubte, hat geglaubt)": {
        "ar": "يعتقد، يؤمن", "example_ar": "أعتقد أن هذا صحيح.",
        "uk": "вірити, вважати", "example_uk": "Я вважаю, що це правильно.",
    },
    "kennen (kennt, kannte, hat gekannt)": {
        "ar": "يعرف (شخصاً)", "example_ar": "هل تعرف هذا الرجل؟",
        "uk": "знати (когось)", "example_uk": "Ти знаєш цю людину?",
    },
    "stehen (steht, stand, hat gestanden)": {
        "ar": "يقف", "example_ar": "يقف أمام الباب.",
        "uk": "стояти", "example_uk": "Він стоїть перед дверима.",
    },
    "sitzen (sitzt, saß, hat gesessen)": {
        "ar": "يجلس", "example_ar": "نجلس في الحديقة.",
        "uk": "сидіти", "example_uk": "Ми сидимо в саду.",
    },
    "liegen (liegt, lag, hat gelegen)": {
        "ar": "يقع، يستلقي", "example_ar": "الكتاب يقع على الطاولة.",
        "uk": "лежати", "example_uk": "Книга лежить на столі.",
    },
    "leben (lebt, lebte, hat gelebt)": {
        "ar": "يعيش", "example_ar": "أعيش في ألمانيا منذ ثلاث سنوات.",
        "uk": "жити", "example_uk": "Я живу в Німеччині три роки.",
    },
    "bringen (bringt, brachte, hat gebracht)": {
        "ar": "يحضر، يجلب", "example_ar": "هل يمكنك إحضار الماء من فضلك؟",
        "uk": "приносити", "example_uk": "Чи можеш ти принести воду?",
    },
    "bezahlen (bezahlt, bezahlte, hat bezahlt)": {
        "ar": "يدفع", "example_ar": "هل يمكنني الدفع بالبطاقة؟",
        "uk": "платити", "example_uk": "Чи можу я заплатити карткою?",
    },
    "fragen (fragt, fragte, hat gefragt)": {
        "ar": "يسأل", "example_ar": "هل يمكنني أن أسألك سؤالاً؟",
        "uk": "запитувати", "example_uk": "Чи можу я тебе запитати?",
    },
    "antworten (antwortet, antwortete, hat geantwortet)": {
        "ar": "يجيب", "example_ar": "لم يجب على رسالتي.",
        "uk": "відповідати", "example_uk": "Він не відповів на мій лист.",
    },
    "warten (wartet, wartete, hat gewartet)": {
        "ar": "ينتظر", "example_ar": "أنتظر الحافلة.",
        "uk": "чекати", "example_uk": "Я чекаю на автобус.",
    },
    "beginnen (beginnt, begann, hat begonnen)": {
        "ar": "يبدأ", "example_ar": "يبدأ الدرس في الساعة التاسعة.",
        "uk": "починати", "example_uk": "Заняття починається о дев'ятій.",
    },
    "aufstehen (steht auf, stand auf, ist aufgestanden)": {
        "ar": "يستيقظ، ينهض", "example_ar": "أستيقظ في السادسة صباحاً.",
        "uk": "вставати", "example_uk": "Я встаю о шостій ранку.",
    },
    "schließen (schließt, schloss, hat geschlossen)": {
        "ar": "يغلق", "example_ar": "من فضلك أغلق الباب.",
        "uk": "закривати", "example_uk": "Будь ласка, закрий двері.",
    },
    "öffnen (öffnet, öffnete, hat geöffnet)": {
        "ar": "يفتح", "example_ar": "افتح النافذة من فضلك.",
        "uk": "відкривати", "example_uk": "Будь ласка, відкрий вікно.",
    },
    "zeigen (zeigt, zeigte, hat gezeigt)": {
        "ar": "يُظهر، يعرض", "example_ar": "هل يمكنك أن تريني الطريق؟",
        "uk": "показувати", "example_uk": "Чи можеш ти показати мені дорогу?",
    },
}
# fmt: on
