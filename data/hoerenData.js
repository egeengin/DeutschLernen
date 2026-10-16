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
    },

    // ==========================================
    // ÜBUNGSTEST 2: Hörverstehen (Teile 1–3)
    // ==========================================
    {
      id: "hoer-test-2",
      title: {
        de: "Übungstest 2: Hörverstehen (Teile 1–3)",
        en: "Practice Test 2: Listening Comprehension (Parts 1–3)",
        tr: "Deneme Sınavı 2: Dinlediğini Anlama (Bölüm 1–3)",
        ar: "الاختبار التدريبي 2: فهم المسموع (الأجزاء 1–3)",
        uk: "Тренувальний тест 2: Аудіювання (Частини 1–3)"
      },
      timeEstimateMin: 30,
      badge: "telc B1 75 Punkte",

      // TEIL 1: 5 DURCHSAGEN (Einmal hören)
      teil1: {
        id: "h2-teil1",
        partName: {
          de: "Teil 1: Durchsagen und Meldungen",
          en: "Part 1: Announcements and Reports",
          tr: "Bölüm 1: Anonslar ve Kısa Duyurular",
          ar: "الجزء 1: الإعلانات والبلاغات الصوتية",
          uk: "Частина 1: Оголошення та повідомлення"
        },
        instruction: {
          de: "Sie hören fünf kurze Texte. Sie hören jeden Text nur einmal. Entscheiden Sie beim Hören, ob die Aussagen 41 bis 45 richtig oder falsch sind.",
          en: "You will hear five short audio clips once only. Decide whether statements 41 to 45 are true or false.",
          tr: "Beş kısa metin dinleyeceksiniz. Her metni yalnızca bir kez dinleyeceksiniz. Dinlerken 41-45 arasındaki ifadelerin doğru mu yanlış mı olduğuna karar veriniz.",
          ar: "ستستمع إلى خمسة نصوص قصيرة لمرة واحدة فقط. حدد أثناء الاستماع ما إذا كانت العبارات 41 إلى 45 صحيحة أم خاطئة.",
          uk: "Ви почуєте 5 коротких аудіозаписів лише один раз. Визначте, чи є твердження 41–45 правильними або неправильними."
        },
        maxPlays: 1,
        items: [
          {
            id: 41,
            itemNumber: 41,
            title: "Text 1: Hauptbahnhof Durchsage",
            audioText: "Achtung an Gleis 7: Der Regional-Express nach Nürnberg über Würzburg mit der planmäßigen Abfahrt um 14 Uhr 15 fährt heute ausnahmsweise von Gleis 9 ab. Grund dafür ist eine technische Störung am Zug auf Gleis 7. Fahrgäste nach Nürnberg werden gebeten, zu Gleis 9 zu wechseln. Die Abfahrt verzögert sich um etwa 10 Minuten.",
            statement: {
              de: "Der Zug nach Nürnberg fährt heute von Gleis 7 ab.",
              en: "The train to Nuremberg departs from Track 7 today.",
              tr: "Nürnberg treni bugün 7 numaralı perondan kalkacaktır.",
              ar: "يغادر القطار المتجه إلى نورمبرغ اليوم من الرصيف 7.",
              uk: "Поїзд до Нюрнберга сьогодні відправляється з колії 7."
            },
            correct: "falsch",
            evidence: "fährt heute ausnahmsweise von Gleis 9 ab. Fahrgäste nach Nürnberg werden gebeten, zu Gleis 9 zu wechseln.",
            explanation: {
              de: "Falsch: Wegen einer Störung fährt der Zug nicht von Gleis 7, sondern von Gleis 9 ab.",
              en: "False: Due to a fault, the train departs from Track 9 instead of Track 7.",
              tr: "Yanlış: Arıza nedeniyle tren 7. perondan değil, 9. perondan hareket edecektir.",
              ar: "خطأ: بسبب عطل فني، يغادر القطار استثنائياً من الرصيف 9 وليس الرصيف 7.",
              uk: "Неправильно: Через технічну несправність потяг відправляється з колії 9, а не 7."
            }
          },
          {
            id: 42,
            itemNumber: 42,
            title: "Text 2: Flughafen Aufruf",
            audioText: "Letzter Aufruf für die Fluggäste des Lufthansa-Fluges LH 1290 nach Istanbul. Bitte begeben Sie sich unverzüglich zu Flugsteig B24. Das Einsteigen wird in Kürze beendet. Wir bitten alle Passagiere, ihre Bordkarte und ihren Reisepass griffbereit zu halten.",
            statement: {
              de: "Die Fluggäste nach Istanbul sollen sofort zum Flugsteig kommen.",
              en: "Passengers to Istanbul should proceed immediately to the gate.",
              tr: "İstanbul yolcularının derhal biniş kapısına gitmeleri istenmektedir.",
              ar: "يجب على ركاب رحلة إسطنبول التوجه فوراً إلى بوابة الصعود.",
              uk: "Пасажирам рейсу до Стамбула слід негайно пройти до виходу на посадку."
            },
            correct: "richtig",
            evidence: "Letzter Aufruf... Bitte begeben Sie sich unverzüglich zu Flugsteig B24. Das Einsteigen wird in Kürze beendet.",
            explanation: {
              de: "Richtig: Es ist der letzte Aufruf ('unverzüglich zu Flugsteig B24'), da das Boarding bald schließt.",
              en: "True: It is the final boarding call; passengers must go to gate B24 immediately.",
              tr: "Doğru: Son çağrıdır ('derhal B24 kapısına gidiniz'), biniş birazdan kapanacaktır.",
              ar: "صحيح: هذا هو النداء الأخير للمسافرين للتوجه فوراً إلى البوابة B24.",
              uk: "Правильно: Це останній виклик ('негайно пройти до виходу B24')."
            }
          },
          {
            id: 43,
            itemNumber: 43,
            title: "Text 3: Supermarkt Sonderaktion",
            audioText: "Liebe Kundinnen und Kunden, beachten Sie heute unser Sonderangebot in der Frischeabteilung: Bio-Äpfel aus der Region erhalten Sie heute zum Sonderpreis von nur 1 Euro 49 pro Kilo statt 2 Euro 99. Greifen Sie zu, solange der Vorrat reicht!",
            statement: {
              de: "Die Bio-Äpfel kosten heute nur die Hälfte des normalen Preises.",
              en: "The organic apples cost only half the normal price today.",
              tr: "Organik elmalar bugün normal fiyatının yarısına satılmaktadır.",
              ar: "التفاح العضوي يباع اليوم بنصف سعره المعتاد.",
              uk: "Органічні яблука сьогодні коштують удвічі дешевше, ніж зазвичай."
            },
            correct: "richtig",
            evidence: "1 Euro 49 pro Kilo statt 2 Euro 99 (rund 50% Rabatt).",
            explanation: {
              de: "Richtig: 1,49 € statt 2,99 € entspricht genau etwa der Hälfte (50 Prozent Ersparnis).",
              en: "True: €1.49 instead of €2.99 represents a 50% discount (half price).",
              tr: "Doğru: 2,99 € yerine 1,49 € tam olarak yarı fiyatına denk gelmektedir.",
              ar: "صحيح: 1.49 يورو بدلاً من 2.99 يورو يمثل خصم النصف تماماً.",
              uk: "Правильно: 1,49 € замість 2,99 € — це приблизно половина вартості."
            }
          },
          {
            id: 44,
            itemNumber: 44,
            title: "Text 4: Straßenbahn Störungsmeldung",
            audioText: "Sehr geehrte Fahrgäste, wegen eines Rettungseinsatzes an der Haltestelle Stadtmitte kann die Straßenbahnlinie 3 derzeit nicht über den Marktplatz fahren. Die Bahnen werden über den Westbahnhof umgeleitet. Fahrgäste mit dem Ziel Marktplatz nutzen bitte ab Hauptbahnhof die Buslinie 12.",
            statement: {
              de: "Die Straßenbahnlinie 3 fährt heute wie gewohnt über den Marktplatz.",
              en: "Tram line 3 operates normally via the market square today.",
              tr: "3 numaralı tramvay bugün her zamanki gibi meydandan geçmektedir.",
              ar: "خط الترام 3 يعمل اليوم كالمعتاد عبر ساحة السوق.",
              uk: "Трамвай номер 3 сьогодні курсує як зазвичай через центральну площу."
            },
            correct: "falsch",
            evidence: "kann die Straßenbahnlinie 3 derzeit nicht über den Marktplatz fahren. Die Bahnen werden über den Westbahnhof umgeleitet.",
            explanation: {
              de: "Falsch: Wegen eines Rettungseinsatzes ist der Marktplatz gesperrt und die Tram wird umgeleitet.",
              en: "False: Due to an emergency operation, the tram is detoured away from Marktplatz.",
              tr: "Yanlış: Kurtarma operasyonu nedeniyle tramvay meydana girememekte ve güzergahı değiştirilmektedir.",
              ar: "خطأ: بسبب عملية طوارئ وإسعاف، تم تحويل مسار الترام بعيداً عن ساحة السوق.",
              uk: "Неправильно: Через рятувальну операцію трамвай тимчасово курсує за зміненим маршрутом."
            }
          },
          {
            id: 45,
            itemNumber: 45,
            title: "Text 5: Wetterbericht am Morgen",
            audioText: "Und nun das Wetter für den heutigen Donnerstag in Süddeutschland: Nach morgendlichen Nebelfeldern setzt sich am Nachmittag im gesamten Alpenvorland die Sonne durch. Die Temperaturen steigen auf milde 18 bis 21 Grad. Erst am späten Abend sind von Westen her einzelne Regenschauer möglich.",
            statement: {
              de: "Am Nachmittag regnet es im gesamten Alpenvorland ununterbrochen.",
              en: "In the afternoon, it rains continuously across the entire alpine foothills.",
              tr: "Öğleden sonra Alpler ön bölgesinde kesintisiz yağmur yağacaktır.",
              ar: "في فترة بعد الظهر، تهطل الأمطار دون انقطاع في سفوح جبال الألب.",
              uk: "У другій половині дня в передгір'ях Альп очікується безперервний дощ."
            },
            correct: "falsch",
            evidence: "am Nachmittag im gesamten Alpenvorland die Sonne durch. Temperaturen 18 bis 21 Grad. Erst am späten Abend ... Regenschauer möglich.",
            explanation: {
              de: "Falsch: Am Nachmittag scheint die Sonne bei bis zu 21 Grad; Regen droht erst am späten Abend.",
              en: "False: In the afternoon the sun breaks through; rain is only possible late in the evening.",
              tr: "Yanlış: Öğleden sonra güneş açmakta ve sıcaklık 21 dereceye çıkmaktadır; yağmur ancak akşam geç saatte beklenmektedir.",
              ar: "خطأ: تشرق الشمس بعد الظهر وترتفع درجات الحرارة، والمطر محتمل فقط في وقت متأخر من المساء.",
              uk: "Неправильно: У другій половині дня буде сонячно, а дощ можливий лише пізно ввечері."
            }
          }
        ]
      },

      // TEIL 2: RADIO-INTERVIEW (Zweimal hören)
      teil2: {
        id: "h2-teil2",
        partName: {
          de: "Teil 2: Radio-Interview / Gespräch",
          en: "Part 2: Radio Interview / Conversation",
          tr: "Bölüm 2: Radyo Röportajı / Söyleşi",
          ar: "الجزء 2: مقابلة إذاعية / حوار",
          uk: "Частина 2: Радіоінтерв'ю / Розмова"
        },
        instruction: {
          de: "Sie hören ein Gespräch im Radio. Sie hören den Text zweimal. Entscheiden Sie beim Hören, ob die Aussagen 46 bis 55 richtig oder falsch sind.",
          en: "You will hear an interview on the radio twice. Decide whether statements 46 to 55 are true or false.",
          tr: "Radyoda bir söyleşi dinleyeceksiniz. Metni iki kez dinleyeceksiniz. Dinlerken 46-55 arasındaki ifadelerin doğru mu yanlış mı olduğuna karar veriniz.",
          ar: "ستستمع إلى مقابلة إذاعية مرتين. حدد أثناء الاستماع ما إذا كانت العبارات 46 إلى 55 صحيحة أم خاطئة.",
          uk: "Ви двічі почуєте інтерв'ю на радіо. Визначте, чи є твердження 46–55 правильними або неправильними."
        },
        maxPlays: 2,
        audioText: "Moderator: Guten Abend, liebe Hörerinnen und Hörer! In unserer heutigen Sendung 'Mensch und Beruf' spreche ich mit Laura Sommer. Laura hat vor zwei Jahren ihren sicheren Bürojob in einer Bank gekündigt, um eine traditionelle Bio-Bäckerei zu eröffnen. Laura, herzlich willkommen! Viele hielten Ihren Schritt damals für sehr riskant. Wie kamen Sie zu dieser Entscheidung?\n\nLaura: Hallo Herr Richter! Ja, alle Freunde und auch meine Eltern waren anfangs schockiert. Ich hatte BWL studiert und fünf Jahre im Marketing gearbeitet. Aber ich saß den ganzen Tag nur vor dem Computer und vermisste eine handwerkliche, sinnvolle Arbeit. Schon als Jugendliche habe ich leidenschaftlich gerne Sauerteigbrote gebacken. Vor drei Jahren habe ich dann neben dem Beruf an Wochenenden eine Bäckerausbildung absolviert.\n\nModerator: Eine Doppelbelastung! Und wie war der Start mit der eigenen Backstube?\n\nLaura: Extrem anstrengend! Als Gründerin muss man am Anfang fast alles allein machen: Um 3 Uhr morgens aufstehen, den Teig kneten, backen und ab 7 Uhr selbst im Laden stehen. Meine Ersparnisse waren nach der Renovierung der Backstube komplett aufgebraucht. Die ersten sechs Monate machten wir kaum Gewinn.\n\nModerator: Und heute? Das Geschäft läuft doch hervorragend, man sieht morgens oft lange Schlangen vor Ihrer Tür.\n\nLaura: Ja, zum Glück! Die Leute in unserem Viertel schätzen es sehr, dass wir ausschließlich regionales Bio-Getreide aus der Umgebung verwenden und völlig auf chemische Backmischungen verzichten. Unser Brot braucht bis zu 24 Stunden Ruhezeit für den Teig – das schmeckt man einfach.\n\nModerator: Haben Sie mittlerweile Unterstützung?\n\nLaura: Ja, ich beschäftige inzwischen zwei Bäckergesellen in Teilzeit und zwei Verkäuferinnen. Dadurch muss ich nicht mehr jede Nacht selbst in der Backstube stehen. Wir planen sogar, einen Ausbildungsplatz für das nächste Lehrjahr anzubieten.\n\nModerator: Klingt nach einer echten Erfolgsgeschichte! Bereuen Sie den Schritt in die Selbstständigkeit manchmal?\n\nLaura: Niemals! Natürlich habe ich mehr Verantwortung und trage das finanzielle Risiko allein, aber wenn die Kunden morgens mit einem Lächeln unser warmes Holzofenbrot kaufen, weiß ich jeden Tag, wofür ich aufstehe.",
        items: [
          {
            id: 46,
            itemNumber: 46,
            statement: {
              de: "Laura Sommer hat vor ihrer Bäckerei-Gründung bei einer Bank gearbeitet.",
              en: "Before opening her bakery, Laura Sommer worked at a bank.",
              tr: "Laura Sommer fırınını açmadan önce bir bankada çalışmıştır.",
              ar: "عملت لاورا سومر في أحد البنوك قبل افتتاح مخبزها.",
              uk: "Лаура Зоммер до відкриття пекарні працювала в банку."
            },
            correct: "richtig",
            explanation: {
              de: "Richtig: Der Moderator erwähnt, dass sie ihren sicheren Bürojob bei einer Bank gekündigt hat.",
              en: "True: The moderator notes she resigned from her office job at a bank.",
              tr: "Doğru: Sunucu, bankadaki güvenli ofis işini bıraktığını açıkça belirtmektedir.",
              ar: "صحيح: ذكر المذيع أنها استقالت من وظيفتها المكتبية في البنك.",
              uk: "Правильно: Ведучий згадує, що вона звільнилася з роботи в банку."
            }
          },
          {
            id: 47,
            itemNumber: 47,
            statement: {
              de: "Lauras Eltern waren von Anfang an begeistert von ihrer Idee.",
              en: "Laura's parents were enthusiastic about her idea from the very beginning.",
              tr: "Laura'nın anne babası bu fikri başından beri heyecanla desteklemiştir.",
              ar: "كان والدا لاورا متحمسين لفكرتها منذ البداية.",
              uk: "Батьки Лаури від самого початку були в захваті від її ідеї."
            },
            correct: "falsch",
            explanation: {
              de: "Falsch: Laura sagt ausdrücklich: 'alle Freunde und auch meine Eltern waren anfangs schockiert.'",
              en: "False: Laura explicitly says: 'all my friends and also my parents were initially shocked.'",
              tr: "Yanlış: Laura 'tüm arkadaşlarım ve ailem başta şoke olmuşlardı' demektedir.",
              ar: "خطأ: تقول لاورا بوضوح: 'كان جميع الأصدقاء ووالداي مصدومين في البداية'.",
              uk: "Неправильно: Вона зазначила, що батьки та друзі спочатку були шоковані."
            }
          },
          {
            id: 48,
            itemNumber: 48,
            statement: {
              de: "Laura hat ihre Bäckerausbildung an Wochenenden neben dem Beruf absolviert.",
              en: "Laura completed her baker apprenticeship on weekends alongside her job.",
              tr: "Laura fırıncılık eğitimini işinin yanında hafta sonları tamamlamıştır.",
              ar: "أكملت لاورا تدريبها المهني كخبازة في عطلات نهاية الأسبوع بالتوازي مع عملها.",
              uk: "Лаура проходила навчання на пекаря у вихідні дні паралельно з основною роботою."
            },
            correct: "richtig",
            explanation: {
              de: "Richtig: Sie absolvierte die Bäckerausbildung an Wochenenden neben ihrem Job.",
              en: "True: She completed the apprenticeship on weekends while still working full-time.",
              tr: "Doğru: Hafta sonları mesleğinin yanı sıra fırıncılık eğitimini bitirdiğini söylemektedir.",
              ar: "صحيح: أكملت تدريب الخبازة في عطلات نهاية الأسبوع أثناء عملها.",
              uk: "Правильно: Вона закінчила курс пекаря у вихідні, поєднуючи з роботою."
            }
          },
          {
            id: 49,
            itemNumber: 49,
            statement: {
              de: "In den ersten sechs Monaten machte die neue Bäckerei sehr hohe Gewinne.",
              en: "In the first six months, the new bakery generated very high profits.",
              tr: "İlk altı ayda yeni fırın çok yüksek karlar elde etmiştir.",
              ar: "حقق المخبز الجديد أرباحاً عالية جداً في الأشهر الستة الأولى.",
              uk: "У перші пів року нова пекарня приносила великі прибутки."
            },
            correct: "falsch",
            explanation: {
              de: "Falsch: Laura berichtet: 'Die ersten sechs Monate machten wir kaum Gewinn.'",
              en: "False: Laura reports: 'In the first six months we barely made any profit.'",
              tr: "Yanlış: Laura 'ilk altı ay neredeyse hiç kar edemedik' demektedir.",
              ar: "خطأ: ذكرت لاورا: 'في الأشهر الستة الأولى لم نحقق أي أرباح تذكر'.",
              uk: "Неправильно: Перші пів року пекарня майже не приносила прибутку."
            }
          },
          {
            id: 50,
            itemNumber: 50,
            statement: {
              de: "Für ihre Brote verwendet Laura nur Getreide aus der Region.",
              en: "Laura only uses locally sourced grain for her bread.",
              tr: "Laura ekmekleri için yalnızca yöreden temin edilen tahılları kullanmaktadır.",
              ar: "تستخدم لاورا في مخبوزاتها الحبوب الإقليمية المحلية فقط.",
              uk: "Для свого хліба Лаура використовує лише місцеве зерно."
            },
            correct: "richtig",
            explanation: {
              de: "Richtig: Sie betont: 'wir ausschließlich regionales Bio-Getreide aus der Umgebung verwenden.'",
              en: "True: She highlights using exclusively regional organic grain from the surroundings.",
              tr: "Doğru: Yalnızca çevredeki yerel organik tahılları kullandığını vurgulamaktadır.",
              ar: "صحيح: أكدت استخدام الحبوب العضوية المحلية من المنطقة فقط.",
              uk: "Правильно: Вона використовує виключно регіональне органічне зерно."
            }
          },
          {
            id: 51,
            itemNumber: 51,
            statement: {
              de: "Der Teig für die Brote ruht bis zu 24 Stunden vor dem Backen.",
              en: "The bread dough rests for up to 24 hours before baking.",
              tr: "Ekmek hamuru fırına verilmeden önce 24 saate kadar dinlendirilmektedir.",
              ar: "تُترك عجينة الخبز لترتاح مدة تصل إلى 24 ساعة قبل الخبز.",
              uk: "Тісто для хліба вистоюється до 24 годин перед випіканням."
            },
            correct: "richtig",
            explanation: {
              de: "Richtig: 'Unser Brot braucht bis zu 24 Stunden Ruhezeit für den Teig.'",
              en: "True: 'Our bread requires up to 24 hours of resting time for the dough.'",
              tr: "Doğru: Hamurun 24 saate kadar dinlenme süresine ihtiyaç duyduğunu açıklar.",
              ar: "صحيح: يحتاج عجين الخبز إلى فترة راحة وتخمير تصل لـ 24 ساعة.",
              uk: "Правильно: Тісто витримується до 24 годин перед випіканням."
            }
          },
          {
            id: 52,
            itemNumber: 52,
            statement: {
              de: "Laura arbeitet heute immer noch ganz allein ohne Angestellte.",
              en: "Today, Laura still works entirely alone without any employees.",
              tr: "Laura bugün halen hiçbir çalışan olmadan tek başına çalışmaktadır.",
              ar: "لا تزال لاورا تعمل بمفردها تماماً حتى اليوم دون موظفين.",
              uk: "Сьогодні Лаура досі працює повністю сама, без найманих працівників."
            },
            correct: "falsch",
            explanation: {
              de: "Falsch: Sie beschäftigt mittlerweile zwei Bäckergesellen und zwei Verkäuferinnen.",
              en: "False: She now employs two journeyman bakers and two sales clerks.",
              tr: "Yanlış: Artık iki fırıncı ustası ve iki tezgahtar istihdam etmektedir.",
              ar: "خطأ: لديها الآن خبازان اثنان بدوام جزئي وموظفتا مبيعات.",
              uk: "Неправильно: Зараз у неї працюють двоє помічників пекаря та дві продавчині."
            }
          },
          {
            id: 53,
            itemNumber: 53,
            statement: {
              de: "Die Bäckerei plant, im kommenden Lehrjahr einen Auszubildenden einzustellen.",
              en: "The bakery plans to hire an apprentice for the upcoming training year.",
              tr: "Fırın, önümüzdeki eğitim döneminde bir stajyer/çırak almayı planlamaktadır.",
              ar: "يخطط المخبز لتوظيف متدرب مهني جديد في العام التدريبي القادم.",
              uk: "Пекарня планує взяти учня на навчання наступного навчального року."
            },
            correct: "richtig",
            explanation: {
              de: "Richtig: 'Wir planen sogar, einen Ausbildungsplatz für das nächste Lehrjahr anzubieten.'",
              en: "True: 'We are even planning to offer an apprenticeship for the next training year.'",
              tr: "Doğru: Gelecek eğitim yılı için bir çıraklık kontenjanı açmayı planlamaktadırlar.",
              ar: "صحيح: تخطط لتقديم فرصة تدريب مهني في العام القادم.",
              uk: "Правильно: Вона планує запропонувати місце для стажера наступного року."
            }
          },
          {
            id: 54,
            itemNumber: 54,
            statement: {
              de: "Laura bereut ihre Entscheidung und möchte wieder zurück zur Bank.",
              en: "Laura regrets her decision and wants to return to the bank.",
              tr: "Laura kararından pişmandır ve bankaya geri dönmek istemektedir.",
              ar: "تندم لاورا على قرارها وترغب في العودة للعمل في البنك.",
              uk: "Лаура шкодує про своє рішення і хоче повернутися до банку."
            },
            correct: "falsch",
            explanation: {
              de: "Falsch: Auf die Frage antwortet sie mit 'Niemals!' und ist sehr glücklich mit ihrem Beruf.",
              en: "False: Asked whether she regrets it, she replies 'Never!' and loves her profession.",
              tr: "Yanlış: Pişman olup olmadığı sorusuna 'Asla!' diye yanıt vermiş ve çok memnundur.",
              ar: "خطأ: أجابت بـ 'أبداً!' وهي سعيدة جداً بعملها اليومي واستقلالها.",
              uk: "Неправильно: Вона відповіла 'Ніколи!' і пишається своєю справою."
            }
          },
          {
            id: 55,
            itemNumber: 55,
            statement: {
              de: "Der Kundenkontakt und das warme Brot motivieren Laura jeden Tag aufs Neue.",
              en: "Customer contact and fresh warm bread motivate Laura every single day.",
              tr: "Müşterilerle iletişim ve taze sıcak ekmek Laura'yı her gün yeniden motive etmektedir.",
              ar: "التواصل مع الزبائن والخبز الطازج يمنحان لاورا حافزاً يومياً متجدداً.",
              uk: "Спілкування з клієнтами та свіжий хліб щодня надихають Лауру."
            },
            correct: "richtig",
            explanation: {
              de: "Richtig: Wenn die Kunden mit einem Lächeln das warme Holzofenbrot kaufen, weiß sie, wofür sie aufsteht.",
              en: "True: Seeing smiling customers buy warm wood-oven bread gives her fulfillment every day.",
              tr: "Doğru: Müşterilerin sıcak fırın ekmeğini gülümseyerek alması ona her gün çalışma gücü vermektedir.",
              ar: "صحيح: ابتسامة الزبائن عند شراء الخبز الساخن تجعلها تشعر بقيمة عملها كل صباح.",
              uk: "Правильно: Посмішки вдячних покупців щоранку дають їй відчуття змістовності праці."
            }
          }
        ]
      },

      // TEIL 3: TELEFONANSAGEN (Zweimal hören)
      teil3: {
        id: "h2-teil3",
        partName: {
          de: "Teil 3: Telefonansagen und Mailbox",
          en: "Part 3: Phone Messages and Voicemail",
          tr: "Bölüm 3: Telefon Telesekreter Mesajları",
          ar: "الجزء 3: رسائل الهاتف والبريد الصوتي",
          uk: "Частина 3: Телефонні повідомлення та автовідповідач"
        },
        instruction: {
          de: "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
          en: "You will hear five short telephone messages twice. Choose the correct solution a, b, or c for each task.",
          tr: "Beş kısa telefon mesajı dinleyeceksiniz. Her mesajı iki kez dinleyeceksiniz. Her soru için doğru seçenek a, b veya c'yi işaretleyiniz.",
          ar: "ستستمع إلى خمس رسائل هاتفية قصيرة مرتين. اختر الحل الصحيح a أو b أو c لكل سؤال.",
          uk: "Ви двічі почуєте 5 коротких телефонних повідомлень. Оберіть правильний варіант a, b або c для кожного завдання."
        },
        maxPlays: 2,
        items: [
          {
            id: 56,
            itemNumber: 56,
            title: "Nachricht 1: Hausverwaltung Notdienst",
            audioText: "Guten Tag, hier ist die Hausverwaltung Immobilien-Partner. Wegen dringender Wartungsarbeiten am Aufzug im Haus Schillerstraße 14 bleibt dieser am kommenden Dienstag von 8:00 Uhr bis voraussichtlich 14:00 Uhr außer Betrieb. Bewohner mit Gehbehinderung wenden sich bitte für Unterstützung an den Hausmeister unter Telefonnummer 0172 45892.",
            question: {
              de: "Der Aufzug im Wohnhaus...",
              en: "The elevator in the apartment building...",
              tr: "Apartmandaki asansör...",
              ar: "مصعد المبنى السكني...",
              uk: "Ліфт у житловому будинку..."
            },
            options: [
              { key: "a", text: "ist für die ganze Woche defekt." },
              { key: "b", text: "wird am Dienstagvormittag gewartet und steht still." },
              { key: "c", text: "darf nur noch vom Hausmeister benutzt werden." }
            ],
            correct: "b",
            explanation: {
              de: "Option b ist richtig: Der Aufzug ist am Dienstag von 8 bis 14 Uhr wegen Wartungsarbeiten außer Betrieb.",
              en: "Option b is correct: The elevator is out of service Tuesday morning (8 am to 2 pm) for maintenance.",
              tr: "b şıkkı doğrudur: Salı günü 8:00 ile 14:00 arasında bakım nedeniyle asansör çalışmayacaktır.",
              ar: "الخيار b صحيح: المصعد متوقف عن العمل صباح الثلاثاء من 8 إلى 14 لأعمال الصيانة.",
              uk: "Варіант b правильний: Ліфт не працюватиме у вівторок зранку до 14:00 через техобслуговування."
            }
          },
          {
            id: 57,
            itemNumber: 57,
            title: "Nachricht 2: Arztpraxis Dr. Weber",
            audioText: "Hallo Herr Hoffmann, hier ist die Praxis Dr. Weber. Ihre Laborergebnisse sind eingetroffen. Herr Dr. Weber möchte den Befund gerne persönlich mit Ihnen besprechen. Bitte kommen Sie morgen, am Freitag, zwischen 11:30 Uhr und 12:30 Uhr kurz in unsere offene Sprechstunde. Ein fester Termin ist nicht erforderlich.",
            question: {
              de: "Herr Hoffmann soll...",
              en: "Mr. Hoffmann should...",
              tr: "Bay Hoffmann...",
              ar: "يجب على السيد هوفمان أن...",
              uk: "Пану Гофману слід..."
            },
            options: [
              { key: "a", text: "morgen in die offene Sprechstunde der Praxis kommen." },
              { key: "b", text: "Dr. Weber heute Nachmittag telefonisch anrufen." },
              { key: "c", text: "die Laborwerte in der Apotheke abholen." }
            ],
            correct: "a",
            explanation: {
              de: "Option a ist richtig: Er soll morgen zwischen 11:30 und 12:30 Uhr zur offenen Sprechstunde vorbeikommen.",
              en: "Option a is correct: He should come to the open office consultation tomorrow between 11:30 and 12:30.",
              tr: "a şıkkı doğrudur: Yarın 11:30 ile 12:30 arasında randevusuz açık muayene saatinde gelmesi istenmiştir.",
              ar: "الخيار a صحيح: عليه الحضور غداً بين 11:30 و 12:30 إلى ساعات الاستشارة المفتوحة دون موعد.",
              uk: "Варіант a правильний: Йому слід прийти завтра на прийом у відкриті години (11:30–12:30)."
            }
          },
          {
            id: 58,
            itemNumber: 58,
            title: "Nachricht 3: Autowerkstatt Schmidt",
            audioText: "Guten Tag Frau Yilmaz, Meister Schmidt von der Autowerkstatt. Die Reparatur an Ihren Bremsen ist abgeschlossen und die TÜV-Prüfung wurde ohne Mängel bestanden. Sie können Ihr Auto heute bis 18 Uhr abholen. Die Gesamtrechnung beträgt 280 Euro und kann bar oder mit EC-Karte beglichen werden.",
            question: {
              de: "Was erfährt Frau Yilmaz über ihr Auto?",
              en: "What does Ms. Yilmaz learn about her car?",
              tr: "Bayan Yılmaz arabası hakkında ne öğrenmektedir?",
              ar: "ماذا علمت السيدة يلماز بخصوص سيارتها؟",
              uk: "Що дізнається пані Їлмаз про своє авто?"
            },
            options: [
              { key: "a", text: "Die Reparatur verzögert sich bis nächsten Montag." },
              { key: "b", text: "Das Auto ist fertig repariert und abholbereit." },
              { key: "c", text: "Sie kann die Rechnung nur bar bezahlen." }
            ],
            correct: "b",
            explanation: {
              de: "Option b ist richtig: Bremsen repariert, TÜV bestanden, Abholung heute bis 18 Uhr möglich.",
              en: "Option b is correct: Brakes are repaired, inspection passed, car is ready for pickup today until 6 pm.",
              tr: "b şıkkı doğrudur: Fren tamiri bitmiş, muayene onaylanmış ve araç teslim almaya hazır hale gelmiştir.",
              ar: "الخيار b صحيح: تمت صيانة المكابح واجتياز الفحص والسيارة جاهزة للاستلام اليوم حتى الساعة 18.",
              uk: "Варіант b правильний: Ремонт гальм завершено, авто готове до видачі сьогодні до 18:00."
            }
          },
          {
            id: 59,
            itemNumber: 59,
            title: "Nachricht 4: Möbelhaus WohnArt",
            audioText: "Hallo Herr Al-Hassan, hier ist der Lieferservice von Möbelhaus WohnArt. Ihr bestellter Esstisch ist im Zentrallager eingetroffen. Wir möchten die Lieferung für kommenden Dienstag zwischen 9:00 und 13:00 Uhr vereinbaren. Falls Sie zu dieser Zeit nicht zu Hause sind, können Sie den Tisch auch ab Montag selbst im Lager abholen.",
            question: {
              de: "Herr Al-Hassan kann...",
              en: "Mr. Al-Hassan can...",
              tr: "Bay Al-Hassan...",
              ar: "يمكن للسيد الحسن أن...",
              uk: "Пан Аль-Хассан може..."
            },
            options: [
              { key: "a", text: "den Tisch geliefert bekommen oder selbst abholen." },
              { key: "b", text: "den Tisch erst in zwei Monaten erwarten." },
              { key: "c", text: "nur samstags beliefert werden." }
            ],
            correct: "a",
            explanation: {
              de: "Option a ist richtig: Entweder Lieferung am Dienstag oder Selbstabholung ab Montag im Lager.",
              en: "Option a is correct: Either delivery on Tuesday or self-pickup from the warehouse starting Monday.",
              tr: "a şıkkı doğrudur: Salı günü teslimat alabilir veya pazartesiden itibaren depodan kendisi alabilir.",
              ar: "الخيار a صحيح: يمكنه استلام الطاولة عبر التوصيل يوم الثلاثاء أو استلامها بنفسه من المستودع.",
              uk: "Варіант a правильний: Можна оформити доставку на вівторок або забрати стіл самостійно."
            }
          },
          {
            id: 60,
            itemNumber: 60,
            title: "Nachricht 5: Volkshochschule Mitte",
            audioText: "Guten Tag, hier ist das Sekretariat der Volkshochschule. Eine wichtige Information für Ihren Deutschkurs B1 am Donnerstagabend: Wegen Malerarbeiten im Hauptgebäude findet der Unterricht ab sofort im Neubau, Raum N12 statt. Die Unterrichtszeit von 18:30 bis 20:45 Uhr bleibt unverändert.",
            question: {
              de: "Was ändert sich beim Deutschkurs?",
              en: "What changes regarding the German course?",
              tr: "Almanca kursunda ne değişmektedir?",
              ar: "ما الذي تغير في دورة اللغة الألمانية؟",
              uk: "Що змінюється в курсі німецької мови?"
            },
            options: [
              { key: "a", text: "Der Kursraum ändert sich zu Raum N12 im Neubau." },
              { key: "b", text: "Der Unterricht findet an einem anderen Wochentag statt." },
              { key: "c", text: "Die Kursgebühr wurde erhöht." }
            ],
            correct: "a",
            explanation: {
              de: "Option a ist richtig: Die Uhrzeit bleibt gleich, aber der Unterrichtsort wechselt in Raum N12 im Neubau.",
              en: "Option a is correct: Time stays the same, but the room moves to N12 in the new building.",
              tr: "a şıkkı doğrudur: Ders saati aynı kalmakta, ancak sınıf yeni binadaki N12 nolu odaya taşınmaktadır.",
              ar: "الخيار a صحيح: التوقيت دون تغيير، لكن القاعة تغيرت إلى الغرفة N12 بالمبنى الجديد.",
              uk: "Варіант a правильний: Змінюється аудиторія на N12 у новому корпусі."
            }
          }
        ]
      }
    }
,

    // ==========================================
    // ÜBUNGSTEST 3: Hörverstehen (Teile 1–3)
    // ==========================================
    {
      id: "hoer-test-3",
      title: {
        de: "Übungstest 3: Hörverstehen (Teile 1–3)",
        en: "Practice Test 3: Listening Comprehension (Parts 1–3)",
        tr: "Deneme Sınavı 3: Dinlediğini Anlama (Bölüm 1–3)",
        ar: "الاختبار التدريبي 3: فهم المسموع (الأجزاء 1–3)",
        uk: "Тренувальний тест 3: Аудіювання (Частини 1–3)"
      },
      timeEstimateMin: 30,
      badge: "telc B1 75 Punkte",

      // TEIL 1: 5 DURCHSAGEN (Einmal hören)
      teil1: {
        id: "h3-teil1",
        partName: {
          de: "Teil 1: Durchsagen und Meldungen",
          en: "Part 1: Announcements and Reports",
          tr: "Bölüm 1: Anonslar ve Kısa Duyurular",
          ar: "الجزء 1: الإعلانات والبلاغات الصوتية",
          uk: "Частина 1: Оголошення та повідомлення"
        },
        instruction: {
          de: "Sie hören fünf kurze Texte. Sie hören jeden Text nur einmal. Entscheiden Sie beim Hören, ob die Aussagen 41 bis 45 richtig oder falsch sind.",
          en: "You will hear five short audio clips once only. Decide whether statements 41 to 45 are true or false.",
          tr: "Beş kısa metin dinleyeceksiniz. Her metni yalnızca bir kez dinleyeceksiniz. Dinlerken 41-45 arasındaki ifadelerin doğru mu yanlış mı olduğuna karar veriniz.",
          ar: "ستستمع إلى خمسة نصوص قصيرة لمرة واحدة فقط. حدد أثناء الاستماع ما إذا كانت العبارات 41 إلى 45 صحيحة أم خاطئة.",
          uk: "Ви почуєте 5 коротких аудіозаписів лише один раз. Визначте, чи є твердження 41–45 правильними або неправильними."
        },
        maxPlays: 1,
        items: [
          {
            id: 41,
            itemNumber: 41,
            title: "Text 1: Flughafen Durchsage",
            audioText: "Achtung, dies ist ein wichtiger Aufruf für Fluggäste des Lufthansa-Fluges LH 2044 nach München. Wegen eines Gate-Wechsels erfolgt das Boarding ab sofort nicht wie auf Ihrer Bordkarte angegeben an Gate A12, sondern an Gate B14. Passagiere werden gebeten, sich umgehend zu Gate B14 zu begeben, da der Einstieg bereits begonnen hat.",
            statement: {
              de: "Die Passagiere nach München steigen wie geplant an Gate A12 ein.",
              en: "Passengers to Munich board at Gate A12 as planned.",
              tr: "Münih yolcuları planlandığı gibi A12 kapısından uçağa binecektir.",
              ar: "يصعد المسافرون إلى ميونيخ من البوابة A12 كما هو مخطط له.",
              uk: "Пасажири до Мюнхена здійснюють посадку через вихід A12, як і планувалося."
            },
            correct: "falsch",
            evidence: "Wegen eines Gate-Wechsels erfolgt das Boarding ab sofort nicht ... an Gate A12, sondern an Gate B14.",
            explanation: {
              de: "Falsch: Wegen eines kurzfristigen Wechsels erfolgt das Boarding an Gate B14, nicht an A12.",
              en: "False: Due to a gate change, boarding takes place at Gate B14, not A12.",
              tr: "Yanlış: Kapı değişikliği nedeniyle biniş A12'den değil, B14 kapısından yapılmaktadır.",
              ar: "خطأ: بسبب تغيير البوابة، يتم الصعود إلى الطائرة من البوابة B14 وليس A12.",
              uk: "Неправильно: Через зміну виходу посадка відбувається біля виходу B14, а не A12."
            }
          },
          {
            id: 42,
            itemNumber: 42,
            title: "Text 2: Kaufhaus Frühlingseröffnung",
            audioText: "Liebe Kundinnen und Kunden, besuchen Sie heute unsere Haushaltswarenabteilung im dritten Stock! Zur Einführung der neuen Küchengeräte zeigen Ihnen Profiköche live die besten Zubereitungstricks. Außerdem erhalten Sie heute exklusiv 20 Prozent Eröffnungsrabatt auf alle Elektrogeräte im dritten Stock.",
            statement: {
              de: "Im dritten Stock gibt es heute Vorführungen für Küchengeräte.",
              en: "On the third floor, there are cooking demonstrations today.",
              tr: "Üçüncü katta bugün mutfak aletleri tanıtım gösterileri yapılmaktadır.",
              ar: "توجد اليوم عروض توضيحية حية لأجهزة المطبخ في الطابق الثالث.",
              uk: "На третьому поверсі сьогодні проходять кулінарні майстер-класи."
            },
            correct: "richtig",
            evidence: "im 3. Stock! Zur Einführung der neuen Küchengeräte zeigen Ihnen Profiköche live die besten Zubereitungstricks.",
            explanation: {
              de: "Richtig: Profiköche demonstrieren live die Bedienung der Küchengeräte im 3. Stock.",
              en: "True: Professional chefs demonstrate cooking tricks live on the 3rd floor.",
              tr: "Doğru: Profesyonel aşçılar 3. katta mutfak aletleriyle canlı yemek gösterileri yapmaktadır.",
              ar: "صحيح: يقدم طهاة محترفون عروضاً حية ومباشرة في الطابق الثالث.",
              uk: "Правильно: Шеф-кухарі проводять презентації на третьому поверсі."
            }
          },
          {
            id: 43,
            itemNumber: 43,
            title: "Text 3: Straßenbahn Gleisbau",
            audioText: "Sehr geehrte Fahrgäste, wegen dringender Gleisbauarbeiten endet die Fahrt dieser Linie am Marktplatz. Für die Weiterfahrt Richtung Südbahnhof nutzen Sie bitte die bereitstehenden Ersatzbusse mit der Kennzeichnung SEV direkt gegenüber dem Hauptausgang.",
            statement: {
              de: "Fahrgäste zum Südbahnhof können heute direkt mit der Straßenbahn weiterfahren.",
              en: "Passengers to the South Station can continue directly by tram today.",
              tr: "Güney İstasyonu'na giden yolcular bugün doğrudan tramvayla devam edebilirler.",
              ar: "يمكن للركاب المتجهين إلى المحطة الجنوبية مواصلة رحلتهم اليوم بالترام مباشرة.",
              uk: "Пасажири до Південного вокзалу сьогодні можуть без пересадок їхати далі трамваєм."
            },
            correct: "falsch",
            evidence: "endet die Fahrt dieser Linie am Marktplatz. Für die Weiterfahrt Richtung Südbahnhof nutzen Sie bitte die bereitstehenden Ersatzbusse.",
            explanation: {
              de: "Falsch: Die Tram endet am Marktplatz; zum Südbahnhof müssen Ersatzbusse (SEV) genommen werden.",
              en: "False: The tram terminates at Marktplatz; passengers must use replacement buses.",
              tr: "Yanlış: Tramvay seferi Marktplatz'ta son bulmakta, Güney Garı için aktarma otobüsü (SEV) gerekmektedir.",
              ar: "خطأ: ينتهي مسار الترام في ساحة السوق ويجب ركوب حافلات بديلة للوصول إلى المحطة الجنوبية.",
              uk: "Неправильно: Трамвай їде лише до площі Марктплац, далі курсують компенсаційні автобуси."
            }
          },
          {
            id: 44,
            itemNumber: 44,
            title: "Text 4: Volkshochschule Nachholtermin",
            audioText: "Guten Tag, hier ist die Volkshochschule Mitte. Für alle Teilnehmenden des Spanischkurses B1 von Dozentin Frau Ramos: Der heutige Abendkurs muss krankheitsbedingt leider entfallen. Als Nachholtermin wurde Samstag, der 24. Oktober, von 10:00 bis 13:00 Uhr vereinbart. Der Unterricht findet im Raum 202 statt.",
            statement: {
              de: "Der ausgefallene Spanischkurs wird an einem Samstag nachgeholt.",
              en: "The cancelled Spanish class will be made up on a Saturday.",
              tr: "İptal edilen İspanyolca dersinin telafisi bir cumartesi günü yapılacaktır.",
              ar: "سيتم تعويض درس اللغة الإسبانية الملغى في يوم سبت.",
              uk: "Скасоване заняття з іспанської мови буде проведено в суботу."
            },
            correct: "richtig",
            evidence: "Als Nachholtermin wurde Samstag, der 24. Oktober, von 10:00 bis 13:00 Uhr vereinbart.",
            explanation: {
              de: "Richtig: Der Ersatztermin findet am Samstag von 10:00 bis 13:00 Uhr statt.",
              en: "True: The make-up class takes place on Saturday from 10 am to 1 pm.",
              tr: "Doğru: Telafi dersi 24 Ekim Cumartesi günü saat 10:00 - 13:00 arasında yapılacaktır.",
              ar: "صحيح: تم تحديد موعد التعويض يوم السبت من العاشرة صباحاً حتى الواحدة ظهراً.",
              uk: "Правильно: Компенсаційне заняття відбудеться в суботу з 10:00 до 13:00."
            }
          },
          {
            id: 45,
            itemNumber: 45,
            title: "Text 5: Wetterdienst Unwetterwarnung",
            audioText: "Und hier die Wettervorhersage für morgen: Während es im Süden weiterhin sonnig und freundlich bleibt, zieht von der Nordsee her ein Tiefdruckgebiet auf. Im gesamten Norden muss mit Sturmböen, ergiebigem Dauerregen und einem deutlichen Temperaturrückgang auf maximal 14 Grad gerechnet werden.",
            statement: {
              de: "Im Norden Deutschlands bleibt es morgen den ganzen Tag trocken und sommerlich warm.",
              en: "In northern Germany, tomorrow will stay dry and summerly warm all day.",
              tr: "Kuzey Almanya'da yarın tüm gün kuru ve yaz sıcağında geçecektir.",
              ar: "سيبقى الطقس في شمال ألمانيا جافاً ودافئاً طوال اليوم غداً.",
              uk: "На півночі Німеччини завтра цілий день буде сухо й тепло, як улітку."
            },
            correct: "falsch",
            evidence: "Im gesamten Norden muss mit Sturmböen, ergiebigem Dauerregen und einem deutlichen Temperaturrückgang auf maximal 14 Grad gerechnet werden.",
            explanation: {
              de: "Falsch: Für den Norden werden Sturm, Dauerregen und maximal 14 Grad gemeldet.",
              en: "False: Northern Germany will experience storm gusts, continuous rain, and highs of only 14 degrees.",
              tr: "Yanlış: Kuzeyde fırtına, sürekli yağmur ve en fazla 14 derece sıcaklık beklenmektedir.",
              ar: "خطأ: من المتوقع هبوب عواصف وهطول أمطار غزيرة متواصلة وألا تتعدى الحرارة 14 درجة شمالاً.",
              uk: "Неправильно: На півночі прогнозують штормовий вітер, зливи та максимум 14 градусів тепла."
            }
          }
        ]
      },

      // TEIL 2: RADIO-INTERVIEW (Zweimal hören)
      teil2: {
        id: "h3-teil2",
        partName: {
          de: "Teil 2: Radio-Interview / Gespräch",
          en: "Part 2: Radio Interview / Conversation",
          tr: "Bölüm 2: Radyo Röportajı / Söyleşi",
          ar: "الجزء 2: مقابلة إذاعية / حوار",
          uk: "Частина 2: Радіоінтерв'ю / Розмова"
        },
        instruction: {
          de: "Sie hören ein Gespräch im Radio. Sie hören den Text zweimal. Entscheiden Sie beim Hören, ob die Aussagen 46 bis 55 richtig oder falsch sind.",
          en: "You will hear an interview on the radio twice. Decide whether statements 46 to 55 are true or false.",
          tr: "Radyoda bir söyleşi dinleyeceksiniz. Metni iki kez dinleyeceksiniz. Dinlerken 46-55 arasındaki ifadelerin doğru mu yanlış mı olduğuna karar veriniz.",
          ar: "ستستمع إلى مقابلة إذاعية مرتين. حدد أثناء الاستماع ما إذا كانت العبارات 46 إلى 55 صحيحة أم خاطئة.",
          uk: "Ви двічі почуєте інтерв'ю на радіо. Визначте, чи є твердження 46–55 правильними або неправильними."
        },
        maxPlays: 2,
        audioText: "Moderatorin: Herzlich willkommen zu unserer Sendung 'Zukunft aktiv gestalten'. Heute bei uns im Studio: Timo Bergmann. Timo hat vor drei Jahren das erste Repair-Café in unserer Stadt gegründet. Timo, was genau passiert in einem Repair-Café?\n\nTimo: Hallo Frau Klein! Das Prinzip ist ganz simpel: Menschen bringen kaputte Alltagsgegenstände mit – vom Toaster über das alte Kofferradio bis hin zum Kinderfahrrad. Gemeinsam mit ehrenamtlichen Reparateuren versuchen wir dann, die Sachen wieder in Ordnung zu bringen. Bei Kaffee und Kuchen, in lockerer Atmosphäre.\n\nModeratorin: Und das kostet die Besucher nichts?\n\nTimo: Genau, unsere Hilfe ist völlig kostenlos! Wer möchte, kann eine kleine Spende in unsere Kaffeekasse werfen, damit wir Werkzeuge oder Lötzinn nachkaufen können. Wir sind kein kommerzieller Reparaturservice, sondern ein gemeinnütziger Treffpunkt.\n\nModeratorin: Braucht man handwerkliche Vorkenntnisse, um zu Ihnen zu kommen?\n\nTimo: Überhaupt nicht! Unsere Profis zeigen Schritt für Schritt, wie man ein Gehäuse öffnet oder ein Kabel repariert. Die Leute sollen lernen, dass man nicht alles sofort wegwerfen muss.\n\nModeratorin: Wie viele Gegenstände können Sie denn tatsächlich retten?\n\nTimo: Unsere Erfolgsquote liegt bei erstaunlichen 65 bis 70 Prozent. Meistens sind es nur kleine Kontakte, die verschmutzt sind, oder Sicherungen, die getauscht werden müssen.\n\nModeratorin: Wie oft hat das Café geöffnet?\n\nTimo: Wir öffnen jeden zweiten Samstag im Monat in den Räumen des Bürgerzentrums. Allerdings suchen wir dringend weitere Helferinnen und Helfer, vor allem mit Elektronik-Erfahrung, um in Zukunft wöchentlich öffnen zu können.",
        items: [
          {
            id: 46,
            itemNumber: 46,
            statement: {
              de: "Timo Bergmann hat das Repair-Café vor fünf Jahren gegründet.",
              en: "Timo Bergmann founded the Repair Café five years ago.",
              tr: "Timo Bergmann Repair-Café'yi beş yıl önce kurmuştur.",
              ar: "أسس تيمو بيرغمان مقهى التصليح (Repair-Café) قبل خمس سنوات.",
              uk: "Тімо Бергманн заснував Repair-Café п'ять років тому."
            },
            correct: "falsch",
            explanation: {
              de: "Falsch: Die Moderatorin sagt, dass Timo das Projekt vor drei Jahren gegründet hat.",
              en: "False: The host states Timo founded the project three years ago, not five.",
              tr: "Yanlış: Sunucu, Timo'nun projeyi 5 yıl önce değil, 3 yıl önce kurduğunu söyler.",
              ar: "خطأ: ذكرت المذيعة أن تيمو أسس المقهى قبل ثلاث سنوات وليس خمس.",
              uk: "Неправильно: Ведуча зазначила, що проєкт було засновано три роки тому."
            }
          },
          {
            id: 47,
            itemNumber: 47,
            statement: {
              de: "Im Repair-Café reparieren Fachleute und Besucher die Gegenstände gemeinsam.",
              en: "In the Repair Café, experts and visitors repair items together.",
              tr: "Repair-Café'de uzmanlar ve ziyaretçiler eşyaları birlikte tamir etmektedir.",
              ar: "في مقهى التصليح، يقوم الخبراء والزوار بإصلاح الأشياء معاً.",
              uk: "У Repair-Café майстри та відвідувачі ремонтують речі разом."
            },
            correct: "richtig",
            explanation: {
              de: "Richtig: Timo betont: 'Gemeinsam mit ehrenamtlichen Reparateuren versuchen wir dann, die Sachen wieder in Ordnung zu bringen.'",
              en: "True: Timo explains visitors and volunteer repairers fix things together.",
              tr: "Doğru: Timo gönüllü ustalarla ziyaretçilerin eşyaları birlikte tamir ettiğini belirtir.",
              ar: "صحيح: يؤكد تيمو أنهم يصلحون الأغراض سوياً في أجواء مريحة وودية.",
              uk: "Правильно: Волонтери та гості спільно лагодять зламані прилади."
            }
          },
          {
            id: 48,
            itemNumber: 48,
            statement: {
              de: "Für jede Reparatur verlangt das Repair-Café eine feste Gebühr.",
              en: "The Repair Café charges a fixed fee for every repair.",
              tr: "Repair-Café yapılan her tamirat için sabit bir ücret talep etmektedir.",
              ar: "يتقاضى مقهى التصليح رسوماً ثابتة مقابل كل عملية إصلاح.",
              uk: "За кожен ремонт у Repair-Café стягується фіксована плата."
            },
            correct: "falsch",
            explanation: {
              de: "Falsch: Timo erklärt: 'unsere Hilfe ist völlig kostenlos! Wer möchte, kann eine kleine Spende ... werfen.'",
              en: "False: Assistance is completely free; voluntary donations are accepted.",
              tr: "Yanlış: Yardım tamamen ücretsizdir, dileyen bağış kutusuna katkıda bulunur.",
              ar: "خطأ: المساعدة مجانية تماماً والتبرع في الصندوق اختياري لمن يرغب.",
              uk: "Неправильно: Допомога безкоштовна, внески лише добровільні."
            }
          },
          {
            id: 49,
            itemNumber: 49,
            statement: {
              de: "Die freiwilligen Spenden werden für Werkzeuge und Materialien genutzt.",
              en: "Voluntary donations are used for tools and materials.",
              tr: "Gönüllü bağışlar aletler ve tamir malzemeleri için kullanılmaktadır.",
              ar: "تُستخدم التبرعات الطوعية لشراء الأدوات ومستلزمات التصليح.",
              uk: "Добровільні пожертви витрачаються на інструменти та матеріали."
            },
            correct: "richtig",
            explanation: {
              de: "Richtig: Spenden dienen dazu, Werkzeuge oder Lötzinn nachzukaufen.",
              en: "True: Donations are used to purchase new tools and soldering wire.",
              tr: "Doğru: Bağışlar alet veya lehim teli gibi malzemeleri satın almak için kullanılır.",
              ar: "صحيح: تُنفق أموال التبرعات لشراء العدد وأسلاك اللحام.",
              uk: "Правильно: За пожертви докуповують інструменти та припій."
            }
          },
          {
            id: 50,
            itemNumber: 50,
            statement: {
              de: "Besucher müssen handwerkliche Vorkenntnisse mitbringen, um Hilfe zu erhalten.",
              en: "Visitors must have prior handicraft knowledge to receive help.",
              tr: "Ziyaretçilerin yardım alabilmesi için önceden tamir bilgisine sahip olması şarttır.",
              ar: "يشترط أن يمتلك الزوار خبرة يدوية مسبقة لتلقي المساعدة.",
              uk: "Відвідувачі повинні мати попередній досвід ручної праці, щоб отримати допомогу."
            },
            correct: "falsch",
            explanation: {
              de: "Falsch: 'Überhaupt nicht! Unsere Profis zeigen Schritt für Schritt, wie man ein Gehäuse öffnet.'",
              en: "False: No prior knowledge needed; experts demonstrate everything step by step.",
              tr: "Yanlış: Hiçbir ön bilgi gerekmez; uzmanlar adım adım her şeyi öğretir.",
              ar: "خطأ: لا حاجة لأي معرفة مسبقة على الإطلاق؛ فالخبراء يشرحون الخطوات بالتفصيل.",
              uk: "Неправильно: Досвід не потрібен, майстри показують усе покроково."
            }
          },
          {
            id: 51,
            itemNumber: 51,
            statement: {
              de: "Die Erfolgsquote bei den Reparaturen liegt bei über 60 Prozent.",
              en: "The success rate for repairs is over 60 percent.",
              tr: "Tamirattaki başarı oranı yüzde 60'ın üzerindedir.",
              ar: "تتجاوز نسبة نجاح عمليات التصليح 60 بالمائة.",
              uk: "Відсоток успішних ремонтів перевищує 60 відсотків."
            },
            correct: "richtig",
            explanation: {
              de: "Richtig: Timo nennt eine Erfolgsquote von 65 bis 70 Prozent.",
              en: "True: Timo reports a success rate of 65 to 70 percent.",
              tr: "Doğru: Timo başarı oranının yüzde 65 ile 70 arasında olduğunu belirtir.",
              ar: "صحيح: تتراوح نسبة النجاح بين 65 و 70 بالمائة، أي أكثر من 60%.",
              uk: "Правильно: Тімо зазначає успішність на рівні 65–70%."
            }
          },
          {
            id: 52,
            itemNumber: 52,
            statement: {
              de: "Viele Geräte sind nur wegen schmutziger Kontakte oder defekter Sicherungen kaputt.",
              en: "Many appliances are broken only due to dirty contacts or defective fuses.",
              tr: "Birçok cihaz yalnızca kirli temas noktaları veya arızalı sigortalar yüzünden çalışmamaktadır.",
              ar: "كثير من الأجهزة معطلة فقط بسبب اتساخ نقاط التوصيل أو تلف الفيوزات.",
              uk: "Багато приладів несправні лише через забруднені контакти або запобіжники."
            },
            correct: "richtig",
            explanation: {
              de: "Richtig: 'Meistens sind es nur kleine Kontakte, die verschmutzt sind, oder Sicherungen, die getauscht werden müssen.'",
              en: "True: Often just dirty contacts or small fuses need replacement.",
              tr: "Doğru: Çoğunlukla sadece kirlenmiş kontaklar veya değişmesi gereken sigortalar sebep olmaktadır.",
              ar: "صحيح: غالباً ما تكون المشكلة مجرد نقاط تلامس متسخة أو صمامات تحتاج للاستبدال.",
              uk: "Правильно: Зазвичай причина в забруднених контактах або запобіжниках."
            }
          },
          {
            id: 53,
            itemNumber: 53,
            statement: {
              de: "Das Repair-Café hat bisher an jedem Wochenende geöffnet.",
              en: "So far, the Repair Café has been open every weekend.",
              tr: "Repair-Café şu ana kadar her hafta sonu hizmet vermiştir.",
              ar: "كان مقهى التصليح يفتح أبوابه حتى الآن في كل عطلة نهاية أسبوع.",
              uk: "Repair-Café досі працювало щовихідних."
            },
            correct: "falsch",
            explanation: {
              de: "Falsch: Sie öffnen bisher nur jeden zweiten Samstag im Monat.",
              en: "False: They only open every second Saturday of the month so far.",
              tr: "Yanlış: Şimdiye kadar yalnızca ayın ikinci cumartesi günleri açılmaktadır.",
              ar: "خطأ: يفتح المقهى حالياً في السبت الثاني فقط من كل شهر.",
              uk: "Неправильно: Поки що заклад відчинений лише кожної другої суботи місяця."
            }
          },
          {
            id: 54,
            itemNumber: 54,
            statement: {
              de: "Die Reparaturtreffen finden in den Räumen des Bürgerzentrums statt.",
              en: "The repair meetings take place in the community center.",
              tr: "Tamirat buluşmaları yerel toplum merkezinin (Bürgerzentrum) salonlarında yapılmaktadır.",
              ar: "تُعقد لقاءات التصليح في قاعات مركز المواطنين (Bürgerzentrum).",
              uk: "Зустрічі відбуваються в приміщенні громадського центру."
            },
            correct: "richtig",
            explanation: {
              de: "Richtig: 'Wir öffnen ... in den Räumen des Bürgerzentrums.'",
              en: "True: Meetings are held in the rooms of the local civic/community center.",
              tr: "Doğru: Toplum merkezinin salonlarında açıldığını belirtmiştir.",
              ar: "صحيح: تُعقد اللقاءات في قاعات مركز خدمة المواطنين المحلي.",
              uk: "Правильно: Зустрічі проходять у приміщеннях громадського центру."
            }
          },
          {
            id: 55,
            itemNumber: 55,
            statement: {
              de: "Das Projekt sucht aktuell keine weiteren ehrenamtlichen Helfer mehr.",
              en: "The project is currently not looking for any more volunteers.",
              tr: "Proje şu anda daha fazla gönüllü yardımcı aramamaktadır.",
              ar: "لا يبحث المشروع حالياً عن المزيد من المتطوعين.",
              uk: "Проєкт зараз більше не шукає нових волонтерів."
            },
            correct: "falsch",
            explanation: {
              de: "Falsch: Timo sucht dringend weitere Helferinnen und Helfer, vor allem mit Elektronik-Erfahrung.",
              en: "False: Timo is urgently seeking more volunteers, especially with electronics knowledge.",
              tr: "Yanlış: Özellikle elektronik tecrübesi olan yeni gönüllülere acil ihtiyaç duymaktadırlar.",
              ar: "خطأ: يبحث تيمو بشكل عاجل عن متطوعين جدد خاصة من ذوي الخبرة في الإلكترونيات.",
              uk: "Неправильно: Команда дуже потребує нових помічників, особливо знавців електроніки."
            }
          }
        ]
      },

      // TEIL 3: TELEFONANSAGEN (Zweimal hören)
      teil3: {
        id: "h3-teil3",
        partName: {
          de: "Teil 3: Telefonansagen und Mailbox",
          en: "Part 3: Phone Messages and Voicemail",
          tr: "Bölüm 3: Telefon Telesekreter Mesajları",
          ar: "الجزء 3: رسائل الهاتف والبريد الصوتي",
          uk: "Частина 3: Телефонні повідомлення та автовідповідач"
        },
        instruction: {
          de: "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
          en: "You will hear five short telephone messages twice. Choose the correct solution a, b, or c for each task.",
          tr: "Beş kısa telefon mesajı dinleyeceksiniz. Her mesajı iki kez dinleyeceksiniz. Her soru için doğru seçenek a, b veya c'yi işaretleyiniz.",
          ar: "ستستمع إلى خمس رسائل هاتفية قصيرة مرتين. اختر الحل الصحيح a أو b أو c لكل سؤال.",
          uk: "Ви двічі почуєте 5 коротких телефонних повідомлень. Оберіть правильний варіант a, b або c для кожного завдання."
        },
        maxPlays: 2,
        items: [
          {
            id: 56,
            itemNumber: 56,
            title: "Nachricht 1: Heizungsservice WärmePlus",
            audioText: "Hallo Frau Weber, hier spricht Becker vom Heizungsservice WärmePlus. Unser Techniker muss morgen leider einen Notfall bei einem Rohrbruch vorziehen. Deshalb schafft er es nicht um 08:00 Uhr zu Ihnen, sondern erst gegen 10:00 Uhr. Bitte geben Sie uns kurz Bescheid, ob das für Sie in Ordnung ist.",
            question: {
              de: "Warum ruft Herr Becker von der Heizungsfirma an?",
              en: "Why is Mr. Becker from the heating company calling?",
              tr: "Isıtma servisinden Bay Becker neden aramaktadır?",
              ar: "لماذا يتصل السيد بيكر من شركة التدفئة؟",
              uk: "Чому телефонує пан Бекер зі служби опалення?"
            },
            options: [
              { key: "a", text: "Er muss den morgigen Wartungstermin um zwei Stunden verschieben." },
              { key: "b", text: "Die Ersatzteile für die Heizung sind nicht mehr lieferbar." },
              { key: "c", text: "Die Kundin soll die Rechnung sofort überweisen." }
            ],
            correct: "a",
            explanation: {
              de: "Option a ist richtig: Der Techniker kommt wegen eines Rohrbruch-Notfalls erst um 10:00 statt um 08:00 Uhr (Termin um zwei Stunden verschoben).",
              en: "Option a is correct: The technician arrives at 10 am instead of 8 am due to an emergency pipe repair.",
              tr: "a şıkkı doğrudur: Acil bir boru patlaması nedeniyle teknisyen 8:00 yerine 10:00'da gelecektir (iki saat erteleme).",
              ar: "الخيار a صحيح: يتأخر الفني ساعتين ويصل في العاشرة بدلاً من الثامنة بسبب حالة طوارئ.",
              uk: "Варіант a правильний: Майстер прибуде о 10:00 замість 8:00 через терміновий виклик."
            }
          },
          {
            id: 57,
            itemNumber: 57,
            title: "Nachricht 2: Tierarztpraxis Dr. Sander",
            audioText: "Guten Tag Herr Demir, hier ist die Tierarztpraxis Dr. Sander. Wir möchten Sie an die morgige Zahnbehandlung Ihres Hundes um 09:30 Uhr erinnern. Wichtig: Bitte geben Sie ihm ab heute Abend 22:00 Uhr kein Futter mehr. Trinken darf er bis morgen früh normal. Bis morgen!",
            question: {
              de: "Was soll Herr Demir vor dem Tierarzttermin beachten?",
              en: "What should Mr. Demir keep in mind before the vet appointment?",
              tr: "Bay Demir veteriner randevusundan önce neye dikkat etmelidir?",
              ar: "ما الذي يجب على السيد دمير مراعاته قبل موعد الطبيب البيطري؟",
              uk: "На що має звернути увагу пан Демір перед візитом до ветеринара?"
            },
            options: [
              { key: "a", text: "Den Hund heute noch zweimal impfen lassen." },
              { key: "b", text: "Dem Hund ab 22:00 Uhr abends nichts mehr zu fressen geben." },
              { key: "c", text: "Den Termin auf nächste Woche verschieben." }
            ],
            correct: "b",
            explanation: {
              de: "Option b ist richtig: Der Hund soll vor der morgigen Narkose/Zahnbehandlung ab 22:00 Uhr nüchtern bleiben (kein Futter mehr).",
              en: "Option b is correct: The dog must not receive food after 10 pm before the procedure.",
              tr: "b şıkkı doğrudur: Köpeğe saat 22:00'den itibaren operasyon öncesi mama verilmemesi gerekmektedir.",
              ar: "الخيار b صحيح: عدم تقديم أي طعام للكلب بعد الساعة العاشرة مساءً استعداداً للعلاج.",
              uk: "Варіант b правильний: Не годувати собаку після 22:00 перед операцією."
            }
          },
          {
            id: 58,
            itemNumber: 58,
            title: "Nachricht 3: Reisebüro Sonnenziel",
            audioText: "Hallo Familie Kaya, hier ist Ihr Reisebüro Sonnenziel. Die Fluggesellschaft hat uns soeben über eine Flugzeitenänderung informiert. Ihr Hinflug nach Antalya startet am Freitag nicht um 14:30 Uhr, sondern bereits um 11:15 Uhr vormittags. Ihre neuen Reiseunterlagen haben wir Ihnen per Mail geschickt.",
            question: {
              de: "Was teilt das Reisebüro mit?",
              en: "What does the travel agency announce?",
              tr: "Seyahat acentesi ne bildirmektedir?",
              ar: "ماذا أعلنت وكالة السفر؟",
              uk: "Що повідомляє туристична агенція?"
            },
            options: [
              { key: "a", text: "Der Abflug am Freitag wurde auf den Vormittag vorverlegt." },
              { key: "b", text: "Das gebuchte Hotel in Antalya ist überbucht." },
              { key: "c", text: "Der Urlaub muss um eine Woche verschoben werden." }
            ],
            correct: "a",
            explanation: {
              de: "Option a ist richtig: Der Flug startet früher (11:15 statt 14:30 Uhr), wurde also vorverlegt.",
              en: "Option a is correct: The departure was moved earlier to 11:15 am instead of 2:30 pm.",
              tr: "a şıkkı doğrudur: Cuma günkü uçuş 14:30 yerine 11:15'e, yani sabah saatine çekilmiştir.",
              ar: "الخيار a صحيح: تم تقديم موعد الرحلة إلى الساعة 11:15 صباحاً بدلاً من 14:30.",
              uk: "Варіант a правильний: Виліт у п'ятницю перенесено на першу половину дня (11:15)."
            }
          },
          {
            id: 59,
            itemNumber: 59,
            title: "Nachricht 4: Kfz-Werkstatt Meister Wagner",
            audioText: "Guten Tag Herr Schmidt, Meister Wagner von der Kfz-Werkstatt hier. Gute Nachrichten: Die Inspektion und die TÜV-Hauptuntersuchung sind ohne Mängel abgeschlossen. Sie können Ihren Wagen heute noch bis 18:00 Uhr oder morgen ab 07:30 Uhr bei uns abholen.",
            question: {
              de: "Was erfährt Herr Schmidt über seinen Wagen?",
              en: "What does Mr. Schmidt learn about his car?",
              tr: "Bay Schmidt aracı hakkında ne öğrenmektedir?",
              ar: "ماذا علم السيد شميدت بخصوص سيارته؟",
              uk: "Що дізнається пан Шмідт про свій автомобіль?"
            },
            options: [
              { key: "a", text: "Das Auto hat keinen TÜV erhalten und braucht neue Teile." },
              { key: "b", text: "Die Hauptuntersuchung war erfolgreich und das Auto ist abholbereit." },
              { key: "c", text: "Die Abholung ist erst nächste Woche Dienstag möglich." }
            ],
            correct: "b",
            explanation: {
              de: "Option b ist richtig: Der Wagen hat die TÜV-Prüfung ohne Mängel bestanden und steht zur Abholung bereit.",
              en: "Option b is correct: The car passed inspection with zero flaws and is ready for pickup.",
              tr: "b şıkkı doğrudur: Araç TÜV muayenesinden kusursuz geçmiş ve teslime hazır durumdadır.",
              ar: "الخيار b صحيح: اجتازت السيارة الفحص الفني دون أي ملاحظات وهي جاهزة للاستلام.",
              uk: "Варіант b правильний: Автомобіль успішно пройшов техогляд і готовий до видачі."
            }
          },
          {
            id: 60,
            itemNumber: 60,
            title: "Nachricht 5: Nachbar Frank",
            audioText: "Hallo David, hier ist Frank aus dem zweiten Stock. Ich erwarte heute Nachmittag ein wichtiges Paket mit Medikamenten, muss aber unerwartet länger im Büro bleiben. Könntest du das Paket annehmen, falls der Bote bei dir klingelt? Ich hole es dann heute Abend gegen 20 Uhr bei dir ab. Tausend Dank!",
            question: {
              de: "Worum bittet Nachbar Frank?",
              en: "What does neighbor Frank ask for?",
              tr: "Komşu Frank ne rica etmektedir?",
              ar: "ماذا يطلب الجار فرانك؟",
              uk: "Про що просить сусід Франк?"
            },
            options: [
              { key: "a", text: "Dass David ihm seinen Schlüssel für die Wohnung bringt." },
              { key: "b", text: "Dass David heute Abend leise Musik hört." },
              { key: "c", text: "Dass David ein dringendes Paket für ihn entgegennimmt." }
            ],
            correct: "c",
            explanation: {
              de: "Option c ist richtig: Frank bittet David, das wichtige Medikamentenpaket vom Boten anzunehmen.",
              en: "Option c is correct: Frank asks David to accept an important medicine delivery for him.",
              tr: "c şıkkı doğrudur: Frank, kurye geldiğinde kendisi adına ilaç paketini teslim almasını rica eder.",
              ar: "الخيار c صحيح: يطلب فرانك من جاره استلام طرد أدوية عاجل نيابة عنه.",
              uk: "Варіант c правильний: Франк просить прийняти для нього важливу посилку з ліками."
            }
          }
        ]
      }
    }

  ];

})();
