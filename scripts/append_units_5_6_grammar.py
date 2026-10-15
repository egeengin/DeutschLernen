#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Appends curated grammar entries for Unit 5 & Unit 6 to scripts/curated_grammar_data.py
"""

import os

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET_PATH = os.path.join(ROOT_DIR, "scripts", "curated_grammar_data.py")

NEW_GRAMMAR = {
    "genießt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Düzensiz Kök (genießen ➔ genießt)",
            "en": "💡 Verb Conjugation: Irregular Stem (genießen ➔ genießt)",
            "ar": "💡 تصريف الفعل: جذر شاذ (genießen ➔ genießt)",
            "uk": "💡 Дієвідмінювання: Неправильна основа (genießen ➔ genießt)"
        },
        "tr": "Düzensiz fiil çekimi (Präsens 3. Tekil Şahıs): 'genießen' (tadını çıkarmak / saygınlığa sahip olmak) fiili 3. tekilde 'genießt' biçimini alır. 'einen guten Ruf genießen' deyimi 'iyi bir üne/saygınlığa sahip olmak' anlamına gelir.",
        "en": "Irregular verb conjugation (3rd person singular present): 'genießen' (to enjoy / possess a reputation) conjugates to 'genießt'. Idiom: 'einen hervorragenden Ruf genießen' = to enjoy an outstanding reputation.",
        "ar": "تصريف فعل غير قياسي (المضارع للمفرد الغائب): يُصرّف الفعل 'genießen' إلى 'genießt'. التعبير 'einen Ruf genießen' يعني التمتع بسمعة طيبة.",
        "uk": "Неправильне дієслово (3-тя особа однини теперішнього часу): 'genießen' відмінюється як 'genießt'. Вираз 'einen Ruf genießen' означає 'користуватися гарною репутацією'."
    },
    "hängt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Umlaut Kök Değişimi (abhängen ➔ hängt ab)",
            "en": "💡 Verb Conjugation: Umlaut Stem Change (abhängen ➔ hängt ab)",
            "ar": "💡 تصريف الفعل: إمالة حرف العلة في الجذر (abhängen ➔ hängt ab)",
            "uk": "💡 Дієвідмінювання: Умлаут у корені (abhängen ➔ hängt ab)"
        },
        "tr": "Düzensiz fiil ve ayrılabilir önek: 'abhängen von (+ Dativ)' fiilinde kök seslisi 3. tekil şahısta 'a' -> 'ä' olur (hängt ... ab = -e bağlıdır). 'ab' öneki cümlenin en sonuna gider.",
        "en": "Irregular separable verb: 'abhängen von (+ dative)' changes its root vowel from 'a' to 'ä' in 3rd person singular present (hängt ... ab = depends on). The prefix 'ab' moves to the clause end.",
        "ar": "فعل منفصل غير قياسي: يتغير حرف العلة من 'a' إلى 'ä' في 'abhängen' مع المفرد الغائب (hängt ... ab = يعتمد على). تذهب السابقة 'ab' إلى نهاية الجملة.",
        "uk": "Неправильне відокремлюване дієслово: 'abhängen von (+ Dativ)' змінює кореневу голосну з 'a' на 'ä' (hängt ... ab = залежить від). Префікс 'ab' іде в кінець речення."
    },
    "senkt": {
        "title": {
            "tr": "💡 Fiil Kullanımı: Geçişli Eylem Fiili (senken ➔ senkt)",
            "en": "💡 Verb Usage: Transitive Action Verb (senken ➔ senkt)",
            "ar": "💡 استخدام الفعل: فعل متعدٍ للمفعول به (senken ➔ senkt)",
            "uk": "💡 Вживання дієслова: Перехідне дієслово (senken ➔ senkt)"
        },
        "tr": "Geçişli fiil (Transitives Verb): 'senken' (düşürmek, azaltmak) nesne alır (Akkusativ: den Ausstoß senken = emisyonu düşürmek). 'sinken' (kendi kendine düşmek/inmek) ile karıştırılmamalıdır.",
        "en": "Transitive verb: 'senken' (to lower/reduce) takes a direct accusative object (den Ausstoß senken = to lower emissions). Not to be confused with intransitive 'sinken' (to sink/drop).",
        "ar": "فعل متعدٍ: 'senken' (يُخفّض / يُقلل) يأخذ مفعولاً به منصوباً (den Ausstoß senken = يخفض الانبعاثات). يختلف عن الفعل اللازم 'sinken' (ينخفض تلقائياً).",
        "uk": "Перехідне дієслово: 'senken' (знижувати / зменшувати) вимагає знахідного відмінка (den Ausstoß senken). Не плутати з неперехідним 'sinken' (падати / опускатися)."
    },
    "sorgt": {
        "title": {
            "tr": "💡 Fiil + Edat Yapısı (sorgen für + Akkusativ)",
            "en": "💡 Verb + Preposition Pattern (sorgen für + accusative)",
            "ar": "💡 تركيب الفعل وحرف الجر (sorgen für + Akkusativ)",
            "uk": "💡 Керування дієслова (sorgen für + знахідний відмінок)"
        },
        "tr": "Edatlı fiil yapısı: 'sorgen für (+ Akkusativ)' = bir şeyi sağlamak, temin etmek veya bir şeye yol açmak anlamına gelir (sorgt dafür, dass = ... olmasını sağlar).",
        "en": "Prepositional verb: 'sorgen für (+ accusative)' means to ensure, provide for, or bring about (sorgt dafür, dass = ensures that).",
        "ar": "فعل مع حرف جر: 'sorgen für (+ Akkusativ)' يعني يضمن / يوفر / يحرص على (sorgt dafür, dass = يضمن أن).",
        "uk": "Дієслово з прийменником: 'sorgen für (+ Akkusativ)' означає піклуватися про, забезпечувати (sorgt dafür, dass = забезпечує те, що)."
    },
    "unterstützt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Ayrılmayan Ön Ek (unterstützen)",
            "en": "💡 Verb Conjugation: Inseparable Prefix (unterstützen)",
            "ar": "💡 تصريف الفعل: سابقة غير منفصلة (unterstützen)",
            "uk": "💡 Дієвідмінювання: Невіддільний префікс (unterstützen)"
        },
        "tr": "Ayrılmayan fiil: 'unterstützen' (desteklemek) fiilinde 'unter-' öneki ayrılmaz. 3. tekil şahısta sonuna '-t' alır (er/sie/es unterstützt = destekler).",
        "en": "Inseparable verb: in 'unterstützen' (to support), the prefix 'unter-' is inseparable. In 3rd person singular present it takes '-t' (unterstützt).",
        "ar": "فعل بسابقة غير منفصلة: في 'unterstützen' (يدعم) لا تنفصل السابقة 'unter-'. في المضارع للمفرد الغائب يأخذ لاحقة '-t' (unterstützt).",
        "uk": "Дієслово з невіддільним префіксом: у 'unterstützen' (підтримувати) префікс 'unter-' не відокремлюється (unterstützt)."
    },
    "auszubildenden": {
        "title": {
            "tr": "💡 İsimleşmiş Sıfat / Partizip (N-Deklination)",
            "en": "💡 Nominalized Adjective / Participle (N-Declension)",
            "ar": "💡 اسم مشتق من اسم فاعل/مفعول (تصريف N-Deklination)",
            "uk": "💡 Субстантивований дієприкметник (N-відміна)"
        },
        "tr": "İsimleşmiş sıfat/partizip: 'der/die Auszubildende' (stajyer) kelimesi sıfat çekim kurallarına göre çekimlenir. Belirli artikel 'die' çoğul olduğunda sonuna '-n' alır (die Auszubildenden = stajyerler).",
        "en": "Nominalized adjective/participle: 'Auszubildende' (trainee) declines like an adjective. In the plural with definite article 'die', it takes the weak ending '-n' (die Auszubildenden).",
        "ar": "اسم مشتق يُعامل معاملة الصفة: كلمة 'Auszubildende' (متدرب) تُصرّف كالصفات تماماً. مع أداة التعريف للجمع 'die' تأخذ لاحقة '-n' (die Auszubildenden).",
        "uk": "Субстантивований прикметник/дієприкметник: 'Auszubildende' відмінюється за правилами прикметників (у множині з артиклем 'die' отримує закінчення '-n')."
    },
    "absolventen": {
        "title": {
            "tr": "💡 Zayıf İsim Çekimi: N-Deklination (der Absolvent)",
            "en": "💡 Weak Masculine Noun: N-Declension (der Absolvent)",
            "ar": "💡 الأسماء المذكرة الضعيفة: تصريف N-Deklination (der Absolvent)",
            "uk": "💡 Слабкі іменники: N-відміна (der Absolvent)"
        },
        "tr": "Zayıf isim çekimi (N-Deklination): Latince kökenli ve '-ent' ile biten maskulin isimler ('der Absolvent') çoğulda ve Nominativ dışındaki tüm tekil hallerde '-en' takısı alır (die Absolventen = mezunlar).",
        "en": "Weak masculine noun (N-Declension): Masculine nouns of foreign origin ending in '-ent' ('der Absolvent') take an '-en' suffix in all cases except the singular nominative (plural: die Absolventen).",
        "ar": "تصريف الأسماء الضعيفة (N-Deklination): تأخذ الأسماء المذكرة المنتهية بـ '-ent' لاحقة '-en' في الجمع وفي جميع الحالات الإعرابية المفردة ما عدا المبتدأ.",
        "uk": "Слабка відміна іменників (N-Deklination): іменники чоловічого роду іншомовного походження на '-ent' отримують закінчення '-en' у всіх відмінках, крім Nominativ однини."
    },
    "fachkräftemangels": {
        "title": {
            "tr": "💡 İsmin Hali: Genitiv Tekil (der Mangel ➔ des Mangels)",
            "en": "💡 Case Declension: Genitive Singular (der Mangel ➔ des Mangels)",
            "ar": "💡 حالة المضاف إليه (Genitiv): der Mangel ➔ des Mangels",
            "uk": "💡 Відмінкова форма: Родовий відмінок (der Mangel ➔ des Mangels)"
        },
        "tr": "Genitiv tamlama ve bileşik isim: 'der Fachkräftemangel' (nitelikli eleman açığı). 'wegen' edatı Genitiv gerektirdiği için artikel 'des' olmuş ve maskulin ismin sonuna '-s' eklenmiştir (des Fachkräftemangels).",
        "en": "Genitive case with compound noun: 'der Fachkräftemangel'. The preposition 'wegen' governs the genitive case, changing the article to 'des' and adding '-s' to the masculine noun.",
        "ar": "حالة الإضافة (Genitiv) لاسم مركب: حرف الجر 'wegen' يتطلب حالة الـ Genitiv، فتتحول الأداة إلى 'des' وتضاف لاحقة '-s' إلى نهاية الاسم المذكر.",
        "uk": "Родовий відмінок (Genitiv) складного іменника: прийменник 'wegen' вимагає Genitiv, тому артикль стає 'des', а іменник отримує закінчення '-s'."
    },
    "wochenmärkten": {
        "title": {
            "tr": "💡 Çoğul Çekimi: Dativ Plural -n Kuralı (auf Wochenmärkten)",
            "en": "💡 Plural Declension: Dative Plural -n Rule (auf Wochenmärkten)",
            "ar": "💡 تصريف الجمع: قاعدة إضافة -n في حالة Dativ (auf Wochenmärkten)",
            "uk": "💡 Відмінювання множини: Правило -n у Dativ (auf Wochenmärkten)"
        },
        "tr": "Dativ Plural kuralı: 'der Wochenmarkt' çoğulu 'die Wochenmärkte' olur. 'auf' edatı 'nerede?' (wo?) sorusuna yanıt verdiğinde Dativ gerektirir ve çoğul ismin sonuna zorunlu '-n' takısı gelir (auf den Wochenmärkten).",
        "en": "Dative Plural rule: 'der Wochenmarkt' plurals to 'die Wochenmärkte'. When the two-way preposition 'auf' answers 'where?' (location), it triggers Dative, adding an extra '-n' (auf den Wochenmärkten).",
        "ar": "قاعدة الـ Dativ للجمع: عندما يجيب حرف الجر 'auf' عن السؤال 'أين؟'، يتطلب حالة الـ Dativ، فتأخذ جميع أسماء الجمع لاحقة '-n' إجبارياً (auf den Wochenmärkten).",
        "uk": "Правило Dativ у множині: коли прийменник 'auf' відповідає на питання 'де?' (місце), він вимагає давального відмінка, що додає обов'язкове закінчення '-n' до форми множини."
    },
    "abfüllen": {
        "title": {
            "tr": "💡 Fiil Yapısı: Ayrılabilir Fiil (ab-füllen)",
            "en": "💡 Verb Structure: Separable Verb (ab-füllen)",
            "ar": "💡 بنية الفعل: فعل منفصل (ab-füllen)",
            "uk": "💡 Будова дієслова: Відокремлюване дієслово (ab-füllen)"
        },
        "tr": "Ayrılabilir fiil (Trennbares Verb): 'abfüllen' (ambalajsız kaba doldurmak). Ana cümlede önek sona gider (sie füllen Nudeln ab), mastar halinde birleşik yazılır.",
        "en": "Separable verb: 'abfüllen' (to fill/decant loose goods). In main clauses, the prefix separates to the end (sie füllen Nudeln ab), but remains joined in the infinitive.",
        "ar": "فعل منفصل: في الجمل الرئيسية تنفصل السابقة 'ab' إلى نهاية الجملة، بينما تبقى متصلة في صيغة المصدر.",
        "uk": "Відокремлюване дієслово: у головному реченні префікс 'ab' відокремлюється в кінець речення, а в інфінітиві пишеться разом."
    },
    "wiederbefüllt": {
        "title": {
            "tr": "💡 Zaman Çatısı: Edilgen / Partizip II (wiederbefüllen)",
            "en": "💡 Voice & Participle: Passive / Participle II (wiederbefüllen)",
            "ar": "💡 صيغة المبني للمجهول / اسم المفعول (wiederbefüllen)",
            "uk": "💡 Стан та дієприкметник: Пасив / Partizip II (wiederbefüllen)"
        },
        "tr": "Partizip II ve Passiv (Edilgen çatı): 'wiederbefüllen' (yeniden doldurmak) fiilinin Partizip II biçimi 'wiederbefüllt'tür. Cümlede 'können wiederbefüllt werden' (yeniden doldurulabilirler) edilgen yapısıyla kullanılmıştır.",
        "en": "Participle II & Passive voice: 'wiederbefüllen' forms Participle II as 'wiederbefüllt'. In text: 'können wiederbefüllt werden' (can be refilled) is a passive modal construction.",
        "ar": "اسم المفعول والمبني للمجهول: يُصاغ اسم المفعول كـ 'wiederbefüllt'. التركيب 'können wiederbefüllt werden' هو مبني للمجهول مع فعل مساعد (يمكن إعادة تعبئتها).",
        "uk": "Дієприкметник II та пасивний стан: 'wiederbefüllen' утворює Partizip II як 'wiederbefüllt'. Конструкція 'können wiederbefüllt werden' означає 'можуть бути повторно наповнені'."
    }
}

with open(TARGET_PATH, "r", encoding="utf-8") as f:
    orig = f.read()

# We need to insert NEW_GRAMMAR before the last closing bracket '}'
idx = orig.rfind("}")
if idx != -1:
    import json
    chunks = []
    for k, v in NEW_GRAMMAR.items():
        # format as python dict entry
        k_str = json.dumps(k, ensure_ascii=False)
        v_str = json.dumps(v, ensure_ascii=False, indent=8)
        chunks.append(f"    {k_str}: {v_str}")
    
    insert_str = ",\n    # --- UNITS 5 & 6 CURATED GRAMMAR ENTRIES ---\n" + ",\n".join(chunks) + "\n"
    new_content = orig[:idx] + insert_str + orig[idx:]
    with open(TARGET_PATH, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully appended Units 5 & 6 grammar entries into curated_grammar_data.py")
else:
    print("Error: Could not locate closing bracket in curated_grammar_data.py")
