# generate_rl.py
import os

EN_FILE = r"C:\Private\DeutschLernen\TELC_B1_Preparation\review_reading_listening.md"
TR_FILE = r"C:\Private\DeutschLernen\TELC_B1_Hazırlık\review_reading_listening.md"

en_content = """# Review: Lesen & Hören (Reading & Listening)

______________________________________________________________________

## 1. Lesen (Reading) — 45 Min, 4 Parts

### Essential Strategies

1. **Read the question FIRST**, then scan the text for keywords. Never read the long texts first.
2. For the matching section: cross out used answers immediately.
3. Don't panic over unknown words. Use the context and focus on the **general meaning**.
4. Time Management: Spend **max 90 seconds** per True/False item, and **max 2 minutes** per multiple-choice item.

### Key Skill: Synonym Recognition

The text and the question will almost ALWAYs use DIFFERENT words for the same thing to test your vocabulary breadth:

| Text says... | Question/answer says... |
| --- | --- |
| kostenlos / gratis | ohne Bezahlung / kostet nichts |
| Kinder | Nachwuchs / die Kleinen |
| Arzt / Krankenhaus | medizinische Hilfe |
| kaufen / einkaufen | erwerben / besorgen |
| Rabatt / billiger | Ermäßigung / Reduzierung |
| Wohnung | Unterkunft |
| anrufen | telefonieren / sich melden |
| Arbeit | Beruf / Stelle / Job |
| Wochenende | Samstag und Sonntag |
| täglich | jeden Tag / von Montag bis Sonntag |

### Tricky Exam Phrasing
Test creators love to use negation and quantities to trick you:

| Tricky phrase | What it really means |
| --- | --- |
| nicht alle | some, but not all (NOT: none) |
| kaum / fast nie | barely / hardly (NOT: never) |
| nur manchmal | only sometimes (NOT: often) |
| immer noch nicht | still not (emphasizes ongoing absence) |
| erst | not until / only then |
| außerdem | in addition (adds, doesn't contrast) |

______________________________________________________________________

## 2. Interactive Reading Practice

Test your synonym and logic recognition with these telc Deutsch A2-B1 style reading questions.

### Reading 1: True / False (Richtig/Falsch)

**Text:** "Immer mehr Erwachsene in Deutschland arbeiten im Homeoffice. Seit 2020 hat sich die Zahl der Heimarbeiter fast verdoppelt. Eine aktuelle Studie der Universität Köln zeigt, dass 65% der Arbeitnehmer im Homeoffice produktiver sind. Allerdings klagen einige über Einsamkeit und berichten, dass ihnen der direkte Kontakt zu Kollegen im Alltag fehlt."

<div class="md-quiz" 
  data-question="Vor 2020 haben weniger Menschen von zu Hause gearbeitet." 
  data-options="Richtig|Falsch" 
  data-answer="0" 
  data-explain="Richtig! The text says 'Seit 2020 hat sich die Zahl fast verdoppelt' (since 2020 the number doubled). This logically means there were fewer before 2020."></div>

<div class="md-quiz" 
  data-question="Die meisten Heimarbeiter fühlen sich zu Hause weniger produktiv." 
  data-options="Richtig|Falsch" 
  data-answer="1" 
  data-explain="Falsch! The text says '65% ... sind produktiver'. 65% is a majority (die meisten), but they are MORE productive, not less (weniger)."></div>

<div class="md-quiz" 
  data-question="Niemand vermisst die Arbeit im Büro." 
  data-options="Richtig|Falsch" 
  data-answer="1" 
  data-explain="Falsch! The text says 'einige klagen über Einsamkeit' (some complain about loneliness) and miss contact with colleagues. 'Niemand' (no one) is a trap word!"></div>

### Reading 2: Matching Advertisements (Teil 1)

Find the right advertisement for the person. 
**Situation:** "Tom sucht einen Nebenjob für das Wochenende, weil er unter der Woche studiert."

<div class="md-quiz" 
  data-question="Which advertisement fits Tom?" 
  data-options="A: Pizzeria Roma sucht Kellner für Fr + Sa, 17-23 Uhr. Erfahrung nicht nötig.|B: Suchen dringend Verkäufer(in) für Bäckerei. Mo-Fr 06:00-14:00 Uhr.|C: Nachhilfelehrer gesucht: Mathe Klasse 8, jeden Mittwochnachmittag." 
  data-answer="0" 
  data-explain="Tom needs a weekend job (Wochenende). Ad A is 'Fr + Sa' (Friday and Saturday). Ad B is Mon-Fri. Ad C is Wednesday."></div>

______________________________________________________________________

## 3. Hören (Listening) — ~35 Min, 5 Parts

### Essential Strategies

1. **Use the reading time:** When the announcer is explaining the rules rules, ignore them! Use that time to quickly read the questions and underline keywords.
2. **Listen for synonyms:** Just like reading, you will hear a synonym, not the exact word written on the test paper.
3. **Beware of distractors:** Often, all three options (A, B, C) will be mentioned in the audio! You must listen for the *context*, not just the word.
4. **Second chance:** Audio pieces in Parts 1 and 3 are played TWICE. Parts 2 and 4 are played ONLY ONCE.

**🛑 YOUTUBE EXAMINER TIP (Part 3 True/False):** Do not over-think! If you read "The washing machine costs 300€" and the audio says "It costs 200€ but used to be 300€," the statement is False. Listen for exactly what the question asks. Look out for "oder", "aber", and "leider".

### Listening Distractor Example

**You read:** Wann kommt Frau Müller? 
A) Um 10 Uhr 
B) Um 12 Uhr 
C) Um 14 Uhr

**You hear:** *"Guten Tag Herr Schmidt, hier ist Müller. Unser Termin war ja eigentlich für 12 Uhr geplant. Leider habe ich den Bus um 10 Uhr verpasst. Können wir uns stattdessen um 14 Uhr treffen?"*

<div class="md-quiz" 
  data-question="Wann kommt Frau Müller?" 
  data-options="10 Uhr|12 Uhr|14 Uhr" 
  data-answer="2" 
  data-explain="She mentions all three times! 12 Uhr was the plan, 10 Uhr was the bus, but she is actually arriving at 14 Uhr. This is a classic TELC distractor trick."></div>

### Audio Recognition Practice

Imagine listening to a train station announcement: 
*"Achtung an Gleis 3: Der ICE 544 nach Berlin, planmäßige Abfahrt 14:30 Uhr, hat heute voraussichtlich 40 Minuten Verspätung aufgrund einer Signalstörung. Wir bitten um Entschuldigung."*

<div class="md-quiz" 
  data-question="Wann fährt der Zug voraussichtlich ab?" 
  data-options="Punkt 14:30 Uhr|Um 15:10 Uhr|In 40 Minuten fährt der nächste Zug." 
  data-answer="1" 
  data-explain="The normal departure is 14:30. The delay (Verspätung) is 40 minutes. 14:30 + 40 mins = 15:10. You must sometimes do simple math in listening parts!"></div>

______________________________________________________________________

## References
* **telc Deutsch A2·B1 Official Details & Scoring:** [telc.net/sprachpruefungen](https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-a2b1/)
* **YouTube telc A2-B1 Listening Tracks:** [telc gGmbH YouTube](https://www.youtube.com/c/telc_gGmbH) and mock exam audio tracks.
"""

tr_content = """# İnceleme: Okuma ve Dinleme (Lesen & Hören)

______________________________________________________________________

## 1. Okuma (Lesen) — 45 Dk, 4 Bölüm

### Temel Stratejiler

1. **Önce SORUYU okuyun**, sonra anahtar kelimeler için metne göz atın. Uzun metinleri asla en baştan okumaya başlamayın.
2. Eşleştirme bölümünde (Teil 1): Bulduğunuz cevapların üstünü hemen çizin ki aklınız karışmasın.
3. Bilmediğiniz kelimeler için paniğe kapılmayın. Bağlama odaklanın ve **genel anlamı** çıkarmaya çalışın. Kelimesi kelimesine çeviri yapmak vakit kaybıdır.
4. Zaman Yönetimi: Doğru/Yanlış soruları için **en fazla 90 saniye**, çoktan seçmeli sorular için **en fazla 2 dakika** harcayın.

### Kritik Yetenek: Eş Anlamlıları Tanıma

Sınavı hazırlayanlar kelime dağarcığınızı ölçmek için metinde ve soruda/cevaplarda NEREDEYSE HER ZAMAN aynı şey için FARKLI kelimeler kullanır:

| Metinde geçen... | Soruda/Cevapta geçen... |
| --- | --- |
| kostenlos / gratis (ücretsiz) | ohne Bezahlung / kostet nichts |
| Kinder (çocuklar) | Nachwuchs / die Kleinen |
| Arzt / Krankenhaus (doktor/hastane)| medizinische Hilfe (tıbbi yardım)|
| kaufen / einkaufen (satın almak)| erwerben / besorgen |
| Rabatt / billiger (indirim/daha ucuz)| Ermäßigung / Reduzierung |
| Wohnung (daire) | Unterkunft (konaklama) |
| anrufen (aramak) | telefonieren / sich melden |
| Arbeit (iş) | Beruf / Stelle / Job |
| Wochenende (hafta sonu) | Samstag und Sonntag |
| täglich (günlük) | jeden Tag / von Mo bis So |

### Sınav Tuzak İfadeleri
Sınav, sizi yanıltmak için olumsuzlukları ve miktar bildiren zarfları kullanmayı sever:

| Tuzak İfade | Gerçek Anlamı |
| --- | --- |
| nicht alle (hepsi değil) | bazısı (HİÇBİRİ anlamı taşımaz!) |
| kaum / fast nie (neredeyse hiç) | çok az (ASLA anlamı taşımaz!) |
| nur manchmal (sadece bazen) | sık sık DEĞİL |
| immer noch nicht (hala ... değil)| hala yokluğu/eksikliği vurgular |
| erst (henüz / sadece) | erst morgen (ancak yarın) |
| außerdem (ayrıca) | ekleme yapar, zıtlık (ama) bildirmez! |

______________________________________________________________________

## 2. İnteraktif Okuma Pratiği

Aşağıdaki telc Deutsch A2-B1 tarzı sorularla eş anlamlı ve mantık okuma becerinizi test edin.

### Okuma 1: Doğru / Yanlış (Richtig/Falsch)

**Metin:** "Immer mehr Erwachsene in Deutschland arbeiten im Homeoffice. Seit 2020 hat sich die Zahl der Heimarbeiter fast verdoppelt. Eine aktuelle Studie der Universität Köln zeigt, dass 65% der Arbeitnehmer im Homeoffice produktiver sind. Allerdings klagen einige über Einsamkeit und berichten, dass ihnen der direkte Kontakt zu Kollegen im Alltag fehlt."

<div class="md-quiz" 
  data-question="Vor 2020 haben weniger Menschen von zu Hause gearbeitet. (2020'den önce evden çalışan insan sayısı daha azdı.)" 
  data-options="Richtig (Doğru)|Falsch (Yanlış)" 
  data-answer="0" 
  data-explain="Doğru! Metin 'Seit 2020 hat sich die Zahl fast verdoppelt' (2020'den beri sayı neredeyse iki katına çıktı) diyor. Bu, mantıken 2020'den önce sayının daha az olduğu anlamına gelir."></div>

<div class="md-quiz" 
  data-question="Die meisten Heimarbeiter fühlen sich zu Hause weniger produktiv. (Çoğu ev çalışanı evde daha az üretken hissediyor.)" 
  data-options="Richtig (Doğru)|Falsch (Yanlış)" 
  data-answer="1" 
  data-explain="Yanlış! Metinde '%65'i ... daha üretkendir (produktiver)' deniyor. %65 bir çoğunluktur (die meisten - çoğu), ancak DAHA üretkendirler, DAHA AZ (weniger) değil. 'weniger' kelimesi metni tamamen zıttı yapıyor."></div>

<div class="md-quiz" 
  data-question="Niemand vermisst die Arbeit im Büro. (Hiç kimse ofisteki çalışmayı özlemiyor.)" 
  data-options="Richtig (Doğru)|Falsch (Yanlış)" 
  data-answer="1" 
  data-explain="Yanlış! Metinde 'einige klagen über Einsamkeit' (bazıları yalnızlıktan şikayet ediyor) ve iş arkadaşlarıyla iletişimi özlüyor deniyor. Sorudaki 'Niemand' (hiç kimse) kesin bir tuzak kelimedir!"></div>

### Okuma 2: İlan Eşleştirme (Teil 1)

Kişi için doğru ilanı bulun. 
**Durum:** "Tom sucht einen Nebenjob für das Wochenende, weil er unter der Woche studiert." (Tom hafta içi okuduğu için hafta sonu için ek bir iş arıyor.)

<div class="md-quiz" 
  data-question="Hangi ilan Tom'a uyar?" 
  data-options="A: Pizzeria Roma sucht Kellner für Fr + Sa, 17-23 Uhr. Erfahrung nicht nötig.|B: Suchen dringend Verkäufer(in) für Bäckerei. Mo-Fr 06:00-14:00 Uhr.|C: Nachhilfelehrer gesucht: Mathe Klasse 8, jeden Mittwochnachmittag." 
  data-answer="0" 
  data-explain="Tom'un hafta sonu (Wochenende) işine ihtiyacı var. A ilanı 'Fr + Sa' (Cuma ve Cumartesi) yani hafta sonu. B ilanı Pzt-Cum hafta içi. C ilanı sadece Çarşamba. Bu yüzden A doğrudur."></div>

______________________________________________________________________

## 3. Dinleme (Hören) — ~35 Dk, 5 Bölüm

### Temel Stratejiler

1. **Okuma süresini değerlendirin:** CD'deki ses size kuralları ve örnekleri açıklarken onları DİNLEMEYİN! O değerli 1-2 dakikayı soruları ve cevap şıklarını okuyup anahtar kelimelerin altını çizmek için kullanın.
2. **Eş anlamlılara odaklanın:** Okumada olduğu gibi, dinlemede de soruda yazan kelimenin tıpatıp aynısını duymazsınız, eş anlamlısını duyarsınız.
3. **Çeldiricilere dikkat edin:** Çoğu zaman A, B ve C şıklarındaki kelimelerin ÜÇÜNÜ DE seste duyarsınız! Sadece kelimeyi duymak yetmez, bağlamı ve kimin ne dediğini anlamanız gerekir.
4. **İkinci şans:** Bölüm 1 ve 3'teki ses kayıtları İKİ KERE çalınır. Bölüm 2 ve 4 SADECE BİR KERE çalınır.

**🛑 YOUTUBE SINAV İPUCU (Dinleme Bölüm 3):** Asla gereğinden fazla düşünmeyin / kendi mantığınızı katmayın! Kağıtta "Çamaşır makinesi 300€'dur" yazıyorsa ve dinletilen seste "Eskiden 300€ idi ama şimdi indirimle 200€" diyorsa o cevap Yanlış'tır (Falsch). Özellikle "oder (veya)", "aber (ama)" ve "leider (maalesef)" gibi gidişatı tersine çeviren kelimelere DİKKAT edin.

### Dinleme Çeldirici (Tuzak) Örneği

**Kağıtta yazan:** Wann kommt Frau Müller? (Frau Müller ne zaman geliyor?)
A) Um 10 Uhr 
B) Um 12 Uhr 
C) Um 14 Uhr

**Seste duyulan:** *"Guten Tag Herr Schmidt, hier ist Müller. Unser Termin war ja eigentlich für 12 Uhr geplant. Leider habe ich den Bus um 10 Uhr verpasst. Können wir uns stattdessen um 14 Uhr treffen?"* (Randevumuz 12'deydi. 10 otobüsünü kaçırdım. 14'te buluşabilir miyiz?)

<div class="md-quiz" 
  data-question="Wann kommt Frau Müller?" 
  data-options="10 Uhr|12 Uhr|14 Uhr" 
  data-answer="2" 
  data-explain="Üç saati de duyarsınız! 12 planlanan saatti, 10 kaçan otobüstü, ancak kadının asıl GELECEĞİ saat 14'tür. TELC sınavlarında duyduğunuz ilk saati işaretlemeyin!"></div>

### Ses Algılama Pratiği

Bir tren istasyonu anonsu dinlediğinizi hayal edin: 
*"Achtung an Gleis 3: Der ICE 544 nach Berlin, planmäßige Abfahrt 14:30 Uhr, hat heute voraussichtlich 40 Minuten Verspätung aufgrund einer Signalstörung. Wir bitten um Entschuldigung."* (Dikkat Peron 3: Normal kalkışı 14:30 olan Berlin treni sinyal arızasından dolayı 40 dakika gecikmelidir.)

<div class="md-quiz" 
  data-question="Wann fährt der Zug voraussichtlich ab? (Tren tahminen ne zaman kalkıyor?)" 
  data-options="Punkt 14:30 Uhr (Tam 14:30)|Um 15:10 Uhr (15:10'da)|In 40 Minuten fährt der nächste Zug. (40 dk sonra sonraki tren kalkıyor)" 
  data-answer="1" 
  data-explain="Normal kalkış (planmäßige Abfahrt) 14:30. Gecikme (Verspätung) 40 dakika. 14:30 + 40 dakika = 15:10. Bazen dinleme bölümlerinde böyle basit bir saat matematiği yapmanız beklenir!"></div>

______________________________________________________________________

## Kaynaklar (References)
* **telc Deutsch A2-B1 Resmi Kuralları:** [telc.net/sprachpruefungen](https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-a2b1/)
* **YouTube Ses Pratikleri (Hören):** Sınav formatına alışmak için YouTube'da "TELC A2-B1 Hören" veya "telc gGmbH" resmi kanalındaki model sınav ses kayıtlarını (Modelltest) haftalık olarak çözün.
"""

with open(EN_FILE, "w", encoding="utf-8") as f:
    f.write(en_content)

with open(TR_FILE, "w", encoding="utf-8") as f:
    f.write(tr_content)
    
print("Successfully generated detailed reading/listening files with interactive quizzes in both EN and TR!")
