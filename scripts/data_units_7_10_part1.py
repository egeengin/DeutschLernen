#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Lexicon Data Part 1: Tokens A to D (Units 7-10)
"""

PART1 = {
    "abonnement": {
        "de": "das Abonnement", "displayDe": "Abonnement", "article": "das", "plural": "die Abonnements", "pos": "noun", "level": "B1",
        "tr": "abonelik", "en": "subscription", "ar": "اشتراك", "uk": "абонемент / підписка",
        "example_de": "Das Deutschlandticket ist als monatlich kündbares Abonnement konzipiert.",
        "example_tr": "Almanya bileti aylık iptal edilebilir bir abonelik olarak tasarlanmıştır.",
        "example_en": "The Deutschlandticket is designed as a monthly cancellable subscription.",
        "example_ar": "صُممت تذكرة ألمانيا كاشتراك يمكن إلغاؤه شهرياً.",
        "example_uk": "Німецький квиток розроблено як підписку з можливістю щомісячного скасування."
    },
    "abschlusstest": {
        "de": "der Abschlusstest", "displayDe": "Abschlusstest", "article": "der", "plural": "die Abschlusstests", "pos": "noun", "level": "B1",
        "tr": "bitirme sınavı / seviye tespit testi", "en": "final exam / test", "ar": "اختبار نهائي", "uk": "підсумковий тест",
        "example_de": "Am Ende des Orientierungskurses steht ein offizieller Abschlusstest.",
        "example_tr": "Uyum kursunun sonunda resmi bir bitirme sınavı yer alır.",
        "example_en": "At the end of the orientation course, there is an official final test.",
        "example_ar": "في نهاية دورة التوجيه يوجد اختبار نهائي رسمي.",
        "example_uk": "Наприкінці орієнтаційного курсу проводиться офіційний підсумковий тест."
    },
    "absolviert": {
        "de": "absolvieren", "displayDe": "absolvieren", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "başarıyla tamamlamak (kurs/eğitim)", "en": "to complete (course/studies)", "ar": "أتم / اجتاز بنجاح", "uk": "успішно закінчити / пройти",
        "example_de": "Wer den Kurs erfolgreich absolviert, erhält ein offizielles Zertifikat.",
        "example_tr": "Kursu başarıyla tamamlayan kişi resmi bir sertifika alır.",
        "example_en": "Whoever successfully completes the course receives an official certificate.",
        "example_ar": "من يجتاز الدورة بنجاح يحصل على شهادة رسمية.",
        "example_uk": "Той, хто успішно закінчить курс, отримує офіційний сертифікат."
    },
    "adressen": {
        "de": "die Adresse", "displayDe": "Adresse", "article": "die", "plural": "die Adressen", "pos": "noun", "level": "A1",
        "tr": "adresler", "en": "addresses", "ar": "عناوين", "uk": "адреси",
        "example_de": "Geben Sie persönliche Adressen niemals leichtfertig im Internet preis.",
        "example_tr": "Kişisel adresleri internette asla dikkatsizce paylaşmayın.",
        "example_en": "Never recklessly disclose personal addresses on the internet.",
        "example_ar": "لا تفصح أبداً عن العناوين الشخصية بتهور على الإنترنت.",
        "example_uk": "Ніколи легковажно не розголошуйте особисті адреси в інтернеті."
    },
    "aktivierung": {
        "de": "die Aktivierung", "displayDe": "Aktivierung", "article": "die", "plural": "die Aktivierungen", "pos": "noun", "level": "B1",
        "tr": "etkinleştirme, aktivasyon", "en": "activation", "ar": "تفعيل / تنشيط", "uk": "активація",
        "example_de": "Die Aktivierung der Zwei-Faktor-Authentifizierung schützt Benutzerkonten.",
        "example_tr": "İki faktörlü kimlik doğrulamanın etkinleştirilmesi kullanıcı hesaplarını korur.",
        "example_en": "The activation of two-factor authentication protects user accounts.",
        "example_ar": "تفعيل المصادقة الثنائية يحمي حسابات المستخدمين.",
        "example_uk": "Активація двофакторної автентифікації захищає облікові записи."
    },
    "allen": {
        "de": "alle", "displayDe": "alle", "article": "", "plural": "", "pos": "pron", "level": "A1",
        "tr": "hepsine, tümüne (Dativ)", "en": "all / to all", "ar": "للجميع / لكل", "uk": "усім",
        "example_de": "Das Ticket gilt in allen Bussen und Regionalzügen.",
        "example_tr": "Bilet tüm otobüslerde ve bölgesel trenlerde geçerlidir.",
        "example_en": "The ticket is valid on all buses and regional trains.",
        "example_ar": "التذكرة صالحة في جميع الحافلات والقطارات الإقليمية.",
        "example_uk": "Квиток діє в усіх автобусах та регіональних поїздах."
    },
    "allgemeinen": {
        "de": "allgemein", "displayDe": "allgemein", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "genel (çekimli form)", "en": "general (declined form)", "ar": "عام / كلي", "uk": "загальний",
        "example_de": "Der allgemeine Check-up dient der frühzeitigen Erkennung von Krankheiten.",
        "example_tr": "Genel sağlık kontrolü hastalıkların erken teşhisine hizmet eder.",
        "example_en": "The general checkup serves the early detection of diseases.",
        "example_ar": "الفحص الطبي العام يهدف إلى الكشف المبكر عن الأمراض.",
        "example_uk": "Загальний чекап служить для раннього виявлення захворювань."
    },
    "allgemeiner": {
        "de": "allgemein", "displayDe": "allgemein", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "genel / daha genel", "en": "general / more general", "ar": "عام / أعم", "uk": "загальний",
        "example_de": "Ein allgemeiner Gesundheitscheck wird ab 35 Jahren empfohlen.",
        "example_tr": "35 yaşından itibaren genel bir sağlık kontrolü önerilir.",
        "example_en": "A general health check is recommended from age 35.",
        "example_ar": "يوصى بإجراء فحص صحي عام ابتداءً من سن 35.",
        "example_uk": "Загальний огляд здоров'я рекомендується після 35 років."
    },
    "allgemeinmedizinische": {
        "de": "allgemeinmedizinisch", "displayDe": "allgemeinmedizinisch", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "pratisyen / genel tıpla ilgili", "en": "general medical / general practice", "ar": "طب عام", "uk": "загальномедичний",
        "example_de": "Patienten wenden sich zuerst an eine allgemeinmedizinische Praxis.",
        "example_tr": "Hastalar öncelikle bir genel pratisyen hekim muayenehanesine başvurur.",
        "example_en": "Patients first turn to a general medical practice.",
        "example_ar": "يتوجه المرضى أولاً إلى عيادة الطب العام.",
        "example_uk": "Пацієнти спочатку звертаються до амбулаторії загальної практики."
    },
    "alltagsgesprächen": {
        "de": "das Alltagsgespräch", "displayDe": "Alltagsgespräch", "article": "das", "plural": "die Alltagsgespräche", "pos": "noun", "level": "B1",
        "tr": "günlük konuşmalar (Dativ Plural)", "en": "everyday conversations", "ar": "محادثات الحياة اليومية", "uk": "повсякденні розмови",
        "example_de": "Im Kurs üben die Teilnehmer das Führen von Alltagsgesprächen.",
        "example_tr": "Kursta katılımcılar günlük konuşmalar yapmayı pratik ederler.",
        "example_en": "In the course, participants practice holding everyday conversations.",
        "example_ar": "في الدورة يتدرب المشاركون على إجراء محادثات الحياة اليومية.",
        "example_uk": "На курсі учасники тренуються вести повсякденні бесіди."
    },
    "anbieters": {
        "de": "der Anbieter", "displayDe": "Anbieter", "article": "der", "plural": "die Anbieter", "pos": "noun", "level": "B1",
        "tr": "sağlayıcının, hizmet sunucusunun (Genitiv)", "en": "provider's / supplier's (Genitive)", "ar": "مقدم الخدمة (مضاف إليه)", "uk": "провайдера / постачальника (родовий відмінок)",
        "example_de": "Öffnen Sie stets die offizielle Website des Anbieters.",
        "example_tr": "Hizmet sağlayıcısının her zaman resmi internet sitesini açın.",
        "example_en": "Always open the provider's official website.",
        "example_ar": "افتح دائمًا الموقع الرسمي لمزود الخدمة.",
        "example_uk": "Завжди відкривайте офіційний веб-сайт провайдера."
    },
    "angeboten": {
        "de": "anbieten", "displayDe": "anbieten", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "sunulan, teklif edilen (Partizip II)", "en": "offered (Participle II)", "ar": "معروض / مُقدم", "uk": "запропонований",
        "example_de": "Das Ticket wird bundesweit von vielen Verkehrsbetrieben angeboten.",
        "example_tr": "Bilet ülke genelinde birçok ulaşım işletmesi tarafından sunulmaktadır.",
        "example_en": "The ticket is offered nationwide by many transport companies.",
        "example_ar": "يتم تقديم التذكرة على مستوى البلاد من قبل العديد من شركات النقل.",
        "example_uk": "Квиток пропонується по всій країні багатьма транспортними підприємствами."
    },
    "anstieg": {
        "de": "der Anstieg", "displayDe": "Anstieg", "article": "der", "plural": "die Anstiege", "pos": "noun", "level": "B1",
        "tr": "artış, yükseliş", "en": "increase, rise", "ar": "ارتفاع / زيادة", "uk": "зростання / підйом",
        "example_de": "Verkehrsbetriebe verzeichnen einen deutlichen Anstieg der Fahrgastzahlen.",
        "example_tr": "Ulaşım işletmeleri yolcu sayılarında belirgin bir artış kaydediyor.",
        "example_en": "Transport operators report a significant increase in passenger numbers.",
        "example_ar": "تسجل شركات النقل زيادة ملحوظة في أعداد الركاب.",
        "example_uk": "Транспортні компанії фіксують значне зростання пасажиропотоку."
    },
    "anwendet": {
        "de": "anwenden", "displayDe": "anwenden", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "uygulamak (er/sie/es anwendet)", "en": "applies / uses", "ar": "يطبق / يستخدم", "uk": "застосовує",
        "example_de": "Wer die gelernten Regeln anwendet, schützt seine Daten wirksam.",
        "example_tr": "Öğrenilen kuralları uygulayan kişi verilerini etkili şekilde korur.",
        "example_en": "Whoever applies the learned rules effectively protects their data.",
        "example_ar": "من يطبق القواعد المتعلمة يحمي بياناته بفعالية.",
        "example_uk": "Той, хто застосовує вивчені правила, надійно захищає свої дані."
    },
    "apps": {
        "de": "die App", "displayDe": "App", "article": "die", "plural": "die Apps", "pos": "noun", "level": "A1",
        "tr": "mobil uygulamalar", "en": "mobile apps", "ar": "تطبيقات الهاتف", "uk": "мобільні додатки",
        "example_de": "Über Smartphone-Apps lassen sich Arzttermine bequem buchen.",
        "example_tr": "Akıllı telefon uygulamaları üzerinden doktor randevuları rahatça alınabilir.",
        "example_en": "Doctor appointments can be conveniently booked via smartphone apps.",
        "example_ar": "يمكن حجز مواعيد الأطباء بسهولة عبر تطبيقات الهاتف الذكي.",
        "example_uk": "Записатися до лікаря можна зручно через додатки на смартфоні."
    },
    "arbeitgeber": {
        "de": "der Arbeitgeber", "displayDe": "Arbeitgeber", "article": "der", "plural": "die Arbeitgeber", "pos": "noun", "level": "A2",
        "tr": "işveren", "en": "employer", "ar": "صاحب العمل / رب العمل", "uk": "роботодавець",
        "example_de": "Beschäftigte müssen den Arbeitgeber unverzüglich über die Krankheit informieren.",
        "example_tr": "Çalışanlar işvereni hastalık konusunda gecikmeksizin bilgilendirmelidir.",
        "example_en": "Employees must inform the employer immediately about illness.",
        "example_ar": "يجب على الموظفين إبلاغ صاحب العمل فوراً بشأن المرض.",
        "example_uk": "Працівники повинні негайно повідомити роботодавця про хворобу."
    },
    "arbeitsunfähigkeitsbescheinigung": {
        "de": "die Arbeitsunfähigkeitsbescheinigung", "displayDe": "Arbeitsunfähigkeitsbescheinigung", "article": "die", "plural": "die Arbeitsunfähigkeitsbescheinigungen", "pos": "noun", "level": "B1",
        "tr": "iş göremezlik raporu / hastalık belgesi", "en": "certificate of incapacity for work / sick note", "ar": "شهادة العجز عن العمل / إجازة مرضية", "uk": "довідка про непрацездатність / лікарняний лист",
        "example_de": "Der Arzt stellt dem Patienten eine Arbeitsunfähigkeitsbescheinigung aus.",
        "example_tr": "Doktor hastaya bir iş göremezlik raporu düzenler.",
        "example_en": "The doctor issues a certificate of incapacity for work to the patient.",
        "example_ar": "يُصدر الطبيب للمريض شهادة عجز عن العمل.",
        "example_uk": "Лікар видає пацієнту довідку про непрацездатність."
    },
    "arztbesuch": {
        "de": "der Arztbesuch", "displayDe": "Arztbesuch", "article": "der", "plural": "die Arztbesuche", "pos": "noun", "level": "A2",
        "tr": "doktor ziyareti / muayenesi", "en": "doctor visit", "ar": "زيارة الطبيب", "uk": "візит до лікаря",
        "example_de": "Beim Arztbesuch muss die Versichertenkarte vorgelegt werden.",
        "example_tr": "Doktor ziyaretinde sigorta kartı ibraz edilmelidir.",
        "example_en": "During a doctor visit, the insurance card must be presented.",
        "example_ar": "عند زيارة الطبيب يجب تقديم بطاقة التأمين.",
        "example_uk": "Під час візиту до лікаря необхідно пред'явити страхову картку."
    },
    "arztpraxis": {
        "de": "die Arztpraxis", "displayDe": "Arztpraxis", "article": "die", "plural": "die Arztpraxen", "pos": "noun", "level": "A2",
        "tr": "doktor muayenehanesi", "en": "doctor's practice / clinic", "ar": "عيادة الطبيب", "uk": "лікарський кабінет / амбулаторія",
        "example_de": "Die Arztpraxis übermittelt die Krankmeldung digital an die Kasse.",
        "example_tr": "Doktor muayenehanesi hastalık bildirimini dijital olarak sigorta kasasına iletir.",
        "example_en": "The medical practice transmits the sick note digitally to the health insurer.",
        "example_ar": "ترسل عيادة الطبيب الإشعار المرضي رقمياً إلى شركة التأمين.",
        "example_uk": "Лікарський кабінет передає лікарняний в електронному вигляді до каси."
    },
    "arztterminen": {
        "de": "der Arzttermin", "displayDe": "Arzttermin", "article": "der", "plural": "die Arzttermine", "pos": "noun", "level": "A2",
        "tr": "doktor randevuları (Dativ Plural)", "en": "doctor appointments", "ar": "مواعيد الأطباء", "uk": "прийоми у лікаря",
        "example_de": "Bei dringenden Arztterminen hilft die bundesweite Servicenummer 116117.",
        "example_tr": "Acil doktor randevularında 116117 numaralı ulusal hizmet hattı yardımcı olur.",
        "example_en": "For urgent doctor appointments, nationwide service number 116117 helps.",
        "example_ar": "في مواعيد الأطباء العاجلة، يساعد الرقم الموحد 116117.",
        "example_uk": "При термінових записах до лікаря допомагає єдиний номер 116117."
    },
    "aufrufen": {
        "de": "aufrufen", "displayDe": "aufrufen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "açmak (web sitesi), çağırmak", "en": "to access / open (website)", "ar": "فتح / استدعاء موقع", "uk": "відкривати / завантажувати сайт",
        "example_de": "Man sollte die Adresse des Online-Portals manuell im Browser aufrufen.",
        "example_tr": "İnternet portalının adresi tarayıcıya elle yazılarak açılmalıdır.",
        "example_en": "One should manually open the online portal address in the browser.",
        "example_ar": "ينبغي فتح عنوان البوابة الإلكترونية يدوياً في المتصفح.",
        "example_uk": "Слід відкривати адресу онлайн-порталу вручну в браузері."
    },
    "ausfälle": {
        "de": "der Ausfall", "displayDe": "Ausfall", "article": "der", "plural": "die Ausfälle", "pos": "noun", "level": "B1",
        "tr": "sefer iptalleri, aksaklıklar", "en": "cancellations / failures", "ar": "إلغاءات / أعطال", "uk": "скасування рейсів / збої",
        "example_de": "Fahrgäste beklagen häufige Zugausfälle im Regionalverkehr.",
        "example_tr": "Yolcular bölgesel ulaşımda sık yaşanan tren iptallerinden şikayetçidir.",
        "example_en": "Passengers complain about frequent train cancellations in regional transit.",
        "example_ar": "يشكو الركاب من الإلغاء المتكرر للقطارات في النقل الإقليمي.",
        "example_uk": "Пасажири скаржаться на часті скасування поїздів у регіональному русі."
    },
    "ausgezahlt": {
        "de": "auszahlen", "displayDe": "auszahlen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "ödenen / hesaba yatırılan (Partizip II)", "en": "paid out (Participle II)", "ar": "صُرف / دُفع", "uk": "виплачений",
        "example_de": "Die Geldprämie wird am Jahresende auf das Konto ausgezahlt.",
        "example_tr": "Nakit ikramiye yıl sonunda banka hesabına ödenir.",
        "example_en": "The cash bonus is paid out to the account at the end of the year.",
        "example_ar": "تُصرف المكافأة المالية إلى الحساب في نهاية العام.",
        "example_uk": "Грошова премія виплачується на рахунок наприкінці року."
    },
    "authentifizierung": {
        "de": "die Authentifizierung", "displayDe": "Authentifizierung", "article": "die", "plural": "die Authentifizierungen", "pos": "noun", "level": "B1",
        "tr": "kimlik doğrulama", "en": "authentication", "ar": "المصادقة / التحقق من الهوية", "uk": "автентифікація",
        "example_de": "Zwei-Faktor-Authentifizierung bietet einen zusätzlichen Schutz.",
        "example_tr": "İki faktörlü kimlik doğrulama ek bir koruma sağlar.",
        "example_en": "Two-factor authentication provides an extra layer of security.",
        "example_ar": "توفر المصادقة الثنائية حماية إضافية.",
        "example_uk": "Двофакторна автентифікація забезпечує додатковий захист."
    },
    "auto": {
        "de": "das Auto", "displayDe": "Auto", "article": "das", "plural": "die Autos", "pos": "noun", "level": "A1",
        "tr": "araba, otomobil", "en": "car / automobile", "ar": "سيارة", "uk": "автомобіль",
        "example_de": "Viele Pendler lassen das Auto stehen und nutzen die Bahn.",
        "example_tr": "Birçok banliyö yolcusu arabayı bırakıp treni kullanıyor.",
        "example_en": "Many commuters leave the car behind and take the train.",
        "example_ar": "يترك العديد من المسافرين سياراتهم ويستخدمون القطار.",
        "example_uk": "Багато пасажирів залишають авто вдома і користуються потягом."
    },
    "b": {
        "de": "B", "displayDe": "B1", "article": "", "plural": "", "pos": "noun", "level": "B1",
        "tr": "B (B1 seviyesi)", "en": "B (B1 language level)", "ar": "المستوى ب1", "uk": "рівень В1",
        "example_de": "Das Sprachniveau B1 ist Voraussetzung für die Einbürgerung.",
        "example_tr": "B1 dil seviyesi vatandaşlığa geçiş için ön koşuldur.",
        "example_en": "The B1 language level is a prerequisite for naturalization.",
        "example_ar": "مستوى اللغة B1 شرط أساسي للحصول على الجنسية.",
        "example_uk": "Мовний рівень B1 є передумовою для набуття громадянства."
    },
    "bahnen": {
        "de": "die Bahn", "displayDe": "Bahn", "article": "die", "plural": "die Bahnen", "pos": "noun", "level": "A1",
        "tr": "trenler, demiryolları", "en": "trains / railways", "ar": "القطارات / السكك الحديدية", "uk": "поїзди / залізниці",
        "example_de": "Das Ticket gilt bundesweit in allen Bussen und Bahnen des Nahverkehrs.",
        "example_tr": "Bilet ülke genelinde yerel ulaşımın tüm otobüs ve trenlerinde geçerlidir.",
        "example_en": "The ticket is valid nationwide on all local buses and trains.",
        "example_ar": "التذكرة صالحة في جميع حافلات وقطارات النقل المحلي في ألمانيا.",
        "example_uk": "Квиток діє по всій Німеччині в усіх автобусах та поїздах місцевого сполучення."
    },
    "bahnverkehr": {
        "de": "der Bahnverkehr", "displayDe": "Bahnverkehr", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "demiryolu trafiği / ulaşımı", "en": "rail traffic / rail transport", "ar": "حركة القطارات / النقل بالسكك الحديدية", "uk": "залізничний рух",
        "example_de": "Für einen verlässlichen Bahnverkehr sind Investitionen ins Schienennetz nötig.",
        "example_tr": "Güvenilir bir demiryolu ulaşımı için ray ağına yatırımlar gereklidir.",
        "example_en": "Investments in the rail network are necessary for reliable rail transport.",
        "example_ar": "الاستثمارات في شبكة السكك الحديدية ضرورية لحركة قطارات موثوقة.",
        "example_uk": "Для надійного залізничного сполучення необхідні інвестиції в колійну мережу."
    },
    "bamf": {
        "de": "das BAMF", "displayDe": "BAMF", "article": "das", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "Federal Göç ve Mülteciler Dairesi", "en": "Federal Office for Migration and Refugees (BAMF)", "ar": "المكتب الاتحادي للهجرة واللاجئين", "uk": "Федеральне відомство у справах міграції та біженців",
        "example_de": "Das BAMF koordiniert und fördert die Integrationskurse in Deutschland.",
        "example_tr": "BAMF Almanya'daki uyum kurslarını koordine eder ve finanse eder.",
        "example_en": "The BAMF coordinates and funds integration courses in Germany.",
        "example_ar": "يقوم BAMF بتنسيق ودعم دورات الاندماج في ألمانيا.",
        "example_uk": "BAMF координує та фінансує інтеграційні курси в Німеччині."
    },
    "banken": {
        "de": "die Bank", "displayDe": "Bank", "article": "die", "plural": "die Banken", "pos": "noun", "level": "A1",
        "tr": "bankalar", "en": "banks", "ar": "بنوك / مصارف", "uk": "банки",
        "example_de": "Seriöse Banken fragen Passwörter niemals per E-Mail ab.",
        "example_tr": "Güvenilir bankalar parolaları asla e-posta ile sormaz.",
        "example_en": "Reputable banks never ask for passwords via email.",
        "example_ar": "البنوك الموثوقة لا تطلب كلمات المرور أبداً عبر البريد الإلكتروني.",
        "example_uk": "Надійні банки ніколи не запитують паролі електронною поштою."
    },
    "bares": {
        "de": "bar", "displayDe": "bar", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "nakit (bares Geld = nakit para)", "en": "cash", "ar": "نقدي", "uk": "готівка",
        "example_de": "Für Berufspendler bedeutet das günstige Ticket bares Geld.",
        "example_tr": "İşe gidip gelen çalışanlar için bu uygun bilet doğrudan nakit tasarrufu demektir.",
        "example_en": "For commuters, the cheap ticket means real cash savings.",
        "example_ar": "بالنسبة للمتنقلين للعمل، التذكرة الرخيصة تعني توفير مال حقيقي.",
        "example_uk": "Для щоденних пасажирів дешевий квиток означає чисту економію грошей."
    },
    "basiert": {
        "de": "basieren", "displayDe": "basieren", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "dayanmak, temeline oturmak (basiert auf)", "en": "is based on", "ar": "يرتكز على / يعتمد على", "uk": "базується на",
        "example_de": "Das deutsche Gesundheitssystem basiert auf dem Hausarzt-Prinzip.",
        "example_tr": "Alman sağlık sistemi aile hekimliği ilkesine dayanır.",
        "example_en": "The German healthcare system is based on the family doctor principle.",
        "example_ar": "يرتكز النظام الصحي الألماني على مبدأ طبيب الأسرة.",
        "example_uk": "Німецька система охорони здоров'я базується на принципі сімейного лікаря."
    },
    "baustein": {
        "de": "der Baustein", "displayDe": "Baustein", "article": "der", "plural": "die Bausteine", "pos": "noun", "level": "B1",
        "tr": "yapı taşı / temel unsur", "en": "building block / component", "ar": "عنصر أساسي / لبنة بناء", "uk": "будівельний блок / складова частина",
        "example_de": "Die Sprachprüfung ist ein unverzichtbarer Baustein für die Einbürgerung.",
        "example_tr": "Dil sınavı vatandaşlık için vazgeçilmez bir yapı taşıdır.",
        "example_en": "The language exam is an indispensable building block for naturalization.",
        "example_ar": "امتحان اللغة عنصر أساسي لا غنى عنه للحصول على الجنسية.",
        "example_uk": "Мовний іспит є невід'ємною складовою для набуття громадянства."
    },
    "bearbeiten": {
        "de": "bearbeiten", "displayDe": "bearbeiten", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "işlemek / düzenlemek", "en": "to process / edit", "ar": "معالجة / تعديل", "uk": "обробляти / опрацьовувати",
        "example_de": "Die Kursteilnehmer bearbeiten praxisnahe Übungsaufgaben.",
        "example_tr": "Kurs katılımcıları pratik alıştırma sorularını çözer ve işlerler.",
        "example_en": "Course participants work through practical exercises.",
        "example_ar": "يقوم المشاركون في الدورة بحل ومعالجة تمارين عملية.",
        "example_uk": "Учасники курсу опрацьовують практичні навчальні завдання."
    },
    "bedarf": {
        "de": "der Bedarf", "displayDe": "Bedarf", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "ihtiyaç, gereksinim (bei Bedarf = gerektiğinde)", "en": "need / demand (if needed)", "ar": "حاجة / عند الحاجة", "uk": "потреба (за потреби)",
        "example_de": "Der Hausarzt überweist bei Bedarf an einen spezialisierten Facharzt.",
        "example_tr": "Aile hekimi ihtiyaç durumunda uzman bir hekime sevk eder.",
        "example_en": "The general practitioner refers to a specialist if needed.",
        "example_ar": "يقوم طبيب الأسرة بالتحويل إلى طبيب مختص عند الحاجة.",
        "example_uk": "Сімейний лікар за потреби направляє до профільного спеціаліста."
    },
    "bedeutung": {
        "de": "die Bedeutung", "displayDe": "Bedeutung", "article": "die", "plural": "die Bedeutungen", "pos": "noun", "level": "B1",
        "tr": "önem, anlam", "en": "importance, significance", "ar": "أهمية / معنى", "uk": "значення / важливість",
        "example_de": "Regelmäßige Kontrolluntersuchungen sind von zentraler Bedeutung.",
        "example_tr": "Düzenli kontrol muayeneleri merkezi bir öneme sahiptir.",
        "example_en": "Regular checkups are of central importance.",
        "example_ar": "الفحوصات الدورية لها أهمية مركزية بالغة.",
        "example_uk": "Регулярні профілактичні огляди мають вирішальне значення."
    },
    "befahrenen": {
        "de": "befahren", "displayDe": "befahren", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "yoğun kullanılan / trafiği olan (çekimli sıfat)", "en": "busy / heavily traveled", "ar": "مزدحم / كثير المرور", "uk": "інтенсивно завантажений / проїзний",
        "example_de": "Auf stark befahrenen Strecken kommt es zu Verspätungen.",
        "example_tr": "Yoğun trafiği olan güzergahlarda gecikmeler yaşanır.",
        "example_en": "Delays occur on heavily traveled routes.",
        "example_ar": "تحدث التأخيرات على المسارات المزدحمة بحركة السير.",
        "example_uk": "На лініях з інтенсивним рухом трапляються запізнення."
    },
    "begrenzter": {
        "de": "begrenzt", "displayDe": "begrenzt", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "sınırlı", "en": "limited", "ar": "محدود", "uk": "обмежений",
        "example_de": "Die Teilnehmerzahl im Sprachkurs ist begrenzter Natur.",
        "example_tr": "Dil kursundaki katılımcı sayısı sınırlıdır.",
        "example_en": "The number of participants in the language course is limited.",
        "example_ar": "عدد المشاركين في دورة اللغة محدود.",
        "example_uk": "Кількість учасників на мовному курсі є обмеженою."
    },
    "behandlungskosten": {
        "de": "die Behandlungskosten", "displayDe": "Behandlungskosten", "article": "die", "plural": "die Behandlungskosten (Pl.)", "pos": "noun", "level": "B1",
        "tr": "tedavi masrafları / giderleri", "en": "treatment costs / medical expenses", "ar": "تكاليف العلاج", "uk": "витрати на лікування",
        "example_de": "Die gesetzliche Krankenkasse übernimmt die notwendigen Behandlungskosten.",
        "example_tr": "Yasal sağlık sigortası gerekli tedavi masraflarını karşılar.",
        "example_en": "The statutory health insurer covers necessary treatment costs.",
        "example_ar": "يغطي التأمين الصحي القانوني تكاليف العلاج اللازمة.",
        "example_uk": "Державна каса медичного страхування покриває необхідні витрати на лікування."
    },
    "beherrschen": {
        "de": "beherrschen", "displayDe": "beherrschen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "hakim olmak (dile), iyi bilmek", "en": "to master / command (language)", "ar": "أتقن / أجاد لغة", "uk": "опанувати / вільно володіти",
        "example_de": "Wer die deutsche Sprache gut beherrscht, findet schneller Anschluss.",
        "example_tr": "Almancaya iyi hakim olan kişi çevreye daha hızlı uyum sağlar.",
        "example_en": "Whoever masters the German language finds connections more quickly.",
        "example_ar": "من يتقن اللغة الألمانية يندمج بشكل أسرع.",
        "example_uk": "Той, хто добре володіє німецькою мовою, швидше знаходить контакти."
    },
    "behörden": {
        "de": "die Behörde", "displayDe": "Behörde", "article": "die", "plural": "die Behörden", "pos": "noun", "level": "B1",
        "tr": "resmi makamlar, kamu daireleri", "en": "authorities / government agencies", "ar": "السلطات / الدوائر الحكومية", "uk": "державні органи / установи",
        "example_de": "Im Alltag müssen Formulare bei verschiedenen Behörden eingereicht werden.",
        "example_tr": "Günlük yaşamda farklı resmi makamlara formlar verilmelidir.",
        "example_en": "In daily life, forms must be submitted to various authorities.",
        "example_ar": "في الحياة اليومية يجب تقديم الاستمارات إلى مختلف الدوائر الرسمية.",
        "example_uk": "У повсякденному житті форми необхідно подавати до різних органів влади."
    },
    "bekannt": {
        "de": "bekannt", "displayDe": "bekannt", "article": "", "plural": "", "pos": "adj", "level": "A1",
        "tr": "tanınmış, bilinen", "en": "known / familiar", "ar": "معروف / مشهور", "uk": "відомий",
        "example_de": "Das 49-Euro-Ticket ist bundesweit als Deutschlandticket bekannt.",
        "example_tr": "49 euroluk bilet ülke genelinde Almanya bileti olarak bilinir.",
        "example_en": "The 49-euro ticket is known nationwide as the Deutschlandticket.",
        "example_ar": "تُعرف تذكرة 49 يورو على مستوى البلاد باسم تذكرة ألمانيا.",
        "example_uk": "Квиток за 49 євро відомий у всій Німеччині як Дойчландтикет."
    },
    "bekannter": {
        "de": "bekannt", "displayDe": "bekannt", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "daha bilinen / bir tanıdık", "en": "more well-known / an acquaintance", "ar": "أكثر شهرة / معارف", "uk": "відоміший / знайомий",
        "example_de": "Das Programm wurde unter einem neuen Namen noch bekannter.",
        "example_tr": "Program yeni bir isimle daha da bilinir hale geldi.",
        "example_en": "The program became even more well known under a new name.",
        "example_ar": "أصبح البرنامج أكثر شهرة تحت اسم جديد.",
        "example_uk": "Програма стала ще відомішою під новою назвою."
    },
    "beklagen": {
        "de": "beklagen", "displayDe": "beklagen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "yakınmak, şikayet etmek", "en": "to complain about / lament", "ar": "اشتكى من / تذمر", "uk": "скаржитися на",
        "example_de": "Fahrgäste beklagen Verspätungen und überfüllte Züge.",
        "example_tr": "Yolcular gecikmelerden ve aşırı kalabalık trenlerden yakınıyor.",
        "example_en": "Passengers complain about delays and overcrowded trains.",
        "example_ar": "يشكو الركاب من التأخيرات وازدحام القطارات.",
        "example_uk": "Пасажири нарікають на запізнення та переповнені поїзди."
    },
    "bereits": {
        "de": "bereits", "displayDe": "bereits", "article": "", "plural": "", "pos": "adv", "level": "A2",
        "tr": "zaten, çoktan, şimdiden", "en": "already", "ar": "بالفعل / مسبقاً", "uk": "вже",
        "example_de": "Millionen Bürger nutzen bereits das monatliche Nahverkehrsticket.",
        "example_tr": "Milyonlarca vatandaş şimdiden aylık yerel ulaşım biletini kullanıyor.",
        "example_en": "Millions of citizens already use the monthly local transit ticket.",
        "example_ar": "يستخدم ملايين المواطنين بالفعل تذكرة النقل المحلي الشهرية.",
        "example_uk": "Мільйони громадян вже користуються щомісячним квитком на транспорт."
    },
    "berufliche": {
        "de": "beruflich", "displayDe": "beruflich", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "mesleki", "en": "professional / vocational", "ar": "مهني / وظيفي", "uk": "професійний",
        "example_de": "Gute Deutschkenntnisse eröffnen viele berufliche Chancen.",
        "example_tr": "İyi Almanca bilgisi birçok mesleki fırsatın kapısını açar.",
        "example_en": "Good German language skills open up many professional opportunities.",
        "example_ar": "تفتح المعرفة الجيدة بالألمانية فرصاً مهنية عديدة.",
        "example_uk": "Добре знання німецької мови відкриває численні професійні можливості."
    },
    "berufspendler": {
        "de": "der Berufspendler", "displayDe": "Berufspendler", "article": "der", "plural": "die Berufspendler", "pos": "noun", "level": "B1",
        "tr": "işi için düzenli seyahat eden kişi / banliyö yolcusu", "en": "commuter / daily commuter", "ar": "المتنقلون للعمل يومياً", "uk": "щоденний пасажир до місця роботи",
        "example_de": "Für Berufspendler bringt das Ticket eine spürbare finanzielle Entlastung.",
        "example_tr": "İşe gidip gelenler için bilet hissedilir bir maddi rahatlama getiriyor.",
        "example_en": "For commuters, the ticket brings noticeable financial relief.",
        "example_ar": "يجلب الكرت تخفيفاً مالياً ملموساً للمسافرين يومياً للعمل.",
        "example_uk": "Для людей, які їздять на роботу, квиток дає відчутне фінансове полегшення."
    },
    "berufsverkehr": {
        "de": "der Berufsverkehr", "displayDe": "Berufsverkehr", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "iş giriş-çıkış trafiği / yoğun saat trafiği", "en": "rush hour / commuter traffic", "ar": "حركة المرور في أوقات الذروة", "uk": "рух у години пік",
        "example_de": "Im morgendlichen Berufsverkehr sind die Straßen oft verstopft.",
        "example_tr": "Sabah iş trafiğinde yollar genellikle tıkanır.",
        "example_en": "In morning commuter rush hour, roads are often congested.",
        "example_ar": "في أوقات الذروة الصباحية غالباً ما تزدحم الطرقات.",
        "example_uk": "У ранкові години пік дороги часто перевантажені."
    },
    "beschwerden": {
        "de": "die Beschwerde", "displayDe": "Beschwerde", "article": "die", "plural": "die Beschwerden", "pos": "noun", "level": "A2",
        "tr": "sağlık şikayetleri / ağrılar", "en": "physical complaints / symptoms", "ar": "أعراض مرضية / شكاوى صحية", "uk": "скарги на здоров'я / симптоми",
        "example_de": "Bei gesundheitlichen Beschwerden geht man zuerst zum Hausarzt.",
        "example_tr": "Sağlık şikayetlerinde ilk önce aile hekimine gidilir.",
        "example_en": "For health complaints, one first goes to the general practitioner.",
        "example_ar": "عند وجود أعراض صحية يتوجه المرء أولاً إلى طبيب الأسرة.",
        "example_uk": "При скаргах на здоров'я спочатку йдуть до сімейного лікаря."
    },
    "besteht": {
        "de": "bestehen", "displayDe": "bestehen", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "oluşmak / var olmak (besteht aus)", "en": "consists of / exists", "ar": "يتكون من / يوجد", "uk": "складається з / існує",
        "example_de": "Der Integrationskurs besteht aus Sprachkurs und Orientierungskurs.",
        "example_tr": "Uyum kursu dil kursu ve yönlendirme kursundan oluşur.",
        "example_en": "The integration course consists of a language course and orientation course.",
        "example_ar": "تتكون دورة الاندماج من دورة لغة ودورة توجيهية.",
        "example_uk": "Інтеграційний курс складається з мовного курсу та орієнтаційного курсу."
    },
    "besten": {
        "de": "gut", "displayDe": "am besten", "article": "", "plural": "", "pos": "adj", "level": "A1",
        "tr": "en iyi (Superlativ)", "en": "the best / best", "ar": "الأفضل / على أفضل وجه", "uk": "найкраще",
        "example_de": "Der Hausarzt kennt die Krankengeschichte seiner Patienten am besten.",
        "example_tr": "Aile hekimi hastalarının sağlık geçmişini en iyi bilir.",
        "example_en": "The family doctor knows their patients' medical history best.",
        "example_ar": "طبيب الأسرة يعرف السجل الصحي لمرضاه على أفضل وجه.",
        "example_uk": "Сімейний лікар найкраще знає історію хвороб своїх пацієнтів."
    },
    "bestätigungscode": {
        "de": "der Bestätigungscode", "displayDe": "Bestätigungscode", "article": "der", "plural": "die Bestätigungscodes", "pos": "noun", "level": "B1",
        "tr": "onay kodu, doğrulama kodu", "en": "confirmation code / verification code", "ar": "رمز التأكيد / التحقق", "uk": "код підтвердження",
        "example_de": "Der Bestätigungscode wird per SMS an das Smartphone gesendet.",
        "example_tr": "Onay kodu akıllı telefona kısa mesajla gönderilir.",
        "example_en": "The confirmation code is sent to the smartphone via SMS.",
        "example_ar": "يُرسل رمز التأكيد عبر رسالة نصية قصيرة إلى الهاتف الذكي.",
        "example_uk": "Код підтвердження надсилається в SMS на смартфон."
    },
    "betonen": {
        "de": "betonen", "displayDe": "betonen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "vurgulamak, önemini belirtmek", "en": "to emphasize / stress", "ar": "أكد على / شدد", "uk": "наголошувати / підкреслювати",
        "example_de": "Verkehrsexperten betonen die Notwendigkeit von Investitionen.",
        "example_tr": "Ulaşım uzmanları yatırımların gerekliliğini vurguluyor.",
        "example_en": "Transport experts emphasize the necessity of investments.",
        "example_ar": "يؤكد خبراء النقل على ضرورة ضخ الاستثمارات.",
        "example_uk": "Транспортні експерти наголошують на необхідності інвестицій."
    },
    "bewegt": {
        "de": "bewegen", "displayDe": "bewegen", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "hareket ettirmek / etkilemek (sich bewegen)", "en": "moves / exercises", "ar": "يتحرك / يحرك", "uk": "рухається / рухає",
        "example_de": "Wer sich regelmäßig bewegt, stärkt sein Immunsystem.",
        "example_tr": "Düzenli hareket eden kişi bağışıklık sistemini güçlendirir.",
        "example_en": "Whoever exercises regularly strengthens their immune system.",
        "example_ar": "من يتحرك بانتظام يقوي جهاز مناعته.",
        "example_uk": "Той, хто регулярно рухається, зміцнює свій імунітет."
    },
    "bewährten": {
        "de": "bewährt", "displayDe": "bewährt", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "kendini kanıtlamış, güvenilir", "en": "proven / time-tested", "ar": "مُجرَّب / أثبت كفاءته", "uk": "перевірений часом / надійний",
        "example_de": "Das deutsche Gesundheitssystem basiert auf dem bewährten Hausarzt-Prinzip.",
        "example_tr": "Alman sağlık sistemi kendini kanıtlamış aile hekimliği ilkesine dayanır.",
        "example_en": "The German healthcare system is based on the proven family doctor principle.",
        "example_ar": "يرتكز النظام الصحي الألماني على مبدأ طبيب الأسرة المُجرّب.",
        "example_uk": "Німецька система охорони здоров'я спирається на перевірений принцип сімейного лікаря."
    },
    "bildet": {
        "de": "bilden", "displayDe": "bilden", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "oluşturmak (er/sie/es bildet)", "en": "forms / constitutes", "ar": "يشكل / يُكون", "uk": "формує / становить",
        "example_de": "Das Zertifikat Deutsch B1 bildet das Fundament für die Einbürgerung.",
        "example_tr": "B1 Almanca sertifikası vatandaşlık için temel oluşturur.",
        "example_en": "The B1 certificate forms the foundation for naturalization.",
        "example_ar": "تشكل شهادة اللغة B1 الأساس للحصول على الجنسية.",
        "example_uk": "Сертифікат B1 становить основу для отримання громадянства."
    },
    "bleibt": {
        "de": "bleiben", "displayDe": "bleiben", "article": "", "plural": "", "pos": "verb", "level": "A1",
        "tr": "kalmak (er/sie/es bleibt)", "en": "remains / stays", "ar": "يبقى / يظل", "uk": "залишається",
        "example_de": "Das Ticket bleibt für viele Bürger ein attraktives Angebot.",
        "example_tr": "Bilet birçok vatandaş için cazip bir teklif olmaya devam ediyor.",
        "example_en": "The ticket remains an attractive offer for many citizens.",
        "example_ar": "تظل التذكرة عرضاً جذاباً للعديد من المواطنين.",
        "example_uk": "Квиток залишається привабливою пропозицією для багатьох громадян."
    },
    "bonuspunkte": {
        "de": "der Bonuspunkt", "displayDe": "Bonuspunkt", "article": "der", "plural": "die Bonuspunkte", "pos": "noun", "level": "B1",
        "tr": "bonus puanlar, ödül puanları", "en": "bonus points / reward points", "ar": "نقاط المكافأة", "uk": "бонусні бали",
        "example_de": "Wer Vorsorgetermine wahrnimmt, sammelt wertvolle Bonuspunkte.",
        "example_tr": "Kontrol muayenelerine gidenler değerli bonus puanlar toplar.",
        "example_en": "Whoever attends checkups collects valuable bonus points.",
        "example_ar": "من يلتزم بالفحوصات الوقائية يجمع نقاط مكافأة قيّمة.",
        "example_uk": "Той, хто відвідує профілактичні огляди, накопичує цінні бонусні бали."
    },
    "browser": {
        "de": "der Browser", "displayDe": "Browser", "article": "der", "plural": "die Browser", "pos": "noun", "level": "A2",
        "tr": "web tarayıcısı", "en": "web browser", "ar": "متصفح الإنترنت", "uk": "веб-браузер",
        "example_de": "Geben Sie die Webadresse manuell in die Adresszeile des Browsers ein.",
        "example_tr": "İnternet adresini tarayıcının adres çubuğuna elle yazın.",
        "example_en": "Enter the web address manually into the browser address bar.",
        "example_ar": "أدخل عنوان الويب يدوياً في شريط عناوين المتصفح.",
        "example_uk": "Введіть веб-адресу вручну в рядок пошуку браузера."
    },
    "buch": {
        "de": "das Buch", "displayDe": "Buch", "article": "das", "plural": "die Bücher", "pos": "noun", "level": "A1",
        "tr": "kitap", "en": "book", "ar": "كتاب", "uk": "книга",
        "example_de": "Im Unterricht arbeiten die Lernenden mit einem modernen Lehrbuch.",
        "example_tr": "Derste öğrenciler modern bir ders kitabıyla çalışırlar.",
        "example_en": "In class, learners work with a modern textbook.",
        "example_ar": "في الفصل يعمل المتعلمون باستخدام كتاب مدرسي حديث.",
        "example_uk": "На заняттях учні працюють за сучасним підручником."
    },
    "buchen": {
        "de": "buchen", "displayDe": "buchen", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "rezervasyon yapmak, bilet almak / randevu almak", "en": "to book / reserve", "ar": "حجز / اشترى تذكرة", "uk": "бронювати / купувати квиток",
        "example_de": "Patienten können Arzttermine rund um die Uhr online buchen.",
        "example_tr": "Hastalar günün her saati internetten doktor randevusu alabilir.",
        "example_en": "Patients can book doctor appointments online around the clock.",
        "example_ar": "يمكن للمرضى حجز مواعيد الأطباء عبر الإنترنت على مدار الساعة.",
        "example_uk": "Пацієнти можуть бронювати прийом до лікаря онлайн цілодобово."
    },
    "bundesamt": {
        "de": "das Bundesamt", "displayDe": "Bundesamt", "article": "das", "plural": "die Bundesämter", "pos": "noun", "level": "B1",
        "tr": "Federal Daire / Federal Kurum", "en": "federal office / federal agency", "ar": "المكتب الاتحادي", "uk": "федеральне відомство",
        "example_de": "Das Bundesamt für Migration ist für die Integrationskurse zuständig.",
        "example_tr": "Federal Göç Dairesi uyum kurslarından sorumludur.",
        "example_en": "The Federal Office for Migration is responsible for integration courses.",
        "example_ar": "المكتب الاتحادي للهجرة هو المسؤول عن دورات الاندмаج.",
        "example_uk": "Федеральне відомство з питань міграції відповідає за інтеграційні курси."
    },
    "bundesregierung": {
        "de": "die Bundesregierung", "displayDe": "Bundesregierung", "article": "die", "plural": "die Bundesregierungen", "pos": "noun", "level": "B1",
        "tr": "Federal Hükümet", "en": "Federal Government", "ar": "الحكومة الاتحادية", "uk": "Федеральний уряд",
        "example_de": "Die Bundesregierung unterstützt die Finanzierung des Nahverkehrstickets.",
        "example_tr": "Federal Hükümet yerel ulaşım biletinin finansmanını desteklemektedir.",
        "example_en": "The Federal Government supports the financing of the local transit ticket.",
        "example_ar": "تدعم الحكومة الاتحادية تمويل تذكرة النقل المحلي.",
        "example_uk": "Федеральний уряд підтримує фінансування квитка на місцевий транспорт."
    },
    "bundesweit": {
        "de": "bundesweit", "displayDe": "bundesweit", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "ülke genelinde, tüm Almanya çapında", "en": "nationwide / throughout Germany", "ar": "على مستوى ألمانيا / في عموم البلاد", "uk": "по всій Німеччині / загальнодержавний",
        "example_de": "Das Ticket gilt bundesweit im regionalen Nahverkehr.",
        "example_tr": "Bilet tüm Almanya genelinde bölgesel yerel ulaşımda geçerlidir.",
        "example_en": "The ticket is valid nationwide in regional transit.",
        "example_ar": "التذكرة صالحة في جميع أنحاء البلاد في النقل الإقليمي.",
        "example_uk": "Квиток діє по всій країні в регіональному сполученні."
    },
    "bundesweiten": {
        "de": "bundesweit", "displayDe": "bundesweit", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "ülke çapındaki (çekimli sıfat)", "en": "nationwide (declined)", "ar": "على مستوى البلاد", "uk": "загальнонаціональний",
        "example_de": "Über die bundesweite Rufnummer 116117 erhält man ärztliche Hilfe.",
        "example_tr": "Ülke genelindeki 116117 numaralı hat üzerinden tıbbi yardım alınır.",
        "example_en": "Medical assistance is available via the nationwide phone number 116117.",
        "example_ar": "يمكن الحصول على المساعدة الطبية عبر الرقم الوطني 116117.",
        "example_uk": "Медичну допомогу можна отримати за загальнонімецьким номером 116117."
    },
    "bussen": {
        "de": "der Bus", "displayDe": "Bus", "article": "der", "plural": "die Busse", "pos": "noun", "level": "A1",
        "tr": "otobüslerde (Dativ Plural)", "en": "buses (Dative plural)", "ar": "الحافلات (في الحافلات)", "uk": "автобусах",
        "example_de": "Das Ticket gilt in allen Bussen und Straßenbahnen der Stadt.",
        "example_tr": "Bilet şehrin tüm otobüs ve tramvaylarında geçerlidir.",
        "example_en": "The ticket is valid on all buses and trams in the city.",
        "example_ar": "التذكرة صالحة في جميع حافلات المدينة وترامها.",
        "example_uk": "Квиток діє в усіх міських автобусах та трамваях."
    },
    "bürger": {
        "de": "der Bürger", "displayDe": "Bürger", "article": "der", "plural": "die Bürger", "pos": "noun", "level": "A2",
        "tr": "vatandaş / yurttaşlar", "en": "citizens / citizen", "ar": "مواطن / مواطنون", "uk": "громадяни / громадянин",
        "example_de": "Viele Bürger nutzen das Deutschlandticket für den täglichen Arbeitsweg.",
        "example_tr": "Birçok vatandaş günlük iş yolu için Almanya biletini kullanıyor.",
        "example_en": "Many citizens use the Deutschlandticket for their daily commute.",
        "example_ar": "يستخدم العديد من المواطنين تذكرة ألمانيا للتنقل اليومي إلى العمل.",
        "example_uk": "Багато громадян використовують Дойчландтикет для щоденних поїздок на роботу."
    },
    "check": {
        "de": "der Check", "displayDe": "Check", "article": "der", "plural": "die Checks", "pos": "noun", "level": "A2",
        "tr": "kontrol, çek (Check-up)", "en": "check / checkup", "ar": "فحص / تدقيق", "uk": "перевірка / огляд",
        "example_de": "Ein regelmäßiger Check beim Arzt schützt vor schweren Krankheiten.",
        "example_tr": "Doktorda yapılacak düzenli bir kontrol ağır hastalıklardan korur.",
        "example_en": "A regular checkup at the doctor protects against serious illness.",
        "example_ar": "الفحص المنتظم عند الطبيب يحمي من الأمراض الخطيرة.",
        "example_uk": "Регулярний огляд у лікаря захищає від серйозних захворювань."
    },
    "dank": {
        "de": "dank", "displayDe": "dank", "article": "", "plural": "", "pos": "prep", "level": "B1",
        "tr": "sayesinde (+ Gen / Dat)", "en": "thanks to (+ Gen / Dat)", "ar": "بفضل / بسببه", "uk": "завдяки",
        "example_de": "Dank der elektronischen Patientenakte haben Ärzte schnellen Einblick.",
        "example_tr": "Elektronik hasta dosyası sayesinde doktorlar hızlıca bilgi edinebilir.",
        "example_en": "Thanks to the electronic patient file, doctors have quick insight.",
        "example_ar": "بفضل الملف الإلكتروني للمريض، يملك الأطباء وصولاً سريعاً للمعلومات.",
        "example_uk": "Завдяки електронній медичній карті лікарі мають швидкий доступ до інформації."
    },
    "dar": {
        "de": "darstellen", "displayDe": "darstellen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "temsil etmek, oluşturmak (stellt ... dar)", "en": "constitutes / represents", "ar": "يمثل / يشكل", "uk": "становить / представляє",
        "example_de": "Die Prüfung stellt einen wichtigen Meilenstein im Integrationsprozess dar.",
        "example_tr": "Sınav uyum sürecinde önemli bir dönüm noktası teşkil eder.",
        "example_en": "The exam represents an important milestone in the integration process.",
        "example_ar": "يمثل الامتحان محطة هامة في مسيرة الاندماج.",
        "example_uk": "Іспит є важливою віхою в процесі інтеграції."
    },
    "daten": {
        "de": "die Daten", "displayDe": "Daten", "article": "die", "plural": "die Daten (Pl.)", "pos": "noun", "level": "A2",
        "tr": "veriler, bilgiler", "en": "data / information", "ar": "بيانات / معلومات", "uk": "дані / відомості",
        "example_de": "Persönliche Daten müssen vor unbefugtem Zugriff geschützt werden.",
        "example_tr": "Kişisel veriler yetkisiz erişime karşı korunmalıdır.",
        "example_en": "Personal data must be protected against unauthorized access.",
        "example_ar": "يجب حماية البيانات الشخصية من الوصول غير المصرح به.",
        "example_uk": "Особисті дані мають бути захищені від несанкціонованого доступу."
    },
    "datenschutz": {
        "de": "der Datenschutz", "displayDe": "Datenschutz", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "veri koruma / kişisel verilerin gizliliği", "en": "data protection / data privacy", "ar": "حماية البيانات والخصوصية", "uk": "захист персональних даних",
        "example_de": "Der Datenschutz hat im digitalen Zeitalter höchste Priorität.",
        "example_tr": "Veri koruma dijital çağda en yüksek önceliğe sahiptir.",
        "example_en": "Data protection has the highest priority in the digital age.",
        "example_ar": "تحظى حماية البيانات بالأولوية القصوى في العصر الرقمي.",
        "example_uk": "Захист даних має найвищий пріоритет у цифрову епоху."
    },
    "dauerhaft": {
        "de": "dauerhaft", "displayDe": "dauerhaft", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "kalıcı, sürekli", "en": "permanent / lasting", "ar": "دائم / طويل الأمد", "uk": "тривалий / постійний",
        "example_de": "Eine dauerhafte Finanzierung des öffentlichen Verkehrs ist erforderlich.",
        "example_tr": "Toplu taşımanın kalıcı bir şekilde finanse edilmesi gereklidir.",
        "example_en": "Permanent financing of public transit is required.",
        "example_ar": "التمويل الدائم لوسائل النقل العام أمر ضروري.",
        "example_uk": "Необхідне стабільне та постійне фінансування громадського транспорту."
    },
    "davon": {
        "de": "davon", "displayDe": "davon", "article": "", "plural": "", "pos": "adv", "level": "A2",
        "tr": "bundan, ondan, bunun hakkında", "en": "from it / of that", "ar": "من ذلك / عنه", "uk": "з цього / від цього",
        "example_de": "Viele Pendler profitieren finanziell davon.",
        "example_tr": "Birçok banliyö yolcusu bundan maddi olarak faydalanıyor.",
        "example_en": "Many commuters benefit financially from it.",
        "example_ar": "يستفيد العديد من الركاب مادياً من ذلك.",
        "example_uk": "Багато пасажирів отримують від цього фінансову вигоду."
    },
    "davor": {
        "de": "davor", "displayDe": "davor", "article": "", "plural": "", "pos": "adv", "level": "A2",
        "tr": "bundan önce / buna karşı", "en": "before that / against it", "ar": "قبل ذلك / من ذلك", "uk": "перед цим / від цього",
        "example_de": "Experten warnen davor, unsichere Passwörter zu verwenden.",
        "example_tr": "Uzmanlar güvensiz parolalar kullanılmasına karşı uyarıyor.",
        "example_en": "Experts warn against using insecure passwords.",
        "example_ar": "يحذر الخبراء من استخدام كلمات مرور غير آمنة.",
        "example_uk": "Експерти застерігають від використання ненадійних паролів."
    },
    "dazu": {
        "de": "dazu", "displayDe": "dazu", "article": "", "plural": "", "pos": "adv", "level": "A2",
        "tr": "buna ek olarak, bunun için", "en": "in addition / to this", "ar": "بالإضافة إلى ذلك / لذلك", "uk": "до цього / крім того",
        "example_de": "Dazu gehören ein gültiger Personalausweis und die Krankenkassenkarte.",
        "example_tr": "Bunun için geçerli bir kimlik kartı ve sigorta kartı gereklidir.",
        "example_en": "This includes a valid identity card and health insurance card.",
        "example_ar": "يشمل ذلك بطاقة هوية سارية وبطاقة التأمين الصحي.",
        "example_uk": "Для цього потрібні дійсне посвідчення особи та картка медичного страхування."
    },
    "deckmantel": {
        "de": "der Deckmantel", "displayDe": "Deckmantel", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "maske, kisve, bahane (unter dem Deckmantel)", "en": "guise / cloak / cover", "ar": "ستار / غطاء مخادع", "uk": "прикриття / ширма",
        "example_de": "Betrüger agieren oft unter dem Deckmantel seriöser Banken.",
        "example_tr": "Dolandırıcılar genellikle güvenilir bankaların kisvesi altında hareket eder.",
        "example_en": "Fraudsters often operate under the guise of reputable banks.",
        "example_ar": "غالباً ما ينشط المحتالون تحت ستار بنوك موثوقة.",
        "example_uk": "Шахраї часто діють під прикриттям авторитетних банків."
    },
    "dennoch": {
        "de": "dennoch", "displayDe": "dennoch", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "yine de, buna rağmen", "en": "nevertheless / yet", "ar": "مع ذلك / بالرغم من ذلك", "uk": "проте / все ж таки",
        "example_de": "Dennoch gibt es im Bahnverkehr noch Verbesserungsbedarf.",
        "example_tr": "Yine de demiryolu ulaşımında iyileştirme ihtiyacı bulunmaktadır.",
        "example_en": "Nevertheless, there is still room for improvement in rail transit.",
        "example_ar": "مع ذلك لا تزال هناك حاجة للتحسين في حركة القطارات.",
        "example_uk": "Проте в залізничному сполученні все ще є потреба в покращенні."
    },
    "deutlichen": {
        "de": "deutlich", "displayDe": "deutlich", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "belirgin, açık (çekimli sıfat)", "en": "significant / clear", "ar": "واضح / ملحوظ", "uk": "значний / виразний",
        "example_de": "Verkehrsunternehmen verzeichnen einen deutlichen Zuwachs.",
        "example_tr": "Ulaşım işletmeleri belirgin bir artış kaydediyor.",
        "example_en": "Transport companies record a significant growth.",
        "example_ar": "تسجل شركات النقل زيادة ملحوظة.",
        "example_uk": "Транспортні підприємства фіксують відчутний приріст."
    },
    "deutsch": {
        "de": "deutsch", "displayDe": "deutsch", "article": "", "plural": "", "pos": "adj", "level": "A1",
        "tr": "Alman, Almanca", "en": "German", "ar": "ألماني", "uk": "німецький",
        "example_de": "Der Test Deutsch als Fremdsprache ist international anerkannt.",
        "example_tr": "Yabancı dil olarak Almanca sınavı uluslararası alanda tanınmaktadır.",
        "example_en": "The German as a foreign language test is internationally recognized.",
        "example_ar": "اختبار الألمانية كلغة أجنبية معترف به دولياً.",
        "example_uk": "Тест з німецької мови як іноземної визнаний на міжнародному рівні."
    },
    "deutschlands": {
        "de": "Deutschland", "displayDe": "Deutschland", "article": "", "plural": "", "pos": "noun", "level": "A1",
        "tr": "Almanya'nın (Genitiv)", "en": "Germany's", "ar": "ألمانيا (مضاف إليه)", "uk": "Німеччини",
        "example_de": "Das Schienennetz Deutschlands muss modernisiert werden.",
        "example_tr": "Almanya'nın demiryolu ağı modernize edilmelidir.",
        "example_en": "Germany's rail network needs to be modernized.",
        "example_ar": "يجب تحديث شبكة السكك الحديدية في ألمانيا.",
        "example_uk": "Залізнична мережа Німеччини потребує модернізації."
    },
    "deutschlandtickets": {
        "de": "das Deutschlandticket", "displayDe": "Deutschlandticket", "article": "das", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "Almanya biletinin (Genitiv)", "en": "Deutschlandticket's", "ar": "تذكرة ألمانيا (مضاف إليه)", "uk": "Дойчландтикету",
        "example_de": "Der Erfolg des Deutschlandtickets zeigt die hohe Nachfrage.",
        "example_tr": "Almanya biletinin başarısı yüksek talebi göstermektedir.",
        "example_en": "The success of the Deutschlandticket shows high demand.",
        "example_ar": "يُظهر نجاح تذكرة ألمانيا حجم الإقبال الكبير عليها.",
        "example_uk": "Успіх Дойчландтикету свідчить про високий попит."
    },
    "deutschsprachiger": {
        "de": "deutschsprachig", "displayDe": "deutschsprachig", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "Almanca konuşulan / konuşan", "en": "German-speaking", "ar": "ناطق بالألمانية", "uk": "німецькомовний",
        "example_de": "Der Konsum deutschsprachiger Medien fördert den Spracherwerb.",
        "example_tr": "Almanca medyanın takip edilmesi dil öğrenimini destekler.",
        "example_en": "Consuming German-language media promotes language acquisition.",
        "example_ar": "متابعة وسائل الإعلام الناطقة بالألمانية تدعم تعلم اللغة.",
        "example_uk": "Споживання німецькомовного медіаконтенту сприяє вивченню мови."
    },
    "diagnose": {
        "de": "die Diagnose", "displayDe": "Diagnose", "article": "die", "plural": "die Diagnosen", "pos": "noun", "level": "B1",
        "tr": "teşhis, tanı", "en": "diagnosis", "ar": "تشخيص طبي", "uk": "діагноз",
        "example_de": "Eine frühzeitige Diagnose verbessert die Heilungschancen erheblich.",
        "example_tr": "Erken teşhis iyileşme şansını önemli ölçüde artırır.",
        "example_en": "An early diagnosis significantly improves chances of recovery.",
        "example_ar": "التشخيص المبكر يحسن فرص الشفاء بشكل كبير.",
        "example_uk": "Рання діагностика значно підвищує шанси на одужання."
    },
    "dienstleister": {
        "de": "der Dienstleister", "displayDe": "Dienstleister", "article": "der", "plural": "die Dienstleister", "pos": "noun", "level": "B1",
        "tr": "hizmet sağlayıcı / servis şirketi", "en": "service provider", "ar": "مقدم خدمة", "uk": "постачальник послуг",
        "example_de": "Seriöse Dienstleister verlangen niemals sensible Passwörter per E-Mail.",
        "example_tr": "Güvenilir hizmet sağlayıcıları asla e-postayla hassas parola istemez.",
        "example_en": "Reputable service providers never ask for sensitive passwords by email.",
        "example_ar": "لا يطلب مقدمو الخدمات الموثوقون أبداً كلمات المرور الحساسة عبر البريد.",
        "example_uk": "Надійні постачальники послуг ніколи не вимагають конфіденційні паролі електронною поштою."
    },
    "digitale": {
        "de": "digital", "displayDe": "digital", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "dijital (çekimli sıfat)", "en": "digital", "ar": "رقمي", "uk": "цифровий",
        "example_de": "Digitale Medien erleichtern die Terminbuchung beim Arzt.",
        "example_tr": "Dijital medya doktordan randevu almayı kolaylaştırıyor.",
        "example_en": "Digital media facilitates appointment booking at the doctor.",
        "example_ar": "الوسائط الرقمية تسهل حجز المواعيد لدى الطبيب.",
        "example_uk": "Цифрові засоби спрощують запис на прийом до лікаря."
    },
    "digitalen": {
        "de": "digital", "displayDe": "digital", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "dijital (çekimli form)", "en": "digital", "ar": "الرقمي", "uk": "цифровий",
        "example_de": "In der digitalen Welt ist ein sicheres Passwort unverzichtbar.",
        "example_tr": "Dijital dünyada güvenli bir parola vazgeçilmezdir.",
        "example_en": "In the digital world, a secure password is indispensable.",
        "example_ar": "في العالم الرقمي، كلمة المرور الآمنة أمر لا غنى عنه.",
        "example_uk": "У цифровому світі надійний пароль є обов'язковим."
    },
    "digitalisierung": {
        "de": "die Digitalisierung", "displayDe": "Digitalisierung", "article": "die", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "dijitalleşme", "en": "digitalization / digitization", "ar": "التحول الرقمي / الرقمنة", "uk": "цифровізація",
        "example_de": "Die Digitalisierung des Gesundheitswesens spart Patienten viel Zeit.",
        "example_tr": "Sağlık sisteminin dijitalleşmesi hastalara çok zaman kazandırıyor.",
        "example_en": "The digitalization of the healthcare system saves patients a lot of time.",
        "example_ar": "رقمنة قطاع الرعاية الصحية توفر على المرضى الكثير من الوقت.",
        "example_uk": "Цифровізація системи охорони здоров'я заощаджує пацієнтам багато часу."
    },
    "dokument": {
        "de": "das Dokument", "displayDe": "Dokument", "article": "das", "plural": "die Dokumente", "pos": "noun", "level": "A2",
        "tr": "belge, evrak", "en": "document", "ar": "وثيقة / مستند", "uk": "документ",
        "example_de": "Das B1-Zertifikat ist ein wichtiges Dokument für die Behörden.",
        "example_tr": "B1 sertifikası resmi makamlar için önemli bir belgedir.",
        "example_en": "The B1 certificate is an important document for the authorities.",
        "example_ar": "شهادة B1 هي وثيقة مهمة للسلطات الرسمية.",
        "example_uk": "Сертифікат B1 є важливим документом для державних органів."
    },
    "dringend": {
        "de": "dringend", "displayDe": "dringend", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "acil, acilen", "en": "urgent / pressing", "ar": "عاجل / طارئ", "uk": "терміновий / невідкладний",
        "example_de": "Bei dringenden gesundheitlichen Beschwerden hilft der Notdienst.",
        "example_tr": "Acil sağlık şikayetlerinde nöbetçi sağlık servisi yardımcı olur.",
        "example_en": "In urgent medical cases, emergency on-call service helps.",
        "example_ar": "في الحالات الصحية العاجلة تساعد خدمة الطوارئ الطبية.",
        "example_uk": "При термінових скаргах на здоров'я допомагає чергова медична служба."
    },
    "dsgvo": {
        "de": "die DSGVO", "displayDe": "DSGVO", "article": "die", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "Genel Veri Koruma Tüzüğü (GDPR)", "en": "General Data Protection Regulation (GDPR)", "ar": "اللائحة العامة لحماية البيانات", "uk": "Загальний регламент про захист даних (GDPR)",
        "example_de": "Die europäische DSGVO schützt die Privatsphäre aller Internetnutzer.",
        "example_tr": "Avrupa Genel Veri Koruma Tüzüğü tüm internet kullanıcılarının gizliliğini korur.",
        "example_en": "The European GDPR protects the privacy of all internet users.",
        "example_ar": "تحمي اللائحة العامة لحماية البيانات الأوروبية خصوصية جميع مستخدمي الإنترنت.",
        "example_uk": "Європейський регламент GDPR захищає приватність усіх користувачів інтернету."
    },
    "dtz": {
        "de": "der DTZ", "displayDe": "DTZ", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "Göçmenler İçin Almanca Testi", "en": "Deutsch-Test für Zuwanderer (DTZ)", "ar": "امتحان اللغة الألمانية للمهاجرين", "uk": "тест з німецької мови для іммігрантів (DTZ)",
        "example_de": "Die DTZ-Prüfung schließt den Integrationskurs auf B1-Niveau ab.",
        "example_tr": "DTZ sınavı uyum kursunu B1 seviyesinde tamamlar.",
        "example_en": "The DTZ exam concludes the integration course at B1 level.",
        "example_ar": "يختتم اختبار DTZ دورة الاندماج بمستوى B1.",
        "example_uk": "Іспит DTZ завершує інтеграційний курс на рівні B1."
    },
    "durch": {
        "de": "durch", "displayDe": "durch", "article": "", "plural": "", "pos": "prep", "level": "A1",
        "tr": "aracılığıyla, yoluyla, içinden (+ Akkusativ)", "en": "through / by means of (+ Accusative)", "ar": "من خلال / عبر", "uk": "через / завдяки (+ Akkusativ)",
        "example_de": "Durch regelmäßiges Üben erreicht man das Prüfungsziel.",
        "example_tr": "Düzenli pratik yaparak sınav hedefine ulaşılır.",
        "example_en": "Through regular practice, one achieves the exam goal.",
        "example_ar": "من خلال التدريب المنتظم يصل المرء إلى هدف الامتحان.",
        "example_uk": "Завдяки регулярним тренуванням досягається мета іспиту."
    },
    "dürfen": {
        "de": "dürfen", "displayDe": "dürfen", "article": "", "plural": "", "pos": "verb", "level": "A1",
        "tr": "izinli olmak, yapabilmek (modal fiil)", "en": "may / to be allowed to", "ar": "يُسمح له / يجوز", "uk": "мати дозвіл / могти",
        "example_de": "Unternehmen dürfen Daten nur mit Einwilligung speichern.",
        "example_tr": "Şirketler verileri ancak kullanıcının rızasıyla saklayabilir.",
        "example_en": "Companies may only store data with explicit consent.",
        "example_ar": "لا يجوز للشركات تخزين البيانات إلا بموافقة صريحة.",
        "example_uk": "Компанії мають право зберігати дані лише за згодою користувача."
    }
}
