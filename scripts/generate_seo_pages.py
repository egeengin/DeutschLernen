#!/usr/bin/env python3
"""
DeutschLernen - Programmatic SEO Page Generator
Generates high-intent, organically rankable static HTML pages for GitHub Pages:
1. /telc-b1-beschwerdebrief-beispiel.html (High search volume: telc B1 Beschwerdebrief Muster & Redemittel)
2. /telc-b1-einladung-schreiben.html (High search volume: telc B1 Einladung Schreiben & Muster)
3. /telc-b1-punkte-rechner.html (Interactive telc B1 Score Calculator with live sliders & grade calculator)
4. /leben-in-deutschland-<state>-fragen.html (16 separate URLs for every German Federal State)
5. /sitemap.xml (Complete search engine index with priority ratings)
6. /robots.txt
"""

import os
import sys
import json
import subprocess
from datetime import datetime

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_URL = "https://egeengin.github.io/DeutschLernen"
TODAY = datetime.now().strftime("%Y-%m-%d")

STATE_SLUGS = {
    "NW": "nrw",
    "BY": "bayern",
    "BE": "berlin",
    "BW": "baden-wuerttemberg",
    "HE": "hessen",
    "HH": "hamburg",
    "HB": "bremen",
    "NI": "niedersachsen",
    "SN": "sachsen",
    "ST": "sachsen-anhalt",
    "SH": "schleswig-holstein",
    "TH": "thueringen",
    "RP": "rheinland-pfalz",
    "SL": "saarland",
    "BB": "brandenburg",
    "MV": "mecklenburg-vorpommern",
}

STATE_META = {
    "NW": {"de": "Nordrhein-Westfalen", "tr": "Kuzey Ren-Vestfalya", "capital": "Düsseldorf", "pop": "17.9 Mio."},
    "BY": {"de": "Bayern", "tr": "Bavyera", "capital": "München", "pop": "13.1 Mio."},
    "BE": {"de": "Berlin", "tr": "Berlin", "capital": "Berlin", "pop": "3.7 Mio."},
    "BW": {"de": "Baden-Württemberg", "tr": "Baden-Württemberg", "capital": "Stuttgart", "pop": "11.1 Mio."},
    "HE": {"de": "Hessen", "tr": "Hessen", "capital": "Wiesbaden", "pop": "6.3 Mio."},
    "HH": {"de": "Hamburg", "tr": "Hamburg", "capital": "Hamburg", "pop": "1.9 Mio."},
    "HB": {"de": "Bremen", "tr": "Bremen", "capital": "Bremen", "pop": "680.000"},
    "NI": {"de": "Niedersachsen", "tr": "Aşağı Saksonya", "capital": "Hannover", "pop": "8.0 Mio."},
    "SN": {"de": "Sachsen", "tr": "Saksonya", "capital": "Dresden", "pop": "4.1 Mio."},
    "ST": {"de": "Sachsen-Anhalt", "tr": "Saksonya-Anhalt", "capital": "Magdeburg", "pop": "2.2 Mio."},
    "SH": {"de": "Schleswig-Holstein", "tr": "Schleswig-Holstein", "capital": "Kiel", "pop": "2.9 Mio."},
    "TH": {"de": "Thüringen", "tr": "Türingiya", "capital": "Erfurt", "pop": "2.1 Mio."},
    "RP": {"de": "Rheinland-Pfalz", "tr": "Rheinland-Pfalz", "capital": "Mainz", "pop": "4.1 Mio."},
    "SL": {"de": "Saarland", "tr": "Saarland", "capital": "Saarbrücken", "pop": "990.000"},
    "BB": {"de": "Brandenburg", "tr": "Brandenburg", "capital": "Potsdam", "pop": "2.5 Mio."},
    "MV": {"de": "Mecklenburg-Vorpommern", "tr": "Mecklenburg-Vorpommern", "capital": "Schwerin", "pop": "1.6 Mio."},
}

def load_lid_data():
    """Extracts state questions and states list using node."""
    cmd = [
        "node", "-e",
        "const { GERMAN_STATES, LID_STATE_QUESTIONS } = require('./data/lid310.js');"
        "console.log(JSON.stringify({ states: GERMAN_STATES, questions: LID_STATE_QUESTIONS }));"
    ]
    res = subprocess.run(cmd, cwd=ROOT_DIR, capture_output=True, encoding="utf-8", check=True)
    return json.loads(res.stdout)

def get_html_header(title, desc, canonical_url, keywords):
    return f"""<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content="{desc}">
  <meta name="keywords" content="{keywords}">
  <link rel="canonical" href="{canonical_url}">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <meta name="theme-color" content="#10b981">

  <!-- OpenGraph & Twitter Cards -->
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{desc}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:site_name" content="DeutschLernen">
  <meta name="twitter:card" content="summary_large_image">

  <!-- Local Typography (DSGVO-compliant) -->
  <link rel="stylesheet" href="assets/fonts/fonts.css">

  <link rel="stylesheet" href="css/seo-pages.css?v=40">
  <script>
    (function() {{
      const savedTheme = localStorage.getItem('deutschlernen_theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
      if (savedTheme === 'light') document.documentElement.classList.add('light-mode');
    }})();
  </script>
</head>
<body class="seo-body">
  <div class="seo-container">
    <header class="seo-header">
      <a href="index.html" class="seo-brand">
        <div class="seo-brand-icon">🇩🇪</div>
        <div>
          <span class="seo-brand-title">DeutschLernen</span>
        </div>
      </a>
      <nav class="seo-nav-links">
        <a href="index.html" class="seo-nav-link">🏠 Ana Portal</a>
        <a href="dashboard.html" class="seo-nav-link">📊 Dashboard</a>
        <a href="lesen.html" class="seo-nav-link">📖 Lesen & Sprachbausteine</a>
        <a href="trainer.html" class="seo-nav-link">⚡ Wortschatz</a>
        <a href="sprechen.html" class="seo-nav-link">🗣️ Sprechen</a>
        <a href="hoeren.html" class="seo-nav-link">🎧 Hören</a>
      </nav>
    </header>
"""

def get_html_footer():
    return """
    <footer class="seo-footer">
      <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap; margin-bottom:12px;">
        <a href="index.html" class="seo-nav-link">🏠 Ana Sayfa</a>
        <a href="telc-b1-punkte-rechner.html" class="seo-nav-link">🧮 telc B1 Puan Hesaplayıcı</a>
        <a href="telc-b1-beschwerdebrief-beispiel.html" class="seo-nav-link">📝 Beschwerdebrief</a>
        <a href="telc-b1-einladung-schreiben.html" class="seo-nav-link">💌 Einladung</a>
        <a href="leben-in-deutschland-nrw-fragen.html" class="seo-nav-link">🇩🇪 LiD NRW</a>
        <a href="legal.html" class="seo-nav-link">⚖️ Impressum & Datenschutz</a>
      </div>
      <p style="margin: 0; color:var(--seo-text-muted);">
        © 2026 DeutschLernen — telc Deutsch B1 ve Leben in Deutschland (LiD) için bağımsız açık kaynaklı hazırlık platformu.
      </p>
    </footer>
  </div>

  <script>
    function copyText(id) {
      const text = document.getElementById(id).innerText;
      navigator.clipboard.writeText(text).then(() => {
        alert("Metin panoya kopyalandı! / In die Zwischenablage kopiert! ✅");
      });
    }
  </script>
</body>
</html>
"""

# ==============================================================================
# 1. BESCHWERDEBRIEF PAGE
# ==============================================================================
def generate_beschwerdebrief():
    url = f"{BASE_URL}/telc-b1-beschwerdebrief-beispiel.html"
    title = "telc B1 Beschwerdebrief Beispiel & Muster (2026) — Şikayet Mektubu Kalıpları"
    desc = "telc Deutsch B1 Schreiben için en popüler Beschwerdebrief (Şikayet Mektubu) örnekleri, hazır Redemittel kalıpları, Leitpunkte taktikleri ve sınav ipuçları."
    kw = "telc b1 beschwerdebrief beispiel, telc b1 şikayet mektubu, telc b1 beschwerde muster, telc b1 schreiben beschwerde redemittel, b1 brief schreiben musterloesung"

    schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "telc B1 Beschwerdebrief yazarken hangi noktalara dikkat edilmeli?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "1. Verilen tüm Leitpunkte (genelde 3-4 madde) eksiksiz işlenmelidir. 2. Resmi hitap (Sehr geehrte Damen und Herren) ve resmi kapanış (Mit freundlichen Grüßen) kullanılmalıdır. 3. Problem açıkça tarif edilmeli ve net bir talep (Geld zurück, Reparatur, Ersatz) belirtilmelidir."
                }
            },
            {
                "@type": "Question",
                "name": "telc B1 Schreiben kaç kelime olmalı ve kaç dakika sürer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "telc Deutsch B1 Yazma (Schriftlicher Ausdruck) sınavı toplam 30 dakikadır. Teil 2 (E-Mail/Brief) için tavsiye edilen uzunluk 70-80 kelimedir. Çok kısa yazmak puan kırılmasına yol açar."
                }
            },
            {
                "@type": "Question",
                "name": "Beschwerdebrief için en önemli Redemittel kalıpları hangileridir?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "'Ich schreibe Ihnen, weil...', 'Leider entspricht das Produkt nicht meinen Erwartungen...', 'Aus diesem Grund fordere ich Sie auf...', 'Ich bitte Sie, mir den Betrag zu erstatten...' gibi kalıplar B1 seviyesi için esastır."
                }
            }
        ]
    }

    html = get_html_header(title, desc, url, kw)
    html += f"""
    <script type="application/ld+json">
    {json.dumps(schema, ensure_ascii=False, indent=2)}
    </script>

    <div class="seo-breadcrumbs">
      <a href="index.html">DeutschLernen</a> » <a href="dashboard.html">B1 Hazırlık</a> » <span>telc B1 Beschwerdebrief</span>
    </div>

    <section class="seo-hero">
      <div class="seo-badge-row">
        <span class="seo-badge">telc Deutsch B1</span>
        <span class="seo-badge-green">Schreiben Teil 2</span>
        <span class="seo-badge-gold">⭐ 45 Puan</span>
      </div>
      <h1 class="seo-hero-title">telc B1 Beschwerdebrief Beispiel & Musterlösungen</h1>
      <p class="seo-hero-subtitle">
        telc Deutsch B1 sınavının Yazma (Schriftlicher Ausdruck) bölümünde en çok çıkan konu <strong>Beschwerdebrief (Resmi Şikayet Mektubu)</strong> formatıdır.
        Bu rehberde tam puan alan örnekleri, hazır Redemittel kalıplarını ve sınavda hayat kurtaran şablonları bulabilirsiniz.
      </p>
    </section>

    <!-- Section 1: Core Rules -->
    <section class="seo-card">
      <h2 class="seo-card-title">🎯 telc B1 Yazma Sınavında Tam Puan Almanın 4 Kuralı</h2>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:16px;">
        <div style="background:var(--seo-bg-secondary); padding:16px; border-radius:10px; border:1px solid var(--seo-border);">
          <div style="font-weight:800; color:var(--seo-text-blue); margin-bottom:6px;">1. Tüm Maddeleri İşleyin</div>
          <p style="font-size:13px; color:var(--seo-text-muted); margin:0;">Soruda verilen 3 veya 4 Leitpunkt'un (yönlendirici madde) her birine en az 1-2 cümleyle değinmek zorundasınız. Birini atlarsanız ciddi puan kırılır.</p>
        </div>
        <div style="background:var(--seo-bg-secondary); padding:16px; border-radius:10px; border:1px solid var(--seo-border);">
          <div style="font-weight:800; color:var(--seo-text-green); margin-bottom:6px;">2. Doğru Selamlama & Hitap</div>
          <p style="font-size:13px; color:var(--seo-text-muted); margin:0;">Muhatap bilinmiyorsa mutlaka <em>Sehr geehrte Damen und Herren,</em> kullanılır. Virgülden sonraki ilk kelime küçük harfle başlar.</p>
        </div>
        <div style="background:var(--seo-bg-secondary); padding:16px; border-radius:10px; border:1px solid var(--seo-border);">
          <div style="font-weight:800; color:var(--seo-text-gold); margin-bottom:6px;">3. Bağlaç Çeşitliliği (Konnektoren)</div>
          <p style="font-size:13px; color:var(--seo-text-muted); margin:0;">Yalnızca 'und' veya 'aber' kullanmayın. <em>weil, dass, obwohl, deshalb, außerdem</em> gibi B1 yan cümle bağlaçları tam puan getirir.</p>
        </div>
        <div style="background:var(--seo-bg-secondary); padding:16px; border-radius:10px; border:1px solid var(--seo-border);">
          <div style="font-weight:800; color:#f87171; margin-bottom:6px;">4. Net Talep ve Süre (Frist)</div>
          <p style="font-size:13px; color:var(--seo-text-muted); margin:0;">Şikayet mektubunda mutlaka bir çözüm önerin: Paranın iadesi (Rückerstattung), değişim veya tamir talep edin.</p>
        </div>
      </div>
    </section>

    <!-- Section 2: 3 Full Letters -->
    <section class="seo-card">
      <h2 class="seo-card-title">📝 Sınavda En Çok Çıkan 3 Örnek Beschwerdebrief</h2>

      <!-- Letter 1 -->
      <div class="seo-letter-box">
        <div class="seo-letter-header">
          <span class="seo-letter-tag">Örnek 1: Bozuk Ürün / Online Alışveriş Şikayeti (Laptop / Telefon)</span>
          <button type="button" class="seo-btn-copy" onclick="copyText('letter-1-content')">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="letter-1-content">Sehr geehrte Damen und Herren,

ich schreibe Ihnen diese E-Mail, weil ich am 12. Oktober in Ihrem Online-Shop ein Notebook (Bestellnummer: #49281) gekauft habe und leider sehr unzufrieden mit der Lieferung bin.

In Ihrer Anzeige haben Sie versprochen, dass das Gerät neu und einwandfrei funktioniert. Als das Paket gestern ankam, musste ich jedoch feststellen, dass der Bildschirm beschädigt ist und das Notebook sich überhaupt nicht einschalten lässt. Außerdem fehlte das Ladekabel im Karton.

Da ich das Gerät dringend für meine Arbeit im Homeoffice brauche, ist diese Situation für mich sehr ärgerlich.

Aus diesem Grund bitte ich Sie, mir entweder so schnell wie möglich ein neues, funktionierendes Ersatzgerät zu schicken oder mir den vollen Kaufpreis auf mein Bankkonto zu erstatten.

Ich hoffe auf eine schnelle Lösung des Problems und erwarte Ihre Rückmeldung bis zum Ende dieser Woche.

Mit freundlichen Grüßen
Max Mustermann</div>
        <div class="seo-letter-annotations">
          💡 <strong>Neden Tam Puan?</strong> Giriş (Satın alma tarihi ve sipariş no), sorunlar (ekran kırık, şarj aleti yok), gerekçe (iş için acil ihtiyaç) ve net çözüm (değişim veya para iadesi) net bir dille sunulmuştur.
        </div>
      </div>

      <!-- Letter 2 -->
      <div class="seo-letter-box">
        <div class="seo-letter-header">
          <span class="seo-letter-tag">Örnek 2: Tatil & Otel Şikayeti (Pauschalreise / Baulärm)</span>
          <button type="button" class="seo-btn-copy" onclick="copyText('letter-2-content')">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="letter-2-content">Sehr geehrte Damen und Herren,

vom 01. bis zum 08. August habe ich über Ihr Reisebüro einen einwöchigen Urlaub im Hotel „Sonnenblick“ gebucht. Leider entsprach der Aufenthalt überhaupt nicht den Angaben in Ihrem Prospekt.

Sie hatten im Prospekt versprochen, dass das Hotel ruhig gelegen ist und jedes Zimmer Meerblick hat. Vor Ort gab es jedoch direkt vor meinem Balkon eine laute Baustelle, die schon morgens um 6:30 Uhr begann. An Erholung war daher nicht zu denken. Zudem war der Pool während der gesamten Woche wegen Reparaturarbeiten geschlossen.

Ich habe mich sofort bei der Reiseleitung vor Ort beschwert, aber man konnte mir leider kein anderes Zimmer anbieten.

Da ich für Leistungen bezahlt habe, die nicht erbracht wurden, fordere ich eine Preisminderung von 30 % des Reisepreises. Bitte überweisen Sie den Betrag von 300 Euro innerhalb von zwei Wochen auf das Ihnen bekannte Konto.

Mit freundlichen Grüßen
Ayşe Yılmaz</div>
        <div class="seo-letter-annotations">
          💡 <strong>Neden Tam Puan?</strong> Beklenti ile gerçek arasındaki fark (Prospekt vs. Realität) çok iyi kurulmuş, otelde yapılan ilk şikayete değinilmiş ve %30 net tazminat talebi belirtilmiştir.
        </div>
      </div>

      <!-- Letter 3 -->
      <div class="seo-letter-box">
        <div class="seo-letter-header">
          <span class="seo-letter-tag">Örnek 3: Dil Kursu Şikayeti (Unterrichtsausfall & Große Gruppe)</span>
          <button type="button" class="seo-btn-copy" onclick="copyText('letter-3-content')">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="letter-3-content">Sehr geehrte Damen und Herren,

ich nehme seit vier Wochen an Ihrem B1-Intensivsprachkurs teil. Ich habe mich für Ihre Sprachschule entschieden, weil Sie mit kleinen Gruppen von maximal 10 Personen geworben haben.

Leider muss ich Ihnen mitteilen, dass in meiner Gruppe aktuell 18 Teilnehmer sind. Deshalb kommt man im Unterricht kaum zu Wort und das Sprechen wird fast gar nicht geübt. Zudem sind in den letzten zwei Wochen vier Unterrichtstage ohne Vertretung ausgefallen.

Für die Vorbereitung auf die telc B1 Prüfung ist diese Situation sehr unbefriedigend.

Ich erwarte, dass die ausgefallenen Stunden nachgeholt werden oder Sie mir einen Teil der Kursgebühren zurückerstatten. Sollte sich die Situation nicht bessern, möchte ich von dem Kurs zurücktreten.

Über Ihre baldige Antwort würde ich mich freuen.

Mit freundlichen Grüßen
Ali Demir</div>
        <div class="seo-letter-annotations">
          💡 <strong>Neden Tam Puan?</strong> Reklamdaki vaat (10 kişi) ile sınıfın durumu (18 kişi) karşılaştırılmış, telc sınavı hazırlığı riski vurgulanmış ve telafi dersi veya para iadesi şartı koşulmuştur.
        </div>
      </div>
    </section>

    <!-- Section 3: Redemittel Cheat Sheet -->
    <section class="seo-card">
      <h2 class="seo-card-title">📚 Beschwerdebrief İçin Altın Redemittel Tablosu</h2>
      <div class="seo-table-wrapper">
        <table class="seo-table">
          <thead>
            <tr>
              <th>Bölüm</th>
              <th>Almanca Kalıp (Redemittel)</th>
              <th>Türkçe Anlamı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Hitap (Anrede)</strong></td>
              <td>Sehr geehrte Damen und Herren, / Sehr geehrte(r) Frau/Herr...</td>
              <td>Sayın Yetkili, / Sayın Bay/Bayan...</td>
            </tr>
            <tr>
              <td><strong>Giriş & Neden</strong></td>
              <td>Ich schreibe Ihnen, weil ich mich über ... beschweren möchte.</td>
              <td>... hakkında şikayette bulunmak istediğim için size yazıyorum.</td>
            </tr>
            <tr>
              <td><strong>Vaat vs Gerçek</strong></td>
              <td>In Ihrer Anzeige haben Sie versprochen, dass ..., aber in Wirklichkeit ...</td>
              <td>İlanınızda ... vadetmiştiniz, fakat gerçekte ...</td>
            </tr>
            <tr>
              <td><strong>Hayal Kırıklığı</strong></td>
              <td>Leider entsprach das Produkt / der Service nicht meinen Erwartungen.</td>
              <td>Maalesef ürün / hizmet beklentilerimi karşılamadı.</td>
            </tr>
            <tr>
              <td><strong>Talep Bildirme</strong></td>
              <td>Aus diesem Grund fordere ich Sie auf, mir den Betrag zu erstatten.</td>
              <td>Bu nedenle paranın tarafıma iade edilmesini talep ediyorum.</td>
            </tr>
            <tr>
              <td><strong>Süre Koyma (Frist)</strong></td>
              <td>Ich erwarte Ihre Rückmeldung bis zum [Tarih].</td>
              <td>[Tarih] tarihine kadar geri dönüşünüzü bekliyorum.</td>
            </tr>
            <tr>
              <td><strong>Kapanış</strong></td>
              <td>Mit freundlichen Grüßen</td>
              <td>Saygılarımla</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="seo-card">
      <h2 class="seo-card-title">❓ Sıkça Sorulan Sorular (FAQ)</h2>
      <div class="seo-faq-item">
        <div class="seo-faq-q">Sınavda resmi mektupta isim uydurabilir miyim? ▾</div>
        <div class="seo-faq-a">Evet, kendi gerçek adınızı yazabileceğiniz gibi 'Max Mustermann' veya 'Erika Musterfrau' gibi temsili bir isim de kullanabilirsiniz. Önemli olan imzanın ve kapanışın olmasıdır.</div>
      </div>
      <div class="seo-faq-item">
        <div class="seo-faq-q">Kelime sayısı 70'in altında kalırsa ne olur? ▾</div>
        <div class="seo-faq-a">telc kılavuzuna göre kelime sayısı yetersiz olduğunda sınav değerlendiricileri 'Aufgabenbewältigung' (görev tamamlama) puanından puan kırar. Tavsiye edilen güvenli aralık 75–85 kelimedir.</div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="seo-cta-banner">
      <h2 class="seo-cta-title">telc B1 Sınavına Bizimle Hazırlanın!</h2>
      <p class="seo-cta-desc">
        Kelimeleri ezberlemek yerine 2.000+ interaktif B1 kelime haznesi, sesli konuşma simülasyonları ve okuma parçaları ile sınavı tek seferde geçin.
      </p>
      <a href="lesen.html" class="seo-cta-btn">📖 İnteraktif Okuma & Dilbilgisi Pratiği Yap →</a>
    </section>
    """
    html += get_html_footer()
    output_path = os.path.join(ROOT_DIR, "telc-b1-beschwerdebrief-beispiel.html")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html)
    print("✅ Generated:", output_path)

# ==============================================================================
# 2. EINLADUNG SCHREIBEN PAGE
# ==============================================================================
def generate_einladung():
    url = f"{BASE_URL}/telc-b1-einladung-schreiben.html"
    title = "telc B1 Einladung Schreiben — Doğum Günü & Parti Davetiyesi Örnekleri (2026)"
    desc = "telc Deutsch B1 Yazma sınavı için doğum günü, ev taşıma ve barbekü partisi davet mektubu örnekleri, hazır kalıplar ve yüksek puan alma taktikleri."
    kw = "telc b1 einladung schreiben, b1 einladung musterloesung, b1 brief einladung geburtstag, telc b1 davetiye mektubu, telc b1 yazma ornekleri"

    schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "telc B1 Einladung mektubunda nelere mutlaka yer verilmelidir?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "1. Kutlama sebebi (Doğum günü, yeni ev, terfi). 2. Parti tarihi, başlangıç saati ve açık adres. 3. Ulaşım tarifi (metro, otobüs veya park yeri). 4. Katılım onayı ricası (RSVP / Bitte gib mir Bescheid) ve yiyecek/içecek getirme teklifi."
                }
            },
            {
                "@type": "Question",
                "name": "Samimi bir davet mektubunda hangi hitap ve kapanış kullanılır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tek kişiye hitap ederken 'Liebe Sarah,' veya 'Lieber Michael,', birden fazla kişiye hitap ederken 'Liebe Freunde,' veya 'Hallo zusammen,' kullanılır. Kapanışta ise 'Liebe Grüße' veya 'Herzliche Grüße' tercih edilir."
                }
            }
        ]
    }

    html = get_html_header(title, desc, url, kw)
    html += f"""
    <script type="application/ld+json">
    {json.dumps(schema, ensure_ascii=False, indent=2)}
    </script>

    <div class="seo-breadcrumbs">
      <a href="index.html">DeutschLernen</a> » <a href="dashboard.html">B1 Hazırlık</a> » <span>telc B1 Einladung Schreiben</span>
    </div>

    <section class="seo-hero">
      <div class="seo-badge-row">
        <span class="seo-badge">telc Deutsch B1</span>
        <span class="seo-badge-green">Schreiben Teil 1 & 2</span>
        <span class="seo-badge-gold">💌 Davetiye Rehberi</span>
      </div>
      <h1 class="seo-hero-title">telc B1 Einladung Schreiben: En İyi Örnekler & Kalıplar</h1>
      <p class="seo-hero-subtitle">
        Almanca B1 sınavlarında arkadaşlara, komşulara veya iş arkadaşlarına davet mektubu yazmak en sık rastlanan senaryolardan biridir.
        Doğum günü, ev kutlaması (Einweihungsparty) ve yaz partisi için en yüksek puanlı hazır örnekler burada!
      </p>
    </section>

    <!-- Section 1: The 5 Essential Components -->
    <section class="seo-card">
      <h2 class="seo-card-title">📌 Kusursuz Bir B1 Davet Mektubunun 5 Unsuru</h2>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:14px;">
        <div style="background:var(--seo-bg-secondary); padding:16px; border-radius:10px; border:1px solid var(--seo-border);">
          <div style="font-weight:800; color:var(--seo-text-blue);">1. Anlass (Sebep)</div>
          <div style="font-size:12.5px; color:var(--seo-text-muted); margin-top:4px;">Neyi kutluyorsunuz? (Doğum günü, yeni ev, sınav başarısı).</div>
        </div>
        <div style="background:var(--seo-bg-secondary); padding:16px; border-radius:10px; border:1px solid var(--seo-border);">
          <div style="font-weight:800; color:var(--seo-text-green);">2. Zeit & Ort (Zaman)</div>
          <div style="font-size:12.5px; color:var(--seo-text-muted); margin-top:4px;">Tarih, gün ve saat net olmalı (am Samstag um 18:00 Uhr).</div>
        </div>
        <div style="background:var(--seo-bg-secondary); padding:16px; border-radius:10px; border:1px solid var(--seo-border);">
          <div style="font-weight:800; color:var(--seo-text-gold);">3. Wegbeschreibung (Ulaşım)</div>
          <div style="font-size:12.5px; color:var(--seo-text-muted); margin-top:4px;">Toplu taşıma veya araba ile nasıl gelineceğini belirtin.</div>
        </div>
        <div style="background:var(--seo-bg-secondary); padding:16px; border-radius:10px; border:1px solid var(--seo-border);">
          <div style="font-weight:800; color:#c084fc);">4. Mitbringen (İkramlar)</div>
          <div style="font-size:12.5px; color:var(--seo-text-muted); margin-top:4px;">Yiyecek, içecek veya müzik getirilmesini rica edin.</div>
        </div>
        <div style="background:var(--seo-bg-secondary); padding:16px; border-radius:10px; border:1px solid var(--seo-border);">
          <div style="font-weight:800; color:#f87171);">5. Rückmeldung (Cevap)</div>
          <div style="font-size:12.5px; color:var(--seo-text-muted); margin-top:4px;">Katılıp katılamayacaklarını bildirmelerini isteyin (RSVP).</div>
        </div>
      </div>
    </section>

    <!-- Section 2: 3 Full Examples -->
    <section class="seo-card">
      <h2 class="seo-card-title">💌 3 Hazır B1 Davet Mektubu Örneği</h2>

      <!-- Letter 1 -->
      <div class="seo-letter-box">
        <div class="seo-letter-header">
          <span class="seo-letter-tag">Örnek 1: Doğum Günü Partisi Davetiyesi (Geburtstagsfeier)</span>
          <button type="button" class="seo-btn-copy" onclick="copyText('einladung-1-content')">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="einladung-1-content">Liebe Freunde,

wie ihr wisst, habe ich nächste Woche Geburtstag und werde 30 Jahre alt! Das möchte ich natürlich unbedingt mit euch gemeinsam feiern.

Ich lade euch herzlich zu meiner Geburtstagsfeier am kommenden Samstag, dem 24. Oktober, ab 19:00 Uhr bei mir zu Hause ein.

Für leckeres Essen vom Grill und kühle Getränke ist bereits gesorgt. Wenn ihr möchtet, könnt ihr aber gerne einen kleinen Salat oder ein Dessert mitbringen. Da wir auch ein bisschen Musik hören und tanzen wollen, bringt gute Laune mit!

Ihr könnt ganz einfach mit der U-Bahnlinie U2 bis zur Haltestelle „Stadtmitte“ fahren, von dort sind es nur fünf Minuten zu Fuß.

Bitte gebt mir bis spätestens Donnerstag Bescheid, ob ihr kommen könnt, damit ich besser planen kann.

Ich freue mich schon sehr auf euch!

Liebe Grüße
Ege</div>
      </div>

      <!-- Letter 2 -->
      <div class="seo-letter-box">
        <div class="seo-letter-header">
          <span class="seo-letter-tag">Örnek 2: Yeni Eve Taşınma Kutlaması (Einweihungsparty)</span>
          <button type="button" class="seo-btn-copy" onclick="copyText('einladung-2-content')">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="einladung-2-content">Hallo zusammen,

endlich ist es geschafft: Ich bin vor zwei Wochen in meine neue Wohnung im Zentrum umgezogen und die meisten Kisten sind ausgepackt!

Um mein neues Zuhause einzuweihen, gebe ich am Freitag, dem 15. November, ab 18:30 Uhr eine kleine Einweihungsparty. Ihr seid alle herzlich eingeladen!

Ich sorge für Snacks, Pizza und Getränke. Ihr braucht keine Geschenke mitzubringen, eure Anwesenheit ist das beste Geschenk. Wer möchte, kann aber gerne eine Musik-Playlist vorbereiten.

Meine neue Adresse lautet: Schillerstraße 14, 3. Stock links. Parkplätze gibt es direkt hinter dem Gebäude.

Sagt mir bitte bis Mittwoch kurz per WhatsApp Bescheid, ob ihr dabei seid.

Herzliche Grüße
Deniz</div>
      </div>

      <!-- Letter 3 -->
      <div class="seo-letter-box">
        <div class="seo-letter-header">
          <span class="seo-letter-tag">Örnek 3: Komşulara Yaz/Barbekü Daveti (Sommerfest / Grillparty)</span>
          <button type="button" class="seo-btn-copy" onclick="copyText('einladung-3-content')">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="einladung-3-content">Liebe Nachbarinnen und Nachbarn,

der Sommer ist da und das Wetter am Wochenende soll fantastisch werden! Deshalb möchte ich am Sonntag ab 15:00 Uhr ein kleines Grillfest in unserem Gemeinschaftsgarten veranstalten.

Es wäre eine wunderbare Gelegenheit, sich besser kennenzulernen und einen gemütlichen Nachmittag miteinander zu verbringen.

Ich werde den Grill vorbereiten und alkoholfreie Getränke sowie Grillkohle besorgen. Es wäre toll, wenn jede Partei ihr eigenes Grillgut und vielleicht eine Kleinigkeit für das Buffet (Salat, Brot oder Soßen) mitbringen könnte.

Bei schlechtem Wetter können wir uns im Partyraum im Keller treffen.

Bitte werft bis Freitag einen kurzen Zettel mit eurer Zusage in meinen Briefkasten (Wohnung 4).

Ich freue mich auf unser Fest!

Beste Grüße
Anna Becker</div>
      </div>
    </section>

    <!-- Section 3: Redemittel Table -->
    <section class="seo-card">
      <h2 class="seo-card-title">📖 Davet Mektuplarında Kullanabileceğiniz Kalıplar</h2>
      <div class="seo-table-wrapper">
        <table class="seo-table">
          <thead>
            <tr>
              <th>İşlev</th>
              <th>Almanca Kalıp (Redemittel)</th>
              <th>Türkçe Çevirisi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Davet Etme</strong></td>
              <td>Ich möchte dich/euch ganz herzlich zu meiner Party einladen.</td>
              <td>Seni/sizleri partime yürekten davet etmek istiyorum.</td>
            </tr>
            <tr>
              <td><strong>Zaman Belirtme</strong></td>
              <td>Die Feier findet am Samstag um 19:00 Uhr statt.</td>
              <td>Kutlama Cumartesi günü saat 19:00'da gerçekleşecek.</td>
            </tr>
            <tr>
              <td><strong>İkram / Hazırlık</strong></td>
              <td>Für Essen und Getränke ist gesorgt.</td>
              <td>Yiyecek ve içecekler hazırlandı / mevcut.</td>
            </tr>
            <tr>
              <td><strong>Getirme Rica Etme</strong></td>
              <td>Könntest du vielleicht einen Salat oder Kuchen mitbringen?</td>
              <td>Acaba bir salata veya kek getirebilir misin?</td>
            </tr>
            <tr>
              <td><strong>Geri Dönüş İsteme</strong></td>
              <td>Bitte sag mir bis Freitag Bescheid, ob du kommen kannst.</td>
              <td>Gelebilecek misin diye lütfen Cuma'ya kadar haber ver.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="seo-cta-banner">
      <h2 class="seo-cta-title">Yazma ve Konuşmada Kendinizi Test Edin</h2>
      <p class="seo-cta-desc">
        telc Deutsch B1 Yazma sınavındaki tüm soru tiplerini, mektup formatlarını ve 2.000 kelimelik akıllı antrenörü hemen deneyin.
      </p>
      <a href="trainer.html" class="seo-cta-btn">⚡ 2.000 Kelime Antrenörünü Aç →</a>
    </section>
    """
    html += get_html_footer()
    output_path = os.path.join(ROOT_DIR, "telc-b1-einladung-schreiben.html")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html)
    print("✅ Generated:", output_path)

# ==============================================================================
# 3. TELC B1 PUNKTE-RECHNER (SCORE CALCULATOR)
# ==============================================================================
def generate_punkterechner():
    url = f"{BASE_URL}/telc-b1-punkte-rechner.html"
    title = "telc B1 Punkte Rechner (2026) — Sınav Puanı ve Not Hesaplama Aracı"
    desc = "Online interaktif telc Deutsch B1 Puan Hesaplama Aracı. Leseverstehen, Sprachbausteine, Hörverstehen, Schreiben ve Sprechen puanlarınızı girin, sınavı geçip geçmediğinizi ve not derecenizi anında öğrenin!"
    kw = "telc b1 punkterechner, telc b1 puan hesaplama, telc b1 not hesaplama, telc b1 bestehen wie viele punkte, telc b1 notenskala, telc b1 puan tablosu"

    schema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "telc B1 Punkte-Rechner",
        "url": url,
        "description": desc,
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "All",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR"
        }
    }

    html = get_html_header(title, desc, url, kw)
    html += f"""
    <script type="application/ld+json">
    {json.dumps(schema, ensure_ascii=False, indent=2)}
    </script>

    <div class="seo-breadcrumbs">
      <a href="index.html">DeutschLernen</a> » <a href="dashboard.html">Araçlar</a> » <span>telc B1 Punkte-Rechner</span>
    </div>

    <section class="seo-hero">
      <div class="seo-badge-row">
        <span class="seo-badge">Resmi telc B1 Standartları</span>
        <span class="seo-badge-green">İnteraktif Hesaplama</span>
        <span class="seo-badge-gold">Toplam 300 Puan</span>
      </div>
      <h1 class="seo-hero-title">🧮 telc B1 Puan ve Not Hesaplama Aracı</h1>
      <p class="seo-hero-subtitle">
        telc Deutsch B1 sınavında hangi bölümden kaç puan aldığınızda sınavı geçersiniz?
        Aşağıdaki kaydırıcıları (slider) hareket ettirerek puanlarınızı girin; yazılı, sözlü barajları ve başarı derecenizi anında görün!
      </p>
    </section>

    <!-- Calculator App Container -->
    <section class="seo-card">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:20px;">
        <h2 class="seo-card-title" style="margin:0;">⚙️ Puanlarınızı Belirleyin</h2>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button type="button" class="seo-nav-link" onclick="setPreset('pass')">🟢 Kritik Geçme (180 Pkt)</button>
          <button type="button" class="seo-nav-link" onclick="setPreset('good')">🔵 İyi Not (240 Pkt)</button>
          <button type="button" class="seo-nav-link" onclick="setPreset('max')">⭐ Tam Puan (300 Pkt)</button>
        </div>
      </div>

      <div class="calc-grid">
        <!-- 1. Schriftliche Prüfung (Written) -->
        <div class="calc-group">
          <div class="calc-group-title">
            <span>📖 1. Leseverstehen</span>
            <span id="label-lesen-total">75 / 75 Pkt</span>
          </div>
          <div class="calc-row">
            <div class="calc-label-row"><span>Teil 1 (Genel Anlama):</span> <strong id="val-l1">25 Pkt</strong></div>
            <input type="range" min="0" max="25" value="25" step="5" class="calc-slider" id="slider-l1" oninput="recalc()">
          </div>
          <div class="calc-row">
            <div class="calc-label-row"><span>Teil 2 (Ayrıntılı Anlama):</span> <strong id="val-l2">25 Pkt</strong></div>
            <input type="range" min="0" max="25" value="25" step="5" class="calc-slider" id="slider-l2" oninput="recalc()">
          </div>
          <div class="calc-row">
            <div class="calc-label-row"><span>Teil 3 (Seçici / İlanlar):</span> <strong id="val-l3">25 Pkt</strong></div>
            <input type="range" min="0" max="25" value="25" step="2.5" class="calc-slider" id="slider-l3" oninput="recalc()">
          </div>
        </div>

        <!-- 2. Sprachbausteine -->
        <div class="calc-group">
          <div class="calc-group-title">
            <span>🧩 2. Sprachbausteine</span>
            <span id="label-sb-total">30 / 30 Pkt</span>
          </div>
          <div class="calc-row">
            <div class="calc-label-row"><span>Teil 1 (Mektup Boşluk):</span> <strong id="val-sb1">15 Pkt</strong></div>
            <input type="range" min="0" max="15" value="15" step="1.5" class="calc-slider" id="slider-sb1" oninput="recalc()">
          </div>
          <div class="calc-row">
            <div class="calc-label-row"><span>Teil 2 (Kelime Havuzu):</span> <strong id="val-sb2">15 Pkt</strong></div>
            <input type="range" min="0" max="15" value="15" step="1.5" class="calc-slider" id="slider-sb2" oninput="recalc()">
          </div>
        </div>

        <!-- 3. Hörverstehen -->
        <div class="calc-group">
          <div class="calc-group-title">
            <span>🎧 3. Hörverstehen</span>
            <span id="label-hoeren-total">75 / 75 Pkt</span>
          </div>
          <div class="calc-row">
            <div class="calc-label-row"><span>Teil 1 (Kısa Mesajlar):</span> <strong id="val-h1">25 Pkt</strong></div>
            <input type="range" min="0" max="25" value="25" step="5" class="calc-slider" id="slider-h1" oninput="recalc()">
          </div>
          <div class="calc-row">
            <div class="calc-label-row"><span>Teil 2 (Radyo / Röportaj):</span> <strong id="val-h2">25 Pkt</strong></div>
            <input type="range" min="0" max="25" value="25" step="2.5" class="calc-slider" id="slider-h2" oninput="recalc()">
          </div>
          <div class="calc-row">
            <div class="calc-label-row"><span>Teil 3 (Günlük Konuşmalar):</span> <strong id="val-h3">25 Pkt</strong></div>
            <input type="range" min="0" max="25" value="25" step="5" class="calc-slider" id="slider-h3" oninput="recalc()">
          </div>
        </div>

        <!-- 4. Schreiben -->
        <div class="calc-group">
          <div class="calc-group-title">
            <span>✍️ 4. Schriftlicher Ausdruck</span>
            <span id="label-schreiben-total">45 / 45 Pkt</span>
          </div>
          <div class="calc-row">
            <div class="calc-label-row"><span>Mektup / E-Posta:</span> <strong id="val-schreiben">45 Pkt</strong></div>
            <input type="range" min="0" max="45" value="45" step="1" class="calc-slider" id="slider-schreiben" oninput="recalc()">
          </div>
          <div style="font-size:12px; color:var(--seo-text-muted);">
            Yazma mektubu telc B1 değerlendiricileri tarafından 4 kritere göre 45 puan üzerinden değerlendirilir.
          </div>
        </div>

        <!-- 5. Mündliche Prüfung (Oral) -->
        <div class="calc-group" style="grid-column: 1 / -1;">
          <div class="calc-group-title">
            <span>🗣️ 5. Mündliche Prüfung (Sözlü Sınav — Max 75 Puan, Baraj: 45 Pkt)</span>
            <span id="label-sprechen-total">75 / 75 Pkt</span>
          </div>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:14px;">
            <div class="calc-row">
              <div class="calc-label-row"><span>Teil 1 (Tanışma):</span> <strong id="val-s1">15 Pkt</strong></div>
              <input type="range" min="0" max="15" value="15" step="1" class="calc-slider" id="slider-s1" oninput="recalc()">
            </div>
            <div class="calc-row">
              <div class="calc-label-row"><span>Teil 2 (Konu Üzerine Konuşma):</span> <strong id="val-s2">30 Pkt</strong></div>
              <input type="range" min="0" max="30" value="30" step="1" class="calc-slider" id="slider-s2" oninput="recalc()">
            </div>
            <div class="calc-row">
              <div class="calc-label-row"><span>Teil 3 (Ortak Görev Çözme):</span> <strong id="val-s3">30 Pkt</strong></div>
              <input type="range" min="0" max="30" value="30" step="1" class="calc-slider" id="slider-s3" oninput="recalc()">
            </div>
          </div>
        </div>
      </div>

      <!-- Live Results Box -->
      <div class="calc-result-box" id="calc-result-card">
        <div style="font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--seo-text-gold);">
          Hesaplanan Toplam Sınav Puanı
        </div>
        <div class="calc-score-big" id="score-display">300 / 300</div>
        <div>
          <span class="calc-status-badge calc-status-pass" id="status-badge">🎉 Sehr gut (1) — Sınavı Geçtiniz!</span>
        </div>
        <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap; font-size:14px; margin-top:12px;">
          <div>📝 <strong>Yazılı Puanı:</strong> <span id="res-written">225 / 225 Pkt (%100)</span> (Baraj: 135)</div>
          <div>🗣️ <strong>Sözlü Puanı:</strong> <span id="res-oral">75 / 75 Pkt (%100)</span> (Baraj: 45)</div>
        </div>
        <div id="rule-alert" style="margin-top:14px; font-size:13.5px; color:var(--seo-text-muted);"></div>
      </div>
    </section>

    <!-- Section 2: telc B1 Passing Rules Table -->
    <section class="seo-card">
      <h2 class="seo-card-title">📊 telc Deutsch B1 Not Ölçeği (Notenskala)</h2>
      <div class="seo-table-wrapper">
        <table class="seo-table">
          <thead>
            <tr>
              <th>Puan Aralığı</th>
              <th>Yüzdelik Dilim</th>
              <th>Almanca Not</th>
              <th>Türkçe Karşılığı</th>
              <th>Durum</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:rgba(16, 185, 129, 0.1);">
              <td><strong>270 – 300 Puan</strong></td>
              <td>%90 – %100</td>
              <td><strong>Sehr gut (1)</strong></td>
              <td>Pekiyi</td>
              <td>✅ Başarılı</td>
            </tr>
            <tr>
              <td><strong>240 – 269.5 Puan</strong></td>
              <td>%80 – %89.5</td>
              <td><strong>Gut (2)</strong></td>
              <td>İyi</td>
              <td>✅ Başarılı</td>
            </tr>
            <tr>
              <td><strong>210 – 239.5 Puan</strong></td>
              <td>%70 – %79.5</td>
              <td><strong>Befriedigend (3)</strong></td>
              <td>Orta</td>
              <td>✅ Başarılı</td>
            </tr>
            <tr>
              <td><strong>180 – 209.5 Puan</strong></td>
              <td>%60 – %69.5</td>
              <td><strong>Ausreichend (4)</strong></td>
              <td>Geçer</td>
              <td>✅ Başarılı (Baraj)</td>
            </tr>
            <tr style="background:rgba(239, 68, 68, 0.1);">
              <td><strong>0 – 179.5 Puan</strong></td>
              <td>< %60</td>
              <td><strong>Nicht bestanden</strong></td>
              <td>Kaldı</td>
              <td>❌ Başarısız</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 3: The 60% Dual Threshold Rule Explained -->
    <section class="seo-card">
      <h2 class="seo-card-title">⚠️ Kritik telc Kuralı: İki Ayrı Barajı Geçmek Zorundasınız!</h2>
      <p style="font-size:14.5px; line-height:1.7; color:var(--seo-text-main);">
        telc Deutsch B1 sınavında başarılı sayılmak için toplamda 180 puan almak <strong>tek başına yetmez</strong>! Sınav iki ana bloktan oluşur ve her iki bloktan da en az %60 almak şarttır:
      </p>
      <ul style="font-size:14px; color:var(--seo-text-muted); line-height:1.8;">
        <li><strong>Yazılı Sınav (Schriftliche Prüfung):</strong> Maksimum 225 puandır. Geçmek için en az <strong>135 puan (%60)</strong> almalısınız.</li>
        <li><strong>Sözlü Sınav (Mündliche Prüfung):</strong> Maksimum 75 puandır. Geçmek için en az <strong>45 puan (%60)</strong> almalısınız.</li>
      </ul>
      <div style="background:rgba(59, 130, 246, 0.1); border-left:3px solid var(--seo-accent-blue); padding:14px; border-radius:6px; font-size:13.5px; margin-top:12px;">
        💡 <strong>Kısmi Geçme Hakkı (Teilprüfung):</strong> Örneğin sözlü sınavı geçtiniz (ör. 55 puan) fakat yazılı sınavdan 120 alıp kaldınız; telc kurallarına göre <strong>1 takvim yılı içinde</strong> sadece kaldığınız yazılı sınava tekrar girip sertifikanızı tamamlayabilirsiniz!
      </div>
    </section>

    <!-- CTA Section -->
    <section class="seo-cta-banner">
      <h2 class="seo-cta-title">Eksik Puanlarınızı Hemen Tamamlayın!</h2>
      <p class="seo-cta-desc">
        Hangi bölümde zayıf olduğunuzu gördünüz mü? Hemen ilgili modülümüze tıklayarak ücretsiz sınav simülasyonları ile açıklarınızı kapatın.
      </p>
      <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
        <a href="lesen.html" class="seo-cta-btn">📖 Lesen & Sprachbausteine Pratiği →</a>
        <a href="sprechen.html" class="seo-cta-btn" style="background:#1e293b; color:#ffffff;">🗣️ Sözlü Sınav Simülatörü →</a>
      </div>
    </section>

    <script>
      function getVal(id) {{ return parseFloat(document.getElementById(id).value) || 0; }}

      function recalc() {{
        const l1 = getVal('slider-l1');
        const l2 = getVal('slider-l2');
        const l3 = getVal('slider-l3');
        document.getElementById('val-l1').textContent = l1 + ' Pkt';
        document.getElementById('val-l2').textContent = l2 + ' Pkt';
        document.getElementById('val-l3').textContent = l3 + ' Pkt';
        const lesenTotal = l1 + l2 + l3;
        document.getElementById('label-lesen-total').textContent = lesenTotal + ' / 75 Pkt';

        const sb1 = getVal('slider-sb1');
        const sb2 = getVal('slider-sb2');
        document.getElementById('val-sb1').textContent = sb1 + ' Pkt';
        document.getElementById('val-sb2').textContent = sb2 + ' Pkt';
        const sbTotal = sb1 + sb2;
        document.getElementById('label-sb-total').textContent = sbTotal + ' / 30 Pkt';

        const h1 = getVal('slider-h1');
        const h2 = getVal('slider-h2');
        const h3 = getVal('slider-h3');
        document.getElementById('val-h1').textContent = h1 + ' Pkt';
        document.getElementById('val-h2').textContent = h2 + ' Pkt';
        document.getElementById('val-h3').textContent = h3 + ' Pkt';
        const hoerenTotal = h1 + h2 + h3;
        document.getElementById('label-hoeren-total').textContent = hoerenTotal + ' / 75 Pkt';

        const schreibenTotal = getVal('slider-schreiben');
        document.getElementById('val-schreiben').textContent = schreibenTotal + ' Pkt';
        document.getElementById('label-schreiben-total').textContent = schreibenTotal + ' / 45 Pkt';

        const s1 = getVal('slider-s1');
        const s2 = getVal('slider-s2');
        const s3 = getVal('slider-s3');
        document.getElementById('val-s1').textContent = s1 + ' Pkt';
        document.getElementById('val-s2').textContent = s2 + ' Pkt';
        document.getElementById('val-s3').textContent = s3 + ' Pkt';
        const oralTotal = s1 + s2 + s3;
        document.getElementById('label-sprechen-total').textContent = oralTotal + ' / 75 Pkt';

        const writtenTotal = lesenTotal + sbTotal + hoerenTotal + schreibenTotal;
        const grandTotal = writtenTotal + oralTotal;

        document.getElementById('score-display').textContent = grandTotal + ' / 300';
        document.getElementById('res-written').textContent = writtenTotal + ' / 225 Pkt (%' + Math.round((writtenTotal / 225) * 100) + ')';
        document.getElementById('res-oral').textContent = oralTotal + ' / 75 Pkt (%' + Math.round((oralTotal / 75) * 100) + ')';

        const writtenPassed = writtenTotal >= 135;
        const oralPassed = oralTotal >= 45;

        const badge = document.getElementById('status-badge');
        const alertBox = document.getElementById('rule-alert');

        if (writtenPassed && oralPassed) {{
          badge.className = 'calc-status-badge calc-status-pass';
          let gradeName = '';
          if (grandTotal >= 270) gradeName = 'Sehr gut (1) — Üstün Başarı! 🌟';
          else if (grandTotal >= 240) gradeName = 'Gut (2) — İyi Derece! 🎉';
          else if (grandTotal >= 210) gradeName = 'Befriedigend (3) — Orta Derece! 👍';
          else gradeName = 'Ausreichend (4) — Geçer Not! ✅';

          badge.textContent = '🎉 ' + gradeName + ' (' + grandTotal + ' Puan)';
          alertBox.innerHTML = '✨ <strong>Tebrikler!</strong> Hem yazılı (%60+) hem sözlü (%60+) barajını geçerek resmi telc Deutsch B1 sertifikasını almaya hak kazandınız.';
        }} else {{
          badge.className = 'calc-status-badge calc-status-fail';
          badge.textContent = '❌ Nicht bestanden (' + grandTotal + ' Puan)';
          let fails = [];
          if (!writtenPassed) fails.push('Yazılı Sınav Barajı (135 Puan)');
          if (!oralPassed) fails.push('Sözlü Sınav Barajı (45 Puan)');
          alertBox.innerHTML = '⚠️ <strong>Dikkat:</strong> ' + fails.join(' ve ') + ' aşılamadığı için sınav başarısız sayılır. Ancak geçtiğiniz bölümü 1 yıl saklayabilirsiniz!';
        }}
      }}

      function setPreset(type) {{
        if (type === 'max') {{
          document.getElementById('slider-l1').value = 25;
          document.getElementById('slider-l2').value = 25;
          document.getElementById('slider-l3').value = 25;
          document.getElementById('slider-sb1').value = 15;
          document.getElementById('slider-sb2').value = 15;
          document.getElementById('slider-h1').value = 25;
          document.getElementById('slider-h2').value = 25;
          document.getElementById('slider-h3').value = 25;
          document.getElementById('slider-schreiben').value = 45;
          document.getElementById('slider-s1').value = 15;
          document.getElementById('slider-s2').value = 30;
          document.getElementById('slider-s3').value = 30;
        }} else if (type === 'pass') {{
          document.getElementById('slider-l1').value = 15;
          document.getElementById('slider-l2').value = 15;
          document.getElementById('slider-l3').value = 15;
          document.getElementById('slider-sb1').value = 9;
          document.getElementById('slider-sb2').value = 9;
          document.getElementById('slider-h1').value = 15;
          document.getElementById('slider-h2').value = 15;
          document.getElementById('slider-h3').value = 15;
          document.getElementById('slider-schreiben').value = 27;
          document.getElementById('slider-s1').value = 9;
          document.getElementById('slider-s2').value = 18;
          document.getElementById('slider-s3').value = 18;
        }} else if (type === 'good') {{
          document.getElementById('slider-l1').value = 20;
          document.getElementById('slider-l2').value = 20;
          document.getElementById('slider-l3').value = 20;
          document.getElementById('slider-sb1').value = 12;
          document.getElementById('slider-sb2').value = 12;
          document.getElementById('slider-h1').value = 20;
          document.getElementById('slider-h2').value = 20;
          document.getElementById('slider-h3').value = 20;
          document.getElementById('slider-schreiben').value = 36;
          document.getElementById('slider-s1').value = 12;
          document.getElementById('slider-s2').value = 24;
          document.getElementById('slider-s3').value = 24;
        }}
        recalc();
      }}

      window.addEventListener('load', recalc);
    </script>
    """
    html += get_html_footer()
    output_path = os.path.join(ROOT_DIR, "telc-b1-punkte-rechner.html")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html)
    print("✅ Generated:", output_path)

# ==============================================================================
# 4. 16 GERMAN FEDERAL STATE PAGES (LEBEN IN DEUTSCHLAND)
# ==============================================================================
def generate_state_pages(lid_data):
    questions_by_state = lid_data["questions"]
    all_state_codes = sorted(questions_by_state.keys())

    generated_files = []

    for code in all_state_codes:
        slug = STATE_SLUGS.get(code)
        if not slug:
            continue

        meta = STATE_META.get(code, {"de": code, "tr": code, "capital": "Hauptstadt", "pop": "—"})
        filename = f"leben-in-deutschland-{slug}-fragen.html"
        url = f"{BASE_URL}/{filename}"
        title = f"Leben in Deutschland {meta['de']} ({code}) Sınav Soruları — LiD 2026 Testi"
        desc = f"BAMF Leben in Deutschland (LiD) ve Einbürgerungstest {meta['de']} ({meta['tr']}) eyaletine ait 10 resmi sınav sorusu, Türkçe açıklamaları ve doğru cevapları."
        kw = f"leben in deutschland {slug} fragen, einbuergerungstest {slug}, lid {slug} soruları, {meta['de']} vatandaşlık sınavı soruları, bamf {slug} test"

        questions = questions_by_state.get(code, [])

        # Schema FAQ
        faq_items = []
        for q in questions:
            correct_opt = q["optionsDe"][q["correctIndex"]]
            faq_items.append({
                "@type": "Question",
                "name": q["questionDe"],
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f"Richtige Antwort: {correct_opt}. Erklärung: {q.get('explanationDe', '')}"
                }
            })

        schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faq_items
        }

        html = get_html_header(title, desc, url, kw)
        html += f"""
        <script type="application/ld+json">
        {json.dumps(schema, ensure_ascii=False, indent=2)}
        </script>

        <div class="seo-breadcrumbs">
          <a href="index.html">DeutschLernen</a> » <a href="dashboard.html">Leben in Deutschland</a> » <span>{meta['de']} Soruları</span>
        </div>

        <section class="seo-hero">
          <div class="seo-badge-row">
            <span class="seo-badge">BAMF LiD 2026</span>
            <span class="seo-badge-green">Eyalet Kodu: {code}</span>
            <span class="seo-badge-gold">Başkent: {meta['capital']}</span>
          </div>
          <h1 class="seo-hero-title">Leben in Deutschland: {meta['de']} ({meta['tr']}) 10 Sınav Sorusu</h1>
          <p class="seo-hero-subtitle">
            Almanya vatandaşlık ve entegrasyon sınavında (Leben in Deutschland / Einbürgerungstest) karşınıza çıkacak 33 sorunun 3'ü 
            ikamet ettiğiniz eyaletten gelir. İşte BAMF'ın <strong>{meta['de']}</strong> için belirlediği güncel 10 resmi soru ve Türkçe açıklamaları:
          </p>
        </section>

        <!-- Other States Quick Nav -->
        <div style="margin-bottom:12px; font-weight:800; font-size:13px; color:var(--seo-text-gold);">
          🇩🇪 Diğer Eyaletlerin Sorularını İnceleyin:
        </div>
        <div class="state-grid-nav">
        """

        for other_code in all_state_codes:
            o_slug = STATE_SLUGS.get(other_code)
            o_meta = STATE_META.get(other_code, {"de": other_code})
            is_active = (other_code == code)
            html += f"""
            <a href="leben-in-deutschland-{o_slug}-fragen.html" class="state-pill {'active' if is_active else ''}">{o_meta['de']} ({other_code})</a>
            """

        html += f"""
        </div>

        <!-- Questions Section -->
        <section class="seo-card">
          <h2 class="seo-card-title">📝 {meta['de']} İçin 10 Resmi BAMF Sınav Sorusu</h2>
        """

        for q_idx, q in enumerate(questions, 1):
            tr_trans = q.get("translations", {}).get("tr", {})
            q_tr = tr_trans.get("question", "")
            img_html = ""
            if q.get("image"):
                img_html = f'<div style="margin:12px 0;"><img src="{q["image"]}" alt="{q["questionDe"]}" style="max-height:160px; border-radius:8px; border:1px solid var(--seo-border);"></div>'

            html += f"""
            <div class="lid-q-card" id="q-card-{q['id']}">
              <div class="lid-q-header">
                <span>SORU {q_idx} / 10 • SORU NO #{q['id']}</span>
                <span>{code} Eyaleti</span>
              </div>
              <div class="lid-q-text">{q['questionDe']}</div>
              {f'<div class="lid-q-trans">🇹🇷 {q_tr}</div>' if q_tr else ''}
              {img_html}
              <div class="lid-options-list">
            """

            for o_idx, opt_de in enumerate(q["optionsDe"]):
                is_correct = (o_idx == q["correctIndex"])
                html += f"""
                <div class="lid-option {'correct' if is_correct else ''}" onclick="this.classList.toggle('revealed')">
                  <span style="font-weight:800; color:var(--seo-accent-blue);">{chr(65 + o_idx)})</span>
                  <span>{opt_de}</span>
                  {'<span style="margin-left:auto; font-size:12px; font-weight:800; color:var(--seo-accent-green);">✓ Doğru Cevap</span>' if is_correct else ''}
                </div>
                """

            html += f"""
              </div>
              <div class="lid-explanation">
                <strong>💡 Açıklama:</strong> {q.get('explanationTr') or q.get('explanationDe')}
              </div>
            </div>
            """

        html += f"""
        </section>

        <!-- CTA Section -->
        <section class="seo-cta-banner">
          <h2 class="seo-cta-title">Tüm 310 LiD Sorusunu İnteraktif Çözün</h2>
          <p class="seo-cta-desc">
            Genel 300 soru ve 16 eyaletin tamamını kapsayan akıllı antrenörümüzle Leben in Deutschland sınavına eksiksiz hazırlanın.
          </p>
          <a href="index.html#lid-section" class="seo-cta-btn">🇩🇪 310 Soru Antrenörünü Başlat →</a>
        </section>
        """

        html += get_html_footer()
        output_path = os.path.join(ROOT_DIR, filename)
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(html)
        generated_files.append(filename)

    print(f"✅ Generated {len(generated_files)} state pages.")
    return generated_files

# ==============================================================================
# 5. SITEMAP.XML & ROBOTS.TXT
# ==============================================================================
def generate_sitemap(state_files):
    core_pages = [
        {"loc": "", "priority": "1.0", "changefreq": "daily"},
        {"loc": "index.html", "priority": "1.0", "changefreq": "daily"},
        {"loc": "dashboard.html", "priority": "0.9", "changefreq": "daily"},
        {"loc": "lesen.html", "priority": "0.9", "changefreq": "weekly"},
        {"loc": "trainer.html", "priority": "0.9", "changefreq": "weekly"},
        {"loc": "sprechen.html", "priority": "0.8", "changefreq": "weekly"},
        {"loc": "hoeren.html", "priority": "0.8", "changefreq": "weekly"},
        {"loc": "legal.html", "priority": "0.3", "changefreq": "monthly"},
        {"loc": "telc-b1-punkte-rechner.html", "priority": "0.95", "changefreq": "weekly"},
        {"loc": "telc-b1-beschwerdebrief-beispiel.html", "priority": "0.95", "changefreq": "weekly"},
        {"loc": "telc-b1-einladung-schreiben.html", "priority": "0.90", "changefreq": "weekly"},
    ]

    for sf in state_files:
        core_pages.append({
            "loc": sf,
            "priority": "0.85",
            "changefreq": "monthly"
        })

    xml_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ]

    for page in core_pages:
        loc_url = f"{BASE_URL}/{page['loc']}".rstrip('/')
        if not loc_url.endswith('.html') and not loc_url.endswith('/'):
            loc_url += '/'
        xml_lines.append('  <url>')
        xml_lines.append(f'    <loc>{loc_url}</loc>')
        xml_lines.append(f'    <lastmod>{TODAY}</lastmod>')
        xml_lines.append(f'    <changefreq>{page["changefreq"]}</changefreq>')
        xml_lines.append(f'    <priority>{page["priority"]}</priority>')
        xml_lines.append('  </url>')

    xml_lines.append('</urlset>')

    sitemap_path = os.path.join(ROOT_DIR, "sitemap.xml")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write("\n".join(xml_lines) + "\n")
    print(f"✅ Generated sitemap.xml with {len(core_pages)} URLs.")

    robots_txt = f"""User-agent: *
Allow: /

Sitemap: {BASE_URL}/sitemap.xml
"""
    robots_path = os.path.join(ROOT_DIR, "robots.txt")
    with open(robots_path, "w", encoding="utf-8") as f:
        f.write(robots_txt)
    print("✅ Generated robots.txt")

def main():
    print("🚀 Starting Programmatic SEO Static Site Generator...")
    generate_beschwerdebrief()
    generate_einladung()
    generate_punkterechner()

    lid_data = load_lid_data()
    state_files = generate_state_pages(lid_data)

    generate_sitemap(state_files)
    print("🎉 Programmatic SEO pages generated successfully!")

if __name__ == "__main__":
    main()
