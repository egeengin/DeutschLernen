/**
 * Interactive Render Engine for telc B1 Schreiben & Sprechen Suite
 * Grounded strictly in official telc Deutsch B1 examination guidelines.
 * Features full Quad-Lingual localization across English (en), Turkish (tr), Arabic (ar), and Ukrainian (uk).
 */

let currentShowcaseTab = 'showcase';

const SHOWCASE_I18N = {
  en: {
    tabSample: "✨ Pre-Computed Sample Report",
    tabLive: "⚡ Live AI Letter Grader (Pro)",
    tabSpeaking: "🗣️ Sprechen Teil 3 Simulator",
    badgeOfficial: "✨ Official telc B1 Sample Evaluation",
    titleReport: "📝 telc Deutsch B1 Schreiben — Interactive Examiner Report",
    descReport: "This report demonstrates how the <strong>Pro AI Exam Grader</strong> evaluates student letters line-by-line using the official <strong>telc B1 3-Criteria Rating System</strong> (Max 45 points).",
    fromLabel: "From:",
    subjectLabel: "Subject:",
    leitpunkteHeader: "📋 telc B1 Leitpunkte Check (4 Guided Points Required):",
    pointLabel: "Point",
    annotatedHeader: "📜 Annotated B1 Student Letter",
    annotatedHint: "Hover or tap highlighted text to view examiner corrections & rule references",
    legendSyntax: "Word Order / Inversion",
    legendSpelling: "Orthography / Eszett",
    legendGrammar: "Case / Grammar",
    rubricHeader: "📊 Official telc B1 Rubric & Calculation",
    rubricFormulaHint: "Formula: (Criterion I + II + III) × 3 = Final Score / 45",
    ptsMax: "/ 45 pts",
    passThresholdLabel: "Pass Threshold Met (≥27 pts)",
    scoreLabel: "Score",
    ptsRaw: "pts raw",
    finalPts: "pts",
    telcRuleNote: "💡 <strong>telc B1 Rule ('Primat der Verständlichkeit'):</strong> Grammar errors that do not hinder understanding are graded Score B (3 pts). Full Score A (5 pts) requires zero systematic syntax errors and natural B1 register.",
    upgradesHeader: "💡 Examiner B1 Sentence Upgrades",
    upgradesSub: "Transforming basic expressions into high-scoring B1 formal structures:",
    upgradeOriginal: "Original Student Phrase:",
    upgradeRecommended: "✨ B1 Examiner Recommendation:",
    upgradeWhy: "💡 Why this scores higher:",
    ctaKicker: "🚀 UNLOCK THE AI EXAM GRADER",
    ctaTitle: "Want instant, line-by-line feedback on your OWN practice letters?",
    ctaDesc: "Get authentic telc B1 rubric scoring, syntax fixes, and personalized weak-spot tracking in 15 seconds.",
    ctaBadge1: "⚡ Instant 15s Feedback",
    ctaBadge2: "🎯 Official telc B1 Criteria (I + II + III × 3)",
    ctaBadge3: "🔒 100% Secure & Private",
    ctaBtn: "⚡ Unlock AI Exam Grader — from €29",
    ctaGuarantee: "30-Day Pass • No recurring monthly subscription",
    liveTitle: "⚡ Live telc B1 AI Exam Grader",
    liveDesc: "Paste or type your practice letter below to evaluate it instantly against official telc B1 criteria.",
    livePromptSelectLabel: "Choose Examination Prompt:",
    livePromptMarianne: "Option 1 (Informal): E-Mail to Marianne (Visit to Germany)",
    livePromptHotel: "Option 2 (Formal): Complaint Letter to Hotel Meeresblick",
    livePromptVhs: "Option 3 (Semi-formal): Inquiry to Adult Education Center (VHS)",
    livePromptCustom: "Custom Prompt (Enter your own situation & Leitpunkte)",
    connectorsPaletteLabel: "⚡ B1 Connectors Quick-Insert:",
    connectorsUsedLabel: "B1 Connectors used:",
    liveTextareaLabel: "Your Practice Letter (Minimal 20 words):",
    liveTextareaPlaceholder: "Liebe Marianne, ich habe mich sehr über deine E-Mail gefreut! Es ist wirklich schön, dass du mich bald in Deutschland besuchen möchtest...",
    liveWordCount: "Words:",
    liveCharCount: "Characters:",
    liveSubmitBtn: "⚡ Grade My Letter with AI (/45)",
    speakingBadge: "🗣️ telc B1 Oral Exam",
    speakingTitle: "Teil 3: Gemeinsam etwas planen (Pair Task)",
    speakingDesc: "Simulate the joint planning examination task. Review official exam topics, interactive checklists, and essential B1 conversation phrases (Redemittel).",
    speakingTaskTitle: "Task: Abschiedsparty planen (Farewell Party)",
    speakingTaskDesc: "Sie haben zwei Wochen Urlaub gemacht und einige nette Deutsche kennengelernt. Vor dem Ende des Urlaubs möchten Sie eine Abschiedsparty feiern. Planen Sie das Fest gemeinsam mit Ihrem Partner.",
    speakingChecklistHeader: "📋 Checklist & Task Points to Agree On:",
    spWhen: "Wann? (Date, weekday & time)",
    spWhere: "Wo? (Venue, room, garden or restaurant)",
    spFood: "Essen & Trinken? (Cake, snacks, drinks)",
    spBudget: "Wer bezahlt wofür? (Cost split & budget)",
    redemittelHeader: "💡 Essential telc B1 Redemittel (Conversation Phrases):",
    rmPropose: "Making Proposals (Vorschläge machen)",
    rmAgree: "Agreeing (Zustimmen)",
    rmDisagree: "Countering Politely (Widersprechen)",
    rmDecide: "Deciding & Concluding (Vereinbaren)",
    speakingDialogueTitle: "🎭 Model Pair Dialogue Simulation (Prüfungsdialog)",
    speakingDialogueDesc: "Listen to how Partner A and Partner B negotiate back and forth with active turn-taking and agreement:",
    speakingTipHeader: "💡 Examiner Pro-Tip: Avoid Monologues & Pass the Ball!",
    speakingTipDesc: "The #1 reason candidates lose marks in Teil 3 is speaking for too long without asking their partner questions. Always use follow-up questions: 'Was meinst du dazu?', 'Passt dir das?', 'Wer übernimmt das?'.",
    partnerALabel: "Partner A (Propose / Solve)",
    partnerBLabel: "Partner B (Counter / Detail)",
    modalKicker: "PASS THE TELC B1 EXAM",
    modalTitle: "Choose Your Pro Pass",
    modalDesc: "Unlock live AI letter grading, error tracking, and examination simulation.",
    fixLabel: "Fix:"
  },
  tr: {
    tabSample: "✨ Örnek Değerlendirme Raporu",
    tabLive: "⚡ Canlı Yapay Zeka Mektup Puanlayıcı",
    tabSpeaking: "🗣️ Konuşma Bölüm 3 Simülatörü",
    badgeOfficial: "✨ Resmi telc B1 Örnek Değerlendirmesi",
    titleReport: "📝 telc Deutsch B1 Yazma — İnteraktif Sınav Raporu",
    descReport: "Bu rapor, <strong>Pro Yapay Zeka Puanlayıcısının</strong> öğrenci mektuplarını resmi <strong>telc B1 3-Kriter Değerlendirme Sistemi</strong> (Maks. 45 puan) ile nasıl satır satır puanladığını gösterir.",
    fromLabel: "Kimden:",
    subjectLabel: "Konu:",
    leitpunkteHeader: "📋 telc B1 Leitpunkte Kontrolü (4 Kılavuz Nokta Zorunludur):",
    pointLabel: "Nokta",
    annotatedHeader: "📜 İşaretli B1 Öğrenci Mektubu",
    annotatedHint: "Düzeltmeleri ve kural açıklamalarını görmek için vurgulanan metinlerin üzerine gelin veya dokunun",
    legendSyntax: "Cümle Düzeni / İnversiyon",
    legendSpelling: "İmla / Eszett (ß)",
    legendGrammar: "Edat / Dilbilgisi",
    rubricHeader: "📊 Resmi telc B1 Puan Tablosu ve Hesaplama",
    rubricFormulaHint: "Formül: (Kriter I + II + III) × 3 = Toplam Puan / 45",
    ptsMax: "/ 45 puan",
    passThresholdLabel: "Geçme Barajı Karşılandı (≥27 puan)",
    scoreLabel: "Not",
    ptsRaw: "ham puan",
    finalPts: "puan",
    telcRuleNote: "💡 <strong>telc B1 Kuralı ('Anlaşılabilirlik Önceliği'):</strong> İletişimi ve anlamayı engellemeyen dilbilgisi hatalarında B notu (3 puan) verilir. Tam A notu (5 puan) için sıfır sistematik hata ve akıcı B1 üslubu gerekir.",
    upgradesHeader: "💡 Sınav Uzmanı B1 Cümle İyileştirmeleri",
    upgradesSub: "Basit ifadeleri yüksek puan getiren resmi B1 yapılarına dönüştürme:",
    upgradeOriginal: "Öğrencinin Orijinal Cümlesi:",
    upgradeRecommended: "✨ B1 Uzman Önerisi:",
    upgradeWhy: "💡 Neden daha yüksek puan alır:",
    ctaKicker: "🚀 YAPAY ZEKA SINAV PUANLAYICIYI AÇIN",
    ctaTitle: "Kendi yazdığınız mektuplara 15 saniyede satır satır geri bildirim almak ister misiniz?",
    ctaDesc: "Resmi telc B1 kriterlerine göre puanlama, dilbilgisi düzeltmeleri ve kişiselleştirilmiş zayıf nokta takibi edinin.",
    ctaBadge1: "⚡ 15 Saniyede Anında Geri Bildirim",
    ctaBadge2: "🎯 Resmi telc B1 Kriterleri (I + II + III × 3)",
    ctaBadge3: "🔒 %100 Güvenli ve Gizli",
    ctaBtn: "⚡ Yapay Zeka Puanlayıcıyı Aç — 29€'dan başlayan",
    ctaGuarantee: "30 Günlük Geçiş • Tekrarlayan abonelik yok",
    liveTitle: "⚡ Canlı telc B1 Yapay Zeka Mektup Puanlayıcı",
    liveDesc: "Mektubunuzu aşağıya yapıştırın veya yazın; resmi telc B1 kriterlerine göre anında puanlansın.",
    livePromptSelectLabel: "Sınav Görevini Seçin:",
    livePromptMarianne: "Seçenek 1 (Samimi): Marianne'ye E-Posta (Almanya Ziyareti)",
    livePromptHotel: "Seçenek 2 (Resmi): Hotel Meeresblick Şikayet Mektubu",
    livePromptVhs: "Seçenek 3 (Yarı Resmi): Halk Eğitim Kurs Bilgi Talebi",
    livePromptCustom: "Özel Görev (Kendi konunuzu ve kılavuz noktalarınızı yazın)",
    connectorsPaletteLabel: "⚡ B1 Bağlaç Hızlı Ekleme:",
    connectorsUsedLabel: "Kullanılan B1 Bağlaçları:",
    liveTextareaLabel: "Alıştırma Mektubunuz (En az 20 kelime):",
    liveTextareaPlaceholder: "Liebe Marianne, ich habe mich sehr über deine E-Mail gefreut! Es ist wirklich schön, dass du mich bald in Deutschland besuchen möchtest...",
    liveWordCount: "Kelime:",
    liveCharCount: "Karakter:",
    liveSubmitBtn: "⚡ Mektubumu Yapay Zeka ile Puanla (/45)",
    speakingBadge: "🗣️ telc B1 Sözlü Sınav",
    speakingTitle: "Bölüm 3: Birlikte Plan Yapma (İkili Görev)",
    speakingDesc: "Ortak planlama görevini deneyimleyin. Resmi sınav konularını, interaktif kontrol listesini ve gerekli B1 kalıplarını (Redemittel) inceleyin.",
    speakingTaskTitle: "Görev: Veda Partisi Planlama (Abschiedsparty)",
    speakingTaskDesc: "İki haftalık tatil yaptınız ve bazı Alman arkadaşlar edindiniz. Tatil bitmeden önce bir veda partisi vermek istiyorsunuz. Partnerinizle birlikte partiyi planlayın.",
    speakingChecklistHeader: "📋 Kararlaştırılacak Maddeler ve Kontrol Listesi:",
    spWhen: "Wann? (Tarih, gün ve saat belirleme)",
    spWhere: "Wo? (Buluşma yeri, oda, bahçe veya restoran)",
    spFood: "Essen & Trinken? (Pasta, atıştırmalık, içecekler)",
    spBudget: "Wer bezahlt wofür? (Masraf paylaşımı ve bütçe)",
    redemittelHeader: "💡 Temel telc B1 Konuşma Kalıpları (Redemittel):",
    rmPropose: "Öneri Yapma (Vorschläge machen)",
    rmAgree: "Onaylama / Katılma (Zustimmen)",
    rmDisagree: "Kibarca İtiraz Etme (Widersprechen)",
    rmDecide: "Karara Bağlama (Vereinbaren)",
    speakingDialogueTitle: "🎭 Örnek İkili Sınav Diyaloğu (Prüfungsdialog)",
    speakingDialogueDesc: "Partner A ve Partner B'nin karşılıklı fikir alışverişinde bulunarak nasıl anlaştığını dinleyin:",
    speakingTipHeader: "💡 Sınav Uzmanı İpucu: Monologdan Kaçının ve Karşı Tarafa Söz Verin!",
    speakingTipDesc: "Adayların 3. Bölümde puan kaybetmesinin 1 numaralı sebebi, partnerine soru sormadan uzun monologlar yapmaktır. Her öneriden sonra mutlaka pas atın: 'Was meinst du dazu?', 'Passt dir das?'.",
    partnerALabel: "Partner A (Öneri / Çözüm)",
    partnerBLabel: "Partner B (Geliştirme / Karşı Fikir)",
    modalKicker: "TELC B1 SINAVINI GEÇİN",
    modalTitle: "Pro Kartınızı Seçin",
    modalDesc: "Canlı mektup puanlama, hata takibi ve sınav simülasyonunu etkinleştirin.",
    fixLabel: "Düzeltme:"
  },
  ar: {
    tabSample: "✨ تقرير التقييم النموذجي",
    tabLive: "⚡ المصحح الفوري للرسائل بالذكاء الاصطناعي",
    tabSpeaking: "🗣️ محاكي المحادثة - الجزء 3",
    badgeOfficial: "✨ تقرير تقييم رسمي لنموذج telc B1",
    titleReport: "📝 كتابة telc Deutsch B1 — تقرير الفاحص التفاعلي",
    descReport: "يوضح هذا التقرير كيف يقيم <strong>المصحح الذكي</strong> رسائل الطلاب سطراً بسطر باستخدام <strong>معايير telc B1 الثلاثة الرسمية</strong> (الدرجة القصوى 45 نقطة).",
    fromLabel: "من:",
    subjectLabel: "الموضوع:",
    leitpunkteHeader: "📋 فحص النقاط الإرشادية لـ telc B1 (4 نقاط إلزامية):",
    pointLabel: "نقطة",
    annotatedHeader: "📜 رسالة الطالب مع الشروحات التفصيلية",
    annotatedHint: "مرر الفأرة أو اضغط على النص المظلل لعرض تصحيحات الفاحص والقواعد النحوية",
    legendSyntax: "ترتيب الكلمات / تقديم الفعل",
    legendSpelling: "الإملاء / حرف Eszett (ß)",
    legendGrammar: "حروف الجر / القواعد",
    rubricHeader: "📊 جدول ومعايير التقييم الرسمية لـ telc B1",
    rubricFormulaHint: "المعادلة: (المعيار الأول + الثاني + الثالث) × 3 = الدرجة النهائية من 45",
    ptsMax: "/ 45 نقطة",
    passThresholdLabel: "تم اجتياز حد النجاح الأدنى (≥ 27 نقطة)",
    scoreLabel: "الدرجة",
    ptsRaw: "نقاط خام",
    finalPts: "نقطة",
    telcRuleNote: "💡 <strong>قاعدة telc B1 ('أولوية الفهم'):</strong> الأخطاء النحوية التي لا تعيق فهم الرسالة تنال الدرجة B (3 نقاط). الحصول على الدرجة A (5 نقاط) يتطلب غياب الأخطاء المنهجية وأسلوباً سلساً.",
    upgradesHeader: "💡 ترقيات الجمل الاحترافية بمستوى B1",
    upgradesSub: "تحويل الجمل البسيطة إلى تراكيب رسمية متقدمة ترفع درجاتك:",
    upgradeOriginal: "جملة الطالب الأصلية:",
    upgradeRecommended: "✨ توصية فاحص B1 المعتمد:",
    upgradeWhy: "💡 لماذا تحصل هذه الصيغة على درجة أعلى:",
    ctaKicker: "🚀 تفعيل مصحح الامتحانات بالذكاء الاصطناعي",
    ctaTitle: "هل ترغب في الحصول على تصحيح سطر بسطر لرسائلك الخاصة في 15 ثانية؟",
    ctaDesc: "احصل على درجات دقيقة بمعايير telc الرسمية، وتصحيح للأخطاء النحوية، ومتتبع شخصي لنقاط ضعفك.",
    ctaBadge1: "⚡ تقييم فوري خلال 15 ثانية",
    ctaBadge2: "🎯 معايير telc B1 الرسمية (I + II + III × 3)",
    ctaBadge3: "🔒 خصوصية وأمان تام 100%",
    ctaBtn: "⚡ فتح مصحح الامتحانات — ابتداءً من 29€",
    ctaGuarantee: "اشتراك لمدة 30 يوماً • بدون تجديد تلقائي",
    liveTitle: "⚡ المصحح الفوري لرسائل telc B1",
    liveDesc: "الصق أو اكتب رسالتك التدريبية أدناه لتقييمها فوراً وفقاً للمعايير الرسمية.",
    livePromptSelectLabel: "اختر موضوع الرسالة:",
    livePromptMarianne: "الخيار 1 (غير رسمي): رسالة إلى ماريان (زيارة ألمانيا)",
    livePromptHotel: "الخيار 2 (رسمي): رسالة شكوى لفندق Meeresblick",
    livePromptVhs: "الخيار 3 (شبه رسمي): استفسار عن دورة لغات في VHS",
    livePromptCustom: "موضوع مخصص (اكتب الموقف والنقاط بنفسك)",
    connectorsPaletteLabel: "⚡ إدراج روابط B1 بنقرة واحدة:",
    connectorsUsedLabel: "الروابط المستخدمة:",
    liveTextareaLabel: "رسالتك التدريبية (20 كلمة على الأقل):",
    liveTextareaPlaceholder: "Liebe Marianne, ich habe mich sehr über deine E-Mail gefreut! Es ist wirklich schön, dass du mich bald in Deutschland besuchen möchtest...",
    liveWordCount: "الكلمات:",
    liveCharCount: "الحروف:",
    liveSubmitBtn: "⚡ تقييم رسالتي بالذكاء الاصطناعي (/45)",
    speakingBadge: "🗣️ امتحان telc B1 الشفهي",
    speakingTitle: "الجزء 3: التخطيط المشترك (مهمة ثنائية)",
    speakingDesc: "حاكِ مهمة التخطيط المشترك. اطلع على مواضيع الامتحان وقوائم المراجعة التفاعلية والعبارات الجاهزة (Redemittel).",
    speakingTaskTitle: "المهمة: التخطيط لحفلة وداع (Abschiedsparty)",
    speakingTaskDesc: "قضيت عطلة لمدة أسبوعين وتعرفت على أصدقاء ألمان. ترغب قبل مغادرتك في تنظيم حفلة وداع. خطط للاحتفال مع شريكك.",
    speakingChecklistHeader: "📋 النقاط المتفق عليها وقائمة التحقق:",
    spWhen: "Wann? (تحديد التاريخ واليوم والوقت)",
    spWhere: "Wo? (المكان، القاعة، الحديقة أو المطعم)",
    spFood: "Essen & Trinken? (الحلوى، الوجبات الخفيفة، المشروبات)",
    spBudget: "Wer bezahlt wofür? (تقسيم التكاليف والميزانية)",
    redemittelHeader: "💡 عبارات المحادثة الأساسية لامتحان B1 (Redemittel):",
    rmPropose: "تقديم المقترحات (Vorschläge machen)",
    rmAgree: "الموافقة والقبول (Zustimmen)",
    rmDisagree: "الاعتراض بلباقة (Widersprechen)",
    rmDecide: "الاتفاق النهائي وتدوين الخطة (Vereinbaren)",
    speakingDialogueTitle: "🎭 محاكاة حوار ثنائي كامل للاختبار",
    speakingDialogueDesc: "استمع إلى كيفية تفاعل ومفاوضة الشريكين وتبادل الأدوار وصولاً إلى الاتفاق:",
    speakingTipHeader: "💡 نصيحة الفاحص الذهبية: تجنب الحديث المنفرد ومرر الكلمة لشريكك!",
    speakingTipDesc: "السبب الأول لخصم الدرجات في الجزء الثالث هو التحدث مطولاً دون إشراك الشريك. احرص دائماً على طرح أسئلة متابعة: 'Was meinst du dazu؟', 'Passt dir das؟'.",
    partnerALabel: "الشريك أ (اقتراح / حل)",
    partnerBLabel: "الشريك ب (تطوير / اعتراض لبق)",
    modalKicker: "اجتز امتحان TELC B1",
    modalTitle: "اختر باقتك الاحترافية",
    modalDesc: "فعّل التصحيح المباشر وتتبع الأخطاء ومحاكاة الامتحان.",
    fixLabel: "التصحيح:"
  },
  uk: {
    tabSample: "✨ Зразок звіту екзаменатора",
    tabLive: "⚡ Живе оцінювання листів ШІ",
    tabSpeaking: "🗣️ Симулятор мовлення Частина 3",
    badgeOfficial: "✨ Офіційне оцінювання зразка telc B1",
    titleReport: "📝 telc Deutsch B1 Письмо — Інтерактивний звіт екзаменатора",
    descReport: "Цей звіт демонструє, як <strong>Pro AI Grader</strong> оцінює студентські листи рядок за рядком за офіційною <strong>3-критеріальною системою telc B1</strong> (макс. 45 балів).",
    fromLabel: "Від:",
    subjectLabel: "Тема:",
    leitpunkteHeader: "📋 Перевірка опорних пунктів telc B1 (4 обов'язкові пункти):",
    pointLabel: "Пункт",
    annotatedHeader: "📜 Розбір студентського листа B1 з коментарями",
    annotatedHint: "Наведіть курсор або торкніться виділеного тексту для перегляду виправлень та правил",
    legendSyntax: "Порядок слів / Інверсія",
    legendSpelling: "Правопис / Eszett (ß)",
    legendGrammar: "Керування відмінками / Граматика",
    rubricHeader: "📊 Офіційна шкала оцінювання та розрахунок telc B1",
    rubricFormulaHint: "Формула: (Критерій I + II + III) × 3 = Підсумковий бал / 45",
    ptsMax: "/ 45 балів",
    passThresholdLabel: "Прохідний бар'єр подолано (≥27 балів)",
    scoreLabel: "Бал",
    ptsRaw: "сирих балів",
    finalPts: "балів",
    telcRuleNote: "💡 <strong>Правило telc B1 ('Пріоритет зрозумілості'):</strong> Граматичні помилки, що не перешкоджають розумінню, оцінюються балом B (3 бали). Оцінка A (5 балів) вимагає повної відсутності систематичних помилок.",
    upgradesHeader: "💡 Покращення речень від екзаменатора B1",
    upgradesSub: "Трансформація простих фраз у виразні офіційні структури B1:",
    upgradeOriginal: "Оригінальна фраза студента:",
    upgradeRecommended: "✨ Рекомендація екзаменатора B1:",
    upgradeWhy: "💡 Чому це приносить вищий бал:",
    ctaKicker: "🚀 РОЗБЛОКУЙТЕ ОЦІНЮВАННЯ ШТУЧНИМ ІНТЕЛЕКТОМ",
    ctaTitle: "Бажаєте миттєвий порядковий аналіз ВЛАСНИХ тренувальних листів?",
    ctaDesc: "Отримуйте оцінювання за офіційними критеріями telc B1, виправлення помилок та персональний трекер слабких місць за 15 секунд.",
    ctaBadge1: "⚡ Миттєвий аналіз за 15 секунд",
    ctaBadge2: "🎯 Офіційні критерії telc B1 (I + II + III × 3)",
    ctaBadge3: "🔒 100% безпечно та конфіденційно",
    ctaBtn: "⚡ Розблокувати перевірку ШІ — від €29",
    ctaGuarantee: "Доступ на 30 днів • Без щомісячних списань",
    liveTitle: "⚡ Онлайн-оцінювач листів telc B1 від ШІ",
    liveDesc: "Вставте або напишіть свій тренувальний лист нижче для миттєвої перевірки.",
    livePromptSelectLabel: "Виберіть екзаменаційне завдання:",
    livePromptMarianne: "Варіант 1 (Неформальний): Лист Маріанні (Поїздка до Німеччини)",
    livePromptHotel: "Варіант 2 (Офіційний): Скарга до готелю Meeresblick",
    livePromptVhs: "Варіант 3 (Напівофіційний): Запит на мовний курс у VHS",
    livePromptCustom: "Власне завдання (введіть свою ситуацію та пункти)",
    connectorsPaletteLabel: "⚡ Швидка вставка сполучників B1:",
    connectorsUsedLabel: "Використані сполучники B1:",
    liveTextareaLabel: "Ваш тренувальний лист (мінімум 20 слів):",
    liveTextareaPlaceholder: "Liebe Marianne, ich habe mich sehr über deine E-Mail gefreut! Es ist wirklich schön, dass du mich bald in Deutschland besuchen möchtest...",
    liveWordCount: "Слів:",
    liveCharCount: "Символів:",
    liveSubmitBtn: "⚡ Оцінити мій лист за допомогою ШІ (/45)",
    speakingBadge: "🗣️ Усний іспит telc B1",
    speakingTitle: "Частина 3: Спільне планування (Робота в парах)",
    speakingDesc: "Симулюйте завдання спільного планування. Ознайомтеся з темами, чеклістом та ключовими мовними кліше (Redemittel).",
    speakingTaskTitle: "Завдання: Організація прощальної вечірки (Abschiedsparty)",
    speakingTaskDesc: "Ви провели двотижневу відпустку та познайомилися з німцями. Перед від'їздом ви хочете влаштувати прощальну вечірку. Сплануйте її разом із партнером.",
    speakingChecklistHeader: "📋 Чекліст та пункти для узгодження:",
    spWhen: "Wann? (Дата, день тижня та час)",
    spWhere: "Wo? (Місце зустрічі, приміщення, сад чи ресторан)",
    spFood: "Essen & Trinken? (Торт, закуски, напої)",
    spBudget: "Wer bezahlt wofür? (Розподіл витрат і бюджет)",
    redemittelHeader: "💡 Ключові розмовні фрази telc B1 (Redemittel):",
    rmPropose: "Пропозиції (Vorschläge machen)",
    rmAgree: "Згода (Zustimmen)",
    rmDisagree: "Ввічлива незгода (Widersprechen)",
    rmDecide: "Підсумок та домовленості (Vereinbaren)",
    speakingDialogueTitle: "🎭 Зразок парного діалогу на іспиті",
    speakingDialogueDesc: "Послухайте, як партнер А та партнер Б ведуть діалог, передають ініціативу та доходять згоди:",
    speakingTipHeader: "💡 Порада екзаменатора: Уникайте монологу та передавайте слово!",
    speakingTipDesc: "Головна причина втрати балів у Частині 3 — довгий монолог без запитань до партнера. Завжди передавайте ініціативу: 'Was meinst du dazu?', 'Passt dir das?'.",
    partnerALabel: "Партнер А (Пропозиція / Рішення)",
    partnerBLabel: "Партнер Б (Відповідь / Уточнення)",
    modalKicker: "СКЛАДІТЬ ІСПИТ TELC B1",
    modalTitle: "Виберіть свій Pro абонемент",
    modalDesc: "Отримайте живе оцінювання листів, трекінг помилок та симуляцію іспиту.",
    fixLabel: "Виправлення:"
  }
};

function getActiveLanguage() {
  if (typeof currentLang !== 'undefined' && ['en', 'tr', 'ar', 'uk'].includes(currentLang)) {
    return currentLang;
  }
  return 'en';
}

function getShowcaseText(key) {
  const lang = getActiveLanguage();
  return SHOWCASE_I18N[lang]?.[key] || SHOWCASE_I18N.en[key] || '';
}

/**
 * Speech Audio Synthesizer for German Speaking Expressions & Dialogues
 */
function playSchreibenSpeech(text) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = 0.92;
  const voices = window.speechSynthesis.getVoices();
  const deVoice = voices.find(v => v.lang.startsWith('de') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('German') || v.localService));
  if (deVoice) utterance.voice = deVoice;
  window.speechSynthesis.speak(utterance);
}

/**
 * Quick-Insert Connector into Student Practice Letter Textarea
 */
function insertConnectorIntoLetter(connector) {
  const textarea = document.getElementById('student-letter-textarea');
  if (!textarea) return;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const val = textarea.value;
  const needsSpace = start > 0 && !/\s$/.test(val.slice(0, start));
  const insertText = (needsSpace ? ' ' : '') + connector + ', ';
  textarea.value = val.slice(0, start) + insertText + val.slice(end);
  textarea.selectionStart = textarea.selectionEnd = start + insertText.length;
  textarea.focus();
  updateWordCounter(textarea);
}

function renderSchreibenShowcase(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const data = SAMPLE_B1_EVALUATION;
  const lang = getActiveLanguage();
  const langKey = lang.charAt(0).toUpperCase() + lang.slice(1);
  const isAr = lang === 'ar';
  const rtlAttr = isAr ? 'dir="rtl"' : 'dir="ltr"';
  const t = getShowcaseText;

  const promptTitle = data.prompt['title' + langKey] || data.prompt.titleEn;
  const promptType = data.prompt['type' + langKey] || data.prompt.typeEn;
  const rubricNote = data.scores['rubricNote' + langKey] || data.scores.rubricNoteEn;

  container.innerHTML = `
    <div class="schreiben-showcase-wrapper" ${rtlAttr}>
      <!-- Navigation Tabs Header -->
      <div class="schreiben-tab-bar">
        <button class="schreiben-tab-btn ${currentShowcaseTab === 'showcase' ? 'active' : ''}" onclick="switchSchreibenTab('showcase')">
          ${t('tabSample')}
        </button>
        <button class="schreiben-tab-btn ${currentShowcaseTab === 'live' ? 'active' : ''}" onclick="switchSchreibenTab('live')">
          ${t('tabLive')}
        </button>
        <button class="schreiben-tab-btn ${currentShowcaseTab === 'speaking' ? 'active' : ''}" onclick="switchSchreibenTab('speaking')">
          ${t('tabSpeaking')}
        </button>
      </div>

      <!-- TAB 1: SHOWCASE REPORT -->
      <div id="tab-content-showcase" class="tab-pane ${currentShowcaseTab === 'showcase' ? 'active' : ''}">
        <div class="showcase-header">
          <div class="showcase-badge">${t('badgeOfficial')}</div>
          <h2>${t('titleReport')}</h2>
          <p>${t('descReport')}</p>
        </div>

        <!-- Prompt Info Card with Incoming E-Mail & 4 Leitpunkte -->
        <div class="showcase-prompt-card">
          <div class="prompt-header">
            <span class="prompt-type">${promptType}</span>
            <span class="prompt-word-count">⏱️ ${data.prompt.timeAllowed} • 📊 ${data.studentSubmission.wordCount} words</span>
          </div>
          <h3 class="prompt-title">${promptTitle}</h3>

          <!-- Incoming E-Mail Box -->
          <div class="incoming-email-box">
            <div class="email-header">
              <div><strong>${t('fromLabel')}</strong> ${data.prompt.incomingMessage.sender}</div>
              <div><strong>${t('subjectLabel')}</strong> ${data.prompt.incomingMessage.subject}</div>
            </div>
            <div class="email-body" dir="ltr">${data.prompt.incomingMessage.text.replace(/\n/g, '<br>')}</div>
          </div>

          <!-- 4 Leitpunkte Checklist -->
          <div class="leitpunkte-checklist">
            <h4>${t('leitpunkteHeader')}</h4>
            <div class="leitpunkte-grid">
              ${data.prompt.leitpunkte.map(lp => {
                const text = lp['text' + langKey] || lp.textEn;
                return `
                  <div class="leitpunkt-item ${lp.status}">
                    <span class="lp-icon">${lp.status === 'fulfilled' ? '✅' : '⚠️'}</span>
                    <span class="lp-num">${t('pointLabel')} ${lp.id}:</span>
                    <span class="lp-text">${text}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Main Showcase Grid -->
        <div class="showcase-grid">
          <!-- Left: Student Letter with Inline Highlighting -->
          <div class="showcase-column letter-column">
            <div class="column-header">
              <h3>${t('annotatedHeader')}</h3>
              <span class="sub-hint">${t('annotatedHint')}</span>
            </div>

            <div class="annotated-letter-box" id="annotated-letter-content" dir="ltr">
              ${renderAnnotatedText(data.studentSubmission.rawText, data.annotations, lang)}
            </div>

            <div class="annotation-legend">
              <span class="legend-item syntax"><span class="dot"></span> ${t('legendSyntax')}</span>
              <span class="legend-item spelling"><span class="dot"></span> ${t('legendSpelling')}</span>
              <span class="legend-item grammar"><span class="dot"></span> ${t('legendGrammar')}</span>
            </div>
          </div>

          <!-- Right: Official telc Rubric & Score calculation -->
          <div class="showcase-column rubric-column">
            <div class="column-header">
              <h3>${t('rubricHeader')}</h3>
              <span class="sub-hint">${t('rubricFormulaHint')}</span>
            </div>

            <!-- Total Score Card with Formula -->
            <div class="total-score-card">
              <div class="score-circle">
                <span class="score-num">${data.scores.total}</span>
                <span class="score-max">${t('ptsMax')}</span>
              </div>
              <div class="score-details">
                <div class="score-grade">${data.scores.grade} (${data.scores.percentage}%)</div>
                <div class="score-formula">
                  <code>(${data.scores.criteria[0].ratingLetter} + ${data.scores.criteria[1].ratingLetter} + ${data.scores.criteria[2].ratingLetter}) = ${data.scores.rawSum}/15 × 3 = ${data.scores.total}/45</code>
                </div>
                <div class="score-status-pill">${t('passThresholdLabel')}</div>
              </div>
            </div>

            <!-- Individual Criteria Rating Cards -->
            <div class="criteria-list">
              ${data.scores.criteria.map(c => {
                const title = c['title' + langKey] || c.titleEn;
                const summary = c['summary' + langKey] || c.summaryEn;
                return `
                  <div class="criterion-item">
                    <div class="criterion-header">
                      <span class="criterion-title">${title}</span>
                      <span class="criterion-score">${t('scoreLabel')} ${c.ratingLetter} (${c.rawScore}/5 ${t('ptsRaw')} &rarr; <strong>${c.finalScore}/15 ${t('finalPts')}</strong>)</span>
                    </div>
                    <div class="progress-bar-bg">
                      <div class="progress-bar-fill ${c.status}" style="width: ${(c.rawScore / c.rawMax) * 100}%"></div>
                    </div>
                    <p class="criterion-summary">${summary}</p>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- telc Rules Note -->
            <div class="telc-rules-note">
              ${rubricNote}
            </div>
          </div>
        </div>

        <!-- B1 Vocabulary & Sentence Structure Upgrades -->
        <div class="upgrades-section">
          <h3>${t('upgradesHeader')}</h3>
          <p class="upgrades-sub">${t('upgradesSub')}</p>
          <div class="upgrades-grid">
            ${data.b1Upgrades.map(u => {
              const benefit = u['benefit' + langKey] || u.benefitEn;
              return `
                <div class="upgrade-card">
                  <div class="upgrade-original">
                    <span class="label">${t('upgradeOriginal')}</span>
                    <p dir="ltr">"${u.original}"</p>
                  </div>
                  <div class="upgrade-improved">
                    <span class="label">${t('upgradeRecommended')}</span>
                    <p dir="ltr">"${u.upgrade}"</p>
                  </div>
                  <div class="upgrade-benefit">
                    <span>${t('upgradeWhy')}</span> ${benefit}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- High-Converting CTA Banner -->
        <div class="pro-cta-banner">
          <div class="cta-content">
            <span class="cta-kicker">${t('ctaKicker')}</span>
            <h2>${t('ctaTitle')}</h2>
            <p>${t('ctaDesc')}</p>
            <div class="cta-badges">
              <span>${t('ctaBadge1')}</span>
              <span>${t('ctaBadge2')}</span>
              <span>${t('ctaBadge3')}</span>
            </div>
          </div>
          <div class="cta-action">
            <button class="cta-btn-primary" onclick="openProPricingModal()">
              ${t('ctaBtn')}
            </button>
            <div class="cta-guarantee">${t('ctaGuarantee')}</div>
          </div>
        </div>
      </div>

      <!-- TAB 2: LIVE AI GRADER -->
      <div id="tab-content-live" class="tab-pane ${currentShowcaseTab === 'live' ? 'active' : ''}">
        <div class="live-grader-card">
          <div class="live-header">
            <h2>${t('liveTitle')}</h2>
            <p>${t('liveDesc')}</p>
          </div>

          <div class="live-form-group">
            <label for="prompt-select-input"><strong>${t('livePromptSelectLabel')}</strong></label>
            <select id="prompt-select-input" class="styled-select" onchange="handlePromptSelectChange(this.value)">
              <option value="marianne">${t('livePromptMarianne')}</option>
              <option value="hotel">${t('livePromptHotel')}</option>
              <option value="vhs">${t('livePromptVhs')}</option>
              <option value="custom">${t('livePromptCustom')}</option>
            </select>
          </div>

          <!-- B1 Connectors Palette -->
          <div class="connector-palette-container">
            <div class="connector-palette-header">
              <span>${t('connectorsPaletteLabel')}</span>
              <span id="letter-connector-count" class="connector-status-badge">${t('connectorsUsedLabel')} 0</span>
            </div>
            <div class="connector-chips-grid">
              ${['weil', 'obwohl', 'damit', 'deshalb', 'trotzdem', 'sobald', 'da', 'außerdem', 'dass', 'wenn'].map(c => `
                <button type="button" class="connector-chip-btn" onclick="insertConnectorIntoLetter('${c}')">+ ${c}</button>
              `).join('')}
            </div>
          </div>

          <div class="live-form-group">
            <label for="student-letter-textarea"><strong>${t('liveTextareaLabel')}</strong></label>
            <textarea id="student-letter-textarea" class="styled-textarea" rows="8" dir="ltr" placeholder="${t('liveTextareaPlaceholder')}" oninput="updateWordCounter(this)"></textarea>
            <div class="textarea-counter-row">
              <span id="letter-word-count">${t('liveWordCount')} 0</span>
              <span id="letter-char-count">${t('liveCharCount')} 0</span>
            </div>
          </div>

          <div class="live-action-row">
            <button class="cta-btn-primary" onclick="submitLiveLetterGrading()">
              ${t('liveSubmitBtn')}
            </button>
          </div>

          <div id="live-results-container" style="margin-top:20px;"></div>
        </div>
      </div>

      <!-- TAB 3: SPRECHEN TEIL 3 SIMULATOR -->
      <div id="tab-content-speaking" class="tab-pane ${currentShowcaseTab === 'speaking' ? 'active' : ''}">
        <div class="speaking-sim-card">
          <div class="speaking-header">
            <span class="showcase-badge">${t('speakingBadge')}</span>
            <h2>${t('speakingTitle')}</h2>
            <p>${t('speakingDesc')}</p>
          </div>

          <!-- Prompt Selector for Speaking -->
          <div class="speaking-topic-card">
            <h3>${t('speakingTaskTitle')}</h3>
            <p dir="ltr">${t('speakingTaskDesc')}</p>
          </div>

          <!-- Interactive Checklist -->
          <div class="speaking-checklist-box">
            <h4>${t('speakingChecklistHeader')}</h4>
            <div class="speaking-points-grid">
              <div class="sp-point">
                <input type="checkbox" id="sp1" onchange="toggleSpeakingPoint('sp1', this.checked)">
                <label for="sp1"><strong>Wann?</strong> (${t('spWhen')})</label>
              </div>
              <div class="sp-point">
                <input type="checkbox" id="sp2" onchange="toggleSpeakingPoint('sp2', this.checked)">
                <label for="sp2"><strong>Wo?</strong> (${t('spWhere')})</label>
              </div>
              <div class="sp-point">
                <input type="checkbox" id="sp3" onchange="toggleSpeakingPoint('sp3', this.checked)">
                <label for="sp3"><strong>Essen & Trinken?</strong> (${t('spFood')})</label>
              </div>
              <div class="sp-point">
                <input type="checkbox" id="sp4" onchange="toggleSpeakingPoint('sp4', this.checked)">
                <label for="sp4"><strong>Wer bezahlt wofür?</strong> (${t('spBudget')})</label>
              </div>
            </div>
          </div>

          <!-- Simulated Full Pair Dialogue Card -->
          <div class="dialogue-flow-card">
            <h4>${t('speakingDialogueTitle')}</h4>
            <p class="dialogue-flow-desc">${t('speakingDialogueDesc')}</p>
            <div class="dialogue-turns-list">
              <div class="dialogue-turn partner-a">
                <div class="turn-speaker-row a">
                  <span>${t('partnerALabel')}</span>
                </div>
                <div class="turn-body">
                  <span class="turn-text" dir="ltr">"Ich schlage vor, dass wir am Samstag eine Abschiedsparty im Park feiern. Was hältst du davon?"</span>
                  <button type="button" class="dialogue-play-btn" onclick="playSchreibenSpeech('Ich schlage vor, dass wir am Samstag eine Abschiedsparty im Park feiern. Was hältst du davon?')" title="Listen to German audio">🔊</button>
                </div>
              </div>

              <div class="dialogue-turn partner-b">
                <div class="turn-speaker-row b">
                  <span>${t('partnerBLabel')}</span>
                </div>
                <div class="turn-body">
                  <span class="turn-text" dir="ltr">"Das ist eine schöne Idee, aber am Samstag soll es regnen. Wie wäre es, wenn wir stattdessen einen Raum im Bürgerhaus mieten?"</span>
                  <button type="button" class="dialogue-play-btn" onclick="playSchreibenSpeech('Das ist eine schöne Idee, aber am Samstag soll es regnen. Wie wäre es, wenn wir stattdessen einen Raum im Bürgerhaus mieten?')" title="Listen to German audio">🔊</button>
                </div>
              </div>

              <div class="dialogue-turn partner-a">
                <div class="turn-speaker-row a">
                  <span>${t('partnerALabel')}</span>
                </div>
                <div class="turn-body">
                  <span class="turn-text" dir="ltr">"Guter Punkt! Drinnen ist es viel sicherer. Ich kann dort morgen anrufen und nachfragen. Wer besorgt die Getränke und den Kuchen?"</span>
                  <button type="button" class="dialogue-play-btn" onclick="playSchreibenSpeech('Guter Punkt! Drinnen ist es viel sicherer. Ich kann dort morgen anrufen und nachfragen. Wer besorgt die Getränke und den Kuchen?')" title="Listen to German audio">🔊</button>
                </div>
              </div>

              <div class="dialogue-turn partner-b">
                <div class="turn-speaker-row b">
                  <span>${t('partnerBLabel')}</span>
                </div>
                <div class="turn-body">
                  <span class="turn-text" dir="ltr">"Das mache ich sehr gern! Und wir können alle Gäste bitten, etwas Fingerfood mitzubringen. Wie teilen wir die Raumkosten?"</span>
                  <button type="button" class="dialogue-play-btn" onclick="playSchreibenSpeech('Das mache ich sehr gern! Und wir können alle Gäste bitten, etwas Fingerfood mitzubringen. Wie teilen wir die Raumkosten?')" title="Listen to German audio">🔊</button>
                </div>
              </div>

              <div class="dialogue-turn partner-a">
                <div class="turn-speaker-row a">
                  <span>${t('partnerALabel')}</span>
                </div>
                <div class="turn-body">
                  <span class="turn-text" dir="ltr">"Wir teilen uns einfach die Miete zur Hälfte. Einverstanden! Perfekt, so machen wir das!"</span>
                  <button type="button" class="dialogue-play-btn" onclick="playSchreibenSpeech('Wir teilen uns einfach die Miete zur Hälfte. Einverstanden! Perfekt, so machen wir das!')" title="Listen to German audio">🔊</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Examiner Pro-Tip Card -->
          <div class="speaking-tip-card">
            <h5>${t('speakingTipHeader')}</h5>
            <p>${t('speakingTipDesc')}</p>
          </div>

          <!-- Essential B1 Speaking Phrases (Redemittel) -->
          <div class="redemittel-section">
            <h4>${t('redemittelHeader')}</h4>
            <div class="redemittel-grid">
              <div class="rm-card">
                <h5>${t('rmPropose')}</h5>
                <ul dir="ltr">
                  <li>"Ich schlage vor, dass wir..." <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Ich schlage vor, dass wir...')">🔊</button></li>
                  <li>"Wie wäre es, wenn wir...?" <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Wie wäre es, wenn wir...?')">🔊</button></li>
                  <li>"Was hältst du davon, wenn...?" <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Was hältst du davon, wenn...?')">🔊</button></li>
                </ul>
              </div>
              <div class="rm-card">
                <h5>${t('rmAgree')}</h5>
                <ul dir="ltr">
                  <li>"Das ist eine hervorragende Idee!" <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Das ist eine hervorragende Idee!')">🔊</button></li>
                  <li>"Ich bin ganz deiner Meinung." <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Ich bin ganz deiner Meinung.')">🔊</button></li>
                  <li>"Genau so machen wir das." <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Genau so machen wir das.')">🔊</button></li>
                </ul>
              </div>
              <div class="rm-card">
                <h5>${t('rmDisagree')}</h5>
                <ul dir="ltr">
                  <li>"Das ist zwar gut, aber vielleicht..." <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Das ist zwar gut, aber vielleicht sollten wir...')">🔊</button></li>
                  <li>"Ich weiß nicht, ob das klappt." <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Ich weiß nicht, ob das klappt. Besser wäre...')">🔊</button></li>
                  <li>"Tut mir leid, da bin ich skeptisch." <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Tut mir leid, aber da bin ich skeptisch.')">🔊</button></li>
                </ul>
              </div>
              <div class="rm-card">
                <h5>${t('rmDecide')}</h5>
                <ul dir="ltr">
                  <li>"Gut, dann halten wir das so fest!" <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Gut, dann halten wir das so fest!')">🔊</button></li>
                  <li>"Einverstanden! Wer kümmert sich um...?" <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Einverstanden! Wer kümmert sich darum?')">🔊</button></li>
                  <li>"Perfekt, abgemacht!" <button type="button" class="dialogue-play-btn" style="display:inline-flex; width:24px; height:24px; font-size:11px;" onclick="playSchreibenSpeech('Perfekt, abgemacht!')">🔊</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Restore Speaking checklist states
  restoreSpeakingPoints();
}

/**
 * Persist and restore Speaking checklist states across sessions and tab changes
 */
function toggleSpeakingPoint(id, checked) {
  try {
    const saved = JSON.parse(localStorage.getItem('telc_speaking_plan_checks') || '{}');
    saved[id] = !!checked;
    localStorage.setItem('telc_speaking_plan_checks', JSON.stringify(saved));
  } catch (e) {
    console.error('Failed to save speaking checklist state:', e);
  }
}

function restoreSpeakingPoints() {
  try {
    const saved = JSON.parse(localStorage.getItem('telc_speaking_plan_checks') || '{}');
    ['sp1', 'sp2', 'sp3', 'sp4'].forEach(id => {
      const el = document.getElementById(id);
      if (el && saved[id] !== undefined) {
        el.checked = !!saved[id];
      }
    });
  } catch (e) {
    console.error('Failed to restore speaking checklist state:', e);
  }
}

/**
 * Switch Navigation Tabs
 */
function switchSchreibenTab(tabName) {
  currentShowcaseTab = tabName;
  document.querySelectorAll('.schreiben-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

  const activePane = document.getElementById(`tab-content-${tabName}`);
  if (activePane) activePane.classList.add('active');

  // Trigger button state
  const targetBtn = Array.from(document.querySelectorAll('.schreiben-tab-btn')).find(b => b.getAttribute('onclick')?.includes(tabName));
  if (targetBtn) targetBtn.classList.add('active');

  if (tabName === 'speaking') {
    restoreSpeakingPoints();
  }
}

/**
 * Update Word & Character Counter, and B1 Connectors scan
 */
function updateWordCounter(textarea) {
  const text = textarea.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  const chars = text.length;

  const t = getShowcaseText;
  const wordEl = document.getElementById('letter-word-count');
  const charEl = document.getElementById('letter-char-count');
  if (wordEl) wordEl.textContent = `${t('liveWordCount')} ${words}`;
  if (charEl) charEl.textContent = `${t('liveCharCount')} ${chars}`;

  // Real-time B1 Connectors Scanner
  const connectors = ['weil', 'obwohl', 'damit', 'deshalb', 'trotzdem', 'sobald', 'da', 'außerdem', 'dass', 'wenn'];
  const lower = text.toLowerCase();
  const found = connectors.filter(c => new RegExp(`\\b${c}\\b`, 'i').test(lower));
  const connectorEl = document.getElementById('letter-connector-count');
  if (connectorEl) {
    connectorEl.innerHTML = found.length > 0
      ? `<span>${t('connectorsUsedLabel')} <strong>${found.length}</strong> (${found.join(', ')})</span>`
      : `<span>${t('connectorsUsedLabel')} 0</span>`;
  }
}

/**
 * Handle Prompt Selection
 */
function handlePromptSelectChange(val) {
  const textarea = document.getElementById('student-letter-textarea');
  if (!textarea) return;

  if (val === 'marianne') {
    textarea.value = `Liebe Marianne,\n\nich habe mich sehr über deine E-Mail gefreut! Es ist wirklich schön, dass du mich bald in Deutschland besuchen möchtest.\n\nDie beste Jahreszeit für deine Reise ist der Frühling, besonders der Mai. Im Juli und August kann es hier nämlich sehr heiß werden, aber im Frühling ist das Wetter angenehm mild und sonnig.\n\nWenn du hier bist, können wir zusammen einen Ausflug nach Berlin machen. Dort gibt es viele berühmte Museen und schöne Parks. Außerdem möchte ich dir unseren großen See zeigen, an dem wir spazieren gehen und schwimmen können.\n\nFür die Reise solltest du unbedingt feste Schuhe und eine warme Jacke mitbringen, weil die Abende manchmal noch frisch sind.\n\nZur Vorbereitung empfehle ich dir, deine Fahrkarten für den Zug möglichst früh online zu buchen, damit sie billiger sind. Lade dir auch die DB-App auf dein Handy herunter.\n\nIch freue mich schon sehr auf deinen Besuch! Schreib mir bald zurück.\n\nViele Grüße,\nAli`;
  } else if (val === 'hotel') {
    textarea.value = `Sehr geehrte Damen und Herren,\n\nich schreibe Ihnen, weil ich mich über meinen Aufenthalt im Hotel Meeresblick vom 10. bis 17. August beschweren möchte.\n\nIn Ihrer Anzeige im Internet stand, dass alle Zimmer einen Blick auf das Meer haben und es sehr ruhig ist. Als ich ankam, lag mein Zimmer jedoch direkt über der lauten Hotelküche, und ich konnte das Meer überhaupt nicht sehen.\n\nAußerdem war die Klimaanlage während meines gesamten Aufenthalts kaputt, obwohl es draußen über 30 Grad warm war. An der Rezeption habe ich mich mehrmals beschwert, aber niemand hat das Problem gelöst.\n\nAus diesen Gründen erwarte ich, dass Sie mir 30 Prozent der Reisekosten zurückerstatten. Bitte überweisen Sie den Betrag innerhalb von zwei Wochen auf mein Bankkonto.\n\nMit freundlichen Grüßen,\nMehmet Yılmaz`;
  } else if (val === 'vhs') {
    textarea.value = `Sehr geehrte Damen und Herren,\n\nich interessiere mich sehr für den Deutschkurs B2 an Ihrer Volkshochschule und hätte dazu einige wichtige Fragen.\n\nIch habe vor zwei Monaten meine B1-Prüfung mit gutem Erfolg bestanden. Da ich mich beruflich weiterentwickeln möchte, brauche ich nun das B2-Zertifikat. Findet der Intensivkurs am Vormittag oder am Abend statt?\n\nKönnten Sie mir bitte auch mitteilen, welche Lehrbücher im Unterricht verwendet werden und wie hoch die Kursgebühren sind? Besteht die Möglichkeit, die Kurskosten in monatlichen Raten zu bezahlen?\n\nÜber eine baldige Auskunft würde ich mich sehr freuen.\n\nMit freundlichen Grüßen,\nOlena Kovalenko`;
  } else if (val === 'custom') {
    textarea.value = '';
  }
  updateWordCounter(textarea);
}

/**
 * Handle Live Submission
 */
function submitLiveLetterGrading() {
  const textarea = document.getElementById('student-letter-textarea');
  const text = textarea ? textarea.value.trim() : '';

  if (!text || text.split(/\s+/).length < 20) {
    const lang = getActiveLanguage();
    const alerts = {
      en: 'Please enter a practice letter with at least 20 words before submitting for AI grading.',
      tr: 'Lütfen yapay zeka puanlamasına göndermeden önce en az 20 kelimelik bir mektup yazın.',
      ar: 'يرجى كتابة رسالة تدريبية تحتوي على 20 كلمة على الأقل قبل طلب التقييم.',
      uk: 'Будь ласка, введіть тренувальний лист обсягом щонайменше 20 слів перед відправкою на оцінювання.'
    };
    alert(alerts[lang] || alerts.en);
    return;
  }

  // Open Pro Pass Modal (Zero-cost lead gen safeguard)
  openProPricingModal();
}

/**
 * Helper to inject annotations into the student letter string with localized popovers
 */
function renderAnnotatedText(rawText, annotations, lang) {
  let html = rawText;
  const activeLang = lang || getActiveLanguage();
  const langKey = activeLang.charAt(0).toUpperCase() + activeLang.slice(1);
  const fixWord = SHOWCASE_I18N[activeLang]?.fixLabel || SHOWCASE_I18N.en.fixLabel;

  annotations.forEach(ann => {
    const explanation = ann['explanation' + langKey] || ann.explanationEn;
    const ruleTitle = ann['rule' + langKey] || ann.ruleEn || ann.rule;

    const highlightSpan = `<mark class="annotation-mark ${ann.type}">
      ${ann.targetText}
      <span class="ann-popover" ${activeLang === 'ar' ? 'dir="rtl" style="text-align:right;"' : 'dir="ltr"'}>
        <strong>${fixWord} ${ann.correctedText}</strong><br>
        <small><strong>${ruleTitle}:</strong> ${explanation}</small>
      </span>
    </mark>`;

    html = html.replace(ann.targetText, highlightSpan);
  });

  return html.replace(/\n/g, '<br>');
}

/**
 * Open Pricing Modal with Quad-Lingual localization
 */
function openProPricingModal() {
  let modal = document.getElementById('pro-pricing-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'pro-pricing-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const tiers = SAMPLE_B1_EVALUATION.pricingTiers;
  const lang = getActiveLanguage();
  const langKey = lang.charAt(0).toUpperCase() + lang.slice(1);
  const isAr = lang === 'ar';
  const t = getShowcaseText;

  modal.innerHTML = `
    <div class="modal-card pricing-modal-card" ${isAr ? 'dir="rtl"' : 'dir="ltr"'}>
      <button class="modal-close-btn" onclick="closeProPricingModal()">✕</button>
      <div class="modal-header">
        <span class="modal-kicker">${t('modalKicker')}</span>
        <h2>${t('modalTitle')}</h2>
        <p>${t('modalDesc')}</p>
      </div>

      <div class="pricing-tiers-grid">
        ${tiers.map(tier => {
          const name = tier['name' + langKey] || tier.nameEn;
          const badge = tier['badge' + langKey] || tier.badgeEn;
          const period = tier['period' + langKey] || tier.periodEn;
          const credits = tier['credits' + langKey] || tier.creditsEn;
          const features = tier['features' + langKey] || tier.featuresEn;
          const ctaText = tier['ctaText' + langKey] || tier.ctaTextEn;

          return `
            <div class="pricing-tier-card ${tier.id === 'citizenship' ? 'featured' : ''}">
              ${badge ? `<div class="tier-badge">${badge}</div>` : ''}
              <h3 class="tier-name">${name}</h3>
              <div class="tier-price">
                <span class="amount">${tier.price}</span>
                <span class="period">/ ${period}</span>
              </div>
              <div class="tier-credits">⚡ ${credits}</div>
              <ul class="tier-features">
                ${features.map(f => `<li>✓ ${f}</li>`).join('')}
              </ul>
              <button class="tier-cta-btn ${tier.id === 'citizenship' ? 'featured' : ''}" onclick="selectProPlan('${tier.id}')">
                ${ctaText}
              </button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeProPricingModal() {
  const modal = document.getElementById('pro-pricing-modal');
  if (modal) modal.classList.remove('open');
}

function selectProPlan(planId) {
  const lang = getActiveLanguage();
  const msgs = {
    en: `Thank you for your interest in ${planId.toUpperCase()}! You will be redirected to the secure enrollment checkout.`,
    tr: `${planId.toUpperCase()} paketine ilginiz için teşekkür ederiz! Güvenli kayıt sayfasına yönlendiriliyorsunuz.`,
    ar: `شكراً لاهتمامك بباقة ${planId.toUpperCase()}! جاري تحويلك إلى صفحة الدفع الآمنة.`,
    uk: `Дякуємо за інтерес до пакета ${planId.toUpperCase()}! Вас буде перенаправлено на безпечну сторінку оформлення.`
  };
  alert(msgs[lang] || msgs.en);
  closeProPricingModal();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SHOWCASE_I18N,
    renderSchreibenShowcase,
    renderAnnotatedText,
    getActiveLanguage,
    getShowcaseText,
    insertConnectorIntoLetter,
    playSchreibenSpeech
  };
}
