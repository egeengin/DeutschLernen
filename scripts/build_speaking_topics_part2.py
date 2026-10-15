#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Builder for SPEAKING_EXAM_TOPICS Teil 2 in DeutschLernen
Contains 8 authentic telc B1 presentation topics with:
- 4-language titles & descriptions (DE, TR, EN, AR, UK)
- 5 official telc B1 Leitpunkte: Erfahrung, Heimatland, Vor-, Nachteile, Meinung & Fazit
- Full structured B1 model presentations with transition phrases
- Curated Redemittel bank and key vocabulary
"""

TEIL_2 = [
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
                "keywords": ["erfahrung", "persönlich", "gehabt", "früher", "hatte", "hund", "katze", "tier", "aufgewachsen"]
            },
            {
                "key": "heimatland",
                "label": "Situation im Heimatland (Memleketteki Durum)",
                "labelTr": "Memleketinizde hayvan sahiplenme alışkanlıkları",
                "labelEn": "Situation regarding pets in your home country",
                "labelAr": "وضع الحيوانات الأليفة في الوطن الأم",
                "labelUk": "Ставлення до домашніх тварин на батьківщині",
                "keywords": ["heimatland", "türkei", "land", "viele", "menschen", "häufig", "wohnung", "dorf", "tiere", "straßentiere"]
            },
            {
                "key": "vorteile",
                "label": "Vorteile von Haustieren (Evcil Hayvanın Avantajları)",
                "labelTr": "Dostluk, sevgi, psikolojik faydalar",
                "labelEn": "Companionship, stress reduction, and joy",
                "labelAr": "المزايا النفسية والرفقة الإيجابية",
                "labelUk": "Психологічна користь, вірність та радість",
                "keywords": ["vorteil", "vorteile", "freund", "einsam", "gesundheit", "spazieren", "freude", "treu", "beruhigend"]
            },
            {
                "key": "nachteile",
                "label": "Nachteile & Pflichten (Dezavantajlar ve Sorumluluklar)",
                "labelTr": "Veteriner masrafları, temizlik, tatil kısıtları",
                "labelEn": "Costs, vet care, time, and vacation limits",
                "labelAr": "التكاليف البيطرية، النظافة، وتقييد السفر",
                "labelUk": "Витрати, догляд, ветеринар та обмеження у відпустці",
                "keywords": ["nachteil", "nachteile", "kosten", "zeit", "tierarzt", "schmutz", "urlaub", "pflege", "aufwand", "haare"]
            },
            {
                "key": "meinung",
                "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
                "labelTr": "Son değerlendirme ve öneriniz",
                "labelEn": "Personal opinion, recommendation, and conclusion",
                "labelAr": "الرأي الشخصي والخلاصة الختامية",
                "labelUk": "Власна думка та підсумковий висновок",
                "keywords": ["meinung", "fazit", "schluss", "finde", "wichtig", "verantwortung", "zusammenfassend", "entscheidung"]
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
            {"phrase": "Das Thema meiner heutigen Präsentation lautet...", "tr": "Bugünkü sunumumun başlığı...", "en": "The topic of my presentation today is...", "category": "Einleitung"},
            {"phrase": "Zuerst möchte ich von meinen persönlichen Erfahrungen berichten.", "tr": "İlk olarak şahsi deneyimlerimden bahsetmek isterim.", "en": "First, I would like to report on my personal experiences.", "category": "Erfahrung"},
            {"phrase": "In meinem Heimatland ist die Situation so, dass...", "tr": "Memleketimde durum şöyledir ki...", "en": "In my home country the situation is that...", "category": "Heimatland"},
            {"phrase": "Ein wesentlicher Vorteil ist, dass...", "tr": "En önemli avantaj şudur ki...", "en": "A key advantage is that...", "category": "Vorteile"},
            {"phrase": "Auf der anderen Seite muss man bedenken, dass...", "tr": "Diğer yandan şunu da hesaba katmak gerekir ki...", "en": "On the other hand, one must consider that...", "category": "Nachteile"},
            {"phrase": "Meiner Meinung nach... / Zusammenfassend lässt sich sagen...", "tr": "Bana göre... / Özetle söylenebilir ki...", "en": "In my opinion... / In conclusion, one can state that...", "category": "Fazit"}
        ],
        "keyVocab": [
            {"de": "das Haustier", "article": "das", "plural": "die Haustiere", "tr": "evcil hayvan", "en": "pet"},
            {"de": "der Lebensbegleiter", "article": "der", "plural": "die Lebensbegleiter", "tr": "hayat arkadaşı / yoldaş", "en": "life companion"},
            {"de": "die Verantwortung", "article": "die", "plural": "die Verantwortungen", "tr": "sorumluluk", "en": "responsibility"},
            {"de": "der Tierarzt", "article": "der", "plural": "die Tierärzte", "tr": "veteriner hekim", "en": "veterinarian"},
            {"de": "die Einsamkeit", "article": "die", "plural": "-", "tr": "yalnızlık", "en": "loneliness"}
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
                "keywords": ["erfahrung", "nutze", "täglich", "instagram", "youtube", "smartphone", "handy", "internet", "zeit", "stunden"]
            },
            {
                "key": "heimatland",
                "label": "Situation im Heimatland (Memleketteki Durum)",
                "labelTr": "Memleketinizde gençlerin ve toplumun kullanımı",
                "labelEn": "Popularity among youth and society in your home country",
                "labelAr": "شعبية شبكات التواصل بين الشباب في الوطن الأم",
                "labelUk": "Популярність соціальних мереж на батьківщині",
                "keywords": ["heimatland", "jugendliche", "junge", "beliebt", "überall", "verbreitet", "netzwerk", "familie", "nachrichten"]
            },
            {
                "key": "vorteile",
                "label": "Vorteile der Vernetzung (Sosyal Ağların Avantajları)",
                "labelTr": "Hızlı iletişim, bilgi edinme, öğrenme",
                "labelEn": "Instant communication, news access, and learning",
                "labelAr": "التواصل الفوري والوصول إلى المعرفة والتعلم",
                "labelUk": "Миттєвий зв'язок, доступ до новин та навчання",
                "keywords": ["vorteil", "vorteile", "schnell", "kontakt", "nachrichten", "freunde", "information", "lernen", "austausch"]
            },
            {
                "key": "nachteile",
                "label": "Nachteile & Risiken (Riskler ve Dezavantajlar)",
                "labelTr": "Bağımlılık, zaman kaybı, gizlilik, göz yorgunluğu",
                "labelEn": "Addiction, time wastage, privacy concerns, and stress",
                "labelAr": "الإدمان، إهدار الوقت، انتهاك الخصوصية، والتوتر",
                "labelUk": "Залежність, втрата часу, конфіденційність та стрес",
                "keywords": ["nachteil", "nachteile", "sucht", "zeitverschwendung", "datenschutz", "falsch", "augen", "stress", "schlaf"]
            },
            {
                "key": "meinung",
                "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
                "labelTr": "Dengeli kullanım ve kişisel öneriniz",
                "labelEn": "Balanced usage, digital well-being, and conclusion",
                "labelAr": "الاستخدام المتوازن والخلاصة الختامية",
                "labelUk": "Збалансоване використання та підсумок",
                "keywords": ["meinung", "denke", "glaube", "grenze", "balance", "sinnvoll", "kontrolle", "fazit", "bewusst"]
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
            {"phrase": "Heute möchte ich über die Nutzung sozialer Medien sprechen.", "tr": "Bugün sosyal medya kullanımı hakkında konuşmak istiyorum.", "en": "Today I would like to speak about social media usage.", "category": "Einleitung"},
            {"phrase": "Ich persönlich verbringe täglich etwa ... Stunden am Smartphone.", "tr": "Şahsen akıllı telefonda günde yaklaşık ... saat geçiriyorum.", "en": "I personally spend about ... hours a day on the smartphone.", "category": "Erfahrung"},
            {"phrase": "Ein unbestreitbarer Vorteil ist die schnelle Vernetzung.", "tr": "Tartışılmaz bir avantaj hızlı iletişim ağıdır.", "en": "An indisputable advantage is rapid networking.", "category": "Vorteile"},
            {"phrase": "Ein großes Risiko liegt in der Ablenkung und im Datenschutz.", "tr": "Büyük bir risk dikkat dağılması ve veri gizliliğindedir.", "en": "A major risk lies in distraction and privacy issues.", "category": "Nachteile"},
            {"phrase": "Zusammenfassend ist eine bewusste Nutzung der richtige Weg.", "tr": "Özetle bilinçli kullanım en doğru yoldur.", "en": "In conclusion, mindful usage is the right path.", "category": "Fazit"}
        ],
        "keyVocab": [
            {"de": "das Netzwerk", "article": "das", "plural": "die Netzwerke", "tr": "sosyal ağ, bağlantı", "en": "network"},
            {"de": "die Vernetzung", "article": "die", "plural": "-", "tr": "birbirine bağlanma, iletişim ağı", "en": "interconnectivity"},
            {"de": "der Datenschutz", "article": "der", "plural": "-", "tr": "kişisel verilerin korunması", "en": "data protection"},
            {"de": "die Zeitverschwendung", "article": "die", "plural": "-", "tr": "zaman israfı", "en": "waste of time"},
            {"de": "die Bildschirmzeit", "article": "die", "plural": "die Bildschirmzeiten", "tr": "ekran süresi", "en": "screen time"}
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
                "keywords": ["fahre", "bahn", "zug", "bus", "auto", "fahrrad", "ticket", "pendeln", "arbeit", "täglich"]
            },
            {
                "key": "heimatland",
                "label": "Situation im Heimatland (Memleketteki Durum)",
                "labelTr": "Memleketinizde toplu taşıma ve trafik yoğunluğu",
                "labelEn": "Public transit infrastructure and traffic in home country",
                "labelAr": "البنية التحتية للنقل العام والازدحام في الوطن الأم",
                "labelUk": "Громадський транспорт та затори на батьківщині",
                "keywords": ["heimatland", "verkehr", "stau", "infrastruktur", "metro", "stadt", "überfüllt", "auto", "benzin"]
            },
            {
                "key": "vorteile",
                "label": "Vorteile von Bus & Bahn (Toplu Taşımanın Avantajları)",
                "labelTr": "Çevre dostu, ekonomik, park derdi yok",
                "labelEn": "Eco-friendly, cost savings, no parking hassle",
                "labelAr": "صديق للبيئة، اقتصادي، وتجنب عناء ركن السيارة",
                "labelUk": "Екологічність, економія коштів та відсутність проблем з паркуванням",
                "keywords": ["vorteil", "umwelt", "klima", "co2", "günstig", "deutschlandticket", "entspannt", "parkplatz", "sparen"]
            },
            {
                "key": "nachteile",
                "label": "Nachteile & Verspätungen (Dezavantajlar ve Gecikmeler)",
                "labelTr": "Rötarlar, grevler, kalabalık vagonlar",
                "labelEn": "Delays, strikes, overcrowding, inflexibility",
                "labelAr": "التأخيرات، الإضرابات، والازدحام في أوقات الذروة",
                "labelUk": "Запізнення, страйки, переповнені вагони та залежність від розкладу",
                "keywords": ["nachteil", "verspätung", "ausfall", "streik", "unzuverlässig", "flexibilität", "voll", "warten"]
            },
            {
                "key": "meinung",
                "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
                "labelTr": "Kişisel kanaatiniz ve geleceğin ulaşımı",
                "labelEn": "Personal opinion, recommendation, and conclusion",
                "labelAr": "الرأي الشخصي والتوصية الختامية",
                "labelUk": "Власна думка та підсумок",
                "keywords": ["meinung", "kombination", "zukunft", "besser", "investieren", "zusammenfassend", "fahrrad", "überzeugt"]
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
            {"phrase": "Heute möchte ich das Thema öffentliche Verkehrsmittel vorstellen.", "tr": "Bugün toplu taşıma araçları konusunu sunmak istiyorum.", "en": "Today I would like to present the topic of public transportation.", "category": "Einleitung"},
            {"phrase": "Für den täglichen Arbeitsweg nutze ich meistens...", "tr": "İşe günlük gidiş geliş için çoğunlukla ... kullanıyorum.", "en": "For my daily commute I mostly use...", "category": "Erfahrung"},
            {"phrase": "Ein unschlagbarer Vorteil von Bus und Bahn ist der Umweltschutz.", "tr": "Otobüs ve trenin tartışılmaz bir avantajı çevre korumasıdır.", "en": "An unbeatable advantage of public transit is environmental protection.", "category": "Vorteile"},
            {"phrase": "Nachteilig sind vor allem Verspätungen und Ausfälle.", "tr": "Dezavantaj olarak özellikle gecikmeler ve sefer iptalleri öne çıkar.", "en": "Major drawbacks are delays and cancellations.", "category": "Nachteile"},
            {"phrase": "Meiner Ansicht nach ist eine Kombination die zukunftssicherste Lösung.", "tr": "Benim görüşüme göre kombinasyon en geleceğe dönük çözümdür.", "en": "In my view, a combination is the most future-proof solution.", "category": "Fazit"}
        ],
        "keyVocab": [
            {"de": "der Nahverkehr", "article": "der", "plural": "-", "tr": "şehir içi / yerel toplu taşıma", "en": "local public transit"},
            {"de": "die Verspätung", "article": "die", "plural": "die Verspätungen", "tr": "rötar, gecikme", "en": "delay"},
            {"de": "der Klimaschutz", "article": "der", "plural": "-", "tr": "iklimin korunması", "en": "climate protection"},
            {"de": "der Berufsverkehr", "article": "der", "plural": "-", "tr": "işe gidiş-dönüş trafiği", "en": "rush hour traffic"},
            {"de": "die Flexibilität", "article": "die", "plural": "-", "tr": "esneklik", "en": "flexibility"}
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
                "keywords": ["erfahrung", "koche", "frisch", "gemüse", "obst", "selbst", "küche", "fleisch", "gesund", "essen"]
            },
            {
                "key": "heimatland",
                "label": "Esskultur im Heimatland (Memleketteki Yemek Kültürü)",
                "labelTr": "Memleketinizde taze yemek ve sofra kültürü",
                "labelEn": "Food culture and culinary traditions in home country",
                "labelAr": "ثقافة الطعام وتقاليد الطهي في الوطن الأم",
                "labelUk": "Культура харчування та кулінарні традиції на батьківщині",
                "keywords": ["heimatland", "tradition", "frisch", "markt", "familie", "zusammen", "speisen", "kultur", "gewürze"]
            },
            {
                "key": "vorteile",
                "label": "Vorteile von frischem Essen (Taze Yemeğin Avantajları)",
                "labelTr": "Vitaminler, bağışıklık, zindelik, lezzet",
                "labelEn": "Vitamins, vitality, immune system, taste",
                "labelAr": "الفيتامينات، المناعة، الطاقة، والمذاق الطيب",
                "labelUk": "Вітаміни, міцний імунітет, енергія та чудовий смак",
                "keywords": ["vorteil", "gesundheit", "vitamine", "energie", "abwehrkräfte", "fettarm", "schmeckt", "körper", "wohlbefinden"]
            },
            {
                "key": "nachteile",
                "label": "Nachteile von Fast Food & Zeitmangel (Hazır Gıda & Zaman)",
                "labelTr": "Aşırı yağ, şeker, obezite, katkı maddeleri",
                "labelEn": "Excess sugar, fat, obesity, and additive risks",
                "labelAr": "الدهون والسكريات الزائدة والسمنة والمواد الحافظة",
                "labelUk": "Зайвий цукор, жири, ризик ожиріння та хімічні домішки",
                "keywords": ["nachteil", "fast food", "fett", "zucker", "gewicht", "krank", "teuer", "fertiggerichte", "ungesund"]
            },
            {
                "key": "meinung",
                "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
                "labelTr": "Dengeli beslenme önerisi ve sonuç",
                "labelEn": "Recommendation on nutritional balance and conclusion",
                "labelAr": "نصيحة غذائية متوازنة والخلاصة الختامية",
                "labelUk": "Власна думка та підсумок",
                "keywords": ["meinung", "balance", "kochen", "planen", "wichtig", "gesund", "lebensqualität", "zusammenfassend"]
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
            {"phrase": "Mein heutiges Thema befasst sich mit gesunder Ernährung.", "tr": "Bugünkü konum sağlıklı beslenme üzerine odaklanıyor.", "en": "My topic today focuses on healthy nutrition.", "category": "Einleitung"},
            {"phrase": "Ich versuche, mich möglichst ausgewogen und frisch zu ernähren.", "tr": "Mümkün olduğunca dengeli ve taze beslenmeye çalışıyorum.", "en": "I try to eat as balanced and freshly as possible.", "category": "Erfahrung"},
            {"phrase": "Ein unschätzbarer Vorteil frischer Küche sind die Vitamine.", "tr": "Taze mutfağın paha biçilmez avantajı vitaminlerdir.", "en": "An invaluable advantage of fresh cooking is vitamins.", "category": "Vorteile"},
            {"phrase": "Der Verzehr von Fast Food führt langfristig zu gesundheitlichen Problemen.", "tr": "Uzun vadede hazır yemek tüketimi sağlık sorunlarına yol açar.", "en": "Consuming fast food leads to long-term health issues.", "category": "Nachteile"},
            {"phrase": "Mein Fazit lautet: Selbstkochen ist die beste Investition in die Gesundheit.", "tr": "Sonuç olarak: Evde yemek pişirmek sağlığa yapılan en iyi yatırımdır.", "en": "My conclusion is: cooking for oneself is the best investment in health.", "category": "Fazit"}
        ],
        "keyVocab": [
            {"de": "die Ernährung", "article": "die", "plural": "-", "tr": "beslenme", "en": "nutrition"},
            {"de": "das Fertiggericht", "article": "das", "plural": "die Fertiggerichte", "tr": "hazır yemek", "en": "convenience food"},
            {"de": "die Abwehrkräfte", "article": "die", "plural": "die Abwehrkräfte", "tr": "bağışıklık sistemi", "en": "immune defenses"},
            {"de": "das Übergewicht", "article": "das", "plural": "-", "tr": "aşırı kilo, obezite", "en": "overweight / obesity"},
            {"de": "die Ausgewogenheit", "article": "die", "plural": "-", "tr": "denge, ölçülülük", "en": "balance"}
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
                "keywords": ["erfahrung", "bestelle", "online", "laden", "geschäft", "kleidung", "elektronik", "paket", "kauf"]
            },
            {
                "key": "heimatland",
                "label": "Situation im Heimatland (Memleketteki Durum)",
                "labelTr": "Memleketinizde e-ticaret ve çarşı kültürü",
                "labelEn": "E-commerce versus local bazaar culture in home country",
                "labelAr": "التجارة الإلكترونية مقابل ثقافة الأسواق في الوطن الأم",
                "labelUk": "Розвиток інтернет-торгівлі та ринків на батьківщині",
                "keywords": ["heimatland", "basar", "markt", "online", "beliebt", "geschäfte", "stadtzentrum", "bezahlen"]
            },
            {
                "key": "vorteile",
                "label": "Vorteile des Online-Shoppings (Online Alışverişin Avantajları)",
                "labelTr": "Zaman tasarrufu, geniş ürün çeşitliliği, fiyat kıyaslama",
                "labelEn": "Convenience, vast selection, price comparisons",
                "labelAr": "توفير الوقت، كثرة الخيارات، ومقارنة الأسعار بسهولة",
                "labelUk": "Зручність, величезний вибір та порівняння цін",
                "keywords": ["vorteil", "bequem", "auswahl", "preise", "vergleichen", "lieferung", "haustür", "rund um die uhr"]
            },
            {
                "key": "nachteile",
                "label": "Nachteile & Risiken (Dezavantajlar ve Mağazaların Önemi)",
                "labelTr": "İadeler, kargo kirliliği, dokunamama, yerel esnafın zorlanması",
                "labelEn": "Returns, packaging waste, lack of tactile touch, empty high streets",
                "labelAr": "الإرجاع، نفايات التغليف، عدم معاينة الجودة، وإغلاق المتاجر المحلية",
                "labelUk": "Повернення, сміття від пакування, неможливість примірки та занепад міських крамниць",
                "keywords": ["nachteil", "rücksendung", "retoure", "anprobieren", "beratung", "innenstadt", "müll", "pakete"]
            },
            {
                "key": "meinung",
                "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
                "labelTr": "Dengeli alışveriş yaklaşımı ve sonuç",
                "labelEn": "Balanced consumer approach and conclusion",
                "labelAr": "الرأي الشخصي والجمع بين الطريقتين",
                "labelUk": "Власна думка та висновок",
                "keywords": ["meinung", "kombination", "bücher", "elektronik", "lokal", "unterstützen", "fazit", "zusammenfassend"]
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
            {"phrase": "In meiner Präsentation vergleiche ich das Online-Shopping mit dem Einzelhandel.", "tr": "Sunumumda online alışveriş ile perakende mağazaları kıyaslıyorum.", "en": "In my presentation I compare online shopping with retail stores.", "category": "Einleitung"},
            {"phrase": "Für bestimmte Artikel wie Bücher bevorzuge ich das Internet.", "tr": "Kitap gibi belirli ürünler için interneti tercih ediyorum.", "en": "For certain items like books I prefer the internet.", "category": "Erfahrung"},
            {"phrase": "Ein riesiger Vorteil ist die zeitliche Unabhängigkeit.", "tr": "Çok büyük bir avantaj zamandan bağımsız olmaktır.", "en": "A huge advantage is complete time independence.", "category": "Vorteile"},
            {"phrase": "Ein gravierender Nachteil betrifft die Müllberge durch Verpackungen.", "tr": "Ciddi bir dezavantaj ambalajlardan kaynaklanan çöp dağlarıdır.", "en": "A severe drawback concerns packaging waste mountains.", "category": "Nachteile"},
            {"phrase": "Mein Rat lautet, den lokalen Handel nicht zu vergessen.", "tr": "Tavsiyem yerel ticareti ve esnafı unutmamaktır.", "en": "My advice is not to neglect local retail.", "category": "Fazit"}
        ],
        "keyVocab": [
            {"de": "der Online-Handel", "article": "der", "plural": "-", "tr": "çevrim içi ticaret, e-ticaret", "en": "e-commerce"},
            {"de": "die Rücksendung", "article": "die", "plural": "die Rücksendungen", "tr": "iade, geri gönderme (Retoure)", "en": "product return"},
            {"de": "die Beratung", "article": "die", "plural": "die Beratungen", "tr": "danışmanlık, müşteri hizmeti", "en": "customer advice"},
            {"de": "die Innenstadt", "article": "die", "plural": "die Innenstädte", "tr": "şehir merkezi", "en": "city center / downtown"},
            {"de": "der Verpackungsmüll", "article": "der", "plural": "-", "tr": "ambalaj atığı", "en": "packaging waste"}
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
                "keywords": ["erfahrung", "reise", "urlaub", "meer", "berge", "strand", "hotel", "sommer", "ausland", "heimat"]
            },
            {
                "key": "heimatland",
                "label": "Situation im Heimatland (Memleketteki Durum)",
                "labelTr": "Memleketinizde tatil alışkanlıkları ve turizm",
                "labelEn": "Vacation traditions and tourism in home country",
                "labelAr": "عادات قضاء العطلات والسياحة في الوطن الأم",
                "labelUk": "Традиції відпочинку та туризм на батьківщині",
                "keywords": ["heimatland", "verwandte", "besuchen", "dorf", "küste", "sommerurlaub", "familie", "beliebt"]
            },
            {
                "key": "vorteile",
                "label": "Vorteile von Reisen (Seyahatin ve Memleketin Avantajları)",
                "labelTr": "Yeni kültürler, dinlenme, akraba ziyareti, dil pratiği",
                "labelEn": "Cultural horizon, family visits, relaxation, language practice",
                "labelAr": "التعرف على ثقافات جديدة، زيارة الأقارب، والاسترخاء",
                "labelUk": "Пізнання нових культур, зустріч із родичами та мовна практика",
                "keywords": ["vorteil", "kultur", "erholung", "sprache", "erweitern", "horizont", "abschalten", "tradition"]
            },
            {
                "key": "nachteile",
                "label": "Nachteile & Hürden (Maliyet, İklim, Uçuş Stresi)",
                "labelTr": "Yüksek bilet fiyatları, vize, uçuş stresi, çevre etkisi",
                "labelEn": "High flight costs, visas, flight stress, climate impact",
                "labelAr": "التكاليف الباهظة، التأشيرات، إرهاق السفر، والأثر البيئي",
                "labelUk": "Високі ціни, візи, стрес від перельотів та вплив на екологію",
                "keywords": ["nachteil", "kosten", "flug", "teuer", "visum", "stress", "klima", "co2", "anstrengend"]
            },
            {
                "key": "meinung",
                "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
                "labelTr": "Son değerlendirme ve tavsiyeniz",
                "labelEn": "Personal opinion, travel advice, and conclusion",
                "labelAr": "الرأي الشخصي والخلاصة الختامية",
                "labelUk": "Власна думка та підсумок",
                "keywords": ["meinung", "abstand", "mix", "entdecken", "heimat", "ausland", "fazit", "wichtig"]
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
            {"phrase": "Mein heutiges Thema lautet Urlaub im In- oder Ausland.", "tr": "Bugünkü konum yurt içi veya yurt dışı tatili.", "en": "My topic today is vacationing at home or abroad.", "category": "Einleitung"},
            {"phrase": "Wenn ich Urlaub habe, reise ich am liebsten...", "tr": "Tatildeyken en çok ... seyahat etmeyi severim.", "en": "When I have vacation I prefer to travel to...", "category": "Erfahrung"},
            {"phrase": "Ein unschätzbarer Vorteil von Auslandsreisen ist die Horizonterweiterung.", "tr": "Yurt dışı seyahatinin paha biçilmez faydası ufuk açmasıdır.", "en": "An invaluable benefit of travel is broadening one's horizons.", "category": "Vorteile"},
            {"phrase": "Häufige Hürden sind hohe Kosten und Flugstress.", "tr": "Sık karşılaşılan engeller yüksek maliyet ve uçuş stresidir.", "en": "Frequent hurdles are high expenses and travel stress.", "category": "Nachteile"},
            {"phrase": "Zusammenfassend halte ich eine Kombination für ideal.", "tr": "Özetle bir kombinasyonun ideal olduğunu düşünüyorum.", "en": "In conclusion, I consider a combination ideal.", "category": "Fazit"}
        ],
        "keyVocab": [
            {"de": "die Horizonterweiterung", "article": "die", "plural": "-", "tr": "ufuk açma, dünya görüşünü genişletme", "en": "broadening of horizons"},
            {"de": "die Erholung", "article": "die", "plural": "-", "tr": "dinlenme, istirahat", "en": "recovery / relaxation"},
            {"de": "die Sprachbarriere", "article": "die", "plural": "die Sprachbarrieren", "tr": "dil engeli", "en": "language barrier"},
            {"de": "das Reiseziel", "article": "das", "plural": "die Reiseziele", "tr": "seyahat rotası, varış noktası", "en": "travel destination"},
            {"de": "das Heimweh", "article": "das", "plural": "-", "tr": "sıla hasreti, memleket özlemi", "en": "homesickness"}
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
                "keywords": ["erfahrung", "sport", "joggen", "fitnessstudio", "schwimmen", "fahrrad", "spazieren", "woche", "training"]
            },
            {
                "key": "heimatland",
                "label": "Situation im Heimatland (Memleketteki Durum)",
                "labelTr": "Memleketinizde spor yapma alışkanlıkları ve kulüpler",
                "labelEn": "Sports culture and community clubs in home country",
                "labelAr": "ثقافة الرياضة والنوادي الشعبية في الوطن الأم",
                "labelUk": "Культура спорту та секцій на батьківщині",
                "keywords": ["heimatland", "fußball", "verein", "beliebt", "jugendliche", "männer", "frauen", "bewegung", "parks"]
            },
            {
                "key": "vorteile",
                "label": "Vorteile von Bewegung (Sporun ve Hareketin Faydaları)",
                "labelTr": "Stres azaltma, kalp sağlığı, enerji, kilo kontrolü",
                "labelEn": "Stress reduction, cardiovascular health, mental energy",
                "labelAr": "تخفيف التوتر، صحة القلب، وتجديد النشاط والتركيز",
                "labelUk": "Зниження стресу, здоров'я серця, енергія та контроль ваги",
                "keywords": ["vorteil", "gesundheit", "herz", "stressabbau", "ausdauer", "energie", "gewicht", "rücken", "laune"]
            },
            {
                "key": "nachteile",
                "label": "Hürden & Verletzungsrisiko (Zaman Yokluğu, Maliyet, Sakatlık)",
                "labelTr": "Vakitsizlik, üyelik ücretleri, yaralanma riski",
                "labelEn": "Lack of time, gym fees, injury risks, fatigue",
                "labelAr": "ضيق الوقت، رسوم النوادي، ومخاطر الإصابات العضلية",
                "labelUk": "Брак часу, вартість абонементів та ризик травм",
                "keywords": ["nachteil", "zeitmangel", "teuer", "beitrag", "faul", "müde", "verletzung", "muskelkater", "hürde"]
            },
            {
                "key": "meinung",
                "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
                "labelTr": "Pratik öneriniz ve sonuç",
                "labelEn": "Personal recommendation and conclusion",
                "labelAr": "الرأي الشخصي والخلاصة الختامية",
                "labelUk": "Власна думка та підсумок",
                "keywords": ["meinung", "alltag", "treppe", "spaziergang", "disziplin", "wichtig", "fazit", "überzeugt"]
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
            {"phrase": "Heute präsentiere ich Ihnen das Thema Sport und Gesundheit.", "tr": "Bugün sizlere spor ve sağlık konusunu sunuyorum.", "en": "Today I present the topic of sports and health.", "category": "Einleitung"},
            {"phrase": "Um mich fit zu halten, mache ich regelmäßig...", "tr": "Zinde kalmak için düzenli olarak ... yapıyorum.", "en": "To stay fit I regularly do...", "category": "Erfahrung"},
            {"phrase": "Regelmäßige Bewegung stärkt die Abwehrkräfte und baut Stress ab.", "tr": "Düzenli hareket bağışıklığı güçlendirir ve stresi azaltır.", "en": "Regular exercise strengthens the immune system and lowers stress.", "category": "Vorteile"},
            {"phrase": "Viele Menschen klagen über Zeitmangel nach der Arbeit.", "tr": "Birçok insan işten sonra zaman yetersizliğinden yakınır.", "en": "Many people complain about lack of time after work.", "category": "Nachteile"},
            {"phrase": "Abschließend bin ich überzeugt, dass jede Bewegung zählt.", "tr": "Son olarak, her hareketin önemli olduğuna inanıyorum.", "en": "In conclusion, I am convinced that every bit of movement counts.", "category": "Fazit"}
        ],
        "keyVocab": [
            {"de": "die Bewegung", "article": "die", "plural": "die Bewegungen", "tr": "hareket, egzersiz", "en": "movement / physical activity"},
            {"de": "der Stressabbau", "article": "der", "plural": "-", "tr": "stresin atılması, rahatlama", "en": "stress reduction"},
            {"de": "das Herz-Kreislauf-System", "article": "das", "plural": "-", "tr": "kalp-dolaşım sistemi", "en": "cardiovascular system"},
            {"de": "der Zeitmangel", "article": "der", "plural": "-", "tr": "zaman yetersizliği, vakitsizlik", "en": "lack of time"},
            {"de": "die Ausdauer", "article": "die", "plural": "-", "tr": "dayanıklılık, kondisyon", "en": "endurance / stamina"}
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
                "keywords": ["erfahrung", "deutsch", "kurs", "grammatik", "vokabeln", "sprechen", "schwer", "monate", "lernen", "üben"]
            },
            {
                "key": "heimatland",
                "label": "Fremdsprachen im Heimatland (Memleketteki Durum)",
                "labelTr": "Memleketinizde yabancı dil eğitimi ve önemi",
                "labelEn": "Foreign language education in home country",
                "labelAr": "تعليم اللغات الأجنبية في المدارس بالوطن الأم",
                "labelUk": "Вивчення іноземних мов на батьківщині",
                "keywords": ["heimatland", "schule", "englisch", "unterricht", "wichtig", "fremdsprache", "grammatik", "lehrer"]
            },
            {
                "key": "vorteile",
                "label": "Vorteile neuer Sprachen (Yeni Dilin Avantajları)",
                "labelTr": "İş imkanları, entegrasyon, özgüven, beyin jimnastiği",
                "labelEn": "Career opportunities, social integration, mental agility",
                "labelAr": "فرص العمل، الاندماج الاجتماعي، وتنشيط الذاكرة",
                "labelUk": "Кар'єрні можливості, соціальна інтеграція та розвиток пам'яті",
                "keywords": ["vorteil", "arbeit", "beruf", "integration", "kontakt", "selbstvertrauen", "gehirn", "chancen", "verstehen"]
            },
            {
                "key": "nachteile",
                "label": "Hürden für Erwachsene (Yetişkinlerin Yaşadığı Zorluklar)",
                "labelTr": "Hata yapma korkusu, artikeller, zaman kısıtı",
                "labelEn": "Fear of mistakes, complex articles, time pressure with work/family",
                "labelAr": "الخوف من ارتكاب الأخطاء، تعقيد أدوات التعريف، وضيق الوقت",
                "labelUk": "Страх помилок, складні артиклі та поєднання навчання з роботою/сім'єю",
                "keywords": ["nachteil", "angst", "fehler", "artikel", "der die das", "zeit", "schwer", "kopf", "geduld"]
            },
            {
                "key": "meinung",
                "label": "Eigene Meinung & Fazit (Kendi Görüşünüz ve Sonuç)",
                "labelTr": "Öğrenme ipucunuz ve başarı anahtarı",
                "labelEn": "Learning tips and overall conclusion",
                "labelAr": "نصائح للتعلم والخلاصة الختامية",
                "labelUk": "Поради щодо вивчення та підсумок",
                "keywords": ["meinung", "sprechen", "alltag", "mut", "regelmäßig", "tipp", "fazit", "erfolg"]
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
            {"phrase": "In meinem heutigen Vortrag spreche ich über das Fremdsprachenlernen.", "tr": "Bugünkü sunumumda yabancı dil öğrenimi hakkında konuşuyorum.", "en": "In my presentation today I talk about language learning.", "category": "Einleitung"},
            {"phrase": "Seit mehr als einem Jahr lerne ich intensiv Deutsch.", "tr": "Bir yılı aşkın süredir yoğun bir şekilde Almanca öğreniyorum.", "en": "For more than a year I have been learning German intensively.", "category": "Erfahrung"},
            {"phrase": "Die Beherrschung der Landessprache ist die Basis für beruflichen Erfolg.", "tr": "Ülke diline hakimiyet mesleki başarının temelidir.", "en": "Command of the national language is the foundation for career success.", "category": "Vorteile"},
            {"phrase": "Erwachsene haben oft Angst davor, grammatikalische Fehler zu machen.", "tr": "Yetişkinler genellikle dilbilgisi hatası yapmaktan korkarlar.", "en": "Adults often fear making grammatical mistakes.", "category": "Nachteile"},
            {"phrase": "Zusammenfassend braucht man vor allem Mut und regelmäßige Übung.", "tr": "Özetle en çok cesaret ve düzenli pratiğe ihtiyaç vardır.", "en": "In conclusion, one needs courage and regular practice above all.", "category": "Fazit"}
        ],
        "keyVocab": [
            {"de": "die Sprachpraxis", "article": "die", "plural": "-", "tr": "konuşma/dil pratiği", "en": "language practice"},
            {"de": "die Hemmung", "article": "die", "plural": "die Hemmungen", "tr": "çekingenlik, tutukluk", "en": "inhibition / hesitation"},
            {"de": "die Teilhabe", "article": "die", "plural": "-", "tr": "toplumsal katılım", "en": "participation / involvement"},
            {"de": "der Meilenstein", "article": "der", "plural": "die Meilensteine", "tr": "dönüm noktası", "en": "milestone"},
            {"de": "die Selbstsicherheit", "article": "die", "plural": "-", "tr": "özgüven, kendine güven", "en": "self-confidence"}
        ]
    }
]

print(f"Teil 2 defined with {len(TEIL_2)} topics.")
