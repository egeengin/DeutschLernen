# scripts/vocab_sources/adjectives_part2.py
"""
High-frequency German Adjectives (Part 2) for A1, A2, and B1.
Topics: Charakter & Eigenschaften, Gefühle, Bewertung & Qualität, Zustand & Aussehen.
Includes synonyms and antonyms for German-German matching mode.
"""

ADJECTIVES_P2 = [
    # Charakter & Persönlichkeit (1-35)
    ("fleißig", "çalışkan, gayretli", "hardworking / diligent", "adj", "A1", "Er ist ein sehr fleißiger Student.", "O çok çalışkan bir öğrencidir.", "He is a very hardworking student.", ["eifrig", "arbeitsam"], ["faul"]),
    ("faul", "tembel / çürük", "lazy / rotten", "adj", "A1", "Sei nicht so faul und hilf mir im Haushalt!", "Öyle tembel olma ve ev işlerinde bana yardım et!", "Don't be so lazy and help me with the housework!", ["träge"], ["fleißig"]),
    ("höflich", "kibar, nazik", "polite / courteous", "adj", "A2", "Der Kellner war außerordentlich höflich.", "Garson son derece kibardı.", "The waiter was exceptionally polite.", ["zuvorkommend", "nett"], ["unhöflich"]),
    ("unhöflich", "kaba, nezaketsiz", "impolite / rude", "adj", "A2", "Es ist unhöflich, andere Leute zu unterbrechen.", "Başkalarının sözünü kesmek kabalıktır.", "It is impolite to interrupt other people.", ["unverschämt"], ["höflich"]),
    ("geduldig", "sabırlı", "patient", "adj", "A2", "Die Lehrerin erklärt alles sehr geduldig.", "Öğretmen her şeyi çok sabırlı bir şekilde açıklıyor.", "The teacher explains everything very patiently.", ["nachsichtig"], ["ungeduldig"]),
    ("ungeduldig", "sabırsız", "impatient", "adj", "A2", "Die wartenden Kunden wurden langsam ungeduldig.", "Bekleyen müşteriler yavaş yavaş sabırsızlanmaya başladı.", "The waiting customers were slowly becoming impatient.", ["rastlos"], ["geduldig"]),
    ("pünktlich", "dakik, zamanında", "punctual / on time", "adj", "A1", "Die Züge in der Schweiz sind meist pünktlich.", "İsviçre'deki trenler çoğunlukla dakiktir.", "Trains in Switzerland are mostly punctual.", ["zeitgerecht"], ["unpünktlich"]),
    ("unpünktlich", "dakik olmayan, geç kalan", "unpunctual / late", "adj", "A2", "Ich hasse es, wenn jemand ständig unpünktlich ist.", "Birinin sürekli geç kalmasından nefret ederim.", "I hate it when someone is constantly unpunctual.", ["verspätet"], ["pünktlich"]),
    ("ehrlich", "dürüst", "honest / sincere", "adj", "A2", "Sag mir bitte deine ehrliche Meinung!", "Bana lütfen dürüst fikrini söyle!", "Please tell me your honest opinion!", ["aufrichtig"], ["unehrlich"]),
    ("unehrlich", "sahtekar, dürüst olmayan", "dishonest", "adj", "B1", "Unehrliche Menschen haben selten echte Freunde.", "Dürüst olmayan insanların nadiren gerçek dostları olur.", "Dishonest people rarely have real friends.", ["verlogen"], ["ehrlich"]),
    ("zuverlässig", "güvenilir", "reliable / dependable", "adj", "A2", "Er ist ein absolut zuverlässiger Kollege.", "O kesinlikle güvenilir bir iş arkadaşıdır.", "He is an absolutely reliable colleague.", ["verlässlich"], ["unzuverlässig"]),
    ("unzuverlässig", "güvenilmez", "unreliable", "adj", "B1", "Mit unzuverlässigen Partnern kann man nicht planen.", "Güvenilmez ortaklarla plan yapılamaz.", "One cannot make plans with unreliable partners.", [], ["zuverlässig"]),
    ("mutig", "cesur", "brave / courageous", "adj", "A2", "Die Feuerwehrleute handelten sehr mutig.", "İtfaiyeciler çok cesurca davrandılar.", "The firefighters acted very bravely.", ["tapfer", "kühn"], ["feige", "ängstlich"]),
    ("feige", "korkak", "cowardly", "adj", "B1", "Wegzulaufen war eine feige Entscheidung.", "Kaçıp gitmek korkakça bir karardı.", "Running away was a cowardly decision.", ["angsthasenhaft"], ["mutig", "tapfer"]),
    ("stolz", "gururlu, onurlu", "proud", "adj", "A2", "Die Eltern sind sehr stolz auf ihren Sohn.", "Anne baba oğullarıyla çok gurur duyuyor.", "The parents are very proud of their son.", ["selbstbewusst"], ["beschämt"]),
    ("bescheiden", "mütevazı, alçakgönüllü", "modest / humble", "adj", "B1", "Trotz seines großen Erfolgs blieb er bescheiden.", "Büyük başarısına rağmen alçakgönüllü kaldı.", "Despite his great success he remained modest.", ["zurückhaltend"], ["arrogant", "eingebildet"]),
    ("arrogant", "kibirli, burnu havada", "arrogant", "adj", "B1", "Niemand mag arrogante Menschen.", "Kimse kibirli insanları sevmez.", "Nobody likes arrogant people.", ["hochmütig", "überheblich"], ["bescheiden"]),
    ("neugierig", "meraklı", "curious / inquisitive", "adj", "A2", "Kinder sind von Natur aus sehr neugierig.", "Çocuklar doğaları gereği çok meraklıdır.", "Children are very curious by nature.", ["wissbegierig"], ["desinteressiert"]),
    ("aufmerksam", "dikkatli, nazik", "attentive / observant", "adj", "A2", "Hören Sie bitte aufmerksam zu!", "Lütfen dikkatle dinleyiniz!", "Please listen attentively!", ["wachsam", "konzentriert"], ["unaufmerksam"]),
    ("unaufmerksam", "dikkatsiz", "inattentive / careless", "adj", "B1", "Ein unaufmerksamer Moment kann zu einem Unfall führen.", "Dikkatsiz bir an kazaya yol açabilir.", "An inattentive moment can lead to an accident.", ["zerstreut"], ["aufmerksam"]),
    ("selbstbewusst", "kendine güvenen, özgüvenli", "self-confident", "adj", "B1", "Sie trat bei der Präsentation sehr selbstbewusst auf.", "Sunumda son derece özgüvenli bir duruş sergiledi.", "She appeared very self-confident during the presentation.", ["sicher"], ["unsicher"]),
    ("unsicher", "güvensiz, tereddütlü / tehlikeli", "insecure / uncertain", "adj", "A2", "Ich bin mir noch unsicher, was ich tun soll.", "Ne yapmam gerektiği konusunda henüz tereddütlüyüm.", "I am still uncertain about what I should do.", ["zweifelnd"], ["sicher", "selbstbewusst"]),
    ("hilfsbereit", "yardımsever", "helpful", "adj", "A2", "Unsere Nachbarn sind immer sehr hilfsbereit.", "Komşularımız her zaman çok yardımseverdir.", "Our neighbors are always very helpful.", ["unterstützend"], ["egoistisch"]),
    ("egoistisch", "bencil", "selfish / egoistic", "adj", "B1", "Denk nicht immer nur an dich, das ist egoistisch!", "Sürekli sadece kendini düşünme, bu bencilliktir!", "Don't always just think of yourself, that is selfish!", ["selbstsüchtig"], ["hilfsbereit", "altruistisch"]),
    ("humorvoll", "esprili, nüktedan", "humorous / witty", "adj", "A2", "Sein humorvoller Vortrag brachte alle zum Lachen.", "Esprili sunumu herkesi güldürdü.", "His humorous lecture made everyone laugh.", ["witzig", "lustig"], ["humorlos"]),
    ("geizig", "cimri", "stingy / mean", "adj", "B1", "Er hat viel Geld, ist aber extrem geizig.", "Çok parası var ama son derece cimridir.", "He has a lot of money, but is extremely stingy.", ["knausrig"], ["großzügig"]),
    ("großzügig", "cömert", "generous", "adj", "B1", "Er machte dem Verein eine großzügige Spende.", "Derneğe cömert bir bağışta bulundu.", "He made a generous donation to the association.", ["spendabel"], ["geizig"]),

    # Zustände & Gefühle (36-70)
    ("glücklich", "mutlu, şanslı", "happy / lucky", "adj", "A1", "Wir sind sehr glücklich in unserer neuen Wohnung.", "Yeni dairemizde çok mutluyuz.", "We are very happy in our new apartment.", ["froh"], ["unglücklich", "traurig"]),
    ("traurig", "üzgün, hüzünlü", "sad / sorrowful", "adj", "A1", "Warum schaust du so traurig aus dem Fenster?", "Neden pencereden öyle üzgün bakıyorsun?", "Why do you look out of the window so sadly?", ["betrübt"], ["glücklich", "froh"]),
    ("wütend", "öfkeli, kızgın", "furious / angry", "adj", "A2", "Er war wütend über die unerwartete Absage.", "Beklenmedik ret cevabına çok öfkelendi.", "He was furious about the unexpected refusal.", ["zornig", "sauer"], ["gelassen"]),
    ("überrascht", "şaşırmış, hayret etmiş", "surprised", "adj", "A2", "Ich war angenehm überrascht über das gute Ergebnis.", "İyi sonuç karşısında hoş bir şekilde şaşırdım.", "I was pleasantly surprised by the good result.", ["erstaunt"], []),
    ("nervös", "gergin, tedirgin", "nervous", "adj", "A1", "Vor der mündlichen Prüfung bin ich immer nervös.", "Sözlü sınavdan önce her zaman gergin olurum.", "Before the oral exam I am always nervous.", ["unruhig"], ["ruhig", "gelassen"]),
    ("gelassen", "sakin, soğukkanlı", "composed / calm", "adj", "B1", "Er reagierte erstaunlich gelassen auf die Kritik.", "Eleştiriye şaşırtıcı derecede sakin tepki verdi.", "He reacted astonishingly calmly to the criticism.", ["ruhig", "besonnen"], ["nervös", "hektisch"]),
    ("zufrieden", "memnun, tatmin olmuş", "satisfied / content", "adj", "A1", "Sind Sie mit unserem Service zufrieden?", "Hizmetimizden memnun musunuz?", "Are you satisfied with our service.", ["glücklich"], ["unzufrieden"]),
    ("unzufrieden", "memnuniyetsiz, hoşnutsuz", "dissatisfied", "adj", "A2", "Der Kunde war unzufrieden mit der Lieferung.", "Müşteri teslimattan memnun kalmadı.", "The customer was dissatisfied with the delivery.", [], ["zufrieden"]),
    ("erschöpft", "tükenmiş, bitkin", "exhausted", "adj", "B1", "Nach dem Marathonlauf war sie völlig erschöpft.", "Maratondan sonra tamamen bitkindi.", "After the marathon run she was completely exhausted.", ["kraftlos", "müde"], ["energiegeladen"]),
    ("lebendig", "canlı, hayat dolu", "alive / lively", "adj", "A2", "Berlin ist eine sehr lebendige und bunte Stadt.", "Berlin çok canlı ve renkli bir şehirdir.", "Berlin is a very lively and colorful city.", ["munter"], ["tot", "leblos"]),
    ("einsam", "yalnız, kimsesiz", "lonely / solitary", "adj", "A2", "Auf der Berghütte fühlte er sich keineswegs einsam.", "Dağ kulübesinde kendini kesinlikle yalnız hissetmedi.", "In the mountain hut he did not feel lonely at all.", ["allein"], ["gesellig"]),
    ("gesellig", "sosyal, cana yakın, sokulgan", "sociable / convivial", "adj", "B1", "Wir verbrachten einen sehr geselligen Abend zusammen.", "Birlikte çok sıcak ve sosyal bir akşam geçirdik.", "We spent a very sociable evening together.", ["kontaktfreudig"], ["einsam", "zurückhaltend"]),

    # Bewertung, Qualität & Sachverhalte (71-105)
    ("wichtig", "önemli", "important", "adj", "A1", "Regelmäßiges Wiederholen ist wichtig beim Sprachenlernen.", "Dil öğrenirken düzenli tekrar önemlidir.", "Regular repetition is important when learning languages.", ["bedeutsam"], ["unwichtig"]),
    ("unwichtig", "önemsiz", "unimportant", "adj", "A2", "Solche Details sind für das Gesamtergebnis unwichtig.", "Bu tür ayrıntılar genel sonuç için önemsizdir.", "Such details are unimportant for the overall result.", ["belanglos"], ["wichtig"]),
    ("notwendig", "gerekli, zorunlu", "necessary / essential", "adj", "A2", "Ein gültiger Reisepass ist unbedingt notwendig.", "Geçerli bir pasaport kesinlikle gereklidir.", "A valid passport is absolutely necessary.", ["erforderlich", "nötig"], ["überflüssig"]),
    ("überflüssig", "gereksiz, fuzuli", "superfluous / unnecessary", "adj", "B1", "Mach dir keine überflüssigen Sorgen!", "Gereksiz endişelere kapılma!", "Don't make superfluous worries for yourself!", ["unnötig"], ["notwendig"]),
    ("möglich", "mümkün, olası", "possible", "adj", "A1", "Kommen Sie bitte so früh wie möglich!", "Lütfen mümkün olduğunca erken geliniz!", "Please come as early as possible!", ["machbar"], ["unmöglich"]),
    ("unmöglich", "imkansız", "impossible", "adj", "A2", "Ohne Vorbereitung ist diese Prüfung unmöglich zu bestehen.", "Hazırlıksız bu sınavı geçmek imkansızdır.", "Without preparation this exam is impossible to pass.", ["ausgeschlossen"], ["möglich"]),
    ("gefährlich", "tehlikeli", "dangerous", "adj", "A1", "Es ist gefährlich, bei Glatteis schnell zu fahren.", "Buzlanmada hızlı araç kullanmak tehlikelidir.", "It is dangerous to drive fast on icy roads.", ["riskant"], ["ungefährlich", "sicher"]),
    ("sicher", "güvenli / emin", "safe / sure / certain", "adj", "A1", "Ich bin mir ganz sicher, dass er recht hat.", "Onun haklı olduğuna kesinlikle eminim.", "I am quite sure that he is right.", ["gewiss"], ["unsicher", "gefährlich"]),
    ("bequem", "rahat, konforlu", "comfortable", "adj", "A1", "Dieser Sessel ist unglaublich bequem.", "Bu koltuk inanılmaz derecede rahattır.", "This armchair is incredibly comfortable.", ["gemütlich"], ["unbequem"]),
    ("unbequem", "rahatsız, konforsuz", "uncomfortable", "adj", "A2", "Der Stuhl ist auf Dauer sehr unbequem.", "Sandalye uzun vadede çok rahatsız.", "The chair is very uncomfortable in the long run.", [], ["bequem"]),
    ("sauber", "temiz", "clean", "adj", "A1", "Halten Sie die Küche bitte stets sauber!", "Mutfağı lütfen daima temiz tutunuz!", "Please keep the kitchen always clean!", ["rein"], ["schmutzig"]),
    ("ordentlich", "düzenli, derli toplu", "tidy / neat / orderly", "adj", "A2", "Sein Schreibtisch ist immer vorbildlich ordentlich.", "Çalışma masası her zaman örnek bir şekilde düzenlidir.", "His desk is always exemplary orderly.", ["aufgeräumt"], ["unordentlich"]),
    ("unordentlich", "düzensiz, dağınık", "untidy / messy", "adj", "A2", "Das Kinderzimmer sieht heute unordentlich aus.", "Çocuk odası bugün çok dağınık görünüyor.", "The children's room looks untidy today.", ["chaotisch"], ["ordentlich"]),
    ("gesund", "sağlıklı", "healthy", "adj", "A1", "Frisches Obst und Gemüse sind sehr gesund.", "Taze meyve ve sebze çok sağlıklıdır.", "Fresh fruit and vegetables are very healthy.", ["fit"], ["krank", "ungesund"]),
    ("krank", "hasta", "sick / ill", "adj", "A1", "Er ist seit drei Tagen krank im Bett.", "Üç gündür hasta olarak yatakta.", "He has been sick in bed for three days.", ["unwohl"], ["gesund"]),
    ("stark", "güçlü, kuvvetli", "strong", "adj", "A1", "Er hat eine starke Erkältung.", "Şiddetli bir soğuk algınlığı var.", "He has a strong cold.", ["kräftig"], ["schwach"]),
    ("schwach", "zayıf, güçsüz", "weak", "adj", "A1", "Nach dem Fieber fühlte er sich noch sehr schwach.", "Ateşten sonra kendini hala çok zayıf hissediyordu.", "After the fever he still felt very weak.", ["kraftlos"], ["stark", "kräftig"]),
    ("voll", "dolu / sarhoş", "full", "adj", "A1", "Der Bus war heute Morgen voll besetzt.", "Otobüs bu sabah tamamen doluydu.", "The bus was fully occupied this morning.", ["gefüllt"], ["leer"]),
    ("leer", "boş", "empty", "adj", "A1", "Der Akku ist leer, ich muss das Handy laden.", "Şarj bitti (boş), cep telefonunu şarj etmeliyim.", "The battery is empty, I need to charge the phone.", ["unbesetzt"], ["voll"])
]

print(f"Loaded {len(ADJECTIVES_P2)} adjectives into adjectives_part2.py")
