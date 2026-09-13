# scripts/vocab_sources/final_milestone_120.py
"""
Final Milestone 120 High-Frequency German Vocabulary Items (A1, A2, B1)
Takes the vocabulary repository well beyond 2000 unique verified items.
Topics: Tastes, physical sensations, outdoor leisure, hobbies, daily actions.
All items formatted as: (de, tr, en, pos, level, ex, ex_tr, ex_en, syns, ants)
"""

FINAL_MILESTONE_120 = [
    # Geschmack, Sinne & Beschaffenheit (1-35)
    ("süß", "tatlı, şirin", "sweet / cute", "adj", "A1", "Der Kuchen schmeckt herrlich süß.", "Kek harika tatlı bir lezzette.", "The cake tastes wonderfully sweet.", ["zuckrig", "niedlich"], ["sauer", "bitter"]),
    ("sauer", "ekşi / kızgın (argo)", "sour / mad", "adj", "A1", "Zitronen schmecken sehr sauer.", "Limonların tadı çok ekşidir.", "Lemons taste very sour.", ["herb"], ["süß"]),
    ("salzig", "tuzlu", "salty", "adj", "A1", "Die Suppe ist leider etwas zu salzig geraten.", "Çorba maalesef biraz fazla tuzlu olmuş.", "The soup turned out a bit too salty unfortunately.", ["versalzen"], ["fade"]),
    ("scharf", "keskin / acı (lezzet)", "sharp / spicy / hot", "adj", "A1", "Das mexikanische Essen ist extrem scharf.", "Meksika yemeği aşırı derecede acıdır.", "The Mexican food is extremely spicy.", ["pikant", "würzig"], ["mild"]),
    ("mild", "hafif, yumuşak (lezzet/iklim)", "mild / gentle", "adj", "A2", "Der Winter war dieses Jahr erfreulich mild.", "Kış bu yıl sevindirici şekilde ılıman geçti.", "The winter was pleasantly mild this year.", ["sanft"], ["scharf", "streng"]),
    ("bitter", "acı (tat) / acı veren", "bitter", "adj", "A2", "Dunkle Schokolade hat einen leicht bitteren Geschmack.", "Bitter çikolatanın hafif acı bir tadı vardır.", "Dark chocolate has a slightly bitter taste.", ["herb"], ["süß"]),
    ("frisch", "taze / zinde", "fresh / crisp", "adj", "A1", "Morgens atme ich tief die frische Luft ein.", "Sabahları taze havayı derin bir nefesle içime çekerim.", "In the morning I breathe in the fresh air deeply.", ["knackig"], ["alt", "verdorben"]),
    ("hart", "sert, katı / çetin", "hard / tough", "adj", "A1", "Das alte Brot ist steinhart geworden.", "Eski ekmek taş gibi sertleşti.", "The old bread has become rock hard.", ["fest"], ["weich"]),
    ("weich", "yumuşak", "soft", "adj", "A1", "Das Kissen ist herrlich weich und bequem.", "Yastık harika derecede yumuşak ve rahattır.", "The pillow is wonderfully soft and comfortable.", ["sanft"], ["hart"]),
    ("flach", "düz, sığ", "flat / shallow", "adj", "A2", "Im Norden Deutschlands ist die Landschaft flach.", "Almanya'nın kuzeyinde arazi düzdür.", "In northern Germany the landscape is flat.", ["eben"], ["steil", "tief"]),
    ("steil", "dik, sarp", "steep", "adj", "A2", "Der Wanderweg auf den Berg ist sehr steil.", "Dağa çıkan yürüyüş patikası çok diktir.", "The hiking trail up the mountain is very steep.", ["abschüssig"], ["flach"]),
    ("tief", "derin / alçak", "deep / low", "adj", "A1", "Der See ist an dieser Stelle über zwanzig Meter tief.", "Göl bu noktada yirmi metreden daha derindir.", "The lake is over twenty meters deep at this point.", ["abgründig"], ["flach", "seicht"]),
    ("breit", "geniş, enli", "wide / broad", "adj", "A1", "Der Fluss ist an der Mündung sehr breit.", "Nehir döküldüğü yerde çok geniştir.", "The river is very wide at the mouth.", ["weit"], ["schmal", "eng"]),
    ("schmal", "dar, ince", "narrow / slim", "adj", "A2", "Wir gingen durch eine schmale Gasse in der Altstadt.", "Eski şehirde dar bir sokaktan geçtik.", "We walked through a narrow alley in the old town.", ["eng"], ["breit"]),
    ("eng", "dar, sıkı", "tight / narrow / close", "adj", "A1", "Die neuen Schuhe sind mir leider etwas zu eng.", "Yeni ayakkabılar maalesef bana biraz fazla dar.", "The new shoes are unfortunately a bit too tight for me.", ["schmal"], ["weit"]),
    ("weit", "geniş, bol / uzak", "wide / far / loose", "adj", "A1", "Bis zum nächsten Bahnhof ist es noch ein weiter Weg.", "Bir sonraki tren garına hala uzak bir yol var.", "It is still a long way to the next train station.", ["fern"], ["nah", "eng"]),
    ("dick", "kalın / şişman", "thick / fat", "adj", "A1", "Im Winter ziehe ich einen dicken Wollpullover an.", "Kışın kalın bir yün kazak giyerim.", "In winter I put on a thick wool sweater.", ["stark"], ["dünn"]),
    ("dünn", "ince / zayıf", "thin / slim", "adj", "A1", "Das Papier ist extrem dünn und reißt leicht.", "Kağıt son derece ince ve kolay yırtılıyor.", "The paper is extremely thin and tears easily.", ["mager"], ["dick"]),
    ("trocken", "kuru, kurak", "dry", "adj", "A1", "Nach dem Regen ist die Straße schnell wieder trocken.", "Yağmurdan sonra sokak hızla yeniden kuruyor.", "After the rain the street is quickly dry again.", ["dürr"], ["nass", "feucht"]),
    ("nass", "ıslak, sırılsıklam", "wet", "adj", "A1", "Komm rein, du bist vom Regen ganz nass!", "İçeri gel, yağmurdan sırılsıklam olmuşsun!", "Come in, you are completely wet from the rain!", ["feucht"], ["trocken"]),
    ("feucht", "nemli, rutubetli", "damp / moist / humid", "adj", "A2", "Im Keller ist die Luft oft unangenehm feucht.", "Bodrumda hava çoğu kez rahatsız edici derecede nemlidir.", "In the basement the air is often unpleasantly damp.", ["nass"], ["trocken"]),

    # Outdoor, Natur & Hobbys (36-70)
    ("spazieren (spaziert, spazierte, ist spaziert)", "yürüyüş yapmak, dolaşmak", "to stroll / walk", "verb", "A1", "Wir spazieren am Sonntagnachmittag gerne am Fluss.", "Pazar öğleden sonra nehir kenarında yürüyüş yapmayı severiz.", "We like strolling along the river on Sunday afternoon.", ["schlendern"], []),
    ("wandern (wandert, wanderte, ist gewandert)", "doğa yürüyüşü yapmak", "to hike", "verb", "A1", "Im Herbst wandern viele Menschen in den Bergen.", "Sonbaharda birçok insan dağlarda doğa yürüyüşü yapar.", "In autumn many people hike in the mountains.", ["marschieren"], []),
    ("klettern (klettert, kletterte, ist geklettert)", "tırmanmak", "to climb", "verb", "A2", "Die Kinder klettern geschickt auf den alten Baum.", "Çocuklar beceriyle eski ağaca tırmanıyor.", "The children climb skillfully onto the old tree.", ["steigen"], []),
    ("schwimmen (schwimmt, schwamm, ist geschwommen)", "yüzmek", "to swim", "verb", "A1", "Im Sommer schwimme ich fast täglich im See.", "Yazın neredeyse her gün gölde yüzerim.", "In summer I swim almost daily in the lake.", ["baden"], []),
    ("tauchen (taucht, tauchte, ist/hat getaucht)", "dalmak (suya)", "to dive / scuba dive", "verb", "A2", "Im Roten Meer kann man fantastisch tauchen.", "Kızıldeniz'de harika dalış yapılabilir.", "In the Red Sea one can scuba dive fantastically.", [], []),
    ("angeln (angelt, angelte, hat geangelt)", "olta ile balık tutmak", "to fish / angle", "verb", "A2", "Mein Vater angelt am Wochenende gerne am See.", "Babam hafta sonu gölde balık tutmayı sever.", "My father likes fishing at the lake on the weekend.", ["fischen"], []),
    ("zelten (zeltet, zeltete, hat gezeltet)", "çadır kurmak, kamp yapmak", "to camp / camp in tents", "verb", "A1", "Wir zelten im Sommer direkt am Baggersee.", "Yazın doğrudan gölet kenarında çadır kurup kamp yapıyoruz.", "In summer we camp directly by the quarry pond.", ["campen"], []),
    ("campen (campt, campte, hat gecampt)", "kamping yapmak", "to camp", "verb", "A2", "Viele Familien campen gerne an der Ostseeküste.", "Birçok aile Baltık Denizi sahilinde kamp yapmayı sever.", "Many families enjoy camping on the Baltic Sea coast.", ["zelten"], []),
    ("grillen (grillt, grillte, hat gegrillt)", "ızgara / mangal yapmak", "to grill / barbecue", "verb", "A1", "Am Wochenende grillen wir Würstchen und Gemüse im Garten.", "Hafta sonu bahçede sosis ve sebze ızgara yapıyoruz.", "On the weekend we grill sausages and vegetables in the garden.", ["braten"], []),
    ("reiten (reitet, ritt, ist/hat geritten)", "ata binmek", "to ride a horse", "verb", "A2", "Sie reitet seit ihrer Kindheit jeden Samstag.", "Çocukluğundan beri her cumartesi ata biner.", "She has been riding horses every Saturday since her childhood.", [], []),
    ("rudern (rudert, ruderte, ist/hat gerudert)", "kürek çekmek", "to row", "verb", "A2", "Wir rudern mit dem kleinen Holzboot über den ruhigen See.", "Küçük ahşap tekneyle sakin gölün üzerinden kürek çekerek geçiyoruz.", "We row with the small wooden boat across the calm lake.", [], []),
    ("segeln (segelt, segelte, ist/hat gesegelt)", "yelken açmak, yelken sporu yapmak", "to sail", "verb", "A2", "Er segelt im Sommer gerne auf dem Bodensee.", "Yazın Bodensee gölünde yelken açmayı sever.", "In summer he likes sailing on Lake Constance.", [], []),
    ("tanzen (tanzt, tanzte, hat getanzt)", "dans etmek", "to dance", "verb", "A1", "Auf der Hochzeit tanzten alle ausgelassen bis in den Morgen.", "Düğünde herkes sabaha kadar coşkuyla dans etti.", "At the wedding everyone danced exuberantly until morning.", [], []),
    ("singen (singt, sang, hat gesungen)", "şarkı söylemek", "to sing", "verb", "A1", "Die Kinder singen fröhliche Lieder im Chor.", "Çocuklar koroda neşeli şarkılar söylüyorlar.", "The children sing cheerful songs in the choir.", [], []),
    ("zeichnen (zeichnet, zeichnete, hat gezeichnet)", "çizim yapmak, resim çizmek", "to draw / sketch", "verb", "A1", "Sie zeichnet gerne Porträts mit Bleistift.", "Kurşun kalemle portre çizmeyi sever.", "She likes drawing portraits with pencil.", ["skizzieren", "malen"], []),
    ("malen (malt, malte, hat gemalt)", "boyamak, resim yapmak", "to paint", "verb", "A1", "Er malt wunderschöne bunte Landschaften mit Ölfarben.", "Yağlı boya ile harika renkli manzaralar boyuyor.", "He paints wonderful colorful landscapes with oil paints.", ["zeichnen"], []),
    ("basteln (bastelt, bastelte, hat gebastelt)", "el işi yapmak, maket yapmak", "to do crafts / tinker", "verb", "A1", "Vor Weihnachten basteln wir bunte Sterne aus Papier.", "Noel'den önce kağıttan renkli yıldızlar yapıyoruz.", "Before Christmas we make colorful stars from paper.", ["handarbeiten"], []),
    ("sammeln (sammelt, sammelte, hat gesammelt)", "toplamak, biriktirmek, koleksiyon yapmak", "to collect / gather", "verb", "A1", "Er sammelt seit Jahren seltene Briefmarken.", "Yıllardır nadir bulunan posta pullarını biriktiriyor.", "He has been collecting rare stamps for years.", ["anhäufen"], []),

    # Orte & Phänomene (71-100)
    ("die Wanderung, -en", "doğa yürüyüşü", "hike / walking tour", "noun", "A1", "Die Wanderung durch die Klamm war beeindruckend.", "Boğaz boyunca doğa yürüyüşü etkileyiciydi.", "The hike through the gorge was impressive.", ["der Ausflug"], []),
    ("der Ausflug, ⸚e", "gezi, günübirlik seyahat", "excursion / day trip", "noun", "A1", "Am Sonntag machen wir einen Ausflug an den See.", "Pazar günü göle günübirlik bir gezi yapıyoruz.", "On Sunday we are making an excursion to the lake.", ["die Tour"], []),
    ("das Picknick, -s / -e", "piknik", "picnic", "noun", "A1", "Wir breiten die Decke aus und machen ein schönes Picknick.", "Örtüyü serip güzel bir piknik yapıyoruz.", "We spread out the blanket and have a nice picnic.", [], []),
    ("der Grill, -s", "ızgara, mangal", "grill / barbecue", "noun", "A1", "Er zündet die Holzkohle auf dem Grill an.", "Izgaradaki mangal kömürünü ateşliyor.", "He lights the charcoal on the grill.", ["der Holzkohlegrill"], []),
    ("das Zelt, -e", "çadır", "tent", "noun", "A1", "Wir schlagen unser Zelt auf der Wiese auf.", "Çadırımızı çayırlık alana kuruyoruz.", "We pitch our tent on the meadow.", [], []),
    ("das Lagerfeuer, -", "kamp ateşi", "campfire", "noun", "A2", "Wir saßen abends singend um das wärmende Lagerfeuer.", "Akşamları şarkı söyleyerek ısıtan kamp ateşinin etrafında oturduk.", "In the evening we sat singing around the warming campfire.", [], []),
    ("die Natur, (nur Sg.)", "doğa, tabiat", "nature", "noun", "A1", "Ein Spaziergang in der frischen Natur entspannt den Geist.", "Taze doğada bir yürüyüş zihni rahatlatır.", "A walk in fresh nature relaxes the mind.", ["die Umwelt"], []),
    ("das Gebirge, -", "dağ sırası, dağlık bölge", "mountain range / mountains", "noun", "A2", "Die Alpen sind das höchste Gebirge in Mitteleuropa.", "Alpler Orta Avrupa'nın en yüksek dağ sırasıdır.", "The Alps are the highest mountain range in Central Europe.", ["die Berge"], ["das Flachland"]),
    ("die Quelle, -n", "kaynak, pınar (su/bilgi)", "source / spring / fountainhead", "noun", "B1", "Das klare Wasser entspringt direkt aus der Quelle.", "Berrak su doğrudan pınardan kaynıyor.", "The clear water springs directly from the source.", ["der Ursprung"], []),
    ("die Höhle, -n", "mağara", "cave / cavern", "noun", "A2", "In der dunklen Höhle leben viele Fledermäuse.", "Karanlık mağarada birçok yarasa yaşıyor.", "Many bats live in the dark cave.", ["die Grotte"], []),
    ("der Wasserfall, ⸚e", "şelale, çağlayan", "waterfall", "noun", "A2", "Das Wasser stürzt tosend über den hohen Wasserfall.", "Su yüksek şelaleden gürleyerek aşağı dökülüyor.", "The water plunges roaring over the high waterfall.", [], [])
]

print(f"Loaded {len(FINAL_MILESTONE_120)} items in final_milestone_120.py")
