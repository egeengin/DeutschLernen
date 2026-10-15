#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Compiles data/readingLexicon.js containing exact contextual definitions
for 100% of the 417 unique German words in the telc B1 reading comprehension texts.
"""

import json
import os
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEXICON_PATH = os.path.join(ROOT_DIR, "data", "readingLexicon.js")

# Import all modular parts
import sys
sys.path.insert(0, os.path.join(ROOT_DIR, "scripts"))
from reading_lexicon_parts.part_d import PART_D
from reading_lexicon_parts.part_e import PART_E
from reading_lexicon_parts.part_f_g import PART_F_G
from reading_lexicon_parts.part_h_i_j_k import PART_H_I_J_K
from reading_lexicon_parts.part_l_m import PART_L_M
from reading_lexicon_parts.part_n_o_p_r import PART_N_O_P_R
from reading_lexicon_parts.part_s import PART_S
from reading_lexicon_parts.part_t_u_v import PART_T_U_V
from reading_lexicon_parts.part_w_z import PART_W_Z
from reading_lexicon_parts.part_units_5_6 import PART_UNITS_5_6

# Letter A & B
PART_A_B = {
    "abend": {
        "de": "der Abend", "displayDe": "Abend", "article": "der", "plural": "die Abende", "pos": "noun", "level": "A1",
        "tr": "akşam", "en": "evening", "ar": "مساء", "uk": "вечір",
        "example_de": "Häufig werden dienstliche E-Mails noch spät am Abend beantwortet.",
        "example_tr": "İş e-postaları çoğu zaman akşam geç saatlerde bile yanıtlanıyor.",
        "example_en": "Work emails are often answered late in the evening.",
        "example_ar": "غالبًا ما يُرد على رسائل العمل الإلكترونية في وقت متأخر من المساء.",
        "example_uk": "Часто на робочі листи відповідають пізно ввечері."
    },
    "abends": {
        "de": "abends", "displayDe": "abends", "article": "", "plural": "", "pos": "adv", "level": "A1",
        "tr": "akşamları, akşamleyin", "en": "in the evenings", "ar": "في المساء", "uk": "щовечора",
        "example_de": "Gesetzliche Ruhezeiten zwischen 22:00 Uhr abends und 6:00 Uhr morgens.",
        "example_tr": "Akşam saat 22:00 ile sabah 06:00 arasındaki yasal dinlenme saatleri.",
        "example_en": "Statutory quiet hours between 10 p.m. in the evening and 6 a.m. in the morning.",
        "example_ar": "فترات الراحة القانونية بين العاشرة مساءً والسادسة صباحًا.",
        "example_uk": "Законні години тиші між 22:00 вечора та 6:00 ранку."
    },
    "abschalten": {
        "de": "das Abschalten", "displayDe": "Abschalten", "article": "das", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "işi kafadan silme, dinlenme moduna geçme", "en": "switching off / unwinding", "ar": "الاسترخاء ونسيان العمل", "uk": "відпочинок / перемикання уваги",
        "example_de": "Wenn der Schreibtisch im Wohnzimmer steht, fällt vielen das Abschalten schwer.",
        "example_tr": "Çalışma masası salondayken, birçok kişiye işi kafadan silip dinlenmek zor geliyor.",
        "example_en": "When the desk is in the living room, many find it hard to switch off.",
        "example_ar": "عندما يكون مكتب العمل في غرفة المعيشة، يصعب على الكثيرين الاسترخاء ونسيان العمل.",
        "example_uk": "Коли письмовий стіл стоїть у вітальні, багатьом важко перемкнутися на відпочинок."
    },
    "absicherung": {
        "de": "die Absicherung", "displayDe": "Absicherung", "article": "die", "plural": "die Absicherungen", "pos": "noun", "level": "B1",
        "tr": "güvence, teminat", "en": "financial security / guarantee", "ar": "تأمين مالي / ضمان", "uk": "фінансова гарантія / страхування",
        "example_de": "Vermieter verlangen eine Kaution als finanzielle Absicherung.",
        "example_tr": "Ev sahipleri mali güvence olarak depozito talep eder.",
        "example_en": "Landlords require a deposit as financial security.",
        "example_ar": "يطلب المؤجرون وديعة تأمين كضمان مالي.",
        "example_uk": "Орендодавці вимагають заставу як фінансову гарантію."
    },
    "aktuellen": {
        "de": "aktuell", "displayDe": "aktuell", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "güncel, son yapılan", "en": "current / recent", "ar": "حالي / حديث", "uk": "актуальний / поточний",
        "example_de": "Nach aktuellen Umfragen schätzen Mitarbeiter den Wegfall des Arbeitswegs.",
        "example_tr": "Son yapılan anketlere göre çalışanlar işe gidiş yolunun ortadan kalkmasını takdir ediyor.",
        "example_en": "According to current surveys, employees appreciate eliminating the commute.",
        "example_ar": "وفقًا للاستطلاعات الحالية، يقدر الموظفون إلغاء طريق العمل.",
        "example_uk": "Згідно з актуальними опитуваннями, працівники цінують відсутність дороги на роботу."
    },
    "allem": {
        "de": "vor allem", "displayDe": "vor allem", "article": "", "plural": "", "pos": "adv", "level": "A2",
        "tr": "özellikle, her şeyden önce", "en": "above all / especially", "ar": "قبل كل شيء / خاصة", "uk": "перш за все / особливо",
        "example_de": "Mitarbeiter schätzen vor allem den Wegfall des täglichen Arbeitswegs.",
        "example_tr": "Çalışanlar özellikle günlük işe gidiş yolunun kalkmasını değerli buluyor.",
        "example_en": "Employees especially appreciate the elimination of the daily commute.",
        "example_ar": "يقدر الموظفون قبل كل شيء إلغاء التنقل اليومي إلى العمل.",
        "example_uk": "Працівники перш за все цінують відсутність щоденної дороги на роботу."
    },
    "aller": {
        "de": "aller", "displayDe": "alle", "article": "", "plural": "", "pos": "pron", "level": "A1",
        "tr": "hepsinin, tümünün", "en": "of all", "ar": "لكل / لجميع", "uk": "всіх",
        "example_de": "Homeoffice gehört mittlerweile für fast ein Drittel aller Erwerbstätigen zum Alltag.",
        "example_tr": "Evden çalışma artık tüm çalışanların yaklaşık üçte biri için günlük yaşamın parçasıdır.",
        "example_en": "Home office is now part of everyday life for nearly a third of all workers.",
        "example_ar": "أصبح العمل من المنزل جزءًا من الحياة اليومية لثلث جميع العاملين تقريبًا.",
        "example_uk": "Робота з дому стала повсякденністю для майже третини всіх працюючих."
    },
    "allerdings": {
        "de": "allerdings", "displayDe": "allerdings", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "bununla birlikte, ancak, fakat", "en": "however / though", "ar": "مع ذلك / على أية حال", "uk": "проте / однак",
        "example_de": "Allerdings stehen Vereine heute vor personellen Herausforderungen.",
        "example_tr": "Bununla birlikte, dernekler bugün personel zorluklarıyla karşı karşıyadır.",
        "example_en": "However, clubs today face staffing challenges.",
        "example_ar": "ومع ذلك، تواجه الجمعيات اليوم تحديات في عدد المتطوعين.",
        "example_uk": "Проте клуби сьогодні стикаються з кадровими труднощами."
    },
    "als": {
        "de": "als", "displayDe": "als", "article": "", "plural": "", "pos": "conj", "level": "A1",
        "tr": "olarak, -den daha (karşılaştırma), -dığı zaman", "en": "as / than / when", "ar": "كـ / من / عندما", "uk": "як / ніж / коли",
        "example_de": "Mehr als 28 Millionen Menschen engagieren sich freiwillig.",
        "example_tr": "28 milyondan fazla insan gönüllü olarak çalışıyor.",
        "example_en": "More than 28 million people volunteer.",
        "example_ar": "أكثر من 28 مليون شخص يشاركون في العمل التطوعي.",
        "example_uk": "Понад 28 мільйонів людей займаються волонтерством."
    },
    "also": {
        "de": "also", "displayDe": "also", "article": "", "plural": "", "pos": "adv", "level": "A1",
        "tr": "yani, demek ki, bu durumda", "en": "so / therefore / that is", "ar": "إذن / أي", "uk": "отже / тобто",
        "example_de": "Innerhalb von 14 Tagen, also bis zum 25. Mai.",
        "example_tr": "14 gün içinde, yani 25 Mayıs tarihine kadar.",
        "example_en": "Within 14 days, that is by May 25th.",
        "example_ar": "في غضون 14 يومًا، أي حتى 25 مايو.",
        "example_uk": "Протягом 14 днів, тобто до 25 травня."
    },
    "am": {
        "de": "am (an + dem)", "displayDe": "am", "article": "", "plural": "", "pos": "prep", "level": "A1",
        "tr": "-de, -da (günde, tarihte, vakitte)", "en": "at the / on the", "ar": "في / عند", "uk": "в / на",
        "example_de": "Die Miete muss am Monatsanfang überwiesen werden.",
        "example_tr": "Kira ayın başında havale edilmelidir.",
        "example_en": "The rent must be transferred at the beginning of the month.",
        "example_ar": "يجب تحويل الإيجار في بداية الشهر.",
        "example_uk": "Орендну плату необхідно перераховувати на початку місяця."
    },
    "an": {
        "de": "an", "displayDe": "an", "article": "", "plural": "", "pos": "prep", "level": "A1",
        "tr": "-de, -e, bitişiğinde (tarih/günlerde)", "en": "at / on", "ar": "في / على", "uk": "на / при",
        "example_de": "Beschäftigte arbeiten an zwei festen Tagen im Büro.",
        "example_tr": "Çalışanlar iki sabit günde ofiste çalışıyor.",
        "example_en": "Employees work on two fixed days in the office.",
        "example_ar": "يعمل الموظفون في يومين محددين في المكتب.",
        "example_uk": "Працівники працюють два фіксованих дні в офісі."
    },
    "anderem": {
        "de": "unter anderem", "displayDe": "unter anderem", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "diğerlerinin yanı sıra, bu arada", "en": "among other things", "ar": "من بين أمور أخرى", "uk": "серед іншого",
        "example_de": "Die Hausordnung regelt unter anderem die gesetzlichen Ruhezeiten.",
        "example_tr": "Bina kuralları diğer hususların yanı sıra yasal dinlenme saatlerini de düzenler.",
        "example_en": "The house rules regulate, among other things, the statutory quiet hours.",
        "example_ar": "تنظم لائحة البناية من بين أمور أخرى أوقات الهدوء القانونية.",
        "example_uk": "Правила будинку регулюють, серед іншого, законні години тиші."
    },
    "anfang": {
        "de": "von Anfang an", "displayDe": "Anfang", "article": "der", "plural": "die Anfänge", "pos": "noun", "level": "A1",
        "tr": "en başından beri, başlangıç", "en": "from the beginning / start", "ar": "منذ البداية", "uk": "з самого початку",
        "example_de": "Da das Gerät von Anfang an mangelhaft war.",
        "example_tr": "Cihaz en başından beri kusurlu olduğu için.",
        "example_en": "Since the device was defective from the beginning.",
        "example_ar": "بما أن الجهاز كان معيبًا منذ البداية.",
        "example_uk": "Оскільки пристрій був несправним із самого початку."
    },
    "angebote": {
        "de": "das Angebot", "displayDe": "Angebot", "article": "das", "plural": "die Angebote", "pos": "noun", "level": "A2",
        "tr": "hizmetler, olanaklar, teklifler", "en": "offerings / services / activities", "ar": "عروض / خدمات مجتمعية", "uk": "пропозиції / послуги",
        "example_de": "Ohne freiwillige Helfer würden viele öffentliche Angebote nicht existieren.",
        "example_tr": "Gönüllü yardımcılar olmadan birçok kamu hizmeti var olamazdı.",
        "example_en": "Without volunteers, many public offerings would not exist.",
        "example_ar": "بدون المتطوعين، لم تكن العديد من الخدمات العامة لتوجد.",
        "example_uk": "Без волонтерів багато громадських послуг просто не існувало б."
    },
    "anhang": {
        "de": "der Anhang", "displayDe": "Anhang", "article": "der", "plural": "die Anhänge", "pos": "noun", "level": "A2",
        "tr": "ek, e-posta eki", "en": "attachment", "ar": "مرفق", "uk": "додаток / вкладення",
        "example_de": "Ein Foto ist dieser E-Mail als Anhang beigefügt.",
        "example_tr": "Bu e-postaya ek olarak bir fotoğraf iliştirilmiştir.",
        "example_en": "A photo is attached to this email.",
        "example_ar": "تم إرفاق صورة مع هذا البريد الإلكتروني كملف مرفق.",
        "example_uk": "Фотографію додано до цього електронного листа як вкладення."
    },
    "arbeit": {
        "de": "die Arbeit", "displayDe": "Arbeit", "article": "die", "plural": "die Arbeiten", "pos": "noun", "level": "A1",
        "tr": "iş, çalışma", "en": "work / job", "ar": "عمل", "uk": "робота",
        "example_de": "Nach sechs Stunden Arbeit muss eine Pause eingelegt werden.",
        "example_tr": "Altı saatlik çalışmanın ardından bir mola verilmelidir.",
        "example_en": "After six hours of work, a break must be taken.",
        "example_ar": "بعد ست ساعات من العمل، يجب أخذ استراحة.",
        "example_uk": "Після шести годин роботи необхідно зробити перерву."
    },
    "arbeiten": {
        "de": "arbeiten", "displayDe": "arbeiten", "article": "", "plural": "", "pos": "verb", "level": "A1",
        "tr": "çalışmak; (isim: el işleri, tadilat)", "en": "to work / (noun: repair works)", "ar": "يعمل / أعمال", "uk": "працювати / ремонтні роботи",
        "example_de": "Das Arbeiten in den eigenen vier Wänden birgt Risiken.",
        "example_tr": "Kendi dört duvarı arasında çalışmak riskler barındırır.",
        "example_en": "Working within one's own four walls holds risks.",
        "example_ar": "العمل داخل جدران المنزل الأربعة ينطوي على مخاطر.",
        "example_uk": "Робота у власних чотирьох стінах несе в собі ризики."
    },
    "arbeitsmodelle": {
        "de": "das Arbeitsmodell", "displayDe": "Arbeitsmodell", "article": "das", "plural": "die Arbeitsmodelle", "pos": "noun", "level": "B1",
        "tr": "çalışma modelleri", "en": "work models", "ar": "نماذج العمل", "uk": "моделі роботи",
        "example_de": "Immer mehr Unternehmen setzen auf hybride Arbeitsmodelle.",
        "example_tr": "Gittikçe daha fazla şirket hibrit çalışma modellerine yöneliyor.",
        "example_en": "More and more companies rely on hybrid work models.",
        "example_ar": "تعتمد المزيد من الشركات على نماذج العمل الهجينة.",
        "example_uk": "Дедалі більше компаній обирають гібридні моделі роботи."
    },
    "arbeitspsychologen": {
        "de": "der Arbeitspsychologe", "displayDe": "Arbeitspsychologe", "article": "der", "plural": "die Arbeitspsychologen", "pos": "noun", "level": "B2",
        "tr": "iş psikologları", "en": "occupational psychologists", "ar": "علماء النفس المهني", "uk": "психологи праці",
        "example_de": "Arbeitspsychologen warnen vor der sogenannten Entgrenzung.",
        "example_tr": "İş psikologları sınırların kaybolması tehlikesine karşı uyarıyor.",
        "example_en": "Occupational psychologists warn of the blurring of boundaries.",
        "example_ar": "يحذر أخصائيو علم النفس المهني مما يسمى بتلاشي الحدود.",
        "example_uk": "Психологи праці застерігають від так званого розмивання меж."
    },
    "arbeitstagen": {
        "de": "der Arbeitstag", "displayDe": "Arbeitstag", "article": "der", "plural": "die Arbeitstage", "pos": "noun", "level": "A2",
        "tr": "iş günleri", "en": "workdays", "ar": "أيام العمل", "uk": "робочі дні",
        "example_de": "Zwischen Arbeitstagen müssen elf Stunden Ruhezeit liegen.",
        "example_tr": "İş günleri arasında on bir saat dinlenme süresi bulunmalıdır.",
        "example_en": "There must be eleven hours of rest between workdays.",
        "example_ar": "يجب أن تكون هناك إحدى عشرة ساعة من الراحة بين أيام العمل.",
        "example_uk": "Між робочими днями має бути одинадцять годин відпочинку."
    },
    "arbeitswegs": {
        "de": "der Arbeitsweg", "displayDe": "Arbeitsweg", "article": "der", "plural": "die Arbeitswege", "pos": "noun", "level": "B1",
        "tr": "işe gidiş gelişi, iş yolu", "en": "commute to work", "ar": "طريق العمل / التنقل للعمل", "uk": "дорога на роботу",
        "example_de": "Mitarbeiter schätzen den Wegfall des täglichen Arbeitswegs.",
        "example_tr": "Çalışanlar günlük işe gidiş yolunun ortadan kalkmasını değerli buluyor.",
        "example_en": "Employees value eliminating the daily commute.",
        "example_ar": "يقدر الموظفون إلغاء طريق العمل اليومي.",
        "example_uk": "Працівники цінують відсутність щоденної дороги на роботу."
    },
    "arbeitswelt": {
        "de": "die Arbeitswelt", "displayDe": "Arbeitswelt", "article": "die", "plural": "die Arbeitswelten", "pos": "noun", "level": "B1",
        "tr": "çalışma hayatı, iş dünyası", "en": "working world / labor landscape", "ar": "عالم العمل", "uk": "сфера праці / світ роботи",
        "example_de": "Die Arbeitswelt in Deutschland hat sich grundlegend gewandelt.",
        "example_tr": "Almanya'da çalışma hayatı köklü bir biçimde değişti.",
        "example_en": "The working world in Germany has changed fundamentally.",
        "example_ar": "تغير عالم العمل في ألمانيا بشكل جذري.",
        "example_uk": "Світ праці в Німеччині докорінно змінився."
    },
    "arbeitszeitgesetz": {
        "de": "das Arbeitszeitgesetz", "displayDe": "Arbeitszeitgesetz", "article": "das", "plural": "die Arbeitszeitgesetze", "pos": "noun", "level": "B2",
        "tr": "çalışma saatleri yasası", "en": "working hours act", "ar": "قانون ساعات العمل", "uk": "закон про робочий час",
        "example_de": "Gesetzlich gilt das deutsche Arbeitszeitgesetz auch zu Hause.",
        "example_tr": "Yasal olarak Alman çalışma saatleri kanunu evde de geçerlidir.",
        "example_en": "By law, the German Working Hours Act also applies at home.",
        "example_ar": "من الناحية القانونية، ينطبق قانون ساعات العمل الألماني في المنزل أيضًا.",
        "example_uk": "Згідно із законом, німецький закон про робочий час діє і вдома."
    },
    "auch": {
        "de": "auch", "displayDe": "auch", "article": "", "plural": "", "pos": "adv", "level": "A1",
        "tr": "de, da, ayrıca", "en": "also / too", "ar": "أيضًا", "uk": "також",
        "example_de": "Das Ehrenamt ist auch eine Gelegenheit, neue Kontakte zu knüpfen.",
        "example_tr": "Gönüllülük aynı zamanda yeni çevre edinmek için bir fırsattır.",
        "example_en": "Volunteering is also an opportunity to make new contacts.",
        "example_ar": "العمل التطوعي هو أيضًا فرصة لبناء علاقات جديدة.",
        "example_uk": "Волонтерство — це також можливість знайти нові контакти."
    },
    "auf": {
        "de": "auf", "displayDe": "auf", "article": "", "plural": "", "pos": "prep", "level": "A1",
        "tr": "-de, üzerinde; -e, doğru", "en": "on / upon / to", "ar": "على / في", "uk": "на",
        "example_de": "Den vollen Kaufpreis auf mein Bankkonto erstatten.",
        "example_tr": "Toplam satış tutarını banka hesabıma iade ediniz.",
        "example_en": "Refund the full purchase price to my bank account.",
        "example_ar": "استرداد كامل سعر الشراء إلى حسابي المصرفي.",
        "example_uk": "Повернути повну вартість покупки на мій банківський рахунок."
    },
    "ausläuft": {
        "de": "auslaufen", "displayDe": "auslaufen", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "akmak, sızdırmak, dışarı akmak", "en": "to leak / run out", "ar": "يتسرب / يسيل", "uk": "витікати",
        "example_de": "Der Wassertank ist undicht, sodass das Wasser sofort ausläuft.",
        "example_tr": "Su tankı sızdırıyor, bu yüzden su anında dışarı akıyor.",
        "example_en": "The water tank is leaking, so the water runs out immediately.",
        "example_ar": "خزان المياه يسرب، بحيث يتدفق الماء على الفور.",
        "example_uk": "Резервуар для води протікає, тому вода одразу витікає."
    },
    "ausnahme": {
        "de": "die Ausnahme", "displayDe": "Ausnahme", "article": "die", "plural": "die Ausnahmen", "pos": "noun", "level": "B1",
        "tr": "istisna", "en": "exception", "ar": "استثناء", "uk": "виняток",
        "example_de": "Das Homeoffice war früher eine seltene Ausnahme.",
        "example_tr": "Evden çalışma eskiden nadir bir istisnaydı.",
        "example_en": "Home office used to be a rare exception.",
        "example_ar": "كان العمل من المنزل في السابق استثناءً نادرًا.",
        "example_uk": "Робота з дому раніше була рідкісним винятком."
    },
    "austausch": {
        "de": "der Austausch", "displayDe": "Austausch", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "fikir alışverişi, sohbet, iletişim", "en": "exchange / conversation", "ar": "تبادل الآراء / تواصل", "uk": "обмін думками / спілкування",
        "example_de": "Viele Beschäftigte vermissen den spontanen Austausch beim Kaffee.",
        "example_tr": "Pek çok çalışan kahve molasındaki anlık sohbeti özlüyor.",
        "example_en": "Many employees miss the spontaneous chat over coffee.",
        "example_ar": "يفتقد العديد من الموظفين تبادل الأحاديث العفوية أثناء شرب القهوة.",
        "example_uk": "Багато працівників сумують за спонтанним спілкуванням за кавою."
    },
    "auszug": {
        "de": "der Auszug", "displayDe": "Auszug", "article": "der", "plural": "die Auszüge", "pos": "noun", "level": "B1",
        "tr": "evden taşınma, çıkış", "en": "moving out", "ar": "الانتقال من المسكن / الإخلاء", "uk": "виїзд з помешкання",
        "example_de": "Nach dem Auszug muss der Vermieter die Kaution samt Zinsen zurückzahlen.",
        "example_tr": "Taşındıktan sonra ev sahibi depozitoyu faiziyle birlikte geri ödemelidir.",
        "example_en": "After moving out, the landlord must refund the deposit with interest.",
        "example_ar": "بعد الإخلاء، يجب على المؤجر إعادة الوديعة مع الفوائد.",
        "example_uk": "Після виїзду орендодавець повинен повернути заставу з відсотками."
    },
    "außerdem": {
        "de": "außerdem", "displayDe": "außerdem", "article": "", "plural": "", "pos": "adv", "level": "A2",
        "tr": "ayrıca, bundan başka", "en": "furthermore / besides", "ar": "بالإضافة إلى ذلك", "uk": "крім того",
        "example_de": "Wichtig ist außerdem die Hausordnung.",
        "example_tr": "Ayrıca apartman kuralları da önemlidir.",
        "example_en": "The house rules are also important.",
        "example_ar": "من المهم أيضًا مراعاة قواعد البناية.",
        "example_uk": "Крім того, важливими є правила будинку."
    },
    "baldmöglichst": {
        "de": "baldmöglichst", "displayDe": "baldmöglichst", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "mümkün olan en kısa sürede", "en": "as soon as possible", "ar": "في أقرب وقت ممكن", "uk": "якомога швидше",
        "example_de": "Bitte teilen Sie mir baldmöglichst mit, wie ich das Gerät zurücksenden kann.",
        "example_tr": "Lütfen cihazı nasıl geri gönderebileceğimi en kısa sürede bana bildiriniz.",
        "example_en": "Please let me know as soon as possible how I can return the device.",
        "example_ar": "يرجى إبلاغي في أقرب وقت ممكن بكيفية إعادة الجهاز.",
        "example_uk": "Будь ласка, повідомте мені якомога швидше, як я можу повернути пристрій."
    },
    "ballungsräumen": {
        "de": "der Ballungsraum", "displayDe": "Ballungsraum", "article": "der", "plural": "die Ballungsräume", "pos": "noun", "level": "B2",
        "tr": "yoğun nüfuslu metropol bölgeleri", "en": "metropolitan areas / conurbations", "ar": "المناطق الحضرية المكتظة", "uk": "густонаселені міські агломерації",
        "example_de": "Die Wohnungssuche in deutschen Ballungsräumen erfordert Geduld.",
        "example_tr": "Alman metropollerinde ev aramak sabır gerektirir.",
        "example_en": "Finding an apartment in German metropolitan areas requires patience.",
        "example_ar": "يتطلب البحث عن شقة في التجمعات الحضرية الألمانية صبرًا.",
        "example_uk": "Пошук житла у великих містах Німеччини вимагає терпіння."
    },
    "bankkonto": {
        "de": "das Bankkonto", "displayDe": "Bankkonto", "article": "das", "plural": "die Bankkonten", "pos": "noun", "level": "A2",
        "tr": "banka hesabı", "en": "bank account", "ar": "حساب مصرفي", "uk": "банківський рахунок",
        "example_de": "Den Betrag auf mein Bankkonto überweisen.",
        "example_tr": "Tutarı banka hesabıma havale ediniz.",
        "example_en": "Transfer the amount to my bank account.",
        "example_ar": "تحويل المبلغ إلى حسابي المصرفي.",
        "example_uk": "Перерахувати суму на мій банківський рахунок."
    },
    "beantwortet": {
        "de": "beantworten", "displayDe": "beantworten", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "yanıtlamak, cevaplandırmak", "en": "to answer / reply to", "ar": "يجيب / يرد على", "uk": "відповідати на",
        "example_de": "Dienstliche E-Mails werden spät am Abend beantwortet.",
        "example_tr": "İş e-postaları akşam geç vakitlerde yanıtlanıyor.",
        "example_en": "Work emails are answered late in the evening.",
        "example_ar": "يتم الرد على رسائل العمل في وقت متأخر من المساء.",
        "example_uk": "На службові електронні листи відповідають пізно ввечері."
    },
    "beginn": {
        "de": "der Beginn", "displayDe": "Beginn", "article": "der", "plural": "-", "pos": "noun", "level": "A2",
        "tr": "başlangıç, başlangıcı", "en": "beginning / start", "ar": "بداية", "uk": "початок",
        "example_de": "Die erste Rate ist zu Beginn des Mietverhältnisses fällig.",
        "example_tr": "İlk taksit kira ilişkisinin başlangıcında vadesi gelmiş olur.",
        "example_en": "The first installment is due at the beginning of the tenancy.",
        "example_ar": "القسط الأول يستحق في بداية علاقة الإيجار.",
        "example_uk": "Перший платіж сплачується на початку дії договору оренди."
    },
    "begleichen": {
        "de": "begleichen", "displayDe": "begleichen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "ödemek, kapatmak (borç/fatura)", "en": "to pay / settle (an amount)", "ar": "يسدد / يدفع", "uk": "сплачувати / погашати",
        "example_de": "Mieter dürfen die Summe in drei Monatsraten begleichen.",
        "example_tr": "Kiracılar tutarı üç aylık taksitle ödeyebilirler.",
        "example_en": "Tenants may settle the sum in three monthly installments.",
        "example_ar": "يحق للمستأجرين سداد المبلغ على ثلاثة أقساط شهرية.",
        "example_uk": "Орендарі мають право сплатити суму трьома щомісячними платежами."
    },
    "bei": {
        "de": "bei", "displayDe": "bei", "article": "", "plural": "", "pos": "prep", "level": "A1",
        "tr": "-de, yanında, sırasında, esnasında", "en": "at / with / during", "ar": "لدى / عند", "uk": "у / при",
        "example_de": "Ob bei der Freiwilligen Feuerwehr oder im Sportverein.",
        "example_tr": "İster gönüllü itfaiyede isterse spor kulübünde olsun.",
        "example_en": "Whether at the volunteer fire brigade or in the sports club.",
        "example_ar": "سواء في فرقة الإطفاء التطوعية أو في النادي الرياضي.",
        "example_uk": "Чи то в добровільній пожежній команді, чи в спортивному клубі."
    },
    "beides": {
        "de": "beides", "displayDe": "beides", "article": "", "plural": "", "pos": "pron", "level": "A2",
        "tr": "her ikisi birden", "en": "both", "ar": "كلاهما", "uk": "обидва",
        "example_de": "Erst beides zusammen ergibt die tatsächliche Warmmiete.",
        "example_tr": "Ancak her ikisi birlikte gerçek sıcak kirayı oluşturur.",
        "example_en": "Only both together make up the actual warm rent.",
        "example_ar": "كلاهما معًا فقط يشكلان الإيجار الإجمالي الفعلي.",
        "example_uk": "Лише обидва разом складають фактичну теплу орендну плату."
    },
    "beigefügt": {
        "de": "beifügen", "displayDe": "beifügen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "iliştirmek, eklemek", "en": "to enclose / attach", "ar": "مرفق / مُلحق", "uk": "додавати / вкладати",
        "example_de": "Eine Kopie der Rechnung ist dieser Mail beigefügt.",
        "example_tr": "Faturanın bir kopyası bu e-postaya iliştirilmiştir.",
        "example_en": "A copy of the invoice is attached to this email.",
        "example_ar": "نسخة من الفاتورة مرفقة بهذا البريد الإلكتروني.",
        "example_uk": "Копію рахунку додано до цього листа."
    },
    "beim": {
        "de": "beim (bei + dem)", "displayDe": "beim", "article": "", "plural": "", "pos": "prep", "level": "A1",
        "tr": "sırasında, esnasında", "en": "at the / during the", "ar": "أثناء / عند", "uk": "під час",
        "example_de": "Spontaner Austausch beim Kaffee.",
        "example_tr": "Kahve içerken yapılan anlık sohbet.",
        "example_en": "Spontaneous conversation over coffee.",
        "example_ar": "تبادل الأحاديث العفوية عند شرب القهوة.",
        "example_uk": "Спонтанне спілкування за кавою."
    },
    "beispielsweise": {
        "de": "beispielsweise", "displayDe": "beispielsweise", "article": "", "plural": "", "pos": "adv", "level": "B1",
        "tr": "örneğin, sözgelimi", "en": "for example / for instance", "ar": "على سبيل المثال", "uk": "наприклад",
        "example_de": "Beschäftigte arbeiten beispielsweise an zwei Tagen im Büro.",
        "example_tr": "Çalışanlar örneğin iki gün ofiste çalışmaktadır.",
        "example_en": "Employees work, for example, on two days in the office.",
        "example_ar": "يعمل الموظفون على سبيل المثال يومين في المكتب.",
        "example_uk": "Працівники працюють, наприклад, два дні в офісі."
    },
    "beitrag": {
        "de": "der Beitrag", "displayDe": "Beitrag", "article": "der", "plural": "die Beiträge", "pos": "noun", "level": "B1",
        "tr": "katkı, aidat", "en": "contribution / fee", "ar": "مساهمة / اشتراك", "uk": "внесок",
        "example_de": "Einen wichtigen Beitrag für die Gesellschaft leisten.",
        "example_tr": "Toplum için önemli bir katkı sağlamak.",
        "example_en": "To make an important contribution to society.",
        "example_ar": "تقديم مساهمة مهمة للمجتمع.",
        "example_uk": "Зробити важливий внесок для суспільства."
    },
    "beitritt": {
        "de": "der Beitritt", "displayDe": "Beitritt", "article": "der", "plural": "die Beitritte", "pos": "noun", "level": "B1",
        "tr": "katılım, üye olma", "en": "joining / admission / accession", "ar": "انضمام / انتساب", "uk": "вступ / приєднання",
        "example_de": "Der Beitritt zu einem Verein erleichtert das Einleben.",
        "example_tr": "Bir derneğe üye olmak uyum sağlamayı kolaylaştırır.",
        "example_en": "Joining a club makes settling in easier.",
        "example_ar": "الانضمام إلى جمعية يسهل الاندмаج.",
        "example_uk": "Вступ до клубу полегшує адаптацію."
    },
    "beliebt": {
        "de": "beliebt", "displayDe": "beliebt", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "sevilen, popüler, revaçta", "en": "popular / well-liked", "ar": "محبوب / شعبي", "uk": "популярний / улюблений",
        "example_de": "Besonders beliebt sind Sportvereine.",
        "example_tr": "Özellikle spor kulüpleri çok popülerdir.",
        "example_en": "Sports clubs are particularly popular.",
        "example_ar": "تحظى الأندية الرياضية بشعبية خاصة.",
        "example_uk": "Особливо популярними є спортивні клуби."
    },
    "bereit": {
        "de": "bereit", "displayDe": "bereit", "article": "", "plural": "", "pos": "adj", "level": "A2",
        "tr": "hazır, istekli", "en": "ready / willing", "ar": "مستعد / جاهز", "uk": "готовий",
        "example_de": "Immer weniger jüngere Menschen sind bereit, Verpflichtungen zu übernehmen.",
        "example_tr": "Gittikçe daha az genç sorumluluk üstlenmeye hazır.",
        "example_en": "Fewer and fewer young people are ready to take on commitments.",
        "example_ar": "عدد أقل من الشباب على استعداد لتحمل المسؤوليات.",
        "example_uk": "Дедалі менше молодих людей готові брати на себе зобов'язання."
    },
    "berichten": {
        "de": "berichten", "displayDe": "berichten", "article": "", "plural": "", "pos": "verb", "level": "A2",
        "tr": "bildirmek, anlatmak, rapor etmek", "en": "to report / tell", "ar": "يُفيد / يروي / يُخبر", "uk": "повідомляти / розповідати",
        "example_de": "Zuwanderer berichten häufig von positiven Erfahrungen.",
        "example_tr": "Göçmenler sıklıkla olumlu deneyimlerinden bahsediyor.",
        "example_en": "Immigrants frequently report positive experiences.",
        "example_ar": "كثيرًا ما يروي المهاجرون تجارب إيجابية.",
        "example_uk": "Іммігранти часто повідомляють про позитивний досвід."
    },
    "berufsalltag": {
        "de": "der Berufsalltag", "displayDe": "Berufsalltag", "article": "der", "plural": "-", "pos": "noun", "level": "B1",
        "tr": "mesleki günlük yaşam, iş hayatı", "en": "everyday working life", "ar": "الحياة المهنية اليومية", "uk": "професійні будні",
        "example_de": "Homeoffice gehört mittlerweile zum Berufsalltag.",
        "example_tr": "Evden çalışma artık mesleki günlük hayatın bir parçasıdır.",
        "example_en": "Home office is now part of everyday working life.",
        "example_ar": "أصبح العمل من المنزل جزءًا من الروتين المهني اليومي.",
        "example_uk": "Робота з дому стала частиною професійних буднів."
    },
    "berufstätige": {
        "de": "der/die Berufstätige", "displayDe": "Berufstätige", "article": "der", "plural": "die Berufstätigen", "pos": "noun", "level": "B1",
        "tr": "çalışanlar, meslek sahipleri", "en": "working professionals / employed persons", "ar": "العاملون / الموظفون", "uk": "працюючі люди",
        "example_de": "Damit Berufstätige mit wenig Zeit einen Beitrag leisten können.",
        "example_tr": "Böylece az vakti olan çalışanlar da katkıda bulunabilsin.",
        "example_en": "So that working people with little time can contribute.",
        "example_ar": "حتى يتمكن العاملون ذوو الوقت القليل من تقديم مساهمة.",
        "example_uk": "Щоб працюючі люди з малим запасом часу могли зробити внесок."
    },
    "beschädigten": {
        "de": "beschädigt", "displayDe": "beschädigt", "article": "", "plural": "", "pos": "adj", "level": "B1",
        "tr": "hasarlı, bozuk", "en": "damaged", "ar": "تالف / متضرر", "uk": "пошкоджений",
        "example_de": "Ein Foto des beschädigten Wassertanks.",
        "example_tr": "Hasarlı su tankının bir fotoğrafı.",
        "example_en": "A photo of the damaged water tank.",
        "example_ar": "صورة لخزان المياه التالف.",
        "example_uk": "Фотографія пошкодженого резервуара для води."
    },
    "beschäftigte": {
        "de": "der/die Beschäftigte", "displayDe": "Beschäftigte", "article": "der", "plural": "die Beschäftigten", "pos": "noun", "level": "B1",
        "tr": "çalışanlar, personeller", "en": "employees / workers", "ar": "العاملون / المستخدمون", "uk": "працівники",
        "example_de": "Viele Beschäftigte vermissen den persönlichen Kontakt.",
        "example_tr": "Pek çok çalışan yüz yüze kişisel teması özlüyor.",
        "example_en": "Many employees miss in-person contact.",
        "example_ar": "يفتقد العديد من الموظفين التواصل الشخصي.",
        "example_uk": "Багато працівників сумують за особистим спілкуванням."
    },
    "besonders": {
        "de": "besonders", "displayDe": "besonders", "article": "", "plural": "", "pos": "adv", "level": "A2",
        "tr": "özellikle, bilhassa", "en": "particularly / especially", "ar": "خاصة / بشكل خاص", "uk": "особливо",
        "example_de": "Besonders beliebt sind Sportvereine.",
        "example_tr": "Spor kulüpleri özellikle çok sevilmektedir.",
        "example_en": "Sports clubs are particularly popular.",
        "example_ar": "تحظى الأندية الرياضية بشعبية خاصة.",
        "example_uk": "Особливо популярними є спортивні клуби."
    },
    "bestandteil": {
        "de": "der Bestandteil", "displayDe": "Bestandteil", "article": "der", "plural": "die Bestandteile", "pos": "noun", "level": "B1",
        "tr": "parça, unsur, ayrılmaz bileşen", "en": "integral part / component", "ar": "جزء لا يتجزأ / عنصر", "uk": "невіддільна частина",
        "example_de": "Die Hausordnung ist meist Bestandteil des Mietvertrags.",
        "example_tr": "Bina kuralları genellikle kira sözleşmesinin ayrılmaz bir parçasıdır.",
        "example_en": "The house rules are usually part of the rental agreement.",
        "example_ar": "تعتبر لائحة البناية عادةً جزءًا لا يتجزأ من عقد الإيجار.",
        "example_uk": "Правила внутрішнього розпорядку зазвичай є частиною договору оренди."
    },
    "bestellnummer": {
        "de": "die Bestellnummer", "displayDe": "Bestellnummer", "article": "die", "plural": "die Bestellnummern", "pos": "noun", "level": "A2",
        "tr": "sipariş numarası", "en": "order number", "ar": "رقم الطلب", "uk": "номер замовлення",
        "example_de": "Kaffeemaschine mit der Bestellnummer KM-8842.",
        "example_tr": "KM-8842 sipariş numaralı kahve makinesi.",
        "example_en": "Coffee maker with order number KM-8842.",
        "example_ar": "ماكينة قهوة برقم الطلب KM-8842.",
        "example_uk": "Кавоварка за номером замовлення KM-8842."
    },
    "bestellt": {
        "de": "bestellen", "displayDe": "bestellen", "article": "", "plural": "", "pos": "verb", "level": "A1",
        "tr": "sipariş etmek", "en": "to order", "ar": "يطلب / يوصي على", "uk": "замовляти",
        "example_de": "Ich habe in Ihrem Online-Shop eine Kaffeemaschine bestellt.",
        "example_tr": "İnternet mağazanızdan bir kahve makinesi sipariş ettim.",
        "example_en": "I ordered a coffee machine in your online store.",
        "example_ar": "لقد طلبت ماكينة قهوة من متجركم الإلكتروني.",
        "example_uk": "Я замовила кавоварку у вашому інтернет-магазині."
    },
    "betragen": {
        "de": "betragen", "displayDe": "betragen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "tutmak, miktarında olmak", "en": "to amount to / be", "ar": "يبلغ / يصل إلى", "uk": "становити / складати",
        "example_de": "Die Kaution darf höchstens drei Nettokaltmieten betragen.",
        "example_tr": "Depozito en fazla üç aylık net soğuk kira tutarında olabilir.",
        "example_en": "The deposit may amount to a maximum of three net cold rents.",
        "example_ar": "يجوز أن يبلغ مبلغ التأمين كحد أقصى ثلاثة أشهر من الإيجار الصافي.",
        "example_uk": "Розмір застави може становити щонайбільше три місячні чисті орендні плати."
    },
    "betrieb": {
        "de": "in Betrieb nehmen", "displayDe": "Betrieb", "article": "der", "plural": "die Betriebe", "pos": "noun", "level": "B1",
        "tr": "çalıştırma, işletme (in Betrieb nehmen: çalıştırmak)", "en": "operation (in Betrieb nehmen: to put into operation)", "ar": "تشغيل", "uk": "експлуатація / запуск",
        "example_de": "Als ich das Gerät zum ersten Mal in Betrieb nehmen wollte.",
        "example_tr": "Cihazı ilk kez çalıştırmak istediğimde.",
        "example_en": "When I wanted to put the device into operation for the first time.",
        "example_ar": "عندما أردت تشغيل الجهاز لأول مرة.",
        "example_uk": "Коли я вперше захотіла запустити пристрій в експлуатацію."
    },
    "bezeichnet": {
        "de": "bezeichnen", "displayDe": "bezeichnen", "article": "", "plural": "", "pos": "verb", "level": "B1",
        "tr": "adlandırmak, tanımlamak, ifade etmek", "en": "to designate / describe / refer to", "ar": "يُطلق على / يشير إلى", "uk": "позначати / називати",
        "example_de": "Die Kaltmiete bezeichnet den reinen Preis für die Wohnfläche.",
        "example_tr": "Yalın kira, yalnızca yaşam alanının net fiyatını ifade eder.",
        "example_en": "Cold rent refers to the pure price of living space.",
        "example_ar": "يشير الإيجار الأساسي إلى السعر الصافي لمساحة المعيشة.",
        "example_uk": "Холодна оренда позначає чисту вартість житлової площі."
    },
    "birgt": {
        "de": "bergen", "displayDe": "bergen", "article": "", "plural": "", "pos": "verb", "level": "B2",
        "tr": "barındırmak, içinde taşımak (risk vb.)", "en": "to hold / entail (risks)", "ar": "ينطوي على / يخفي", "uk": "приховувати в собі / містити",
        "example_de": "Das Arbeiten zu Hause birgt auch erhebliche Risiken.",
        "example_tr": "Evde çalışmak ciddi riskler de barındırıyor.",
        "example_en": "Working at home also entails considerable risks.",
        "example_ar": "العمل في المنزل ينطوي أيضًا على مخاطر كبيرة.",
        "example_uk": "Робота вдома також криє в собі значні ризики."
    },
    "bis": {
        "de": "bis", "displayDe": "bis", "article": "", "plural": "", "pos": "prep", "level": "A1",
        "tr": "-e kadar", "en": "until / by", "ar": "حتى / إلى", "uk": "до",
        "example_de": "Bitte senden Sie das Ersatzgerät bis zum 25. Mai.",
        "example_tr": "Lütfen yedek cihazı 25 Mayıs tarihine kadar gönderiniz.",
        "example_en": "Please send the replacement device by May 25th.",
        "example_ar": "يرجى إرسال الجهاز البديل بحلول 25 مايو.",
        "example_uk": "Будь ласка, надішліть заміну до 25 травня."
    },
    "bitte": {
        "de": "bitte", "displayDe": "bitte", "article": "", "plural": "", "pos": "adv", "level": "A1",
        "tr": "lütfen, rica ederim", "en": "please", "ar": "من فضلك / رجاءً", "uk": "будь ласка",
        "example_de": "Ich bitte Sie daher höflich um eine Lösung.",
        "example_tr": "Bu nedenle sizden nazikçe bir çözüm rica ediyorum.",
        "example_en": "I therefore politely ask you for a solution.",
        "example_ar": "لذلك أطلب منكم بأدب إيجاد حل.",
        "example_uk": "Тому я ввічливо прошу вас знайти рішення."
    },
    "büro": {
        "de": "das Büro", "displayDe": "Büro", "article": "das", "plural": "die Büros", "pos": "noun", "level": "A1",
        "tr": "ofis, büro", "en": "office", "ar": "مكتب", "uk": "офіс",
        "example_de": "An zwei festen Tagen im Büro arbeiten.",
        "example_tr": "Haftada iki sabit gün ofiste çalışmak.",
        "example_en": "To work in the office on two fixed days.",
        "example_ar": "العمل في المكتب يومين ثابتين أسبوعيًا.",
        "example_uk": "Працювати в офісі два фіксованих дні."
    }
}

# Merge all parts
ALL_LEXICON = {}
ALL_LEXICON.update(PART_A_B)
ALL_LEXICON.update(PART_D)
ALL_LEXICON.update(PART_E)
ALL_LEXICON.update(PART_F_G)
ALL_LEXICON.update(PART_H_I_J_K)
ALL_LEXICON.update(PART_L_M)
ALL_LEXICON.update(PART_N_O_P_R)
ALL_LEXICON.update(PART_S)
ALL_LEXICON.update(PART_T_U_V)
ALL_LEXICON.update(PART_W_Z)
ALL_LEXICON.update(PART_UNITS_5_6)

def main():
    print(f"Total entries in comprehensive lexicon: {len(ALL_LEXICON)}")

    # Verify coverage against scratch_reading_tokens.json
    tokens_file = os.path.join(ROOT_DIR, "scratch_reading_tokens.json")
    if os.path.exists(tokens_file):
        with open(tokens_file, "r", encoding="utf-8") as f:
            tokens = json.load(f)
        missing = set(tokens.keys()) - set(ALL_LEXICON.keys())
        if missing:
            print(f"WARNING: {len(missing)} tokens still missing from reading texts: {missing}")
        else:
            print(f"SUCCESS: 100% of all {len(tokens)} reading text tokens are covered!")

    # Format into javascript file
    js_content = "/**\n"
    js_content += " * DeutschLernen - Comprehensive Reading Studio Lexicon (100% Passage Token Coverage)\n"
    js_content += " * Exact contextual definitions, 4-language translations, articles, and pedagogical examples.\n"
    js_content += " */\n\n"
    js_content += "window.READING_LEXICON = " + json.dumps(ALL_LEXICON, ensure_ascii=False, indent=2) + ";\n"

    with open(LEXICON_PATH, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"Successfully generated {LEXICON_PATH} ({os.path.getsize(LEXICON_PATH)} bytes).")

if __name__ == "__main__":
    main()
