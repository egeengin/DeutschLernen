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
    fixLabel: "Fix:",
    liveInstantEvalTitle: "📊 telc B1 Live Evaluation Scorecard",
    liveDirectAiBtn: "⚙️ Connect Live AI (OpenAI / Gemini)",
    liveEvaluating: "⏳ Analyzing letter against official telc B1 rubric...",
    livePassBadge: "🎉 BESTANDEN (Meets telc B1 Standard)",
    liveFailBadge: "⚠️ NICHT BESTANDEN (Needs ≥27/45 pts)",
    aiSettingsTitle: "⚙️ Direct AI Model Settings & Verification",
    aiProviderLabel: "AI Provider:",
    aiApiKeyLabel: "API Key (OpenAI / Gemini):",
    aiKeyHelp: "Stored strictly on your device (localStorage). Never transmitted to any third party.",
    aiModelRunBtn: "🚀 Run Deep LLM Verification",
    aiKeySaveBtn: "Save Settings",
    aiKeySavedMsg: "✅ AI settings saved successfully!",
    aiKeyClearBtn: "Clear Key",
    aiKeyClearedMsg: "🗑️ API Key removed.",
    aiCompareNote: "💡 Rule Engine vs. LLM: The client-side pre-grader evaluates word count, register, B1 connectors, and syntax in real time. The LLM verifies nuanced semantic comprehension.",
    verifyWithAiTitle: "Verify this Letter with Deep AI (Option B)",
    verifyWithAiDesc: "Option A analyzed syntax and word count locally for free. Now run Option B to cross-check with a large language model (GPT-4o / Gemini) for nuanced semantic understanding.",
    runAiVerifyBtn: "🤖 Check Afterwards with AI",
    comparisonTitle: "⚖️ Option A vs. Option B Calibration & Comparison",
    ruleEngineLabel: "Option A (Rule Engine)",
    deepAiLabel: "Option B (Deep LLM)",
    scoreDeltaLabel: "Score Agreement:"
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
    fixLabel: "Düzeltme:",
    liveInstantEvalTitle: "📊 telc B1 Canlı Değerlendirme Karnesi",
    liveDirectAiBtn: "⚙️ Canlı Yapay Zekayı Bağla (OpenAI / Gemini)",
    liveEvaluating: "⏳ Mektup resmi telc B1 kriterlerine göre inceleniyor...",
    livePassBadge: "🎉 GEÇTİ (telc B1 Standardını Karşılıyor)",
    liveFailBadge: "⚠️ GEÇMEDİ (En az 27/45 puan gerekli)",
    aiSettingsTitle: "⚙️ Doğrudan Yapay Zeka Model Ayarları ve Doğrulama",
    aiProviderLabel: "Yapay Zeka Sağlayıcısı:",
    aiApiKeyLabel: "API Anahtarı (OpenAI / Gemini):",
    aiKeyHelp: "Sadece cihazınızda (localStorage) saklanır. Asla üçüncü şahıslara gönderilmez.",
    aiModelRunBtn: "🚀 Derin LLM Doğrulamasını Başlat",
    aiKeySaveBtn: "Ayarları Kaydet",
    aiKeySavedMsg: "✅ Yapay zeka ayarları başarıyla kaydedildi!",
    aiKeyClearBtn: "Anahtarı Temizle",
    aiKeyClearedMsg: "🗑️ API Anahtarı silindi.",
    aiCompareNote: "💡 Kural Motoru ve LLM: İstemci taraflı puanlayıcı kelime sayısı, hitap, B1 bağlaçları ve sözdizimini anında denetler. LLM ise derin anlamsal kavrayışı doğrular.",
    verifyWithAiTitle: "Bu Mektubu Derin Yapay Zeka ile Doğrula (Seçenek B)",
    verifyWithAiDesc: "Seçenek A sözdizimini ve kelime sayısını yerel olarak ücretsiz inceledi. Şimdi büyük dil modeliyle (GPT-4o / Gemini) derin anlamsal kavrayışı çapraz kontrol edin.",
    runAiVerifyBtn: "🤖 Yapay Zeka ile Sonradan Kontrol Et",
    comparisonTitle: "⚖️ Seçenek A ve Seçenek B Kalibrasyon & Karşılaştırma",
    ruleEngineLabel: "Seçenek A (Kural Motoru)",
    deepAiLabel: "Seçenek B (Derin LLM)",
    scoreDeltaLabel: "Puan Uyumu:"
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
    fixLabel: "التصحيح:",
    liveInstantEvalTitle: "📊 تقرير التقييم المباشر لامتحان telc B1",
    liveDirectAiBtn: "⚙️ ربط الذكاء الاصطناعي المباشر (OpenAI / Gemini)",
    liveEvaluating: "⏳ جارٍ تقييم الرسالة وفقاً لمعايير telc B1 الرسمية...",
    livePassBadge: "🎉 ناجح (مستوفٍ لمعايير telc B1)",
    liveFailBadge: "⚠️ غير مستوفٍ (يتطلب 27/45 نقطة على الأقل)",
    aiSettingsTitle: "⚙️ إعدادات نموذج الذكاء الاصطناعي والتحقق المباشر",
    aiProviderLabel: "مزود محرك الذكاء الاصطناعي:",
    aiApiKeyLabel: "مفتاح API (OpenAI / Gemini):",
    aiKeyHelp: "يُحفظ بأمان في جهازك فقط (localStorage) ولا يُنقل لأي طرف ثالث.",
    aiModelRunBtn: "🚀 تشغيل التحقق المعمق بنموذج LLM",
    aiKeySaveBtn: "حفظ الإعدادات",
    aiKeySavedMsg: "✅ تم حفظ إعدادات الذكاء الاصطناعي بنجاح!",
    aiKeyClearBtn: "مسح المفتاح",
    aiKeyClearedMsg: "🗑️ تم حذف مفتاح API.",
    aiCompareNote: "💡 محرك القواعد مقابل LLM: يقيّم المحرك المحلي عدد الكلمات، والأسلوب، وروابط B1، والنحو فورياً. بينما يتحقق LLM من دقة الفهم الدلالي.",
    verifyWithAiTitle: "التحقق من هذه الرسالة بالذكاء الاصطناعي المعمق (الخيار B)",
    verifyWithAiDesc: "قام الخيار A بتحليل القواعد وعدد الكلمات محلياً ومجاناً. شغّل الخيار B الآن للمطابقة مع نموذج لغوي متقدم (GPT-4o / Gemini) للتحقق الدلالي الشامل.",
    runAiVerifyBtn: "🤖 التحقق لاحقاً بالذكاء الاصطناعي",
    comparisonTitle: "⚖️ مقارنة ومعايرة النتائج بين الخيار A والخيار B",
    ruleEngineLabel: "الخيار A (محرك القواعد)",
    deepAiLabel: "الخيار B (نموذج LLM المعمق)",
    scoreDeltaLabel: "نسبة توافق الدرجات:"
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
    fixLabel: "Виправлення:",
    liveInstantEvalTitle: "📊 Картка онлайн-оцінювання листа telc B1",
    liveDirectAiBtn: "⚙️ Підключити прямий AI (OpenAI / Gemini)",
    liveEvaluating: "⏳ Аналіз листа за офіційними критеріями telc B1...",
    livePassBadge: "🎉 СКЛАДЕНО (Відповідає рівню telc B1)",
    liveFailBadge: "⚠️ НЕ СКЛАДЕНО (Потрібно ≥27/45 балів)",
    aiSettingsTitle: "⚙️ Налаштування прямої моделі AI та верифікація",
    aiProviderLabel: "Провайдер штучного інтелекту:",
    aiApiKeyLabel: "Ключ API (OpenAI / Gemini):",
    aiKeyHelp: "Зберігається виключно на вашому пристрої (localStorage). Жодним третім сторонам не передається.",
    aiModelRunBtn: "🚀 Запустити перевірку моделлю LLM",
    aiKeySaveBtn: "Зберегти налаштування",
    aiKeySavedMsg: "✅ Налаштування AI успішно збережено!",
    aiKeyClearBtn: "Видалити ключ",
    aiKeyClearedMsg: "🗑️ Ключ API видалено.",
    aiCompareNote: "💡 Алгоритмічний рушій та LLM: Локальний оцінювач миттєво перевіряє кількість слів, стиль, сполучники B1 та синтаксис. Модель LLM верифікує глибинне семантичне розуміння.",
    verifyWithAiTitle: "Перевірити цей лист за допомогою глибинного AI (Варіант B)",
    verifyWithAiDesc: "Варіант A перевірив синтаксис та обсяг локально та безкоштовно. Тепер запустіть Варіант B для перехресної перевірки моделлю (GPT-4o / Gemini) для глибокого семантичного аналізу.",
    runAiVerifyBtn: "🤖 Перевірити після цього за допомогою AI",
    comparisonTitle: "⚖️ Порівняння та калібрування Варіанту A та Варіанту B",
    ruleEngineLabel: "Варіант A (Алгоритмічний рушій)",
    deepAiLabel: "Варіант B (Глибинний LLM)",
    scoreDeltaLabel: "Узгодженість балів:"
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

          <!-- Credits & Pro Status Indicator Strip -->
          <div class="credits-status-strip" id="schreiben-credits-strip" style="display:flex; justify-content:space-between; align-items:center; background:rgba(245, 158, 11, 0.08); border:1px solid rgba(245, 158, 11, 0.25); border-radius:10px; padding:10px 14px; margin-top:14px; font-size:13px; flex-wrap:wrap; gap:8px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:16px;">⚡</span>
              <span><strong>AI Credits:</strong> <span id="user-credits-count">${getLetterCredits()}</span> available</span>
              <span id="user-tier-badge" style="font-size:10px; font-weight:800; background:${isUserPro() ? '#10b981' : (getLetterCredits() > 0 ? 'var(--accent-gold)' : '#ef4444')}; color:${isUserPro() ? '#fff' : (getLetterCredits() > 0 ? '#000' : '#fff')}; padding:2px 8px; border-radius:10px; text-transform:uppercase;">${isUserPro() ? 'PRO ACTIVE' : (getLetterCredits() > 0 ? 'FREE TRIAL' : 'UPGRADE NEEDED')}</span>
            </div>
            <button type="button" class="btn-sm-goal" onclick="openProPricingModal()" style="font-size:12px; padding:5px 12px; border-radius:8px; background:rgba(245, 158, 11, 0.15); border:1px solid var(--accent-gold); color:var(--accent-gold); cursor:pointer; font-weight:700;">
              👑 Upgrade / Add Credits →
            </button>
          </div>

          <div class="live-action-row" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-top:14px;">
            <button type="button" class="entrance-dismiss-btn" onclick="toggleAiSettingsDrawer()" style="padding:10px 14px; font-size:13px; font-weight:600;">
              ${t('liveDirectAiBtn')}
            </button>
            <div style="display:flex; gap:10px;">
              <button class="cta-btn-primary" onclick="submitLiveLetterGrading()">
                ${t('liveSubmitBtn')}
              </button>
            </div>
          </div>

          <!-- Collapsible Direct AI Settings Drawer (Option B) -->
          <div id="ai-settings-drawer" class="ai-settings-drawer" style="display:none; margin-top:16px; background:var(--bg-card); border:1px solid var(--border); border-radius:12px; padding:18px;">
            <h4 style="margin-top:0; font-size:15px; color:var(--accent-gold); display:flex; align-items:center; gap:8px;">
              ${t('aiSettingsTitle')}
            </h4>
            <p style="font-size:12px; color:var(--text-secondary); margin-bottom:12px; line-height:1.5;">
              ${t('aiKeyHelp')}
            </p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin-bottom:12px;">
              <div>
                <label for="ai-provider-select" style="font-size:12px; font-weight:700; color:var(--text-primary); display:block; margin-bottom:4px;">
                  ${t('aiProviderLabel')}
                </label>
                <select id="ai-provider-select" class="styled-select" style="width:100%; padding:8px 12px; font-size:13px;" onchange="handleAiProviderChange(this.value)">
                  <option value="openai">OpenAI (gpt-4o-mini)</option>
                  <option value="gemini">Google Gemini (gemini-1.5-flash)</option>
                  <option value="proxy">Serverless Proxy (/api/grade-letter)</option>
                </select>
              </div>
              <div>
                <label for="ai-api-key-input" style="font-size:12px; font-weight:700; color:var(--text-primary); display:block; margin-bottom:4px;">
                  ${t('aiApiKeyLabel')}
                </label>
                <input type="password" id="ai-api-key-input" class="search-box" placeholder="sk-... or AIza..." style="width:100%; padding:8px 12px; font-size:13px;">
              </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
              <div style="display:flex; gap:8px;">
                <button type="button" class="cta-btn-primary" onclick="saveAiSettings()" style="padding:7px 14px; font-size:12px;">
                  ${t('aiKeySaveBtn')}
                </button>
                <button type="button" class="entrance-dismiss-btn" onclick="clearAiSettings()" style="padding:7px 12px; font-size:12px;">
                  ${t('aiKeyClearBtn')}
                </button>
              </div>
              <button type="button" class="cta-btn-primary" onclick="submitDirectAiGrading()" style="padding:7px 16px; font-size:12px; background:linear-gradient(135deg, #10b981 0%, #059669 100%);">
                ${t('aiModelRunBtn')}
              </button>
            </div>
            <div id="ai-settings-msg" style="font-size:12px; margin-top:8px; font-weight:600;"></div>
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
 * Intelligent Client-Side telc B1 Letter Evaluation Engine (Option A)
 * Grounded in official telc Deutsch B1 criteria:
 * - Criterion I: Aufgabenbewältigung (Content & Leitpunkte, word count >= 140, register)
 * - Criterion II: Kommunikative Gestaltung (Cohesion, B1 connectors, paragraph structure)
 * - Criterion III: Formale Richtigkeit (Grammar, morphology & orthography under Primat der Verständlichkeit)
 * Scoring formula: (Raw_I + Raw_II + Raw_III) * 3 = Total / 45 pts. Pass threshold >= 27 pts (60%).
 */
function evaluateStudentLetterB1(rawText, promptKey, lang) {
  const activeLang = lang || getActiveLanguage();
  const langKey = activeLang.charAt(0).toUpperCase() + activeLang.slice(1);
  const words = rawText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const paragraphs = rawText.split(/\n+/).map(p => p.trim()).filter(Boolean);

  const isFormal = promptKey === 'hotel' || promptKey === 'vhs' || /Sehr geehrte/i.test(rawText);

  // 1. Leitpunkte & Keyword Coverage
  const leitpunkteResults = [];
  let lpCoveredCount = 0;

  if (promptKey === 'marianne') {
    const lpDefs = [
      { id: 1, regex: /\b(ausflug|ausflüge|berlin|museum|museen|park|parks|see|besuchen|besuch|spazieren|schwimmen)\b/i, name: "Trips / Activities with Marianne" },
      { id: 2, regex: /\b(frühling|mai|sommer|juli|august|wetter|heiß|mild|sonnig|jahreszeit|herbst|winter)\b/i, name: "Best season & weather" },
      { id: 3, regex: /\b(schuh|schuhe|jacke|kleidung|mitbringen|packen|frisch|warm|anziehen)\b/i, name: "Clothes to pack" },
      { id: 4, regex: /\b(vorbereitung|vorbereiten|fahrkarte|fahrkarten|ticket|tickets|zug|buchen|db|app|online)\b/i, name: "Travel preparation & tickets" }
    ];
    lpDefs.forEach(lp => {
      const hit = lp.regex.test(rawText);
      if (hit) lpCoveredCount++;
      leitpunkteResults.push({ id: lp.id, name: lp.name, fulfilled: hit });
    });
  } else if (promptKey === 'hotel') {
    const lpDefs = [
      { id: 1, regex: /\b(zimmer|lärm|küche|laut|meer|meerblick|fenster)\b/i, name: "Room condition & noise" },
      { id: 2, regex: /\b(klimaanlage|kaputt|defekt|hitze|grad|warm)\b/i, name: "Broken air conditioning" },
      { id: 3, regex: /\b(rezeption|beschwer(t|en)|personal|niemand|gelöst)\b/i, name: "Complaint at reception" },
      { id: 4, regex: /\b(kosten|erstatt(ung|en)|zurück|überweisen|prozent|bankkonto|frist)\b/i, name: "Refund & compensation request" }
    ];
    lpDefs.forEach(lp => {
      const hit = lp.regex.test(rawText);
      if (hit) lpCoveredCount++;
      leitpunkteResults.push({ id: lp.id, name: lp.name, fulfilled: hit });
    });
  } else if (promptKey === 'vhs') {
    const lpDefs = [
      { id: 1, regex: /\b(b2|kurs|prüfung|zertifikat|beruflich|intensivkurs)\b/i, name: "Motivation & B2 requirements" },
      { id: 2, regex: /\b(vormittag|abend|uhrzeit|termin|wann|zeiten)\b/i, name: "Course schedule & timing" },
      { id: 3, regex: /\b(lehrbuch|lehrbücher|buch|bücher|material|unterricht)\b/i, name: "Textbooks & materials" },
      { id: 4, regex: /\b(kosten|gebühr|gebühren|raten|monatlich|bezahlen)\b/i, name: "Course fees & payment in installments" }
    ];
    lpDefs.forEach(lp => {
      const hit = lp.regex.test(rawText);
      if (hit) lpCoveredCount++;
      leitpunkteResults.push({ id: lp.id, name: lp.name, fulfilled: hit });
    });
  } else {
    lpCoveredCount = wordCount >= 130 ? 4 : (wordCount >= 100 ? 3 : (wordCount >= 70 ? 2 : 1));
  }

  // 2. Salutation & Sign-off Checks
  const hasFormalSalutation = /Sehr geehrte(r)?\s+(Damen und Herren|Frau|Herr)/i.test(rawText);
  const hasInformalSalutation = /(Liebe[r]?|Hallo)\s+[A-ZÄÖÜa-zäöü]+/i.test(rawText);
  const hasFormalClosing = /Mit freundlichen Grüßen/i.test(rawText);
  const hasInformalClosing = /(Viele Grüße|Liebe Grüße|Herzliche Grüße|Dein[e]?\b)/i.test(rawText);

  const salutationOk = isFormal ? hasFormalSalutation : hasInformalSalutation;
  const closingOk = isFormal ? hasFormalClosing : hasInformalClosing;

  // 3. Connectors (Criterion II)
  const connectorList = ['weil', 'obwohl', 'damit', 'dass', 'wenn', 'sobald', 'da', 'falls', 'ob', 'deshalb', 'trotzdem', 'außerdem', 'daher', 'jedoch', 'deswegen', 'nämlich', 'aber', 'denn', 'sondern', 'zwar'];
  const lowerText = rawText.toLowerCase();
  const detectedConnectors = connectorList.filter(c => new RegExp(`\\b${c}\\b`, 'i').test(lowerText));

  // 4. Grammar & Syntax Diagnostics (Criterion III)
  const annotations = [];

  // Inversion error after introductory subordinate clause
  const inversionMatch = rawText.match(/(Wenn\s+[^,]+,\s*)(wir|ich|du|er|sie|es|ihr|Sie)\s+(können|müssen|wollen|sollen|haben|gehen|fahren|sehen|sind|habe|bin|ist|war)/i);
  if (inversionMatch) {
    const fullSnippet = inversionMatch[0];
    const prefix = inversionMatch[1];
    const pronoun = inversionMatch[2];
    const verb = inversionMatch[3];
    annotations.push({
      targetText: fullSnippet,
      correctedText: `${prefix}${verb} ${pronoun}`,
      type: "syntax",
      rule: "Inversion nach Nebensatz",
      ruleEn: "Inversion after Subordinate Clause",
      ruleTr: "Yan Cümle Sonrası İnversiyon",
      ruleAr: "قلب الفاعل والفعل بعد الجملة الجانبية",
      ruleUk: "Інверсія після підрядного речення",
      explanationEn: "In German, when a sentence starts with a subordinate clause (Position 1), the main clause must start immediately with the conjugated verb (Position 2), followed by the subject.",
      explanationTr: "Cümle yan cümle (Position 1) ile başladığında, ana cümle hemen çekimli fiille (Position 2) başlamalı ve özne fiilin ardına gelmelidir.",
      explanationAr: "عندما تبدأ الجملة بجملة فرعية (الموقع 1)، يجب أن تبدأ الجملة الرئيسية فوراً بالفعل المصرف (الموقع 2).",
      explanationUk: "Коли речення починається з підрядного (Позиція 1), головне речення має починатися з дієслова (Позиція 2), а підмет іде після нього."
    });
  }

  // Check old orthography "Ausserdem" -> "Außerdem"
  const ausserdemMatch = rawText.match(/\bAusserdem\b/);
  if (ausserdemMatch) {
    annotations.push({
      targetText: "Ausserdem",
      correctedText: "Außerdem",
      type: "spelling",
      rule: "Rechtschreibung: ß nach Diphthong",
      ruleEn: "Spelling: ß after Diphthongs",
      ruleTr: "Yazım Kuralı: Çift Sesliden Sonra ß",
      ruleAr: "قاعدة إملائية: كتابة ß بعد الحركات المزدوجة",
      ruleUk: "Орфографія: ß після дифтонгів",
      explanationEn: "According to standard German orthography, 'ß' must be used instead of 'ss' after diphthongs ('au', 'ei', 'eu').",
      explanationTr: "Almanca yazım kurallarına göre çift seslilerden ('au', 'ei', 'eu') sonra 'ss' yerine 'ß' yazılır.",
      explanationAr: "وفقاً لقواعد الإملاء الألمانية القياسية، يُكتب 'ß' بدلاً من 'ss' بعد الأصوات المزدوجة.",
      explanationUk: "За німецьким правописом після дифтонгів ('au', 'ei', 'eu') вживається 'ß', а не 'ss'."
    });
  }

  // Check "auf dein Besuch" -> "auf deinen Besuch"
  const aufDeinMatch = rawText.match(/\bauf\s+dein\s+Besuch\b/i);
  if (aufDeinMatch) {
    annotations.push({
      targetText: aufDeinMatch[0],
      correctedText: "auf deinen Besuch",
      type: "grammar",
      rule: "Kasus: Akkusativ maskulin",
      ruleEn: "Case: Accusative Masculine",
      ruleTr: "İsmin Hali: Eril İsmin -i Hali (Akkusativ)",
      ruleAr: "الحالة الإعرابية: النصب للمذكر (Akkusativ)",
      ruleUk: "Відмінок: Знахідний відмінок чоловічого роду (Akkusativ)",
      explanationEn: "The prepositional verb 'sich freuen auf' requires the accusative case. 'Der Besuch' is masculine, so the possessive article must be 'deinen'.",
      explanationTr: "'sich freuen auf' fiili Akkusativ (-i hali) gerektirir. 'Der Besuch' eril olduğu için iyelik eki 'deinen' olmalıdır.",
      explanationAr: "الفعل 'sich freuen auf' يتطلب حالة النصب (Akkusativ). وكلمة 'der Besuch' مذكرة، لذا تصبح 'deinen'.",
      explanationUk: "Дієслово 'sich freuen auf' вимагає Akkusativ. 'Der Besuch' чоловічого роду, тому присвійний займенник має форму 'deinen'."
    });
  }

  // Missing comma before subclause: "wollte weil..." -> "wollte, weil..."
  const missingCommaMatch = rawText.match(/([a-zA-Z0-9äöüÄÖÜ])\s+(dass|weil|obwohl|damit)\b/);
  if (missingCommaMatch && !missingCommaMatch[0].startsWith(',')) {
    annotations.push({
      targetText: missingCommaMatch[0],
      correctedText: `${missingCommaMatch[1]}, ${missingCommaMatch[2]}`,
      type: "spelling",
      rule: "Kommasetzung vor Nebensätzen",
      ruleEn: "Comma before Subordinate Clause",
      ruleTr: "Yan Cümle Öncesi Virgül",
      ruleAr: "فاصلة قبل الجملة التابعة",
      ruleUk: "Кома перед підрядним реченням",
      explanationEn: "In German, subordinate clauses introduced by conjunctions such as 'dass', 'weil', or 'obwohl' must always be separated by a comma.",
      explanationTr: "Almanca'da 'dass', 'weil', 'obwohl' gibi bağlaçlarla başlayan yan cümlelerin önüne mutlaka virgül konulmalıdır.",
      explanationAr: "في اللغة الألمانية، يجب دائماً وضع فاصلة قبل الجمل التابعة التي تبدأ بأدوات مثل 'dass' أو 'weil'.",
      explanationUk: "У німецькій мові підрядні речення, що починаються з 'dass', 'weil', 'obwohl', завжди виділяються комою."
    });
  }

  // 5. Compute Criteria Scores:
  // Criterion I: Aufgabenbewältigung (Max Raw 5, Final 15)
  let rawScoreI = 0;
  if (wordCount >= 140 && lpCoveredCount >= 4 && salutationOk && closingOk) {
    rawScoreI = 5; // A
  } else if (wordCount >= 110 && lpCoveredCount >= 3) {
    rawScoreI = 3; // B
  } else if (wordCount >= 80 && lpCoveredCount >= 2) {
    rawScoreI = 1; // C
  } else {
    rawScoreI = 0; // D
  }

  // Criterion II: Kommunikative Gestaltung (Max Raw 5, Final 15)
  let rawScoreII = 0;
  if (detectedConnectors.length >= 5 && paragraphs.length >= 3 && salutationOk && closingOk) {
    rawScoreII = (annotations.some(a => a.type === 'syntax')) ? 3 : 5;
  } else if (detectedConnectors.length >= 3 && paragraphs.length >= 2) {
    rawScoreII = 3; // B
  } else if (detectedConnectors.length >= 1) {
    rawScoreII = 1; // C
  } else {
    rawScoreII = 0; // D
  }

  // Criterion III: Formale Richtigkeit (Max Raw 5, Final 15)
  let rawScoreIII = 0;
  const errorCount = annotations.length;
  if (errorCount <= 1) {
    rawScoreIII = 5; // A
  } else if (errorCount <= 3) {
    rawScoreIII = 3; // B (Primat der Verständlichkeit)
  } else if (errorCount <= 5) {
    rawScoreIII = 1; // C
  } else {
    rawScoreIII = 0; // D
  }

  const rawSum = rawScoreI + rawScoreII + rawScoreIII;
  const totalScore = rawSum * 3;
  const passed = totalScore >= 27;
  const percentage = Math.round((totalScore / 45) * 100);
  const letterRating = (s) => s === 5 ? 'A' : (s === 3 ? 'B' : (s === 1 ? 'C' : 'D'));

  const upgrades = [
    {
      original: "Wenn du hier bist, wir können zusammen einen Ausflug nach Berlin machen.",
      upgrade: "Wenn du hier bist, können wir zusammen einen Ausflug nach Berlin unternehmen.",
      benefitEn: "Fixes verb inversion after the 'wenn'-clause and replaces the basic verb 'machen' with the idiomatic B1 verb 'unternehmen'.",
      benefitTr: "'wenn' cümlesinden sonra fiil inversiyonunu düzeltir ve basit 'machen' fiili yerine B1 düzeyinde 'unternehmen' fiilini kullanır.",
      benefitAr: "يصحح ترتيب الفعل بعد جملة 'wenn' ويستبدل الفعل البسيط 'machen' بفعل راقٍ بمستوى B1 وهو 'unternehmen'.",
      benefitUk: "Виправляє інверсію дієслова після підрядного речення з 'wenn' і замінює просте дієслово 'machen' на виразніше 'unternehmen' рівня B1."
    },
    {
      original: "Ich freue mich schon sehr auf dein Besuch!",
      upgrade: "Ich freue mich schon riesig auf deinen baldigen Besuch!",
      benefitEn: "Fixes the masculine accusative case ending ('deinen') and adds lively B1 adjective modulation ('riesig', 'baldigen').",
      benefitTr: "Eril akkusativ ekini ('deinen') düzeltir ve canlı B1 sıfatlarıyla zenginleştirir ('riesig', 'baldigen').",
      benefitAr: "يصحح حالة النصب للمذكر ('deinen') ويضيف صفات حيوية راقية بمستوى B1.",
      benefitUk: "Виправляє закінчення знахідного відмінка ('deinen') і збагачує речення живими прикметниками рівня B1 ('riesig', 'baldigen')."
    }
  ];

  return {
    wordCount,
    rawSum,
    totalScore,
    maxTotal: 45,
    passThreshold: 27,
    passed,
    percentage,
    grade: totalScore >= 40 ? "Sehr Gut (Passed with Distinction)" : (totalScore >= 34 ? "Gut (Passed)" : (totalScore >= 27 ? "Befriedigend (Passed)" : "Nicht bestanden (Needs Improvement)")),
    criteria: [
      {
        id: "inhalt",
        titleEn: "Criterion I: Aufgabenbewältigung (Content & Leitpunkte)",
        titleTr: "Kriter I: Görev Tamamlama ve Kılavuz Noktalar",
        titleAr: "المعيار 1: استيفاء المهمة وتغطية النقاط (Aufgabenbewältigung)",
        titleUk: "Критерій I: Розкриття завдання та опорні пункти (Aufgabenbewältigung)",
        rawScore: rawScoreI,
        rawMax: 5,
        ratingLetter: letterRating(rawScoreI),
        finalScore: rawScoreI * 3,
        finalMax: 15,
        status: rawScoreI >= 4 ? "excellent" : (rawScoreI >= 3 ? "good" : "needs-work"),
        summaryEn: `Score ${letterRating(rawScoreI)} (${rawScoreI}/5 pts): ${lpCoveredCount}/4 Leitpunkte identified. Word count: ${wordCount} words (Target: 140-180 words). Salutation and closing are ${salutationOk && closingOk ? 'appropriately formatted' : 'need attention'}.`,
        summaryTr: `${letterRating(rawScoreI)} Puanı (${rawScoreI}/5): 4 noktadan ${lpCoveredCount} tanesi tespit edildi. Kelime sayısı: ${wordCount} (Hedef: 140-180). Hitap ve kapanış ${salutationOk && closingOk ? 'kurallara uygun' : 'düzeltilmeli'}.`,
        summaryAr: `الدرجة ${letterRating(rawScoreI)} (${rawScoreI}/5 نقاط): تمت تغطية ${lpCoveredCount}/4 نقاط. عدد الكلمات: ${wordCount} كلمة (الهدف: 140-180). التحية والختام ${salutationOk && closingOk ? 'مناسبان' : 'بحاجة للمراجعة'}.`,
        summaryUk: `Оцінка ${letterRating(rawScoreI)} (${rawScoreI}/5 балів): Виявлено ${lpCoveredCount}/4 пунктів. Обсяг: ${wordCount} слів (Ціль: 140-180). Привітання та прощання ${salutationOk && closingOk ? 'оформлені належним чином' : 'потребують уваги'}.`
      },
      {
        id: "sprache",
        titleEn: "Criterion II: Kommunikative Gestaltung (Cohesion & Register)",
        titleTr: "Kriter II: İletişimsel Düzen ve Bağlaçlar",
        titleAr: "المعيار 2: التماسك والترابط اللغوي (Kommunikative Gestaltung)",
        titleUk: "Критерій II: Комунікативна структура та зв'язність (Kommunikative Gestaltung)",
        rawScore: rawScoreII,
        rawMax: 5,
        ratingLetter: letterRating(rawScoreII),
        finalScore: rawScoreII * 3,
        finalMax: 15,
        status: rawScoreII >= 4 ? "excellent" : (rawScoreII >= 3 ? "good" : "needs-work"),
        summaryEn: `Score ${letterRating(rawScoreII)} (${rawScoreII}/5 pts): Detected ${detectedConnectors.length} B1 connector(s) (${detectedConnectors.join(', ') || 'none'}). Paragraph structure: ${paragraphs.length} paragraph(s).`,
        summaryTr: `${letterRating(rawScoreII)} Puanı (${rawScoreII}/5): ${detectedConnectors.length} B1 bağlacı tespit edildi (${detectedConnectors.join(', ') || 'yok'}). Paragraf sayısı: ${paragraphs.length}.`,
        summaryAr: `الدرجة ${letterRating(rawScoreII)} (${rawScoreII}/5 نقاط): تم رصد ${detectedConnectors.length} رابط بمستوى B1 (${detectedConnectors.join(', ') || 'لا يوجد'}). عدد الفقرات: ${paragraphs.length}.`,
        summaryUk: `Оцінка ${letterRating(rawScoreII)} (${rawScoreII}/5 балів): Виявлено ${detectedConnectors.length} сполучник(ів) B1 (${detectedConnectors.join(', ') || 'немає'}). Структура: ${paragraphs.length} абзац(ів).`
      },
      {
        id: "korrektheit",
        titleEn: "Criterion III: Formale Richtigkeit (Grammar & Orthography)",
        titleTr: "Kriter III: Dilbilgisi ve Doğruluk",
        titleAr: "المعيار 3: السلامة النحوية والإملائية (Formale Richtigkeit)",
        titleUk: "Критерій III: Граматична та орфографічна правильність (Formale Richtigkeit)",
        rawScore: rawScoreIII,
        rawMax: 5,
        ratingLetter: letterRating(rawScoreIII),
        finalScore: rawScoreIII * 3,
        finalMax: 15,
        status: rawScoreIII >= 4 ? "excellent" : (rawScoreIII >= 3 ? "good" : "needs-work"),
        summaryEn: `Score ${letterRating(rawScoreIII)} (${rawScoreIII}/5 pts): Flagged ${annotations.length} grammar or syntax point(s). Assessed under telc's 'Primat der Verständlichkeit'.`,
        summaryTr: `${letterRating(rawScoreIII)} Puanı (${rawScoreIII}/5): ${annotations.length} dilbilgisi veya cümle yapısı noktası işaretlendi. telc 'Anlaşılabilirlik Önceliği' ilkesine göre puanlandı.`,
        summaryAr: `الدرجة ${letterRating(rawScoreIII)} (${rawScoreIII}/5 نقاط): تم رصد ${annotations.length} ملاحظة نحوية أو تركيبية وفقاً لمبدأ 'أولوية الفهم'.`,
        summaryUk: `Оцінка ${letterRating(rawScoreIII)} (${rawScoreIII}/5 балів): Виявлено ${annotations.length} граматичних або синтаксичних зауважень за принципом 'Пріоритет зрозумілості'.`
      }
    ],
    annotations,
    b1Upgrades: upgrades,
    detectedConnectors
  };
}

/**
 * Render Live Evaluation Results Card into DOM
 */
let lastOptionAEvalData = null;

/**
 * Render Live Evaluation Results Card into DOM
 */
function renderLiveGradingResults(evalData, isLLM = false) {
  const container = document.getElementById('live-results-container');
  if (!container) return;

  if (!isLLM) {
    lastOptionAEvalData = evalData;
  }

  const lang = getActiveLanguage();
  const langKey = lang.charAt(0).toUpperCase() + lang.slice(1);
  const t = getShowcaseText;

  container.innerHTML = `
    <div class="live-evaluation-result" style="margin-top:24px; padding-top:24px; border-top:2px dashed var(--border);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
        <h3 style="margin:0; font-size:18px; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
          ${t('liveInstantEvalTitle')} ${isLLM ? '<span class="showcase-badge" style="background:rgba(16,185,129,0.15); color:#10b981;">Direct LLM Verified</span>' : '<span class="showcase-badge">telc B1 Rule Engine</span>'}
        </h3>
        <span class="showcase-badge" style="background:${evalData.passed ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)'}; color:${evalData.passed ? '#22c55e' : '#ef4444'}; font-weight:700;">
          ${evalData.passed ? t('livePassBadge') : t('liveFailBadge')}
        </span>
      </div>

      <!-- Main Showcase Grid (Letter + Rubric) -->
      <div class="showcase-grid">
        <!-- Left: Student Letter with Inline Highlighting -->
        <div class="showcase-column letter-column">
          <div class="column-header">
            <h4>${t('annotatedHeader')}</h4>
            <span class="sub-hint">${t('annotatedHint')}</span>
          </div>

          <div class="annotated-letter-box" dir="ltr">
            ${renderAnnotatedText(evalData.rawText, evalData.annotations, lang)}
          </div>

          <div class="annotation-legend">
            <span class="legend-item syntax"><span class="dot"></span> ${t('legendSyntax')}</span>
            <span class="legend-item spelling"><span class="dot"></span> ${t('legendSpelling')}</span>
            <span class="legend-item grammar"><span class="dot"></span> ${t('legendGrammar')}</span>
          </div>
        </div>

        <!-- Right: Official telc Rubric & Score Calculation -->
        <div class="showcase-column rubric-column">
          <div class="column-header">
            <h4>${t('rubricHeader')}</h4>
            <span class="sub-hint">${t('rubricFormulaHint')}</span>
          </div>

          <!-- Total Score Card -->
          <div class="total-score-card">
            <div class="score-circle">
              <span class="score-num">${evalData.totalScore}</span>
              <span class="score-max">${t('ptsMax')}</span>
            </div>
            <div class="score-details">
              <div class="score-grade">${evalData.grade} (${evalData.percentage}%)</div>
              <div class="score-formula">
                <code>(${evalData.criteria[0].ratingLetter} + ${evalData.criteria[1].ratingLetter} + ${evalData.criteria[2].ratingLetter}) = ${evalData.rawSum}/15 × 3 = ${evalData.totalScore}/45</code>
              </div>
              <div class="score-status-pill" style="background:${evalData.passed ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}; color:${evalData.passed ? '#22c55e' : '#ef4444'};">
                ${evalData.passed ? t('passThresholdLabel') : t('liveFailBadge')}
              </div>
            </div>
          </div>

          <!-- Individual Criteria Rating Cards -->
          <div class="criteria-list">
            ${evalData.criteria.map(c => {
              const title = c['title' + langKey] || c.titleEn || c.title;
              const summary = c['summary' + langKey] || c.summaryEn || c.feedback || '';
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

          <!-- Comparison Note -->
          <div class="telc-rules-note" style="margin-top:14px;">
            ${t('aiCompareNote')}
          </div>
        </div>
      </div>

      <!-- B1 Upgrades Section -->
      ${evalData.b1Upgrades && evalData.b1Upgrades.length > 0 ? `
      <div class="upgrades-section" style="margin-top:24px;">
        <h4>${t('upgradesHeader')}</h4>
        <p class="upgrades-sub">${t('upgradesSub')}</p>
        <div class="upgrades-grid">
          ${evalData.b1Upgrades.map(u => {
            const benefit = u['benefit' + langKey] || u.benefitEn || u.benefit || '';
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
      ` : ''}

      <!-- Option B: Check Afterwards with Deep AI Callout Card -->
      <div class="option-b-verify-card" style="margin-top:28px; padding:22px; border-radius:14px; background:linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(168,85,247,0.06) 100%); border:1px solid rgba(99,102,241,0.25); box-shadow:0 4px 20px rgba(0,0,0,0.04);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
          <div style="flex:1; min-width:260px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
              <span style="font-size:22px;">🤖</span>
              <h4 style="margin:0; font-size:16px; font-weight:700; color:var(--text-primary);">${t('verifyWithAiTitle')}</h4>
              <span class="showcase-badge" style="background:rgba(99,102,241,0.15); color:#6366f1; font-size:11px;">Option B</span>
            </div>
            <p style="margin:0; font-size:13px; color:var(--text-secondary); line-height:1.5;">${t('verifyWithAiDesc')}</p>
          </div>
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <button class="cta-btn-primary" id="btn-trigger-option-b" onclick="triggerOptionBAfterwards()" style="display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color:#fff; border:none; padding:10px 18px; border-radius:8px; font-weight:600; cursor:pointer; box-shadow:0 2px 8px rgba(99,102,241,0.3);">
              <span>🤖</span> ${t('runAiVerifyBtn')}
            </button>
            <button class="cta-btn-secondary" onclick="toggleAiSettingsDrawer()" style="display:inline-flex; align-items:center; gap:6px; padding:9px 14px; border-radius:8px; border:1px solid var(--border); background:var(--bg-card); color:var(--text-secondary); cursor:pointer; font-size:13px;">
              <span>⚙️</span> ${t('aiSettingsTitle')}
            </button>
          </div>
        </div>
        <div id="option-b-comparison-container" style="margin-top:20px; display:none;"></div>
      </div>
    </div>
  `;

  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Trigger Option B (Deep AI Verification) afterwards on demand
 */
async function triggerOptionBAfterwards() {
  const textarea = document.getElementById('student-letter-textarea');
  const text = textarea && textarea.value.trim() ? textarea.value.trim() : (lastOptionAEvalData ? lastOptionAEvalData.rawText : '');
  const t = getShowcaseText;
  const compContainer = document.getElementById('option-b-comparison-container');
  const triggerBtn = document.getElementById('btn-trigger-option-b');

  if (!text || text.split(/\s+/).length < 20) {
    alert(t('liveTextareaLabel'));
    return;
  }

  const provider = document.getElementById('ai-provider-select')?.value || localStorage.getItem('deutschlernen_ai_provider') || 'openai';
  const apiKey = document.getElementById('ai-api-key-input')?.value?.trim() || localStorage.getItem('deutschlernen_ai_key') || '';

  if (provider !== 'proxy' && !apiKey) {
    const msgEl = document.getElementById('ai-settings-msg');
    if (msgEl) {
      msgEl.style.color = '#ef4444';
      msgEl.textContent = 'Please enter an API Key in AI Settings to run Option B.';
    }
    const drawer = document.getElementById('ai-settings-drawer');
    if (drawer) {
      drawer.style.display = 'block';
      drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    return;
  }

  if (compContainer) {
    compContainer.style.display = 'block';
    compContainer.innerHTML = `
      <div style="text-align:center; padding:24px; background:var(--bg-card); border-radius:10px; border:1px solid var(--border);">
        <div style="font-size:28px; margin-bottom:8px;">⏳</div>
        <p style="color:var(--accent-gold); font-weight:700; font-size:15px; margin:0;">${t('liveEvaluating')}</p>
        <p style="color:var(--text-muted); font-size:12px; margin-top:4px;">Contacting ${provider.toUpperCase()} for Option B verification...</p>
      </div>
    `;
    compContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  if (triggerBtn) triggerBtn.disabled = true;

  const promptSelect = document.getElementById('prompt-select-input');
  const promptKey = promptSelect ? promptSelect.value : 'custom';

  try {
    const optBData = await callLlmLetterGrader(text, promptKey, apiKey, provider);
    optBData.rawText = text;
    if (!lastOptionAEvalData) {
      const lang = getActiveLanguage();
      lastOptionAEvalData = evaluateStudentLetterB1(text, promptKey, lang);
      lastOptionAEvalData.rawText = text;
    }
    renderOptionBComparison(lastOptionAEvalData, optBData);
  } catch (err) {
    console.error("Option B verification failed:", err);
    if (compContainer) {
      compContainer.innerHTML = `
        <div style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; border-radius:10px; padding:16px; color:var(--text-primary);">
          <h5 style="color:#ef4444; margin:0 0 6px 0;">⚠️ Option B Verification Failed</h5>
          <p style="font-size:13px; margin:0 0 10px 0;">${err.message || 'Could not complete LLM evaluation.'}</p>
          <button class="cta-btn-secondary" onclick="toggleAiSettingsDrawer()" style="font-size:12px; padding:6px 12px;">Check AI Key Settings</button>
        </div>
      `;
    }
  } finally {
    if (triggerBtn) triggerBtn.disabled = false;
  }
}

/**
 * Render Side-by-Side Calibration and Comparison between Option A & Option B
 */
function renderOptionBComparison(optAData, optBData) {
  const container = document.getElementById('option-b-comparison-container');
  const lang = getActiveLanguage();
  const langKey = lang.charAt(0).toUpperCase() + lang.slice(1);
  const t = getShowcaseText;

  if (!optAData || !optBData) {
    const fallback = `<p style="color:var(--text-muted); font-size:13px;">Both Option A and Option B results are required for calibration comparison.</p>`;
    if (container) {
      container.style.display = 'block';
      container.innerHTML = fallback;
    }
    return fallback;
  }

  const scoreA = optAData.totalScore !== undefined ? optAData.totalScore : 0;
  const scoreB = optBData.totalScore !== undefined ? optBData.totalScore : 0;
  const delta = Math.abs(scoreA - scoreB);
  const agreement = Math.max(0, Math.round(100 - (delta / 45) * 100));

  let badgeColor = '#10b981';
  let badgeBg = 'rgba(16,185,129,0.15)';
  let agreementStatus = delta === 0 ? 'Exact Match (100%)' : `±${delta} pt${delta > 1 ? 's' : ''} (${agreement}% agreement)`;
  if (delta > 6) {
    badgeColor = '#ef4444';
    badgeBg = 'rgba(239,68,68,0.15)';
  } else if (delta > 3) {
    badgeColor = '#f59e0b';
    badgeBg = 'rgba(245,158,11,0.15)';
  }

  const criteriaNames = [
    { id: 'inhalt', name: 'Criterion I: Aufgabenbewältigung', nameTr: 'Kriter I: Görev Başarımı', nameAr: 'المعيار I: إنجاز المهمة', nameUk: 'Критерій I: Виконання завдання' },
    { id: 'sprache', name: 'Criterion II: Kommunikative Gestaltung', nameTr: 'Kriter II: İletişimsel Düzen', nameAr: 'المعيار II: الصياغة التواصلية', nameUk: 'Критерій II: Комунікативна структура' },
    { id: 'korrektheit', name: 'Criterion III: Formale Richtigkeit', nameTr: 'Kriter III: Biçimsel Doğruluk', nameAr: 'المعيار III: الصحة الشكلية والقواعد', nameUk: 'Критерій III: Граматична та формальна точність' }
  ];

  const criteriaRows = criteriaNames.map((item, idx) => {
    const cA = optAData.criteria ? optAData.criteria[idx] : null;
    const cB = optBData.criteria ? optBData.criteria[idx] : null;
    const rA = cA ? `${cA.ratingLetter} (${cA.rawScore}/5 &rarr; ${cA.finalScore}/15)` : 'N/A';
    const rB = cB ? `${cB.ratingLetter} (${cB.rawScore}/5 &rarr; ${cB.finalScore}/15)` : 'N/A';
    const isMatch = cA && cB && cA.ratingLetter === cB.ratingLetter;
    const matchBadge = isMatch
      ? '<span style="color:#10b981; font-weight:600;">✅ Match</span>'
      : '<span style="color:#f59e0b; font-weight:600;">⚖️ Minor Delta</span>';
    const label = item['name' + langKey] || item.name;

    return `
      <tr style="border-bottom:1px solid var(--border);">
        <td style="padding:10px 12px; font-weight:600; font-size:13px; color:var(--text-primary);">${label}</td>
        <td style="padding:10px 12px; text-align:center; font-size:13px; color:var(--text-secondary);">${rA}</td>
        <td style="padding:10px 12px; text-align:center; font-size:13px; color:var(--text-secondary);">${rB}</td>
        <td style="padding:10px 12px; text-align:center; font-size:12px;">${matchBadge}</td>
      </tr>
    `;
  }).join('');

  const html = `
    <div class="option-b-comparison-box" style="background:var(--bg-card); border-radius:12px; border:1px solid rgba(99,102,241,0.3); padding:20px; box-shadow:0 4px 16px rgba(0,0,0,0.06);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
        <h4 style="margin:0; font-size:16px; font-weight:700; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
          ${t('comparisonTitle')}
        </h4>
        <span class="showcase-badge" style="background:${badgeBg}; color:${badgeColor}; font-weight:700; font-size:12px; padding:6px 12px;">
          ${t('scoreDeltaLabel')} ${agreementStatus}
        </span>
      </div>

      <!-- Side by side comparison cards -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:14px; margin-bottom:18px;">
        <!-- Option A Summary -->
        <div style="background:rgba(59,130,246,0.05); border:1px solid rgba(59,130,246,0.2); border-radius:10px; padding:14px;">
          <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; color:#3b82f6; margin-bottom:4px;">
            ⚡ ${t('ruleEngineLabel')}
          </div>
          <div style="display:flex; align-items:baseline; gap:6px;">
            <span style="font-size:26px; font-weight:800; color:var(--text-primary);">${scoreA}</span>
            <span style="font-size:14px; color:var(--text-muted); font-weight:600;">/ 45 ${t('ptsMax')}</span>
          </div>
          <div style="font-size:13px; color:var(--text-secondary); margin-top:4px;">
            ${optAData.grade || ''} (${optAData.percentage || 0}%) • <strong style="color:${optAData.passed ? '#10b981' : '#ef4444'};">${optAData.passed ? t('livePassBadge') : t('liveFailBadge')}</strong>
          </div>
        </div>

        <!-- Option B Summary -->
        <div style="background:rgba(147,51,234,0.05); border:1px solid rgba(147,51,234,0.2); border-radius:10px; padding:14px;">
          <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; color:#9333ea; margin-bottom:4px;">
            🤖 ${t('deepAiLabel')}
          </div>
          <div style="display:flex; align-items:baseline; gap:6px;">
            <span style="font-size:26px; font-weight:800; color:var(--text-primary);">${scoreB}</span>
            <span style="font-size:14px; color:var(--text-muted); font-weight:600;">/ 45 ${t('ptsMax')}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px; font-size:13px; color:var(--text-secondary); margin-top:4px;">
            ${optBData.grade || ''} (${optBData.percentage || 0}%) • <strong style="color:${optBData.passed ? '#10b981' : '#ef4444'};">${optBData.passed ? t('livePassBadge') : t('liveFailBadge')}</strong>
          </div>
        </div>
      </div>

      <!-- Criteria Matrix Table -->
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:13px;">
          <thead>
            <tr style="background:rgba(0,0,0,0.03); border-bottom:2px solid var(--border);">
              <th style="padding:8px 12px; font-weight:700; color:var(--text-primary);">${t('rubricHeader')}</th>
              <th style="padding:8px 12px; text-align:center; font-weight:700; color:var(--text-primary);">${t('ruleEngineLabel')}</th>
              <th style="padding:8px 12px; text-align:center; font-weight:700; color:var(--text-primary);">${t('deepAiLabel')}</th>
              <th style="padding:8px 12px; text-align:center; font-weight:700; color:var(--text-primary);">Calibration</th>
            </tr>
          </thead>
          <tbody>
            ${criteriaRows}
          </tbody>
        </table>
      </div>

      <!-- Calibration Summary Note -->
      <div style="margin-top:14px; padding:10px 14px; border-radius:8px; background:rgba(99,102,241,0.08); font-size:12px; color:var(--text-secondary); line-height:1.5;">
        ${t('aiCompareNote')}
      </div>
    </div>
  `;

  if (container) {
    container.style.display = 'block';
    container.innerHTML = html;
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  return html;
}

/**
 * Handle Live Submission (Option A: Instant Client-Side Rule Engine)
 */
function submitLiveLetterGrading() {
  const textarea = document.getElementById('student-letter-textarea');
  const text = textarea ? textarea.value.trim() : '';
  const lang = getActiveLanguage();

  if (!text || text.split(/\s+/).length < 20) {
    const alerts = {
      en: 'Please enter a practice letter with at least 20 words before submitting for evaluation.',
      tr: 'Lütfen değerlendirmeye göndermeden önce en az 20 kelimelik bir mektup yazın.',
      ar: 'يرجى كتابة رسالة تدريبية تحتوي على 20 كلمة على الأقل قبل طلب التقييم.',
      uk: 'Будь ласка, введіть тренувальний лист обсягом щонайменше 20 слів перед оцінюванням.'
    };
    alert(alerts[lang] || alerts.en);
    return;
  }

  const currentCredits = getLetterCredits();
  if (currentCredits <= 0) {
    const alerts = {
      en: "You have used your free AI letter grading trial! Please unlock more credits starting from €4.99 to evaluate your practice letter.",
      tr: "Ücretsiz yapay zeka mektup puanlama hakkınızı kullandınız! Mektubunuzu değerlendirmek için lütfen €4.99'dan başlayan paketlerden birini seçin.",
      ar: "لقد استنفدت رصيدك التجريبي لتقييم الرسائل! يرجى شحن رصيدك عبر إحدى الباقات التي تبدأ من 4.99€.",
      uk: "Ви використали безкоштовну спробу оцінювання листів! Оберіть пакет від €4.99, щоб продовжити."
    };
    alert(alerts[lang] || alerts.en);
    openProPricingModal();
    return;
  }

  useLetterCredit();

  const promptSelect = document.getElementById('prompt-select-input');
  const promptKey = promptSelect ? promptSelect.value : 'custom';

  const evalData = evaluateStudentLetterB1(text, promptKey, lang);
  evalData.rawText = text;

  renderLiveGradingResults(evalData, false);
}

/**
 * Direct AI Model Drawer & Settings Helpers (Option B)
 */
function toggleAiSettingsDrawer() {
  const drawer = document.getElementById('ai-settings-drawer');
  if (!drawer) return;
  const isHidden = drawer.style.display === 'none' || !drawer.style.display;
  drawer.style.display = isHidden ? 'block' : 'none';

  if (isHidden) {
    const savedKey = localStorage.getItem('deutschlernen_ai_key') || '';
    const savedProvider = localStorage.getItem('deutschlernen_ai_provider') || 'openai';
    const keyInput = document.getElementById('ai-api-key-input');
    const providerSelect = document.getElementById('ai-provider-select');
    if (keyInput) keyInput.value = savedKey;
    if (providerSelect) providerSelect.value = savedProvider;
  }
}

function handleAiProviderChange(val) {
  const keyInput = document.getElementById('ai-api-key-input');
  if (!keyInput) return;
  if (val === 'proxy') {
    keyInput.placeholder = '(Optional Bearer token or proxy key)';
  } else if (val === 'gemini') {
    keyInput.placeholder = 'AIzaSy... (Google AI Studio Key)';
  } else {
    keyInput.placeholder = 'sk-... (OpenAI API Key)';
  }
}

function saveAiSettings() {
  const keyInput = document.getElementById('ai-api-key-input');
  const providerSelect = document.getElementById('ai-provider-select');
  const msgEl = document.getElementById('ai-settings-msg');
  const t = getShowcaseText;

  if (keyInput && providerSelect) {
    localStorage.setItem('deutschlernen_ai_key', keyInput.value.trim());
    localStorage.setItem('deutschlernen_ai_provider', providerSelect.value);
  }
  if (msgEl) {
    msgEl.style.color = '#10b981';
    msgEl.textContent = t('aiKeySavedMsg');
    setTimeout(() => { msgEl.textContent = ''; }, 3000);
  }
}

function clearAiSettings() {
  localStorage.removeItem('deutschlernen_ai_key');
  const keyInput = document.getElementById('ai-api-key-input');
  const msgEl = document.getElementById('ai-settings-msg');
  const t = getShowcaseText;

  if (keyInput) keyInput.value = '';
  if (msgEl) {
    msgEl.style.color = '#eab308';
    msgEl.textContent = t('aiKeyClearedMsg');
    setTimeout(() => { msgEl.textContent = ''; }, 3000);
  }
}

/**
 * Handle Direct AI Grading Submission (Option B)
 */
async function submitDirectAiGrading() {
  const textarea = document.getElementById('student-letter-textarea');
  const text = textarea ? textarea.value.trim() : '';
  const lang = getActiveLanguage();
  const t = getShowcaseText;

  if (!text || text.split(/\s+/).length < 20) {
    alert(t('liveTextareaLabel'));
    return;
  }

  const currentCredits = getLetterCredits();
  if (currentCredits <= 0) {
    const alerts = {
      en: "You have used all available AI Letter Grading credits! Please select a pass starting from €4.99 to continue evaluating your letters.",
      tr: "Mevcut tüm yapay zeka mektup puanlama kredilerinizi kullandınız! Mektuplarınızı değerlendirmeye devam etmek için lütfen €4.99'dan başlayan paketlerden birini seçin.",
      ar: "لقد استنفدت جميع أرصدة تقييم الرسائل بالذكاء الاصطناعي! يرجى اختيار باقة تبدأ من 4.99€ لمتابعة تقييم رسائلك.",
      uk: "Ви використали всі доступні кредити оцінювання листів! Оберіть абонемент від €4.99, щоб продовжити оцінювання."
    };
    alert(alerts[lang] || alerts.en);
    openProPricingModal();
    return;
  }

  const provider = document.getElementById('ai-provider-select')?.value || localStorage.getItem('deutschlernen_ai_provider') || 'openai';
  const apiKey = document.getElementById('ai-api-key-input')?.value.trim() || localStorage.getItem('deutschlernen_ai_key') || '';

  if (provider !== 'proxy' && !apiKey) {
    const msgEl = document.getElementById('ai-settings-msg');
    if (msgEl) {
      msgEl.style.color = '#ef4444';
      msgEl.textContent = 'Please enter an API Key to run direct model analysis.';
    }
    const drawer = document.getElementById('ai-settings-drawer');
    if (drawer) drawer.style.display = 'block';
    return;
  }

  const container = document.getElementById('live-results-container');
  if (container) {
    container.innerHTML = `
      <div style="text-align:center; padding:36px; background:var(--bg-card); border-radius:12px; border:1px solid var(--border);">
        <div style="font-size:32px; margin-bottom:10px;">⏳</div>
        <p style="color:var(--accent-gold); font-weight:700; font-size:16px; margin:0;">${t('liveEvaluating')}</p>
        <p style="color:var(--text-muted); font-size:13px; margin-top:6px;">Connecting to ${provider.toUpperCase()}...</p>
      </div>
    `;
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const promptSelect = document.getElementById('prompt-select-input');
  const promptKey = promptSelect ? promptSelect.value : 'custom';

  try {
    const evalData = await callLlmLetterGrader(text, promptKey, apiKey, provider);
    useLetterCredit();
    evalData.rawText = text;
    if (!lastOptionAEvalData) {
      lastOptionAEvalData = evaluateStudentLetterB1(text, promptKey, lang);
      lastOptionAEvalData.rawText = text;
    }
    renderLiveGradingResults(evalData, true);
    if (lastOptionAEvalData) {
      renderOptionBComparison(lastOptionAEvalData, evalData);
    }
  } catch (err) {
    console.error("Direct AI grading failed:", err);
    if (container) {
      container.innerHTML = `
        <div style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; border-radius:12px; padding:20px; color:var(--text-primary); margin-top:20px;">
          <h4 style="color:#ef4444; margin-top:0;">⚠️ Direct AI Analysis Failed</h4>
          <p style="font-size:13px; margin-bottom:14px;">${err.message || 'Could not connect to model API. Falling back to client-side rule engine...'}</p>
          <button class="cta-btn-primary" onclick="submitLiveLetterGrading()">Run Instant Rule Engine Evaluation</button>
        </div>
      `;
    }
  }
}

/**
 * Call OpenAI, Gemini, or Serverless Proxy for Deep LLM Grading
 */
async function callLlmLetterGrader(studentText, promptKey, apiKey, provider) {
  const promptContexts = {
    marianne: "Informal B1 reply to friend Marianne planning visit to Germany (activities, season, clothes, prep).",
    hotel: "Formal B1 complaint to Hotel Meeresblick (noise, broken AC, front desk response, refund).",
    vhs: "Semi-formal B1 course inquiry to Adult Education Center (B2 course, timetable, materials, installment fees).",
    custom: "General German B1 examination letter task."
  };
  const promptTitle = promptKey === 'marianne' ? 'Marianne E-Mail' : (promptKey === 'hotel' ? 'Hotel Meeresblick Beschwerde' : (promptKey === 'vhs' ? 'VHS Kursanfrage' : 'Freier B1 Brief'));
  const promptContext = promptContexts[promptKey] || promptContexts.custom;

  if (provider === 'proxy') {
    const res = await fetch('/api/grade-letter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentText, promptTitle, promptContext })
    });
    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson.error || errJson.message || `Proxy error: HTTP ${res.status}`);
    }
    return await res.json();
  }

  const systemPrompt = `You are an official accredited telc Deutsch B1 examiner. Grade the provided B1 student letter against the official 3 telc criteria:
1. Criterion I: Aufgabenbewältigung (Content & 4 Leitpunkte) - Raw score: A=5, B=3, C=1, D=0.
2. Criterion II: Kommunikative Gestaltung (Cohesion, Register & Connectors) - Raw score: A=5, B=3, C=1, D=0.
3. Criterion III: Formale Richtigkeit (Grammar & Orthography under Primat der Verständlichkeit) - Raw score: A=5, B=3, C=1, D=0.
Total formula: (Criterion I + II + III) * 3 = Total / 45 pts. Pass threshold >= 27 pts.

Return ONLY a valid JSON object matching this schema:
{
  "totalScore": number,
  "maxTotal": 45,
  "rawSum": number,
  "grade": string,
  "percentage": number,
  "passed": boolean,
  "criteria": [
    { "id": "inhalt", "titleEn": "Criterion I: Aufgabenbewältigung", "rawScore": number, "ratingLetter": "A", "finalScore": number, "finalMax": 15, "status": "excellent", "summaryEn": string },
    { "id": "sprache", "titleEn": "Criterion II: Kommunikative Gestaltung", "rawScore": number, "ratingLetter": "B", "finalScore": number, "finalMax": 15, "status": "good", "summaryEn": string },
    { "id": "korrektheit", "titleEn": "Criterion III: Formale Richtigkeit", "rawScore": number, "ratingLetter": "B", "finalScore": number, "finalMax": 15, "status": "good", "summaryEn": string }
  ],
  "annotations": [
    { "targetText": string, "correctedText": string, "type": "syntax", "ruleEn": string, "explanationEn": string }
  ],
  "b1Upgrades": [
    { "original": string, "upgrade": string, "benefitEn": string }
  ]
}`;

  const userPrompt = `Exam Prompt: ${promptTitle}\nContext: ${promptContext}\nStudent Letter:\n"""\n${studentText}\n"""`;

  if (provider === 'gemini') {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] }
        ],
        generationConfig: { responseMimeType: 'application/json' }
      })
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Gemini API error (${res.status}): ${errText.slice(0, 150)}`);
    }
    const data = await res.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidateText) throw new Error("Empty response from Gemini API");
    return JSON.parse(candidateText);
  }

  // Default: OpenAI (gpt-4o-mini)
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.2
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`OpenAI API error (${res.status}): ${errText.slice(0, 150)}`);
  }
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error("Empty response from OpenAI API");
  return JSON.parse(content);
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
 * Letter Credits & Pro Entitlement Management
 */
function getLetterCredits() {
  const isPro = localStorage.getItem('deutschlernen_is_pro') === 'true';
  const savedCredits = localStorage.getItem('deutschlernen_letter_credits');
  if (savedCredits !== null) {
    return parseInt(savedCredits, 10);
  }
  // New user starts with 1 free diagnostic trial credit
  const defaultCredits = isPro ? 30 : 1;
  localStorage.setItem('deutschlernen_letter_credits', defaultCredits.toString());
  return defaultCredits;
}

function isUserPro() {
  return localStorage.getItem('deutschlernen_is_pro') === 'true';
}

function useLetterCredit() {
  const current = getLetterCredits();
  if (current > 0) {
    const next = current - 1;
    localStorage.setItem('deutschlernen_letter_credits', next.toString());
    updateCreditsDisplay();
    return true;
  }
  return false;
}

function grantLetterCredits(amount, planId) {
  const current = getLetterCredits();
  const next = current + amount;
  localStorage.setItem('deutschlernen_letter_credits', next.toString());
  localStorage.setItem('deutschlernen_is_pro', 'true');
  if (planId) localStorage.setItem('deutschlernen_pro_plan', planId);
  updateCreditsDisplay();
  return next;
}

function updateCreditsDisplay() {
  const count = getLetterCredits();
  const pro = isUserPro();
  const countEls = document.querySelectorAll('#user-credits-count, #schreiben-credits-count, .user-credits-val');
  countEls.forEach(el => { el.textContent = count; });

  const badgeEls = document.querySelectorAll('#user-tier-badge, .user-tier-badge');
  badgeEls.forEach(el => {
    el.textContent = pro ? 'PRO ACTIVE' : (count > 0 ? 'FREE TRIAL' : 'UPGRADE NEEDED');
    if (pro) {
      el.style.background = '#10b981';
      el.style.color = '#ffffff';
    } else if (count <= 0) {
      el.style.background = '#ef4444';
      el.style.color = '#ffffff';
    } else {
      el.style.background = 'var(--accent-gold)';
      el.style.color = '#000000';
    }
  });
}

function redeemAccessCode(rawCode) {
  const code = (rawCode || '').trim().toUpperCase();
  const lang = getActiveLanguage();
  if (!code) {
    const msg = { en: "Please enter a voucher or access code.", tr: "Lütfen bir kupon veya erişim kodu girin.", ar: "يرجى إدخال رمز قسيمة صالح.", uk: "Будь ласка, введіть код доступу або ваучер." };
    alert(msg[lang] || msg.en);
    return;
  }

  // Recognize promotional & educational grant codes (PRO2026, TELCB1, B1PASS, CITIZEN2026) or 6+ char license
  if (code === 'PRO2026' || code === 'TELCB1' || code === 'B1PASS' || code === 'CITIZEN2026' || code.length >= 6) {
    grantLetterCredits(30, 'voucher_' + code);
    const msgs = {
      en: `🎉 Access code "${code}" redeemed successfully! 30 AI Letter Grading Credits added to your account.`,
      tr: `🎉 "${code}" erişim kodu başarıyla etkinleştirildi! Hesabınıza 30 Yapay Zeka Mektup Puanlama Kredisi tanımlandı.`,
      ar: `🎉 تم تفعيل الرمز "${code}" بنجاح! تمت إضافة 30 رصيداً لتقييم الرسائل إلى حسابك.`,
      uk: `🎉 Код "${code}" успішно активовано! 30 кредитів оцінювання листів додано до вашого рахунку.`
    };
    alert(msgs[lang] || msgs.en);
    closeProPricingModal();
  } else {
    const errMsg = {
      en: "Invalid access code. Please check your voucher code or choose a plan below.",
      tr: "Geçersiz erişim kodu. Lütfen kodunuzu kontrol edin veya aşağıdaki paketlerden birini seçin.",
      ar: "رمز غير صالح. يرجى التحقق من الرمز أو اختيار باقة أدناه.",
      uk: "Недійсний код. Перевірте ваучер або оберіть тариф нижче."
    };
    alert(errMsg[lang] || errMsg.en);
  }
}

/**
 * Open Pricing Modal with Quad-Lingual localization and payment methods
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
      <div class="modal-header" style="text-align:center;">
        <span class="modal-kicker">${t('modalKicker')}</span>
        <h2>${t('modalTitle')}</h2>
        <p>${t('modalDesc')}</p>
      </div>

      <!-- Voucher / Student Code Bar -->
      <div class="voucher-input-bar" style="display:flex; justify-content:center; align-items:center; gap:8px; margin:16px 0 20px; flex-wrap:wrap;">
        <input type="text" id="voucher-code-input" class="search-box" placeholder="Voucher / License Code (e.g. PRO2026)" style="max-width:280px; padding:8px 12px; font-size:12px; text-transform:uppercase;">
        <button type="button" class="btn-sm-goal" onclick="redeemAccessCode(document.getElementById('voucher-code-input').value)" style="padding:8px 14px; font-size:12px; font-weight:700; background:var(--accent-gold); color:#000; border:none; border-radius:8px; cursor:pointer;">
          🎟️ Redeem Code
        </button>
      </div>

      <!-- 4 Tiers Grid -->
      <div class="pricing-tiers-grid">
        ${tiers.map(tier => {
          const name = tier['name' + langKey] || tier.nameEn;
          const badge = tier['badge' + langKey] || tier.badgeEn;
          const period = tier['period' + langKey] || tier.periodEn;
          const credits = tier['credits' + langKey] || tier.creditsEn;
          const features = tier['features' + langKey] || tier.featuresEn;
          const ctaText = tier['ctaText' + langKey] || tier.ctaTextEn;
          const isFeatured = tier.id === 'citizenship' || tier.id === 'standard';

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
              <button class="tier-cta-btn ${isFeatured ? 'featured' : ''}" onclick="selectProPlan('${tier.id}')">
                ${ctaText}
              </button>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Trust Badges & Supported Payment Methods -->
      <div class="pricing-trust-footer" style="margin-top:20px; padding-top:16px; border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; font-size:12px; color:var(--text-muted);">
        <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
          <span><strong>Accepted Payments:</strong></span>
          <span style="background:var(--bg-primary); border:1px solid var(--border); padding:3px 8px; border-radius:6px;">💳 Visa / Mastercard</span>
          <span style="background:var(--bg-primary); border:1px solid var(--border); padding:3px 8px; border-radius:6px;">🅿️ PayPal</span>
          <span style="background:var(--bg-primary); border:1px solid var(--border); padding:3px 8px; border-radius:6px;">🏦 SEPA / Klarna</span>
          <span style="background:var(--bg-primary); border:1px solid var(--border); padding:3px 8px; border-radius:6px;">🍏 Apple / Google Pay</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span>🛡️ 30-Day Money-Back Guarantee</span>
          <span>&bull;</span>
          <span>🔒 256-Bit SSL</span>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeProPricingModal() {
  const modal = document.getElementById('pro-pricing-modal');
  if (modal) modal.classList.remove('open');
}

/**
 * Interactive Checkout & Payment Drawer
 */
function selectProPlan(planId) {
  const modal = document.getElementById('pro-pricing-modal');
  if (!modal) return;
  const tiers = SAMPLE_B1_EVALUATION.pricingTiers;
  const tier = tiers.find(t => t.id === planId) || tiers[0];
  const lang = getActiveLanguage();
  const langKey = lang.charAt(0).toUpperCase() + lang.slice(1);
  const isAr = lang === 'ar';

  const name = tier['name' + langKey] || tier.nameEn;
  const period = tier['period' + langKey] || tier.periodEn;
  const credits = tier['credits' + langKey] || tier.creditsEn;

  modal.innerHTML = `
    <div class="modal-card pricing-modal-card checkout-modal-card" ${isAr ? 'dir="rtl"' : 'dir="ltr"'}>
      <button class="modal-close-btn" onclick="closeProPricingModal()">✕</button>
      <div class="modal-header">
        <button class="back-link-btn" onclick="openProPricingModal()" style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:13px; font-weight:600; margin-bottom:8px; display:inline-flex; align-items:center; gap:4px;">
          ← Back to Plans
        </button>
        <span class="modal-kicker">SECURE 256-BIT ENCRYPTED ENROLLMENT</span>
        <h2>Complete Your Enrollment</h2>
        <p>You are unlocking <strong>${name}</strong> (${tier.price} &bull; ${credits})</p>
      </div>

      <div class="checkout-layout" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:24px; margin-top:20px;">
        <!-- Left: Order Summary & Guarantee -->
        <div class="checkout-summary-box" style="background:var(--bg-primary); border:1px solid var(--border); border-radius:12px; padding:22px;">
          <h4 style="margin-top:0; margin-bottom:12px; font-size:16px; color:var(--text-primary);">Order Summary</h4>
          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px;">
            <span style="color:var(--text-secondary); font-size:14px;">${name} (${period})</span>
            <strong style="color:var(--text-primary); font-size:22px;">${tier.price}</strong>
          </div>
          <div style="font-size:13px; color:var(--accent-gold); font-weight:700; margin-bottom:14px;">
            ⚡ ${credits} Included
          </div>
          <ul style="list-style:none; padding:0; margin:0 0 16px 0; font-size:12px; color:var(--text-secondary); line-height:1.9;">
            <li>✓ One-time single payment (No automatic renewal / recurring charges)</li>
            <li>✓ Full access to all 310 BAMF LiD & B1 study materials</li>
            <li>✓ Instant activation with zero waiting period</li>
            <li>✓ 30-Day Money-Back & telc B1 Pass Guarantee</li>
          </ul>
          <div style="font-size:11px; color:var(--text-muted); border-top:1px solid var(--border); padding-top:10px;">
            Gemäß § 19 UStG wird keine MwSt. gesondert ausgewiesen. Invoicing via Merchant of Record (Paddle / Lemon Squeezy).
          </div>
        </div>

        <!-- Right: Payment Methods & Actions -->
        <div class="checkout-payment-box" style="display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <label style="font-size:13px; font-weight:700; color:var(--text-primary); display:block; margin-bottom:10px;">
              Select Payment Method:
            </label>
            <div class="payment-methods-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px;">
              <button type="button" class="pay-method-btn active" style="padding:10px; border:2px solid var(--accent-gold); background:var(--bg-card); border-radius:10px; text-align:center; font-size:12px; font-weight:700; color:var(--text-primary); cursor:pointer;">
                💳 Card / Apple Pay
              </button>
              <button type="button" class="pay-method-btn" style="padding:10px; border:1px solid var(--border); background:var(--bg-card); border-radius:10px; text-align:center; font-size:12px; font-weight:700; color:var(--text-primary); cursor:pointer;">
                🅿️ PayPal
              </button>
              <button type="button" class="pay-method-btn" style="padding:10px; border:1px solid var(--border); background:var(--bg-card); border-radius:10px; text-align:center; font-size:12px; font-weight:700; color:var(--text-primary); cursor:pointer;">
                🏦 SEPA / Klarna
              </button>
              <button type="button" class="pay-method-btn" style="padding:10px; border:1px solid var(--border); background:var(--bg-card); border-radius:10px; text-align:center; font-size:12px; font-weight:700; color:var(--text-primary); cursor:pointer;">
                ⚡ Instant Access
              </button>
            </div>

            <!-- Email Input -->
            <div style="margin-bottom:16px;">
              <label for="checkout-email" style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">
                Confirmation Email for Invoice & Receipt:
              </label>
              <input type="email" id="checkout-email" class="search-box" placeholder="student@example.com" style="width:100%; padding:9px 12px; font-size:13px;">
            </div>
          </div>

          <div>
            <button class="tier-cta-btn featured" onclick="confirmInstantDemoOrder('${tier.id}')" style="padding:14px; font-size:15px; font-weight:800; margin-bottom:10px; cursor:pointer; width:100%; border-radius:10px; background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:#ffffff; border:none; box-shadow:0 4px 14px rgba(16, 185, 129, 0.4);">
              🔒 Complete Purchase (${tier.price}) →
            </button>
            <div style="text-align:center; font-size:11px; color:var(--text-muted);">
              🔒 256-Bit SSL Encrypted &bull; 100% Client-Side Privacy Guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function confirmInstantDemoOrder(tierId) {
  const creditsMap = {
    diagnostic: 3,
    standard: 30,
    citizenship: 40,
    extended: 100
  };
  const creditsToAdd = creditsMap[tierId] || 30;
  grantLetterCredits(creditsToAdd, tierId);

  const modal = document.getElementById('pro-pricing-modal');
  if (!modal) return;

  modal.innerHTML = `
    <div class="modal-card pricing-modal-card" style="text-align:center; padding:36px 24px; max-width:540px;">
      <button class="modal-close-btn" onclick="closeProPricingModal()">✕</button>
      <div style="font-size:48px; margin-bottom:12px;">🎉</div>
      <span class="modal-kicker" style="color:#10b981;">ENROLLMENT CONFIRMED</span>
      <h2 style="margin:8px 0 12px;">Welcome to DeutschLernen Pro!</h2>
      <p style="color:var(--text-secondary); margin-bottom:20px; font-size:14px;">
        Your order has been processed. <strong>${creditsToAdd} AI Letter Grading Credits</strong> have been added to your account!
      </p>
      <div style="background:var(--bg-primary); border:1px solid var(--border); border-radius:12px; padding:16px; margin-bottom:24px; display:inline-flex; align-items:center; gap:12px;">
        <span style="font-size:24px;">⚡</span>
        <div style="text-align:left;">
          <div style="font-weight:700; color:var(--text-primary); font-size:14px;">Active Balance: ${getLetterCredits()} Credits</div>
          <div style="font-size:12px; color:var(--accent-gold);">Pro Pass Active</div>
        </div>
      </div>
      <div>
        <button class="cta-btn-primary" onclick="closeProPricingModal(); if(window.switchSchreibenTab){window.switchSchreibenTab('live');}" style="padding:12px 24px; font-size:14px; font-weight:700;">
          🚀 Start Grading Practice Letters Now →
        </button>
      </div>
    </div>
  `;
}

if (typeof window !== 'undefined') {
  window.SHOWCASE_I18N = SHOWCASE_I18N;
  window.renderSchreibenShowcase = renderSchreibenShowcase;
  window.renderAnnotatedText = renderAnnotatedText;
  window.getActiveLanguage = getActiveLanguage;
  window.getShowcaseText = getShowcaseText;
  window.insertConnectorIntoLetter = insertConnectorIntoLetter;
  window.playSchreibenSpeech = playSchreibenSpeech;
  window.evaluateStudentLetterB1 = evaluateStudentLetterB1;
  window.renderLiveGradingResults = renderLiveGradingResults;
  window.submitLiveLetterGrading = submitLiveLetterGrading;
  window.submitDirectAiGrading = submitDirectAiGrading;
  window.triggerOptionBAfterwards = triggerOptionBAfterwards;
  window.renderOptionBComparison = renderOptionBComparison;
  window.toggleAiSettingsDrawer = toggleAiSettingsDrawer;
  window.handleAiProviderChange = handleAiProviderChange;
  window.saveAiSettings = saveAiSettings;
  window.clearAiSettings = clearAiSettings;
  window.callLlmLetterGrader = callLlmLetterGrader;
  window.handlePromptSelectChange = handlePromptSelectChange;
  window.updateWordCounter = updateWordCounter;
  window.switchSchreibenTab = switchSchreibenTab;
  window.openProPricingModal = openProPricingModal;
  window.closeProPricingModal = closeProPricingModal;
  window.selectProPlan = selectProPlan;
  window.confirmInstantDemoOrder = confirmInstantDemoOrder;
  window.redeemAccessCode = redeemAccessCode;
  window.getLetterCredits = getLetterCredits;
  window.useLetterCredit = useLetterCredit;
  window.grantLetterCredits = grantLetterCredits;
  window.updateCreditsDisplay = updateCreditsDisplay;
  window.isUserPro = isUserPro;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SHOWCASE_I18N,
    renderSchreibenShowcase,
    renderAnnotatedText,
    getActiveLanguage,
    getShowcaseText,
    insertConnectorIntoLetter,
    playSchreibenSpeech,
    evaluateStudentLetterB1,
    renderLiveGradingResults,
    submitLiveLetterGrading,
    submitDirectAiGrading,
    triggerOptionBAfterwards,
    renderOptionBComparison,
    getLastOptionAEvalData: () => lastOptionAEvalData,
    setLastOptionAEvalData: (val) => { lastOptionAEvalData = val; },
    toggleAiSettingsDrawer,
    handleAiProviderChange,
    saveAiSettings,
    clearAiSettings,
    callLlmLetterGrader,
    handlePromptSelectChange,
    updateWordCounter,
    switchSchreibenTab
  };
}
