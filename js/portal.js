// Global State
let currentLang = 'en';
let currentTheme = localStorage.getItem('deutschlernen_theme') || localStorage.getItem('telc_theme') || localStorage.getItem('site_theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
let currentMdUrl = null;
let currentActiveMaterial = null;
let currentTrack = localStorage.getItem('deutschlernen_track') || 'b1';

// --- Community Feedback Rating Labels & Display ---
const ratingLabels = {
  en: {
    5: "5/5 — Excellent",
    4: "4/5 — Very Good",
    3: "3/5 — Good",
    2: "2/5 — Needs Improvement",
    1: "1/5 — Poor"
  },
  tr: {
    5: "5/5 — Mükemmel",
    4: "4/5 — Çok İyi",
    3: "3/5 — İyi",
    2: "2/5 — Geliştirilmeli",
    1: "1/5 — Zayıf"
  },
  ar: {
    5: "5/5 — ممتاز",
    4: "4/5 — جيد جداً",
    3: "3/5 — جيد",
    2: "2/5 — يحتاج تحسين",
    1: "1/5 — ضعيف"
  },
  uk: {
    5: "5/5 — Відмінно",
    4: "4/5 — Дуже добре",
    3: "3/5 — Добре",
    2: "2/5 — Потребує покращення",
    1: "1/5 — Погано"
  }
};

// Material cards data
const materials = [
  { icon:'📋', title:'Exam Guide', titleTr:'Sınav Rehberi', titleAr:'دليل الامتحان', titleUk:'Посібник до іспиту', desc:'Structure, scoring, strategies', descTr:'Yapı, puanlama, stratejiler', descAr:'الهيكل، درجات التقييم، والاستراتيجيات', descUk:'Структура, оцінювання та стратегії', en:'./docs/en/telc_b1_exam_guide.md', tr:'./docs/tr/telc_b1_exam_guide.md', ar:'./docs/ar/telc_b1_exam_guide.md', uk:'./docs/uk/telc_b1_exam_guide.md', levels: ['B1'] },
  { icon:'📅', title:'1-Month Plan', titleTr:'1 Aylık Plan', titleAr:'خطة الشهر الواحد', titleUk:'План на 1 місяць', desc:'Day-by-day study schedule', descTr:'Gün gün çalışma programı', descAr:'جدول دراسي يومي منظم', descUk:'Щоденний розклад навчання', en:'./docs/en/1_month_study_plan.md', tr:'./docs/tr/1_month_study_plan.md', ar:'./docs/ar/1_month_study_plan.md', uk:'./docs/uk/1_month_study_plan.md', levels: ['B1'] },
  { icon:'📝', title:'Grammar & Vocab', titleTr:'Dil Bilgisi ve Kelime', titleAr:'القواعد والمفردات', titleUk:'Граматика та лексика', desc:'Nebensätze, Perfekt, prepositions + 30 exercises', descTr:'Nebensätze, Perfekt, edatlar + 30 alıştırma', descAr:'الجمل الجانبية، الماضي التام، حروف الجر + 30 تمرين', descUk:'Підрядні речення, Perfekt, прийменники + 30 вправ', en:'./docs/en/review_grammar_vocab.md', tr:'./docs/tr/review_grammar_vocab.md', ar:'./docs/ar/review_grammar_vocab.md', uk:'./docs/uk/review_grammar_vocab.md', levels: ['A2', 'B1', 'B2'] },
  { icon:'📖', title:'Reading & Listening', titleTr:'Okuma ve Dinleme', titleAr:'القراءة والاستماع', titleUk:'Читання та аудіювання', desc:'Synonym recognition, strategies, 6 exercises', descTr:'Eşanlamlı tanıma, stratejiler, 6 alıştırma', descAr:'تمييز المرادفات، الاستراتيجيات، 6 تمارين', descUk:'Розпізнавання синонімів, стратегії, 6 вправ', en:'./docs/en/review_reading_listening.md', tr:'./docs/tr/review_reading_listening.md', ar:'./docs/ar/review_reading_listening.md', uk:'./docs/uk/review_reading_listening.md', levels: ['B1', 'B2'] },
  { icon:'✍️', title:'Writing & Speaking', titleTr:'Yazma ve Konuşma', titleAr:'الكتابة والمحادثة', titleUk:'Письмо та мовлення', desc:'Letter templates, model answer, speaking phrases', descTr:'Mektup şablonları, model cevap, konuşma ifadeleri', descAr:'نماذج الرسائل، إجابات نموذجية، عبارات التحدث', descUk:'Шаблони листів, зразки відповідей, розмовні фрази', en:'./docs/en/review_writing_speaking.md', tr:'./docs/tr/review_writing_speaking.md', ar:'./docs/ar/review_writing_speaking.md', uk:'./docs/uk/review_writing_speaking.md', levels: ['B1', 'B2'] },
  { icon:'🔍', title:'Diagnostic Exam', titleTr:'Tanılama Sınavı', titleAr:'الامتحان التشخيصي', titleUk:'Діагностичний іспит', desc:'Day 1 assessment — find your weak spots', descTr:'1. gün değerlendirmesi — zayıf noktalarınızı bulun', descAr:'تقييم اليوم الأول — اكتشف نقاط ضعفك', descUk:'Оцінювання 1-го дня — визначте слабкі місця', en:'./docs/en/mock_exam_diagnostic.md', tr:'./docs/tr/mock_exam_diagnostic.md', ar:'./docs/ar/mock_exam_diagnostic.md', uk:'./docs/uk/mock_exam_diagnostic.md', levels: ['B1'] },
  { icon:'🎯', title:'Final Mock Exam', titleTr:'Final Sınavı', titleAr:'الامتحان التجريبي النهائي', titleUk:'Фінальний пробний іспит', desc:'Week 4 full simulation under exam conditions', descTr:'4. hafta sınav koşullarında tam simülasyon', descAr:'محاكاة كاملة في الأسبوع 4 في ظروف الامتحان', descUk:'Повна симуляція 4-го тижня в умовах іспиту', en:'./docs/en/mock_exam_final.md', tr:'./docs/tr/mock_exam_final.md', ar:'./docs/ar/mock_exam_final.md', uk:'./docs/uk/mock_exam_final.md', levels: ['B1'] },
  { icon:'🌐', title:'Free Resources', titleTr:'Ücretsiz Kaynaklar', titleAr:'موارد مجانية', titleUk:'Безкоштовні ресурси', desc:'Official tests, YouTube, DW courses, websites', descTr:'Resmi testler, YouTube, DW kursları, web siteleri', descAr:'امتحانات رسمية، يوتيوب، دورات DW، ومواقع مفيدة', descUk:'Офіційні тести, YouTube, курси DW, сайти', en:'./docs/en/example_exams_resources.md', tr:'./docs/tr/example_exams_resources.md', ar:'./docs/ar/example_exams_resources.md', uk:'./docs/uk/example_exams_resources.md', levels: ['A1', 'A2', 'B1', 'B2'] },
  { icon:'📚', title:'Vocab: Verbs', titleTr:'Kelime: Fiiller', titleAr:'المفردات: الأفعال', titleUk:'Лексика: Дієслова', desc:'~500 verbs & adjectives with examples', descTr:'~500 fiil ve sıfat, örneklerle', descAr:'~500 فعل وصفة مع أمثلة', descUk:'~500 дієслів та прикметників із прикладами', en:'./docs/en/vocab_part1_verbs_adjectives.md', tr:'./docs/tr/vocab_part1_fiiller_sifatlar.md', ar:'./docs/ar/vocab_part1_verbs_adjectives.md', uk:'./docs/uk/vocab_part1_verbs_adjectives.md', levels: ['A1', 'A2', 'B1'] },
  { icon:'📚', title:'Vocab: Nouns', titleTr:'Kelime: İsimler', titleAr:'المفردات: الأسماء', titleUk:'Лексика: Іменники', desc:'~550 nouns by exam theme', descTr:'~550 isim, sınav temalarına göre', descAr:'~550 اسم مصنفة حسب مواضيع الامتحان', descUk:'~550 іменників за темами іспиту', en:'./docs/en/vocab_part2_nouns_themes.md', tr:'./docs/tr/vocab_part2_isimler_temalar.md', ar:'./docs/ar/vocab_part2_nouns_themes.md', uk:'./docs/uk/vocab_part2_nouns_themes.md', levels: ['A1', 'A2', 'B1'] },
];

function getMaterialField(m, field) {
  if (!m) return '';
  if (currentLang === 'tr') return m[field + 'Tr'] || m[field] || '';
  if (currentLang === 'ar') return m[field + 'Ar'] || m[field] || '';
  if (currentLang === 'uk') return m[field + 'Uk'] || m[field] || '';
  return m[field + 'En'] || m[field] || '';
}

// Goals & Wishes Configuration
const GOAL_CONFIG = {
  'goal-a1-a2': {
    id: 'goal-a1-a2',
    icon: '🌱',
    nameEn: 'A1–A2 Fundamentals',
    nameTr: 'A1–A2 Temel Başlangıç',
    nameAr: 'الأساسيات A1–A2',
    nameUk: 'Основи A1–A2',
    portalTitleEn: '🌱 Beginner Portal',
    portalTitleTr: '🌱 Başlangıç Portalı',
    portalTitleAr: '🌱 بوابة المبتدئين',
    portalTitleUk: '🌱 Портал початківця',
    planLabelEn: 'A1–A2 Starter Plan',
    planLabelTr: 'A1–A2 Başlangıç Planı',
    planLabelAr: 'خطة المستوى A1–A2',
    planLabelUk: 'Стартовий план A1–A2',
    level: 'A1',
    levels: ['A1', 'A2'],
    badgeEn: '🌱 Goal: A1–A2 Fundamentals & Daily German',
    badgeTr: '🌱 Hedef: A1–A2 Temel ve Günlük Almanca',
    badgeAr: '🌱 الهدف: أساسيات A1–A2 والألمانية اليومية',
    badgeUk: '🌱 Ціль: Основи A1–A2 та повсякденна німецька',
    titleEn: 'Master A1–A2 German Fundamentals',
    titleTr: 'A1–A2 Almanca Temellerinde Uzmanlaşın',
    titleAr: 'أتقن أساسيات اللغة الألمانية A1–A2',
    titleUk: 'Опануйте базові основи німецької A1–A2',
    descEn: 'Build your foundational vocabulary, essential daily verbs, and sentence grammar. Start drilling with our interactive Wortschatz Trainer.',
    descTr: 'Temel kelime dağarcığınızı, en sık kullanılan günlük fiilleri ve cümle yapılarını geliştirin. İnteraktif Wortschatz Trainer ile hemen başlayın.',
    descAr: 'ابنِ مفرداتك الأساسية، أفعال الحياة اليومية وقواعد بناء الجملة. ابدأ التدريب مع مدرب المفردات التفاعلي.',
    descUk: 'Побудуйте базовий словниковий запас, вивчіть щоденні дієслова та граматику. Почніть тренування з інтерактивним Wortschatz Trainer.',
    hintEn: 'Focusing on daily life vocabulary, essential verbs & foundational grammar',
    hintTr: 'Günlük yaşam kelimeleri, temel fiiller ve başlangıç dilbilgisine odaklanıyor',
    hintAr: 'التركيز على مفردات الحياة اليومية، الأفعال الأساسية والقواعد التأسيسية',
    hintUk: 'Фокус на щоденній лексиці, базових дієсловах та основах граматики',
    trainerUrl: 'trainer.html?level=A1'
  },
  'goal-b1': {
    id: 'goal-b1',
    icon: '🏆',
    nameEn: 'telc B1 Exam',
    nameTr: 'telc B1 Sınavı',
    nameAr: 'امتحان telc B1',
    nameUk: 'Іспит telc B1',
    portalTitleEn: '🏆 telc B1 Study Portal',
    portalTitleTr: '🏆 telc B1 Çalışma Portalı',
    portalTitleAr: '🏆 بوابة دراسة telc B1',
    portalTitleUk: '🏆 Портал telc B1',
    planLabelEn: '30-Day B1 Exam Plan',
    planLabelTr: '30 Günlük B1 Sınav Planı',
    planLabelAr: 'خطة 30 يوماً لاجتياز B1',
    planLabelUk: '30-денний план для B1',
    level: 'B1',
    levels: ['B1'],
    badgeEn: '📚 telc Deutsch B1 Exam Preparation & Vocab Master',
    badgeTr: '📚 telc Deutsch B1 Sınav Hazırlığı ve Kelime Antrenörü',
    badgeAr: '📚 التحضير لامتحان telc Deutsch B1 وإتقان المفردات',
    badgeUk: '📚 Підготовка до іспиту telc Deutsch B1 та вивчення лексики',
    titleEn: 'Pass telc Deutsch B1<br>with Confidence',
    titleTr: 'telc Deutsch B1 Sınavını<br>Güvenle Geçin',
    titleAr: 'اجتز امتحان telc Deutsch B1<br>بكل ثقة',
    titleUk: 'Складіть telc Deutsch B1<br>впевнено',
    descEn: 'A complete study portal and 2,000-word interactive trainer for telc Deutsch B1 (180/300 pass threshold). Grammar, smart spaced vocabulary drill, mock exams, and letter templates.',
    descTr: 'telc Deutsch B1 (180/300 barajı) için eksiksiz çalışma portalı ve 2.000 kelimelik interaktif antrenör. Dilbilgisi, akıllı kelime antrenmanı, deneme sınavları ve mektup şablonları.',
    descAr: 'بوابة دراسية متكاملة ومدرب تفاعلي لأكثر من 2000 كلمة لامتحان telc Deutsch B1 (درجة النجاح 180/300). القواعد، تكرار الكلمات الذكي، امتحانات تجريبية، ونماذج رسائل.',
    descUk: 'Повний навчальний портал та інтерактивний тренажер на 2000 слів для telc Deutsch B1 (поріг 180/300). Граматика, розумне повторення слів, пробні іспити та шаблони листів.',
    hintEn: 'Focusing on 30-day curriculum, mock exams & B1 vocabulary',
    hintTr: '30 günlük program, deneme sınavları ve B1 kelimelerine odaklanıyor',
    hintAr: 'التركيز على خطة الـ 30 يوماً، الامتحانات التجريبية ومفردات B1',
    hintUk: 'Фокус на 30-денній програмі, пробних іспитах та лексиці B1',
    trainerUrl: 'trainer.html?level=B1'
  },
  'goal-b2': {
    id: 'goal-b2',
    icon: '💼',
    nameEn: 'B2 Professional',
    nameTr: 'B2 İleri Düzey & İş',
    nameAr: 'B2 للمحترفين والعمل',
    nameUk: 'B2 Професійний',
    portalTitleEn: '💼 B2 Professional Portal',
    portalTitleTr: '💼 B2 Profesyonel Portalı',
    portalTitleAr: '💼 بوابة B2 المهنية',
    portalTitleUk: '💼 Портал B2 Професійний',
    planLabelEn: 'B2 Advanced Study Plan',
    planLabelTr: 'B2 İleri Çalışma Planı',
    planLabelAr: 'خطة الدراسة المتقدمة B2',
    planLabelUk: 'Просунутий план B2',
    level: 'B2',
    levels: ['B2'],
    badgeEn: '💼 Goal: B2 Advanced & Professional German',
    badgeTr: '💼 Hedef: B2 İleri Düzey ve İş Almancası',
    badgeAr: '💼 الهدف: الألمانية المتقدمة والمهنية B2',
    badgeUk: '💼 Ціль: Просунута та ділова німецька B2',
    titleEn: 'Advance to B2 Professional Fluency',
    titleTr: 'B2 İleri Düzey Akıcılığa Ulaşın',
    titleAr: 'تقدم إلى الطلاقة المهنية بمستوى B2',
    titleUk: 'Досягніть професійної вільності B2',
    descEn: 'Prepare for workplace communication, complex texts, advanced connectors, and the specialized B2 vocabulary deck.',
    descTr: 'İş yeri iletişimi, karmaşık metinler, ileri düzey bağlaçlar ve özel B2 kelime destesi ile seviyenizi yükseltin.',
    descAr: 'استعد للتواصل في مكان العمل، النصوص المعقدة، أدوات الربط المتقدمة، ومجموعة مفردات B2 المتخصصة.',
    descUk: 'Підготуйтеся до спілкування на роботі, складних текстів, просунутих сполучників та спеціальної колоди B2.',
    hintEn: 'Focusing on advanced connectors, workplace expressions & B2 deck',
    hintTr: 'İleri düzey bağlaçlar, iş hayatı kalıpları ve B2 kelime destesine odaklanıyor',
    hintAr: 'التركيز على أدوات الربط المتقدمة، تعبيرات بيئة العمل ومجموعة B2',
    hintUk: 'Фокус на складних сполучниках, виразах для роботи та колоді B2',
    trainerUrl: 'trainer.html?level=B2&deck=b2'
  },
  'goal-c1': {
    id: 'goal-c1',
    icon: '🎓',
    nameEn: 'C1 Academic',
    nameTr: 'C1 Akademik',
    nameAr: 'C1 الأكاديمي',
    nameUk: 'C1 Академічний',
    portalTitleEn: '🎓 C1 Academic Portal',
    portalTitleTr: '🎓 C1 Akademik Portalı',
    portalTitleAr: '🎓 بوابة C1 الأكاديمية',
    portalTitleUk: '🎓 Академічний портал C1',
    planLabelEn: 'C1 Academic Study Plan',
    planLabelTr: 'C1 Akademik Çalışma Planı',
    planLabelAr: 'خطة الدراسة الأكاديمية C1',
    planLabelUk: 'Академічний план C1',
    level: 'C1',
    levels: ['C1'],
    badgeEn: '🎓 Goal: C1 Hochschule & Academic Mastery',
    badgeTr: '🎓 Hedef: C1 Üniversite & Akademik Uzmanlık',
    badgeAr: '🎓 الهدف: C1 للجامعة والتمكن الأكاديمي',
    badgeUk: '🎓 Ціль: C1 для університету та академічна майстерність',
    titleEn: 'Master C1 Academic German',
    titleTr: 'C1 Akademik Almancada Ustalaşın',
    titleAr: 'أتقن الألمانية الأكاديمية بمستوى C1',
    titleUk: 'Опануйте академічну німецьку C1',
    descEn: 'High-frequency academic vocabulary for university studies, research papers, and professional settings. Complex sentence structures and scholarly terminology.',
    descTr: 'Üniversite eğitimi, akademik makaleler ve profesyonel ortamlar için yüksek frekanslı akademik kelimeler. Karmaşık cümle yapıları ve bilimsel terminoloji.',
    descAr: 'مفردات أكاديمية عالية التردد للدراسات الجامعية، الأوراق البحثية، والبيئات الاحترافية. تراكيب جمل معقدة ومصطلحات علمية.',
    descUk: 'Високочастотна академічна лексика для навчання в університеті, наукових статей та професійного середовища. Складні структури та наукова термінологія.',
    hintEn: 'Focusing on academic vocabulary, university terminology & research language',
    hintTr: 'Akademik kelimeler, üniversite terminolojisi ve araştırma diline odaklanıyor',
    hintAr: 'التركيز على المفردات الأكاديمية، مصطلحات الجامعة ولغة البحث العلمي',
    hintUk: 'Фокус на академічній лексиці, університетській термінології та мові досліджень',
    trainerUrl: 'trainer.html?level=C1&deck=c1'
  },
  'goal-vocab': {
    id: 'goal-vocab',
    icon: '⚡',
    nameEn: 'Rapid Vocab Trainer',
    nameTr: 'Hızlı Kelime Antrenmanı',
    nameAr: 'مدرب المفردات السريع',
    nameUk: 'Швидкий тренажер слів',
    portalTitleEn: '⚡ Wortschatz Trainer',
    portalTitleTr: '⚡ Kelime Antrenörü',
    portalTitleAr: '⚡ مدرب المفردات',
    portalTitleUk: '⚡ Тренажер слів',
    planLabelEn: 'A1–C1 All Levels Drill',
    planLabelTr: 'A1–C1 Tüm Seviye Antrenmanı',
    planLabelAr: 'تدريب شامل A1–C1',
    planLabelUk: 'Тренування A1–C1 всіх рівнів',
    level: 'ALL',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1'],
    badgeEn: '⚡ Interactive Wortschatz Speed Trainer',
    badgeTr: '⚡ İnteraktif Kelime Hız Antrenörü',
    badgeAr: '⚡ مدرب المفردات التفاعلي السريع',
    badgeUk: '⚡ Інтерактивний швидкісний тренажер слів',
    titleEn: 'Supercharge Your German Vocabulary',
    titleTr: 'Almanca Kelime Dağarcığınızı Güçlendirin',
    titleAr: 'عزز حصيلتك من مفردات اللغة الألمانية',
    titleUk: 'Прокачайте свій словниковий запас німецької',
    descEn: '2,000+ words across A1–C1 CEFR levels with native speech audio, 5 quiz modes, anti-repetition rotation, and streak tracking.',
    descTr: 'A1–C1 CEFR seviyelerinde 2.000+ kelime, sesli telaffuz, 5 test modu, akıllı tekrar algoritması ve seri takibi.',
    descAr: 'أكثر من 2000 كلمة عبر مستويات A1–C1 مع نطق صوتي أصلي، 5 أوضاع اختبار، تكرار ذكي ومتابعة السلسلة اليومية.',
    descUk: '2000+ слів на рівнях A1–C1 із природним озвученням, 5 режимами тестів, розумною ротацією та серіями днів.',
    hintEn: 'Direct speed drill mode with native TTS audio & spaced repetition',
    hintTr: 'Sesli telaffuz ve akıllı algoritma ile doğrudan hızlı test modu',
    hintAr: 'وضع تدريب سرعة مباشر مع نطق صوتي وتكرار متباعد',
    hintUk: 'Режим швидкісного тренування з аудіо та інтервальним повторенням',
    ctaEn: '⚡ Start Vocab Drill →',
    ctaTr: '⚡ Kelime Antrenmanı →',
    ctaAr: '⚡ بدء تدريب المفردات ←',
    ctaUk: '⚡ Почати тренування слів →',
    trainerUrl: 'trainer.html?level=ALL'
  },
  'goal-lid': {
    id: 'goal-lid',
    icon: '🇩🇪',
    nameEn: 'Leben in Deutschland (LiD)',
    nameTr: 'Leben in Deutschland (LiD)',
    nameAr: 'الحياة في ألمانيا (LiD)',
    nameUk: 'Життя в Німеччині (LiD)',
    portalTitleEn: '🇩🇪 LiD Citizenship Portal',
    portalTitleTr: '🇩🇪 LiD Vatandaşlık Portalı',
    portalTitleAr: '🇩🇪 بوابة اختبار الجنسية LiD',
    portalTitleUk: '🇩🇪 Портал тесту на громадянство LiD',
    planLabelEn: 'Official BAMF 310 Questions',
    planLabelTr: 'Resmi BAMF 310 Soru',
    planLabelAr: '310 سؤال رسمي من BAMF',
    planLabelUk: 'Офіційні 310 питань BAMF',
    level: 'B1',
    levels: ['B1'],
    badgeEn: '🇩🇪 Goal: Leben in Deutschland & Citizenship Exam',
    badgeTr: '🇩🇪 Hedef: Leben in Deutschland & Vatandaşlık Sınavı',
    badgeAr: '🇩🇪 الهدف: اختبار الحياة في ألمانيا والجنسية',
    badgeUk: '🇩🇪 Ціль: Життя в Німеччині та тест на громадянство',
    titleEn: 'Pass Leben in Deutschland<br>& Einbürgerungstest',
    titleTr: 'Leben in Deutschland ve<br>Vatandaşlık Sınavını Geçin',
    titleAr: 'اجتز امتحان الحياة في ألمانيا<br>واختبار التجنس',
    titleUk: 'Складіть іспит Життя в Німеччині<br>та тест на громадянство',
    descEn: 'Master all 300 general questions and 160 state-specific questions with quad-lingual translations, official illustrations, and 33-question simulation mode.',
    descTr: 'Tüm 300 genel soru ve 16 eyaletin 160 sorusunu çok dilli çeviriler, resmi sınav resimleri ve 33 soruluk deneme sınavı simülasyonuyla çalışın.',
    descAr: 'تدرب على جميع الأسئلة العامة الـ 300 وأسئلة الولايات الـ 160 مع ترجمات متعددة اللغات وصور رسمية ومحاكاة امتحان من 33 سؤالاً.',
    descUk: 'Опануйте всі 300 загальних питань та 160 питань федеральних земель з перекладами, офіційними ілюстраціями та симуляцією іспиту на 33 питання.',
    hintEn: 'Focusing on 300 BAMF citizenship questions, state questions & exam simulation',
    hintTr: '300 resmi BAMF vatandaşlık sorusu, eyalet soruları ve sınav simülasyonuna odaklanıyor',
    hintAr: 'التركيز على 300 سؤال من BAMF للجنسية وأسئلة الولايات ومحاكاة الامتحان',
    hintUk: 'Фокус на 300 офіційних питаннях BAMF, питаннях земель та симуляції',
    ctaEn: '🇩🇪 Start LiD Drill →',
    ctaTr: '🇩🇪 LiD Sınavına Başla →',
    ctaAr: '🇩🇪 ابدأ اختبار LiD ←',
    ctaUk: '🇩🇪 Почати тест LiD →',
    trainerUrl: '#lid-trainer-section'
  }
};

// Track Switching & Module View Isolation Stats
const HERO_STATS_CONFIG = {
  b1: [
    { val: '10', en: 'Study Modules', tr: 'Modül', ar: 'وحدات دراسية', uk: 'Навчальні модулі' },
    { val: '30', en: 'Day Plan', tr: 'Günlük Plan', ar: 'خطة الأيام', uk: 'Денний план' },
    { val: '2000+', en: 'Vocab Words', tr: 'Kelime', ar: 'كلمات', uk: 'Слів' },
    { val: '180 / 300', en: 'Pass Threshold', tr: 'Geçme Barajı', ar: 'نسبة النجاح', uk: 'Прохідний бал' }
  ],
  vocab: [
    { val: '2,000+', en: 'Vocab Words', tr: 'Kelime', ar: 'كلمة', uk: 'Слів' },
    { val: '5', en: 'Quiz Modes', tr: 'Test Modu', ar: 'أوضاع اختبار', uk: 'Режимів тестів' },
    { val: 'A1–C1', en: '4 CEFR Decks', tr: '4 Deste Seviyesi', ar: '4 مستويات', uk: '4 колоди рівнів' },
    { val: '100%', en: 'Local & Private', tr: 'Cihaz İçi & Gizli', ar: 'محلي وخاص', uk: 'Локально і приватно' }
  ],
  lid: [
    { val: '310', en: 'BAMF Questions', tr: 'BAMF Sorusu', ar: 'أسئلة BAMF', uk: 'Питань BAMF' },
    { val: '16', en: 'German States', tr: 'Eyalet', ar: 'الولايات', uk: 'Федеральних земель' },
    { val: '33', en: 'Timed Simulation', tr: 'Sınav Simülasyonu', ar: 'محاكاة الامتحان', uk: 'Симуляція іспиту' },
    { val: '17 / 33', en: 'Pass Threshold', tr: 'Geçme Barajı', ar: 'نسبة النجاح', uk: 'Прохідний бал' }
  ]
};

function updateHeroStats(trackId) {
  const track = HERO_STATS_CONFIG[trackId] ? trackId : 'b1';
  const stats = HERO_STATS_CONFIG[track];
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

  const container = document.getElementById('hero-stats');
  if (!container) return;

  container.innerHTML = stats.map((item, idx) => {
    const label = item[lang] || item.en;
    return `
      <div class="hero-stat" id="hero-stat-${idx + 1}">
        <div class="val">${item.val}</div>
        <div class="label" data-en="${item.en}" data-tr="${item.tr}" data-ar="${item.ar}" data-uk="${item.uk}">${label}</div>
      </div>
    `;
  }).join('');
}

let currentGoalId = localStorage.getItem('deutschlernen_goal') || 'goal-b1';
let currentGoalLevel = localStorage.getItem('deutschlernen_level') || (GOAL_CONFIG[currentGoalId] ? GOAL_CONFIG[currentGoalId].level : 'B1');
let pendingGoalId = currentGoalId;
let pendingGoalLevel = currentGoalLevel;

const navIds = ['exam-guide', 'study-plan', 'grammar', 'reading', 'writing', 'diagnostic', 'final-exam', 'resources', 'vocab1', 'vocab2'];

function openB1Module(index) {
  closeMarkdown(true);
  if (currentTrack !== 'b1') {
    switchTrack('b1');
  }
  openMaterial(index);
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.remove('open');
}

function navigateToSection(sectionId, trackId) {
  closeMarkdown(true);
  if (trackId && currentTrack !== trackId) {
    switchTrack(trackId);
  }
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.remove('open');

  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 60);
}

function navigateToLiDStateMode() {
  closeMarkdown(true);
  if (currentTrack !== 'lid') {
    switchTrack('lid');
  }
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.remove('open');

  setTimeout(() => {
    const el = document.getElementById('lid-trainer-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const stateFilter = document.querySelector('.lid-filter-pill[data-filter="state"]') || document.getElementById('lid-state-select');
    if (stateFilter) stateFilter.click();
  }, 60);
}

function navigateToLiDSimulation() {
  closeMarkdown(true);
  if (currentTrack !== 'lid') {
    switchTrack('lid');
  }
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.remove('open');

  setTimeout(() => {
    const el = document.getElementById('lid-trainer-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const simBtn = document.getElementById('btn-lid-mode-simulation') || document.querySelector('.lid-mode-btn[data-mode="simulation"]');
    if (simBtn) simBtn.click();
  }, 60);
}

function navigateToExaminerSuite() {
  closeMarkdown(true);
  if (currentTrack !== 'b1') {
    switchTrack('b1');
  }
  const drawer = document.getElementById('schreiben-showcase-drawer');
  if (drawer && drawer.style.display === 'none') {
    if (typeof toggleSchreibenShowcase === 'function') {
      toggleSchreibenShowcase();
    }
  }
  navigateToSection('schreiben-showcase-section', 'b1');
}

window.openB1Module = openB1Module;
window.navigateToSection = navigateToSection;
window.navigateToLiDStateMode = navigateToLiDStateMode;
window.navigateToLiDSimulation = navigateToLiDSimulation;
window.navigateToExaminerSuite = navigateToExaminerSuite;

function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  const header = document.getElementById('sidebar-nav-header');
  if (!nav) return;
  nav.innerHTML = '';

  const track = currentTrack || 'b1';

  // Update header text based on active track and current language
  if (header) {
    const headers = {
      b1: {
        en: 'B1 STUDY MODULES',
        tr: 'B1 ÇALIŞMA MODÜLLERİ',
        ar: 'الوحدات الدراسية B1',
        uk: 'НАВЧАЛЬНІ МОДУЛІ B1'
      },
      vocab: {
        en: 'VOCAB TRAINER SECTIONS',
        tr: 'KELİME ANTRENÖRÜ BÖLÜMLERİ',
        ar: 'أقسام مدرب المفردات',
        uk: 'РОЗДІЛИ ТРЕНАЖЕРА СЛІВ'
      },
      lid: {
        en: 'LEBEN IN DEUTSCHLAND',
        tr: 'LEBEN IN DEUTSCHLAND BÖLÜMLERİ',
        ar: 'أقسام الحياة في ألمانيا',
        uk: 'РОЗДІЛИ ЖИТТЯ В НІМЕЧЧИНІ'
      }
    };
    const h = headers[track] || headers.b1;
    header.setAttribute('data-en', h.en);
    header.setAttribute('data-tr', h.tr);
    header.setAttribute('data-ar', h.ar);
    header.setAttribute('data-uk', h.uk);
    header.textContent = h[currentLang] || h.en;
  }

  if (track === 'vocab') {
    const vocabLinks = [
      {
        icon: '⚡',
        en: '2,000+ Words Drill',
        tr: '2.000+ Kelime Antrenmanı',
        ar: 'تدريب أكثر من 2000 كلمة',
        uk: 'Тренування 2000+ слів',
        action: "navigateToSection('vocab-trainer-banner', 'vocab')"
      },
      {
        icon: '📦',
        en: 'Core 2,000 (A1–B1)',
        tr: 'Temel 2.000 (A1–B1)',
        ar: 'الأساسية 2000 (A1–B1)',
        uk: 'Базова 2000 (A1–B1)',
        href: 'trainer.html?deck=core'
      },
      {
        icon: '💼',
        en: 'Advanced B2 Deck',
        tr: 'İleri B2 Destesi',
        ar: 'مجموعة B2 المتقدمة',
        uk: 'Просунута колода B2',
        href: 'trainer.html?deck=b2'
      },
      {
        icon: '🎓',
        en: 'Academic C1 Deck',
        tr: 'Akademik C1 Destesi',
        ar: 'مجموعة C1 الأكاديمية',
        uk: 'Академічна колода C1',
        href: 'trainer.html?deck=c1'
      },
      {
        icon: '🎯',
        en: '5 Quiz Modes',
        tr: '5 Test Modu',
        ar: '5 أوضاع اختبار',
        uk: '5 режимів тестів',
        action: "navigateToSection('track-view-vocab', 'vocab')"
      },
      {
        icon: '🚀',
        en: 'Launch Full Trainer ↗',
        tr: 'Tam Ekran Antrenör ↗',
        ar: 'تشغيل المدرب الكامل ↗',
        uk: 'Повний тренажер ↗',
        href: 'trainer.html',
        highlight: true
      }
    ];

    vocabLinks.forEach((item) => {
      const title = item[currentLang] || item.en;
      if (item.href) {
        nav.innerHTML += `<a href="${item.href}" class="sidebar-nav-item ${item.highlight ? 'highlight-pill' : ''}" data-en="${item.en}" data-tr="${item.tr}" data-ar="${item.ar}" data-uk="${item.uk}">
          <span class="icon">${item.icon}</span>
          <span>${title}</span>
        </a>`;
      } else {
        nav.innerHTML += `<a href="javascript:void(0)" class="sidebar-nav-item" onclick="${item.action}" data-en="${item.en}" data-tr="${item.tr}" data-ar="${item.ar}" data-uk="${item.uk}">
          <span class="icon">${item.icon}</span>
          <span>${title}</span>
        </a>`;
      }
    });

  } else if (track === 'lid') {
    const lidLinks = [
      {
        icon: '🇩🇪',
        en: '300 BAMF Questions',
        tr: '300 Genel Soru',
        ar: '300 سؤال عام',
        uk: '300 загальних питань',
        action: "navigateToSection('lid-trainer-section', 'lid')"
      },
      {
        icon: '🏛️',
        en: '160 State Questions',
        tr: '160 Eyalet Sorusu',
        ar: '160 سؤال للولايات',
        uk: '160 питань земель',
        action: "navigateToLiDStateMode()"
      },
      {
        icon: '⏱️',
        en: '33-Question Mock Exam',
        tr: '33 Soruluk Deneme',
        ar: 'محاكاة الامتحان (33 سؤالاً)',
        uk: 'Симуляція іспиту (33 питання)',
        action: "navigateToLiDSimulation()"
      },
      {
        icon: '📋',
        en: 'High-Yield Checklist',
        tr: 'Sınav Kontrol Listesi',
        ar: 'قائمة مراجعة الامتحان',
        uk: 'Чеклист до іспиту',
        action: "navigateToSection('lid-checklist-section', 'lid')"
      }
    ];

    lidLinks.forEach((item) => {
      const title = item[currentLang] || item.en;
      nav.innerHTML += `<a href="javascript:void(0)" class="sidebar-nav-item" onclick="${item.action}" data-en="${item.en}" data-tr="${item.tr}" data-ar="${item.ar}" data-uk="${item.uk}">
        <span class="icon">${item.icon}</span>
        <span>${title}</span>
      </a>`;
    });

  } else {
    // b1 track: 10 Study Modules + Quick Tools
    materials.forEach((m, i) => {
      const id = navIds[i];
      const title = getMaterialField(m, 'title');
      nav.innerHTML += `<a href="javascript:void(0)" class="sidebar-nav-item" onclick="openB1Module(${i}); showSection('${id}')" data-en="${m.title}" data-tr="${m.titleTr}" data-ar="${m.titleAr || ''}" data-uk="${m.titleUk || ''}">
        <span class="icon">${m.icon}</span>
        <span>${title}</span>
        <span class="num">${i+1}</span>
      </a>`;
    });

    const b1Tools = [
      {
        icon: '🔍',
        en: 'Sprachbausteine Quiz',
        tr: 'Dil Yapıları Testi',
        ar: 'اختبار تراكيب اللغة',
        uk: 'Тест мовних структур',
        action: "navigateToSection('diagnostic', 'b1')"
      },
      {
        icon: '🗂️',
        en: 'Quick Vocab Drill',
        tr: 'Hızlı Kelime Pratiği',
        ar: 'تدريب سريع للمفردات',
        uk: 'Швидка практика слів',
        action: "navigateToSection('flashcards', 'b1')"
      },
      {
        icon: '✍️',
        en: 'Examiner Suite',
        tr: 'Değerlendirme Paketi',
        ar: 'باقة التقييم',
        uk: 'Комплекс оцінювання',
        action: "navigateToExaminerSuite()"
      },
      {
        icon: '📝',
        en: 'Weak-Spot Notebook',
        tr: 'Hata Defteri (Fehlerheft)',
        ar: 'دفتر معالجة الأخطاء',
        uk: 'Зошит слабких місць',
        action: "navigateToSection('fehlerheft-section', 'b1')"
      }
    ];

    nav.innerHTML += `<div class="sidebar-sub-divider"></div>`;
    b1Tools.forEach((tool) => {
      const title = tool[currentLang] || tool.en;
      nav.innerHTML += `<a href="javascript:void(0)" class="sidebar-nav-item tool-link" onclick="${tool.action}" data-en="${tool.en}" data-tr="${tool.tr}" data-ar="${tool.ar}" data-uk="${tool.uk}">
        <span class="icon">${tool.icon}</span>
        <span>${title}</span>
      </a>`;
    });
  }
}

// Open Material dynamically matching current language
function openMaterial(index) {
  const m = materials[index];
  if (!m) return;
  if (currentTrack !== 'b1') {
    switchTrack('b1');
  }
  const url = m[currentLang] || m.en;
  openMarkdown(url);
}

// Render material cards
function renderCards() {
  const cardsEl = document.getElementById('material-cards');
  if (!cardsEl) return;
  cardsEl.innerHTML = '';

  const activeGoal = GOAL_CONFIG[currentGoalId] || GOAL_CONFIG['goal-b1'];
  const targetLevels = activeGoal.levels || [currentGoalLevel];

  const btnTexts = {
    en: '📄 Open Module &rarr;',
    tr: '📄 Modülü Aç &rarr;',
    ar: '📄 فتح الوحدة &larr;',
    uk: '📄 Відкрити модуль &rarr;'
  };
  const recBadges = {
    en: '⭐ Recommended',
    tr: '⭐ Önerilen',
    ar: '⭐ موصى به',
    uk: '⭐ Рекомендовано'
  };

  materials.forEach((m, i) => {
    const title = getMaterialField(m, 'title');
    const desc = getMaterialField(m, 'desc');
    const btnText = btnTexts[currentLang] || btnTexts.en;
    const isRecommended = m.levels && m.levels.some(lvl => targetLevels.includes(lvl));
    const recText = recBadges[currentLang] || recBadges.en;
    const recBadge = isRecommended 
      ? `<span class="card-badge-recommended" data-en="⭐ Recommended" data-tr="⭐ Önerilen" data-ar="⭐ موصى به" data-uk="⭐ Рекомендовано">${recText}</span>` 
      : '';

    cardsEl.innerHTML += `<div class="card ${isRecommended ? 'recommended' : ''}" onclick="openMaterial(${i})">
      ${recBadge}
      <div class="card-icon">${m.icon}</div>
      <h3 data-en="${m.title}" data-tr="${m.titleTr}" data-ar="${m.titleAr || ''}" data-uk="${m.titleUk || ''}">${title}</h3>
      <p data-en="${m.desc}" data-tr="${m.descTr}" data-ar="${m.descAr || ''}" data-uk="${m.descUk || ''}">${desc}</p>
      <div class="card-links">
        <button class="card-link primary" onclick="event.stopPropagation(); openMaterial(${i});">
          <span data-en="📄 Open Module &rarr;" data-tr="📄 Modülü Aç &rarr;" data-ar="📄 فتح الوحدة &larr;" data-uk="📄 Відкрити модуль &rarr;">${btnText}</span>
        </button>
      </div>
    </div>`;
  });
}

// Quiz data
// Quiz data
const quizData = [
  {
    q: 'Ich bleibe zu Hause, ___ ich krank bin.',
    opts: ['dass','weil','wenn'],
    correct: 1,
    explain: 'weil = because. Reason subclause → verb to end.',
    explainTr: 'weil = çünkü. Neden bildiren yan cümle → fiil en sona gider.',
    explainAr: 'weil = لأن. جملة سببية جانبية → يذهب الفعل إلى النهاية.',
    explainUk: 'weil = тому що. Підрядне речення причини → дієслово йде в кінець.'
  },
  {
    q: 'Ich bin müde. ___ bleibe ich zu Hause.',
    opts: ['Trotzdem','Außerdem','Deshalb'],
    correct: 2,
    explain: 'Deshalb = therefore. Position 1 → verb inversion.',
    explainTr: 'Deshalb = bu yüzden. 1. pozisyondadır → fiil öne gelir (inversiyon).',
    explainAr: 'Deshalb = لذلك. أداة في الموضع الأول → يحدث تقديم للفعل (Inversion).',
    explainUk: 'Deshalb = тому. 1-ша позиція → інверсія (дієслово на 2-му місці).'
  },
  {
    q: 'Gestern ___ ich den ganzen Tag zu Hause ___.',
    opts: ['habe...geblieben','bin...geblieben','habe...gebleibt'],
    correct: 1,
    explain: 'bleiben = to stay. Uses auxiliary sein. Irregular: ist geblieben.',
    explainTr: 'bleiben = kalmak. sein yardımcı fiili alır. Düzensiz: ist geblieben.',
    explainAr: 'bleiben = يمكث. يأخذ الفعل المساعد sein. التصريف الثالث: ist geblieben.',
    explainUk: 'bleiben = залишатися. Вживається з дієсловом sein. Форма: ist geblieben.'
  },
  {
    q: '___ Sie mir bitte helfen?',
    opts: ['Können','Konnten','Könnten'],
    correct: 2,
    explain: 'Könnten = Konjunktiv II. Polite request form.',
    explainTr: 'Könnten = Konjunktiv II. Kibar rica formu.',
    explainAr: 'Könnten = صيغة Konjunktiv II للطلب بأدب واحترام.',
    explainUk: 'Könnten = Konjunktiv II. Ввічлива форма прохання.'
  },
  {
    q: 'Das ist der Mann, ___ gestern bei uns war.',
    opts: ['der','den','dem'],
    correct: 0,
    explain: 'Relativpronomen Nominativ maskulin — der Mann is the subject.',
    explainTr: 'İlgi zamiri Nominativ eril — der Mann özne durumundadır.',
    explainAr: 'ضمير وصل مذكر في حالة الرفع (Nominativ) — الفاعل der Mann.',
    explainUk: 'Відносний займенник Nominativ maskulin — der Mann є підметом.'
  },
  {
    q: 'Ich warte ___ Bus.',
    opts: ['auf dem','auf den','auf der'],
    correct: 1,
    explain: 'warten auf + Akkusativ. den Bus = Akk maskulin.',
    explainTr: 'warten auf + Akkusativ. den Bus = eril Akkusativ.',
    explainAr: 'الفعل warten يأخذ حرف الجر auf + حالة النصب (den Bus).',
    explainUk: 'warten auf + Akkusativ. den Bus = знахідний відмінок.'
  },
  {
    q: 'Sie hat sich ___ die Verspätung entschuldigt.',
    opts: ['über','für','um'],
    correct: 1,
    explain: 'sich entschuldigen für + Akkusativ.',
    explainTr: 'sich entschuldigen für + Akkusativ = bir şey için özür dilemek.',
    explainAr: 'sich entschuldigen für + Akkusativ = يعتذر عن أمر ما.',
    explainUk: 'sich entschuldigen für + Akkusativ = вибачатися за щось.'
  },
  {
    q: 'Ich interessiere mich ___ den Deutschkurs.',
    opts: ['für','um','an'],
    correct: 0,
    explain: 'sich interessieren für + Akkusativ.',
    explainTr: 'sich interessieren für + Akkusativ = bir şeye ilgi duymak.',
    explainAr: 'sich interessieren für + Akkusativ = يهتم بدورة اللغة الألمانية.',
    explainUk: 'sich interessieren für + Akkusativ = цікавитися курсом німецької.'
  },
];

let quizAnswered = JSON.parse(localStorage.getItem('telc_quiz') || '{}');
let sectionsVisited = JSON.parse(localStorage.getItem('telc_sections') || '{}');

function renderQuiz() {
  const quizEl = document.getElementById('quiz-container');
  if (!quizEl) return;
  quizEl.innerHTML = '';

  const isAr = currentLang === 'ar';

  quizData.forEach((q, qi) => {
    let expText = q.explain;
    if (currentLang === 'tr' && q.explainTr) expText = q.explainTr;
    else if (currentLang === 'ar' && q.explainAr) expText = q.explainAr;
    else if (currentLang === 'uk' && q.explainUk) expText = q.explainUk;

    let optsHtml = q.opts.map((o, oi) => {
      let extraClass = '';
      if (quizAnswered[qi] !== undefined) {
        extraClass = ' disabled';
        if (oi === q.correct) extraClass += ' correct';
        else if (quizAnswered[qi] === false) extraClass += ' wrong';
      }
      return `<button class="quiz-opt${extraClass}" onclick="checkAnswer(${qi},${oi})">${String.fromCharCode(97+oi)}) ${o}</button>`;
    }).join('');

    const showExplainClass = quizAnswered[qi] !== undefined ? ' show' : '';

    quizEl.innerHTML += `<div class="quiz-item" id="quiz-${qi}">
      <div class="quiz-q"><b>${qi+1}.</b> ${q.q}</div>
      <div class="quiz-options">${optsHtml}</div>
      <div class="quiz-explain${showExplainClass}" id="explain-${qi}" ${isAr ? 'dir="rtl" style="text-align:right;"' : ''}>✅ ${expText}</div>
    </div>`;
  });

  updateQuizScore();
}

function updateQuizScore() {
  const scoreEl = document.getElementById('quiz-score-display');
  if (!scoreEl) return;
  const correctCount = Object.values(quizAnswered).filter(v => v === true).length;
  scoreEl.textContent = `${correctCount}/${quizData.length}`;
}

function checkAnswer(qi, oi) {
  if (quizAnswered[qi] !== undefined) return;

  const q = quizData[qi];
  const isCorrect = (oi === q.correct);
  quizAnswered[qi] = isCorrect;
  localStorage.setItem('telc_quiz', JSON.stringify(quizAnswered));

  // If incorrect, record in Fehlerheft for targeted review
  if (!isCorrect && typeof recordFehlerheftItem === 'function') {
    const correctOpt = q.opts[q.correct];
    recordFehlerheftItem({
      word: q.q.replace('___', `[${correctOpt}]`),
      meaning: q.explain,
      example: q.q,
      mistakeType: 'grammar'
    });
    if (typeof renderFehlerheftDashboard === 'function') {
      renderFehlerheftDashboard('fehlerheft-container');
    }
  }

  // Update DOM for this quiz item
  const quizEl = document.getElementById(`quiz-${qi}`);
  if (quizEl) {
    const btns = quizEl.querySelectorAll('.quiz-opt');
    btns.forEach((btn, idx) => {
      btn.classList.add('disabled');
      if (idx === q.correct) btn.classList.add('correct');
      else if (idx === oi) btn.classList.add('wrong');
    });
    const expEl = document.getElementById(`explain-${qi}`);
    if (expEl) expEl.classList.add('show');
  }

  updateQuizScore();
  trackSection('diagnostic');
}

// Expose to window for inline onclick handlers
if (typeof window !== 'undefined') {
  window.checkAnswer = checkAnswer;
  window.updateQuizScore = updateQuizScore;
  window.resetQuiz = resetQuiz;
}

// Initial quiz render
renderQuiz();

function resetQuiz() {
  quizAnswered = {};
  localStorage.removeItem('telc_quiz');
  renderQuiz();
}

function trackSection(id) {
  if (id && !sectionsVisited[id]) {
    sectionsVisited[id] = true;
    localStorage.setItem('telc_sections', JSON.stringify(sectionsVisited));
    updateProgress();
  }
}

function updateProgress() {
  // Logic kept for background tracking but UI calls removed
}

// Restore saved quiz state
function restoreQuiz() {
  Object.keys(quizAnswered).forEach(qi => {
    const item = document.getElementById(`quiz-${qi}`);
    if (!item) return;
    const btns = item.querySelectorAll('.quiz-opt');
    const correct = quizData[qi].correct;
    btns.forEach((b, i) => {
      b.classList.add('disabled');
      if (i === correct) b.classList.add('correct');
    });
    document.getElementById(`explain-${qi}`).classList.add('show');
  });
  updateQuizScore();
  updateProgress();
}
restoreQuiz();

// Flashcards
const vocabList = [
  { de: 'arbeiten', tr: 'çalışmak', en: 'to work', ar: 'يعمل', uk: 'працювати', ex: 'Ich arbeite jeden Tag von 8 bis 17 Uhr.' },
  { de: 'wohnen', tr: 'yaşamak / oturmak', en: 'to live / reside', ar: 'يسكن / يعيش', uk: 'жити / мешкати', ex: 'Wir wohnen seit drei Jahren in Berlin.' },
  { de: 'kommen', tr: 'gelmek', en: 'to come', ar: 'يأتي', uk: 'приходити', ex: 'Woher kommen Sie? – Ich komme aus der Türkei.' },
  { de: 'gehen', tr: 'gitmek', en: 'to go', ar: 'يذهب', uk: 'йти / ходити', ex: 'Ich gehe jeden Morgen zu Fuß zur Arbeit.' },
  { de: 'fahren', tr: 'sürmek / gitmek', en: 'to drive / ride', ar: 'يقود / يسافر', uk: 'їхати', ex: 'Ich fahre mit dem Bus zur Schule.' },
  { de: 'machen', tr: 'yapmak', en: 'to do / make', ar: 'يفعل / يصنع', uk: 'робити', ex: 'Was machst du am Wochenende?' },
  { de: 'haben', tr: 'sahip olmak', en: 'to have', ar: 'يملك / لديه', uk: 'мати', ex: 'Ich habe drei Kinder.' },
  { de: 'sein', tr: 'olmak', en: 'to be', ar: 'يكون', uk: 'бути', ex: 'Sie ist Ärztin von Beruf.' },
  { de: 'werden', tr: 'olmak (gelecek)', en: 'to become', ar: 'يصبح', uk: 'ставати', ex: 'Ich möchte Lehrerin werden.' },
  { de: 'brauchen', tr: 'ihtiyaç duymak', en: 'to need', ar: 'يحتاج', uk: 'потребувати', ex: 'Wir brauchen einen neuen Kühlschrank.' },
  { de: 'kaufen', tr: 'satın almak', en: 'to buy', ar: 'يشتري', uk: 'купувати', ex: 'Ich kaufe jeden Tag frisches Gemüse.' },
  { de: 'kochen', tr: 'yemek pişirmek', en: 'to cook', ar: 'يطبخ', uk: 'готувати їжу', ex: 'Meine Mutter kocht sehr lecker.' },
  { de: 'essen', tr: 'yemek (fiil)', en: 'to eat', ar: 'يأكل', uk: 'їсти', ex: 'Was isst du gern?' },
  { de: 'trinken', tr: 'içmek', en: 'to drink', ar: 'يشرب', uk: 'пити', ex: 'Ich trinke jeden Morgen Kaffee.' },
  { de: 'schlafen', tr: 'uyumak', en: 'to sleep', ar: 'ينام', uk: 'спати', ex: 'Ich schlafe immer acht Stunden.' },
  { de: 'lernen', tr: 'öğrenmek', en: 'to learn', ar: 'يتعلم', uk: 'вчити / навчатися', ex: 'Ich lerne seit sechs Monaten Deutsch.' },
  { de: 'schreiben', tr: 'yazmak', en: 'to write', ar: 'يكتب', uk: 'писати', ex: 'Kannst du mir eine E-Mail schreiben?' },
  { de: 'lesen', tr: 'okumak', en: 'to read', ar: 'يقرأ', uk: 'читати', ex: 'Ich lese gern Bücher.' },
  { de: 'sprechen', tr: 'konuşmak', en: 'to speak', ar: 'يتحدث', uk: 'говорити', ex: 'Sprechen Sie Deutsch?' },
  { de: 'hören', tr: 'duymak / dinlemek', en: 'to hear / listen', ar: 'يسمع / يستمع', uk: 'чути / слухати', ex: 'Ich höre gern Musik.' }
];

let currentCard = 0;
function updateCard(immediate = false) {
  const card = document.getElementById('flashcard');
  if (!card) return;
  card.classList.remove('flipped');
  setTimeout(() => {
    const item = vocabList[currentCard];
    document.getElementById('fc-de').textContent = item.de;
    const transEl = document.getElementById('fc-tr');
    const meaning = item[currentLang] || item.en || item.tr || '';
    transEl.textContent = meaning;
    transEl.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.getElementById('fc-ex').textContent = item.ex;
    document.getElementById('fc-count').textContent = `${currentCard + 1} / ${vocabList.length}`;
  }, immediate ? 0 : 150);
}
function flipCard() { document.getElementById('flashcard').classList.toggle('flipped'); }
function nextCard() { currentCard = (currentCard + 1) % vocabList.length; updateCard(); }
function prevCard() { currentCard = currentCard <= 0 ? vocabList.length - 1 : currentCard - 1; updateCard(); }

// Language toggle
// currentLang moved to top

// History API for Android/Browser Back Button
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.mdOpen) {
    // If state says md is open, attempt to open it without pushing state again
    openMarkdown(e.state.url, true);
  } else {
    // Otherwise close the md reader
    closeMarkdown(true);
  }
});

function goBackOrClose() {
  if (history.state && history.state.mdOpen) {
    history.back(); // Triggers popstate to close properly
  } else {
    closeMarkdown();
  }
}

function openMarkdown(url, skipHistory = false) {
  currentMdUrl = url;
  if (!skipHistory) {
    history.pushState({ mdOpen: true, url: url }, '', '#study-module');
  }

  const normalize = u => decodeURIComponent(u || '').replace(/^\.\//, '').replace(/^TELC_B1_Preparation\//, '').replace(/^TELC_B1_Hazırlık\//, '');
  const normUrl = normalize(url);
  currentActiveMaterial = materials.find(m => 
    normalize(m.en) === normUrl || 
    normalize(m.tr) === normUrl ||
    (m.ar && normalize(m.ar) === normUrl) ||
    (m.uk && normalize(m.uk) === normUrl) ||
    decodeURIComponent(m.en) === decodeURIComponent(url) || 
    decodeURIComponent(m.tr) === decodeURIComponent(url) ||
    (m.ar && decodeURIComponent(m.ar) === decodeURIComponent(url)) ||
    (m.uk && decodeURIComponent(m.uk) === decodeURIComponent(url))
  );
  
  const mdView = document.getElementById('md-view');
  const mdContent = document.getElementById('md-content');
  mdView.classList.add('open');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
  
  const loaderText = {
    en: 'Loading content...',
    tr: 'İçerik yükleniyor...',
    ar: 'جاري تحميل المحتوى...',
    uk: 'Завантаження вмісту...'
  };
  mdContent.innerHTML = `<div class="md-loader">${loaderText[currentLang] || loaderText.en}</div>`;
  if (currentLang === 'ar') {
    mdContent.setAttribute('dir', 'rtl');
  } else {
    mdContent.removeAttribute('dir');
  }
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        const altUrl = url.includes('%') ? decodeURIComponent(url) : encodeURI(url);
        if (altUrl !== url) {
          return fetch(altUrl).then(r2 => {
            if (!r2.ok) throw new Error('File not found: ' + url);
            return r2.text();
          });
        }
        throw new Error('File not found');
      }
      return response.text();
    })
    .then(text => {
      // Set marked options for better standard rendering
      marked.setOptions({ breaks: true, gfm: true });
      let heroHtml = '';
      if (currentActiveMaterial) {
        const modIdx = materials.indexOf(currentActiveMaterial) + 1;
        const modTitle = getMaterialField(currentActiveMaterial, 'title');
        const modDesc = getMaterialField(currentActiveMaterial, 'desc');
        const levels = currentActiveMaterial.levels ? currentActiveMaterial.levels.join(' • ') : 'B1';
        heroHtml = `
          <div class="apple-module-hero">
            <div class="apple-hero-pill-row">
              <span class="apple-hero-pill badge-num">${currentActiveMaterial.icon} MODULE ${String(modIdx).padStart(2, '0')}</span>
              <span class="apple-hero-pill badge-level">${levels}</span>
              <span class="apple-hero-pill badge-track">telc Deutsch B1</span>
            </div>
            <h1 class="apple-hero-title">${modTitle}</h1>
            <p class="apple-hero-desc">${modDesc}</p>
            <div class="apple-hero-stats">
              <div class="apple-stat-item">
                <span class="apple-stat-icon">⏱️</span>
                <span class="apple-stat-label">Estimated:</span>
                <strong>20–30 min</strong>
              </div>
              <div class="apple-stat-item">
                <span class="apple-stat-icon">🎯</span>
                <span class="apple-stat-label">CEFR Target:</span>
                <strong>B1 Standard</strong>
              </div>
              <div class="apple-stat-item">
                <span class="apple-stat-icon">📚</span>
                <span class="apple-stat-label">Interactive:</span>
                <strong>Quizzes & Drills</strong>
              </div>
            </div>
          </div>
        `;
      }
      mdContent.innerHTML = heroHtml + marked.parse(text);
      mdView.scrollTop = 0; // scroll to top when opened
      
      // Handle Mermaid charts explicitly
      const mermaidElements = mdContent.querySelectorAll('code.language-mermaid');
      if (mermaidElements.length > 0) {
        mermaid.initialize({ startOnLoad: false, theme: currentTheme === 'dark' ? 'dark' : 'default' });
        mermaidElements.forEach((el, index) => {
          const pre = el.parentElement;
          const mermaidDiv = document.createElement('div');
          mermaidDiv.className = 'mermaid';
          mermaidDiv.textContent = el.textContent;
          pre.replaceWith(mermaidDiv);
        });
        mermaid.run({ nodes: document.querySelectorAll('.mermaid') });
      }

      // Intercept internal MD links to prevent leaving the SPA
      mdContent.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href');
        if (href && href.endsWith('.md')) {
          a.onclick = (e) => {
            e.preventDefault();
            let newTarget = href;
            // Route seamlessly to correct language file
            if (currentLang === 'tr') {
              newTarget = newTarget.replace('/docs/en/', '/docs/tr/')
                                   .replace('TELC_B1_Preparation', 'TELC_B1_Haz%C4%B1rl%C4%B1k')
                                   .replace('TELC_B1_Hazırlık', 'TELC_B1_Haz%C4%B1rl%C4%B1k')
                                   .replace('vocab_part1_verbs_adjectives.md', 'vocab_part1_fiiller_sifatlar.md')
                                   .replace('vocab_part2_nouns_themes.md', 'vocab_part2_isimler_temalar.md');
            } else if (currentLang === 'ar') {
              newTarget = newTarget.replace('/docs/en/', '/docs/ar/')
                                   .replace('vocab_part1_fiiller_sifatlar.md', 'vocab_part1_verbs_adjectives.md')
                                   .replace('vocab_part2_isimler_temalar.md', 'vocab_part2_nouns_themes.md');
            } else if (currentLang === 'uk') {
              newTarget = newTarget.replace('/docs/en/', '/docs/uk/')
                                   .replace('vocab_part1_fiiller_sifatlar.md', 'vocab_part1_verbs_adjectives.md')
                                   .replace('vocab_part2_isimler_temalar.md', 'vocab_part2_nouns_themes.md');
            } else {
              newTarget = newTarget.replace('/docs/tr/', '/docs/en/')
                                   .replace('TELC_B1_Haz%C4%B1rl%C4%B1k', 'TELC_B1_Preparation')
                                   .replace('TELC_B1_Hazırlık', 'TELC_B1_Preparation')
                                   .replace('vocab_part1_fiiller_sifatlar.md', 'vocab_part1_verbs_adjectives.md')
                                   .replace('vocab_part2_isimler_temalar.md', 'vocab_part2_nouns_themes.md');
            }
            openMarkdown(newTarget);
          };
        }
      });

      // Inject Interactive Markdown Quizzes
      mdContent.querySelectorAll('.md-quiz').forEach((el, index) => {
        const qId = `mdq-${index}`;
        const question = el.getAttribute('data-question');
        const options = el.getAttribute('data-options').split('|');
        const answer = parseInt(el.getAttribute('data-answer'));
        const explain = el.getAttribute('data-explain');
        
        let optsHtml = options.map((opt, i) => 
          `<button class="quiz-opt" onclick="checkMdQuiz('${qId}', ${i}, ${answer})">${String.fromCharCode(97+i)}) ${opt}</button>`
        ).join('');

        el.innerHTML = `
          <div class="interactive-quiz-box" style="margin: 24px 0; padding: 20px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px solid var(--border);">
            <div style="font-weight:600; font-size:16px; margin-bottom:16px; color:var(--text-primary);">${question}</div>
            <div class="quiz-options" style="display:flex; flex-direction:column; gap:8px;">${optsHtml}</div>
            <div class="quiz-explain" id="exp-${qId}" style="display:none; margin-top:16px; padding:12px; border-radius:8px; background:rgba(245,158,11,0.05); border-left:4px solid var(--accent-gold); font-size:14px; color:var(--text-secondary);">
              <b>Explanation:</b> ${explain}
            </div>
          </div>
        `;
      });
    })
    .catch(err => {
      mdContent.innerHTML = `<div class="md-loader" style="color:var(--accent-red)">Error loading study material.<br>Make sure you are viewing this via the live GitHub Pages link and not locally.</div>`;
    });
}

window.checkMdQuiz = function(qId, selectedIdx, correctIdx) {
  const box = document.getElementById(qId);
  if (!box) return;
  const btns = box.querySelectorAll('.quiz-opt');
  btns.forEach((b, i) => {
    b.classList.add('disabled');
    b.onclick = null;
    if (i === correctIdx) b.classList.add('correct');
    if (i === selectedIdx && i !== correctIdx) b.classList.add('wrong');
  });
  const exp = document.getElementById(`exp-${qId}`);
  if (exp) {
    exp.style.display = 'block';
    exp.classList.add('animate');
    
    // Fix any potential data-tr elements inside explanation that need quick translation update
    exp.querySelectorAll('[data-en]').forEach(el => {
      el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });
  }
};

function closeMarkdown(skipHistory = false) {
  document.getElementById('md-view').classList.remove('open');
  document.body.style.overflow = '';
  if (!skipHistory && history.state && history.state.mdOpen) {
    history.pushState({ mdOpen: false }, '', window.location.pathname);
  }
}

// Theme Toggle
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('deutschlernen_theme', currentTheme);
  localStorage.setItem('telc_theme', currentTheme);
  localStorage.setItem('site_theme', currentTheme);
  updateThemeIcon();
  
  // Re-render markdown to fix Mermaid diagram themes dynamically
  if (document.getElementById('md-view').classList.contains('open') && currentMdUrl) {
    openMarkdown(currentMdUrl);
  }
}
function updateThemeIcon() {
  document.getElementById('theme-btn').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}
updateThemeIcon();

// Keyboard accessibility: Dismiss modal & markdown reader on Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('md-view').classList.contains('open')) {
      closeMarkdown();
    }
    const fbModal = document.getElementById('feedback-modal');
    if (fbModal && !fbModal.classList.contains('hidden')) {
      closeFeedbackModal();
    }
  }
});

// Day Tracker
let startDate = localStorage.getItem('telc_start_date');
if (!startDate) {
  startDate = new Date().toISOString();
  localStorage.setItem('telc_start_date', startDate);
}
function updateDayTracker() {
  const diffTime = Math.abs(new Date() - new Date(startDate));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  const curDay = Math.min(diffDays, 30);
  let dayText = `Day ${curDay} of 30`;
  if (currentLang === 'tr') dayText = `30'un ${curDay}. Günü`;
  else if (currentLang === 'ar') dayText = `اليوم ${curDay} من 30`;
  else if (currentLang === 'uk') dayText = `День ${curDay} з 30`;
  const dayEl = document.getElementById('day-counter');
  if (dayEl) dayEl.textContent = dayText;
}

// Search Filter
function filterCards() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const cards = document.querySelectorAll('#material-cards .card');
  cards.forEach(card => {
    // Check text of both data-en and data-tr attributes for all elements inside card
    const allTextNode = card.querySelectorAll('[data-en], [data-tr]');
    let fullText = card.textContent.toLowerCase();
    allTextNode.forEach(el => { fullText += ' ' + el.getAttribute('data-en').toLowerCase() + ' ' + el.getAttribute('data-tr').toLowerCase() });
    card.style.display = fullText.includes(query) ? '' : 'none';
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  localStorage.setItem('telc_lang', lang);
  try {
    const vs = JSON.parse(localStorage.getItem('deutschlernen_vocab_settings') || '{}');
    vs.lang = lang;
    localStorage.setItem('deutschlernen_vocab_settings', JSON.stringify(vs));
  } catch(e){}

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`.lang-btn[onclick*="${lang}"]`) || 
                    document.querySelector(`.lang-btn:${lang === 'en' ? 'first-child' : 'last-child'}`);
  if (activeBtn) activeBtn.classList.add('active');
  
  ['en', 'tr', 'ar', 'uk'].forEach(l => {
    const btn = document.getElementById(`fc-btn-${l}`);
    if (btn) {
      if (l === lang) btn.classList.add('primary');
      else btn.classList.remove('primary');
    }
  });

  const entranceLangSelect = document.getElementById('entrance-lang-select');
  if (entranceLangSelect) {
    entranceLangSelect.value = lang;
  }

  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute(`data-${lang}`) || el.getAttribute('data-en');
    if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.hasAttribute('placeholder')) {
      el.placeholder = val;
    } else if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });

  document.querySelectorAll('[data-en-title]').forEach(el => {
    const val = el.getAttribute(`data-${lang}-title`) || el.getAttribute('data-en-title');
    if (val) el.title = val;
  });

  renderCards(); // Re-render material cards with proper Turkish / English titles and buttons
  renderSidebar(); // Re-render sidebar to update titles
  updateDayTracker();
  updateCard(true); // Redraw flashcard to match language instantly
  updateGoalDisplays(); // Update goal labels and badges
  renderQuiz(); // Re-render quiz with translated explanations

  if (typeof renderLiDTrainer === 'function') {
    renderLiDTrainer('lid-trainer-container');
  }
  if (typeof renderLiDChecklist === 'function') {
    renderLiDChecklist('lid-checklist-container');
  }
  if (typeof renderSchreibenShowcase === 'function') {
    renderSchreibenShowcase('schreiben-showcase-container');
  }
  if (typeof renderFehlerheftDashboard === 'function') {
    renderFehlerheftDashboard('fehlerheft-container');
  }

  // Update showcase toggle button label if present
  const drawer = document.getElementById('schreiben-showcase-drawer');
  const toggleBtnSpan = document.getElementById('showcase-toggle-text');
  if (drawer && toggleBtnSpan) {
    const isClosed = drawer.style.display === 'none';
    const openLabels = {
      en: "✕ Close Examiner Suite ▲",
      tr: "✕ Değerlendirme Paketini Kapat ▲",
      ar: "✕ إغلاق باقة التقييم ▲",
      uk: "✕ Закрити комплекс ▲"
    };
    const closedLabels = {
      en: "📝 Open Examiner Suite ▼",
      tr: "📝 Değerlendirme Paketini Aç ▼",
      ar: "📝 فتح باقة التقييم ▼",
      uk: "📝 Відкрити комплекс оцінювання ▼"
    };
    toggleBtnSpan.textContent = isClosed 
      ? (closedLabels[lang] || closedLabels.en)
      : (openLabels[lang] || openLabels.en);
  }

  // Update rating label text to match language
  const starsWrap = document.getElementById('feedback-stars');
  if (starsWrap && typeof updateRatingDisplay === 'function') {
    const currentRating = parseInt(starsWrap.getAttribute('data-rating') || '5', 10);
    updateRatingDisplay(currentRating, false);
  }

  // Reload open markdown if user switches language while reading
  if (document.getElementById('md-view') && document.getElementById('md-view').classList.contains('open') && currentActiveMaterial) {
    const newUrl = currentActiveMaterial[lang] || currentActiveMaterial.en;
    openMarkdown(newUrl, true); // true = skip pushState
  }

  if (typeof updateHeroStats === 'function') {
    updateHeroStats(typeof currentTrack !== 'undefined' ? currentTrack : 'b1');
  }
}

// --- Community Feedback Rating Display ---

function updateRatingDisplay(rating, isPreview = false) {
  const starsWrap = document.getElementById('feedback-stars');
  if (!starsWrap) return;
  const ratingText = document.getElementById('feedback-rating-text');
  const stars = starsWrap.querySelectorAll('span');
  
  stars.forEach((s, idx) => {
    const starVal = idx + 1;
    if (isPreview) {
      s.classList.toggle('hover', starVal <= rating);
    } else {
      s.classList.remove('hover');
      s.classList.toggle('selected', starVal <= rating);
      s.setAttribute('aria-checked', starVal === rating ? 'true' : 'false');
    }
  });

  if (ratingText) {
    const langKey = (typeof ratingLabels !== 'undefined' && ratingLabels[currentLang]) ? currentLang : 'en';
    const dict = (typeof ratingLabels !== 'undefined') ? ratingLabels[langKey] : null;
    ratingText.textContent = (dict && dict[rating]) ? dict[rating] : `${rating}/5`;
  }
}

// Initialize with saved language (persisted across sessions and pages)
const savedLang = localStorage.getItem('site_lang') || localStorage.getItem('telc_lang') || 'en';
setLang(savedLang);

// Active nav tracking
function updateActivePillars(id) {
  const b1Pillar = document.querySelector('.sidebar-pillar-link.pillar-b1');
  const vocabPillar = document.querySelector('.sidebar-pillar-link.pillar-vocab');
  const lidPillar = document.querySelector('.sidebar-pillar-link.pillar-lid');
  if (!b1Pillar || !lidPillar) return;
  if (id === 'lid-trainer-section' || id === 'lid-checklist-section') {
    lidPillar.classList.add('active');
    b1Pillar.classList.remove('active');
    if (vocabPillar) vocabPillar.classList.remove('active');
  } else if (id === 'vocab-trainer-banner' || id === 'track-view-vocab') {
    if (vocabPillar) vocabPillar.classList.add('active');
    b1Pillar.classList.remove('active');
    lidPillar.classList.remove('active');
  } else if (id === 'materials' || id === 'exam-guide' || id === 'home' || id === 'diagnostic' || id === 'flashcards' || id === 'fehlerheft-section' || id === 'schreiben-showcase-section') {
    b1Pillar.classList.add('active');
    lidPillar.classList.remove('active');
    if (vocabPillar) vocabPillar.classList.remove('active');
  }
}

function switchTrack(trackId) {
  closeMarkdown(true);
  currentTrack = trackId;
  try {
    localStorage.setItem('deutschlernen_track', trackId);
  } catch (e) {}

  // Synchronize goal with active track so all titles, badges and sub-nav match
  if (trackId === 'lid') {
    currentGoalId = 'goal-lid';
    currentGoalLevel = 'B1';
  } else if (trackId === 'vocab') {
    currentGoalId = 'goal-vocab';
    currentGoalLevel = 'ALL';
  } else {
    // b1
    if (!currentGoalId || currentGoalId === 'goal-lid' || currentGoalId === 'goal-vocab') {
      currentGoalId = 'goal-b1';
      currentGoalLevel = 'B1';
    }
  }
  try {
    localStorage.setItem('deutschlernen_goal', currentGoalId);
    localStorage.setItem('deutschlernen_level', currentGoalLevel);
  } catch (e) {}

  document.querySelectorAll('.track-tab-btn').forEach(btn => {
    const isThis = btn.id === `tab-track-${trackId}`;
    btn.classList.toggle('active', isThis);
    btn.setAttribute('aria-selected', isThis ? 'true' : 'false');
  });

  const b1View = document.getElementById('track-view-b1');
  const lidView = document.getElementById('track-view-lid');
  const vocabView = document.getElementById('track-view-vocab');
  const vocabBanner = document.getElementById('vocab-trainer-banner');

  const b1Pillar = document.querySelector('.sidebar-pillar-link.pillar-b1');
  const vocabPillar = document.querySelector('.sidebar-pillar-link.pillar-vocab');
  const lidPillar = document.querySelector('.sidebar-pillar-link.pillar-lid');

  if (trackId === 'lid') {
    if (b1View) b1View.style.display = 'none';
    if (vocabView) vocabView.style.display = 'none';
    if (lidView) lidView.style.display = 'block';
    if (vocabBanner && !vocabView) vocabBanner.style.display = 'none';
    if (lidPillar) lidPillar.classList.add('active');
    if (b1Pillar) b1Pillar.classList.remove('active');
    if (vocabPillar) vocabPillar.classList.remove('active');
    if (typeof renderLiDTrainer === 'function') {
      renderLiDTrainer('lid-trainer-container');
    }
    if (typeof renderLiDChecklist === 'function') {
      renderLiDChecklist('lid-checklist-container');
    }
  } else if (trackId === 'vocab') {
    if (b1View) b1View.style.display = 'none';
    if (lidView) lidView.style.display = 'none';
    if (vocabView) {
      vocabView.style.display = 'block';
    } else if (vocabBanner) {
      vocabBanner.style.display = 'block';
    }
    if (vocabPillar) vocabPillar.classList.add('active');
    if (b1Pillar) b1Pillar.classList.remove('active');
    if (lidPillar) lidPillar.classList.remove('active');
  } else {
    // b1
    if (b1View) b1View.style.display = 'block';
    if (lidView) lidView.style.display = 'none';
    if (vocabView) vocabView.style.display = 'none';
    if (vocabBanner && !vocabView) vocabBanner.style.display = 'block';
    if (b1Pillar) b1Pillar.classList.add('active');
    if (vocabPillar) vocabPillar.classList.remove('active');
    if (lidPillar) lidPillar.classList.remove('active');
  }

  updateGoalDisplays();
  updateHeroStats(trackId);
  renderSidebar();

  // Smart smooth scrolling so switched content is immediately seen at first glance
  const switcher = document.getElementById('track-switcher-bar');
  if (switcher) {
    const rect = switcher.getBoundingClientRect();
    if (rect.top < 0 || window.scrollY > 200) {
      switcher.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  try {
    if (window.location.hash !== `#${trackId}`) {
      history.replaceState(null, '', `#${trackId}`);
    }
  } catch (e) {}

  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.remove('open');
}

function showSection(id) {
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
  const active = document.querySelector(`.sidebar-nav a[data-section="${id}"]`) || document.querySelector(`.sidebar-nav a[href="#${id}"]`);
  if (active) active.classList.add('active');
  updateActivePillars(id);
  // Close mobile sidebar
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.remove('open');
}

// Intersection observer for active nav
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
      const match = document.querySelector(`.sidebar-nav a[href="#${id}"]`);
      if (match) match.classList.add('active');
      updateActivePillars(id);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.section[id]').forEach(s => observer.observe(s));

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => {
                reg.update();
                console.log('SW registered and checked for updates');
            })
            .catch(err => console.log('SW failed', err));
    });
}

// --- Heatmap Logic ---
function markStudyDay() {
    const today = new Date().toISOString().slice(0, 10);
    const heatmap = JSON.parse(localStorage.getItem('study_heatmap') || '{}');
    heatmap[today] = (heatmap[today] || 0) + 1;
    localStorage.setItem('study_heatmap', JSON.stringify(heatmap));
    renderHeatmap();
}

function renderHeatmap() {
    const container = document.getElementById('study-heatmap');
    if (!container) return;
    const data = JSON.parse(localStorage.getItem('study_heatmap') || '{}');
    const today = new Date();
    let html = '';
    // Show last 28 days (4 weeks)
    for (let i = 27; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const key = d.toISOString().slice(0, 10);
        const intensity = Math.min(data[key] || 0, 4);
        html += `<div class="heat-square" data-intensity="${intensity}" title="${key}: ${data[key] || 0} sessions"></div>`;
    }
    container.innerHTML = html;
}

// --- Community Feedback Handlers ---

function openFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  
  const statusMsg = document.getElementById('feedback-status-msg');
  if (statusMsg) {
    statusMsg.style.display = 'none';
    statusMsg.textContent = '';
  }

  const starsWrap = document.getElementById('feedback-stars');
  if (starsWrap) {
    const currentRating = parseInt(starsWrap.getAttribute('data-rating') || '5', 10);
    updateRatingDisplay(currentRating, false);
  }

  const locInput = document.getElementById('feedback-location');
  if (locInput && window.FirebaseService) {
    locInput.value = window.FirebaseService.detectLocation();
  }
}

function closeFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  if (modal) modal.classList.add('hidden');
}

function initFeedbackForm() {
  const starsWrap = document.getElementById('feedback-stars');
  if (starsWrap) {
    const stars = starsWrap.querySelectorAll('span');
    stars.forEach(star => {
      const starVal = parseInt(star.getAttribute('data-star') || '5', 10);
      
      // Click event
      star.addEventListener('click', () => {
        starsWrap.setAttribute('data-rating', starVal);
        updateRatingDisplay(starVal, false);
      });

      // Keyboard accessibility
      star.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') {
          e.preventDefault();
          starsWrap.setAttribute('data-rating', starVal);
          updateRatingDisplay(starVal, false);
        }
      });

      // Hover preview
      star.addEventListener('mouseenter', () => {
        updateRatingDisplay(starVal, true);
      });
    });

    // Mouseleave restores selected rating
    starsWrap.addEventListener('mouseleave', () => {
      const currentRating = parseInt(starsWrap.getAttribute('data-rating') || '5', 10);
      updateRatingDisplay(currentRating, false);
    });

    // Initial render
    const initialRating = parseInt(starsWrap.getAttribute('data-rating') || '5', 10);
    updateRatingDisplay(initialRating, false);
  }

  const modal = document.getElementById('feedback-modal');
  if (modal) {
    // Backdrop click to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeFeedbackModal();
    });
  }

  const form = document.getElementById('feedback-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const statusMsg = document.getElementById('feedback-status-msg');
      const submitBtn = document.getElementById('btn-submit-feedback');
      const username = (document.getElementById('feedback-username')?.value || '').trim() || 'Anonymous';
      const location = (document.getElementById('feedback-location')?.value || '').trim();
      const category = document.getElementById('feedback-category')?.value || 'General';
      const rating = parseInt(document.getElementById('feedback-stars')?.getAttribute('data-rating') || '5', 10);
      const message = (document.getElementById('feedback-message')?.value || '').trim();

      if (!message) return;

      if (submitBtn) submitBtn.disabled = true;
      try {
        if (window.FirebaseService) {
          await window.FirebaseService.submitFeedback({ username, location, category, rating, message });
        }
        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.className = 'auth-notice-msg success';
          const successMsgs = {
            en: "Thank you! Your feedback has been received.",
            tr: "Teşekkür ederiz! Geri bildiriminiz başarıyla iletildi.",
            ar: "شكراً لك! تم استلام ملاحظاتك بنجاح.",
            uk: "Дякуємо! Ваш відгук успішно отримано."
          };
          statusMsg.textContent = successMsgs[currentLang] || successMsgs.en;
        }
        form.reset();
        if (starsWrap) {
          starsWrap.setAttribute('data-rating', '5');
          updateRatingDisplay(5, false);
        }
        setTimeout(() => {
          closeFeedbackModal();
          if (statusMsg) statusMsg.style.display = 'none';
          if (submitBtn) submitBtn.disabled = false;
        }, 1800);
      } catch (err) {
        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.className = 'auth-notice-msg error';
          const failMsgs = {
            en: "Submission failed",
            tr: "Gönderim başarısız oldu",
            ar: "فشل إرسال الملاحظات",
            uk: "Не вдалося надіслати"
          };
          statusMsg.textContent = err.message || (failMsgs[currentLang] || failMsgs.en);
        }
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }
}

// Entrance Goal Selection & Level Management
function openGoalModal() {
  const modal = document.getElementById('entrance-modal');
  if (!modal) return;
  modal.style.display = 'flex';
  requestAnimationFrame(() => {
    modal.classList.add('open');
  });

  pendingGoalId = currentGoalId;
  pendingGoalLevel = currentGoalLevel;
  selectGoalCard(pendingGoalId, pendingGoalLevel, false);
}

function closeGoalModal() {
  const modal = document.getElementById('entrance-modal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 250);
}

function selectGoalCard(goalId, defaultLevel, updatePendingLevel = true) {
  pendingGoalId = goalId;
  if (updatePendingLevel && defaultLevel) {
    pendingGoalLevel = defaultLevel;
    const levelSelect = document.getElementById('entrance-level-select');
    if (levelSelect) levelSelect.value = defaultLevel;
  }
  document.querySelectorAll('.goal-card').forEach(c => {
    const isThis = c.getAttribute('data-goal-id') === goalId;
    c.classList.toggle('active', isThis);
    c.setAttribute('aria-checked', isThis ? 'true' : 'false');
  });
}

function onEntranceLevelChange(levelVal) {
  pendingGoalLevel = levelVal;
}

function applyGoalSelection() {
  currentGoalId = pendingGoalId || 'goal-b1';
  currentGoalLevel = pendingGoalLevel || 'B1';
  
  localStorage.setItem('deutschlernen_goal', currentGoalId);
  localStorage.setItem('deutschlernen_level', currentGoalLevel);

  if (currentGoalId === 'goal-vocab') {
    localStorage.setItem('deutschlernen_track', 'vocab');
    currentTrack = 'vocab';
    closeGoalModal();
    updateGoalDisplays();
    renderSidebar();
    switchTrack('vocab');
    return;
  }

  if (currentGoalId === 'goal-lid') {
    localStorage.setItem('deutschlernen_track', 'lid');
    currentTrack = 'lid';
    closeGoalModal();
    updateGoalDisplays();
    renderSidebar();
    switchTrack('lid');
    if (typeof getStoredLiDState === 'function' && !getStoredLiDState()) {
      setTimeout(() => {
        if (typeof openLiDStateModal === 'function') openLiDStateModal();
      }, 500);
    }
    return;
  }

  localStorage.setItem('deutschlernen_track', 'b1');
  currentTrack = 'b1';
  switchTrack('b1');
  updateGoalDisplays();
  renderSidebar(); // Re-render sidebar in case goal or language was adjusted
  renderCards(); // Re-render material cards to reflect recommendation badges
  closeGoalModal();
}

function getGoalText(goal, keyPrefix) {
  if (!goal) return '';
  const langKey = currentLang.charAt(0).toUpperCase() + currentLang.slice(1);
  return goal[keyPrefix + langKey] || goal[keyPrefix + 'En'] || goal[keyPrefix + 'Tr'] || '';
}

function updateGoalDisplays() {
  const goal = GOAL_CONFIG[currentGoalId] || GOAL_CONFIG['goal-b1'];
  const goalName = getGoalText(goal, 'name');
  const goalHint = getGoalText(goal, 'hint');

  const prefixes = {
    goal: { en: 'Goal:', tr: 'Hedef:', ar: 'الهدف:', uk: 'Ціль:' },
    target: { en: 'Target Level:', tr: 'Hedef Seviye:', ar: 'المستوى المستهدف:', uk: 'Цільовий рівень:' },
    activeTrack: { en: 'Active Track:', tr: 'Aktif Program:', ar: 'المسار النشط:', uk: 'Активний курс:' }
  };

  const pGoal = prefixes.goal[currentLang] || prefixes.goal.en;
  const pTarget = prefixes.target[currentLang] || prefixes.target.en;
  const pActiveTrack = prefixes.activeTrack[currentLang] || prefixes.activeTrack.en;

  const allLevelLabels = {
    en: 'All Levels (A1–C1)',
    tr: 'Tüm Seviyeler (A1–C1)',
    ar: 'جميع المستويات (A1–C1)',
    uk: 'Усі рівні (A1–C1)'
  };
  const levelDisplay = currentGoalLevel === 'ALL' 
    ? (allLevelLabels[currentLang] || allLevelLabels.en) 
    : currentGoalLevel;

  // Header chip
  const topGoalIcon = document.getElementById('current-goal-icon');
  const topGoalText = document.getElementById('current-goal-text');
  if (topGoalIcon) topGoalIcon.textContent = goal.icon;
  if (topGoalText) topGoalText.textContent = `${pGoal} ${goalName}`;

  // Sidebar header title & plan label (dynamic per goal)
  const sidebarPortalTitle = document.getElementById('sidebar-portal-title');
  const sidebarPlanLabel = document.getElementById('sidebar-plan-label');
  if (sidebarPortalTitle) {
    const ptKey = 'portalTitle' + currentLang.charAt(0).toUpperCase() + currentLang.slice(1);
    sidebarPortalTitle.textContent = goal[ptKey] || goal.portalTitleEn || goal.icon + ' ' + goalName;
  }
  if (sidebarPlanLabel) {
    const plKey = 'planLabel' + currentLang.charAt(0).toUpperCase() + currentLang.slice(1);
    sidebarPlanLabel.textContent = goal[plKey] || goal.planLabelEn || '';
  }

  // Sidebar badge
  const sidebarGoalName = document.getElementById('sidebar-goal-name');
  const sidebarGoalSub = document.getElementById('sidebar-goal-sub');
  if (sidebarGoalName) sidebarGoalName.textContent = goalName;
  if (sidebarGoalSub) {
    sidebarGoalSub.textContent = `${pTarget} ${levelDisplay}`;
  }

  // Hero section badge & title
  const heroBadge = document.getElementById('hero-active-goal-badge');
  const heroTitle = document.getElementById('hero-main-title');
  const heroDesc = document.getElementById('hero-main-desc');
  if (heroBadge) heroBadge.innerHTML = getGoalText(goal, 'badge');
  if (heroTitle) heroTitle.innerHTML = getGoalText(goal, 'title');
  if (heroDesc) heroDesc.innerHTML = getGoalText(goal, 'desc');

  // Hero goal action strip
  const stripTitle = document.getElementById('hero-goal-strip-title');
  const stripHint = document.getElementById('hero-goal-strip-hint');
  const stripIcon = document.getElementById('hero-goal-strip-icon');
  const stripTrainerLink = document.getElementById('hero-goal-trainer-link');

  if (stripTitle) stripTitle.textContent = `${pActiveTrack} ${goalName}`;
  if (stripHint) stripHint.textContent = goalHint;
  if (stripIcon) stripIcon.textContent = goal.icon;
  if (stripTrainerLink) {
    if (goal.id === 'goal-lid') {
      stripTrainerLink.href = '#lid-trainer-section';
      stripTrainerLink.onclick = (e) => {
        e.preventDefault();
        switchTrack('lid');
        const lidEl = document.getElementById('lid-trainer-section');
        if (lidEl) lidEl.scrollIntoView({ behavior: 'smooth' });
      };
    } else if (goal.id === 'goal-vocab') {
      stripTrainerLink.href = goal.trainerUrl || `trainer.html?level=${currentGoalLevel}`;
      stripTrainerLink.onclick = () => {
        try {
          localStorage.setItem('deutschlernen_track', 'vocab');
        } catch (e) {}
      };
    } else {
      stripTrainerLink.href = goal.trainerUrl || `trainer.html?level=${currentGoalLevel}`;
      stripTrainerLink.onclick = null;
    }
    const ctaText = getGoalText(goal, 'cta');
    if (ctaText) {
      stripTrainerLink.innerHTML = `<span>${ctaText}</span>`;
    }
  }
}

function initEntranceGoal() {
  const storedGoal = localStorage.getItem('deutschlernen_goal');
  const storedTrack = localStorage.getItem('deutschlernen_track');
  const hash = (window.location.hash || '').toLowerCase();

  let targetTrack = 'b1';
  if (hash === '#lid' || hash === '#lid-trainer-section' || hash === '#track-view-lid' || storedGoal === 'goal-lid' || storedTrack === 'lid') {
    targetTrack = 'lid';
  } else if (hash === '#vocab' || hash === '#vocab-trainer-banner' || hash === '#track-view-vocab' || storedGoal === 'goal-vocab' || storedTrack === 'vocab') {
    targetTrack = 'vocab';
  } else if (hash === '#b1' || hash === '#materials' || hash === '#track-view-b1' || storedTrack === 'b1') {
    targetTrack = 'b1';
  } else if (storedGoal && GOAL_CONFIG[storedGoal]) {
    targetTrack = (storedGoal === 'goal-lid') ? 'lid' : ((storedGoal === 'goal-vocab') ? 'vocab' : 'b1');
  }

  // Pre-sync track and goal before initial render so no flash of other track
  currentTrack = targetTrack;
  if (targetTrack === 'lid') {
    currentGoalId = 'goal-lid';
    currentGoalLevel = 'B1';
  } else if (targetTrack === 'vocab') {
    currentGoalId = 'goal-vocab';
    currentGoalLevel = 'ALL';
  } else {
    currentGoalId = (storedGoal && storedGoal.startsWith('goal-') && storedGoal !== 'goal-lid' && storedGoal !== 'goal-vocab') ? storedGoal : 'goal-b1';
    currentGoalLevel = (GOAL_CONFIG[currentGoalId] ? GOAL_CONFIG[currentGoalId].level : 'B1');
  }

  switchTrack(targetTrack);

  if (!storedGoal && !hash) {
    // Show entrance modal on first visit
    setTimeout(() => {
      openGoalModal();
    }, 400);
  }
}

window.addEventListener('hashchange', () => {
  const hash = (window.location.hash || '').toLowerCase();
  if (hash === '#lid' || hash === '#lid-trainer-section') {
    switchTrack('lid');
  } else if (hash === '#vocab' || hash === '#vocab-trainer-banner') {
    switchTrack('vocab');
  } else if (hash === '#b1' || hash === '#materials') {
    switchTrack('b1');
  }
});

// Initialize components
initFeedbackForm();
initEntranceGoal();

if (typeof renderSchreibenShowcase === 'function') {
  renderSchreibenShowcase('schreiben-showcase-container');
}

if (typeof renderLiDTrainer === 'function') {
  renderLiDTrainer('lid-trainer-container');
}

if (typeof renderLiDChecklist === 'function') {
  renderLiDChecklist('lid-checklist-container');
}

if (typeof renderFehlerheftDashboard === 'function') {
  renderFehlerheftDashboard('fehlerheft-container');
}

function toggleSchreibenShowcase(forceOpen = null) {
  const drawer = document.getElementById('schreiben-showcase-drawer');
  const toggleBtnSpan = document.getElementById('showcase-toggle-text');
  if (!drawer) return;

  const isClosed = drawer.style.display === 'none' || drawer.classList.contains('showcase-drawer-collapsed');
  const shouldOpen = (forceOpen !== null) ? forceOpen : isClosed;

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
  const openLabels = {
    en: "✕ Close Examiner Suite ▲",
    tr: "✕ Değerlendirme Paketini Kapat ▲",
    ar: "✕ إغلاق باقة التقييم ▲",
    uk: "✕ Закрити комплекс ▲"
  };
  const closedLabels = {
    en: "📝 Open Examiner Suite ▼",
    tr: "📝 Değerlendirme Paketini Aç ▼",
    ar: "📝 فتح باقة التقييم ▼",
    uk: "📝 Відкрити комплекс оцінювання ▼"
  };

  if (shouldOpen) {
    drawer.style.display = 'block';
    drawer.classList.remove('showcase-drawer-collapsed');
    if (toggleBtnSpan) toggleBtnSpan.textContent = openLabels[lang] || openLabels.en;
    if (typeof renderSchreibenShowcase === 'function') {
      renderSchreibenShowcase('schreiben-showcase-container');
    }
  } else {
    drawer.style.display = 'none';
    drawer.classList.add('showcase-drawer-collapsed');
    if (toggleBtnSpan) toggleBtnSpan.textContent = closedLabels[lang] || closedLabels.en;
  }
}
function initUrlParamsAndCheckoutReturn() {
  if (typeof window === 'undefined' || !window.location || !window.location.search) return;
  try {
    const params = new URLSearchParams(window.location.search);
    const checkoutStatus = params.get('checkout') || params.get('order');
    const tier = params.get('tier') || params.get('plan');
    const voucher = params.get('voucher') || params.get('license');
    const openPro = params.get('pro') || params.get('pricing');

    let cleaned = false;

    if (checkoutStatus === 'success' || checkoutStatus === 'completed') {
      const tierId = tier || 'standard';
      if (typeof window.confirmInstantDemoOrder === 'function') {
        window.confirmInstantDemoOrder(tierId);
      } else if (typeof window.grantLetterCredits === 'function') {
        window.grantLetterCredits(30, tierId);
      }
      cleaned = true;
    }

    if (voucher && typeof window.redeemAccessCode === 'function') {
      window.redeemAccessCode(voucher);
      cleaned = true;
    }

    if ((openPro === '1' || openPro === 'true' || openPro === 'open') && typeof window.openProPricingModal === 'function') {
      window.openProPricingModal();
      cleaned = true;
    }

    if (cleaned && window.history && window.history.replaceState) {
      const cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  } catch (e) {
    console.warn("Could not parse URL query parameters:", e);
  }
}

function initPrivacyBanner() {
  if (typeof window === 'undefined') return;
  const acknowledged = localStorage.getItem('deutschlernen_privacy_acknowledged');
  const banner = document.getElementById('privacy-consent-banner');
  if (!acknowledged && banner) {
    banner.style.display = 'block';
  }
}

function dismissPrivacyBanner() {
  localStorage.setItem('deutschlernen_privacy_acknowledged', 'true');
  const banner = document.getElementById('privacy-consent-banner');
  if (banner) {
    banner.style.opacity = '0';
    setTimeout(() => { banner.style.display = 'none'; }, 250);
  }
}

// Run checkout return & URL parameter handler on startup
initUrlParamsAndCheckoutReturn();
initPrivacyBanner();

if (typeof window !== 'undefined') {
  window.toggleSchreibenShowcase = toggleSchreibenShowcase;
  window.initUrlParamsAndCheckoutReturn = initUrlParamsAndCheckoutReturn;
  window.dismissPrivacyBanner = dismissPrivacyBanner;
  window.initPrivacyBanner = initPrivacyBanner;
}



