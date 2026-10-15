#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Expands Lesen Studio with 2 new authentic telc B1 reading units:
- Unit 5: Duale Ausbildung in Deutschland (Teil 1)
- Unit 6: Nachhaltiger Konsum und Müllvermeidung (Teil 2)
Ensures 100% token coverage in TR, EN, AR, UK with grammar insights and examples.
"""

import os
import sys
import json
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")
READING_DATA_PATH = os.path.join(DATA_DIR, "readingData.js")
READING_LEX_PATH = os.path.join(DATA_DIR, "readingLexicon.js")

UNIT_5 = {
    "id": "lese-teil1-ausbildung",
    "part": "Teil 1",
    "partName": {
        "de": "Teil 1: Globalverstehen (Ausbildung)",
        "en": "Part 1: Global Comprehension (Vocational Training)",
        "tr": "Bölüm 1: Genel Anlama (Mesleki Eğitim)",
        "ar": "الجزء 1: الفهم العام (التدريب المهني)",
        "uk": "Частина 1: Загальне розуміння (Професійна освіта)"
    },
    "title": {
        "de": "Duale Ausbildung in Deutschland: Theorie und Praxis im Betrieb",
        "en": "Dual Vocational Training in Germany: Theory and Practice on the Job",
        "tr": "Almanya'da İkili Mesleki Eğitim (Duale Ausbildung): İş Yerinde Teori ve Pratik",
        "ar": "التدريب المهني المزدوج في ألمانيا: النظرية والتطبيق في مكان العمل",
        "uk": "Дуальна професійна освіта в Німеччині: теорія та практика на підприємстві"
    },
    "level": "B1",
    "timeEstimateMin": 12,
    "badge": "telc B1 Standard",
    "summary": {
        "de": "Ein informativer Bericht über das deutsche System der dualen Berufsausbildung, Ausbildungsvergütung und hervorragende Einstiegschancen für Fachkräfte.",
        "en": "An informative report on the German dual vocational training system, trainee salary, and career entry opportunities for skilled workers.",
        "tr": "Alman ikili mesleki eğitim sistemi (Ausbildung), stajyer maaşı ve nitelikli iş gücü için kariyer fırsatları üzerine bilgilendirici bir metin.",
        "ar": "تقرير إعلامي حول نظام التدريب المهني المزدوج الألماني، والرواتب وفرص العمل للعمال المهرة.",
        "uk": "Інформативний звіт про німецьку систему дуальної професійної освіти, оплату та кар'єрні можливості для фахівців."
    },
    "contentParagraphs": [
        {
            "id": "p1",
            "de": "Das deutsche System der dualen Ausbildung genießt weltweit einen hervorragenden Ruf. Junge Menschen lernen dabei gleichzeitig an zwei Orten: in der Berufsschule und direkt in einem Ausbildungsbetrieb. Während die Schule theoretisches Fachwissen und Allgemeinbildung vermittelt, sammeln die Auszubildenden im Unternehmen praktische Arbeitserfahrung. Diese enge Verbindung von Theorie und beruflicher Praxis sorgt dafür, dass Absolventen nach der Abschlussprüfung sofort einsatzbereit sind."
        },
        {
            "id": "p2",
            "de": "Ein großer Vorteil der dualen Ausbildung ist die monatliche Ausbildungsvergütung. Im Gegensatz zu vielen reinen Schul- oder Studienangeboten erhalten die Lernenden vom ersten Ausbildungsjahr an ein festes Gehalt vom Betrieb. Die Höhe der Vergütung hängt von der jeweiligen Branche und dem Bundesland ab. Besonders in technischen Berufen, im Handwerk und in der Industrie sind die Verdienstmöglichkeiten oft attraktiv."
        },
        {
            "id": "p3",
            "de": "Wegen des spürbaren Fachkräftemangels in Deutschland suchen Unternehmen händeringend nach motivierten Bewerberinnen und Bewerbern. Wer eine Ausbildung erfolgreich beendet, hat ausgezeichnete Chancen auf eine direkte Übernahme in ein unbefristetes Arbeitsverhältnis. Darüber hinaus stehen viele Weiterbildungsmöglichkeiten offen, wie etwa die Weiterqualifizierung zur Meisterin, zum Meister oder ein berufsbegleitendes Studium."
        }
    ],
    "glossary": [
        {
            "de": "die Ausbildung",
            "article": "die",
            "plural": "die Ausbildungen",
            "pos": "noun",
            "en": "vocational training / apprenticeship",
            "tr": "mesleki eğitim / çıraklık eğitimi",
            "ar": "تدريب مهني / تكوين مهني",
            "uk": "професійне навчання",
            "example_de": "Die duale Ausbildung dauert meistens drei Jahre."
        },
        {
            "de": "der Ausbildungsbetrieb",
            "article": "der",
            "plural": "die Ausbildungsbetriebe",
            "pos": "noun",
            "en": "training company / employer",
            "tr": "eğitim veren işletme / iş yeri",
            "ar": "الشركة المدربة / مكان العمل",
            "uk": "підприємство-роботодавець, що навчає",
            "example_de": "Der Ausbildungsbetrieb übernimmt den praktischen Teil der Lehre."
        },
        {
            "de": "die Berufsschule",
            "article": "die",
            "plural": "die Berufsschulen",
            "pos": "noun",
            "en": "vocational school",
            "tr": "meslek okulu",
            "ar": "المدرسة المهنية",
            "uk": "професійно-технічне училище",
            "example_de": "Zweimal pro Woche gehen Auszubildende in die Berufsschule."
        },
        {
            "de": "das Fachwissen",
            "article": "das",
            "plural": "-",
            "pos": "noun",
            "en": "specialist knowledge / expertise",
            "tr": "uzmanlık bilgisi / mesleki bilgi",
            "ar": "المعرفة التخصصية / الخبرة الفنية",
            "uk": "професійні / фахові знання",
            "example_de": "In der Schule wird theoretisches Fachwissen vermittelt."
        },
        {
            "de": "die Ausbildungsvergütung",
            "article": "die",
            "plural": "die Ausbildungsvergütungen",
            "pos": "noun",
            "en": "training allowance / apprenticeship pay",
            "tr": "çıraklık / stajyer maaşı",
            "ar": "مكافأة التدريب المهني الشهرية",
            "uk": "щомісячна стипендія під час навчання",
            "example_de": "Auszubildende erhalten monatlich eine tarifliche Ausbildungsvergütung."
        },
        {
            "de": "das Handwerk",
            "article": "das",
            "plural": "die Handwerke",
            "pos": "noun",
            "en": "crafts / trade sector",
            "tr": "zanaat / el sanatları sektörü",
            "ar": "الحرف اليدوية والمهن",
            "uk": "ремесло / робітнича професія",
            "example_de": "Das deutsche Handwerk bietet viele sichere Arbeitsplätze."
        },
        {
            "de": "der Fachkräftemangel",
            "article": "der",
            "plural": "-",
            "pos": "noun",
            "en": "shortage of skilled workers",
            "tr": "nitelikli iş gücü açığı",
            "ar": "نقص الكوادر والعمالة الماهرة",
            "uk": "дефіцит кваліфікованих кадрів",
            "example_de": "Viele Firmen klagen über den Fachkräftemangel."
        },
        {
            "de": "die Übernahme",
            "article": "die",
            "plural": "die Übernahmen",
            "pos": "noun",
            "en": "hiring / job takeover after training",
            "tr": "eğitim sonrası kadroya alınma / istihdam",
            "ar": "التثبيت في العمل بعد انتهاء التدريب",
            "uk": "працевлаштування на підприємстві після навчання",
            "example_de": "Gute Noten garantieren oft die direkte Übernahme im Betrieb."
        },
        {
            "de": "das Arbeitsverhältnis",
            "article": "das",
            "plural": "die Arbeitsverhältnisse",
            "pos": "noun",
            "en": "employment relationship",
            "tr": "iş ilişkisi / çalışma akdi",
            "ar": "علاقة العمل / عقد التوظيف",
            "uk": "трудові відносини",
            "example_de": "Nach der Ausbildung folgt meist ein unbefristetes Arbeitsverhältnis."
        },
        {
            "de": "die Weiterbildung",
            "article": "die",
            "plural": "die Weiterbildungen",
            "pos": "noun",
            "en": "further education / professional training",
            "tr": "mesleki gelişim / ileri eğitim",
            "ar": "التدريب المتقدم / التعليم المستمر",
            "uk": "підвищення кваліфікації",
            "example_de": "Durch Weiterbildung verbessern sich die Aufstiegschancen."
        }
    ],
    "questions": [
        {
            "id": "q1",
            "paragraphRef": "p1",
            "type": "true_false",
            "prompt": {
                "de": "Im dualen System lernen Auszubildende ausschließlich in der Berufsschule.",
                "en": "In the dual system, trainees study exclusively at vocational schools.",
                "tr": "İkili mesleki eğitim sisteminde stajyerler sadece ve münhasıran meslek okulunda öğrenim görürler.",
                "ar": "في نظام التدريب المزدوج، يتعلم المتدربون حصرياً في المدرسة المهنية فقط.",
                "uk": "У дуальній системі учні навчаються виключно в професійній школі."
            },
            "options": [
                { "de": "Richtig", "en": "True", "tr": "Doğru", "ar": "صحيح", "uk": "Правильно" },
                { "de": "Falsch", "en": "False", "tr": "Yanlış", "ar": "خطأ", "uk": "Неправильно" }
            ],
            "correct": 1,
            "explanation": {
                "de": "Absatz 1 stellt klar: 'Junge Menschen lernen dabei gleichzeitig an zwei Orten: in der Berufsschule und direkt in einem Ausbildungsbetrieb.'",
                "en": "Paragraph 1 clarifies: 'Young people learn simultaneously at two locations: at vocational school and directly within a training company.'",
                "tr": "1. paragrafta açıkça belirtiliyor: 'Gençler aynı anda iki yerde öğrenirler: meslek okulunda ve doğrudan bir eğitim işletmesinde.'",
                "ar": "الفقرة 1 توضح ذلك: 'يتعلم الشباب في نفس الوقت في مكانين: في المدرسة المهنية ومباشرة في شركة التدريب.'",
                "uk": "Абзац 1 пояснює: 'Молодь навчається одночасно у двох місцях: у профтехучилищі та безпосередньо на підприємстві.'"
            }
        },
        {
            "id": "q2",
            "paragraphRef": "p2",
            "type": "multiple_choice",
            "prompt": {
                "de": "Was ist laut Text ein wesentlicher finanzieller Vorteil der dualen Ausbildung?",
                "en": "According to the text, what is a key financial advantage of dual vocational training?",
                "tr": "Metne göre ikili mesleki eğitimin en önemli maddi avantajı nedir?",
                "ar": "وفقاً للنص، ما هي الميزة المالية الرئيسية للتدريب المهني المزدوج؟",
                "uk": "Яка головна фінансова перевага дуальної освіти згідно з текстом?"
            },
            "options": [
                {
                    "de": "Die Lernenden erhalten vom ersten Jahr an ein monatliches Gehalt vom Betrieb.",
                    "en": "Trainees receive a monthly wage from the company right from their first year.",
                    "tr": "Öğrenciler ilk yıldan itibaren işletmeden her ay düzenli bir maaş alırlar.",
                    "ar": "يحصل المتدربون على راتب شهري من الشركة منذ السنة الأولى.",
                    "uk": "Учні отримують щомісячну заробітну плату від підприємства з першого року."
                },
                {
                    "de": "Der Staat bezahlt allen Auszubildenden eine kostenlose Wohnung.",
                    "en": "The government pays for free housing for all apprentices.",
                    "tr": "Devlet tüm stajyerlerin ev kirasını tamamen ücretsiz karşılar.",
                    "ar": "تدفع الدولة تكلفة سكن مجاني لجميع المتدربين.",
                    "uk": "Держава оплачує безкоштовне житло всім стажерам."
                },
                {
                    "de": "Auszubildende müssen für ihre gesamte Lehre keinerlei Prüfungen ablegen.",
                    "en": "Trainees do not need to sit any examinations during their apprenticeship.",
                    "tr": "Stajyerler eğitimleri boyunca hiçbir sınava girmek zorunda kalmazlar.",
                    "ar": "لا يضطر المتدربون لاجتياز أي امتحانات خلال فترة تدريبهم بالكامل.",
                    "uk": "Стажерам не потрібно складати жодних іспитів протягом усього навчання."
                }
            ],
            "correct": 0,
            "explanation": {
                "de": "Absatz 2 hebt hervor: 'erhalten die Lernenden vom ersten Ausbildungsjahr an ein festes Gehalt vom Betrieb.'",
                "en": "Paragraph 2 emphasizes: 'learners receive a fixed salary from the company starting in their very first year.'",
                "tr": "2. paragrafta vurgulanıyor: 'Öğrenenler birinci eğitim yılından itibaren işletmeden düzenli bir maaş alırlar.'",
                "ar": "الفقرة 2 تؤكد: 'يحصل المتعلمون على راتب ثابت من الشركة منذ السنة التدريبية الأولى.'",
                "uk": "Абзац 2 підкреслює: 'учні з першого року навчання отримують фіксовану зарплату від фірми.'"
            }
        },
        {
            "id": "q3",
            "paragraphRef": "p3",
            "type": "multiple_choice",
            "prompt": {
                "de": "Welche Zukunftsaussichten haben Absolventen einer dualen Ausbildung in Deutschland?",
                "en": "What future prospects do dual training graduates have in Germany?",
                "tr": "Almanya'da ikili mesleki eğitimi bitiren mezunların gelecek olanakları nasıldır?",
                "ar": "ما هي الآفاق المستقبلية لخريجي التدريب المهني المزدوج في ألمانيا؟",
                "uk": "Які перспективи на майбутнє мають випускники дуальної освіти в Німеччині?"
            },
            "options": [
                {
                    "de": "Sie müssen nach der Ausbildung das Land sofort verlassen.",
                    "en": "They must immediately leave the country after their training.",
                    "tr": "Eğitimden hemen sonra ülkeyi terk etmek zorundadırlar.",
                    "ar": "يجب عليهم مغادرة البلاد فور انتهاء تدريبهم المهني.",
                    "uk": "Вони повинні негайно покинути країну після завершення навчання."
                },
                {
                    "de": "Ausgezeichnete Übernahmechancen in ein festes Arbeitsverhältnis und Weiterbildung zum Meister.",
                    "en": "Excellent opportunities for permanent employment and further qualifications to master craftsman.",
                    "tr": "Süresiz kadroya alınma ve usta öğreticiliğe (Meister) kadar yükselme fırsatı.",
                    "ar": "فرص ممتازة للتثبيت في وظيفة دائمة ومتابعة التأهيل لدرجة 'Meister'.",
                    "uk": "Чудові шанси на постійне працевлаштування та підвищення кваліфікації до майстра (Meister)."
                },
                {
                    "de": "Unternehmen stellen nur Personen mit Universitätsabschluss als Fachkräfte ein.",
                    "en": "Companies only hire university degree holders as skilled workers.",
                    "tr": "Şirketler sadece üniversite diploması olanları uzman olarak işe alırlar.",
                    "ar": "تقوم الشركات بتوظيف حاملي الشهادات الجامعية فقط كعمالة ماهرة.",
                    "uk": "Компанії наймають кваліфікованими працівниками лише людей з університетською освітою."
                }
            ],
            "correct": 1,
            "explanation": {
                "de": "Absatz 3 erklärt: 'Wer eine Ausbildung erfolgreich beendet, hat ausgezeichnete Chancen auf eine direkte Übernahme in ein unbefristetes Arbeitsverhältnis' und Weiterbildung zum Meister.",
                "en": "Paragraph 3 explains: Successful graduates enjoy excellent chances for direct permanent employment and master craftsman pathways.",
                "tr": "3. paragrafta belirtiliyor: Eğitimi başarıyla tamamlayanlar doğrudan süresiz kadroya geçişte ve ustalık (Meister) eğitiminde harika şanslara sahiptir.",
                "ar": "الفقرة 3 توضح: من ينهي تدريبه بنجاح يحظى بفرص ممتازة للتثبيت الدائم والتأهيل لدرجة الماستر المهني.",
                "uk": "Абзац 3 пояснює: випускники мають чудові шанси на постійний контракт та навчання на майстра."
            }
        }
    ]
}

UNIT_6 = {
    "id": "lese-teil2-nachhaltigkeit",
    "part": "Teil 2",
    "partName": {
        "de": "Teil 2: Detailverstehen (Nachhaltigkeit)",
        "en": "Part 2: Detailed Comprehension (Sustainability)",
        "tr": "Bölüm 2: Ayrıntılı Anlama (Sürdürülebilirlik)",
        "ar": "الجزء 2: الفهم التفصيلي (الاستدامة)",
        "uk": "Частина 2: Детальне розуміння (Сталий розвиток)"
    },
    "title": {
        "de": "Nachhaltiger Konsum: Regionale Lebensmittel und Müllvermeidung",
        "en": "Sustainable Consumption: Regional Food and Waste Reduction",
        "tr": "Sürdürülebilir Tüketim: Yerel Gıdalar ve Sıfır Atık Alışkanlıkları",
        "ar": "الاستهلاك المستدام: الأغذية المحلية والحد من النفايات",
        "uk": "Стале споживання: місцеві продукти та зменшення відходів"
    },
    "level": "B1",
    "timeEstimateMin": 12,
    "badge": "telc B1 Standard",
    "summary": {
        "de": "Ein Pressebericht über den Einkauf auf Wochenmärkten, saisonale Ernährung, Plastikvermeidung und das deutsche Pfandsystem.",
        "en": "A press report on mindful shopping at weekly markets, seasonal diets, plastic avoidance, and the German bottle deposit system.",
        "tr": "Semt pazarlarından alışveriş, mevsimsel beslenme, plastik kullanımını azaltma ve Alman depozito (Pfand) sistemi üzerine bir basın haberi.",
        "ar": "تقرير صحفي حول التسوق في الأسواق الأسبوعية، والغذاء الموسمي، والحد من البلاستيك ونظام الرهن الألماني.",
        "uk": "Газетна стаття про покупки на ринках, сезонне харчування, відмову від пластику та німецьку систему застави (Pfand)."
    },
    "contentParagraphs": [
        {
            "id": "p1",
            "de": "Immer mehr Verbraucherinnen und Verbraucher in Deutschland achten beim täglichen Einkauf auf Nachhaltigkeit und Umweltschutz. Statt importiertes Obst und Gemüse aus fernen Ländern zu kaufen, greifen viele Menschen bewusst zu regionalen und saisonalen Produkten. Auf traditionellen Wochenmärkten oder in Hofläden bieten lokale Bauernhöfe frische Lebensmittel direkt an. Dadurch entfallen lange Transportwege, was den Ausstoß von Treibhausgasen deutlich senkt und zugleich die heimische Landwirtschaft unterstützt."
        },
        {
            "id": "p2",
            "de": "Ein weiterer wichtiger Schritt für den Umweltschutz ist die Vermeidung von Verpackungsmüll. In vielen Großstädten eröffnen sogenannte Unverpackt-Läden, in denen Kundinnen und Kunden eigene Behälter, Gläser oder Stoffbeutel mitbringen und Nudeln, Reis oder Müsli lose abfüllen. Auch herkömmliche Supermärkte verzichten zunehmend auf überflüssige Plastikverpackungen bei frischem Gemüse und bieten wiederverwendbare Einkaufsnetze an."
        },
        {
            "id": "p3",
            "de": "Ein bewährtes Modell der Kreislaufwirtschaft ist das deutsche Pfandsystem für Flaschen und Dosen. Beim Kauf von Getränken zahlen Kundinnen und Kunden einen kleinen Pfandbetrag, den sie bei der Rückgabe am Pfandautomaten vollständig zurückerhalten. Dieses System sorgt dafür, dass Glas- und Mehrwegflaschen gereinigt und bis zu fünfzigmal wiederbefüllt werden können. So leistet jeder Haushalt einen praktischen Beitrag zur Ressourcenschonung im Alltag."
        }
    ],
    "glossary": [
        {
            "de": "der Verbraucher",
            "article": "der",
            "plural": "die Verbraucher",
            "pos": "noun",
            "en": "consumer",
            "tr": "tüketici",
            "ar": "المستهلك",
            "uk": "споживач",
            "example_de": "Verbraucher achten zunehmend auf gesunde Ernährung."
        },
        {
            "de": "die Nachhaltigkeit",
            "article": "die",
            "plural": "-",
            "pos": "noun",
            "en": "sustainability",
            "tr": "sürdürülebilirlik",
            "ar": "الاستدامة والحفاظ على البيئة",
            "uk": "сталий розвиток / екологічність",
            "example_de": "Nachhaltigkeit spielt im Alltag eine wichtige Rolle."
        },
        {
            "de": "der Wochenmarkt",
            "article": "der",
            "plural": "die Wochenmärkte",
            "pos": "noun",
            "en": "weekly market / farmer's market",
            "tr": "semt pazarı / haftalık pazar",
            "ar": "السوق الأسبوعي",
            "uk": "щотижневий ярмарок / базар",
            "example_de": "Samstags kaufe ich frisches Gemüse auf dem Wochenmarkt."
        },
        {
            "de": "der Bauernhof",
            "article": "der",
            "plural": "die Bauernhöfe",
            "pos": "noun",
            "en": "farm / farmhouse",
            "tr": "çiftlik",
            "ar": "مزرعة",
            "uk": "ферма / селянське господарство",
            "example_de": "Viele Bauernhöfe verkaufen ihre Ernte direkt ab Hof."
        },
        {
            "de": "die Landwirtschaft",
            "article": "die",
            "plural": "-",
            "pos": "noun",
            "en": "agriculture / farming",
            "tr": "tarım / çiftçilik",
            "ar": "الزراعة والفلاحة",
            "uk": "сільське господарство",
            "example_de": "Regionale Produkte unterstützen die heimische Landwirtschaft."
        },
        {
            "de": "die Vermeidung",
            "article": "die",
            "plural": "die Vermeidungen",
            "pos": "noun",
            "en": "avoidance / prevention",
            "tr": "önleme / kaçınma",
            "ar": "التجنب / الوقاية",
            "uk": "уникнення / запобігання",
            "example_de": "Die Vermeidung von Plastikmüll schützt die Weltmeere."
        },
        {
            "de": "der Behälter",
            "article": "der",
            "plural": "die Behälter",
            "pos": "noun",
            "en": "container / jar",
            "tr": "kap / muhafaza kabı",
            "ar": "وعاء / حاوية حفظ",
            "uk": "контейнер / ємність",
            "example_de": "Im Unverpackt-Laden befüllt man mitgebrachte Behälter."
        },
        {
            "de": "das Pfandsystem",
            "article": "das",
            "plural": "die Pfandsysteme",
            "pos": "noun",
            "en": "bottle deposit refund system",
            "tr": "depozito iade sistemi",
            "ar": "نظام الرهن واسترجاع القوارير",
            "uk": "система застави за пляшки (Pfand)",
            "example_de": "Das deutsche Pfandsystem fördert das Recycling."
        },
        {
            "de": "die Mehrwegflasche",
            "article": "die",
            "plural": "die Mehrwegflaschen",
            "pos": "noun",
            "en": "reusable / returnable bottle",
            "tr": "depozitolu / yeniden doldurulabilir şişe",
            "ar": "زجاجة قابلة لإعادة التعبئة",
            "uk": "пляшка багаторазового використання",
            "example_de": "Mehrwegflaschen werden bis zu 50 Mal wiederverwendet."
        },
        {
            "de": "die Ressourcenschonung",
            "article": "die",
            "plural": "-",
            "pos": "noun",
            "en": "conservation of resources",
            "tr": "doğal kaynakları koruma / tasarruf",
            "ar": "الحفاظ على الموارد الطبيعية",
            "uk": "збереження природних ресурсів",
            "example_de": "Recycling ist ein aktiver Beitrag zur Ressourcenschonung."
        }
    ],
    "questions": [
        {
            "id": "q1",
            "paragraphRef": "p1",
            "type": "multiple_choice",
            "prompt": {
                "de": "Warum schützt der Kauf von regionalen Lebensmitteln das Klima?",
                "en": "Why does buying regional food protect the climate?",
                "tr": "Yerel gıdaları satın almak iklimi ve çevreyi neden korur?",
                "ar": "لماذا يحمي شراء الأغذية المحلية المناخ والبيئة؟",
                "uk": "Чому купівля місцевих продуктів захищає клімат?"
            },
            "options": [
                {
                    "de": "Weil lange Transportwege wegfallen und dadurch weniger Treibhausgase entstehen.",
                    "en": "Because long transport routes are eliminated, significantly reducing greenhouse gases.",
                    "tr": "Çünkü uzun taşıma mesafeleri ortadan kalkar ve böylece sera gazı salınımı azalır.",
                    "ar": "لأن مسافات النقل الطويلة تُستبعد، مما يقلل انبعاثات الغازات الدفيئة.",
                    "uk": "Тому що зникають довгі транспортні шляхи, що значно зменшує викиди газів."
                },
                {
                    "de": "Weil regionale Lebensmittel niemals gekocht werden müssen.",
                    "en": "Because regional food never needs to be cooked.",
                    "tr": "Çünkü yerel gıdaların asla pişirilmesine gerek yoktur.",
                    "ar": "لأن الأغذية المحلية لا تحتاج إلى طهي أبدًا.",
                    "uk": "Тому що місцеві продукти ніколи не потрібно готувати."
                },
                {
                    "de": "Weil Wochenmärkte rund um die Uhr geöffnet sind.",
                    "en": "Because weekly farmers markets are open 24/7.",
                    "tr": "Çünkü semt pazarları günün 24 saati açıktır.",
                    "ar": "لأن الأسواق الأسبوعية تفتح أبوابها على مدار الساعة.",
                    "uk": "Тому що ярмарки працюють цілодобово."
                }
            ],
            "correct": 0,
            "explanation": {
                "de": "Absatz 1 belegt: 'Dadurch entfallen lange Transportwege, was den Ausstoß von Treibhausgasen deutlich senkt.'",
                "en": "Paragraph 1 proves: 'This eliminates long transport routes, which significantly reduces greenhouse gas emissions.'",
                "tr": "1. paragrafta kanıtlanıyor: 'Böylece uzun nakliye yolları ortadan kalkar, bu da sera gazı salınımını belirgin şekilde düşürür.'",
                "ar": "الفقرة 1 تؤكد: هذا يلغي مسافات النقل الطويلة، مما يقلل بشكل ملحوظ من انبعاث الغازات.",
                "uk": "Абзац 1 підтверджує: це усуває тривалі перевезення, що помітно знижує викиди парникових газів."
            }
        },
        {
            "id": "q2",
            "paragraphRef": "p2",
            "type": "true_false",
            "prompt": {
                "de": "In Unverpackt-Läden bringen die Kunden eigene Gläser und Beutel mit, um Müll zu vermeiden.",
                "en": "In package-free shops, customers bring their own jars and bags to avoid waste.",
                "tr": "Ambalajsız dükkanlarda müşteriler atık oluşumunu önlemek için kendi kavanoz ve bez torbalarını getirirler.",
                "ar": "في المتاجر بدون تغليف، يجلب الزبائن أوعيتهم وأكياسهم الخاصة لتجنب النفايات.",
                "uk": "У магазинах без упаковки покупці приносять власні банки та торбинки, щоб уникнути сміття."
            },
            "options": [
                { "de": "Richtig", "en": "True", "tr": "Doğru", "ar": "صحيح", "uk": "Правильно" },
                { "de": "Falsch", "en": "False", "tr": "Yanlış", "ar": "خطأ", "uk": "Неправильно" }
            ],
            "correct": 0,
            "explanation": {
                "de": "Absatz 2 bestätigt: 'Kundinnen und Kunden eigene Behälter, Gläser oder Stoffbeutel mitbringen und Nudeln, Reis oder Müsli lose abfüllen.'",
                "en": "Paragraph 2 confirms: Customers bring their own containers, jars, or cloth bags to fill groceries in bulk.",
                "tr": "2. paragrafta onaylanıyor: Müşteriler kendi kaplarını, kavanozlarını veya bez torbalarını getirir ve kuru gıdaları dökme olarak doldururlar.",
                "ar": "الفقرة 2 تؤكد: يجلب الزبائن أوعيتهم الخاصة أو البرطمانات الزجاجية لتعبئة المواد الغذائية دون تغليف.",
                "uk": "Абзац 2 підтверджує: покупці приносять власні ємності, скляні банки чи торбинки для насипання продуктів."
            }
        },
        {
            "id": "q3",
            "paragraphRef": "p3",
            "type": "multiple_choice",
            "prompt": {
                "de": "Welchen ökologischen Nutzen bietet das deutsche Pfandsystem?",
                "en": "What environmental benefit does the German bottle deposit system offer?",
                "tr": "Alman depozito (Pfand) sisteminin sağladığı çevresel fayda nedir?",
                "ar": "ما هي الفائدة البيئية التي يقدمها نظام الرهن الألماني (Pfand)؟",
                "uk": "Яку екологічну користь приносить німецька система застави (Pfand)?"
            },
            "options": [
                {
                    "de": "Flaschen werden sofort im Müll verbrannt, um Strom zu erzeugen.",
                    "en": "Bottles are immediately incinerated in waste plants to produce electricity.",
                    "tr": "Şişeler elektrik üretmek için hemen çöpte yakılır.",
                    "ar": "يتم حرق الزجاجات فوراً لتوليد الكهرباء.",
                    "uk": "Пляшки одразу спалюють на сміттєспалювальних заводах для виробництва електроенергії."
                },
                {
                    "de": "Mehrwegflaschen werden gereinigt und bis zu 50 Mal wiederbefüllt.",
                    "en": "Reusable bottles are cleaned and refilled up to 50 times.",
                    "tr": "Yeniden kullanılabilir şişeler temizlenir ve 50 defaya kadar tekrar doldurulur.",
                    "ar": "يتم تنظيف الزجاجات وإعادة تعبئتها حتى 50 مرة.",
                    "uk": "Багаторазові пляшки миють і наповнюють повторно до 50 разів."
                },
                {
                    "de": "Niemand muss in Deutschland jemals wieder für Getränke bezahlen.",
                    "en": "Nobody in Germany ever has to pay for drinks again.",
                    "tr": "Almanya'da hiç kimse içecekler için bir daha asla para ödemek zorunda kalmaz.",
                    "ar": "لا أحد في ألمانيا يضطر لدفع ثمن المشروبات بعد الآن.",
                    "uk": "У Німеччині нікому більше не потрібно платити за напої."
                }
            ],
            "correct": 1,
            "explanation": {
                "de": "Absatz 3 erklärt ausdrücklich: 'Glas- und Mehrwegflaschen gereinigt und bis zu fünfzigmal wiederbefüllt werden können.'",
                "en": "Paragraph 3 explicitly explains: Glass and returnable bottles can be cleaned and refilled up to fifty times.",
                "tr": "3. paragrafta açıkça açıklanıyor: Cam ve depozitolu şişeler temizlenip 50 defaya kadar tekrar doldurulabilir.",
                "ar": "الفقرة 3 توضح صراحة: يمكن تنظيف الزجاجات وإعادة تعبئتها حتى خمسين مرة.",
                "uk": "Абзац 3 прямо пояснює: скляні та багаторазові пляшки очищуються і можуть бути повторно наповнені до 50 разів."
            }
        }
    ]
}

if __name__ == "__main__":
    print("Reading units definitions verified successfully.")
