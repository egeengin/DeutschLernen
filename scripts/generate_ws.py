# generate_ws.py
import os

EN_FILE = r"C:\Private\DeutschLernen\TELC_B1_Preparation\review_writing_speaking.md"
TR_FILE = r"C:\Private\DeutschLernen\TELC_B1_Hazırlık\review_writing_speaking.md"

en_content = """# Review: Schreiben & Sprechen (Writing & Speaking)

______________________________________________________________________

## 1. Schreiben (Letter / Email) — 30 min, ~100-120 words

### The 4 Rules for Full Points

1. ✅ Address **ALL 4 bullet points** from the prompt. If you miss one, you lose severe points.
2. ✅ Use correct **greeting** and **closing** based on the relationship.
3. ✅ Use at least 2-3 **connectors** (deshalb, außerdem, weil, dass).
4. ✅ Write 100-120 words. Writing under 80 words guarantees a penalty.

### Letter Templates

You must memorize these skeletons. In the exam, you just slot your 4 points into the middle.

#### 1. Formal Complaint / Unknown Person (Die Beschwerde)
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

#### 2. Semi-Formal Apology (Entschuldigung)
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

#### 3. Informal Invitation (Einladung)
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
1. **Part 1:** Introduce yourself (Name, Age, Country, Job, Hobbies, Languages). 
2. **Part 2:** Talk about a picture (Describe it, then relate it to your life).
3. **Part 3:** Plan something together with your partner (A party, a gift, a trip).

### Part 2: Picture Description Phrases
Always go from the **general** to the **specific**.
* **General:** *Auf dem Bild sehe ich [Akk]... / Das Bild zeigt [Akk]...*
* **Location:** *Im Vordergrund / Im Hintergrund / In der Mitte gibt es...*
* **Action:** *Die Leute scheinen glücklich zu sein. / Ich glaube, sie feiern einen Geburtstag, weil...*
* **Personal Experience:** *In meinem Heimatland machen wir das genauso. / Bei uns ist das anders, wir...*

### Part 3: Planning Together (The Most Important Part!)
The examiners want to see you **react** to your partner. Do not just read a monolog!

| Function | Phrases (Redemittel) |
| --- | --- |
| **Making a suggestion** | *Ich schlage vor, dass... / Wie wäre es, wenn wir...? / Wollen wir vielleicht...?* |
| **Agreeing** | *Das ist eine tolle Idee! / Ja, damit bin ich einverstanden. / Genau!* |
| **Disagreeing politely** | *Das finde ich nicht so gut, weil... / Vielleicht wäre es besser, wenn...* |
| **Asking for opinion** | *Was denkst du darüber? / Bist du damit einverstanden?* |

<div class="md-quiz" 
  data-question="Your partner suggests buying flowers for the teacher, but you think a book is better. How do you respond?" 
  data-options="Nein, Blumen sind dumm.|Blumen sind schön, aber ein Buch wäre vielleicht noch besser, weil...|Ich will ein Buch kaufen." 
  data-answer="1" 
  data-explain="Option B uses polite disagreement and the Konjunktiv II ('wäre'). Giving a reason ('weil') is also required for high B1 marks."></div>

<div class="md-quiz" 
  data-question="You need to suggest a meeting time. Which is the best B1 formulation?" 
  data-options="Wir treffen uns um 8.|Wann treffen wir uns?|Wie wäre es, wenn wir uns am Samstag um 14 Uhr treffen?" 
  data-answer="2" 
  data-explain="'Wie wäre es, wenn...' is a classic B1 suggestion construct. It shows high grammatical competence."></div>
"""

tr_content = """# İnceleme: Yazma ve Konuşma (Schreiben & Sprechen)

______________________________________________________________________

## 1. Yazma (Mektup / E-posta) — 30 dk, ~100-120 kelime

### Tam Puan Almak İçin 4 Altın Kural

1. ✅ Soruda verilen **4 maddenin (bullet points) TAMAMINA** değinin. Birini bile atlarsanız ciddi puan kaybedersiniz.
2. ✅ Muhatabınıza uygun doğru bir **selamlama** ve **kapanış** kullanın.
3. ✅ En az 2-3 tane **bağlaç** (deshalb, außerdem, weil, dass) kullanın. Kısa, basit cümleleri art arda sıralamayın.
4. ✅ 100-120 kelime arası yazın. 80 kelimenin altında yazmak kesin puan cezası demektir.

### Mektup Şablonları

Bu iskeletleri ezberlemelisiniz. Sınavda beyninizi yormadan, sadece 4 maddenizi bu şablonların ortasına yerleştireceksiniz.

#### 1. Resmi Şikayet / Tanınmayan Kişi (Die Beschwerde)
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

#### 2. Yarı Resmi Özür (Entschuldigung)
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

#### 3. Samimi Davet (Einladung)
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
1. **Bölüm 1:** Kendinizi tanıtın (Ad, Yaş, Ülke, Meslek, Hobiler, Diller). Sınav gözetmeni size ekstra bir soru soracaktır.
2. **Bölüm 2:** Bir resim hakkında konuşun (Resmi tarif edin, ardından kendi hayatınızla ilişkilendirin).
3. **Bölüm 3:** Partnerinizle birlikte bir şey planlayın (Tatilde gezi, öğretmen için hediye vb.).

### Bölüm 2: Resim Tarif Etme Kalıpları
Her zaman **genelden özele** doğru gidin.
* **Genel:** *Auf dem Bild sehe ich [Akk]... / Das Bild zeigt [Akk]...* (Resimde ... görüyorum / Resim ... gösteriyor)
* **Konum:** *Im Vordergrund / Im Hintergrund / In der Mitte gibt es...* (Ön planda / Arka planda / Ortada ... var)
* **Eylem:** *Die Leute scheinen glücklich zu sein. / Ich glaube, sie feiern einen Geburtstag, weil...* (İnsanlar mutlu görünüyor. / Sanırım doğum günü kutluyorlar çünkü...)
* **Kişisel Deneyim (Zorunlu!):** *In meinem Heimatland machen wir das genauso. / Bei uns ist das anders, wir...* (Benim ülkemde biz de aynısını yaparız. / Bizde bu farklıdır, biz...)

### Bölüm 3: Birlikte Plan Yapma (Sınavın En Önemli Kısmı!)
Sınav görevlilerinin görmek istedikleri en önemli şey **partnerinize TEPKİ vermenizdir**. Sakın ezberlediğiniz uzun cümleleri bir monolog gibi okumayın! Dinleyin, tepki verin, kendi fikrinizi ekleyin.

| İşlev | İfadeler (Redemittel) |
| --- | --- |
| **Bir öneride bulunurken** | *Ich schlage vor, dass... / Wie wäre es, wenn wir...? / Wollen wir vielleicht...?* |
| **Aynı fikirdeyken** | *Das ist eine tolle Idee! / Ja, damit bin ich einverstanden. / Genau!* |
| **Kibarca reddederken** | *Das finde ich nicht so gut, weil... / Vielleicht wäre es besser, wenn...* |
| **Fikir sorarken** | *Was denkst du darüber? / Bist du damit einverstanden?* |

<div class="md-quiz" 
  data-question="Partneriniz öğretmene çiçek almayı öneriyor, ancak siz kitap almanın daha iyi olduğunu düşünüyorsunuz. Nasıl yanıt verirsiniz?" 
  data-options="Nein, Blumen sind dumm. (Hayır, çiçekler aptalca.)|Blumen sind schön, aber ein Buch wäre vielleicht noch besser, weil... (Çiçekler güzel, ama bir kitap belki daha iyi OLURDU çünkü...)|Ich will ein Buch kaufen. (Ben kitap almak istiyorum.)" 
  data-answer="1" 
  data-explain="B Seçeneği kibarca aynı fikirde olmamayı (Disagreement) ve Konjunktiv II ('wäre') kullanımını harmanlıyor. Üstelik 'weil' ile sebep belirtmeniz B1 sınavından çok yüksek puan almanızı sağlar."></div>

<div class="md-quiz" 
  data-question="Bir buluşma saati önermeniz gerekiyor. En iyi B1 dil bilgisi seviyesi hangisidir?" 
  data-options="Wir treffen uns um 8. (8'de buluşuyoruz.)|Wann treffen wir uns? (Ne zaman buluşuruz?)|Wie wäre es, wenn wir uns am Samstag um 14 Uhr treffen? (Cumartesi 14:00'da buluşmaya ne dersin?)" 
  data-answer="2" 
  data-explain="'Wie wäre es, wenn...' (Aşağıdaki durumu yapsaydık nasıl olurdu...) klasik ve çok havalı bir B1 öneri kalıbıdır. Sınav görevlilerini anında etkiler."></div>
"""

with open(EN_FILE, "w", encoding="utf-8") as f:
    f.write(en_content)

with open(TR_FILE, "w", encoding="utf-8") as f:
    f.write(tr_content)
    
print("Successfully generated detailed writing/speaking files with interactive quizzes in both EN and TR!")
