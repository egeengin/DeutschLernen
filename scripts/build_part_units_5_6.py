#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for scripts/reading_lexicon_parts/part_units_5_6.py
Builds complete contextual definitions for 100% of tokens in Units 5 and 6.
"""

import json
import os

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET_PATH = os.path.join(ROOT_DIR, "scripts", "reading_lexicon_parts", "part_units_5_6.py")

ENTRIES = {
    "ab": {
        "de": "ab", "displayDe": "ab", "article": "", "plural": "", "pos": "adv", "level": "A1",
        "tr": "-den itibaren, ayrılma / ayrılabilir önek (abhängen)", "en": "from, off (separable prefix)", "ar": "ابتداءً من / بادئة انفصال", "uk": "від, починаючи з / префікс",
        "example_de": "Die Höhe der Ausbildungsvergütung hängt von der Branche ab.",
        "example_tr": "Stajyer maaşının tutarı sektöre göre değişir (sektöre bağlıdır).",
        "example_en": "The amount of training allowance depends on the industry.",
        "example_ar": "يعتمد مقدار مكافأة التدريب على القطاع المهني.",
        "example_uk": "Розмір стипендії залежить від конкретної галузі."
    },
    "abfüllen": {
        "de": "abfüllen", "displayDe": "abfüllen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "doldurmak, ambalajsız kaba boşaltmak", "en": "to fill, decant loose goods", "ar": "تعبئة المواد في أوعية", "uk": "насипати / наповнювати в тару",
        "example_de": "In Unverpackt-Läden kann man Nudeln und Reis lose abfüllen.",
        "example_tr": "Ambalajsız dükkanlarda makarna ve pirinci açıkta kaplara doldurabilirsiniz.",
        "example_en": "In zero-waste stores, one can fill pasta and rice into loose containers.",
        "example_ar": "في المتاجر الخالية من التغليف، يمكن للمرء تعبئة المعكرونة والأرز في أوعية خاصة.",
        "example_uk": "У магазинах без упаковки можна насипати макарони та рис у власні ємності."
    },
    "abschlussprüfung": {
        "de": "die Abschlussprüfung", "displayDe": "Abschlussprüfung", "article": "die", "plural": "die Abschlussprüfungen", "pos": "noun", "level": "B1",
        "tr": "bitirme sınavı, mezuniyet sınavı", "en": "final examination", "ar": "امتحان التخرج / الاختبار النهائي", "uk": "випускний іспит",
        "example_de": "Nach der Abschlussprüfung sind Absolventen sofort einsatzbereit.",
        "example_tr": "Bitirme sınavından sonra mezunlar hemen çalışmaya hazırdır.",
        "example_en": "After the final examination, graduates are immediately ready for work.",
        "example_ar": "بعد اجتياز الاختبار النهائي، يصبح الخريجون جاهزين للعمل فوراً.",
        "example_uk": "Після випускного іспиту випускники одразу готові до роботи."
    },
    "absolventen": {
        "de": "der Absolvent", "displayDe": "Absolvent", "article": "der", "plural": "die Absolventen", "pos": "noun", "level": "B1",
        "tr": "mezun (erkek mezunlar / çoğul)", "en": "graduates", "ar": "خريجون", "uk": "випускники",
        "example_de": "Absolventen einer dualen Ausbildung haben hervorragende Jobchancen.",
        "example_tr": "İkili mesleki eğitim mezunlarının mükemmel iş fırsatları vardır.",
        "example_en": "Graduates of dual vocational training have outstanding job opportunities.",
        "example_ar": "يتمتع خريجو التدريب المهني المزدوج بفرص عمل ممتازة.",
        "example_uk": "Випускники дуальної освіти мають чудові шанси на працевлаштування."
    },
    "achten": {
        "de": "achten", "displayDe": "achten", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "dikkat etmek, özen göstermek (achten auf)", "en": "to pay attention to, respect", "ar": "يهتم بـ / يحرص على", "uk": "звертати увагу на",
        "example_de": "Verbraucher achten beim täglichen Einkauf auf Umweltschutz.",
        "example_tr": "Tüketiciler günlük alışverişte çevre korumaya dikkat ederler.",
        "example_en": "Consumers pay attention to environmental protection during daily shopping.",
        "example_ar": "يحرص المستهلكون على حماية البيئة أثناء التسوق اليومي.",
        "example_uk": "Споживачі звертають увагу на захист довкілля під час щоденних покупок."
    },
    "allgemeinbildung": {
        "de": "die Allgemeinbildung", "displayDe": "Allgemeinbildung", "article": "die", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "genel kültür, genel eğitim", "en": "general education / general knowledge", "ar": "الثقافة العامة / التعليم العام", "uk": "загальна освіта / ерудиція",
        "example_de": "Die Berufsschule vermittelt theoretisches Fachwissen und Allgemeinbildung.",
        "example_tr": "Meslek okulu teorik uzmanlık bilgisi ve genel kültür kazandırır.",
        "example_en": "Vocational school teaches theoretical expertise and general education.",
        "example_ar": "تنقل المدرسة المهنية المعرفة التخصصية النظرية والثقافة العامة.",
        "example_uk": "Професійна школа надає теоретичні знання та загальну освіту."
    },
    "alltag": {
        "de": "der Alltag", "displayDe": "Alltag", "article": "der", "plural": "-", "pos": "noun", "level": "A2",
        "tr": "günlük yaşam, gündelik hayat", "en": "everyday life, daily routine", "ar": "الحياة اليومية", "uk": "повсякденне життя / побут",
        "example_de": "Mülltrennung ist ein praktischer Beitrag zum Umweltschutz im Alltag.",
        "example_tr": "Çöp ayrıştırma, günlük yaşamda çevre korumaya pratik bir katkıdır.",
        "example_en": "Waste separation is a practical contribution to environmental protection in daily life.",
        "example_ar": "فرز النفايات مساهمة عملية في حماية البيئة في الحياة اليومية.",
        "example_uk": "Сортування сміття — це практичний внесок у захист довкілля в повсякденному житті."
    },
    "arbeitserfahrung": {
        "de": "die Arbeitserfahrung", "displayDe": "Arbeitserfahrung", "article": "die", "plural": "die Arbeitserfahrungen", "pos": "noun", "level": "B1",
        "tr": "iş deneyimi, çalışma tecrübesi", "en": "work experience", "ar": "خبرة العمل", "uk": "досвід роботи",
        "example_de": "Auszubildende sammeln im Betrieb wertvolle praktische Arbeitserfahrung.",
        "example_tr": "Stajyerler işletmede değerli pratik iş deneyimi edinirler.",
        "example_en": "Trainees gain valuable practical work experience in the company.",
        "example_ar": "يكتسب المتدربون خبرة عملية قيّمة داخل الشركة.",
        "example_uk": "Учні здобувають цінний практичний досвід роботи на підприємстві."
    },
    "arbeitsverhältnis": {
        "de": "das Arbeitsverhältnis", "displayDe": "Arbeitsverhältnis", "article": "das", "plural": "die Arbeitsverhältnisse", "pos": "noun", "level": "B1",
        "tr": "çalışma ilişkisi, iş akdi", "en": "employment relationship", "ar": "علاقة العمل / عقد التوظيف", "uk": "трудові відносини",
        "example_de": "Nach der Ausbildung folgt oft ein unbefristetes Arbeitsverhältnis.",
        "example_tr": "Eğitimden sonra genellikle süresiz bir iş sözleşmesi gelir.",
        "example_en": "Training is often followed by a permanent employment relationship.",
        "example_ar": "غالبًا ما يتبع التدريب المهني عقد عمل غير محدد المدة.",
        "example_uk": "Після навчання часто настають безстрокові трудові відносини."
    },
    "attraktiv": {
        "de": "attraktiv", "displayDe": "attraktiv", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "çekici, cazip", "en": "attractive, appealing", "ar": "جذاب / مغرٍ", "uk": "привабливий",
        "example_de": "In der Industrie sind die Verdienstmöglichkeiten oft sehr attraktiv.",
        "example_tr": "Sanayi sektöründe kazanç olanakları genellikle oldukça caziptir.",
        "example_en": "Earning opportunities in industry are often very attractive.",
        "example_ar": "فرص الكسب في القطاع الصناعي غالبًا ما تكون مغرية وجذابة.",
        "example_uk": "Можливості заробітку в промисловості часто є дуже привабливими."
    },
    "aus": {
        "de": "aus", "displayDe": "aus", "article": "", "plural": "", "pos": "prep", "level": "A1",
        "tr": "-den, -dan (çıkma, kaynak)", "en": "from, out of", "ar": "من", "uk": "з, із",
        "example_de": "Man verzichtet auf Obst aus fernen Ländern.",
        "example_tr": "Uzak ülkelerden gelen meyvelerden vazgeçilir.",
        "example_en": "People avoid fruit from distant countries.",
        "example_ar": "يستغني الناس عن الفواكه القادمة من بلدان بعيدة.",
        "example_uk": "Люди відмовляються від фруктів з далеких країн."
    },
    "ausbildung": {
        "de": "die Ausbildung", "displayDe": "Ausbildung", "article": "die", "plural": "die Ausbildungen", "pos": "noun", "level": "A2",
        "tr": "mesleki eğitim, çıraklık eğitimi", "en": "vocational training, apprenticeship", "ar": "تدريب مهني / تأهيل", "uk": "професійне навчання",
        "example_de": "Die duale Ausbildung verbindet Theorie und Praxis ideal.",
        "example_tr": "İkili mesleki eğitim, teori ile pratiği ideal biçimde birleştirir.",
        "example_en": "Dual vocational training ideally combines theory and practice.",
        "example_ar": "يجمع التدريب المهني المزدوج بين النظرية والتطبيق بشكل مثالي.",
        "example_uk": "Дуальна освіта ідеально поєднує теорію та практику."
    },
    "ausbildungsbetrieb": {
        "de": "der Ausbildungsbetrieb", "displayDe": "Ausbildungsbetrieb", "article": "der", "plural": "die Ausbildungsbetriebe", "pos": "noun", "level": "B1",
        "tr": "staj / eğitim veren işletme", "en": "training company / employer", "ar": "الشركة / المؤسسة المدربة", "uk": "підприємство, що здійснює навчання",
        "example_de": "Im Ausbildungsbetrieb lernen Auszubildende den Berufsalltag kennen.",
        "example_tr": "Eğitim işletmesinde stajyerler mesleğin günlük akışını öğrenirler.",
        "example_en": "In the training company, trainees get to know daily professional life.",
        "example_ar": "في شركة التدريب، يتعرف المتدربون على روتين العمل اليومي.",
        "example_uk": "На навчальному підприємстві учні знайомляться з трудовими буднями."
    },
    "ausbildungsjahr": {
        "de": "das Ausbildungsjahr", "displayDe": "Ausbildungsjahr", "article": "das", "plural": "die Ausbildungsjahre", "pos": "noun", "level": "B1",
        "tr": "çıraklık / eğitim yılı", "en": "year of training / apprenticeship year", "ar": "سنة التدريب المهني", "uk": "рік професійного навчання",
        "example_de": "Schon im ersten Ausbildungsjahr bekommen Lernende ein festes Gehalt.",
        "example_tr": "Daha ilk eğitim yılında öğrenciler düzenli bir maaş alırlar.",
        "example_en": "Already in the first year of training, learners receive a fixed salary.",
        "example_ar": "يحصل المتدربون على راتب ثابت منذ السنة التدريبية الأولى.",
        "example_uk": "Вже на першому році навчання учні отримують фіксовану зарплату."
    },
    "ausbildungsvergütung": {
        "de": "die Ausbildungsvergütung", "displayDe": "Ausbildungsvergütung", "article": "die", "plural": "die Ausbildungsvergütungen", "pos": "noun", "level": "B1",
        "tr": "çıraklık / stajyer maaşı, eğitim ödeneği", "en": "training allowance / apprenticeship pay", "ar": "مكافأة التدريب المهني الشهرية", "uk": "щомісячна стипендія / оплата навчання",
        "example_de": "Die monatliche Ausbildungsvergütung steigt mit jedem Lehrjahr.",
        "example_tr": "Aylık stajyer maaşı her eğitim yılıyla birlikte artar.",
        "example_en": "The monthly training allowance increases with every apprenticeship year.",
        "example_ar": "تزداد مكافأة التدريب الشهرية مع كل سنة دراسية.",
        "example_uk": "Щомісячна оплата навчання зростає з кожним навчальним роком."
    },
    "ausgezeichnete": {
        "de": "ausgezeichnet", "displayDe": "ausgezeichnet", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "mükemmel, kusursuz", "en": "excellent, outstanding", "ar": "ممتاز / بارز", "uk": "відмінний, чудовий",
        "example_de": "Fachkräfte haben ausgezeichnete Chancen auf dem Arbeitsmarkt.",
        "example_tr": "Nitelikli uzmanların iş piyasasında mükemmel şansları vardır.",
        "example_en": "Skilled workers have excellent opportunities on the job market.",
        "example_ar": "يتمتع العمال المهرة بفرص ممتازة في سوق العمل.",
        "example_uk": "Фахівці мають чудові шанси на ринку праці."
    },
    "ausstoß": {
        "de": "der Ausstoß", "displayDe": "Ausstoß", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "salınım, emisyon, çıkış miktarı", "en": "emission, discharge", "ar": "انبعاث / إطلاق غازات", "uk": "викиди / емісія",
        "example_de": "Kürzere Wege senken den Ausstoß von schädlichen Treibhausgasen.",
        "example_tr": "Daha kısa mesafeler zararlı sera gazı salınımını düşürür.",
        "example_en": "Shorter routes reduce the emission of harmful greenhouse gases.",
        "example_ar": "المسافات الأقصر تقلل من انبعاث الغازات الدفيئة الضارة.",
        "example_uk": "Коротші шляхи зменшують викиди шкідливих парникових газів."
    },
    "auszubildenden": {
        "de": "der Auszubildende", "displayDe": "Auszubildende", "article": "der", "plural": "die Auszubildenden", "pos": "noun", "level": "B1",
        "tr": "stajyer, çırak (çoğul / N-Deklination)", "en": "trainees, apprentices", "ar": "متدربون مهنيون", "uk": "учні / стажери",
        "example_de": "Die Auszubildenden lernen praktische Handgriffe im Betrieb.",
        "example_tr": "Stajyerler işletmede pratik el becerilerini öğrenirler.",
        "example_en": "Trainees learn practical skills in the company.",
        "example_ar": "يتعلم المتدربون المهارات العملية داخل الشركة.",
        "example_uk": "Учні опановують практичні навички на підприємстві."
    },
    "bauernhöfe": {
        "de": "der Bauernhof", "displayDe": "Bauernhof", "article": "der", "plural": "die Bauernhöfe", "pos": "noun", "level": "A2",
        "tr": "çiftlikler", "en": "farms", "ar": "مزارع", "uk": "ферми / селянські садиби",
        "example_de": "Lokale Bauernhöfe verkaufen Obst und Milchprodukte ab Hof.",
        "example_tr": "Yerel çiftlikler meyve ve süt ürünlerini doğrudan çiftlikten satarlar.",
        "example_en": "Local farms sell fruit and dairy products directly from the farm.",
        "example_ar": "تبيع المزارع المحلية الفواكه ومنتجات الألبان مباشرة من المزرعة.",
        "example_uk": "Місцеві ферми продають фрукти та молочні продукти безпосередньо з господарства."
    },
    "beendet": {
        "de": "beenden", "displayDe": "beenden", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "bitirmek, tamamlamak (3. tekil şahıs / Partizip II)", "en": "finishes, completes", "ar": "ينهي / يكمل", "uk": "закінчує / завершує",
        "example_de": "Wer die Ausbildung erfolgreich beendet, wird meist übernommen.",
        "example_tr": "Eğitimi başarıyla tamamlayan kişi genellikle kadroya alınır.",
        "example_en": "Whoever finishes training successfully is usually retained by the firm.",
        "example_ar": "من ينهي تدريبه بنجاح يتم توظيفه عادة في الشركة.",
        "example_uk": "Той, хто успішно завершує навчання, зазвичай залишається на фірмі."
    },
    "behälter": {
        "de": "der Behälter", "displayDe": "Behälter", "article": "der", "plural": "die Behälter", "pos": "noun", "level": "B1",
        "tr": "saklama kabı, muhafaza kabı", "en": "container, receptacle", "ar": "وعاء / حاوية حفظ", "uk": "контейнер / ємність",
        "example_de": "Kunden bringen eigene Behälter für Mehl und Zucker mit.",
        "example_tr": "Müşteriler un ve şeker için kendi saklama kaplarını getirirler.",
        "example_en": "Customers bring their own containers for flour and sugar.",
        "example_ar": "يجلب الزبائن أوعيتهم الخاصة لحفظ الدقيق والسكر.",
        "example_uk": "Покупці приносять власні контейнери для борошна та цукру."
    },
    "berufen": {
        "de": "der Beruf", "displayDe": "Beruf", "article": "der", "plural": "die Berufe", "pos": "noun", "level": "A1",
        "tr": "meslekler (Dativ Plural: in den Berufen)", "en": "professions, jobs (dative plural)", "ar": "مهن / وظائف (في المهن)", "uk": "професії (у професіях)",
        "example_de": "Besonders in technischen Berufen werden viele Fachkräfte gesucht.",
        "example_tr": "Özellikle teknik mesleklerde çok sayıda uzman aranmaktadır.",
        "example_en": "Especially in technical professions, many skilled workers are sought.",
        "example_ar": "يُطلب الكثير من العمال المهرة خاصة في المهن التقنية.",
        "example_uk": "Особливо в технічних професіях шукають багато фахівців."
    },
    "beruflicher": {
        "de": "beruflich", "displayDe": "beruflich", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "mesleki, iş ile ilgili", "en": "professional, occupational", "ar": "مهني / وظيفي", "uk": "професійний",
        "example_de": "Die Kombination von Theorie und beruflicher Praxis ist bewährt.",
        "example_tr": "Teori ve mesleki pratiğin birleşimi başarısını kanıtlamıştır.",
        "example_en": "The combination of theory and professional practice is well-proven.",
        "example_ar": "الجمع بين النظرية والتطبيق المهني نظام أثبت نجاحه.",
        "example_uk": "Поєднання теорії та професійної практики перевірено часом."
    },
    "berufsbegleitendes": {
        "de": "berufsbegleitend", "displayDe": "berufsbegleitend", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "çalışırken yürütülen, işle eş zamanlı (eğitim)", "en": "part-time alongside work / extra-occupational", "ar": "ملازم للعمل / دراسة موازية للوظيفة", "uk": "без відриву від виробництва",
        "example_de": "Ein berufsbegleitendes Studium ermöglicht Weiterbildung neben dem Job.",
        "example_tr": "İşle eş zamanlı üniversite eğitimi, çalışırken kendini geliştirmeyi sağlar.",
        "example_en": "Studying alongside work enables further education next to one's job.",
        "example_ar": "تتيح الدراسة الموازية للوظيفة مواصلة التعليم بجانب العمل.",
        "example_uk": "Навчання без відриву від роботи дозволяє підвищувати кваліфікацію."
    },
    "berufsschule": {
        "de": "die Berufsschule", "displayDe": "Berufsschule", "article": "die", "plural": "die Berufsschulen", "pos": "noun", "level": "B1",
        "tr": "meslek okulu", "en": "vocational school", "ar": "مدرسة مهنية", "uk": "професійно-технічне училище",
        "example_de": "In der Berufsschule lernen Schüler fachliche Grundlagen.",
        "example_tr": "Meslek okulunda öğrenciler mesleki temel bilgileri öğrenirler.",
        "example_en": "In vocational school, students learn subject-matter fundamentals.",
        "example_ar": "في المدرسة المهنية يتعلم الطلاب الأسس التخصصية.",
        "example_uk": "У професійній школі учні вивчають фахові основи."
    },
    "bewerberinnen": {
        "de": "die Bewerberin", "displayDe": "Bewerberin", "article": "die", "plural": "die Bewerberinnen", "pos": "noun", "level": "A2",
        "tr": "kadın adaylar, kadın başvuru sahipleri", "en": "female applicants", "ar": "متقدمات للوظيفة / مرشحات", "uk": "кандидатки / претендентки на роботу",
        "example_de": "Firmen suchen motivierte Bewerberinnen für technische Berufe.",
        "example_tr": "Şirketler teknik meslekler için istekli kadın adaylar aramaktadır.",
        "example_en": "Companies seek motivated female applicants for technical trades.",
        "example_ar": "تبحث الشركات عن متقدمات متحمّسات للمهن التقنية.",
        "example_uk": "Компанії шукають мотивованих кандидаток на технічні професії."
    },
    "bewerbern": {
        "de": "der Bewerber", "displayDe": "Bewerber", "article": "der", "plural": "die Bewerber", "pos": "noun", "level": "A2",
        "tr": "adaylar, başvuru sahipleri (Dativ Plural: mit Bewerbern)", "en": "applicants (dative plural)", "ar": "متقدمون للوظيفة (بالمتقدمين)", "uk": "кандидати (кандидатам)",
        "example_de": "Unternehmen sprechen direkt mit qualifizierten Bewerbern.",
        "example_tr": "Şirketler nitelikli adaylarla doğrudan görüşürler.",
        "example_en": "Companies speak directly with qualified applicants.",
        "example_ar": "تتواصل الشركات مباشرة مع المتقدمين المؤهلين.",
        "example_uk": "Підприємства спілкуються безпосередньо з кваліфікованими кандидатами."
    },
    "bewusst": {
        "de": "bewusst", "displayDe": "bewusst", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "bilinçli olarak, farkında", "en": "conscious, mindful", "ar": "بوعي / عن إدراك", "uk": "свідомо / усвідомлений",
        "example_de": "Viele Menschen greifen bewusst zu Bio-Produkten.",
        "example_tr": "Birçok insan bilinçli olarak organik ürünleri tercih eder.",
        "example_en": "Many people consciously reach for organic products.",
        "example_ar": "يختار الكثير من الناس المنتجات العضوية بوعي.",
        "example_uk": "Багато людей свідомо обирають органічні продукти."
    },
    "bewährtes": {
        "de": "bewährt", "displayDe": "bewährt", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "kendini kanıtlamış, denenmiş ve güvenilir", "en": "proven, tried-and-tested", "ar": "مجرّب وناجح / معتمد", "uk": "перевірений / надійний",
        "example_de": "Das deutsche Pfandsystem ist ein bewährtes Modell für Recycling.",
        "example_tr": "Alman depozito sistemi geri dönüşüm için kendini kanıtlamış bir modeldir.",
        "example_en": "The German deposit system is a proven model for recycling.",
        "example_ar": "نظام الرهن الألماني هو نموذج مجرّب لإعادة التدوير.",
        "example_uk": "Німецька система застави є перевіреною моделлю вторинної переробки."
    },
    "bieten": {
        "de": "bieten", "displayDe": "bieten", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "sunmak, sağlamak", "en": "to offer, provide", "ar": "يقدم / يتيح", "uk": "пропонувати / надавати",
        "example_de": "Wochenmärkte bieten frische Lebensmittel aus der Region an.",
        "example_tr": "Semt pazarları bölgeden taze gıdalar sunarlar.",
        "example_en": "Weekly markets offer fresh food from the region.",
        "example_ar": "تقدم الأسواق الأسبوعية أطعمة طازجة من المنطقة.",
        "example_uk": "Щотижневі ринки пропонують свіжі продукти з регіону."
    },
    "branche": {
        "de": "die Branche", "displayDe": "Branche", "article": "die", "plural": "die Branchen", "pos": "noun", "level": "B1",
        "tr": "sektör, iş kolu", "en": "branch, industry sector", "ar": "قطاع مهني / مجال عمل", "uk": "галузь / сфера діяльності",
        "example_de": "In der IT-Branche gibt es besonders viele offene Stellen.",
        "example_tr": "Bilişim sektöründe özellikle çok sayıda açık pozisyon vardır.",
        "example_en": "In the IT sector, there are particularly many job vacancies.",
        "example_ar": "توجد شواغر وظيفية كثيرة بشكل خاص في قطاع تكنولوجيا المعلومات.",
        "example_uk": "В ІТ-галузі є особливо багато відкритих вакансій."
    },
    "bundesland": {
        "de": "das Bundesland", "displayDe": "Bundesland", "article": "das", "plural": "die Bundesländer", "pos": "noun", "level": "A2",
        "tr": "federal eyalet", "en": "federal state (of Germany)", "ar": "ولاية اتحادية", "uk": "федеральна земля",
        "example_de": "Deutschland besteht aus sechzehn Bundesländern.",
        "example_tr": "Almanya on altı federal eyaletten oluşur.",
        "example_en": "Germany consists of sixteen federal states.",
        "example_ar": "تتكون ألمانيا من ست عشرة ولاية اتحادية.",
        "example_uk": "Німеччина складається з шістнадцяти федеральних земель."
    },
    "chancen": {
        "de": "die Chance", "displayDe": "Chance", "article": "die", "plural": "die Chancen", "pos": "noun", "level": "A2",
        "tr": "şanslar, fırsatlar", "en": "chances, opportunities", "ar": "فرص", "uk": "шанси / можливості",
        "example_de": "Gute Sprachkenntnisse erhöhen die Chancen im Beruf.",
        "example_tr": "İyi dil bilgisi meslekteki fırsatları artırır.",
        "example_en": "Good language skills increase career opportunities.",
        "example_ar": "تزيد المعرفة اللغوية الجيدة من الفرص في العمل.",
        "example_uk": "Добре знання мови підвищує шанси в кар'єрі."
    },
    "dafür": {
        "de": "dafür", "displayDe": "dafür", "article": "", "plural": "", "pos": "adv", "level": "A2",
        "tr": "bunun için, buna (sorgt dafür dass = ... olmasını sağlar)", "en": "for this, to that end", "ar": "لذلك / من أجل هذا", "uk": "для цього / заради цього",
        "example_de": "Das Gesetz sorgt dafür, dass alle Arbeitnehmer Pausen haben.",
        "example_tr": "Yasa, tüm çalışanların mola yapmasını sağlar.",
        "example_en": "The law ensures that all employees take breaks.",
        "example_ar": "يحرص القانون على أن يحصل جميع الموظفين على فترات راحة.",
        "example_uk": "Закон піклується про те, щоб усі працівники мали перерви."
    },
    "darüber": {
        "de": "darüber", "displayDe": "darüber", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "bunun hakkında / bundan başka (darüber hinaus = bundan başka, ayrıca)", "en": "about this / furthermore (darüber hinaus)", "ar": "علاوة على ذلك / حول ذلك", "uk": "понад те / крім того",
        "example_de": "Darüber hinaus gibt es viele Weiterbildungsmöglichkeiten.",
        "example_tr": "Bundan başka birçok mesleki gelişim olanağı da vardır.",
        "example_en": "Furthermore, there are many further training opportunities.",
        "example_ar": "علاوة على ذلك، هناك العديد من فرص التدريب المتقدم.",
        "example_uk": "Крім того, є багато можливостей для підвищення кваліфікації."
    },
    "deutlich": {
        "de": "deutlich", "displayDe": "deutlich", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "belirgin biçimde, açıkça", "en": "clearly, significantly", "ar": "بشكل واضح / ملحوظ", "uk": "чітко / значно",
        "example_de": "Kurze Transportwege senken die Emissionen deutlich.",
        "example_tr": "Kısa taşıma yolları emisyonları belirgin biçimde düşürür.",
        "example_en": "Short transport routes significantly lower emissions.",
        "example_ar": "تقلل مسارات النقل القصيرة الانبعاثات بشكل ملحوظ.",
        "example_uk": "Короткі маршрути транспортування значно знижують викиди."
    },
    "direkte": {
        "de": "direkt", "displayDe": "direkt", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "doğrudan, dolaysız", "en": "direct", "ar": "مباشر", "uk": "прямий / безпосередній",
        "example_de": "Absolventen freuen sich auf die direkte Übernahme im Betrieb.",
        "example_tr": "Mezunlar işletmede doğrudan kadroya geçmeyi sabırsızlıkla beklerler.",
        "example_en": "Graduates look forward to direct hiring by the company.",
        "example_ar": "يتطلع الخريجون إلى التثبيت المباشر في الشركة.",
        "example_uk": "Випускники радіють прямому переходу в штат фірми."
    },
    "dosen": {
        "de": "die Dose", "displayDe": "Dose", "article": "die", "plural": "die Dosen", "pos": "noun", "level": "A2",
        "tr": "teneke kutular, meşrubat kutuları", "en": "cans, beverage tins", "ar": "علب معدنية / قوارير صفيح", "uk": "бляшанки / банки",
        "example_de": "Auf Getränkedosen zahlt man in Deutschland 25 Cent Pfand.",
        "example_tr": "Almanya'da içecek kutularına 25 sent depozito ödenir.",
        "example_en": "In Germany, one pays 25 cents deposit on beverage cans.",
        "example_ar": "في ألمانيا، يُدفع رهن قدره 25 سنتاً على علب المشروبات.",
        "example_uk": "У Німеччині за бляшанки з-під напоїв платять 25 центів застави."
    },
    "dualen": {
        "de": "dual", "displayDe": "dual", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "ikili, hem okul hem iş yeri içeren", "en": "dual (combining school and practical training)", "ar": "مزدوج (نظري وعملي معاً)", "uk": "дуальний",
        "example_de": "Das System der dualen Ausbildung ist ein deutsches Erfolgsmodell.",
        "example_tr": "İkili eğitim sistemi, bir Alman başarı modelidir.",
        "example_en": "The dual training system is a German success model.",
        "example_ar": "نظام التدريب المزدوج هو نموذج نجاح ألماني شهير.",
        "example_uk": "Система дуальної освіти є німецькою моделлю успіху."
    },
    "eigene": {
        "de": "eigen", "displayDe": "eigen", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "kendi, kendine ait", "en": "own", "ar": "خاص / به", "uk": "власний",
        "example_de": "Kunden bringen eigene Beutel zum Einkaufen mit.",
        "example_tr": "Müşteriler alışverişe kendi bez torbalarını getirirler.",
        "example_en": "Customers bring their own bags for grocery shopping.",
        "example_ar": "يجلب الزبائن أكياسهم الخاصة للتسوق.",
        "example_uk": "Покупці приносять власні сумки для покупок."
    },
    "einkauf": {
        "de": "der Einkauf", "displayDe": "Einkauf", "article": "der", "plural": "die Einkäufe", "pos": "noun", "level": "A2",
        "tr": "alışveriş", "en": "shopping, purchase", "ar": "تسوق / مشتريات", "uk": "покупки / шопінг",
        "example_de": "Beim täglichen Einkauf lässt sich viel Plastik sparen.",
        "example_tr": "Günlük alışverişte çok fazla plastikten tasarruf edilebilir.",
        "example_en": "During daily grocery shopping, a lot of plastic can be saved.",
        "example_ar": "أثناء التسوق اليومي، يمكن توفير الكثير من البلاستيك.",
        "example_uk": "Під час щоденних покупок можна зекономити багато пластику."
    },
    "einkaufsnetze": {
        "de": "das Einkaufsnetz", "displayDe": "Einkaufsnetz", "article": "das", "plural": "die Einkaufsnetze", "pos": "noun", "level": "B1",
        "tr": "alışveriş fileleri", "en": "shopping nets, mesh bags", "ar": "شباك التسوق القابلة لإعادة الاستخدام", "uk": "сітки для покупок / авоськи",
        "example_de": "Wiederverwendbare Einkaufsnetze ersetzen dünne Plastiktüten.",
        "example_tr": "Yeniden kullanılabilir alışveriş fileleri ince plastik poşetlerin yerini alıyor.",
        "example_en": "Reusable mesh shopping bags replace thin plastic bags.",
        "example_ar": "تحل شباك التسوق القابلة لإعادة الاستخدام محل الأكياس البلاستيكية الرقيقة.",
        "example_uk": "Багаторазові сітки для покупок замінюють тонкі пластикові пакети."
    },
    "einsatzbereit": {
        "de": "einsatzbereit", "displayDe": "einsatzbereit", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "göreve / çalışmaya hazır", "en": "ready for use, operational", "ar": "جاهز للعمل / مستعد للتشغيل", "uk": "готовий до роботи / до дії",
        "example_de": "Nach der Abschlussprüfung sind Absolventen sofort einsatzbereit.",
        "example_tr": "Bitirme sınavından sonra mezunlar hemen işe başlamaya hazırdır.",
        "example_en": "After the final exam, graduates are immediately ready for active work.",
        "example_ar": "بعد الاختبار النهائي، يكون الخريجون جاهزين فوراً للعمل الميداني.",
        "example_uk": "Після іспиту випускники одразу готові до практичної роботи."
    },
    "enge": {
        "de": "eng", "displayDe": "eng", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "sıkı, dar, yakın (enge Verbindung = sıkı bağ)", "en": "close, tight (close connection)", "ar": "وثيق / وطيد (صلة وثيقة)", "uk": "тісний (тісний зв'язок)",
        "example_de": "Die enge Verbindung von Theorie und Praxis ist von großem Vorteil.",
        "example_tr": "Teori ve pratiğin sıkı bağı büyük bir avantajdır.",
        "example_en": "The close connection of theory and practice is a huge advantage.",
        "example_ar": "الصلة الوثيقة بين النظرية والتطبيق تعد ميزة كبيرة.",
        "example_uk": "Тісний зв'язок теорії та практики є великою перевагою."
    },
    "entfallen": {
        "de": "entfallen", "displayDe": "entfallen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "ortadan kalkmak, gerek kalmamak, iptal olmak", "en": "to be eliminated, drop away", "ar": "يسقط / يُلغى / لا داعي له", "uk": "відпадати / скасовуватися",
        "example_de": "Durch regionale Produkte entfallen weite Transportwege.",
        "example_tr": "Yerel ürünler sayesinde uzun taşıma mesafeleri ortadan kalkar.",
        "example_en": "Through regional products, long transport routes are eliminated.",
        "example_ar": "بفضل المنتجات المحلية، تسقط مسافات الشحن والنقل الطويلة.",
        "example_uk": "Завдяки місцевим продуктам відпадають довгі шляхи перевезення."
    },
    "erfolgreich": {
        "de": "erfolgreich", "displayDe": "erfolgreich", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "başarılı, başarıyla", "en": "successful, successfully", "ar": "ناجح / بنجاح", "uk": "успішний / успішно",
        "example_de": "Wer eine Ausbildung erfolgreich beendet, findet schnell eine Stelle.",
        "example_tr": "Mesleki eğitimi başarıyla tamamlayan kişi hızlıca bir iş bulur.",
        "example_en": "Whoever finishes an apprenticeship successfully quickly finds a position.",
        "example_ar": "من ينهي تدريبه المهني بنجاح يعثر سريعاً على وظيفة.",
        "example_uk": "Той, хто успішно завершує навчання, швидко знаходить роботу."
    },
    "erhalten": {
        "de": "erhalten", "displayDe": "erhalten", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "almak, temin etmek; korumak", "en": "to receive, obtain", "ar": "يحصل على / يستلم", "uk": "отримувати",
        "example_de": "Auszubildende erhalten jeden Monat ein Gehalt vom Betrieb.",
        "example_tr": "Stajyerler her ay işletmeden bir maaş alırlar.",
        "example_en": "Trainees receive a monthly wage from the company.",
        "example_ar": "يحصل المتدربون على راتب شهري من المؤسسة.",
        "example_uk": "Учні щомісяця отримують заробітну плату від підприємства."
    },
    "eröffnen": {
        "de": "eröffnen", "displayDe": "eröffnen", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "açmak, faaliyete geçirmek", "en": "to open, launch", "ar": "يفتتح / يفتح", "uk": "відкривати",
        "example_de": "In vielen Städten eröffnen moderne Unverpackt-Läden.",
        "example_tr": "Birçok şehirde modern ambalajsız dükkanlar açılıyor.",
        "example_en": "In many cities, modern zero-waste shops are opening.",
        "example_ar": "في العديد من المدن تُفتتح متاجر حديثة بدون تغليف.",
        "example_uk": "У багатьох містах відкриваються сучасні магазини без упаковки."
    },
    "etwa": {
        "de": "etwa", "displayDe": "etwa", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "örneğin; yaklaşık", "en": "for instance; approximately", "ar": "على سبيل المثال / حوالي", "uk": "наприклад / приблизно",
        "example_de": "Man kann sich weiterqualifizieren, wie etwa zur Meisterin.",
        "example_tr": "Örneğin usta unvanı almak gibi üst yeterlilikler kazanılabilir.",
        "example_en": "One can gain further qualifications, such as becoming a master craftswoman.",
        "example_ar": "يمكن للمرء مواصلة التأهيل، مثل الحصول على شهادة 'Meister'.",
        "example_uk": "Можна підвищити кваліфікацію, наприклад, на майстра."
    },
    "fachkräftemangels": {
        "de": "der Fachkräftemangel", "displayDe": "Fachkräftemangel", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "nitelikli iş gücü açığı (Genitiv: wegen des Fachkräftemangels)", "en": "shortage of skilled workers (genitive)", "ar": "نقص العمالة الماهرة (مضاف إليه)", "uk": "дефіцит кваліфікованих кадрів (родовий відмінок)",
        "example_de": "Wegen des Fachkräftemangels stellen Firmen gerne Absolventen ein.",
        "example_tr": "Nitelikli eleman açığı nedeniyle şirketler mezunları seve seve işe alırlar.",
        "example_en": "Due to the shortage of skilled labor, companies gladly hire graduates.",
        "example_ar": "بسبب نقص العمالة الماهرة، توظف الشركات الخريجين بكل سرور.",
        "example_uk": "Через брак кваліфікованих працівників фірми залюбки наймають випускників."
    },
    "fachwissen": {
        "de": "das Fachwissen", "displayDe": "Fachwissen", "article": "das", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "mesleki uzmanlık bilgisi", "en": "specialist knowledge, expertise", "ar": "معرفة متخصصة / خبرة فنية", "uk": "фахові / спеціальні знання",
        "example_de": "Theoretisches Fachwissen wird in der Berufsschule vermittelt.",
        "example_tr": "Teorik uzmanlık bilgisi meslek okulunda verilir.",
        "example_en": "Theoretical specialist knowledge is taught at vocational school.",
        "example_ar": "يتم نقل المعرفة التخصصية النظرية في المدرسة المهنية.",
        "example_uk": "Теоретичні фахові знання викладаються у професійній школі."
    },
    "fernen": {
        "de": "fern", "displayDe": "fern", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "uzak, ırak", "en": "distant, remote", "ar": "بعيد / قاصٍ", "uk": "далекий",
        "example_de": "Obst muss nicht aus fernen Ländern importiert werden.",
        "example_tr": "Meyvelerin uzak ülkelerden ithal edilmesine gerek yoktur.",
        "example_en": "Fruit does not need to be imported from distant lands.",
        "example_ar": "لا يلزم استيراد الفواكه من بلدان بعيدة.",
        "example_uk": "Фрукти не обов'язково імпортувати з далеких країн."
    },
    "festes": {
        "de": "fest", "displayDe": "fest", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "sabit, düzenli (festes Gehalt)", "en": "fixed, steady (fixed salary)", "ar": "ثابت / دائم (راتب ثابت)", "uk": "фіксований / постійний",
        "example_de": "Ein festes Gehalt gibt jungen Lernenden finanzielle Sicherheit.",
        "example_tr": "Sabit bir maaş genç stajyerlere maddi güvence sağlar.",
        "example_en": "A fixed salary provides young trainees with financial security.",
        "example_ar": "يمنح الراتب الثابت المتدربين الشباب أماناً مالياً.",
        "example_uk": "Фіксована заробітна плата надає молодим учням фінансову впевненість."
    },
    "flaschen": {
        "de": "die Flasche", "displayDe": "Flasche", "article": "die", "plural": "die Flaschen", "pos": "noun", "level": "A1",
        "tr": "şişeler", "en": "bottles", "ar": "زجاجات / قوارير", "uk": "пляшки",
        "example_de": "Pfandpflichtige Flaschen bringt man zum Supermarkt zurück.",
        "example_tr": "Depozitolu şişeler süpermarkete geri getirilir.",
        "example_en": "Deposit bottles are returned to the supermarket.",
        "example_ar": "تُعاد القوارير الخاضعة لنظام الرهن إلى السوبرماركت.",
        "example_uk": "Пляшки з заставою повертають до супермаркету."
    },
    "frische": {
        "de": "frisch", "displayDe": "frisch", "article": "", "plural": "", "pos": "adj", "level": "A1",
        "tr": "taze", "en": "fresh", "ar": "طازج", "uk": "свіжий",
        "example_de": "Auf dem Wochenmarkt kauft man frische Lebensmittel.",
        "example_tr": "Semt pazarında taze gıdalar satın alınır.",
        "example_en": "At the farmers market, one buys fresh food.",
        "example_ar": "في السوق الأسبوعي يشتري المرء أطعمة طازجة.",
        "example_uk": "На базарі купують свіжі продукти."
    },
    "frischem": {
        "de": "frisch", "displayDe": "frisch", "article": "", "plural": "", "pos": "adj", "level": "A1",
        "tr": "taze (Dativ tekil nötr/maskulin)", "en": "fresh (dative singular)", "ar": "طازج (مجرور)", "uk": "свіжий (давальний відмінок)",
        "example_de": "Bei frischem Gemüse verzichtet man auf Plastikfolie.",
        "example_tr": "Taze sebzelerde plastik streç filmden kaçınılır.",
        "example_en": "With fresh vegetables, one dispenses with plastic wrap.",
        "example_ar": "يُستغنى عن التغليف البلاستيكي مع الخضار الطازجة.",
        "example_uk": "Для свіжих овочів відмовляються від пластикової плівки."
    },
    "fünfzigmal": {
        "de": "fünfzigmal", "displayDe": "fünfzigmal", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "elli kez, elli defa", "en": "fifty times", "ar": "خمسين مرة", "uk": "п'ятдесят разів",
        "example_de": "Glasflaschen können bis zu fünfzigmal wiederbefüllt werden.",
        "example_tr": "Cam şişeler elli defaya kadar tekrar doldurulabilir.",
        "example_en": "Glass bottles can be refilled up to fifty times.",
        "example_ar": "يمكن إعادة تعبئة الزجاجات حتى خمسين مرة.",
        "example_uk": "Скляні пляшки можна наповнювати повторно до п'ятдесяти разів."
    },
    "gegensatz": {
        "de": "der Gegensatz", "displayDe": "Gegensatz", "article": "der", "plural": "die Gegensätze", "pos": "noun", "level": "B1",
        "tr": "karşıtlık, tezat (im Gegensatz zu = -in aksine)", "en": "contrast, opposite (im Gegensatz zu = in contrast to)", "ar": "نقيض / عكس (على عكس)", "uk": "протилежність (на відміну від)",
        "example_de": "Im Gegensatz zum Studium verdient man in der Ausbildung sofort Geld.",
        "example_tr": "Üniversitenin aksine, meslek eğitiminde hemen para kazanılır.",
        "example_en": "In contrast to university, in an apprenticeship one earns money right away.",
        "example_ar": "على عكس الدراسة الجامعية، يكسب المرء المال فوراً أثناء التدريب.",
        "example_uk": "На відміну від навчання в університеті, на дуальній освіті одразу заробляють гроші."
    },
    "gehalt": {
        "de": "das Gehalt", "displayDe": "Gehalt", "article": "das", "plural": "die Gehälter", "pos": "noun", "level": "A2",
        "tr": "maaş, aylık", "en": "salary, wage", "ar": "راتب / مرتب شهري", "uk": "заробітна плата / оклад",
        "example_de": "Das Gehalt wird am Monatsende auf das Bankkonto überwiesen.",
        "example_tr": "Maaş, ay sonunda banka hesabına havale edilir.",
        "example_en": "The salary is transferred to the bank account at month's end.",
        "example_ar": "يُحوّل الراتب إلى الحساب البنكي في نهاية الشهر.",
        "example_uk": "Зарплата перераховується на банківський рахунок наприкінці місяця."
    },
    "gemüse": {
        "de": "das Gemüse", "displayDe": "Gemüse", "article": "das", "plural": "-", "pos": "noun", "level": "A1",
        "tr": "sebze", "en": "vegetables", "ar": "خضار / خضروات", "uk": "овочі",
        "example_de": "Saisonales Gemüse schmeckt besonders aromatisch und frisch.",
        "example_tr": "Mevsimlik sebzeler özellikle lezzetli ve tazedir.",
        "example_en": "Seasonal vegetables taste particularly flavorful and fresh.",
        "example_ar": "تتميز الخضار الموسمية بطعم طازج ولذيذ للغاية.",
        "example_uk": "Сезонні овочі смакують особливо ароматно та свіжо."
    },
    "genießt": {
        "de": "genießen", "displayDe": "genießen", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "tadını çıkarmak; (üne/saygınlığa) sahip olmak", "en": "enjoys (a reputation / leisure)", "ar": "يتمتع بـ / يحظى بـ", "uk": "користується (авторитетом) / насолоджується",
        "example_de": "Die deutsche Berufsausbildung genießt einen exzellenten Ruf.",
        "example_tr": "Alman mesleki eğitimi mükemmel bir üne sahiptir.",
        "example_en": "German vocational training enjoys an excellent reputation.",
        "example_ar": "يحظى التدريب المهني الألماني بسمعة ممتازة.",
        "example_uk": "Німецька професійна освіта користується чудовою репутацією."
    },
    "gereinigt": {
        "de": "reinigen", "displayDe": "reinigen", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "temizlenmiş, yıkanmış (Partizip II)", "en": "cleaned, washed (participle)", "ar": "مُنظّف / مغسول", "uk": "очищений / вимитий",
        "example_de": "Pfandflaschen werden gründlich gereinigt und neu befüllt.",
        "example_tr": "Depozitolu şişeler iyice temizlenip yeniden doldurulur.",
        "example_en": "Deposit bottles are thoroughly cleaned and refilled.",
        "example_ar": "تُنظف القوارير المسترجعة جيداً وتُعاد تعبئتها.",
        "example_uk": "Пляшки ретельно миють і наповнюють знову."
    },
    "getränken": {
        "de": "das Getränk", "displayDe": "Getränk", "article": "das", "plural": "die Getränke", "pos": "noun", "level": "A1",
        "tr": "içecekler (Dativ Plural: beim Kauf von Getränken)", "en": "drinks, beverages (dative plural)", "ar": "مشروبات (عند شراء المشروبات)", "uk": "напої (при купівлі напоїв)",
        "example_de": "Beim Kauf von Getränken zahlt man Pfand für die Flasche.",
        "example_tr": "İçecek satın alırken şişe için depozito ödenir.",
        "example_en": "When buying drinks, one pays a bottle deposit.",
        "example_ar": "عند شراء المشروبات، يدفع المرء رهناً مقابل القارورة.",
        "example_uk": "При купівлі напоїв сплачують заставу за пляшку."
    },
    "glas": {
        "de": "das Glas", "displayDe": "Glas", "article": "das", "plural": "die Gläser", "pos": "noun", "level": "A1",
        "tr": "cam; bardak; kavanoz", "en": "glass, jar", "ar": "زجاج / كأس / مرطبان", "uk": "скло / склянка / банка",
        "example_de": "Glas lässt sich ohne Qualitätsverlust unendlich oft recyceln.",
        "example_tr": "Cam, kalite kaybı olmadan sonsuz kez geri dönüştürülebilir.",
        "example_en": "Glass can be recycled infinitely without loss of quality.",
        "example_ar": "يمكن إعادة تدوير الزجاج لمرات لا حصر لها دون فقدان الجودة.",
        "example_uk": "Скло можна переробляти нескінченну кількість разів без втрати якості."
    },
    "gleichzeitig": {
        "de": "gleichzeitig", "displayDe": "gleichzeitig", "article": "", "plural": "", "pos": "adv", "level": "A2",
        "tr": "aynı anda, eş zamanlı olarak", "en": "simultaneously, at the same time", "ar": "في نفس الوقت / معاً", "uk": "одночасно / водночас",
        "example_de": "Auszubildende lernen gleichzeitig in der Schule und im Betrieb.",
        "example_tr": "Stajyerler aynı anda hem okulda hem işletmede öğrenim görürler.",
        "example_en": "Trainees learn simultaneously at school and in the company.",
        "example_ar": "يتعلم المتدربون في نفس الوقت في المدرسة والشركة.",
        "example_uk": "Учні навчаються одночасно в школі та на підприємстві."
    },
    "gläser": {
        "de": "das Glas", "displayDe": "Glas", "article": "das", "plural": "die Gläser", "pos": "noun", "level": "A1",
        "tr": "cam kavanozlar, bardaklar", "en": "glasses, glass jars", "ar": "مرطبانات زجاجية / كؤوس", "uk": "скляні банки / склянки",
        "example_de": "Im Unverpackt-Laden bringt man leere Gläser von zu Hause mit.",
        "example_tr": "Ambalajsız dükkana evden boş cam kavanozlar getirilir.",
        "example_en": "In the zero-waste store, one brings empty glass jars from home.",
        "example_ar": "في المتجر الخالي من التغليف، يجلب الزبون مرطبانات فارغة من المنزل.",
        "example_uk": "У магазин без упаковки приносять порожні скляні банки з дому."
    },
    "greifen": {
        "de": "greifen", "displayDe": "greifen", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "uzanmak, yönelmek, tercih etmek (greifen zu)", "en": "to reach for, choose (greifen zu)", "ar": "يتناول / يقبل على اختيار", "uk": "брати / вдаватися до",
        "example_de": "Viele Kunden greifen lieber zu regionalem Obst.",
        "example_tr": "Birçok müşteri yerel meyveleri tercih eder.",
        "example_en": "Many customers prefer to reach for regional fruit.",
        "example_ar": "يفضل الكثير من الزبائن الإقبال على الفواكه المحلية.",
        "example_uk": "Багато покупців охочіше беруть місцеві фрукти."
    },
    "großer": {
        "de": "groß", "displayDe": "groß", "article": "", "plural": "", "pos": "adj", "level": "A1",
        "tr": "büyük (Maskulin tekil Nominativ: ein großer Vorteil)", "en": "great, big", "ar": "كبير (ميزة كبيرة)", "uk": "великий",
        "example_de": "Ein großer Vorteil der Ausbildung ist die finanzielle Unabhängigkeit.",
        "example_tr": "Mesleki eğitimin büyük bir avantajı maddi bağımsızlıktır.",
        "example_en": "A great advantage of training is financial independence.",
        "example_ar": "إحدى الميزات الكبيرة للتدريب هي الاستقلال المالي.",
        "example_uk": "Велика перевага дуальної освіти — це фінансова незалежність."
    },
    "großstädten": {
        "de": "die Großstadt", "displayDe": "Großstadt", "article": "die", "plural": "die Großstädte", "pos": "noun", "level": "A2",
        "tr": "büyükşehirler (Dativ Plural: in Großstädten)", "en": "large cities, metropolises", "ar": "مدن كبرى", "uk": "великі міста / мегаполіси",
        "example_de": "In deutschen Großstädten gibt es ein gut ausgebautes Verkehrsnetz.",
        "example_tr": "Alman büyükşehirlerinde gelişmiş bir ulaşım ağı vardır.",
        "example_en": "In German metropolises, there is a well-developed transit network.",
        "example_ar": "توجد شبكة مواصلات متطورة في المدن الألمانية الكبرى.",
        "example_uk": "У великих німецьких містах є добре розвинена транспортна мережа."
    },
    "handwerk": {
        "de": "das Handwerk", "displayDe": "Handwerk", "article": "das", "plural": "die Handwerke", "pos": "noun", "level": "B1",
        "tr": "zanaat, el emeği sektörü", "en": "trade, craft sector", "ar": "الحرف اليدوية / قطاع الحرفيين", "uk": "ремесло / ремісничий сектор",
        "example_de": "Das Handwerk sucht händeringend nach Nachwuchskräften.",
        "example_tr": "Zanaat sektörü canla başla genç yetenekler aramaktadır.",
        "example_en": "The trade sector is urgently seeking young talent.",
        "example_ar": "يبحث قطاع الحرف اليدوية بإلحاح عن كوادر شابة جديدة.",
        "example_uk": "Реміснича галузь відчайдушно шукає молоде поповнення."
    },
    "haushalt": {
        "de": "der Haushalt", "displayDe": "Haushalt", "article": "der", "plural": "die Haushalte", "pos": "noun", "level": "A2",
        "tr": "hane, ev halkı", "en": "household", "ar": "أسرة / أهل البيت", "uk": "домогосподарство / сім'я",
        "example_de": "Jeder Haushalt kann durch Mülltrennung die Umwelt entlasten.",
        "example_tr": "Her hane çöp ayrıştırma yoluyla çevreye destek olabilir.",
        "example_en": "Every household can relieve the environment through waste separation.",
        "example_ar": "يمكن لكل أسرة تخفيف العبء عن البيئة من خلال فرز النفايات.",
        "example_uk": "Кожне домогосподарство може зменшити навантаження на довкілля шляхом сортування."
    },
    "heimische": {
        "de": "heimisch", "displayDe": "heimisch", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "yerli, ülkeye özgü, yöresel", "en": "domestic, native, local", "ar": "محلي / وطني", "uk": "вітчизняний / рідний",
        "example_de": "Der Kauf von Äpfeln unterstützt die heimische Landwirtschaft.",
        "example_tr": "Elma satın almak yerli tarımı destekler.",
        "example_en": "Buying apples supports domestic agriculture.",
        "example_ar": "يدعم شراء التفاح الزراعة المحلية والوطنية.",
        "example_uk": "Купівля яблук підтримує вітчизняне сільське господарство."
    },
    "herkömmliche": {
        "de": "herkömmlich", "displayDe": "herkömmlich", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "geleneksel, alışılagelmiş", "en": "conventional, traditional", "ar": "تقليدي / معتاد", "uk": "традиційний / звичайний",
        "example_de": "Auch herkömmliche Supermärkte bieten umweltfreundliche Alternativen.",
        "example_tr": "Geleneksel süpermarketler de çevre dostu alternatifler sunuyor.",
        "example_en": "Conventional supermarkets also offer environmentally friendly alternatives.",
        "example_ar": "تقدم المتاجر الكبرى التقليدية أيضاً بدائل صديقة للبيئة.",
        "example_uk": "Звичайні супермаркети також пропонують екологічні альтернативи."
    },
    "hervorragenden": {
        "de": "hervorragend", "displayDe": "hervorragend", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "olağanüstü, mükemmel", "en": "outstanding, excellent", "ar": "ممتاز / رائع", "uk": "видатний / відмінний",
        "example_de": "Das deutsche Ausbildungssystem genießt einen hervorragenden Ruf.",
        "example_tr": "Alman mesleki eğitim sistemi mükemmel bir üne sahiptir.",
        "example_en": "The German vocational training system enjoys an outstanding reputation.",
        "example_ar": "يحظى نظام التعليم المهني الألماني بسمعة فائقة التميز.",
        "example_uk": "Німецька система професійної освіти користується видатною репутацією."
    },
    "hinaus": {
        "de": "hinaus", "displayDe": "hinaus", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "öteye (darüber hinaus = bundan başka, ayrıca)", "en": "beyond, furthermore", "ar": "إلى الخارج / علاوة على (darüber hinaus)", "uk": "назовні / понад те",
        "example_de": "Darüber hinaus stehen Absolventen viele Wege offen.",
        "example_tr": "Bundan başka mezunlara birçok yol açıktır.",
        "example_en": "Furthermore, many paths are open to graduates.",
        "example_ar": "علاوة على ذلك، هناك العديد من المسارات المتاحة أمام الخريجين.",
        "example_uk": "Крім того, перед випускниками відкрито багато шляхів."
    },
    "hofläden": {
        "de": "der Hofladen", "displayDe": "Hofladen", "article": "der", "plural": "die Hofläden", "pos": "noun", "level": "B1",
        "tr": "çiftlik mağazaları (Dativ Plural: in Hofläden)", "en": "farm shops (direct sales)", "ar": "متاجر المزارع المباشرة", "uk": "фермерські крамниці прямого продажу",
        "example_de": "In Hofläden kaufen Kunden erntefrische Produkte direkt vom Bauern.",
        "example_tr": "Çiftlik mağazalarında müşteriler taze hasat edilmiş ürünleri doğrudan çiftçiden alırlar.",
        "example_en": "In farm shops, customers buy freshly harvested products directly from the farmer.",
        "example_ar": "في متاجر المزارع يشتري الزبائن المنتجات الطازجة مباشرة من المزارع.",
        "example_uk": "У фермерських магазинах купують свіжі продукти прямо від фермера."
    },
    "händeringend": {
        "de": "händeringend", "displayDe": "händeringend", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "canla başla arayarak, acil ve çaresizce", "en": "desperately, urgently", "ar": "بشدة / بإلحاح شديد", "uk": "відчайдушно / з великим благанням",
        "example_de": "Viele Betriebe suchen händeringend nach Fachkräften.",
        "example_tr": "Birçok işletme canla başla nitelikli eleman aramaktadır.",
        "example_en": "Many companies are desperately looking for skilled workers.",
        "example_ar": "تبحث العديد من الشركات بإلحاح شديد عن عمالة ماهرة.",
        "example_uk": "Багато підприємств відчайдушно шукають кваліфіковані кадри."
    },
    "hängt": {
        "de": "abhängen", "displayDe": "abhängen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "bağlı olmak (hängt ab von)", "en": "depends on (hängt ab von)", "ar": "يعتمد على / يرتبط بـ", "uk": "залежить від (hängt ab von)",
        "example_de": "Die Höhe der Vergütung hängt von der Branche ab.",
        "example_tr": "Maaşın tutarı sektöre bağlıdır.",
        "example_en": "The amount of compensation depends on the sector.",
        "example_ar": "يعتمد مقدار المكافأة على قطاع العمل.",
        "example_uk": "Розмір винагороди залежить від сфери діяльності."
    },
    "höhe": {
        "de": "die Höhe", "displayDe": "Höhe", "article": "die", "plural": "die Höhen", "pos": "noun", "level": "A2",
        "tr": "tutar, miktar; yükseklik", "en": "amount, sum; height", "ar": "مقدار / مبلغ؛ ارتفاع", "uk": "розмір / сума; висота",
        "example_de": "Die Höhe der Miete ist im Vertrag festgelegt.",
        "example_tr": "Kira tutarı sözleşmede belirlenmiştir.",
        "example_en": "The amount of rent is specified in the contract.",
        "example_ar": "تم تحديد مبلغ الإيجار في العقد.",
        "example_uk": "Розмір орендної плати зафіксований у договорі."
    },
    "importiertes": {
        "de": "importiert", "displayDe": "importiert", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "ithal edilmiş, dışarıdan gelmiş", "en": "imported", "ar": "مستورد", "uk": "імпортований",
        "example_de": "Importiertes Obst hat oft lange Flugreisen hinter sich.",
        "example_tr": "İthal meyveler çoğu zaman uzun uçak yolculukları geçirmiştir.",
        "example_en": "Imported fruit often has long air travel behind it.",
        "example_ar": "غالباً ما تقطع الفواكه المستوردة رحلات طيران طويلة.",
        "example_uk": "Імпортовані фрукти часто долають тривалі авіаперельоти."
    },
    "industrie": {
        "de": "die Industrie", "displayDe": "Industrie", "article": "die", "plural": "die Industrien", "pos": "noun", "level": "A2",
        "tr": "sanayi, endüstri", "en": "industry", "ar": "صناعة", "uk": "промисловість / індустрія",
        "example_de": "In der deutschen Industrie arbeiten Millionen von Menschen.",
        "example_tr": "Alman sanayisinde milyonlarca insan çalışmaktadır.",
        "example_en": "Millions of people work in German industry.",
        "example_ar": "يعمل ملايين الأشخاص في قطاع الصناعة الألماني.",
        "example_uk": "У німецькій промисловості працюють мільйони людей."
    },
    "jeder": {
        "de": "jeder", "displayDe": "jeder", "article": "", "plural": "", "pos": "pron", "level": "A1",
        "tr": "her, herkes", "en": "every, each", "ar": "كل / كل واحد", "uk": "кожен",
        "example_de": "Jeder Bürger kann einen Beitrag zum Klimaschutz leisten.",
        "example_tr": "Her vatandaş iklim korumaya bir katkı sunabilir.",
        "example_en": "Every citizen can make a contribution to climate protection.",
        "example_ar": "يمكن لكل مواطن تقديم مساهمة في حماية المناخ.",
        "example_uk": "Кожен громадянин може зробити свій внесок у захист клімату."
    },
    "jeweiligen": {
        "de": "jeweilig", "displayDe": "jeweilig", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "ilgili, söz konusu", "en": "respective, relevant", "ar": "المعنيّ / الخاص بكل حالة", "uk": "відповідний",
        "example_de": "Die Regeln hängen vom jeweiligen Bundesland ab.",
        "example_tr": "Kurallar ilgili eyalete göre değişir.",
        "example_en": "The rules depend on the respective federal state.",
        "example_ar": "تعتمد القواعد على الولاية الاتحادية المعنية.",
        "example_uk": "Правила залежать від відповідної федеральної землі."
    },
    "junge": {
        "de": "jung", "displayDe": "jung", "article": "", "plural": "", "pos": "adj", "level": "A1",
        "tr": "genç", "en": "young", "ar": "شاب / فتي", "uk": "молодий",
        "example_de": "Junge Menschen erlernen zukunftssichere Berufe.",
        "example_tr": "Genç insanlar geleceği parlak meslekler öğreniyor.",
        "example_en": "Young people learn future-proof professions.",
        "example_ar": "يتعلم الشباب مهناً واعدة للمستقبل.",
        "example_uk": "Молоді люди навчаються перспективним професіям."
    },
    "kauf": {
        "de": "der Kauf", "displayDe": "Kauf", "article": "der", "plural": "die Käufe", "pos": "noun", "level": "A2",
        "tr": "satın alma", "en": "purchase", "ar": "شراء", "uk": "купівля",
        "example_de": "Beim Kauf von Glasflaschen zahlt man Pfand.",
        "example_tr": "Cam şişe satın alırken depozito ödenir.",
        "example_en": "When purchasing glass bottles, one pays a deposit.",
        "example_ar": "عند شراء الزجاجات يدفع المشتري رهناً.",
        "example_uk": "При купівлі скляних пляшок сплачують заставу."
    },
    "kaufen": {
        "de": "kaufen", "displayDe": "kaufen", "article": "", "plural": "", "pos": "verb", "level": "A1",
        "tr": "satın almak", "en": "to buy, purchase", "ar": "يشتري", "uk": "купувати",
        "example_de": "Viele Verbraucher kaufen am liebsten auf dem Markt.",
        "example_tr": "Birçok tüketici en çok pazardan alışveriş yapmayı sever.",
        "example_en": "Many consumers prefer to buy at the farmers market.",
        "example_ar": "يفضل الكثير من المستهلكين الشراء من السوق.",
        "example_uk": "Багато споживачів вважають за краще купувати на базарі."
    },
    "kleinen": {
        "de": "klein", "displayDe": "klein", "article": "", "plural": "", "pos": "adj", "level": "A1",
        "tr": "küçük", "en": "small, little", "ar": "صغير", "uk": "маленький / невеликий",
        "example_de": "Beim Pfand zahlt man einen kleinen Geldbetrag.",
        "example_tr": "Depozitoda küçük bir para tutarı ödenir.",
        "example_en": "For the deposit, one pays a small amount of money.",
        "example_ar": "يدفع المرء مبلغاً صغيراً كرهن على القوارير.",
        "example_uk": "За пляшку сплачують невелику грошову заставу."
    },
    "kreislaufwirtschaft": {
        "de": "die Kreislaufwirtschaft", "displayDe": "Kreislaufwirtschaft", "article": "die", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "döngüsel ekonomi (geri dönüşüm temelli)", "en": "circular economy", "ar": "الاقتصاد الدائري / التدويري", "uk": "циркулярна економіка / економіка замкненого циклу",
        "example_de": "Die Kreislaufwirtschaft schont wertvolle Rohstoffe.",
        "example_tr": "Döngüsel ekonomi değerli hammaddeleri korur.",
        "example_en": "The circular economy conserves valuable raw materials.",
        "example_ar": "يحافظ الاقتصاد الدائري على الموارد والمواد الخام الثمينة.",
        "example_uk": "Циркулярна економіка зберігає цінні сировинні ресурси."
    },
    "kunden": {
        "de": "der Kunde", "displayDe": "Kunde", "article": "der", "plural": "die Kunden", "pos": "noun", "level": "A1",
        "tr": "müşteriler (çoğul / N-Deklination)", "en": "customers", "ar": "زبائن / عملاء", "uk": "клієнти / покупці",
        "example_de": "Kunden bringen eigene Dosen und Beutel mit.",
        "example_tr": "Müşteriler kendi kaplarını ve bez torbalarını getirirler.",
        "example_en": "Customers bring their own boxes and bags.",
        "example_ar": "يجلب الزبائن علبهم وأكياسهم الخاصة.",
        "example_uk": "Покупці приносять власні ємності та торбинки."
    },
    "kundinnen": {
        "de": "die Kundin", "displayDe": "Kundin", "article": "die", "plural": "die Kundinnen", "pos": "noun", "level": "A1",
        "tr": "kadın müşteriler", "en": "female customers", "ar": "عميلات / زبونات", "uk": "покупчині / клієнтки",
        "example_de": "Kundinnen und Kunden schätzen die persönliche Beratung im Hofladen.",
        "example_tr": "Müşteriler çiftlik mağazasındaki kişisel danışmanlığı takdir ederler.",
        "example_en": "Customers appreciate personal advice in the farm shop.",
        "example_ar": "يقدّر الزبائن والزبونات المشورة الشخصية في متجر المزرعة.",
        "example_uk": "Клієнти цінують особисту консультацію у фермерській крамниці."
    },
    "landwirtschaft": {
        "de": "die Landwirtschaft", "displayDe": "Landwirtschaft", "article": "die", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "tarım, ziraat", "en": "agriculture, farming", "ar": "الزراعة والفلاحة", "uk": "сільське господарство",
        "example_de": "Ökologische Landwirtschaft schützt den Boden und das Grundwasser.",
        "example_tr": "Ekolojik tarım toprağı ve yer altı sularını korur.",
        "example_en": "Ecological farming protects the soil and groundwater.",
        "example_ar": "تحمي الزراعة البيئية التربة والمياه الجوفية.",
        "example_uk": "Екологічне сільське господарство захищає ґрунт і підземні води."
    },
    "lange": {
        "de": "lang", "displayDe": "lang", "article": "", "plural": "", "pos": "adj", "level": "A1",
        "tr": "uzun", "en": "long", "ar": "طويل", "uk": "довгий",
        "example_de": "Lange Transportwege belasten das weltweite Klima.",
        "example_tr": "Uzun nakliye mesafeleri küresel iklime zarar verir.",
        "example_en": "Long transport routes strain the global climate.",
        "example_ar": "تثقل مسارات النقل الطويلة كاهل المناخ العالمي.",
        "example_uk": "Довгі шляхи транспортування перевантажують клімат планети."
    },
    "lebensmittel": {
        "de": "das Lebensmittel", "displayDe": "Lebensmittel", "article": "das", "plural": "die Lebensmittel", "pos": "noun", "level": "A1",
        "tr": "gıda maddesi, yiyecek", "en": "food, groceries", "ar": "مواد غذائية / أطعمة", "uk": "продукти харчування",
        "example_de": "Frische Lebensmittel kaufen viele Menschen auf dem Wochenmarkt.",
        "example_tr": "Taze gıda maddelerini birçok insan semt pazarından alır.",
        "example_en": "Many people buy fresh groceries at the weekly market.",
        "example_ar": "يشتري الكثير من الناس الأغذية الطازجة من السوق الأسبوعي.",
        "example_uk": "Багато людей купують свіжі продукти харчування на ярмарку."
    },
    "leistet": {
        "de": "leisten", "displayDe": "leisten", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "sağlamak, yerine getirmek (einen Beitrag leisten = katkıda bulunmak)", "en": "provides, contributes (leistet einen Beitrag)", "ar": "يقدم / ينجز (يقدم مساهمة)", "uk": "робить / надає (робить внесок)",
        "example_de": "Jeder Haushalt leistet einen Beitrag zum Klimaschutz.",
        "example_tr": "Her hane iklim korumaya bir katkı sağlar.",
        "example_en": "Every household makes a contribution to climate protection.",
        "example_ar": "تقدم كل أسرة مساهمة في حماية المناخ.",
        "example_uk": "Кожне домогосподарство робить свій внесок у захист клімату."
    },
    "lernen": {
        "de": "lernen", "displayDe": "lernen", "article": "", "plural": "", "pos": "verb", "level": "A1",
        "tr": "öğrenmek", "en": "to learn, study", "ar": "يتعلم", "uk": "вчитися / вивчати",
        "example_de": "Auszubildende lernen Theorie in der Berufsschule.",
        "example_tr": "Stajyerler teoriyi meslek okulunda öğrenirler.",
        "example_en": "Trainees learn theory at vocational school.",
        "example_ar": "يتعلم المتدربون النظريات في المدرسة المهنية.",
        "example_uk": "Учні вивчають теорію в професійній школі."
    },
    "lernenden": {
        "de": "der Lernende", "displayDe": "Lernende", "article": "der", "plural": "die Lernenden", "pos": "noun", "level": "B1",
        "tr": "öğrenen kişiler, stajyerler (çoğul)", "en": "learners, trainees", "ar": "المتعلمون / المتدربون", "uk": "учні / ті, хто навчається",
        "example_de": "Die Lernenden erhalten Unterstützung von erfahrenen Meistern.",
        "example_tr": "Öğrenenler deneyimli ustalardan destek alırlar.",
        "example_en": "Learners receive support from experienced master craftsmen.",
        "example_ar": "يتلقى المتعلمون الدعم من المعلمين الحرفيين ذوي الخبرة.",
        "example_uk": "Учні отримують підтримку від досвідчених майстрів."
    },
    "lokale": {
        "de": "lokal", "displayDe": "lokal", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "yerel, mahalli", "en": "local", "ar": "محلي", "uk": "місцевий",
        "example_de": "Lokale Betriebe stärken die Wirtschaft in der Region.",
        "example_tr": "Yerel işletmeler bölgedeki ekonomiyi güçlendirir.",
        "example_en": "Local businesses strengthen the economy in the region.",
        "example_ar": "تقوي الشركات المحلية الاقتصاد في المنطقة.",
        "example_uk": "Місцеві підприємства зміцнюють економіку регіону."
    },
    "lose": {
        "de": "lose", "displayDe": "lose", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "dökme, ambalajsız, açıkta satılan", "en": "loose, unpackaged", "ar": "سائب / بدون تغليف", "uk": "насипом / розсипний / без упаковки",
        "example_de": "Im Laden kann man Reis und Nudeln lose kaufen.",
        "example_tr": "Dükkanda pirinç ve makarna dökme olarak satın alınabilir.",
        "example_en": "In the store, one can buy rice and pasta in loose form.",
        "example_ar": "في المتجر يمكن شراء الأرز والمعكرونة بدون تغليف.",
        "example_uk": "У крамниці можна купувати рис і макарони на вагу."
    },
    "läden": {
        "de": "der Laden", "displayDe": "Laden", "article": "der", "plural": "die Läden", "pos": "noun", "level": "A1",
        "tr": "dükkanlar, mağazalar", "en": "shops, stores", "ar": "متاجر / محلات", "uk": "крамниці / магазини",
        "example_de": "Unverpackt-Läden verzichten ganz auf Einwegverpackungen.",
        "example_tr": "Ambalajsız dükkanlar tek kullanımlık ambalajlardan tamamen kaçınır.",
        "example_en": "Zero-waste shops completely dispense with single-use packaging.",
        "example_ar": "تستغني المتاجر الخالية من التغليف تماماً عن العبوات أحادية الاستخدام.",
        "example_uk": "Магазини без упаковки повністю відмовляються від одноразової тари."
    },
    "ländern": {
        "de": "das Land", "displayDe": "Land", "article": "das", "plural": "die Länder", "pos": "noun", "level": "A1",
        "tr": "ülkeler (Dativ Plural: aus fernen Ländern)", "en": "countries (dative plural)", "ar": "بلدان / دول (من بلدان بعيدة)", "uk": "країни (з далеких країн)",
        "example_de": "Waren aus anderen Ländern müssen oft per Flugzeug transportiert werden.",
        "example_tr": "Başka ülkelerden gelen malların genellikle uçakla taşınması gerekir.",
        "example_en": "Goods from other countries often need to be transported by plane.",
        "example_ar": "غالباً ما يُنقل البضائع من دول أخرى بالطائرات.",
        "example_uk": "Товари з інших країн часто доводиться перевозити літаками."
    },
    "mehrwegflaschen": {
        "de": "die Mehrwegflasche", "displayDe": "Mehrwegflasche", "article": "die", "plural": "die Mehrwegflaschen", "pos": "noun", "level": "B1",
        "tr": "depozitolu / yeniden doldurulabilir şişeler", "en": "reusable returnable bottles", "ar": "قوارير قابلة لإعادة التعبئة", "uk": "пляшки багаторазового використання",
        "example_de": "Mehrwegflaschen werden bis zu 50 Mal gereinigt und neu befüllt.",
        "example_tr": "Yeniden doldurulabilir şişeler 50 defaya kadar temizlenip tekrar doldurulur.",
        "example_en": "Returnable bottles are cleaned and refilled up to 50 times.",
        "example_ar": "تُنظف القوارير القابلة لإعادة الاستخدام وتُعبأ حتى 50 مرة.",
        "example_uk": "Пляшки багаторазового використання очищують і наповнюють знову до 50 разів."
    },
    "meister": {
        "de": "der Meister", "displayDe": "Meister", "article": "der", "plural": "die Meister", "pos": "noun", "level": "B1",
        "tr": "usta, usta öğretici", "en": "master craftsman", "ar": "معلم مهني / حرفي معتمد (Meister)", "uk": "майстер / майстер-викладач",
        "example_de": "Mit dem Meisterbrief kann man einen eigenen Handwerksbetrieb eröffnen.",
        "example_tr": "Ustalık belgesi ile kişi kendi zanaat işletmesini açabilir.",
        "example_en": "With the master craftsman certificate, one can open one's own craft business.",
        "example_ar": "مع شهادة المعلم الحرفي يمكن للشخص افتتاح ورشته الخاصة.",
        "example_uk": "З дипломом майстра можна відкрити власну ремісничу майстерню."
    },
    "meisterin": {
        "de": "die Meisterin", "displayDe": "Meisterin", "article": "die", "plural": "die Meisterinnen", "pos": "noun", "level": "B1",
        "tr": "kadın usta, kadın usta öğretici", "en": "female master craftswoman", "ar": "معلمة مهنية معتمدة", "uk": "майстриня",
        "example_de": "Sie hat die Prüfung zur Meisterin im Bäckerhandwerk bestanden.",
        "example_tr": "Fırıncılık zanaatında kadın usta sınavını başarıyla geçti.",
        "example_en": "She passed the master examination in the bakery trade.",
        "example_ar": "اجتازت امتحان المعلم الحرفي في مهنة الخبازة.",
        "example_uk": "Вона склала іспит на кваліфікацію майстрині пекарської справи."
    },
    "mitbringen": {
        "de": "mitbringen", "displayDe": "mitbringen", "article": "", "plural": "", "pos": "verb", "level": "A1",
        "tr": "yanında getirmek", "en": "to bring along", "ar": "يجلب معه / يحضر", "uk": "приносити з собою",
        "example_de": "Zum Einkaufen sollte man wiederverwendbare Taschen mitbringen.",
        "example_tr": "Alışverişe giderken tekrar kullanılabilir çantalar getirilmelidir.",
        "example_en": "One should bring along reusable bags for shopping.",
        "example_ar": "ينبغي للمرء إحضار أكياس قابلة لإعادة الاستخدام للتسوق.",
        "example_uk": "На закупи слід брати з собою багаторазові торбинки."
    },
    "modell": {
        "de": "das Modell", "displayDe": "Modell", "article": "das", "plural": "die Modelle", "pos": "noun", "level": "A2",
        "tr": "model, örnek sistem", "en": "model", "ar": "نموذج", "uk": "модель / зразок",
        "example_de": "Das deutsche Pfandsystem gilt weltweit als erfolgreiches Modell.",
        "example_tr": "Alman depozito sistemi dünya çapında başarılı bir model olarak kabul edilir.",
        "example_en": "The German deposit system is considered a successful model worldwide.",
        "example_ar": "يُعتبر نظام الرهن الألماني نموذجاً ناجحاً على مستوى العالم.",
        "example_uk": "Німецька система застави вважається успішною моделлю в усьому світі."
    },
    "monatliche": {
        "de": "monatlich", "displayDe": "monatlich", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "aylık, her ay yapılan", "en": "monthly", "ar": "شهري", "uk": "щомісячний",
        "example_de": "Die monatliche Vergütung sichert den Lebensunterhalt der Azubis.",
        "example_tr": "Aylık ödenek stajyerlerin geçimini güvenceye alır.",
        "example_en": "The monthly allowance secures the livelihood of apprentices.",
        "example_ar": "تضمن المكافأة الشهرية تأمين معيشة المتدربين.",
        "example_uk": "Щомісячна оплата забезпечує прожиття учнів."
    },
    "motivierten": {
        "de": "motiviert", "displayDe": "motiviert", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "motive, istekli, hevesli", "en": "motivated", "ar": "متحفّز / ذو دافعية عالية", "uk": "мотивований / зацікавлений",
        "example_de": "Betriebe freuen sich über motivierte Bewerber.",
        "example_tr": "İşletmeler istekli başvuru sahiplerinden memnuniyet duyarlar.",
        "example_en": "Companies are pleased about motivated applicants.",
        "example_ar": "تسعد الشركات بالمتقدمين ذوي الحافز العالي.",
        "example_uk": "Підприємства раді мотивованим кандидатам."
    },
    "müsli": {
        "de": "das Müsli", "displayDe": "Müsli", "article": "das", "plural": "die Müslis", "pos": "noun", "level": "A1",
        "tr": "müsli, tahıl gevreği", "en": "muesli, cereal", "ar": "موسلي / حبوب الإفطار", "uk": "мюслі",
        "example_de": "Zum Frühstück esse ich am liebsten Müsli mit frischem Obst.",
        "example_tr": "Kahvaltıda en çok taze meyveli müsli yemeyi severim.",
        "example_en": "For breakfast, I prefer to eat muesli with fresh fruit.",
        "example_ar": "أفضل تناول الموسلي مع الفواكه الطازجة على الإفطار.",
        "example_uk": "На сніданок я найбільше люблю їсти мюслі зі свіжими фруктами."
    },
    "nachhaltigkeit": {
        "de": "die Nachhaltigkeit", "displayDe": "Nachhaltigkeit", "article": "die", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "sürdürülebilirlik", "en": "sustainability", "ar": "الاستدامة", "uk": "сталий розвиток / екологічність",
        "example_de": "Nachhaltigkeit im Alltag beginnt mit der Vermeidung von Müll.",
        "example_tr": "Günlük yaşamda sürdürülebilirlik çöpü önlemekle başlar.",
        "example_en": "Sustainability in everyday life begins with avoiding waste.",
        "example_ar": "تبدأ الاستدامة في الحياة اليومية بتجنب إنتاج النفايات.",
        "example_uk": "Екологічність у побуті починається з уникнення сміття."
    },
    "nudeln": {
        "de": "die Nudel", "displayDe": "Nudel", "article": "die", "plural": "die Nudeln", "pos": "noun", "level": "A1",
        "tr": "makarna", "en": "noodles, pasta", "ar": "معكرونة", "uk": "макарони / локшина",
        "example_de": "Im Unverpackt-Laden kann man Nudeln in eigene Dosen füllen.",
        "example_tr": "Ambalajsız dükkanda makarna kendi kaplarınıza doldurulabilir.",
        "example_en": "In the zero-waste store, one can fill pasta into one's own containers.",
        "example_ar": "في المتجر الخالي من التغليف، يمكن تعبئة المعكرونة في علب خاصة.",
        "example_uk": "У магазині без упаковки макарони можна насипати у власні ємності."
    },
    "obst": {
        "de": "das Obst", "displayDe": "Obst", "article": "das", "plural": "-", "pos": "noun", "level": "A1",
        "tr": "meyve", "en": "fruit", "ar": "فواكه / فاكهة", "uk": "фрукти",
        "example_de": "Regionales Obst wie Äpfel und Birnen hat kurze Transportwege.",
        "example_tr": "Elma ve armut gibi yerel meyvelerin taşıma yolları kısadır.",
        "example_en": "Regional fruit such as apples and pears has short transport routes.",
        "example_ar": "تتميز الفواكه المحلية مثل التفاح والإجاص بمسارات نقل قصيرة.",
        "example_uk": "Місцеві фрукти, такі як яблука та груші, мають короткі шляхи транспортування."
    },
    "offen": {
        "de": "offen", "displayDe": "offen", "article": "", "plural": "", "pos": "adj", "level": "A1",
        "tr": "açık; erişilebilir (stehen offen = önü açık olmak)", "en": "open; available", "ar": "مفتوح / متاح", "uk": "відкритий",
        "example_de": "Nach dem Abschluss stehen Absolventen viele Wege offen.",
        "example_tr": "Mezuniyet sonrasında mezunların önünde birçok yol açıktır.",
        "example_en": "After graduation, many paths stand open to graduates.",
        "example_ar": "بعد التخرج تكون العديد من الأبواب والمسارات مفتوحة أمام الخريجين.",
        "example_uk": "Після закінчення перед випускниками відкрито багато шляхів."
    },
    "oft": {
        "de": "oft", "displayDe": "oft", "article": "", "plural": "", "pos": "adv", "level": "A1",
        "tr": "sık sık, çoğu zaman", "en": "often, frequently", "ar": "غالباً / كثيراً ما", "uk": "часто",
        "example_de": "Ausbildung führt oft direkt zu einem festen Arbeitsplatz.",
        "example_tr": "Mesleki eğitim çoğu zaman doğrudan kalıcı bir işe götürür.",
        "example_en": "Apprenticeship often leads directly to a permanent job.",
        "example_ar": "غالبًا ما يقود التدريب المهني مباشرة إلى وظيفة دائمة.",
        "example_uk": "Навчання часто веде прямо до постійного робочого місця."
    },
    "orten": {
        "de": "der Ort", "displayDe": "Ort", "article": "der", "plural": "die Orte", "pos": "noun", "level": "A1",
        "tr": "yerler, mekanlar (Dativ Plural: an zwei Orten)", "en": "places, locations (dative plural)", "ar": "أماكن (في مكانين)", "uk": "місця (у двох місцях)",
        "example_de": "Man lernt gleichzeitig an zwei verschiedenen Orten.",
        "example_tr": "Aynı anda iki farklı yerde eğitim alınır.",
        "example_en": "One learns simultaneously at two different locations.",
        "example_ar": "يتعلم المتدرب في نفس الوقت في مكانين مختلفين.",
        "example_uk": "Навчання відбувається одночасно у двох різних місцях."
    },
    "pfandautomaten": {
        "de": "der Pfandautomat", "displayDe": "Pfandautomat", "article": "der", "plural": "die Pfandautomaten", "pos": "noun", "level": "A2",
        "tr": "depozito iade otomatı (Dativ: am Pfandautomaten)", "en": "bottle deposit return machine", "ar": "آلة استرجاع القوارير والرهن", "uk": "автомат для прийому тари / застави",
        "example_de": "Am Pfandautomaten im Supermarkt gibt man leere Flaschen zurück.",
        "example_tr": "Süpermarketteki depozito otomatında boş şişeler geri verilir.",
        "example_en": "At the deposit machine in the supermarket, one returns empty bottles.",
        "example_ar": "في آلة الرهن بالسوبرماركت، يُرجع الزبون الزجاجات الفارغة.",
        "example_uk": "В автоматі для тари в супермаркеті здають порожні пляшки."
    },
    "pfandbetrag": {
        "de": "der Pfandbetrag", "displayDe": "Pfandbetrag", "article": "der", "plural": "die Pfandbeträge", "pos": "noun", "level": "B1",
        "tr": "depozito tutarı, depozito ücreti", "en": "deposit amount", "ar": "مبلغ الرهن المسترد", "uk": "сума застави за тару",
        "example_de": "Der Pfandbetrag wird beim Kauf an der Kasse berechnet.",
        "example_tr": "Depozito tutarı satın alırken kasada hesaplanır.",
        "example_en": "The deposit amount is charged at the checkout upon purchase.",
        "example_ar": "يُحسب مبلغ الرهن عند الدفع عند الصندوق.",
        "example_uk": "Сума застави нараховується на касі під час покупки."
    },
    "pfandsystem": {
        "de": "das Pfandsystem", "displayDe": "Pfandsystem", "article": "das", "plural": "die Pfandsysteme", "pos": "noun", "level": "B1",
        "tr": "depozito iade sistemi", "en": "deposit return system", "ar": "نظام استرجاع القوارير (Pfand)", "uk": "система застави за пляшки (Pfand)",
        "example_de": "Das deutsche Pfandsystem schützt Umwelt und Ressourcen.",
        "example_tr": "Alman depozito sistemi çevreyi ve doğal kaynakları korur.",
        "example_en": "The German deposit system protects the environment and resources.",
        "example_ar": "يحمي نظام الرهن الألماني البيئة والموارد الطبيعية.",
        "example_uk": "Німецька система застави захищає довкілля та ресурси."
    },
    "plastikverpackungen": {
        "de": "die Plastikverpackung", "displayDe": "Plastikverpackung", "article": "die", "plural": "die Plastikverpackungen", "pos": "noun", "level": "B1",
        "tr": "plastik ambalajlar", "en": "plastic packaging", "ar": "تغليف بلاستيكي / عبوات بلاستيكية", "uk": "пластикова упаковка",
        "example_de": "Viele Geschäfte verzichten heute auf unnötige Plastikverpackungen.",
        "example_tr": "Birçok mağaza günümüzde gereksiz plastik ambalajlardan vazgeçiyor.",
        "example_en": "Many shops nowadays do without unnecessary plastic packaging.",
        "example_ar": "تستغني الكثير من المتاجر اليوم عن التغليف البلاستيكي غير الضروري.",
        "example_uk": "Багато магазинів сьогодні відмовляються від непотрібної пластикової упаковки."
    },
    "praktische": {
        "de": "praktisch", "displayDe": "praktisch", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "pratik, uygulamalı", "en": "practical", "ar": "عملي / تطبيقي", "uk": "практичний",
        "example_de": "Praktische Erfahrung im Betrieb ist Gold wert.",
        "example_tr": "İşletmedeki pratik tecrübe altın değerindedir.",
        "example_en": "Practical experience in the company is worth its weight in gold.",
        "example_ar": "الخبرة العملية داخل الشركة لا تُقدر بثمن.",
        "example_uk": "Практичний досвід на підприємстві на вагу золота."
    },
    "praktischen": {
        "de": "praktisch", "displayDe": "praktisch", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "pratik, uygulamalı (Dativ / Akkusativ)", "en": "practical", "ar": "عملي", "uk": "практичний",
        "example_de": "So leistet jeder Haushalt einen praktischen Beitrag.",
        "example_tr": "Böylece her hane pratik bir katkı sağlar.",
        "example_en": "Thus every household makes a practical contribution.",
        "example_ar": "وهكذا تقدم كل أسرة مساهمة عملية.",
        "example_uk": "Таким чином кожне домогосподарство робить практичний внесок."
    },
    "praxis": {
        "de": "die Praxis", "displayDe": "Praxis", "article": "die", "plural": "-", "pos": "noun", "level": "A2",
        "tr": "pratik, uygulama (iş hayatı uygulaması)", "en": "practice, practical application", "ar": "ممارسة / تطبيق عملي", "uk": "практика",
        "example_de": "Im Betrieb wird die Praxis vertieft.",
        "example_tr": "İşletmede uygulama derinleştirilir.",
        "example_en": "In the company, practice is deepened.",
        "example_ar": "يتم تعميق الممارسة والتطبيق في بيئة العمل.",
        "example_uk": "На підприємстві практика поглиблюється."
    },
    "produkten": {
        "de": "das Produkt", "displayDe": "Produkt", "article": "das", "plural": "die Produkte", "pos": "noun", "level": "A2",
        "tr": "ürünler (Dativ Plural: zu Produkten)", "en": "products (dative plural)", "ar": "منتجات (بالمنتجات)", "uk": "продукти / товари",
        "example_de": "Immer mehr Verbraucher greifen zu regionalen Produkten.",
        "example_tr": "Giderek daha fazla tüketici yerel ürünlere yöneliyor.",
        "example_en": "More and more consumers reach for regional products.",
        "example_ar": "يقبل المزيد من المستهلكين على شراء المنتجات الإقليمية.",
        "example_uk": "Усе більше споживачів обирають місцеві продукти."
    },
    "regionalen": {
        "de": "regional", "displayDe": "regional", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "bölgesel, yerel", "en": "regional, local", "ar": "محلي / إقليمي", "uk": "регіональний / місцевий",
        "example_de": "Regionale Lebensmittel schonen die Umwelt.",
        "example_tr": "Bölgesel gıdalar çevreyi korur.",
        "example_en": "Regional food protects the environment.",
        "example_ar": "تحمي الأغذية المحلية البيئة والمناخ.",
        "example_uk": "Регіональні продукти захищають довкілля."
    },
    "reis": {
        "de": "der Reis", "displayDe": "Reis", "article": "der", "plural": "-", "pos": "noun", "level": "A1",
        "tr": "pirinç (tahıl / gıda)", "en": "rice", "ar": "أرز", "uk": "рис",
        "example_de": "Reis und Hülsenfrüchte kann man lose kaufen.",
        "example_tr": "Pirinç ve bakliyat dökme olarak satın alınabilir.",
        "example_en": "Rice and pulses can be bought unpackaged.",
        "example_ar": "يمكن شراء الأرز والبقوليات بدون تغليف.",
        "example_uk": "Рис і бобові можна купувати без упаковки."
    },
    "ressourcenschonung": {
        "de": "die Ressourcenschonung", "displayDe": "Ressourcenschonung", "article": "die", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "doğal kaynakların korunması, kaynak tasarrufu", "en": "conservation of resources", "ar": "الحفاظ على الموارد وتوفيرها", "uk": "збереження природних ресурсів",
        "example_de": "Wiederverwendung von Glas ist ein wichtiger Schritt zur Ressourcenschonung.",
        "example_tr": "Camın tekrar kullanımı, kaynakları korumada önemli bir adımdır.",
        "example_en": "Reusing glass is an important step towards resource conservation.",
        "example_ar": "تعد إعادة استخدام الزجاج خطوة هامة نحو الحفاظ على الموارد.",
        "example_uk": "Повторне використання скла — важливий крок до збереження ресурсів."
    },
    "ruf": {
        "de": "der Ruf", "displayDe": "Ruf", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "itibar, ün, şöhret", "en": "reputation, renown", "ar": "سمعة / صيت", "uk": "репутація / слава",
        "example_de": "Deutsche Facharbeiter genießen weltweit einen guten Ruf.",
        "example_tr": "Alman uzman işçiler dünya çapında iyi bir üne sahiptir.",
        "example_en": "German skilled workers enjoy a good reputation worldwide.",
        "example_ar": "يتمتع العمال المهرة الألمان بسمعة طيبة على مستوى العالم.",
        "example_uk": "Німецькі фахівці користуються гарною репутацією у світі."
    },
    "rückgabe": {
        "de": "die Rückgabe", "displayDe": "Rückgabe", "article": "die", "plural": "die Rückgaben", "pos": "noun", "level": "A2",
        "tr": "iade etme, geri verme", "en": "return, returning", "ar": "إرجاع / إعادة", "uk": "повернення",
        "example_de": "Bei der Rückgabe der Flasche erhält man das Pfand zurück.",
        "example_tr": "Şişeyi geri verirken depozito geri alınır.",
        "example_en": "Upon returning the bottle, one receives the deposit back.",
        "example_ar": "عند إعادة القارورة، يسترجع المرء مبلغ الرهن كاملاً.",
        "example_uk": "При поверненні пляшки отримують назад заставу."
    },
    "saisonalen": {
        "de": "saisonal", "displayDe": "saisonal", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "mevsimlik, mevsime uygun", "en": "seasonal", "ar": "موسمي", "uk": "сезонний",
        "example_de": "Saisonales Obst aus der Region schmeckt am besten.",
        "example_tr": "Bölgenin mevsimlik meyvesi en lezzetlisidir.",
        "example_en": "Seasonal fruit from the region tastes the best.",
        "example_ar": "الفواكه الموسمية من المنطقة هي الألذ طعماً.",
        "example_uk": "Сезонні фрукти з регіону смакують найкраще."
    },
    "sammeln": {
        "de": "sammeln", "displayDe": "sammeln", "article": "", "plural": "", "pos": "verb", "level": "A1",
        "tr": "toplamak, biriktirmek; edinmek (Erfahrung sammeln = deneyim kazanmak)", "en": "to collect; gain (sammeln Erfahrung)", "ar": "يجمع / يكتسب (خبرة)", "uk": "збирати / здобувати (досвід)",
        "example_de": "Im Ausbildungsbetrieb sammeln Jugendliche wertvolle Praxiserfahrung.",
        "example_tr": "Eğitim işletmesinde gençler değerli uygulama deneyimi kazanırlar.",
        "example_en": "In the training company, adolescents gain valuable practical experience.",
        "example_ar": "يكتسب الشباب خبرة عملية قيّمة في شركة التدريب.",
        "example_uk": "На підприємстві молодь здобуває цінний практичний досвід."
    },
    "schritt": {
        "de": "der Schritt", "displayDe": "Schritt", "article": "der", "plural": "die Schritte", "pos": "noun", "level": "A2",
        "tr": "adım, aşama", "en": "step", "ar": "خطوة", "uk": "крок",
        "example_de": "Müllvermeidung ist ein wichtiger Schritt für den Umweltschutz.",
        "example_tr": "Atık oluşumunu önleme, çevre koruma için önemli bir adımdır.",
        "example_en": "Waste prevention is an important step for environmental protection.",
        "example_ar": "الحد من النفايات خطوة مهمة لحماية البيئة.",
        "example_uk": "Уникнення сміття — важливий крок для захисту довкілля."
    },
    "schul": {
        "de": "die Schule", "displayDe": "Schul-", "article": "die", "plural": "-", "pos": "noun", "level": "A1",
        "tr": "okul (Schul- oder Studienangebote = okul veya üniversite programları)", "en": "school (in compounds)", "ar": "مدرسي (في الكلمات المركبة)", "uk": "шкільний (у складних словах)",
        "example_de": "Schul- und Ausbildungsangebote bieten vielfältige Wege.",
        "example_tr": "Okul ve meslek eğitimi programları çok çeşitli yollar sunar.",
        "example_en": "School and training offerings provide diverse pathways.",
        "example_ar": "توفر العروض المدرسية والتدريبية مسارات متعددة.",
        "example_uk": "Шкільні та професійні пропозиції відкривають різноманітні шляхи."
    },
    "schule": {
        "de": "die Schule", "displayDe": "Schule", "article": "die", "plural": "die Schulen", "pos": "noun", "level": "A1",
        "tr": "okul", "en": "school", "ar": "مدرسة", "uk": "школа",
        "example_de": "In der Schule wird die nötige Theorie vermittelt.",
        "example_tr": "Okulda gerekli teori aktarılır.",
        "example_en": "In school, the necessary theory is taught.",
        "example_ar": "يتم تدريس النظريات اللازمة في المدرسة.",
        "example_uk": "У школі викладається необхідна теорія."
    },
    "senkt": {
        "de": "senken", "displayDe": "senken", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "düşürmek, azaltmak (senkt den Ausstoß)", "en": "lowers, reduces", "ar": "يخفض / يقلل", "uk": "знижує / зменшує",
        "example_de": "Kurzer Transport senkt den Ausstoß von Treibhausgasen.",
        "example_tr": "Kısa nakliye mesafesi sera gazı salınımını düşürür.",
        "example_en": "Short transportation lowers greenhouse gas emissions.",
        "example_ar": "النقل القصير يخفض انبعاث الغازات الدفيئة.",
        "example_uk": "Коротке транспортування знижує викиди парникових газів."
    },
    "so": {
        "de": "so", "displayDe": "so", "article": "", "plural": "", "pos": "adv", "level": "A1",
        "tr": "böylece, bu şekilde", "en": "thus, in this way", "ar": "هكذا / بالتالي", "uk": "так / таким чином",
        "example_de": "So kann jeder Mensch die Umwelt schützen.",
        "example_tr": "Böylece her insan çevreyi koruyabilir.",
        "example_en": "In this way, every person can protect the environment.",
        "example_ar": "بهذه الطريقة يمكن لكل إنسان حماية البيئة.",
        "example_uk": "Таким чином кожна людина може захищати довкілля."
    },
    "sorgt": {
        "de": "sorgen", "displayDe": "sorgen", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "sağlamak, yol açmak (sorgt dafür dass)", "en": "ensures, takes care of", "ar": "يضمن / يحرص على", "uk": "дбає / забезпечує",
        "example_de": "Das Gesetz sorgt für faire Arbeitszeiten.",
        "example_tr": "Yasa adil çalışma saatleri sağlar.",
        "example_en": "The law ensures fair working hours.",
        "example_ar": "يضمن القانون أوقات عمل عادلة.",
        "example_uk": "Закон забезпечує справедливі робочі години."
    },
    "spürbaren": {
        "de": "spürbar", "displayDe": "spürbar", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "hissedilir, belirgin", "en": "noticeable, perceptible", "ar": "ملموس / ملحوظ", "uk": "відчутний / помітний",
        "example_de": "Wegen des spürbaren Fachkräftemangels gibt es viele freie Stellen.",
        "example_tr": "Hissedilir eleman açığı nedeniyle çok sayıda boş pozisyon vardır.",
        "example_en": "Due to the noticeable shortage of skilled workers, there are many vacancies.",
        "example_ar": "بسبب النقص الملموس في العمالة الماهرة توجد وظائف شاغرة كثيرة.",
        "example_uk": "Через відчутний дефіцит кадрів є багато вакансій."
    },
    "statt": {
        "de": "statt", "displayDe": "statt", "article": "", "plural": "", "pos": "prep", "level": "B1",
        "tr": "-in yerine (statt + Genitiv)", "en": "instead of (+ genitive)", "ar": "بدلاً من", "uk": "замість",
        "example_de": "Statt mit dem Auto fährt er mit dem Zug.",
        "example_tr": "Araba yerine trenle gidiyor.",
        "example_en": "Instead of by car, he travels by train.",
        "example_ar": "يسافر بالقطار بدلاً من السيارة.",
        "example_uk": "Замість авто він їде потягом."
    },
    "stoffbeutel": {
        "de": "der Stoffbeutel", "displayDe": "Stoffbeutel", "article": "der", "plural": "die Stoffbeutel", "pos": "noun", "level": "A2",
        "tr": "bez torba, kumaş çanta", "en": "cloth bag, tote bag", "ar": "كيس قماشي", "uk": "тканинна торбинка / еко-сумка",
        "example_de": "Mit einem Stoffbeutel vermeidet man Plastikmüll beim Einkaufen.",
        "example_tr": "Bez torba ile alışverişte plastik çöp oluşumu önlenir.",
        "example_en": "With a cloth bag, one avoids plastic waste during shopping.",
        "example_ar": "باستخدام الكيس القماشي يتجنب المرء النفايات البلاستيكية.",
        "example_uk": "З тканинною торбинкою уникають пластикового сміття."
    },
    "studienangeboten": {
        "de": "das Studienangebot", "displayDe": "Studienangebot", "article": "das", "plural": "die Studienangebote", "pos": "noun", "level": "B1",
        "tr": "üniversite / lisans programları (Dativ Plural)", "en": "study programs, university degree offerings", "ar": "برامج دراسية جامعية", "uk": "освітні програми / пропозиції навчання",
        "example_de": "Neben Studienangeboten gibt es viele praxisnahe Ausbildungen.",
        "example_tr": "Üniversite programlarının yanında birçok uygulamalı meslek eğitimi vardır.",
        "example_en": "Alongside university programs, there are many practical apprenticeships.",
        "example_ar": "إلى جانب البرامج الجامعية، توجد العديد من خيارات التدريب العملي.",
        "example_uk": "Поряд з університетськими програмами є багато практичних професійних курсів."
    },
    "studium": {
        "de": "das Studium", "displayDe": "Studium", "article": "das", "plural": "die Studien", "pos": "noun", "level": "A2",
        "tr": "yükseköğrenim, üniversite eğitimi", "en": "university studies, degree course", "ar": "دراسة جامعية", "uk": "навчання в університеті",
        "example_de": "Nach der Ausbildung kann man noch ein Studium beginnen.",
        "example_tr": "Eğitimden sonra kişi yine de bir üniversite eğitimine başlayabilir.",
        "example_en": "After the apprenticeship, one can still begin university studies.",
        "example_ar": "بعد انتهاء التدريب المهني يمكن للمرء بدء دراسة جامعية.",
        "example_uk": "Після професійного навчання можна розпочати навчання у виші."
    },
    "suchen": {
        "de": "suchen", "displayDe": "suchen", "article": "", "plural": "", "pos": "verb", "level": "A1",
        "tr": "aramak", "en": "to search, look for", "ar": "يبحث عن", "uk": "шукати",
        "example_de": "Unternehmen suchen motivierte Mitarbeiter.",
        "example_tr": "Şirketler istekli çalışanlar aramaktadır.",
        "example_en": "Companies are looking for motivated employees.",
        "example_ar": "تبحث الشركات عن موظفين لديهم الحافز للعمل.",
        "example_uk": "Компанії шукають мотивованих співробітників."
    },
    "supermärkte": {
        "de": "der Supermarkt", "displayDe": "Supermarkt", "article": "der", "plural": "die Supermärkte", "pos": "noun", "level": "A1",
        "tr": "süpermarketler", "en": "supermarkets", "ar": "متاجر كبرى / سوبرماركت", "uk": "супермаркети",
        "example_de": "Supermärkte bieten umweltfreundliche Alternativen an.",
        "example_tr": "Süpermarketler çevre dostu alternatifler sunmaktadır.",
        "example_en": "Supermarkets offer environmentally friendly alternatives.",
        "example_ar": "تقدم المتاجر الكبرى بدائل صديقة للبيئة.",
        "example_uk": "Супермаркети пропонують екологічні альтернативи."
    },
    "system": {
        "de": "das System", "displayDe": "System", "article": "das", "plural": "die Systeme", "pos": "noun", "level": "A2",
        "tr": "sistem, düzen", "en": "system", "ar": "نظام", "uk": "система",
        "example_de": "Das deutsche System der dualen Ausbildung ist weltweit anerkannt.",
        "example_tr": "Alman ikili mesleki eğitim sistemi dünya çapında tanınmaktadır.",
        "example_en": "The German system of dual training is recognized worldwide.",
        "example_ar": "يحظى نظام التدريب المزدوج الألماني بالاعتراف العالمي.",
        "example_uk": "Німецька система дуальної освіти визнана у всьому світі."
    },
    "technischen": {
        "de": "technisch", "displayDe": "technisch", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "teknik", "en": "technical", "ar": "تقني / فني", "uk": "технічний",
        "example_de": "In technischen Berufen gibt es sehr gute Karrierechancen.",
        "example_tr": "Teknik mesleklerde çok iyi kariyer fırsatları vardır.",
        "example_en": "In technical professions, there are very good career opportunities.",
        "example_ar": "تتوفر فرص وظيفية ممتازة في المهن التقنية.",
        "example_uk": "У технічних професіях є чудові можливості для кар'єри."
    },
    "theoretisches": {
        "de": "theoretisch", "displayDe": "theoretisch", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "teorik, kuramsal", "en": "theoretical", "ar": "نظري", "uk": "теоретичний",
        "example_de": "Theoretisches Wissen wird in der Berufsschule geprüft.",
        "example_tr": "Teorik bilgi meslek okulunda test edilir.",
        "example_en": "Theoretical knowledge is tested at vocational school.",
        "example_ar": "يتم اختبار المعرفة النظرية في المدرسة المهنية.",
        "example_uk": "Теоретичні знання перевіряються в професійній школі."
    },
    "theorie": {
        "de": "die Theorie", "displayDe": "Theorie", "article": "die", "plural": "die Theorien", "pos": "noun", "level": "B1",
        "tr": "teori, kuram", "en": "theory", "ar": "نظرية", "uk": "теорія",
        "example_de": "Die Theorie ist ohne Praxis nicht vollständig.",
        "example_tr": "Teori, pratik olmadan eksik kalır.",
        "example_en": "Theory is incomplete without practice.",
        "example_ar": "النظرية بدون تطبيق عملي تظل غير مكتملة.",
        "example_uk": "Теорія без практики не є повною."
    },
    "traditionellen": {
        "de": "traditionell", "displayDe": "traditionell", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "geleneksel", "en": "traditional", "ar": "تقليدي", "uk": "традиційний",
        "example_de": "Auf traditionellen Märkten trifft man lokale Erzeuger.",
        "example_tr": "Geleneksel pazarlarda yerel üreticilerle karşılaşılır.",
        "example_en": "On traditional markets, one meets local producers.",
        "example_ar": "في الأسواق التقليدية يلتقي المرء بالمنتجين المحليين.",
        "example_uk": "На традиційних ринках зустрічають місцевих виробників."
    },
    "transportwege": {
        "de": "der Transportweg", "displayDe": "Transportweg", "article": "der", "plural": "die Transportwege", "pos": "noun", "level": "B1",
        "tr": "nakliye / taşıma yolları", "en": "transport routes", "ar": "مسارات وطرق النقل", "uk": "транспортні шляхи",
        "example_de": "Kurze Transportwege schonen das Klima und garantieren Frische.",
        "example_tr": "Kısa nakliye yolları iklimi korur ve tazeliği garanti eder.",
        "example_en": "Short transport routes protect the climate and guarantee freshness.",
        "example_ar": "تحمي مسارات النقل القصيرة المناخ وتضمن نضارة المنتجات.",
        "example_uk": "Короткі транспортні шляхи бережуть клімат і гарантують свіжість."
    },
    "treibhausgasen": {
        "de": "das Treibhausgas", "displayDe": "Treibhausgas", "article": "das", "plural": "die Treibhausgase", "pos": "noun", "level": "B1",
        "tr": "sera gazları (Dativ Plural: von Treibhausgasen)", "en": "greenhouse gases (dative plural)", "ar": "غازات دفيئة (انبعاثات غازات الاحتباس الحراري)", "uk": "парникові гази",
        "example_de": "Der Ausstoß von Treibhausgasen muss weltweit gesenkt werden.",
        "example_tr": "Sera gazı salınımı dünya çapında düşürülmelidir.",
        "example_en": "The emission of greenhouse gases must be reduced worldwide.",
        "example_ar": "يجب خفض انبعاثات الغازات الدفيئة على مستوى العالم.",
        "example_uk": "Викиди парникових газів необхідно знижувати в усьому світі."
    },
    "unbefristetes": {
        "de": "unbefristet", "displayDe": "unbefristet", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "süresiz, daimi (unbefristeter Arbeitsvertrag)", "en": "permanent, open-ended (employment contract)", "ar": "غير محدد المدة / دائم", "uk": "безстроковий (контракт)",
        "example_de": "Ein unbefristetes Arbeitsverhältnis bietet hohe Sicherheit.",
        "example_tr": "Süresiz bir iş sözleşmesi yüksek güvence sağlar.",
        "example_en": "A permanent employment contract offers high security.",
        "example_ar": "يوفر عقد العمل الدائم أماناً واستقراراً وظيفياً عالياً.",
        "example_uk": "Безстроковий трудовий договір забезпечує високу впевненість."
    },
    "unterstützt": {
        "de": "unterstützen", "displayDe": "unterstützen", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "desteklemek (3. tekil şahıs: destekler)", "en": "supports", "ar": "يدعم / يساند", "uk": "підтримує",
        "example_de": "Der Staat unterstützt Auszubildende mit Fördergeldern.",
        "example_tr": "Devlet, stajyerleri teşvik ödenekleriyle destekler.",
        "example_en": "The state supports trainees with grant funding.",
        "example_ar": "تدعم الدولة المتدربين بتقديم منح ومساعدات مالية.",
        "example_uk": "Держава підтримує учнів фінансовими грантами."
    },
    "unverpackt": {
        "de": "unverpackt", "displayDe": "unverpackt", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "ambalajsız, paketsiz (Unverpackt-Laden)", "en": "unpackaged, zero-waste", "ar": "بدون تغليف / غير معبأ", "uk": "без упаковки / без фасування",
        "example_de": "In Unverpackt-Läden kauft man Lebensmittel ohne Müll.",
        "example_tr": "Ambalajsız dükkanlarda gıdalar çöp üretmeden satın alınır.",
        "example_en": "In package-free shops, one buys groceries without waste.",
        "example_ar": "في المتاجر بدون تغليف يشتري المرء الأطعمة دون إنتاج نفايات.",
        "example_uk": "У магазинах без упаковки купують продукти без сміття."
    },
    "verbindung": {
        "de": "die Verbindung", "displayDe": "Verbindung", "article": "die", "plural": "die Verbindungen", "pos": "noun", "level": "A2",
        "tr": "bağlantı, birleşim", "en": "connection, link", "ar": "صلة / رابط", "uk": "зв'язок / поєднання",
        "example_de": "Die enge Verbindung von Schule und Betrieb zeichnet die Ausbildung aus.",
        "example_tr": "Okul ve işletmenin sıkı bağı, meslek eğitiminin en belirgin özelliğidir.",
        "example_en": "The close link of school and company characterizes the training.",
        "example_ar": "يميز التدريب المهني الربط الوثيق بين المدرسة ومكان العمل.",
        "example_uk": "Тісний зв'язок школи та підприємства вирізняє дуальну освіту."
    },
    "verbraucher": {
        "de": "der Verbraucher", "displayDe": "Verbraucher", "article": "der", "plural": "die Verbraucher", "pos": "noun", "level": "B1",
        "tr": "tüketici", "en": "consumer", "ar": "مستهلك", "uk": "споживач",
        "example_de": "Verbraucher verlangen mehr Transparenz bei Lebensmitteln.",
        "example_tr": "Tüketiciler gıdalarda daha fazla şeffaflık talep ediyorlar.",
        "example_en": "Consumers demand more transparency in food products.",
        "example_ar": "يطالب المستهلكون بمزيد من الشفافية في المنتجات الغذائية.",
        "example_uk": "Споживачі вимагають більшої прозорості щодо продуктів харчування."
    },
    "verbraucherinnen": {
        "de": "die Verbraucherin", "displayDe": "Verbraucherin", "article": "die", "plural": "die Verbraucherinnen", "pos": "noun", "level": "B1",
        "tr": "kadın tüketiciler", "en": "female consumers", "ar": "مستهلكات", "uk": "споживачки",
        "example_de": "Verbraucherinnen und Verbraucher achten auf faire Preise.",
        "example_tr": "Tüketiciler adil fiyatlara özen gösterirler.",
        "example_en": "Consumers pay attention to fair prices.",
        "example_ar": "يحرص المستهلكون والمستهلكات على الأسعار العادلة.",
        "example_uk": "Споживачі та споживачки звертають увагу на справедливі ціни."
    },
    "verdienstmöglichkeiten": {
        "de": "die Verdienstmöglichkeit", "displayDe": "Verdienstmöglichkeit", "article": "die", "plural": "die Verdienstmöglichkeiten", "pos": "noun", "level": "B1",
        "tr": "kazanç olanakları, gelir fırsatları", "en": "earning potential / earning opportunities", "ar": "فرص الكسب / إمكانيات الدخل", "uk": "можливості заробітку",
        "example_de": "Nach dem Meisterabschluss sind die Verdienstmöglichkeiten oft exzellent.",
        "example_tr": "Ustalık unvanından sonra kazanç olanakları genellikle mükemmeldir.",
        "example_en": "After the master qualification, earning opportunities are often excellent.",
        "example_ar": "تكون فرص الكسب ممتازة جداً بعد الحصول على مؤهل المعلم الحرفي.",
        "example_uk": "Після отримання кваліфікації майстра можливості заробітку часто чудові."
    },
    "vergütung": {
        "de": "die Vergütung", "displayDe": "Vergütung", "article": "die", "plural": "die Vergütungen", "pos": "noun", "level": "B1",
        "tr": "ücret, maaş, ödenek", "en": "remuneration, compensation, allowance", "ar": "مكافأة مالية / أجر", "uk": "винагорода / оплата",
        "example_de": "Die Vergütung richtet sich nach dem Tarifvertrag.",
        "example_tr": "Ücret tutarı toplu iş sözleşmesine göre belirlenir.",
        "example_en": "Remuneration is governed by the collective bargaining agreement.",
        "example_ar": "تتحدد المكافأة المالية وفقاً لاتفاقية العمل الجماعية.",
        "example_uk": "Оплата визначається згідно з колективним трудовим договором."
    },
    "vermeidung": {
        "de": "die Vermeidung", "displayDe": "Vermeidung", "article": "die", "plural": "die Vermeidungen", "pos": "noun", "level": "B1",
        "tr": "kaçınma, önleme", "en": "avoidance, prevention", "ar": "تجنب / وقاية", "uk": "уникнення / запобігання",
        "example_de": "Die Vermeidung von Abfällen ist der beste Umweltschutz.",
        "example_tr": "Atıkları önlemek en iyi çevre koruma yöntemidir.",
        "example_en": "Waste prevention is the best environmental protection.",
        "example_ar": "الحد من النفايات وتجنبها هو أفضل وسيلة لحماية البيئة.",
        "example_uk": "Уникнення відходів — це найкращий захист довкілля."
    },
    "vermittelt": {
        "de": "vermitteln", "displayDe": "vermitteln", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "aktarmak, kazandırmak, öğretmek (3. tekil şahıs)", "en": "imparts, conveys, mediates", "ar": "ينقل / يلقّن / يوصل", "uk": "передає / викладає",
        "example_de": "Die Lehrkraft vermittelt den Auszubildenden theoretische Grundlagen.",
        "example_tr": "Öğretmen stajyerlere teorik temelleri aktarır.",
        "example_en": "The instructor imparts theoretical fundamentals to trainees.",
        "example_ar": "ينقل المدرس الأسس النظرية للمتدربين.",
        "example_uk": "Викладач передає учням теоретичні основи."
    },
    "verpackungsmüll": {
        "de": "der Verpackungsmüll", "displayDe": "Verpackungsmüll", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "ambalaj çöpü / ambalaj atığı", "en": "packaging waste", "ar": "نفايات التغليف والعبوات", "uk": "пакувальне сміття / відходи упаковки",
        "example_de": "Plastikfreie Läden reduzieren den Verpackungsmüll drastisch.",
        "example_tr": "Plastiksiz dükkanlar ambalaj atıklarını çarpıcı biçimde azaltır.",
        "example_en": "Plastic-free shops drastically reduce packaging waste.",
        "example_ar": "تقلل المتاجر الخالية من البلاستيك نفايات التغليف بشكل حاسم.",
        "example_uk": "Магазини без пластику кардинально зменшують пакувальне сміття."
    },
    "verzichten": {
        "de": "verzichten", "displayDe": "verzichten", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "feragat etmek, vazgeçmek, kullanmamak (verzichten auf)", "en": "to do without, forgo (verzichten auf)", "ar": "يستغني عن / يتخلى عن", "uk": "відмовлятися від",
        "example_de": "Immer mehr Menschen verzichten auf Plastiktüten.",
        "example_tr": "Giderek daha fazla insan plastik poşetlerden vazgeçiyor.",
        "example_en": "More and more people do without plastic bags.",
        "example_ar": "يستغني المزيد والمزيد من الناس عن الأكياس البلاستيكية.",
        "example_uk": "Усе більше людей відмовляються від пластикових пакетів."
    },
    "vollständig": {
        "de": "vollständig", "displayDe": "vollständig", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "tamamen, eksiksiz olarak", "en": "completely, entirely", "ar": "بالكامل / بشكل تام", "uk": "повністю / цілком",
        "example_de": "Das Pfandgeld wird bei Rückgabe vollständig erstattet.",
        "example_tr": "Depozito parası iade sırasında eksiksiz olarak geri ödenir.",
        "example_en": "The deposit money is completely refunded upon return.",
        "example_ar": "يُسترد مبلغ الرهن بالكامل عند إعادة القارورة.",
        "example_uk": "Заставні кошти повертаються повністю при здачі тари."
    },
    "vom": {
        "de": "vom", "displayDe": "vom", "article": "", "plural": "", "pos": "prep", "level": "A1",
        "tr": "von dem (-den, -dan: betriebten / ilk yıldan)", "en": "from the (contraction von dem)", "ar": "من الـ", "uk": "від / з (злиття von + dem)",
        "example_de": "Sie erhalten das Gehalt direkt vom Betrieb.",
        "example_tr": "Maaşı doğrudan işletmeden alırlar.",
        "example_en": "They receive the salary directly from the company.",
        "example_ar": "يستلمون الراتب مباشرة من الشركة.",
        "example_uk": "Вони отримують зарплату безпосередньо від підприємства."
    },
    "vorteil": {
        "de": "der Vorteil", "displayDe": "Vorteil", "article": "der", "plural": "die Vorteile", "pos": "noun", "level": "A2",
        "tr": "avantaj, fayda, yarar", "en": "advantage, benefit", "ar": "ميزة / فائدة", "uk": "перевага / користь",
        "example_de": "Ein großer Vorteil ist die praxisnahe Ausbildung.",
        "example_tr": "Büyük bir avantaj, uygulamaya yönelik meslek eğitimidir.",
        "example_en": "A major advantage is practical training.",
        "example_ar": "الميزة الكبرى هي التدريب القريب من الواقع العملي.",
        "example_uk": "Велика перевага — це навчання, наближене до практики."
    },
    "wegen": {
        "de": "wegen", "displayDe": "wegen", "article": "", "plural": "", "pos": "prep", "level": "A2",
        "tr": "yüzünden, nedeniyle (wegen + Genitiv / Dativ)", "en": "because of, due to", "ar": "بسبب / نظراً لـ", "uk": "через / завдяки",
        "example_de": "Wegen des Fachkräftemangels gibt es viele Arbeitsplätze.",
        "example_tr": "Eleman açığı nedeniyle çok sayıda iş imkanı vardır.",
        "example_en": "Due to the skilled worker shortage, there are many jobs.",
        "example_ar": "بسبب نقص الكوادر توجد الكثير من الوظائف.",
        "example_uk": "Через брак фахівців є багато робочих місць."
    },
    "weiterbildungsmöglichkeiten": {
        "de": "die Weiterbildungsmöglichkeit", "displayDe": "Weiterbildungsmöglichkeit", "article": "die", "plural": "die Weiterbildungsmöglichkeiten", "pos": "noun", "level": "B1",
        "tr": "mesleki gelişim / ileri eğitim olanakları", "en": "further training / education opportunities", "ar": "فرص التعليم المستمر والتدريب المتقدم", "uk": "можливості для підвищення кваліфікації",
        "example_de": "Im Beruf gibt es zahlreiche Weiterbildungsmöglichkeiten.",
        "example_tr": "Meslekte çok sayıda ileri eğitim olanağı bulunur.",
        "example_en": "In the profession, there are numerous opportunities for further training.",
        "example_ar": "تتوفر في المهنة العديد من فرص التدريب المتقدم.",
        "example_uk": "У професії є численні можливості для підвищення кваліфікації."
    },
    "weiterer": {
        "de": "weit", "displayDe": "weit", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "bir diğer, başka bir (ein weiterer Schritt)", "en": "another, further (ein weiterer Schritt)", "ar": "خطوة أخرى / إضافية", "uk": "ще один / подальший",
        "example_de": "Ein weiterer wichtiger Punkt ist die Mülltrennung.",
        "example_tr": "Bir diğer önemli husus çöp ayrıştırmadır.",
        "example_en": "Another important point is waste separation.",
        "example_ar": "نقطة مهمة أخرى هي فرز النفايات.",
        "example_uk": "Ще один важливий пункт — це сортування сміття."
    },
    "weiterqualifizierung": {
        "de": "die Weiterqualifizierung", "displayDe": "Weiterqualifizierung", "article": "die", "plural": "die Weiterqualifizierungen", "pos": "noun", "level": "B1",
        "tr": "uzmanlaşma, ek mesleki yeterlilik kazanma", "en": "further qualification / professional upgrading", "ar": "التأهيل المستمر / رفع الكفاءة المهنية", "uk": "підвищення кваліфікації / перекваліфікація",
        "example_de": "Die Weiterqualifizierung zum Meister eröffnet Führungspositionen.",
        "example_tr": "Ustalık için ek yeterlilik kazanma yönetici pozisyonlarının kapısını açar.",
        "example_en": "Upgrading to a master qualification opens up management positions.",
        "example_ar": "يفتح التأهيل لدرجة 'Meister' الباب أمام المناصب القيادية.",
        "example_uk": "Підвищення кваліфікації до майстра відкриває керівні посади."
    },
    "weltweit": {
        "de": "weltweit", "displayDe": "weltweit", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "dünya çapında, küresel", "en": "worldwide, globally", "ar": "عالمي / حول العالم", "uk": "у всьому світі / всесвітній",
        "example_de": "Das duale System ist weltweit bekannt und geschätzt.",
        "example_tr": "İkili sistem dünya çapında bilinir ve takdir edilir.",
        "example_en": "The dual system is known and appreciated worldwide.",
        "example_ar": "نظام التدريب المزدوج معروف ومقدّر في جميع أنحاء العالم.",
        "example_uk": "Дуальна система відома та цінується у всьому світі."
    },
    "wichtiger": {
        "de": "wichtig", "displayDe": "wichtig", "article": "", "plural": "", "pos": "adj", "level": "A1",
        "tr": "önemli (ein wichtiger Schritt)", "en": "important (an important step)", "ar": "مهم (خطوة مهمة)", "uk": "важливий (важливий крок)",
        "example_de": "Müllvermeidung ist ein wichtiger Beitrag zur Umwelt.",
        "example_tr": "Çöpü önlemek çevreye önemli bir katkıdır.",
        "example_en": "Waste reduction is an important contribution to the environment.",
        "example_ar": "الحد من النفايات مساهمة مهمة في حماية البيئة.",
        "example_uk": "Зменшення відходів — це важливий внесок у довкілля."
    },
    "wiederbefüllt": {
        "de": "wiederbefüllen", "displayDe": "wiederbefüllen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "yeniden doldurulmuş (Partizip II)", "en": "refilled (participle)", "ar": "مُعاد تعبئته", "uk": "повторно наповнений",
        "example_de": "Flaschen werden gereinigt und bis zu 50 Mal wiederbefüllt.",
        "example_tr": "Şişeler temizlenir ve 50 defaya kadar yeniden doldurulur.",
        "example_en": "Bottles are cleaned and refilled up to 50 times.",
        "example_ar": "تُنظف القوارير وتُعاد تعبئتها حتى 50 مرة.",
        "example_uk": "Пляшки очищують і повторно наповнюють до 50 разів."
    },
    "wiederverwendbare": {
        "de": "wiederverwendbar", "displayDe": "wiederverwendbar", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "yeniden kullanılabilir, tekrar kullanılır", "en": "reusable", "ar": "قابل لإعادة الاستخدام", "uk": "багаторазовий",
        "example_de": "Wiederverwendbare Taschen schonen wertvolle Ressourcen.",
        "example_tr": "Yeniden kullanılabilir çantalar değerli kaynakları korur.",
        "example_en": "Reusable bags conserve valuable resources.",
        "example_ar": "تحافظ الأكياس القابلة لإعادة الاستخدام على الموارد الثمينة.",
        "example_uk": "Багаторазові сумки зберігають цінні ресурси."
    },
    "wochenmärkten": {
        "de": "der Wochenmarkt", "displayDe": "Wochenmarkt", "article": "der", "plural": "die Wochenmärkte", "pos": "noun", "level": "A2",
        "tr": "semt pazarları (Dativ Plural: auf Wochenmärkten)", "en": "weekly markets (dative plural)", "ar": "الأسواق الأسبوعية (في الأسواق الأسبوعية)", "uk": "щотижневі ярмарки (на базарах)",
        "example_de": "Auf Wochenmärkten kaufen Bürger frisches Obst und Gemüse.",
        "example_tr": "Semt pazarlarında vatandaşlar taze meyve ve sebze alırlar.",
        "example_en": "At weekly markets, citizens buy fresh fruit and vegetables.",
        "example_ar": "في الأسواق الأسبوعية يشتري المواطنون الفواكه والخضار الطازجة.",
        "example_uk": "На щотижневих ринках громадяни купують свіжі фрукти та овочі."
    },
    "zahlen": {
        "de": "zahlen", "displayDe": "zahlen", "article": "", "plural": "", "pos": "verb", "level": "A1",
        "tr": "ödemek", "en": "to pay", "ar": "يدفع", "uk": "платити",
        "example_de": "Kunden zahlen beim Getränkekauf einen kleinen Pfandbetrag.",
        "example_tr": "Müşteriler içecek alırken küçük bir depozito tutarı öderler.",
        "example_en": "Customers pay a small deposit amount when buying drinks.",
        "example_ar": "يدفع الزبائن مبلغاً بسيطاً كرهن عند شراء المشروبات.",
        "example_uk": "Покупці сплачують невелику суму застави при купівлі напоїв."
    },
    "zugleich": {
        "de": "zugleich", "displayDe": "zugleich", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "aynı zamanda, bir yandan da", "en": "at the same time, simultaneously", "ar": "في نفس الوقت / معاً", "uk": "водночас / разом з тим",
        "example_de": "Das spart CO2 und unterstützt zugleich lokale Bauern.",
        "example_tr": "Bu hem CO2 tasarrufu sağlar hem de aynı zamanda yerel çiftçileri destekler.",
        "example_en": "This saves CO2 and simultaneously supports local farmers.",
        "example_ar": "يوفر هذا انبعاثات الكربون ويدعم في نفس الوقت المزارعين المحليين.",
        "example_uk": "Це заощаджує викиди вуглецю та водночас підтримує місцевих фермерів."
    },
    "zunehmend": {
        "de": "zunehmend", "displayDe": "zunehmend", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "giderek artan şekilde, gittikçe daha çok", "en": "increasingly", "ar": "بشكل متزايد", "uk": "усе більше / щораз більше",
        "example_de": "Geschäfte verzichten zunehmend auf Plastikverpackungen.",
        "example_tr": "Mağazalar giderek artan şekilde plastik ambalajlardan vazgeçiyor.",
        "example_en": "Shops are increasingly doing without plastic packaging.",
        "example_ar": "تستغني المحلات بشكل متزايد عن التغليف البلاستيكي.",
        "example_uk": "Магазини дедалі більше відмовляються від пластикової тари."
    },
    "zur": {
        "de": "zur", "displayDe": "zur", "article": "", "plural": "", "pos": "prep", "level": "A1",
        "tr": "zu der (-e, yönelme: Weiterbildung zur Meisterin)", "en": "to the (contraction zu der)", "ar": "إلى الـ", "uk": "до (злиття zu + der)",
        "example_de": "Die Weiterbildung zur Meisterin dauert meist ein bis zwei Jahre.",
        "example_tr": "Ustalık eğitimi genellikle bir ila iki yıl sürer.",
        "example_en": "Training to become a master craftsman usually takes one to two years.",
        "example_ar": "يستغرق التأهيل لدرجة المعلم الحرفي عادة من سنة إلى سنتين.",
        "example_uk": "Підвищення кваліфікації до майстра зазвичай триває один-два роки."
    },
    "zurückerhalten": {
        "de": "zurückerhalten", "displayDe": "zurückerhalten", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "geri almak, iadesini almak", "en": "to get back, receive back", "ar": "يسترد / يسترجع", "uk": "отримувати назад",
        "example_de": "Am Pfandautomaten kann man das Pfandgeld zurückerhalten.",
        "example_tr": "Depozito otomatında depozito parasını geri alabilirsiniz.",
        "example_en": "At the deposit machine, one can get the deposit money back.",
        "example_ar": "يمكن للمرء استرداد أموال الرهن في آلة القوارير.",
        "example_uk": "В автоматі можна отримати назад свої заставні кошти."
    },
    "überflüssige": {
        "de": "überflüssig", "displayDe": "überflüssig", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "gereksiz, fuzuli, lüzumsuz", "en": "superfluous, unnecessary", "ar": "فائض / لا داعي له / غير ضروري", "uk": "зайвий / непотрібний",
        "example_de": "Man verzichtet auf überflüssige Plastikfolien bei Gurken.",
        "example_tr": "Salatalıklardaki gereksiz plastik folyolardan vazgeçiliyor.",
        "example_en": "One dispenses with superfluous plastic wrap on cucumbers.",
        "example_ar": "يتم الاستغناء عن الأغلفة البلاستيكية غير الضرورية للخيار.",
        "example_uk": "Відмовляються від зайвої пластикової плівки на огірках."
    },
    "übernahme": {
        "de": "die Übernahme", "displayDe": "Übernahme", "article": "die", "plural": "die Übernahmen", "pos": "noun", "level": "B1",
        "tr": "kadroya alma, istihdam, işe kabul", "en": "hiring / job takeover after training", "ar": "التثبيت في الوظيفة بعد انتهاء التدريب", "uk": "прийом у штат після навчання",
        "example_de": "Die Chancen auf Übernahme in den Betrieb stehen sehr gut.",
        "example_tr": "İşletmede kadroya alınma şansı oldukça yüksektir.",
        "example_en": "Chances of being taken on permanently by the company are very good.",
        "example_ar": "فرص التثبيت والتوظيف الدائم في المؤسسة ممتازة جداً.",
        "example_uk": "Шанси на прийом у штат підприємства дуже високі."
    }
}

content = "#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n"
content += '"""\nLexicon Part: Units 5 & 6 (Duale Ausbildung & Nachhaltiger Konsum)\n"""\n\n'
content += "PART_UNITS_5_6 = " + json.dumps(ENTRIES, ensure_ascii=False, indent=4) + "\n"

with open(TARGET_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated {len(ENTRIES)} entries into {TARGET_PATH}")
