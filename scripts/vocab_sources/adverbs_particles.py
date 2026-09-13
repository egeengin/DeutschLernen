# scripts/vocab_sources/adverbs_particles.py
"""
High-frequency German Adverbs and Modal Particles (A1, A2, B1).
Covers:
- Zeitadverbien (bisher, damals, sofort, demnächst, tagsüber, etc.)
- Ortsadverbien (überall, nirgendwo, draußen, drinnen, oben, unten, etc.)
- Häufigkeitsadverbien (meistens, häufig, selten, kaum, nie, etc.)
- Grad- und Modaladverbien (fast, beinahe, mindestens, höchstens, keineswegs, etc.)
"""

ADVERBS_AND_PARTICLES = [
    # Zeit & Abfolge (1-30)
    ("bisher", "şimdiye kadar, şu ana dek", "so far / up to now", "adv", "B1", "Bisher gab es keinerlei Beschwerden von den Kunden.", "Şimdiye kadar müşterilerden hiçbir şikayet gelmedi.", "So far there have been no complaints from the customers.", ["bislang"], ["ab jetzt"]),
    ("damals", "o zamanlar, vaktiyle", "back then / at that time", "adv", "A2", "Damals wohnten wir noch in einer kleinen Wohnung.", "O zamanlar henüz küçük bir dairede oturuyorduk.", "Back then we still lived in a small apartment.", ["früher"], ["heute"]),
    ("sofort", "derhal, hemen", "immediately / right away", "adv", "A1", "Kommen Sie bitte sofort ins Büro des Chefs!", "Lütfen derhal müdürün odasına geliniz!", "Please come immediately to the boss's office!", ["augenblicklich", "gleich"], ["später"]),
    ("gleich", "hemen, birazdan / eşit", "soon / right away / equal", "adv", "A1", "Das Essen ist gleich fertig.", "Yemek birazdan hazır.", "The meal is ready right away.", ["bald"], []),
    ("bald", "yakında, az sonra", "soon", "adv", "A1", "Wir sehen uns bald wieder!", "Yakında tekrar görüşürüz!", "We will see each other soon again!", ["demnächst"], ["spät"]),
    ("demnächst", "yakında, pek yakında", "soon / in the near future", "adv", "B1", "Der neue Film startet demnächst in den Kinos.", "Yeni film pek yakında sinemalarda vizyona giriyor.", "The new movie is launching soon in cinemas.", ["in Kürze"], []),
    ("plötzlich", "aniden, birdenbire", "suddenly / unexpectedly", "adv", "A2", "Plötzlich fing es furchtbar an zu gewittern.", "Aniden korkunç bir fırtına koptu.", "Suddenly a terrible thunderstorm started.", ["unerwartet"], ["allmählich"]),
    ("allmählich", "yavaş yavaş, gitgide", "gradually / step by step", "adv", "B1", "Das Wetter wird allmählich wärmer.", "Hava yavaş yavaş ısınıyor.", "The weather is gradually getting warmer.", ["nach und nach"], ["plötzlich"]),
    ("endlich", "nihayet, sonunda", "finally / at last", "adv", "A1", "Endlich Wochenende, Zeit zum Ausruhen!", "Nihayet hafta sonu, dinlenme zamanı!", "Finally weekend, time to rest!", ["schließlich"], []),
    ("schließlich", "sonunda, neticede", "eventually / after all", "adv", "A2", "Nach fünf Stunden erreichten wir schließlich das Ziel.", "Beş saatin ardından nihayet hedefe ulaştık.", "After five hours we finally reached our destination.", ["am Ende"], []),
    ("inzwischen", "bu arada, bu esnada", "meanwhile / in the meantime", "adv", "B1", "Räum bitte auf, ich koche inzwischen das Essen.", "Ortalığı topla lütfen, ben bu arada yemeği pişireyim.", "Please tidy up, meanwhile I will cook the meal.", ["mittlerweile"], []),
    ("mittlerweile", "bu esnada, zamanla", "by now / meanwhile", "adv", "B1", "Mittlerweile spricht er hervorragend Deutsch.", "Bu esnada mükemmel Almanca konuşuyor.", "By now he speaks excellent German.", ["inzwischen"], []),
    ("tagsüber", "gündüzleri, gün boyunca", "during the day", "adv", "B1", "Tagsüber arbeitet sie im Krankenhaus.", "Gündüzleri hastanede çalışıyor.", "During the day she works in the hospital.", ["am Tag"], ["nachts"]),
    ("nachts", "geceleri, geceleyin", "at night", "adv", "A1", "Nachts sinken die Temperaturen spürbar.", "Geceleri sıcaklıklar hissedilir derecede düşüyor.", "At night the temperatures drop noticeably.", ["in der Nacht"], ["tagsüber"]),
    ("gestern", "dün", "yesterday", "adv", "A1", "Gestern war ich den ganzen Tag zu Hause.", "Dün bütün gün evdeydim.", "Yesterday I was at home the whole day.", [], ["morgen"]),
    ("heute", "bugün", "today", "adv", "A1", "Heute haben wir wunderbaren Sonnenschein.", "Bugün harika bir güneş ışığımız var.", "Today we have wonderful sunshine.", [], []),
    ("morgen", "yarın", "tomorrow", "adv", "A1", "Morgen fängt eine neue Woche an.", "Yarın yeni bir hafta başlıyor.", "Tomorrow a new week begins.", [], ["gestern"]),
    ("übermorgen", "öbür gün (yarından sonraki gün)", "the day after tomorrow", "adv", "A1", "Übermorgen schreiben wir die telc Deutsch B1 Prüfung.", "Öbür gün telc Deutsch B1 sınavına giriyoruz.", "The day after tomorrow we write the telc Deutsch B1 exam.", [], []),
    ("vorgestern", "dünden önceki gün", "the day before yesterday", "adv", "A1", "Vorgestern habe ich das Paket zur Post gebracht.", "Dünden önceki gün paketi postaneye götürdüm.", "The day before yesterday I took the parcel to the post office.", [], []),
    ("immer", "her zaman, daima", "always", "adv", "A1", "Er ist immer sehr freundlich und hilfsbereit.", "O her zaman çok cana yakın ve yardımseverdir.", "He is always very friendly and helpful.", ["stets"], ["nie", "niemals"]),
    ("meistens", "çoğunlukla, genellikle", "mostly / usually", "adv", "A1", "Meistens frühstücke ich gegen acht Uhr.", "Çoğunlukla saat sekiz civarında kahvaltı yaparım.", "Mostly I eat breakfast around eight o'clock.", ["gewöhnlich"], ["selten"]),
    ("häufig", "sık sık, sıklıkla", "frequently / often", "adv", "A2", "Solche Fehler kommen bei Anfängern häufig vor.", "Bu tür hatalar yeni başlayanlarda sıkça görülür.", "Such mistakes happen frequently with beginners.", ["oft"], ["selten"]),
    ("oft", "sık sık", "often", "adv", "A1", "Wir gehen oft am Sonntag im Park spazieren.", "Pazar günleri sık sık parkta yürüyüşe çıkarız.", "We often go for a walk in the park on Sundays.", ["häufig"], ["selten"]),
    ("manchmal", "bazen, ara sıra", "sometimes", "adv", "A1", "Manchmal braucht man einfach eine kurze Pause.", "Bazen sadece kısa bir molaya ihtiyaç duyulur.", "Sometimes one simply needs a short break.", ["ab und zu", "gelegentlich"], []),
    ("selten", "nadiren, seyrek", "rarely / seldom", "adv", "A1", "Ich esse nur sehr selten Fastfood.", "Çok nadiren hazır yemek (fast food) yerim.", "I eat fast food only very rarely.", ["kaum"], ["oft", "häufig"]),
    ("kaum", "neredeyse hiç, güçbela", "hardly / barely", "adv", "A2", "Es war so laut, dass man kaum sein eigenes Wort verstand.", "O kadar gürültülüydü ki insan neredeyse kendi sesini duyamıyordu.", "It was so loud that one could barely hear one's own word.", ["schwerlich"], []),
    ("nie", "asla, hiç", "never", "adv", "A1", "Ich habe so etwas noch nie im Leben gesehen.", "Hayatımda daha önce hiç böyle bir şey görmedim.", "I have never seen such a thing in my life.", ["niemals"], ["immer"]),

    # Ort & Richtung (31-55)
    ("überall", "her yerde", "everywhere", "adv", "A1", "Im Frühling blühen überall bunte Blumen.", "İlkbaharda her yerde renkli çiçekler açar.", "In spring colorful flowers bloom everywhere.", ["allerorten"], ["nirgendwo"]),
    ("nirgendwo", "hiçbir yerde", "nowhere", "adv", "A2", "Ich kann meinen Schlüssel nirgendwo finden.", "Anahtarımı hiçbir yerde bulamıyorum.", "I cannot find my key anywhere.", ["nirgends"], ["überall"]),
    ("irgendwo", "bir yerde", "somewhere", "adv", "A2", "Die Brille muss hier irgendwo auf dem Tisch liegen.", "Gözlük burada masanın üzerinde bir yerde olmalı.", "The glasses must be lying somewhere here on the table.", [], []),
    ("hier", "burada", "here", "adv", "A1", "Hier ist es angenehm warm und ruhig.", "Burası hoş bir şekilde sıcak ve sakin.", "Here it is pleasantly warm and quiet.", ["an diesem Ort"], ["dort"]),
    ("dort", "orada", "there", "adv", "A1", "Dort drüben steht der neue Kollege.", "Orada karşıda yeni iş arkadaşı duruyor.", "Over there stands the new colleague.", ["da"], ["hier"]),
    ("da", "orada, burada", "there / here", "adv", "A1", "Bist du schon da?", "Geldin mi (orada mısın)?", "Are you there already?", ["anwesend"], []),
    ("oben", "yukarıda", "above / upstairs", "adv", "A1", "Die Schlafzimmer befinden sich alle oben.", "Yatak odalarının tümü yukarıda bulunuyor.", "The bedrooms are all located upstairs.", ["aufwärts"], ["unten"]),
    ("unten", "aşağıda", "below / downstairs", "adv", "A1", "Im Keller ganz unten lagern wir alte Kisten.", "En aşağıda bodrumda eski kutuları saklıyoruz.", "In the basement downstairs we store old boxes.", [], ["oben"]),
    ("vorne", "önde", "in front / ahead", "adv", "A1", "Vorne im Bus sind Plätze für Senioren reserviert.", "Otobüsün ön tarafında yaşlılar için yerler ayrılmıştır.", "In front in the bus seats are reserved for seniors.", ["an der Spitze"], ["hinten"]),
    ("hinten", "arkada", "in the back / behind", "adv", "A1", "Im Kinosaal sitze ich am liebsten ganz hinten.", "Sinema salonunda en çok arkada oturmayı severim.", "In the cinema hall I prefer sitting at the very back.", [], ["vorne"]),
    ("links", "solda, sola", "left / on the left", "adv", "A1", "Biegen Sie an der Kreuzung bitte nach links ab!", "Kavşakta lütfen sola dönünüz!", "At the intersection please turn left!", [], ["rechts"]),
    ("rechts", "sağda, sağa", "right / on the right", "adv", "A1", "Die Apotheke liegt auf der rechten Seite.", "Eczane sağ tarafta yer alıyor.", "The pharmacy is located on the right side.", [], ["links"]),
    ("geradeaus", "düz, doğruca", "straight ahead", "adv", "A1", "Gehen Sie zweihundert Meter geradeaus!", "İki yüz metre dosdoğru gidiniz!", "Go two hundred meters straight ahead!", ["geradewegs"], []),
    ("drinnen", "içeride", "indoors / inside", "adv", "A1", "Bei Regen bleiben die Kinder drinnen.", "Yağmur yağınca çocuklar içeride kalır.", "When it rains the children stay indoors.", ["im Hause"], ["draußen"]),
    ("draußen", "dışarıda", "outdoors / outside", "adv", "A1", "Im Sommer essen wir gerne draußen im Garten.", "Yazın bahçede dışarıda yemek yemeyi severiz.", "In summer we like eating outside in the garden.", ["im Freien"], ["drinnen"]),

    # Grad, Menge & Modus (56-80)
    ("sehr", "çok", "very / very much", "adv", "A1", "Ich danke Ihnen sehr für Ihre tatkräftige Unterstützung.", "Etkin desteğiniz için size çok teşekkür ederim.", "I thank you very much for your active support.", ["äußerst"], ["wenig"]),
    ("besonders", "özellikle, bilhassa", "especially / particularly", "adv", "A2", "Diese Regel ist besonders wichtig für die B1-Prüfung.", "Bu kural özellikle B1 sınavı için çok önemlidir.", "This rule is particularly important for the B1 exam.", ["insbesondere"], []),
    ("ziemlich", "oldukça, epey", "quite / fairly", "adv", "A2", "Der Test war ziemlich anspruchsvoll.", "Test oldukça zorlayıcıydı.", "The test was quite demanding.", ["relativ"], []),
    ("fast", "neredeyse, hemen hemen", "almost / nearly", "adv", "A1", "Ich bin mit den Hausaufgaben fast fertig.", "Ödevlerimi neredeyse bitirdim.", "I am almost done with the homework.", ["beinahe"], []),
    ("beinahe", "neredeyse, az kalsın", "almost / nearly", "adv", "B1", "Ich hätte beinahe den Anschlusszug verpasst.", "Az kalsın aktarma trenini kaçırıyordum.", "I almost missed the connecting train.", ["fast"], []),
    ("mindestens", "en azından (sayısal)", "at least", "adv", "A2", "Der Aufsatz muss mindestens zweihundert Wörter umfassen.", "Kompozisyon en az iki yüz kelime içermelidir.", "The essay must comprise at least two hundred words.", ["wenigstens"], ["höchstens"]),
    ("höchstens", "en fazla, en çok", "at most / maximum", "adv", "A2", "Die Reparatur dauert höchstens zwei Werktage.", "Tamir en fazla iki iş günü sürer.", "The repair takes at most two working days.", ["maximal"], ["mindestens"]),
    ("wenigstens", "hiç değilse, en azından", "at least", "adv", "B1", "Ruf mich wenigstens kurz an, wenn du später kommst!", "Geç kalırsan hiç değilse beni kısaca ara!", "At least give me a quick call if you arrive later!", ["zumindest"], []),
    ("zumindest", "en azından", "at least", "adv", "B1", "Das Wetter war schlecht, aber zumindest regnete es nicht.", "Hava kötüydü ama en azından yağmur yağmıyordu.", "The weather was bad, but at least it didn't rain.", ["wenigstens"], []),
    ("keineswegs", "asla, hiçbir şekilde", "by no means / not at all", "adv", "B1", "Die Aufgabe war keineswegs so einfach wie gedacht.", "Görev hiçbir şekilde düşünüldüğü kadar kolay değildi.", "The task was by no means as easy as thought.", ["überhaupt nicht"], ["durchaus"]),
    ("durchaus", "kesinlikle, tamamen", "thoroughly / quite / absolutely", "adv", "B1", "Diese Methode ist durchaus empfehlenswert.", "Bu yöntem kesinlikle tavsiye edilmeye değer.", "This method is definitely recommendable.", ["völlig"], ["keineswegs"]),
    ("vielleicht", "belki, olabilir ki", "perhaps / maybe", "adv", "A1", "Vielleicht machen wir am Sonntag einen Ausflug ins Grüne.", "Belki pazar günü doğaya bir gezi yaparız.", "Perhaps we will make an excursion into nature on Sunday.", ["womöglich"], ["sicher"]),
    ("wahrscheinlich", "muhtemelen", "probably", "adv", "A2", "Er kommt heute wahrscheinlich etwas später zum Unterricht.", "O bugün derse muhtemelen biraz daha geç gelecek.", "He is probably arriving a bit later to class today.", ["vermutlich"], ["unwahrscheinlich"]),
    ("sicherlich", "kuşkusuz, muhakkak", "certainly / surely", "adv", "A2", "Sie werden die Prüfung sicherlich mit Bravour bestehen.", "Sınavı kuşkusuz başarıyla geçeceksiniz.", "You will certainly pass the exam with flying colors.", ["gewiss"], [])
]

print(f"Loaded {len(ADVERBS_AND_PARTICLES)} adverbs and particles.")
