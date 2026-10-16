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
      id: "free_lid",
      isFree: true,
      nameEn: "BAMF Einbürgerungstest (LiD)",
      nameTr: "BAMF Vatandaşlık Sınavı (LiD)",
      nameAr: "امتحان التجنيس الألماني (LiD)",
      nameUk: "Тест на громадянство Німеччини (LiD)",
      badgeEn: "100% Free Forever",
      badgeTr: "%100 Ücretsiz",
      badgeAr: "مجاني 100% دائماً",
      badgeUk: "100% Безкоштовно",
      price: "€0",
      periodEn: "Free Public Access",
      periodTr: "Sınırsız Ücretsiz Erişim",
      periodAr: "وصول مجاني دائم",
      periodUk: "Безкоштовний доступ",
      creditsEn: "All 310 BAMF Questions Included",
      creditsTr: "310 BAMF Sorusu Dahil",
      creditsAr: "جميع أسئلة BAMF الـ 310 مشمولة",
      creditsUk: "Усі 310 питань BAMF включено",
      featuresEn: [
        "Official 300 General + 160 State Questions",
        "Authentic 33-Question Exam Simulator (60 min)",
        "Quad-Lingual Translations (DE, EN, TR, AR, UK)",
        "Audio Pronunciation & Offline PWA Mode",
        "Fehlerheft Weak-Spot Review Deck",
        "100% Free Forever — No Card Required"
      ],
      featuresTr: [
        "Resmi 300 Genel + 160 Eyalet Sorusu",
        "Resmi 33 Soruluk Sınav Simülatörü (60 dk)",
        "4 Dilde Anında Çeviriler (DE, EN, TR, AR, UK)",
        "Sesli Okuma ve Çevrimdışı PWA Desteği",
        "Kişisel Hata Defteri (Fehlerheft) Takibi",
        "%100 Ücretsiz — Kredi Kartı Gerekmez"
      ],
      featuresAr: [
        "الأسئلة الرسمية 300 عامة + 160 لكل الولايات",
        "محاكي الامتحان الرسمي 33 سؤالاً (60 دقيقة)",
        "ترجمة بـ 4 لغات (DE, EN, TR, AR, UK)",
        "نطق صوتي ودعم التشغيل دون اتصال PWA",
        "دفتر الأخطاء الشخصي (Fehlerheft)",
        "مجاني 100% للأبد — بدون أي بطاقة بنكية"
      ],
      featuresUk: [
        "Офіційні 300 загальних + 160 земельних питань",
        "Офіційний симулятор іспиту на 33 питання",
        "4-мовні переклади (DE, EN, TR, AR, UK)",
        "Озвучення та робота офлайн через PWA",
        "Зошит помилок (Fehlerheft)",
        "100% безкоштовно — без введення карти"
      ],
      ctaTextEn: "Practice Free Now →",
      ctaTextTr: "Hemen Ücretsiz Başla →",
      ctaTextAr: "ابدأ التدريب مجاناً الآن ←",
      ctaTextUk: "Почати безкоштовно →"
    },
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
      id: "extended",
      nameEn: "Intensive Pass",
      nameTr: "Kapsamlı Hazırlık Paketi",
      nameAr: "الباقة المكثفة الشاملة",
      nameUk: "Інтенсивний повний абонемент",
      badgeEn: "Best Value",
      badgeTr: "En Avantajlı",
      badgeAr: "أفضل قيمة",
      badgeUk: "Найкраща ціна",
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
        "Everything in Standard Pro Pass",
        "100 AI Letter Evaluations",
        "B2/C1 Decks Preview Access",
        "Priority AI Processing Queue",
        "Dedicated VIP Email Support"
      ],
      featuresTr: [
        "Standart Pro Karttaki her şey",
        "100 Yapay Zeka Mektup Değerlendirmesi",
        "B2/C1 Deste Önizleme Erişimi",
        "Öncelikli Yapay Zeka Sırası",
        "Öncelikli VIP E-Posta Desteği"
      ],
      featuresAr: [
        "جميع مزايا الباقة القياسية",
        "100 تقييم للرسائل بالذكاء الاصطناعي",
        "وصول استعراضي لمجموعات B2/C1",
        "معالجة سريعة ذات أولوية بالذكاء الاصطناعي",
        "دعم مباشر ذو أولوية عبر البريد الإلكتروني"
      ],
      featuresUk: [
        "Усе, що в стандартному абонементі",
        "100 перевірок листів штучним інтелектом",
        "Доступ до попереднього перегляду колод B2/C1",
        "Пріоритетна черга обробки запитів",
        "Пряма VIP-підтримка електронною поштою"
      ],
      ctaTextEn: "Get Intensive Pass",
      ctaTextTr: "Kapsamlı Paketi Al",
      ctaTextAr: "الحصول على الباقة المكثفة",
      ctaTextUk: "Отримати інтенсивний абонемент"
    }
  ]
};

const B1_MODEL_LETTERS = [
  {
    id: "marianne",
    titleEn: "Option 1 (Informal): E-Mail to Marianne (Visit to Germany & Excursion)",
    titleTr: "Seçenek 1 (Samimi): Marianne'ye E-Posta (Almanya Gezisi & Planlama)",
    titleAr: "الخيار 1 (غير رسمي): رسالة إلى ماريان (زيارة ألمانيا والأنشطة)",
    titleUk: "Варіант 1 (Неформальний): Лист Маріанні (Поїздка до Німеччини)",
    typeEn: "Informal E-Mail (Friend / Invitation)",
    typeTr: "Samimi E-Posta (Arkadaş / Davet)",
    typeAr: "بريد إلكتروني غير رسمي (صديقة / دعوة)",
    typeUk: "Неформальний електронний лист (Друзі)",
    targetScore: "45 / 45 Pts • Note A (Sehr Gut)",
    wordCount: 168,
    text: `Liebe Marianne,

ich habe mich sehr über deine E-Mail gefreut! Es ist wirklich schön, dass du mich bald in Deutschland besuchen möchtest.

Die beste Jahreszeit für deine Reise ist der Frühling, besonders der Mai. Im Juli und August kann es hier nämlich sehr heiß werden, aber im Frühling ist das Wetter angenehm mild und sonnig.

Wenn du hier bist, können wir zusammen einen Ausflug nach Berlin machen. Dort gibt es viele berühmte Museen und schöne Parks. Außerdem möchte ich dir unseren großen See zeigen, an dem wir spazieren gehen und schwimmen können.

Für die Reise solltest du unbedingt feste Schuhe und eine warme Jacke mitbringen, weil die Abende manchmal noch frisch sind.

Zur Vorbereitung empfehle ich dir, deine Fahrkarten für den Zug möglichst früh online zu buchen, damit sie billiger sind. Lade dir auch die DB-App auf dein Handy herunter.

Ich freue mich schon sehr auf deinen Besuch! Schreib mir bald zurück.

Viele Grüße,
Ali`,
    leitpunkte: [
      { de: "Aktivitäten & Ausflüge (Berlin, Museen, See)", en: "Activities & Trips (Berlin, museums, lake)" },
      { de: "Beste Reisezeit & Wetter (Frühling, Mai)", en: "Best season & weather (Spring, May)" },
      { de: "Kleidung zum Einpacken (Feste Schuhe, Jacke)", en: "Clothes to pack (Sturdy shoes, jacket)" },
      { de: "Reisevorbereitung & Tickets (DB-App, Online-Buchung)", en: "Travel prep & tickets (DB app, early booking)" }
    ],
    examinerRemarksEn: "Full 15/15 across all criteria. Natural informal tone, logical paragraphing with connectors (weil, damit, wenn, außerdem).",
    examinerRemarksTr: "Tüm kriterlerde tam 15/15 puan. Doğal samimi üslup, zengin B1 bağlaçları (weil, damit, wenn, außerdem) ve kusursuz V2 kuralı."
  },
  {
    id: "hotel",
    titleEn: "Option 2 (Formal): Complaint Letter to Hotel Meeresblick (Refund & Defect)",
    titleTr: "Seçenek 2 (Resmi): Hotel Meeresblick Şikayet Mektubu (Geri Ödeme & Mazeret)",
    titleAr: "الخيار 2 (رسمي): رسالة شكوى لفندق Meeresblick (تعويض وعيوب)",
    titleUk: "Варіант 2 (Офіційний): Скарга до готелю Meeresblick (Компенсація)",
    typeEn: "Formal Complaint Letter (Consumer / Travel)",
    typeTr: "Resmi Şikayet Mektubu (Tüketici / Seyahat)",
    typeAr: "رسالة شكوى رسمية (حماية المستهلك / فندقة)",
    typeUk: "Офіційний лист-скарга (Готель)",
    targetScore: "45 / 45 Pts • Note A (Sehr Gut)",
    wordCount: 162,
    text: `Sehr geehrte Damen und Herren,

ich schreibe Ihnen, weil ich mich über meinen Aufenthalt im Hotel Meeresblick vom 10. bis 17. August beschweren möchte.

In Ihrer Anzeige im Internet stand, dass alle Zimmer einen Blick auf das Meer haben und es sehr ruhig ist. Als ich ankam, lag mein Zimmer jedoch direkt über der lauten Hotelküche, und ich konnte das Meer überhaupt nicht sehen.

Außerdem war die Klimaanlage während meines gesamten Aufenthalts kaputt, obwohl es draußen über 30 Grad warm war. An der Rezeption habe ich mich mehrmals beschwert, aber niemand hat das Problem gelöst.

Aus diesen Gründen erwarte ich, dass Sie mir 30 Prozent der Reisekosten zurückerstatten. Bitte überweisen Sie den Betrag innerhalb von zwei Wochen auf mein Bankkonto.

Mit freundlichen Grüßen,
Mehmet Yılmaz`,
    leitpunkte: [
      { de: "Grund des Schreibens & Zimmerlage (Lärm, kein Meerblick)", en: "Reason & room situation (Noise, no sea view)" },
      { de: "Defekte Klimaanlage bei Hitze", en: "Broken A/C during extreme heat" },
      { de: "Erfolglose Beschwerden an Rezeption", en: "Unsuccessful complaints at front desk" },
      { de: "Forderung nach 30% Erstattung & Fristsetzung", en: "30% refund demand with 2-week deadline" }
    ],
    examinerRemarksEn: "Flawless formal business tone. Specific dates, clear demands with deadlines, and proper past tense structures (Perfekt/Präteritum).",
    examinerRemarksTr: "Kusursuz resmi iş dili. Tarihler, somut talepler, 2 haftalık mühlet ve geçmiş zaman yapıları tam puan getirir."
  },
  {
    id: "vhs",
    titleEn: "Option 3 (Semi-formal): Inquiry to Adult Education Center (B2 Intensive Course)",
    titleTr: "Seçenek 3 (Yarı Resmi): Halk Eğitim Kurs Bilgi Talebi (B2 Yoğun Kurs)",
    titleAr: "الخيار 3 (شبه رسمي): استفسار عن دورة لغات متقدمة B2 في VHS",
    titleUk: "Варіант 3 (Напівофіційний): Запит на мовний курс B2 у VHS",
    typeEn: "Semi-formal Inquiry (Education & Schedule)",
    typeTr: "Yarı Resmi Danışma (Eğitim & Ders Saatleri)",
    typeAr: "طلب استفسار شبه رسمي (تعليم وجداول)",
    typeUk: "Напівофіційний запит (Курси)",
    targetScore: "45 / 45 Pts • Note A (Sehr Gut)",
    text: `Sehr geehrte Damen und Herren,

ich interessiere mich sehr für den Deutschkurs B2 an Ihrer Volkshochschule und hätte dazu einige wichtige Fragen.

Vor zwei Monaten habe ich meine telc B1-Prüfung erfolgreich bestanden. Da ich mich beruflich weiterentwickeln möchte und eine feste Anstellung in Deutschland anstrebe, brauche ich nun das B2-Zertifikat. Findet der Intensivkurs am Vormittag oder am Abend statt? Da ich tagsüber als Pflegeassistent arbeite, wäre ein Abendkurs für mich ideal.

Könnten Sie mir bitte auch mitteilen, welche Lehrbücher im Unterricht verwendet werden und wie hoch die Kursgebühren sind? Obwohl ich fleißig spare, ist mein Budget derzeit noch begrenzt. Deshalb möchte ich mich erkundigen, ob die Möglichkeit besteht, die Gebühr in monatlichen Raten zu bezahlen, damit ich die Kosten besser planen kann.

Über eine baldige Auskunft und Zusendung des Anmeldeformulars würde ich mich sehr freuen.

Mit freundlichen Grüßen,
Olena Kovalenko`,
    leitpunkte: [
      { de: "Interesse & beruflicher Hintergrund (B1 bestanden, B2 nötig)", en: "Interest & B1 background for career growth" },
      { de: "Kurszeiten (Vormittag oder Abend)", en: "Schedule & class timing" },
      { de: "Unterrichtsmaterialien & Bücher", en: "Course textbooks & materials" },
      { de: "Kursgebühren & Ratenzahlung", en: "Tuition fees & monthly installments" }
    ],
    examinerRemarksEn: "Polite modal structures using Konjunktiv II ('hätte', 'könnten Sie', 'würde ich mich freuen'). Exemplary semi-formal etiquette.",
    examinerRemarksTr: "Konjunktiv II kibarlık kalıpları ('hätte', 'könnten Sie', 'würde mich freuen') yarı resmi mektupta en yüksek puanı garanti eder."
  },
  {
    id: "bewerbung",
    titleEn: "Option 4 (Formal): Job / Internship Application (Sales / Customer Support)",
    titleTr: "Seçenek 4 (Resmi): İş / Staj Başvuru Mektubu (Satış & Müşteri Hizmetleri)",
    titleAr: "الخيار 4 (رسمي): طلب وظيفة أو تدريب مهني في المبيعات وخدمة العملاء",
    titleUk: "Варіант 4 (Офіційний): Заява про прийом на роботу (Продажі та сервіс)",
    typeEn: "Formal Application (Career & Employment)",
    typeTr: "Resmi İş Başvurusu (Kariyer & İstihdam)",
    typeAr: "طلب عمل رسمي (سيرة ذاتية وتوظيف)",
    typeUk: "Офіційна заява на працевлаштування",
    targetScore: "45 / 45 Pts • Note A (Sehr Gut)",
    wordCount: 172,
    text: `Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihre Stellenanzeige auf dem Online-Portal der Bundesagentur für Arbeit gelesen. Da ich mich beruflich neu orientieren möchte und viel Erfahrung im Kundenkontakt mitbringe, bewerbe ich mich hiermit um die ausgeschriebene Stelle als Mitarbeiter im Verkauf.

In meinem Heimatland habe ich bereits vier Jahre in einem großen Einzelhandelsgeschäft gearbeitet und kenne mich mit Warenpräsentation und Kassenabrechnungen bestens aus. Vor drei Monaten habe ich die telc Deutsch B1-Prüfung mit dem Prädikat „Gut“ bestanden, sodass ich mich problemlos auf Deutsch mit Ihren Kundinnen und Kunden verständigen kann.

Ihr Unternehmen ist mir für hervorragenden Service und freundliche Beratung bekannt. Ich schätze Teamarbeit sehr und bin es gewohnt, auch in stressigen Phasen zuverlässig und freundlich zu arbeiten.

Ab dem 1. des nächsten Monats stehe ich Ihnen flexibel in Vollzeit oder Teilzeit zur Verfügung. Über die Einladung zu einem persönlichen Vorstellungsgespräch würde ich mich sehr freuen.

Mit freundlichen Grüßen,
Samir Mansour`,
    leitpunkte: [
      { de: "Bezug auf Stellenanzeige & Bewerbungsgrund", en: "Reference to job ad & application reason" },
      { de: "Berufserfahrung im Heimatland & Deutschkenntnisse", en: "Prior retail experience & B1 German proficiency" },
      { de: "Stärken & Motivation für das Unternehmen", en: "Key strengths (teamwork, calm under stress) & motivation" },
      { de: "Möglicher Arbeitsbeginn & Bitte um Vorstellungsgespräch", en: "Earliest start date & interview request" }
    ],
    examinerRemarksEn: "Textbook B1 formal job application. Perfect introductory formula ('bewerbe ich mich hiermit um'), clear temporal markers, and professional closing.",
    examinerRemarksTr: "telc B1 için ders kitabı niteliğinde resmi iş başvurusu. 'bewerbe ich mich hiermit um' açılışı, somut tecrübeler ve kibar mülakat talebi."
  },
  {
    id: "wohnung",
    titleEn: "Option 5 (Formal): Apartment Viewing & Heating Defect (Wohnung & Vermieter)",
    titleTr: "Seçenek 5 (Resmi): Ev Kiralama Başvurusu & Kalorifer Arıza Bildirimi",
    titleAr: "الخيار 5 (رسمي): طلب معاينة شقة وإشعار المالك بعطل التدفئة",
    titleUk: "Варіант 5 (Офіційний): Оренда квартири та скарга на несправність опалення",
    typeEn: "Formal Housing Application & Tenant Notice",
    typeTr: "Resmi Ev Kiralama & Kiracı Bildirimi",
    typeAr: "طلب سكن رسمي وإخطار المالك",
    typeUk: "Офіційний лист щодо оренди житла",
    targetScore: "45 / 45 Pts • Note A (Sehr Gut)",
    wordCount: 178,
    text: `Sehr geehrte Frau Müller,

ich schreibe Ihnen heute, da ich mich für die von Ihnen inserierte 2-Zimmer-Wohnung in der Goethestraße 14 interessiere und mich um einen Besichtigungstermin bewerben möchte.

Mein Name ist Tarkan Demir, ich bin 32 Jahre alt und arbeite seit zwei Jahren als festangestellter Ingenieur bei einem Maschinenbauunternehmen in Hamburg. Da mein bisheriger Arbeitsweg sehr lang ist, suche ich eine ruhige und verkehrsgünstig gelegene Wohnung für mich und meine Frau. Wir haben keine Haustiere und sind Nichtraucher.

Alle erforderlichen Unterlagen wie die letzten drei Gehaltsabrechnungen, eine aktuelle Schufa-Auskunft sowie eine Mietschuldenfreiheitsbescheinigung meines bisherigen Vermieters liegen vollständig vor.

Außerdem möchte ich darauf hinweisen, dass in meiner aktuellen Mietwohnung seit drei Tagen die Heizung ausgefallen ist. Obwohl ich den Notdienst bereits verständigt habe, ist die Reparatur noch nicht erfolgt, weshalb ein baldiger Umzug für uns sehr wichtig wäre.

Ich würde mich sehr freuen, wenn Sie mir einen passenden Termin für eine Besichtigung mitteilen könnten.

Mit freundlichen Grüßen,
Tarkan Demir`,
    leitpunkte: [
      { de: "Wohnungsinteresse & Bezug auf Inserat", en: "Apartment interest & listing reference" },
      { de: "Persönliche Vorstellung (Beruf, Haushalt, Haustiere)", en: "Tenant profile (engineer, non-smoker, no pets)" },
      { de: "Vorhandene Bonitätsunterlagen (Schufa, Gehalt)", en: "Complete financial proof documents available" },
      { de: "Dringlichkeit (Heizungsausfall) & Terminbitte", en: "Urgency due to heating defect & viewing appointment" }
    ],
    examinerRemarksEn: "Addresses the exact realities of renting in Germany (Schufa, Gehaltsabrechnung) while maintaining high stylistic elegance.",
    examinerRemarksTr: "Almanya'da ev kiralama gerçeklerini (Schufa, maaş bordrosu, borçsuzluk belgesi) ve kibar hak arama üslubunu kusursuz yansıtır."
  },
  {
    id: "termin",
    titleEn: "Option 6 (Semi-formal): Doctor Appointment Rescheduling / Apology (Terminabsage Arzt)",
    titleTr: "Seçenek 6 (Yarı Resmi): Doktor Randevusu Erteleme & Özür (Terminabsage)",
    titleAr: "الخيار 6 (شبه رسمي): تأجيل موعد طبيب واعتذار لظرف طارئ",
    titleUk: "Варіант 6 (Напівофіційний): Скасування візиту до лікаря через хворобу",
    typeEn: "Semi-formal Rescheduling & Medical Apology",
    typeTr: "Yarı Resmi Randevu Değişikliği & Mazeret",
    typeAr: "اعتذار وتعديل موعد طبي",
    typeUk: "Перенесення медичного прийому",
    targetScore: "45 / 45 Pts • Note A (Sehr Gut)",
    wordCount: 158,
    text: `Sehr geehrte Frau Dr. Schneider,

ich schreibe Ihnen, weil ich meinen vereinbarten Kontrolltermin am kommenden Donnerstag, dem 24. Oktober um 10:30 Uhr, leider kurzfristig absagen muss.

Seit gestern Abend habe ich hohes Fieber und starke Halsschmerzen, sodass ich das Bett zurzeit nicht verlassen kann. Mein Hausarzt hat mir Bettruhe verordnet, damit ich andere Personen in der Praxis nicht anstecke.

Ich entschuldige mich vielmals für die kurzfristige Benachrichtigung und die dadurch entstandenen Unannehmlichkeiten.

Sobald es mir besser geht, möchte ich den Termin gerne nachholen. Wäre es möglich, einen neuen Ausweichtermin in der ersten Novemberwoche, vorzugsweise an einem Dienstag oder Donnerstag vormittags, zu vereinbaren?

Bitte geben Sie mir kurz per E-Mail oder telefonisch Bescheid, ob dieser Zeitraum für Sie passt. Vielen Dank für Ihr Verständnis!

Mit freundlichen Grüßen,
Olena Kovalenko`,
    leitpunkte: [
      { de: "Genauer Termin & Absagegrund (Fieber, Bettruhe)", en: "Specific appointment & cancellation reason (Fever)" },
      { de: "Ausdrückliche Entschuldigung für Kurzfristigkeit", en: "Sincere apology for short-notice cancellation" },
      { de: "Konkreter Vorschlag für Nachholtermin (November)", en: "Specific alternative timeframe proposal (November)" },
      { de: "Bitte um kurze Rückmeldung & Dank", en: "Request for confirmation & polite thanks" }
    ],
    examinerRemarksEn: "Concise, respectful, and crystal-clear. Demonstrates practical everyday communication required for the telc B1 certificate.",
    examinerRemarksTr: "Kısa, net ve son derece saygılı. telc B1 sınav komisyonunun aradığı günlük pratik iletişim becerisini eksiksiz sergiler."
  }
];

if (typeof window !== 'undefined') {
  window.SAMPLE_B1_EVALUATION = SAMPLE_B1_EVALUATION;
  window.B1_MODEL_LETTERS = B1_MODEL_LETTERS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SAMPLE_B1_EVALUATION, B1_MODEL_LETTERS };
}
