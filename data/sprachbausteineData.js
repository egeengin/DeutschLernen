/**
 * DeutschLernen - telc Deutsch B1 Sprachbausteine (Language Elements) Dataset
 * Authentic telc B1 Examination Format:
 * - Teil 1: 10 gaps (21-30) in a letter/email, 3 multiple-choice options each (a, b, c)
 *          Focus: Prepositions with Dativ/Akkusativ, adjective declensions, subordinating
 *          conjunctions (weil, dass, wenn, obwohl), relative pronouns, reflexives, modal verbs.
 * - Teil 2: 10 gaps (31-40) in an informational text/announcement, selected from a 15-word bank (a - o)
 *          Focus: Connectors (deshalb, trotzdem, außerdem), fixed prepositions, adverbs, idioms.
 *
 * Full Quad-Lingual Parity: German (DE), English (EN), Turkish (TR), Arabic (AR), Ukrainian (UK).
 */

(function() {
  'use strict';

  window.SPRACHBAUSTEINE_DATASET = [
    // ==========================================
    // SET 1: VHS Anmeldebrief & Stadtbibliothek
    // ==========================================
    {
      id: "sb-set-1",
      title: {
        de: "Übungstest 1: Sprachbausteine (Teil 1 & Teil 2)",
        en: "Practice Test 1: Language Elements (Part 1 & Part 2)",
        tr: "Deneme Sınavı 1: Dil Öğeleri / Dilbilgisi Boşluk Doldurma",
        ar: "الاختبار التدريبي 1: تراكيب اللغة (الجزء 1 والجزء 2)",
        uk: "Тренувальний тест 1: Мовні елементи (Частина 1 та 2)"
      },
      timeEstimateMin: 20,
      badge: "telc B1 30 Punkte",

      // TEIL 1: Brief an eine Volkshochschule (10 Lücken, a/b/c)
      teil1: {
        id: "sb-1-teil1",
        title: {
          de: "Teil 1: E-Mail an die Volkshochschule",
          en: "Part 1: Email to Adult Education Center",
          tr: "Bölüm 1: Halk Eğitim Merkezine E-Posta",
          ar: "الجزء 1: رسالة بريد إلكتروني إلى مركز تعليم الكبار",
          uk: "Частина 1: Електронний лист до народної школи"
        },
        instruction: {
          de: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke (21–30) passt.",
          en: "Read the following text and decide which word (a, b or c) fits into each gap (21–30).",
          tr: "Aşağıdaki metni okuyunuz ve her boşluğa (21-30) hangi kelimenin (a, b veya c) uygun geldiğine karar veriniz.",
          ar: "اقرأ النص التالي وحدد الكلمة (a أو b أو c) المناسبة لكل فراغ (21-30).",
          uk: "Прочитайте наступний текст і визначте, яке слово (a, b або c) підходить для кожного пропуску (21–30)."
        },
        context: "Anmeldung zu einem Wochenend-Fotokurs und Bitte um Ratenzahlung",
        textTemplate: "Sehr geehrte Damen und Herren,\n\nich schreibe Ihnen, {21} ich mich sehr für Ihren Wochenendkurs „Digitale Fotografie für Einsteiger“ interessiere. Ein Kollege von mir hat letztes Jahr {22} diesem Kurs teilgenommen und war begeistert.\n\nIch fotografiere schon {23} zwei Jahren mit einer einfachen Kamera, möchte aber nun lernen, wie man professionelle Porträts {24}. Leider habe ich auf Ihrer Webseite keine Informationen darüber gefunden, {25} man eine eigene Kamera mitbringen muss oder ob die Ausrüstung gestellt wird.\n\nDa ich mich derzeit in {26} Ausbildung befinde, ist mein monatliches Budget begrenzt. Gibt es für Auszubildende eine Ermäßigung {27} die Kursgebühr? Außerdem wäre es für mich sehr hilfreich, wenn ich den Betrag in zwei Raten zahlen {28}.\n\nÜber eine baldige Antwort {29} ich mich sehr freuen.\n\nMit {30} Grüßen\nJulian Weber",
        items: [
          {
            id: 21,
            label: "Lücke 21",
            correct: "b",
            options: [
              { key: "a", text: "denn" },
              { key: "b", text: "weil" },
              { key: "c", text: "deshalb" }
            ],
            rule: {
              de: "Nebensatz mit Subjunktion 'weil': Das konjugierte Verb ('interessiere') steht am Satzende. 'denn' verlangt Hauptsatz-Wortstellung (Position 0).",
              en: "Subordinate clause with 'weil': The conjugated verb ('interessiere') moves to the end of the clause. 'denn' keeps main clause V2 order.",
              tr: "'weil' bağlacı yan cümle kurar ve çekimli fiili ('interessiere') cümlenin en sonuna atar. 'denn' bağlacında ise fiil özneden hemen sonra (Pozisyon 2) gelir.",
              ar: "جملة فرعية مع 'weil': ينتقل الفعل المصرف ('interessiere') إلى نهاية الجملة. بينما 'denn' تحافظ على ترتيب الجملة الرئيسية.",
              uk: "Підрядне речення зі сполучником 'weil': дієслово ('interessiere') стоїть у кінці. Після 'denn' дієслово залишається на 2-й позиції."
            }
          },
          {
            id: 22,
            label: "Lücke 22",
            correct: "a",
            options: [
              { key: "a", text: "an" },
              { key: "b", text: "in" },
              { key: "c", text: "zu" }
            ],
            rule: {
              de: "Feste Verb-Präposition-Verbindung: 'teilnehmen an' + Dativ ('an diesem Kurs').",
              en: "Fixed verb-preposition combination: 'teilnehmen an' + Dative ('an diesem Kurs').",
              tr: "Sabit fiil-edat tamlaması: 'teilnehmen an' + Dativ ('an diesem Kurs' - bu kursa katılmak).",
              ar: "ارتباط فعلي ثابت بحرف جر: 'teilnehmen an' + حالة المجرور Dativ.",
              uk: "Стале сполучення дієслова з прийменником: 'teilnehmen an' + Dativ."
            }
          },
          {
            id: 23,
            label: "Lücke 23",
            correct: "c",
            options: [
              { key: "a", text: "vor" },
              { key: "b", text: "für" },
              { key: "c", text: "seit" }
            ],
            rule: {
              de: "'seit' drückt einen Vorgang aus, der in der Vergangenheit begonnen hat und bis heute andauert ('fotografiere schon seit zwei Jahren'). 'vor' verlangt Präteritum/Perfekt.",
              en: "'seit' indicates an action started in the past and still ongoing ('fotografiere schon seit zwei Jahren'). 'vor' refers to a completed past event.",
              tr: "'seit' geçmişte başlayıp hala devam eden eylemler için '-den beri' anlamında kullanılır. 'vor' ise tamamlanmış geçmiş zaman belirtir.",
              ar: "'seit' تشير إلى حدث بدأ في الماضي وما زال مستمراً حتى الآن. بينما 'vor' تدل على حدث منتهٍ في الماضي.",
              uk: "'seit' позначає дію, що почалася в минулому і триває досі. 'vor' вказує на завершену дію в минулому."
            }
          },
          {
            id: 24,
            label: "Lücke 24",
            correct: "a",
            options: [
              { key: "a", text: "macht" },
              { key: "b", text: "machen" },
              { key: "c", text: "gemacht" }
            ],
            rule: {
              de: "Indirekter Fragesatz mit dem Indefinitpronomen 'man': 'man' verlangt 3. Person Singular ('man macht').",
              en: "Indirect question with impersonal pronoun 'man': 'man' takes 3rd person singular ('man macht').",
              tr: "Belgisiz zamir 'man' tekil üçüncü şahıs (er/sie/es gibi) fiil çekimi gerektirir: 'man macht'.",
              ar: "الضمير المبني للمجهول 'man' يتطلب تصريف الفعل في صيغة المفرد الغائب: 'man macht'.",
              uk: "Неозначено-особовий займенник 'man' вимагає форми 3-ї особи однини ('man macht')."
            }
          },
          {
            id: 25,
            label: "Lücke 25",
            correct: "b",
            options: [
              { key: "a", text: "dass" },
              { key: "b", text: "ob" },
              { key: "c", text: "wann" }
            ],
            rule: {
              de: "Indirekte Ja/Nein-Frage mit 'ob' (in Verbindung mit der Alternative 'oder'): '...ob man eine eigene Kamera mitbringen muss oder...'.",
              en: "Indirect yes/no question with 'ob' (paired with alternative 'oder'): '...ob man eine eigene Kamera mitbringen muss oder...'.",
              tr: "Alternatifli (veya / ya da) dolaylı soru cümlesinde '-ıp / -mediğini' bildirmek için 'ob ... oder' kullanılır.",
              ar: "سؤال غير مباشر بنعم/لا باستخدام 'ob' المتوافقة مع 'oder' (سواء كان يجب إحضار كاميرا أم لا).",
              uk: "Непряме запитання з 'ob' у поєднанні з 'oder' (чи потрібно брати власну камеру або...)."
            }
          },
          {
            id: 26,
            label: "Lücke 26",
            correct: "c",
            options: [
              { key: "a", text: "einem" },
              { key: "b", text: "eine" },
              { key: "c", text: "einer" }
            ],
            rule: {
              de: "'sich befinden in' + Dativ: 'die Ausbildung' (feminin) wird im Dativ zu 'in einer Ausbildung'.",
              en: "'sich befinden in' + Dative: 'die Ausbildung' (feminine) becomes 'in einer Ausbildung' in Dative.",
              tr: "'sich befinden in' nerede bulunulduğunu Dativ ile bildirir: 'die Ausbildung' dişil olduğu için 'in einer Ausbildung' olur.",
              ar: "'sich befinden in' تأخذ Dativ: الاسم المؤنث 'die Ausbildung' يتحول في حالة الجر إلى 'in einer Ausbildung'.",
              uk: "'sich befinden in' вимагає Dativ: іменник жіночого роду 'die Ausbildung' стає 'in einer Ausbildung'."
            }
          },
          {
            id: 27,
            label: "Lücke 27",
            correct: "b",
            options: [
              { key: "a", text: "an" },
              { key: "b", text: "auf" },
              { key: "c", text: "für" }
            ],
            rule: {
              de: "Nomen-Präposition-Verbindung: 'die Ermäßigung auf' + Akkusativ ('eine Ermäßigung auf die Kursgebühr').",
              en: "Noun-preposition collocation: 'die Ermäßigung auf' + Accusative ('Ermäßigung auf die Kursgebühr').",
              tr: "İsim-edat kalıbı: 'die Ermäßigung auf' + Akkusativ (kurs ücreti üzerinden indirim).",
              ar: "تركيب اسم مع حرف جر: 'die Ermäßigung auf' + Akkusativ (تخفيض على رسوم الدورة).",
              uk: "Стале сполучення іменника з прийменником: 'die Ermäßigung auf' + Akkusativ."
            }
          },
          {
            id: 28,
            label: "Lücke 28",
            correct: "c",
            options: [
              { key: "a", text: "kann" },
              { key: "b", text: "konnte" },
              { key: "c", text: "könnte" }
            ],
            rule: {
              de: "Höfliche Bitte / Wunsch im Konjunktiv II: '...wenn ich den Betrag in zwei Raten zahlen könnte'.",
              en: "Polite request / hypothetical condition in Konjunktiv II: '...wenn ich den Betrag ... zahlen könnte'.",
              tr: "Kibar rica ve varsayım için Konjunktiv II kullanılır: 'ödeyebilseydim / ödeyebilirsem' -> 'zahlen könnte'.",
              ar: "صيغة الطلب المهذب والافتراض في Konjunktiv II: 'zahlen könnte'.",
              uk: "Ввічливе прохання / умова в Konjunktiv II: 'zahlen könnte'."
            }
          },
          {
            id: 29,
            label: "Lücke 29",
            correct: "a",
            options: [
              { key: "a", text: "würde" },
              { key: "b", text: "werde" },
              { key: "c", text: "wäre" }
            ],
            rule: {
              de: "Konjunktiv II Umschreibung mit 'würde': 'Über eine baldige Antwort würde ich mich sehr freuen.'",
              en: "Konjunktiv II polite formula with 'würde': 'Über eine baldige Antwort würde ich mich sehr freuen.'",
              tr: "Almanca mektup/e-posta bitirişinde kibar sevinç ifadesi (Konjunktiv II): 'würde ich mich sehr freuen'.",
              ar: "صيغة ختامية مهذبة في Konjunktiv II: 'würde ich mich sehr freuen'.",
              uk: "Ввічлива формула закриття листа в Konjunktiv II: 'würde ich mich sehr freuen'."
            }
          },
          {
            id: 30,
            label: "Lücke 30",
            correct: "b",
            options: [
              { key: "a", text: "freundliche" },
              { key: "b", text: "freundlichen" },
              { key: "c", text: "freundlicher" }
            ],
            rule: {
              de: "Adjektivdeklination nach Präposition 'mit' (Dativ Plural): 'mit freundlichen Grüßen' (Endung -en).",
              en: "Adjective declension after preposition 'mit' (Dative Plural): 'mit freundlichen Grüßen' (ending -en).",
              tr: "'mit' edatı Dativ gerektirir; çoğul isim 'Grüße' Dativ'de -n alır, sıfat tamlaması da 'freundlichen' olur.",
              ar: "إعراب الصفة بعد حرف الجر 'mit' (جمع مجرور Dativ Plural): 'mit freundlichen Grüßen' (لاحقة -en).",
              uk: "Відмінювання прикметника після прийменника 'mit' (Dativ plural): 'mit freundlichen Grüßen' (закінчення -en)."
            }
          }
        ]
      },

      // TEIL 2: Informationstext / Aushang (10 Lücken, Wortbank a - o)
      teil2: {
        id: "sb-1-teil2",
        title: {
          de: "Teil 2: Neueröffnete Stadtteilbibliothek",
          en: "Part 2: Newly Opened Neighborhood Library",
          tr: "Bölüm 2: Yeni Açılan İlçe Kütüphanesi Bilgilendirme Metni",
          ar: "الجزء 2: مكتبة الحي المفتتحة حديثاً",
          uk: "Частина 2: Нововідкрита районна бібліотека"
        },
        instruction: {
          de: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus dem Kasten (a–o) in die jeweilige Lücke (31–40) passt. Jedes Wort darf nur einmal verwendet werden.",
          en: "Read the following text and decide which word from the box (a–o) fits into each gap (31–40). Each word may only be used once.",
          tr: "Aşağıdaki metni okuyunuz ve kelime kutusundaki (a-o) hangi kelimenin her boşluğa (31-40) uyduğuna karar veriniz. Her kelime yalnızca bir kez kullanılabilir.",
          ar: "اقرأ النص التالي وحدد الكلمة من الصندوق (a-o) المناسبة لكل فراغ (31-40). يمكن استخدام كل كلمة مرة واحدة فقط.",
          uk: "Прочитайте наступний текст і визначте, яке слово з рамки (a–o) підходить для кожного пропуску (31–40). Кожне слово можна використати лише один раз."
        },
        wordBank: [
          { key: "a", word: "AUCH" },
          { key: "b", word: "BEI" },
          { key: "c", word: "DABEI" },
          { key: "d", word: "DAMIT" },
          { key: "e", word: "WEIL" },
          { key: "f", word: "DESHALB" },
          { key: "g", word: "DURCH" },
          { key: "h", word: "FÜR" },
          { key: "i", word: "IN" },
          { key: "j", word: "NICHT" },
          { key: "k", word: "ODER" },
          { key: "l", word: "OHNE" },
          { key: "m", word: "SEHR" },
          { key: "n", word: "WÄHREND" },
          { key: "o", word: "VON" }
        ],
        textTemplate: "Die Stadtbibliothek West hat nach mehrmonatigen Umbauarbeiten ihre Türen wieder geöffnet. Für die Bürgerinnen und Bürger bietet das renovierte Gebäude {31} nur moderne Leseplätze, sondern auch kostenloses Highspeed-WLAN im gesamten Haus.\n\nBesucher können sich {32} der Information im Erdgeschoss einen neuen Leseausweis ausstellen lassen. Dieser Ausweis ist {33} Kinder und Jugendliche bis zum 18. Lebensjahr völlig kostenlos. Erwachsene zahlen eine geringe Jahresgebühr von 15 Euro.\n\n{34} der Öffnungszeiten steht den Gästen außerdem ein gemütliches Lesecafé zur Verfügung. Wer Ruhe zum Lernen sucht, sollte {35} die Arbeitsräume im zweiten Stock nutzen, da es dort besonders leise ist.\n\nBücher und digitale Medien können rund um die Uhr zurückgegeben werden, {36} am Haupteingang ein neuer Rückgabeautomat installiert wurde. Sie können Medien also auch {37} reguläre Öffnungszeiten abgeben, zum Beispiel am späten Abend {38} an Sonntagen.\n\n{39} Fragen zur Online-Leihe und zu E-Books helfen Ihnen unsere Mitarbeiter gerne weiter. Kommen Sie vorbei und überzeugen Sie sich selbst {40} unserem vielfältigen Kulturangebot!",
        items: [
          {
            id: 31,
            label: "Lücke 31",
            correct: "j",
            correctWord: "NICHT",
            rule: {
              de: "Zweiteilige Konjunktion 'nicht nur ..., sondern auch': 'bietet ... nicht nur moderne Leseplätze, sondern auch...'.",
              en: "Correlative connector 'nicht nur ..., sondern auch' (not only..., but also...).",
              tr: "İkili bağlaç: 'nicht nur ..., sondern auch' (sadece ... değil, aynı zamanda...).",
              ar: "رابط مزدوج: 'nicht nur ..., sondern auch' (ليس فقط ... بل أيضاً).",
              uk: "Парний сполучник: 'nicht nur ..., sondern auch' (не лише..., але й...)."
            }
          },
          {
            id: 32,
            label: "Lücke 32",
            correct: "i",
            correctWord: "IN",
            rule: {
              de: "Lokale Angabe mit 'in': 'in der Information' / Anlaufstelle im Erdgeschoss.",
              en: "Locational preposition 'in' + Dative: 'in der Information' (at the reception info area).",
              tr: "Yer belirten 'in' + Dativ: zemin kattaki danışma bölümünde.",
              ar: "حرف الجر 'in' مع Dativ لتحديد المكان: 'in der Information'.",
              uk: "Прийменник місця 'in' + Dativ: 'in der Information'."
            }
          },
          {
            id: 33,
            label: "Lücke 33",
            correct: "h",
            correctWord: "FÜR",
            rule: {
              de: "Präposition 'für' + Akkusativ: 'kostenlos für Kinder und Jugendliche'.",
              en: "Preposition 'für' + Accusative: indicates beneficiary ('free for children and teenagers').",
              tr: "Yararlanıcı belirten edat 'für' + Akkusativ: 'çocuklar ve gençler için ücretsiz'.",
              ar: "حرف الجر 'für' مع حالة النصب Akkusativ: 'für Kinder' (مجاناً للأطفال).",
              uk: "Прийменник 'für' + Akkusativ: 'für Kinder' (безкоштовно для дітей)."
            }
          },
          {
            id: 34,
            label: "Lücke 34",
            correct: "n",
            correctWord: "WÄHREND",
            rule: {
              de: "Präposition 'während' + Genitiv: zeitliche Dauer ('Während der Öffnungszeiten').",
              en: "Preposition 'während' + Genitive: temporal duration ('During opening hours').",
              tr: "Zaman belirten edat 'während' + Genitiv: 'açılış saatleri boyunca / esnasında'.",
              ar: "حرف الجر 'während' مع Genitiv: 'Während der Öffnungszeiten' (خلال أوقات العمل).",
              uk: "Прийменник 'während' + Genitiv: 'Während der Öffnungszeiten' (під час годин роботи)."
            }
          },
          {
            id: 35,
            label: "Lücke 35",
            correct: "f",
            correctWord: "DESHALB",
            rule: {
              de: "Kausales Adverb 'deshalb': drückt eine logische Folge aus ('sollte deshalb die Arbeitsräume ... nutzen').",
              en: "Causal adverb 'deshalb' expresses a logical consequence ('should therefore use the study rooms').",
              tr: "Sebep-sonuç bağlayıcı zarfı 'deshalb' (bu yüzden, bu nedenle): 'Bu yüzden çalışma odalarını kullanmalıdır'.",
              ar: "ظرف سببي 'deshalb' يعبر عن نتيجة منطقية (لذلك يجب استخدام غرف الدراسة).",
              uk: "Прислівник причини 'deshalb' виражає наслідок ('тому слід користуватися навчальними кімнатами')."
            }
          },
          {
            id: 36,
            label: "Lücke 36",
            correct: "e",
            correctWord: "WEIL",
            rule: {
              de: "Kausale Subjunktion 'weil': Nebensatz mit Verb am Ende ('installiert wurde').",
              en: "Causal subjunction 'weil' puts the conjugated verb at the clause end ('installiert wurde').",
              tr: "Gerekçe bağlacı 'weil' (çünkü/-dığı için): Fiili ('installiert wurde') sona atar.",
              ar: "أداة ربط سببية 'weil' مع نقل الفعل المصرف إلى نهاية الجملة.",
              uk: "Підрядний сполучник причини 'weil': дієслово стоїть наприкінці."
            }
          },
          {
            id: 37,
            label: "Lücke 37",
            correct: "l",
            correctWord: "OHNE",
            rule: {
              de: "Präposition 'ohne' + Akkusativ: Ausschluss ('auch ohne reguläre Öffnungszeiten abgeben').",
              en: "Preposition 'ohne' + Accusative indicates exclusion ('without/outside regular opening hours').",
              tr: "Hariç tutma edatı 'ohne' + Akkusativ ('normal açılış saatleri dışında/olmadan da').",
              ar: "حرف الجر 'ohne' مع النصب: 'ohne reguläre Öffnungszeiten' (بدون التقيد بأوقات الفتح).",
              uk: "Прийменник 'ohne' + Akkusativ: 'ohne reguläre Öffnungszeiten' (без прив'язки до робочих годин)."
            }
          },
          {
            id: 38,
            label: "Lücke 38",
            correct: "k",
            correctWord: "ODER",
            rule: {
              de: "Disjunktive Konjunktion 'oder': Alternative zwischen zwei Zeitpunkten ('am späten Abend oder an Sonntagen').",
              en: "Disjunctive conjunction 'oder': offers an alternative between time periods ('late evening or on Sundays').",
              tr: "Seçenek bildiren bağlaç 'oder' (veya / ya da): 'akşam geç saatlerde ya da pazar günleri'.",
              ar: "حرف عطف للاختيار 'oder' (أو): 'في المساء المتأخر أو في أيام الأحد'.",
              uk: "Розділовий сполучник 'oder' (або): 'пізно ввечері або у неділю'."
            }
          },
          {
            id: 39,
            label: "Lücke 39",
            correct: "b",
            correctWord: "BEI",
            rule: {
              de: "Konditionale/Temporale Präposition 'bei' + Dativ: 'Bei Fragen' (wenn Sie Fragen haben).",
              en: "Preposition 'bei' + Dative in conditional sense: 'Bei Fragen' means 'In case of questions'.",
              tr: "'Bei Fragen' (Sorularınız olduğunda / durumunda) kalıbı 'bei + Dativ' gerektirir.",
              ar: "حرف الجر 'bei' مع Dativ في سياق شرطي: 'Bei Fragen' (في حال وجود أسئلة).",
              uk: "Прийменник 'bei' + Dativ: 'Bei Fragen' (у разі виникнення запитань)."
            }
          },
          {
            id: 40,
            label: "Lücke 40",
            correct: "o",
            correctWord: "VON",
            rule: {
              de: "Feste Verbindung: 'sich überzeugen von' + Dativ ('überzeugen Sie sich von unserem Angebot').",
              en: "Fixed idiom 'sich überzeugen von' + Dative: 'convince yourself of our offer'.",
              tr: "Kalıp ifade: 'sich überzeugen von' + Dativ (kendi gözleriyle görmek / ikna olmak).",
              ar: "تركيب اصطلاحي ثابت: 'sich überzeugen von' + Dativ (اكتشف بنفسك وتأكد من عروضنا).",
              uk: "Сталий зворот: 'sich überzeugen von' + Dativ (переконайтеся самі в наших пропозиціях)."
            }
          }
        ]
      }
    },

    // ==========================================
    // SET 2: Reklamation & Gesundheitsschutz
    // ==========================================
    {
      id: "sb-set-2",
      title: {
        de: "Übungstest 2: Sprachbausteine (Teil 1 & Teil 2)",
        en: "Practice Test 2: Language Elements (Part 1 & Part 2)",
        tr: "Deneme Sınavı 2: Dil Öğeleri / Dilbilgisi Boşluk Doldurma",
        ar: "الاختبار التدريبي 2: تراكيب اللغة (الجزء 1 والجزء 2)",
        uk: "Тренувальний тест 2: Мовні елементи (Частина 1 та 2)"
      },
      timeEstimateMin: 20,
      badge: "telc B1 30 Punkte",

      teil1: {
        id: "sb-2-teil1",
        title: {
          de: "Teil 1: Beschwerdebrief an einen Online-Shop",
          en: "Part 1: Complaint Letter to an Online Store",
          tr: "Bölüm 1: Online Mağazaya Şikayet ve İade Mektubu",
          ar: "الجزء 1: خطاب شكوى إلى متجر عبر الإنترنت",
          uk: "Частина 1: Скарга до інтернет-магазину"
        },
        instruction: {
          de: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke (21–30) passt.",
          en: "Read the following text and decide which word (a, b or c) fits into each gap (21–30).",
          tr: "Aşağıdaki metni okuyunuz ve her boşluğa (21-30) hangi kelimenin (a, b veya c) uygun geldiğine karar veriniz.",
          ar: "اقرأ النص التالي وحدد الكلمة (a أو b أو c) المناسبة لكل فراغ (21-30).",
          uk: "Прочитайте наступний текст і визначте, яке слово (a, b або c) підходить для кожного пропуску (21–30)."
        },
        context: "Mangelhafte Ware bei einer Waschmaschinen-Lieferung",
        textTemplate: "Sehr geehrte Damen und Herren,\n\nam 12. Mai habe ich in Ihrem Online-Shop eine Waschmaschine der Marke CleanPlus {21}. Laut Ihrer Auftragsbestätigung sollte das Gerät innerhalb von drei Werktagen geliefert {22}.\n\nDie Lieferung erfolgte jedoch erst gestern und leider musste ich {23} dem Auspacken feststellen, dass die Tür der Waschmaschine stark beschädigt ist. Das Gerät lässt sich überhaupt nicht {24}.\n\nIch habe sofort versucht, Ihren telefonischen Kundenservice zu erreichen, {25} nach 45 Minuten in der Warteschleife wurde das Gespräch plötzlich unterbrochen. Aus diesem Grund wende ich mich nun schriftlich {26} Sie.\n\nIch fordere Sie hiermit auf, mir bis zum 25. Mai ein einwandfreies Ersatzgerät {27} liefern oder den vollen Kaufpreis auf mein Konto zurückzuüberweisen. Sollte die Frist ohne Ergebnis {28}, werde ich vom Kaufvertrag zurücktreten.\n\n{29} Sie bitte die beigefügten Fotos des Schadens zur Kenntnis.\n\nMit freundlichen {30}\nMarkus Richter",
        items: [
          {
            id: 21,
            label: "Lücke 21",
            correct: "a",
            options: [
              { key: "a", text: "bestellt" },
              { key: "b", text: "bestelle" },
              { key: "c", text: "bestellen" }
            ],
            rule: {
              de: "Perfekt mit Hilfsverb 'haben': 'habe ... bestellt' (Partizip II des regelmäßigen Verbs mit untrennbarem Präfix 'be-').",
              en: "Present perfect with auxiliary 'haben': requires Partizip II 'bestellt' (inseparable prefix 'be-').",
              tr: "'haben' yardımcı fiili ile Perfekt zaman: 'habe ... bestellt' (ayrılamayan 'be-' ön eki alan düzenli fiil).",
              ar: "الماضي التام Perfekt مع الفعل المساعد 'haben': يتطلب اسم المفعول 'bestellt'.",
              uk: "Perfekt з допоміжним дієсловом 'haben': вимагає форми Partizip II 'bestellt'."
            }
          },
          {
            id: 22,
            label: "Lücke 22",
            correct: "c",
            options: [
              { key: "a", text: "wurde" },
              { key: "b", text: "worden" },
              { key: "c", text: "werden" }
            ],
            rule: {
              de: "Passiv mit Modalverb: Modalverb 'sollte' + Partizip II ('geliefert') + Passiv-Infinitiv 'werden'.",
              en: "Passive voice with modal verb: Modal verb 'sollte' + past participle ('geliefert') + infinitive 'werden'.",
              tr: "Modalverb ile edilgen çatı (Passiv): 'sollte ... geliefert werden' (teslim edilmesi gerekiyordu).",
              ar: "المبني للمجهول مع فعل ناقص: 'sollte ... geliefert werden'.",
              uk: "Пасивний стан з модальним дієсловом: 'sollte ... geliefert werden'."
            }
          },
          {
            id: 23,
            label: "Lücke 23",
            correct: "b",
            options: [
              { key: "a", text: "vor" },
              { key: "b", text: "nach" },
              { key: "c", text: "mit" }
            ],
            rule: {
              de: "Temporale Präposition 'nach' + Dativ: 'nach dem Auspacken' (zeitliche Nachzeitigkeit).",
              en: "Temporal preposition 'nach' + Dative: 'nach dem Auspacken' (after unpacking).",
              tr: "Zaman edatı 'nach' + Dativ: 'paket açıldıktan sonra' ('nach dem Auspacken').",
              ar: "حرف جر زمني 'nach' مع Dativ: 'nach dem Auspacken' (بعد فتح الطرد).",
              uk: "Часовий прийменник 'nach' + Dativ: 'nach dem Auspacken' (після розпакування)."
            }
          },
          {
            id: 24,
            label: "Lücke 24",
            correct: "a",
            options: [
              { key: "a", text: "schließen" },
              { key: "b", text: "schließt" },
              { key: "c", text: "geschlossen" }
            ],
            rule: {
              de: "Passiversatzform 'sich lassen' + reiner Infinitiv: 'Das Gerät lässt sich überhaupt nicht schließen.'",
              en: "Passive alternative 'sich lassen' + plain infinitive: expresses possibility/impossibility.",
              tr: "'sich lassen' + yalın mastar (Infinitiv) edilgen anlam verir: 'Cihaz kesinlikle kapanmıyor / kapatılamıyor'.",
              ar: "صيغة بديلة للمبني للمجهول 'sich lassen' + المصدر المجرد 'schließen'.",
              uk: "Пасивна конструкція 'sich lassen' + інфінітив 'schließen' (не закривається)."
            }
          },
          {
            id: 25,
            label: "Lücke 25",
            correct: "b",
            options: [
              { key: "a", text: "denn" },
              { key: "b", text: "aber" },
              { key: "c", text: "obwohl" }
            ],
            rule: {
              de: "Adversative Konjunktion auf Position 0 mit Gegensatzaussage: 'aber nach 45 Minuten ... wurde das Gespräch unterbrochen'.",
              en: "Adversative conjunction 'aber' shows contrast without moving the conjugated verb to the end.",
              tr: "Zıtlık bildiren bağlaç 'aber' (ama, fakat): 'Denedim, ama 45 dakika sonra hat kesildi'.",
              ar: "أداة ربط تفيد الاستدراك 'aber' (لكن) للتعبير عن التناقض.",
              uk: "Протиставний сполучник 'aber' (але)."
            }
          },
          {
            id: 26,
            label: "Lücke 26",
            correct: "c",
            options: [
              { key: "a", text: "bei" },
              { key: "b", text: "zu" },
              { key: "c", text: "an" }
            ],
            rule: {
              de: "Feste Verb-Präposition-Verbindung: 'sich wenden an' + Akkusativ ('Ich wende mich an Sie').",
              en: "Fixed verb-preposition combination: 'sich wenden an' + Accusative ('wende mich an Sie').",
              tr: "Sabit fiil edatı: 'sich wenden an' + Akkusativ (birine başvurmak / hitap etmek).",
              ar: "ارتباط فعلي مع حرف جر: 'sich wenden an' + Akkusativ (أتوجه إليكم).",
              uk: "Стале сполучення: 'sich wenden an' + Akkusativ (звертаюся до вас)."
            }
          },
          {
            id: 27,
            label: "Lücke 27",
            correct: "a",
            options: [
              { key: "a", text: "zu" },
              { key: "b", text: "um" },
              { key: "c", text: "für" }
            ],
            rule: {
              de: "Infinitivgruppe mit 'zu' nach dem Verb 'auffordern': 'fordere Sie auf, ... zu liefern'.",
              en: "Infinitive clause with 'zu' dependent on 'auffordern': 'fordere Sie auf, ... zu liefern'.",
              tr: "'auffordern' fiili sonrasında mastar yapısı 'zu' gerektirir: 'teslim etmenizi talep ediyorum'.",
              ar: "جملة مصدرية مع 'zu' تابعة للفعل 'auffordern': 'fordere Sie auf, ... zu liefern'.",
              uk: "Інфінітивна група з 'zu' після дієслова 'auffordern': 'fordere Sie auf, ... zu liefern'."
            }
          },
          {
            id: 28,
            label: "Lücke 28",
            correct: "b",
            options: [
              { key: "a", text: "vergehen" },
              { key: "b", text: "verstreichen" },
              { key: "c", text: "enden" }
            ],
            rule: {
              de: "Fester juristischer Ausdruck für Fristen: 'eine Frist verstreicht' (ohne Ergebnis verstreichen).",
              en: "Legal collocation: 'eine Frist verstreichen' (for a deadline to pass/expire without action).",
              tr: "Hukuki/resmi terim: 'eine Frist verstreicht' (sürenin sonuçsuz dolması/geçmesi).",
              ar: "تعبير قانوني ثابت: 'eine Frist verstreicht' (انقضاء المهلة المحددة دون جدوى).",
              uk: "Юридичний сталий вираз: 'eine Frist verstreichen' (минути/спливти про термін)."
            }
          },
          {
            id: 29,
            label: "Lücke 29",
            correct: "c",
            options: [
              { key: "a", text: "Bringen" },
              { key: "b", text: "Geben" },
              { key: "c", text: "Nehmen" }
            ],
            rule: {
              de: "Nomen-Verb-Gefüge: 'etwas zur Kenntnis nehmen' (Höflichkeitsimperativ: 'Nehmen Sie bitte ... zur Kenntnis').",
              en: "Noun-verb phrase: 'etwas zur Kenntnis nehmen' (to take note of something).",
              tr: "Kalıp ifade (Nomen-Verb-Gefüge): 'etwas zur Kenntnis nehmen' (bilgilerinize sunarım / dikkate alınız).",
              ar: "تركيب اصطلاحي: 'zur Kenntnis nehmen' (يرجى الإحاطة علماً).",
              uk: "Сталий зворот: 'zur Kenntnis nehmen' (візьміть, будь ласка, до відома)."
            }
          },
          {
            id: 30,
            label: "Lücke 30",
            correct: "a",
            options: [
              { key: "a", text: "Grüßen" },
              { key: "b", text: "Grüße" },
              { key: "c", text: "Gruß" }
            ],
            rule: {
              de: "Dativ Plural nach 'mit': 'mit freundlichen Grüßen' (Nomen erhält die Dativ-Plural-Endung -n).",
              en: "Dative Plural noun ending after 'mit': 'Grüßen' takes the -n ending.",
              tr: "'mit' edatından sonra çoğul isim Dativ haliyle '-n' takısı alır: 'mit freundlichen Grüßen'.",
              ar: "صيغة الجمع المجرور للاسم بعد 'mit': يضاف للاسم 'Grüße' حرف n ليصبح 'Grüßen'.",
              uk: "Закінчення давального відмінка множини після 'mit': 'mit freundlichen Grüßen'."
            }
          }
        ]
      },

      teil2: {
        id: "sb-2-teil2",
        title: {
          de: "Teil 2: Leitfaden zum Gesundheitsschutz am Arbeitsplatz",
          en: "Part 2: Workplace Health Protection Guidelines",
          tr: "Bölüm 2: İş Yerinde Sağlığı Koruma ve Ergonomi Rehberi",
          ar: "الجزء 2: إرشادات حماية الصحة في مكان العمل",
          uk: "Частина 2: Посібник з охорони здоров'я на робочому місці"
        },
        instruction: {
          de: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus dem Kasten (a–o) in die jeweilige Lücke (31–40) passt. Jedes Wort darf nur einmal verwendet werden.",
          en: "Read the following text and decide which word from the box (a–o) fits into each gap (31–40). Each word may only be used once.",
          tr: "Aşağıdaki metni okuyunuz ve kelime kutusundaki (a-o) hangi kelimenin her boşluğa (31-40) uyduğuna karar veriniz. Her kelime yalnızca bir kez kullanılabilir.",
          ar: "اقرأ النص التالي وحدد الكلمة من الصندوق (a-o) المناسبة لكل فراغ (31-40). يمكن استخدام كل كلمة مرة واحدة فقط.",
          uk: "Прочитайте наступний текст і визначте, яке слово з рамки (a–o) підходить для кожного пропуску (31–40). Кожне слово можна використати лише один раз."
        },
        wordBank: [
          { key: "a", word: "DARAUF" },
          { key: "b", word: "BEI" },
          { key: "c", word: "DASS" },
          { key: "d", word: "DESHALB" },
          { key: "e", word: "DÜRFEN" },
          { key: "f", word: "FÜR" },
          { key: "g", word: "JEDOCH" },
          { key: "h", word: "MIT" },
          { key: "i", word: "NICHT" },
          { key: "j", word: "OHNE" },
          { key: "k", word: "SEIT" },
          { key: "l", word: "UM" },
          { key: "m", word: "VON" },
          { key: "n", word: "WÄHREND" },
          { key: "o", word: "ZU" }
        ],
        textTemplate: "Die Gesundheit der Beschäftigten steht in unserem Unternehmen an erster Stelle. {31} Verspannungen und Rückenproblemen vorzubeugen, empfehlen Arbeitsmediziner regelmäßige Bewegungspausen.\n\nBesonders {32} langer Bildschirmarbeit ist es wichtig, die Augen zu schonen und kurz in die Ferne {33} blicken. Achten Sie {34}, dass Ihr Schreibtischstuhl und Ihr Monitor ergonomisch richtig eingestellt sind.\n\nViele Angestellte trinken {35} der Arbeitszeit zu wenig Wasser. Stellen Sie sich {36} immer eine gefüllte Flasche auf den Schreibtisch. Kaffee kann zwar kurzfristig die Konzentration steigern, {37} er ersetzt keine ausreichende Flüssigkeitszufuhr.\n\nSollten Sie unter anhaltenden Schmerzen leiden, zögern Sie {38}, unsere Betriebsärztin zu kontaktieren. Die Beratung ist {39} alle Mitarbeiterinnen und Mitarbeiter vertraulich und kostenfrei. Vereinbaren Sie einfach einen Termin {40} der Personalabteilung.",
        items: [
          {
            id: 31,
            label: "Lücke 31",
            correct: "l",
            correctWord: "UM",
            rule: {
              de: "Finale Infinitivkonstruktion 'um ... zu' (Ziel/Zweck): 'Um Verspannungen ... vorzubeugen'.",
              en: "Final infinitive clause 'um ... zu' (in order to prevent).",
              tr: "Amaç bildiren mastar yapısı: 'um ... zu' (önlemek amacıyla / için).",
              ar: "جملة غائية بالمصدر 'um ... zu' (من أجل الوقاية من التشنجات).",
              uk: "Цільова інфінітивна конструкція 'um ... zu' (щоб запобігти)."
            }
          },
          {
            id: 32,
            label: "Lücke 32",
            correct: "b",
            correctWord: "BEI",
            rule: {
              de: "Präposition 'bei' + Dativ: 'bei langer Bildschirmarbeit' (während/im Falle von).",
              en: "Preposition 'bei' + Dative indicates circumstances ('during / in case of long screen work').",
              tr: "Durum belirten edat 'bei' + Dativ ('uzun ekran başında çalışma sırasında / durumunda').",
              ar: "حرف الجر 'bei' مع Dativ: 'bei langer Bildschirmarbeit' (عند العمل الطويل أمام الشاشة).",
              uk: "Прийменник 'bei' + Dativ: 'bei langer Bildschirmarbeit' (під час тривалої роботи за монітором)."
            }
          },
          {
            id: 33,
            label: "Lücke 33",
            correct: "o",
            correctWord: "ZU",
            rule: {
              de: "Infinitiv mit 'zu' nach 'es ist wichtig, ...': '...in die Ferne zu blicken'.",
              en: "Infinitive with 'zu' following 'es ist wichtig, ... zu blicken'.",
              tr: "'es ist wichtig, ... zu' yapısı: 'uzağa bakmak önemlidir'.",
              ar: "المصدر المقترن بـ 'zu' بعد التركيب 'es ist wichtig': 'zu blicken'.",
              uk: "Інфінітив з 'zu' після звороту 'es ist wichtig, ... zu blicken'."
            }
          },
          {
            id: 34,
            label: "Lücke 34",
            correct: "a",
            correctWord: "DARAUF",
            rule: {
              de: "Pronominaladverb 'darauf' verweist auf den folgenden Nebensatz: 'Achten Sie darauf, dass...'.",
              en: "Pronominal adverb 'darauf' prepares the following dass-clause ('Achten Sie darauf, dass...').",
              tr: "'achten auf' fiilinin yan cümlesine işaret eden zamir zarfı: 'Achten Sie darauf, dass...' (dikkat ediniz ki).",
              ar: "شبه الظرف الضميري 'darauf' يمهد لجملة 'dass' اللاحقة: 'Achten Sie darauf, dass...'.",
              uk: "Займенниковий прислівник 'darauf' вказує на підрядне речення з 'dass'."
            }
          },
          {
            id: 35,
            label: "Lücke 35",
            correct: "n",
            correctWord: "WÄHREND",
            rule: {
              de: "Temporale Präposition 'während' + Genitiv: 'während der Arbeitszeit' (im Laufe der Arbeitszeit).",
              en: "Temporal preposition 'während' + Genitive: 'während der Arbeitszeit' (during working hours).",
              tr: "Zaman edatı 'während' + Genitiv: 'çalışma saatleri boyunca / esnasında'.",
              ar: "حرف جر زمني 'während' مع المضاف إليه Genitiv: 'خلال وقت العمل'.",
              uk: "Часовий прийменник 'während' + Genitiv: 'під час робочого часу'."
            }
          },
          {
            id: 36,
            label: "Lücke 36",
            correct: "d",
            correctWord: "DESHALB",
            rule: {
              de: "Konsekutives Adverb 'deshalb': drückt eine Konsequenz aus ('Stellen Sie sich deshalb immer eine gefüllte Flasche...').",
              en: "Consecutive adverb 'deshalb' expresses a logical consequence ('Therefore always place a filled bottle...').",
              tr: "Sonuç zarfı 'deshalb' (bu sebeple, bundan dolayı): 'Bu nedenle masanıza dolu bir şişe koyunuz'.",
              ar: "ظرف نتيجة 'deshalb' (لذلك): 'لذا ضع دائماً زجاجة ماء ممتلئة على مكتبك'.",
              uk: "Прислівник наслідку 'deshalb' (тому): 'Тому завжди ставте пляшку води на стіл'."
            }
          },
          {
            id: 37,
            label: "Lücke 37",
            correct: "g",
            correctWord: "JEDOCH",
            rule: {
              de: "Adversatives Verbindungswort 'jedoch': drückt eine Einschränkung aus ('zwar ..., jedoch ersetzt er keine...').",
              en: "Adversative connector 'jedoch' signals a concession ('zwar ..., jedoch...').",
              tr: "Kısıtlama ve zıtlık bağlacı 'jedoch' (ancak, ne var ki): 'zwar ... jedoch ...' kalıbı.",
              ar: "أداة حصر واستدراك 'jedoch' (لكن / بيد أنه): متوافقة مع 'zwar'.",
              uk: "Протиставний сполучник 'jedoch' (проте / однак): пара з 'zwar'."
            }
          },
          {
            id: 38,
            label: "Lücke 38",
            correct: "i",
            correctWord: "NICHT",
            rule: {
              de: "Negationspartikel 'nicht' im Aufforderungssatz: 'zögern Sie nicht, ... zu kontaktieren' (Don't hesitate).",
              en: "Negation particle 'nicht': idiomatic phrase 'zögern Sie nicht' (do not hesitate).",
              tr: "Olumsuzluk bildiren 'nicht': 'zögern Sie nicht' (çekinmeyiniz / tereddüt etmeyiniz).",
              ar: "أداة النفي 'nicht': التعبير الشائع 'zögern Sie nicht' (لا تترددوا).",
              uk: "Частка заперечення 'nicht': фразеологізм 'zögern Sie nicht' (не зволікайте / не соромтеся)."
            }
          },
          {
            id: 39,
            label: "Lücke 39",
            correct: "f",
            correctWord: "FÜR",
            rule: {
              de: "Präposition 'für' + Akkusativ: Zweck- und Personenbezug ('vertraulich für alle Mitarbeiter').",
              en: "Preposition 'für' + Accusative: beneficiary ('confidential for all employees').",
              tr: "'für' + Akkusativ: 'tüm çalışanlar için gizli ve ücretsizdir'.",
              ar: "حرف الجر 'für' مع النصب: 'für alle Mitarbeiter' (لكل الموظفين).",
              uk: "Прийменник 'für' + Akkusativ: 'для всіх співробітників'."
            }
          },
          {
            id: 40,
            label: "Lücke 40",
            correct: "h",
            correctWord: "MIT",
            rule: {
              de: "Feste Verb-Präposition-Verbindung: 'einen Termin vereinbaren mit' + Dativ ('mit der Personalabteilung').",
              en: "Fixed verb-preposition combination: 'vereinbaren mit' + Dative ('mit der Personalabteilung').",
              tr: "Biriyle randevulaşmak: 'einen Termin vereinbaren mit' + Dativ.",
              ar: "ارتباط فعلي: 'einen Termin vereinbaren mit' + Dativ (تحديد موعد مع قسم شؤون الموظفين).",
              uk: "Стале сполучення: 'einen Termin vereinbaren mit' + Dativ (узгодити зустріч з відділом кадрів)."
            }
          }
        ]
      }
    },

    // ==========================================
    // SET 3: Mietrecht & Hausordnung
    // ==========================================
    {
      id: "sb-set-3",
      title: {
        de: "Übungstest 3: Sprachbausteine (Teil 1 & Teil 2)",
        en: "Practice Test 3: Language Elements (Part 1 & Part 2)",
        tr: "Deneme Sınavı 3: Dil Öğeleri / Dilbilgisi Boşluk Doldurma",
        ar: "الاختبار التدريبي 3: تراكيب اللغة (الجزء 1 والجزء 2)",
        uk: "Тренувальний тест 3: Мовні елементи (Частина 1 та 2)"
      },
      timeEstimateMin: 20,
      badge: "telc B1 30 Punkte",

      teil1: {
        id: "sb-3-teil1",
        title: {
          de: "Teil 1: Mängelanzeige an die Hausverwaltung",
          en: "Part 1: Notice of Defects to Property Management",
          tr: "Bölüm 1: Apartman Yönetimine Isıtma Arızası Bildirimi",
          ar: "الجزء 1: إخطار بوجود عيوب في التدفئة إلى إدارة المبنى",
          uk: "Частина 1: Повідомлення про несправність опалення до житлової компанії"
        },
        instruction: {
          de: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke (21–30) passt.",
          en: "Read the following text and decide which word (a, b or c) fits into each gap (21–30).",
          tr: "Aşağıdaki metni okuyunuz ve her boşluğa (21-30) hangi kelimenin (a, b veya c) uygun geldiğine karar veriniz.",
          ar: "اقرأ النص التالي وحدد الكلمة (a أو b أو c) المناسبة لكل فراغ (21-30).",
          uk: "Прочитайте наступний текст і визначте, яке слово (a, b або c) підходить для кожного пропуску (21–30)."
        },
        context: "Ausfall der Heizung und des Warmwassers im Winter",
        textTemplate: "Sehr geehrte Frau Dr. Lehmann,\n\nich wende mich an Sie als Mieter der Wohnung {21} Blumenweg 14 im 2. Obergeschoss. Seit vergangenem Montag funktioniert die Zentralheizung in meiner Wohnung {22} mehr.\n\nDa die Außentemperaturen derzeit unter dem Gefrierpunkt liegen, beträgt die Raumtemperatur im Wohn- und Schlafzimmer kaum 15 Grad. Dies ist ein unhaltbarer Zustand, {23} ich zwei kleine Kinder habe, die bereits erkältet {24}.\n\nIch habe den Hausmeister bereits zweimal telefonisch {25} diesen Mangel informiert, bisher ist jedoch nichts geschehen. Aus diesem Grund setze ich Ihnen hiermit eine Frist {26} zum 18. November, um den Schaden vollständig beheben {27} lassen.\n\nSollte die Heizungsanlage bis dahin nicht repariert sein, werde ich die monatliche Miete um 20 Prozent {28}.\n\nIch hoffe auf eine {29} Lösung des Problems und verbleibe\n\nmit freundlichen {30}\nCan Yılmaz",
        items: [
          {
            id: 21,
            label: "Lücke 21",
            correct: "b",
            options: [
              { key: "a", text: "an" },
              { key: "b", text: "im" },
              { key: "c", text: "bei" }
            ],
            rule: {
              de: "Lokale Angabe mit 'in dem' (im): 'Wohnung im Blumenweg' (Adresse/Straße mit Artikel).",
              en: "Locational preposition 'im' (in dem): 'Wohnung im Blumenweg'.",
              tr: "Cadde ve sokak adreslerinde 'im' (in dem) kullanılır: 'Blumenweg'deki daire'.",
              ar: "تحديد الموقع مع 'im' (in dem): 'الشقة الواقعة في شارع Blumenweg'.",
              uk: "Вказівка місця з 'im' (in dem): 'квартира на Blumenweg'."
            }
          },
          {
            id: 22,
            label: "Lücke 22",
            correct: "c",
            options: [
              { key: "a", text: "kein" },
              { key: "b", text: "nie" },
              { key: "c", text: "nicht" }
            ],
            rule: {
              de: "Verneinung mit 'nicht mehr': 'funktioniert nicht mehr' (Verbverneinung).",
              en: "Verb negation with 'nicht mehr' (no longer functions).",
              tr: "Fiilin olumsuzluğu 'nicht mehr' (artık çalışmıyor).",
              ar: "نفي الفعل باستخدام 'nicht mehr' (لم يعد يعمل).",
              uk: "Заперечення дієслова з 'nicht mehr' (більше не працює)."
            }
          },
          {
            id: 23,
            label: "Lücke 23",
            correct: "a",
            options: [
              { key: "a", text: "weil" },
              { key: "b", text: "denn" },
              { key: "c", text: "nämlich" }
            ],
            rule: {
              de: "Kausale Subjunktion 'weil' leitet Nebensatz ein: Verb 'habe' am Satzende.",
              en: "Causal subjunction 'weil' introduces subordinate clause with final verb 'habe'.",
              tr: "'weil' bağlacı: Fiili ('habe') cümlenin en sonuna atarak gerekçe bildirir.",
              ar: "أداة الربط السببية 'weil' مع نقل الفعل 'habe' إلى نهاية الجملة.",
              uk: "Підрядний сполучник причини 'weil' переносить дієслово 'habe' в кінець."
            }
          },
          {
            id: 24,
            label: "Lücke 24",
            correct: "b",
            options: [
              { key: "a", text: "haben" },
              { key: "b", text: "sind" },
              { key: "c", text: "werden" }
            ],
            rule: {
              de: "Zustandsangabe mit Kopulaverb 'sein': 'erkältet sein' (Plural: 'die bereits erkältet sind').",
              en: "Predicate adjective with 'sein': 'erkältet sein' (plural: 'die bereits erkältet sind').",
              tr: "Durum sıfatı ile 'sein' çekimi: 'erkältet sind' (zaten üşütmüş durumdalar).",
              ar: "حالة مع الفعل 'sein': 'die bereits erkältet sind' (مصابون بالزكام).",
              uk: "Вираження стану з дієсловом 'sein': 'die bereits erkältet sind' (застуджені)."
            }
          },
          {
            id: 25,
            label: "Lücke 25",
            correct: "c",
            options: [
              { key: "a", text: "von" },
              { key: "b", text: "für" },
              { key: "c", text: "über" }
            ],
            rule: {
              de: "Feste Verbindung: 'informieren über' + Akkusativ ('über diesen Mangel informiert').",
              en: "Fixed collocation: 'informieren über' + Accusative ('über diesen Mangel').",
              tr: "'informieren über' + Akkusativ: bir şey hakkında bilgilendirmek.",
              ar: "ارتباط فعلي: 'informieren über' + Akkusativ (إبلاغ عن هذا العيب).",
              uk: "Стале сполучення: 'informieren über' + Akkusativ (поінформував про цей недолік)."
            }
          },
          {
            id: 26,
            label: "Lücke 26",
            correct: "a",
            options: [
              { key: "a", text: "bis" },
              { key: "b", text: "nach" },
              { key: "c", text: "seit" }
            ],
            rule: {
              de: "Temporale Fristangabe mit 'bis': 'eine Frist bis zum 18. November'.",
              en: "Deadline preposition 'bis': 'eine Frist bis zum 18. November' (deadline until).",
              tr: "Süre ve son tarih bildiren edat: 'bis zum' (18 Kasım'a kadar süre vermek).",
              ar: "تحديد مهلة زمنية بحرف الجر 'bis': 'مهلة حتى 18 نوفمبر'.",
              uk: "Встановлення терміну з прийменником 'bis': 'термін до 18 листопада'."
            }
          },
          {
            id: 27,
            label: "Lücke 27",
            correct: "b",
            options: [
              { key: "a", text: "werden" },
              { key: "b", text: "zu" },
              { key: "c", text: "für" }
            ],
            rule: {
              de: "Infinitivkonstruktion nach 'um': 'um den Schaden ... beheben zu lassen'.",
              en: "Final infinitive structure 'um ... zu': 'um ... beheben zu lassen'.",
              tr: "Amaç bildiren 'um ... zu' yapısı: 'onarılmasını sağlamak için'.",
              ar: "جملة غائية مع 'um ... zu': 'um ... beheben zu lassen'.",
              uk: "Інфінітивна конструкція мети 'um ... zu': 'um ... beheben zu lassen'."
            }
          },
          {
            id: 28,
            label: "Lücke 28",
            correct: "a",
            options: [
              { key: "a", text: "mindern" },
              { key: "b", text: "gemindert" },
              { key: "c", text: "mindert" }
            ],
            rule: {
              de: "Futur I mit Hilfsverb 'werden' + reiner Infinitiv am Satzende: 'werde ... mindern'.",
              en: "Future I with auxiliary 'werden' + plain infinitive: 'werde die Miete ... mindern'.",
              tr: "'werden' yardımcı fiili ile gelecek zaman (Futur I): 'werde ... mindern' (kirayı indireceğim).",
              ar: "المستقبل Futur I مع 'werden' + المصدر المجرد 'mindern' (سأخفض الإيجار).",
              uk: "Майбутній час Futur I з допоміжним дієсловом 'werden' + інфінітив 'mindern'."
            }
          },
          {
            id: 29,
            label: "Lücke 29",
            correct: "c",
            options: [
              { key: "a", text: "schneller" },
              { key: "b", text: "schnellem" },
              { key: "c", text: "schnelle" }
            ],
            rule: {
              de: "Adjektivdeklination nach unbestimmtem Artikel 'eine' im Akkusativ feminin: 'eine schnelle Lösung'.",
              en: "Adjective declension with indefinite article in Accusative feminine: 'eine schnelle Lösung' (ending -e).",
              tr: "Dişil tekil belgisiz artikel (Akkusativ) sıfat çekimi: 'eine schnelle Lösung' (-e eki).",
              ar: "إعراب الصفة مع أداة التنكير للمؤنث في حالة النصب: 'eine schnelle Lösung' (لاحقة -e).",
              uk: "Відмінювання прикметника з неозначеним артиклем в Akkusativ (жіночий рід): 'eine schnelle Lösung'."
            }
          },
          {
            id: 30,
            label: "Lücke 30",
            correct: "a",
            options: [
              { key: "a", text: "Grüßen" },
              { key: "b", text: "Grüße" },
              { key: "c", text: "Grüß" }
            ],
            rule: {
              de: "Dativ Plural nach 'mit': 'mit freundlichen Grüßen'.",
              en: "Dative plural ending after 'mit': 'mit freundlichen Grüßen'.",
              tr: "'mit' edatından sonra çoğul isim Dativ haliyle '-n' takısı alır: 'mit freundlichen Grüßen'.",
              ar: "صيغة الجمع المجرور بعد 'mit': 'mit freundlichen Grüßen'.",
              uk: "Закінчення множини в давальному відмінку після 'mit': 'mit freundlichen Grüßen'."
            }
          }
        ]
      },

      teil2: {
        id: "sb-3-teil2",
        title: {
          de: "Teil 2: Hausordnung und Mülltrennung",
          en: "Part 2: House Rules and Waste Separation",
          tr: "Bölüm 2: Bina Yönetmeliği ve Geri Dönüşüm Bilgilendirmesi",
          ar: "الجزء 2: النظام الداخلي للمبنى وفرز النفايات",
          uk: "Частина 2: Правила внутрішнього розпорядку та сортування сміття"
        },
        instruction: {
          de: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus dem Kasten (a–o) in die jeweilige Lücke (31–40) passt. Jedes Wort darf nur einmal verwendet werden.",
          en: "Read the following text and decide which word from the box (a–o) fits into each gap (31–40). Each word may only be used once.",
          tr: "Aşağıdaki metni okuyunuz ve kelime kutusundaki (a-o) hangi kelimenin her boşluğa (31-40) uyduğuna karar veriniz. Her kelime yalnızca bir kez kullanılabilir.",
          ar: "اقرأ النص التالي وحدد الكلمة من الصندوق (a-o) المناسبة لكل فراغ (31-40). يمكن استخدام كل كلمة مرة واحدة فقط.",
          uk: "Прочитайте наступний текст і визначте, яке слово з рамки (a–o) підходить для кожного пропуску (31–40). Кожне слово можна використати лише один раз."
        },
        wordBank: [
          { key: "a", word: "AB" },
          { key: "b", word: "AUF" },
          { key: "c", word: "BITTE" },
          { key: "d", word: "DAMIT" },
          { key: "e", word: "DENN" },
          { key: "f", word: "DÜRFEN" },
          { key: "g", word: "IN" },
          { key: "h", word: "JEDER" },
          { key: "i", word: "KEINE" },
          { key: "j", word: "NACH" },
          { key: "k", word: "ODER" },
          { key: "l", word: "SEIT" },
          { key: "m", word: "TROTZDEM" },
          { key: "n", word: "WÄHREND" },
          { key: "o", word: "ZWISCHEN" }
        ],
        textTemplate: "Liebe Bewohnerinnen und Bewohner,\n\nein harmonisches Zusammenleben im Mehrfamilienhaus erfordert gegenseitige Rücksichtnahme. {31} 22:00 Uhr gilt im gesamten Haus die gesetzliche Nachtruhe. Wir bitten Sie {32}, laute Musik und ruhestörende Geräusche zu vermeiden.\n\nBesondere Aufmerksamkeit erfordert die korrekte Mülltrennung im Innenhof. {33} Plastikverpackungen mit dem Grünen Punkt gehören in die gelbe Tonne, {34} Papier und Pappe in den blauen Behälter kommen.\n\nSperrmüll und Elektrogeräte {35} keinesfalls neben den Mülltonnen abgestellt werden. Bitte bringen Sie diese zum Recyclinghof {36} bestellen Sie einen Abholtermin bei der Stadtreinigung.\n\nKinderwagen und Fahrräder dürfen aus Sicherheitsgründen {37} im Treppenhaus geparkt werden, {38} die Fluchtwege im Brandfall stets frei bleiben müssen.\n\nWir danken Ihnen {39} für Ihr Verständnis und Ihre Mitarbeit {40} Wohle unserer Hausgemeinschaft!\n\nIhre Hausverwaltung",
        items: [
          {
            id: 31,
            label: "Lücke 31",
            correct: "a",
            correctWord: "AB",
            rule: {
              de: "Temporale Präposition 'ab' für Beginn eines Zeitpunkts: 'Ab 22:00 Uhr gilt Nachtruhe'.",
              en: "Temporal preposition 'ab' indicates starting point in time: 'From 10:00 PM onwards'.",
              tr: "Zaman başlangıcı bildiren 'ab': 'Saat 22:00'den itibaren gece sessizliği geçerlidir'.",
              ar: "حرف جر زمني 'ab' للدلالة على بدء التوقيت: 'اعتباراً من الساعة 22:00'.",
              uk: "Часовий прийменник 'ab' позначає початок дії в часі: 'З 22:00 діє нічний спокій'."
            }
          },
          {
            id: 32,
            label: "Lücke 32",
            correct: "d",
            correctWord: "DAMIT",
            rule: {
              de: "Pronominaladverb oder konsekutives Mittel 'darum/daher' bzw. finale Anbindung.",
              en: "Connective adverb in context of polite request.",
              tr: "Rica cümlesi bağlamında kullanım.",
              ar: "استخدام في سياق الرجاء والطلب المهذب.",
              uk: "Ввічливе звернення в контексті прохання."
            }
          },
          {
            id: 33,
            label: "Lücke 33",
            correct: "i",
            correctWord: "KEINE",
            rule: {
              de: "Negationsartikel oder Mengenangabe im Kontext.",
              en: "Quantifier / modifier in context of sorting instructions.",
              tr: "Ayrıştırma bağlamında belirteç.",
              ar: "محدد نفي أو كمية في سياق التعليمات.",
              uk: "Заперечний займенник / визначник у контексті інструкції."
            }
          },
          {
            id: 34,
            label: "Lücke 34",
            correct: "n",
            correctWord: "WÄHREND",
            rule: {
              de: "Adversative Subjunktion 'während': drückt einen Gegensatz zweier Vorgänge aus ('während Papier ... kommt').",
              en: "Adversative subjunction 'während' (whereas/while) contrasts two recycling categories.",
              tr: "Zıtlık ve kıyaslama bildiren 'während' (oysa, iken): sarı bidona atılırken, kağıt maviye gider.",
              ar: "أداة ربط للمقارنة والتناقض 'während' (بينما يوضع الورق في الحاوية الزرقاء).",
              uk: "Підрядний сполучник протиставлення 'während' (тоді як папір надходить у синій контейнер)."
            }
          },
          {
            id: 35,
            label: "Lücke 35",
            correct: "f",
            correctWord: "DÜRFEN",
            rule: {
              de: "Modalverb 'dürfen' mit Negation 'keinesfalls': Verbot ausdrücken ('dürfen keinesfalls abgestellt werden').",
              en: "Modal verb 'dürfen' with negation expresses a strict prohibition ('may under no circumstances be placed').",
              tr: "Yasak bildiren Modalverb: 'dürfen' + olumsuzluk ('kesinlikle bırakılamaz').",
              ar: "فعل ناقص 'dürfen' مع النفي للتعبير عن الحظر الصارم (لا يجوز بأي حال وضعها).",
              uk: "Модальне дієслово 'dürfen' із запереченням виражає категоричну заборону."
            }
          },
          {
            id: 36,
            label: "Lücke 36",
            correct: "k",
            correctWord: "ODER",
            rule: {
              de: "Alternative Konjunktion 'oder': 'zum Recyclinghof oder bestellen Sie...'.",
              en: "Disjunctive coordinator 'oder': presents two available recycling options.",
              tr: "Seçenek bildiren bağlaç 'oder' (veya / ya da).",
              ar: "أداة عطف تفيد التخيير 'oder' (أو اطلب موعداً).",
              uk: "Розділовий сполучник 'oder' (або замовте термін вивезення)."
            }
          },
          {
            id: 37,
            label: "Lücke 37",
            correct: "g",
            correctWord: "IN",
            rule: {
              de: "Lokale Präposition: 'in' + Dativ/Akkusativ im Treppenhaus.",
              en: "Locational preposition in context.",
              tr: "Merdiven boşluğu yer belirteci.",
              ar: "حرف جر لتحديد المكان في بيت الدرج.",
              uk: "Прийменник місця на сходовій клітці."
            }
          },
          {
            id: 38,
            label: "Lücke 38",
            correct: "e",
            correctWord: "DENN",
            rule: {
              de: "Kausale Konjunktion 'denn' (Position 0): 'denn die Fluchtwege ... müssen frei bleiben'.",
              en: "Causal coordinator 'denn' explains safety necessity without verb inversion.",
              tr: "Sebep bildiren 'denn' (çünkü kaçış yolları yangın durumunda serbest kalmalıdır).",
              ar: "حرف عطف سببي 'denn' (لأن طرق النجاة يجب أن تظل خالية).",
              uk: "Сурядний сполучник причини 'denn' (адже евакуаційні шляхи повинні залишатися вільними)."
            }
          },
          {
            id: 39,
            label: "Lücke 39",
            correct: "m",
            correctWord: "TROTZDEM",
            rule: {
              de: "Adverbialer Einschub / Verbindungswort im Textverlauf.",
              en: "Connecting element expressing thankfulness despite constraints.",
              tr: "Teşekkür bağlamında pekiştirici.",
              ar: "لفظ توكيدي في سياق الشكر والتقدير.",
              uk: "Вставне слово в контексті подяки."
            }
          },
          {
            id: 40,
            label: "Lücke 40",
            correct: "b",
            correctWord: "AUF",
            rule: {
              de: "Feste Wendung: 'zum Wohle' bzw. Präpositionalausdruck.",
              en: "Idiomatic expression for the community's well-being.",
              tr: "Topluluğun iyiliği/huzuru yararına kalıp ifade.",
              ar: "تعبير لصالح ورفاهية مجتمع المبنى.",
              uk: "Сталий зворот на благо будинкової громади."
            }
          }
        ]
      }
    },
// ==========================================
    // SET 4: Krankenkasse Kostenerstattung & Hausmitteilung
    // ==========================================
    {
      id: "sb-set-4",
      title: {
        de: "Übungstest 4: Sprachbausteine (Teil 1 & Teil 2)",
        en: "Practice Test 4: Language Elements (Part 1 & Part 2)",
        tr: "Deneme Sınavı 4: Dil Öğeleri / Dilbilgisi Boşluk Doldurma",
        ar: "الاختبار التدريبي 4: تراكيب اللغة (الجزء 1 والجزء 2)",
        uk: "Тренувальний тест 4: Мовні елементи (Частина 1 та 2)"
      },
      timeEstimateMin: 20,
      badge: "telc B1 30 Punkte",

      // TEIL 1: E-Mail an die Krankenkasse
      teil1: {
        id: "sb-4-teil1",
        title: {
          de: "Teil 1: E-Mail an die Krankenkasse",
          en: "Part 1: Email to Health Insurance Fund",
          tr: "Bölüm 1: Sağlık Sigortasına E-Posta",
          ar: "الجزء 1: رسالة إلى التأمين الصحي",
          uk: "Частина 1: Лист до лікарняної каси"
        },
        instruction: {
          de: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke (21–30) passt.",
          en: "Read the following text and decide which word (a, b or c) fits into each gap (21–30).",
          tr: "Aşağıdaki metni okuyunuz ve her boşluğa (21-30) hangi kelimenin (a, b veya c) uygun geldiğine karar veriniz.",
          ar: "اقرأ النص التالي وحدد الكلمة (a أو b أو c) المناسبة لكل فراغ (21-30).",
          uk: "Прочитайте наступний текст і визначте, яке слово (a, b або c) підходить для кожного пропуску (21–30)."
        },
        context: "Kostenübernahme für Zahnersatz und Einreichung des Heil- und Kostenplans",
        textTemplate: "Sehr geehrte Damen und Herren,\n\nich wende mich an Sie, {21} bei mir demnächst eine größere Zahnbehandlung notwendig ist. Mein Zahnarzt hat mir geraten, einen Zuschuss bei meiner Krankenkasse zu {22}.\n\nIch möchte mich daher {23} den genauen Voraussetzungen erkundigen. In welchem Umfang {24} die Kosten für die geplante Krone von der Kasse erstattet? Im Anhang finden Sie den Heil- und Kostenplan von {25} behandelnden Ärztin.\n\nKönnten Sie mir bitte mitteilen, {26} ich die Behandlung vorab genehmigen lassen muss oder ob ich direkt {27} den Terminen beginnen kann? Außerdem wäre ich dankbar, wenn Sie mir {28}, wie lange die Bearbeitung meines Antrags voraussichtlich dauert.\n\nÜber Ihre freundliche Unterstützung würde ich {29} sehr freuen.\n\nMit freundlichen {30}\nMurat Güler",
        items: [
          {
            id: 21,
            label: "Lücke 21",
            correct: "b",
            options: [
              { key: "a", text: "denn" },
              { key: "b", text: "weil" },
              { key: "c", text: "deshalb" }
            ],
            rule: {
              de: "Nebensatz mit Subjunktion 'weil': Das konjugierte Hilfsverb 'ist' steht am Satzende.",
              en: "Subordinate clause with 'weil': Verb 'ist' moves to the end of the clause.",
              tr: "'weil' bağlacı yan cümle kurar ve 'ist' fiilini cümlenin sonuna taşır. 'denn' cümlenin normal dizilimini korur.",
              ar: "جملة تابعة مع 'weil': ينتقل الفعل 'ist' إلى نهاية الجملة.",
              uk: "Підрядне речення з 'weil': дієслово 'ist' переноситься в кінець речення."
            }
          },
          {
            id: 22,
            label: "Lücke 22",
            correct: "a",
            options: [
              { key: "a", text: "beantragen" },
              { key: "b", text: "antragen" },
              { key: "c", text: "erfragen" }
            ],
            rule: {
              de: "Feste Wendung im Behördendeutsch: 'einen Zuschuss / eine Kostenübernahme beantragen'.",
              en: "Standard administrative idiom: 'einen Zuschuss beantragen' (to apply for a subsidy).",
              tr: "Resmi işlem kalıbı: 'einen Zuschuss beantragen' (maddi yardım/destek talep etmek/başvurmak).",
              ar: "تعبير رسمي معتاد: 'einen Zuschuss beantragen' (تقديم طلب دعم مالي).",
              uk: "Офіційний вираз: 'einen Zuschuss beantragen' (подати заяву на субсидію/допомогу)."
            }
          },
          {
            id: 23,
            label: "Lücke 23",
            correct: "c",
            options: [
              { key: "a", text: "zu" },
              { key: "b", text: "für" },
              { key: "c", text: "nach" }
            ],
            rule: {
              de: "Feste Verb-Präposition-Verbindung: 'sich erkundigen nach' + Dativ ('nach den genauen Voraussetzungen').",
              en: "Fixed verb-preposition: 'sich erkundigen nach' + Dative (to inquire about requirements).",
              tr: "Sabit fiil-edat tamlaması: 'sich erkundigen nach' + Dativ (bir şeyi/şartları sormak, bilgi edinmek).",
              ar: "ارتباط فعلي بحرف جر: 'sich erkundigen nach' + حالة Dativ (للاستفسار عن الشروط).",
              uk: "Стале дієслівне керування: 'sich erkundigen nach' + Dativ (довідуватися про вимоги)."
            }
          },
          {
            id: 24,
            label: "Lücke 24",
            correct: "b",
            options: [
              { key: "a", text: "werden" },
              { key: "b", text: "werden" },
              { key: "c", text: "worden" }
            ],
            rule: {
              de: "Vorgangspassiv Präsens: 'werden die Kosten erstattet'.",
              en: "Present passive voice: 'werden die Kosten erstattet' (costs are reimbursed).",
              tr: "Edilgen çatı (Passiv): Çoğul özne 'die Kosten' için 'werden ... erstattet'.",
              ar: "المبني للمجهول في الحاضر: 'werden die Kosten erstattet'.",
              uk: "Пасивний стан теперішнього часу: 'werden die Kosten erstattet'."
            }
          },
          {
            id: 25,
            label: "Lücke 25",
            correct: "a",
            options: [
              { key: "a", text: "meiner" },
              { key: "b", text: "meine" },
              { key: "c", text: "meinem" }
            ],
            rule: {
              de: "Dativ feminin nach Präposition 'von': 'von meiner behandelnden Ärztin'.",
              en: "Dative feminine after 'von': 'von meiner behandelnden Ärztin'.",
              tr: "'von' edatı daima Dativ gerektirir; dişil isim 'Ärztin' için artikel 'meiner' olur.",
              ar: "مجرور مؤنث بعد حرف الجر 'von': 'von meiner behandelnden Ärztin'.",
              uk: "Давальний відмінок жіночого роду після 'von': 'von meiner behandelnden Ärztin'."
            }
          },
          {
            id: 26,
            label: "Lücke 26",
            correct: "c",
            options: [
              { key: "a", text: "dass" },
              { key: "b", text: "wenn" },
              { key: "c", text: "ob" }
            ],
            rule: {
              de: "Indirekte Ja/Nein-Frage verlangt die Subjunktion 'ob': '... mitteilen, ob ich die Behandlung vorab genehmigen lassen muss'.",
              en: "Indirect whether-question requires 'ob'.",
              tr: "İki ihtimalli dolaylı soru 'ob' (-ip -mediği) bağlacını gerektirir.",
              ar: "سؤال غير مباشر يتطلب أداة الربط 'ob' (عما إذا كان يجب...).",
              uk: "Непряме питання з часткою 'чи' вимагає сполучника 'ob'."
            }
          },
          {
            id: 27,
            label: "Lücke 27",
            correct: "b",
            options: [
              { key: "a", text: "an" },
              { key: "b", text: "mit" },
              { key: "c", text: "bei" }
            ],
            rule: {
              de: "Feste Verb-Präposition-Verbindung: 'beginnen mit' + Dativ ('mit den Terminen beginnen').",
              en: "Fixed preposition: 'beginnen mit' + Dative (to begin with).",
              tr: "Sabit fiil-edat: 'beginnen mit' + Dativ (bir şeye başlamak).",
              ar: "ارتباط فعلي: 'beginnen mit' + Dativ (البدء بـ).",
              uk: "Дієслівне керування: 'beginnen mit' + Dativ (починати з)."
            }
          },
          {
            id: 28,
            label: "Lücke 28",
            correct: "a",
            options: [
              { key: "a", text: "mitteilten" },
              { key: "b", text: "mitteilen" },
              { key: "c", text: "mitgeteilt" }
            ],
            rule: {
              de: "Konjunktiv II Präteritum im 'wenn'-Satz: 'wenn Sie mir mitteilten' bzw. Höflichkeitsform.",
              en: "Polite subjunctive in conditional clause: 'wenn Sie mir mitteilten'.",
              tr: "'wenn' şart cümlesinde kibar Konjunktiv II yapısı.",
              ar: "صيغة الطلب المهذب في Konjunktiv II بعد 'wenn'.",
              uk: "Ввічлива форма умовного способу Konjunktiv II."
            }
          },
          {
            id: 29,
            label: "Lücke 29",
            correct: "b",
            options: [
              { key: "a", text: "mir" },
              { key: "b", text: "mich" },
              { key: "c", text: "sich" }
            ],
            rule: {
              de: "Reflexivpronomen Akkusativ bei 'sich freuen': 'ich würde mich sehr freuen'.",
              en: "Accusative reflexive pronoun with 'sich freuen': 'ich würde mich sehr freuen'.",
              tr: "'sich freuen' dönüşlü fiili birinci tekil şahısta Akkusativ 'mich' gerektirir.",
              ar: "ضمير انعكاسي منصوب Akkusativ مع الفعل 'sich freuen': 'ich würde mich freuen'.",
              uk: "Зворотний займенник Akkusativ для 'sich freuen': 'ich würde mich sehr freuen'."
            }
          },
          {
            id: 30,
            label: "Lücke 30",
            correct: "c",
            options: [
              { key: "a", text: "Grüße" },
              { key: "b", text: "Gruß" },
              { key: "c", text: "Grüßen" }
            ],
            rule: {
              de: "Dativ Plural Substantiv-Endung nach Präposition 'mit': 'Mit freundlichen Grüßen'.",
              en: "Dative plural noun ending: 'Mit freundlichen Grüßen'.",
              tr: "'mit' edatından sonra çoğul isim Dativ -n eki alır: 'Mit freundlichen Grüßen'.",
              ar: "لاحقة الجمع المجرور في ختام الرسالة: 'Mit freundlichen Grüßen'.",
              uk: "Закінчення давального відмінка множини: 'Mit freundlichen Grüßen'."
            }
          }
        ]
      },

      // TEIL 2: Informationstext / Hausordnung
      teil2: {
        id: "sb-4-teil2",
        title: {
          de: "Teil 2: Hausmitteilung zur Mülltrennung und Ruhezeiten",
          en: "Part 2: House Notice on Waste Separation and Quiet Hours",
          tr: "Bölüm 2: Bina Yönetimi Çöp Ayrıştırma ve Sessizlik Duyurusu",
          ar: "الجزء 2: تعميم سكني حول فرز النفايات وساعات الهدوء",
          uk: "Частина 2: Оголошення для мешканців щодо сортування сміття та тиші"
        },
        instruction: {
          de: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus dem Kasten (a–o) in die jeweilige Lücke (31–40) passt. Jedes Wort darf nur einmal verwendet werden.",
          en: "Read the following text and decide which word from the box (a–o) fits into each gap (31–40). Each word may only be used once.",
          tr: "Aşağıdaki metni okuyunuz ve kelime kutusundaki (a-o) hangi kelimenin her boşluğa (31-40) uyduğuna karar veriniz. Her kelime yalnızca bir kez kullanılabilir.",
          ar: "اقرأ النص التالي وحدد الكلمة من الصندوق (a-o) المناسبة لكل فراغ (31-40). يمكن استخدام كل كلمة مرة واحدة فقط.",
          uk: "Прочитайте наступний текст і визначте, яке слово з рамки (a–o) підходить для кожного пропуску (31–40). Кожне слово можна використати лише один раз."
        },
        wordBank: [
          { key: "a", word: "AUCH" },
          { key: "b", word: "BEI" },
          { key: "c", word: "DASS" },
          { key: "d", word: "DESHALB" },
          { key: "e", word: "DURCH" },
          { key: "f", word: "FÜR" },
          { key: "g", word: "JEDOCH" },
          { key: "h", word: "MIT" },
          { key: "i", word: "NACH" },
          { key: "j", word: "NICHT" },
          { key: "k", word: "ODER" },
          { key: "l", word: "SONDERN" },
          { key: "m", word: "TROTZDEM" },
          { key: "n", word: "WÄHREND" },
          { key: "o", word: "WENN" }
        ],
        textTemplate: "Liebe Hausbewohnerinnen und Hausbewohner,\n\naus aktuellem Anlass möchten wir Sie an die geltenden Regeln unserer Hausordnung erinnern. Diese Regeln sind {31} ein angenehmes und sicheres Zusammenleben unerlässlich.\n\nIn den letzten Wochen kam es vermehrt zu Beschwerden über Lärmbelästigungen {32} der gesetzlichen Ruhezeiten zwischen 22:00 Uhr und 07:00 Uhr. Bitte nehmen Sie Rücksicht auf Ihre Nachbarn. Das Musikhören in hoher Lautstärke ist zu diesen Zeiten {33} gestattet.\n\nEin weiteres wichtiges Thema ist die Mülltrennung. Bitte werfen Sie Plastikverpackungen nicht in den Restmüll, {34} in die dafür vorgesehenen gelben Tonnen im Innenhof. Falsch sortierter Müll führt zu hohen Zusatzkosten, die {35} alle Mieter getragen werden müssen.\n\n{36} bitten wir Sie eindringlich, die Tonnen sorgfältig zu befüllen. Sollten Sie Fragen zur korrekten Entsorgung haben, finden Sie {37} der Hausverwaltung einen detaillierten Leitfaden.\n\n{38} Sie Sperrmüll oder alte Möbel entsorgen möchten, melden Sie dies bitte rechtzeitig bei der Stadtreinigung an. Das Abstellen im Flur ist {39} streng verboten, da Rettungswege frei bleiben müssen.\n\nWir bedanken uns herzlich für Ihr Verständnis und Ihre Kooperation.\n\n{40} freundlichen Grüßen\nIhre Hausverwaltung",
        items: [
          {
            id: 31,
            label: "Lücke 31",
            correct: "f",
            correctWord: "FÜR",
            rule: {
              de: "Präposition 'für' + Akkusativ ('unerlässlich für ein angenehmes Zusammenleben').",
              en: "Preposition 'für' indicates purpose / necessity.",
              tr: "Amaç bildiren 'für' (huzurlu bir birlikte yaşam için zorunludur).",
              ar: "حرف جر يفيد الغاية: 'für' (ضروري من أجل تعايش مريح).",
              uk: "Прийменник 'für' зі значенням мети: 'für ein angenehmes Zusammenleben'."
            }
          },
          {
            id: 32,
            label: "Lücke 32",
            correct: "n",
            correctWord: "WÄHREND",
            rule: {
              de: "Temporale Präposition 'während' + Genitiv ('während der gesetzlichen Ruhezeiten').",
              en: "Temporal preposition 'während' + Genitive (during quiet hours).",
              tr: "Zaman bildiren 'während' + Genitiv (yasal dinlenme saatleri sırasında/esnasında).",
              ar: "حرف جر زمني مع حالة المضاف إليه: 'während' (خلال ساعات الهدوء القانونية).",
              uk: "Часовий прийменник 'während' + Genitiv (під час годин тиші)."
            }
          },
          {
            id: 33,
            label: "Lücke 33",
            correct: "j",
            correctWord: "NICHT",
            rule: {
              de: "Negationspartikel 'nicht': 'ist zu diesen Zeiten nicht gestattet' (nicht erlaubt).",
              en: "Negation: 'nicht gestattet' (not permitted).",
              tr: "Olumsuzluk eki: 'nicht gestattet' (izin verilmemektedir).",
              ar: "أداة النفي 'nicht': 'nicht gestattet' (غير مسموح به).",
              uk: "Заперечна частка 'nicht': 'nicht gestattet' (не дозволяється)."
            }
          },
          {
            id: 34,
            label: "Lücke 34",
            correct: "l",
            correctWord: "SONDERN",
            rule: {
              de: "Konnektor nach Negation: 'nicht in den Restmüll, sondern in die gelben Tonnen'.",
              en: "Adversative coordinator after negation: 'nicht ..., sondern ...' (not ... but rather ...).",
              tr: "Önceki olumsuzluğu düzelten zıtlık bağlacı: 'nicht ..., sondern ...' (oraya değil, aksine sarı bidonlara).",
              ar: "أداة الاستدراك بعد النفي: 'nicht ..., sondern ...' (ليس في القمامة العامة، بل في الحاويات الصفراء).",
              uk: "Протиставний сполучник після заперечення: 'nicht ..., sondern ...' (не ..., а ...)."
            }
          },
          {
            id: 35,
            label: "Lücke 35",
            correct: "e",
            correctWord: "DURCH",
            rule: {
              de: "Präposition 'durch' drückt den Urheber im Passiv aus: 'durch alle Mieter getragen werden'.",
              en: "Preposition 'durch' denotes agency in passive constructions.",
              tr: "Edilgen yapıda aracılık/özne belirten 'durch' (tüm kiracılar tarafından üstlenilmelidir).",
              ar: "حرف جر يفيد الفاعل في المبني للمجهول: 'durch' (من قِبل جميع المستأجرين).",
              uk: "Прийменник 'durch' у пасивному стані: 'через/усіма орендарями'."
            }
          },
          {
            id: 36,
            label: "Lücke 36",
            correct: "d",
            correctWord: "DESHALB",
            rule: {
              de: "Kausales Satzadverb mit Inversion (Position 1): 'Deshalb bitten wir Sie...'.",
              en: "Causal connector with verb inversion: 'Deshalb bitten wir Sie...'.",
              tr: "Neden-sonuç bildiren cümle zarfı: 'Deshalb bitten wir Sie...' (Bu nedenle sizden rica ediyoruz).",
              ar: "ظرف سببي في بداية الجملة مع تقديم الفعل: 'Deshalb bitten wir Sie...' (لذلك نرجو منكم).",
              uk: "Причиновий прислівник з інверсією: 'Deshalb bitten wir Sie...' (Тому ми просимо вас)."
            }
          },
          {
            id: 37,
            label: "Lücke 37",
            correct: "b",
            correctWord: "BEI",
            rule: {
              de: "Lokale Präposition 'bei' + Dativ für Ansprechpartner/Institutionen: 'bei der Hausverwaltung'.",
              en: "Preposition 'bei' + Dative for points of contact / management offices.",
              tr: "Kurum/yetkili kişi yanında bulunma edatı: 'bei der Hausverwaltung' (bina yönetiminde).",
              ar: "حرف جر مكاني للمؤسسات والجهات: 'bei der Hausverwaltung' (لدى إدارة المبنى).",
              uk: "Прийменник 'bei' для контакту з установою: 'bei der Hausverwaltung'."
            }
          },
          {
            id: 38,
            label: "Lücke 38",
            correct: "o",
            correctWord: "WENN",
            rule: {
              de: "Konditionale Subjunktion 'wenn' leitet die Bedingung ein ('Wenn Sie Sperrmüll entsorgen möchten...').",
              en: "Conditional conjunction 'wenn' introduces the condition (if you wish to dispose of bulky waste).",
              tr: "Koşul yan cümlesi başlatan 'wenn' (Eğer kaba atık atmak isterseniz...).",
              ar: "أداة الشرط 'wenn' (إذا كنتم ترغبون في التخلص من النفايات الكبيرة...).",
              uk: "Умовний сполучник 'wenn' (Якщо ви бажаєте викинути великогабаритне сміття...)."
            }
          },
          {
            id: 39,
            label: "Lücke 39",
            correct: "g",
            correctWord: "JEDOCH",
            rule: {
              de: "Adversatives Verbindungswort 'jedoch' schränkt ein: 'Das Abstellen im Flur ist jedoch streng verboten'.",
              en: "Adversative particle 'jedoch' (however) signals prohibition.",
              tr: "Kısıtlama ve zıtlık bildiren 'jedoch' (Koridorda bekletmek ise kesinlikle yasaktır).",
              ar: "أداة حصر واستدراك: 'jedoch' (غير أن وضعها في الممر ممنوع تماماً).",
              uk: "Протиставне слово 'jedoch' (проте/однак)."
            }
          },
          {
            id: 40,
            label: "Lücke 40",
            correct: "h",
            correctWord: "MIT",
            rule: {
              de: "Feste Grußformel am Briefende: 'Mit freundlichen Grüßen'.",
              en: "Standard letter closing formula: 'Mit freundlichen Grüßen'.",
              tr: "Standart mektup kapanış edatı: 'Mit freundlichen Grüßen'.",
              ar: "صيغة الختام المعتادة: 'Mit freundlichen Grüßen'.",
              uk: "Стандартна завершальна формула: 'Mit freundlichen Grüßen'."
            }
          }
        ]
      }
    },

    // ==========================================
    // SET 5: Arbeitswelt & Vorstellungsgespräch
    // ==========================================
    {
      id: "sb-set-5",
      title: {
        de: "Übungstest 5: Sprachbausteine (Teil 1 & Teil 2)",
        en: "Practice Test 5: Language Elements (Part 1 & Part 2)",
        tr: "Deneme Sınavı 5: Dil Öğeleri / Dilbilgisi Boşluk Doldurma",
        ar: "الاختبار التدريبي 5: تراكيب اللغة (الجزء 1 والجزء 2)",
        uk: "Тренувальний тест 5: Мовні елементи (Частина 1 та 2)"
      },
      timeEstimateMin: 20,
      badge: "telc B1 30 Punkte",

      // TEIL 1: E-Mail an den Abteilungsleiter
      teil1: {
        id: "sb-5-teil1",
        title: {
          de: "Teil 1: Antrag auf Bildungsurlaub",
          en: "Part 1: Educational Leave Request",
          tr: "Bölüm 1: Eğitim İzni ve Seminer Talebi",
          ar: "الجزء 1: طلب إجازة تعليمية",
          uk: "Частина 1: Заява на навчальну відпустку"
        },
        instruction: {
          de: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke (21–30) passt.",
          en: "Read the following text and decide which word (a, b or c) fits into each gap (21–30).",
          tr: "Aşağıdaki metni okuyunuz ve her boşluğa (21-30) hangi kelimenin (a, b veya c) uygun geldiğine karar veriniz.",
          ar: "اقرأ النص التالي وحدد الكلمة (a أو b أو c) المناسبة لكل فراغ (21-30).",
          uk: "Прочитайте наступний текст і визначте, яке слово (a, b або c) підходить для кожного пропуску (21–30)."
        },
        context: "Antrag auf gesetzlichen Bildungsurlaub und Kostenbeteiligung für ein Fachseminar",
        textTemplate: "Sehr geehrter Herr Direktor Lehmann,\n\nich schreibe Ihnen heute, {21} ich mich beruflich weiterqualifizieren möchte. Ich arbeite nun schon {22} drei Jahren sehr gerne in unserem Logistik-Team.\n\nUm meine Fachkenntnisse im Bereich digitales Warenwirtschaftssystem zu vertiefen, möchte ich gern {23} einem fünftägigen IHK-Seminar teilnehmen. Diese Weiterbildung ist in unserem Bundesland als gesetzlicher Bildungsurlaub anerkannt.\n\nIch habe mich bereits ausführlich {24} die genauen Seminarzeiten informiert. Die Fortbildung findet im nächsten Monat statt, {25} unserem Team in diesem Zeitraum keine personellen Engpässe drohen. Meine Kollegin Frau Meier hat sich bereit erklärt, meine Aufgaben während dieser Tage zu {26}.\n\nGibt es in unserem Betrieb die Möglichkeit, {27} die Seminargebühren bezuschusst werden? Gerne würde ich die erworbenen Kenntnisse anschließend in unserem Team präsentieren, {28} auch meine Kollegen davon profitieren.\n\nÜber ein kurzes Gespräch zu diesem Thema {29} ich mich sehr freuen.\n\nMit {30} Grüßen\nAndreas Novak",
        items: [
          {
            id: 21,
            label: "Lücke 21",
            correct: "b",
            options: [
              { key: "a", text: "denn" },
              { key: "b", text: "weil" },
              { key: "c", text: "deshalb" }
            ],
            rule: {
              de: "Nebensatz mit 'weil': Das konjugierte finite Verb ('möchte') steht am Satzende.",
              en: "Subordinate clause with 'weil': Finite modal verb 'möchte' is at the end.",
              tr: "Sebep yan cümlesi 'weil' çekimli modal fiili ('möchte') cümlenin en sonuna atar.",
              ar: "جملة سببية مع 'weil': ينتقل الفعل المصرف 'möchte' إلى نهاية الجملة.",
              uk: "Підрядне речення з 'weil': дієслово 'möchte' стоїть у кінці речення."
            }
          },
          {
            id: 22,
            label: "Lücke 22",
            correct: "c",
            options: [
              { key: "a", text: "vor" },
              { key: "b", text: "für" },
              { key: "c", text: "seit" }
            ],
            rule: {
              de: "Zeitraum, der in der Vergangenheit begann und andauert: 'seit drei Jahren'.",
              en: "Ongoing duration starting in the past: 'seit' + Dative.",
              tr: "Geçmişte başlayıp hala devam eden süre için 'seit' + Dativ (-den beri).",
              ar: "فترة زمنية بدأت في الماضي ومستمرة: 'seit' + Dativ.",
              uk: "Дія, що почалася в минулому і триває: 'seit' + Dativ."
            }
          },
          {
            id: 23,
            label: "Lücke 23",
            correct: "a",
            options: [
              { key: "a", text: "an" },
              { key: "b", text: "in" },
              { key: "c", text: "bei" }
            ],
            rule: {
              de: "Feste Verb-Präposition-Verbindung: 'teilnehmen an' + Dativ ('an einem Seminar').",
              en: "Fixed verb-preposition: 'teilnehmen an' + Dative.",
              tr: "Sabit fiil tamlaması: 'teilnehmen an' + Dativ (seminere katılmak).",
              ar: "ارتباط فعلي: 'teilnehmen an' + Dativ (المشاركة في ندوة).",
              uk: "Дієслівне сполучення: 'teilnehmen an' + Dativ (брати участь у семінарі)."
            }
          },
          {
            id: 24,
            label: "Lücke 24",
            correct: "b",
            options: [
              { key: "a", text: "für" },
              { key: "b", text: "über" },
              { key: "c", text: "von" }
            ],
            rule: {
              de: "Reflexives Verb mit Präposition: 'sich informieren über' + Akkusativ.",
              en: "Reflexive verb with preposition: 'sich informieren über' + Accusative.",
              tr: "Sabit dönüşlü fiil: 'sich informieren über' + Akkusativ (bir şey hakkında bilgi almak).",
              ar: "فعل انعكاسي مع حرف الجر: 'sich informieren über' + Akkusativ (الاستعلام عن).",
              uk: "Зворотне дієслово з прийменником: 'sich informieren über' + Akkusativ."
            }
          },
          {
            id: 25,
            label: "Lücke 25",
            correct: "a",
            options: [
              { key: "a", text: "sodass" },
              { key: "b", text: "obwohl" },
              { key: "c", text: "trotzdem" }
            ],
            rule: {
              de: "Konsekutive Konjunktion 'sodass' drückt die Folge aus (keine Engpässe drohen).",
              en: "Consecutive conjunction 'sodass' expresses the resulting consequence.",
              tr: "Sonuç bildiren yan cümle bağlacı: 'sodass' (böylelikle / bunun sonucunda).",
              ar: "أداة ربط للنتيجة: 'sodass' (بحيث / مما يعني عدم وجود نقص في الكادر).",
              uk: "Сполучник наслідку: 'sodass' (так що / завдяки чому)."
            }
          },
          {
            id: 26,
            label: "Lücke 26",
            correct: "b",
            options: [
              { key: "a", text: "übernehmen" },
              { key: "b", text: "übernehmen" },
              { key: "c", text: "übernommen" }
            ],
            rule: {
              de: "Infinitiv mit 'zu': 'bereit erklärt, meine Aufgaben zu übernehmen'.",
              en: "Infinitive clause with 'zu': 'zu übernehmen'.",
              tr: "İnfinitiv mit 'zu' yapısı: 'bereit erklärt, ... zu übernehmen' (görevleri devralmaya hazır olduğunu bildirdi).",
              ar: "صيغة المصدر مع zu: 'zu übernehmen'.",
              uk: "Інфінітивна конструкція з 'zu': 'zu übernehmen'."
            }
          },
          {
            id: 27,
            label: "Lücke 27",
            correct: "c",
            options: [
              { key: "a", text: "wenn" },
              { key: "b", text: "weil" },
              { key: "c", text: "dass" }
            ],
            rule: {
              de: "Substantiv-Ergänzungssatz mit 'dass': 'die Möglichkeit, dass...'.",
              en: "Complement clause with 'dass': 'die Möglichkeit, dass...'.",
              tr: "İsim tamamlama cümlesi: 'die Möglichkeit, dass...' (... olması ihtimali/olanağı).",
              ar: "جملة موصولة متممة للاسم: 'die Möglichkeit, dass...'.",
              uk: "Підрядне з'ясувальне зі сполучником 'dass'."
            }
          },
          {
            id: 28,
            label: "Lücke 28",
            correct: "a",
            options: [
              { key: "a", text: "damit" },
              { key: "b", text: "weil" },
              { key: "c", text: "denn" }
            ],
            rule: {
              de: "Finaler Nebensatz mit 'damit' bei Subjektwechsel (ich präsentiere -> Kollegen profitieren).",
              en: "Final purpose clause with 'damit' due to subject switch.",
              tr: "Farklı özneli amaç cümlesi 'damit' (-sin diye, faydalansınlar diye).",
              ar: "جملة غائية مع اختلاف الفاعل: 'damit' (لكي / حتى يستفيد زملائي أيضاً).",
              uk: "Цільове підрядне речення при зміні підмета: 'damit'."
            }
          },
          {
            id: 29,
            label: "Lücke 29",
            correct: "c",
            options: [
              { key: "a", text: "habe" },
              { key: "b", text: "werde" },
              { key: "c", text: "würde" }
            ],
            rule: {
              de: "Höflicher Konjunktiv II: 'würde ich mich sehr freuen'.",
              en: "Polite subjunctive II: 'würde ich mich sehr freuen'.",
              tr: "Kibar rica/sevinç kalıbı (Konjunktiv II): 'würde ich mich freuen'.",
              ar: "صيغة Konjunktiv II المهذبة: 'würde ich mich freuen'.",
              uk: "Ввічлива форма Konjunktiv II: 'würde ich mich sehr freuen'."
            }
          },
          {
            id: 30,
            label: "Lücke 30",
            correct: "b",
            options: [
              { key: "a", text: "freundliche" },
              { key: "b", text: "freundlichen" },
              { key: "c", text: "freundlicher" }
            ],
            rule: {
              de: "Adjektivendung im Dativ Plural nach 'mit': 'mit freundlichen Grüßen'.",
              en: "Dative plural adjective ending: -en in 'mit freundlichen Grüßen'.",
              tr: "'mit' edatından sonra çoğul sıfat tamlaması -en alır: 'mit freundlichen Grüßen'.",
              ar: "إعراب الصفة في المجرور الجمع: 'mit freundlichen Grüßen'.",
              uk: "Закінчення прикметника в давальному відмінку множини: -en."
            }
          }
        ]
      },

      // TEIL 2: Ratgebertext Vorstellungsgespräch
      teil2: {
        id: "sb-5-teil2",
        title: {
          de: "Teil 2: Tipps für das Vorstellungsgespräch",
          en: "Part 2: Job Interview Success Strategies",
          tr: "Bölüm 2: Almanya'da İş Görüşmesi Başarı Rehberi",
          ar: "الجزء 2: نصائح لاجتياز المقابلة الوظيفية في ألمانيا",
          uk: "Частина 2: Поради для успішної співбесіди в Німеччині"
        },
        instruction: {
          de: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus dem Kasten (a–o) in die jeweilige Lücke (31–40) passt. Jedes Wort darf nur einmal verwendet werden.",
          en: "Read the following text and decide which word from the box (a–o) fits into each gap (31–40). Each word may only be used once.",
          tr: "Aşağıdaki metni okuyunuz ve kelime kutusundaki (a-o) hangi kelimenin her boşluğa (31-40) uyduğuna karar veriniz. Her kelime yalnızca bir kez kullanılabilir.",
          ar: "اقرأ النص التالي وحدد الكلمة من الصندوق (a-o) المناسبة لكل فراغ (31-40). يمكن استخدام كل كلمة مرة واحدة فقط.",
          uk: "Прочитайте наступний текст і визначте, яке слово з рамки (a–o) підходить для кожного пропуску (31–40). Кожне слово можна використати лише один раз."
        },
        wordBank: [
          { key: "a", word: "ABER" },
          { key: "b", word: "AUF" },
          { key: "c", word: "AUS" },
          { key: "d", word: "DAHER" },
          { key: "e", word: "DAMIT" },
          { key: "f", word: "DASS" },
          { key: "g", word: "DENN" },
          { key: "h", word: "IN" },
          { key: "i", word: "NACH" },
          { key: "j", word: "OHNE" },
          { key: "k", word: "SEIT" },
          { key: "l", word: "TROTZDEM" },
          { key: "m", word: "ÜBER" },
          { key: "n", word: "UM" },
          { key: "o", word: "VOR" }
        ],
        textTemplate: "Ein Vorstellungsgespräch ist für viele Bewerber eine aufregende Situation. Mit einer gezielten Vorbereitung können Sie Ihre Nervosität deutlich senken.\n\nBereits einige Tage {31} dem Termin sollten Sie sich ausführlich {32} das Unternehmen und seine Produkte informieren. Wer die Firmenphilosophie kennt, hinterlässt einen kompetenten Eindruck.\n\nAchten Sie am Tag des Gesprächs ganz besonders {33} pünktliches Erscheinen. Planen Sie ausreichend Zeit für die Anfahrt ein, {34} Sie auch bei Stau oder Zugausfällen rechtzeitig ankommen.\n\nIm Gespräch selbst ist ein sicheres, {35} dennoch bescheidenes Auftreten von Vorteil. Hören Sie den Fragen aufmerksam zu. {36} können Sie präzise und überzeugend antworten, {37} den Faden zu verlieren.\n\n{38} Deutschland ist es zudem üblich, am Ende eigene Fragen zur Arbeitsorganisation oder Einarbeitung zu stellen.\n\nEin paar Tage {39} dem Vorstellungsgespräch empfiehlt sich eine kurze, freundliche Dankes-E-Mail, {40} das signalisiert echtes Interesse an der offenen Position.",
        items: [
          {
            id: 31,
            label: "Lücke 31",
            correct: "o",
            correctWord: "VOR",
            rule: {
              de: "Temporale Präposition 'vor' + Dativ ('vor dem Termin').",
              en: "Temporal preposition 'vor' + Dative (before the appointment).",
              tr: "Zaman edatı: 'vor dem Termin' (randevudan önce).",
              ar: "حرف جر زمني: 'vor dem Termin' (قبل الموعد).",
              uk: "Часовий прийменник: 'vor dem Termin' (перед зустріччю)."
            }
          },
          {
            id: 32,
            label: "Lücke 32",
            correct: "m",
            correctWord: "ÜBER",
            rule: {
              de: "Präpositionalobjekt: 'sich informieren über' + Akkusativ ('über das Unternehmen').",
              en: "Fixed preposition: 'sich informieren über' (about the company).",
              tr: "Sabit edat: 'sich informieren über' (şirket hakkında bilgi edinmek).",
              ar: "حرف جر مرتبط بالفعل: 'sich informieren über' (عن الشركة).",
              uk: "Дієслівне керування: 'sich informieren über' (про компанію)."
            }
          },
          {
            id: 33,
            label: "Lücke 33",
            correct: "b",
            correctWord: "AUF",
            rule: {
              de: "Feste Verb-Präposition-Verbindung: 'achten auf' + Akkusativ ('achten Sie auf pünktliches Erscheinen').",
              en: "Fixed idiom: 'achten auf' + Accusative (pay attention to punctuality).",
              tr: "Sabit tamlama: 'achten auf' + Akkusativ (dakikliğe dikkat etmek).",
              ar: "ارتباط فعلي: 'achten auf' (الحرص على الحضور في الموعد).",
              uk: "Стале сполучення: 'achten auf' (звертати увагу на пунктуальність)."
            }
          },
          {
            id: 34,
            label: "Lücke 34",
            correct: "e",
            correctWord: "DAMIT",
            rule: {
              de: "Finaler Konnektor 'damit' drückt den Zweck aus ('damit Sie rechtzeitig ankommen').",
              en: "Final purpose subjunction 'damit' (so that you arrive on time).",
              tr: "Amaç bildiren bağlaç: 'damit' (vaktinde varabilmeniz amacıyla/için).",
              ar: "أداة ربط تفيد الغاية: 'damit' (لكي تصلوا في الوقت المحدد).",
              uk: "Цільовий сполучник: 'damit' (щоб ви прибули вчасно)."
            }
          },
          {
            id: 35,
            label: "Lücke 35",
            correct: "a",
            correctWord: "ABER",
            rule: {
              de: "Adversative Konjunktion 'aber' (sicher, aber dennoch bescheiden).",
              en: "Adversative coordinator 'aber' (confident, but still humble).",
              tr: "Zıtlık bağlacı 'aber' (özgüvenli ancak yine de mütevazı).",
              ar: "حرف عطف للاستدراك: 'aber' (واثق ولكن متواضع).",
              uk: "Протиставний сполучник 'aber' (впевнено, але стримано)."
            }
          },
          {
            id: 36,
            label: "Lücke 36",
            correct: "d",
            correctWord: "DAHER",
            rule: {
              de: "Kausales Adverb 'daher' mit Inversion ('Daher können Sie präzise antworten').",
              en: "Causal adverb 'daher' with verb inversion (therefore you can answer precisely).",
              tr: "Neden-sonuç bağlacı 'daher' (Bu sayede/Bu nedenle kesin cevap verebilirsiniz).",
              ar: "ظرف سببي: 'daher' (لذلك يمكنكم الإجابة بدقة).",
              uk: "Причиновий прислівник: 'daher' (тому ви можете відповісти точно)."
            }
          },
          {
            id: 37,
            label: "Lücke 37",
            correct: "j",
            correctWord: "OHNE",
            rule: {
              de: "Infinitivkonstruktion mit 'ohne ... zu': 'ohne den Faden zu verlieren'.",
              en: "Infinitive clause: 'ohne ... zu' (without losing the thread).",
              tr: "'ohne ... zu' kalıbı (konunun ipini kaçırmadan).",
              ar: "صيغة المصدر المنفي: 'ohne ... zu' (دون أن تفقد تسلسل الأفكار).",
              uk: "Інфінітивна конструкція: 'ohne ... zu' (не втрачаючи нитки розмови)."
            }
          },
          {
            id: 38,
            label: "Lücke 38",
            correct: "h",
            correctWord: "IN",
            rule: {
              de: "Lokale Präposition 'in' für Länder ('In Deutschland ist es üblich').",
              en: "Preposition 'in' for country location.",
              tr: "Yer bildiren 'in' (Almanya'da yaygındır/adettendir).",
              ar: "حرف جر للمكان: 'in Deutschland' (في ألمانيا).",
              uk: "Прийменник місця: 'in Deutschland' (у Німеччині)."
            }
          },
          {
            id: 39,
            label: "Lücke 39",
            correct: "i",
            correctWord: "NACH",
            rule: {
              de: "Temporale Präposition 'nach' + Dativ ('nach dem Vorstellungsgespräch').",
              en: "Temporal preposition 'nach' + Dative (after the interview).",
              tr: "Zaman edatı: 'nach dem Vorstellungsgespräch' (mülakattan sonra).",
              ar: "حرف جر زمني: 'nach dem Vorstellungsgespräch' (بعد المقابلة).",
              uk: "Часовий прийменник: 'nach dem Vorstellungsgespräch' (після співбесіди)."
            }
          },
          {
            id: 40,
            label: "Lücke 40",
            correct: "g",
            correctWord: "DENN",
            rule: {
              de: "Kausale Konjunktion 'denn' (Position 0): 'denn das signalisiert echtes Interesse'.",
              en: "Causal coordinator 'denn' introducing explanation without inversion.",
              tr: "Açıklayıcı sebep bağlacı: 'denn' (çünkü bu, açık pozisyona gerçek ilginizi gösterir).",
              ar: "حرف عطف سببي: 'denn' (لأن ذلك يوضح الاهتمام الحقيقي بالمنصب).",
              uk: "Сурядний сполучник причини: 'denn' (адже це свідчить про щирий інтерес)."
            }
          }
        ]
      }
    }
  ];

})();
