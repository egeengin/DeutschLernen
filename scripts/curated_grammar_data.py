# -*- coding: utf-8 -*-
"""
Comprehensive Curated Grammar Insights for Reading Studio
Provides explicit linguistic explanations for all inflected forms in the 4 reading units:
- Verb conjugations (irregular stem changes, Präteritum, Partizip II/Passiv, Konjunktiv II, modal verbs, separable verbs with 'zu')
- Noun declensions (Genitiv -s/-es/-ses, Dativ Plural -n/-en, N-Deklination, compound nouns, nominalized verbs)
- Adjective declensions (strong, weak, mixed endings -en, -e, -es, -em, -er, and comparatives)
- Prepositions (Dativ, Akkusativ, Wechselpräpositionen)
- Conjunctions & Word Order (Nebensatz verb-final, Konnektoren verb-second)

Full 4-language parity: Turkish (tr), English (en), Arabic (ar), Ukrainian (uk).
"""

CURATED_GRAMMAR = {
    # --- VERB CONJUGATIONS: IRREGULAR STEM CHANGES (Präsens 3. Person) ---
    "gilt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Düzensiz Kök Değişimi (gelten ➔ gilt)",
            "en": "💡 Verb Conjugation: Irregular Stem Change (gelten ➔ gilt)",
            "ar": "💡 تصريف الفعل: تغيير حرف العلة في الجذر (gelten ➔ gilt)",
            "uk": "💡 Дієвідмінювання: Чергування голосної кореня (gelten ➔ gilt)"
        },
        "tr": "Düzensiz fiil çekimi (Präsens 3. Tekil Şahıs): 'gelten' (geçerli olmak) fiilinin kök seslisi 3. tekil şahısta (er/sie/es) 'e' -> 'i' değişimine uğrar (es gilt = geçerlidir / sayılır). Metinde: 'Das Arbeitszeitgesetz gilt auch im Homeoffice.'",
        "en": "Irregular verb conjugation (3rd person singular present): 'gelten' (to apply / be valid) changes its stem vowel from 'e' to 'i' in the 3rd person singular (es gilt = it applies). In text: 'Das Arbeitszeitgesetz gilt auch im Homeoffice.'",
        "ar": "تصريف فعل غير قياسي (المضارع للمفرد الغائب): يغير الفعل 'gelten' (يسري / ينطبق) حرف العلة في الجذر من 'e' إلى 'i' مع المفرد الغائب (es gilt). في النص: 'Das Arbeitszeitgesetz gilt auch im Homeoffice.'",
        "uk": "Неправильне дієслово (3-тя особа однини теперішнього часу): дієслово 'gelten' (діяти / бути чинним) змінює голосну кореня з 'e' на 'i' (es gilt). У тексті: 'Das Arbeitszeitgesetz gilt auch im Homeoffice.'"
    },
    "birgt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Düzensiz Kök Değişimi (bergen ➔ birgt)",
            "en": "💡 Verb Conjugation: Irregular Stem Change (bergen ➔ birgt)",
            "ar": "💡 تصريف الفعل: تغيير حرف العلة في الجذر (bergen ➔ birgt)",
            "uk": "💡 Дієвідмінювання: Чергування голосної кореня (bergen ➔ birgt)"
        },
        "tr": "Düzensiz fiil çekimi (Präsens 3. Tekil Şahıs): 'bergen' (içinde barındırmak, taşımak) fiili 3. tekil şahısta kök seslisi 'e' -> 'i' olur (er/sie/es birgt = barındırır). Metinde: 'birgt auch Risiken'.",
        "en": "Irregular verb conjugation (3rd person singular present): 'bergen' (to entail / harbor) changes stem vowel from 'e' to 'i' (er/sie/es birgt = harbors/entails). In text: 'birgt auch Risiken'.",
        "ar": "تصريف فعل غير قياسي (المضارع للمفرد الغائب): يتحول حرف العلة في 'bergen' من 'e' إلى 'i' (er/sie/es birgt = ينطوي على / يخفي). في النص: 'birgt auch Risiken'.",
        "uk": "Неправильне дієслово (3-тя особа однини теперішнього часу): дієслово 'bergen' змінює голосну з 'e' на 'i' (er/sie/es birgt = приховує / несе в собі). У тексті: 'birgt auch Risiken'."
    },
    "fällt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Umlaut Kök Değişimi (fallen ➔ fällt)",
            "en": "💡 Verb Conjugation: Umlaut Stem Change (fallen ➔ fällt)",
            "ar": "💡 تصريف الفعل: إمالة حرف العلة (fallen ➔ fällt)",
            "uk": "💡 Дієвідмінювання: Умлаут у корені (fallen ➔ fällt)"
        },
        "tr": "Düzensiz fiil çekimi (Präsens 3. Tekil Şahıs): 'fallen' (düşmek) fiilinin kök harfi 'a' -> 'ä' umlaut alır ('schwerfallen' = birine zor gelmek; 'fällt vielen schwer' = birçok kişiye zor geliyor).",
        "en": "Irregular verb with umlaut (3rd person singular present): 'fallen' changes 'a' to 'ä' ('schwerfallen' = to be difficult for someone; 'fällt vielen schwer' = is difficult for many).",
        "ar": "تصريف فعل غير قياسي مع إمالة (Umlaut): يتحول حرف 'a' إلى 'ä' في الفعل 'fallen' ('fällt schwer' = يصعب على).",
        "uk": "Неправильне дієслово з умлаутом: у дієслові 'fallen' голосна 'a' переходить в 'ä' ('fällt schwer' = дається важко)."
    },
    "stößt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Umlaut Kök Değişimi (stoßen ➔ stößt)",
            "en": "💡 Verb Conjugation: Umlaut Stem Change (stoßen ➔ stößt)",
            "ar": "💡 تصريف الفعل: إمالة حرف العلة (stoßen ➔ stößt)",
            "uk": "💡 Дієвідмінювання: Умлаут у корені (stoßen ➔ stößt)"
        },
        "tr": "Düzensiz fiil çekimi (Präsens 3. Tekil Şahıs): 'stoßen' (çarpmak / karşılaşmak) fiili 3. tekil şahısta 'o' -> 'ö' umlaut alır ('auf etwas stoßen' = bir şeyle karşılaşmak; 'stößt sofort auf Fachbegriffe').",
        "en": "Irregular verb with umlaut (3rd person singular): 'stoßen' changes 'o' to 'ö' ('auf etwas stoßen' = to come across something; 'stößt sofort auf Fachbegriffe').",
        "ar": "تصريف فعل غير قياسي مع إمالة: يتحول 'o' إلى 'ö' في الفعل 'stoßen' ('stößt auf' = يصادف / يواجه مصطلحات متخصصة).",
        "uk": "Неправильне дієслово з умлаутом: у дієслові 'stoßen' голосна 'o' переходить в 'ö' ('stößt auf Fachbegriffe' = натрапляє на фахові терміни)."
    },
    "liest": {
        "title": {
            "tr": "💡 Fiil Çekimi: Düzensiz Kök Değişimi (lesen ➔ liest)",
            "en": "💡 Verb Conjugation: Irregular Stem Change (lesen ➔ liest)",
            "ar": "💡 تصريف الفعل: تغيير حرف العلة في الجذر (lesen ➔ liest)",
            "uk": "💡 Дієвідмінювання: Подовження голосної кореня (lesen ➔ liest)"
        },
        "tr": "Düzensiz fiil çekimi (Präsens 3. Tekil Şahıs): 'lesen' (okumak) fiili 3. tekil şahısta 'e' -> 'ie' değişimine uğrar (er/sie liest = okur). Metinde: 'Wer eine Zeitungs- oder Onlineanzeige liest...'",
        "en": "Irregular verb conjugation (3rd person singular present): 'lesen' (to read) changes stem vowel from 'e' to 'ie' (er/sie liest = reads). In text: 'Wer eine Anzeige liest...'",
        "ar": "تصريف فعل غير قياسي: يتحول حرف 'e' إلى 'ie' في الفعل 'lesen' (er/sie liest = يقرأ). في النص: 'Wer eine Anzeige liest...'",
        "uk": "Неправильне дієслово: голосна кореня 'e' подовжується в 'ie' у 3-й особі однини (er/sie liest = читає). У тексті: 'Wer eine Anzeige liest...'"
    },
    "ergibt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Düzensiz Kök Değişimi (ergeben ➔ ergibt)",
            "en": "💡 Verb Conjugation: Irregular Stem Change (ergeben ➔ ergibt)",
            "ar": "💡 تصريف الفعل: تغيير حرف العلة في الجذر (ergeben ➔ ergibt)",
            "uk": "💡 Дієвідмінювання: Чергування голосної кореня (ergeben ➔ ergibt)"
        },
        "tr": "Düzensiz fiil çekimi (Präsens 3. Tekil Şahıs): 'ergeben' (sonuç vermek / ortaya çıkarmak) fiilinde 'e' -> 'i' olur (das ergibt = bu ... sonucunu verir). Metinde: 'Erst beides zusammen ergibt die tatsächliche Warmmiete.'",
        "en": "Irregular verb conjugation (3rd person singular present): 'ergeben' (to result in / equal) changes 'e' to 'i' (das ergibt = that results in). In text: 'Erst beides zusammen ergibt die tatsächliche Warmmiete.'",
        "ar": "تصريف فعل غير قياسي: يتحول 'e' إلى 'i' في الفعل 'ergeben' (das ergibt = يسفر عن / يساوي). في النص: 'Erst beides zusammen ergibt die tatsächliche Warmmiete.'",
        "uk": "Неправильне дієслово: голосна 'e' змінюється на 'i' в 3-й особі однини (das ergibt = дає в результаті). У тексті: 'Erst beides zusammen ergibt die tatsächliche Warmmiete.'"
    },
    "ausläuft": {
        "title": {
            "tr": "💡 Fiil Çekimi: Ayrılabilir Düzensiz Fiil (auslaufen ➔ läuft aus)",
            "en": "💡 Verb Conjugation: Separable Strong Verb (auslaufen ➔ läuft aus)",
            "ar": "💡 تصريف الفعل: فعل منفصل غير قياسي (auslaufen ➔ läuft aus)",
            "uk": "💡 Дієвідмінювання: Відокремлюване сильне дієслово (auslaufen ➔ läuft aus)"
        },
        "tr": "Ayrılabilir düzensiz fiil çekimi: 'auslaufen' (süresi dolmak / akmak) fiilinin 3. tekil şahıs çekimidir (der Vertrag läuft aus). Kök harfi 'a' -> 'ä' umlaut alır, yan cümlede 'ausläuft' olarak bitişik ve sonda yer alır.",
        "en": "Separable strong verb conjugation: 3rd person singular of 'auslaufen' (to expire). Stem vowel 'a' takes umlaut 'ä' (der Vertrag läuft aus). In subordinate clauses, prefix remains attached at the end: 'ausläuft'.",
        "ar": "تصريف فعل منفصل غير قياسي: صيغة المفرد الغائب للفعل 'auslaufen' (تنتهي صلاحيته). يتحول 'a' إلى 'ä'، وفي الجمل الجانبية يثبت في نهاية الجملة متصلاً: 'ausläuft'.",
        "uk": "Відокремлюване сильне дієслово: 3-тя особа однини від 'auslaufen' (закінчуватися). Голосна 'a' переходить в 'ä'; у підрядному реченні стоїть разом у кінці: 'ausläuft'."
    },
    "hinzu": {
        "title": {
            "tr": "💡 Fiil Yapısı: Ayrılabilir Fiil Öneki (hinzukommen)",
            "en": "💡 Verb Structure: Separable Verb Prefix (hinzukommen)",
            "ar": "💡 بنية الفعل: سابقة فعل منفصل (hinzukommen)",
            "uk": "💡 Структура дієслова: Відокремлюваний префікс (hinzukommen)"
        },
        "tr": "Ayrılabilir fiil öneki: 'hinzukommen' (eklenmek / dahil olmak) fiilinin ayrılan önekidir. Cümle başında vurgu için kullanılmıştır: 'Hinzu kommen monatliche Nebenkostenvorauszahlungen' (Buna aylık yan gider avansları da eklenir).",
        "en": "Separable verb prefix: The separable prefix of 'hinzukommen' (to be added). Fronted for emphasis: 'Hinzu kommen monatliche Nebenkostenvorauszahlungen' (Added to this are monthly advance utility payments).",
        "ar": "سابقة فعل منفصل: سابقة الفعل 'hinzukommen' (يُضاف إلى ذلك). قُدمت للتأكيد: 'Hinzu kommen monatliche Nebenkostenvorauszahlungen'.",
        "uk": "Відокремлюваний префікс: частина дієслова 'hinzukommen' (додаватися). Винесено на початок для наголошення: 'Hinzu kommen monatliche Nebenkostenvorauszahlungen'."
    },
    "erfordert": {
        "title": {
            "tr": "💡 Fiil Çekimi: Präsens 3. Tekil Şahıs (erfordern)",
            "en": "💡 Verb Conjugation: 3rd Person Singular Present (erfordern)",
            "ar": "💡 تصريف الفعل: المضارع للمفرد الغائب (erfordern)",
            "uk": "💡 Дієвідмінювання: 3-тя особа однини теперішнього часу (erfordern)"
        },
        "tr": "Düzenli fiil çekimi (Präsens 3. Tekil Şahıs): 'erfordern' (gerektirmek) fiili özne tekil olduğunda '-t' şahıs eki alır ('Die Wohnungssuche erfordert Geduld' = Ev arayışı sabır gerektirir).",
        "en": "Regular verb conjugation (3rd person singular present): 'erfordern' (to require/demand) takes '-t' ending with singular subject ('Die Wohnungssuche erfordert Geduld').",
        "ar": "تصريف فعل قياسي (المضارع للمفرد الغائب): يأخذ الفعل 'erfordern' (يتطلب) لاحقة '-t' مع الفاعل المفرد ('Die Wohnungssuche erfordert Geduld').",
        "uk": "Правильне дієслово (3-тя особа однини теперішнього часу): дієслово 'erfordern' (вимагати) приймає закінчення '-t' ('Die Wohnungssuche erfordert Geduld')."
    },
    "regelt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Präsens 3. Tekil Şahıs (regeln)",
            "en": "💡 Verb Conjugation: 3rd Person Singular Present (regeln)",
            "ar": "💡 تصريف الفعل: المضارع للمفرد الغائب (regeln)",
            "uk": "💡 Дієвідмінювання: 3-тя особа однини теперішнього часу (regeln)"
        },
        "tr": "Düzenli fiil çekimi: 'regeln' (düzenlemek / kurala bağlamak) fiilinin 3. tekil şahıs çekimidir ('Die Hausordnung regelt die Ruhezeiten' = Apartman kuralları dinlenme saatlerini düzenler).",
        "en": "Regular verb conjugation: 3rd person singular present of 'regeln' (to regulate/govern). In text: 'Die Hausordnung regelt die Ruhezeiten'.",
        "ar": "تصريف فعل قياسي: صيغة المفرد الغائب من الفعل 'regeln' (ينظم). في النص: 'Die Hausordnung regelt die Ruhezeiten'.",
        "uk": "Правильне дієслово: 3-тя особа однини від 'regeln' (регулювати). У тексті: 'Die Hausordnung regelt die Ruhezeiten'."
    },
    "steht": {
        "title": {
            "tr": "💡 Fiil Çekimi: Präsens 3. Tekil Şahıs (stehen)",
            "en": "💡 Verb Conjugation: 3rd Person Singular Present (stehen)",
            "ar": "💡 تصريف الفعل: المضارع للمفرد الغائب (stehen)",
            "uk": "💡 Дієвідмінювання: 3-тя особа однини теперішнього часу (stehen)"
        },
        "tr": "Fiil çekimi (Präsens 3. Tekil Şahıs): 'stehen' (durmak / bulunmak) fiilinin 3. tekil şahıs çekimidir. Yan cümlede sonda yer alır: 'Wenn der Schreibtisch im Zimmer steht...'",
        "en": "Verb conjugation (3rd person singular present): 3rd person singular of 'stehen' (to stand/be located). Verb-final in subordinate clause: 'Wenn der Schreibtisch im Zimmer steht...'",
        "ar": "تصريف الفعل: صيغة المفرد الغائب من 'stehen' (يوجد / يقف). في نهاية الجملة الجانبية: 'Wenn der Schreibtisch im Zimmer steht...'",
        "uk": "Дієвідмінювання: 3-тя особа однини від 'stehen' (стояти). У кінці підрядного речення: 'Wenn der Schreibtisch im Zimmer steht...'"
    },
    "mache": {
        "title": {
            "tr": "💡 Fiil Çekimi: Präsens 1. Tekil Şahıs (machen)",
            "en": "💡 Verb Conjugation: 1st Person Singular Present (machen)",
            "ar": "💡 تصريف الفعل: المضارع للمتكلم المفرد (machen)",
            "uk": "💡 Дієвідмінювання: 1-ша особа однини теперішнього часу (machen)"
        },
        "tr": "Fiil çekimi (1. Tekil Şahıs / Ich-Form): 'machen' fiilinin şimdiki zaman çekimidir. Kalıp ifade: 'von seinem Recht Gebrauch machen' (hakkını kullanmak; 'Ich mache von meinem Recht Gebrauch' = Hakkımı kullanıyorum).",
        "en": "Verb conjugation (1st person singular): Present tense form of 'machen'. Idiom: 'von seinem Recht Gebrauch machen' (to exercise one's right; 'Ich mache von meinem Recht Gebrauch').",
        "ar": "تصريف الفعل (صيغة المتكلم المفرد): صيغة المضارع مع 'ich' للفعل 'machen'. تركيب اصطلاحي: 'von seinem Recht Gebrauch machen' (يمارس حقه).",
        "uk": "Дієвідмінювання (1-ша особа однини): теперішній час дієслова 'machen'. Ідіома: 'von seinem Recht Gebrauch machen' (використовувати своє право)."
    },

    # --- MODAL VERBS (PRÄSENS & PRÄTERITUM) ---
    "kann": {
        "title": {
            "tr": "💡 Modal Fiil Çekimi: Präsens Tekil (können ➔ kann)",
            "en": "💡 Modal Verb Form: Present Singular (können ➔ kann)",
            "ar": "💡 تصريف الفعل المساعد: المضارع للمفرد (können ➔ kann)",
            "uk": "💡 Модальне дієслово: Теперішній час однини (können ➔ kann)"
        },
        "tr": "Modal fiil tekil çekimi: 'können' (yapabilmek / olasılık) fiili 1. ve 3. tekil şahısta (ich/er/sie/es) kök seslisini değiştirir ve şahıs eki almaz ('er kann' = yapabilir / yol açabilir). Metinde: 'was zu sozialer Isolation führen kann'.",
        "en": "Modal verb singular conjugation: 'können' (can / to be able to) changes its vowel to 'a' and takes no personal ending in 1st/3rd singular ('er kann' = can). In text: 'was zu sozialer Isolation führen kann'.",
        "ar": "تصريف الفعل المساعد (Modalverb): يغير الفعل 'können' حرف العلة إلى 'a' ولا يأخذ لاحقة فاعل مع المفرد (ich / er / sie / es kann). في النص: 'was zu sozialer Isolation führen kann'.",
        "uk": "Відмінювання модального дієслова: 'können' (могти) змінює голосну на 'a' та не має закінчення в 1-й/3-й особах однини ('er kann'). У тексті: 'was zu sozialer Isolation führen kann'."
    },
    "muss": {
        "title": {
            "tr": "💡 Modal Fiil Çekimi: Präsens Tekil (müssen ➔ muss)",
            "en": "💡 Modal Verb Form: Present Singular (müssen ➔ muss)",
            "ar": "💡 تصريف الفعل المساعد: المضارع للمفرد (müssen ➔ muss)",
            "uk": "💡 Модальне дієслово: Теперішній час однини (müssen ➔ muss)"
        },
        "tr": "Modal fiil tekil çekimi: 'müssen' (zorunda olmak) fiili 1. ve 3. tekil şahısta umlautını kaybeder ('u') ve şahıs eki almaz ('er/sie/es muss'). Metinde: 'muss eine Pause eingelegt werden' (bir mola verilmelidir).",
        "en": "Modal verb singular conjugation: 'müssen' (must / to have to) loses its umlaut and takes no personal ending in 1st/3rd singular ('er/sie/es muss'). In text: 'muss eine Pause eingelegt werden'.",
        "ar": "تصريف الفعل المساعد: يفقد الفعل 'müssen' الإمالة ولا يأخذ لاحقة مع المفرد الغائب ('muss'). في النص: 'muss eine Pause eingelegt werden' (يجب أخذ استراحة).",
        "uk": "Відмінювання модального дієслова: 'müssen' (мусити) втрачає умлаут і не має особового закінчення в однині ('muss'). У тексті: 'muss eine Pause eingelegt werden'."
    },
    "darf": {
        "title": {
            "tr": "💡 Modal Fiil Çekimi: Präsens Tekil (dürfen ➔ darf)",
            "en": "💡 Modal Verb Form: Present Singular (dürfen ➔ darf)",
            "ar": "💡 تصريف الفعل المساعد: المضارع للمفرد (dürfen ➔ darf)",
            "uk": "💡 Модальне дієслово: Теперішній час однини (dürfen ➔ darf)"
        },
        "tr": "Modal fiil tekil çekimi: 'dürfen' (izinli olmak / yasal hakka sahip olmak) fiili tekilde kök seslisini 'a' yapar ve ek almaz ('darf höchstens drei Nettokaltmieten betragen' = en fazla üç net kira tutarında olabilir).",
        "en": "Modal verb singular conjugation: 'dürfen' (may / to be permitted) changes vowel to 'a' without personal ending in singular ('darf höchstens drei Nettokaltmieten betragen' = may amount to at most three cold rents).",
        "ar": "تصريف الفعل المساعد: يتغير حرف العلة إلى 'a' في الفعل 'dürfen' (يُسمح به قانونًا) بدون لاحقة في المفرد ('darf höchstens...').",
        "uk": "Відмінювання модального дієслова: 'dürfen' (мати дозвіл / право) змінює голосну на 'a' без закінчення в однині ('darf höchstens...')."
    },
    "musste": {
        "title": {
            "tr": "💡 Modal Fiil Çekimi: Präteritum / Geçmiş Zaman (müssen ➔ musste)",
            "en": "💡 Modal Verb Form: Präteritum / Past Tense (müssen ➔ musste)",
            "ar": "💡 ماضي الفعل المساعد: الماضي البسيط (müssen ➔ musste)",
            "uk": "💡 Модальне дієслово: Минулий час Präteritum (müssen ➔ musste)"
        },
        "tr": "Modal fiil geçmiş zamanı (Präteritum): 'müssen' fiilinin geçmiş zaman çekimidir. Kök umlautı düşer ve '-te' geçmiş zaman eki gelir ('ich musste leider feststellen' = ne yazık ki tespit etmek zorunda kaldım / fark ettim).",
        "en": "Modal verb past tense (Präteritum): Past tense form of 'müssen'. The umlaut is dropped and '-te' past suffix is added ('ich musste feststellen' = I unfortunately had to realize).",
        "ar": "الماضي البسيط للفعل المساعد (Präteritum): تحذف الإمالة وتضاف اللاحقة '-te' للفعل 'müssen' ('ich musste feststellen' = اضطررت للأسف إلى ملاحظة).",
        "uk": "Минулий час модального дієслова (Präteritum): умлаут зникає, додається суфікс '-te' ('ich musste feststellen' = я змушений був констатувати)."
    },
    "wollte": {
        "title": {
            "tr": "💡 Modal Fiil Çekimi: Präteritum / Geçmiş Zaman (wollen ➔ wollte)",
            "en": "💡 Modal Verb Form: Präteritum / Past Tense (wollen ➔ wollte)",
            "ar": "💡 ماضي الفعل المساعد: الماضي البسيط (wollen ➔ wollte)",
            "uk": "💡 Модальне дієслово: Минулий час Präteritum (wollen ➔ wollte)"
        },
        "tr": "Modal fiil geçmiş zamanı (Präteritum): 'wollen' (istemek / niyet etmek) fiilinin geçmiş zamanıdır ('Als ich das Gerät in Betrieb nehmen wollte...' = Cihazı çalıştırmak / kullanıma almak istediğimde...).",
        "en": "Modal verb past tense (Präteritum): Past tense of 'wollen' (to want/intend). In text: 'Als ich das Gerät in Betrieb nehmen wollte...' (When I wanted to put the device into operation...).",
        "ar": "الماضي البسيط للفعل المساعد (Präteritum): ماضي الفعل 'wollen' (أراد / نوى). في النص: 'Als ich das Gerät in Betrieb nehmen wollte...' (عندما أردت تشغيل الجهاز...).",
        "uk": "Минулий час модального дієслова (Präteritum): минулий час дієслова 'wollen' (хотіти). У тексті: 'Als ich das Gerät in Betrieb nehmen wollte...' (Коли я хотів ввести прилад в експлуатацію...)."
    },

    # --- VERB CONJUGATIONS: PRÄTERITUM (AUXILIARY & MAIN) ---
    "wurde": {
        "title": {
            "tr": "💡 Fiil Çekimi: Präteritum / Edilgen Geçmiş (werden ➔ wurde)",
            "en": "💡 Verb Conjugation: Past Passive Voice (werden ➔ wurde)",
            "ar": "💡 تصريف الفعل: الماضي المبني للمجهول (werden ➔ wurde)",
            "uk": "💡 Дієвідмінювання: Минулий пасивний стан (werden ➔ wurde)"
        },
        "tr": "Präteritum / Edilgen Çatı (Passiv Präteritum): 'werden' yardımcı fiilinin geçmiş zamanıdır. Bir ana fiilin Partizip II haliyle birleşerek geçmişte edilgen eylemi anlatır ('wurde geliefert' = teslim edildi; 'übergeben wurde' = teslim edilmişti).",
        "en": "Past passive voice (Passiv Präteritum): Präteritum form of auxiliary 'werden'. Combined with Participle II to express past passive actions ('wurde geliefert' = was delivered; 'übergeben wurde' = was handed over).",
        "ar": "الماضي المبني للمجهول (Passiv Präteritum): صيغة الماضي من الفعل المساعد 'werden'. يقترن باسم المفعول للتعبير عن المبني للمجهول في الماضي ('wurde geliefert' = تم تسليمه).",
        "uk": "Минулий пасивний стан (Passiv Präteritum): форма минулого часу допоміжного дієслова 'werden'. У поєднанні з Partizip II виражає пасивну дію в минулому ('wurde geliefert' = було доставлено)."
    },
    "war": {
        "title": {
            "tr": "💡 Fiil Çekimi: Präteritum / Geçmiş Zaman (sein ➔ war)",
            "en": "💡 Verb Conjugation: Past Tense (sein ➔ war)",
            "ar": "💡 تصريف الفعل: الماضي البسيط (sein ➔ war)",
            "uk": "💡 Дієвідмінювання: Минулий час Präteritum (sein ➔ war)"
        },
        "tr": "Geçmiş zaman (Präteritum): 'sein' (olmak) fiilinin 1. ve 3. tekil şahıs Präteritum çekimidir ('Homeoffice war früher eine seltene Ausnahme' = Evden çalışma eskiden nadir bir istisnaydı).",
        "en": "Past tense (Präteritum): 1st/3rd person singular past of 'sein' (to be). In text: 'Homeoffice war früher eine seltene Ausnahme' (Working from home used to be a rare exception).",
        "ar": "الماضي البسيط (Präteritum): تصريف الفعل 'sein' (كان) مع المفرد. في النص: 'Homeoffice war früher eine seltene Ausnahme' (كان العمل من المنزل في السابق استثناءً نادرًا).",
        "uk": "Минулий час (Präteritum): форма минулого часу дієслова 'sein' (бути). У тексті: 'Homeoffice war früher eine seltene Ausnahme' (Раніше робота з дому була рідкісним винятком)."
    },
    "habe": {
        "title": {
            "tr": "💡 Yardımcı Fiil: Perfekt Zaman Kurucusu (haben ➔ habe)",
            "en": "💡 Auxiliary Verb: Perfect Tense Formation (haben ➔ habe)",
            "ar": "💡 فعل مساعد: صياغة الماضي التام (haben ➔ habe)",
            "uk": "💡 Допоміжне дієслово: Утворення Perfekt (haben ➔ habe)"
        },
        "tr": "Yardımcı fiil (Hilfsverb): 'haben' fiilinin 1. tekil şahıs (ich) çekimidir. Cümlenin sonundaki Partizip II ('bestellt') ile birleşerek geçmiş zaman (Perfekt) kurar: 'Ich habe eine Kaffeemaschine bestellt' (Bir kahve makinesi sipariş ettim).",
        "en": "Auxiliary verb: 1st person singular of 'haben'. Forms the conversational past (Perfekt) with Participle II ('bestellt') at sentence end: 'Ich habe ... bestellt' (I ordered / have ordered).",
        "ar": "فعل مساعد: تصريف 'haben' مع المتكلم 'ich'. يقترن مع اسم المفعول في نهاية الجملة لصياغة الماضي التام: 'Ich habe ... bestellt' (طلبتُ).",
        "uk": "Допоміжне дієслово: форма 1-ї особи однини від 'haben'. Утворює минулий час Perfekt з Partizip II у кінці: 'Ich habe ... bestellt' (Я замовив)."
    },
    "hat": {
        "title": {
            "tr": "💡 Yardımcı Fiil: Perfekt Zaman Kurucusu (haben ➔ hat)",
            "en": "💡 Auxiliary Verb: Perfect Tense Formation (haben ➔ hat)",
            "ar": "💡 فعل مساعد: صياغة الماضي التام (haben ➔ hat)",
            "uk": "💡 Допоміжне дієслово: Утворення Perfekt (haben ➔ hat)"
        },
        "tr": "Yardımcı fiil: 'haben' fiilinin 3. tekil şahıs çekimidir. 'hat sich gewandelt' (dönüştü / değişti) yapısında geçmiş zaman (Perfekt) kurar.",
        "en": "Auxiliary verb: 3rd person singular of 'haben'. Forms the Perfect tense in 'hat sich gewandelt' (has transformed).",
        "ar": "فعل مساعد: صيغة المفرد الغائب من 'haben'. يُصاغ به الماضي التام: 'hat sich gewandelt' (تحول / تغير).",
        "uk": "Допоміжне дієслово: 3-тя особа однини від 'haben'. Утворює час Perfekt: 'hat sich gewandelt' (змінився)."
    },

    # --- VERB CONJUGATIONS: PARTIZIP II & PASSIV ---
    "beigefügt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Ayrılabilir Fiil Partizip II (beifügen ➔ beigefügt)",
            "en": "💡 Verb Form: Separable Participle II (beifügen ➔ beigefügt)",
            "ar": "💡 تصريف الفعل: اسم المفعول لفعل منفصل (beifügen ➔ beigefügt)",
            "uk": "💡 Форма дієслова: Partizip II відокремлюваного дієслова"
        },
        "tr": "Ayrılabilir fiil Partizip II: 'beifügen' (eklemek / iliştirmek) ayrılabilir bir fiildir. Partizip II yapılırken 'ge-' takısı önek ile fiil kökü arasına girer: bei-ge-fügt (eklenmiş / ilişikte). Metinde sıfat olarak: 'im beigefügten Foto'.",
        "en": "Separable verb Participle II: In 'beifügen' (to attach/enclose), 'ge-' is inserted between prefix and stem: bei-ge-fügt (attached). Used as an adjective: 'im beigefügten Foto'.",
        "ar": "اسم مفعول لفعل منفصل: في 'beifügen'، تدخل 'ge-' بين السابقة وجذر الفعل: bei-ge-fügt (مرفق). مستخدم كصفة: 'im beigefügten Foto' (في الصورة المرفقة).",
        "uk": "Partizip II відокремлюваного дієслова: у 'beifügen' префікс 'ge-' вклинюється між основою та префіксом: bei-ge-fügt (доданий / прикріплений). Як прикметник: 'im beigefügten Foto'."
    },
    "eingelegt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Ayrılabilir Fiil Partizip II (einlegen ➔ eingelegt)",
            "en": "💡 Verb Form: Separable Participle II (einlegen ➔ eingelegt)",
            "ar": "💡 تصريف الفعل: اسم المفعول لفعل منفصل (einlegen ➔ eingelegt)",
            "uk": "💡 Форма дієслова: Partizip II відокремлюваного дієслова"
        },
        "tr": "Ayrılabilir fiil Partizip II: 'einlegen' (mola vermek / itiraz etmek) fiilinde 'ge-' takısı araya girer: ein-ge-legt. Edilgen yapıda: 'muss eine Pause eingelegt werden' (bir mola verilmelidir).",
        "en": "Separable verb Participle II: 'einlegen' places 'ge-' between prefix and verb stem: ein-ge-legt. In passive: 'muss eine Pause eingelegt werden' (a break must be taken).",
        "ar": "اسم مفعول لفعل منفصل: في 'einlegen'، تأتي 'ge-' بين السابقة والجذر: ein-ge-legt. في المبني للمجهول: 'muss eine Pause eingelegt werden'.",
        "uk": "Partizip II відокремлюваного дієслова: 'einlegen' ставить 'ge-' між префіксом та основою: ein-ge-legt. У пасивному стані: 'muss eine Pause eingelegt werden'."
    },
    "überwiesen": {
        "title": {
            "tr": "💡 Fiil Çekimi: Ayrılmaz Fiil Partizip II (überweisen ➔ überwiesen)",
            "en": "💡 Verb Form: Inseparable Participle II (überweisen ➔ überwiesen)",
            "ar": "💡 تصريف الفعل: اسم المفعول لفعل غير منفصل (überweisen ➔ überwiesen)",
            "uk": "💡 Форма дієслова: Partizip II невідокремлюваного дієслова"
        },
        "tr": "Düzensiz Partizip II: 'überweisen' (havale etmek) fiilinde 'über-' ayrılmaz önek olduğu için başına 'ge-' ALMAZ. Kök seslisi 'ei' -> 'ie' değişimine uğrar (überweisen -> überwiesen). Edilgen yapıda: 'muss überwiesen werden' (havale edilmelidir).",
        "en": "Irregular Participle II: 'überweisen' (to wire/transfer) has an inseparable prefix 'über-', so it does NOT take 'ge-'. Stem vowel changes 'ei' to 'ie' (überwiesen). In passive: 'muss überwiesen werden'.",
        "ar": "اسم مفعول غير قياسي: الفعل 'überweisen' سابقة غير منفصلة، لذا لا يأخذ 'ge-'. يتحول 'ei' إلى 'ie'. في المبني للمجهول: 'muss überwiesen werden' (يجب أن يتم تحويله).",
        "uk": "Partizip II невідокремлюваного дієслова: 'überweisen' має невідокремлюваний префікс, тому НЕ отримує 'ge-'. Голосна кореня змінюється з 'ei' на 'ie'. У пасиві: 'muss überwiesen werden'."
    },
    "gewandelt": {
        "title": {
            "tr": "💡 Fiil Çekimi: Dönüşlü Fiil Partizip II (sich wandeln ➔ gewandelt)",
            "en": "💡 Verb Form: Reflexive Participle II (sich wandeln ➔ gewandelt)",
            "ar": "💡 تصريف الفعل: اسم المفعول لفعل انعكاسي (sich wandeln ➔ gewandelt)",
            "uk": "💡 Форма дієслова: Partizip II зворотного дієслова"
        },
        "tr": "Partizip II (Geçmiş Zaman): 'sich wandeln' (dönüşmek / değişmek) dönüşlü fiilinin 3. halidir. 'hat sich gewandelt' yapısında geçmiş zaman bildirir (çalışma hayatı dönüştü).",
        "en": "Participle II: 3rd form of the reflexive verb 'sich wandeln' (to transform). Used in 'hat sich grundlegend gewandelt' (has fundamentally transformed).",
        "ar": "اسم مفعول: التصريف الثالث للفعل الانعكاسي 'sich wandeln' (تغير / تحول). مستخدم في 'hat sich gewandelt'.",
        "uk": "Partizip II: третя форма зворотного дієслова 'sich wandeln' (змінюватися). Використано в 'hat sich grundlegend gewandelt'."
    },
    "erleichtert": {
        "title": {
            "tr": "💡 Fiil Çekimi: Partizip II / Perfekt (erleichtern ➔ erleichtert)",
            "en": "💡 Verb Form: Participle II / Perfekt (erleichtern ➔ erleichtert)",
            "ar": "💡 تصريف الفعل: اسم المفعول (erleichtern ➔ erleichtert)",
            "uk": "💡 Форма дієслова: Partizip II (erleichtern ➔ erleichtert)"
        },
        "tr": "Partizip II: 'erleichtern' (kolaylaştırmak) fiilinin 3. halidir. 'er-' öneki ayrılmaz olduğu için başına 'ge-' almaz; sonuna '-t' gelir. 'hat erleichtert' = kolaylaştırdı.",
        "en": "Participle II: 3rd form of 'erleichtern' (to facilitate). Inseparable prefix 'er-' prevents 'ge-'; takes suffix '-t' ('hat erleichtert' = made easier).",
        "ar": "اسم مفعول: التصريف الثالث للفعل 'erleichtern' (سهّل / يسّر). السابقة غير منفصلة فلا تأخذ 'ge-'، وتنتهي بـ '-t'.",
        "uk": "Partizip II: третя форма дієслова 'erleichtern' (полегшувати). Невідокремлюваний префікс 'er-' не приймає 'ge-', закінчується на '-t'."
    },
    "bezeichnet": {
        "title": {
            "tr": "💡 Fiil Çekimi: Präsens 3. Tekil Şahıs (bezeichnen)",
            "en": "💡 Verb Conjugation: 3rd Person Singular Present (bezeichnen)",
            "ar": "💡 تصريف الفعل: المضارع للمفرد الغائب (bezeichnen)",
            "uk": "💡 Дієвідмінювання: 3-тя особа однини теперішнього часу (bezeichnen)"
        },
        "tr": "Fiil çekimi: 'bezeichnen' (tanımlamak / ifade etmek) fiilinin 3. tekil şahıs şimdiki zamanıdır ('Die Kaltmiete bezeichnet den reinen Preis...' = Soğuk kira yalın fiyatı ifade eder).",
        "en": "Verb conjugation: 3rd person singular present of 'bezeichnen' (to designate / denote). In text: 'Die Kaltmiete bezeichnet den reinen Preis...'",
        "ar": "تصريف الفعل: صيغة المفرد الغائب المضارع للفعل 'bezeichnen' (يدل على / يعني). في النص: 'Die Kaltmiete bezeichnet...'.",
        "uk": "Дієвідмінювання: 3-тя особа однини від 'bezeichnen' (позначати / означати). У тексті: 'Die Kaltmiete bezeichnet...'"
    },
    "gehört": {
        "title": {
            "tr": "💡 Fiil Yapısı: Edatlı Fiil (gehören zu + Dativ)",
            "en": "💡 Verb Structure: Prepositional Verb (gehören zu + Dativ)",
            "ar": "💡 بنية الفعل: فعل يتعدى بحرف جر (gehören zu + Dativ)",
            "uk": "💡 Структура дієслова: Дієслово з прийменником (gehören zu + Dativ)"
        },
        "tr": "Edatlı fiil çekimi: 'gehören zu + Dativ' (bir şeyin parçası olmak / -e ait olmak) kalıbıdır ('Homeoffice gehört zum Berufsalltag' = Evden çalışma meslek hayatının bir parçasıdır).",
        "en": "Prepositional verb: 'gehören zu + Dative' (to belong to / be part of). In text: 'Homeoffice gehört zum Berufsalltag' (Working from home is part of everyday working life).",
        "ar": "فعل مع حرف جر: تركيب 'gehören zu + Dativ' (ينتمي إلى / يعد جزءًا من). في النص: 'Homeoffice gehört zum Berufsalltag'.",
        "uk": "Дієслово з прийменником: конструкція 'gehören zu + Dativ' (належати до / бути частиною). У тексті: 'Homeoffice gehört zum Berufsalltag'."
    },

    # --- NOUN DECLENSIONS: GENITIV ---
    "mietverhältnisses": {
        "title": {
            "tr": "💡 Neden \"-ses\" takısı aldı? (Genitiv İpucu)",
            "en": "💡 Why the \"-ses\" ending? (Genitive Case)",
            "ar": "💡 لماذا لاحقة \"-ses\"؟ (حالة الإضافة Genitiv)",
            "uk": "💡 Чому закінчення \"-ses\"? (Родовий відмінок Genitiv)"
        },
        "tr": "Genitiv Tekil Kuralı (-nis ile biten isimler): 'das Mietverhältnis' (kira ilişkisi) nötr bir isimdir. Almancada '-nis' son ekiyle biten isimler Genitiv halinde sonlarına fazladan bir 's' daha alarak '-ses' takısıyla biter (zu Beginn des Mietverhältnisses = kira ilişkisinin başlangıcında).",
        "en": "Genitive singular rule (-nis nouns): 'das Mietverhältnis' is neuter. In German, nouns ending in '-nis' double the 's' in the Genitive to take '-ses' (zu Beginn des Mietverhältnisses = at the beginning of the tenancy).",
        "ar": "قاعدة الإضافة للأسماء المنتهية بـ '-nis': الاسم 'das Mietverhältnis' محايد. تضاعف الأسماء المنتهية بـ '-nis' حرف الـ s في حالة المضاف إليه وتأخذ '-ses'.",
        "uk": "Правило родового відмінка (іменники на '-nis'): 'das Mietverhältnis' середнього роду. Іменники на '-nis' у Genitiv подвоюють 's' і отримують закінчення '-ses'."
    },

    # --- NOUN DECLENSIONS: DATIV PLURAL ---
    "arbeitstagen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Dativ Plural İpucu)",
            "en": "💡 Why the \"-en\" ending? (Dative Plural Insight)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (جمع Dativ)",
            "uk": "💡 Чому закінчення \"-en\"? (Давальний відмінок множини)"
        },
        "tr": "Dativ Plural kuralı: 'der Arbeitstag' çoğulu 'die Arbeitstage'dir. 'an' edatı zaman bildirdiğinde Dativ gerektirir; çoğul isim Dativ durumunda sonuna zorunlu '-n' takısı alır: an zwei festen Arbeitstagen (iki sabit iş gününde).",
        "en": "Dative plural rule: 'der Arbeitstag' plurals as 'die Arbeitstage'. After preposition 'an' (time = Dative), all plural nouns add '-n': an zwei Arbeitstagen.",
        "ar": "قاعدة الـ Dativ للجمع: جمع 'der Arbeitstag' هو 'die Arbeitstage'. بعد حرف الجر 'an' الزمني (Dativ)، يضاف دائمًا حرف '-n' إلى نهاية اسم الجمع.",
        "uk": "Правило Dativ у множині: множина від 'der Arbeitstag' — 'die Arbeitstage'. Після часового прийменника 'an' (Dativ) іменник у множині обов'язково отримує '-n'."
    },
    "feiertagen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Dativ Plural İpucu)",
            "en": "💡 Why the \"-en\" ending? (Dative Plural Insight)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (جمع Dativ)",
            "uk": "💡 Чому закінчення \"-en\"? (Давальний відмінок множини)"
        },
        "tr": "Dativ Plural kuralı: 'der Feiertag' çoğulu 'die Feiertage'dir. 'an' edatı Dativ istediği için çoğul isim sonuna '-n' almıştır: an Sonn- und Feiertagen (pazar ve tatil günlerinde).",
        "en": "Dative plural rule: 'der Feiertag' plurals as 'die Feiertage'. Governed by preposition 'an' (Dative), adding '-n': an Feiertagen.",
        "ar": "قاعدة جمع الـ Dativ: جمع 'Feiertag' هو 'Feiertage'، ومع حرف الجر 'an' يأخذ الاسم الجمع لاحقة '-n'.",
        "uk": "Правило Dativ у множині: множина від 'Feiertag' — 'Feiertage'. Прийменник 'an' вимагає Dativ, тому додається закінчення '-n'."
    },
    "ballungsräumen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı ve Umlaut aldı? (Dativ Plural İpucu)",
            "en": "💡 Why the \"-en\" ending and Umlaut? (Dative Plural)",
            "ar": "💡 لماذا لاحقة \"-en\" والإمالة؟ (جمع Dativ)",
            "uk": "💡 Чому закінчення \"-en\" та умлаут? (Давальний відмінок множини)"
        },
        "tr": "Dativ Plural + Umlaut: 'der Ballungsraum' çoğulu 'die Ballungsräume'dir (au -> äu). 'in' edatı bulunma bildirdiğinde (Wo?) Dativ gerektirir ve çoğul isim sonuna '-n' alır: in Ballungsräumen (yoğun nüfuslu metropolitan bölgelerde).",
        "en": "Dative plural with Umlaut: Plural of 'der Ballungsraum' is 'die Ballungsräume' (au -> äu). Preposition 'in' for location (Wo?) requires Dative, adding '-n': in Ballungsräumen.",
        "ar": "جمع Dativ مع إمالة: جمع 'Ballungsraum' هو 'Ballungsräume'. حرف الجر 'in' للمكان يتطلب Dativ، فيضاف حرف '-n' للاسم الجمع: in Ballungsräumen.",
        "uk": "Dativ множини з умлаутом: множина від 'Ballungsraum' — 'Ballungsräume'. Прийменник місця 'in' (де?) вимагає Dativ, тому додається '-n': in Ballungsräumen."
    },
    "problemen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Dativ Plural İpucu)",
            "en": "💡 Why the \"-en\" ending? (Dative Plural Insight)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (جمع Dativ)",
            "uk": "💡 Чому закінчення \"-en\"? (Давальний відмінок множини)"
        },
        "tr": "Dativ Plural: 'das Problem' çoğulu 'die Probleme'dir. 'entgegenwirken' (önlem almak/karşı koymak) fiili her zaman Dativ bir nesne talep eder ('diesen Problemen entgegenwirken' = bu sorunların önüne geçmek). Çoğul isim '-n' almıştır.",
        "en": "Dative plural: Plural of 'das Problem' is 'die Probleme'. The verb 'entgegenwirken' (to counteract) always governs a Dative object: 'diesen Problemen entgegenwirken'. Adds '-n'.",
        "ar": "جمع Dativ: جمع 'das Problem' هو 'die Probleme'. الفعل 'entgegenwirken' يتطلب دائمًا مفعولاً في حالة الـ Dativ، لذا يضاف '-n' لاسم الجمع.",
        "uk": "Dativ множини: множина від 'das Problem' — 'die Probleme'. Дієслово 'entgegenwirken' завжди вимагає Dativ: 'diesen Problemen entgegenwirken'."
    },

    # --- NOUN DECLENSIONS: N-DEKLINATION (WEAK MASCULINE NOUNS) ---
    "experten": {
        "title": {
            "tr": "💡 İsim Çekimi: N-Deklination (Zayıf İsim)",
            "en": "💡 Noun Declension: N-Declension (Weak Masculine Noun)",
            "ar": "💡 تصريف الأسماء: التصريف الضعيف (N-Deklination)",
            "uk": "💡 Відмінювання іменників: N-відміна (слабка відміна)"
        },
        "tr": "N-Deklination (Zayıf Maskulin İsim): 'der Experte' sonu '-e' ile biten zayıf bir erkek isimdir. Yalın tekil hali ('der Experte') dışındaki tüm hallerde (Akkusativ, Dativ, Genitiv) ve çoğulunda sonuna '-n' takısı alır (Experten empfehlen = Uzmanlar tavsiye ediyor).",
        "en": "N-Declension (Weak masculine noun): 'der Experte' ends in '-e'. In all cases except Nominative singular, as well as in the plural, it must take the '-n' suffix (Experten empfehlen = Experts recommend).",
        "ar": "التصريف الضعيف للمذكر (N-Deklination): الاسم 'der Experte' ينتهي بـ '-e'. في جميع الحالات الإعرابية ما عدا المفرد المرفوع، وكذلك في صيغة الجمع، يجب أن يأخذ لاحقة '-n'.",
        "uk": "N-відміна (слабка відміна іменників чоловічого роду): 'der Experte' закінчується на '-e'. В усіх відмінках, крім називного однини, а також у множині отримує закінчення '-n'."
    },
    "kollegen": {
        "title": {
            "tr": "💡 İsim Çekimi: N-Deklination (Zayıf İsim)",
            "en": "💡 Noun Declension: N-Declension (Weak Masculine Noun)",
            "ar": "💡 تصريف الأسماء: التصريف الضعيف (N-Deklination)",
            "uk": "💡 Відмінювання іменників: N-відміна (слабка відміна)"
        },
        "tr": "N-Deklination (Zayıf İsim): 'der Kollege' (meslektaş) ismi zayıf maskulin çekime tabidir. 'mit Kolleginnen und Kollegen' yapısında 'mit' edatından ötürü Dativ Plural olarak '-n' takısı taşır.",
        "en": "N-Declension: 'der Kollege' is a weak masculine noun. Governed by preposition 'mit' (Dative), it appears in the Dative plural taking '-n'.",
        "ar": "تصريف ضعيف (N-Deklination): الاسم 'der Kollege' اسم مذكر ضعيف. بعد حرف الجر 'mit' (Dativ)، يأخذ لاحقة الجمع '-n'.",
        "uk": "N-відміна: 'der Kollege' — іменник слабкої відміни. Після прийменника 'mit' (Dativ) у давальному відмінку множини має закінчення '-n'."
    },
    "menschen": {
        "title": {
            "tr": "💡 İsim Çekimi: N-Deklination (der Mensch ➔ Menschen)",
            "en": "💡 Noun Declension: N-Declension (der Mensch ➔ Menschen)",
            "ar": "💡 تصريف الأسماء: التصريف الضعيف (der Mensch ➔ Menschen)",
            "uk": "💡 Відмінювання іменників: N-відміна (der Mensch ➔ Menschen)"
        },
        "tr": "N-Deklination: 'der Mensch' (insan) zayıf bir isimdir. Tekil Nominativ hariç tüm durumlarda ve tüm çoğul hallerde '-en' takısı alır ('Millionen Menschen' = milyonlarca insan; 'mit älteren Menschen' = yaşlı insanlarla).",
        "en": "N-Declension: 'der Mensch' (human/person) is a weak noun. Except for Nominative singular, it takes '-en' in all oblique singular cases and all plural forms ('Millionen Menschen').",
        "ar": "التصريف الضعيف (N-Deklination): الاسم 'der Mensch' يأخذ لاحقة '-en' في جميع الحالات الإعرابية ما عدا المفرد المرفوع، وكذلك في الجمع ('Millionen Menschen').",
        "uk": "N-відміна: 'der Mensch' (людина) — іменник слабкої відміни. Отримує закінчення '-en' в усіх формах, крім називного відмінка однини ('Millionen Menschen')."
    },
    "arbeitspsychologen": {
        "title": {
            "tr": "💡 İsim Çekimi: N-Deklination (der Arbeitspsychologe)",
            "en": "💡 Noun Declension: N-Declension (der Arbeitspsychologe)",
            "ar": "💡 تصريف الأسماء: التصريف الضعيف (der Arbeitspsychologe)",
            "uk": "💡 Відмінювання іменників: N-відміна (der Arbeitspsychologe)"
        },
        "tr": "N-Deklination Çoğul: Sonu '-oge' ile biten meslek adları zayıf çekimlenir ('der Psychologe' -> 'die Psychologen'). Çoğul öznedir: 'Psychologen und Arbeitspsychologen warnen...'",
        "en": "N-Declension Plural: Professions ending in '-loge' are weak masculine nouns ('der Psychologe' -> 'die Psychologen'). Plural subject in text.",
        "ar": "جمع التصريف الضعيف: أسماء المهن المنتهية بـ '-loge' أسماء مذكرة ضعيفة وتجمع بـ '-n' ('die Arbeitspsychologen').",
        "uk": "N-відміна множини: назви професій на '-loge' відмінюються за слабкою відміною та мають закінчення '-n' у множині."
    },

    # --- ADJECTIVE DECLENSIONS: -EN SUFFIX ---
    "täglichen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Zayıf Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Weak Adjective Declension)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف الصفة الضعيف)",
            "uk": "💡 Чому закінчення \"-en\"? (Слабка відміна прикметника)"
        },
        "tr": "Zayıf sıfat çekimi (Schwache Deklination): 'den täglichen Arbeitsweg' yapısında 'der Arbeitsweg' maskulin tekil bir isimdir. Akkusativ (ismin -i hali) durumunda belirli artikel 'den' olur ve belirli artikelden sonra sıfat daima '-en' takısı alır.",
        "en": "Weak adjective declension: In 'den täglichen Arbeitsweg', the masculine singular noun is in the Accusative case preceded by definite article 'den'. Following 'den', adjectives always take '-en'.",
        "ar": "تصريف الصفة الضعيف: في 'den täglichen Arbeitsweg'، الاسم مذكر في حالة النصب (Akkusativ) ومسبوق بأداة التعريف 'den'. تأخذ الصفة بعد 'den' لاحقة '-en' دائمًا.",
        "uk": "Слабка відміна прикметника: у 'den täglichen Arbeitsweg' іменник чоловічого роду стоїть у знахідному відмінку (Akkusativ) після означеного артикля 'den'. Після 'den' прикметник завжди має закінчення '-en'."
    },
    "aktuellen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Güçlü Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Strong Adjective Declension)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف الصفة القوي)",
            "uk": "💡 Чому закінчення \"-en\"? (Сильна відміна прикметника)"
        },
        "tr": "Güçlü sıfat çekimi (Starke Deklination): 'nach aktuellen Umfragen' yapısında 'nach' edatı Dativ gerektirir. 'Umfragen' çoğul isminin önünde artikel olmadığı için sıfat güçlü Dativ Plural '-en' takısı almıştır.",
        "en": "Strong adjective declension: In 'nach aktuellen Umfragen', preposition 'nach' requires Dative. Without an article before the plural noun, the adjective takes strong Dative plural '-en'.",
        "ar": "تصريف قوي: حرف الجر 'nach' يتطلب Dativ. لعدم وجود أداة قبل اسم الجمع 'Umfragen'، تأخذ الصفة لاحقة الـ Dativ للجمع '-en'.",
        "uk": "Сильна відміна: прийменник 'nach' вимагає Dativ. Оскільки перед іменником у множині немає артикля, прикметник отримує сильне закінчення '-en'."
    },
    "deutschen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Dativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Dative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف صفة لجمع Dativ)",
            "uk": "💡 Чому закінчення \"-en\"? (Прикметник у Dativ Plural)"
        },
        "tr": "Sıfat çekimi: 'in deutschen Ballungsräumen' yapısında 'in' edatı bulunma (Dativ) gerektirir. Artikelsiz çoğul isim önündeki sıfat güçlü Dativ Plural '-en' takısı alır.",
        "en": "Adjective declension: In 'in deutschen Ballungsräumen', 'in' governs Dative for location. Plural adjective without article takes Dative plural '-en'.",
        "ar": "تصريف الصفات: في 'in deutschen Ballungsräumen'، حرف الجر 'in' للمكان يتطلب Dativ، وتأخذ الصفة لجمع بدون أداة لاحقة '-en'.",
        "uk": "Відмінювання прикметників: прийменник місця 'in' вимагає Dativ; прикметник у множині без артикля приймає закінчення '-en'."
    },
    "beschädigten": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Genitiv Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Genitive Adjective Declension)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف الصفة في حالة الإضافة)",
            "uk": "💡 Чому закінчення \"-en\"? (Прикметник у родовому відмінку)"
        },
        "tr": "Zayıf sıfat çekimi (Genitiv): 'des beschädigten Wassertanks' (hasarlı su haznesinin) tamlamasında maskulin Genitiv artikel 'des'ten sonra sıfat zayıf çekim '-en' takısı alır.",
        "en": "Weak adjective declension (Genitive): In 'des beschädigten Wassertanks' (of the damaged water tank), the adjective takes '-en' after masculine genitive article 'des'.",
        "ar": "تصريف ضعيف في حالة الإضافة: بعد أداة المضاف إليه للمذكر 'des'، تأخذ الصفة لاحقة '-en' في 'des beschädigten Wassertanks'.",
        "uk": "Слабка відміна (Genitiv): після артикля чоловічого роду в родовому відмінку 'des' прикметник приймає '-en' ('des beschädigten Wassertanks')."
    },
    "eigenen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Dativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Dative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف صفة لجمع Dativ)",
            "uk": "💡 Чому закінчення \"-en\"? (Прикметник у Dativ Plural)"
        },
        "tr": "Zayıf sıfat çekimi: 'in den eigenen vier Wänden' (kendi dört duvarı arasında / kendi evinde) deyiminde 'den' Dativ Plural artikelinden sonra sıfat '-en' takısı alır.",
        "en": "Weak adjective declension: In 'in den eigenen vier Wänden' (within one's own four walls), the adjective takes '-en' following Dative plural article 'den'.",
        "ar": "تصريف صفة ضعيف: تأخذ الصفة '-en' بعد أداة الـ Dativ للجمع 'den' في التعبير 'in den eigenen vier Wänden'.",
        "uk": "Слабка відміна: прикметник приймає '-en' після артикля давального відмінка множини 'den' у виразі 'in den eigenen vier Wänden'."
    },
    "freundlichen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Dativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Dative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف صفة لجمع Dativ)",
            "uk": "💡 Чому закінчення \"-en\"? (Прикметник у Dativ Plural)"
        },
        "tr": "Mektup kapanış kalıbı (Dativ Plural): 'Mit freundlichen Grüßen' (Saygılarımla / İyi dileklerimle) kalıbında 'mit' edatı Dativ gerektirir; 'die Grüße' çoğulunun önünde artikelsiz sıfat güçlü '-en' takısı alır.",
        "en": "Letter closing formula (Dative plural): In 'Mit freundlichen Grüßen' (Sincerely / Best regards), 'mit' requires Dative; plural noun without article takes strong '-en'.",
        "ar": "صيغة ختام الرسائل (جمع Dativ): في 'Mit freundlichen Grüßen' (مع أطيب التحيات)، يتطلب حرف الجر 'mit' حالة الـ Dativ، فتأخذ الصفة لاحقة الجمع '-en'.",
        "uk": "Формула закінчення листа: у 'Mit freundlichen Grüßen' (З повагою) прийменник 'mit' вимагає Dativ; прикметник без артикля у множині отримує '-en'."
    },
    "gesellschaftlichen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Genitiv Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Genitive Adjective Declension)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف الصفة في حالة الإضافة)",
            "uk": "💡 Чому закінчення \"-en\"? (Прикметник у родовому відмінку)"
        },
        "tr": "Zayıf sıfat çekimi (Genitiv): 'des gesellschaftlichen Zusammenlebens' (toplumsal birlikte yaşamanın) yapısında nötr Genitiv artikel 'des'ten sonra sıfat '-en' takısı alır.",
        "en": "Weak adjective declension (Genitive): In 'des gesellschaftlichen Zusammenlebens', takes '-en' after neuter genitive article 'des'.",
        "ar": "تصريف ضعيف في حالة الإضافة: تأخذ الصفة '-en' بعد أداة المضاف إليه للمحايد 'des'.",
        "uk": "Слабка відміна: після артикля середнього роду в родовому відмінку 'des' прикметник приймає '-en'."
    },
    "gesetzlichen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Akkusativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Accusative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف صفة لجمع النصب)",
            "uk": "💡 Чому закінчення \"-en\"? (Прикметник у знахідному множини)"
        },
        "tr": "Zayıf sıfat çekimi (Akkusativ Plural): 'die gesetzlichen Ruhezeiten einhalten' yapısında çoğul belirli artikel 'die' sonrasında sıfat zayıf çekim '-en' takısı alır.",
        "en": "Weak adjective declension (Accusative plural): In 'die gesetzlichen Ruhezeiten', takes '-en' after definite plural article 'die'.",
        "ar": "تصريف ضعيف: تأخذ الصفة '-en' بعد أداة التعريف لجمع النصب 'die'.",
        "uk": "Слабка відміна: прикметник приймає '-en' після означеного артикля множини 'die'."
    },
    "gleichen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Dativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Dative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف صفة لجمع Dativ)",
            "uk": "💡 Чому закінчення \"-en\"? (Прикметник у Dativ Plural)"
        },
        "tr": "Güçlü sıfat çekimi: 'in drei gleichen Monatsraten' yapısında 'in' edatı Dativ gerektirir; sayı sıfatından ('drei') sonra çoğul sıfat Dativ Plural '-en' takısı alır.",
        "en": "Strong adjective declension: In 'in drei gleichen Monatsraten', 'in' governs Dative; after numeral 'drei', plural adjective takes '-en'.",
        "ar": "تصريف قوي: بعد حرف الجر 'in' والعدد 'drei'، تأخذ الصفة لاحقة الجمع بالـ Dativ '-en'.",
        "uk": "Сильна відміна: після прийменника 'in' та числівника 'drei' прикметник у множині приймає '-en'."
    },
    "lokalen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Dativ Maskulin Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Dative Masculine Adjective)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف صفة لمذكر Dativ)",
            "uk": "💡 Чому закінчення \"-en\"? (Прикметник у Dativ чоловічого роду)"
        },
        "tr": "Karışık sıfat çekimi (Dativ Maskulin): 'zu einem lokalen Verein' yapısında 'zu' edatı Dativ gerektirir; maskulin belirsiz artikel 'einem' sonrasında sıfat '-en' takısı alır.",
        "en": "Mixed adjective declension: In 'zu einem lokalen Verein', preposition 'zu' requires Dative; masculine adjective following 'einem' takes '-en'.",
        "ar": "تصريف مختلط: بعد حرف الجر 'zu' وأداة التنكير للمذكر 'einem'، تأخذ الصفة لاحقة '-en'.",
        "uk": "Мішана відміна: після прийменника 'zu' та неозначеного артикля 'einem' прикметник чоловічого роду приймає '-en'."
    },
    "restlichen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Dativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Dative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف صفة لجمع Dativ)",
            "uk": "💡 Чому закінчення \"-en\"? (Прикметник у Dativ Plural)"
        },
        "tr": "Zayıf sıfat çekimi (Dativ Plural): 'an den restlichen Tagen' yapısında 'den' Dativ çoğul artikelinden sonra sıfat '-en' takısı alır.",
        "en": "Weak adjective declension (Dative plural): In 'an den restlichen Tagen', takes '-en' after Dative plural article 'den'.",
        "ar": "تصريف ضعيف: تأخذ الصفة '-en' بعد أداة الـ Dativ للجمع 'den'.",
        "uk": "Слабка відміна: прикметник приймає '-en' після артикля давального відмінка множини 'den'."
    },
    "sogenannten": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Dativ Feminin Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Dative Feminine Adjective)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف صفة لمؤنث Dativ)",
            "uk": "💡 Чому закінчення \"-en\"? (Прикметник у Dativ жіночого роду)"
        },
        "tr": "Zayıf sıfat çekimi (Dativ Feminin): 'vor der sogenannten Entgrenzung' yapısında 'vor' edatı Dativ gerektirir; feminin artikel 'der' sonrasında sıfat '-en' takısı alır.",
        "en": "Weak adjective declension: In 'vor der sogenannten Entgrenzung', 'vor' governs Dative; feminine adjective following 'der' takes '-en'.",
        "ar": "تصريف ضعيف: بعد حرف الجر 'vor' والأداة المؤنثة في الـ Dativ 'der'، تأخذ الصفة '-en'.",
        "uk": "Слабка відміна: після прийменника 'vor' та артикля жіночого роду в Dativ 'der' прикметник отримує '-en'."
    },
    "spontanen": {
        "title": {
            "tr": "💡 Neden \"-en\" takısı aldı? (Akkusativ Maskulin Sıfat Çekimi)",
            "en": "💡 Why the \"-en\" ending? (Accusative Masculine Adjective)",
            "ar": "💡 لماذا لاحقة \"-en\"؟ (تصريف صفة لمذكر Akkusativ)",
            "uk": "💡 Чому закінчення \"-en\"? (Прикметник у знахідному чоловічого роду)"
        },
        "tr": "Zayıf sıfat çekimi (Akkusativ Maskulin): 'den spontanen Austausch beim Kaffee vermissen' yapısında maskulin akkusativ 'den' sonrasında sıfat '-en' takısı alır.",
        "en": "Weak adjective declension: In 'den spontanen Austausch', takes '-en' after masculine accusative definite article 'den'.",
        "ar": "تصريف ضعيف: تأخذ الصفة '-en' بعد أداة النصب للمذكر 'den'.",
        "uk": "Слабка відміна: прикметник отримує закінчення '-en' після артикля чоловічого роду в знахідному відмінку 'den'."
    },

    # --- ADJECTIVE DECLENSIONS: -ES & -EM SUFFIXES ---
    "ordnungsgemäßem": {
        "title": {
            "tr": "💡 Neden \"-em\" takısı aldı? (Dativ Maskulin Sıfat Çekimi)",
            "en": "💡 Why the \"-em\" ending? (Dative Masculine Strong Adjective)",
            "ar": "💡 لماذا لاحقة \"-em\"؟ (تصريف قوي لمذكر Dativ)",
            "uk": "💡 Чому закінчення \"-em\"? (Сильна відміна у Dativ чоловічого роду)"
        },
        "tr": "Güçlü sıfat çekimi (Dativ Maskulin): 'in ordnungsgemäßem Zustand' yapısında 'der Zustand' maskulin bir isimdir. 'in' edatı bulunma (Dativ) gerektirir; önünde artikel olmadığı için sıfat belirli artikelin ('dem') işlevini üstlenerek güçlü çekim '-em' takısı almıştır.",
        "en": "Strong adjective declension (Dative masculine): In 'in ordnungsgemäßem Zustand' (in proper condition), 'in' governs Dative. Because there is no article, the adjective carries the case signal of 'dem' with the strong ending '-em'.",
        "ar": "تصريف قوي للمذكر بالـ Dativ: في 'in ordnungsgemäßem Zustand'، حرف الجر 'in' يتطلب Dativ. لعدم وجود أداة تعريف، تأخذ الصفة لاحقة 'dem' القوية وهي '-em'.",
        "uk": "Сильна відміна (Dativ чоловічого роду): у 'in ordnungsgemäßem Zustand' прийменник місця 'in' вимагає Dativ. Без артикля прикметник бере сильне закінчення '-em' (сигнал артикля 'dem')."
    },

    # --- ADJECTIVE COMPARATIVES: KOMPARATIV (-ERE) ---
    "kürzere": {
        "title": {
            "tr": "💡 Sıfat Derecelendirmesi: Komparativ + Çekim Eki (kurz ➔ kürzere)",
            "en": "💡 Adjective Comparison: Comparative + Declension (kurz ➔ kürzere)",
            "ar": "💡 درجات الصفة: صيغة المقارنة والتصريف (kurz ➔ kürzere)",
            "uk": "💡 Ступені порівняння: Вищий ступінь + закінчення (kurz ➔ kürzere)"
        },
        "tr": "Sıfat Karşılaştırma Derecesi (Komparativ): 'kurz' (kısa) sıfatı karşılaştırma derecesinde umlaut alarak 'kürzer' (daha kısa) olur. 'kürzere Einsätze' yapısında çoğul isim önünde artikelsiz Akkusativ Plural '-e' çekim eki almıştır.",
        "en": "Comparative adjective with declension: 'kurz' (short) takes an umlaut in the comparative to become 'kürzer' (shorter). In 'kürzere Einsätze', it adds the strong Accusative plural ending '-e'.",
        "ar": "صيغة المقارنة مع التصريف: الصفة 'kurz' تصبح 'kürzer' (أقصر) في المقارنة مع إمالة. في 'kürzere Einsätze'، تأخذ لاحقة النصب للجمع '-e'.",
        "uk": "Вищий ступінь порівняння: прикметник 'kurz' отримує умлаут — 'kürzer' (коротший). У 'kürzere Einsätze' додається сильне закінчення знахідного відмінка множини '-e'."
    },
    "jüngere": {
        "title": {
            "tr": "💡 Sıfat Derecelendirmesi: Komparativ + Çekim Eki (jung ➔ jüngere)",
            "en": "💡 Adjective Comparison: Comparative + Declension (jung ➔ jüngere)",
            "ar": "💡 درجات الصفة: صيغة المقارنة والتصريف (jung ➔ jüngere)",
            "uk": "💡 Ступені порівняння: Вищий ступінь + закінчення (jung ➔ jüngere)"
        },
        "tr": "Sıfat Karşılaştırma Derecesi (Komparativ): 'jung' (genç) sıfatı karşılaştırmada umlaut alarak 'jünger' (daha genç) olur. 'Immer weniger jüngere Menschen' yapısında artikelsiz çoğul Nominativ '-e' takısı almıştır.",
        "en": "Comparative adjective with declension: 'jung' (young) forms comparative 'jünger' (younger) with umlaut. In 'jüngere Menschen', it takes strong Nominative plural ending '-e'.",
        "ar": "صيغة المقارنة مع التصريف: 'jung' تصبح 'jünger' (أصغر سناً). في 'jüngere Menschen' تأخذ لاحقة الرفع للجمع '-e'.",
        "uk": "Вищий ступінь порівняння: 'jung' утворює ступінь 'jünger' (молодший). У 'jüngere Menschen' приймає сильне закінчення називного відмінка множини '-e'."
    },
    "ruhestörender": {
        "title": {
            "tr": "💡 Neden \"-er\" takısı aldı? (Nominativ Maskulin Sıfat Çekimi)",
            "en": "💡 Why the \"-er\" ending? (Nominative Masculine Strong Adjective)",
            "ar": "💡 لماذا لاحقة \"-er\"؟ (تصريف قوي لمذكر Nominativ)",
            "uk": "💡 Чому закінчення \"-er\"? (Сильна відміна у називному чоловічого роду)"
        },
        "tr": "Güçlü sıfat çekimi (Nominativ Maskulin): 'der Lärm' maskulin bir isimdir. 'ruhestörender Lärm ist untersagt' cümlesinde önünde artikel olmadığı için sıfat 'der' artikelinin işaretini taşıyarak güçlü '-er' takısı almıştır.",
        "en": "Strong adjective declension (Nominative masculine): 'der Lärm' is masculine. Without an article, the adjective carries the marker of 'der' with strong ending '-er': 'ruhestörender Lärm'.",
        "ar": "تصريف قوي للمذكر في الرفع: لعدم وجود أداة قبل الاسم المذكر 'der Lärm'، تأخذ الصفة علامة الأداة '-er' في 'ruhestörender Lärm'.",
        "uk": "Сильна відміна (називний відмінок чоловічого роду): перед іменником 'der Lärm' без артикля прикметник бере сильне закінчення '-er' (маркер артикля 'der')."
    },
    "sozialer": {
        "title": {
            "tr": "💡 Neden \"-er\" takısı aldı? (Dativ Feminin Sıfat Çekimi)",
            "en": "💡 Why the \"-er\" ending? (Dative Feminine Strong Adjective)",
            "ar": "💡 لماذا لاحقة \"-er\"؟ (تصريف قوي لمؤنث Dativ)",
            "uk": "💡 Чому закінчення \"-er\"? (Сильна відміна у Dativ жіночого роду)"
        },
        "tr": "Güçlü sıfat çekimi (Dativ Feminin): 'die Isolation' feminin bir isimdir. 'zu' edatı Dativ gerektirir; artikelsiz sıfat 'der' artikelinin sesini yansıtarak '-er' takısı almıştır: 'zu sozialer Isolation' (sosyal izolasyona).",
        "en": "Strong adjective declension (Dative feminine): 'die Isolation' is feminine. Governed by 'zu' (Dative) without article, the adjective takes the signal ending of 'der' (-er): 'zu sozialer Isolation'.",
        "ar": "تصريف قوي لمؤنث بالـ Dativ: حرف الجر 'zu' يتطلب Dativ. لعدم وجود أداة قبل 'die Isolation'، تأخذ الصفة علامة الأداة المؤنثة بالـ Dativ '-er': 'zu sozialer Isolation'.",
        "uk": "Сильна відміна (Dativ жіночого роду): після прийменника 'zu' (Dativ) перед іменником без артикля прикметник отримує сильне закінчення '-er': 'zu sozialer Isolation'."
    },

    # --- ADJECTIVE DECLENSIONS: -E SUFFIX (PLURAL & FEMININE) ---
    "dienstliche": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Nominativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Nominative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة لجمع Nominativ)",
            "uk": "💡 Чому закінчення \"-e\"? (Прикметник у називному множини)"
        },
        "tr": "Güçlü sıfat çekimi (Nominativ Plural): 'dienstliche E-Mails' yapısında çoğul isim önünde artikel olmadığı için sıfat güçlü Nominativ Plural '-e' takısı almıştır.",
        "en": "Strong adjective declension (Nominative plural): In 'dienstliche E-Mails', plural noun without article takes strong Nominative plural '-e'.",
        "ar": "تصريف قوي: تأخذ الصفة لاحقة الرفع للجمع بدون أداة '-e' في 'dienstliche E-Mails'.",
        "uk": "Сильна відміна: перед іменником у множині без артикля прикметник приймає '-e' у називному відмінку."
    },
    "flexible": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Akkusativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Accusative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة لجمع Akkusativ)",
            "uk": "💡 Чому закінчення \"-e\"? (Прикметник у знахідному множини)"
        },
        "tr": "Güçlü sıfat çekimi (Akkusativ Plural): 'flexible Projekte anbieten' yapısında artikelsiz çoğul isim önünde sıfat güçlü Akkusativ Plural '-e' takısı almıştır (ayrıca 'flexibel' sıfatındaki kök 'e' harfi çekimde düşer: flexibl-e).",
        "en": "Strong adjective declension: In 'flexible Projekte', plural noun without article takes Accusative plural ending '-e' (stem vowel 'e' drops: flexibel -> flexibl-e).",
        "ar": "تصريف قوي لجمع النصب: تأخذ الصفة لاحقة النصب للجمع '-e' في 'flexible Projekte' (يسقط حرف e من الجذر: flexibl-e).",
        "uk": "Сильна відміна: у 'flexible Projekte' прикметник приймає '-e' у знахідному множини (голосна кореня 'e' випадає: flexibl-e)."
    },
    "freiwillige": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Akkusativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Accusative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة لجمع Akkusativ)",
            "uk": "💡 Чому закінчення \"-e\"? (Прикметник у знахідному множини)"
        },
        "tr": "Güçlü sıfat çekimi: 'ohne freiwillige Helferinnen' yapısında 'ohne' Akkusativ gerektirir; artikelsiz çoğul sıfat Akkusativ Plural '-e' takısı alır.",
        "en": "Strong adjective declension: Governed by 'ohne' (Accusative); plural noun without article takes Accusative plural '-e'.",
        "ar": "تصريف قوي: بعد حرف الجر 'ohne' (Akkusativ)، تأخذ الصفة لجمع بدون أداة لاحقة '-e'.",
        "uk": "Сильна відміна: після 'ohne' (Akkusativ) прикметник у множині без артикля приймає '-e'."
    },
    "geehrte": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Hitap / Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Salutation Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة لجمع النداء والتحية)",
            "uk": "💡 Чому закінчення \"-e\"? (Прикметник у формулі звертання)"
        },
        "tr": "Mektup hitap kalıbı: 'Sehr geehrte Damen und Herren' (Saygıdeğer Hanımefendiler ve Beyefendiler) resmi hitabında artikelsiz çoğul sıfat güçlü '-e' takısı alır.",
        "en": "Formal salutation: In 'Sehr geehrte Damen und Herren' (Dear Sir or Madam), the plural adjective without article takes strong ending '-e'.",
        "ar": "صيغة التحية الرسمية: في 'Sehr geehrte Damen und Herren' (سيداتي وسادتي المحترمين)، تأخذ الصفة لجمع النداء لاحقة '-e'.",
        "uk": "Офіційне звертання: у 'Sehr geehrte Damen und Herren' (Шановні пані та панове) прикметник у множині має закінчення '-e'."
    },
    "gute": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Nominativ Feminin Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Nominative Feminine Adjective)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة لمؤنث Nominativ)",
            "uk": "💡 Чому закінчення \"-e\"? (Прикметник у називному жіночого роду)"
        },
        "tr": "Güçlü sıfat çekimi (Nominativ Feminin): 'die Vorbereitung' feminin bir isimdir; artikelsiz tekil kullanımda güçlü sıfat '-e' takısı alır: 'Geduld und gute Vorbereitung'.",
        "en": "Strong adjective declension (Nominative feminine): 'die Vorbereitung' is feminine; without article it takes strong ending '-e'.",
        "ar": "تصريف قوي للمؤنث: تأخذ الصفة لاحقة '-e' قبل الاسم المؤنث بدون أداة في 'gute Vorbereitung'.",
        "uk": "Сильна відміна: перед іменником жіночого роду без артикля прикметник приймає закінчення '-e' ('gute Vorbereitung')."
    },
    "handwerkliche": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Nominativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Nominative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة لجمع Nominativ)",
            "uk": "💡 Чому закінчення \"-e\"? (Прикметник у називному множини)"
        },
        "tr": "Güçlü sıfat çekimi (Nominativ Plural): 'die Arbeiten' çoğul isminin önünde artikel olmadığında sıfat güçlü çoğul '-e' takısı alır: 'Handwerkliche Arbeiten sind untersagt'.",
        "en": "Strong adjective declension (Nominative plural): Plural noun without article takes strong '-e': 'Handwerkliche Arbeiten sind untersagt'.",
        "ar": "تصريف قوي لجمع الرفع: تأخذ الصفة لاحقة الجمع بدون أداة '-e' في 'Handwerkliche Arbeiten'.",
        "uk": "Сильна відміна: іменник у множині без артикля вимагає сильного закінчення '-e' ('Handwerkliche Arbeiten')."
    },
    "hybride": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Akkusativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Accusative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة لجمع Akkusativ)",
            "uk": "💡 Чому закінчення \"-e\"? (Прикметник у знахідному множини)"
        },
        "tr": "Güçlü sıfat çekimi (Akkusativ Plural): 'auf hybride Arbeitsmodelle setzen' yapısında 'auf' Akkusativ gerektirir; artikelsiz çoğul sıfat '-e' takısı alır.",
        "en": "Strong adjective declension: In 'auf hybride Arbeitsmodelle', takes strong Accusative plural ending '-e'.",
        "ar": "تصريف قوي: تأخذ الصفة لاحقة النصب للجمع '-e' في 'hybride Arbeitsmodelle'.",
        "uk": "Сильна відміна: прикметник у множині без артикля приймає закінчення '-e' у знахідному відмінку."
    },
    "langfristige": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Akkusativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Accusative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة لجمع Akkusativ)",
            "uk": "💡 Чому закінчення \"-e\"? (Прикметник у знахідному множини)"
        },
        "tr": "Güçlü sıfat çekimi: 'langfristige Verpflichtungen übernehmen' yapısında artikelsiz çoğul isim önünde sıfat Akkusativ Plural '-e' takısı alır.",
        "en": "Strong adjective declension: Plural noun without article takes strong Accusative plural ending '-e'.",
        "ar": "تصريف قوي: تأخذ الصفة لاحقة النصب للجمع بدون أداة '-e' في 'langfristige Verpflichtungen'.",
        "uk": "Сильна відміна: перед іменником у множині без артикля прикметник отримує '-e' у знахідному відмінку."
    },
    "laute": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Nominativ Feminin Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Nominative Feminine Adjective)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة لمؤنث Nominativ)",
            "uk": "💡 Чому закінчення \"-e\"? (Прикметник у називному жіночого роду)"
        },
        "tr": "Güçlü sıfat çekimi: 'die Musik' feminin bir isimdir; 'laute Musik ist untersagt' cümlesinde artikelsiz feminin sıfat güçlü Nominativ '-e' takısı almıştır.",
        "en": "Strong adjective declension: 'die Musik' is feminine; without article it takes strong Nominative feminine '-e'.",
        "ar": "تصريف قوي للمؤنث: تأخذ الصفة لاحقة الرفع للمؤنث بدون أداة '-e' في 'laute Musik'.",
        "uk": "Сильна відміна: перед іменником жіночого роду без артикля прикметник приймає '-e' у називному відмінку."
    },
    "neue": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Akkusativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Accusative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة لجمع Akkusativ)",
            "uk": "💡 Чому закінчення \"-e\"? (Прикметник у знахідному множини)"
        },
        "tr": "Güçlü sıfat çekimi (Akkusativ Plural): 'neue Freundschaften schließen' yapısında çoğul isim önünde artikel olmadığı için sıfat Akkusativ Plural '-e' takısı almıştır.",
        "en": "Strong adjective declension (Accusative plural): In 'neue Freundschaften schließen', plural noun without article takes strong Accusative plural '-e'.",
        "ar": "تصريف قوي لجمع النصب: تأخذ الصفة لاحقة النصب للجمع بدون أداة '-e' في 'neue Freundschaften'.",
        "uk": "Сильна відміна: перед іменником у множині без артикля прикметник приймає закінчення '-e' у знахідному відмінку."
    },
    "regelmäßige": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Akkusativ Plural Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Accusative Plural Adjective)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة لجمع Akkusativ)",
            "uk": "💡 Чому закінчення \"-e\"? (Прикметник у знахідному множини)"
        },
        "tr": "Güçlü sıfat çekimi: 'regelmäßige Traineraufgaben übernehmen' yapısında artikelsiz çoğul sıfat Akkusativ Plural '-e' takısı alır.",
        "en": "Strong adjective declension: In 'regelmäßige Traineraufgaben', plural noun without article takes strong Accusative plural '-e'.",
        "ar": "تصريف قوي: تأخذ الصفة لاحقة النصب للجمع بدون أداة '-e' في 'regelmäßige Traineraufgaben'.",
        "uk": "Сильна відміна: у знахідному відмінку множини без артикля прикметник отримує '-e'."
    },
    "seltene": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Karışık Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Mixed Adjective Declension)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة مختلط)",
            "uk": "💡 Чому закінчення \"-e\"? (Мішана відміна прикметника)"
        },
        "tr": "Karışık sıfat çekimi: 'eine seltene Ausnahme' yapısında 'die Ausnahme' feminin bir isimdir; 'eine' belirsiz artikelinden sonra Nominativ Feminin sıfat '-e' takısı alır.",
        "en": "Mixed adjective declension: In 'eine seltene Ausnahme', feminine noun after indefinite article 'eine' takes Nominative feminine '-e'.",
        "ar": "تصريف مختلط: بعد أداة التنكير المؤنثة 'eine'، تأخذ الصفة لاحقة الرفع للمؤنث '-e'.",
        "uk": "Мішана відміна: після неозначеного артикля 'eine' перед іменником жіночого роду прикметник приймає '-e'."
    },
    "sogenannte": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Zayıf Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Weak Adjective Declension)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة ضعيف)",
            "uk": "💡 Чому закінчення \"-e\"? (Слабка відміна прикметника)"
        },
        "tr": "Zayıf sıfat çekimi: 'dieses sogenannte Ehrenamt' yapısında 'dieses' işaret zamirinden sonra nötr Nominativ sıfat zayıf çekim '-e' takısı alır.",
        "en": "Weak adjective declension: In 'dieses sogenannte Ehrenamt', neuter adjective takes '-e' following demonstrative determiner 'dieses'.",
        "ar": "تصريف ضعيف: تأخذ الصفة لاحقة '-e' بعد اسم الإشارة للمحايد 'dieses'.",
        "uk": "Слабка відміна: після вказівного займенника середнього роду 'dieses' прикметник приймає '-e'."
    },
    "tatsächliche": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Zayıf Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Weak Adjective Declension)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة ضعيف)",
            "uk": "💡 Чому закінчення \"-e\"? (Слабка відміна прикметника)"
        },
        "tr": "Zayıf sıfat çekimi: 'die tatsächliche Warmmiete' yapısında feminin belirli artikel 'die' sonrasında sıfat Nominativ Feminin '-e' takısı alır.",
        "en": "Weak adjective declension: In 'die tatsächliche Warmmiete', takes '-e' after feminine definite article 'die'.",
        "ar": "تصريف ضعيف: تأخذ الصفة لاحقة '-e' بعد أداة التعريف المؤنثة 'die'.",
        "uk": "Слабка відміна: прикметник приймає '-e' після означеного артикля жіночого роду 'die'."
    },
    "wichtige": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Karışık Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Mixed Adjective Declension)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة مختلط)",
            "uk": "💡 Чому закінчення \"-e\"? (Мішана відміна прикметника)"
        },
        "tr": "Karışık sıfat çekimi: 'eine wichtige Gelegenheit' yapısında 'eine' belirsiz artikelinden sonra feminin sıfat Nominativ '-e' takısı alır.",
        "en": "Mixed adjective declension: In 'eine wichtige Gelegenheit', takes '-e' after indefinite article 'eine' before feminine noun.",
        "ar": "تصريف مختلط: تأخذ الصفة لاحقة '-e' بعد أداة التنكير 'eine' قبل الاسم المؤنث.",
        "uk": "Мішана відміна: після неозначеного артикля 'eine' перед іменником жіночого роду прикметник приймає '-e'."
    },
    "defekte": {
        "title": {
            "tr": "💡 Neden \"-e\" takısı aldı? (Zayıf Sıfat Çekimi)",
            "en": "💡 Why the \"-e\" ending? (Weak Adjective Declension)",
            "ar": "💡 لماذا لاحقة \"-e\"؟ (تصريف صفة ضعيف)",
            "uk": "💡 Чому закінчення \"-e\"? (Слабка відміна прикметника)"
        },
        "tr": "Zayıf sıfat çekimi: 'das defekte Gerät' yapısında nötr belirli artikel 'das'tan sonra Akkusativ nötr sıfat zayıf çekim '-e' takısı alır.",
        "en": "Weak adjective declension: In 'das defekte Gerät', takes '-e' after neuter definite article 'das' in Accusative.",
        "ar": "تصريف ضعيف: تأخذ الصفة لاحقة '-e' بعد أداة التعريف للمحايد 'das' في حالة النصب.",
        "uk": "Слабка відміна: прикметник отримує '-e' після означеного артикля середнього роду 'das' у знахідному відмінку."
    },

    # --- PRONOUNS & DETERMINERS ---
    "einigen": {
        "title": {
            "tr": "💡 Zamir Çekimi: Dativ Plural (einige ➔ einigen)",
            "en": "💡 Pronoun Declension: Dative Plural (einige ➔ einigen)",
            "ar": "💡 تصريف الضمير: جمع Dativ (einige ➔ einigen)",
            "uk": "💡 Відмінювання займенника: Dativ Plural (einige ➔ einigen)"
        },
        "tr": "Zamir çekimi (Dativ Plural): 'seit einigen Jahren' (birkaç yıldan beri) yapısında 'seit' edatı Dativ gerektirir; 'einige' belirsiz zamiri çoğulda Dativ '-en' takısı almıştır.",
        "en": "Indefinite pronoun declension (Dative plural): In 'seit einigen Jahren' (for several years), 'seit' governs Dative; 'einige' takes Dative plural ending '-en'.",
        "ar": "تصريف الضمير (جمع Dativ): بعد حرف الجر 'seit' (Dativ)، يأخذ الضمير المبهم 'einige' لاحقة الـ Dativ للجمع '-en'.",
        "uk": "Відмінювання неозначеного займенника: після прийменника 'seit' (Dativ) займенник 'einige' приймає закінчення '-en' ('seit einigen Jahren')."
    },
    "aller": {
        "title": {
            "tr": "💡 Zamir Çekimi: Genitiv Plural (alle ➔ aller)",
            "en": "💡 Pronoun Declension: Genitive Plural (alle ➔ aller)",
            "ar": "💡 تصريف الضمير: جمع المضاف إليه (alle ➔ aller)",
            "uk": "💡 Відмінювання займенника: Родовий відмінок множини (alle ➔ aller)"
        },
        "tr": "Belirteç/Zamir çekimi (Genitiv Plural): 'aller Beschäftigten' (tüm çalışanların) yapısında 'alle' zamiri çoğul Genitiv tamlayan olarak '-er' takısı almıştır.",
        "en": "Quantifier declension (Genitive plural): In 'aller Beschäftigten' (of all employees), 'alle' takes Genitive plural ending '-er'.",
        "ar": "تصريف اسم الإحاطة (جمع مضاف إليه): يأخذ 'alle' لاحقة الجمع للمضاف إليه '-er' في 'aller Beschäftigten'.",
        "uk": "Відмінювання займенника: у 'aller Beschäftigten' займенник 'alle' приймає закінчення родового відмінка множини '-er'."
    },
    "allem": {
        "title": {
            "tr": "💡 Sabit Deyim: Dativ Nötr (vor allem)",
            "en": "💡 Fixed Idiom: Dative Neuter (vor allem)",
            "ar": "💡 تعبير اصطلاحي: Dativ محايد (vor allem)",
            "uk": "💡 Стійкий вираз: Dativ середнього роду (vor allem)"
        },
        "tr": "Sabit edatlı deyim: 'vor allem' (özellikle, her şeyden önce) kalıbında 'vor' edatı Dativ gerektirir; 'alles' zamiri Dativ Nötr '-em' takısı alarak kalıplaşmıştır.",
        "en": "Fixed idiom: 'vor allem' (above all / especially). Preposition 'vor' governs Dative; 'alles' takes Dative neuter ending '-em'.",
        "ar": "تعبير اصطلاحي ثابت: 'vor allem' (خاصة / قبل كل شيء). يتطلب حرف الجر 'vor' حالة Dativ، فتأخذ 'alles' لاحقة '-em'.",
        "uk": "Стійкий вираз: 'vor allem' (перш за все / особливо). Прийменник 'vor' вимагає Dativ, займенник 'alles' приймає '-em'."
    },
    "anderem": {
        "title": {
            "tr": "💡 Sabit Deyim: Dativ Nötr (unter anderem)",
            "en": "💡 Fixed Idiom: Dative Neuter (unter anderem)",
            "ar": "💡 تعبير اصطلاحي: Dativ محايد (unter anderem)",
            "uk": "💡 Стійкий вираз: Dativ середнього роду (unter anderem)"
        },
        "tr": "Sabit deyim (Kısaltması: u.a.): 'unter anderem' (diğerlerinin yanı sıra, bu arada) kalıbında 'unter' edatı Dativ Nötr '-em' takısı alır.",
        "en": "Fixed idiom (Abbr: u.a.): 'unter anderem' (among other things / including). Preposition 'unter' takes Dative neuter ending '-em'.",
        "ar": "تعبير اصطلاحي (اختصاره u.a.): 'unter anderem' (من بين أمور أخرى).",
        "uk": "Стійкий вираз (скорочено u.a.): 'unter anderem' (серед іншого / між іншим)."
    },

    # --- PLURAL NOUN PATTERNS ---
    "angebote": {
        "title": {
            "tr": "💡 İsim Çekimi: Çoğul Eki (das Angebot ➔ die Angebote)",
            "en": "💡 Noun Declension: Plural Formation (das Angebot ➔ die Angebote)",
            "ar": "💡 تصريف الأسماء: صيغة الجمع (das Angebot ➔ die Angebote)",
            "uk": "💡 Творення множини: das Angebot ➔ die Angebote"
        },
        "tr": "Çoğul yapımı: 'das Angebot' (teklif / olanak) nötr bir isimdir ve çoğulda sonuna '-e' takısı alır (die Angebote; 'öffentliche Angebote' = kamuya açık olanaklar/hizmetler).",
        "en": "Plural formation: 'das Angebot' is neuter and forms its plural with '-e' (die Angebote; 'öffentliche Angebote' = public offerings/programs).",
        "ar": "صيغة الجمع: الاسم 'das Angebot' محايد ويجمع بإضافة '-e' (die Angebote = عروض / خدمات).",
        "uk": "Творення множини: 'das Angebot' середнього роду, утворює множину за допомогою '-e' (die Angebote)."
    },
    "arbeitsmodelle": {
        "title": {
            "tr": "💡 İsim Çekimi: Bileşik İsim Çoğulu (die Arbeitsmodelle)",
            "en": "💡 Noun Declension: Compound Plural (die Arbeitsmodelle)",
            "ar": "💡 تصريف الأسماء: جمع اسم مركب (die Arbeitsmodelle)",
            "uk": "💡 Творення множини: Складний іменник (die Arbeitsmodelle)"
        },
        "tr": "Bileşik isim çoğulu: 'die Arbeit' + 'das Modell' (çoğulu: 'die Modelle'). Bileşik isimlerin çoğul eki ve artikeli sondaki temel kelimeden gelir ('hybride Arbeitsmodelle' = hibrit çalışma modelleri).",
        "en": "Compound noun plural: 'die Arbeit' + 'das Modell' (plural: 'die Modelle'). Plural inflection follows the base word: 'hybride Arbeitsmodelle'.",
        "ar": "جمع اسم مركب: يتبع الجمع الكلمة الأخيرة 'das Modell' (جمعها 'die Modelle'): 'hybride Arbeitsmodelle'.",
        "uk": "Множина складного іменника: визначається за останнім словом 'das Modell' (множина 'die Modelle'): 'hybride Arbeitsmodelle'."
    },
    "einsätze": {
        "title": {
            "tr": "💡 İsim Çekimi: Çoğul Eki ve Umlaut (der Einsatz ➔ die Einsätze)",
            "en": "💡 Noun Declension: Plural with Umlaut (der Einsatz ➔ die Einsätze)",
            "ar": "💡 تصريف الأسماء: جمع مع إمالة (der Einsatz ➔ die Einsätze)",
            "uk": "💡 Творення множини з умлаутом (der Einsatz ➔ die Einsätze)"
        },
        "tr": "Çoğul ve Umlaut: 'der Einsatz' (görev, faaliyet) maskulin isminin çoğulu kökteki 'a' harfinin 'ä' olması ve sonuna '-e' eklenmesiyle kurulur (die Einsätze; 'kürzere Einsätze' = daha kısa süreli görevler).",
        "en": "Plural with umlaut: 'der Einsatz' plurals with stem umlaut 'a -> ä' and suffix '-e' (die Einsätze; 'kürzere Einsätze' = shorter assignments).",
        "ar": "جمع مع إمالة: يجمع 'der Einsatz' بتحويل 'a' إلى 'ä' وإضافة '-e' (die Einsätze = مهام / مشاركات).",
        "uk": "Множина з умлаутом: 'der Einsatz' утворює множину чергуванням 'a -> ä' та суфіксом '-e' (die Einsätze)."
    },
    "fachbegriffe": {
        "title": {
            "tr": "💡 İsim Çekimi: Bileşik İsim Çoğulu (die Fachbegriffe)",
            "en": "💡 Noun Declension: Compound Plural (die Fachbegriffe)",
            "ar": "💡 تصريف الأسماء: جمع اسم مركب (die Fachbegriffe)",
            "uk": "💡 Творення множини: Складний іменник (die Fachbegriffe)"
        },
        "tr": "Bileşik isim çoğulu: 'das Fach' (uzmanlık alanı) + 'der Begriff' (çoğulu: 'die Begriffe'). 'Fachbegriffe' = uzmanlık terimleri / mesleki terimler.",
        "en": "Compound plural: 'das Fach' + 'der Begriff' (plural: 'die Begriffe'). Means technical/specialist terms.",
        "ar": "جمع اسم مركب: يتكون من 'das Fach' + 'der Begriff' (جمعها 'die Begriffe' = مصطلحات متخصصة).",
        "uk": "Складний іменник у множині: 'das Fach' + 'der Begriff' (множина 'die Begriffe' = фахові терміни)."
    },
    "freundschaften": {
        "title": {
            "tr": "💡 İsim Çekimi: Çoğul Eki (die Freundschaft ➔ Freundschaften)",
            "en": "💡 Noun Declension: Plural Suffix (die Freundschaft ➔ Freundschaften)",
            "ar": "💡 تصريف الأسماء: لاحقة الجمع (die Freundschaft ➔ Freundschaften)",
            "uk": "💡 Творення множини (die Freundschaft ➔ Freundschaften)"
        },
        "tr": "Çoğul eki: '-schaft' ekiyle biten tüm isimler feminin ('die') artikeline sahiptir ve çoğulda sonlarına istisnasız '-en' takısı alır ('Freundschaften schließen' = dostluklar kurmak).",
        "en": "Plural formation: All nouns ending in '-schaft' are feminine ('die') and consistently form their plural with '-en' ('Freundschaften schließen').",
        "ar": "صيغة الجمع: جميع الأسماء المنتهية بـ '-schaft' مؤنثة وتجمع بلاحقة '-en' دائمًا ('Freundschaften schließen').",
        "uk": "Творення множини: всі іменники на '-schaft' жіночого роду і завжди утворюють множину на '-en' ('Freundschaften schließen')."
    },
    "helferinnen": {
        "title": {
            "tr": "💡 İsim Çekimi: Dişil Çoğul Eki (die Helferin ➔ Helferinnen)",
            "en": "💡 Noun Declension: Female Plural Suffix (die Helferin ➔ Helferinnen)",
            "ar": "💡 تصريف الأسماء: جمع المؤنث (die Helferin ➔ Helferinnen)",
            "uk": "💡 Творення множини жіночого роду (die Helferin ➔ Helferinnen)"
        },
        "tr": "Dişil isim çoğulu: Kadın meslek ve unvanlarını bildiren '-in' son ekli isimler çoğulda sonlarına '-nen' takısı alır ('die Helferin' -> 'die Helferinnen'; 'Helferinnen und Helfer' = kadın ve erkek yardımcılar).",
        "en": "Feminine plural formation: Nouns with female suffix '-in' double the 'n' and add '-en' in the plural (-nen): die Helferin -> die Helferinnen.",
        "ar": "جمع المؤنث: الأسماء المؤنثة المنتهية بـ '-in' تجمع بـ '-nen': die Helferin -> die Helferinnen.",
        "uk": "Творення множини жіночого роду: іменники на '-in' у множині мають закінчення '-nen': die Helferin -> die Helferinnen."
    },
    "kolleginnen": {
        "title": {
            "tr": "💡 İsim Çekimi: Dişil Çoğul Eki (die Kollegin ➔ Kolleginnen)",
            "en": "💡 Noun Declension: Female Plural Suffix (die Kollegin ➔ Kolleginnen)",
            "ar": "💡 تصريف الأسماء: جمع المؤنث (die Kollegin ➔ Kolleginnen)",
            "uk": "💡 Творення множини жіночого роду (die Kollegin ➔ Kolleginnen)"
        },
        "tr": "Dişil isim çoğulu: '-in' ile biten kadın unvanı çoğulda '-nen' alır ('die Kollegin' -> 'die Kolleginnen'; 'mit Kolleginnen und Kollegen').",
        "en": "Feminine plural formation: Nouns ending in '-in' add '-nen' in plural: die Kollegin -> die Kolleginnen.",
        "ar": "جمع المؤنث: الأسماء المنتهية بـ '-in' تجمع بـ '-nen': die Kollegin -> die Kolleginnen (الزميلات).",
        "uk": "Творення множини жіночого роду: іменники на '-in' утворюють множину на '-nen': die Kollegin -> die Kolleginnen."
    },
    "mitarbeiterinnen": {
        "title": {
            "tr": "💡 İsim Çekimi: Dişil Çoğul Eki (die Mitarbeiterin ➔ Mitarbeiterinnen)",
            "en": "💡 Noun Declension: Female Plural Suffix",
            "ar": "💡 تصريف الأسماء: جمع المؤنث (الموظفات)",
            "uk": "💡 Творення множини жіночого роду (співробітниці)"
        },
        "tr": "Dişil isim çoğulu: 'die Mitarbeiterin' çoğulunda sonuna '-nen' takısı alır ('Mitarbeiterinnen und Mitarbeiter' = kadın ve erkek çalışanlar).",
        "en": "Feminine plural formation: 'die Mitarbeiterin' adds '-nen' in plural: Mitarbeiterinnen und Mitarbeiter (female and male employees).",
        "ar": "جمع المؤنث: يجمع الاسم 'die Mitarbeiterin' بـ '-nen': Mitarbeiterinnen und Mitarbeiter.",
        "uk": "Творення множини: іменник 'die Mitarbeiterin' приймає закінчення '-nen': Mitarbeiterinnen und Mitarbeiter."
    },
    "herausforderungen": {
        "title": {
            "tr": "💡 İsim Çekimi: Çoğul Eki (die Herausforderung ➔ Herausforderungen)",
            "en": "💡 Noun Declension: Plural Suffix (Herausforderungen)",
            "ar": "💡 تصريف الأسماء: لاحقة الجمع (التحديات)",
            "uk": "💡 Творення множини: die Herausforderung ➔ Herausforderungen"
        },
        "tr": "Çoğul eki: '-ung' ekiyle biten tüm isimler feminin ('die') artikeline sahiptir ve çoğulda daima '-en' takısı alır ('vor personellen Herausforderungen stehen').",
        "en": "Plural formation: All nouns ending in '-ung' are feminine ('die') and consistently take '-en' in the plural ('vor Herausforderungen stehen').",
        "ar": "صيغة الجمع: جميع الأسماء المنتهية بـ '-ung' مؤنثة وتجمع بلاحقة '-en' دائمًا.",
        "uk": "Творення множини: всі іменники на '-ung' жіночого роду і завжди мають закінчення '-en' у множині."
    },
    "verpflichtungen": {
        "title": {
            "tr": "💡 İsim Çekimi: Çoğul Eki (die Verpflichtung ➔ Verpflichtungen)",
            "en": "💡 Noun Declension: Plural Suffix (Verpflichtungen)",
            "ar": "💡 تصريف الأسماء: لاحقة الجمع (الالتزامات)",
            "uk": "💡 Творення множини: die Verpflichtung ➔ Verpflichtungen"
        },
        "tr": "Çoğul eki: '-ung' ekiyle biten isim çoğulda '-en' takısı alır ('langfristige Verpflichtungen' = uzun vadeli sorumluluklar/yükümlülükler).",
        "en": "Plural formation: Nouns in '-ung' take plural ending '-en' ('langfristige Verpflichtungen' = long-term commitments).",
        "ar": "صيغة الجمع: تجمع الأسماء المنتهية بـ '-ung' بلاحقة '-en' (الالتزامات).",
        "uk": "Творення множини: іменники на '-ung' мають закінчення '-en' у множині (зобов'язання)."
    },
    "umfragen": {
        "title": {
            "tr": "💡 İsim Çekimi: Çoğul Eki (die Umfrage ➔ Umfragen)",
            "en": "💡 Noun Declension: Plural Suffix (Umfragen)",
            "ar": "💡 تصريف الأسماء: لاحقة الجمع (استطلاعات الرأي)",
            "uk": "💡 Творення множини: die Umfrage ➔ Umfragen"
        },
        "tr": "Çoğul eki: 'die Umfrage' (anket / kamuoyu yoklaması) sonu '-e' ile biten feminin bir isimdir; çoğulda sonuna '-n' takısı alır ('nach aktuellen Umfragen' = güncel anketlere göre).",
        "en": "Plural formation: Feminine noun 'die Umfrage' adds '-n' in plural ('nach aktuellen Umfragen' = according to recent surveys).",
        "ar": "صيغة الجمع: الاسم المؤنث 'die Umfrage' ينتهي بـ '-e' ويجمع بـ '-n' ('nach aktuellen Umfragen').",
        "uk": "Творення множини: іменник жіночого роду 'die Umfrage' у множині отримує закінчення '-n' ('nach aktuellen Umfragen')."
    },
    "monatsraten": {
        "title": {
            "tr": "💡 İsim Çekimi: Bileşik İsim Çoğulu (die Monatsraten)",
            "en": "💡 Noun Declension: Compound Plural (die Monatsraten)",
            "ar": "💡 تصريف الأسماء: جمع اسم مركب (الأقساط الشهرية)",
            "uk": "💡 Творення множини: Складний іменник (щомісячні внески)"
        },
        "tr": "Bileşik isim çoğulu: 'der Monat' + 'die Rate' (taksit/oran). Çoğulda son kelimeye göre '-n' alır: 'die Monatsraten' ('in drei gleichen Monatsraten' = üç eşit aylık taksitle).",
        "en": "Compound plural: 'der Monat' + 'die Rate' (plural: 'die Raten'). Takes '-n': 'in drei gleichen Monatsraten' (in three equal monthly installments).",
        "ar": "جمع اسم مركب: يتبع الكلمة الأخيرة 'die Rate' ويجمع بـ '-n' ('in drei Monatsraten').",
        "uk": "Множина складного іменника: утворюється за останнім словом 'die Rate' (множина 'die Raten')."
    },
    "nebenkostenvorauszahlungen": {
        "title": {
            "tr": "💡 İsim Çekimi: Bileşik İsim Çoğulu (-ung ➔ -ungen)",
            "en": "💡 Noun Declension: Compound Plural (-ung ➔ -ungen)",
            "ar": "💡 تصريف الأسماء: جمع اسم مركب (دفعات مسبقة للمصاريف الإضافية)",
            "uk": "💡 Творення множини: Складний іменник на -ung"
        },
        "tr": "Bileşik isim çoğulu: 'die Nebenkosten' (yan giderler) + 'die Vorauszahlung' (avans ödeme). '-ung' ile bittiği için çoğulda '-en' takısı alır (Nebenkostenvorauszahlungen = yan gider avans ödemeleri).",
        "en": "Compound plural: 'Nebenkosten' (utilities) + 'Vorauszahlung' (advance payment). Nouns ending in '-ung' take '-en' in the plural.",
        "ar": "جمع اسم مركب: ينتهي بـ '-ung' فيجمع بلاحقة '-en' (دفعات مسبقة لمصاريف السكن الإضافية).",
        "uk": "Множина складного іменника: закінчується на '-ung', тому у множині приймає '-en' (авансові платежі за комунальні послуги)."
    },
    "nettokaltmieten": {
        "title": {
            "tr": "💡 İsim Çekimi: Bileşik İsim Çoğulu (die Nettokaltmieten)",
            "en": "💡 Noun Declension: Compound Plural (die Nettokaltmieten)",
            "ar": "💡 تصريف الأسماء: جمع اسم مركب (صافي الإيجارات الأساسية)",
            "uk": "💡 Творення множини: Складний іменник (чисті базові орендні плати)"
        },
        "tr": "Bileşik isim çoğulu: 'netto' + 'kalt' + 'die Miete' (kira). Çoğulda '-n' takısı alır ('höchstens drei Nettokaltmieten' = en fazla üç net soğuk kira bedeli).",
        "en": "Compound plural: 'netto' + 'kalt' + 'die Miete'. Takes '-n' in plural: 'drei Nettokaltmieten' (three net cold rents).",
        "ar": "جمع اسم مركب: يتبع 'die Miete' ويجمع بـ '-n' ('drei Nettokaltmieten').",
        "uk": "Множина складного іменника: визначається за 'die Miete' (множина 'die Mieten'): 'drei Nettokaltmieten'."
    },
    "projekte": {
        "title": {
            "tr": "💡 İsim Çekimi: Çoğul Eki (das Projekt ➔ die Projekte)",
            "en": "💡 Noun Declension: Plural Suffix (das Projekt ➔ die Projekte)",
            "ar": "💡 تصريف الأسماء: صيغة الجمع (المشاريع)",
            "uk": "💡 Творення множини: das Projekt ➔ die Projekte"
        },
        "tr": "Çoğul eki: 'das Projekt' nötr bir isimdir ve çoğulda sonuna '-e' takısı alır (die Projekte; 'flexible Projekte' = esnek projeler).",
        "en": "Plural formation: 'das Projekt' is neuter and takes '-e' in plural: die Projekte (flexible projects).",
        "ar": "صيغة الجمع: الاسم 'das Projekt' محايد ويجمع بـ '-e' (المشاريع).",
        "uk": "Творення множини: 'das Projekt' середнього роду утворює множину на '-e' (die Projekte)."
    },
    "kontakte": {
        "title": {
            "tr": "💡 İsim Çekimi: Çoğul Eki (der Kontakt ➔ die Kontakte)",
            "en": "💡 Noun Declension: Plural Suffix (der Kontakt ➔ die Kontakte)",
            "ar": "💡 تصريف الأسماء: صيغة الجمع (جهات الاتصال والمعارف)",
            "uk": "💡 Творення множини: der Kontakt ➔ die Kontakte"
        },
        "tr": "Çoğul eki: 'der Kontakt' maskulin bir isimdir; çoğulda sonuna '-e' takısı alır ('neue Kontakte knüpfen' = yeni bağlantılar / dostluklar kurmak).",
        "en": "Plural formation: 'der Kontakt' is masculine and forms its plural with '-e' ('neue Kontakte knüpfen' = to make new contacts/connections).",
        "ar": "صيغة الجمع: يجمع الاسم المذكر 'der Kontakt' بـ '-e' ('Kontakte knüpfen' = ينسج علاقات ومعارف جديدة).",
        "uk": "Творення множини: іменник чоловічого роду 'der Kontakt' має закінчення '-e' у множині ('neue Kontakte knüpfen' = зав'язувати нові контакти)."
    },
    "sportvereine": {
        "title": {
            "tr": "💡 İsim Çekimi: Bileşik İsim Çoğulu (die Sportvereine)",
            "en": "💡 Noun Declension: Compound Plural (die Sportvereine)",
            "ar": "💡 تصريف الأسماء: جمع اسم مركب (الأندية الرياضية)",
            "uk": "💡 Творення множини: Складний іменник (спортивні клуби)"
        },
        "tr": "Bileşik isim çoğulu: 'der Sport' + 'der Verein' (çoğulu: 'die Vereine'). Sondaki temel kelimeye göre çoğulda '-e' takısı alır: 'Sportvereine sind besonders beliebt'.",
        "en": "Compound plural: 'der Sport' + 'der Verein' (plural: 'die Vereine'). Follows base noun: 'Sportvereine sind besonders beliebt'.",
        "ar": "جمع اسم مركب: يتبع الكلمة الأخيرة 'der Verein' ويجمع بـ '-e' (die Sportvereine = الأندية الرياضية).",
        "uk": "Множина складного іменника: за останнім словом 'der Verein' (множина 'die Vereine'): 'Sportvereine sind beliebt'."
    },
    "traineraufgaben": {
        "title": {
            "tr": "💡 İsim Çekimi: Bileşik İsim Çoğulu (die Traineraufgaben)",
            "en": "💡 Noun Declension: Compound Plural (die Traineraufgaben)",
            "ar": "💡 تصريف الأسماء: جمع اسم مركب (مهام التدريب)",
            "uk": "💡 Творення множини: Складний іменник (тренерські завдання)"
        },
        "tr": "Bileşik isim çoğulu: 'der Trainer' (antrenör) + 'die Aufgabe' (görev). 'die Aufgabe' sonu '-e' ile biten bir isim olduğundan çoğulda '-n' takısı alır ('Traineraufgaben übernehmen' = antrenörlük görevleri üstlenmek).",
        "en": "Compound plural: 'der Trainer' + 'die Aufgabe' (plural: 'die Aufgaben'). Plural ending '-n': 'Traineraufgaben übernehmen' (to take on coaching duties).",
        "ar": "جمع اسم مركب: 'der Trainer' + 'die Aufgabe' (جمعها 'die Aufgaben' بـ '-n'): 'Traineraufgaben übernehmen'.",
        "uk": "Множина складного іменника: 'der Trainer' + 'die Aufgabe' (множина на '-n' — 'die Aufgaben'): 'Traineraufgaben übernehmen'."
    },
    "risiken": {
        "title": {
            "tr": "💡 İsim Çekimi: Yabancı Kökenli Düzensiz Çoğul (das Risiko ➔ Risiken)",
            "en": "💡 Noun Declension: Foreign Irregular Plural (das Risiko ➔ Risiken)",
            "ar": "💡 تصريف الأسماء: جمع شاذ لاسم دخيل (das Risiko ➔ Risiken)",
            "uk": "💡 Творення множини: Неправильна множина (das Risiko ➔ Risiken)"
        },
        "tr": "Düzensiz çoğul: 'das Risiko' (risk) İtalyanca/Latince kökenli nötr bir isimdir. Çoğul yapılırken sonundaki '-o' düşer ve '-en' eki gelir: die Risiken ('birgt auch Risiken' = riskler de barındırır).",
        "en": "Irregular foreign plural: 'das Risiko' (risk) drops the terminal '-o' and takes the plural suffix '-en': die Risiken ('birgt auch Risiken').",
        "ar": "جمع شاذ لاسم دخيل: يحذف حرف '-o' من 'das Risiko' ويضاف '-en' في الجمع: die Risiken (مخاطر).",
        "uk": "Неправильна іншомовна множина: іменник 'das Risiko' втрачає кінцеве '-o' та приймає закінчення '-en': die Risiken (ризики)."
    },
    "millionen": {
        "title": {
            "tr": "💡 İsim Çekimi: Çoğul Eki (die Million ➔ Millionen)",
            "en": "💡 Noun Declension: Plural Suffix (Millionen)",
            "ar": "💡 تصريف الأسماء: صيغة الجمع (الملايين)",
            "uk": "💡 Творення множини: die Million ➔ Millionen"
        },
        "tr": "Çoğul eki: 'die Million' feminin bir isimdir; birden fazla milyon söz konusu olduğunda çoğul '-en' takısı alır ('mehr als 28 Millionen Menschen' = 28 milyondan fazla insan).",
        "en": "Plural formation: 'die Million' is feminine; takes '-en' in the plural for amounts greater than one ('mehr als 28 Millionen Menschen').",
        "ar": "صيغة الجمع: الاسم 'die Million' مؤنث ويجمع بـ '-en': 'mehr als 28 Millionen Menschen' (أكثر من 28 مليون إنسان).",
        "uk": "Творення множини: 'die Million' жіночого роду, у множині має закінчення '-en' ('mehr als 28 Millionen')."
    },
    "minuten": {
        "title": {
            "tr": "💡 İsim Çekimi: Çoğul Eki (die Minute ➔ Minuten)",
            "en": "💡 Noun Declension: Plural Suffix (Minuten)",
            "ar": "💡 تصريف الأسماء: صيغة الجمع (الدقائق)",
            "uk": "💡 Творення множини: die Minute ➔ Minuten"
        },
        "tr": "Çoğul eki: 'die Minute' feminin bir isimdir; çoğulda sonuna '-n' takısı alır ('mindestens 30 Minuten Pause' = en az 30 dakika mola).",
        "en": "Plural formation: 'die Minute' is feminine and adds '-n' in plural ('mindestens 30 Minuten Pause' = at least 30 minutes break).",
        "ar": "صيغة الجمع: يجمع الاسم المؤنث 'die Minute' بإضافة '-n': 'mindestens 30 Minuten Pause'.",
        "uk": "Творення множини: іменник жіночого роду 'die Minute' у множині приймає '-n' ('mindestens 30 Minuten Pause')."
    },
    "sonn": {
        "title": {
            "tr": "💡 Yazım Kuralı: Kısa Çizgili Kelime Tasarrufu (Sonn- und Feiertage)",
            "en": "💡 Orthography: Hyphenated Suffix-Sharing (Sonn- und Feiertage)",
            "ar": "💡 قاعدة إملائية: اختصار اللاحقة المشتركة بالوصلة (Sonn- und Feiertage)",
            "uk": "💡 Правопис: Скорочення спільної частини через дефіс"
        },
        "tr": "Kısa çizgili kelime tasarrufu (Ergänzungsstrich): 'an Sonn- und Feiertagen' ifadesinde 'Sonn-' kelimesi 'Sonntagen' (Pazar günleri) kelimesinin kısaltılmış halidir; ortak kök olan '-tage' tekrar edilmemiştir.",
        "en": "Suspended hyphenation (Ergänzungsstrich): In 'an Sonn- und Feiertagen', 'Sonn-' stands for 'Sonntagen' (Sundays), avoiding repetition of the shared base word '-tagen'.",
        "ar": "الوصلة المعلقة للاختصار: في 'an Sonn- und Feiertagen'، تشير 'Sonn-' إلى 'Sonntagen' (أيام الأحد) تفاديًا لتكرار الكلمة المشتركة '-tage'.",
        "uk": "Дефіс для уникнення повторення спільної частини: у 'an Sonn- und Feiertagen' слово 'Sonn-' замінює 'Sonntagen' (недільні дні)."
    },
    "zeitungs": {
        "title": {
            "tr": "💡 Yazım Kuralı: Bileşik Kelime Tasarrufu (Zeitungs- oder Onlineanzeige)",
            "en": "💡 Orthography: Suspended Hyphenation (Zeitungs- oder Onlineanzeige)",
            "ar": "💡 قاعدة إملائية: الوصلة المشتركة للاسم المركب",
            "uk": "💡 Правопис: Скорочення спільного кореня через дефіс"
        },
        "tr": "Kısa çizgili tamlama tasarrufu: 'Zeitungs- oder Onlineanzeige' yapısında 'Zeitungs-' kelimesi 'Zeitungsanzeige' (gazete ilanı) tamlamasını ifade eder; ortak olan '-anzeige' kelimesi ikinci kısımda bir kez yazılmıştır.",
        "en": "Suspended hyphenation: In 'Zeitungs- oder Onlineanzeige', 'Zeitungs-' stands for 'Zeitungsanzeige' (newspaper ad), sharing the base noun '-anzeige'.",
        "ar": "وصلة الاختصار للأسماء المركبة: 'Zeitungs-' تدل على 'Zeitungsanzeige' (إعلان الجريدة)، مع كتابة الكلمة المشتركة '-anzeige' في النهاية فقط.",
        "uk": "Дефіс для складноскладних слів: 'Zeitungs-' замінює 'Zeitungsanzeige' (газетне оголошення) зі спільним словом '-anzeige'."
    },
    "e": {
        "title": {
            "tr": "💡 Kısaltma: E-Mail (Elektronische Post)",
            "en": "💡 Abbreviation: E-Mail (Electronic Mail)",
            "ar": "💡 اختصار: E-Mail (البريد الإلكتروني)",
            "uk": "💡 Скорочення: E-Mail (Електронна пошта)"
        },
        "tr": "Kısaltma bileşeni: 'E-Mail' (elektronik posta) kelimesindeki 'E-' harfi 'elektronisch' kelimesini temsil eder. 'dienstliche E-Mails' = işle ilgili e-postalar.",
        "en": "Abbreviation component: In 'E-Mail', 'E-' stands for 'electronic'. 'dienstliche E-Mails' = official/business emails.",
        "ar": "مكون اختصار: يمثل الحرف 'E-' كلمة 'elektronisch' (إلكتروني) في 'E-Mail'.",
        "uk": "Компонент скорочення: літера 'E-' означає 'elektronisch' (електронний) у слові 'E-Mail'."
    }
}
