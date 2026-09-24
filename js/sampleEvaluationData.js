/**
 * Authentic telc Deutsch B1 Schreiben Sample Evaluation Data
 * Grounded in official telc B1 examination guidelines (Prüfungstest 1 / Zertifikat Deutsch B1).
 * Features complete Quad-Lingual localization across English (en), Turkish (tr), Arabic (ar), and Ukrainian (uk).
 */
const SAMPLE_B1_EVALUATION = {
  prompt: {
    titleEn: "telc Deutsch B1 Schriftlicher Ausdruck — Teil 1 (E-Mail / Brief)",
    titleTr: "telc Deutsch B1 Yazılı Anlatım — Bölüm 1 (E-Posta / Mektup)",
    titleAr: "امتحان telc Deutsch B1 التعبير الكتابي — الجزء 1 (بريد إلكتروني / رسالة)",
    titleUk: "telc Deutsch B1 Письмова частина — Частина 1 (Електронний лист / Лист)",
    typeEn: "Informal E-Mail to a friend (Option 1)",
    typeTr: "Arkadaşa Samimi E-Posta (Seçenek 1)",
    typeAr: "بريد إلكتروني غير رسمي لصديقة (الخيار 1)",
    typeUk: "Неформальний лист подрузі (Варіант 1)",
    timeAllowed: "30 Minuten",
    maxPoints: 45,
    incomingMessage: {
      sender: "Marianne <marianne@example.com>",
      subject: "Besuch in Deutschland / Ausflugsplanung",
      text: `Liebe/r [Name],

danke für deine nette Einladung! Ich komme dich sehr gerne besuchen, um dein Land kennenzulernen – wie du weißt, war ich ja noch nie da. Wann wäre die beste Zeit, dich zu besuchen? Ich weiß noch nicht einmal, ob es bei euch im Sommer sehr heiß wird – allzu große Hitze mag ich nämlich nicht so sehr. Und gibt es sonst noch irgendwelche Dinge, die ich wissen sollte, bevor ich diese Reise mache?

Bitte schreib mir möglichst bald, damit ich mich gut auf die Reise vorbereiten kann.

Herzliche Grüße
Marianne`
    },
    leitpunkte: [
      {
        id: 1,
        textEn: "Which trips/activities you want to do together with Marianne",
        textTr: "Marianne ile birlikte yapmak istediğiniz geziler ve aktiviteler",
        textAr: "الرحلات والأنشطة المشتركة التي ترغب في القيام بها مع ماريان",
        textUk: "Поїздки та спільні активності, які ви хочете спланувати з Маріанною",
        status: "fulfilled"
      },
      {
        id: 2,
        textEn: "Which season is best for the travel (temperature / weather)",
        textTr: "Seyahat için en uygun mevsim (sıcaklık ve hava durumu)",
        textAr: "أفضل فصل للزيارة من حيث درجات الحرارة والطقس",
        textUk: "Найкраща пора року для подорожі (температура та погода)",
        status: "fulfilled"
      },
      {
        id: 3,
        textEn: "What clothes she should pack for her stay",
        textTr: "Yanına hangi kıyafetleri alması gerektiği",
        textAr: "الملابس المناسبة التي ينبغي عليها إحضارها",
        textUk: "Який одяг їй варто взяти із собою",
        status: "fulfilled"
      },
      {
        id: 4,
        textEn: "How she can best prepare for the journey (tickets, transport, apps)",
        textTr: "Seyahate en iyi nasıl hazırlanabileceği (biletler, ulaşım, uygulamalar)",
        textAr: "كيفية الاستعداد الأمثل للرحلة (حجز التذاكر، المواصلات والتطبيقات)",
        textUk: "Як найкраще підготуватися до подорожі (квитки, транспорт, додатки)",
        status: "fulfilled"
      }
    ]
  },
  studentSubmission: {
    rawText: `Liebe Marianne,

ich habe mich sehr über deine E-Mail gefreut! Es ist wirklich schön, dass du mich bald in Deutschland besuchen möchtest.

Die beste Jahreszeit für deine Reise ist der Frühling, besonders der Mai. Im Juli und August kann es hier nämlich sehr heiß werden, aber im Frühling ist das Wetter angenehm mild und sonnig.

Wenn du hier bist, wir können zusammen einen Ausflug nach Berlin machen. Dort gibt es viele berühmte Museen und schöne Parks. Ausserdem möchte ich dir unseren großen See zeigen, an dem wir spazieren gehen und schwimmen können.

Für die Reise solltest du unbedingt feste Schuhe und eine warme Jacke mitbringen, weil die Abende manchmal noch frisch sind.

Zur Vorbereitung empfehle ich dir, deine Fahrkarten für den Zug möglichst früh online zu buchen, damit sie billiger sind. Lade dir auch die DB-App auf dein Handy herunter.

Ich freue mich schon sehr auf dein Besuch! Schreib mir bald zurück.

Viele Grüße,
Ali`,
    wordCount: 158
  },
  scores: {
    rawSum: 11,
    rawMax: 15,
    multiplier: 3,
    total: 33, // (5 + 3 + 3) * 3 = 33 / 45 points
    maxTotal: 45,
    passThreshold: 27, // 60% of 45 pts
    grade: "Gut (Passed)",
    percentage: 73.3,
    rubricNoteEn: "telc B1 Scoring Formula: (Criterion I + II + III) × 3 = Final Score / 45. Pass threshold is 27 / 45 points (60%). Under telc's 'Primat der Verständlichkeit' (Priority of Comprehensibility), a letter with minor grammatical slips still comfortably passes as long as all Leitpunkte are addressed and meaning is clearly understood.",
    rubricNoteTr: "telc B1 Puanlama Formülü: (Kriter I + II + III) × 3 = Toplam Puan / 45. Geçme barajı 27 / 45 puandır (%60). telc'in 'Anlaşılabilirlik Önceliği' ilkesine göre, tüm Leitpunkt'lar işlendiğinde ve anlam açık olduğunda, küçük dilbilgisi hataları içeren mektuplar da rahatlıkla geçer.",
    rubricNoteAr: "معادلة تقييم telc B1: (المعيار الأول + الثاني + الثالث) × 3 = الدرجة النهائية من 45. درجة النجاح الأدنى 27 / 45 نقطة (60%). وفقاً لمبدأ 'أولوية الفهم' في telc، تنجح الرسالة بسهولة عند استيفاء جميع النقاط وفهم المعنى بوضوح رغم وجود أخطاء لغوية طفيفة.",
    rubricNoteUk: "Формула оцінювання telc B1: (Критерій I + II + III) × 3 = Підсумковий бал / 45. Прохідний бал — 27 / 45 (60%). За принципом telc 'Пріоритет зрозумілості', якщо всі пункти розкрито і зміст зрозумілий, лист із незначними помилками впевнено отримує прохідний бал.",
    criteria: [
      {
        id: "inhalt",
        titleEn: "Criterion I: Aufgabenbewältigung (Content & 4 Leitpunkte)",
        titleTr: "Kriter I: Görev Tamamlama ve 4 Leitpunkt",
        titleAr: "المعيار 1: استيفاء المهمة وتغطية النقاط الأربع (Aufgabenbewältigung)",
        titleUk: "Критерій I: Розкриття завдання та 4 опорні пункти (Aufgabenbewältigung)",
        rawScore: 5,
        rawMax: 5,
        finalScore: 15,
        finalMax: 15,
        ratingLetter: "A",
        status: "excellent",
        summaryEn: "Score A (5/5 pts): All 4 Leitpunkte were fully, clearly, and thoughtfully addressed at B1 level. Informal register, situation, and length (158 words) completely fulfilled.",
        summaryTr: "A Puanı (5/5): Tüm 4 kılavuz nokta B1 seviyesinde eksiksiz ve ayrıntılı işlenmiş. Samimi üslup, bağlam ve uzunluk (158 kelime) tam puan aldı.",
        summaryAr: "الدرجة أ (5/5 نقاط): تمت تغطية جميع النقاط الإرشادية الأربع بشكل كامل وواضح بمستوى B1. تم الالتزام بالأسلوب غير الرسمي وطول النص (158 كلمة).",
        summaryUk: "Оцінка A (5/5 балів): Усі 4 опорні пункти розкрито детально, змістовно та відповідно до рівня B1. Неформальний стиль, контекст та обсяг (158 слів) виконано ідеально."
      },
      {
        id: "sprache",
        titleEn: "Criterion II: Kommunikative Gestaltung (Cohesion & Register)",
        titleTr: "Kriter II: İletişimsel Düzen ve Bağlaçlar",
        titleAr: "المعيار 2: التماسك والترابط اللغوي (Kommunikative Gestaltung)",
        titleUk: "Критерій II: Комунікативна структура та зв'язність (Kommunikative Gestaltung)",
        rawScore: 3,
        rawMax: 5,
        finalScore: 9,
        finalMax: 15,
        ratingLetter: "B",
        status: "good",
        summaryEn: "Score B (3/5 pts): Clear text structure with friendly opening and closing. Rich B1 connectors used (dass, nämlich, aber, wenn, außerdem, weil, damit). Slightly simple transitions keep it at Score B.",
        summaryTr: "B Puanı (3/5): Giriş-kapanış şablonu düzgün ve samimi. Çeşitli B1 bağlaçları kullanılmış (dass, nämlich, aber, wenn, außerdem, weil, damit). Geçişler basit kaldığı için B puanı verildi.",
        summaryAr: "الدرجة ب (3/5 نقاط): هيكل واضح مع افتتاحية وختام وديين. استخدام جيد لروابط B1 (dass, nämlich, aber, wenn, außerdem, weil, damit). بعض الانتقالات البسيطة حالت دون الدرجة أ.",
        summaryUk: "Оцінка B (3/5 балів): Чітка структура тексту з вдалим привітанням і прощанням. Використано надійні сполучники B1 (dass, nämlich, aber, wenn, außerdem, weil, damit). Переходи між думками прості, тому бал B."
      },
      {
        id: "korrektheit",
        titleEn: "Criterion III: Formale Richtigkeit (Grammar & Orthography)",
        titleTr: "Kriter III: Dilbilgisi ve Doğruluk",
        titleAr: "المعيار 3: السلامة النحوية والإملائية (Formale Richtigkeit)",
        titleUk: "Критерій III: Граматична та орфографічна правильність (Formale Richtigkeit)",
        rawScore: 3,
        rawMax: 5,
        finalScore: 9,
        finalMax: 15,
        ratingLetter: "B",
        status: "average",
        summaryEn: "Score B (3/5 pts): Good B1 communicative grammar under telc's 'Primat der Verständlichkeit'. Inversion error ('Wenn du hier bist, wir können...') and case ending ('auf dein Besuch') do not impede understanding.",
        summaryTr: "B Puanı (3/5): telc'in 'Anlaşılabilirlik Önceliği' ilkesine göre başarılı B1 gramer kontrolü. Yan cümle sonu inversiyon hatası ve edat hali hatası anlamı bozmuyor.",
        summaryAr: "الدرجة ب (3/5 نقاط): سيطرة نحوية جيدة وفقاً لمبدأ 'أولوية الفهم'. خطأ تقديم الفعل بعد الجملة الجانبية وخطأ الحالة الإعرابية لا يعيقان الفهم مطلقاً.",
        summaryUk: "Оцінка B (3/5 балів): Достатній граматичний контроль за принципом telc 'Пріоритет зрозумілості'. Помилка порядку слів після підрядного речення та відмінкове закінчення не заважають розумінню."
      }
    ]
  },
  annotations: [
    {
      id: "ann-1",
      targetText: "Wenn du hier bist, wir können zusammen einen Ausflug nach Berlin machen.",
      correctedText: "Wenn du hier bist, können wir zusammen einen Ausflug nach Berlin machen.",
      type: "syntax",
      rule: "Inversion nach Nebensatz (Kriterium III)",
      ruleEn: "Verb Inversion after Subclause",
      ruleTr: "Yan Cümle Sonrası Fiil İnversiyonu",
      ruleAr: "تقديم الفعل بعد الجملة الجانبية",
      ruleUk: "Інверсія дієслова після підрядного речення",
      explanationEn: "When a sentence begins with a dependent subclause ('Wenn du hier bist,...'), the main clause MUST start immediately with the finite verb in Position 1 ('können wir...').",
      explanationTr: "Cümle 'Wenn du hier bist,...' gibi bir yan cümleyle başladığında, ana cümle 1. pozisyonda doğrudan çekimli FİİL ile başlamalıdır ('können wir...').",
      explanationAr: "عندما تبدأ الجملة بجملة جانبية ('Wenn du hier bist,...')، يجب أن تبدأ الجملة الرئيسية مباشرة بالفعل المصرف في الموضع الأول ('können wir...').",
      explanationUk: "Якщо речення починається з підрядного ('Wenn du hier bist,...'), головне речення ОБОВ'ЯЗКОВО має починатися з відмінюваного дієслова на першій позиції ('können wir...')."
    },
    {
      id: "ann-2",
      targetText: "Ausserdem",
      correctedText: "Außerdem",
      type: "spelling",
      rule: "Rechtschreibung Eszett (ß)",
      ruleEn: "German Orthography: Eszett (ß)",
      ruleTr: "Almanca İmla Kuralı: Eszett (ß)",
      ruleAr: "قواعد الإملاء الألمانية: حرف Eszett (ß)",
      ruleUk: "Німецький правопис: літера Eszett (ß)",
      explanationEn: "In standard German spelling, after long vowels and diphthongs ('au'), the sharp 's' is written as 'ß', not 'ss'.",
      explanationTr: "Standart Almanca imla kurallarına göre, uzun seslilerden ve 'au' gibi diftonglardan sonra keskin 's' harfi 'ss' değil 'ß' olarak yazılır.",
      explanationAr: "في قواعد الإملاء القياسية للغة الألمانية، بعد الحركات الطويلة والأصوات المزدوجة مثل ('au')، يُكتب حرف السين الحاد كـ 'ß' وليس 'ss'.",
      explanationUk: "За стандартами німецького правопису, після довгих голосних та дифтонгів ('au') глухий звук 's' позначається літерою 'ß', а не 'ss'."
    },
    {
      id: "ann-3",
      targetText: "Ich freue mich schon sehr auf dein Besuch!",
      correctedText: "Ich freue mich schon sehr auf deinen Besuch!",
      type: "grammar",
      rule: "Präposition mit Akkusativ (Kriterium III)",
      ruleEn: "Preposition with Accusative Case",
      ruleTr: "Akkusativ Alan Edat ve İsmin Hali",
      ruleAr: "حرف الجر مع حالة النصب Akkusativ",
      ruleUk: "Керування прийменника з Akkusativ",
      explanationEn: "The fixed prepositional verb phrase 'sich freuen auf' always takes the Akkusativ case. 'Der Besuch' is masculine, so the possessive article requires the ending '-en' ('deinen Besuch').",
      explanationTr: "'Sich freuen auf' fiil-edat kalıbı her zaman Akkusativ (i hali) gerektirir. 'Der Besuch' eril olduğu için iyelik eki '-en' almalıdır ('deinen Besuch').",
      explanationAr: "التركيب 'sich freuen auf' يتطلب دائماً حالة النصب (Akkusativ). وبما أن 'Besuch' اسم مذكر، فإن أداة الملكية تأخذ اللاحقة '-en' ('deinen Besuch').",
      explanationUk: "Дієслівне сполучення 'sich freuen auf' завжди вимагає знахідного відмінка (Akkusativ). Оскільки 'Besuch' чоловічого роду, присвійний займенник отримує закінчення '-en' ('deinen Besuch')."
    }
  ],
  b1Upgrades: [
    {
      original: "Wenn du hier bist, wir können zusammen einen Ausflug nach Berlin machen. Dort gibt es viele berühmte Museen.",
      upgrade: "Sobald du ankommst, könnten wir gemeinsam einen Tagesausflug nach Berlin unternehmen, da es dort zahlreiche historische Sehenswürdigkeiten gibt.",
      benefitEn: "Uses temporal connector 'Sobald', polite Konjunktiv II 'könnten', B1 verb 'unternehmen', and causal clause with 'da'.",
      benefitTr: "Zaman bağlacı 'Sobald', nazik Konjunktiv II 'könnten', B1 fiili 'unternehmen' ve 'da' neden bağlacı içerir.",
      benefitAr: "يستخدم رابط الزمان 'Sobald'، صيغة اللباقة Konjunktiv II 'könnten'، فعل B1 'unternehmen'، وجملة سببية مع 'da'.",
      benefitUk: "Використовує часовий сполучник 'Sobald', ввічливу форму Konjunktiv II 'könnten', дієслово B1 'unternehmen' та підрядне речення причини з 'da'."
    },
    {
      original: "Für die Reise solltest du unbedingt feste Schuhe und eine warme Jacke mitbringen, weil die Abende manchmal noch frisch sind.",
      upgrade: "Ich empfehle dir dringend, sowohl bequeme Wanderschuhe als auch eine Übergangsjacke einzupacken, da das Wetter abends spürbar abkühlt.",
      benefitEn: "Uses two-part conjunction 'sowohl... als auch', advanced verbs 'einpacken' and 'abkühlen', and the adverb 'spürbar'.",
      benefitTr: "İkili bağlaç 'sowohl... als auch', ileri düzey fiiller 'einpacken' ve 'abkühlen' ile 'spürbar' zarfını içerir.",
      benefitAr: "يستخدم الرابط المزدوج 'sowohl... als auch' وأفعال متقدمة 'einpacken' و 'abkühlen' مع الظرف 'spürbar'.",
      benefitUk: "Використовує парний сполучник 'sowohl... als auch', просунуті дієслова 'einpacken' і 'abkühlen' та прислівник 'spürbar'."
    }
  ],
  pricingTiers: [
    {
      id: "diagnostic",
      nameEn: "Quick Diagnostic",
      nameTr: "Hızlı Teşhis Paketi",
      nameAr: "باقة التقييم السريع",
      nameUk: "Швидка діагностика",
      badgeEn: "Low-Risk Trial",
      badgeTr: "Başlangıç",
      badgeAr: "تجربة سريعة",
      badgeUk: "Пробний старт",
      price: "€4.99",
      periodEn: "Diagnostic Sprint",
      periodTr: "Hızlı Deneme Paketi",
      periodAr: "تجربة تقييم سريعة",
      periodUk: "Швидкий пробний пакет",
      creditsEn: "3 AI Letter Grading Credits",
      creditsTr: "3 Yapay Zeka Mektup Puanlama Kredisi",
      creditsAr: "3 أرصدة لتقييم الرسائل بالذكاء الاصطناعي",
      creditsUk: "3 кредити оцінювання листів ШІ",
      featuresEn: [
        "3 Full AI Practice Letter Evaluations",
        "Official telc B1 (I + II + III × 3) Formula",
        "4 Leitpunkte Completion Check",
        "Syntax & Word Order Breakdown"
      ],
      featuresTr: [
        "3 Tam Yapay Zeka Mektup Değerlendirmesi",
        "Resmi telc B1 (I + II + III × 3) Formülü",
        "4 Leitpunkt Tamamlanma Kontrolü",
        "Sözdizimi ve Cümle Yapısı Analizi"
      ],
      featuresAr: [
        "3 تقييمات كاملة للرسائل بالذكاء الاصطناعي",
        "معادلة telc B1 الرسمية (I + II + III × 3)",
        "التحقق من النقاط الإرشادية الأربع",
        "تحليل بناء الجملة والترتيب النحوي"
      ],
      featuresUk: [
        "3 повні перевірки листів штучним інтелектом",
        "Офіційна формула telc B1 (I + II + III × 3)",
        "Перевірка виконання 4 опорних пунктів",
        "Аналіз порядку слів та синтаксису"
      ],
      ctaTextEn: "Get 3 Letters for €4.99",
      ctaTextTr: "3 Mektup Al (€4.99)",
      ctaTextAr: "احصل على 3 رسائل بـ 4.99€",
      ctaTextUk: "Отримати 3 листи за €4.99"
    },
    {
      id: "standard",
      nameEn: "Standard Pro Pass",
      nameTr: "Standart Pro Kart",
      nameAr: "الباقة الاحترافية القياسية",
      nameUk: "Стандартний Pro абонемент",
      badgeEn: "Most Popular",
      badgeTr: "En Popüler",
      badgeAr: "الأكثر طلباً",
      badgeUk: "Найпопулярніший",
      price: "€29",
      periodEn: "1-Month Intensive Pass",
      periodTr: "1 Aylık Yoğun Hazırlık",
      periodAr: "اشتراك مكثف لمدة شهر",
      periodUk: "Інтенсив на 1 місяць",
      creditsEn: "30 AI Letter Grading Credits",
      creditsTr: "30 Yapay Zeka Mektup Puanlama Kredisi",
      creditsAr: "30 رصيداً لتقييم الرسائل بالذكاء الاصطناعي",
      creditsUk: "30 кредитів оцінювання листів ШІ",
      featuresEn: [
        "Official telc B1 (I + II + III × 3) Scoring",
        "4 Leitpunkte Fulfillment Verification",
        "Line-by-line syntax & grammar breakdown",
        "B1 Vocabulary & Connector Suggestions",
        "Instant 15-second AI evaluation"
      ],
      featuresTr: [
        "Resmi telc B1 (I + II + III × 3) Puanlama Sistemi",
        "4 Leitpunkt Eksiksizlik Doğrulaması",
        "Satır satır cümle yapısı ve dilbilgisi analizi",
        "B1 Kelime ve Bağlaç Zenginleştirme Önerileri",
        "15 saniyede anında yapay zeka değerlendirmesi"
      ],
      featuresAr: [
        "تقييم telc B1 الرسمي بمعادلة (I + II + III × 3)",
        "التحقق من تغطية النقاط الإرشادية الأربع",
        "تحليل تفصيلي سطر بسطر للقواعد وبناء الجملة",
        "اقتراحات لمفردات وروابط المستوى B1",
        "تقييم فوري خلال 15 ثانية بالذكاء الاصطناعي"
      ],
      featuresUk: [
        "Офіційна система оцінювання telc B1 (I + II + III × 3)",
        "Перевірка виконання всіх 4 опорних пунктів",
        "Порядковий розбір синтаксису та граматики",
        "Рекомендації щодо лексики та сполучників B1",
        "Миттєве оцінювання штучним інтелектом за 15 секунд"
      ],
      ctaTextEn: "Get Standard Pro Pass",
      ctaTextTr: "Standart Pro Kartı Al",
      ctaTextAr: "الحصول على الباقة القياسية",
      ctaTextUk: "Отримати стандартний Pro"
    },
    {
      id: "citizenship",
      nameEn: "Citizenship Pass",
      nameTr: "Vatandaşlık Paketi",
      nameAr: "باقة التجنيس الشاملة",
      nameUk: "Пакет для громадянства",
      badgeEn: "Best Value",
      badgeTr: "En Avantajlı",
      badgeAr: "أفضل قيمة",
      badgeUk: "Найкраща ціна",
      price: "€39",
      periodEn: "B1 Pro + LiD Weak-Spot Tracker",
      periodTr: "B1 Pro + LiD Zayıf Nokta Takibi",
      periodAr: "B1 احترافي + متتبع نقاط الضعف في LiD",
      periodUk: "B1 Pro + трекер слабких місць LiD",
      creditsEn: "40 AI Letter Grading Credits",
      creditsTr: "40 Yapay Zeka Mektup Puanlama Kredisi",
      creditsAr: "40 رصيداً لتقييم الرسائل بالذكاء الاصطناعي",
      creditsUk: "40 кредитів оцінювання листів ШІ",
      featuresEn: [
        "Everything in Standard Pro Pass",
        "Leben in Deutschland (LiD) Tracker",
        "Personalized Fehlerheft (Weak-spot deck)",
        "Priority AI Processing"
      ],
      featuresTr: [
        "Standart Pro Karttaki her şey",
        "Leben in Deutschland (LiD) 310 Soru Takipçisi",
        "Kişiselleştirilmiş Hata Defteri (Fehlerheft)",
        "Öncelikli Yapay Zeka İşleme Sırası"
      ],
      featuresAr: [
        "جميع مزايا الباقة القياسية",
        "متتبع اختبار الحياة في ألمانيا (LiD 310)",
        "دفتر الأخطاء الشخصي (Fehlerheft)",
        "معالجة سريعة ذات أولوية بالذكاء الاصطناعي"
      ],
      featuresUk: [
        "Усе, що в стандартному абонементі",
        "Трекер тесту Життя в Німеччині (LiD 310)",
        "Персональний зошит помилок (Fehlerheft)",
        "Пріоритетна обробка запитів штучним інтелектом"
      ],
      ctaTextEn: "Get Citizenship Bundle",
      ctaTextTr: "Vatandaşlık Paketini Al",
      ctaTextAr: "الحصول على باقة التجنيس",
      ctaTextUk: "Отримати пакет для громадянства"
    },
    {
      id: "extended",
      nameEn: "6-Month Pass",
      nameTr: "6 Aylık Geniş Paket",
      nameAr: "اشتراك 6 أشهر الكامل",
      nameUk: "Абонемент на 6 місяців",
      badgeEn: "Long-term Study",
      badgeTr: "Uzun Dönem",
      badgeAr: "دراسة طويلة الأمد",
      badgeUk: "Довгострокове навчання",
      price: "€49",
      periodEn: "6-Month Full Access",
      periodTr: "6 Ay Boyunca Tam Erişim",
      periodAr: "وصول كامل لمدة 6 أشهر",
      periodUk: "Повний доступ на 6 місяців",
      creditsEn: "100 AI Letter Grading Credits",
      creditsTr: "100 Yapay Zeka Mektup Puanlama Kredisi",
      creditsAr: "100 رصيد لتقييم الرسائل بالذكاء الاصطناعي",
      creditsUk: "100 кредитів оцінювання листів ШІ",
      featuresEn: [
        "Everything in Citizenship Pass",
        "100 AI Letter Evaluations",
        "B2/C1 Decks Preview Access",
        "Dedicated Email Support"
      ],
      featuresTr: [
        "Vatandaşlık Paketindeki her şey",
        "100 Yapay Zeka Mektup Değerlendirmesi",
        "B2/C1 Deste Önizleme Erişimi",
        "Öncelikli E-Posta Desteği"
      ],
      featuresAr: [
        "جميع مزايا باقة التجنيس",
        "100 تقييم للرسائل بالذكاء الاصطناعي",
        "وصول استعراضي لمجموعات B2/C1",
        "دعم مباشر عبر البريد الإلكتروني"
      ],
      featuresUk: [
        "Усе, що в пакеті для громадянства",
        "100 перевірок листів штучним інтелектом",
        "Доступ до попереднього перегляду колод B2/C1",
        "Пряма підтримка електронною поштою"
      ],
      ctaTextEn: "Get 6-Month Pass",
      ctaTextTr: "6 Aylık Paketi Al",
      ctaTextAr: "الحصول على باقة 6 أشهر",
      ctaTextUk: "Отримати абонемент на 6 місяців"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SAMPLE_B1_EVALUATION };
}
