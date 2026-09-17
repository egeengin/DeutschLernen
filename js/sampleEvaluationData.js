/**
 * Authentic telc Deutsch B1 Schreiben Sample Evaluation Data
 * Grounded in official telc B1 examination guidelines (Prüfungstest 1 / Zertifikat Deutsch B1).
 */
const SAMPLE_B1_EVALUATION = {
  prompt: {
    title: "telc Deutsch B1 Schriftlicher Ausdruck — Teil 1 (E-Mail / Brief)",
    type: "Informelle E-Mail an eine Freundin (Option 1)",
    timeAllowed: "30 Minuten",
    maxPoints: 45,
    incomingMessage: {
      sender: "Marianne <marianne@example.com>",
      subject: "Besuch in Deutschland / Ausflugsplanung",
      text: `Liebe/r [Name],

danke für deine nette Einladung! Ich komme dich sehr gerne besuchen, um dein Land kennenzulernen – wie du weißt, war ich ja noch nie da. Wann wäre die beste Zeit, dich zu besuchen? Ich weiß noch nicht einmal, ob es bei euch im Sommer sehr heiß wird – allzu große Hitze mag ich nämlich nicht so sehr. Und gibt es sonst noch irgendwelche Dinge, die ich wissen sollte, bevor ich diese Reise mache?

Bitte schreib mir möglichst bald, damit ich mich gut auf die Reise vorbereiten kann.

Herzliche Grüße
Marianne`
    },
    leitpunkte: [
      { id: 1, textEn: "Which trips/activities you want to do together with Marianne", textTr: "Marianne ile gemeinsam yapmak istediğiniz geziler/aktiviteler", status: "fulfilled" },
      { id: 2, textEn: "Which season is best for the travel (temperature / weather)", textTr: "Seyahat için en uygun mevsim (sıcaklık/hava durumu)", status: "fulfilled" },
      { id: 3, textEn: "What clothes she should pack for her stay", textTr: "Yanına hangi kıyafetleri alması gerektiği", status: "fulfilled" },
      { id: 4, textEn: "How she can best prepare for the journey", textTr: "Seyahate en iyi nasıl hazırlanabileceği", status: "partially_fulfilled" }
    ]
  },
  studentSubmission: {
    rawText: `Liebe Marianne,

ich habe mich sehr über deine E-Mail gefreut! Es ist super, dass du mich besuchen willst.

Die beste Jahreszeit für eine Reise nach Deutschland ist der Frühling oder der frühe Herbst. Im Juli und August kann es manchmal sehr heiß werden, aber im Mai ist das Wetter perfekt zum Wandern.

Wenn du kommst, wir können zusammen nach Berlin fahren. Dort gibt es viele Sehenswürdigkeiten. Ausserdem können wir einen Ausflug an den See machen und schwimmen gehen.

Du solltest bequeme Schuhe und eine leichte Jacke mitnehmen, weil es am Abend kühl sein kann. Für die Vorbereitung brauchst du kein Visum, aber du solltest deine Fahrkarten früh buchen, damit sie billiger sind.

Ich freue mich schon auf deinen Besuch! Write back soon!

Viele Grüße,
Ali`,
    wordCount: 124
  },
  scores: {
    rawSum: 11,
    rawMax: 15,
    multiplier: 3,
    total: 33, // (5 + 3 + 3) * 3 = 33 / 45
    maxTotal: 45,
    grade: "Gut (Passed)",
    percentage: 73.3,
    criteria: [
      {
        id: "inhalt",
        titleEn: "Kriterium I: Aufgabenbewältigung (Content & 4 Leitpunkte)",
        titleTr: "Kriterium I: Görev Tamamlama ve 4 Leitpunkt",
        rawScore: 5,
        rawMax: 5,
        finalScore: 15,
        finalMax: 15,
        ratingLetter: "A",
        status: "excellent",
        summaryEn: "Score A (5/5 pts): All 4 Leitpunkte were addressed meaningfully and clearly at B1 level. Context and situation are correctly maintained.",
        summaryTr: "A Puanı (5/5): Tüm 4 kılavuz nokta B1 seviyesine uygun ve anlamlı şekilde işlenmiş. Konum ve bağlam doğru."
      },
      {
        id: "sprache",
        titleEn: "Kriterium II: Kommunikative Gestaltung (Cohesion & Register)",
        titleTr: "Kriterium II: İletişimsel Düzen ve Bağlaçlar",
        rawScore: 3,
        rawMax: 5,
        finalScore: 9,
        finalMax: 15,
        ratingLetter: "B",
        status: "good",
        summaryEn: "Score B (3/5 pts): Good structure with salutation and closing. Solid B1 connectors (weil, dass, aber, damit, ausserdem). Brief English slip ('Write back soon!') costs Score A.",
        summaryTr: "B Puanı (3/5): Giriş-kapanış şablonu düzgün. B1 bağlaçları (weil, dass, damit) mevcut. Sonda İngilizce ifade kullanımı A puanını engelledi."
      },
      {
        id: "korrektheit",
        titleEn: "Kriterium III: Formale Richtigkeit (Grammar & Orthography)",
        titleTr: "Kriterium III: Dilbilgisi ve Doğruluk",
        rawScore: 3,
        rawMax: 5,
        finalScore: 9,
        finalMax: 15,
        ratingLetter: "B",
        status: "average",
        summaryEn: "Score B (3/5 pts): Adequate B1 grammar control under telc's 'Primat der Verständlichkeit' (comprehensibility primary). Inversion error ('Wenn du kommst, wir können...') and orthography ('Ausserdem -> Außerdem').",
        summaryTr: "B Puanı (3/5): telc'in 'Anlaşılabilirlik Önceliği' ilkesine göre yeterli gramer kontrolü. Yan cümle sonu inversiyon hatası mevcut."
      }
    ]
  },
  annotations: [
    {
      id: "ann-1",
      targetText: "Wenn du kommst, wir können zusammen nach Berlin fahren.",
      correctedText: "Wenn du kommst, können wir zusammen nach Berlin fahren.",
      type: "syntax",
      rule: "Inversion nach Nebensatz (Kriterium III)",
      explanationEn: "When a sentence starts with a subclause ('Wenn du kommst,...'), the main clause MUST start with the conjugated verb ('können wir...').",
      explanationTr: "Cümle 'Wenn du kommst,...' yan cümlesiyle başladığında, ana cümle FİİL ile başlamalıdır ('können wir...')."
    },
    {
      id: "ann-2",
      targetText: "Ausserdem",
      correctedText: "Außerdem",
      type: "spelling",
      rule: "Rechtschreibung Eszett (ß)",
      explanationEn: "After long vowels or diphthongs ('au'), standard German orthography uses 'ß' instead of 'ss'.",
      explanationTr: "Uzun seslilerden ve 'au' gibi diftonglardan sonra 'ß' yazılır."
    },
    {
      id: "ann-3",
      targetText: "Write back soon!",
      correctedText: "Schreib mir bald zurück!",
      type: "vocab",
      rule: "Register & Sprachwechsel",
      explanationEn: "English phrase in German telc B1 exam. Always use German B1 closing phrases like 'Schreib mir bald zurück!' or 'Ich warte auf deine Antwort!'.",
      explanationTr: "Almanca sınavında İngilizce kelime kullanımı. 'Schreib mir bald zurück!' gibi B1 Almanca kalıplar kullanılmalıdır."
    }
  ],
  b1Upgrades: [
    {
      original: "Wenn du kommst, wir können zusammen nach Berlin fahren. Dort gibt es viele Sehenswürdigkeiten.",
      upgrade: "Sobald du ankommst, könnten wir gemeinsam einen Tagesausflug nach Berlin unternehmen, da es dort zahlreiche historische Sehenswürdigkeiten gibt.",
      benefitEn: "Uses temporal connector 'Sobald', Konjunktiv II 'könnten', and B1 verb 'unternehmen'.",
      benefitTr: "Zaman bağlacı 'Sobald', Konjunktiv II 'könnten' ve B1 fiili 'unternehmen' içerir."
    },
    {
      original: "Du solltest bequeme Schuhe und eine leichte Jacke mitnehmen, weil es am Abend kühl sein kann.",
      upgrade: "Ich empfehle dir dringend, sowohl bequeme Wanderschuhe als auch eine Übergangsjacke einzupacken, da das Wetter abends spürbar abkühlt.",
      benefitEn: "Uses double conjunction 'sowohl... als auch' and high-scoring B1 verbs 'einpacken' and 'abkühlen'.",
      benefitTr: "İkili bağlaç 'sowohl... als auch' ve üst seviye B1 fiilleri içerir."
    }
  ],
  pricingTiers: [
    {
      id: "standard",
      name: "Standard Pro Pass",
      badge: "Most Popular",
      price: "€29",
      period: "1-Month Intensive Pass",
      credits: "30 AI Letter Grading Credits",
      features: [
        "Official telc B1 (I + II + III × 3) Scoring",
        "4 Leitpunkte Fulfillment Verification",
        "Line-by-line syntax & grammar breakdown",
        "B1 Vocabulary & Connector Suggestions",
        "Instant 15-second AI evaluation"
      ],
      ctaText: "Get Standard Pro Pass"
    },
    {
      id: "citizenship",
      name: "Citizenship Pass",
      badge: "Best Value",
      price: "€39",
      period: "B1 Pro + LiD Weak-Spot Tracker",
      credits: "40 AI Letter Grading Credits",
      features: [
        "Everything in Standard Pro Pass",
        "Leben in Deutschland (LiD) Tracker",
        "Personalized Fehlerheft (Weak-spot deck)",
        "Priority AI Processing"
      ],
      ctaText: "Get Citizenship Bundle"
    },
    {
      id: "extended",
      name: "6-Month Pass",
      badge: "Long-term Study",
      price: "€49",
      period: "6-Month Full Access",
      credits: "100 AI Letter Grading Credits",
      features: [
        "Everything in Citizenship Pass",
        "100 AI Letter Evaluations",
        "B2/C1 Decks Preview Access",
        "Dedicated Email Support"
      ],
      ctaText: "Get 6-Month Pass"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SAMPLE_B1_EVALUATION };
}
