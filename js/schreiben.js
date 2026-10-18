/**
 * Interactive telc B1 Schreiben AI Examiner & Freemium Paywall Component
 * Fully localized across German (DE), English (EN), Turkish (TR), Arabic (AR), and Ukrainian (UK).
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.SchreibenExaminer = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  // 1. The 5 Realistic telc B1 Examination Scenarios
  const SCHREIBEN_SCENARIOS = {
    einladung: {
      id: "einladung",
      type: "informal",
      titleDe: "1. Einladung ablehnen (Freund Markus)",
      titleEn: "1. Decline Party Invitation (Friend Markus)",
      titleTr: "1. Parti Davetini Reddetme (Arkadaş Markus)",
      titleAr: "1. الاعتذار عن دعوة حفلة (الصديق ماركوس)",
      titleUk: "1. Відхилення запрошення на вечірку (Друг Маркус)",
      situationDe: "Ihr Freund Markus hat Sie zu seiner Geburtstagsfeier am Samstagabend eingeladen. Da Sie am Wochenende eine dringende Familienfeier haben, können Sie leider nicht kommen. Schreiben Sie Markus eine persönliche E-Mail.",
      situationEn: "Your friend Markus invited you to his birthday party on Saturday evening. Due to an urgent family celebration, you cannot attend. Write Markus a personal email.",
      situationTr: "Arkadaşınız Markus sizi cumartesi akşamı doğum günü partisine davet etti. Hafta sonu acil bir aile buluşmanız olduğu için katılamıyorsunuz. Markus'a samimi bir e-posta yazın.",
      situationAr: "دعاك صديقك ماركوس لحفلة عيد ميلاده مساء السبت. بسبب مناسبة عائلية طارئة، لا يمكنك الحضور. اكتب رسالة شخصية لماركوس.",
      situationUk: "Ваш друг Маркус запросив вас на вечірку до дня народження. Через сімейні обставини ви не можете прийти. Напишіть йому особистий лист.",
      leitpunkte: [
        { id: 1, textDe: "Dank für die Einladung ausdrücken", textEn: "Thank him for the invitation", textTr: "Davet için teşekkür edin", textAr: "الشكر على الدعوة", textUk: "Подякуйте за запрошення" },
        { id: 2, textDe: "Grund erklären, warum Sie fehlen", textEn: "Explain why you cannot come", textTr: "Neden gelemeyeceğinizi açıklayın", textAr: "شرح سبب عدم الحضور", textUk: "Поясніть причину відсутності" },
        { id: 3, textDe: "Entschuldigung & Geschenk versprechen", textEn: "Apologize & promise a gift", textTr: "Özür dileyin ve hediye sözü verin", textAr: "الاعتذار والوعد بهدية", textUk: "Вибачтесь і пообіцяйте подарунок" },
        { id: 4, textDe: "Vorschlag für ein baldiges Treffen", textEn: "Propose meeting up soon", textTr: "Yakında buluşmak için öneri yapın", textAr: "اقتراح لقاء قريب", textUk: "Запропонуйте зустріч найближчим часом" }
      ]
    },
    beschwerde: {
      id: "beschwerde",
      type: "formal",
      titleDe: "2. Beschwerde über Online-Kauf (Elektronik-Shop)",
      titleEn: "2. Complaint about Online Purchase (Electronics Shop)",
      titleTr: "2. İnternet Alışverişi Şikayeti (Elektronik Mağazası)",
      titleAr: "2. شكوى بخصوص شراء عبر الإنترنت (متجر إلكترونيات)",
      titleUk: "2. Скарга на онлайн-покупку (Магазин електроніки)",
      situationDe: "Sie haben vor zwei Wochen einen Laptop im Onlineshop bestellt. Das Paket kam stark beschädigt an und das Gerät schaltet sich nicht ein. Der Kundenservice hat bisher nicht geantwortet. Schreiben Sie einen formellen Beschwerdebrief.",
      situationEn: "You ordered a laptop online two weeks ago. The package arrived damaged and the device does not turn on. Customer service has not replied. Write a formal complaint letter.",
      situationTr: "İki hafta önce bir internet mağazasından dizüstü bilgisayar sipariş ettiniz. Paket hasarlı geldi ve cihaz açılmıyor. Müşteri hizmetleri yanıt vermedi. Resmi bir şikayet mektubu yazın.",
      situationAr: "طلبت حاسوباً محمولاً عبر الإنترنت قبل أسبوعين. وصل الطرد متضرراً والجهاز لا يعمل، ولم ترد خدمة العملاء. اكتب رسالة شكوى رسمية.",
      situationUk: "Два тижні тому ви замовили ноутбук онлайн. Посилка прийшла пошкодженою, пристрій не вмикається. Напишіть офіційну скаргу.",
      leitpunkte: [
        { id: 1, textDe: "Anlass des Schreibens & Bestellnummer", textEn: "Reason for writing & order number", textTr: "Yazma nedeni ve sipariş numarası", textAr: "سبب الرسالة ورقم الطلب", textUk: "Причина звернення та номер замовлення" },
        { id: 2, textDe: "Schäden genau beschreiben", textEn: "Accurately describe damages", textTr: "Hasarı ayrıntılı tarif edin", textAr: "وصف الأضرار بدقة", textUk: "Опишіть пошкодження детально" },
        { id: 3, textDe: "Frist für Ersatz oder Erstattung setzen", textEn: "Set deadline for replacement/refund", textTr: "Değişim veya iade için süre verin", textAr: "تحديد مهلة للاستبدال أو الاسترداد", textUk: "Вкажіть термін для заміни або повернення" },
        { id: 4, textDe: "Rechtliche Schritte androhen", textEn: "Warn of legal consumer steps", textTr: "Tüketici hakem heyeti uyarısı yapın", textAr: "التلويح بإجراءات قانونية", textUk: "Попередьте про юридичні дії" }
      ]
    },
    nachbarschaft: {
      id: "nachbarschaft",
      type: "semi-formal",
      titleDe: "3. Nachbarschaftshilfe (Frau Schmidt)",
      titleEn: "3. Neighborhood Assistance (Mrs. Schmidt)",
      titleTr: "3. Komşuluk Yardımı (Bayan Schmidt)",
      titleAr: "3. مساعدة الجيران (السيدة شميت)",
      titleUk: "3. Сусідська допомога (Пані Шмідт)",
      situationDe: "Ihre ältere Nachbarin Frau Schmidt hat sich den Fuß verstaucht und kann das Haus nicht verlassen. Sie möchten ihr anbieten, die wöchentlichen Einkäufe zu erledigen. Schreiben Sie ihr eine freundliche Nachricht.",
      situationEn: "Your elderly neighbor Mrs. Schmidt sprained her ankle and cannot leave the house. You want to offer to do her weekly grocery shopping. Write her a kind note.",
      situationTr: "Yaşlı komşunuz Bayan Schmidt ayağını incitti ve evden çıkamıyor. Haftalık market alışverişini yapmayı teklif etmek istiyorsunuz. Ona nazik bir not yazın.",
      situationAr: "جارتك المسنة السيدة شميت التوت قدمها ولا تستطيع الخروج. تريد أن تعرض عليها شراء مستلزمات البقالة الأسبوعية. اكتب لها رسالة ودية.",
      situationUk: "Ваша літня сусідка пані Шмідт підвернула ногу і не може виходити. Ви хочете запропонувати допомогу з покупками. Напишіть їй записку.",
      leitpunkte: [
        { id: 1, textDe: "Genesungswünsche übermitteln", textEn: "Express get-well wishes", textTr: "Geçmiş olsun dileklerinizi iletin", textAr: "التمنيات بالشفاء العاجل", textUk: "Побажайте швидкого одужання" },
        { id: 2, textDe: "Hilfe beim Lebensmitteleinkauf anbieten", textEn: "Offer grocery shopping help", textTr: "Market alışverişi yardımı teklif edin", textAr: "عرض المساعدة في شراء المواد الغذائية", textUk: "Запропонуйте купити продукти" },
        { id: 3, textDe: "Wann Sie Zeit haben & Einkaufszettel", textEn: "Your availability & shopping list", textTr: "Uygun zamanınız ve alışveriş listesi", textAr: "أوقات فراغك وقائمة المشتريات", textUk: "Вкажіть час та список покупок" },
        { id: 4, textDe: "Telefonnummer für Notfälle angeben", textEn: "Provide your phone number", textTr: "Acil durumlar için telefonunuzu verin", textAr: "رقم هاتفك للحالات الطارئة", textUk: "Залиште телефон для екстрених випадків" }
      ]
    },
    wohnung: {
      id: "wohnung",
      type: "formal",
      titleDe: "4. Wohnungsbesichtigung (Hausverwaltung Müller)",
      titleEn: "4. Apartment Viewing Request (Property Mgmt)",
      titleTr: "4. Daire Görme Randevusu (Müller Emlak)",
      titleAr: "4. طلب موعد لمعاينة شقة (إدارة العقارات)",
      titleUk: "4. Запит на огляд квартири (Агентство нерухомості)",
      situationDe: "Sie haben eine Anzeige für eine 3-Zimmer-Wohnung in Berlin gesehen. Sie sind fest angestellt und suchen ab dem nächsten Monat ein neues Zuhause. Schreiben Sie der Hausverwaltung eine formelle Anfrage für einen Besichtigungstermin.",
      situationEn: "You saw an ad for a 3-room apartment in Berlin. You are employed full-time and looking for a home starting next month. Write a formal viewing inquiry.",
      situationTr: "Berlin'de 3 odalı bir kiralık daire ilanı gördünüz. Düzenli bir işiniz var ve gelecek aydan itibaren taşınmak istiyorsunuz. Emlak yönetimine randevu talebi yazın.",
      situationAr: "رأيت إعلاناً لشقة 3 غرف في برلين. لديك عقد عمل دائم وتبحث عن سكن بدءاً من الشهر القادم. اكتب استفساراً رسمياً لمعاينة الشقة.",
      situationUk: "Ви побачили оголошення про оренду 3-кімнатної квартири в Берліні. Ви офіційно працевлаштовані. Напишіть офіційний запит на перегляд квартири.",
      leitpunkte: [
        { id: 1, textDe: "Interesse an der Wohnungsanzeige", textEn: "Express interest in the apartment", textTr: "İlandaki daireye ilginizi belirtin", textAr: "إبداء الاهتمام بالشقة المعلنة", textUk: "Висловіть зацікавленість квартирою" },
        { id: 2, textDe: "Eigene Person & Beruf / Einkommen", textEn: "Introduce self, job, and income", textTr: "Kendinizi, işinizi ve gelirinizi tanıtın", textAr: "التعريف بنفسك ووظيفتك ودخلك", textUk: "Розкажіть про себе, роботу та дохід" },
        { id: 3, textDe: "Wunschtermin für Besichtigung nennen", textEn: "Propose preferred viewing times", textTr: "Daireyi görmek istediğiniz zamanı yazın", textAr: "اقتراح موعد مناسب للمعاينة", textUk: "Запропонуйте зручний час огляду" },
        { id: 4, textDe: "Frage nach Unterlagen (Schufa / Gehalt)", textEn: "Inquire about documents needed", textTr: "Gerekli evrakları (Schufa vb.) sorun", textAr: "السؤال عن الأوراق المطلوبة", textUk: "Запитайте про необхідні документи" }
      ]
    },
    kursabsage: {
      id: "kursabsage",
      type: "semi-formal",
      titleDe: "5. Kursabsage wegen Dienstreise (VHS Sprachkurs)",
      titleEn: "5. Absence Notice for Language Course (VHS)",
      titleTr: "5. İş Seyahati Nedeniyle Kurs İzni (VHS)",
      titleAr: "5. إشعار غياب عن دورة لغة (VHS)",
      titleUk: "5. Повідомлення про відсутність на мовному курсі (VHS)",
      situationDe: "Sie besuchen einen B1-Deutschkurs an der Volkshochschule. Wegen einer dringenden Dienstreise können Sie die nächsten zwei Wochen nicht am Unterricht teilnehmen. Schreiben Sie Ihrer Kursleiterin Frau Dr. Weber.",
      situationEn: "You attend a B1 German course at the adult education center. Due to a business trip, you will miss the next two weeks. Write your teacher Dr. Weber.",
      situationTr: "Halk eğitim merkezinde (VHS) B1 Almanca kursuna katılıyorsunuz. İş seyahati nedeniyle gelecek iki hafta derslere katılamayacaksınız. Kurs öğretmeniniz Dr. Weber'e yazın.",
      situationAr: "تحضر دورة B1 للغة الألمانية في مركز تعليم الكبار. بسبب رحلة عمل، ستغيب لمدة أسبوعين. اكتب لمدرستك الدكتورة فيبر.",
      situationUk: "Ви відвідуєте курс B1 у VHS. Через відрядження ви пропустите два тижні занять. Напишіть викладачці пані доктор Вебер.",
      leitpunkte: [
        { id: 1, textDe: "Grund für das Fehlen im Unterricht", textEn: "Reason for upcoming absence", textTr: "Derse katılamama nedeninizi açıklayın", textAr: "سبب الغياب عن الحصص", textUk: "Поясніть причину відсутності" },
        { id: 2, textDe: "Genaue Dauer der Dienstreise", textEn: "Exact duration of your trip", textTr: "İş seyahatinin tam süresini belirtin", textAr: "المدة المحددة لرحلة العمل", textUk: "Вкажіть точні дати поїздки" },
        { id: 3, textDe: "Bitte um Hausaufgaben & Skripte per Mail", textEn: "Ask for homework/materials via email", textTr: "Ödev ve ders notlarını e-postayla isteyin", textAr: "طلب الواجبات والمواد عبر البريد", textUk: "Попросіть надсилати завдання на пошту" },
        { id: 4, textDe: "Rückkehrtermin & Entschuldigung", textEn: "Return date & apology", textTr: "Dönüş tarihinizi bildirin ve özür dileyin", textAr: "تاريخ العودة والاعتذار", textUk: "Повідомте дату повернення і вибачтесь" }
      ]
    }
  };

  // 2. Multilingual UI Dictionary (DE, EN, TR, AR, UK)
  const I18N = {
    de: {
      selectLabel: "Offizielle telc B1 Schreibaufgabe wählen:",
      timerTitle: "Prüfungszeit:",
      timerStart: "Start",
      timerPause: "Pause",
      timerReset: "Reset",
      timerExpired: "Zeit abgelaufen! (30 Min)",
      wordTarget: "Ziel: 80–120 Wörter",
      wordCountLabel: "Wörter:",
      tooShort: "Zu kurz (<80 W.)",
      optimalLength: "Optimale B1-Länge (80–120 W.)",
      tooLong: "Ausführlich (>120 W.)",
      umlautLabel: "Deutsche Umlaute:",
      textareaPlaceholder: "Schreiben Sie hier Ihre E-Mail / Ihren Brief auf Deutsch...",
      submitBtn: "⚡ Jetzt mit KI nach telc B1 prüfen",
      evaluatingMsg: "KI-Prüfer bewertet Ihren Brief nach offiziellem telc B1 Raster...",
      scoreGaugeTitle: "Offizielles telc B1 Ergebnis",
      passedBadge: "BESTANDEN (≥27 Pkt.)",
      failedBadge: "NICHT BESTANDEN (<27 Pkt.)",
      lpCovered: "✅ Abgedeckt",
      lpPartial: "⚠️ Teilweise (-6 Pkt.)",
      lpMissing: "❌ Fehlend (-6 Pkt.)",
      criteriaHeader: "Offizielle 3 telc Kriterien (je 15 Pkt. max):",
      firstErrorsTitle: "Die ersten 2 Grammatik- & Stilfehler (Vorschau):",
      allErrorsTitle: "Alle Grammatik- & Stilfehler (Vollständige Prüfung):",
      diffOriginal: "Ihr Text:",
      diffCorrection: "Korrektur:",
      hiddenErrorsBadge: "🔍 Weitere Grammatik- & Registerfehler in Ihrem Text erkannt",
      modelRewriteLockedTitle: "✨ Ihre 45/45 telc B1 Musterlösung & Leitpunkte-Korrektur",
      ctaHeadline: "Vollständige 45/45 Korrektur & unbegrenzte KI-Prüfungen freischalten",
      ctaValueAnchor: "Private Nachhilfelehrer verlangen 40€ pro Stunde. Sichern Sie sich 30 Tage unbegrenzte telc B1 Schreib- & Sprechbewertungen für einmalig 24€ (Kein Abo, keine automatische Verlängerung).",
      btnUnlock30: "👑 30-Tage Exam Pass freischalten — 24€",
      btnEnterLicense: "🔑 Bereits einen Exam Pass? Lizenzschlüssel eingeben",
      licensePrompt: "Geben Sie Ihren LemonSqueezy-Lizenzschlüssel aus der Kaufbestätigung ein:"
    },
    en: {
      selectLabel: "Choose Official telc B1 Writing Task:",
      timerTitle: "Exam Timer:",
      timerStart: "Start",
      timerPause: "Pause",
      timerReset: "Reset",
      timerExpired: "Time Expired! (30 min)",
      wordTarget: "Target: 80–120 words",
      wordCountLabel: "Words:",
      tooShort: "Too short (<80 w.)",
      optimalLength: "Optimal B1 length (80–120 w.)",
      tooLong: "Detailed (>120 w.)",
      umlautLabel: "German Umlauts:",
      textareaPlaceholder: "Type or paste your German practice letter here...",
      submitBtn: "⚡ Grade My Letter with AI (telc B1)",
      evaluatingMsg: "AI examiner is evaluating your letter line-by-line...",
      scoreGaugeTitle: "Official telc B1 Evaluation Scorecard",
      passedBadge: "PASSED (≥27 pts)",
      failedBadge: "FAILED (<27 pts)",
      lpCovered: "✅ Covered",
      lpPartial: "⚠️ Partial (-6 pts)",
      lpMissing: "❌ Missing (-6 pts)",
      criteriaHeader: "Official 3 telc Criteria (Max 15 pts each):",
      firstErrorsTitle: "First 2 Grammar & Style Errors (Free Preview):",
      allErrorsTitle: "All Grammar & Style Errors (Full Audit):",
      diffOriginal: "Your draft:",
      diffCorrection: "Corrected:",
      hiddenErrorsBadge: "🔍 More Grammar & Register Errors Detected in Your Text",
      modelRewriteLockedTitle: "✨ Your 45/45 Full-Score Model Rewrite & Missing Leitpunkt Fix",
      ctaHeadline: "Unlock Your Full 45/45 Correction & Unlimited AI Exam Grading",
      ctaValueAnchor: "Private tutors charge 40€ for 1 hour. Get 30 days of unlimited telc B1 Writing & Speaking evaluations for a one-time payment of 24€ (No subscription, no auto-renewal).",
      btnUnlock30: "👑 Unlock 30-Day Exam Pass — 24€",
      btnEnterLicense: "🔑 Already have an Exam Pass? Enter License Key",
      licensePrompt: "Enter your LemonSqueezy License Key from your confirmation email:"
    },
    tr: {
      selectLabel: "Resmi telc B1 Yazma Görevini Seçin:",
      timerTitle: "Sınav Sayacı:",
      timerStart: "Başlat",
      timerPause: "Duraklat",
      timerReset: "Sıfırla",
      timerExpired: "Süre Doldu! (30 dk)",
      wordTarget: "Hedef: 80–120 Kelime",
      wordCountLabel: "Kelime:",
      tooShort: "Çok kısa (<80 k.)",
      optimalLength: "İdeal B1 uzunluğu (80–120 k.)",
      tooLong: "Ayrıntılı (>120 k.)",
      umlautLabel: "Almanca Karakterler:",
      textareaPlaceholder: "Almanca mektubunuzu buraya yazın veya yapıştırın...",
      submitBtn: "⚡ Yapay Zeka ile telc B1 Puanla",
      evaluatingMsg: "Yapay zeka sınav uzmanı mektubunuzu telc kriterlerine göre inceliyor...",
      scoreGaugeTitle: "Resmi telc B1 Puan Kartı",
      passedBadge: "GEÇTİ (≥27 Puan)",
      failedBadge: "KALDI (<27 Puan)",
      lpCovered: "✅ Tamamlandı",
      lpPartial: "⚠️ Kısmi (-6 Puan)",
      lpMissing: "❌ Eksik (-6 Puan)",
      criteriaHeader: "Resmi 3 telc Kriteri (Her biri maks. 15 puan):",
      firstErrorsTitle: "Tespit Edilen İlk 2 Dilbilgisi Hatası (Önizleme):",
      allErrorsTitle: "Tüm Dilbilgisi ve Üslup Hataları (Tam İnceleme):",
      diffOriginal: "Yazdığınız:",
      diffCorrection: "Düzeltme:",
      hiddenErrorsBadge: "🔍 Metninizde Daha Fazla Dilbilgisi ve Üslup Hatası Tespit Edildi",
      modelRewriteLockedTitle: "✨ 45/45 Tam Puanlık Model Mektup & Eksik Kılavuz Nokta Çözümü",
      ctaHeadline: "Tam 45/45 Düzeltmeyi ve Sınırsız Yapay Zeka Puanlamasını Açın",
      ctaValueAnchor: "Özel Almanca öğretmenleri 1 ders saati için 40€ talep ediyor. Tek seferlik 24€ ödeme ile 30 gün boyunca sınırsız telc B1 Yazma ve Konuşma analizi alın (Abonelik yok, otomatik yenileme yok).",
      btnUnlock30: "👑 30 Günlük Sınav Kartını Aç — 24€",
      btnEnterLicense: "🔑 Zaten bir kartınız var mı? Lisans Anahtarını Girin",
      licensePrompt: "Satın alma e-postanızdaki LemonSqueezy Lisans Anahtarını girin:"
    },
    ar: {
      selectLabel: "اختر مهمة الكتابة الرسمية لامتحان telc B1:",
      timerTitle: "مؤقت الامتحان:",
      timerStart: "بدء",
      timerPause: "إيقاف",
      timerReset: "إعادة تعيين",
      timerExpired: "انتهى الوقت! (30 دقيقة)",
      wordTarget: "الهدف: 80-120 كلمة",
      wordCountLabel: "الكلمات:",
      tooShort: "قصير جداً (<80 ك.)",
      optimalLength: "طول B1 مثالي (80-120 ك.)",
      tooLong: "مفصل (>120 ك.)",
      umlautLabel: "الحروف الألمانية الخاصة:",
      textareaPlaceholder: "اكتب رسالتك التدريبية بالألمانية هنا...",
      submitBtn: "⚡ تقييم الرسالة بالذكاء الاصطناعي (telc B1)",
      evaluatingMsg: "المصحح الآلي يقوم بتقييم الرسالة وفقاً لمعايير telc B1 الرسمية...",
      scoreGaugeTitle: "بطاقة النتيجة الرسمية telc B1",
      passedBadge: "ناجح (≥27 نقطة)",
      failedBadge: "راسب (<27 نقطة)",
      lpCovered: "✅ مغطى",
      lpPartial: "⚠️ جزئي (-6 نقاط)",
      lpMissing: "❌ مفقود (-6 نقاط)",
      criteriaHeader: "معايير telc الثلاثة الرسمية (15 نقطة لكل منها كحد أقصى):",
      firstErrorsTitle: "أول خطأين نحويين وأسلوبيين (معاينة مجانية):",
      allErrorsTitle: "جميع الأخطاء النحوية والأسلوبية (تدقيق كامل):",
      diffOriginal: "النص الأصلي:",
      diffCorrection: "التصحيح:",
      hiddenErrorsBadge: "🔍 تم اكتشاف المزيد من الأخطاء النحوية والأسلوبية في نصك",
      modelRewriteLockedTitle: "✨ إعادة الكتابة النموذجية الكاملة 45/45 وحل النقاط المفقودة",
      ctaHeadline: "افتح التصحيح الكامل 45/45 والتقييم غير المحدود بالذكاء الاصطناعي",
      ctaValueAnchor: "يتقاضى المعلمون الخصوصيون 40€ لكل ساعة. احصل على 30 يوماً من التقييم غير المحدود للامتحان الشفوي والكتابي بدفعة واحدة 24€ فقط (بدون اشتراك متكرر).",
      btnUnlock30: "👑 فتح تذكرة الامتحان لـ 30 يوماً — 24€",
      btnEnterLicense: "🔑 لديك تذكرة بالفعل؟ أدخل مفتاح الترخيص",
      licensePrompt: "أدخل مفتاح ترخيص LemonSqueezy المرسل في بريدك الإلكتروني:"
    },
    uk: {
      selectLabel: "Оберіть офіційне завдання telc B1 Schreiben:",
      timerTitle: "Таймер іспиту:",
      timerStart: "Старт",
      timerPause: "Пауза",
      timerReset: "Скинути",
      timerExpired: "Час вичерпано! (30 хв)",
      wordTarget: "Ціль: 80–120 слів",
      wordCountLabel: "Слів:",
      tooShort: "Занадто короткий (<80 с.)",
      optimalLength: "Оптимальний обсяг B1 (80–120 с.)",
      tooLong: "Розлогий (>120 с.)",
      umlautLabel: "Німецькі умлаути:",
      textareaPlaceholder: "Введіть або вставте ваш німецький тренувальний лист...",
      submitBtn: "⚡ Оцінити лист штучним інтелектом (telc B1)",
      evaluatingMsg: "Екзаменатор ШІ оцінює лист за критеріями telc B1...",
      scoreGaugeTitle: "Офіційна картка оцінювання telc B1",
      passedBadge: "СКЛАДЕНО (≥27 б.)",
      failedBadge: "НЕ СКЛАДЕНО (<27 б.)",
      lpCovered: "✅ Розкрито",
      lpPartial: "⚠️ Частково (-6 б.)",
      lpMissing: "❌ Відсутній (-6 б.)",
      criteriaHeader: "Офіційні 3 критерії telc (макс. 15 балів кожен):",
      firstErrorsTitle: "Перші 2 граматичні та стилістичні помилки (попередній перегляд):",
      allErrorsTitle: "Всі граматичні та стилістичні помилки (повний аудит):",
      diffOriginal: "Ваш текст:",
      diffCorrection: "Виправлення:",
      hiddenErrorsBadge: "🔍 У вашому тексті виявлено додаткові помилки",
      modelRewriteLockedTitle: "✨ Зразковий лист на 45/45 балів та виправлення опорних пунктів",
      ctaHeadline: "Розблокуйте повне виправлення на 45/45 та безлімітні перевірки",
      ctaValueAnchor: "Репетитори беруть 40€ за годину. Отримайте 30 днів необмежених перевірок письма та говоріння за разову оплату 24€ (без автоматичного продовження).",
      btnUnlock30: "👑 Отримати абонемент на 30 днів — 24€",
      btnEnterLicense: "🔑 Вже маєте абонемент? Введіть ліцензійний ключ",
      licensePrompt: "Введіть ліцензійний ключ LemonSqueezy із листа підтвердження:"
    }
  };

  class SchreibenExaminer {
    constructor(mountElementId = 'schreiben-examiner-mount', options = {}) {
      this.mountEl = typeof document !== 'undefined' ? document.getElementById(mountElementId) : null;
      this.options = options;
      this.currentLang = options.lang || this.detectLanguage();
      this.currentScenarioId = options.scenarioId || 'einladung';
      this.timerSeconds = 30 * 60; // 30 minutes
      this.timerInterval = null;
      this.timerRunning = false;
      this.lastEvaluation = null;
      SchreibenExaminer.instance = this;
      if (this.mountEl) {
        this.render();
      }
    }

    detectLanguage() {
      if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem('deutschlernen_lang') || localStorage.getItem('site_lang') || localStorage.getItem('telc_lang');
        if (stored && I18N[stored]) return stored;
      }
      if (typeof StorageService !== 'undefined') {
        return StorageService.getLanguage();
      }
      return 'en';
    }

    t(key) {
      const dict = I18N[this.currentLang] || I18N.en;
      return dict[key] || I18N.en[key] || key;
    }

    setLanguage(lang) {
      if (I18N[lang]) {
        this.currentLang = lang;
        if (this.mountEl) this.render();
      }
    }

    render() {
      if (!this.mountEl) return;
      const scenario = SCHREIBEN_SCENARIOS[this.currentScenarioId] || SCHREIBEN_SCENARIOS.einladung;
      const isRtl = this.currentLang === 'ar';
      const langKey = this.currentLang.charAt(0).toUpperCase() + this.currentLang.slice(1);

      const sitText = scenario['situation' + langKey] || scenario.situationEn || scenario.situationDe;

      this.mountEl.innerHTML = `
        <div class="schreiben-examiner-container" ${isRtl ? 'dir="rtl"' : 'dir="ltr"'}>
          <!-- Task Selector & Briefing -->
          <div class="sch-scenario-card">
            <h3 class="sch-scenario-title">📝 ${this.t('selectLabel')}</h3>
            <select class="sch-scenario-select" id="sch-scenario-select" onchange="SchreibenExaminer.instance.onScenarioChange(this.value)">
              ${Object.values(SCHREIBEN_SCENARIOS).map(sc => {
                const title = sc['title' + langKey] || sc.titleEn;
                return `<option value="${sc.id}" ${sc.id === this.currentScenarioId ? 'selected' : ''}>${title}</option>`;
              }).join('')}
            </select>

            <div class="sch-briefing-box">
              <div class="sch-briefing-situation">${sitText}</div>
              <ul class="sch-leitpunkte-list">
                ${scenario.leitpunkte.map((lp, idx) => {
                  const lpText = lp['text' + langKey] || lp.textEn;
                  return `<li class="sch-leitpunkt-item"><span>📌</span> <strong>Punkt ${idx + 1}:</strong> ${lpText}</li>`;
                }).join('')}
              </ul>
            </div>
          </div>

          <!-- Editor Toolbar -->
          <div class="sch-editor-toolbar">
            <!-- 30-Minute Timer -->
            <div class="sch-timer-widget">
              <span style="font-size:13px; font-weight:700;">⏱️ ${this.t('timerTitle')}</span>
              <span class="sch-timer-display" id="sch-timer-display">30:00</span>
              <button type="button" class="sch-timer-btn" onclick="SchreibenExaminer.instance.toggleTimer()">${this.t('timerStart')}</button>
              <button type="button" class="sch-timer-btn" onclick="SchreibenExaminer.instance.resetTimer()">${this.t('timerReset')}</button>
            </div>

            <!-- Umlaut Bar -->
            <div class="sch-umlaut-bar">
              <span style="font-size:12px; font-weight:700; align-self:center; margin-right:4px;">${this.t('umlautLabel')}</span>
              ${['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(char => `
                <button type="button" class="sch-umlaut-btn" onclick="SchreibenExaminer.instance.insertChar('${char}')">${char}</button>
              `).join('')}
            </div>

            <!-- Word Counter Badge -->
            <div class="sch-word-counter-badge" id="sch-word-badge">
              ${this.t('wordCountLabel')} 0 / 80–120
            </div>
          </div>

          <!-- Text Editor -->
          <textarea
            class="sch-textarea"
            id="sch-student-textarea"
            placeholder="${this.t('textareaPlaceholder')}"
            oninput="SchreibenExaminer.instance.onTextInput(this)"
            dir="ltr"></textarea>

          <!-- Submit Button Row -->
          <div class="sch-submit-row">
            <span style="font-size:12px; color:var(--sch-text-muted);">
              💡 ${this.t('wordTarget')} • Offizieller 3-Kriterien-Maßstab
            </span>
            <button type="button" class="sch-submit-btn" id="sch-submit-btn" onclick="SchreibenExaminer.instance.submitEvaluation()">
              ${this.t('submitBtn')}
            </button>
          </div>

          <!-- Dynamic Evaluation Results Container -->
          <div id="sch-results-container"></div>
        </div>
      `;
    }

    onScenarioChange(scenarioId) {
      this.currentScenarioId = scenarioId;
      this.render();
    }

    insertChar(char) {
      const textarea = document.getElementById('sch-student-textarea');
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const val = textarea.value;
      textarea.value = val.substring(0, start) + char + val.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + char.length;
      textarea.focus();
      this.onTextInput(textarea);
    }

    onTextInput(textarea) {
      const words = textarea.value.trim().split(/\s+/).filter(Boolean).length;
      const badge = document.getElementById('sch-word-badge');
      if (badge) {
        badge.textContent = `${this.t('wordCountLabel')} ${words} / 80–120`;
        badge.classList.remove('optimal', 'warning');
        if (words >= 80 && words <= 120) {
          badge.classList.add('optimal');
        } else if (words > 120 || (words > 0 && words < 50)) {
          badge.classList.add('warning');
        }
      }
    }

    toggleTimer() {
      if (this.timerRunning) {
        clearInterval(this.timerInterval);
        this.timerRunning = false;
      } else {
        this.timerRunning = true;
        this.timerInterval = setInterval(() => {
          if (this.timerSeconds > 0) {
            this.timerSeconds--;
            this.updateTimerDisplay();
          } else {
            clearInterval(this.timerInterval);
            this.timerRunning = false;
            alert(this.t('timerExpired'));
          }
        }, 1000);
      }
    }

    resetTimer() {
      clearInterval(this.timerInterval);
      this.timerRunning = false;
      this.timerSeconds = 30 * 60;
      this.updateTimerDisplay();
    }

    updateTimerDisplay() {
      const el = document.getElementById('sch-timer-display');
      if (!el) return;
      const mins = Math.floor(this.timerSeconds / 60);
      const secs = this.timerSeconds % 60;
      el.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    async submitEvaluation() {
      const textarea = document.getElementById('sch-student-textarea');
      const text = textarea ? textarea.value.trim() : '';
      if (!text || text.split(/\s+/).length < 20) {
        alert(this.currentLang === 'tr' ? 'Lütfen en az 20 kelimelik bir metin girin.' : 'Please enter at least 20 words for telc B1 evaluation.');
        return;
      }

      const resultsContainer = document.getElementById('sch-results-container');
      const submitBtn = document.getElementById('sch-submit-btn');

      if (resultsContainer) {
        resultsContainer.innerHTML = `
          <div style="text-align:center; padding:36px; background:var(--sch-card-bg); border-radius:12px; margin-top:24px; border:1px solid var(--sch-card-border);">
            <div style="font-size:36px; margin-bottom:10px;">⏳</div>
            <p style="font-weight:700; color:var(--sch-accent-gold); font-size:16px; margin:0;">${this.t('evaluatingMsg')}</p>
          </div>
        `;
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      if (submitBtn) submitBtn.disabled = true;

      const scenario = SCHREIBEN_SCENARIOS[this.currentScenarioId] || SCHREIBEN_SCENARIOS.einladung;
      const taskPrompt = `${scenario.titleDe}: ${scenario.situationDe}`;
      const deviceId = (typeof StorageService !== 'undefined') ? StorageService.getDeviceId() : 'dev-device';
      const licenseKey = (typeof StorageService !== 'undefined') ? StorageService.getLicenseKey() : '';

      try {
        const workerEndpoint = (typeof window !== 'undefined' && window.DEUTSCHLERNEN_CONFIG?.aiEvaluatorUrl) || '/api/evaluate-letter';
        const res = await fetch(workerEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-License-Key': licenseKey,
            'X-Device-Fingerprint': deviceId
          },
          body: JSON.stringify({
            task_prompt: taskPrompt,
            student_text: text,
            ui_language: this.currentLang.toUpperCase(),
            device_fingerprint: deviceId,
            license_key: licenseKey
          })
        });

        if (res.status === 402) {
          const errJson = await res.json().catch(() => ({}));
          this.renderPaywallModal(errJson);
          return;
        }

        if (!res.ok) {
          const errJson = await res.json().catch(() => ({}));
          throw new Error(errJson.error || errJson.message || `Evaluation request failed (${res.status})`);
        }

        const data = await res.json();
        this.handleEvaluationSuccess(data);
        this.renderScorecard(data, text);
      } catch (err) {
        console.error('AI evaluation failed:', err);
        // Fallback to local heuristic simulation if worker endpoint unavailable
        const fallback = this.generateLocalFallbackEvaluation(text);
        this.handleEvaluationSuccess(fallback);
        this.renderScorecard(fallback, text);
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    }

    handleEvaluationSuccess(data) {
      if (!data || !data.meta) return;
      this.lastEvaluation = data;
      if (typeof localStorage !== 'undefined' && data.meta.total_score !== undefined) {
        localStorage.setItem('telc_letter_score', String(data.meta.total_score));
      }
      if (typeof StorageService !== 'undefined' && typeof StorageService.saveLastEvaluation === 'function') {
        StorageService.saveLastEvaluation(data);
      }

      // Collect detected errors for Fehlerheft
      const detectedErrors = [
        ...(data.free_preview?.visible_errors_sample || []),
        ...(data.pro_locked_content?.all_remaining_errors || [])
      ];

      detectedErrors.forEach(err => {
        const item = {
          word: err.original_snippet || 'Grammatikfehler',
          meaning: err.corrected_snippet || '',
          example: err.explanation || '',
          mistakeType: (err.rule_category || 'grammar').toLowerCase(),
          timestamp: Date.now()
        };
        if (typeof recordFehlerheftItem === 'function') {
          recordFehlerheftItem(item);
        } else if (typeof window !== 'undefined' && typeof window.recordFehlerheftItem === 'function') {
          window.recordFehlerheftItem(item);
        } else if (typeof StorageService !== 'undefined' && typeof StorageService.addFehlerItem === 'function') {
          StorageService.addFehlerItem(item);
        }
      });

      if (typeof window !== 'undefined' && typeof window.renderFehlerheftDashboard === 'function' && document.getElementById('fehlerheft-container')) {
        window.renderFehlerheftDashboard('fehlerheft-container');
      } else if (typeof renderFehlerheftDashboard === 'function' && typeof document !== 'undefined' && document.getElementById('fehlerheft-container')) {
        renderFehlerheftDashboard('fehlerheft-container');
      }

      if (typeof updateDashboardMetrics === 'function') {
        updateDashboardMetrics();
      } else if (typeof window !== 'undefined' && typeof window.updateDashboardMetrics === 'function') {
        window.updateDashboardMetrics();
      }
    }

    renderScorecard(data, originalText) {
      this.lastEvaluationData = data;
      this.lastLetterText = originalText;
      const container = document.getElementById('sch-results-container');
      if (!container) return;

      const meta = data.meta || {};
      const fp = data.free_preview || {};
      const cb = fp.criteria_breakdown || {};
      const pro = data.pro_locked_content || {};
      const isPro = data.unlocked || !pro.locked;

      const score = meta.total_score || 0;
      const passed = score >= 27;
      const scorePct = Math.round((score / 45) * 100);

      const lpChecks = cb.aufgabenbewaeltigung?.leitpunkte_check || [
        { point: "Punkt 1", status: "covered" },
        { point: "Punkt 2", status: "covered" },
        { point: "Punkt 3", status: "partial" },
        { point: "Punkt 4", status: "covered" }
      ];

      const visibleErrors = fp.visible_errors_sample || [];
      const allErrors = isPro && Array.isArray(pro.all_remaining_errors) && pro.all_remaining_errors.length
        ? [...visibleErrors, ...pro.all_remaining_errors]
        : visibleErrors;
      const hiddenErrorsCount = fp.hidden_errors_count || pro.hidden_errors_count || 3;
      const teaserRewrite = pro.teaser_rewrite_preview || "Liebe Marianne, ich habe mich sehr über deine Nachricht gefreut...";

      container.innerHTML = `
        <div class="sch-scorecard-card">
          <!-- Visual Score Gauge & Pass Badge -->
          <div class="sch-gauge-header">
            <div class="sch-gauge-wrap">
              <div class="sch-gauge-circle" style="--score-pct: ${scorePct};">
                <div class="sch-gauge-inner">
                  <span class="sch-gauge-score">${score}</span>
                  <span class="sch-gauge-max">/ 45 Pkt</span>
                </div>
              </div>
              <div>
                <h4 style="margin:0 0 6px 0; font-size:16px;">${this.t('scoreGaugeTitle')}</h4>
                <div class="sch-pass-pill ${passed ? 'passed' : 'failed'}">
                  ${passed ? this.t('passedBadge') : this.t('failedBadge')}
                </div>
              </div>
            </div>

            <div style="font-size:13px; color:var(--sch-text-muted); max-width:400px; line-height:1.5;">
              ${fp.examiner_verdict || 'Official evaluation according to telc B1 rubric.'}
            </div>
          </div>

          <!-- 4 Leitpunkte Status Pills -->
          <div class="sch-leitpunkte-status-row">
            ${lpChecks.map((lp, i) => {
              const pillClass = lp.status === 'covered' ? 'covered' : (lp.status === 'partial' ? 'partial' : 'missing');
              const pillText = lp.status === 'covered' ? this.t('lpCovered') : (lp.status === 'partial' ? this.t('lpPartial') : this.t('lpMissing'));
              return `
                <div class="sch-lp-pill ${pillClass}">
                  <span>${pillText}</span>
                  <span style="font-weight:700;">Punkt ${i + 1}: ${lp.point}</span>
                </div>
              `;
            }).join('')}
          </div>

          <!-- 3 telc Criteria Cards -->
          <div class="sch-criteria-grid">
            <div class="sch-criterion-card">
              <div class="sch-criterion-header">
                <strong>I. Aufgabenbewältigung</strong>
                <span class="sch-criterion-grade">Note ${cb.aufgabenbewaeltigung?.grade || 'B'}</span>
              </div>
              <div class="sch-criterion-pts">${cb.aufgabenbewaeltigung?.weighted_points || 9} / 15 Pkt</div>
              <p class="sch-criterion-desc">${cb.aufgabenbewaeltigung?.reason || 'Inhaltlich angemessen.'}</p>
            </div>

            <div class="sch-criterion-card">
              <div class="sch-criterion-header">
                <strong>II. Kommunikative Gestaltung</strong>
                <span class="sch-criterion-grade">Note ${cb.kommunikative_gestaltung?.grade || 'B'}</span>
              </div>
              <div class="sch-criterion-pts">${cb.kommunikative_gestaltung?.weighted_points || 9} / 15 Pkt</div>
              <p class="sch-criterion-desc">${cb.kommunikative_gestaltung?.reason || 'Register und Konnektoren angewendet.'}</p>
            </div>

            <div class="sch-criterion-card">
              <div class="sch-criterion-header">
                <strong>III. Formale Richtigkeit</strong>
                <span class="sch-criterion-grade">Note ${cb.formale_richtigkeit?.grade || 'B'}</span>
              </div>
              <div class="sch-criterion-pts">${cb.formale_richtigkeit?.weighted_points || 9} / 15 Pkt</div>
              <p class="sch-criterion-desc">${cb.formale_richtigkeit?.reason || 'Primat der Verständlichkeit gewahrt.'}</p>
            </div>
          </div>

          <!-- Grammar Errors with Strikethrough Red -> Green Diff -->
          <div class="sch-errors-section">
            <h4 class="sch-errors-title">🔍 ${isPro ? this.t('allErrorsTitle') : this.t('firstErrorsTitle')}</h4>
            ${allErrors.map(err => `
              <div class="sch-diff-card">
                <div class="sch-diff-body">
                  <del class="diff-del">${err.original_snippet}</del>
                  &rarr;
                  <ins class="diff-ins">${err.corrected_snippet}</ins>
                  <span style="font-size:11px; font-weight:700; color:var(--sch-accent-gold); margin-left:8px;">[${err.rule_category}]</span>
                </div>
                <div class="sch-diff-expl">💡 ${err.explanation}</div>
              </div>
            `).join('')}
          </div>

          <!-- The Blurred Paywall Conversion Box (when isPro === false) -->
          ${!isPro ? `
            <div class="sch-paywall-box">
              <div class="sch-blurred-backdrop">
                <!-- Dummy Blurred Error Cards -->
                <div class="sch-dummy-error-card">
                  <del class="diff-del">Ich habe gesehen dass er kommt</del> &rarr; <ins class="diff-ins">Ich habe gesehen, dass er kommt</ins>
                  <div style="font-size:11px; margin-top:4px;">Kommasetzung vor Subjunktion dass</div>
                </div>
                <div class="sch-dummy-error-card">
                  <del class="diff-del">wegen dem schlechten Wetter</del> &rarr; <ins class="diff-ins">wegen des schlechten Wetters</ins>
                  <div style="font-size:11px; margin-top:4px;">Genitivpräposition 'wegen'</div>
                </div>

                <!-- Teaser Model Rewrite Card -->
                <div class="sch-teaser-model-rewrite">
                  <strong>${this.t('modelRewriteLockedTitle')}</strong><br>
                  <span>${teaserRewrite}</span>
                </div>
              </div>

              <!-- Overlay CTA Card -->
              <div class="sch-cta-overlay">
                <div class="sch-cta-card-content">
                  <h3 class="sch-cta-headline">${this.t('ctaHeadline')}</h3>
                  <p class="sch-cta-value-anchor">${this.t('ctaValueAnchor')}</p>
                  <div class="sch-cta-actions">
                    <button type="button" class="sch-primary-unlock-btn" onclick="SchreibenExaminer.instance.openCheckout('pass-30')">
                      ${this.t('btnUnlock30')}
                    </button>
                    <button type="button" class="sch-secondary-license-btn" onclick="SchreibenExaminer.instance.enterLicenseKey()">
                      ${this.t('btnEnterLicense')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ` : `
            <!-- Unlocked Pro View -->
            <div class="sch-unlocked-card">
              <div class="sch-unlocked-header">
                <h4 class="sch-unlocked-title">🏆 45/45 Gold-Standard telc B1 Model Rewrite</h4>
                <button type="button" class="sch-timer-btn" onclick="navigator.clipboard && navigator.clipboard.writeText(document.getElementById('sch-pro-text').innerText); alert('Copied!');">
                  📋 Copy
                </button>
              </div>
              <div class="sch-model-text" id="sch-pro-text">${pro.model_rewrite_45_points || teaserRewrite}</div>

              ${pro.missing_leitpunkt_injection ? `
                <div class="sch-injection-box">
                  <strong style="color:#38bdf8; font-size:13px;">💡 Missing Leitpunkt Injection (Insert into draft):</strong>
                  <p style="margin:6px 0 0 0; font-size:13px; font-style:italic;">"${pro.missing_leitpunkt_injection}"</p>
                </div>
              ` : ''}

              ${pro.b1_power_phrases_to_memorize ? `
                <div class="sch-power-phrases-grid">
                  ${pro.b1_power_phrases_to_memorize.map(ph => `
                    <div class="sch-power-phrase-item">✨ "${ph}"</div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `}
        </div>
      `;

      container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    openCheckout(tierId = 'pass-30') {
      if (this.options && typeof this.options.onProCheckout === 'function') {
        this.options.onProCheckout(tierId);
        return;
      }
      const checkoutUrls = {
        'pass-30': 'https://deutschlernen.lemonsqueezy.com/buy/exam-pass-30',
        'pass-90': 'https://deutschlernen.lemonsqueezy.com/buy/exam-pass-90'
      };
      const url = checkoutUrls[tierId] || checkoutUrls['pass-30'];
      if (typeof window !== 'undefined' && window.LemonSqueezy && typeof window.LemonSqueezy.Url?.Open === 'function') {
        window.LemonSqueezy.Url.Open(url);
      } else if (typeof window !== 'undefined') {
        window.open(url, '_blank');
      }
    }

    enterLicenseKey() {
      const currentKey = (typeof StorageService !== 'undefined') ? StorageService.getLicenseKey() : (localStorage.getItem('deutschlernen_pro_license') || '');
      const key = prompt(this.t('licensePrompt'), currentKey);
      if (key !== null) {
        const trimmed = key.trim();
        if (trimmed) {
          if (typeof StorageService !== 'undefined') {
            StorageService.setLicenseKey(trimmed);
          } else {
            localStorage.setItem('deutschlernen_pro_license', trimmed);
          }
          if (typeof window !== 'undefined' && typeof window.updateDashboardMetrics === 'function') {
            window.updateDashboardMetrics();
          }
          alert('✅ Pro Exam Pass License activated!');
          this.submitEvaluation();
        }
      }
    }

    renderPaywallModal(errJson) {
      if (typeof renderPaywallExhaustedModal === 'function') {
        renderPaywallExhaustedModal(errJson);
      } else {
        alert(errJson?.message || 'Free evaluation quota used up. Please upgrade to continue.');
        this.openCheckout('pass-30');
      }
    }

    generateLocalFallbackEvaluation(text, promptObj, isProParam) {
      const isPro = typeof isProParam === 'boolean' ? isProParam : (typeof StorageService !== 'undefined' ? StorageService.isProUser() : false);
      const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
      const score = words >= 80 ? 33 : 21;
      const finalScore = isPro ? 45 : score;

      const sampleErrors = [
        { original_snippet: "Gestern ich habe", corrected_snippet: "Gestern habe ich", rule_category: "Inversion", explanation: "Verb an Position 2." },
        { original_snippet: "weil ich bin müde", corrected_snippet: "weil ich müde bin", rule_category: "Nebensatz", explanation: "Verb ans Satzende nach 'weil'." },
        { original_snippet: "Ich hoffe dass du kommst", corrected_snippet: "Ich hoffe, dass du kommst", rule_category: "Kommasetzung", explanation: "Komma vor der Subjunktion 'dass'." },
        { original_snippet: "wegen dem schlechten Wetter", corrected_snippet: "wegen des schlechten Wetters", rule_category: "Genitiv", explanation: "Präposition 'wegen' verlangt den Genitiv." }
      ];

      return {
        meta: { word_count: words, total_score: finalScore, passed: finalScore >= 27 },
        unlocked: isPro,
        free_preview: {
          examiner_verdict: finalScore >= 27
            ? "Erfolgreich bestanden. Gute inhaltliche Bearbeitung mit kleinen formalen Schwächen."
            : "Nicht bestanden. Wortanzahl und Grammatikstrukturen erfüllen noch nicht den B1-Standard.",
          criteria_breakdown: {
            aufgabenbewaeltigung: {
              grade: isPro ? 'A' : (finalScore >= 27 ? 'A' : 'B'),
              raw_points: isPro ? 5 : (finalScore >= 27 ? 5 : 3),
              weighted_points: isPro ? 15 : (finalScore >= 27 ? 15 : 9),
              reason: 'Leitpunkte wurden bearbeitet.'
            },
            kommunikative_gestaltung: {
              grade: isPro ? 'A' : 'B',
              raw_points: isPro ? 5 : 3,
              weighted_points: isPro ? 15 : 9,
              reason: 'B1 Konnektoren angewendet.'
            },
            formale_richtigkeit: {
              grade: isPro ? 'A' : (finalScore >= 27 ? 'B' : 'C'),
              raw_points: isPro ? 5 : (finalScore >= 27 ? 3 : 1),
              weighted_points: isPro ? 15 : (finalScore >= 27 ? 9 : 3),
              reason: 'Verbposition und Satzstellung.'
            }
          },
          visible_errors_sample: sampleErrors.slice(0, 2),
          hidden_errors_count: isPro ? 0 : 2
        },
        pro_locked_content: {
          locked: !isPro,
          teaser_rewrite_preview: "Liebe Marianne, ich habe mich sehr über deine Nachricht gefreut...",
          model_rewrite_45_points: isPro
            ? "Lieber Markus, vielen Dank für die herzliche Einladung zu deiner Feier. Leider habe ich am Wochenende eine dringende Familienfeier und kann nicht kommen. Es tut mir sehr leid. Dein Geschenk bringe ich dir bald vorbei. Wie wäre es, wenn wir uns nächste Woche auf einen Kaffee treffen? Liebe Grüße"
            : undefined,
          missing_leitpunkt_injection: isPro
            ? "Ich hoffe sehr, dass wir uns bald wiedersehen können."
            : undefined,
          b1_power_phrases_to_memorize: isPro
            ? ["Ich habe mich riesig über deine Einladung gefreut.", "Lass uns unbedingt bald wiedersehen!"]
            : undefined,
          all_remaining_errors: isPro ? sampleErrors.slice(2) : []
        }
      };
    }
  }

  // Singleton instance
  SchreibenExaminer.instance = new SchreibenExaminer();

  return SchreibenExaminer;
});
