#!/usr/bin/env python3
"""
DeutschLernen — Programmatic SEO Static Site Generator
Builds crawlable, ultra-fast, zero-dependency static HTML landing pages for
high-volume organic search queries:
  1. /telc-b1-beschwerdebrief-beispiel.html ("telc B1 Beschwerdebrief örnekleri ve kalıpları")
  2. /telc-b1-einladung-schreiben.html ("telc B1 Einladung schreiben örnekleri ve kalıpları")
  3. /telc-b1-punkte-rechner.html ("telc B1 Puan Hesaplama Aracı / Punkterechner")
  4. /leben-in-deutschland-nrw-fragen.html & all 16 German federal states
  5. /sitemap.xml & /robots.txt
"""

import os
import sys
import json
import re
import html
from datetime import datetime

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DATA_DIR = os.path.join(ROOT_DIR, "data")
LID_FILE = os.path.join(DATA_DIR, "lid310.js")
BASE_URL = "https://egeengin.github.io/DeutschLernen"

STATE_SLUG_MAP = {
    "NW": "leben-in-deutschland-nrw-fragen.html",
    "BY": "leben-in-deutschland-bayern-fragen.html",
    "BE": "leben-in-deutschland-berlin-fragen.html",
    "BW": "leben-in-deutschland-baden-wuerttemberg-fragen.html",
    "BB": "leben-in-deutschland-brandenburg-fragen.html",
    "HB": "leben-in-deutschland-bremen-fragen.html",
    "HH": "leben-in-deutschland-hamburg-fragen.html",
    "HE": "leben-in-deutschland-hessen-fragen.html",
    "MV": "leben-in-deutschland-mecklenburg-vorpommern-fragen.html",
    "NI": "leben-in-deutschland-niedersachsen-fragen.html",
    "RP": "leben-in-deutschland-rheinland-pfalz-fragen.html",
    "SL": "leben-in-deutschland-saarland-fragen.html",
    "SN": "leben-in-deutschland-sachsen-fragen.html",
    "ST": "leben-in-deutschland-sachsen-anhalt-fragen.html",
    "SH": "leben-in-deutschland-schleswig-holstein-fragen.html",
    "TH": "leben-in-deutschland-thueringen-fragen.html",
}

STATE_TR_NAMES = {
    "NW": "Kuzey Ren-Vestfalya (NRW)",
    "BY": "Bavyera (Bayern)",
    "BE": "Berlin",
    "BW": "Baden-Württemberg",
    "BB": "Brandenburg",
    "HB": "Bremen",
    "HH": "Hamburg",
    "HE": "Hessen",
    "MV": "Mecklenburg-Vorpommern",
    "NI": "Aşağı Saksonya (Niedersachsen)",
    "RP": "Rheinland-Pfalz",
    "SL": "Saarland",
    "SN": "Saksonya (Sachsen)",
    "ST": "Saksonya-Anhalt (Sachsen-Anhalt)",
    "SH": "Schleswig-Holstein",
    "TH": "Türingiya (Thüringen)",
}

# --- Client-side Script Snippets (Defined outside f-strings to avoid curly brace escaping conflicts) ---
COPY_LETTER_JS = """<script>
  function copyLetter(elementId, btn) {
    var text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(function() {
      var originalText = btn.innerHTML;
      btn.innerHTML = '✅ Kopyalandı!';
      btn.style.borderColor = 'var(--accent-green)';
      btn.style.color = 'var(--accent-green)';
      setTimeout(function() {
        btn.innerHTML = originalText;
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 2200);
    });
  }
</script>"""

EINLADUNG_JS = """<script>
  function copyLetter(elementId, btn) {
    var text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(function() {
      var originalText = btn.innerHTML;
      btn.innerHTML = '✅ Kopyalandı!';
      btn.style.borderColor = 'var(--accent-green)';
      btn.style.color = 'var(--accent-green)';
      setTimeout(function() {
        btn.innerHTML = originalText;
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 2200);
    });
  }

  function updateWordCount() {
    var val = document.getElementById('interactive-draft-area').value.trim();
    var words = val ? val.split(/\\s+/).length : 0;
    var countEl = document.getElementById('draft-word-count');
    var statusEl = document.getElementById('draft-status-badge');
    countEl.innerText = 'Kelime Sayısı: ' + words;
    if (words === 0) {
      statusEl.innerText = 'Durum: Boş';
      statusEl.style.color = 'var(--text-muted)';
    } else if (words < 60) {
      statusEl.innerText = 'Durum: Çok Kısa (Puan cezası riski!)';
      statusEl.style.color = 'var(--accent-red)';
    } else if (words >= 75 && words <= 110) {
      statusEl.innerText = 'Durum: Mükemmel Uzunluk (80-100 kelime)';
      statusEl.style.color = 'var(--accent-green)';
    } else {
      statusEl.innerText = 'Durum: Kabul edilebilir uzunluk (' + words + ' kelime)';
      statusEl.style.color = 'var(--accent-gold)';
    }
  }
</script>"""

PUNKTE_RECHNER_JS = """<script src="js/telcCalculator.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof TelcCalculator !== 'undefined' && typeof TelcCalculator.renderTelcCalculator === 'function') {
      TelcCalculator.renderTelcCalculator('telc-calculator-container');
    }
  });
</script>"""

STATE_LID_JS = """<script>
  function checkAnswer(btn, qId) {
    var card = document.getElementById('q-' + qId);
    var allButtons = card.querySelectorAll('.seo-option-btn');
    var isCorrect = btn.getAttribute('data-correct') === 'true';

    allButtons.forEach(function(b) {
      if (b.getAttribute('data-correct') === 'true') {
        b.classList.add('correct');
      } else {
        b.classList.remove('correct');
      }
    });

    if (!isCorrect) {
      btn.classList.add('incorrect');
    }

    var reveal = document.getElementById('reveal-' + qId);
    if (reveal) {
      reveal.classList.add('visible');
    }
  }

  function revealAnswerDirectly(qId) {
    var card = document.getElementById('q-' + qId);
    var allButtons = card.querySelectorAll('.seo-option-btn');
    allButtons.forEach(function(b) {
      if (b.getAttribute('data-correct') === 'true') {
        b.classList.add('correct');
      }
    });
    var reveal = document.getElementById('reveal-' + qId);
    if (reveal) {
      reveal.classList.add('visible');
    }
  }

  function switchExplanationLang(qId, lang, tabBtn) {
    var tabs = tabBtn.parentElement.querySelectorAll('.seo-lang-tab');
    tabs.forEach(function(t) { t.classList.remove('active'); });
    tabBtn.classList.add('active');

    ['tr', 'de', 'en', 'ar', 'uk'].forEach(function(l) {
      var el = document.getElementById('explain-' + qId + '-' + l);
      if (el) {
        el.style.display = (l === lang) ? 'block' : 'none';
      }
    });
  }
</script>"""


def load_lid_data():
    """Extracts GERMAN_STATES and LID_STATE_QUESTIONS from data/lid310.js."""
    with open(LID_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    m_states = re.search(r"const GERMAN_STATES = (\[.*?\]);\n\nconst", content, re.DOTALL)
    m_sq = re.search(r"const LID_STATE_QUESTIONS = (\{.*?\});\n\n//", content, re.DOTALL)

    if not m_states or not m_sq:
        raise ValueError("Could not parse GERMAN_STATES or LID_STATE_QUESTIONS from lid310.js")

    states = json.loads(m_states.group(1))
    state_questions = json.loads(m_sq.group(1))
    return states, state_questions


def render_header(active_nav=""):
    return f"""  <header class="seo-header">
    <div class="seo-container seo-header-content">
      <a href="index.html" class="seo-brand">
        <span class="seo-brand-logo">🇩🇪</span>
        <div class="seo-brand-text">
          <span class="seo-brand-name">DeutschLernen</span>
          <span class="seo-brand-badge">telc B1 & BAMF 310 Hub</span>
        </div>
      </a>
      <nav class="seo-nav">
        <a href="index.html" class="{'active' if active_nav == 'portal' else ''}">🏠 Portal</a>
        <a href="telc-b1-punkte-rechner.html" class="{'active' if active_nav == 'rechner' else ''}">🎯 Punkterechner</a>
        <a href="telc-b1-beschwerdebrief-beispiel.html" class="{'active' if active_nav == 'beschwerde' else ''}">✍️ Beschwerdebrief</a>
        <a href="telc-b1-einladung-schreiben.html" class="{'active' if active_nav == 'einladung' else ''}">✉️ Einladung</a>
        <a href="leben-in-deutschland-nrw-fragen.html" class="{'active' if active_nav == 'lid' else ''}">🏛️ LiD Fragen</a>
        <a href="trainer.html" class="seo-cta-btn">⚡ Wortschatz Trainer</a>
      </nav>
    </div>
  </header>"""


def render_footer():
    state_links_html = "".join(
        f'<li><a href="{slug}">{STATE_TR_NAMES.get(code, code)} Soruları</a></li>'
        for code, slug in STATE_SLUG_MAP.items()
    )

    return f"""  <footer class="seo-footer">
    <div class="seo-container">
      <div class="seo-footer-grid">
        <div class="seo-footer-col">
          <h4>📚 telc B1 Sınav Rehberleri</h4>
          <ul>
            <li><a href="telc-b1-beschwerdebrief-beispiel.html">telc B1 Beschwerdebrief Örnekleri</a></li>
            <li><a href="telc-b1-einladung-schreiben.html">telc B1 Einladung Schreiben Rehberi</a></li>
            <li><a href="telc-b1-punkte-rechner.html">telc B1 Puan Hesaplama Aracı</a></li>
            <li><a href="sprechen.html">B1 Mündliche Prüfung Studio</a></li>
            <li><a href="lesen.html">B1 Leseverstehen Studio</a></li>
            <li><a href="hoeren.html">B1 Hörverstehen Studio</a></li>
          </ul>
        </div>
        <div class="seo-footer-col">
          <h4>🏛️ Leben in Deutschland (LiD)</h4>
          <ul>
            {state_links_html[:600]}
          </ul>
        </div>
        <div class="seo-footer-col">
          <h4>⚡ İnteraktif Çalışma Araçları</h4>
          <ul>
            <li><a href="trainer.html">2.000+ Kelime Wortschatz Trainer</a></li>
            <li><a href="dashboard.html">Kişisel İlerleme Dashboard'u</a></li>
            <li><a href="index.html#schreiben-showcase-section">Yapay Zeka Mektup Değerlendirici</a></li>
            <li><a href="legal.html">Yasal Bilgiler & Impressum</a></li>
          </ul>
        </div>
      </div>
      <div class="seo-footer-disclaimer">
        <p>© {datetime.now().year} DeutschLernen. Tüm hakları saklıdır. Çevrimdışı ve gizlilik öncelikli Almanca sınav hazırlık platformu.</p>
        <p style="margin-top: 6px;">Yasal Uyarı: telc, telc gGmbH şirketinin tescilli ticari markasıdır. BAMF, Almanya Federal Göç ve Mülteciler Dairesi'nin kısaltmasıdır. DeutschLernen bağımsız bir eğitim platformu olup, telc gGmbH veya BAMF ile resmi bir ortaklığı veya yetkilendirmesi bulunmamaktadır.</p>
      </div>
    </div>
  </footer>"""


# ==============================================================================
# 1. /telc-b1-beschwerdebrief-beispiel.html
# ==============================================================================
def build_beschwerdebrief_page():
    url = f"{BASE_URL}/telc-b1-beschwerdebrief-beispiel.html"
    title = "telc B1 Beschwerdebrief Örnekleri ve Kalıpları — 45 Puanlık Resmi Şablonlar | DeutschLernen"
    description = "Resmi telc Deutsch B1 şikayet mektubu (Beschwerdebrief) örnekleri, 45 puanlık değerlendirme kriterleri, 4 Leitpunkte taktiği ve en sık kullanılan Redemittel kalıpları."

    faq_data = [
        {
            "q": "telc B1 Beschwerdebrief sınavında kaç puan üzerinden değerlendirilir?",
            "a": "telc B1 Schreiben (Yazma) bölümü toplam 45 puandır. Bu puan 3 temel kritere göre belirlenir: Aufgabenbewältigung (Görevin yerine getirilmesi, 15 puan), Kommunikative Gestaltung (İletişimsel düzen ve bağlaçlar, 15 puan) ve Formale Richtigkeit (Gramer ve imla doğruluğu, 15 puan)."
        },
        {
            "q": "Beschwerdebrief yazarken en çok puan kaybettiren hata nedir?",
            "a": "En sık yapılan ve en çok puan kaybettiren hata, sınav kağıdında verilen 4 Leitpunkt'tan (yönlendirici maddeden) birini atlamaktır. Her Leitpunkt doğrudan Aufgabenbewältigung puanınızı belirler. Bir madde eksik kalırsa en az 3-6 puan kaybedersiniz."
        },
        {
            "q": "telc B1 şikayet mektubunda hangi selamlama ve kapanış kalıbı kullanılır?",
            "a": "Resmi bir şikayet mektubunda (formal) muhatap ismi bilinmiyorsa 'Sehr geehrte Damen und Herren,' ile başlanır. Kapanışta ise daima 'Mit freundlichen Grüßen' ve altına Ad Soyad yazılır. Virgülle bittiği için ilk cümleye küçük harfle başlanır (örn: 'ich schreibe Ihnen...')."
        },
        {
            "q": "Beschwerdebrief kaç kelime olmalıdır?",
            "a": "telc B1 sınavında Teil 2 mektupları için önerilen uzunluk yaklaşık 80-100 kelimedir. Çok kısa yazmak (50 kelime altı) puan cezasına yol açar; aşırı uzun yazmak ise zamanınızı tüketip daha fazla gramer hatası yapma riskinizi artırır."
        }
    ]

    faq_json_ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": item["q"],
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item["a"]
                }
            } for item in faq_data
        ]
    }

    schema_breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": BASE_URL + "/"},
            {"@type": "ListItem", "position": 2, "name": "telc B1 Beschwerdebrief", "item": url}
        ]
    }

    faq_script_str = json.dumps(faq_json_ld, ensure_ascii=False, indent=2)
    breadcrumb_script_str = json.dumps(schema_breadcrumb, ensure_ascii=False, indent=2)

    return f"""<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{html.escape(title)}</title>
  <meta name="description" content="{html.escape(description)}">
  <meta name="keywords" content="telc b1 beschwerdebrief beispiel, telc b1 şikayet mektubu örnekleri, telc b1 schreiben kalıpları, b1 redemittel beschwerde, telc deutsch b1 musterbrief, b1 mektup kalıpları">
  <link rel="canonical" href="{url}">
  
  <!-- OpenGraph & Twitter -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="{html.escape(title)}">
  <meta property="og:description" content="{html.escape(description)}">
  <meta property="og:url" content="{url}">
  <meta property="og:image" content="{BASE_URL}/assets/icons/icon-512.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{html.escape(title)}">
  <meta name="twitter:description" content="{html.escape(description)}">

  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="assets/fonts/fonts.css">
  <link rel="stylesheet" href="css/seo.css">

  <script type="application/ld+json">
{faq_script_str}
  </script>
  <script type="application/ld+json">
{breadcrumb_script_str}
  </script>
</head>
<body>

{render_header(active_nav='beschwerde')}

  <main class="seo-container">
    <!-- Breadcrumbs -->
    <nav class="seo-breadcrumbs" aria-label="Breadcrumb">
      <a href="index.html">Ana Sayfa</a>
      <span>/</span>
      <a href="index.html#schreiben-showcase-section">Yazma Rehberleri</a>
      <span>/</span>
      <span style="color:var(--text-primary);">telc B1 Beschwerdebrief</span>
    </nav>

    <!-- Hero -->
    <section class="seo-hero">
      <div class="seo-pill-tag">📝 telc Deutsch B1 Sınav Rehberi</div>
      <h1 class="seo-title">telc B1 Beschwerdebrief Örnekleri ve Kalıpları</h1>
      <p class="seo-lead">Resmi 45 puanlık değerlendirme kriterlerine tam uyumlu şikayet mektubu (Beschwerdebrief) şablonları, 4 Leitpunkte garantili çözüm taktikleri ve en yüksek puanı getiren Redemittel cümleleri.</p>
      
      <div class="seo-meta-badges">
        <span class="seo-meta-item">⏱️ Sınav Süresi: 30 Dakika</span>
        <span class="seo-meta-item">🏆 Değer: 45 Puan (%20)</span>
        <span class="seo-meta-item">📏 Hedef: 80–100 Kelime</span>
        <span class="seo-meta-item">🎯 Seviye: GeR B1</span>
      </div>
    </section>

    <!-- Key Takeaways Card -->
    <section class="seo-highlight-card">
      <div class="seo-highlight-title">⭐ Tam Puan Almak İçin 4 Altın Kural</div>
      <div class="seo-highlight-grid">
        <div class="seo-stat-item">
          <div class="seo-stat-label">1. Leitpunkte</div>
          <div class="seo-stat-value">4 / 4 Madde</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Verilen 4 maddenin hepsine eksiksiz değinin. 1 tanesini bile atlarsanız en az 3-6 puan kesilir.</p>
        </div>
        <div class="seo-stat-item">
          <div class="seo-stat-label">2. Hitap & Kapanış</div>
          <div class="seo-stat-value">Formell</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Sehr geehrte Damen und Herren, / Mit freundlichen Grüßen kalıbını eksiksiz kullanın.</p>
        </div>
        <div class="seo-stat-item">
          <div class="seo-stat-label">3. Bağlaçlar</div>
          <div class="seo-stat-value">weil, da, obwohl</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Kısa basit cümleler yerine B1 bağlaçları (deshalb, trotzdem, obwohl) ile zenginleştirin.</p>
        </div>
        <div class="seo-stat-item">
          <div class="seo-stat-label">4. Fristsetzung</div>
          <div class="seo-stat-value">Son Tarih</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Şikayette mutlaka somut bir çözüm ve 14 günlük yasal yanıt süresi (Frist) belirtin.</p>
        </div>
      </div>
    </section>

    <!-- Section 1: 3 Full Sample Letters -->
    <section class="seo-section">
      <h2 class="seo-section-title">📄 3 Tam Örnek telc B1 Beschwerdebrief</h2>
      <div class="seo-prose">
        <p>Aşağıdaki örnekler gerçek telc Deutsch B1 sınavlarında çıkmış senaryolar temel alınarak hazırlanmış olup, 45 puanlık resmi değerlendirme kriterlerinde tam puan (A derecesi) alacak şekilde kurgulanmıştır.</p>
      </div>

      <!-- Letter 1 -->
      <article class="seo-letter-card">
        <div class="seo-letter-header">
          <div>
            <span class="seo-letter-badge">Örnek 1: Online Alışveriş (Online-Shop)</span>
            <h3 style="font-size:16px; margin-top:6px; color:var(--text-primary);">Hasarlı Laptop & İade / Değişim Talebi</h3>
          </div>
          <button type="button" class="seo-copy-btn" onclick="copyLetter('letter-text-1', this)">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="letter-text-1">Betreff: Beschwerde über defekte Lieferung – Bestellnummer: DE-849201

Sehr geehrte Damen und Herren,

ich schreibe Ihnen, weil ich vor zwei Wochen einen neuen Laptop in Ihrem Onlineshop bestellt habe. Leider kam das Paket stark beschädigt an und das Gerät lässt sich überhaupt nicht einschalten. <span class="seo-leitpunkt-tag">Leitpunkt 1: Grund & Schaden</span>

Ich habe mich bereits zweimal telefonisch an Ihren Kundenservice gewendet, aber bisher habe ich leider keine hilfreiche Antwort erhalten. <span class="seo-leitpunkt-tag">Leitpunkt 2: Bisheriger Kontakt</span>

Da ich den Laptop dringend für meine tägliche Arbeit benötige, fordere ich Sie hiermit auf, mir innerhalb von 14 Tagen (bis zum 15. November) ein neues Ersatzgerät zu schicken oder mir den vollen Kaufpreis zu erstatten. <span class="seo-leitpunkt-tag">Leitpunkt 3: Fristsetzung & Lösung</span>

Sollte ich bis zu diesem Termin keine positive Rückmeldung von Ihnen erhalten, werde ich mich an die Verbraucherzentrale wenden und rechtliche Schritte einleiten müssen. <span class="seo-leitpunkt-tag">Leitpunkt 4: Rechtliche Schritte</span>

Ich hoffe auf eine schnelle und unkomplizierte Lösung.

Mit freundlichen Grüßen
Can Yılmaz</div>
      </article>

      <!-- Letter 2 -->
      <article class="seo-letter-card">
        <div class="seo-letter-header">
          <div>
            <span class="seo-letter-badge">Örnek 2: Tatil & Otel Şikayeti (Hotelaufenthalt)</span>
            <h3 style="font-size:16px; margin-top:6px; color:var(--text-primary);">Katalog Vaatlerine Uymayan Tatil & Para İadesi Talebi</h3>
          </div>
          <button type="button" class="seo-copy-btn" onclick="copyLetter('letter-text-2', this)">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="letter-text-2">Betreff: Reklamation meines Aufenthalts im Hotel Seeblick – Buchungsnummer: HB-30291

Sehr geehrte Damen und Herren,

vom 10. bis 17. Oktober habe ich über Ihr Reisebüro eine Urlaubswoche im Hotel Seeblick verbracht. Leider entsprach der Aufenthalt überhaupt nicht den Angaben in Ihrer Reisebeschreibung. <span class="seo-leitpunkt-tag">Leitpunkt 1: Reisegrund</span>

In Ihrem Prospekt wurde ein ruhiges Zimmer mit Meerblick versprochen. Tatsächlich lag das Zimmer jedoch direkt über einer lauten Großbaustelle, sodass an Erholung nicht zu denken war. Außerdem funktionierte die Klimaanlage während der gesamten Woche nicht. <span class="seo-leitpunkt-tag">Leitpunkt 2: Genaue Mängel</span>

Obwohl ich die Mängel sofort an der Rezeption gemeldet habe, konnte mir vor Ort kein anderes Zimmer angeboten werden. <span class="seo-leitpunkt-tag">Leitpunkt 3: Beschwerde vor Ort</span>

Aus diesem Grund erwarte ich eine angemessene Rückerstattung von 30 Prozent des Reisepreises auf mein Bankkonto. Bitte überweisen Sie den Betrag bis spätestens Ende dieses Monats. <span class="seo-leitpunkt-tag">Leitpunkt 4: Forderung & Frist</span>

Vielen Dank im Voraus für Ihr Verständnis.

Mit freundlichen Grüßen
Ayşe Kaya</div>
      </article>

      <!-- Letter 3 -->
      <article class="seo-letter-card">
        <div class="seo-letter-header">
          <div>
            <span class="seo-letter-badge">Örnek 3: Hizmet & İnternet Kesintisi (Telekommunikation)</span>
            <h3 style="font-size:16px; margin-top:6px; color:var(--text-primary);">Sürekli İnternet Kesintisi & Fatura İndirimi Talebi</h3>
          </div>
          <button type="button" class="seo-copy-btn" onclick="copyLetter('letter-text-3', this)">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="letter-text-3">Betreff: Dringende Beschwerde wegen Totalausfall des Internetanschlusses – Kundennummer: KD-551029

Sehr geehrte Damen und Herren,

ich bin seit über einem Jahr Kunde bei Ihrem Anbieter. Seit vergangenem Montag funktioniert mein Internetanschluss überhaupt nicht mehr. <span class="seo-leitpunkt-tag">Leitpunkt 1: Problem</span>

Da ich im Homeoffice arbeite, bin ich beruflich zwingend auf eine stabile Verbindung angewiesen. Durch den Ausfall konnte ich mehrere wichtige Kundentermine nicht wahrnehmen. <span class="seo-leitpunkt-tag">Leitpunkt 2: Folgen des Ausfalls</span>

Mehrere Anrufe bei Ihrer Service-Hotline führten zu keinem Ergebnis, da man mich immer wieder vertröstet hat. <span class="seo-leitpunkt-tag">Leitpunkt 3: Kundenservice-Erfahrung</span>

Ich fordere Sie daher auf, das Problem unverzüglich bis zum Freitag dieser Woche zu beheben. Zudem erwarte ich für den laufenden Monat eine entsprechende Gutschrift auf meiner nächsten Monatsrechnung. <span class="seo-leitpunkt-tag">Leitpunkt 4: Frist & Gutschrift</span>

Mit freundlichen Grüßen
Mehmet Demir</div>
      </article>
    </section>

    <!-- Section 2: Redemittel Table -->
    <section class="seo-section">
      <h2 class="seo-section-title">💬 telc B1 Beschwerdebrief Redemittel (Kalıp Cümleler)</h2>
      <div class="seo-prose">
        <p>Aşağıdaki hazır kalıp cümleleri sınavda ezberden kullanarak puanınızı garantileyebilirsiniz. Bu kalıplar resmi B1 Almanca standartlarına tam uygundur.</p>
      </div>

      <div class="seo-table-container">
        <table class="seo-table">
          <thead>
            <tr>
              <th style="width: 25%;">Bölüm / Amaç</th>
              <th style="width: 45%;">Almanca Kalıp Cümle (Redemittel)</th>
              <th style="width: 30%;">Türkçe Anlamı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Betreff (Konu Satırı)</strong></td>
              <td>Beschwerde über [Ürün/Hizmet] – Kundennummer: 12345</td>
              <td>[Ürün/Hizmet] hakkında şikayet – Müşteri no</td>
            </tr>
            <tr>
              <td><strong>Anrede (Hitap)</strong></td>
              <td>Sehr geehrte Damen und Herren,</td>
              <td>Saygıdeğer Hanımefendiler ve Beyefendiler,</td>
            </tr>
            <tr>
              <td><strong>Einleitung (Giriş)</strong></td>
              <td>ich schreibe Ihnen, weil ich am [Datum] bei Ihnen ein [Gerät] gekauft habe und es leider ein großes Problem gibt.</td>
              <td>Size yazıyorum çünkü [Tarih]'te sizden bir [Cihaz] aldım ve maalesef büyük bir sorun var.</td>
            </tr>
            <tr>
              <td><strong>Problem Tasviri</strong></td>
              <td>Als ich das Paket geöffnet habe, musste ich leider feststellen, dass das Gerät beschädigt ist.</td>
              <td>Paketi açtığımda cihazın hasarlı olduğunu maalesef tespit etmek zorunda kaldım.</td>
            </tr>
            <tr>
              <td><strong>Beklentiye Uymama</strong></td>
              <td>Das Produkt entspricht überhaupt nicht den Versprechungen in Ihrer Werbung.</td>
              <td>Ürün reklamınızdaki vaatleri kesinlikle karşılamıyor.</td>
            </tr>
            <tr>
              <td><strong>Fristsetzung (Süre Verme)</strong></td>
              <td>Ich fordere Sie hiermit auf, mir innerhalb von zwei Wochen einen Ersatz zu liefern oder den Betrag zu erstatten.</td>
              <td>Bana 2 hafta içinde değişim yapmanızı veya tutarı iade etmenizi talep ediyorum.</td>
            </tr>
            <tr>
              <td><strong>Yasal Uyarı</strong></td>
              <td>Andernfalls sehe ich mich gezwungen, rechtliche Schritte einzuleiten.</td>
              <td>Aksi takdirde yasal yollara başvurmak zorunda kalacağım.</td>
            </tr>
            <tr>
              <td><strong>Grußformel (Kapanış)</strong></td>
              <td>Mit freundlichen Grüßen<br>[Vorname Nachname]</td>
              <td>Saygılarımla,<br>[Ad Soyad]</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 3: Interactive Grader CTA Banner -->
    <section class="seo-banner-cta">
      <h2 class="seo-banner-title">Kendi Şikayet Mektubunuzu Yazın, Yapay Zeka Anında Puanlasın!</h2>
      <p class="seo-banner-text">Yazdığınız telc B1 mektubunu sistemimize girin; yapay zeka Leitpunkte kontrolü yapsın, gramer ve edat hatalarınızı düzeltsin ve resmi 45 puan üzerinden anında not versin.</p>
      <div class="seo-banner-actions">
        <a href="index.html#schreiben-showcase-section" class="seo-cta-btn" style="font-size:15px; padding:12px 24px;">🤖 Yapay Zeka Letter Grader'ı Aç →</a>
        <a href="telc-b1-punkte-rechner.html" class="seo-copy-btn" style="font-size:14px; padding:12px 20px;">🎯 B1 Puan Hesaplama Aracı</a>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="seo-section">
      <h2 class="seo-section-title">❓ Sıkça Sorulan Sorular (SSS)</h2>
      
      <details class="seo-faq-item">
        <summary class="seo-faq-question">telc B1 Beschwerdebrief sınavında kaç puan üzerinden değerlendirilir?</summary>
        <div class="seo-faq-answer">
          telc B1 Schreiben bölümü toplam 45 puandır. Bu puan Aufgabenbewältigung (15 Puan), Kommunikative Gestaltung (15 Puan) ve Formale Richtigkeit (15 Puan) olmak üzere 3 eşit kritere bölünür. 4 Leitpunkt'un tamamına değinmek Aufgabenbewältigung için zorunludur.
        </div>
      </details>

      <details class="seo-faq-item">
        <summary class="seo-faq-question">Mektuba küçük harfle başlamak neden zorunludur?</summary>
        <div class="seo-faq-answer">
          Almanca resmi mektup kurallarına göre selamlama satırından sonra virgül konur (örn: 'Sehr geehrte Damen und Herren,'). Nokta konmadığı için yeni cümleye küçük harfle başlanmalıdır (örn: 'ich schreibe Ihnen...'). Büyük harfle başlamak biçimsel puan kaybına yol açar.
        </div>
      </details>

      <details class="seo-faq-item">
        <summary class="seo-faq-question">Sınavda Leitpunkt sırasını değiştirebilir miyim?</summary>
        <div class="seo-faq-answer">
          Evet, soru kağıdındaki 4 Leitpunkt'u istediğiniz sırayla ele alabilirsiniz; önemli olan metnin mantıksal bir akış içinde olması ve her 4 maddenin de net bir şekilde cevaplanmış olmasıdır.
        </div>
      </details>

      <details class="seo-faq-item">
        <summary class="seo-faq-question">Mektup için sınavda ne kadar süre ayrılmalıdır?</summary>
        <div class="seo-faq-answer">
          telc B1 Yazma sınavı toplam 30 dakikadır. Bu sürede ilk 5 dakikayı Leitpunkte'ları planlamak ve karalamak, 20 dakikayı mektubu yazmak, son 5 dakikayı ise artikel, edat ve fiil çekimlerini kontrol etmek için kullanmanız tavsiye edilir.
        </div>
      </details>
    </section>
  </main>

{render_footer()}

{COPY_LETTER_JS}
</body>
</html>"""


# ==============================================================================
# 2. /telc-b1-einladung-schreiben.html
# ==============================================================================
def build_einladung_page():
    url = f"{BASE_URL}/telc-b1-einladung-schreiben.html"
    title = "telc B1 Einladung Schreiben — Davet Mektubu Örnekleri, Kabul ve Ret Kalıpları | DeutschLernen"
    description = "telc B1 sınavı için davet mektubu yazma (Einladung schreiben), daveti kibarca reddetme (Einladung ablehnen) ve kabul etme (annehmen) örnekleri, kalıpları ve 4 Leitpunkte rehberi."

    faq_data = [
        {
            "q": "telc B1 sınavında Einladung (Davet) mektubu resmi mi yoksa samimi midir?",
            "a": "Genellikle gayri resmi (informell) veya yarı resmidir. Bir arkadaşa veya tanıdığa yazıldığı için 'Liebe(r) [İsim],' selamlaması, 'du / dir / dich' zamirleri ve 'Liebe Grüße' kapanışı kullanılır. İş arkadaşlarına veya kurs öğretmenine yazılıyorsa yarı resmi (Sehr geehrte(r) Frau/Herr...) tercih edilir."
        },
        {
            "q": "Daveti reddetme (Einladung ablehnen) mektubunda nelere dikkat edilmelidir?",
            "a": "Daveti reddederken 4 kritik kural vardır: 1) Davet için teşekkür etmek, 2) Gelememe mazeretini inandırıcı bir şekilde açıklamak (aile ziyareti, hastalık, iş), 3) Özür dileyip hediye sözü vermek, 4) Başka bir tarihte telafi buluşması önermek."
        },
        {
            "q": "Einladung mektubunda hangi B1 bağlaçları (Konnektoren) kullanılmalıdır?",
            "a": "Yüksek puan için 'weil' (çünkü), 'obwohl' (rağmen), 'deshalb' (bu yüzden), 'da' (madem ki) ve 'wenn' (eğer/zaman) bağlaçları mutlaka en az 2-3 kez doğru fiil sırasıyla (cümlenin sonuna fiil atarak) kullanılmalıdır."
        }
    ]

    faq_json_ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": item["q"],
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item["a"]
                }
            } for item in faq_data
        ]
    }

    schema_breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": BASE_URL + "/"},
            {"@type": "ListItem", "position": 2, "name": "telc B1 Einladung Schreiben", "item": url}
        ]
    }

    faq_script_str = json.dumps(faq_json_ld, ensure_ascii=False, indent=2)
    breadcrumb_script_str = json.dumps(schema_breadcrumb, ensure_ascii=False, indent=2)

    faq_html = "\n".join(f"""      <details class="seo-faq-item">
        <summary class="seo-faq-question">{item["q"]}</summary>
        <div class="seo-faq-answer">{item["a"]}</div>
      </details>""" for item in faq_data)

    return f"""<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{html.escape(title)}</title>
  <meta name="description" content="{html.escape(description)}">
  <meta name="keywords" content="telc b1 einladung schreiben, b1 davet mektubu örnekleri, telc b1 einladung ablehnen, einladung annehmen b1, b1 brief einladung muster, telc deutsch b1 schreiben vorlagen">
  <link rel="canonical" href="{url}">

  <!-- OpenGraph & Twitter -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="{html.escape(title)}">
  <meta property="og:description" content="{html.escape(description)}">
  <meta property="og:url" content="{url}">
  <meta property="og:image" content="{BASE_URL}/assets/icons/icon-512.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{html.escape(title)}">
  <meta name="twitter:description" content="{html.escape(description)}">

  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="assets/fonts/fonts.css">
  <link rel="stylesheet" href="css/seo.css">

  <script type="application/ld+json">
{faq_script_str}
  </script>
  <script type="application/ld+json">
{breadcrumb_script_str}
  </script>
</head>
<body>

{render_header(active_nav='einladung')}

  <main class="seo-container">
    <!-- Breadcrumbs -->
    <nav class="seo-breadcrumbs" aria-label="Breadcrumb">
      <a href="index.html">Ana Sayfa</a>
      <span>/</span>
      <a href="index.html#schreiben-showcase-section">Yazma Rehberleri</a>
      <span>/</span>
      <span style="color:var(--text-primary);">telc B1 Einladung Schreiben</span>
    </nav>

    <!-- Hero -->
    <section class="seo-hero">
      <div class="seo-pill-tag">✉️ telc B1 Mektup Rehberi</div>
      <h1 class="seo-title">telc B1 Einladung Schreiben: Örnekler, Kalıplar ve Şablonlar</h1>
      <p class="seo-lead">telc B1 sınavında en sık karşılaşılan mektup türlerinden biri olan davet yazma (Einladung zur Party), daveti kabul etme ve mazeret bildirerek kibarca reddetme (Einladung ablehnen) için tam puanlık rehber.</p>
      
      <div class="seo-meta-badges">
        <span class="seo-meta-item">📝 Sınav Türü: Teil 1 veya Teil 2</span>
        <span class="seo-meta-item">👥 Ton: Informell / Halbformell</span>
        <span class="seo-meta-item">📏 Uzunluk: 80–100 Kelime</span>
        <span class="seo-meta-item">💡 Odak: 4 Leitpunkte & Konnektoren</span>
      </div>
    </section>

    <!-- Highlight Box -->
    <section class="seo-highlight-card">
      <div class="seo-highlight-title">🎯 Einladung Mektubunda Puan Getiren 3 Kritik Kural</div>
      <div class="seo-highlight-grid">
        <div class="seo-stat-item">
          <div class="seo-stat-label">Doğru Hitap Şekli</div>
          <div class="seo-stat-value">Liebe(r) [İsim]</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Erkek için: <em>Lieber Markus,</em> | Kadın için: <em>Liebe Anna,</em> | Virgül sonrası küçük harfle başlayın.</p>
        </div>
        <div class="seo-stat-item">
          <div class="seo-stat-label">Leitpunkte Kapsamı</div>
          <div class="seo-stat-value">4 / 4 Eksiksiz</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Teşekkür, mazeret, hediye sözü ve yeni randevu teklifinin dördüne de açıkça yer verin.</p>
        </div>
        <div class="seo-stat-item">
          <div class="seo-stat-label">B1 Bağlaçları</div>
          <div class="seo-stat-value">weil & obwohl</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Cümleleri bağlarken 'weil' ile fiili sona atın (örn: '...weil ich am Wochenende arbeiten muss.').</p>
        </div>
      </div>
    </section>

    <!-- 3 Sample Letters -->
    <section class="seo-section">
      <h2 class="seo-section-title">📄 3 Farklı Senaryo için Tam B1 Örnek Mektup</h2>

      <!-- Scenario 1: Einladung ablehnen (Most searched!) -->
      <article class="seo-letter-card">
        <div class="seo-letter-header">
          <div>
            <span class="seo-letter-badge">Senaryo 1: Daveti Kibarca Reddetme (Einladung ablehnen)</span>
            <h3 style="font-size:16px; margin-top:6px; color:var(--text-primary);">Arkadaşın Doğum Günü Partisine Gidememe & Yeni Randevu</h3>
          </div>
          <button type="button" class="seo-copy-btn" onclick="copyLetter('einladung-text-1', this)">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="einladung-text-1">Lieber Markus,

vielen Dank für die Einladung zu deiner Geburtstagsparty am kommenden Samstag. Ich habe mich wirklich sehr darüber gefreut! <span class="seo-leitpunkt-tag">Leitpunkt 1: Dank für die Einladung</span>

Leider kann ich an deiner Feier nicht teilnehmen, weil an diesem Wochenende meine Schwester aus der Türkei zu Besuch kommt und wir eine wichtige Familienfeier haben. <span class="seo-leitpunkt-tag">Leitpunkt 2: Grund erklären</span>

Es tut mir wirklich schrecklich leid, dass ich nicht dabei sein kann. Ich habe aber schon ein schönes Geschenk für dich besorgt, das ich dir unbedingt bald persönlich geben möchte. <span class="seo-leitpunkt-tag">Leitpunkt 3: Entschuldigung & Geschenk</span>

Wie wäre es, wenn wir uns nächsten Dienstag nach der Arbeit auf einen Kaffee treffen? Bitte sag mir kurz Bescheid, ob du Zeit hast. <span class="seo-leitpunkt-tag">Leitpunkt 4: Neues Treffen vorschlagen</span>

Ich wünsche dir eine fantastische Geburtstagsfeier!

Liebe Grüße
Ege</div>
      </article>

      <!-- Scenario 2: Einladung schreiben -->
      <article class="seo-letter-card">
        <div class="seo-letter-header">
          <div>
            <span class="seo-letter-badge">Senaryo 2: Davet Yazma (Einladung zur Einweihungsparty)</span>
            <h3 style="font-size:16px; margin-top:6px; color:var(--text-primary);">Yeni Eve Taşınma Partisine Arkadaşları Çağırma</h3>
          </div>
          <button type="button" class="seo-copy-btn" onclick="copyLetter('einladung-text-2', this)">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="einladung-text-2">Liebe Sarah,

wie geht es dir? Ich hoffe, bei dir ist alles in bester Ordnung!

Endlich bin ich mit dem Umzug fertig und habe mich in meiner neuen Wohnung gut eingelebt. Aus diesem Grund feiere ich am nächsten Freitag ab 19 Uhr eine kleine Einweihungsparty und möchte dich ganz herzlich dazu einladen. <span class="seo-leitpunkt-tag">Leitpunkt 1: Anlass & Einladung</span>

Für Essen und Getränke habe ich bereits gesorgt, wir können zusammen grillen. Wenn du möchtest, kannst du aber gerne einen Salat oder ein Dessert mitbringen. <span class="seo-leitpunkt-tag">Leitpunkt 2: Essen & Mitbringsel</span>

Meine neue Adresse lautet Schillerstraße 14. Da es hier nur wenige Parkplätze gibt, empfehle ich dir, mit der U-Bahn Linie 2 bis zum Bahnhof zu fahren. <span class="seo-leitpunkt-tag">Leitpunkt 3: Wegbeschreibung</span>

Bitte gib mir bis spätestens Mittwoch Bescheid, ob du kommen kannst, damit ich besser planen kann. <span class="seo-leitpunkt-tag">Leitpunkt 4: Rückmeldung bis wann</span>

Ich freue mich sehr darauf, dich bald wiederzusehen!

Herzliche Grüße
Deniz</div>
      </article>

      <!-- Scenario 3: Einladung annehmen -->
      <article class="seo-letter-card">
        <div class="seo-letter-header">
          <div>
            <span class="seo-letter-badge">Senaryo 3: Daveti Kabul Etme (Einladung annehmen)</span>
            <h3 style="font-size:16px; margin-top:6px; color:var(--text-primary);">Partiye Katılma, Yardım Teklifi & Partner Sorma</h3>
          </div>
          <button type="button" class="seo-copy-btn" onclick="copyLetter('einladung-text-3', this)">📋 Kopyala</button>
        </div>
        <div class="seo-letter-content" id="einladung-text-3">Lieber Thomas,

herzlichen Dank für die nette Einladung zu deinem Abschiedsfest! Ich habe mich riesig gefreut und komme natürlich sehr gerne. <span class="seo-leitpunkt-tag">Leitpunkt 1: Zusage & Dank</span>

Da ich am Samstag schon ab 17 Uhr Zeit habe, kann ich dir gerne bei den Vorbereitungen oder beim Aufbau der Tische helfen. Sag mir einfach Bescheid, was noch zu tun ist. <span class="seo-leitpunkt-tag">Leitpunkt 2: Hilfe anbieten</span>

Außerdem wollte ich fragen, was ich für das Buffet mitbringen soll. Ich könnte einen traditionellen türkischen Börek backen. <span class="seo-leitpunkt-tag">Leitpunkt 3: Essen mitbringen</span>

Wäre es in Ordnung, wenn ich meinen Partner mitbringe? Er würde dich auch gerne kennenlernen. <span class="seo-leitpunkt-tag">Leitpunkt 4: Begleitung fragen</span>

Bis Samstag, ich freue mich schon sehr!

Viele Grüße
Zeynep</div>
      </article>
    </section>

    <!-- Redemittel Box -->
    <section class="seo-section">
      <h2 class="seo-section-title">💬 telc B1 Einladung Redemittel (Hazır Kalıplar)</h2>
      <div class="seo-table-container">
        <table class="seo-table">
          <thead>
            <tr>
              <th style="width: 25%;">Amaç</th>
              <th style="width: 45%;">Almanca Kalıp (Redemittel)</th>
              <th style="width: 30%;">Türkçe Karşılığı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Davet Etme</strong></td>
              <td>Ich möchte dich ganz herzlich zu meiner Geburtstagsparty einladen.</td>
              <td>Seni doğum günü partime içtenlikle davet etmek istiyorum.</td>
            </tr>
            <tr>
              <td><strong>Teşekkür & Kabul</strong></td>
              <td>Vielen Dank für die Einladung, ich komme super gerne!</td>
              <td>Davet için çok teşekkürler, seve seve gelirim!</td>
            </tr>
            <tr>
              <td><strong>Mazeret & Ret</strong></td>
              <td>Es tut mir leid, aber ich kann leider nicht kommen, weil ich...</td>
              <td>Çok üzgünüm ama maalesef gelemem çünkü...</td>
            </tr>
            <tr>
              <td><strong>Hediye Sözü</strong></td>
              <td>Ich habe schon ein Geschenk für dich und gebe es dir bald.</td>
              <td>Senin için bir hediye aldım bile, yakında vereceğim.</td>
            </tr>
            <tr>
              <td><strong>Yardım Teklifi</strong></td>
              <td>Soll ich etwas zu essen oder zu trinken mitbringen?</td>
              <td>Yiyecek veya içecek bir şey getireyim mi?</td>
            </tr>
            <tr>
              <td><strong>Yeni Randevu</strong></td>
              <td>Können wir uns vielleicht nächste Woche treffen?</td>
              <td>Gelecek hafta buluşabilir miyiz?</td>
            </tr>
            <tr>
              <td><strong>Cevap İsteme</strong></td>
              <td>Bitte sag mir bis Freitag Bescheid, ob du Zeit hast.</td>
              <td>Zamanın olup olmadığını lütfen cumaya kadar bildir.</td>
            </tr>
            <tr>
              <td><strong>Kapanış</strong></td>
              <td>Liebe Grüße / Herzliche Grüße</td>
              <td>Sevgi dolu selamlar / İçten selamlar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Interactive Counter Tool -->
    <section class="seo-section">
      <h2 class="seo-section-title">✍️ Kendi Taslağınızı Yazın & Kelime Sayısını Ölçün</h2>
      <div class="seo-letter-card">
        <p style="font-size:14px; color:var(--text-secondary); margin-bottom:12px;">Hedef: <strong>80 – 100 Kelime</strong>. Aşağıdaki kutuya mektubunuzu yazarak kelime sayınızı anlık takip edebilirsiniz:</p>
        <textarea id="interactive-draft-area" oninput="updateWordCount()" style="width:100%; min-height:160px; background:var(--bg-secondary); border:1px solid var(--border); border-radius:var(--radius-sm); padding:14px; font-family:inherit; font-size:14px; color:var(--text-primary); resize:vertical;" placeholder="Lieber Markus, ..."></textarea>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; font-size:13px; font-weight:700;">
          <span id="draft-word-count" style="color:var(--accent-gold);">Kelime Sayısı: 0</span>
          <span id="draft-status-badge" style="color:var(--text-muted);">Durum: Henüz yazılmadı</span>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="seo-banner-cta">
      <h2 class="seo-banner-title">Mektubunuzu Resmi telc Kriterlerine Göre Otomatik Puanlayın</h2>
      <p class="seo-banner-text">DeutschLernen AI Grader yazdığınız mektuptaki tüm gramer hatalarını bulur, Leitpunkte puanınızı hesaplar ve eksiklerinizi gösterir.</p>
      <div class="seo-banner-actions">
        <a href="index.html#schreiben-showcase-section" class="seo-cta-btn" style="font-size:15px; padding:12px 24px;">🤖 AI Mektup Puanlayıcıyı Başlat →</a>
        <a href="telc-b1-beschwerdebrief-beispiel.html" class="seo-copy-btn" style="font-size:14px; padding:12px 20px;">📄 Beschwerdebrief Örnekleri</a>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="seo-section">
      <h2 class="seo-section-title">❓ Sıkça Sorulan Sorular</h2>
{faq_html}
    </section>
  </main>

{render_footer()}

{EINLADUNG_JS}
</body>
</html>"""


# ==============================================================================
# 3. /telc-b1-punkte-rechner.html
# ==============================================================================
def build_punkte_rechner_page():
    url = f"{BASE_URL}/telc-b1-punkte-rechner.html"
    title = "telc B1 Punkte Rechner — Puan Hesaplama ve Not Barajı Simülatörü | DeutschLernen"
    description = "Resmi telc Deutsch B1 sınav puanı hesaplama aracı. Leseverstehen, Sprachbausteine, Hörverstehen, Schreiben ve Sprechen puanlarınızı girin, geçme barajını ve notunuzu anında hesaplayın."

    faq_data = [
        {
            "q": "telc Deutsch B1 sınavından geçmek için kaç puan almak gerekir?",
            "a": "telc Deutsch B1 sınavını geçmek için toplam 300 puan üzerinden en az 180 puan (%60) almanız gerekir. Ancak kritik bir kural vardır: Hem Yazılı Sınavdan (225 puan üzerinden en az 135 puan / %60) HEM DE Sözlü Sınavdan (75 puan üzerinden en az 45 puan / %60) ayrı ayrı barajı aşmanız şarttır."
        },
        {
            "q": "Yazılı sınavı geçip sözlüden kalırsam (veya tam tersi) ne olur?",
            "a": "telc sınav yönetmeliğine göre Teilprüfung (kısmi başarı) hakkınız oluşur. Sadece kaldığınız bölümü (örneğin yalnızca sözlü sınavı) bir sonraki takvim yılının sonuna kadar tekrar alabilirsiniz. Geçtiğiniz bölümün puanı saklanır ve tüm sınavı baştan almak zorunda kalmazsınız."
        },
        {
            "q": "telc B1 not skalası nasıl hesaplanır?",
            "a": "270 - 300 Puan: Sehr gut (1 - Pekiyi) | 240 - 269.5 Puan: Gut (2 - İyi) | 210 - 239.5 Puan: Befriedigend (3 - Orta) | 180 - 209.5 Puan: Ausreichend (4 - Yeterli / Geçti) | 0 - 179.5 Puan veya bir alt bölümden kalma: Nicht bestanden (Başarısız)."
        },
        {
            "q": "Sprachbausteine bölümü tek başına geçme barajını etkiler mi?",
            "a": "Sprachbausteine (Dil Yapıları) tek başına ayrı bir baraja sahip değildir; Leseverstehen (75 Pkt), Sprachbausteine (30 Pkt), Hörverstehen (75 Pkt) ve Schreiben (45 Pkt) birlikte 'Schriftliche Prüfung' (Yazılı Sınav) toplamını oluşturur. Bu dört bölümün toplamının en az 135 puan olması yeterlidir."
        }
    ]

    faq_json_ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": item["q"],
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item["a"]
                }
            } for item in faq_data
        ]
    }

    schema_app = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "telc B1 Punkte Rechner",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "All",
        "url": url,
        "description": description,
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR"
        }
    }

    schema_breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": BASE_URL + "/"},
            {"@type": "ListItem", "position": 2, "name": "telc B1 Punkte Rechner", "item": url}
        ]
    }

    faq_script_str = json.dumps(faq_json_ld, ensure_ascii=False, indent=2)
    app_script_str = json.dumps(schema_app, ensure_ascii=False, indent=2)
    breadcrumb_script_str = json.dumps(schema_breadcrumb, ensure_ascii=False, indent=2)

    faq_html = "\n".join(f"""      <details class="seo-faq-item">
        <summary class="seo-faq-question">{item["q"]}</summary>
        <div class="seo-faq-answer">{item["a"]}</div>
      </details>""" for item in faq_data)

    return f"""<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{html.escape(title)}</title>
  <meta name="description" content="{html.escape(description)}">
  <meta name="keywords" content="telc b1 punkterechner, telc b1 puan hesaplama, telc b1 baraj puanı, telc b1 kaç puanla geçilir, telc b1 bestehensrechner, telc b1 not skalası, telc b1 not hesaplama">
  <link rel="canonical" href="{url}">

  <!-- OpenGraph & Twitter -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="{html.escape(title)}">
  <meta property="og:description" content="{html.escape(description)}">
  <meta property="og:url" content="{url}">
  <meta property="og:image" content="{BASE_URL}/assets/icons/icon-512.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{html.escape(title)}">
  <meta name="twitter:description" content="{html.escape(description)}">

  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="assets/fonts/fonts.css">
  <link rel="stylesheet" href="css/portal.css">
  <link rel="stylesheet" href="css/seo.css">

  <script type="application/ld+json">
{faq_script_str}
  </script>
  <script type="application/ld+json">
{app_script_str}
  </script>
  <script type="application/ld+json">
{breadcrumb_script_str}
  </script>
</head>
<body>

{render_header(active_nav='rechner')}

  <main class="seo-container">
    <!-- Breadcrumbs -->
    <nav class="seo-breadcrumbs" aria-label="Breadcrumb">
      <a href="index.html">Ana Sayfa</a>
      <span>/</span>
      <a href="dashboard.html">Araçlar</a>
      <span>/</span>
      <span style="color:var(--text-primary);">telc B1 Punkte Rechner</span>
    </nav>

    <!-- Hero -->
    <section class="seo-hero">
      <div class="seo-pill-tag">🎯 Resmi telc Sınav Simülatörü</div>
      <h1 class="seo-title">telc B1 Punkte Rechner (Puan Hesaplama Aracı)</h1>
      <p class="seo-lead">Resmi telc Deutsch B1 sınav yönetmeliğine uygun interaktif puan hesaplayıcı. 5 resmi sınav bölümündeki puanlarınızı veya doğru soru sayılarınızı girin; geçme durumunuzu, notunuzu (1-4) ve eksik puanlarınızı anında hesaplayın.</p>
      
      <div class="seo-meta-badges">
        <span class="seo-meta-item">🏆 Toplam Puan: 300 Pkt.</span>
        <span class="seo-meta-item">⚖️ Yazılı Barajı: 135 Pkt. (%60)</span>
        <span class="seo-meta-item">🗣️ Sözlü Barajı: 45 Pkt. (%60)</span>
        <span class="seo-meta-item">⭐ Geçme Barajı: 180 Pkt.</span>
      </div>
    </section>

    <!-- Embedded Interactive TelcCalculator Widget Container -->
    <section class="seo-section" style="margin-top: 10px;">
      <div id="telc-calculator-container" style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-md); padding:28px; box-shadow:var(--shadow-card);">
        <p style="text-align:center; color:var(--text-muted); padding:30px;">⏳ telc B1 Puan Hesaplayıcı yükleniyor...</p>
      </div>
    </section>

    <!-- Official Scoring Rules & Table -->
    <section class="seo-section">
      <h2 class="seo-section-title">📊 telc Deutsch B1 Puanlama ve Not Dağılım Tablosu</h2>
      <div class="seo-prose">
        <p>telc Deutsch B1 sınavında başarılı sayılabilmek için adayın <strong>hem yazılı hem de sözlü sınavdan ayrı ayrı en az %60 başarı</strong> elde etmesi şarttır. İki bölümden birinden kalınması durumunda genel puan 180'in üzerinde olsa dahi sınav 'Nicht bestanden' (Başarısız) sayılır.</p>
      </div>

      <div class="seo-table-container">
        <table class="seo-table">
          <thead>
            <tr>
              <th>Sınav Bölümü</th>
              <th>Soru / Görev</th>
              <th>Maksimum Puan</th>
              <th>Geçme Barajı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Leseverstehen (Okuma)</strong></td>
              <td>20 Soru (Teil 1, 2, 3)</td>
              <td>75 Pkt. (Her soru 3.75 Pkt)</td>
              <td rowspan="4" style="vertical-align:middle; background:rgba(59,130,246,0.06); font-weight:700; color:#60a5fa;">
                Yazılı Toplam:<br>≥ 135 Pkt. (%60)
              </td>
            </tr>
            <tr>
              <td><strong>2. Sprachbausteine (Dil Yapıları)</strong></td>
              <td>20 Soru (Gramer & Kelime)</td>
              <td>30 Pkt. (Her soru 1.5 Pkt)</td>
            </tr>
            <tr>
              <td><strong>3. Hörverstehen (Dinleme)</strong></td>
              <td>20 Soru (Teil 1, 2, 3)</td>
              <td>75 Pkt. (Her soru 3.75 Pkt)</td>
            </tr>
            <tr>
              <td><strong>4. Schreiben (Yazma / Mektup)</strong></td>
              <td>1 Mektup (3 Kriter × 3)</td>
              <td>45 Pkt. (Kriter I, II, III)</td>
            </tr>
            <tr style="background:rgba(245,158,11,0.05); font-weight:700;">
              <td><strong>Schriftliche Prüfung Toplamı</strong></td>
              <td>Yazılı 4 Bölüm</td>
              <td>225 Pkt.</td>
              <td>≥ 135 Pkt. (%60)</td>
            </tr>
            <tr>
              <td><strong>5. Sprechen (Sözlü Sınav)</strong></td>
              <td>Teil 1 (15) + Teil 2 (30) + Teil 3 (30)</td>
              <td>75 Pkt.</td>
              <td style="background:rgba(16,185,129,0.06); font-weight:700; color:#34d399;">
                Sözlü Toplam:<br>≥ 45 Pkt. (%60)
              </td>
            </tr>
            <tr style="background:rgba(245,158,11,0.12); font-weight:800; font-size:15px;">
              <td><strong>GENEL TOPLAM</strong></td>
              <td>Tüm Sınav</td>
              <td>300 Pkt.</td>
              <td>≥ 180 Pkt. (%60)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Grade Brackets Table -->
    <section class="seo-section">
      <h2 class="seo-section-title">🏆 Resmi telc B1 Not Skalası (Noten)</h2>
      <div class="seo-table-container">
        <table class="seo-table">
          <thead>
            <tr>
              <th>Puan Aralığı</th>
              <th>Almanca Not</th>
              <th>Türkçe Karşılığı</th>
              <th>Derece</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>270,0 – 300,0 Pkt.</strong></td>
              <td><span style="color:#10b981; font-weight:700;">Sehr gut</span></td>
              <td>Pekiyi</td>
              <td>1</td>
            </tr>
            <tr>
              <td><strong>240,0 – 269,5 Pkt.</strong></td>
              <td><span style="color:#3b82f6; font-weight:700;">Gut</span></td>
              <td>İyi</td>
              <td>2</td>
            </tr>
            <tr>
              <td><strong>210,0 – 239,5 Pkt.</strong></td>
              <td><span style="color:#f59e0b; font-weight:700;">Befriedigend</span></td>
              <td>Orta</td>
              <td>3</td>
            </tr>
            <tr>
              <td><strong>180,0 – 209,5 Pkt.</strong></td>
              <td><span style="color:#94a3b8; font-weight:700;">Ausreichend</span></td>
              <td>Geçer / Yeterli</td>
              <td>4</td>
            </tr>
            <tr>
              <td><strong>0 – 179,5 Pkt.</strong> (veya alt baraj altı)</td>
              <td><span style="color:#ef4444; font-weight:700;">Nicht bestanden</span></td>
              <td>Başarısız</td>
              <td>–</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Retake Regulations Box -->
    <section class="seo-highlight-card">
      <div class="seo-highlight-title">💡 Tekrar Sınavı Kuralları (Teilprüfung Wiederholen)</div>
      <div class="seo-prose" style="color:var(--text-secondary); font-size:14px;">
        <p>Sınavda yalnızca yazılı bölümden geçip sözlüden kalırsanız veya tam tersi olursa tüm sınava tekrar girmenize gerek yoktur!</p>
        <p><strong>Resmi telc Kuralı:</strong> Başarılı olduğunuz bölümün puanı <em>sınava girdiğiniz takvim yılını takip eden yılın sonuna kadar</em> geçerliliğini korur. Bu süre içinde yalnızca başarısız olduğunuz kısmi sınava (Teilprüfung) girerek sertifikanızı tamamlayabilirsiniz.</p>
      </div>
    </section>

    <!-- Hub Practice Links -->
    <section class="seo-section">
      <h2 class="seo-section-title">🚀 Puanınızı Artırmak İçin Hemen Çalışmaya Başlayın</h2>
      <div class="seo-highlight-grid">
        <a href="trainer.html" class="seo-stat-item" style="text-decoration:none;">
          <div class="seo-stat-label">Wortschatz</div>
          <div class="seo-stat-value" style="font-size:17px; color:var(--accent-gold);">⚡ 2000+ Kelime Trainer</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:6px;">B1 kelime dağarcığınızı aralıklı tekrar sistemiyle güçlendirin.</p>
        </a>
        <a href="sprechen.html" class="seo-stat-item" style="text-decoration:none;">
          <div class="seo-stat-label">Sprechen (75 Pkt)</div>
          <div class="seo-stat-value" style="font-size:17px; color:#34d399;">🎙️ Konuşma Studio</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:6px;">Teil 1, 2 ve 3 için sesli kayıt yapın, AI geri bildirimi alın.</p>
        </a>
        <a href="lesen.html" class="seo-stat-item" style="text-decoration:none;">
          <div class="seo-stat-label">Lesen (75 Pkt)</div>
          <div class="seo-stat-value" style="font-size:17px; color:#60a5fa;">📖 Okuma Studio</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:6px;">Metin okuma, anlık sözlük ve soru çözme antrenmanı yapın.</p>
        </a>
        <a href="hoeren.html" class="seo-stat-item" style="text-decoration:none;">
          <div class="seo-stat-label">Hören (75 Pkt)</div>
          <div class="seo-stat-value" style="font-size:17px; color:#a855f7;">🎧 Dinleme Studio</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:6px;">Gerçek sınav ses kayıtlarıyla dinleme hızınızı geliştirin.</p>
        </a>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="seo-section">
      <h2 class="seo-section-title">❓ Sıkça Sorulan Sorular</h2>
{faq_html}
    </section>
  </main>

{render_footer()}

{PUNKTE_RECHNER_JS}
</body>
</html>"""


# ==============================================================================
# 4. /leben-in-deutschland-[eyalet]-fragen.html (All 16 States)
# ==============================================================================
def build_state_lid_page(state_obj, questions, all_states):
    code = state_obj["code"]
    state_name = state_obj["name"]
    capital = state_obj["capital"]
    tr_name = STATE_TR_NAMES.get(code, state_name)
    slug = STATE_SLUG_MAP[code]
    url = f"{BASE_URL}/{slug}"

    title = f"Leben in Deutschland {tr_name} Soruları — 10 Resmi Eyalet Sorusu ve Cevapları | DeutschLernen"
    description = f"BAMF Leben in Deutschland (LiD) ve Einbürgerungstest için resmi {state_name} ({tr_name}) eyalet soruları. 10 eyalet sorusunun Türkçe ve Almanca açıklamalı çözümleri."

    # Build FAQ Schema for all 10 questions of the state
    faq_items = []
    for q in questions:
        q_text = q.get("questionDe", "")
        correct_idx = q.get("correctIndex", 0)
        options = q.get("optionsDe", [])
        correct_ans = options[correct_idx] if correct_idx < len(options) else ""
        explanation_tr = q.get("explanationTr") or q.get("explanationDe", "")

        faq_items.append({
            "@type": "Question",
            "name": f"{state_name} LiD Soru {q.get('id', '')}: {q_text}",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f"Doğru Cevap: {correct_ans}. Açıklama: {explanation_tr}"
            }
        })

    faq_json_ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq_items
    }

    schema_breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": BASE_URL + "/"},
            {"@type": "ListItem", "position": 2, "name": "Leben in Deutschland", "item": f"{BASE_URL}/leben-in-deutschland-nrw-fragen.html"},
            {"@type": "ListItem", "position": 3, "name": f"{state_name} Soruları", "item": url}
        ]
    }

    faq_script_str = json.dumps(faq_json_ld, ensure_ascii=False, indent=2)
    breadcrumb_script_str = json.dumps(schema_breadcrumb, ensure_ascii=False, indent=2)

    # State Pills for rapid crawlability and user hopping
    state_pills_html = []
    for st in all_states:
        st_code = st["code"]
        st_slug = STATE_SLUG_MAP.get(st_code, "")
        st_tr = STATE_TR_NAMES.get(st_code, st["name"])
        active_class = "active" if st_code == code else ""
        state_pills_html.append(f'<a href="{st_slug}" class="seo-state-pill {active_class}">{st_tr}</a>')
    state_pills_str = "\n".join(state_pills_html)

    # Render Question Cards
    cards_html = []
    for idx, q in enumerate(questions, start=1):
        q_id = q.get("id", 300 + idx)
        q_de = html.escape(q.get("questionDe", ""))
        q_tr = html.escape(q.get("translations", {}).get("tr", {}).get("question", ""))
        options_de = q.get("optionsDe", [])
        correct_idx = q.get("correctIndex", 0)
        img_src = q.get("image")

        img_html = ""
        if img_src:
            img_html = f'''<div class="seo-question-image">
              <img src="{img_src}" alt="{html.escape(state_name)} LiD Soru {q_id} Görseli" loading="lazy">
            </div>'''

        options_html = []
        letters = ["A", "B", "C", "D"]
        for opt_i, opt_text in enumerate(options_de):
            letter = letters[opt_i] if opt_i < len(letters) else str(opt_i + 1)
            is_correct = "true" if opt_i == correct_idx else "false"
            options_html.append(f'''<button type="button" class="seo-option-btn" data-correct="{is_correct}" onclick="checkAnswer(this, {q_id})">
              <span class="seo-option-letter">{letter}</span>
              <span>{html.escape(opt_text)}</span>
            </button>''')
        options_str = "\n".join(options_html)

        exp_de = html.escape(q.get("explanationDe", ""))
        exp_tr = html.escape(q.get("explanationTr", ""))
        exp_en = html.escape(q.get("explanationEn", ""))
        exp_ar = html.escape(q.get("explanationAr", ""))
        exp_uk = html.escape(q.get("explanationUk", ""))

        cards_html.append(f'''<article class="seo-question-card" id="q-{q_id}">
          <div class="seo-question-header">
            <span class="seo-question-num">Soru #{q_id} ({idx} / 10)</span>
            <span style="font-size:12px; color:var(--text-muted);">Federal Eyalet: {html.escape(state_name)}</span>
          </div>
          <h3 class="seo-question-title">{q_de}</h3>
          {f'<p style="font-size:14px; color:var(--text-secondary); margin-bottom:14px;"><em>TR: {q_tr}</em></p>' if q_tr else ''}
          {img_html}
          <div class="seo-options-list">
            {options_str}
          </div>
          <div style="margin-top:12px; display:flex; gap:10px; align-items:center;">
            <button type="button" class="seo-copy-btn" onclick="revealAnswerDirectly({q_id})" style="font-size:12px;">👁️ Doğru Cevabı ve Açıklamayı Göster</button>
          </div>
          <div class="seo-answer-reveal" id="reveal-{q_id}">
            <div class="seo-answer-reveal-title">✅ Doğru Cevap: Şık {letters[correct_idx]} ({html.escape(options_de[correct_idx])})</div>
            <div class="seo-lang-tabs">
              <button type="button" class="seo-lang-tab active" onclick="switchExplanationLang({q_id}, 'tr', this)">Türkçe</button>
              <button type="button" class="seo-lang-tab" onclick="switchExplanationLang({q_id}, 'de', this)">Deutsch</button>
              <button type="button" class="seo-lang-tab" onclick="switchExplanationLang({q_id}, 'en', this)">English</button>
              <button type="button" class="seo-lang-tab" onclick="switchExplanationLang({q_id}, 'ar', this)">العربية</button>
              <button type="button" class="seo-lang-tab" onclick="switchExplanationLang({q_id}, 'uk', this)">Українська</button>
            </div>
            <div class="seo-answer-explain" id="explain-{q_id}-tr">{exp_tr}</div>
            <div class="seo-answer-explain" id="explain-{q_id}-de" style="display:none;">{exp_de}</div>
            <div class="seo-answer-explain" id="explain-{q_id}-en" style="display:none;">{exp_en}</div>
            <div class="seo-answer-explain" id="explain-{q_id}-ar" style="display:none;">{exp_ar}</div>
            <div class="seo-answer-explain" id="explain-{q_id}-uk" style="display:none;">{exp_uk}</div>
          </div>
        </article>''')

    questions_rendered_str = "\n".join(cards_html)

    return f"""<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{html.escape(title)}</title>
  <meta name="description" content="{html.escape(description)}">
  <meta name="keywords" content="leben in deutschland {html.escape(state_name.lower())} fragen, {html.escape(tr_name.lower())} eyalet soruları, lid 310 {code.lower()}, einbürgerungstest {html.escape(state_name.lower())}, bamf eyalet soruları">
  <link rel="canonical" href="{url}">

  <!-- OpenGraph & Twitter -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="{html.escape(title)}">
  <meta property="og:description" content="{html.escape(description)}">
  <meta property="og:url" content="{url}">
  <meta property="og:image" content="{BASE_URL}/assets/icons/icon-512.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{html.escape(title)}">
  <meta name="twitter:description" content="{html.escape(description)}">

  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="assets/fonts/fonts.css">
  <link rel="stylesheet" href="css/seo.css">

  <script type="application/ld+json">
{faq_script_str}
  </script>
  <script type="application/ld+json">
{breadcrumb_script_str}
  </script>
</head>
<body>

{render_header(active_nav='lid')}

  <main class="seo-container">
    <!-- Breadcrumbs -->
    <nav class="seo-breadcrumbs" aria-label="Breadcrumb">
      <a href="index.html">Ana Sayfa</a>
      <span>/</span>
      <a href="leben-in-deutschland-nrw-fragen.html">Leben in Deutschland</a>
      <span>/</span>
      <span style="color:var(--text-primary);">{html.escape(state_name)} ({code})</span>
    </nav>

    <!-- Hero -->
    <section class="seo-hero">
      <div class="seo-pill-tag">🏛️ BAMF Resmi Vatandaşlık Sınavı</div>
      <h1 class="seo-title">Leben in Deutschland {html.escape(tr_name)} Soruları</h1>
      <p class="seo-lead">Resmi BAMF soru havuzundaki 10 {html.escape(state_name)} ({code}) eyalet sorusunun Almanca ve Türkçe açıklamalı interaktif çözümleri. Soru üzerine tıklayarak bilginizi anında test edin.</p>
      
      <div class="seo-meta-badges">
        <span class="seo-meta-item">📍 Eyalet: {html.escape(state_name)} ({code})</span>
        <span class="seo-meta-item">🏛️ Başkent: {html.escape(capital)}</span>
        <span class="seo-meta-item">❓ Toplam: 10 Eyalet Sorusu</span>
        <span class="seo-meta-item">🎯 Sınavdaki Payı: 3 Soru</span>
      </div>
    </section>

    <!-- 16 States Quick Switcher -->
    <nav class="seo-state-switcher" aria-label="Almanya Eyaletleri">
      <div class="seo-state-switcher-title">
        <span>🇩🇪 Eyaletinizi Seçin (16 Bundesland):</span>
      </div>
      <div class="seo-state-pills">
        {state_pills_str}
      </div>
    </nav>

    <!-- Exam Strategy Summary -->
    <section class="seo-highlight-card">
      <div class="seo-highlight-title">💡 LiD ve Einbürgerungstest Sınav Yapısı</div>
      <div class="seo-prose" style="font-size:14px; color:var(--text-secondary);">
        <p>Almanya vatandaşlık ve kalıcı oturum için yapılan <strong>Leben in Deutschland (LiD)</strong> sınavında adaya toplam <strong>33 çoktan seçmeli soru</strong> sorulur:</p>
        <ul style="margin: 8px 0 10px 24px;">
          <li><strong>30 Genel Soru:</strong> Demokrasi, hukuk, tarih ve toplumsal yaşam (300 genel soru havuzundan).</li>
          <li><strong>3 Eyalet Sorusu:</strong> İkamet ettiğiniz eyalete özel tarih, coğrafya ve anayasa soruları (Aşağıdaki 10 eyalet sorusu havuzundan).</li>
        </ul>
        <p>Sınavı geçmek için 33 sorudan en az <strong>15 doğru (Vatandaşlık şartı)</strong> veya 17 doğru (Oryantasyon kursu başarı sertifikası) yapmanız gerekmektedir.</p>
      </div>
    </section>

    <!-- Questions Section -->
    <section class="seo-section">
      <h2 class="seo-section-title">📝 10 Resmi {html.escape(state_name)} Sorusunu Çözün</h2>
      {questions_rendered_str}
    </section>

    <!-- CTA Banner -->
    <section class="seo-banner-cta">
      <h2 class="seo-banner-title">300 Genel Soruyu ve Eyalet Sorularını Eksiksiz Çalışın</h2>
      <p class="seo-banner-text">DeutschLernen LiD Trainer'da tüm 310 soruyu 5 farklı dilde (Türkçe, İngilizce, Arapça, Ukraynaca, Almanca) çözebilir, deneme sınavı simülasyonu yapabilirsiniz.</p>
      <div class="seo-banner-actions">
        <a href="trainer.html" class="seo-cta-btn" style="font-size:15px; padding:12px 24px;">⚡ 310 LiD Trainer'ı Başlat →</a>
        <a href="telc-b1-punkte-rechner.html" class="seo-copy-btn" style="font-size:14px; padding:12px 20px;">🎯 telc B1 Puan Hesaplayıcı</a>
      </div>
    </section>
  </main>

{render_footer()}

{STATE_LID_JS}
</body>
</html>"""


# ==============================================================================
# 5. /sitemap.xml and /robots.txt
# ==============================================================================
def build_sitemap_and_robots(all_slugs):
    today = datetime.now().strftime("%Y-%m-%d")

    core_pages = [
        {"url": f"{BASE_URL}/", "priority": "1.0", "changefreq": "weekly"},
        {"url": f"{BASE_URL}/trainer.html", "priority": "0.9", "changefreq": "weekly"},
        {"url": f"{BASE_URL}/dashboard.html", "priority": "0.8", "changefreq": "weekly"},
        {"url": f"{BASE_URL}/sprechen.html", "priority": "0.8", "changefreq": "weekly"},
        {"url": f"{BASE_URL}/lesen.html", "priority": "0.8", "changefreq": "weekly"},
        {"url": f"{BASE_URL}/hoeren.html", "priority": "0.8", "changefreq": "weekly"},
        {"url": f"{BASE_URL}/legal.html", "priority": "0.5", "changefreq": "monthly"},
    ]

    seo_pages = [
        {"url": f"{BASE_URL}/{slug}", "priority": "0.9" if "nrw" in slug or "rechner" in slug or "beschwerde" in slug else "0.8", "changefreq": "monthly"}
        for slug in all_slugs
    ]

    all_entries = core_pages + seo_pages

    sitemap_items = []
    for item in all_entries:
        sitemap_items.append(f"""  <url>
    <loc>{item["url"]}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>{item["changefreq"]}</changefreq>
    <priority>{item["priority"]}</priority>
  </url>""")

    sitemap_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{"\n".join(sitemap_items)}
</urlset>
"""

    robots_content = f"""User-agent: *
Allow: /

Sitemap: {BASE_URL}/sitemap.xml
"""

    return sitemap_content, robots_content


# ==============================================================================
# MAIN BUILD PIPELINE
# ==============================================================================
def main():
    print("=" * 70)
    print("DeutschLernen — Programmatic SEO Static Site Generator")
    print("=" * 70)

    # 1. Load data
    print("Loading LiD 310 dataset from data/lid310.js...")
    states, state_questions = load_lid_data()
    print(f"Loaded {len(states)} states and {len(state_questions)} state question banks.")

    created_files = []

    # 2. Build telc-b1-beschwerdebrief-beispiel.html
    beschwerde_file = os.path.join(ROOT_DIR, "telc-b1-beschwerdebrief-beispiel.html")
    with open(beschwerde_file, "w", encoding="utf-8") as f:
        f.write(build_beschwerdebrief_page())
    created_files.append("telc-b1-beschwerdebrief-beispiel.html")
    print("  -> Built: telc-b1-beschwerdebrief-beispiel.html")

    # 3. Build telc-b1-einladung-schreiben.html
    einladung_file = os.path.join(ROOT_DIR, "telc-b1-einladung-schreiben.html")
    with open(einladung_file, "w", encoding="utf-8") as f:
        f.write(build_einladung_page())
    created_files.append("telc-b1-einladung-schreiben.html")
    print("  -> Built: telc-b1-einladung-schreiben.html")

    # 4. Build telc-b1-punkte-rechner.html
    rechner_file = os.path.join(ROOT_DIR, "telc-b1-punkte-rechner.html")
    with open(rechner_file, "w", encoding="utf-8") as f:
        f.write(build_punkte_rechner_page())
    created_files.append("telc-b1-punkte-rechner.html")
    print("  -> Built: telc-b1-punkte-rechner.html")

    # 5. Build all 16 state pages
    all_state_slugs = []
    for st in states:
        code = st["code"]
        questions = state_questions.get(code, [])
        slug = STATE_SLUG_MAP[code]
        all_state_slugs.append(slug)

        out_path = os.path.join(ROOT_DIR, slug)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(build_state_lid_page(st, questions, states))
        created_files.append(slug)
        print(f"  -> Built state page: {slug} ({code} - {st['name']}, {len(questions)} questions)")

    # Also build an alias for NW: leben-in-deutschland-nordrhein-westfalen-fragen.html (canonical to nrw)
    alias_nw = os.path.join(ROOT_DIR, "leben-in-deutschland-nordrhein-westfalen-fragen.html")
    with open(alias_nw, "w", encoding="utf-8") as f:
        nw_obj = next(s for s in states if s["code"] == "NW")
        nw_html = build_state_lid_page(nw_obj, state_questions.get("NW", []), states)
        f.write(nw_html)
    created_files.append("leben-in-deutschland-nordrhein-westfalen-fragen.html")
    print("  -> Built alias: leben-in-deutschland-nordrhein-westfalen-fragen.html")

    # 6. Build sitemap.xml and robots.txt
    all_seo_slugs = [
        "telc-b1-beschwerdebrief-beispiel.html",
        "telc-b1-einladung-schreiben.html",
        "telc-b1-punkte-rechner.html",
    ] + all_state_slugs + ["leben-in-deutschland-nordrhein-westfalen-fragen.html"]

    sitemap_xml, robots_txt = build_sitemap_and_robots(all_seo_slugs)

    sitemap_path = os.path.join(ROOT_DIR, "sitemap.xml")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(sitemap_xml)
    created_files.append("sitemap.xml")
    print("  -> Built: sitemap.xml")

    robots_path = os.path.join(ROOT_DIR, "robots.txt")
    with open(robots_path, "w", encoding="utf-8") as f:
        f.write(robots_txt)
    created_files.append("robots.txt")
    print("  -> Built: robots.txt")

    print("\n" + "=" * 70)
    print(f"✅ Success! Successfully generated {len(created_files)} SEO assets for GitHub Pages:")
    for fn in created_files:
        print(f"   - {fn}")
    print("=" * 70)


if __name__ == "__main__":
    main()
