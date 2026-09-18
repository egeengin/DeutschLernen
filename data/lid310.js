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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LID_QUESTIONS, GERMAN_STATES };
}
