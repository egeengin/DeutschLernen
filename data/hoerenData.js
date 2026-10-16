/**
 * DeutschLernen - telc Deutsch B1 Hörverstehen (Listening Comprehension) Dataset
 * Authentic telc B1 Examination Format (75 Points Total • 30 Minutes):
 * - Teil 1: 5 Daily Announcements (Items 41-45 • 25 Pts) — Played ONCE only (Richtig / Falsch)
 * - Teil 2: 1 Radio Interview / Discussion (Items 46-55 • 25 Pts) — Played TWICE (Richtig / Falsch)
 * - Teil 3: 5 Phone / Voice-Mail Messages (Items 56-60 • 25 Pts) — Played TWICE (A / B / C)
 *
 * Full Quad-Lingual Parity: German (DE), English (EN), Turkish (TR), Arabic (AR), Ukrainian (UK).
 */

(function() {
  'use strict';

  window.HOEREN_DATASET = [
    {
      id: "hoer-test-1",
      title: {
        de: "Übungstest 1: Hörverstehen (Teile 1–3)",
        en: "Practice Test 1: Listening Comprehension (Parts 1–3)",
        tr: "Deneme Sınavı 1: Dinlediğini Anlama (Bölüm 1–3)",
        ar: "الاختبار التدريبي 1: فهم المسموع (الأجزاء 1–3)",
        uk: "Тренувальний тест 1: Аудіювання (Частини 1–3)"
      },
      timeEstimateMin: 30,
      badge: "telc B1 75 Punkte",

      // ==========================================
      // TEIL 1: 5 KÜRZERE DURCHSAGEN (Einmal hören)
      // ==========================================
      teil1: {
        id: "h1-teil1",
        partName: {
          de: "Teil 1: Durchsagen und Meldungen",
          en: "Part 1: Announcements and Reports",
          tr: "Bölüm 1: Anonslar ve Kısa Duyurular",
          ar: "الجزء 1: الإعلانات والبلاغات الصوتية",
          uk: "Частина 1: Оголошення та повідомлення"
        },
        instruction: {
          de: "Sie hören fünf kurze Texte. Sie hören jeden Text nur einmal. Entscheiden Sie beim Hören, ob die Aussagen 41 bis 45 richtig oder falsch sind.",
          en: "You will hear five short texts. You will hear each text only once. Decide while listening whether statements 41 to 45 are true or false.",
          tr: "Beş kısa metin dinleyeceksiniz. Her metni sadece bir kez dinleyeceksiniz. Dinlerken 41'den 45'e kadar olan ifadelerin doğru mu (richtig) yoksa yanlış mı (falsch) olduğuna karar veriniz.",
          ar: "ستستمع إلى خمسة نصوص قصيرة. ستستمع إلى كل نص مرة واحدة فقط. حدد أثناء الاستماع ما إذا كانت العبارات من 41 إلى 45 صحيحة أم خاطئة.",
          uk: "Ви почуєте п'ять коротких текстів. Кожен текст прозвучить лише один раз. Визначте, чи є твердження 41–45 правильними чи неправильними."
        },
        maxPlays: 1,
        items: [
          {
            id: 41,
            title: "Durchsage 1: Hauptbahnhof",
            audioText: "Achtung an Gleis 7: Der Intercity-Express 584 nach Hamburg über Hannover mit planmäßiger Abfahrt um 14:28 Uhr fällt heute wegen einer technischen Störung an der Oberleitung aus. Fahrgäste nach Hamburg nutzen bitte den Regional-Express um 14:45 Uhr von Gleis 4. Ihre Fahrkarten gelten ohne Aufpreis auch für alle nachfolgenden Nahverkehrszüge.",
            statement: {
              de: "Der Zug nach Hamburg fährt heute von einem anderen Gleis ab.",
              en: "The train to Hamburg departs from a different platform today.",
              tr: "Hamburg'a gidecek tren bugün başka bir perondan hareket ediyor.",
              ar: "القطار المتجه إلى هامبورغ يغادر اليوم من رصيف آخر.",
              uk: "Поїзд до Гамбурга сьогодні вирушає з іншої колії."
            },
            correct: "falsch",
            evidence: "Der Zug fällt heute wegen einer technischen Störung aus.",
            explanation: {
              de: "Falsch: Der ICE fährt nicht von einem anderen Gleis ab, sondern fällt komplett aus ('fällt heute wegen einer technischen Störung ... aus'). Fahrgäste müssen auf einen Regional-Express umsteigen.",
              en: "False: The ICE does not depart from another track; it is cancelled entirely ('fällt ... aus'). Passengers must switch to a regional train.",
              tr: "Yanlış: Tren başka perondan kalkmıyor, teknik arıza nedeniyle tamamen iptal edilmiştir ('fällt aus'). Yolcuların başka bir bölgesel trene binmesi istenmektedir.",
              ar: "خطأ: القطار لم يغير رصيفه بل تم إلغاء رحلته بالكامل بسبب عطل فني. ويجب على الركاب استخدام قطار إقليمي آخر.",
              uk: "Неправильно: Поїзд не вирушає з іншої колії, а взагалі скасований через несправність. Пасажирам слід скористатися регіональним потягом."
            }
          },
          {
            id: 42,
            title: "Durchsage 2: Kaufhaus Galleria",
            audioText: "Verehrte Kundinnen und Kunden, besuchen Sie heute unsere Frühlingsaktion in der Haushaltswarenabteilung im dritten Obergeschoss. Nur heute erhalten Sie beim Kauf von zwei Küchengeräten das preiswertere Gerät zum halben Preis. Das Angebot gilt bis Geschäftsschluss um 20 Uhr. Wir wünschen Ihnen einen angenehmen Einkauf!",
            statement: {
              de: "Man bekommt jedes Küchengerät heute um 50 Prozent billiger.",
              en: "You can get every kitchen appliance 50 percent cheaper today.",
              tr: "Bugün her mutfak aleti yüzde 50 indirimle alınabilir.",
              ar: "يمكن للمرء اليوم الحصول على كل جهاز مطبخ بخصم 50 بالمائة.",
              uk: "Сьогодні кожен кухонний прилад можна купити на 50 відсотків дешевше."
            },
            correct: "falsch",
            evidence: "...beim Kauf von zwei Küchengeräten das preiswertere Gerät zum halben Preis.",
            explanation: {
              de: "Falsch: Nicht jedes Gerät ist um 50% reduziert, sondern nur das preiswertere Gerät beim gleichzeitigen Kauf von zwei Geräten.",
              en: "False: Not every appliance is discounted by 50%; only the cheaper one when buying two appliances together.",
              tr: "Yanlış: Her cihaz değil; yalnızca iki cihaz birden alındığında daha ucuz olanı yarı fiyatına (%50 indirimli) verilmektedir.",
              ar: "خطأ: ليس كل جهاز مخصوماً بنسبة 50%، بل الجهاز الأرخص فقط عند شراء جهازين معاً.",
              uk: "Неправильно: Знижка діє не на кожен прилад, а лише на дешевший за умови купівлі двох приладів одночасно."
            }
          },
          {
            id: 43,
            title: "Durchsage 3: Radiowetter & Verkehr",
            audioText: "Und nun zum Verkehrsservice auf Bayern 3: Auf der Autobahn A9 München Richtung Nürnberg kommt es zwischen Denkendorf und Kinding zu stockendem Verkehr nach einem leichten Unfall. Die Bergungsarbeiten dauern noch an, bitte rechnen Sie mit mindestens 30 Minuten Zeitverlust. Umfahrungsempfehlung: Verlassen Sie die Autobahn an der Anschlussstelle Lenting.",
            statement: {
              de: "Autofahrer auf der A9 in Richtung Nürnberg müssen mit Wartezeiten rechnen.",
              en: "Drivers on the A9 heading toward Nuremberg should expect delays.",
              tr: "A9 otoyolunda Nürnberg yönüne giden sürücüler gecikmelerle karşılaşacaktır.",
              ar: "يجب على السائقين على الطريق السريع A9 باتجاه نورمبرغ توقع تأخيرات.",
              uk: "Водіям на трасі A9 у напрямку Нюрнберга слід очікувати затримок."
            },
            correct: "richtig",
            evidence: "...bitte rechnen Sie mit mindestens 30 Minuten Zeitverlust.",
            explanation: {
              de: "Richtig: Der Verkehrsservice warnt vor stockendem Verkehr und empfiehlt, mit mindestens 30 Minuten Zeitverlust zu rechnen.",
              en: "True: Traffic news explicitly warns about heavy traffic and at least 30 minutes of delay.",
              tr: "Doğru: Trafik bülteninde en az 30 dakikalık zaman kaybı ve bekleme süresi hesaplanması gerektiği açıkça belirtilmektedir.",
              ar: "صحيح: تحذر النشرة المرورية من تباطؤ حركة السير وتطلب توقع تأخير لا يقل عن 30 دقيقة.",
              uk: "Правильно: Дорожня служба попереджає про затримку щонайменше на 30 хвилин через аварію."
            }
          },
          {
            id: 44,
            title: "Durchsage 4: Supermarkt",
            audioText: "Liebe Kundschaft, an der Kasse 4 öffnet soeben eine zusätzliche Bedienung für Sie. Wenn Sie bargeldlos mit EC-Karte oder Smartphone bezahlen möchten, können Sie auch unsere vier modernen Self-Checkout-Terminals im Ausgangsbereich ohne Wartezeit nutzen.",
            statement: {
              de: "An den Self-Checkout-Kassen kann man nur mit Karte oder Smartphone bezahlen.",
              en: "At the self-checkout terminals you can only pay with card or smartphone.",
              tr: "Self-servis kasalarda yalnızca kartla veya akıllı telefonla ödeme yapılabilir.",
              ar: "في أجهزة الدفع الذاتي يمكن الدفع فقط بالبطاقة أو الهاتف الذكي.",
              uk: "У терміналах самообслуговування можна розрахуватися тільки карткою або смартфоном."
            },
            correct: "richtig",
            evidence: "Wenn Sie bargeldlos mit EC-Karte oder Smartphone bezahlen möchten, können Sie auch unsere vier modernen Self-Checkout-Terminals ... nutzen.",
            explanation: {
              de: "Richtig: Die Durchsage betont die 'bargeldlose' Bezahlung mit EC-Karte oder Smartphone an den Terminals.",
              en: "True: The announcement specifically introduces the self-checkout terminals for cashless payment via debit card or phone.",
              tr: "Doğru: Self-servis kasaların nakitsiz (kart veya akıllı telefonla) ödeme yapmak isteyenler için olduğu açıkça ifade edilmektedir.",
              ar: "صحيح: أعلن المتجر أن محطات الدفع الذاتي مخصصة للدفع غير النقدي بواسطة البطاقة أو الهاتف.",
              uk: "Правильно: Оголошення зазначає, що термінали самообслуговування призначені для безготівкового розрахунку карткою або смартфоном."
            }
          },
          {
            id: 45,
            title: "Durchsage 5: Flughafen München",
            audioText: "Letzter Aufruf für Fluggäste der Lufthansa nach Madrid, Flugnummer LH 1802. Bitte begeben Sie sich unverzüglich zum Flugsteig G14. Das Boarding wird in wenigen Minuten beendet. Passagiere mit Handgepäck werden gebeten, ihre Bordkarten griffbereit zu halten.",
            statement: {
              de: "Die Passagiere nach Madrid haben noch viel Zeit bis zum Abflug.",
              en: "Passengers to Madrid still have plenty of time until departure.",
              tr: "Madrid yolcularının uçağın kalkışına kadar henüz bolca vakti vardır.",
              ar: "لدى المسافرين إلى مدريد متسع كبير من الوقت قبل الإقلاع.",
              uk: "Пасажири до Мадрида мають ще багато часу до вильоту."
            },
            correct: "falsch",
            evidence: "Letzter Aufruf ... Bitte begeben Sie sich unverzüglich zum Flugsteig G14. Das Boarding wird in wenigen Minuten beendet.",
            explanation: {
              de: "Falsch: Es handelt sich um den 'letzten Aufruf' ('unverzüglich', 'in wenigen Minuten beendet'), die Passagiere müssen sich also sehr beeilen.",
              en: "False: This is the 'final call', and boarding closes in a few minutes, so passengers must hurry immediately.",
              tr: "Yanlış: 'Son çağrı' (Letzter Aufruf) yapılmakta ve biniş kapısının birkaç dakika içinde kapanacağı söylenmektedir; bol zaman yoktur.",
              ar: "خطأ: هذا هو النداء الأخير ويجب على الركاب التوجه فوراً لأن الصعود للطائرة يغلق خلال دقائق معدودة.",
              uk: "Неправильно: Це останній виклик ('Letzter Aufruf'), посадка завершується за лічені хвилини, часу обмаль."
            }
          }
        ]
      },

      // ==========================================
      // TEIL 2: RADIOINTERVIEW (Zweimal hören)
      // ==========================================
      teil2: {
        id: "h1-teil2",
        partName: {
          de: "Teil 2: Radio-Interview",
          en: "Part 2: Radio Interview",
          tr: "Bölüm 2: Radyo Röportajı",
          ar: "الجزء 2: مقابلة إذاعية",
          uk: "Частина 2: Радіоінтерв'ю"
        },
        instruction: {
          de: "Sie hören ein Rundfunk-Interview. Sie hören diesen Text zweimal. Entscheiden Sie beim Hören, ob die Aussagen 46 bis 55 richtig oder falsch sind.",
          en: "You will hear a radio interview. You will hear this text twice. Decide while listening whether statements 46 to 55 are true or false.",
          tr: "Bir radyo röportajı dinleyeceksiniz. Bu metni iki kez dinleyeceksiniz. Dinlerken 46'dan 55'e kadar olan ifadelerin doğru mu (richtig) yoksa yanlış mı (falsch) olduğuna karar veriniz.",
          ar: "ستستمع إلى مقابلة إذاعية. ستستمع إلى هذا النص مرتين. حدد أثناء الاستماع ما إذا كانت العبارات من 46 إلى 55 صحيحة أم خاطئة.",
          uk: "Ви почуєте радіоінтерв'ю. Текст прозвучить двічі. Визначте, чи є твердження 46–55 правильними чи неправильними."
        },
        maxPlays: 2,
        context: "Interview mit Lisa Berger über das Leben und Arbeiten im Mehrgenerationenhaus",
        audioText: "Moderator: Herzlich willkommen bei Radio Kultur. Heute sprechen wir mit Lisa Berger. Frau Berger ist vor drei Jahren mit ihrer Familie in ein Mehrgenerationenhaus in Freiburg gezogen. Frau Berger, wie kam es zu dieser Entscheidung?\n\nLisa Berger: Mein Mann und ich haben beide Vollzeit gearbeitet, und unsere beiden Töchter waren damals noch im Kindergartenalter. Wir hatten oft großen Stress, Familie und Beruf unter einen Hut zu bekommen, weil unsere Großeltern hunderte Kilometer entfernt wohnen. Im Mehrgenerationenhaus leben Familien, Alleinstehende und ältere Senioren unter einem Dach. Jeder hat seine eigene abgeschlossene Wohnung, aber es gibt viele Gemeinschaftsräume wie die Werkstatt, den Garten und die große Gemeinschaftsküche.\n\nModerator: Klingt idyllisch. Doch gibt es nicht auch oft Konflikte bei so vielen unterschiedlichen Generationen?\n\nLisa Berger: Natürlich ist das Zusammenleben nicht immer konfliktfrei. Zum Beispiel gab es anfangs Diskussionen über die Mittagsruhe im Garten oder über den Putzplan für das Treppenhaus. Aber wir haben eine feste Regel: Einmal im Monat treffen sich alle Bewohner zur Hausversammlung. Dort wird offen gesprochen und gemeinsam abgestimmt. Das verhindert, dass sich Frust anstaut.\n\nModerator: Was schätzen Sie im Alltag am meisten?\n\nLisa Berger: Das gegenseitige Geben und Nehmen! Unsere ältere Nachbarin, Frau Sommer, backt oft mit den Kindern oder liest ihnen vor, wenn wir einen langen Arbeitstag haben. Im Gegenzug erledigt mein Mann für sie die schweren Einkäufe oder repariert ihren Computer. Das ist keine bezahlte Dienstleistung, sondern echte Nachbarschaftshilfe.\n\nModerator: Kann denn jeder einfach in ein solches Haus einziehen?\n\nLisa Berger: Nicht ohne Weiteres. Die Nachfrage ist riesig. Bevor man einziehen kann, gibt es mehrere Kennenlerntreffen und Probewochenenden. Es muss menschlich passen und man muss bereit sein, sich aktiv einzubringen. Wer nur eine anonyme, billige Wohnung sucht, wird sich hier nicht wohlfühlen.",
        items: [
          {
            id: 46,
            statement: {
              de: "Frau Berger wohnt schon seit über zehn Jahren im Mehrgenerationenhaus.",
              en: "Ms. Berger has lived in the multi-generational house for over ten years.",
              tr: "Bayan Berger on yılı aşkın süredir çok kuşaklı evde oturmaktadır.",
              ar: "تعيش السيدة بيرغر في منزل الأجيال المتعددة منذ أكثر من عشر سنوات.",
              uk: "Пані Бергер живе в будинку поколінь уже понад десять років."
            },
            correct: "falsch",
            evidence: "Frau Berger ist vor drei Jahren mit ihrer Familie ... gezogen.",
            explanation: {
              de: "Falsch: Sie ist erst vor drei Jahren eingezogen, nicht vor zehn Jahren.",
              en: "False: She moved in three years ago, not ten years ago.",
              tr: "Yanlış: 10 yıldır değil, üç yıl önce ailesiyle birlikte taşınmıştır.",
              ar: "خطأ: لقد انتقلت للعيش هناك قبل ثلاث سنوات فقط وليس قبل عشر سنوات.",
              uk: "Неправильно: Вона переїхала туди лише три роки тому, а не понад десять."
            }
          },
          {
            id: 47,
            statement: {
              de: "Die Großeltern von Frau Bergers Kindern wohnen in derselben Stadt.",
              en: "The grandparents of Ms. Berger's children live in the same city.",
              tr: "Bayan Berger'in çocuklarının büyükanne ve büyükbabası aynı şehirde yaşamaktadır.",
              ar: "يعيش أجداد أطفال السيدة بيرغر في نفس المدينة.",
              uk: "Дідусь і бабуся дітей пані Бергер живуть у тому самому місті."
            },
            correct: "falsch",
            evidence: "...weil unsere Großeltern hunderte Kilometer entfernt wohnen.",
            explanation: {
              de: "Falsch: Die Großeltern wohnen hunderte Kilometer entfernt, weshalb die Familie Unterstützung im Alltag brauchte.",
              en: "False: The grandparents live hundreds of kilometers away.",
              tr: "Yanlış: Büyükanne ve büyükbabalar yüzlerce kilometre uzakta oturmaktadır.",
              ar: "خطأ: الأجداد يعيشون على بعد مئات الكيلومترات وليس في نفس المدينة.",
              uk: "Неправильно: Бабуся й дідусь живуть за сотні кілометрів."
            }
          },
          {
            id: 48,
            statement: {
              de: "Alle Bewohner des Hauses teilen sich ein einziges großes Badezimmer.",
              en: "All residents of the house share a single large bathroom.",
              tr: "Evdeki tüm sakinler tek bir büyük banyoyu ortak kullanmaktadır.",
              ar: "يشترك جميع سكان المنزل في حمام واحد كبير.",
              uk: "Усі мешканці будинку користуються однією спільною ванною кімнатою."
            },
            correct: "falsch",
            evidence: "Jeder hat seine eigene abgeschlossene Wohnung...",
            explanation: {
              de: "Falsch: Jeder Bewohner hat seine eigene komplett abgeschlossene Wohnung. Nur Garten, Küche und Werkstatt werden geteilt.",
              en: "False: Everyone has their own fully self-contained apartment.",
              tr: "Yanlış: Herkesin kendine ait kapalı, bağımsız dairesi vardır; yalnızca ortak alanlar (bahçe, atölye) paylaşılır.",
              ar: "خطأ: لكل ساكن شقته الخاصة المستقلة، وتقتصر المشاركة على الحديقة والمطبخ المشترك.",
              uk: "Неправильно: Кожен має власну окрему квартиру; спільними є лише сад і майстерня."
            }
          },
          {
            id: 49,
            statement: {
              de: "Es gab im Haus bisher noch nie Meinungsverschiedenheiten oder Streit.",
              en: "There have never been disagreements or disputes in the house so far.",
              tr: "Evde bugüne kadar hiçbir fikir ayrılığı veya anlaşmazlık yaşanmamıştır.",
              ar: "لم تحدث أي خلافات أو نزاعات في المنزل حتى الآن.",
              uk: "У будинку досі ніколи не виникало суперечок чи непорозумінь."
            },
            correct: "falsch",
            evidence: "Natürlich ist das Zusammenleben nicht immer konfliktfrei...",
            explanation: {
              de: "Falsch: Frau Berger bestätigt offen, dass es anfangs Diskussionen über Mittagsruhe und den Putzplan gab.",
              en: "False: She explicitly mentions that there were conflicts regarding quiet hours and cleaning schedules.",
              tr: "Yanlış: Başlangıçta öğle istirahati ve merdiven temizlik planı konusunda tartışmalar yaşandığını belirtmektedir.",
              ar: "خطأ: أكدت السيدة بيرغر حدوث نقاشات وخلافات سابقة حول الهدوء وجدول التنظيف.",
              uk: "Неправильно: Були суперечки щодо тиші в обідній час та прибирання під'їзду."
            }
          },
          {
            id: 50,
            statement: {
              de: "Die Hausbewohner halten einmal im Monat eine gemeinsame Versammlung ab.",
              en: "The residents hold a joint meeting once a month.",
              tr: "Bina sakinleri ayda bir kez ortak bina toplantısı yapmaktadır.",
              ar: "يعقد سكان المبنى اجتماعاً مشتركاً مرة واحدة شهرياً.",
              uk: "Мешканці будинку проводять спільні збори один раз на місяць."
            },
            correct: "richtig",
            evidence: "Einmal im Monat treffen sich alle Bewohner zur Hausversammlung.",
            explanation: {
              de: "Richtig: Ein fester monatlicher Termin sorgt dafür, dass Probleme direkt besprochen und abgestimmt werden.",
              en: "True: All residents meet once a month to discuss matters openly.",
              tr: "Doğru: Ayda bir kez tüm sakinlerin katıldığı toplantıda sorunlar konuşulup oylanmaktadır.",
              ar: "صحيح: يجتمع جميع السكان مرة شهرياً لمناقشة الأمور والتصويت عليها.",
              uk: "Правильно: Раз на місяць мешканці збираються на збори для відкритого обговорення."
            }
          },
          {
            id: 51,
            statement: {
              de: "Frau Sommer verlangt Geld für das Vorlesen und Babysitten der Kinder.",
              en: "Ms. Sommer charges money for reading to and babysitting the children.",
              tr: "Bayan Sommer çocuklara kitap okumak ve bakıcılık yapmak için para almaktadır.",
              ar: "تطلب السيدة زومر مالاً مقابل القراءة للأطفال ومجالستهم.",
              uk: "Пані Зоммер бере гроші за читання дітям та догляд за ними."
            },
            correct: "falsch",
            evidence: "Das ist keine bezahlte Dienstleistung, sondern echte Nachbarschaftshilfe.",
            explanation: {
              de: "Falsch: Es ist unbezahlte, freiwillige Nachbarschaftshilfe auf Gegenseitigkeit.",
              en: "False: It is explicitly unpaid, genuine mutual neighborhood help.",
              tr: "Yanlış: Ücretli bir hizmet değil, karşılıklı gerçek komşuluk dayanışmasıdır ('keine bezahlte Dienstleistung').",
              ar: "خطأ: هذه ليست خدمة مدفوعة، بل مساعدة جيرة حقيقية وتطوعية متبادلة.",
              uk: "Неправильно: Це безкоштовна сусідська взаємодопомога, а не платна послуга."
            }
          },
          {
            id: 52,
            statement: {
              de: "Herr Berger hilft der älteren Nachbarin bei Einkäufen und technischen Problemen.",
              en: "Mr. Berger helps the elderly neighbor with grocery shopping and tech problems.",
              tr: "Bay Berger yaşlı komşuya ağır alışverişlerde ve bilgisayar tamirinde yardım etmektedir.",
              ar: "يساعد السيد بيرغر الجارة المسنة في التسوق وحل المشاكل التقنية.",
              uk: "Пан Бергер допомагає літній сусідці з покупками та налаштуванням комп'ютера."
            },
            correct: "richtig",
            evidence: "Im Gegenzug erledigt mein Mann für sie die schweren Einkäufe oder repariert ihren Computer.",
            explanation: {
              de: "Richtig: Als Gegenleistung unterstützt der Ehemann Frau Sommer bei schweren Einkäufen und Computerfragen.",
              en: "True: In return, her husband takes care of heavy shopping and repairs her computer.",
              tr: "Doğru: Karşılık olarak Bay Berger komşunun ağır alışverişlerini taşımakta ve bilgisayarını onarmaktadır.",
              ar: "صحيح: يقدم زوجها المساعدة للجارة في حمل المشتريات الثقيلة وإصلاح حاسوبها.",
              uk: "Правильно: Натомість чоловік пані Бергер допомагає сусідці з покупками та комп'ютером."
            }
          },
          {
            id: 53,
            statement: {
              de: "Es gibt fast keine freien Wohnungen, weil das Interesse an solchen Projekten sehr groß ist.",
              en: "There are almost no vacant flats because interest in such projects is very high.",
              tr: "Bu tür projelere talep çok büyük olduğu için boş daire bulmak oldukça zordur.",
              ar: "تكاد لا توجد شقق شاغرة لأن الإقبال على هذه المشاريع كبير جداً.",
              uk: "Вільних квартир майже немає, оскільки попит на такі проекти величезний."
            },
            correct: "richtig",
            evidence: "Die Nachfrage ist riesig.",
            explanation: {
              de: "Richtig: Frau Berger bestätigt, dass die Nachfrage enorm ('riesig') ist und man nicht ohne Weiteres einziehen kann.",
              en: "True: She explicitly states that demand is enormous ('riesig').",
              tr: "Doğru: Bayan Berger talebin çok yüksek ('riesig') olduğunu ve kolayca yer bulunamadığını söylemektedir.",
              ar: "صحيح: أكدت أن الطلب هائل على هذه الشقق ولا يمكن الانتقال إليها بسهولة.",
              uk: "Правильно: Попит на житло в таких будинках дуже високий ('riesig')."
            }
          },
          {
            id: 54,
            statement: {
              de: "Interessenten müssen vor dem Einzug an Kennenlerntreffen teilnehmen.",
              en: "Interested applicants must take part in get-to-know meetings before moving in.",
              tr: "Taşınmak isteyen adayların önce tanışma toplantılarına katılması zorunludur.",
              ar: "يجب على المهتمين المشاركة في لقاءات تعارف قبل الانتقال للسكن.",
              uk: "Бажаючі оселитися повинні перед переїздом взяти участь у зустрічах для знайомства."
            },
            correct: "richtig",
            evidence: "Bevor man einziehen kann, gibt es mehrere Kennenlerntreffen und Probewochenenden.",
            explanation: {
              de: "Richtig: Es gibt Kennenlerntreffen und Probewochenenden, um zu prüfen, ob die Bewerber in die Gemeinschaft passen.",
              en: "True: Several get-to-know meetings and trial weekends are required.",
              tr: "Doğru: Taşınmadan önce adayın topluluğa uyum sağlayıp sağlayamayacağını görmek için tanışma toplantıları ve deneme hafta sonları düzenlenir.",
              ar: "صحيح: تقام لقاءات تعارف وعطلات نهاية أسبوع تجريبية للتأكد من التوافق بين السكان.",
              uk: "Правильно: Обов'язковими є зустрічі для знайомства та пробні вихідні."
            }
          },
          {
            id: 55,
            statement: {
              de: "Das Mehrgenerationenhaus eignet sich vor allem für Menschen, die viel Anonymität suchen.",
              en: "The multi-generational house is ideal mainly for people seeking high anonymity.",
              tr: "Çok kuşaklı ev en çok anonimlik ve içe kapanık yaşam arayanlar için uygundur.",
              ar: "يناسب هذا المنزل بالدرجة الأولى الأشخاص الذين يبحثون عن العزلة والغموض.",
              uk: "Будинок поколінь підходить насамперед людям, які прагнуть анонімності."
            },
            correct: "falsch",
            evidence: "Wer nur eine anonyme, billige Wohnung sucht, wird sich hier nicht wohlfühlen.",
            explanation: {
              de: "Falsch: Wer Anonymität sucht, wird sich dort ausdrücklich nicht wohlfühlen; aktives Engagement ist gefordert.",
              en: "False: People seeking anonymity are explicitly warned they will not feel at home there.",
              tr: "Yanlış: Anonimlik arayanların burada rahat edemeyeceği, aktif katılım ve komşuluk ilişkisinin şart olduğu vurgulanmaktadır.",
              ar: "خطأ: من يبحث عن العزلة وعدم الاختلاط لن يشعر بالارتياح هناك، فالنموذج يتطلب المشاركة الفعالة.",
              uk: "Неправильно: Ті, хто шукає анонімності, не почуватимуться там комфортно; потрібна активна участь."
            }
          }
        ]
      },

      // ==========================================
      // TEIL 3: 5 TELEFONISCHE NACHRICHTEN (Zweimal hören, a/b/c)
      // ==========================================
      teil3: {
        id: "h1-teil3",
        partName: {
          de: "Teil 3: Telefonische Nachrichten",
          en: "Part 3: Telephone Messages",
          tr: "Bölüm 3: Telefon Mesajları ve Sesli Notlar",
          ar: "الجزء 3: الرسائل الهاتفية",
          uk: "Частина 3: Телефонні повідомлення"
        },
        instruction: {
          de: "Sie hören fünf kurze Telefongespräche oder Ansagen auf dem Anrufbeantworter. Sie hören jeden Text zweimal. Wählen Sie bei den Aufgaben 56 bis 60 die richtige Lösung (a, b oder c).",
          en: "You will hear five short telephone calls or answering machine messages. You will hear each text twice. Choose the correct answer (a, b or c) for tasks 56 to 60.",
          tr: "Telesekreterde beş kısa telefon mesajı dinleyeceksiniz. Her metni iki kez dinleyeceksiniz. 56'dan 60'a kadar olan sorularda doğru şıkkı (a, b veya c) seçiniz.",
          ar: "ستستمع إلى خمس رسائل هاتفية قصيرة أو رسائل على الرد الآلي. ستستمع إلى كل نص مرتين. اختر الإجابة الصحيحة (a أو b أو c) للأسئلة من 56 إلى 60.",
          uk: "Ви почуєте п'ять коротких телефонних повідомлень на автовідповідачі. Кожен запис прозвучить двічі. Оберіть правильну відповідь (a, b або c) для завдань 56–60."
        },
        maxPlays: 2,
        items: [
          {
            id: 56,
            title: "Nachricht 1: Hausarztpraxis Dr. Wagner",
            audioText: "Guten Tag, Herr Demir. Hier spricht Schwester Claudia aus der Praxis Dr. Wagner. Ihre Laborergebnisse von der Blutuntersuchung sind soeben bei uns eingetroffen. Herr Dr. Wagner möchte die Werte gerne persönlich mit Ihnen besprechen. Bitte kommen Sie morgen, am Donnerstag, zwischen 11:30 Uhr und 12:30 Uhr in unsere offene Sprechstunde. Sie müssen dafür nüchtern sein, also vorher bitte nichts essen. Auf Wiederhören.",
            question: {
              de: "Was soll Herr Demir tun?",
              en: "What should Mr. Demir do?",
              tr: "Bay Demir ne yapmalıdır?",
              ar: "ماذا يجب على السيد دمير أن يفعل؟",
              uk: "Що повинен зробити пан Демір?"
            },
            options: [
              { key: "a", text: "Die Ergebnisse telefonisch abfragen." },
              { key: "b", text: "Morgen vormittags ohne Frühstück in die Praxis kommen." },
              { key: "c", text: "Dr. Wagner erst nächste Woche anrufen." }
            ],
            correct: "b",
            explanation: {
              de: "Option b ist richtig: Er soll morgen zwischen 11:30 und 12:30 Uhr nüchtern (nichts essen = ohne Frühstück) zur Besprechung in die Praxis kommen.",
              en: "Option b is correct: He must come to the doctor's office tomorrow morning fasting (without eating breakfast).",
              tr: "b şıkkı doğrudur: Yarın öğleden önce aç karnına (kahvaltı yapmadan) doktor muayenehanesine gitmesi istenmektedir.",
              ar: "الخيار b صحيح: يجب عليه الحضور إلى العيادة صباح الغد صائماً (دون تناول الإفطار).",
              uk: "Варіант b правильний: Він має прийти завтра до клініки натщесерце (без сніданку)."
            }
          },
          {
            id: 57,
            title: "Nachricht 2: Kfz-Werkstatt Müller",
            audioText: "Hallo Herr Kovacs, Meister Frank von der Werkstatt Auto-Müller hier. Gute Nachrichten: Die Bremsen an Ihrem Golf sind erneuert und die Hauptuntersuchung beim TÜV hat der Wagen ohne Mängel bestanden. Die Gesamtrechnung beläuft sich auf 340 Euro. Sie können Ihr Fahrzeug heute noch bis 18 Uhr oder morgen ab 8 Uhr abholen. Bitte bringen Sie Ihren Fahrzeugschein mit. Danke und bis später.",
            question: {
              de: "Das Auto von Herrn Kovacs...",
              en: "Mr. Kovacs's car...",
              tr: "Bay Kovacs'ın arabası...",
              ar: "سيارة السيد كوفاكس...",
              uk: "Автомобіль пана Ковача..."
            },
            options: [
              { key: "a", text: "hat die TÜV-Prüfung nicht bestanden." },
              { key: "b", text: "kann heute bis 18 Uhr abgeholt werden." },
              { key: "c", text: "kostet mehr als 500 Euro Reparaturgebühr." }
            ],
            correct: "b",
            explanation: {
              de: "Option b ist richtig: Die Reparatur ist fertig, TÜV bestanden, Abholung ist heute bis 18:00 Uhr möglich (Rechnung 340 Euro).",
              en: "Option b is correct: The car is ready, passed TÜV inspection, and can be picked up today until 6:00 PM.",
              tr: "b şıkkı doğrudur: Araç muayeneden sorunsuz geçmiş, tamir bitmiştir ve bugün saat 18:00'e kadar teslim alınabilir.",
              ar: "الخيار b صحيح: السيارة جاهزة واجتازت الفحص الفني ويمكن استلامها اليوم حتى الساعة 18:00.",
              uk: "Варіант b правильний: Автомобіль відремонтовано, техогляд пройдено, забрати можна сьогодні до 18:00."
            }
          },
          {
            id: 58,
            title: "Nachricht 3: Sportstudio FitLife",
            audioText: "Hallo Frau Al-Mansoor, hier ist Sarah vom Sportstudio FitLife. Wir haben am kommenden Samstag unseren jährlichen Tag der offenen Tür mit kostenlosen Schnupperkursen in Yoga und Pilates. Da Sie sich für unseren Rücken-Fit-Kurs interessiert haben: Bringen Sie gerne eine Freundin mit! Wenn sich Ihre Bekannte an diesem Tag für eine Jahresmitgliedschaft entscheidet, trainieren Sie beide einen Monat lang völlig beitragsfrei. Rufen Sie uns kurz zurück, wenn Sie Plätze reservieren möchten.",
            question: {
              de: "Frau Al-Mansoor bekommt einen Monat beitragsfreies Training, wenn...",
              en: "Ms. Al-Mansoor gets one month of free training if...",
              tr: "Bayan Al-Mansoor şu şartla bir ay ücretsiz spor yapabilir:",
              ar: "تحصل السيدة المنصور على تدريب مجاني لمدة شهر إذا...",
              uk: "Пані Аль-Мансур отримає місяць безкоштовних тренувань, якщо..."
            },
            options: [
              { key: "a", text: "sie am Samstag allein zum Yoga-Kurs kommt." },
              { key: "b", text: "eine mitgebrachte Freundin einen Jahresvertrag abschließt." },
              { key: "c", text: "sie sofort 100 Euro im Voraus bezahlt." }
            ],
            correct: "b",
            explanation: {
              de: "Option b ist richtig: Die Aktion gilt, wenn ihre Bekannte/Freundin eine Jahresmitgliedschaft abschließt ('entscheidet sich ... für eine Jahresmitgliedschaft, trainieren Sie beide einen Monat lang völlig beitragsfrei').",
              en: "Option b is correct: She gets the free month if the friend she brings signs up for an annual membership.",
              tr: "b şıkkı doğrudur: Beraberinde getirdiği arkadaşı yıllık üyelik sözleşmesi imzalarsa ikisi de bir ay ücretsiz antrenman yapacaktır.",
              ar: "الخيار b صحيح: يسري العرض المجاني إذا قامت صديقتها بالاشتراك في عضوية سنوية بالنادي.",
              uk: "Варіант b правильний: Умова безкоштовного місяця — якщо її знайома оформить річний абонемент."
            }
          },
          {
            id: 59,
            title: "Nachricht 4: Kita Sonnenschein",
            audioText: "Guten Tag, Familie Schneider. Hier ist Frau Meier von der Kita Sonnenschein. Wegen einer internen Fortbildung unseres gesamten Erzieherteams schließt unsere Einrichtung am kommenden Freitag bereits um 12:30 Uhr statt wie gewohnt um 16:30 Uhr. Ein warmes Mittagessen für die Kinder wird aber noch ausgegeben. Bitte holen Sie Ihren Sohn Felix pünktlich bis spätestens 12:45 Uhr ab. Vielen Dank für Ihr Verständnis.",
            question: {
              de: "Was ändert sich am kommenden Freitag in der Kita?",
              en: "What changes at the daycare this coming Friday?",
              tr: "Gelecek cuma günü kreşte ne değişecektir?",
              ar: "ما الذي سيتغير يوم الجمعة القادم في الروضة؟",
              uk: "Що зміниться цієї п'ятниці в дитячому садку?"
            },
            options: [
              { key: "a", text: "Die Kita bleibt den ganzen Tag geschlossen." },
              { key: "b", text: "Die Kinder müssen ihr eigenes Essen mitbringen." },
              { key: "c", text: "Die Kinder müssen schon mittags abgeholt werden." }
            ],
            correct: "c",
            explanation: {
              de: "Option c ist richtig: Wegen einer Fortbildung schließt die Kita früher, sodass die Kinder bis spätestens 12:45 Uhr (mittags) abgeholt werden müssen.",
              en: "Option c is correct: Due to training, the daycare closes early, requiring pickup by 12:45 PM.",
              tr: "c şıkkı doğrudur: Eğitim semineri nedeniyle kreş erken kapanacak ve çocuklar öğlen en geç 12:45'te alınmalıdır.",
              ar: "الخيار c صحيح: ستغلق الروضة أبوابها مبكراً ويجب استلام الأطفال وقت الظهيرة قبل 12:45.",
              uk: "Варіант c правильний: Через семінар садок закриється раніше, дітей треба забрати в обід до 12:45."
            }
          },
          {
            id: 60,
            title: "Nachricht 5: Möbelhaus Nordik",
            audioText: "Hallo Herr Yatsenko, hier ist der Kundenservice von Möbel Nordik. Ihr bestellter Esstisch aus Eiche ist in unserem Zentrallager eingetroffen. Unser Lieferservice könnte die Ware am Dienstag zwischen 9 und 13 Uhr bei Ihnen anliefern. Falls Sie zu diesem Zeitpunkt nicht zu Hause sind, können Sie den Tisch auch ab Montag selbst in unserer Warenausgabe in der Industriestraße 12 abholen. Bitte rufen Sie uns unter 089 452010 zurück, um den Termin zu bestätigen.",
            question: {
              de: "Herr Yatsenko kann den Esstisch...",
              en: "Mr. Yatsenko can...",
              tr: "Bay Yatsenko yemek masasını...",
              ar: "يستطيع السيد ياتسينكو...",
              uk: "Пан Яценко може..."
            },
            options: [
              { key: "a", text: "ab Montag selbst im Lager abholen oder am Dienstag liefern lassen." },
              { key: "b", text: "nur samstags geliefert bekommen." },
              { key: "c", text: "erst in vier Wochen erwarten." }
            ],
            correct: "a",
            explanation: {
              de: "Option a ist richtig: Er hat zwei Optionen: Entweder Lieferung am Dienstag vormittags oder Selbstabholung ab Montag im Lager.",
              en: "Option a is correct: He can either get it delivered on Tuesday or pick it up himself starting Monday.",
              tr: "a şıkkı doğrudur: İki seçeneği vardır: Salı günü eve teslimat veya pazartesiden itibaren depodan bizzat teslim alma.",
              ar: "الخيار a صحيح: لديه خياران: استلام الطاولة بنفسه من المستودع بدءاً من الاثنين أو توصيلها للمنزل الثلاثاء.",
              uk: "Варіант a правильний: Він може забрати стіл сам зі складу з понеділка або замовити доставку на вівторок."
            }
          }
        ]
      }
    }
  ];

})();
