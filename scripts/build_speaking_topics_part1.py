#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Builder for SPEAKING_EXAM_TOPICS in DeutschLernen
Contains 19 comprehensive telc Deutsch B1 speaking topics with:
- 4-language titles & descriptions (DE, TR, EN, AR, UK)
- Detailed Leitpunkte with keyword stems for accurate audio evaluation
- Complete exemplary B1 Model Answers (Musterantworten / Modelldialoge)
- Model dialogues for Teil 3 partner simulations
- Crucial Redemittel bank with 1-click insertion data
- Topic-specific key B1 vocabulary
"""

import json
import os

# --- TEIL 1 TOPICS ---
TEIL_1 = [
    {
        "id": "t1_default",
        "title": "Teil 1: Kontaktaufnahme (Sich vorstellen)",
        "titleTr": "Bölüm 1: Tanışma (Kendini Tanıtma)",
        "titleEn": "Part 1: Getting to Know Each Other (Self-Introduction)",
        "titleAr": "الجزء 1: التعارف (تقديم النفس)",
        "titleUk": "Частина 1: Знайомство (Розповідь про себе)",
        "durationMin": 3,
        "description": "Stellen Sie sich Ihrem Gesprächspartner und den Prüfern vor. Gehen Sie auf die folgenden Leitpunkte ein.",
        "descriptionTr": "Kendinizi sınav jürisine ve partnerinize tanıtın. Aşağıdaki yönergelere değinin.",
        "descriptionEn": "Introduce yourself to your speaking partner and examiners covering all listed guiding points.",
        "descriptionAr": "قدم نفسك لشريكك في المحادثة والممتحنين وتحدث حول جميع النقاط التوجيهية.",
        "descriptionUk": "Представтеся своєму партнеру та екзаменаторам, розкриваючи всі зазначені пункти.",
        "leitpunkte": [
            {
                "key": "name",
                "label": "Name & Herkunft (Ad ve Memleket)",
                "labelTr": "Adınız, yaşınız ve memleketiniz",
                "labelEn": "Name, age, and country of origin",
                "labelAr": "الاسم والسن والبلد الأصلي",
                "labelUk": "Ім'я, вік та країна походження",
                "keywords": ["name", "heiße", "komme", "herkunft", "geboren", "stadt", "land", "jahre", "alt"]
            },
            {
                "key": "wohnen",
                "label": "Wohnort & Wohnsituation (İkamet ve Yaşam)",
                "labelTr": "Yaşadığınız şehir ve konut durumu",
                "labelEn": "Place of residence and living situation",
                "labelAr": "مكان الإقامة ونوع السكن",
                "labelUk": "Місце проживання та житлові умови",
                "keywords": ["wohne", "wohnung", "leben", "lebe", "deutschland", "bezirk", "zimmer", "haus", "stadtteil", "miete"]
            },
            {
                "key": "familie",
                "label": "Familie & Kinder (Aile ve Çocuklar)",
                "labelTr": "Aile durumu ve çocuklar",
                "labelEn": "Family situation and children",
                "labelAr": "الوضع العائلي والأطفال",
                "labelUk": "Сімейний стан та діти",
                "keywords": ["familie", "verheiratet", "ledig", "kinder", "sohn", "tochter", "eltern", "geschwister", "allein", "zusammen"]
            },
            {
                "key": "beruf",
                "label": "Beruf & Ausbildung (Meslek ve Eğitim)",
                "labelTr": "Meslek, çalışma ve eğitim geçmişi",
                "labelEn": "Profession, job, and education",
                "labelAr": "المهنة والتعليم والخبرة العملية",
                "labelUk": "Професія, робота та освіта",
                "keywords": ["beruf", "arbeite", "beruflich", "gelernt", "studium", "universität", "schule", "arzt", "ingenieur", "bereich", "branche", "tätig"]
            },
            {
                "key": "sprachen",
                "label": "Sprachen lernen (Diller ve Almanca)",
                "labelTr": "Bildiğiniz diller ve Almanca öğrenme süreci",
                "labelEn": "Languages spoken and German learning journey",
                "labelAr": "اللغات التي تتحدثها ورحلة تعلم الألمانية",
                "labelUk": "Мови, якими володієте, та вивчення німецької",
                "keywords": ["sprache", "sprachen", "deutsch", "englisch", "muttersprache", "lerne", "gelernt", "niveau", "kurs", "spreche"]
            },
            {
                "key": "hobbys",
                "label": "Hobbys & Freizeit (Hobiler ve Boş Zaman)",
                "labelTr": "Hobileriniz ve boş zaman aktiviteleriniz",
                "labelEn": "Hobbies and free-time activities",
                "labelAr": "الهوايات وأوقات الفراغ",
                "labelUk": "Хобі та вільний час",
                "keywords": ["hobby", "hobbys", "freizeit", "sport", "musik", "lesen", "kochen", "wochenende", "gerne", "reise", "spazieren", "treffe"]
            }
        ],
        "modelAnswer": {
            "de": "Guten Tag! Mein Name ist Deniz Kaya. Ich bin 32 Jahre alt und komme ursprünglich aus Izmir in der Türkei. Seit zwei Jahren lebe ich mit meiner Familie hier in Köln. Wir haben eine gemütliche Dreizimmerwohnung im Stadtteil Ehrenfeld gemietet. Ich bin verheiratet und wir haben eine fünfjährige Tochter, die bereits in den Kindergarten geht. Von Beruf bin ich Informatiker. In meiner Heimat habe ich Softwareentwicklung studiert und arbeite derzeit bei einem mittelständischen IT-Unternehmen in Köln. Meine Muttersprache ist Türkisch, außerdem spreche ich fließend Englisch und lerne seit anderthalb Jahren intensiv Deutsch, um das telc B1-Zertifikat zu erwerben. In meiner Freizeit mache ich sehr gerne Sport, koche am Wochenende für meine Familie und gehe gerne am Rhein spazieren.",
            "tr": "İyi günler! Adım Deniz Kaya. 32 yaşındayım ve aslen Türkiye'nin İzmir şehrinden geliyorum. İki yıldır ailemle birlikte Köln'de yaşıyorum. Ehrenfeld semtinde üç odalı rahat bir ev kiraladık. Evliyim ve kreşe giden beş yaşında bir kızımız var. Mesleğim bilgisayar mühendisliği. Memleketimde yazılım geliştirme okudum ve şu anda Köln'de orta ölçekli bir bilişim şirketinde çalışıyorum. Ana dilim Türkçe, ayrıca akıcı İngilizce konuşuyorum ve telc B1 sertifikasını almak için bir buçuk yıldır yoğun şekilde Almanca öğreniyorum. Boş zamanlarımda spor yapmaktan, hafta sonları aileme yemek pişirmekten ve Ren nehri kıyısında yürüyüş yapmaktan büyük keyif alıyorum.",
            "en": "Good day! My name is Deniz Kaya. I am 32 years old and originally from Izmir, Turkey. For two years, I have been living here in Cologne with my family. We rent a cozy three-room apartment in the Ehrenfeld district. I am married and we have a five-year-old daughter who already attends kindergarten. By profession, I am a computer scientist. In my home country, I studied software engineering, and I currently work at a medium-sized IT firm in Cologne. My mother tongue is Turkish; in addition, I speak fluent English and have been learning German intensively for a year and a half to earn the telc B1 certificate. In my free time, I really enjoy playing sports, cooking for my family on weekends, and walking along the Rhine.",
            "ar": "طاب يومكم! اسمي دينيز كايا. أبلغ من العمر 32 عامًا وأصولي من مدينة إزمير في تركيا. أعيش مع عائلتي منذ عامين هنا في كولونيا. لقد استأجرنا شقة مريحة من ثلاث غرف في حي إيرنفيلد. أنا متزوج ولدينا ابنة في الخامسة من عمرها تذهب بالفعل إلى روضة الأطفال. مهنتي مهندس برمجيات. في بلدي درست هندسة البرمجيات وأعمل حاليًا في شركة تكنولوجيا متوسطة الحجم في كولونيا. لغتي الأم هي التركية، وأتحدث الإنجليزية بطلاقة، وأتعلم الألمانية بشكل مكثف منذ عام ونصف للحصول على شهادة telc B1. في أوقات فراغي، أحب ممارسة الرياضة، والطهي لعائلتي في عطلات نهاية الأسبوع، والتنزه على ضفاف نهر الراين.",
            "uk": "Доброго дня! Мене звати Деніз Кая. Мені 32 роки, я родом з Ізміра в Туреччині. Вже два роки я живу зі своєю сім'єю тут, у Кельні. Ми орендуємо затишну трикімнатну квартиру в районі Еренфельд. Я одружений, у нас є п'ятирічна донька, яка вже ходить до дитячого садка. За фахом я інженер-програміст. На батьківщині я вивчав розробку програмного забезпечення, а зараз працюю в середній ІТ-компанії в Кельні. Моя рідна мова — турецька, крім того, я вільно володію англійською та вже півтора року інтенсивно вивчаю німецьку, щоб отримати сертифікат telc B1. У вільний час я дуже люблю займатися спортом, готувати для сім'ї на вихідних та гуляти вздовж Рейну."
        },
        "redemittel": [
            {"phrase": "Mein Name ist... / Ich heiße...", "tr": "Adım... / Ben...", "en": "My name is... / I am called...", "category": "Vorstellung"},
            {"phrase": "Ich komme ursprünglich aus...", "tr": "Aslen ...'den geliyorum.", "en": "I am originally from...", "category": "Herkunft"},
            {"phrase": "Seit ... Jahren lebe und wohne ich in...", "tr": "... yıldır ...'da yaşıyorum.", "en": "For ... years I have lived in...", "category": "Wohnort"},
            {"phrase": "Von Beruf bin ich... / Ich arbeite als...", "tr": "Mesleğim... / ... olarak çalışıyorum.", "en": "By profession I am... / I work as...", "category": "Beruf"},
            {"phrase": "Meine Muttersprache ist..., außerdem spreche ich...", "tr": "Ana dilim..., ayrıca ... konuşuyorum.", "en": "My mother tongue is..., in addition I speak...", "category": "Sprachen"},
            {"phrase": "In meiner Freizeit beschäftige ich mich gern mit...", "tr": "Boş zamanlarımda severek ... ile ilgilenirim.", "en": "In my leisure time I enjoy doing...", "category": "Hobbys"}
        ],
        "keyVocab": [
            {"de": "die Herkunft", "article": "die", "plural": "die Herkünfte", "tr": "köken, memleket", "en": "origin"},
            {"de": "der Wohnort", "article": "der", "plural": "die Wohnorte", "tr": "ikamet yeri", "en": "place of residence"},
            {"de": "die Berufserfahrung", "article": "die", "plural": "die Berufserfahrungen", "tr": "iş tecrübesi", "en": "work experience"},
            {"de": "die Muttersprache", "article": "die", "plural": "die Muttersprachen", "tr": "ana dil", "en": "mother tongue"},
            {"de": "die Ausbildung", "article": "die", "plural": "die Ausbildungen", "tr": "mesleki eğitim", "en": "vocational training"},
            {"de": "die Freizeitbeschäftigung", "article": "die", "plural": "die Freizeitbeschäftigungen", "tr": "boş zaman aktivitesi", "en": "leisure activity"}
        ]
    },
    {
        "id": "t1_beruf",
        "title": "Teil 1: Schwerpunkt Beruf, Werdegang & Zukunftspläne",
        "titleTr": "Bölüm 1: Meslek, Kariyer Geçmişi ve Gelecek Hedefleri",
        "titleEn": "Part 1: Focus on Profession, Career & Future Plans",
        "titleAr": "الجزء 1: التركيز على المهنة والمسار المهني والخطط المستقبلية",
        "titleUk": "Частина 1: Професія, кар'єрний шлях та плани на майбутнє",
        "durationMin": 3,
        "description": "Erzählen Sie vertiefend über Ihren erlernten Beruf, Ihre berufliche Tätigkeit in Deutschland und Ihre Karriereziele.",
        "descriptionTr": "Eğitimini aldığınız meslek, Almanya'daki iş hayatınız ve gelecekteki kariyer hedefleriniz hakkında ayrıntılı bilgi verin.",
        "descriptionEn": "Elaborate in depth on your learned profession, your work experience in Germany, and your career goals.",
        "descriptionAr": "تحدث بعمق عن مهنتك التي تعلمتها، وعملك في ألمانيا، وأهدافك المهنية المستقبلية.",
        "descriptionUk": "Розкажіть детальніше про свою освіту, роботу в Німеччині та кар'єрні плани.",
        "leitpunkte": [
            {
                "key": "ausbildung",
                "label": "Ausbildung / Studium im Heimatland",
                "labelTr": "Memleketteki mesleki eğitim veya üniversite",
                "labelEn": "Vocational training or university in home country",
                "labelAr": "التعليم المهني أو الجامعي في الوطن الأم",
                "labelUk": "Освіта або навчання на батьківщині",
                "keywords": ["studium", "ausbildung", "universität", "diplom", "heimatland", "fach", "abgeschlossen", "theorie"]
            },
            {
                "key": "alltag",
                "label": "Aktuelle Arbeit & Berufsalltag in Deutschland",
                "labelTr": "Şu anki işiniz ve günlük iş temposu",
                "labelEn": "Current job and daily work routine in Germany",
                "labelAr": "العمل الحالي والروتين اليومي في ألمانيا",
                "labelUk": "Поточна робота та щоденні обов'язки в Німеччині",
                "keywords": ["arbeite", "beruf", "kollegen", "aufgaben", "alltag", "firma", "betrieb", "deutschland", "stunden", "vertrag"]
            },
            {
                "key": "anerkennung",
                "label": "Anerkennung & Qualifikationen",
                "labelTr": "Diploma denkliği ve sertifikalar",
                "labelEn": "Degree recognition and certifications",
                "labelAr": "معادلة الشهادات والمؤهلات المهنية",
                "labelUk": "Визнання диплома та підвищення кваліфікації",
                "keywords": ["anerkennung", "urkunde", "amt", "zeugnis", "zertifikat", "prüfung", "qualifikation", "verfahren"]
            },
            {
                "key": "zukunft",
                "label": "Zukunftspläne & Weiterbildung",
                "labelTr": "Gelecek planları ve ileri eğitim hedefleri",
                "labelEn": "Future ambitions and further training",
                "labelAr": "الخطط المستقبلية والتدريب الإضافي",
                "labelUk": "Плани на майбутнє та подальший розвиток",
                "keywords": ["zukunft", "weiterbildung", "weiterentwickeln", "ziel", "vor", "möchte", "hoffe", "selbstständig", "aufstieg"]
            }
        ],
        "modelAnswer": {
            "de": "Ich möchte Ihnen gerne meinen beruflichen Werdegang vorstellen. In meinem Heimatland habe ich fünf Jahre lang Elektrotechnik an der Universität studiert und danach als Ingenieur bei einem Energieunternehmen gearbeitet. Als ich vor zwei Jahren nach Deutschland gezogen bin, war der erste wichtige Schritt die offizielle Anerkennung meines Hochschulabschlusses. Die zuständige Behörde hat meine Zeugnisse geprüft, und ich habe die Gleichwertigkeit bescheinigt bekommen. Aktuell arbeite ich als technischer Berater in Vollzeit bei einem mittelständischen Unternehmen. Mein Arbeitsalltag ist sehr abwechslungsreich: Ich erstelle Schaltpläne, berate Kunden und arbeite eng mit meinen deutschen Kolleginnen und Kollegen zusammen. Für meine berufliche Zukunft plane ich, mich im Bereich erneuerbare Energien weiterzubilden, weil diese Branche in Deutschland enormes Potenzial hat.",
            "tr": "Size kariyer geçmişimden bahsetmek isterim. Memleketimde beş yıl boyunca üniversitede elektrik mühendisliği okudum ve ardından bir enerji şirketinde mühendis olarak çalıştım. İki yıl önce Almanya'ya taşındığımda, ilk önemli adım üniversite diplomamın resmi denkliğini almaktı. Yetkili makam belgelerimi inceledi ve denklik belgesi verdi. Şu anda orta ölçekli bir firmada tam zamanlı teknik danışman olarak çalışıyorum. Günlük işim oldukça çeşitli: Elektrik devre şemaları hazırlıyorum, müşterilere danışmanlık veriyorum ve Alman meslektaşlarımla yakın iş birliği içinde çalışıyorum. Gelecekte ise yenilenebilir enerji alanında uzmanlık eğitimi almayı planlıyorum, çünkü bu sektörün Almanya'da büyük bir geleceği var.",
            "en": "I would like to present my professional background. In my home country, I studied electrical engineering at university for five years and then worked as an engineer at an energy company. When I moved to Germany two years ago, the first essential step was the official recognition of my degree. The responsible authority reviewed my credentials and granted full equivalence. Currently, I work full-time as a technical consultant at a medium-sized company. My daily work routine is very diverse: I design circuit schematics, advise clients, and work closely with my German colleagues. For my career future, I plan to pursue further training in renewable energy, as this sector holds tremendous potential in Germany.",
            "ar": "أود أن أقدم لكم مساري المهني. في بلدي الأم، درست الهندسة الكهربائية في الجامعة لمدة خمس سنوات ثم عملت كمهندس في شركة طاقة. عندما انتقلت إلى ألمانيا قبل عامين، كانت الخطوة الأولى الهامة هي الاعتراف الرسمي بمؤهلي الجامعي. قامت الجهة المختصة بمراجعة شهاداتي واعتماد المعادلة. أعمل حاليًا بدوام كامل كمستشار تقني في شركة متوسطة الحجم. روتيني اليومي في العمل متنوع للغاية: أقوم بإعداد المخططات الكهربائية، وتقديم المشورة للعملاء، والتعاون الوثيق مع زملائي الألمان. وفي المستقبل، أخطط لمواصلة التدريب في مجال الطاقة المتجددة لأن هذا القطاع يتمتع بإمكانيات هائلة في ألمانيا.",
            "uk": "Я хотів би розповісти про свій професійний шлях. На батьківщині я п'ять років вивчав електротехніку в університеті, а потім працював інженером в енергетичній компанії. Коли я два роки тому переїхав до Німеччини, першим важливим кроком було офіційне визнання мого диплома. Відповідне відомство перевірило мої документи та підтвердило еквівалентність кваліфікації. Зараз я працюю на повну ставку технічним консультантом у середній компанії. Мій робочий день дуже різноманітний: я складаю схеми, консультую клієнтів і тісно співпрацюю з німецькими колегами. У майбутньому я планую підвищити кваліфікацію у сфері відновлюваної енергетики, оскільки ця галузь у Німеччині має колосальний потенціал."
        },
        "redemittel": [
            {"phrase": "In meinem Heimatland habe ich ... studiert / gelernt.", "tr": "Memleketimde ... okudum / öğrendim.", "en": "In my home country I studied / trained in...", "category": "Ausbildung"},
            {"phrase": "Ein wichtiger Schritt war die Anerkennung meiner Zeugnisse.", "tr": "Önemli bir adım diplomalarımın denkliğiydi.", "en": "An important step was the recognition of my diplomas.", "category": "Anerkennung"},
            {"phrase": "Derzeit bin ich als ... in Vollzeit / Teilzeit tätig.", "tr": "Şu anda tam / yarı zamanlı olarak ... pozisyonunda çalışıyorum.", "en": "Currently I am employed full-time / part-time as...", "category": "Beruf"},
            {"phrase": "Zu meinen Hauptaufgaben gehört...", "tr": "Başlıca görevlerim arasında ... yer alır.", "en": "My core responsibilities include...", "category": "Aufgaben"},
            {"phrase": "In der Zukunft habe ich vor, mich im Bereich ... weiterzubilden.", "tr": "Gelecekte ... alanında ileri eğitim almayı planlıyorum.", "en": "In the future I intend to specialize further in...", "category": "Zukunft"}
        ],
        "keyVocab": [
            {"de": "die Anerkennung", "article": "die", "plural": "die Anerkennungen", "tr": "denklik, tanınma", "en": "recognition"},
            {"de": "die Weiterbildung", "article": "die", "plural": "die Weiterbildungen", "tr": "ileri mesleki eğitim", "en": "further education"},
            {"de": "das Zeugnis", "article": "das", "plural": "die Zeugnisse", "tr": "diploma, karne, referans belgesi", "en": "certificate / transcript"},
            {"de": "der Arbeitsvertrag", "article": "der", "plural": "die Arbeitsverträge", "tr": "iş sözleşmesi", "en": "employment contract"},
            {"de": "die Gleichwertigkeit", "article": "die", "plural": "-", "tr": "eşdeğerlik, denklik", "en": "equivalence"}
        ]
    },
    {
        "id": "t1_wohnen",
        "title": "Teil 1: Schwerpunkt Wohnen & Alltag in Deutschland",
        "titleTr": "Bölüm 1: Almanya'da Konut, Yaşam ve Mahalle İlişkileri",
        "titleEn": "Part 1: Focus on Living & Everyday Life in Germany",
        "titleAr": "الجزء 1: التركيز على السكن والحياة اليومية في ألمانيا",
        "titleUk": "Частина 1: Житло та повсякденне життя в Німеччині",
        "durationMin": 3,
        "description": "Berichten Sie über Ihre Erfahrungen bei der Wohnungssuche, Ihre Wohnsituation und Ihr Verhältnis zu den Nachbarn.",
        "descriptionTr": "Ev arama tecrübeniz, mevcut ev durumunuz ve komşularınızla olan ilişkileriniz hakkında bilgi verin.",
        "descriptionEn": "Describe your experiences searching for housing, your current accommodation, and your neighborhood relationships.",
        "descriptionAr": "تحدث عن تجاربك في البحث عن سكن، ووضعك السكني الحالي، وعلاقتك بالجيران.",
        "descriptionUk": "Розкажіть про свій досвід пошуку житла, поточні умови проживання та стосунки із сусідами.",
        "leitpunkte": [
            {
                "key": "suche",
                "label": "Wohnungssuche in Deutschland",
                "labelTr": "Almanya'da ev arama süreci",
                "labelEn": "Flat hunting process in Germany",
                "labelAr": "تجربة البحث عن شقة في ألمانيا",
                "labelUk": "Пошук житла в Німеччині",
                "keywords": ["suche", "wohnungssuche", "inserat", "portal", "besichtigung", "schwer", "makler", "kaution", "schufa"]
            },
            {
                "key": "wohnung",
                "label": "Aktuelle Wohnung & Lage",
                "labelTr": "Mevcut daire ve konumu",
                "labelEn": "Current apartment and neighborhood location",
                "labelAr": "الشقة الحالية والموقع الجغرافي",
                "labelUk": "Поточна квартира та розташування",
                "keywords": ["wohnung", "zimmer", "balkon", "garten", "miete", "warmmiete", "ruhig", "verkehrsgünstig", "stadtteil"]
            },
            {
                "key": "nachbarn",
                "label": "Nachbarschaft & Hausordnung",
                "labelTr": "Komşular ve apartman kuralları (Hausordnung)",
                "labelEn": "Neighbors and house rules (Hausordnung)",
                "labelAr": "الجيران وقواعد المبنى الداخلي (Hausordnung)",
                "labelUk": "Сусіди та правила будинку (Hausordnung)",
                "keywords": ["nachbarn", "hausordnung", "ruhezeiten", "kontakt", "hilfe", "freundlich", "grüßen", "mülltrennung"]
            },
            {
                "key": "wohlfuehlen",
                "label": "Einleben & Zufriedenheit",
                "labelTr": "Alışma süreci ve memnuniyet",
                "labelEn": "Settling in and overall satisfaction",
                "labelAr": "الاندماج والشعور بالراحة والرضا",
                "labelUk": "Адаптація та задоволення життям",
                "keywords": ["wohlfühlen", "leben", "zufrieden", "alltag", "glücklich", "zentrum", "einkaufen", "spielplatz"]
            }
        ],
        "modelAnswer": {
            "de": "Über das Thema Wohnen in Deutschland möchte ich gerne berichten, weil die Wohnungssuche für Zugewanderte oft eine große Herausforderung darstellt. Als wir vor zwei Jahren ankamen, haben wir monatelang auf verschiedenen Online-Portalen gesucht und viele Unterlagen wie SCHUFA-Auskunft und Gehaltsnachweise vorbereitet. Glücklicherweise haben wir schließlich eine schöne Dreizimmerwohnung am Stadtrand gefunden. Die Wohnung hat einen kleinen Balkon und liegt in einer sehr ruhigen Gegend mit vielen Grünflächen. In unserem Haus wohnen sechs Parteien. Das Verhältnis zu den Nachbarn ist sehr freundlich und respektvoll. Wir achten alle auf die gesetzlichen Ruhezeiten und helfen uns gegenseitig, wenn Pakete geliefert werden oder jemand verreist ist. Besonders die strenge Mülltrennung war am Anfang neu für mich, aber mittlerweile klappt das reibungslos. Wir fühlen uns hier sehr wohl und heimisch.",
            "tr": "Almanya'da konut ve yaşam konusu hakkında bilgi vermek istiyorum, çünkü yeni gelenler için ev bulmak genellikle büyük bir zorluktur. İki yıl önce geldiğimizde internet portallarında aylarca arama yaptık; SCHUFA belgesi ve maaş bordrosu gibi pek çok evrak hazırladık. Şansımıza nihayet şehrin kenarında çok güzel üç odalı bir daire bulabildik. Evimizin küçük bir balkonu var ve bol yeşil alanı olan sakin bir semtte yer alıyor. Binamızda altı daire bulunuyor. Komşularımızla ilişkilerimiz oldukça samimi ve saygılı. Hepimiz yasal dinlenme saatlerine (Ruhezeiten) özen gösteriyoruz; kargolar geldiğinde veya birimiz seyahate çıktığında birbirimize yardımcı oluyoruz. Başlangıçta özellikle sıkı çöp ayrıştırma kuralı benim için yeniydi, ancak artık sorunsuz şekilde uyguluyorum. Burada kendimizi çok huzurlu ve evimizde hissediyoruz.",
            "en": "I would like to speak about living in Germany, as finding housing is often a significant hurdle for newcomers. When we arrived two years ago, we spent months searching on online property portals and preparing paperwork like credit scores (SCHUFA) and proof of income. Fortunately, we eventually found a lovely three-room apartment on the city outskirts. The apartment has a small balcony and is situated in a tranquil neighborhood with plenty of greenery. Six families live in our building. The relationship with our neighbors is polite and respectful. We all adhere to the official quiet hours (Ruhezeiten) and help each other with package deliveries or when someone travels. The strict waste separation was novel to me initially, but now it works smoothly. We truly feel at home here.",
            "ar": "أود الحديث عن موضوع السكن في ألمانيا، لأن البحث عن شقة غالبًا ما يشكل تحديًا كبيرًا للقادمين الجدد. عندما وصلنا قبل عامين، بحثنا لشهور عبر المواقع الإلكترونية وأعددنا وثائق مثل فحص الائتمان (SCHUFA) وإثباتات الدخل. لحسن الحظ، عثرنا أخيرًا على شقة جميلة من ثلاث غرف في ضواحي المدينة. تحتوي الشقة على شرفة صغيرة وتقع في منطقة هادئة مليئة بالمساحات الخضراء. يعيش في المبنى ست عائلات. العلاقة مع الجيران ودية للغاية وقائمة على الاحترام المتبادل؛ حيث نلتزم جميعًا بأوقات الهدوء الرسمية، ونساعد بعضنا عند استلام الطرود. في البداية كان فرز النفايات أمرًا جديدًا عليّ، لكنه أصبح روتينًا سهلاً الآن. نشعر براحة حقيقية وكأننا في بيتنا.",
            "uk": "Я хочу розповісти про житло в Німеччині, оскільки пошук квартири для новоприбулих нерідко стає серйозним випробуванням. Коли ми приїхали два роки тому, ми місяцями шукали варіанти на порталах нерухомості та збирали документи, такі як довідка SCHUFA та довідки про доходи. На щастя, нам вдалося знайти гарну трикімнатну квартиру на околиці міста. Вона має невеликий балкон і розташована в тихому районі з парками. У нашому будинку шість сімей. Стосунки із сусідами дуже доброзичливі та шанобливі. Ми дотримуємося правил тиші (Ruhezeiten) та допомагаємо одне одному з доставкою посилок. Спочатку сортування сміття було для мене незвичним, але тепер це стало звичною нормою. Ми почуваємося тут як удома."
        },
        "redemittel": [
            {"phrase": "Die Wohnungssuche war am Anfang eine große Herausforderung.", "tr": "Ev arayışı başlangıçta büyük bir zorluktu.", "en": "Flat hunting was a big challenge at first.", "category": "Suche"},
            {"phrase": "Ich wohne in einer ...-Zimmer-Wohnung mit Balkon / Garten.", "tr": "Balkonlu / bahçeli ... odalı bir dairede oturuyorum.", "en": "I live in a ...-room apartment with balcony / garden.", "category": "Wohnung"},
            {"phrase": "Das Verhältnis zu den Nachbarn ist sehr gut / freundlich.", "tr": "Komşularla ilişkiler çok iyi / dostça.", "en": "The relationship with the neighbors is very good / friendly.", "category": "Nachbarn"},
            {"phrase": "Wir achten alle auf die gesetzlichen Ruhezeiten.", "tr": "Hepimiz yasal dinlenme/sessizlik saatlerine dikkat ederiz.", "en": "We all observe the official quiet hours.", "category": "Hausordnung"},
            {"phrase": "Insgesamt fühle ich mich hier sehr wohl und sicher.", "tr": "Genel olarak burada kendimi çok huzurlu ve güvende hissediyorum.", "en": "Overall, I feel very comfortable and secure here.", "category": "Fazit"}
        ],
        "keyVocab": [
            {"de": "die Warmmiete", "article": "die", "plural": "die Warmmieten", "tr": "ısınma/giderler dahil kira", "en": "warm rent (incl. heating)"},
            {"de": "die Kaution", "article": "die", "plural": "die Kautionen", "tr": "depozito", "en": "security deposit"},
            {"de": "die Hausordnung", "article": "die", "plural": "die Hausordnungen", "tr": "bina iç kuralları", "en": "house rules"},
            {"de": "die Ruhezeit", "article": "die", "plural": "die Ruhezeiten", "tr": "sessizlik saatleri (13-15 ve 22-06)", "en": "quiet hours"},
            {"de": "die Mülltrennung", "article": "die", "plural": "-", "tr": "çöp ayrıştırma", "en": "waste separation"}
        ]
    }
]

print(f"Teil 1 defined with {len(TEIL_1)} topics.")
