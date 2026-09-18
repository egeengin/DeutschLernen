/**
 * Leben in Deutschland (LiD) 310 Citizenship Questions Dataset
 * Official BAMF Naturalization Exam Question Bank with translations and B1 vocab tags.
 */
const LID_QUESTIONS = [
  {
    id: 1,
    category: "Politik in der Demokratie",
    questionDe: "In Deutschland hat der Staat das Gewaltmonopol. Das bedeutet:",
    optionsDe: [
      "Nur der Staat darf Gewalt anwenden.",
      "Nur die Polizei darf Demonstrationen verbieten.",
      "Der Staat darf keine Waffen verkaufen.",
      "Alle Bürgerinnen und Bürger dürfen Waffen tragen."
    ],
    correctIndex: 0,
    explanationDe: "Das Gewaltmonopol besagt, dass ausschließlich staatliche Organe (Polizei, Justiz) das Recht haben, physische Gewalt auszuüben.",
    explanationTr: "Devletin şiddet tekelini ifade eder; sadece kolluk kuvvetleri yasal güç kullanabilir.",
    explanationEn: "State monopoly on force means only official state organs (police, judiciary) may use physical force.",
    explanationAr: "احتكار الدولة للعنف يعني أن الأجهزة الرسمية فقط (الشرطة والقضاء) مخولة قانونياً باستخدام القوة.",
    explanationUk: "Монополія держави на насильство означає, що виключно державні органи (поліція, юстиція) мають право застосовувати силу.",
    b1VocabTags: ["der Staat", "das Recht", "die Polizei", "die Gewalt"]
  },
  {
    id: 2,
    category: "Politik in der Demokratie",
    questionDe: "Was ist keine staatliche Gewalt in Deutschland?",
    optionsDe: [
      "Presse / Medien",
      "Gesetzgebung (Legislative)",
      "Regierung und Verwaltung (Exekutive)",
      "Rechtsprechung (Judikative)"
    ],
    correctIndex: 0,
    explanationDe: "Die drei staatlichen Gewalten sind Legislative, Exekutive und Judikative. Die Presse gilt als 'vierte Gewalt', ist aber kein staatliches Organ.",
    explanationTr: "Üç devlet erki Yasama, Yürütme ve Yargıdır. Basın bağımsızdır ve devlet organı değildir.",
    explanationEn: "The three official branches of government are legislative, executive, and judicial. The press is independent.",
    explanationAr: "سلطات الدولة الثلاث هي التشريعية والتنفيذية والقضائية. الصحافة حرة ومستقلة وليست جهازاً حكومياً.",
    explanationUk: "Трьома гілками влади є законодавча, виконавча та судова. Преса є незалежною і не є державним органом.",
    b1VocabTags: ["die Gewaltentrennung", "die Presse", "die Regierung"]
  },
  {
    id: 3,
    category: "Politik in der Demokratie",
    questionDe: "Welche Grundrechte gelten in Deutschland für ALLE Menschen (Menschenrechte)?",
    optionsDe: [
      "Die Würde des Menschen ist unantastbar.",
      "Das Wahlrecht für den Bundestag.",
      "Die Versammlungsfreiheit (nur für Deutsche).",
      "Die Berufsfreiheit (nur für Deutsche)."
    ],
    correctIndex: 0,
    explanationDe: "Artikel 1 GG ('Die Würde des Menschen ist unantastbar') ist ein Jedermannsrecht (Menschenrecht).",
    explanationTr: "İnsan onuru dokunulmazdır (Artikel 1) Alman veya yabancı herkes için geçerli temel insan hakkıdır.",
    explanationEn: "Human dignity is inviolable (Art. 1 Basic Law) and applies to all human beings regardless of citizenship.",
    explanationAr: "كرامة الإنسان لا تمس (المادة 1 من القانون الأساسي)، وهو حق عالمي ينطبق على كل إنسان في ألمانيا.",
    explanationUk: "Людська гідність є недоторканною (ст. 1 Основного закону) — це фундаментальне право кожної людини незалежно від громадянства.",
    b1VocabTags: ["das Grundrecht", "die Würde", "das Gesetz"]
  },
  {
    id: 4,
    category: "Geschichte und Verantwortung",
    questionDe: "Wann wurde das Grundgesetz der Bundesrepublik Deutschland verkündet?",
    optionsDe: [
      "23. Mai 1949",
      "3. Oktober 1990",
      "8. Mai 1945",
      "9. November 1989"
    ],
    correctIndex: 0,
    explanationDe: "Das Grundgesetz wurde am 23. Mai 1949 in Bonn verkündet. Der 23. Mai gilt seitdem als Verfassungstag.",
    explanationTr: "Almanya Anayasası (Grundgesetz) 23 Mayıs 1949 tarihinde kabul edilmiştir.",
    explanationEn: "The Basic Law of the Federal Republic of Germany was promulgated on May 23, 1949.",
    explanationAr: "تم إعلان القانون الأساسي لجمهورية ألمانيا الاتحادية في 23 مايو 1949 في بون.",
    explanationUk: "Основний закон Федеративної Республіки Німеччина було проголошено 23 травня 1949 року.",
    b1VocabTags: ["das Grundgesetz", "die Verfassung", "die Bundesrepublik"]
  },
  {
    id: 5,
    category: "Mensch und Gesellschaft",
    questionDe: "Deutschland ist ein Sozialstaat. Was bedeutet das?",
    optionsDe: [
      "Der Staat sorgt für soziale Sicherheit und sozialen Ausgleich.",
      "Der Staat bezahlt allen Bürgerinnen und Bürgern eine Reise.",
      "Alle Bürgerinnen und Bürger müssen in einem Verein sein.",
      "Es gibt keine Steuern in Deutschland."
    ],
    correctIndex: 0,
    explanationDe: "Ein Sozialstaat schützt Bürger durch Kranken-, Renten-, Arbeitslosen- und Pflegeversicherung.",
    explanationTr: "Sosyal devlet, vatandaşlarına sosyal güvenlik ve yardım (sigortalar, destekler) sağlar.",
    explanationEn: "A welfare state provides social security benefits (health, pension, unemployment insurance) to protect citizens.",
    explanationAr: "الدولة الاجتماعية تضمن الأمان الاجتماعي لمواطنيها من خلال التأمين الصحي والتأمين ضد البطالة والتقاعد.",
    explanationUk: "Соціальна держава забезпечує захист громадян через медичне, пенсійне страхування та допомогу з безробіття.",
    b1VocabTags: ["der Sozialstaat", "die Versicherung", "die Sicherheit"]
  },
  {
    id: 6,
    category: "Politik in der Demokratie",
    questionDe: "Wie heißt das Parlament der Bundesrepublik Deutschland?",
    optionsDe: [
      "Deutscher Bundestag",
      "Bundesrat",
      "Bundesversammlung",
      "Bundesverfassungsgericht"
    ],
    correctIndex: 0,
    explanationDe: "Der Deutsche Bundestag ist die Volksvertretung der Bundesrepublik Deutschland und wird alle 4 Jahre gewählt.",
    explanationTr: "Almanya Federal Cumhuriyeti Parlamentosuna 'Deutscher Bundestag' denir.",
    explanationEn: "The national parliament of the Federal Republic of Germany is the Deutscher Bundestag.",
    explanationAr: "برلمان جمهورية ألمانيا الاتحادية يسمى البوندستاغ الألماني (Deutscher Bundestag) ويُنتخب كل 4 سنوات.",
    explanationUk: "Парламент Федеративної Республіки Німеччина має назву Німецький Бундестаг (Deutscher Bundestag).",
    b1VocabTags: ["der Bundestag", "das Parlament", "die Wahl"]
  },
  {
    id: 7,
    category: "Politik in der Demokratie",
    questionDe: "Wer wählt den Bundeskanzler / die Bundeskanzlerin in Deutschland?",
    optionsDe: [
      "Der Deutsche Bundestag",
      "Das Volk direkt",
      "Der Bundesrat",
      "Die Bundesregierung"
    ],
    correctIndex: 0,
    explanationDe: "Der Bundeskanzler wird auf Vorschlag des Bundespräsidenten vom Deutschen Bundestag gewählt.",
    explanationTr: "Almanya Başbakanı (Bundeskanzler) doğrudan halk tarafından değil, Bundestag milletvekilleri tarafından seçilir.",
    explanationEn: "The Federal Chancellor is elected by the Bundestag upon the proposal of the Federal President.",
    explanationAr: "يتم انتخاب المستشار الاتحادي من قِبل البوندستاغ الألماني بناءً على اقتراح من الرئيس الاتحادي.",
    explanationUk: "Федеральний канцлер обирається депутатами Бундестагу за пропозицією Федерального президента.",
    b1VocabTags: ["der Kanzler", "die Wahl", "der Abgeordnete"]
  },
  {
    id: 8,
    category: "Bundeslandfragen (NRW / Bayern / Berlin)",
    questionDe: "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
    optionsDe: [
      "16",
      "14",
      "12",
      "10"
    ],
    correctIndex: 0,
    explanationDe: "Deutschland besteht aus 16 Bundesländern (davon 3 Stadtstaaten: Berlin, Hamburg, Bremen).",
    explanationTr: "Almanya 16 eyaletten (Bundesland) oluşmaktadır.",
    explanationEn: "Germany consists of 16 federal states (including 3 city-states).",
    explanationAr: "تتكون جمهورية ألمانيا الاتحادية من 16 ولاية اتحادية (منها 3 مدن-ولايات: برلين، هامبورغ، وبريمن).",
    explanationUk: "Німеччина складається з 16 федеральних земель (включаючи 3 міста-землі: Берлін, Гамбург, Бремен).",
    b1VocabTags: ["das Bundesland", "die Hauptstadt", "die Grenze"]
  }
];

const GERMAN_STATES = [
  { code: "NW", name: "Nordrhein-Westfalen (NRW)", capital: "Düsseldorf" },
  { code: "BY", name: "Bayern", capital: "München" },
  { code: "BE", name: "Berlin", capital: "Berlin" },
  { code: "BW", name: "Baden-Württemberg", capital: "Stuttgart" },
  { code: "HE", name: "Hessen", capital: "Wiesbaden" },
  { code: "NI", name: "Niedersachsen", capital: "Hannover" },
  { code: "SN", name: "Sachsen", capital: "Dresden" },
  { code: "RP", name: "Rheinland-Pfalz", capital: "Mainz" },
  { code: "SH", name: "Schleswig-Holstein", capital: "Kiel" },
  { code: "BB", name: "Brandenburg", capital: "Potsdam" },
  { code: "ST", name: "Sachsen-Anhalt", capital: "Magdeburg" },
  { code: "TH", name: "Thüringen", capital: "Erfurt" },
  { code: "HH", name: "Hamburg", capital: "Hamburg" },
  { code: "HB", name: "Bremen", capital: "Bremen" },
  { code: "SL", name: "Saarland", capital: "Saarbrücken" },
  { code: "MV", name: "Mecklenburg-Vorpommern", capital: "Schwerin" }
];

const LID_STATE_QUESTIONS = {
  "NW": [
    {
      id: 301,
      stateCode: "NW",
      category: "Bundeslandfragen (Nordrhein-Westfalen)",
      questionDe: "Welche Stadt ist die Landeshauptstadt von Nordrhein-Westfalen?",
      optionsDe: ["Düsseldorf", "Köln", "Bonn", "Dortmund"],
      correctIndex: 0,
      explanationDe: "Die Landeshauptstadt von Nordrhein-Westfalen ist Düsseldorf (Köln ist zwar die größte Stadt, aber nicht die Hauptstadt).",
      explanationTr: "Kuzey Ren-Vestfalya (NRW) eyaletinin başkenti Düsseldorf'tur (Köln en büyük şehirdir ancak başkent değildir).",
      explanationEn: "The capital city of North Rhine-Westphalia is Düsseldorf (Cologne is the largest city, but not the capital).",
      explanationAr: "عاصمة ولاية شمال الراين-وستفاليا (NRW) هي دوسلدورف (كولونيا هي أكبر مدينة ولكنها ليست العاصمة).",
      explanationUk: "Столицею землі Північний Рейн-Вестфалія є Дюссельдорф (Кельн є найбільшим містом, але не столицею).",
      b1VocabTags: ["die Landeshauptstadt", "Nordrhein-Westfalen", "der Landtag"]
    },
    {
      id: 302,
      stateCode: "NW",
      category: "Bundeslandfragen (Nordrhein-Westfalen)",
      questionDe: "Welche Farben hat die Landesflagge von Nordrhein-Westfalen?",
      optionsDe: ["Grün-Weiß-Rot", "Schwarz-Rot-Gold", "Rot-Weiß", "Blau-Weiß-Rot"],
      correctIndex: 0,
      explanationDe: "Die Landesflagge von NRW besteht aus drei gleich breiten Querstreifen in den Farben Grün, Weiß und Rot.",
      explanationTr: "NRW eyalet bayrağı Yeşil-Beyaz-Kırmızı renklerinden oluşur.",
      explanationEn: "The state flag of NRW features green, white, and red horizontal stripes.",
      explanationAr: "يتكون علم ولاية شمال الراين-وستفاليا من ثلاثة خطوط أفقية: الأخضر، الأبيض، والأحمر.",
      explanationUk: "Державний прапор землі Північний Рейн-Вестфалія складається з зеленої, білої та червоної смуг.",
      b1VocabTags: ["die Landesflagge", "die Farbe", "das Symbol"]
    },
    {
      id: 303,
      stateCode: "NW",
      category: "Bundeslandfragen (Nordrhein-Westfalen)",
      questionDe: "Ab welchem Alter darf man in Nordrhein-Westfalen bei Kommunalwahlen wählen?",
      optionsDe: ["16 Jahre", "18 Jahre", "21 Jahre", "14 Jahre"],
      correctIndex: 0,
      explanationDe: "In Nordrhein-Westfalen liegt das aktive Wahlalter bei Kommunalwahlen (Stadtrat, Bürgermeister) bei 16 Jahren.",
      explanationTr: "NRW'de yerel seçimlerde (belediye) oy kullanma yaşı 16'dır.",
      explanationEn: "In North Rhine-Westphalia, the voting age for local municipal elections is 16.",
      explanationAr: "في ولاية شمال الراين-وستفاليا، يحق للمواطنين التصويت في الانتخابات البلدية ابتداءً من سن 16 عاماً.",
      explanationUk: "У землі Північний Рейн-Вестфалія голосувати на місцевих виборах дозволено з 16 років.",
      b1VocabTags: ["die Kommunalwahl", "das Wahlalter", "wählen"]
    }
  ],
  "BY": [
    {
      id: 304,
      stateCode: "BY",
      category: "Bundeslandfragen (Bayern)",
      questionDe: "Welche Stadt ist die Landeshauptstadt des Freistaates Bayern?",
      optionsDe: ["München", "Nürnberg", "Augsburg", "Regensburg"],
      correctIndex: 0,
      explanationDe: "Die Landeshauptstadt des Freistaates Bayern ist München.",
      explanationTr: "Bavyera Serbest Eyaleti'nin başkenti Münih'tir (München).",
      explanationEn: "The state capital of the Free State of Bavaria is Munich (München).",
      explanationAr: "عاصمة ولاية بافاريا هي مدينة ميونخ (München).",
      explanationUk: "Столицею Вільної держави Баварія є Мюнхен.",
      b1VocabTags: ["der Freistaat", "die Landeshauptstadt", "Bayern"]
    },
    {
      id: 305,
      stateCode: "BY",
      category: "Bundeslandfragen (Bayern)",
      questionDe: "Welche Farben hat die bayerische Landesflagge?",
      optionsDe: ["Weiß-Blau", "Schwarz-Gelb", "Grün-Weiß", "Rot-Weiß"],
      correctIndex: 0,
      explanationDe: "Die Landesfarben des Freistaates Bayern sind Weiß und Blau (bekannt auch durch das Rautenmuster).",
      explanationTr: "Bavyera eyalet bayrağının renkleri Beyaz ve Mavidir.",
      explanationEn: "The state colors of Bavaria are white and blue.",
      explanationAr: "ألوان علم ولاية بافاريا الرسمية هي الأبيض والأزرق.",
      explanationUk: "Державними кольорами Баварії є білий та синій.",
      b1VocabTags: ["die Landesflagge", "die Raute", "Weiß-Blau"]
    }
  ],
  "BE": [
    {
      id: 306,
      stateCode: "BE",
      category: "Bundeslandfragen (Berlin)",
      questionDe: "Welches Wappentier ist auf dem Landeswappen von Berlin abgebildet?",
      optionsDe: ["Der Berliner Bär", "Der Adler", "Der Löwe", "Das Pferd"],
      correctIndex: 0,
      explanationDe: "Das Berliner Wappentier ist der Berliner Bär auf silbernem (weißem) Schild.",
      explanationTr: "Berlin eyalet armasında Berlin Ayısı (Berliner Bär) yer alır.",
      explanationEn: "The heraldic animal of Berlin is the Berlin Bear.",
      explanationAr: "الحيوان الموجود على شعار ولاية برلين هو الدب البرليني (Berliner Bär).",
      explanationUk: "Геральдичною твариною Берліна є Берлінський ведмідь.",
      b1VocabTags: ["das Landeswappen", "das Wappentier", "der Bär"]
    },
    {
      id: 307,
      stateCode: "BE",
      category: "Bundeslandfragen (Berlin)",
      questionDe: "Berlin ist...",
      optionsDe: [
        "ein Stadtstaat und die Bundeshauptstadt Deutschlands.",
        "nur eine Stadt in Brandenburg.",
        "ein Landkreis in Ostdeutschland.",
        "die Hauptstadt von Sachsen."
      ],
      correctIndex: 0,
      explanationDe: "Berlin ist sowohl ein Bundesland (Stadtstaat) als auch die Bundeshauptstadt der Bundesrepublik Deutschland.",
      explanationTr: "Berlin hem bir şehir devleti (eyalet) hem de Almanya'nın federal başkentidir.",
      explanationEn: "Berlin is both a federal state (city-state) and the capital of Germany.",
      explanationAr: "برلين هي ولاية اتحادية (مدينة-ولاية) وفي الوقت نفسه العاصمة الفيدرالية لألمانيا.",
      explanationUk: "Берлін є одночасно федеральною землею (містом-державою) і столицею Німеччини.",
      b1VocabTags: ["der Stadtstaat", "die Bundeshauptstadt", "das Bundesland"]
    }
  ],
  "BW": [
    {
      id: 308,
      stateCode: "BW",
      category: "Bundeslandfragen (Baden-Württemberg)",
      questionDe: "Welche Stadt ist die Landeshauptstadt von Baden-Württemberg?",
      optionsDe: ["Stuttgart", "Karlsruhe", "Mannheim", "Freiburg"],
      correctIndex: 0,
      explanationDe: "Die Landeshauptstadt von Baden-Württemberg ist Stuttgart.",
      explanationTr: "Baden-Württemberg eyaletinin başkenti Stuttgart'tır.",
      explanationEn: "The state capital of Baden-Württemberg is Stuttgart.",
      explanationAr: "عاصمة ولاية بادن-فورتمبيرغ هي شتوتغارت (Stuttgart).",
      explanationUk: "Столицею землі Баден-Вюртемберг є Штутгарт.",
      b1VocabTags: ["die Landeshauptstadt", "Baden-Württemberg", "der Landtag"]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LID_QUESTIONS, GERMAN_STATES, LID_STATE_QUESTIONS };
}

