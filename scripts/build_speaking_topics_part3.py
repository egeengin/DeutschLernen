#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Builder for SPEAKING_EXAM_TOPICS Teil 3 & Freies Sprechen in DeutschLernen
Contains 6 pair planning topics (Teil 3) and 2 free speaking topics:
- 4-language titles & descriptions (DE, TR, EN, AR, UK)
- Comprehensive Leitpunkte checklists with keyword stems
- Authentic turn-taking Model Pair Dialogues (Partner A & Partner B)
- Essential negotiation Redemittel with interactive 1-click insertion
- Key B1 vocabulary cards
"""

TEIL_3 = [
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
                "keywords": ["wann", "zeit", "samstag", "freitag", "abend", "uhr", "termin", "wochenende", "nächste"]
            },
            {
                "key": "wo",
                "label": "Wo? (Ort, Raum oder Draußen)",
                "labelTr": "Nerede? Mekan, oda veya açık hava",
                "labelEn": "Where? Location, room, garden, or restaurant",
                "labelAr": "مكان الحفل (قاعة، حديقة، أو مطعم)",
                "labelUk": "Де? Локація, зал, ресторан чи природа",
                "keywords": ["wo", "ort", "raum", "park", "restaurant", "café", "garten", "büro", "bürgerhaus", "mieten"]
            },
            {
                "key": "essen",
                "label": "Essen & Trinken (Yiyecek ve İçecekler)",
                "labelTr": "Yiyecek ve içecekler nasıl organize edilecek?",
                "labelEn": "Food and beverages arrangements",
                "labelAr": "المأكولات والمشروبات وتحضير البوفيه",
                "labelUk": "Їжа та напої, фуршет або замовлення",
                "keywords": ["essen", "trinken", "getränke", "kuchen", "buffet", "pizza", "fingerfood", "mitbringen", "kaufen", "saft"]
            },
            {
                "key": "geschenk",
                "label": "Geschenk & Überraschung (Hediye ve Sürpriz)",
                "labelTr": "Ortak hediye, tebrik kartı veya sürpriz",
                "labelEn": "Gift, card, or surprise farewell idea",
                "labelAr": "الهدية التذكارية والبطاقة والمفاجأة",
                "labelUk": "Спільний подарунок, листівка або сюрприз",
                "keywords": ["geschenk", "überraschung", "karte", "gutschein", "foto", "blumen", "sammeln", "buch", "album"]
            },
            {
                "key": "kosten",
                "label": "Wer bezahlt wofür? (Masrafların Bölüşümü)",
                "labelTr": "Bütçe ve masrafların paylaşımı",
                "labelEn": "Who pays what? Budget and cost splitting",
                "labelAr": "توزيع التكاليف والميزانية بين المشاركين",
                "labelUk": "Хто за що платить? Розподіл витрат і бюджет",
                "keywords": ["bezahlen", "kosten", "geld", "euro", "teilen", "hälfte", "kasse", "budget", "pro person", "sammeln"]
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
            {"phrase": "Ich schlage vor, dass wir am Freitagabend feiern.", "tr": "Cuma akşamı kutlama yapmamızı öneriyorum.", "en": "I suggest we celebrate on Friday evening.", "category": "Vorschlag"},
            {"phrase": "Das ist eine ausgezeichnete Idee! Wann hättest du Zeit?", "tr": "Harika bir fikir! Ne zaman vaktin olur?", "en": "That is an excellent idea! When would you have time?", "category": "Zustimmung"},
            {"phrase": "Besser wäre es, wenn wir einen Tisch reservieren.", "tr": "Masa ayırtmamız çok daha iyi olur.", "en": "It would be better if we reserve a table.", "category": "Gegenvorschlag"},
            {"phrase": "Ich kann mich um die Reservierung kümmern.", "tr": "Rezervasyon işini ben üstlenebilirim.", "en": "I can take care of the reservation.", "category": "Aufgaben"},
            {"phrase": "Was hältst du von einem gemeinsamen Gutschein?", "tr": "Ortak bir hediye çekine ne dersin?", "en": "What do you think about a joint gift voucher?", "category": "Vorschlag"},
            {"phrase": "Einverstanden! Dann haben wir alles Wesentliche geregelt.", "tr": "Anlaştık! Böylece gereken her şeyi kararlaştırdık.", "en": "Agreed! Then we have settled all essential points.", "category": "Vereinbarung"}
        ],
        "keyVocab": [
            {"de": "die Abschiedsfeier", "article": "die", "plural": "die Abschiedsfeiern", "tr": "veda kutlaması, veda partisi", "en": "farewell celebration"},
            {"de": "der Gutschein", "article": "der", "plural": "die Gutscheine", "tr": "hediye çeki, kupon", "en": "gift voucher"},
            {"de": "die Reservierung", "article": "die", "plural": "die Reservierungen", "tr": "rezervasyon", "en": "reservation"},
            {"de": "die Überraschung", "article": "die", "plural": "die Überraschungen", "tr": "sürpriz", "en": "surprise"},
            {"de": "das Fotobuch", "article": "das", "plural": "die Fotobücher", "tr": "fotoğraf albümü", "en": "photo album"}
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
                "keywords": ["wohin", "ziel", "see", "berge", "museum", "köln", "düsseldorf", "natur", "stadt", "ausflug"]
            },
            {
                "key": "verkehr",
                "label": "Wie dorthin? (Ulaşım Aracı)",
                "labelTr": "Hangi araçla gidilecek?",
                "labelEn": "Transportation: train, Deutschlandticket, or car",
                "labelAr": "وسيلة النقل (القطار، تذكرة ألمانيا، أم بالسيارة)",
                "labelUk": "Чим дістатися? Поїзд, квиток Deutschlandticket чи авто",
                "keywords": ["zug", "bahn", "auto", "deutschlandticket", "ticket", "abfahrt", "bahnhof", "regionalbahn"]
            },
            {
                "key": "verpflegung",
                "label": "Verpflegung & Picknick (Yiyecek & İçecek)",
                "labelTr": "Yemek ve içecekler nasıl çözülecek?",
                "labelEn": "Food, snacks, drinks, picnic or restaurant",
                "labelAr": "الطعام والشراب والنزهة في الهواء الطلق",
                "labelUk": "Харчування, перекус, пікнік чи обід у ресторані",
                "keywords": ["picknick", "essen", "sandwiches", "wasser", "restaurant", "proviant", "mitnehmen", "obst", "brot"]
            },
            {
                "key": "programm",
                "label": "Aktivitäten & Programm (Gezilecek Yerler)",
                "labelTr": "Görülmesi gereken yerler ve aktiviteler",
                "labelEn": "Activities: sightseeing, castle tour, walk, photos",
                "labelAr": "البرنامج السياحي والأنشطة والتقاط الصور",
                "labelUk": "Програма: екскурсія, замок, прогулянка чи музей",
                "keywords": ["programm", "spaziergang", "schloss", "führung", "besichtigen", "fotos", "schwimmen", "wandern"]
            },
            {
                "key": "schlechtes_wetter",
                "label": "Plan B bei schlechtem Wetter (Hava Bozulursa)",
                "labelTr": "Hava yağmurlu olursa alternatif plan",
                "labelEn": "Backup plan in case of rain: cinema, museum, thermal bath",
                "labelAr": "خطة بديلة في حال هطول الأمطار (متحف أو سينما)",
                "labelUk": "План 'Б' на випадок дощу (музей, кіно чи термальні басейни)",
                "keywords": ["wetter", "regen", "plan b", "drinnen", "kino", "therme", "regenschirm", "museum"]
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
            {"phrase": "Hast du Lust, am Wochenende einen Ausflug zu machen?", "tr": "Hafta sonu bir geziye çıkmak ister misin?", "en": "Would you like to make a trip this weekend?", "category": "Vorschlag"},
            {"phrase": "Ich schlage vor, dass wir mit der Regionalbahn fahren.", "tr": "Bölgesel trenle gitmemizi öneriyorum.", "en": "I suggest taking the regional train.", "category": "Vorschlag"},
            {"phrase": "Einverstanden, das Deutschlandticket macht das sehr günstig.", "tr": "Anlaştık, Deutschlandticket bunu çok hesaplı kılıyor.", "en": "Agreed, the Deutschlandticket makes it very affordable.", "category": "Zustimmung"},
            {"phrase": "Wie machen wir das mit dem Essen und der Verpflegung?", "tr": "Yiyecek ve erzak işini nasıl yapıyoruz?", "en": "How shall we handle food and provisions?", "category": "Planung"},
            {"phrase": "Als Plan B bei Regen können wir ein Museum besuchen.", "tr": "Yağmur için B planı olarak bir müzeyi ziyaret edebiliriz.", "en": "As plan B for rain we can visit a museum.", "category": "Alternative"}
        ],
        "keyVocab": [
            {"de": "der Tagesausflug", "article": "der", "plural": "die Tagesausflüge", "tr": "günübirlik gezi", "en": "day trip"},
            {"de": "die Sehenswürdigkeit", "article": "die", "plural": "die Sehenswürdigkeiten", "tr": "tarihi/turistik yer", "en": "sight / tourist attraction"},
            {"de": "die Verpflegung", "article": "die", "plural": "-", "tr": "kumanya, yiyecek-içecek", "en": "catering / provisions"},
            {"de": "der Gleis", "article": "der", "plural": "die Gleise", "tr": "tren peronu / rayı", "en": "track / platform"},
            {"de": "die Aussicht", "article": "die", "plural": "die Aussichten", "tr": "manzara", "en": "view / panorama"}
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
                "keywords": ["samstag", "nachmittag", "schulhof", "uhr", "wiese", "aula", "turnhalle"]
            },
            {
                "key": "spiele",
                "label": "Spiele & Aktivitäten für Kinder (Oyunlar & Eğlence)",
                "labelTr": "Çocuklar için yarışmalar, yüz boyama, oyun istasyonları",
                "labelEn": "Games, face painting, sports stations for kids",
                "labelAr": "ألعاب الأطفال، الرسم على الوجوه، والمسابقات",
                "labelUk": "Ігри, аквагрим, конкурси та естафети для дітей",
                "keywords": ["spiele", "kinderschminken", "sackhüpfen", "stationen", "musik", "gewinne", "fußball"]
            },
            {
                "key": "buffet",
                "label": "Essen & Internationales Buffet (Yiyecek & Büfe)",
                "labelTr": "Velilerden yemekler, kekler ve içecekler",
                "labelEn": "International parent buffet, cake donations, drinks",
                "labelAr": "بوفيه دولي من الأمهات والآباء والمشروبات",
                "labelUk": "Міжнародний фуршет від батьків, випічка та напої",
                "keywords": ["kuchen", "buffet", "eltern", "spenden", "grillen", "würstchen", "saft", "salat"]
            },
            {
                "key": "einladung",
                "label": "Einladungen & Plakate (Duyuru & Afişler)",
                "labelTr": "Velilere mektup, afişler ve duyuru kanalları",
                "labelEn": "Parent invitations, flyers, bulletin board posters",
                "labelAr": "بطاقات الدعوة والملصقات في المدرسة",
                "labelUk": "Запрошення для батьків та яскраві плакати",
                "keywords": ["plakat", "einladung", "aushang", "brief", "flyer", "elternbeirat", "whatsapp"]
            },
            {
                "key": "aufgaben",
                "label": "Aufgabenverteilung & Helferliste (Görev Dağılımı)",
                "labelTr": "Kim ne yapacak? Stand nöbetleri ve temizlik",
                "labelEn": "Task allocation: shifts, setup, and cleanup crew",
                "labelAr": "توزيع المهام وجدول النظافة والترتيب",
                "labelUk": "Розподіл обов'язків, чергування та прибирання",
                "keywords": ["aufbau", "abbau", "putzen", "helfer", "liste", "schicht", "übernehmen"]
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
            {"phrase": "Wir sollten ein internationales Buffet für die Eltern organisieren.", "tr": "Veliler için uluslararası bir açık büfe düzenlemeliyiz.", "en": "We should organize an international buffet for parents.", "category": "Vorschlag"},
            {"phrase": "Das ist ein hervorragender Vorschlag, ich stimme dir vollkommen zu.", "tr": "Bu mükemmel bir öneri, sana tamamen katılıyorum.", "en": "That is an excellent proposal, I completely agree with you.", "category": "Zustimmung"},
            {"phrase": "Ich kann mich um die Spiele und die Preise kümmern.", "tr": "Oyunlar ve ödüllerle ben ilgilenebilirim.", "en": "I can take care of the games and prizes.", "category": "Aufgaben"},
            {"phrase": "Für den Fall von schlechtem Wetter weichen wir in die Turnhalle aus.", "tr": "Kötü hava durumunda spor salonuna geçeriz.", "en": "In case of bad weather we relocate to the gym.", "category": "Alternative"},
            {"phrase": "Lass uns zwei Schichten für den Auf- und Abbau einteilen.", "tr": "Kurulum ve toplama için iki vardiya belirleyelim.", "en": "Let's organize two shifts for setup and cleanup.", "category": "Vereinbarung"}
        ],
        "keyVocab": [
            {"de": "das Sommerfest", "article": "das", "plural": "die Sommerfeste", "tr": "yaz şenliği, yaz festivali", "en": "summer festival"},
            {"de": "das Kinderschminken", "article": "das", "plural": "-", "tr": "çocuk yüz boyama etkinliği", "en": "face painting"},
            {"de": "der Schulhof", "article": "der", "plural": "die Schulhöfe", "tr": "okul bahçesi", "en": "schoolyard"},
            {"de": "die Turnhalle", "article": "die", "plural": "die Turnhallen", "tr": "spor salonu", "en": "gymnasium"},
            {"de": "der Helfer", "article": "der", "plural": "die Helfer", "tr": "gönüllü yardımcı", "en": "helper / volunteer"}
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
                "keywords": ["einkaufen", "supermarkt", "apotheke", "medikamente", "rezept", "liste", "besorgen", "drogerie"]
            },
            {
                "key": "haushalt",
                "label": "Haushalt & Kochen (Ev İşleri & Sıcak Yemek)",
                "labelTr": "Yemek pişirme, temizlik ve çöp atma",
                "labelEn": "Cooking fresh meals, light cleaning, taking out bins",
                "labelAr": "الطهي والتنظيف البسيط وإخراج القمامة",
                "labelUk": "Приготування гарячої їжі, легке прибирання та сміття",
                "keywords": ["kochen", "suppe", "essen", "müll", "putzen", "wäsche", "haushalt", "bringen"]
            },
            {
                "key": "arzt",
                "label": "Fahrten zum Arzt (Doktor Ziyareti & Ulaşım)",
                "labelTr": "Hastaneye / doktora gidiş gelişte refakat",
                "labelEn": "Transportation and escorting to medical checks",
                "labelAr": "المرافقة إلى مواعيد الطبيب والمستشفى",
                "labelUk": "Супровід до лікаря або лікарні",
                "keywords": ["arzt", "kontrolle", "fahren", "auto", "begleiten", "termin", "abholen", "krücken"]
            },
            {
                "key": "besuch",
                "label": "Gesellschaft & Aufmunterung (Ziyaret & Moral)",
                "labelTr": "Ziyaret saatleri, moral verme, kitap veya film",
                "labelEn": "Visits, cheering up, books, board games",
                "labelAr": "الزيارة والتسلية ورفع المعنويات",
                "labelUk": "Відвідини, підтримка настрою, книги та фільми",
                "keywords": ["besuchen", "zeit", "gesellschaft", "einsam", "langweilig", "buch", "spiel", "aufmuntern", "tee"]
            },
            {
                "key": "organisation",
                "label": "Absprache & Aufgabenteilung (İş Bölümü)",
                "labelTr": "Haftalık takvim ve kimin hangi gün yardım edeceği",
                "labelEn": "Weekly schedule and coordinating with other neighbors",
                "labelAr": "جدول أسبوعي لتوزيع الأيام بين المتطوعين",
                "labelUk": "Графік чергування на тиждень",
                "keywords": ["tage", "montag", "mittwoch", "samstag", "plan", "aufteilen", "telefonieren", "gruppe"]
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
            {"phrase": "Wir sollten unserem Nachbarn in dieser Situation beistehen.", "tr": "Bu durumda komşumuza destek olmalıyız.", "en": "We should stand by our neighbor in this situation.", "category": "Vorschlag"},
            {"phrase": "Ich kann die Einkäufe im Supermarkt und in der Apotheke übernehmen.", "tr": "Market ve eczane alışverişlerini ben üstlenebilirim.", "en": "I can handle the supermarket and pharmacy errands.", "category": "Aufgaben"},
            {"phrase": "Wenn du die Einkäufe machst, koche ich das Essen.", "tr": "Sen alışverişi yaparsan, ben yemeği pişiririm.", "en": "If you do the shopping, I will cook the meals.", "category": "Aufgabenteilung"},
            {"phrase": "Ich fahre ihn mit dem Auto zum Arzttermin.", "tr": "Onu arabamla doktor randevusuna götürürüm.", "en": "I will drive him to his doctor's appointment.", "category": "Hilfe"},
            {"phrase": "Einverstanden, das entlastet ihn enorm.", "tr": "Anlaştık, bu onun yükünü çok hafifletir.", "en": "Agreed, that will relieve him immensely.", "category": "Vereinbarung"}
        ],
        "keyVocab": [
            {"de": "die Hilfsbereitschaft", "article": "die", "plural": "-", "tr": "yardımseverlik", "en": "helpfulness / solidarity"},
            {"de": "die Krücke", "article": "die", "plural": "die Krücken", "tr": "koltuk değneği", "en": "crutch"},
            {"de": "das Rezept", "article": "das", "plural": "die Rezepte", "tr": "doktor reçetesi", "en": "prescription"},
            {"de": "die Genesung", "article": "die", "plural": "-", "tr": "iyileşme, şifa bulma", "en": "recovery"},
            {"de": "die Nachbarschaftshilfe", "article": "die", "plural": "-", "tr": "komşuluk yardımlaşması", "en": "neighborhood assistance"}
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
                "keywords": ["samstag", "abend", "wohnung", "garten", "überraschung", "uhr", "lokal", "club"]
            },
            {
                "key": "gaeste",
                "label": "Gästeliste & Einladungen (Davetli Listesi)",
                "labelTr": "Kimler çağrılacak ve gizlilik nasıl korunacak?",
                "labelEn": "Guest list and keeping the secret",
                "labelAr": "قائمة المدعوين والحفاظ على سرية المفاجأة",
                "labelUk": "Список гостей та збереження таємниці",
                "keywords": ["gäste", "freunde", "familie", "einladen", "heimlich", "geheim", "gruppe", "überraschen"]
            },
            {
                "key": "torte",
                "label": "Geburtstagstorte & Dekoration (Pasta ve Süsleme)",
                "labelTr": "Doğum günü pastası, balonlar ve süsler",
                "labelEn": "Birthday cake, candles, balloons, decorations",
                "labelAr": "كعكة عيد الميلاد والشموع والبالونات والزينة",
                "labelUk": "Торт зі свічками, кульки та святковий декор",
                "keywords": ["torte", "kuchen", "kerzen", "ballons", "deko", "musik", "lichterkette"]
            },
            {
                "key": "geschenk",
                "label": "Gemeinschaftsgeschenk (Ortak Büyük Hediye)",
                "labelTr": "Herkesin katıldığı ortak hediye fikri",
                "labelEn": "Joint major gift and collecting money",
                "labelAr": "هدية مشتركة مميزة وجمع التبرعات من الأصدقاء",
                "labelUk": "Спільний великий подарунок та збір коштів",
                "keywords": ["geschenk", "geld", "gutschein", "reise", "fahrrad", "sammeln", "karte"]
            },
            {
                "key": "clou",
                "label": "Wie locken wir ihn/sie dorthin? (Sürprizin İpuçları)",
                "labelTr": "Arkadaşı mekana nasıl çaktırmadan getireceğiz?",
                "labelEn": "The excuse to lure the friend to the venue unnoticed",
                "labelAr": "الحيلة الذكية لجلب الصديق إلى المكان دون أن يشك",
                "labelUk": "Як непомітно заманити іменинника на локацію",
                "keywords": ["vorwand", "ausrede", "abholen", "ankommen", "überraschung", "licht aus"]
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
            {"phrase": "Lass uns eine heimliche Überraschungsparty planen.", "tr": "Hadi gizli bir sürpriz parti planlayalım.", "en": "Let's plan a secret surprise party.", "category": "Vorschlag"},
            {"phrase": "Unter einem Vorwand locken wir ihn dorthin.", "tr": "Bir bahane uydurarak onu oraya çekeriz.", "en": "Under a pretext we will lure him there.", "category": "Planung"},
            {"phrase": "Wir sollten ein gemeinsames Geschenk besorgen.", "tr": "Ortak bir hediye ayarlamalıyız.", "en": "We should arrange a joint gift.", "category": "Geschenk"},
            {"phrase": "Ich erstelle eine geheime Chatgruppe für alle Freunde.", "tr": "Tüm arkadaşlar için gizli bir mesajlaşma grubu kurarım.", "en": "I'll create a secret group chat for all friends.", "category": "Aufgaben"},
            {"phrase": "Abgemacht! Das wird eine unvergessliche Feier.", "tr": "Anlaştık! Bu unutulmaz bir kutlama olacak.", "en": "Done deal! That will be an unforgettable celebration.", "category": "Vereinbarung"}
        ],
        "keyVocab": [
            {"de": "die Überraschungsparty", "article": "die", "plural": "die Überraschungspartys", "tr": "sürpriz parti", "en": "surprise party"},
            {"de": "die Ausrede", "article": "die", "plural": "die Ausreden", "tr": "bahane", "en": "excuse / pretext"},
            {"de": "das Gemeinschaftsgeschenk", "article": "das", "plural": "die Gemeinschaftsgeschenke", "tr": "ortaklaşa alınan hediye", "en": "joint gift"},
            {"de": "die Konditorei", "article": "die", "plural": "die Konditoreien", "tr": "pastane", "en": "pastry shop / confectionery"},
            {"de": "die Geheimhaltung", "article": "die", "plural": "-", "tr": "gizlilik, sır tutma", "en": "secrecy"}
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
                "keywords": ["wann", "mittwoch", "donnerstag", "wöchentlich", "uhr", "abend", "feiertag"]
            },
            {
                "key": "ort",
                "label": "Wo? (Ruhiger Treffpunkt)",
                "labelTr": "Nerede? Kütüphane, kafe veya park",
                "labelEn": "Venue: library study room, quiet café, or park",
                "labelAr": "المكان المناسب (مكتبة عامة أو مقهى هادئ)",
                "labelUk": "Місце: бібліотека, тихе кафе або парк",
                "keywords": ["bibliothek", "café", "raum", "treffpunkt", "park", "zentral", "ruhig"]
            },
            {
                "key": "inhalte",
                "label": "Was üben? (Sprechen, Grammatik, Spiele)",
                "labelTr": "Neler çalışılacak? Konuşma pratiği, sunumlar, oyunlar",
                "labelEn": "Agenda: speaking drills, presentations, mock tests",
                "labelAr": "المحتوى التعليمي (المحادثة، القواعد، وألعاب الكلمات)",
                "labelUk": "Що тренувати: розмовну практику, граматику та ігри",
                "keywords": ["sprechen", "grammatik", "teil 2", "präsentation", "redemittel", "wortschatz", "spiele"]
            },
            {
                "key": "regeln",
                "label": "Sprachregeln (Goldene Regel: Nur Deutsch)",
                "labelTr": "Altın kural: Yalnızca Almanca konuşulacak",
                "labelEn": "Ground rules: speak only German, polite feedback",
                "labelAr": "قواعد الجلسة (القاعدة الذهبية: التحدث بالألمانية فقط)",
                "labelUk": "Золоте правило: говорити виключно німецькою мовою",
                "keywords": ["regel", "nur deutsch", "muttersprache", "kein englisch", "fehler", "korrigieren", "freundlich"]
            },
            {
                "key": "mitglieder",
                "label": "Mitglieder werben (Duyuru & Adaylar)",
                "labelTr": "Yeni üyeler nereden bulunacak? Kurs panosu, sosyal medya",
                "labelEn": "Recruiting participants via bulletin board or group chat",
                "labelAr": "دعوة المشاركين عبر لوحة إعلانات المعهد ومجموعات التواصل",
                "labelUk": "Залучення учасників через оголошення на курсах та в чатах",
                "keywords": ["zettel", "aushang", "sprachschule", "whatsapp", "kurs", "teilnehmer", "gruppe"]
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
            {"phrase": "Ich schlage vor, dass wir uns einmal pro Woche zum Sprechen treffen.", "tr": "Haftada bir kez konuşmak için buluşmamızı öneriyorum.", "en": "I suggest meeting once a week to speak German.", "category": "Vorschlag"},
            {"phrase": "Die Stadtbibliothek ist ein idealer und ruhiger Ort dafür.", "tr": "Şehir kütüphanesi bunun için ideal ve sessiz bir yerdir.", "en": "The city library is an ideal and quiet venue for this.", "category": "Ort"},
            {"phrase": "Unsere wichtigste Regel lautet: ausnahmslos nur Deutsch sprechen.", "tr": "En önemli kuralımız: istisnasız sadece Almanca konuşmak.", "en": "Our primary rule is: speak exclusively German without exception.", "category": "Regel"},
            {"phrase": "Wir können uns gegenseitig korrigieren und Feedback geben.", "tr": "Birbirimizi düzeltebilir ve geri bildirimde bulunabiliriz.", "en": "We can correct each other and provide feedback.", "category": "Zusammenarbeit"},
            {"phrase": "Einverstanden! Dann hänge ich morgen den Zettel aus.", "tr": "Anlaştık! O halde yarın duyuruyu asıyorum.", "en": "Agreed! Then I will post the notice tomorrow.", "category": "Vereinbarung"}
        ],
        "keyVocab": [
            {"de": "der Stammtisch", "article": "der", "plural": "die Stammtische", "tr": "müdavimler buluşması / kulübü", "en": "regular meetup / study circle"},
            {"de": "der Gruppenarbeitsraum", "article": "der", "plural": "die Gruppenarbeitsräume", "tr": "grup çalışma odası", "en": "group study room"},
            {"de": "die Sprachpraxis", "article": "die", "plural": "-", "tr": "konuşma pratiği", "en": "spoken language practice"},
            {"de": "das Schwarze Brett", "article": "das", "plural": "-", "tr": "duyuru panosu", "en": "bulletin board"},
            {"de": "die Hemmung", "article": "die", "plural": "die Hemmungen", "tr": "çekingenlik, tutukluk", "en": "inhibition"}
        ]
    }
]

FREIES_SPRECHEN = [
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
                "keywords": ["weil", "deshalb", "obwohl", "jedoch", "außerdem", "zudem", "nämlich", "daher", "trotzdem"]
            },
            {
                "key": "vielfalt",
                "label": "Thematischer Wortschatz",
                "labelTr": "Geniş kelime haznesi ve zengin ifadeler",
                "labelEn": "Thematic vocabulary & expressions",
                "labelAr": "المفردات التخصصية والمتنوعة",
                "labelUk": "Тематичний словниковий запас",
                "keywords": ["wichtig", "bedeutung", "gesellschaft", "zukunft", "situation", "möglichkeit", "erfahrung", "entwicklung"]
            },
            {
                "key": "haltung",
                "label": "Eigene Argumente & Beispiele",
                "labelTr": "Kendi argümanlarınız ve somut örnekler",
                "labelEn": "Personal arguments & concrete examples",
                "labelAr": "الحجج الشخصية والأمثلة الواقعية",
                "labelUk": "Власні аргументи та життєві приклади",
                "keywords": ["beispiel", "meinung", "erfahrung", "standpunkt", "glaube", "überzeugt", "finde", "ansicht"]
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
            {"phrase": "Ich möchte spontan über das Thema ... sprechen.", "tr": "Spontane olarak ... konusu hakkında konuşmak istiyorum.", "en": "I'd like to speak spontaneously about the topic of...", "category": "Einleitung"},
            {"phrase": "Meiner Ansicht nach ist dieser Aspekt von zentraler Bedeutung.", "tr": "Bana göre bu boyut merkezi bir öneme sahiptir.", "en": "In my view, this aspect is of central significance.", "category": "Meinung"},
            {"phrase": "Obwohl es Herausforderungen gibt, sehe ich große Chancen.", "tr": "Zorluklar olsa da büyük fırsatlar görüyorum.", "en": "Although challenges exist, I see great opportunities.", "category": "Konnektor"},
            {"phrase": "Deshalb bin ich fest davon überzeugt, dass...", "tr": "Bu nedenle kesinlikle şuna inanıyorum ki...", "en": "Therefore, I am firmly convinced that...", "category": "Fazit"}
        ],
        "keyVocab": [
            {"de": "das lebenslange Lernen", "article": "das", "plural": "-", "tr": "hayat boyu öğrenme", "en": "lifelong learning"},
            {"de": "die Kompetenz", "article": "die", "plural": "die Kompetenzen", "tr": "yetkinlik, beceri", "en": "competence / skill"},
            {"de": "der Wandel", "article": "der", "plural": "-", "tr": "dönüşüm, değişim", "en": "transformation / change"}
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
                "keywords": ["verstanden", "wiederholen", "frage", "meinen", "genau", "interessant"]
            },
            {
                "key": "begruendung",
                "label": "Klare Begründung & Gegenbeispiel",
                "labelTr": "Net gerekçelendirme ve karşı örnek verme",
                "labelEn": "Clear reasoning with counter-examples",
                "labelAr": "تقديم تعليل واضح مع أمثلة داعمة",
                "labelUk": "Чітке обґрунтування та наочні приклади",
                "keywords": ["weil", "nämlich", "beispielsweise", "grund", "erfahrung", "erklären"]
            },
            {
                "key": "abschluss",
                "label": "Runder Abschluss & Bestätigung",
                "labelTr": "Toparlayıcı kapanış ve tatmin edici yanıt",
                "labelEn": "Confident concluding wrap-up",
                "labelAr": "خاتمة واثقة وموجزة تلبي السؤال",
                "labelUk": "Впевнений підсумок відповіді",
                "keywords": ["hoffe", "beantwortet", "fazit", "kurz gesagt", "deshalb", "standpunkt"]
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
            {"phrase": "Das ist eine sehr interessante und berechtigte Frage.", "tr": "Bu çok ilginç ve haklı bir soru.", "en": "That is a very interesting and justified question.", "category": "Reaktion"},
            {"phrase": "Dazu möchte ich folgendes anmerken...", "tr": "Bu hususta şunları belirtmek isterim...", "en": "On this point I would like to note the following...", "category": "Begründung"},
            {"phrase": "Einerseits stimmt das, andererseits muss man bedenken, dass...", "tr": "Bir yandan bu doğru, diğer yandan şunu düşünmek gerekir ki...", "en": "On the one hand that is true, on the other hand one must consider...", "category": "Gegenargument"},
            {"phrase": "Ich hoffe, ich konnte Ihre Frage damit zufriedenstellend beantworten.", "tr": "Umarım bu açıklamamla sorunuzu tatmin edici şekilde yanıtlayabilmişimdir.", "en": "I hope I was able to answer your question satisfactorily.", "category": "Abschluss"}
        ],
        "keyVocab": [
            {"de": "die Nachfrage", "article": "die", "plural": "die Nachfragen", "tr": "ek soru, açıklama talebi", "en": "follow-up question"},
            {"de": "die Rücksichtnahme", "article": "die", "plural": "-", "tr": "saygı gösterme, anlayışlı davranma", "en": "mutual consideration"},
            {"de": "die Stellungnahme", "article": "die", "plural": "die Stellungnahmen", "tr": "görüş bildirme, açıklama", "en": "statement / opinion"},
            {"de": "die Schlagfertigkeit", "article": "die", "plural": "-", "tr": "hazırcevaplık, kıvrak zeka", "en": "quick-wittedness"}
        ]
    }
]

print(f"Teil 3 defined with {len(TEIL_3)} topics.")
print(f"Freies Sprechen defined with {len(FREIES_SPRECHEN)} topics.")
