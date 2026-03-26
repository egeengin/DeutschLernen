# generate_ws.py
import os

EN_FILE = r"C:\Private\DeutschLernen\TELC_B1_Preparation\review_writing_speaking.md"
TR_FILE = r"C:\Private\DeutschLernen\TELC_B1_Hazırlık\review_writing_speaking.md"

en_content = """# Review: Schreiben & Sprechen (Writing & Speaking)

______________________________________________________________________

## 1. Schreiben (Writing) — 30 min, 2 Parts

The official **telc Deutsch A2-B1** Writing Exam ALWAYS consists of two parts:
* **Teil 1:** A short, informal "Chat" or "Kurznachricht" (30-40 words).
* **Teil 2:** A formal or semi-formal E-Mail (70-80 words).

### The 4 Rules for Full Points
1. ✅ Address **ALL bullet points** from the prompt (usually 3 per task). If you miss one, you lose severe points.
2. ✅ Use correct **greeting** and **closing** based on the relationship (Informal for Chat, Formal for E-Mail).
3. ✅ Use at least 2-3 **connectors** (deshalb, außerdem, weil, dass).
4. ✅ Respect word limits. Writing too little guarantees a penalty.

### Letter & Chat Templates

#### 1. Part 1: Informal Chat (Die Kurznachricht) - *New in telc A2-B1!*
You usually write to a friend on WhatsApp about an upcoming meeting or apologizing.
```text
Hallo [Name],
wie geht es dir? 
Es tut mir leid, aber ich kann morgen leider nicht kommen, weil [Reason/Point 1].
Können wir uns am [New Day/Time] treffen? [Point 2]
Bitte melde dich!
Liebe Grüße
[Your First Name]
```

#### 2. Part 2: Job Application (Die Bewerbung) - *Sehr Wichtig!*
Replying to a job ad is extremely common in telc Deutsch A2-B1.

```text
Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihre Anzeige im Internet gelesen.
Ich schreibe Ihnen diese E-Mail, weil ich mich um die Stelle als [Job Title] bewerben möchte.
... [Point 1: Describe your experience]
Außerdem möchte ich Sie fragen, wie die Arbeitszeiten sind. [Point 2]
Ich habe Erfahrung in diesem Bereich, weil ich in meiner Heimat als [Job Title] gearbeitet habe. [Point 3]
Über eine Einladung zu einem persönlichen Gespräch würde ich mich sehr freuen. [Point 4]

Vielen Dank im Voraus für Ihre Antwort.

Mit freundlichen Grüßen
[Your First Last Name]
```

#### 2. Formal Complaint / Unknown Person (Die Beschwerde)
Use this if you ordered something broken, or you are angry at a company.
```text
Sehr geehrte Damen und Herren,

ich schreibe Ihnen, weil ich am [Date] [Item] bei Ihnen gekauft habe und es leider ein großes Problem gibt.
... [Point 1 & 2]
Außerdem möchte ich Sie darauf hinweisen, dass... [Point 3]
Deshalb erwarte ich, dass Sie mir mein Geld zurückgeben oder mir einen Ersatz schicken. [Point 4]

Ich hoffe auf eine schnelle und positive Antwort.
Vielen Dank im Voraus.

Mit freundlichen Grüßen
[Your First Last Name]
```

#### 3. Semi-Formal Apology (Entschuldigung)
Use this if you can't attend an appointment, a course, or work.
```text
Sehr geehrte(r) Frau/Herr [Name],

ich hoffe, es geht Ihnen gut.
Ich schreibe Ihnen diese E-Mail, um mich zu entschuldigen.
Leider kann ich am [Date] nicht zu unserem Termin kommen, weil ich plötzlich krank geworden bin.
... [Details for Point 1 & 2]
Könnten wir den Termin vielleicht auf nächste Woche verschieben? [Point 3]
Es wäre toll, wenn Sie mir kurz Bescheid geben könnten. [Point 4]

Vielen Dank für Ihr Verständnis.

Mit freundlichen Grüßen
[Your First Last Name]
```

#### 4. Informal Invitation (Einladung)
Use this when writing to a friend to organize a party or trip.
```text
Liebe(r) [Name],

wie geht es dir? Mir geht es super!
Ich schreibe dir heute, weil ich am Wochenende eine große Party feiere und dich herzlich einladen möchte!
... [Point 1 & 2]
Wir könnten auch zusammen etwas kochen, wenn du Lust hast. [Point 3]
Bitte gib mir bis Freitag Bescheid, ob du kommen kannst. [Point 4]

Ich freue mich sehr auf dich!
Liebe Grüße
[Your First Name]
```

______________________________________________________________________

## 2. Interactive Letter Practice

Let's test if you can choose the correct formal/informal phrases.

<div class="md-quiz" 
  data-question="You are writing an email to 'Herr Müller', your child's teacher. Which greeting is correct?" 
  data-options="Lieber Herr Müller,|Sehr geehrter Herr Müller,|Hallo Müller," 
  data-answer="1" 
  data-explain="Teachers require semi-formal respect. 'Sehr geehrter Herr Müller,' is the perfect opening. 'Lieber' is too informal, and 'Hallo Müller' is outright offensive in German business culture!"></div>

<div class="md-quiz" 
  data-question="You want to end a formal letter to a company. Which closing is correct?" 
  data-options="Liebe Grüße,|Mit freundlichen Grüßen|Dein Tom" 
  data-answer="1" 
  data-explain="Formal letters always end with 'Mit freundlichen Grüßen'. Note that there is historically NO COMMA after 'Grüßen'."></div>

<div class="md-quiz" 
  data-question="You are asking a company for a refund. What is the best B1 phrasing?" 
  data-options="Ich will mein Geld.|Könnten Sie mir bitte mein Geld zurückerstatten?|Geben Sie mir Geld sofort." 
  data-answer="1" 
  data-explain="'Könnten Sie' uses the polite Konjunktiv II. The other two sound exceptionally aggressive and uneducated, which loses you points."></div>

______________________________________________________________________

## 3. Sprechen (Speaking) — 15 min, Partners

The speaking exam is done with a partner and has 3 parts:

### Part 1: Sich vorstellen (Introduce yourself)
You must talk about Name, Age, Country, Residence, Job, Languages.
**🛑 YOUTUBE EXAMINER TIP:** Do NOT just say simple sentences. You must add detail to prove B1 fluency.
- **Fail:** "Ich heiße Ali. Ich bin 30 Jahre alt."
- **Pass (B1):** "Ich heiße Ali und ich komme aus der Türkei, aber **seit drei Jahren lebe ich** mit meiner Familie in Berlin."

### Part 2: Gemeinsam etwas planen (Planning Together)
You and your partner must plan a party, a trip, or buy a gift. You get bullet points on what to decide.
**🛑 YOUTUBE EXAMINER TIP:** The examiners want to see you **react** to your partner. Do not read a monolog!

| Function | Phrases (Redemittel) |
| --- | --- |
| **Making a suggestion** | *Ich schlage vor, dass... / Wie wäre es, wenn wir...? / Wollen wir vielleicht...?* |
| **Agreeing** | *Das ist eine tolle Idee! / Ja, damit bin ich einverstanden. / Genau!* |
| **Disagreeing** | *Das finde ich nicht so gut... / Vielleicht wäre es besser, wenn...* |

### Part 3: Meinung äußern / Diskutieren (Discussing a Topic)
You discuss a topic or react to a statement/picture. 
**🛑 YOUTUBE EXAMINER TIP:** Always relate the topic to your own home country!
* *In meinem Heimatland ist das anders... Bei uns machen wir das so...*

<div class="md-quiz" 
  data-question="Your partner suggests buying flowers for the teacher, but you think a book is better. How do you respond?" 
  data-options="Nein, Blumen sind dumm.|Blumen sind schön, aber ein Buch wäre vielleicht noch besser, weil...|Ich will ein Buch kaufen." 
  data-answer="1" 
  data-explain="Option B uses polite disagreement and the Konjunktiv II ('wäre'). Giving a reason ('weil') is also required for high B1 marks."></div>

<div class="md-quiz" 
  data-question="You need to suggest a meeting time. Which is the best formulation?" 
  data-options="Wir treffen uns um 8.|Wann treffen wir uns?|Wie wäre es, wenn wir uns am Samstag um 14 Uhr treffen?" 
  data-answer="2" 
  data-explain="'Wie wäre es, wenn...' is a classic B1 suggestion construct. It shows high grammatical competence."></div>

______________________________________________________________________

## References
* **telc Deutsch A2-B1 Official Portal:** [telc.net/sprachpruefungen](https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-a2b1/)
* **Goethe-Institut Preparation:** [goethe.de B1 exams](https://www.goethe.de/de/spr/kup/prf/prf/gb1/ueb.html)
* **YouTube B1 Speaking Tips:** [Deutsch Lernen mit der DW](https://learngerman.dw.com/) and specific "telc B1 Sprechen" exam walkthroughs.
"""

tr_content = """# İnceleme: Yazma ve Konuşma (Schreiben & Sprechen)

______________________________________________________________________

## 1. Yazma (Schreiben) — 30 Dk, 2 Bölüm

Resmi **telc Deutsch A2-B1** Yazma Sınavı DAİMA iki bölümden oluşur:
* **Teil 1:** Kısa ve gayri resmi bir "Chat" veya "Kurznachricht" (Kısa mesaj) (30-40 kelime).
* **Teil 2:** Resmi veya yarı resmi bir E-posta (70-80 kelime).

### Tam Puan Almak İçin 4 Altın Kural
1. ✅ Soruda verilen **TÜM maddelere (genelde her görev için 3 madde)** değinin. Birini bile atlarsanız ciddi puan kaybedersiniz.
2. ✅ Muhatabınıza uygun doğru bir **selamlama** ve **kapanış** kullanın (Chat için samimi, E-posta için resmi).
3. ✅ En az 2-3 tane **bağlaç** (deshalb, außerdem, weil, dass) kullanın. Kısa, basit cümleleri art arda sıralamayın.
4. ✅ Kelime sınırlarına uyun. Eksik kelime kesin puan cezası demektir.

### Şablonlar: Chat ve E-Posta

#### 1. Bölüm 1: Samimi Chat (Die Kurznachricht) - *telc A2-B1'in Farkı!*
Genellikle WhatsApp üzerinden bir arkadaşınıza buluşma veya özür mesajı yazarsınız.
```text
Hallo [İsim],
wie geht es dir? 
Es tut mir leid, aber ich kann morgen leider nicht kommen, weil [Mazeretiniz/Madde 1].
Können wir uns am [Yeni Gün/Saat] treffen? [Madde 2]
Bitte melde dich!
Liebe Grüße
[Sadece Adınız]
```

#### 2. Bölüm 2: İş Başvurusu (Die Bewerbung) - *Çok Önemli!*
telc Deutsch A2-B1 sınavında bir iş ilanına e-posta ile başvurmak çok yaygındır.
```text
Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihre Anzeige im Internet gelesen.
Ich schreibe Ihnen diese E-Mail, weil ich mich um die Stelle als [Meslek Adı] bewerben möchte.
... [Madde 1: Tecrübenizi anlatın]
Außerdem möchte ich Sie fragen, wie die Arbeitszeiten sind. [Madde 2]
Ich habe Erfahrung in diesem Bereich, weil ich in meiner Heimat als [Meslek Adı] gearbeitet habe. [Madde 3]
Über eine Einladung zu einem persönlichen Gespräch würde ich mich sehr freuen. [Madde 4]

Vielen Dank im Voraus für Ihre Antwort.

Mit freundlichen Grüßen
[Adınız Soyadınız]
```

#### 2. Resmi Şikayet / Tanınmayan Kişi (Die Beschwerde)
Bozuk bir ürün geldiğinde veya bir şirkete kızdığınızda bunu kullanın.
```text
Sehr geehrte Damen und Herren,

ich schreibe Ihnen, weil ich am [Tarih] [Ürün] bei Ihnen gekauft habe und es leider ein großes Problem gibt.
... [Madde 1 & 2]
Außerdem möchte ich Sie darauf hinweisen, dass... [Madde 3]
Deshalb erwarte ich, dass Sie mir mein Geld zurückgeben oder mir einen Ersatz schicken. [Madde 4]

Ich hoffe auf eine schnelle und positive Antwort.
Vielen Dank im Voraus.

Mit freundlichen Grüßen
[Adınız Soyadınız]
```

#### 3. Yarı Resmi Özür (Entschuldigung)
Bir kursa, işe veya randevuya gidemeyeceğiniz durumlarda bunu kullanın.
```text
Sehr geehrte(r) Frau/Herr [İsim],

ich hoffe, es geht Ihnen gut.
Ich schreibe Ihnen diese E-Mail, um mich zu entschuldigen.
Leider kann ich am [Tarih] nicht zu unserem Termin kommen, weil ich plötzlich krank geworden bin.
... [Madde 1 & 2 için detaylar]
Könnten wir den Termin vielleicht auf nächste Woche verschieben? [Madde 3]
Es wäre toll, wenn Sie mir kurz Bescheid geben könnten. [Madde 4]

Vielen Dank für Ihr Verständnis.

Mit freundlichen Grüßen
[Adınız Soyadınız]
```

#### 4. Samimi Davet (Einladung)
Bir arkadaşınıza parti veya gezi düzenlemek için yazdığınızda kullanın.
```text
Liebe(r) [İsim],

wie geht es dir? Mir geht es super!
Ich schreibe dir heute, weil ich am Wochenende eine große Party feiere und dich herzlich einladen möchte!
... [Madde 1 & 2]
Wir könnten auch zusammen etwas kochen, wenn du Lust hast. [Madde 3]
Bitte gib mir bis Freitag Bescheid, ob du kommen kannst. [Madde 4]

Ich freue mich sehr auf dich!
Liebe Grüße
[Sadece Adınız]
```

______________________________________________________________________

## 2. İnteraktif Mektup Pratiği

Resmi ve samimi kalıpları ne kadar iyi ayırt edebildiğinizi test edelim.

<div class="md-quiz" 
  data-question="Çocuğunuzun öğretmeni 'Herr Müller'e bir e-posta yazıyorsunuz. Doğru selamlama hangisidir?" 
  data-options="Lieber Herr Müller,|Sehr geehrter Herr Müller,|Hallo Müller," 
  data-answer="1" 
  data-explain="Öğretmenler yarı resmi bir saygı gerektirir. 'Sehr geehrter Herr Müller,' mükemmel bir açılıştır. 'Lieber' fazla samimidir, ve 'Hallo Müller' Alman kültüründe son derece kabadır!"></div>

<div class="md-quiz" 
  data-question="Bir şirkete yazdığınız resmi bir mektubu bitirmek istiyorsunuz. Hangi kapanış doğrudur?" 
  data-options="Liebe Grüße,|Mit freundlichen Grüßen|Dein Tom" 
  data-answer="1" 
  data-explain="Resmi mektuplar DAİMA 'Mit freundlichen Grüßen' ile biter. Dikkat: Almanca'da bu cümlenin sonuna İngilizcedeki gibi VİRGÜL KONMAZ!"></div>

<div class="md-quiz" 
  data-question="Bir şirketten para iadesi istiyorsunuz. En iyi B1 seviyesi ifade hangisidir?" 
  data-options="Ich will mein Geld. (Paramı istiyorum.)|Könnten Sie mir bitte mein Geld zurückerstatten? (Acaba paramı iade etmeniz mümkün müdür?)|Geben Sie mir Geld sofort. (Bana hemen para verin.)" 
  data-answer="1" 
  data-explain="'Könnten Sie' kalıbı kibar Konjunktiv II formunu kullanır. Diğer ikisi inanılmaz derecede agresif ve düşük eğitimli görünür, sınavda puan kaybettirir."></div>

______________________________________________________________________

## 3. Konuşma (Sprechen) — 15 Dk, Partnerli

Konuşma sınavı bir partnerle birlikte yapılır ve 3 bölümden oluşur:

### Bölüm 1: Kendini Tanıtma (Sich vorstellen)
Ad, Yaş, Ülke, Şehir, Meslek, Diller hakkında konuşmalısınız.
**🛑 YOUTUBE SINAV İPUCU:** Sınav görevlileri arka arkaya robot gibi basit cümleler kuranlardan nefret eder! B1 olduğunuzu kanıtlamak için cümleleri detaylandırmalısınız!
- **Kötü:** "Ich heiße Ali. Ich bin 30 Jahre alt."
- **İyi (B1):** "Ich heiße Ali und ich komme aus der Türkei, aber **seit drei Jahren lebe ich** mit meiner Familie in Berlin." (Bağlaç kullanarak ve bir tık detay vererek)

### Bölüm 2: Gemeinsam etwas planen (Birlikte bir şey planlama)
Partnerinizle birlikte bir parti, gezi veya hediye kararı vermelisiniz.
**🛑 YOUTUBE SINAV İPUCU:** Sınav görevlilerinin görmek istedikleri en önemli şey **partnerinize TEPKİ vermenizdir**.

| İşlev | İfadeler (Redemittel) |
| --- | --- |
| **Öneri** | *Ich schlage vor, dass... / Wie wäre es, wenn wir...? / Wollen wir vielleicht...?* |
| **Onaylama** | *Das ist eine tolle Idee! / Ja, damit bin ich einverstanden. / Genau!* |
| **Reddetme** | *Das finde ich nicht so gut... / Vielleicht wäre es besser, wenn...* |

### Bölüm 3: Meinung äußern / Diskutieren (Fikir Beyan Etme veya Konu Tartışma)
Bir konu hakkında konuşur veya deneyimlerinizi paylaşırsınız.
**🛑 YOUTUBE SINAV İPUCU:** Konuyu DAİMA kendi anavatanınızla kıyaslayın!
* *In meinem Heimatland ist das anders...* (Benim ülkemde bu durum farklıdır...) 
* *Bei uns machen wir das genauso...* (Biz de aynen böyle yaparız...)

<div class="md-quiz" 
  data-question="Partneriniz öğretmene çiçek almayı öneriyor, ancak siz kitap almanın daha iyi olduğunu düşünüyorsunuz. Nasıl yanıt verirsiniz?" 
  data-options="Nein, Blumen sind dumm. (Hayır, çiçekler aptalca.)|Blumen sind schön, aber ein Buch wäre vielleicht noch besser, weil... (Çiçekler güzel, ama bir kitap belki daha iyi OLURDU çünkü...)|Ich will ein Buch kaufen. (Ben kitap almak istiyorum.)" 
  data-answer="1" 
  data-explain="B Seçeneği kibarca aynı fikirde olmamayı (Disagreement) ve Konjunktiv II ('wäre') kullanımını harmanlıyor. Üstelik 'weil' ile sebep belirtmeniz B1 sınavından çok yüksek puan almanızı sağlar."></div>

<div class="md-quiz" 
  data-question="Bir buluşma saati önermeniz gerekiyor. En iyi dil bilgisi seviyesi hangisidir?" 
  data-options="Wir treffen uns um 8. (8'de buluşuyoruz.)|Wann treffen wir uns? (Ne zaman buluşuruz?)|Wie wäre es, wenn wir uns am Samstag um 14 Uhr treffen? (Cumartesi 14:00'da buluşmaya ne dersin?)" 
  data-answer="2" 
  data-explain="'Wie wäre es, wenn...' (Aşağıdaki durumu yapsaydık nasıl olurdu...) klasik ve çok havalı bir B1 öneri kalıbıdır. Sınav görevlilerini anında etkiler."></div>

______________________________________________________________________

## Kaynaklar (References)
* **telc Deutsch A2-B1 Resmi Portal:** [telc.net/sprachpruefungen](https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-a2b1/)
* **Goethe-Institut Hazırlık:** [goethe.de B1 exams](https://www.goethe.de/de/spr/kup/prf/prf/gb1/ueb.html)
* **YouTube B1 Konuşma Tüyoları:** [Deutsch Lernen mit der DW](https://learngerman.dw.com/) ve YouTube üzerinden aratılabilecek "telc B1 Sprechen" popüler kanalları (örn: Marija, DeutschLera).
"""

with open(EN_FILE, "w", encoding="utf-8") as f:
    f.write(en_content)

with open(TR_FILE, "w", encoding="utf-8") as f:
    f.write(tr_content)
    
print("Successfully generated detailed writing/speaking files with interactive quizzes in both EN and TR!")
