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
];
