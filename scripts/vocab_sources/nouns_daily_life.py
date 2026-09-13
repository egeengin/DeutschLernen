# scripts/vocab_sources/nouns_daily_life.py
"""
High-frequency German Nouns for A1, A2, and B1.
Topics: Alltag, Kleidung, Nahrung, Stadt & Verkehr, Körper & Gesundheit, Bildung & Beruf.
All items formatted as: (de, tr, en, pos, level, ex, ex_tr, ex_en, syns, ants)
"""

NOUNS_DAILY_LIFE = [
    # Kleidung & Mode (1-35)
    ("die Jacke, -n", "ceket", "jacket", "noun", "A1", "Zieh eine warme Jacke an, es ist kühl!", "Sıcak bir ceket giy, hava serin!", "Put on a warm jacket, it is cool!", ["die Anorak"], []),
    ("der Mantel, ⸚", "palto, kaban", "coat", "noun", "A1", "Im Winter trage ich einen dicken Wollmantel.", "Kışın kalın bir yün palto giyerim.", "In winter I wear a thick wool coat.", [], []),
    ("die Hose, -n", "pantolon", "trousers / pants", "noun", "A1", "Diese schwarze Hose passt perfekt zu meinem Hemd.", "Bu siyah pantolon gömleğime mükemmel uyuyor.", "These black trousers fit perfectly with my shirt.", ["die Jeans"], []),
    ("die Jeans, -", "kot pantolon", "jeans", "noun", "A1", "Er trägt am liebsten bequeme blaue Jeans.", "En çok rahat mavi kot pantolon giymeyi sever.", "He prefers wearing comfortable blue jeans.", ["die Hose"], []),
    ("das Hemd, -en", "gömlek (erkek)", "shirt", "noun", "A1", "Zum Vorstellungsgespräch trug er ein weißes Hemd.", "İş mülakatına beyaz bir gömlek giydi.", "For the job interview he wore a white shirt.", [], []),
    ("die Bluse, -n", "bluz", "blouse", "noun", "A1", "Sie kaufte eine elegante Seidenbluse.", "Şık bir ipek bluz satın aldı.", "She bought an elegant silk blouse.", [], []),
    ("das T-Shirt, -s", "tişört", "T-shirt", "noun", "A1", "Im heißen Sommer trage ich nur leichte T-Shirts.", "Sıcak yazın sadece hafif tişörtler giyerim.", "In hot summer I only wear light T-shirts.", [], []),
    ("der Pullover, -", "kazak, süveter", "sweater / pullover", "noun", "A1", "Der gestrickte Pullover hält mich kuschelig warm.", "Örgü kazak beni sıcacık tutuyor.", "The knitted sweater keeps me cozy and warm.", ["der Pulli"], []),
    ("das Kleid, -er", "elbise", "dress", "noun", "A1", "Sie trug ein wunderschönes rotes Kleid zur Hochzeit.", "Düğüne harika kırmızı bir elbise giydi.", "She wore a wonderful red dress to the wedding.", ["die Robe"], []),
    ("der Rock, ⸚e", "etek", "skirt", "noun", "A1", "Der Rock reicht bis zu den Knien.", "Etek dizlere kadar uzanıyor.", "The skirt reaches to the knees.", [], []),
    ("der Schuh, -e", "ayakkabı", "shoe", "noun", "A1", "Zieh bitte die dreckigen Schuhe vor der Tür aus!", "Lütfen kirli ayakkabıları kapının önünde çıkar!", "Please take off the dirty shoes in front of the door!", ["das Schuhwerk"], []),
    ("der Stiefel, -", "çizme, bot", "boot", "noun", "A2", "Für den Schnee braucht man wasserdichte Stiefel.", "Kar için su geçirmez botlara ihtiyaç vardır.", "For the snow one needs waterproof boots.", [], []),
    ("die Socke, -n", "çorap", "sock", "noun", "A1", "Ich ziehe mir ein Paar warme Wollsocken an.", "Bir çift sıcak yün çorap giyiyorum.", "I put on a pair of warm wool socks.", ["der Strumpf"], []),
    ("die Mütze, -n", "bere, kasket", "beanie / cap", "noun", "A1", "Vergiss deine Mütze nicht, der Wind ist eisig!", "Bereni unutma, rüzgar buz gibi!", "Don't forget your beanie, the wind is icy!", ["die Kappe"], []),
    ("der Hut, ⸚e", "şapka", "hat", "noun", "A2", "Der alte Herr trug stets einen eleganten Hut.", "Yaşlı beyefendi daima şık bir şapka takardı.", "The elderly gentleman always wore an elegant hat.", [], []),
    ("der Schal, -s", "atkı, şal", "scarf", "noun", "A1", "Ein warmer Schal schützt den Hals vor Kälte.", "Sıcak bir atkı boynu soğuktan korur.", "A warm scarf protects the neck from cold.", ["das Halstuch"], []),
    ("der Handschuh, -e", "eldiven", "glove", "noun", "A1", "Im Winter gehe ich nie ohne Handschuhe nach draußen.", "Kışın dışarıya asla eldivensiz çıkmam.", "In winter I never go outside without gloves.", [], []),
    ("der Gürtel, -", "kemer", "belt", "noun", "A2", "Ich brauche einen neuen Ledergürtel für diese Hose.", "Bu pantolon için yeni bir deri kemere ihtiyacım var.", "I need a new leather belt for these trousers.", [], []),
    ("die Tasche, -n", "çanta, cep", "bag / pocket", "noun", "A1", "Ich habe mein Portemonnaie in die Tasche gesteckt.", "Cüzdanımı çantaya koydum.", "I put my wallet into the bag.", ["der Beutel"], []),
    ("der Rucksack, ⸚e", "sırt çantası", "backpack / rucksack", "noun", "A1", "Für die Wanderung packt er Proviant in den Rucksack.", "Doğa yürüyüşü için sırt çantasına kumanya koyuyor.", "For the hike he packs provisions into the backpack.", [], []),
    ("der Koffer, -", "bavul, valiz", "suitcase", "noun", "A1", "Haben Sie Ihren Koffer schon für die Reise gepackt?", "Yolculuk için bavulunuzu hazırladınız mı?", "Have you already packed your suitcase for the trip?", ["das Gepäckstück"], []),
    ("der Regenschirm, -e", "şemsiye", "umbrella", "noun", "A1", "Nimm einen Regenschirm mit, es zieht Regen auf!", "Yanına bir şemsiye al, yağmur yaklaşıyor!", "Take an umbrella along, rain is coming up!", ["der Schirm"], []),
    ("die Brille, -n", "gözlük", "glasses / spectacles", "noun", "A1", "Ohne meine Brille kann ich die Zeitung kaum lesen.", "Gözlüğüm olmadan gazeteyi neredeyse hiç okuyamam.", "Without my glasses I can barely read the newspaper.", ["die Sehhilfe"], []),
    ("die Sonnenbrille, -n", "güneş gözlüğü", "sunglasses", "noun", "A1", "Am Strand trage ich immer eine dunkle Sonnenbrille.", "Kumsalda her zaman koyu bir güneş gözlüğü takarım.", "At the beach I always wear dark sunglasses.", [], []),
    ("die Uhr, -en", "saat (kol/duvar)", "watch / clock / o'clock", "noun", "A1", "Wie viel Uhr ist es bitte?", "Saat kaç acaba lütfen?", "What time is it please?", ["der Zeitmesser"], []),
    ("der Schmuck, (nur Sg.)", "takı, mücevher", "jewelry", "noun", "A2", "Sie liebt wertvollen Schmuck aus echtem Gold.", "Gerçek altından değerli takıları çok sever.", "She loves valuable jewelry made of real gold.", ["die Juwelen"], []),
    ("der Ring, -e", "yüzük, halka", "ring", "noun", "A1", "Er schenkte ihr einen wunderschönen goldenen Ring.", "Ona harika altın bir yüzük hediye etti.", "He gave her a wonderful golden ring.", [], []),

    # Essen & Trinken Ergänzung (36-75)
    ("das Obst, (nur Sg.)", "meyve", "fruit", "noun", "A1", "Frisches Obst enthält viele lebenswichtige Vitamine.", "Taze meyve çok sayıda hayati vitamin içerir.", "Fresh fruit contains many vital vitamins.", ["die Früchte"], ["das Gemüse"]),
    ("das Gemüse, (nur Sg.)", "sebze", "vegetables", "noun", "A1", "Man sollte täglich reichlich frisches Gemüse essen.", "İnsan günde bolca taze sebze yemelidir.", "One should eat plenty of fresh vegetables daily.", [], ["das Obst"]),
    ("der Apfel, ⸚", "elma", "apple", "noun", "A1", "Ein roter saftiger Apfel schmeckt herrlich.", "Kırmızı sulu bir elmanın tadı harikadır.", "A red juicy apple tastes wonderful.", [], []),
    ("die Banane, -n", "muz", "banana", "noun", "A1", "Affen essen bekanntlich sehr gerne Bananen.", "Maymunların muz yemeyi çok sevdiği bilinir.", "Monkeys notoriously love eating bananas.", [], []),
    ("die Orange, -n", "portakal", "orange", "noun", "A1", "Ich presse mir jeden Morgen zwei Orangen aus.", "Her sabah kendime iki portakal sıkarım.", "I squeeze two oranges for myself every morning.", ["die Apfelsine"], []),
    ("die Zitrone, -n", "limon", "lemon", "noun", "A1", "Zitronen schmecken ausgesprochen sauer.", "Limonların tadı son derece ekşidir.", "Lemons taste exceptionally sour.", [], []),
    ("die Tomate, -n", "domates", "tomato", "noun", "A1", "Für den Salat schneide ich zwei frische Tomaten.", "Salata için iki taze domates doğruyorum.", "For the salad I slice two fresh tomatoes.", ["der Paradeiser"], []),
    ("die Kartoffel, -n", "patates", "potato", "noun", "A1", "In Deutschland isst man traditionell viele Kartoffeln.", "Almanya'da geleneksel olarak çok patates yenir.", "In Germany people traditionally eat many potatoes.", ["der Erdapfel"], []),
    ("die Zwiebel, -n", "soğan", "onion", "noun", "A1", "Beim Zwiebelschneiden muss ich immer weinen.", "Soğan doğrarken her zaman gözlerim yaşarır (ağlarım).", "When slicing onions I always have to cry.", [], []),
    ("der Knoblauch, (nur Sg.)", "sarımsak", "garlic", "noun", "A2", "Knoblauch verleiht der Sauce ein würziges Aroma.", "Sarımsak sosa baharatlı bir aroma katar.", "Garlic gives the sauce a spicy aroma.", [], []),
    ("der Reis, (nur Sg.)", "pirinç, pilav", "rice", "noun", "A1", "Zum Hähnchen servieren wir gedämpften Reis.", "Tavuğun yanında buharda pişmiş pirinç pilavı servis ediyoruz.", "With the chicken we serve steamed rice.", [], []),
    ("die Nudel, -n", "makarna, erişte", "pasta / noodle", "noun", "A1", "Kinder lieben Nudeln mit Tomatensauce über alles.", "Çocuklar domates soslu makarnayı her şeyden çok sever.", "Children love pasta with tomato sauce above all.", ["die Pasta"], []),
    ("das Fleisch, (nur Sg.)", "et", "meat", "noun", "A1", "Er ernährt sich vegetarisch und isst kein Fleisch.", "Vejetaryen besleniyor ve hiç et yemiyor.", "He is vegetarian and eats no meat.", [], ["das Gemüse"]),
    ("das Hähnchen, -", "tavuk eti, piliç", "chicken", "noun", "A1", "Heute gibt es knusprig gebratenes Hähnchen mit Pommes.", "Bugün patates kızartması ile çıtır kızarmış tavuk var.", "Today there is crispy fried chicken with fries.", ["das Huhn"], []),
    ("das Rindfleisch, (nur Sg.)", "sığır eti, dana eti", "beef", "noun", "A2", "Für die kräftige Suppe verwenden wir frisches Rindfleisch.", "Kuvvetli çorba için taze sığır eti kullanıyoruz.", "For the hearty soup we use fresh beef.", [], []),
    ("der Fisch, -e", "balık", "fish", "noun", "A1", "Freitags essen wir am liebsten frischen Fisch.", "Cuma günleri en çok taze balık yemeyi severiz.", "On Fridays we prefer eating fresh fish.", [], []),
    ("das Ei, -er", "yumurta", "egg", "noun", "A1", "Zum Frühstück esse ich gerne ein gekochtes Ei.", "Kahvaltıda haşlanmış yumurta yemeyi severim.", "For breakfast I enjoy eating a boiled egg.", [], []),
    ("die Milch, (nur Sg.)", "süt", "milk", "noun", "A1", "Trinken Sie den Kaffee mit kalter Milch?", "Kahveyi soğuk sütle mi içersiniz?", "Do you drink the coffee with cold milk?", [], []),
    ("die Butter, (nur Sg.)", "tereyağı", "butter", "noun", "A1", "Streich bitte etwas Butter auf das Brot!", "Ekmeğin üzerine lütfen biraz tereyağı sür!", "Please spread some butter on the bread!", [], []),
    ("der Käse, -", "peynir", "cheese", "noun", "A1", "In Frankreich gibt es Hunderte leckere Käsesorten.", "Fransa'da yüzlerce lezzetli peynir çeşidi vardır.", "In France there are hundreds of delicious cheese types.", [], []),
    ("das Brot, -e", "ekmek", "bread", "noun", "A1", "Deutsches Brot ist weltberühmt für seine Vielfalt.", "Alman ekmeği çeşitliliğiyle dünya çapında ünlüdür.", "German bread is world famous for its variety.", [], []),
    ("das Brötchen, -", "küçük ekmek, sandviç ekmeği", "bread roll / bun", "noun", "A1", "Morgens hole ich frische warme Brötchen vom Bäcker.", "Sabahları fırından taze sıcak sandviç ekmekleri alırım.", "In the morning I fetch fresh warm bread rolls from the baker.", ["die Semmel"], []),
    ("der Kuchen, -", "pasta, kek", "cake", "noun", "A1", "Zum Kaffee gibt es selbstgebackenen Kuchen.", "Kahvenin yanında ev yapımı kek var.", "With the coffee there is home-baked cake.", ["die Torte"], []),
    ("die Schokolade, -n", "çikolata", "chocolate", "noun", "A1", "Schweizer Schokolade ist besonders cremig und fein.", "İsviçre çikolatası son derece kremamsı ve narindir.", "Swiss chocolate is particularly creamy and fine.", [], []),
    ("das Eis, (nur Sg.)", "dondurma / buz", "ice cream / ice", "noun", "A1", "Im Sommer essen die Kinder gerne Erdbeereis.", "Yazın çocuklar çilekli dondurma yemeyi çok sever.", "In summer the children love eating strawberry ice cream.", [], []),
    ("der Kaffee, -s", "kahve", "coffee", "noun", "A1", "Ein Tasse heißer Kaffee am Morgen weckt die Lebensgeister.", "Sabah bir fincan sıcak kahve yaşama sevincini uyandırır.", "A cup of hot coffee in the morning awakens the spirits.", [], []),
    ("der Tee, -s", "çay", "tea", "noun", "A1", "In der Türkei trinkt man den ganzen Tag über Tee.", "Türkiye'de bütün gün boyunca çay içilir.", "In Turkey people drink tea throughout the whole day.", [], []),
    ("das Wasser, ⸚", "su", "water", "noun", "A1", "Ein Glas stilles Wasser bitte!", "Bir bardak gazsız su lütfen!", "A glass of still water please!", ["das Mineralwasser"], []),
    ("der Saft, ⸚e", "meyve suyu", "juice", "noun", "A1", "Frisch gepresster Orangensaft schmeckt fantastisch.", "Taze sıkılmış portakal suyunun tadı harikadır.", "Freshly squeezed orange juice tastes fantastic.", [], []),
    ("das Bier, -e", "bira", "beer", "noun", "A1", "Bayern ist weltweit berühmt für sein gutes Bier.", "Bavyera, kaliteli birasıyla dünya çapında ünlüdür.", "Bavaria is world famous for its good beer.", [], []),
    ("der Wein, -e", "şarap", "wine", "noun", "A1", "Zum festlichen Abendessen trinken wir einen roten Wein.", "Kutlama yemeğinde kırmızı şarap içeriz.", "For the festive dinner we drink a red wine.", [], []),
    ("das Salz, -e", "tuz", "salt", "noun", "A1", "Reichen Sie mir bitte das Salz herüber!", "Bana tuzu uzatır mısınız lütfen!", "Could you please pass me the salt!", [], []),
    ("der Pfeffer, (nur Sg.)", "karabiber, biber", "pepper", "noun", "A1", "Die Suppe verträgt noch eine Prise schwarzen Pfeffer.", "Çorba bir tutam daha karabiber kaldırır.", "The soup can take another pinch of black pepper.", [], []),
    ("der Zucker, (nur Sg.)", "şeker", "sugar", "noun", "A1", "Trinkst du deinen Tee mit oder ohne Zucker?", "Çayını şekerli mi şekersiz mi içersin?", "Do you drink your tea with or without sugar?", [], []),
    ("das Öl, -e", "sıvı yağ", "oil", "noun", "A1", "Für den frischen Salat verwenden wir feines Olivenöl.", "Taze salata için kaliteli zeytinyağı kullanıyoruz.", "For the fresh salad we use fine olive oil.", [], []),
    ("der Essig, -e", "sirke", "vinegar", "noun", "A2", "Öl und Essig gehören in jedes traditionelle Salatdressing.", "Yağ ve sirke her geleneksel salata sosunda yer alır.", "Oil and vinegar belong in every traditional salad dressing.", [], [])
]

print(f"Loaded {len(NOUNS_DAILY_LIFE)} daily life nouns.")
