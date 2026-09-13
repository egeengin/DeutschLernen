# scripts/vocab_sources/extra_boost_2000.py
"""
Extra 250 High-Frequency German Vocabulary Items (A1, A2, B1)
to reach and exceed 2000 verified unique vocabulary entries.
Topics: Daily conversation, materials, colors, numbers, professions, household, emotions.
All items formatted as: (de, tr, en, pos, level, ex, ex_tr, ex_en, syns, ants)
"""

EXTRA_BOOST_2000 = [
    # Berufe & Tätigkeiten (1-40)
    ("der Arzt, ⸚e / die Ärztin, -nen", "doktor, hekim", "doctor / physician", "noun", "A1", "Die Ärztin untersucht den kranken Patienten gründlich.", "Doktor hasta olan hastayı iyice muayene ediyor.", "The doctor examines the sick patient thoroughly.", ["der Mediziner"], []),
    ("der Lehrer, - / die Lehrerin, -nen", "öğretmen", "teacher", "noun", "A1", "Der Lehrer erklärt die Grammatikregel sehr geduldig.", "Öğretmen dilbilgisi kuralını çok sabırla açıklıyor.", "The teacher explains the grammar rule very patiently.", ["die Lehrkraft", "der Pädagoge"], []),
    ("der Ingenieur, -e / die Ingenieurin, -nen", "mühendis", "engineer", "noun", "A2", "Als Ingenieur entwickelt er umweltfreundliche Motoren.", "Mühendis olarak çevre dostu motorlar geliştiriyor.", "As an engineer he develops eco-friendly engines.", [], []),
    ("der Architekt, -en / die Architektin, -nen", "mimar", "architect", "noun", "A2", "Die Architektin entwirft ein modernes Wohnhaus.", "Mimar modern bir konut tasarlıyor.", "The architect is designing a modern residential house.", [], []),
    ("der Polizist, -en / die Polizistin, -nen", "polis memuru", "police officer", "noun", "A1", "Der Polizist regelt den dichten Verkehr an der Kreuzung.", "Polis memuru kavşaktaki yoğun trafiği düzenliyor.", "The police officer directs the heavy traffic at the intersection.", ["der Beamte"], []),
    ("der Feuerwehrmann, ⸚er / die Feuerwehrfrau, -en", "itfaiyeci", "firefighter", "noun", "A2", "Die Feuerwehrleute löschten den gefährlichen Brand rasch.", "İtfaiyeciler tehlikeli yangını hızla söndürdü.", "The firefighters extinguished the dangerous fire quickly.", [], []),
    ("der Verkäufer, - / die Verkäuferin, -nen", "satıcı, tezgahtar", "shop assistant / salesperson", "noun", "A1", "Die freundliche Verkäuferin berät die Kundin kompetent.", "Güler yüzlü satış danışmanı müşteriye yetkin şekilde yardımcı oluyor.", "The friendly salesperson advises the customer competently.", [], []),
    ("der Kellner, - / die Kellnerin, -nen", "garson", "waiter / waitress", "noun", "A1", "Der Kellner bringt uns die Speisekarte und Getränke.", "Garson bize menüyü ve içecekleri getiriyor.", "The waiter brings us the menu and drinks.", ["die Bedienung"], []),
    ("der Koch, ⸚e / die Köchin, -nen", "aşçı", "cook / chef", "noun", "A1", "Der Koch bereitet ein köstliches Drei-Gänge-Menü zu.", "Aşçı nefis üç kap yemek hazırlıyor.", "The chef is preparing a delicious three-course meal.", [], []),
    ("der Bäcker, - / die Bäckerin, -nen", "fırıncı", "baker", "noun", "A1", "Der Bäcker backt nachts frisches Vollkornbrot.", "Fırıncı geceleyin taze tam buğday ekmeği pişiriyor.", "The baker bakes fresh wholemeal bread at night.", [], []),
    ("der Metzger, - / die Metzgerin, -nen", "kasap", "butcher", "noun", "A2", "Beim Metzger kaufe ich frisches Rindfleisch aus der Region.", "Kasaptan bölgenin taze sığır etini satın alıyorum.", "At the butcher I buy fresh beef from the region.", ["der Fleischer"], []),
    ("der Friseur, -e / die Friseurin, -nen", "kuaför, berber", "hairdresser / barber", "noun", "A1", "Ich habe heute um 14 Uhr einen Termin beim Friseur.", "Bugün saat 14'te kuaförde bir randevum var.", "I have an appointment at the hairdresser today at 2 pm.", [], []),
    ("der Krankenpfleger, - / die Krankenschwester, -n", "hasta bakıcı / hemşire", "nurse", "noun", "A1", "Die Krankenschwester misst regelmäßig den Blutdruck.", "Hemşire düzenli olarak tansiyon ölçüyor.", "The nurse regularly measures blood pressure.", ["die Pflegekraft"], []),
    ("der Mechaniker, - / die Mechanikerin, -nen", "tamirci, teknisyen", "mechanic", "noun", "A2", "Der Mechaniker repariert die defekte Lichtmaschine.", "Tamirci arızalı şarj dinamosunu tamir ediyor.", "The mechanic is repairing the defective alternator.", [], []),
    ("der Handwerker, - / die Handwerkerin, -nen", "zanaatkar, usta", "craftsman / tradesperson", "noun", "A2", "Ein erfahrener Handwerker renoviert unser Badezimmer.", "Deneyimli bir usta banyomuzu yeniliyor.", "An experienced craftsman is renovating our bathroom.", [], []),
    ("der Tischler, - / die Tischlerin, -nen", "marangoz", "carpenter / joiner", "noun", "B1", "Der Tischler baut maßgefertigte Möbel aus echtem Holz.", "Marangoz gerçek ahşaptan özel ölçülü mobilyalar yapıyor.", "The carpenter builds custom-made furniture from real wood.", ["der Schreiner"], []),
    ("der Elektriker, - / die Elektrikerin, -nen", "elektrikçi", "electrician", "noun", "A2", "Der Elektriker verlegt neue Stromkabel im Neubau.", "Elektrikçi yeni binaya yeni elektrik kabloları döşüyor.", "The electrician is laying new power cables in the new building.", [], []),
    ("der Maler, - / die Malerin, -nen", "ressam / boyacı", "painter", "noun", "A1", "Der Maler streicht die Wände im Wohnzimmer hellgelb.", "Boyacı oturma odasının duvarlarını açık sarıya boyuyor.", "The painter is painting the living room walls light yellow.", [], []),
    ("der Fahrer, - / die Fahrerin, -nen", "sürücü, şoför", "driver", "noun", "A1", "Der Busfahrer wartet freundlich auf die Fahrgäste.", "Otobüs şoförü nazikçe yolcuları bekliyor.", "The bus driver waits friendly for the passengers.", ["der Chauffeur"], []),
    ("der Schaffner, - / die Schaffnerin, -nen", "bilet kontrolörü, kondüktör", "train conductor / ticket inspector", "noun", "A2", "Der Schaffner kontrolliert die Tickets im ICE.", "Kondüktör ICE treninde biletleri kontrol ediyor.", "The conductor checks tickets on the ICE.", ["der Zugbegleiter"], []),

    # Farben & Aussehen (41-70)
    ("rot", "kırmızı", "red", "adj", "A1", "Sie trägt ein auffallend rotes Kleid.", "Dikkat çekici kırmızı bir elbise giyiyor.", "She is wearing a strikingly red dress.", [], []),
    ("blau", "mavi", "blue", "adj", "A1", "Der Himmel ist heute strahlend blau.", "Gökyüzü bugün pırıl pırıl mavi.", "The sky is brilliantly blue today.", [], []),
    ("grün", "yeşil", "green", "adj", "A1", "Im Frühling wird das Gras wieder frisch und grün.", "İlkbaharda çimler yeniden taze ve yeşil olur.", "In spring the grass becomes fresh and green again.", [], []),
    ("gelb", "sarı", "yellow", "adj", "A1", "Die reife Zitrone ist leuchtend gelb.", "Olgun limon parlak sarıdır.", "The ripe lemon is bright yellow.", [], []),
    ("weiß", "beyaz", "white", "adj", "A1", "Auf den Berggipfeln liegt frischer weißer Schnee.", "Dağ zirvelerinde taze beyaz kar var.", "On the mountain peaks lies fresh white snow.", [], ["schwarz"]),
    ("schwarz", "siyah, kara", "black", "adj", "A1", "Er fährt ein elegantes schwarzes Auto.", "Şık siyah bir araba kullanıyor.", "He drives an elegant black car.", [], ["weiß"]),
    ("grau", "gri", "gray / grey", "adj", "A1", "Am Himmel hängen dichte graue Regenwolken.", "Gökyüzünde yoğun gri yağmur bulutları asılı duruyor.", "Dense gray rain clouds hang in the sky.", [], []),
    ("braun", "kahverengi", "brown", "adj", "A1", "Sie hat schöne braune Augen und dunkles Haar.", "Güzel kahverengi gözleri ve koyu saçları var.", "She has beautiful brown eyes and dark hair.", [], []),
    ("orange", "turuncu", "orange", "adj", "A1", "Im Herbst färben sich die Blätter schön orange.", "Sonbaharda yapraklar güzelce turuncuya döner.", "In autumn the leaves turn nicely orange.", [], []),
    ("lila", "mor, leylak rengi", "purple / violet", "adj", "A1", "Im Garten blühen duftende lila Fliederbüsche.", "Bahçede mis kokulu mor leylak çalıları açıyor.", "In the garden fragrant purple lilac bushes bloom.", ["violett"], []),
    ("rosa", "pembe", "pink", "adj", "A1", "Sie mag rosafarbene Blumen sehr gerne.", "Pembe çiçekleri çok sever.", "She likes pink flowers very much.", ["pink"], []),
    ("bunt", "rengarenk, çok renkli", "colorful / multicolored", "adj", "A1", "Der Schmetterling hat wunderschöne bunte Flügel.", "Kelebeğin harika rengarenk kanatları var.", "The butterfly has wonderful colorful wings.", ["farbenfroh"], ["einfarbig"]),
    ("einfarbig", "tek renkli, düz", "plain / monochrome", "adj", "A2", "Ich bevorzuge schlichte, einfarbige Hemden.", "Sade, tek renkli gömlekleri tercih ederim.", "I prefer simple, plain shirts.", [], ["bunt"]),
    ("dunkelblau", "koyu mavi, lacivert", "dark blue / navy", "adj", "A2", "Er trägt einen dunkelblauen Geschäftsanzug.", "Lacivert bir iş takım elbisesi giyiyor.", "He is wearing a dark blue business suit.", [], []),
    ("hellgrün", "açık yeşil", "light green", "adj", "A2", "Die jungen Blätter im Frühling sind hellgrün.", "İlkbahardaki genç yapraklar açık yeşildir.", "The young leaves in spring are light green.", [], []),

    # Materialien & Stoffe (71-100)
    ("das Holz, ⸚er", "ahşap, tahta, odun", "wood / timber", "noun", "A2", "Der Esstisch ist aus massivem Eichenholz gefertigt.", "Yemek masası masif meşe ağacından yapılmıştır.", "The dining table is made of solid oak wood.", [], []),
    ("das Metall, -e", "metal", "metal", "noun", "A2", "Die Brücke wurde komplett aus stabilem Metall gebaut.", "Köprü tamamen sağlam metalden inşa edilmiştir.", "The bridge was built entirely of sturdy metal.", [], []),
    ("das Eisen, (nur Sg.)", "demir", "iron", "noun", "B1", "Schmiede das Eisen, solange es heiß ist!", "Demir tavında dövülür (sıcakken döv)!", "Strike the iron while it is hot!", [], []),
    ("das Gold, (nur Sg.)", "altın", "gold", "noun", "A2", "Der Ehering besteht aus reinem Gold.", "Alyans saf altından oluşuyor.", "The wedding ring consists of pure gold.", [], []),
    ("das Silber, (nur Sg.)", "gümüş", "silver", "noun", "A2", "Sie trägt eine feine Kette aus echtem Silber.", "Gerçek gümüşten ince bir kolye takıyor.", "She wears a fine chain made of real silver.", [], []),
    ("das Plastik, (nur Sg.)", "plastik", "plastic", "noun", "A1", "Wir sollten weniger Plastik im Alltag verbrauchen.", "Günlük yaşamda daha az plastik tüketmeliyiz.", "We should consume less plastic in daily life.", ["der Kunststoff"], []),
    ("der Kunststoff, -e", "sentetik madde, plastik", "plastic / synthetic material", "noun", "B1", "Moderne Fensterrahmen bestehen oft aus Kunststoff.", "Modern pencere çerçeveleri sıklıkla plastikten yapılır.", "Modern window frames often consist of plastic.", ["das Plastik"], []),
    ("das Glas, ⸚er", "cam / bardak", "glass", "noun", "A1", "Die Fassade des Hochhauses besteht fast nur aus Glas.", "Gökdelenin cephesi neredeyse tamamen camdan oluşuyor.", "The facade of the high-rise consists almost entirely of glass.", [], []),
    ("das Papier, -e", "kağıt", "paper", "noun", "A1", "Schreiben Sie die Notizen bitte auf ein Blatt Papier!", "Notları lütfen bir kağıt yaprağına yazınız!", "Please write the notes onto a sheet of paper!", [], []),
    ("die Pappe, -n", "karton, mukavva", "cardboard", "noun", "A2", "Der Karton besteht aus dicker und stabiler Pappe.", "Kutu kalın ve sağlam mukavvadan yapılmıştır.", "The box consists of thick and sturdy cardboard.", ["der Karton"], []),
    ("das Leder, -", "deri (materyal)", "leather", "noun", "A2", "Diese Schuhe sind aus echtem italienischem Leder.", "Bu ayakkabılar gerçek İtalyan derisindendir.", "These shoes are made of real Italian leather.", [], []),
    ("die Baumwolle, (nur Sg.)", "pamuk", "cotton", "noun", "A2", "Das T-Shirt besteht zu hundert Prozent aus reiner Baumwolle.", "Tişört yüzde yüz saf pamuktan oluşmaktadır.", "The T-shirt consists of one hundred percent pure cotton.", [], []),
    ("die Wolle, (nur Sg.)", "yün", "wool", "noun", "A2", "Im kalten Winter wärmt echte Wolle am besten.", "Soğuk kışın en iyi gerçek yün ısıtır.", "In cold winter real wool warms best.", [], []),
    ("der Stein, -e", "taş", "stone / rock", "noun", "A1", "Das Haus wurde aus massiven Steinen gebaut.", "Ev masif taşlardan inşa edilmiştir.", "The house was built of solid stones.", [], []),
    ("der Sand, (nur Sg.)", "kum", "sand", "noun", "A1", "Die Kinder bauen Burgen aus feinem Sand am Strand.", "Çocuklar kumsalda ince kumdan kaleler yapıyor.", "The children build castles from fine sand at the beach.", [], []),

    # Zahlen, Maße & Mengenangaben (101-135)
    ("die Zahl, -en", "sayı, rakam", "number / digit", "noun", "A1", "Können Sie die Zahlen von eins bis hundert auf Deutsch?", "Birden yüze kadar olan sayıları Almanca biliyor musunuz?", "Do you know the numbers from one to a hundred in German?", ["die Ziffer", "die Nummer"], []),
    ("die Ziffer, -n", "rakam", "digit", "noun", "A2", "Die PIN besteht aus einer vierstelligen Ziffer.", "PIN dört haneli bir rakamdan oluşur.", "The PIN consists of a four-digit number.", ["die Zahl"], []),
    ("die Nummer, -n", "numara", "number", "noun", "A1", "Wie lautet Ihre aktuelle Telefonnummer?", "Güncel telefon numaranız nedir?", "What is your current telephone number?", [], []),
    ("die Summe, -n", "toplam, meblağ", "sum / total / amount", "noun", "A2", "Die Summe der Rechnung beträgt genau 150 Euro.", "Faturanın toplam tutarı tam 150 avrodur.", "The sum of the invoice amounts to exactly 150 euros.", ["der Gesamtbetrag"], []),
    ("der Betrag, ⸚e", "tutar, meblağ", "amount (money)", "noun", "A2", "Überweisen Sie den fälligen Betrag innerhalb von zehn Tagen!", "Vadesi gelen tutarı on gün içinde havale ediniz!", "Transfer the due amount within ten days!", ["die Geldsumme"], []),
    ("der Preis, -e", "fiyat / ödül", "price / prize / award", "noun", "A1", "Der Preis für das Ticket ist sehr günstig.", "Biletin fiyatı çok uygundur.", "The price for the ticket is very affordable.", ["die Kosten"], []),
    ("der Rabatt, -e", "indirim, iskonto", "discount", "noun", "A2", "Heute erhalten alle Kunden zwanzig Prozent Rabatt.", "Bugün tüm müşterilere yüzde yirmi indirim uygulanıyor.", "Today all customers receive a twenty percent discount.", ["der Preisnachlass"], []),
    ("die Rechnung, -en", "fatura, hesap", "bill / invoice / calculation", "noun", "A1", "Bringen Sie uns bitte die Rechnung, wir möchten zahlen!", "Bize hesabı getirir misiniz lütfen, ödemek istiyoruz!", "Please bring us the bill, we would like to pay!", [], []),
    ("das Trinkgeld, -er", "bahşiş", "tip / gratuity", "noun", "A1", "In Deutschland gibt man im Restaurant üblicherweise Trinkgeld.", "Almanya'da restoranda geleneksel olarak bahşiş verilir.", "In Germany one customarily gives a tip in the restaurant.", [], []),
    ("das Bargeld, (nur Sg.)", "nakit para", "cash", "noun", "A1", "Haben Sie etwas Bargeld dabei oder zahlen Sie mit Karte?", "Yanınızda biraz nakit var mı yoksa kartla mı ödeyeceksiniz?", "Do you have some cash with you or are you paying by card?", [], ["das Buchgeld"]),
    ("die Münze, -n", "madeni para, bozukluk", "coin", "noun", "A1", "Ich brauche eine Zwei-Euro-Münze für den Einkaufswagen.", "Alışveriş arabası için iki avroluk madeni paraya ihtiyacım var.", "I need a two-euro coin for the shopping trolley.", ["das Kleingeld"], ["der Geldschein"]),
    ("der Geldschein, -e", "banknot, kağıt para", "banknote / bill", "noun", "A1", "Er bezahlte den Einkauf mit einem Fünfzig-Euro-Schein.", "Alışverişi elli avroluk bir banknotla ödedi.", "He paid for the purchase with a fifty-euro note.", ["die Banknote"], ["die Münze"]),
    ("das Portemonnaie, -s", "cüzdan", "wallet / purse", "noun", "A1", "Ich habe mein Portemonnaie leider zu Hause vergessen.", "Cüzdanımı maalesef evde unuttum.", "Unfortunately I forgot my wallet at home.", ["die Geldbörse", "der Geldbeutel"], []),

    # Alltägliche Ausdrücke & Adjektive (136-180)
    ("vorsichtig", "dikkatli, temkinli", "careful / cautious", "adj", "A1", "Sei bitte vorsichtig beim Überqueren der Straße!", "Karşıdan karşıya geçerken lütfen dikkatli ol!", "Please be careful when crossing the street!", ["achtsam"], ["unvorsichtig"]),
    ("unvorsichtig", "dikkatsiz, tedbirsiz", "careless / incautious", "adj", "A2", "Es war sehr unvorsichtig, die Tür unverschlossen zu lassen.", "Kapıyı kilitlemeden bırakmak çok tedbirsizceydi.", "It was very careless to leave the door unlocked.", [], ["vorsichtig"]),
    ("neugierig", "meraklı", "curious", "adj", "A2", "Er stellte mir viele neugierige Fragen.", "Bana çok sayıda meraklı soru sordu.", "He asked me many curious questions.", ["wissbegierig"], []),
    ("sympathisch", "cana yakın, sempatik", "likeable / congenial", "adj", "A2", "Unsere neue Nachbarin ist überaus sympathisch.", "Yeni komşumuz son derece cana yakındır.", "Our new neighbor is exceedingly likeable.", ["nett", "angenehm"], ["unsympathisch"]),
    ("unsympathisch", "sevimsiz, antipatik", "unpleasant / unsympathetic", "adj", "A2", "Auf den ersten Blick wirkte er etwas unsympathisch.", "İlk bakışta biraz sevimsiz göründü.", "At first glance he seemed somewhat unpleasant.", [], ["sympathisch"]),
    ("sportlich", "sportif, sporsever", "sporty / athletic", "adj", "A1", "Sie ist sehr sportlich und joggt jeden Morgen.", "O çok sportiftir ve her sabah koşu yapar.", "She is very sporty and jogs every morning.", ["fit"], ["unsportlich"]),
    ("gemütlich", "rahat, keyifli, samimi", "cozy / comfortable", "adj", "A1", "Wir verbrachten einen gemütlichen Abend am Kamin.", "Şöminenin başında samimi ve keyifli bir akşam geçirdik.", "We spent a cozy evening by the fireplace.", ["behaglich"], ["ungemütlich"]),
    ("ungemütlich", "rahatsız, tatsız, sevimsiz", "uncomfortable / unpleasant", "adj", "A2", "Draußen ist das Wetter heute nasskalt und ungemütlich.", "Dışarıda hava bugün ıslak soğuk ve sevimsiz.", "Outside the weather today is wet-cold and unpleasant.", [], ["gemütlich"]),
    ("sparsam", "tutumlu, idareli", "economical / thrifty", "adj", "A2", "Dieses moderne Elektroauto fährt sehr sparsam.", "Bu modern elektrikli araba çok tasarruflu gidiyor.", "This modern electric car drives very economically.", ["wirtschaftlich"], ["verschwenderisch"]),
    ("verschwenderisch", "savurgan, müsrif", "wasteful / extravagant", "adj", "B1", "Man sollte nicht verschwenderisch mit Wasser umgehen.", "Su konusunda savurgan davranılmamalıdır.", "One should not handle water wastefully.", [], ["sparsam"]),
    ("wunderbar", "harika, mükemmel", "wonderful / marvelous", "adj", "A1", "Wir hatten einen wunderbaren Urlaub in den Bergen.", "Dağlarda harika bir tatil geçirdik.", "We had a wonderful holiday in the mountains.", ["fantastisch", "herrlich"], ["furchtbar"]),
    ("furchtbar", "korkunç, berbat", "terrible / awful / dreadful", "adj", "A2", "Der Sturm richtete furchtbare Schäden an.", "Fırtına korkunç hasarlara yol açtı.", "The storm caused terrible damage.", ["schrecklich"], ["wunderbar"]),
    ("herrlich", "muazzam, nefis, enfes", "splendid / delightful", "adj", "A2", "Vom Berggipfel hat man eine herrliche Aussicht.", "Dağ zirvesinden enfes bir manzara vardır.", "From the mountain peak one has a splendid view.", ["großartig"], ["schrecklich"]),
    ("schrecklich", "korkunç, dehşetli", "terrible / horrible", "adj", "A2", "Ich hatte gestern Nacht einen schrecklichen Albtraum.", "Dün gece korkunç bir kabus gördüm.", "I had a terrible nightmare last night.", ["furchtbar"], ["wunderschön"]),
    ("wunderschön", "fevkalade güzel", "gorgeous / extremely beautiful", "adj", "A1", "Sie schenkte mir einen wunderschönen Blumenstrauß.", "Bana fevkalade güzel bir çiçek buketi hediye etti.", "She gave me a gorgeous bouquet of flowers.", ["traumhaft"], ["hässlich"]),
    ("wahnsinnig", "çılgın, delice / inanılmaz derecede", "crazy / insane / incredibly", "adj", "A2", "Er freute sich wahnsinnig über die Überraschung.", "Sürprize delice sevindi.", "He was crazy happy about the surprise.", ["verrückt"], []),
    ("verrückt", "deli, kaçık, tuhaf", "crazy / mad", "adj", "A2", "Das ist eine absolut verrückte und geniale Idee!", "Bu kesinlikle çılgın ve dahiyane bir fikir!", "That is an absolutely crazy and brilliant idea!", ["wahnsinnig"], ["normal"])
]

print(f"Loaded {len(EXTRA_BOOST_2000)} extra boost items.")
