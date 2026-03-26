# generate_grammar.py
import os

EN_FILE = r"C:\Private\DeutschLernen\TELC_B1_Preparation\review_grammar_vocab.md"
TR_FILE = r"C:\Private\DeutschLernen\TELC_B1_Hazırlık\review_grammar_vocab.md"

en_content = """# Review: Grammar & Vocabulary (Sprachbausteine)

______________________________________________________________________

## 1. Nebensätze (Subordinate Clauses) — MOST TESTED CONSTRUCT

The conjugated verb goes to the **END** of the subordinate clause. 
**PRO TRICK:** In the DTZ exam *Sprachbausteine*, if you see a blank right after a comma, look at the rest of the sentence. If the conjugated verb is sitting at the absolute end, the blank MUST be a subordinating conjunction like *dass, weil, wenn,* or *ob*.

| Conjunction | Meaning | Example |
| --- | --- | --- |
| **weil** | because | Ich bleibe zu Hause, **weil** ich heute krank **bin**. |
| **dass** | that | Ich hoffe, **dass** du morgen **kommst**. |
| **wenn** | if / when | **Wenn** es morgen **regnet**, bleibe ich zu Hause. |
| **obwohl** | although | Er arbeitet viel, **obwohl** er sehr müde **ist**. |
| **damit** | so that | Ich lerne Deutsch, **damit** ich bessere Arbeit **finde**. |
| **als** | when (in the past, once) | **Als** ich klein **war**, spielte ich oft draußen. |
| **ob** | whether | Ich weiß nicht, **ob** er zur Party **kommt**. |

**Watch out:** When the Nebensatz comes FIRST, it acts as "Position 1" for the whole sentence, so the main clause verb follows immediately after the comma:
> **Weil** ich krank **bin**, **bleibe** ich zu Hause. *(Verb-Verb at the comma!)*

```mermaid
flowchart LR
    A["Main clause\\n(Hauptsatz)\\n Subj → Verb → ..."] -->|comma| B["Conjunction\\n(weil/dass/wenn...)"] --> C["Subordinate clause\\n(Nebensatz)\\n Subj → ... → VERB"]
    style B fill:#f5a623,color:#000
    style C fill:#4a90d9,color:#fff
```

<div class="md-quiz" 
  data-question="Lieber Tom, ich schreibe dir, ___ ich am Wochenende meinen Geburtstag feiere." 
  data-options="dass|weil|wenn" 
  data-answer="1" 
  data-explain="The sentence provides a reason for writing (I am writing TO YOU BECAUSE...). Therefore 'weil' is correct. The verb 'feiere' correctly sits at the end."></div>

<div class="md-quiz" 
  data-question="Ich bin nicht sicher, ___ der Arzt heute Nachmittag Sprechstunde hat." 
  data-options="obwohl|dass|ob" 
  data-answer="2" 
  data-explain="'ob' means 'whether'. 'I am not sure WHETHER the doctor has office hours today'. 'dass' (that) doesn't make logical sense when expressing uncertainty."></div>

______________________________________________________________________

## 2. Konnektoren (Connectors) — Word Order Tricks

**PRO TRICK:** Knowing which connectors don't change word order (Position 0) vs those that force inversion (Position 1) is a guaranteed 2-3 points on the exam!

| Type | Words | Position | Example |
| --- | --- | --- | --- |
| **Position 0** (No Change) | **ADUSO**: Aber, Denn, Und, Sondern, Oder | Before subject | Ich bin müde, **aber** ich gehe *(Subj+Verb)* trotzdem. |
| **Position 1** (Inversion) | deshalb, trotzdem, außerdem, dann, danach | Before verb | Ich bin müde. **Deshalb** *bleibe* *(Verb+Subj)* ich zu Hause. |

<div class="md-quiz" 
  data-question="Ich habe eine neue Wohnung. ___ möchte ich eine große Party machen." 
  data-options="Trotzdem|Außerdem|Deshalb" 
  data-answer="2" 
  data-explain="'Deshalb' means 'therefore/that is why'. Because I have a new apartment, I THEREFORE want to throw a party. Notice the inversion: Deshalb MÖCHTE ICH (Verb+Subj)."></div>

<div class="md-quiz" 
  data-question="Er ist krank, ___ er geht zur Arbeit." 
  data-options="aber|denn|deshalb" 
  data-answer="0" 
  data-explain="ADUSO rule! 'aber' (but) takes Position 0, resulting in normal 'er geht' order."></div>

______________________________________________________________________

## 3. Perfekt vs. Präteritum

In colloquial German (and for emails/letters in B1), you almost exclusively use **Perfekt**. 
**Formula:** haben/sein (Position 2) + ... + Partizip II (at the very end)

| Type | Example | Partizip II |
| --- | --- | --- |
| Regular (-t) | Ich **habe** Deutsch **gelernt**. | ge-**lern**-t |
| Irregular (-en) | Er **hat** ein Buch **gelesen**. | ge-**les**-en |
| With *sein* (movement) | Sie **ist** nach Berlin **gefahren**. | ge-**fahr**-en |
| Separable prefix | Ich **habe** um 7 Uhr **angefangen**. | **an**-ge-fang-en |
| Inseparable (be-, ver-, er-) | Er **hat** das Buch **verstanden**. | verstanden (no ge-!) |

**Decision Tree: haben or sein?** Use *sein* ONLY for physical movement from A to B (gehen, fahren, fliegen, kommen) or change of state (einschlafen, aufwachen, sterben). For everything else (including static verbs like stehen or sitzen), use *haben*.
*Exception:* The verbs 'sein', 'werden', and 'bleiben' also take *sein*.

For **Präteritum** in the B1 exam, you strictly only need to memorize *sein*, *haben*, and the modal verbs (können, müssen, wollen, sollen, dürfen). Do not use Präteritum for normal verbs in your B1 writing!

| Verb | ich | du | er/sie/es | wir | ihr | sie/Sie |
| --- | --- | --- | --- | --- | --- | --- |
| sein | war | warst | war | waren | wart | waren |
| haben | hatte | hattest | hatte | hatten | hattet | hatten |
| können | konnte | konntest | konnte | konnten | konntet | konnten |

<div class="md-quiz" 
  data-question="Gestern ___ ich den ganzen Tag zu Hause ___." 
  data-options="habe...geblieben|bin...geblieben|habe...gebleibt" 
  data-answer="1" 
  data-explain="'bleiben' is a major exception—it takes 'sein' in the Perfekt despite being a static verb. Its Partizip II is irregular: 'geblieben'."></div>

<div class="md-quiz" 
  data-question="Als Kind ___ ich oft im Garten spielen." 
  data-options="wollte|will|gewollt" 
  data-answer="0" 
  data-explain="'Als' signals past tense. For modal verbs, always use Präteritum in the past: 'wollte'."></div>

______________________________________________________________________

## 4. Preposition Tricks & Cases

### Wechselpräpositionen (Two-Way Prepositions)
in, an, auf, neben, hinter, über, unter, vor, zwischen

**PRO TRICK:** If the action suggests movement to a target (**Wohin?** / Where to?), use **Akkusativ**. If the action suggests a static location (**Wo?** / Where at?), use **Dativ**. 
* Gehen, stellen, legen, setzen → Akkusativ (Wohin?)
* Bleiben, stehen, liegen, sitzen → Dativ (Wo?)

| Question | Case | Example |
| --- | --- | --- |
| **Wohin?** (direction) | Akkusativ | Ich gehe **in den** Supermarkt. |
| **Wo?** (location) | Dativ | Ich bin **im** (in dem) Supermarkt. |

### Fixed Prepositions (Memorize these!)

| Always Dativ | Always Akkusativ |
| --- | --- |
| aus, bei, mit, nach, seit, von, zu | durch, für, gegen, ohne, um |
| *Ich fahre **mit dem** Bus.* | *Das Geschenk ist **für dich**.* |

<div class="md-quiz" 
  data-question="Ich warte ___ Bus." 
  data-options="auf dem|auf den|auf der" 
  data-answer="1" 
  data-explain="'warten' is followed by 'auf' + Akkusativ. 'Bus' is masculine (der), so it becomes 'auf den Bus'."></div>

<div class="md-quiz" 
  data-question="Er wohnt schon seit zwei Jahren ___ seiner Mutter." 
  data-options="bei seiner|bei seine|bei seinen" 
  data-answer="0" 
  data-explain="'bei' ALWAYS forces Dativ. Feminine Dativ changes 'die' to 'der', so 'seine' becomes 'seiner'."></div>

______________________________________________________________________

## 5. Konjunktiv II (Polite Requests & Wishes)

For B1 speaking and letter-writing, you MUST use Konjunktiv II to sound polite. Simply saying "Ich will einen Termin" is considered rude and will lower your score.

| Form | Example | Best Used For |
| --- | --- | --- |
| **könnte** | **Könnten** Sie mir bitte helfen? | Polite questions/requests |
| **würde + Infinitiv** | Ich **würde** mich über eine Antwort **freuen**. | Describing actions you'd like to do |
| **hätte** | Ich **hätte** gerne einen Kaffee. | Polite ordering |
| **wäre** | Es **wäre** schön, wenn... | Making suggestions |

<div class="md-quiz" 
  data-question="___ Sie mir bitte erklären, wie der Fahrkartenautomat funktioniert?" 
  data-options="Können|Konnten|Könnten" 
  data-answer="2" 
  data-explain="'Könnten' is Konjunktiv II (polite). 'Konnten' (without umlaut) is strictly past tense (could you yesterday?)."></div>

______________________________________________________________________

## 6. Real Exam Practice: Sprachbausteine Mix

Test yourself on mixed DTZ-style exercises covering everything above.

<div class="md-quiz" 
  data-question="Ich habe eine Katze, ___ sehr gerne schläft." 
  data-options="die|der|das" 
  data-answer="0" 
  data-explain="Relative pronoun! 'Katze' is feminine (die). It is the subject of the relative clause, so it remains 'die'."></div>

<div class="md-quiz" 
  data-question="Das sind die Leute, ___ ich gestern geholfen habe." 
  data-options="die|denen|deren" 
  data-answer="1" 
  data-explain="Relative pronoun! 'helfen' forces Dativ. The plural Dativ relative pronoun is 'denen' (not 'den')."></div>

<div class="md-quiz" 
  data-question="Sie hat sich ___ die Verspätung entschuldigt." 
  data-options="über|für|um" 
  data-answer="1" 
  data-explain="Fixed reflexive verb: 'sich entschuldigen für' (to apologize for) + Akkusativ."></div>

<div class="md-quiz" 
  data-question="Das Formular ___ ich gestern ___. (Perfekt)" 
  data-options="hatte...ausgefüllt|habe...ausgefüllt|bin...ausgefüllt" 
  data-answer="1" 
  data-explain="'ausfüllen' is a separable verb taking 'haben'. The Perfekt is 'habe...ausgefüllt'."></div>

<div class="md-quiz" 
  data-question="Seit drei Jahren ___ ich in Deutschland." 
  data-options="lebe|lebte|habe gelebt" 
  data-answer="0" 
  data-explain="TRICK: 'Seit' (since/for) describes an action that started in the past AND IS STILL ONGOING. In German, you must use Präsens (Present Tense) for this, unlike English!"></div>
"""

tr_content = """# İnceleme: Dil Bilgisi ve Kelime Bilgisi (Sprachbausteine)

______________________________________________________________________

## 1. Nebensätze (Yan Cümleler) — EN ÇOK TEST EDİLEN KONU

Çekimli(zaman ve kişiye göre değişen) fiil yan cümlenin **EN SONUNA** gider. 
**PRO İPUCU:** DTZ sınavı *Sprachbausteine* (Bölüm 1) kısmında, virgülden hemen sonra bir boşluk görürseniz, cümlenin geri kalanına bakın. Eğer çekimli fiil cümlenin en sonunda yer alıyorsa, boşluğa kesinlikle *dass, weil, wenn,* veya *ob* gibi yan cümle bağlaçlarından biri gelmelidir!

| Bağlaç | Anlamı | Örnek |
| --- | --- | --- |
| **weil** | çünkü | Ich bleibe zu Hause, **weil** ich heute krank **bin**. |
| **dass** | -dığı / ki | Ich hoffe, **dass** du morgen **kommst**. |
| **wenn** | eğer / -dığında | **Wenn** es morgen **regnet**, bleibe ich zu Hause. |
| **obwohl** | -e rağmen | Er arbeitet viel, **obwohl** er sehr müde **ist**. |
| **damit** | -sın diye / amacıyla | Ich lerne Deutsch, **damit** ich bessere Arbeit **finde**. |
| **als** | -dığında (geçmişte tek sefer) | **Als** ich klein **war**, spielte ich oft draußen. |
| **ob** | -ıp -madığını | Ich weiß nicht, **ob** er zur Party **kommt**. |

**Dikkat:** Yan cümle (Nebensatz) cümlenin BAŞINA gelirse, ana cümlenin (Hauptsatz) "1. pozisyonunu" işgal etmiş olur. Bu nedenle virgülden hemen sonra ana cümlenin fiili gelmek zorundadır:
> **Weil** ich krank **bin**, **bleibe** ich zu Hause. *(Virgülün iki yanında FİİL-FİİL yan yana!)*

```mermaid
flowchart LR
    A["Ana cümle\\n(Hauptsatz)\\n Özne → Fiil → ..."] -->|virgül| B["Bağlaç\\n(weil/dass/wenn...)"] --> C["Yan cümle\\n(Nebensatz)\\n Özne → ... → FİİL"]
    style B fill:#f5a623,color:#000
    style C fill:#4a90d9,color:#fff
```

<div class="md-quiz" 
  data-question="Lieber Tom, ich schreibe dir, ___ ich am Wochenende meinen Geburtstag feiere." 
  data-options="dass|weil|wenn" 
  data-answer="1" 
  data-explain="Cümle yazma sebebini açıklıyor (Sana yazıyorum ÇÜNKÜ...). Bu yüzden 'weil' doğrudur. 'feiere' fiili kurala uygun olarak sona gitmiştir."></div>

<div class="md-quiz" 
  data-question="Ich bin nicht sicher, ___ der Arzt heute Nachmittag Sprechstunde hat." 
  data-options="obwohl|dass|ob" 
  data-answer="2" 
  data-explain="'ob', '-ıp -madığını' anlamına gelir. 'Doktorun bugün muayenesi olup OLMADIĞINDAN emin değilim'. Belirsizlik durumlarında her zaman 'ob' kullanılır, 'dass' mantıksız olur."></div>

______________________________________________________________________

## 2. Konnektoren (Bağlaçlar) — Kelime Dizilimi Hileleri

**PRO İPUCU:** Hangi bağlaçların kelime dizilimini değiştirmediğini (0. Pozisyon) ve hangilerinin devrik cümle yaptığını (1. Pozisyon) bilmek size sınavda garanti 2-3 puan kazandıracaktır!

| Tür | Kelimeler | Pozisyon | Örnek |
| --- | --- | --- | --- |
| **Pozisyon 0** (Değişim yok) | **ADUSO**: Aber, Denn, Und, Sondern, Oder | Özneden önce | Ich bin müde, **aber** ich gehe *(Özne+Fiil)* trotzdem. |
| **Pozisyon 1** (Devrik cümle) | deshalb, trotzdem, außerdem, dann, danach | Fiilden önce | Ich bin müde. **Deshalb** *bleibe* *(Fiil+Özne)* ich zu Hause. |

<div class="md-quiz" 
  data-question="Ich habe eine neue Wohnung. ___ möchte ich eine große Party machen." 
  data-options="Trotzdem|Außerdem|Deshalb" 
  data-answer="2" 
  data-explain="'Deshalb', 'bu yüzden / bu nedenle' anlamına gelir. Yeni bir evim var, BU YÜZDEN parti yapmak istiyorum. Devrik cümleye dikkat edin: Deshalb MÖCHTE ICH (Fiil+Özne)."></div>

<div class="md-quiz" 
  data-question="Er ist krank, ___ er geht zur Arbeit." 
  data-options="aber|denn|deshalb" 
  data-answer="0" 
  data-explain="ADUSO kuralı! 'aber' (ama) 0. pozisyonda yer alır, yani kendisinden sonra normal 'Özne + Fiil' (er geht) sıralaması gelir."></div>

______________________________________________________________________

## 3. Perfekt vs. Präteritum

Günlük konuşma dilinde (ve B1 sınavındaki e-posta/mektupların çoğunda) geçmiş zaman için neredeyse her zaman **Perfekt** kullanmalısınız. 
**Formül:** haben/sein (Cümlenin 2. sırasında) + ... + Partizip II (Cümlenin en sonunda)

| Tür | Örnek | Partizip II |
| --- | --- | --- |
| Düzenli (-t) | Ich **habe** Deutsch **gelernt**. | ge-**lern**-t |
| Düzensiz (-en) | Er **hat** ein Buch **gelesen**. | ge-**les**-en |
| *sein* ile (hareket) | Sie **ist** nach Berlin **gefahren**. | ge-**fahr**-en |
| Ayrılabilen ön ek | Ich **habe** um 7 Uhr **angefangen**. | **an**-ge-fang-en |
| Ayrılamayan (be-, ver-, er-) | Er **hat** das Buch **verstanden**. | verstanden (başında ge- yok!) |

**haben mi sein mi? Karar Ağacı:** A noktasından B noktasına fiziksel hareket (gehen, fahren, fliegen, kommen) veya durum değişikliği (einschlafen-uykuya dalmak, aufwachen-uyanmak, sterben-ölmek) varsa **sein** kullanın. Diğer her şey için (stehen, sitzen gibi sabit durumlar dahil) **haben** kullanın. 
*İstisna:* 'sein', 'werden' ve 'bleiben' fiilleri hareket içermese de *sein* yardımcı fiilini alır.

B1 sınavı için **Präteritum** (Yazı dili geçmiş zamanı) kuralı çok basittir: Sadece *sein*, *haben* ve modal fiillerin (können, müssen, wollen, sollen, dürfen) Präteritum hallerini ezberleyin! Normal fiiller için yazma bölümünde Präteritum DALLANDIRMAYIN!

| Fiil | ich | du | er/sie/es | wir | ihr | sie/Sie |
| --- | --- | --- | --- | --- | --- | --- |
| sein (olmak) | war | warst | war | waren | wart | waren |
| haben (sahip olmak) | hatte | hattest | hatte | hatten | hattet | hatten |
| können (yapabilmek)| konnte | konntest | konnte | konnten | konntet | konnten |

<div class="md-quiz" 
  data-question="Gestern ___ ich den ganzen Tag zu Hause ___." 
  data-options="habe...geblieben|bin...geblieben|habe...gebleibt" 
  data-answer="1" 
  data-explain="'bleiben' (kalmak) en büyük istisnadır—hareket içermemesine rağmen Perfekt halinde her zaman 'sein' alır. Partizip II hali düzensizdir: 'geblieben'."></div>

<div class="md-quiz" 
  data-question="Als Kind ___ ich oft im Garten spielen." 
  data-options="wollte|will|gewollt" 
  data-answer="0" 
  data-explain="'Als', geçmiş zamanı işaret eder. Geçmişten bahsederken modal fiiller (istemek, yapabilmek vb.) her zaman Präteritum halinde kullanılır: 'wollte'."></div>

______________________________________________________________________

## 4. Edatlar (Prepositions) ve İsmin Halleri

### Wechselpräpositionen (Çift Yönlü Edatlar)
in, an, auf, neben, hinter, über, unter, vor, zwischen

**PRO İPUCU:** Eğer eylem bir hedefe yöneliyorsa (**Wohin?** / Nereye?), **Akkusativ** (İsmin -i hali) kullanın. Eğer eylem sabit bir konumu belirtiyorsa (**Wo?** / Nerede?), **Dativ** (İsmin -e hali) kullanın.

| Soru | Hal (Case) | Örnek |
| --- | --- | --- |
| **Wohin?** (Yönelim) | Akkusativ | Ich gehe **in den** Supermarkt. |
| **Wo?** (Konum/Durum) | Dativ | Ich bin **im** (in dem) Supermarkt. |

### Sabit Edatlar (Bunları Ezberleyin!)

| Her Zaman Dativ Alanlar | Her Zaman Akkusativ Alanlar |
| --- | --- |
| aus, bei, mit, nach, seit, von, zu | durch, für, gegen, ohne, um |
| *Ich fahre **mit dem** Bus.* | *Das Geschenk ist **für dich**.* |

<div class="md-quiz" 
  data-question="Ich warte ___ Bus." 
  data-options="auf dem|auf den|auf der" 
  data-answer="1" 
  data-explain="'warten' fiili her zaman 'auf' + Akkusativ ile kullanılır. 'Bus' eril (der) kelimedir, bu yüzden Akkusativ'de 'auf den Bus' olur."></div>

<div class="md-quiz" 
  data-question="Er wohnt schon seit zwei Jahren ___ seiner Mutter." 
  data-options="bei seiner|bei seine|bei seinen" 
  data-answer="0" 
  data-explain="'bei' edatı HER ZAMAN Dativ almayı zorunlu kılar. Dativ'de dişil 'die' artikeli 'der' olur, yani 'seine' → 'seiner' haline gelir."></div>

______________________________________________________________________

## 5. Konjunktiv II (Kibar Ricalar)

B1 sözlü sınavında (Sprechen) ve mektup yazımında kibar görünmek için Konjunktiv II kullanmanız ŞARTTIR. Sadece "Ich will einen Termin" (Randevu istiyorum) demek kaba kabul edilir ve puanınızı düşürür!

| Kalıp | Örnek | En İyi Kullanım Yeri |
| --- | --- | --- |
| **könnte** | **Könnten** Sie mir bitte helfen? | Kibar sorular ve talepler |
| **würde + Infinitiv** | Ich **würde** mich über eine Antwort **freuen**. | Ne yapmak istediğinizi anlatırken |
| **hätte** | Ich **hätte** gerne einen Kaffee. | Bir şey sipariş ederken / isterken |
| **wäre** | Es **wäre** schön, wenn... | Fikir ve öneri sunarken |

<div class="md-quiz" 
  data-question="___ Sie mir bitte erklären, wie der Fahrkartenautomat funktioniert?" 
  data-options="Können|Konnten|Könnten" 
  data-answer="2" 
  data-explain="'Könnten', Konjunktiv II (Çok kibar rica) formudur. Noktasız 'Konnten' Präteritum'dur ve sadece 'Dün anlatabildiniz mi?' gibi geçmiş zaman için kullanılır."></div>

______________________________________________________________________

## 6. Gerçek Sınav Pratiği: Karışık Sprachbausteine

Yukarıdaki tüm kuralları kapsayan DTZ tarzı karma alıştırmalarla kendinizi test edin:

<div class="md-quiz" 
  data-question="Ich habe eine Katze, ___ sehr gerne schläft." 
  data-options="die|der|das" 
  data-answer="0" 
  data-explain="İlgi zamiri (Relativsatz)! 'Katze' dişil (die) bir isimdir. Yan cümlede özne konumunda (uyuyan kedi) olduğu için yine Nominativ 'die' olarak kalır."></div>

<div class="md-quiz" 
  data-question="Das sind die Leute, ___ ich gestern geholfen habe." 
  data-options="die|denen|deren" 
  data-answer="1" 
  data-explain="'helfen' fiili her zaman Dativ gerektirir. Çoğul Dativ ilgi zamiri 'denen'dir (dikkat: 'den' değil!)."></div>

<div class="md-quiz" 
  data-question="Sie hat sich ___ die Verspätung entschuldigt." 
  data-options="über|für|um" 
  data-answer="1" 
  data-explain="Sabit dönüşlü fiil edatı: Bir şey İÇİN özür dilemek 'sich entschuldigen FÜR' + Akkusativ kalıbıdır."></div>

<div class="md-quiz" 
  data-question="Das Formular ___ ich gestern ___. (Perfekt)" 
  data-options="hatte...ausgefüllt|habe...ausgefüllt|bin...ausgefüllt" 
  data-answer="1" 
  data-explain="'ausfüllen' (doldurmak) ayrılabilen bir fiildir ve hareket olmadığı için 'haben' ile çekimlenir. Bu yüzden Perfekt hali: 'habe...ausgefüllt'."></div>

<div class="md-quiz" 
  data-question="Seit drei Jahren ___ ich in Deutschland." 
  data-options="lebe|lebte|habe gelebt" 
  data-answer="0" 
  data-explain="HİLE: 'Seit' (-den beri), geçmişte başlamış VE HALA DEVAM EDEN eylemleri anlatır. İngilizce veya Türkçenin aksine, Almancada bu durumda geçmiş zaman değil, Şimdiki Zaman (Präsens) kullanılmak zorundadır!"></div>
"""

with open(EN_FILE, "w", encoding="utf-8") as f:
    f.write(en_content)

with open(TR_FILE, "w", encoding="utf-8") as f:
    f.write(tr_content)
    
print("Successfully generated detailed grammar files with interactive quizzes in both EN and TR!")
