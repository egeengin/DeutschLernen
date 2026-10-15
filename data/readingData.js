/**
 * DeutschLernen - telc Deutsch B1 Leseverstehen (Reading Comprehension) Dataset
 * Features authentic telc B1 exam text types:
 * - Teil 1: Globalverstehen (Überschriften & Zuordnung)
 * - Teil 2: Detailverstehen (Pressebericht & Dreifachauswahl A/B/C)
 * - Teil 3: Selektives Verstehen (Kleinanzeigen & Situationen)
 * - Teil 4/Sprachbausteine: E-Mail Reklamation & Alltagsanfragen
 * Full 4-language parity: German (DE), English (EN), Turkish (TR), Arabic (AR), Ukrainian (UK).
 */

window.READING_DATASET = [
  {
    "id": "lese-teil1-freizeit",
    "part": "Teil 1",
    "partName": {
      "de": "Teil 1: Globalverstehen",
      "en": "Part 1: Global Comprehension",
      "tr": "Bölüm 1: Genel Anlama (Başlık Eşleştirme)",
      "ar": "الجزء 1: الفهم العام (مطابقة العناوين)",
      "uk": "Частина 1: Загальне розуміння (Зіставлення заголовків)"
    },
    "title": {
      "de": "Freizeitgestaltung und Ehrenamt in Deutschland",
      "en": "Leisure Activities and Volunteering in Germany",
      "tr": "Almanya'da Boş Zaman Etkinlikleri ve Gönüllülük",
      "ar": "أنشطة وقت الفراغ والعمل التطوعي في ألمانيا",
      "uk": "Дозвілля та волонтерство в Німеччині"
    },
    "level": "B1",
    "timeEstimateMin": 12,
    "badge": "telc B1 Standard",
    "summary": {
      "de": "Ein Text über das Vereinsleben, bürgerschaftliches Engagement und die Bedeutung ehrenamtlicher Tätigkeiten in deutschen Städten.",
      "en": "A passage about club life, civic engagement, and the significance of volunteer work across German towns.",
      "tr": "Almanya'daki dernek kültürü, sivil katılım ve gönüllü çalışmaların toplumsal önemi üzerine bir okuma parçası.",
      "ar": "نص حول ثقافة النوادي والجمعيات والمشاركة المدنية وأهمية العمل التطوعي في المدن الألمانية.",
      "uk": "Текст про клубне життя, громадянську активність та значення волонтерської діяльності в містах Німеччини."
    },
    "contentParagraphs": [
      {
        "id": "p1",
        "de": "In Deutschland engagieren sich mehr als 28 Millionen Menschen in ihrer Freizeit freiwillig. Dieses sogenannte Ehrenamt ist das Herzstück des gesellschaftlichen Zusammenlebens. Ob bei der Freiwilligen Feuerwehr, im Sportverein, im Umweltschutz oder bei der Unterstützung von älteren Mitbürgern – ohne freiwillige Helferinnen und Helfer würden viele öffentliche Angebote nicht existieren."
      },
      {
        "id": "p2",
        "de": "Besonders beliebt sind Sportvereine, in denen Kinder und Erwachsene gemeinsam trainieren. Für viele Menschen ist der Sportverein nicht nur ein Ort für Fitness, sondern auch eine wichtige Gelegenheit, neue Freundschaften zu schließen und Kontakte zu knüpfen. Zuwanderer und Neuzugezogene berichten häufig, dass ihnen der Beitritt zu einem lokalen Verein den Einstieg in die deutsche Sprache und Kultur wesentlich erleichtert hat."
      },
      {
        "id": "p3",
        "de": "Allerdings stehen viele Vereine heute vor personellen Herausforderungen. Immer weniger jüngere Menschen sind bereit, langfristige Verpflichtungen wie Vorstandsposten oder regelmäßige Traineraufgaben zu übernehmen. Experten empfehlen daher flexible Projekte und kürzere Einsätze, damit auch Berufstätige mit wenig Zeit einen Beitrag leisten können."
      }
    ],
    "glossary": [
      {
        "de": "das Ehrenamt",
        "article": "das",
        "plural": "die Ehrenämter",
        "pos": "noun",
        "en": "volunteer work / honorary post",
        "tr": "gönüllü görev / kamu yararına ücretsiz hizmet",
        "ar": "العمل التطوعي / منصب شرفي",
        "uk": "волонтерська діяльність / громадська посада",
        "example_de": "Sie übt seit vielen Jahren ein Ehrenamt im Tierheim aus."
      },
      {
        "de": "sich engagieren",
        "article": "",
        "plural": "",
        "pos": "verb",
        "en": "to get involved / volunteer",
        "tr": "gönüllü olarak yer almak / çaba göstermek",
        "ar": "ينخرط / يتطوع / يلتزم",
        "uk": "займатися громадською діяльністю / брати активну участь",
        "example_de": "Viele Jugendliche engagieren sich für den Klimaschutz."
      },
      {
        "de": "der Zusammenhalt",
        "article": "der",
        "plural": "-",
        "pos": "noun",
        "en": "cohesion / solidarity",
        "tr": "dayanışma / birliktelik",
        "ar": "الترابط / التضامن",
        "uk": "згуртованість / солідарність",
        "example_de": "Das gemeinsame Fest stärkt den sozialen Zusammenhalt im Viertel."
      },
      {
        "de": "Kontakte knüpfen",
        "article": "",
        "plural": "",
        "pos": "phrase",
        "en": "to make contacts / network",
        "tr": "bağlantı kurmak / yeni çevre edinmek",
        "ar": "تكوين علاقات / بناء شبكة معارف",
        "uk": "налагоджувати контакти / заводити знайомства",
        "example_de": "Im Verein kann man schnell neue Kontakte knüpfen."
      },
      {
        "de": "die Verpflichtung",
        "article": "die",
        "plural": "die Verpflichtungen",
        "pos": "noun",
        "en": "commitment / obligation",
        "tr": "yükümlülük / taahhüt",
        "ar": "التزام / واجب",
        "uk": "зобов'язання / обов'язок",
        "example_de": "Eine Vereinsleitung bedeutet eine große zeitliche Verpflichtung."
      },
      {
        "de": "die Feuerwehr",
        "article": "die",
        "plural": "die Feuerwehren",
        "pos": "noun",
        "en": "fire department / fire brigade",
        "tr": "itfaiye",
        "ar": "فرقة الإطفاء / إدارة المطافئ",
        "uk": "пожежна команда / служба порятунку",
        "example_de": "Er engagiert sich ehrenamtlich bei der Freiwilligen Feuerwehr."
      },
      {
        "de": "der Verein",
        "article": "der",
        "plural": "die Vereine",
        "pos": "noun",
        "en": "club / association",
        "tr": "dernek / kulüp",
        "ar": "جمعية / نادٍ / رابطة",
        "uk": "клуб / громадська організація / товариство",
        "example_de": "Der lokale Sportverein bietet viele Kurse für Kinder an."
      },
      {
        "de": "freiwillig",
        "article": "",
        "plural": "",
        "pos": "adj",
        "en": "voluntary / of one's own free will",
        "tr": "gönüllü / isteğe bağlı",
        "ar": "طوعي / تطوعي",
        "uk": "добровільний / волонтерський",
        "example_de": "Mehr als 28 Millionen Menschen arbeiten freiwillig in ihrer Freizeit."
      },
      {
        "de": "die Unterstützung",
        "article": "die",
        "plural": "die Unterstützungen",
        "pos": "noun",
        "en": "support / assistance",
        "tr": "destek / yardım",
        "ar": "الدعم / المساعدة",
        "uk": "підтримка / допомога",
        "example_de": "Ältere Mitbürger benötigen oft praktische Unterstützung im Alltag."
      },
      {
        "de": "die Herausforderung",
        "article": "die",
        "plural": "die Herausforderungen",
        "pos": "noun",
        "en": "challenge",
        "tr": "zorluk / meydan okuma",
        "ar": "تحدٍ / مهمة صعبة",
        "uk": "виклик / складне завдання",
        "example_de": "Viele Vereine stehen vor personellen Herausforderungen."
      },
      {
        "de": "der Beitrag",
        "article": "der",
        "plural": "die Beiträge",
        "pos": "noun",
        "en": "contribution / membership fee",
        "tr": "katkı / aidat",
        "ar": "مساهمة / اشتراك",
        "uk": "внесок / участь",
        "example_de": "Jeder Bürger kann einen wertvollen Beitrag zur Gemeinschaft leisten."
      },
      {
        "de": "die Freundschaft",
        "article": "die",
        "plural": "die Freundschaften",
        "pos": "noun",
        "en": "friendship",
        "tr": "arkadaşlık / dostluk",
        "ar": "صداقة / علاقة مودة",
        "uk": "дружба / дружні стосунки",
        "example_de": "Im Verein kann man schnell neue Freundschaften schließen."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "paragraphRef": "p1",
        "type": "true_false",
        "prompt": {
          "de": "Freiwillige Arbeit ist für viele öffentliche Dienstleistungen in Deutschland unverzichtbar.",
          "en": "Volunteer work is indispensable for many public services in Germany.",
          "tr": "Gönüllü çalışma, Almanya'daki birçok kamu hizmeti için vazgeçilmezdir.",
          "ar": "العمل التطوعي لا غنى عنه للعديد من الخدمات العامة في ألمانيا.",
          "uk": "Волонтерська праця є незамінною для багатьох громадських послуг у Німеччині."
        },
        "options": [
          {
            "de": "Richtig",
            "en": "True",
            "tr": "Doğru",
            "ar": "صحيح",
            "uk": "Правильно"
          },
          {
            "de": "Falsch",
            "en": "False",
            "tr": "Yanlış",
            "ar": "خطأ",
            "uk": "Неправильно"
          }
        ],
        "correct": 0,
        "explanation": {
          "de": "Im Text (Absatz 1) heißt es ausdrücklich: 'ohne freiwillige Helferinnen und Helfer würden viele öffentliche Angebote nicht existieren.'",
          "en": "The text (paragraph 1) explicitly states: 'without volunteer helpers, many public offerings would not exist.'",
          "tr": "Metnin 1. paragrafında açıkça belirtiliyor: 'gönüllü yardımcılar olmasaydı birçok kamusal hizmet var olamazdı.'",
          "ar": "ورد في النص (الفقرة 1) صراحةً: 'بدون المتطوعين والمتطوعات، لما وُجدت العديد من العروض العامة.'",
          "uk": "У тексті (абзац 1) чітко сказано: 'без волонтерів багато громадських пропозицій просто не існувало б.'"
        }
      },
      {
        "id": "q2",
        "paragraphRef": "p2",
        "type": "multiple_choice",
        "prompt": {
          "de": "Welchen zusätzlichen Nutzen haben Sportvereine für Neuzugezogene?",
          "en": "What additional benefit do sports clubs offer to newcomers?",
          "tr": "Spor derneklerinin yeni taşınan/göç eden kişilere sağladığı ek fayda nedir?",
          "ar": "ما هي الفائدة الإضافية التي تقدمها الأندية الرياضية للقادمين الجدد؟",
          "uk": "Яку додаткову користь спортивні клуби приносять новачкам?"
        },
        "options": [
          {
            "de": "Sie bieten kostenlose Sprachkurse mit Zertifikat an.",
            "en": "They provide free certified language classes.",
            "tr": "Sertifikalı ücretsiz dil kursları sunarlar.",
            "ar": "تقدم دورات لغة مجانية مع شهادة.",
            "uk": "Вони пропонують безкоштовні мовні курси з сертифікатом."
          },
          {
            "de": "Sie erleichtern das Erlernen der Sprache und das Knüpfen von Kontakten.",
            "en": "They make language learning and establishing social contacts easier.",
            "tr": "Dili öğrenmeyi ve çevre/arkadaşlık edinmeyi kolaylaştırırlar.",
            "ar": "تسهل تعلم اللغة وتكوين علاقات اجتماعية جديدة.",
            "uk": "Вони полегшують вивчення мови та налагодження контактів."
          },
          {
            "de": "Sie garantieren eine schnelle Vermittlung von Arbeitsplätzen.",
            "en": "They guarantee fast placement in employment.",
            "tr": "Hızlı iş bulmayı garanti ederler.",
            "ar": "تضمن الحصول السريع على فرصة عمل.",
            "uk": "Вони гарантують швидке працевлаштування."
          }
        ],
        "correct": 1,
        "explanation": {
          "de": "Absatz 2 erklärt, dass der Vereinsbeitritt Neuzugezogenen Kontakte ermöglicht und den Einstieg in die Sprache wesentlich erleichtert.",
          "en": "Paragraph 2 states that joining a club facilitates friendships and significantly eases immersion into the German language.",
          "tr": "2. paragrafta, kulüp üyeliğinin yeni gelenlerin çevre edinmesini sağladığı ve Almancaya adapte olmayı belirgin biçimde kolaylaştırdığı belirtiliyor.",
          "ar": "تشير الفقرة 2 إلى أن الانضمام إلى نادٍ يتيح التعارف ويسهل بشكل ملحوظ الاندماج في اللغة والثقافة الألمانية.",
          "uk": "Абзац 2 пояснює, що вступ до клубу допомагає знайти друзів та суттєво полегшує вивчення німецької мови."
        }
      },
      {
        "id": "q3",
        "paragraphRef": "p3",
        "type": "multiple_choice",
        "prompt": {
          "de": "Warum haben viele Vereine heute Nachwuchsprobleme?",
          "en": "Why do many clubs struggle with recruiting new members today?",
          "tr": "Günümüzde birçok dernek neden yeni üye ve yönetici bulmakta zorlanıyor?",
          "ar": "لماذا تواجه العديد من الجمعيات اليوم صعوبة في استقطاب جيل جديد؟",
          "uk": "Чому багатьом організаціям сьогодні важко залучати нових членів?"
        },
        "options": [
          {
            "de": "Weil junge Menschen keine dauerhaften Verpflichtungen eingehen möchten.",
            "en": "Because younger individuals prefer not to commit to long-term responsibilities.",
            "tr": "Çünkü gençler uzun vadeli sorumluluklar üstlenmek istemiyor.",
            "ar": "لأن الشباب لا يرغبون في تحمل التزامات ومسؤوليات طويلة الأمد.",
            "uk": "Тому що молодь не бажає брати на себе довгострокові зобов'язання."
          },
          {
            "de": "Weil Sportvereine in Deutschland gesetzlich verboten werden sollen.",
            "en": "Because sports clubs are slated to be legally prohibited in Germany.",
            "tr": "Çünkü Almanya'da spor kulüpleri yasal olarak yasaklanmak üzeredir.",
            "ar": "لأنه سيتم حظر الأندية الرياضية في ألمانيا بموجب القانون.",
            "uk": "Тому що спортивні клуби в Німеччині планують заборонити законом."
          },
          {
            "de": "Weil die Mitgliedsbeiträge für alle Familien zu teuer geworden sind.",
            "en": "Because membership dues have become unaffordable for all families.",
            "tr": "Çünkü üyelik aidatları tüm aileler için çok pahalı hale geldi.",
            "ar": "لأن رسوم العضوية أصبحت باهظة الثمن لجميع العائلات.",
            "uk": "Тому що членські внески стали занадто дорогими для сімей."
          }
        ],
        "correct": 0,
        "explanation": {
          "de": "Absatz 3 hebt hervor: 'Immer weniger jüngere Menschen sind bereit, langfristige Verpflichtungen wie Vorstandsposten... zu übernehmen.'",
          "en": "Paragraph 3 notes: 'Fewer and fewer younger people are willing to take on long-term obligations such as board positions.'",
          "tr": "3. paragrafta vurgulanıyor: 'Gittikçe daha az genç insan yönetim kurulu gibi uzun vadeli yükümlülükleri üstlenmeye hazır.'",
          "ar": "الفقرة 3 توضح: 'عدد أقل من الشباب على استعداد لتحمل التزامات طويلة الأجل مثل تولي مناصب في مجالس الإدارة.'",
          "uk": "Абзац 3 підкреслює: 'Дедалі менше молодих людей готові брати на себе довгострокові обов'язки, такі як посади в правлінні.'"
        }
      }
    ]
  },
  {
    "id": "lese-teil2-homeoffice",
    "part": "Teil 2",
    "partName": {
      "de": "Teil 2: Detailverstehen",
      "en": "Part 2: Detailed Comprehension",
      "tr": "Bölüm 2: Detaylı Anlama (Makale & A/B/C)",
      "ar": "الجزء 2: الفهم التفصيلي (مقال واختيارات متعددة)",
      "uk": "Частина 2: Детальне розуміння (Стаття та вибір A/B/C)"
    },
    "title": {
      "de": "Mobiles Arbeiten: Chance oder Belastung für Beschäftigte?",
      "en": "Mobile Work: Opportunity or Strain for Employees?",
      "tr": "Evden Çalışma: Çalışanlar İçin Fırsat mı, Yük mü?",
      "ar": "العمل عن بُعد: فرصة أم عبء على الموظفين؟",
      "uk": "Дистанційна робота: можливість чи тягар для працівників?"
    },
    "level": "B1",
    "timeEstimateMin": 15,
    "badge": "telc B1 Prüfungsformat",
    "summary": {
      "de": "Ein ausführlicher Bericht über Vor- und Nachteile des Homeoffice, gesetzliche Regelungen und Work-Life-Balance in Deutschland.",
      "en": "An in-depth article analyzing pros and cons of working from home, legal frameworks, and work-life balance in Germany.",
      "tr": "Almanya'da evden çalışmanın avantaj ve dezavantajları, yasal düzenlemeler ve iş-yaşam dengesi üzerine detaylı bir makale.",
      "ar": "تقرير مفصل عن إيجابيات وسلبيات العمل من المنزل واللوائح القانونية والتوازن بين العمل والحياة في ألمانيا.",
      "uk": "Детальний звіт про переваги та недоліки роботи з дому, законодавче регулювання та баланс між роботою та особистим життям у Німеччині."
    },
    "contentParagraphs": [
      {
        "id": "p1",
        "de": "Seit einigen Jahren hat sich die Arbeitswelt in Deutschland grundlegend gewandelt. Das Homeoffice, früher eine seltene Ausnahme, gehört mittlerweile für fast ein Drittel aller Erwerbstätigen zum Berufsalltag. Nach aktuellen Umfragen schätzen Mitarbeiterinnen und Mitarbeiter vor allem den Wegfall des täglichen Arbeitswegs. Dadurch sparen Pendler durchschnittlich mehr als eine Stunde Zeit pro Tag, die sie für Familie, Sport oder Erholung nutzen können."
      },
      {
        "id": "p2",
        "de": "Doch das Arbeiten in den eigenen vier Wänden birgt auch erhebliche Risiken. Arbeitspsychologen warnen vor der sogenannten Entgrenzung: Wenn der Schreibtisch direkt im Wohnzimmer steht, fällt vielen das Abschalten am Feierabend schwer. Häufig werden dienstliche E-Mails noch spät am Abend oder am Wochenende auf dem Smartphone beantwortet. Zudem vermissen viele Beschäftigte den spontanen Austausch beim Kaffee mit Kolleginnen und Kollegen, was auf Dauer zu sozialer Isolation führen kann."
      },
      {
        "id": "p3",
        "de": "Um diesen Problemen entgegenzuwirken, setzen immer mehr deutsche Unternehmen auf hybride Arbeitsmodelle. Dabei arbeiten Mitarbeiter beispielsweise an zwei festen Tagen im Büro und an den restlichen Tagen zu Hause. Gesetzlich gilt in Deutschland auch im Homeoffice das Arbeitszeitgesetz: Nach spätestens sechs Stunden Arbeit muss eine Pause von mindestens 30 Minuten eingelegt werden, und zwischen zwei Arbeitstagen müssen elf Stunden Ruhezeit liegen."
      }
    ],
    "glossary": [
      {
        "de": "der Pendler",
        "article": "der",
        "plural": "die Pendler",
        "pos": "noun",
        "en": "commuter",
        "tr": "işe gidip gelen kimse (farklı şehir veya semtten)",
        "ar": "المتنقل يومياً بين مكان سكنه وعمله",
        "uk": "маятниковий мігрант (людина, що щодня їздить на роботу)",
        "example_de": "Viele Pendler nutzen die Regionalbahn nach Frankfurt."
      },
      {
        "de": "der Feierabend",
        "article": "der",
        "plural": "die Feierabende",
        "pos": "noun",
        "en": "end of work / quitting time",
        "tr": "iş paydosu / mesai bitimi",
        "ar": "انتهاء الدوام / وقت الفراغ بعد العمل",
        "uk": "кінець робочого дня / вечірній відпочинок",
        "example_de": "Ich wünsche Ihnen einen schönen Feierabend!"
      },
      {
        "de": "die Ruhezeit",
        "article": "die",
        "plural": "die Ruhezeiten",
        "pos": "noun",
        "en": "rest period / statutory rest time",
        "tr": "dinlenme süresi (yasal istirahat)",
        "ar": "فترة الراحة القانونية",
        "uk": "час відпочинку (законодавчо встановлений)",
        "example_de": "Die gesetzliche Ruhezeit beträgt mindestens elf Stunden."
      },
      {
        "de": "abschalten",
        "article": "",
        "plural": "",
        "pos": "verb",
        "en": "to unwind / switch off mentally",
        "tr": "kafasını dinlemek / işle bağı koparmak",
        "ar": "يسترخي ذهنياً / يبتعد عن ضغوط العمل",
        "uk": "відволіктися / перемкнутися від думок про роботу",
        "example_de": "Nach der Arbeit fällt es mir oft schwer abzuschalten."
      },
      {
        "de": "entgegenwirken",
        "article": "",
        "plural": "",
        "pos": "verb",
        "en": "to counteract / counteract against",
        "tr": "önüne geçmek / karşı önlem almak",
        "ar": "يقاوم / يتصدى لـ / يكافح",
        "uk": "протидіяти / нейтралізувати",
        "example_de": "Unternehmen müssen der Isolation aktiv entgegenwirken."
      },
      {
        "de": "das Homeoffice",
        "article": "das",
        "plural": "-",
        "pos": "noun",
        "en": "home office / working from home",
        "tr": "evden çalışma / uzaktan çalışma",
        "ar": "العمل من المنزل / المكتب المنزلي",
        "uk": "дистанційна робота / робота з дому",
        "example_de": "Das Homeoffice gehört für viele zum Berufsalltag."
      },
      {
        "de": "die Arbeitswelt",
        "article": "die",
        "plural": "-",
        "pos": "noun",
        "en": "working world / labor market",
        "tr": "çalışma hayatı / iş dünyası",
        "ar": "عالم العمل والوظائف",
        "uk": "сфера праці / світ зайнятості",
        "example_de": "Die moderne Arbeitswelt hat sich grundlegend gewandelt."
      },
      {
        "de": "die Entgrenzung",
        "article": "die",
        "plural": "-",
        "pos": "noun",
        "en": "blurring of boundaries (between work and life)",
        "tr": "iş ile özel yaşam sınırlarının kaybolması",
        "ar": "تلاشي الحدود بين العمل والحياة الخاصة",
        "uk": "розмивання меж між роботою та особистим життям",
        "example_de": "Psychologen warnen vor der Entgrenzung von Arbeits- und Freizeit."
      },
      {
        "de": "das Arbeitszeitgesetz",
        "article": "das",
        "plural": "die Arbeitszeitgesetze",
        "pos": "noun",
        "en": "Working Hours Act / labor time regulations",
        "tr": "çalışma saatleri kanunu",
        "ar": "قانون ساعات العمل",
        "uk": "закон про робочий час",
        "example_de": "Das Arbeitszeitgesetz gilt in Deutschland auch im Homeoffice."
      },
      {
        "de": "der Berufsalltag",
        "article": "der",
        "plural": "-",
        "pos": "noun",
        "en": "daily professional life",
        "tr": "iş rutini / mesleki günlük yaşam",
        "ar": "الروتين المهني اليومي",
        "uk": "робочий побут / професійні будні",
        "example_de": "Mobiles Arbeiten gehört mittlerweile zum Berufsalltag."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "paragraphRef": "p1",
        "type": "multiple_choice",
        "prompt": {
          "de": "Was ist laut Text der Hauptvorteil des Homeoffice für Pendler?",
          "en": "According to the text, what is the primary benefit of working from home for commuters?",
          "tr": "Metne göre, işe gidip gelenler için evden çalışmanın başlıca avantajı nedir?",
          "ar": "وفقاً للنص، ما هي الميزة الرئيسية للعمل من المنزل للمتنقلين للعمل؟",
          "uk": "Згідно з текстом, яка головна перевага роботи з дому для маятникових мігрантів?"
        },
        "options": [
          {
            "de": "Sie verdienen durchschnittlich zehn Prozent mehr Gehalt.",
            "en": "They earn on average ten percent higher salary.",
            "tr": "Ortalama yüzde on daha fazla maaş kazanırlar.",
            "ar": "يكسبون راتباً أعلى بنسبة 10 بالمائة في المتوسط.",
            "uk": "Вони заробляють у середньому на 10 відсотків більше."
          },
          {
            "de": "Sie sparen täglich mehr als eine Stunde Fahrzeit ein.",
            "en": "They save more than one hour of travel time daily.",
            "tr": "Günlük bir saatten fazla yol zamanından tasarruf ederler.",
            "ar": "يوفرون أكثر من ساعة يومياً من وقت التنقل.",
            "uk": "Вони заощаджують більше однієї години на дорогу щодня."
          },
          {
            "de": "Sie müssen überhaupt keine Berichte mehr schreiben.",
            "en": "They no longer need to submit any work reports.",
            "tr": "Artık hiçbir çalışma raporu yazmak zorunda kalmazlar.",
            "ar": "لم يعودوا بحاجة إلى كتابة أي تقارير عمل بعد الآن.",
            "uk": "Їм більше взагалі не потрібно писати звіти."
          }
        ],
        "correct": 1,
        "explanation": {
          "de": "Absatz 1 erwähnt: 'Dadurch sparen Pendler durchschnittlich mehr als eine Stunde Zeit pro Tag, die sie für Familie, Sport oder Erholung nutzen können.'",
          "en": "Paragraph 1 explicitly notes that commuters save over an hour per day by not commuting.",
          "tr": "1. paragrafta açıkça yazıyor: 'Böylece çalışanlar günde ortalama bir saatten fazla zaman tasarrufu sağlıyor.'",
          "ar": "الفقرة 1 تذكر صراحة: 'يوفر المتنقلون ما يزيد عن ساعة يومياً يمكنهم استغلالها للأسرة أو الرياضة أو الراحة.'",
          "uk": "Абзац 1 чітко зазначає, що працівники заощаджують у середньому більше однієї години на день."
        }
      },
      {
        "id": "q2",
        "paragraphRef": "p2",
        "type": "multiple_choice",
        "prompt": {
          "de": "Welche Gefahr sehen Psychologen bei der Arbeit im Homeoffice?",
          "en": "Which danger do psychologists see regarding work from home?",
          "tr": "Psikologlar evden çalışmada hangi tehlikeyi görüyorlar?",
          "ar": "ما هو الخطر الذي يراه علماء النفس في العمل من المنزل؟",
          "uk": "Яку небезпеку вбачають психологи в роботі з дому?"
        },
        "options": [
          {
            "de": "Die Grenzen zwischen Arbeitszeit und Freizeit verschwimmen.",
            "en": "The boundaries between working hours and leisure time blur.",
            "tr": "Çalışma saatleri ile boş zaman arasındaki sınırlar kayboluyor.",
            "ar": "تتلاشى الحدود الفاصلة بين أوقات العمل وأوقات الفراغ.",
            "uk": "Межі між робочим часом та відпочинком стираються."
          },
          {
            "de": "Die Internetverbindung in Deutschland bricht zu oft zusammen.",
            "en": "Internet connections in Germany crash too frequently.",
            "tr": "Almanya'daki internet bağlantısı çok sık çöküyor.",
            "ar": "ينقطع اتصال الإنترنت في ألمانيا بشكل متكرر للغاية.",
            "uk": "Інтернет-з'єднання в Німеччині надто часто зникає."
          },
          {
            "de": "Die Kolleginnen und Kollegen verlangen teure Geschenke.",
            "en": "Colleagues begin requesting expensive gifts.",
            "tr": "İş arkadaşları pahalı hediyeler talep ediyor.",
            "ar": "يطلب الزملاء هدايا باهظة الثمن.",
            "uk": "Колеги починають вимагати дорогі подарунки."
          }
        ],
        "correct": 0,
        "explanation": {
          "de": "Absatz 2 warnt vor der Entgrenzung: 'Wenn der Schreibtisch direkt im Wohnzimmer steht, fällt vielen das Abschalten am Feierabend schwer.'",
          "en": "Paragraph 2 explains the dissolving boundary between work and home life, making relaxation difficult.",
          "tr": "2. paragrafta sınırların kaybolmasından ve akşamları işi zihnen bitirmenin zorlaşmasından bahsediliyor.",
          "ar": "الفقرة 2 تحذر من تداخل الحدود: يصعب على الكثيرين التوقف عن العمل عند وجود المكتب في غرفة المعيشة.",
          "uk": "Абзац 2 попереджає про розмивання меж: людям важко відключитися від роботи ввечері."
        }
      },
      {
        "id": "q3",
        "paragraphRef": "p3",
        "type": "true_false",
        "prompt": {
          "de": "Das deutsche Arbeitszeitgesetz verlangt nach sechs Stunden Arbeit mindestens 30 Minuten Pause, auch zu Hause.",
          "en": "German working hours law mandates a minimum 30-minute break after six hours of work, even at home.",
          "tr": "Alman çalışma saatleri yasası, evde de olsa 6 saatlik çalışma sonrası en az 30 dakika mola zorunluluğu getirir.",
          "ar": "يلزم قانون ساعات العمل الألماني بأخذ استراحة لمدة 30 دقيقة على الأقل بعد ست ساعات من العمل، حتى في المنزل.",
          "uk": "Німецький закон про робочий час вимагає перерву не менше 30 хвилин після шести годин роботи, навіть удома."
        },
        "options": [
          {
            "de": "Richtig",
            "en": "True",
            "tr": "Doğru",
            "ar": "صحيح",
            "uk": "Правильно"
          },
          {
            "de": "Falsch",
            "en": "False",
            "tr": "Yanlış",
            "ar": "خطأ",
            "uk": "Неправильно"
          }
        ],
        "correct": 0,
        "explanation": {
          "de": "Absatz 3 belegt: 'Nach spätestens sechs Stunden Arbeit muss eine Pause von mindestens 30 Minuten eingelegt werden'.",
          "en": "Paragraph 3 confirms: 'After at most six hours of work, a break of at least 30 minutes must be taken'.",
          "tr": "3. paragrafta net kural belirtiliyor: 'En geç altı saatlik çalışmanın ardından en az 30 dakikalık bir mola verilmelidir'.",
          "ar": "الفقرة 3 تؤكد: 'بعد ست ساعات عمل كحد أقصى، يجب أخذ استراحة لا تقل عن 30 دقيقة'.",
          "uk": "Абзац 3 підтверджує: 'Не пізніше ніж через шість годин роботи необхідно зробити перерву щонайменше на 30 хвилин'."
        }
      }
    ]
  },
  {
    "id": "lese-teil3-anzeigen",
    "part": "Teil 3",
    "partName": {
      "de": "Teil 3: Selektives Verstehen",
      "en": "Part 3: Selective Reading (Announcements & Ads)",
      "tr": "Bölüm 3: Seçici Okuma (İlan & Duyuru Eşleştirme)",
      "ar": "الجزء 3: القراءة الانتقائية (الإعلانات والمطابقة)",
      "uk": "Частина 3: Вибіркове читання (Оголошення та пошук)"
    },
    "title": {
      "de": "Wohnungsanzeigen und Mietverträge in der Großstadt",
      "en": "Apartment Classifieds and Rental Agreements in Major Cities",
      "tr": "Büyükşehirde Kiralık Ev İlanları ve Kira Sözleşmeleri",
      "ar": "إعلانات الشقق وعقود الإيجار في المدن الكبرى",
      "uk": "Оголошення про житло та договори оренди у великих містах"
    },
    "level": "B1",
    "timeEstimateMin": 12,
    "badge": "telc B1 Alltag",
    "summary": {
      "de": "Ein praxisnaher Text über Kaltmiete, Nebenkosten, Kaution und die rechtlichen Pflichten von Mietern und Vermietern in Deutschland.",
      "en": "A practical text explaining base rent, utilities, deposit, and statutory rights of tenants and landlords in Germany.",
      "tr": "Almanya'da net kira, yan giderler, depozito ve kiracı-ev sahibi hak ve sorumlulukları üzerine pratik bir rehber metin.",
      "ar": "نص عملي يشرح الإيجار الأساسي وتكاليف الخدمات الإضافية والتأمين وحقوق وواجبات المستأجرين في ألمانيا.",
      "uk": "Практичний текст, що пояснює базову орендну плату, комунальні послуги, заставу та права орендарів у Німеччині."
    },
    "contentParagraphs": [
      {
        "id": "p1",
        "de": "Die Wohnungssuche in deutschen Ballungsräumen erfordert Geduld und gute Vorbereitung. Wer eine Zeitungs- oder Onlineanzeige liest, stößt sofort auf Fachbegriffe wie Kaltmiete und Warmmiete. Die Kaltmiete bezeichnet den reinen Preis für die Wohnfläche. Hinzu kommen die monatlichen Nebenkostenvorauszahlungen für Heizung, Wasser, Müllabfuhr und Hausreinigung. Erst beides zusammen ergibt die tatsächliche Warmmiete, die am Monatsanfang überwiesen werden muss."
      },
      {
        "id": "p2",
        "de": "Vor dem Einzug verlangen Vermieter in der Regel eine Kaution als finanzielle Absicherung. Gesetzlich darf diese Mietsicherheit höchstens drei Nettokaltmieten betragen. Mieter haben das Recht, diese Summe in drei gleichen Monatsraten zu begleichen. Die erste Rate ist zu Beginn des Mietverhältnisses fällig. Nach dem Auszug muss der Vermieter die Kaution samt Zinsen zurückzahlen, sofern die Wohnung in ordnungsgemäßem Zustand übergeben wurde."
      },
      {
        "id": "p3",
        "de": "Wichtig für das Zusammenleben ist außerdem die Hausordnung, die meist Bestandteil des Mietvertrags ist. Sie regelt unter anderem die gesetzlichen Ruhezeiten zwischen 22:00 Uhr abends und 6:00 Uhr morgens sowie an Sonn- und Feiertagen. Während dieser Zeiten ist ruhestörender Lärm, wie laute Musik oder handwerkliche Arbeiten, im gesamten Gebäude untersagt."
      }
    ],
    "glossary": [
      {
        "de": "die Kaltmiete",
        "article": "die",
        "plural": "die Kaltmieten",
        "pos": "noun",
        "en": "basic rent (excluding utilities)",
        "tr": "net kira / soğuk kira (yan giderler hariç)",
        "ar": "الإيجار الأساسي (بدون تكاليف الخدمات)",
        "uk": "базова орендна плата (без комунальних послуг)",
        "example_de": "Die Kaltmiete für die Zwei-Zimmer-Wohnung liegt bei 650 Euro."
      },
      {
        "de": "die Kaution",
        "article": "die",
        "plural": "die Kautionen",
        "pos": "noun",
        "en": "rental deposit",
        "tr": "kira depozitosu",
        "ar": "مبلغ التأمين / الوديعة",
        "uk": "застава (депозит за житло)",
        "example_de": "Die Kaution beträgt drei Monatsmieten."
      },
      {
        "de": "die Nebenkosten",
        "article": "die (Pl.)",
        "plural": "die Nebenkosten",
        "pos": "noun",
        "en": "utility costs / service charges",
        "tr": "yan giderler (ısıtma, çöp, su vb.)",
        "ar": "التكاليف الإضافية / فواتير الخدمات",
        "uk": "комунальні витрати / додаткові витрати",
        "example_de": "In den Nebenkosten sind Heizung und Wasser enthalten."
      },
      {
        "de": "die Hausordnung",
        "article": "die",
        "plural": "die Hausordnungen",
        "pos": "noun",
        "en": "house rules / building regulations",
        "tr": "bina ve apartman kuralları",
        "ar": "قواعد ونظام البناية السكنية",
        "uk": "правила внутрішнього розпорядку будинку",
        "example_de": "Die Hausordnung verbietet laute Musik ab 22 Uhr."
      },
      {
        "de": "begleichen",
        "article": "",
        "plural": "",
        "pos": "verb",
        "en": "to settle / pay in full",
        "tr": "ödemek / hesabı kapatmak",
        "ar": "يسدد / يدفع المبلغ",
        "uk": "сплачувати / погашати рахунок",
        "example_de": "Sie können die Kaution in drei Raten begleichen."
      },
      {
        "de": "die Warmmiete",
        "article": "die",
        "plural": "die Warmmieten",
        "pos": "noun",
        "en": "warm rent (gross rent including utilities)",
        "tr": "sıcak kira (yan giderler dahil kira)",
        "ar": "الإيجار الشامل (شامل التدفئة والخدمات)",
        "uk": "повна орендна плата (з комунальними послугами)",
        "example_de": "Die monatliche Warmmiete muss am Monatsanfang überwiesen werden."
      },
      {
        "de": "der Vermieter",
        "article": "der",
        "plural": "die Vermieter",
        "pos": "noun",
        "en": "landlord / lessor",
        "tr": "ev sahibi / kiraya veren",
        "ar": "المؤجر / صاحب العقار",
        "uk": "орендодавець / власник житла",
        "example_de": "Der Vermieter verlangt eine Kaution als finanzielle Absicherung."
      },
      {
        "de": "der Mieter",
        "article": "der",
        "plural": "die Mieter",
        "pos": "noun",
        "en": "tenant / renter",
        "tr": "kiracı",
        "ar": "المستأجر",
        "uk": "орендар / наймач",
        "example_de": "Mieter haben das Recht, die Kaution in drei Monatsraten zu zahlen."
      },
      {
        "de": "der Mietvertrag",
        "article": "der",
        "plural": "die Mietverträge",
        "pos": "noun",
        "en": "tenancy agreement / lease contract",
        "tr": "kira sözleşmesi",
        "ar": "عقد الإيجار",
        "uk": "договір оренди",
        "example_de": "Die Hausordnung ist fester Bestandteil des Mietvertrags."
      },
      {
        "de": "die Vorbereitung",
        "article": "die",
        "plural": "die Vorbereitungen",
        "pos": "noun",
        "en": "preparation",
        "tr": "hazırlık",
        "ar": "الاستعداد / التحضير",
        "uk": "підготовка / підготовчі заходи",
        "example_de": "Eine gründliche Vorbereitung ist bei der Wohnungssuche entscheidend."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "paragraphRef": "p1",
        "type": "multiple_choice",
        "prompt": {
          "de": "Aus welchen zwei Komponenten setzt sich die Warmmiete zusammen?",
          "en": "Which two components constitute the gross warm rent?",
          "tr": "Sıcak kira (Warmmiete) hangi iki unsurun toplamından oluşur?",
          "ar": "مما يتكون الإيجار الشامل (Warmmiete) وفقاً للنص؟",
          "uk": "З яких двох складових формується повна орендна плата (Warmmiete)?"
        },
        "options": [
          {
            "de": "Kaltmiete plus monatliche Nebenkostenvorauszahlung.",
            "en": "Base rent plus monthly advance utility payments.",
            "tr": "Net kira (Kaltmiete) artı aylık yan gider avansı.",
            "ar": "الإيجار الأساسي بالإضافة إلى الدفعة الشهرية للخدمات.",
            "uk": "Базова оренда плюс щомісячний аванс за комунальні послуги."
          },
          {
            "de": "Kaltmiete plus einmalige Maklergebühr.",
            "en": "Base rent plus one-time agency fee.",
            "tr": "Net kira artı tek seferlik emlakçı komisyonu.",
            "ar": "الإيجار الأساسي بالإضافة إلى عمولة الوسيط العقاري.",
            "uk": "Базова оренда плюс одноразова комісія рієлтора."
          },
          {
            "de": "Kaution plus monatliche Rundfunkgebühren.",
            "en": "Deposit plus monthly broadcasting fee.",
            "tr": "Depozito artı aylık televizyon/radyo vergisi.",
            "ar": "التأمين بالإضافة إلى رسوم البث الشهري.",
            "uk": "Застава плюс щомісячний збір за телерадіомовлення."
          }
        ],
        "correct": 0,
        "explanation": {
          "de": "Absatz 1 erklärt: 'Die Kaltmiete bezeichnet den reinen Preis... Hinzu kommen die monatlichen Nebenkostenvorauszahlungen... Erst beides zusammen ergibt die tatsächliche Warmmiete.'",
          "en": "Paragraph 1 clearly defines Warmmiete as the sum of Kaltmiete and Nebenkosten.",
          "tr": "1. paragrafta açıkça belirtilir: Net kiraya aylık yan giderler eklenir ve ikisinin toplamı sıcak kirayı oluşturur.",
          "ar": "الفقرة 1 تشرح بوضوح أن الإيجار الشامل يتكون من الإيجار الأساسي مضافاً إليه تكاليف الخدمات.",
          "uk": "Абзац 1 чітко визначає, що повна оренда складається з базової плати та комунальних платежів."
        }
      },
      {
        "id": "q2",
        "paragraphRef": "p2",
        "type": "multiple_choice",
        "prompt": {
          "de": "Wie hoch darf die Kaution für eine Wohnung in Deutschland maximal sein?",
          "en": "What is the statutory maximum amount for a rental deposit in Germany?",
          "tr": "Almanya'da bir ev için kira depozitosu yasal olarak en fazla ne kadar olabilir?",
          "ar": "ما هو الحد الأقصى القانوني لمبلغ التأمين على الشقة في ألمانيا؟",
          "uk": "Яким є максимальний законодавчий розмір застави за квартиру в Німеччині?"
        },
        "options": [
          {
            "de": "Höchstens drei Nettokaltmieten.",
            "en": "At most three net cold rents.",
            "tr": "En fazla üç net soğuk kira tutarı.",
            "ar": "ثلاثة أشهر كحد أقصى من الإيجار الأساسي الصافي.",
            "uk": "Не більше трьох базових місячних орендних плат."
          },
          {
            "de": "Beliebig hoch, je nach Wunsch des Eigentümers.",
            "en": "Any arbitrary amount chosen by the owner.",
            "tr": "Ev sahibinin isteğine göre sınırsız.",
            "ar": "أي مبلغ يحدده صاحب العقار بحرية.",
            "uk": "Будь-яка сума за бажанням власника."
          },
          {
            "de": "Genau sechs volle Warmmieten im Voraus.",
            "en": "Exactly six full warm rents in advance.",
            "tr": "Tam olarak peşin altı sıcak kira bedeli.",
            "ar": "ستة أشهر كاملة من الإيجار الشامل مقدماً.",
            "uk": "Рівно шість повних теплих орендних плат наперед."
          }
        ],
        "correct": 0,
        "explanation": {
          "de": "Absatz 2 stellt fest: 'Gesetzlich darf diese Mietsicherheit höchstens drei Nettokaltmieten betragen.'",
          "en": "Paragraph 2 states the legal limit is maximum three net cold rents.",
          "tr": "2. paragrafta yasal üst sınır belirtilmiştir: En fazla üç net soğuk kira bedeli kadar olabilir.",
          "ar": "الفقرة 2 تبين بوضوح: قانونياً لا يجوز أن يزيد مبلغ التأمين عن إيجار ثلاثة أشهر أساسية صافية.",
          "uk": "Абзац 2 встановлює законодавче обмеження: застава не може перевищувати три базові місячні плати."
        }
      },
      {
        "id": "q3",
        "paragraphRef": "p3",
        "type": "true_false",
        "prompt": {
          "de": "Laut Hausordnung darf man an Sonntagen ab 14:00 Uhr laute handwerkliche Arbeiten in der Wohnung durchführen.",
          "en": "According to house rules, loud construction/craft work is permitted on Sundays after 14:00.",
          "tr": "Bina kurallarına göre pazar günleri saat 14:00'ten sonra evde gürültülü tadilat yapılabilir.",
          "ar": "وفقاً لنظام البناية، يُسمح بالقيام بأعمال صيانة وتصليح صاخبة في الشقة أيام الأحد بعد الساعة 14:00.",
          "uk": "Згідно з правилами будинку, у неділю після 14:00 дозволено проводити гучні ремонтні роботи."
        },
        "options": [
          {
            "de": "Richtig",
            "en": "True",
            "tr": "Doğru",
            "ar": "صحيح",
            "uk": "Правильно"
          },
          {
            "de": "Falsch",
            "en": "False",
            "tr": "Yanlış",
            "ar": "خطأ",
            "uk": "Неправильно"
          }
        ],
        "correct": 1,
        "explanation": {
          "de": "Absatz 3 stellt klar: 'sowie an Sonn- und Feiertagen... ist ruhestörender Lärm, wie laute Musik oder handwerkliche Arbeiten... untersagt.' Sonntage sind generell Ruhetage.",
          "en": "Paragraph 3 explains that loud noise and manual work are strictly prohibited all day on Sundays and public holidays.",
          "tr": "3. paragrafta belirtildiği gibi, pazar günleri ve resmi tatillerde gün boyu gürültülü işler ve tadilat yasaktır.",
          "ar": "الفقرة 3 توضح أن أيام الأحد والعطلات الرسمية تخضع للهدوء التام ويُمنع فيها إحداث ضجيج أو أعمال صيانة.",
          "uk": "Абзац 3 зазначає, що в неділю та святкові дні будь-який шум і ремонтні роботи заборонені цілий день."
        }
      }
    ]
  },
  {
    "id": "lese-teil4-reklamation",
    "part": "Sprachbausteine",
    "partName": {
      "de": "Sprachbausteine & E-Mail",
      "en": "Language Elements & E-Mail",
      "tr": "Dil Öğeleri & Resmi E-Posta İnceleme",
      "ar": "عناصر اللغة ومراسلات البريد الإلكتروني",
      "uk": "Мовні засоби та ділове листування"
    },
    "title": {
      "de": "Reklamation und Rücktritt vom Kaufvertrag",
      "en": "Formal Complaint and Order Cancellation",
      "tr": "Kusurlu Ürün Şikayeti ve Sözleşmeden Cayma Hakkı",
      "ar": "شكوى رسمية وإلغاء عقد شراء بضاعة معيبة",
      "uk": "Офіційна рекламація та розірвання договору купівлі"
    },
    "level": "B1",
    "timeEstimateMin": 10,
    "badge": "telc B1 Schriftlich",
    "summary": {
      "de": "Eine formelle Beschwerde-E-Mail an einen Online-Händler wegen eines beschädigten Elektrogeräts mit Fristsetzung zur Nachbesserung.",
      "en": "A formal complaint e-mail to an online store regarding a defective electronic device requesting a replacement with a deadline.",
      "tr": "İnternet mağazasına gönderilen, hasarlı ürün değişimi veya para iadesi talep eden resmi bir B1 şikayet e-postası.",
      "ar": "رسالة بريد إلكتروني رسمية لمتجر إلكتروني بشأن جهاز كهربائي تالف مع تحديد مهلة للإصلاح أو استرداد الأموال.",
      "uk": "Офіційний лист-скарга до інтернет-магазину щодо дефектного товару з вимогою заміни або повернення коштів."
    },
    "contentParagraphs": [
      {
        "id": "p1",
        "de": "Sehr geehrte Damen und Herren,\n\nam 12. Mai habe ich in Ihrem Online-Shop eine Kaffeemaschine (Bestellnummer: KM-94021) zum Preis von 189,00 Euro bestellt. Das Paket wurde am 16. Mai geliefert. Als ich das Gerät gestern zum ersten Mal in Betrieb nehmen wollte, musste ich leider feststellen, dass der Wassertank undicht ist und das Wasser sofort ausläuft."
      },
      {
        "id": "p2",
        "de": "Da das Gerät von Anfang an mangelhaft war, mache ich hiermit von meinem gesetzlichen Gewährleistungsrecht Gebrauch. Ich bitte Sie daher höflich, mir innerhalb von 14 Tagen, also bis zum 31. Mai, ein einwandfreies Ersatzgerät zuzusenden oder mir den vollen Kaufpreis auf mein Bankkonto zu erstatten."
      },
      {
        "id": "p3",
        "de": "Ein Foto des beschädigten Wassertanks sowie eine Kopie der Rechnung habe ich dieser E-Mail als Anhang beigefügt. Bitte teilen Sie mir baldmöglichst mit, wie ich das defekte Gerät kostenfrei an Sie zurücksenden kann.\n\nMit freundlichen Grüßen,\nMartina Weber"
      }
    ],
    "glossary": [
      {
        "de": "die Reklamation",
        "article": "die",
        "plural": "die Reklamationen",
        "pos": "noun",
        "en": "complaint / claim",
        "tr": "şikayet / ayıplı mal bildirimi",
        "ar": "شكوى / مطالبة بحق المستهلك",
        "uk": "рекламація / претензія щодо товару",
        "example_de": "Der Kundenservice bearbeitete meine Reklamation sehr schnell."
      },
      {
        "de": "die Gewährleistung",
        "article": "die",
        "plural": "die Gewährleistungen",
        "pos": "noun",
        "en": "statutory warranty",
        "tr": "yasal garanti / ayıba karşı tekeffül",
        "ar": "الضمان القانوني الإلزامي",
        "uk": "законодавча гарантія якості товару",
        "example_de": "In Deutschland gilt eine gesetzliche Gewährleistung von zwei Jahren."
      },
      {
        "de": "mangelhaft",
        "article": "",
        "plural": "",
        "pos": "adj",
        "en": "defective / faulty",
        "tr": "kusurlu / ayıplı / bozuk",
        "ar": "معيب / به خلل أو عيب صناعة",
        "uk": "дефектний / з браком",
        "example_de": "Die gelieferte Ware war leider mangelhaft."
      },
      {
        "de": "erstatten",
        "article": "",
        "plural": "",
        "pos": "verb",
        "en": "to refund / reimburse",
        "tr": "geri ödemek / iade etmek",
        "ar": "يسترد / يعوض مالياً",
        "uk": "повертати кошти / відшкодовувати",
        "example_de": "Der Händler erstattete den Betrag innerhalb weniger Tage."
      },
      {
        "de": "in Betrieb nehmen",
        "article": "",
        "plural": "",
        "pos": "phrase",
        "en": "to start up / put into operation",
        "tr": "çalıştırmak / faaliyete geçirmek",
        "ar": "يشغل الجهاز لأول مرة",
        "uk": "вводити в експлуатацію / запускати в роботу",
        "example_de": "Bitte lesen Sie die Anleitung, bevor Sie das Gerät in Betrieb nehmen."
      },
      {
        "de": "der Wassertank",
        "article": "der",
        "plural": "die Wassertanks",
        "pos": "noun",
        "en": "water tank / water reservoir",
        "tr": "su haznesi / su deposu",
        "ar": "خزان الماء",
        "uk": "резервуар для води",
        "example_de": "Der Wassertank der gelieferten Kaffeemaschine ist undicht."
      },
      {
        "de": "die Kaffeemaschine",
        "article": "die",
        "plural": "die Kaffeemaschinen",
        "pos": "noun",
        "en": "coffee machine",
        "tr": "kahve makinesi",
        "ar": "ماكينة القهوة",
        "uk": "кавоварка / кавомашина",
        "example_de": "Ich habe im Online-Shop eine neue Kaffeemaschine bestellt."
      },
      {
        "de": "der Kaufvertrag",
        "article": "der",
        "plural": "die Kaufverträge",
        "pos": "noun",
        "en": "purchase agreement / sales contract",
        "tr": "satış sözleşmesi / satın alma kontratı",
        "ar": "عقد الشراء / عقد البيع",
        "uk": "договір купівлі-продажу",
        "example_de": "Hiermit trete ich fristgerecht vom Kaufvertrag zurück."
      },
      {
        "de": "der Kundenservice",
        "article": "der",
        "plural": "-",
        "pos": "noun",
        "en": "customer service / support",
        "tr": "müşteri hizmetleri",
        "ar": "خدمة العملاء / الدعم الفني",
        "uk": "служба підтримки клієнтів",
        "example_de": "Der Kundenservice bearbeitete die Reklamation sofort."
      },
      {
        "de": "undicht",
        "article": "",
        "plural": "",
        "pos": "adj",
        "en": "leaking / leaky",
        "tr": "sızdıran / su kaçıran",
        "ar": "غير محكم / يسرب السوائل",
        "uk": "негерметичний / протікає",
        "example_de": "Das Gerät ist leider undicht und das Wasser läuft aus."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "paragraphRef": "p1",
        "type": "multiple_choice",
        "prompt": {
          "de": "Welches konkrete Problem hat die Kundin mit der Kaffeemaschine?",
          "en": "What specific issue does the customer have with the coffee machine?",
          "tr": "Müşterinin kahve makinesiyle ilgili yaşadığı somut sorun nedir?",
          "ar": "ما هي المشكلة المحددة التي واجهتها الزبونة مع ماكينة القهوة؟",
          "uk": "Яку конкретну проблему має клієнтка з кавомашиною?"
        },
        "options": [
          {
            "de": "Der Wassertank ist undicht und verliert Wasser.",
            "en": "The water tank is leaking water.",
            "tr": "Su haznesi sızdırıyor ve su akıtıyor.",
            "ar": "خزان المياه يسرب الماء مباشرة.",
            "uk": "Резервуар для води протікає."
          },
          {
            "de": "Die Maschine wurde an eine falsche Adresse geliefert.",
            "en": "The machine was shipped to an incorrect address.",
            "tr": "Makine yanlış bir adrese teslim edildi.",
            "ar": "تم توصيل الماكينة إلى عنوان خاطئ.",
            "uk": "Машину доставили на неправильну адресу."
          },
          {
            "de": "Die Kundin hat versehentlich zwei Maschinen bestellt.",
            "en": "The customer mistakenly ordered two machines.",
            "tr": "Müşteri yanlışlıkla iki makine sipariş etti.",
            "ar": "طلبت الزبونة ماكينتين عن طريق الخطأ.",
            "uk": "Клієнтка помилково замовила дві машини."
          }
        ],
        "correct": 0,
        "explanation": {
          "de": "Absatz 1 belegt: 'dass der Wassertank undicht ist und das Wasser sofort ausläuft.'",
          "en": "Paragraph 1 clearly specifies that the water tank is leaking.",
          "tr": "1. paragrafta belirtiliyor: 'su haznesi sızdırıyor ve su hemen dışarı akıyor.'",
          "ar": "الفقرة 1 توضح: 'خزان المياه به تسريب والماء ينسكب فوراً.'",
          "uk": "Абзац 1 чітко зазначає, що резервуар для води протікає."
        }
      },
      {
        "id": "q2",
        "paragraphRef": "p2",
        "type": "multiple_choice",
        "prompt": {
          "de": "Welche Frist setzt Frau Weber dem Verkäufer für eine Lösung?",
          "en": "What deadline does Ms. Weber set for the seller to resolve the issue?",
          "tr": "Bayan Weber satıcıya çözüm için ne zamana kadar süre veriyor?",
          "ar": "ما هي المهلة الزمنية التي حددتها السيدة فيبر للبائع لحل المشكلة؟",
          "uk": "Який термін пані Вебер встановлює продавцю для вирішення проблеми?"
        },
        "options": [
          {
            "de": "Innerhalb von 14 Tagen (bis zum 31. Mai).",
            "en": "Within 14 days (until May 31st).",
            "tr": "14 gün içinde (31 Mayıs'a kadar).",
            "ar": "خلال 14 يوماً (حتى 31 مايو).",
            "uk": "Протягом 14 днів (до 31 травня)."
          },
          {
            "de": "Bis zum nächsten Kalenderjahr.",
            "en": "Until the next calendar year.",
            "tr": "Gelecek takvim yılına kadar.",
            "ar": "حتى العام التقويمي القادم.",
            "uk": "До наступного календарного року."
          },
          {
            "de": "Innerhalb von genau 24 Stunden.",
            "en": "Within exactly 24 hours.",
            "tr": "Tam olarak 24 saat içerisinde.",
            "ar": "خلال 24 ساعة بالضبط.",
            "uk": "Рівно протягом 24 годин."
          }
        ],
        "correct": 0,
        "explanation": {
          "de": "Absatz 2 nennt die Frist: 'innerhalb von 14 Tagen, also bis zum 31. Mai'.",
          "en": "Paragraph 2 sets the deadline at 14 days (May 31st).",
          "tr": "2. paragrafta mühlet açıkça yazıyor: '14 gün içinde, yani 31 Mayıs'a kadar'.",
          "ar": "الفقرة 2 تذكر المهلة بوضوح: 'خلال 14 يوماً، أي بحلول 31 مايو'.",
          "uk": "Абзац 2 вказує термін: 'протягом 14 днів, тобто до 31 травня'."
        }
      },
      {
        "id": "q3",
        "paragraphRef": "p3",
        "type": "true_false",
        "prompt": {
          "de": "Die Kundin ist bereit, die Kosten für den Rückversand der kaputten Kaffeemaschine selbst zu tragen.",
          "en": "The customer is willing to personally cover return shipping costs for the defective machine.",
          "tr": "Müşteri arızalı makinenin geri gönderim kargo ücretini kendi cebinden ödemeye hazırdır.",
          "ar": "الزبونة مستعدة لدفع تكاليف إعادة شحن الماكينة التالفة على نفقتها الخاصة.",
          "uk": "Клієнтка готова самостійно оплатити витрати на повернення несправної кавомашини."
        },
        "options": [
          {
            "de": "Richtig",
            "en": "True",
            "tr": "Doğru",
            "ar": "صحيح",
            "uk": "Правильно"
          },
          {
            "de": "Falsch",
            "en": "False",
            "tr": "Yanlış",
            "ar": "خطأ",
            "uk": "Неправильно"
          }
        ],
        "correct": 1,
        "explanation": {
          "de": "Absatz 3 widerspricht: 'Bitte teilen Sie mir baldmöglichst mit, wie ich das defekte Gerät kostenfrei an Sie zurücksenden kann.' Sie verlangt kostenfreien Rückversand.",
          "en": "Paragraph 3 asks how she can return the defective machine free of charge (kostenfrei).",
          "tr": "3. paragrafta açıkça soruyor: 'Bozuk cihazı size nasıl ücretsiz (kostenfrei) geri gönderebileceğimi bildiriniz.'",
          "ar": "الفقرة 3 توضح عكس ذلك: تطلب معرفة كيفية إعادة الجهاز المعيب 'مجاناً وبدون تكلفة' (kostenfrei).",
          "uk": "Абзац 3 говорить протилежне: вона просить повідомити, як відправити дефектний товар безкоштовно (kostenfrei)."
        }
      }
    ]
  }
,
  {
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
          {
            "de": "Richtig",
            "en": "True",
            "tr": "Doğru",
            "ar": "صحيح",
            "uk": "Правильно"
          },
          {
            "de": "Falsch",
            "en": "False",
            "tr": "Yanlış",
            "ar": "خطأ",
            "uk": "Неправильно"
          }
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
  },
  {
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
          {
            "de": "Richtig",
            "en": "True",
            "tr": "Doğru",
            "ar": "صحيح",
            "uk": "Правильно"
          },
          {
            "de": "Falsch",
            "en": "False",
            "tr": "Yanlış",
            "ar": "خطأ",
            "uk": "Неправильно"
          }
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
  },
{
  "id": "lese-teil2-gesundheit",
  "part": "Teil 2",
  "partName": {
    "de": "Teil 2: Detailverstehen (Gesundheit)",
    "en": "Part 2: Detailed Comprehension (Healthcare)",
    "tr": "Bölüm 2: Ayrıntılı Anlama (Sağlık & Koruyucu Hekimlik)",
    "ar": "الجزء 2: الفهم التفصيلي (الرعاية الصحية)",
    "uk": "Частина 2: Детальне розуміння (Охорона здоров'я)"
  },
  "title": {
    "de": "Gesundheitsvorsorge und Arztbesuche in Deutschland",
    "en": "Preventive Healthcare and Doctor Visits in Germany",
    "tr": "Almanya'da Sağlık Hizmetleri ve Doktor Randevuları",
    "ar": "الرعاية الصحية الوقائية وزيارة الطبيب في ألمانيا",
    "uk": "Профілактична медицина та візити до лікаря в Німеччині"
  },
  "level": "B1",
  "timeEstimateMin": 12,
  "badge": "telc B1 Standard",
  "summary": {
    "de": "Ein Ratgeber über das deutsche Hausarzt-System, die elektronische Gesundheitskarte, Terminvereinbarungen und die Bedeutung regelmäßiger Vorsorgeuntersuchungen.",
    "en": "A practical guide on the German family doctor system, health insurance cards, appointments, and preventive checkups.",
    "tr": "Alman aile hekimliği sistemi, sağlık sigortası kartı, randevu alma ve düzenli kontrol muayenelerinin önemi üzerine bilgilendirici bir rehber.",
    "ar": "دليل إرشادي حول نظام طبيب الأسرة الألماني، وبطاقة التأمين الصحي، وحجز المواعيد وأهمية الفحوصات الوقائية الدورية.",
    "uk": "Довідник про систему сімейних лікарів у Німеччині, електронну картку медичного страхування, запис на прийом та профілактичні огляди."
  },
  "contentParagraphs": [
    {
      "id": "p1",
      "de": "Das deutsche Gesundheitssystem basiert auf dem bewährten Prinzip des Hausarztes. Bei gesundheitlichen Beschwerden wenden sich Patientinnen und Patienten zuerst an eine allgemeinmedizinische Praxis in ihrer Nähe. Der Hausarzt kennt die Krankengeschichte seiner Patienten am besten, verschreibt notwendige Medikamente und überweist bei Bedarf an spezialisierte Fachärzte wie Kardiologen oder Orthopäden. Für gesetzlich Versicherte reicht beim Arztbesuch das Vorzeigen der elektronischen Gesundheitskarte, da die Krankenkasse die Behandlungskosten direkt übernimmt."
    },
    {
      "id": "p2",
      "de": "Ein zentraler Schwerpunkt der modernen Medizin ist die frühzeitige Vorsorge. Gesetzliche Krankenkassen finanzieren regelmäßig kostenfreie Kontrolluntersuchungen, wie den allgemeinen Check-up ab 35 Jahren, jährliche Zahnarztkontrollen sowie gezielte Krebsfrüherkennungen. Wer diese Vorsorgetermine gewissenhaft wahrnimmt, profitiert nicht nur von einer frühzeitigen Diagnose, sondern sammelt bei vielen Kassen wertvolle Bonuspunkte, die am Jahresende als Geldprämie oder Zuschuss ausgezahlt werden."
    },
    {
      "id": "p3",
      "de": "Auch bei der Organisation von Arztterminen hat die Digitalisierung vieles vereinfacht. Neben der bundesweiten Patientenservice-Nummer 116117 nutzen viele Bürger Online-Portale und Smartphone-Apps, um freie Termine rund um die Uhr zu buchen. Wenn Beschäftigte wegen einer Erkrankung nicht arbeiten können, müssen sie ihrem Arbeitgeber eine Arbeitsunfähigkeitsbescheinigung vorlegen. Dank der elektronischen Krankmeldung (eAU) übermittelt die Arztpraxis die Krankmeldung heute vollautomatisch direkt an die zuständige Krankenkasse."
    }
  ],
  "glossary": [
    {
      "de": "der Hausarzt",
      "article": "der",
      "plural": "die Hausärzte",
      "pos": "noun",
      "en": "family doctor / general practitioner",
      "tr": "aile hekimi / pratisyen hekim",
      "ar": "طبيب الأسرة / الطبيب العام",
      "uk": "сімейний лікар",
      "example_de": "Bei einer Erkältung geht man zuerst zum Hausarzt."
    },
    {
      "de": "die Krankengeschichte",
      "article": "die",
      "plural": "die Krankengeschichten",
      "pos": "noun",
      "en": "medical history",
      "tr": "hasta tıbbi geçmişi, anamnez",
      "ar": "السجل الطبي / التاريخ المرضي",
      "uk": "історія хвороби / медична карта",
      "example_de": "Der Hausarzt dokumentiert die Krankengeschichte seiner Patienten."
    },
    {
      "de": "die Gesundheitskarte",
      "article": "die",
      "plural": "die Gesundheitskarten",
      "pos": "noun",
      "en": "health insurance card",
      "tr": "sağlık sigortası kartı",
      "ar": "بطاقة التأمين الصحي الإلكترونية",
      "uk": "картка медичного страхування",
      "example_de": "Die elektronische Gesundheitskarte muss in der Praxis vorgelegt werden."
    },
    {
      "de": "die Vorsorge",
      "article": "die",
      "plural": "die Vorsorgen",
      "pos": "noun",
      "en": "preventive healthcare / checkup",
      "tr": "koruyucu hekimlik / önleyici sağlık kontrolü",
      "ar": "الفحص الوقائي / الرعاية الوقائية",
      "uk": "профілактичний огляд",
      "example_de": "Regelmäßige Vorsorge schützt vor schweren Krankheiten."
    },
    {
      "de": "der Facharzt",
      "article": "der",
      "plural": "die Fachärzte",
      "pos": "noun",
      "en": "medical specialist",
      "tr": "uzman hekim",
      "ar": "طبيب أخصائي",
      "uk": "лікар-спеціаліст",
      "example_de": "Für eine Augenuntersuchung geht man zum Facharzt."
    },
    {
      "de": "die Arbeitsunfähigkeitsbescheinigung",
      "article": "die",
      "plural": "die Arbeitsunfähigkeitsbescheinigungen",
      "pos": "noun",
      "en": "certificate of incapacity for work (sick note)",
      "tr": "iş göremezlik raporu / istirahat raporu",
      "ar": "شهادة العجز عن العمل / الإجازة المرضية",
      "uk": "довідка про непрацездатність / лікарняний лист",
      "example_de": "Der Arbeitgeber verlangt ab dem dritten Krankheitstag eine Bescheinigung."
    }
  ],
  "questions": [
    {
      "id": "q1",
      "paragraphRef": "p1",
      "type": "multiple_choice",
      "prompt": {
        "de": "An wen sollten sich gesetzlich versicherte Patienten in Deutschland bei gesundheitlichen Problemen zuerst wenden?",
        "en": "Whom should legally insured patients in Germany consult first when experiencing health problems?",
        "tr": "Almanya'da yasal sağlık sigortalı hastalar sağlık sorunlarında öncelikle kime başvurmalıdır?",
        "ar": "إلى من ينبغي أن يتوجه المرضى المشمولون بالتأمين الصحي الإلزامي في ألمانيا أولاً عند حدوث مشاكل صحية؟",
        "uk": "До кого пацієнти з державним страхуванням у Німеччині повинні звертатися в першу чергу при проблемах зі здоров'ям?"
      },
      "options": [
        {
          "de": "Direkt an eine Universitätsklinik im Ausland.",
          "en": "Directly to a university hospital abroad.",
          "tr": "Doğrudan yurt dışındaki bir üniversite hastanesine.",
          "ar": "مباشرة إلى مستشفى جامعي في الخارج.",
          "uk": "Безпосередньо до університетської клініки за кордоном."
        },
        {
          "de": "Zuerst an eine allgemeinmedizinische Hausarztpraxis in der Nähe.",
          "en": "First to a local general family practice nearby.",
          "tr": "Öncelikle yakınlarındaki bir aile hekimi (pratisyen hekim) muayenehanesine.",
          "ar": "أولاً إلى عيادة طبيب الأسرة العام القريبة من محل إقامتهم.",
          "uk": "Спочатку до найближчої амбулаторії сімейного лікаря."
        },
        {
          "de": "Ausschließlich an den Notdienst der Feuerwehr.",
          "en": "Exclusively to the fire brigade emergency service.",
          "tr": "Sadece ve münhasıran itfaiyenin acil servis birimine.",
          "ar": "حصرياً إلى خدمة الطوارئ التابعة لفرقة الإطفاء.",
          "uk": "Виключно до аварійної служби пожежної охорони."
        }
      ],
      "correct": 1,
      "explanation": {
        "de": "Absatz 1 stellt fest: 'Bei gesundheitlichen Beschwerden wenden sich Patientinnen und Patienten zuerst an eine allgemeinmedizinische Praxis in ihrer Nähe.'",
        "en": "Paragraph 1 states: 'In case of health complaints, patients first contact a general practice in their vicinity.'",
        "tr": "1. paragrafta açıkça belirtiliyor: 'Sağlık şikayetlerinde hastalar ilk olarak yakınlarındaki bir genel tıp (aile hekimi) muayenehanesine başvururlar.'",
        "ar": "الفقرة 1 توضح: 'عند الشكوى من مشاكل صحية، يتوجه المرضى أولاً إلى عيادة الطب العام القريبة منهم.'",
        "uk": "Абзац 1 зазначає: 'При проблемах зі здоров'ям пацієнти спочатку звертаються до найближчого сімейного лікаря.'"
      }
    },
    {
      "id": "q2",
      "paragraphRef": "p2",
      "type": "true_false",
      "prompt": {
        "de": "Gesetzliche Krankenkassen übernehmen die Kosten für wichtige Vorsorgeuntersuchungen wie den Check-up ab 35 Jahren.",
        "en": "Statutory health insurances cover the costs of important preventive checkups such as the general check-up from age 35.",
        "tr": "Yasal sağlık sigortaları 35 yaşından itibaren yapılan genel sağlık taraması gibi önemli koruyucu kontrollerin masraflarını karşılar.",
        "ar": "تتحمل صناديق التأمين الصحي القانونية تكاليف الفحوصات الوقائية الهامة مثل الفحص الشامل ابتداءً من سن 35 عاماً.",
        "uk": "Державні каси медичного страхування оплачують витрати на важливі профілактичні огляди, такі як чек-ап з 35 років."
      },
      "options": [
        {
          "de": "Richtig",
          "en": "True",
          "tr": "Doğru",
          "ar": "صحيح",
          "uk": "Правильно"
        },
        {
          "de": "Falsch",
          "en": "False",
          "tr": "Yanlış",
          "ar": "خطأ",
          "uk": "Неправильно"
        }
      ],
      "correct": 0,
      "explanation": {
        "de": "Absatz 2 belegt: 'Gesetzliche Krankenkassen finanzieren regelmäßig kostenfreie Kontrolluntersuchungen, wie den allgemeinen Check-up ab 35 Jahren.'",
        "en": "Paragraph 2 confirms: 'Statutory health funds regularly finance cost-free checkups, such as the general check-up from age 35.'",
        "tr": "2. paragrafta doğrulanıyor: 'Yasal sağlık sigortaları 35 yaşından itibaren genel check-up gibi ücretsiz kontrol muayenelerini düzenli olarak finanse eder.'",
        "ar": "الفقرة 2 تؤكد: 'تمول صناديق التأمين الصحي القانونية بانتظام فحوصات دورية مجانية مثل الفحص العام من سن 35 عاماً.'",
        "uk": "Абзац 2 підтверджує: 'Державні каси страхування регулярно фінансують безкоштовні огляди, наприклад чек-ап з 35 років.'"
      }
    },
    {
      "id": "q3",
      "paragraphRef": "p3",
      "type": "multiple_choice",
      "prompt": {
        "de": "Wie wird die Arbeitsunfähigkeitsbescheinigung (Krankmeldung) heute an die Krankenkasse übermittelt?",
        "en": "How is the certificate of incapacity for work (sick leave) transmitted to the health insurance fund today?",
        "tr": "İş göremezlik raporu (hastalık bildirimi) günümüzde sağlık sigortasına nasıl iletilmektedir?",
        "ar": "كيف يتم إرسال شهادة الإجازة المرضية إلى صندوق التأمين الصحي اليوم؟",
        "uk": "Як сьогодні передається довідка про непрацездатність (лікарняний) до страхової каси?"
      },
      "options": [
        {
          "de": "Patienten müssen den Brief persönlich zu Fuß zur Hauptverwaltung nach Berlin bringen.",
          "en": "Patients must personally deliver the letter on foot to headquarters in Berlin.",
          "tr": "Hastalar mektubu yürüyerek Berlin'deki genel merkeze bizzat elden götürmek zorundadır.",
          "ar": "يجب على المرضى تسليم الخطاب شخصياً سيراً على الأقدام إلى المقر الرئيسي في برلين.",
          "uk": "Пацієнти повинні особисто пішки віднести лист до головного офісу в Берліні."
        },
        {
          "de": "Die Arztpraxis übermittelt die elektronische Krankmeldung (eAU) vollautomatisch digital.",
          "en": "The medical practice transmits the electronic sick note (eAU) fully automatically digitally.",
          "tr": "Doktor muayenehanesi elektronik raporu (eAU) tamamen otomatik olarak dijital yoldan iletir.",
          "ar": "ترسل عيادة الطبيب الإشعار الإلكتروني بالمرض (eAU) رقمياً وبشكل تلقائي تماماً.",
          "uk": "Лікарська практика передає електронний лікарняний (eAU) повністю автоматично в цифровому вигляді."
        },
        {
          "de": "Krankmeldungen existieren in Deutschland überhaupt nicht mehr.",
          "en": "Sick notes no longer exist in Germany at all.",
          "tr": "Almanya'da hastalık raporu diye bir uygulama artık tamamen kalkmıştır.",
          "ar": "لم تعد هناك شهادات إجازة مرضية في ألمانيا على الإطلاق.",
          "uk": "Лікарняних листів у Німеччині більше взагалі не існує."
        }
      ],
      "correct": 1,
      "explanation": {
        "de": "Absatz 3 erklärt: 'Dank der elektronischen Krankmeldung (eAU) übermittelt die Arztpraxis die Krankmeldung heute vollautomatisch direkt an die zuständige Krankenkasse.'",
        "en": "Paragraph 3 explains: Thanks to the electronic sick note (eAU), the medical practice transmits the sick certificate fully automatically.",
        "tr": "3. paragrafta açıklanıyor: 'Elektronik hastalık bildirimi (eAU) sayesinde doktor muayenehanesi raporu günümüzde tamamen otomatik olarak sigortaya doğrudan iletir.'",
        "ar": "الفقرة 3 توضح: 'بفضل الإجازة المرضية الإلكترونية (eAU)، ترسل عيادة الطبيب الإشعار تلقائياً ومباشرة إلى صندوق التأمين.'",
        "uk": "Абзац 3 пояснює: 'Завдяки електронному лікарняному (eAU) амбулаторія передає повідомлення повністю автоматично безпосередньо до каси.'"
      }
    }
  ]
},
{
  "id": "lese-teil1-mobilitaet",
  "part": "Teil 1",
  "partName": {
    "de": "Teil 1: Globalverstehen (Mobilität)",
    "en": "Part 1: Global Comprehension (Mobility & Transit)",
    "tr": "Bölüm 1: Genel Anlama (Ulaşım & Deutschlandticket)",
    "ar": "الجزء 1: الفهم العام (المواصلات العامة)",
    "uk": "Частина 1: Загальне розуміння (Громадський транспорт)"
  },
  "title": {
    "de": "Das Deutschlandticket und die Mobilitätswende: Unterwegs mit Bus und Bahn",
    "en": "The Germany Ticket and the Mobility Transition: Traveling by Bus and Train",
    "tr": "Deutschlandticket ve Ulaşımda Dönüşüm: Otobüs ve Trenle Yolculuk",
    "ar": "تذكرة ألمانيا والتحول في قطاع النقل: السفر بالحافلة والقطار",
    "uk": "Німецький квиток (Deutschlandticket) та мобільність: подорожі автобусом і потягом"
  },
  "level": "B1",
  "timeEstimateMin": 12,
  "badge": "telc B1 Standard",
  "summary": {
    "de": "Ein Text über die Einführung des bundesweiten Deutschlandtickets für den öffentlichen Nahverkehr, Vorteile für Pendler und Herausforderungen für das Schienennetz.",
    "en": "A passage on the nationwide Deutschlandticket for local public transit, benefits for commuters, and railway infrastructure challenges.",
    "tr": "Toplu taşıma için ülke çapında geçerli Deutschlandticket (Almanya bileti), işe gidip gelenler için avantajlar ve demir yolu altyapısı üzerine bir metin.",
    "ar": "نص حول إدخال تذكرة ألمانيا لوسائل النقل العام المحلية، والمزايا للمتنقلين للعمل والتحديات التي تواجه شبكة السكك الحديدية.",
    "uk": "Текст про запровадження загальнонімецького квитка (Deutschlandticket) для міського та приміського транспорту, переваги для пасажирів та виклики для залізниці."
  },
  "contentParagraphs": [
    {
      "id": "p1",
      "de": "Mit der Einführung des Deutschlandtickets für 49 Euro im Monat hat die Bundesregierung einen Meilenstein für den öffentlichen Nahverkehr gesetzt. Das digitale Abonnement gilt bundesweit in allen Bussen, Straßenbahnen, U-Bahnen, S-Bahnen sowie im regionalen Bahnverkehr. Fahrgäste müssen sich keine Gedanken mehr über komplizierte Tarifzonen oder unterschiedliche Verkehrsverbünde machen. Millionen Pendlerinnen und Pendler sparen durch das Ticket jeden Monat bares Geld und schonen gleichzeitig die Umwelt."
    },
    {
      "id": "p2",
      "de": "Besonders in Ballungsräumen und Großstädten hat das Ticket viele Menschen dazu bewegt, das eigene Auto häufiger stehenzulassen. Wer regelmäßig mit öffentlichen Verkehrsmitteln zur Arbeit fährt, vermeidet lange Staus im Berufsverkehr und spart hohe Parkgebühren in der Innenstadt. Umfragen zeigen, dass vor allem Berufspendler die gewonnene Zeit im Zug gerne nutzen, um in Ruhe ein Buch zu lesen, Musik zu hören oder bereits erste E-Mails zu bearbeiten."
    },
    {
      "id": "p3",
      "de": "Trotz des großen Erfolgs steht das System vor gewaltigen Herausforderungen. Durch den deutlichen Anstieg der Fahrgastzahlen sind viele Züge zu Stoßzeiten überfüllt. Fahrgäste beklagen zudem wiederkehrende Verspätungen und technische Ausfälle auf stark befahrenen Strecken. Verkehrsexperten fordern daher massive Investitionen in moderne Schienen, neue Fahrzeuge und zusätzliches Zugpersonal, damit der Umstieg vom Auto auf die Schiene dauerhaft attraktiv bleibt."
    }
  ],
  "glossary": [
    {
      "de": "der Nahverkehr",
      "article": "der",
      "plural": "-",
      "pos": "noun",
      "en": "local public transport",
      "tr": "şehir içi / yerel toplu taşıma",
      "ar": "النقل العام المحلي القريب",
      "uk": "міський та приміський транспорт",
      "example_de": "Das Ticket gilt im gesamten öffentlichen Nahverkehr."
    },
    {
      "de": "das Abonnement",
      "article": "das",
      "plural": "die Abonnements",
      "pos": "noun",
      "en": "subscription",
      "tr": "abonelik",
      "ar": "اشتراك دوري",
      "uk": "абонемент / передплата",
      "example_de": "Das Deutschlandticket ist ein monatlich kündbares Abonnement."
    },
    {
      "de": "die Tarifzone",
      "article": "die",
      "plural": "die Tarifzonen",
      "pos": "noun",
      "en": "fare zone / tariff zone",
      "tr": "bilet / ücret tarifesi bölgesi",
      "ar": "منطقة تعريفة الأسعار",
      "uk": "тарифна зона",
      "example_de": "Früher musste man genaue Tarifzonen beachten."
    },
    {
      "de": "der Berufsverkehr",
      "article": "der",
      "plural": "-",
      "pos": "noun",
      "en": "rush hour traffic / commuter traffic",
      "tr": "işe gidiş-dönüş trafiği, yoğun saatler",
      "ar": "حركة المرور في أوقات الذروة",
      "uk": "рух транспорту в години пік",
      "example_de": "Im morgendlichen Berufsverkehr gibt es oft Staus."
    },
    {
      "de": "die Stoßzeit",
      "article": "die",
      "plural": "die Stoßzeiten",
      "pos": "noun",
      "en": "rush hour / peak hours",
      "tr": "yoğun saatler, iş çıkış saati",
      "ar": "ساعة الذروة والازدحام",
      "uk": "година пік",
      "example_de": "Zu Stoßzeiten sind die Züge oft überfüllt."
    },
    {
      "de": "das Schienennetz",
      "article": "das",
      "plural": "die Schienennetze",
      "pos": "noun",
      "en": "rail network",
      "tr": "demir yolu ağı",
      "ar": "شبكة السكك الحديدية",
      "uk": "залізнична мережа",
      "example_de": "Deutschland investiert Milliarden in das Schienennetz."
    }
  ],
  "questions": [
    {
      "id": "q1",
      "paragraphRef": "p1",
      "type": "true_false",
      "prompt": {
        "de": "Das Deutschlandticket gilt ausschließlich in der Stadt, in der es gekauft wurde.",
        "en": "The Germany Ticket is valid exclusively in the city where it was purchased.",
        "tr": "Deutschlandticket (Almanya bileti) sadece ve yalnızca satın alındığı şehirde geçerlidir.",
        "ar": "تسري تذكرة ألمانيا حصرياً فقط في المدينة التي تم شراؤها منها.",
        "uk": "Німецький квиток (Deutschlandticket) діє виключно в місті, де його придбали."
      },
      "options": [
        {
          "de": "Richtig",
          "en": "True",
          "tr": "Doğru",
          "ar": "صحيح",
          "uk": "Правильно"
        },
        {
          "de": "Falsch",
          "en": "False",
          "tr": "Yanlış",
          "ar": "خطأ",
          "uk": "Неправильно"
        }
      ],
      "correct": 1,
      "explanation": {
        "de": "Absatz 1 widerspricht: 'Das digitale Abonnement gilt bundesweit in allen Bussen, Straßenbahnen, U-Bahnen, S-Bahnen sowie im regionalen Bahnverkehr.' Es gilt bundesweit in ganz Deutschland.",
        "en": "Paragraph 1 contradicts: 'The digital subscription is valid nationwide in all buses, trams, subways, and regional trains.' It applies nationwide throughout Germany.",
        "tr": "1. paragrafta açıkça belirtiliyor: 'Dijital abonelik ülke genelinde tüm otobüslerde, tramvaylarda, metrolarda ve bölgesel trenlerde geçerlidir.'",
        "ar": "الفقرة 1 توضح عكس ذلك: 'يسري الاشتراك الرقمي على مستوى جميع أنحاء ألمانيا في كافة الحافلات والقطارات الإقليمية.'",
        "uk": "Абзац 1 спростовує це: 'Цифровий абонемент діє по всій країні в усіх автобусах, трамваях, метро та регіональних поїздах.'"
      }
    },
    {
      "id": "q2",
      "paragraphRef": "p2",
      "type": "multiple_choice",
      "prompt": {
        "de": "Welchen praktischen Vorteil nennen Berufspendler bei der Nutzung von Bahnen statt des Autos?",
        "en": "What practical benefit do commuters mention when using trains instead of cars?",
        "tr": "İşe gidip gelenler araba yerine tren kullanmanın hangi pratik avantajını belirtmektedir?",
        "ar": "ما هي الميزة العملية التي يذكرها المسافرون للعمل عند استخدام القطارات بدلاً من السيارة؟",
        "uk": "Яку практичну перевагу називають пасажири при користуванні потягом замість автомобіля?"
      },
      "options": [
        {
          "de": "Man darf im Zug kostenlos frische Mahlzeiten kochen.",
          "en": "One is allowed to cook fresh meals for free on the train.",
          "tr": "Trende ücretsiz olarak taze yemek pişirmeye izin verilmektedir.",
          "ar": "يُسمح بطهي وجبات طازجة مجاناً داخل القطار.",
          "uk": "У поїзді дозволено безкоштовно готувати свіжі страви."
        },
        {
          "de": "Man vermeidet Staus, spart Parkgebühren und kann die Fahrzeit zum Lesen oder Arbeiten nutzen.",
          "en": "One avoids traffic jams, saves parking fees, and can use travel time for reading or working.",
          "tr": "Trafik sıkışıklığından kaçınılır, otopark ücretinden tasarruf edilir ve yolculuk süresi kitap okumak veya çalışmak için değerlendirilebilir.",
          "ar": "يتجنب المرء الازدحام المروري، ويوفر رسوم مواقف السيارات، ويستغل وقت الرحلة للقراءة أو العمل.",
          "uk": "Уникають заторів, економлять на паркуванні та використовують час у дорозі для читання або роботи."
        },
        {
          "de": "Alle Züge in Deutschland fahren grundsätzlich ohne Lokführer.",
          "en": "All trains in Germany fundamentally operate without drivers.",
          "tr": "Almanya'daki tüm trenler istisnasız makinistsiz çalışmaktadır.",
          "ar": "تسير جميع القطارات في ألمانيا بدون سائقين تماماً.",
          "uk": "Усі поїзди в Німеччині курсують принципово без машиністів."
        }
      ],
      "correct": 1,
      "explanation": {
        "de": "Absatz 2 hebt hervor: 'vermeidet lange Staus im Berufsverkehr und spart hohe Parkgebühren' und nutzt die Zeit im Zug zum Lesen oder Arbeiten.",
        "en": "Paragraph 2 emphasizes: one avoids long traffic jams, saves parking fees, and uses the train time to read or work.",
        "tr": "2. paragrafta vurgulanıyor: Uzun trafik kuyruklarından kaçınılır, yüksek otopark ücretlerinden tasarruf edilir ve tren içindeki zaman okumak veya e-postaları yanıtlamak için kullanılır.",
        "ar": "الفقرة 2 تؤكد: يتجنب المسافر الازدحام المروري ويوفر رسوم المواقف ويستفيد من الوقت في القراءة أو العمل.",
        "uk": "Абзац 2 підкреслює: пасажири уникають заторів, заощаджують на паркуванні та використовують час для читання чи роботи."
      }
    },
    {
      "id": "q3",
      "paragraphRef": "p3",
      "type": "multiple_choice",
      "prompt": {
        "de": "Welche Kritikpunkte und Forderungen äußern Fahrgäste und Verkehrsexperten?",
        "en": "What criticisms and demands are expressed by passengers and transport experts?",
        "tr": "Yolcular ve ulaşım uzmanları hangi eleştirileri ve talepleri dile getirmektedir?",
        "ar": "ما هي الانتقادات والمطالب التي يعبر عنها الركاب وخبراء النقل؟",
        "uk": "Які зауваження та вимоги висловлюють пасажири та експерти з транспорту?"
      },
      "options": [
        {
          "de": "Das Ticket soll ab morgen vollständig verboten und abgeschafft werden.",
          "en": "The ticket should be completely banned and abolished starting tomorrow.",
          "tr": "Biletin yarından itibaren tamamen yasaklanması ve yürürlükten kaldırılması istenmektedir.",
          "ar": "يجب حظر التذكرة وإلغاؤها تماماً اعتباراً من الغد.",
          "uk": "Квиток вимагають повністю заборонити та скасувати від завтра."
        },
        {
          "de": "Überfüllte Züge und Verspätungen erfordern massive Investitionen in Schienen, Züge und Personal.",
          "en": "Overcrowded trains and delays require massive investments in tracks, vehicles, and personnel.",
          "tr": "Aşırı kalabalık trenler ve gecikmeler; raylara, yeni araçlara ve personele büyük yatırımlar yapılmasını gerektirmektedir.",
          "ar": "تتطلب القطارات المزدحمة والتأخيرات المتكررة استثمارات ضخمة في السكك الحديدية والقطارات والموظفين.",
          "uk": "Переповнені поїзди та запізнення вимагають масштабних інвестицій у колії, рухомий склад та персонал."
        },
        {
          "de": "Busse und Bahnen sollen nur noch nachts zwischen 2 und 4 Uhr fahren.",
          "en": "Buses and trains should only run at night between 2 and 4 a.m.",
          "tr": "Otobüs ve trenlerin sadece gece 02:00 ile 04:00 arasında çalışması talep edilmektedir.",
          "ar": "ينبغي أن تعمل الحافلات والقطارات فقط ليلاً بين الساعة 2 و 4 صباحاً.",
          "uk": "Автобуси та поїзди мають курсувати лише вночі між 2 та 4 годинами."
        }
      ],
      "correct": 1,
      "explanation": {
        "de": "Absatz 3 belegt: Fahrgäste beklagen 'überfüllte Züge zu Stoßzeiten' und 'wiederkehrende Verspätungen'. Experten fordern 'massive Investitionen in moderne Schienen, neue Fahrzeuge und zusätzliches Zugpersonal.'",
        "en": "Paragraph 3 proves: Passengers complain of overcrowded trains and recurring delays. Experts demand massive investments in modern tracks, vehicles, and train personnel.",
        "tr": "3. paragrafta belirtiliyor: Yolcular yoğun saatlerdeki aşırı kalabalıktan ve gecikmelerden şikayetçidir; uzmanlar ise modern raylara, yeni araçlara ve ek personele büyük yatırımlar talep etmektedir.",
        "ar": "الفقرة 3 توضح: يشكو الركاب من القطارات المزدحمة والتأخير، ويطالب الخبراء باستثمارات ضخمة في السكك والقطارات والموظفين.",
        "uk": "Абзац 3 підтверджує: пасажири нарікають на переповнені поїзди та затримки, а експерти вимагають інвестицій у залізницю, потяги та персонал."
      }
    }
  ]
},
{
  "id": "lese-teil3-integration",
  "part": "Teil 3",
  "partName": {
    "de": "Teil 3: Selektives Verstehen (Integration)",
    "en": "Part 3: Selective Comprehension (Integration & Language)",
    "tr": "Bölüm 3: Seçici Anlama (Entegrasyon & Dil Kursu)",
    "ar": "الجزء 3: الفهم الانتقائي (الاندماج واللغة)",
    "uk": "Частина 3: Вибіркове розуміння (Інтеграція та мова)"
  },
  "title": {
    "de": "Integrationskurse und Einbürgerung: Der Weg zum B1-Zertifikat",
    "en": "Integration Courses and Naturalization: The Path to the B1 Certificate",
    "tr": "Almanya'da Uyum Kursları ve Vatandaşlık: B1 Sertifikası Yolu",
    "ar": "دورات الاندماج والتجنيس: الطريق نحو شهادة المستوى B1",
    "uk": "Інтеграційні курси та громадянство: шлях до сертифіката B1"
  },
  "level": "B1",
  "timeEstimateMin": 12,
  "badge": "telc B1 Standard",
  "summary": {
    "de": "Ein informativer Leitfaden über den Aufbau von BAMF-Integrationskursen, die offizielle B1 Sprachprüfung und die rechtlichen Voraussetzungen für ein dauerhaftes Aufenthaltsrecht.",
    "en": "An informative guide on BAMF integration courses, the official B1 German exam, and legal requirements for permanent residency.",
    "tr": "BAMF uyum kurslarının yapısı, resmi B1 dil sınavı ve süresiz oturum veya vatandaşlık için gereken dil yeterlilikleri üzerine bir rehber.",
    "ar": "دليل إعلامي حول هيكل دورات الاندماج من الـ BAMF، وامتحان اللغة الرسمي B1، والشروط القانونية للإقامة الدائمة.",
    "uk": "Інформативний посібник про структуру інтеграційних курсів BAMF, офіційний мовний іспит B1 та юридичні передумови для постійного проживання."
  },
  "contentParagraphs": [
    {
      "id": "p1",
      "de": "Für Zugewanderte ist das Beherrschen der deutschen Sprache der wichtigste Schlüssel für eine gelungene gesellschaftliche und berufliche Teilhabe. Das Bundesamt für Migration und Flüchtlinge (BAMF) fördert daher flächendeckend Integrationskurse. Ein allgemeiner Kurs umfasst insgesamt 700 Unterrichtsstunden: 600 Stunden entfallen auf den eigentlichen Sprachkurs, in dem Lernende systematisch von den Grundlagen bis zum Niveau B1 geführt werden. Die verbleibenden 100 Stunden widmen sich dem Orientierungskurs, der wichtige Kenntnisse über die Rechtsordnung, Geschichte und Kultur Deutschlands vermittelt."
    },
    {
      "id": "p2",
      "de": "Am Ende des Sprachkurses legen die Teilnehmenden eine offizielle Prüfung ab, die die vier Fertigkeiten Hören, Lesen, Schreiben und Sprechen umfasst. Wer die Prüfung auf dem Niveau B1 besteht und zudem den Abschlusstest 'Leben in Deutschland' erfolgreich absolviert, erhält das offizielle Zertifikat Integrationskurs. Dieses Dokument ist ein unschätzbarer Nachweis bei Behörden und bildet oft die gesetzliche Grundlage für die Erteilung einer Niederlassungserlaubnis oder die vorzeitige Einbürgerung."
    },
    {
      "id": "p3",
      "de": "Neben dem Unterricht im Klassenzimmer betonen Lehrkräfte die Bedeutung des selbstständigen Übens im Alltag. Das Lesen deutschsprachiger Zeitungsartikel, der Austausch mit Nachbarn und Kolleginnen sowie das Hören von Podcasts und Radiobeiträgen festigen den Wortschatz nachhaltig. Wer neu erworbene Redemittel direkt in Alltagsgesprächen anwendet, verliert schnell die Scheu vor Fehlern und gewinnt spürbar an sprachlicher Selbstsicherheit."
    }
  ],
  "glossary": [
    {
      "de": "die Teilhabe",
      "article": "die",
      "plural": "-",
      "pos": "noun",
      "en": "participation / involvement",
      "tr": "toplumsal katılım / yer alma",
      "ar": "المشاركة المجتمعية الفعالة",
      "uk": "участь у житті суспільства",
      "example_de": "Sprachkenntnisse ermöglichen die aktive Teilhabe am Berufsleben."
    },
    {
      "de": "der Orientierungskurs",
      "article": "der",
      "plural": "die Orientierungskurse",
      "pos": "noun",
      "en": "orientation course (civics, history, culture)",
      "tr": "uyum oryantasyon kursu (tarih, hukuk ve kültür)",
      "ar": "دورة التوجيه المدني والتاريخي",
      "uk": "орієнтаційний курс (історія, право, культура)",
      "example_de": "Der Orientierungskurs umfasst 100 Unterrichtsstunden."
    },
    {
      "de": "die Niederlassungserlaubnis",
      "article": "die",
      "plural": "die Niederlassungserlaubnisse",
      "pos": "noun",
      "en": "permanent residence permit",
      "tr": "süresiz yerleşim / oturum izni",
      "ar": "تصريح الإقامة الدائمة غير المقيد",
      "uk": "дозвіл на постійне проживання (ПМП)",
      "example_de": "Mit dem B1-Zertifikat kann man eine Niederlassungserlaubnis beantragen."
    },
    {
      "de": "die Einbürgerung",
      "article": "die",
      "plural": "die Einbürgerungen",
      "pos": "noun",
      "en": "naturalization / citizenship",
      "tr": "vatandaşlığa kabul, vatandaşlık",
      "ar": "التجنيس / الحصول على الجنسية",
      "uk": "набуття громадянства",
      "example_de": "B1-Deutschkenntnisse sind Voraussetzung für die Einbürgerung."
    },
    {
      "de": "die Fertigkeit",
      "article": "die",
      "plural": "die Fertigkeiten",
      "pos": "noun",
      "en": "language skill",
      "tr": "dil becerisi (dinleme, okuma, yazma, konuşma)",
      "ar": "مهارة لغوية",
      "uk": "мовна навичка",
      "example_de": "Die Prüfung testet alle vier sprachlichen Fertigkeiten."
    },
    {
      "de": "die Selbstsicherheit",
      "article": "die",
      "plural": "-",
      "pos": "noun",
      "en": "self-confidence / assurance",
      "tr": "özgüven, kendine güven",
      "ar": "الثقة بالنفس",
      "uk": "впевненість у собі",
      "example_de": "Regelmäßiges Sprechen verleiht sprachliche Selbstsicherheit."
    }
  ],
  "questions": [
    {
      "id": "q1",
      "paragraphRef": "p1",
      "type": "multiple_choice",
      "prompt": {
        "de": "Wie viele Unterrichtsstunden umfasst ein allgemeiner Integrationskurs des BAMF insgesamt?",
        "en": "How many teaching hours does a standard BAMF integration course comprise in total?",
        "tr": "Standart bir BAMF uyum kursu toplamda kaç ders saatinden oluşur?",
        "ar": "كم عدد الساعات الدراسية التي تشملها دورة الاندماج العامة من الـ BAMF إجمالاً؟",
        "uk": "Скільки навчальних годин загалом охоплює стандартний інтеграційний курс BAMF?"
      },
      "options": [
        {
          "de": "Insgesamt 10 Stunden reiner Sportunterricht.",
          "en": "A total of 10 hours of pure physical education.",
          "tr": "Toplamda sadece 10 saatlik beden eğitimi.",
          "ar": "10 ساعات فقط من التربية البدنية.",
          "uk": "Загалом 10 годин фізкультури."
        },
        {
          "de": "Insgesamt 700 Stunden: 600 Stunden Sprachkurs und 100 Stunden Orientierungskurs.",
          "en": "A total of 700 hours: 600 hours language course and 100 hours orientation course.",
          "tr": "Toplam 700 saat: 600 saat dil kursu ve 100 saat oryantasyon kursu.",
          "ar": "إجمالي 700 ساعة: 600 ساعة لغة و 100 ساعة دورة توجيه مدني.",
          "uk": "Загалом 700 годин: 600 годин мовного курсу та 100 годин орієнтаційного курсу."
        },
        {
          "de": "Genau 5.000 Stunden theoretischer Mathematikunterricht.",
          "en": "Exactly 5,000 hours of theoretical mathematics instruction.",
          "tr": "Tam olarak 5.000 saatlik kuramsal matematik dersi.",
          "ar": "5000 ساعة بالضبط من دروس الرياضيات النظرية.",
          "uk": "Рівно 5000 годин теоретичної математики."
        }
      ],
      "correct": 1,
      "explanation": {
        "de": "Absatz 1 erläutert: 'Ein allgemeiner Kurs umfasst insgesamt 700 Unterrichtsstunden: 600 Stunden entfallen auf den eigentlichen Sprachkurs... Die verbleibenden 100 Stunden widmen sich dem Orientierungskurs.'",
        "en": "Paragraph 1 explains: A standard course comprises 700 hours: 600 hours for language and 100 hours for orientation.",
        "tr": "1. paragrafta belirtiliyor: 'Genel bir kurs toplam 700 ders saatini kapsar: 600 saat dil kursuna ayrılmıştır... Kalan 100 saat ise oryantasyon kursuna ayrılır.'",
        "ar": "الفقرة 1 توضح: 'تشمل الدورة العامة إجمالي 700 ساعة تدريسية: 600 ساعة لدورة اللغة و100 ساعة لدورة التوجيه.'",
        "uk": "Абзац 1 пояснює: 'Загальний курс охоплює 700 навчальних годин: 600 годин мови та 100 годин орієнтаційного курсу.'"
      }
    },
    {
      "id": "q2",
      "paragraphRef": "p2",
      "type": "true_false",
      "prompt": {
        "de": "Das erfolgreiche Bestehen des B1-Zertifikats und des Tests 'Leben in Deutschland' erleichtert die Einbürgerung.",
        "en": "Successfully passing the B1 certificate and the 'Living in Germany' test facilitates naturalization.",
        "tr": "B1 dil sertifikasını ve 'Almanya'da Yaşam' testini başarıyla geçmek vatandaşlığa kabulü kolaylaştırır.",
        "ar": "اجتياز شهادة المستوى B1 واختبار 'الحياة في ألمانيا' بنجاح يسهل الحصول على الجنسية.",
        "uk": "Успішне складання іспиту B1 та тесту 'Життя в Німеччині' полегшує набуття громадянства."
      },
      "options": [
        {
          "de": "Richtig",
          "en": "True",
          "tr": "Doğru",
          "ar": "صحيح",
          "uk": "Правильно"
        },
        {
          "de": "Falsch",
          "en": "False",
          "tr": "Yanlış",
          "ar": "خطأ",
          "uk": "Неправильно"
        }
      ],
      "correct": 0,
      "explanation": {
        "de": "Absatz 2 bestätigt: Das Zertifikat 'bildet oft die gesetzliche Grundlage für die Erteilung einer Niederlassungserlaubnis oder die vorzeitige Einbürgerung.'",
        "en": "Paragraph 2 confirms: The certificate often forms the legal basis for permanent residency or early naturalization.",
        "tr": "2. paragrafta doğrulanıyor: Bu belge 'yerleşim izni verilmesi veya erken vatandaşlığa geçiş için yasal temeli oluşturur.'",
        "ar": "الفقرة 2 تؤكد: تشكل هذه الوثيقة الأساس القانوني لمنح الإقامة الدائمة أو التجنيس المبكر.",
        "uk": "Абзац 2 підтверджує: цей документ слугує юридичною підставою для ПМП або дострокового набуття громадянства."
      }
    },
    {
      "id": "q3",
      "paragraphRef": "p3",
      "type": "multiple_choice",
      "prompt": {
        "de": "Welche Methode empfehlen Lehrkräfte, um die Scheu vor dem Deutschsprechen im Alltag zu überwinden?",
        "en": "What method do teachers recommend to overcome reluctance in speaking German in everyday life?",
        "tr": "Öğretmenler günlük yaşamda Almanca konuşma çekingenliğini yenmek için ne önermektedir?",
        "ar": "ما هي الطريقة التي يوصي بها المعلمون للتغلب على الخجل من التحدث بالألمانية في الحياة اليومية؟",
        "uk": "Який метод радять викладачі, щоб подолати страх розмовляти німецькою в побуті?"
      },
      "options": [
        {
          "de": "Niemals mit Nachbarn oder Kollegen sprechen, um ja keine Grammatikfehler zu machen.",
          "en": "Never talk to neighbors or colleagues to avoid making any grammar mistakes.",
          "tr": "Grameri yanlış yapmamak için komşularla veya iş arkadaşlarıyla asla konuşmamak.",
          "ar": "عدم التحدث نهائياً مع الجيران أو الزملاء لتجنب الأخطاء اللغوية.",
          "uk": "Ніколи не розмовляти з сусідами чи колегами, щоб не робити помилок."
        },
        {
          "de": "Neu gelernte Wörter direkt in Alltagsgesprächen anwenden und Medien wie Radio und Podcasts nutzen.",
          "en": "Directly apply newly learned phrases in daily conversations and use media like radio and podcasts.",
          "tr": "Yeni öğrenilen kelime ve kalıpları doğrudan günlük sohbetlerde kullanmak ve radyo/podcast gibi medyaları dinlemek.",
          "ar": "تطبيق التعبيرات الجديدة مباشرة في المحادثات اليومية والاستماع للراديو والبودكاست.",
          "uk": "Одразу застосовувати нові слова в щоденних розмовах і слухати радіо та подкасти."
        },
        {
          "de": "Ausschließlich alte Wörterbücher auswendig lernen, ohne jemals zu sprechen.",
          "en": "Exclusively memorize old dictionaries without ever speaking.",
          "tr": "Asla konuşmadan sadece eski sözlükleri ezberlemek.",
          "ar": "حفظ القواميس القديمة عن ظهر قلب دون التحدث إطلاقاً.",
          "uk": "Лише зазубрювати старі словники, ніколи не розмовляючи."
        }
      ],
      "correct": 1,
      "explanation": {
        "de": "Absatz 3 belegt: 'Wer neu erworbene Redemittel direkt in Alltagsgesprächen anwendet, verliert schnell die Scheu vor Fehlern und gewinnt spürbar an sprachlicher Selbstsicherheit.'",
        "en": "Paragraph 3 proves: Whoever directly applies newly acquired phrases in everyday talks quickly loses shyness about mistakes.",
        "tr": "3. paragrafta belirtiliyor: 'Yeni öğrenilen kalıpları günlük konuşmalarda doğrudan kullananlar, hata yapma çekingenliğini hızla kaybeder ve belirgin bir özgüven kazanır.'",
        "ar": "الفقرة 3 توضح: من يطبق العبارات المكتسبة مباشرة في المحادثات اليومية يفقد الخوف من الخطأ ويكتسب الثقة بالنفس.",
        "uk": "Абзац 3 підтверджує: хто одразу вживає нові фрази в житті, швидко втрачає страх помилок і здобуває впевненість."
      }
    }
  ]
},
{
  "id": "lese-teil4-datenschutz",
  "part": "Sprachbausteine",
  "partName": {
    "de": "Sprachbausteine (Medien & Datenschutz)",
    "en": "Language Elements (Media & Privacy)",
    "tr": "Dil Yapıları (Dijital Medya & Veri Güvenliği)",
    "ar": "عناصر اللغة (الإعلام والخصوصية)",
    "uk": "Мовні елементи (Медіа та захист даних)"
  },
  "title": {
    "de": "Digitale Medien und Datenschutz im Alltag",
    "en": "Digital Media and Data Privacy in Daily Life",
    "tr": "Günlük Yaşamda Dijital Medya ve Veri Gizliliği (Datenschutz)",
    "ar": "وسائل الإعلام الرقمية وحماية البيانات في الحياة اليومية",
    "uk": "Цифрові медіа та захист персональних даних у повсякденному житті"
  },
  "level": "B1",
  "timeEstimateMin": 12,
  "badge": "telc B1 Standard",
  "summary": {
    "de": "Ein informativer Ratgeber über den verantwortungsvollen Umgang mit persönlichen Daten im Internet, sichere Passwörter und den Schutz vor Phishing-Betrug.",
    "en": "An informative guide on responsible handling of personal data online, secure passwords, and protection against phishing scams.",
    "tr": "İnternette kişisel verilerin korunması, güçlü şifreler oluşturma ve oltalama (phishing) dolandırıcılığına karşı alınacak önlemler üzerine bir rehber.",
    "ar": "دليل إرشادي حول التعامل المسؤول مع البيانات الشخصية على الإنترنت، وكلمات المرور الآمنة والحماية من الاحتيال الإلكتروني.",
    "uk": "Інформативний посібник про відповідальне поводження з персональними даними в інтернеті, надійні паролі та захист від фішингу."
  },
  "contentParagraphs": [
    {
      "id": "p1",
      "de": "In Zeiten von Smartphones und sozialen Netzwerken sind persönliche Daten zu einem wertvollen Wirtschaftsgut geworden. In Deutschland und der Europäischen Union regelt die strenge Datenschutz-Grundverordnung (DSGVO), wie Unternehmen mit privaten Informationen ihrer Kundschaft umgehen dürfen. Jeder Internetnutzer hat das gesetzliche Recht zu erfahren, welche Daten gespeichert werden, und kann jederzeit die vollständige Löschung verlangen. Dennoch warnen Verbraucherschützer davor, leichtfertig vertrauliche Adressen, Kontodaten oder Urlaubsfotos öffentlich zu teilen."
    },
    {
      "id": "p2",
      "de": "Ein grundlegender Baustein für die persönliche Sicherheit im Netz ist die Wahl von starken Passwörtern. IT-Sicherheitsexperten raten dringend davon ab, einfache Namen oder Geburtstage zu verwenden. Ein sicheres Passwort sollte mindestens zwölf Zeichen lang sein und eine unvorhersehbare Mischung aus Groß- und Kleinbuchstaben, Zahlen sowie Sonderzeichen enthalten. Wo immer es angeboten wird, empfiehlt sich zudem die Aktivierung der Zwei-Faktor-Authentifizierung, bei der zusätzlich ein zeitlich begrenzter Bestätigungscode auf das Smartphone gesendet wird."
    },
    {
      "id": "p3",
      "de": "Eine wachsende Gefahr im digitalen Alltag stellen gefälschte E-Mails und Textnachrichten dar, die als sogenanntes Phishing bekannt sind. Kriminelle versuchen dabei, unter dem Deckmantel bekannter Banken oder Paketdienste vertrauliche Zugangsdaten und Passwörter zu erbeuten. Seriöse Kreditinstitute und Dienstleister fordern Kundinnen und Kunden jedoch niemals per E-Mail zur Eingabe von PIN-Nummern auf. Wer verdächtige Nachrichten erhält, sollte niemals auf unbekannte Hyperlinks klicken, sondern die offizielle Website des Anbieters stets manuell im Browser aufrufen."
    }
  ],
  "glossary": [
    {
      "de": "der Datenschutz",
      "article": "der",
      "plural": "-",
      "pos": "noun",
      "en": "data protection / privacy",
      "tr": "veri koruma / kişisel verilerin gizliliği",
      "ar": "حماية البيانات والخصوصية",
      "uk": "захист персональних даних",
      "example_de": "Der Datenschutz genießt in Deutschland einen sehr hohen Stellenwert."
    },
    {
      "de": "das Passwort",
      "article": "das",
      "plural": "die Passwörter",
      "pos": "noun",
      "en": "password",
      "tr": "şifre, parola",
      "ar": "كلمة المرور / كلمة السر",
      "uk": "пароль",
      "example_de": "Ein sicheres Passwort besteht aus Buchstaben, Zahlen und Zeichen."
    },
    {
      "de": "die Löschung",
      "article": "die",
      "plural": "die Löschungen",
      "pos": "noun",
      "en": "deletion / erasure of data",
      "tr": "silme, verilerin imha edilmesi",
      "ar": "حذف البيانات / شطبها",
      "uk": "видалення даних",
      "example_de": "Nutzer können die Löschung ihrer gespeicherten Daten fordern."
    },
    {
      "de": "der Verbraucherschützer",
      "article": "der",
      "plural": "die Verbraucherschützer",
      "pos": "noun",
      "en": "consumer advocate / consumer watchdog",
      "tr": "tüketici hakları savunucusu",
      "ar": "حماة المستهلك / جمعيات حماية المستهلك",
      "uk": "захисник прав споживачів",
      "example_de": "Verbraucherschützer warnen vor betrügerischen Webseiten."
    },
    {
      "de": "der Sonderzeichen",
      "article": "das",
      "plural": "die Sonderzeichen",
      "pos": "noun",
      "en": "special character",
      "tr": "özel karakter (noktalama, sembol)",
      "ar": "رمز خاص (علامات ترقيم ورموز)",
      "uk": "спеціальний символ / знак",
      "example_de": "Passwörter sollten auch Sonderzeichen wie Fragezeichen enthalten."
    },
    {
      "de": "der Dienstleister",
      "article": "der",
      "plural": "die Dienstleister",
      "pos": "noun",
      "en": "service provider",
      "tr": "hizmet sağlayıcı",
      "ar": "مقدم الخدمة",
      "uk": "постачальник послуг",
      "example_de": "Seriöse Dienstleister fragen niemals per E-Mail nach Passwörtern."
    }
  ],
  "questions": [
    {
      "id": "q1",
      "paragraphRef": "p1",
      "type": "true_false",
      "prompt": {
        "de": "Nach der europäischen Datenschutz-Grundverordnung dürfen Unternehmen persönliche Daten ohne jede Erlaubnis unbegrenzt weiterverkaufen.",
        "en": "According to European data privacy law, companies are allowed to resell personal data indefinitely without any permission.",
        "tr": "Avrupa veri koruma yasasına göre şirketler kişisel verileri hiçbir izin almadan sınırsızca başkalarına satabilir.",
        "ar": "وفقاً للائحة حماية البيانات الأوروبية، يُسمح للشركات بإعادة بيع البيانات الشخصية دون أي إذن وبلا حدود.",
        "uk": "Відповідно до європейського регламенту захисту даних, компаніям дозволено без обмежень перепродавати особисті дані без жодного дозволу."
      },
      "options": [
        {
          "de": "Richtig",
          "en": "True",
          "tr": "Doğru",
          "ar": "صحيح",
          "uk": "Правильно"
        },
        {
          "de": "Falsch",
          "en": "False",
          "tr": "Yanlış",
          "ar": "خطأ",
          "uk": "Неправильно"
        }
      ],
      "correct": 1,
      "explanation": {
        "de": "Absatz 1 widerspricht: 'die strenge Datenschutz-Grundverordnung (DSGVO) regelt, wie Unternehmen mit privaten Informationen... umgehen dürfen' und Nutzer können jederzeit die vollständige Löschung verlangen.",
        "en": "Paragraph 1 contradicts: Strict GDPR regulations govern how companies handle private data, and users have the right to full erasure.",
        "tr": "1. paragrafta belirtiliyor: Sıkı DSGVO yasaları şirketlerin verileri nasıl işleyeceğini düzenler ve kullanıcılar diledikleri zaman verilerinin tamamen silinmesini talep edebilirler.",
        "ar": "الفقرة 1 توضح عكس ذلك: تضع اللائحة العامة لحماية البيانات (DSGVO) شروطاً صارمة للتعامل مع البيانات ويحق للمستخدمين طلب حذفها في أي وقت.",
        "uk": "Абзац 1 спростовує це: суворий регламент GDPR чітко обмежує використання даних, а користувачі мають право на їх повне видалення."
      }
    },
    {
      "id": "q2",
      "paragraphRef": "p2",
      "type": "multiple_choice",
      "prompt": {
        "de": "Welche Kriterien sollte ein sicheres Passwort laut IT-Experten erfüllen?",
        "en": "What criteria should a secure password meet according to IT experts?",
        "tr": "Bilişim uzmanlarına göre güvenli bir şifre hangi kriterleri karşılamalıdır?",
        "ar": "ما هي المعايير التي يجب أن تستوفيها كلمة المرور الآمنة وفقاً لخبراء تقنية المعلومات؟",
        "uk": "Яким критеріям має відповідати надійний пароль за словами ІТ-експертів?"
      },
      "options": [
        {
          "de": "Es sollte aus dem eigenen Vornamen und dem Geburtsjahr bestehen.",
          "en": "It should consist of one's own first name and birth year.",
          "tr": "Kişinin kendi ön adından ve doğum yılından oluşmalıdır.",
          "ar": "يجب أن تتكون من الاسم الأول وسنة الميلاد فقط.",
          "uk": "Він має складатися з власного імені та року народження."
        },
        {
          "de": "Mindestens 12 Zeichen lang sein und eine Mischung aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen enthalten.",
          "en": "Be at least 12 characters long and contain a mixture of upper and lower case letters, numbers, and special symbols.",
          "tr": "En az 12 karakter uzunluğunda olmalı ve büyük-küçük harf, rakam ve özel işaretler içermelidir.",
          "ar": "أن لا تقل عن 12 حرفاً وتحتوي على مزيج من الحروف الكبيرة والصغيرة والأرقام والرموز الخاصة.",
          "uk": "Мати довжину не менше 12 символів і містити великі й малі літери, цифри та спеціальні знаки."
        },
        {
          "de": "Es darf grundsätzlich nur aus den Ziffern '123456' bestehen.",
          "en": "It may fundamentally only consist of the digits '123456'.",
          "tr": "Sadece ve daima '123456' rakamlarından oluşmalıdır.",
          "ar": "يجب أن تتكون فقط من الأرقام '123456'.",
          "uk": "Він повинен складатися лише з цифр '123456'."
        }
      ],
      "correct": 1,
      "explanation": {
        "de": "Absatz 2 stellt fest: 'sollte mindestens zwölf Zeichen lang sein und eine unvorhersehbare Mischung aus Groß- und Kleinbuchstaben, Zahlen sowie Sonderzeichen enthalten.'",
        "en": "Paragraph 2 states: it should be at least twelve characters long and contain a mixture of upper- and lowercase letters, numbers, and special characters.",
        "tr": "2. paragrafta belirtiliyor: 'En az on iki karakter uzunluğunda olmalı ve büyük/küçük harfler, rakamlar ve özel işaretlerden oluşan tahmin edilemez bir karışım içermelidir.'",
        "ar": "الفقرة 2 توضح: 'ينبغي أن تكون بطول 12 حرفاً على الأقل وتحتوي على مزيج غير متوقع من الحروف الكبيرة والصغيرة والأرقام والرموز.'",
        "uk": "Абзац 2 вказує: 'пароль має містити щонайменше 12 символів та непередбачувану суміш великих і малих літер, цифр і спецсимволів.'"
      }
    },
    {
      "id": "q3",
      "paragraphRef": "p3",
      "type": "multiple_choice",
      "prompt": {
        "de": "Wie sollte man sich verhalten, wenn man eine verdächtige E-Mail mit Zahlungsaufforderung erhält?",
        "en": "How should one act when receiving a suspicious email demanding payment or credentials?",
        "tr": "Ödeme veya şifre talep eden şüpheli bir e-posta alındığında nasıl davranılmalıdır?",
        "ar": "كيف ينبغي التصرف عند استلام بريد إلكتروني مشبوه يطلب إدخال بيانات أو دفع أموال؟",
        "uk": "Як слід діяти, якщо ви отримали підозрілий лист із вимогою введення пароля або оплати?"
      },
      "options": [
        {
          "de": "Sofort alle PIN-Nummern und Bankdaten an den Absender schicken.",
          "en": "Immediately send all PIN numbers and banking credentials to the sender.",
          "tr": "Tüm PIN numaralarını ve banka bilgilerini hemen göndericiye yollamak.",
          "ar": "إرسال جميع الأرقام السرية والبيانات المصرفية فوراً إلى المرسل.",
          "uk": "Одразу відправити відправнику всі PIN-коди та банківські дані."
        },
        {
          "de": "Niemals auf unbekannte Links klicken, sondern die offizielle Website manuell im Browser aufrufen.",
          "en": "Never click on unknown links, but manually call up the official website in the browser.",
          "tr": "Asla bilinmeyen linklere tıklamamak, resmi internet sitesini tarayıcıya elle yazarak açmak.",
          "ar": "عدم النقر إطلاقاً على الروابط المجهولة، وفتح الموقع الرسمي للمؤسسة يدوياً في المتصفح.",
          "uk": "Ніколи не переходити за невідомими посиланнями, а відкривати офіційний сайт вручну у браузері."
        },
        {
          "de": "Den Computer sofort im Müll entsorgen.",
          "en": "Immediately dispose of the computer in the trash.",
          "tr": "Bilgisayarı hemen çöpe atmak.",
          "ar": "التخلص من جهاز الكمبيوتر فوراً في سلة المهملات.",
          "uk": "Негайно викинути комп'ютер на смітник."
        }
      ],
      "correct": 1,
      "explanation": {
        "de": "Absatz 3 warnt: Seriöse Banken fordern niemals per E-Mail zur Eingabe von PINs auf. 'Wer verdächtige Nachrichten erhält, sollte niemals auf unbekannte Hyperlinks klicken, sondern die offizielle Website des Anbieters stets manuell im Browser aufrufen.'",
        "en": "Paragraph 3 warns: Reputable banks never request PIN entry via email. One should never click unknown links, but open the official site manually.",
        "tr": "3. paragrafta uyarılıyor: Ciddi bankalar asla e-posta yoluyla PIN istemez. Şüpheli iletilerdeki linklere asla tıklanmamalı, sitenin adresi tarayıcıya bizzat yazılmalıdır.",
        "ar": "الفقرة 3 تحذر: لا تطلب البنوك الموثوقة أبداً أرقام PIN عبر البريد؛ ينبغي عدم النقر على الروابط وفتح الموقع الرسمي يدوياً.",
        "uk": "Абзац 3 застерігає: надійні банки ніколи не вимагають введення PIN-кодів електронною поштою; підозрілі посилання відкривати заборонено."
      }
    }
  ]
}
];
