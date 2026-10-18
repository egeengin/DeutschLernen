/**
 * telc Deutsch B1 Exam Readiness & Pass Predictor Dashboard (Bestehens-Rechner)
 * Grounded in official telc Deutsch B1 scoring guidelines & examination regulations.
 * Supports quad-lingual parity across EN, TR, AR, UK and native German (DE).
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.TelcCalculator = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {

  const CALC_I18N = {
    de: {
      title: "🎯 Offizieller telc B1 Prüfungsrechner & Bestehensprognose",
      subtitle: "Simuliere deine Prüfungsergebnisse in allen 5 offiziellen Prüfungsteilen gemäß telc B1 Prüfungsordnung (300 Punkte gesamt, 60% Bestehensgrenze).",
      writtenSectionTitle: "📝 Schriftliche Prüfung (Max. 225 Pkt., Min. 135 Pkt. / 60%)",
      oralSectionTitle: "🗣️ Mündliche Prüfung (Max. 75 Pkt., Min. 45 Pkt. / 60%)",
      lesenLabel: "Leseverstehen:",
      lesenSub: "20 Aufgaben × 3,75 Pkt.",
      sprachLabel: "Sprachbausteine:",
      sprachSub: "20 Aufgaben × 1,5 Pkt.",
      hoerenLabel: "Hörverstehen:",
      hoerenSub: "20 Aufgaben × 3,75 Pkt.",
      schreibenLabel: "Schreiben (Brief):",
      schreibenSub: "Kriterien I+II+III × 3",
      sprechenLabel: "Mündliche Prüfung:",
      sprechenSub: "Teil 1 (15) + Teil 2 (30) + Teil 3 (30)",
      presetMinimal: "🎯 Minimales Bestehen (60%)",
      presetGut: "⭐ Ziel: Gut (80%)",
      presetSehrGut: "🏆 Ziel: Sehr Gut (90%)",
      presetLoadReal: "⚡ Aus meinen Studio-Übungen laden",
      scoresLoadedMsg: "✅ Punktzahlen aus deinen Übungseinheiten geladen!",
      noScoresFoundMsg: "ℹ️ Noch keine Übungsergebnisse gespeichert. Probiere ein Studio aus oder passe die Regler manuell an.",
      resultTitle: "📊 Simuliertes telc B1 Prüfungsergebnis",
      overallScoreLabel: "Gesamtpunktzahl:",
      ptsLabel: "Pkt.",
      writtenStatusLabel: "Schriftliche Prüfung:",
      oralStatusLabel: "Mündliche Prüfung:",
      passStatusLabel: "Offizieller telc Status:",
      gradeLabel: "Note:",
      passedBadge: "🎉 BESTANDEN",
      failedBadge: "⚠️ NICHT BESTANDEN",
      partialBadge: "⚠️ TEILERGEBNIS",
      telcRuleWarning: "💡 Offizielle telc Regel: Du musst sowohl in der Schriftlichen Prüfung (≥135 Pkt.) ALS AUCH in der Mündlichen Prüfung (≥45 Pkt.) mindestens 60% erreichen, um insgesamt zu bestehen.",
      tacticalAdviceTitle: "🎯 Taktische Verbesserungsempfehlung:",
      weakestSectionLabel: "Schwachstelle mit niedrigster Punktzahl:",
      pointsToNextGradeLabel: "Fehlende Punkte für die nächste Notenstufe:",
      targetNextLabel: "Ziel:",
      practiceNowBtn: "Diesen Prüfungsteil jetzt üben →"
    },
    en: {
      title: "🎯 Official telc B1 Pass Predictor & Score Calculator",
      subtitle: "Simulate your exam scores across all 5 official components according to telc B1 regulations (300 points total, 60% passing mark).",
      writtenSectionTitle: "📝 Schriftliche Prüfung (Written Exam — Max 225 Pts, Min 135 Pts / 60%)",
      oralSectionTitle: "🗣️ Mündliche Prüfung (Oral Exam — Max 75 Pts, Min 45 Pts / 60%)",
      lesenLabel: "Leseverstehen (Reading):",
      lesenSub: "20 items × 3.75 pts",
      sprachLabel: "Sprachbausteine (Language Elements):",
      sprachSub: "20 items × 1.5 pts",
      hoerenLabel: "Hörverstehen (Listening):",
      hoerenSub: "20 items × 3.75 pts",
      schreibenLabel: "Schreiben (Letter Writing):",
      schreibenSub: "Criteria I+II+III × 3",
      sprechenLabel: "Mündliche Prüfung (Speaking):",
      sprechenSub: "Teil 1 (15) + Teil 2 (30) + Teil 3 (30)",
      presetMinimal: "🎯 Minimal Pass (60%)",
      presetGut: "⭐ Target: Gut (80%)",
      presetSehrGut: "🏆 Target: Sehr Gut (90%)",
      presetLoadReal: "⚡ Load From My Studio Practice",
      scoresLoadedMsg: "✅ Scores loaded from your studio practice sessions!",
      noScoresFoundMsg: "ℹ️ No practice scores saved yet. Try a studio or adjust sliders manually.",
      resultTitle: "📊 Simulated telc B1 Examination Result",
      overallScoreLabel: "Overall Score:",
      ptsLabel: "pts",
      writtenStatusLabel: "Written Exam (Schriftlich):",
      oralStatusLabel: "Oral Exam (Mündlich):",
      passStatusLabel: "Official telc Status:",
      gradeLabel: "Grade (Note):",
      passedBadge: "🎉 BESTANDEN (PASSED)",
      failedBadge: "⚠️ NICHT BESTANDEN (FAILED)",
      partialBadge: "⚠️ TEILERGEBNIS (PARTIAL PASS)",
      telcRuleWarning: "💡 Official telc Rule: You must achieve at least 60% in BOTH the Written Exam (≥135 pts) AND the Oral Exam (≥45 pts) to pass overall.",
      tacticalAdviceTitle: "🎯 Tactical Improvement Recommendation:",
      weakestSectionLabel: "Lowest scoring section:",
      pointsToNextGradeLabel: "Points needed for next grade:",
      targetNextLabel: "Target:",
      practiceNowBtn: "Practice this Section Now →"
    },
    tr: {
      title: "🎯 Resmi telc B1 Sınav Geçme ve Not Hesaplayıcı",
      subtitle: "Resmi telc B1 kurallarına göre 5 ana bölümdeki puanlarınızı simüle edin ve sınavı geçip geçmediğinizi görün (Toplam 300 puan, %60 baraj).",
      writtenSectionTitle: "📝 Schriftliche Prüfung (Yazılı Sınav — Maks 225 Puan, Baraj 135 Puan / %60)",
      oralSectionTitle: "🗣️ Mündliche Prüfung (Sözlü Sınav — Maks 75 Puan, Baraj 45 Puan / %60)",
      lesenLabel: "Leseverstehen (Okuduğunu Anlama):",
      lesenSub: "20 soru × 3,75 puan",
      sprachLabel: "Sprachbausteine (Dilbilgisi / Boşluk Doldurma):",
      sprachSub: "20 soru × 1,5 puan",
      hoerenLabel: "Hörverstehen (Dinleme):",
      hoerenSub: "20 soru × 3,75 puan",
      schreibenLabel: "Schreiben (Mektup Yazma):",
      schreibenSub: "Kriter I+II+III × 3",
      sprechenLabel: "Mündliche Prüfung (Konuşma):",
      sprechenSub: "Bölüm 1 (15) + Bölüm 2 (30) + Bölüm 3 (30)",
      presetMinimal: "🎯 Asgari Geçer (%60)",
      presetGut: "⭐ Hedef: İyi / Gut (%80)",
      presetSehrGut: "🏆 Hedef: Pekiyi / Sehr Gut (%90)",
      presetLoadReal: "⚡ Çalışmalarımdan Puanları Yükle",
      scoresLoadedMsg: "✅ Tamamladığınız stüdyo çalışmalarından puanlar yüklendi!",
      noScoresFoundMsg: "ℹ️ Henüz kayıtlı stüdyo puanı bulunamadı. Stüdyolardan pratik yapabilir veya kaydırıcıları ayarlayabilirsiniz.",
      resultTitle: "📊 telc B1 Sınav Sonucu Simülasyonu",
      overallScoreLabel: "Genel Toplam Puan:",
      ptsLabel: "puan",
      writtenStatusLabel: "Yazılı Sınav (Schriftlich):",
      oralStatusLabel: "Sözlü Sınav (Mündlich):",
      passStatusLabel: "Resmi telc Durumu:",
      gradeLabel: "Sınav Notu:",
      passedBadge: "🎉 BAŞARILI (BESTANDEN)",
      failedBadge: "⚠️ BAŞARISIZ (NICHT BESTANDEN)",
      partialBadge: "⚠️ KISMİ BAŞARI (TEILERGEBNIS)",
      telcRuleWarning: "💡 Resmi telc Kuralı: Sınavı genel olarak geçmek için HEM Yazılı Sınavdan (≥135 puan) HEM DE Sözlü Sınavdan (≥45 puan) en az %60 almanız zorunludur.",
      tacticalAdviceTitle: "🎯 Taktiksel Gelişim Önerisi:",
      weakestSectionLabel: "En zayıf kalınan bölüm:",
      pointsToNextGradeLabel: "Bir üst nota ulaşmak için gereken puan:",
      targetNextLabel: "Hedef Not:",
      practiceNowBtn: "Bu Bölümü Hemen Çalış →"
    },
    ar: {
      title: "🎯 حاسبة اجتياز امتحان telc B1 وتوقع الدرجات الرسمية",
      subtitle: "حاكِ نتائجك في الأقسام الخمسة الرسمية وفقاً لمعايير telc B1 المعتمدة (المجموع 300 نقطة، نسبة النجاح 60%).",
      writtenSectionTitle: "📝 الامتحان الكتابي (Schriftlich — 225 نقطة كحد أقصى، النجاح من 135 نقطة / 60%)",
      oralSectionTitle: "🗣️ الامتحان الشفوي (Mündlich — 75 نقطة كحد أقصى، النجاح من 45 نقطة / 60%)",
      lesenLabel: "فهم المقروء (Leseverstehen):",
      lesenSub: "20 سؤالاً × 3.75 نقطة",
      sprachLabel: "قواعد اللغة وتراكيبها (Sprachbausteine):",
      sprachSub: "20 سؤالاً × 1.5 نقطة",
      hoerenLabel: "فهم المسموع (Hörverstehen):",
      hoerenSub: "20 سؤالاً × 3.75 نقطة",
      schreibenLabel: "كتابة الرسالة (Schreiben):",
      schreibenSub: "المعايير I+II+III × 3",
      sprechenLabel: "المحادثة الشفوية (Sprechen):",
      sprechenSub: "الجزء 1 (15) + الجزء 2 (30) + الجزء 3 (30)",
      presetMinimal: "🎯 الحد الأدنى للنجاح (60%)",
      presetGut: "⭐ الهدف: جيد جداً / Gut (80%)",
      presetSehrGut: "🏆 الهدف: ممتاز / Sehr Gut (90%)",
      presetLoadReal: "⚡ استيراد درجاتي من التدريبات",
      scoresLoadedMsg: "✅ تم استيراد الدرجات من جلسات التدريب السابقة بنجاح!",
      noScoresFoundMsg: "ℹ️ لم يتم العثور على درجات محفوظة بعد. يمكنك تجربة أحد الاستوديوهات أو ضبط الأشرطة يدوياً.",
      resultTitle: "📊 محاكاة النتيجة النهائية لشهادة telc B1",
      overallScoreLabel: "المجموع الكلي النهائي:",
      ptsLabel: "نقطة",
      writtenStatusLabel: "الامتحان الكتابي (Schriftlich):",
      oralStatusLabel: "الامتحان الشفوي (Mündlich):",
      passStatusLabel: "حالة الاعتماد الرسمية:",
      gradeLabel: "التقدير (Note):",
      passedBadge: "🎉 ناجح (BESTANDEN)",
      failedBadge: "⚠️ راسب (NICHT BESTANDEN)",
      partialBadge: "⚠️ نتيجة جزئية (TEILERGEBNIS)",
      telcRuleWarning: "💡 قاعدة telc الرسمية: يجب الحصول على 60% على الأقل في الامتحان الكتابي (≥135 نقطة) والامتحان الشفوي (≥45 نقطة) معاً لاجتياز الشهادة.",
      tacticalAdviceTitle: "🎯 خطة التحسين والتوصيات التكتيكية:",
      weakestSectionLabel: "أضعف الأقسام أداءً:",
      pointsToNextGradeLabel: "النقاط المطلوبة للترقية للتقدير الأعلى:",
      targetNextLabel: "التقدير المستهدف:",
      practiceNowBtn: "تدرب على هذا القسم الآن ←"
    },
    uk: {
      title: "🎯 Офіційний калькулятор проходження та оцінок telc B1",
      subtitle: "Симулюйте свої бали за всіма 5 офіційними частинами відповідно до регламенту telc B1 (усього 300 балів, прохідний бар'єр 60%).",
      writtenSectionTitle: "📝 Письмовий іспит (Schriftlich — макс. 225 балів, мінімум 135 балів / 60%)",
      oralSectionTitle: "🗣️ Усний іспит (Mündlich — макс. 75 балів, мінімум 45 балів / 60%)",
      lesenLabel: "Читання (Leseverstehen):",
      lesenSub: "20 завдань × 3,75 бала",
      sprachLabel: "Мовні структури (Sprachbausteine):",
      sprachSub: "20 завдань × 1,5 бала",
      hoerenLabel: "Аудіювання (Hörverstehen):",
      hoerenSub: "20 завдань × 3,75 бала",
      schreibenLabel: "Письмо (Schreiben):",
      schreibenSub: "Критерії I+II+III × 3",
      sprechenLabel: "Усна частина (Sprechen):",
      sprechenSub: "Частина 1 (15) + Частина 2 (30) + Частина 3 (30)",
      presetMinimal: "🎯 Мінімальний прохідний (60%)",
      presetGut: "⭐ Ціль: Добре / Gut (80%)",
      presetSehrGut: "🏆 Ціль: Відмінно / Sehr Gut (90%)",
      presetLoadReal: "⚡ Завантажити мої бали з тренажерів",
      scoresLoadedMsg: "✅ Бали успішно завантажено з ваших тренувальних студій!",
      noScoresFoundMsg: "ℹ️ Збережених результатів поки немає. Пройдіть тренажери або налаштуйте повзунки вручну.",
      resultTitle: "📊 Симуляція результату іспиту telc B1",
      overallScoreLabel: "Загальний підсумковий бал:",
      ptsLabel: "балів",
      writtenStatusLabel: "Письмовий іспит (Schriftlich):",
      oralStatusLabel: "Усний іспит (Mündlich):",
      passStatusLabel: "Офіційний статус telc:",
      gradeLabel: "Оцінка (Note):",
      passedBadge: "🎉 СКЛАДЕНО (BESTANDEN)",
      failedBadge: "⚠️ НЕ СКЛАДЕНО (NICHT BESTANDEN)",
      partialBadge: "⚠️ ЧАСТКОВИЙ РЕЗУЛЬТАТ (TEILERGEBNIS)",
      telcRuleWarning: "💡 Офіційне правило telc: Ви повинні набрати щонайменше 60% як у письмовій (≥135 балів), так і в усній частині (≥45 балів) одночасно.",
      tacticalAdviceTitle: "🎯 Рекомендація щодо покращення бала:",
      weakestSectionLabel: "Найслабша частина:",
      pointsToNextGradeLabel: "Балів до наступної оцінки:",
      targetNextLabel: "Цільова оцінка:",
      practiceNowBtn: "Тренувати цю частину зараз →"
    }
  };

  /**
   * Calculate telc B1 Composite Examination Results
   * Strictly enforces official telc scoring logic:
   * - Written part: Lesen (75) + Sprachbausteine (30) + Hören (75) + Schreiben (45) = 225 pts. Pass mark: >= 135 pts (60%).
   * - Oral part: Sprechen (75) = 75 pts. Pass mark: >= 45 pts (60%).
   * - Overall: 300 pts. Pass mark: >= 180 pts (60%), BUT BOTH parts must be passed independently!
   */
  function calculateTelcB1ExamResult(rawScores) {
    const clamp = (val, min, max) => Math.max(min, Math.min(max, Number(val) || 0));

    const lesen = clamp(rawScores?.lesen ?? 45, 0, 75);
    const sprachbausteine = clamp(rawScores?.sprachbausteine ?? 18, 0, 30);
    const hoeren = clamp(rawScores?.hoeren ?? 45, 0, 75);
    const schreiben = clamp(rawScores?.schreiben ?? 27, 0, 45);
    const sprechen = clamp(rawScores?.sprechen ?? 45, 0, 75);

    const schriftlichTotal = Math.round((lesen + sprachbausteine + hoeren + schreiben) * 10) / 10;
    const schriftlichMax = 225;
    const schriftlichThreshold = 135;
    const schriftlichPassed = schriftlichTotal >= schriftlichThreshold;
    const schriftlichPct = Math.round((schriftlichTotal / schriftlichMax) * 100);

    const muendlichTotal = Math.round(sprechen * 10) / 10;
    const muendlichMax = 75;
    const muendlichThreshold = 45;
    const muendlichPassed = muendlichTotal >= muendlichThreshold;
    const muendlichPct = Math.round((muendlichTotal / muendlichMax) * 100);

    const overallTotal = Math.round((schriftlichTotal + muendlichTotal) * 10) / 10;
    const overallMax = 300;
    const overallThreshold = 180;
    const overallPct = Math.round((overallTotal / overallMax) * 100);

    // Official telc Rule: Both written and oral sub-exams must be passed individually
    const overallPassed = schriftlichPassed && muendlichPassed;

    let statusCode = 'failed';
    let gradeCode = 'nicht_bestanden';
    let gradeName = 'Nicht bestanden (Grade 5 / Fail)';

    if (overallPassed) {
      statusCode = 'passed';
      if (overallTotal >= 270) {
        gradeCode = 'sehr_gut';
        gradeName = 'Sehr Gut (Grade 1 / Distinction)';
      } else if (overallTotal >= 240) {
        gradeCode = 'gut';
        gradeName = 'Gut (Grade 2 / Good)';
      } else if (overallTotal >= 210) {
        gradeCode = 'befriedigend';
        gradeName = 'Befriedigend (Grade 3 / Satisfactory)';
      } else {
        gradeCode = 'ausreichend';
        gradeName = 'Ausreichend (Grade 4 / Pass)';
      }
    } else if (schriftlichPassed && !muendlichPassed) {
      statusCode = 'partial_written';
      gradeCode = 'teil_muendlich';
      gradeName = 'Teilergebnis (Mündlich wiederholen)';
    } else if (!schriftlichPassed && muendlichPassed) {
      statusCode = 'partial_oral';
      gradeCode = 'teil_schriftlich';
      gradeName = 'Teilergebnis (Schriftlich wiederholen)';
    } else {
      statusCode = 'both_failed';
      gradeCode = 'nicht_bestanden';
      gradeName = 'Nicht bestanden (Beide Teile wiederholen)';
    }

    // Component Percentage breakdown to find weakest link
    const schreibenTarget = (typeof document !== 'undefined' && document.getElementById('section-examiner')) ? '#section-examiner' : '#schreiben-showcase-section';
    const components = [
      { id: 'lesen', name: 'Leseverstehen', pts: lesen, max: 75, pct: Math.round((lesen / 75) * 100), link: 'lesen.html?track=lesen' },
      { id: 'sprachbausteine', name: 'Sprachbausteine', pts: sprachbausteine, max: 30, pct: Math.round((sprachbausteine / 30) * 100), link: 'lesen.html?track=sprachbausteine' },
      { id: 'hoeren', name: 'Hörverstehen', pts: hoeren, max: 75, pct: Math.round((hoeren / 75) * 100), link: 'hoeren.html' },
      { id: 'schreiben', name: 'Schreiben', pts: schreiben, max: 45, pct: Math.round((schreiben / 45) * 100), link: schreibenTarget },
      { id: 'sprechen', name: 'Mündliche Prüfung', pts: sprechen, max: 75, pct: Math.round((sprechen / 75) * 100), link: 'sprechen.html' }
    ];

    // Find component with lowest percentage
    const weakest = components.reduce((min, curr) => curr.pct < min.pct ? curr : min, components[0]);

    // Points to next grade or passing threshold
    let pointsToNext = 0;
    let nextGradeName = '';

    if (!overallPassed) {
      if (!schriftlichPassed && muendlichPassed) {
        pointsToNext = Math.max(0.5, Math.round((schriftlichThreshold - schriftlichTotal) * 10) / 10);
        nextGradeName = 'Bestehen Schriftliche Prüfung (≥135 pts)';
      } else if (schriftlichPassed && !muendlichPassed) {
        pointsToNext = Math.max(0.5, Math.round((muendlichThreshold - muendlichTotal) * 10) / 10);
        nextGradeName = 'Bestehen Mündliche Prüfung (≥45 pts)';
      } else {
        const needW = Math.max(0, schriftlichThreshold - schriftlichTotal);
        const needO = Math.max(0, muendlichThreshold - muendlichTotal);
        pointsToNext = Math.round((needW + needO) * 10) / 10;
        nextGradeName = 'Bestehen Gesamt (≥180 pts)';
      }
    } else {
      if (overallTotal < 210) {
        pointsToNext = Math.round((210 - overallTotal) * 10) / 10;
        nextGradeName = 'Befriedigend (210 pts)';
      } else if (overallTotal < 240) {
        pointsToNext = Math.round((240 - overallTotal) * 10) / 10;
        nextGradeName = 'Gut (240 pts)';
      } else if (overallTotal < 270) {
        pointsToNext = Math.round((270 - overallTotal) * 10) / 10;
        nextGradeName = 'Sehr Gut (270 pts)';
      } else {
        pointsToNext = Math.max(0, Math.round((300 - overallTotal) * 10) / 10);
        nextGradeName = 'Maximalwert (300 pts)';
      }
    }

    return {
      scores: { lesen, sprachbausteine, hoeren, schreiben, sprechen },
      schriftlich: {
        total: schriftlichTotal,
        max: schriftlichMax,
        threshold: schriftlichThreshold,
        passed: schriftlichPassed,
        percentage: schriftlichPct
      },
      muendlich: {
        total: muendlichTotal,
        max: muendlichMax,
        threshold: muendlichThreshold,
        passed: muendlichPassed,
        percentage: muendlichPct
      },
      overall: {
        total: overallTotal,
        max: overallMax,
        threshold: overallThreshold,
        passed: overallPassed,
        percentage: overallPct,
        statusCode,
        gradeCode,
        gradeName
      },
      analysis: {
        weakest,
        components,
        pointsToNext,
        nextGradeName
      }
    };
  }

  function getLang() {
    if (typeof currentLang !== 'undefined' && CALC_I18N[currentLang]) {
      return currentLang;
    }
    return 'en';
  }

  function getText(key) {
    const lang = getLang();
    return CALC_I18N[lang]?.[key] || CALC_I18N.en[key] || '';
  }

  /**
   * Render Interactive Dashboard in the DOM
   */
  function renderTelcCalculator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const t = getText;

    container.innerHTML = `
      <div class="telc-calc-card" style="background:var(--bg-card); border:1px solid var(--border); border-radius:16px; padding:28px; box-shadow:0 4px 24px rgba(0,0,0,0.04);">
        
        <!-- Header -->
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px; margin-bottom:24px;">
          <div>
            <div style="display:inline-flex; align-items:center; gap:6px; background:rgba(245,158,11,0.12); border:1px solid rgba(245,158,11,0.3); color:var(--accent-gold); font-size:11px; font-weight:800; padding:3px 10px; border-radius:12px; margin-bottom:8px; text-transform:uppercase;">
              🏆 Official telc B1 Scoring Engine
            </div>
            <h3 style="margin:0 0 6px 0; font-size:22px; color:var(--text-primary); font-weight:800;">
              ${t('title')}
            </h3>
            <p style="margin:0; font-size:13px; color:var(--text-secondary); max-width:680px; line-height:1.5;">
              ${t('subtitle')}
            </p>
          </div>

          <!-- Presets Strip -->
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="calc-preset-btn" onclick="TelcCalculator.applyPreset('minimal')" style="padding:6px 12px; font-size:12px; font-weight:700; border-radius:8px; border:1px solid var(--border); background:var(--bg-secondary); color:var(--text-primary); cursor:pointer;">
              ${t('presetMinimal')}
            </button>
            <button type="button" class="calc-preset-btn" onclick="TelcCalculator.applyPreset('gut')" style="padding:6px 12px; font-size:12px; font-weight:700; border-radius:8px; border:1px solid rgba(16,185,129,0.4); background:rgba(16,185,129,0.08); color:#10b981; cursor:pointer;">
              ${t('presetGut')}
            </button>
            <button type="button" class="calc-preset-btn" onclick="TelcCalculator.applyPreset('sehr_gut')" style="padding:6px 12px; font-size:12px; font-weight:700; border-radius:8px; border:1px solid rgba(245,158,11,0.4); background:rgba(245,158,11,0.08); color:var(--accent-gold); cursor:pointer;">
              ${t('presetSehrGut')}
            </button>
            <button type="button" class="calc-preset-btn" onclick="TelcCalculator.loadFromStorage()" style="padding:6px 12px; font-size:12px; font-weight:700; border-radius:8px; border:1px solid #3b82f6; background:rgba(59,130,246,0.1); color:#3b82f6; cursor:pointer;">
              ${t('presetLoadReal')}
            </button>
          </div>
        </div>

        <div id="calc-alert-banner" style="display:none; padding:10px 14px; border-radius:8px; margin-bottom:16px; font-size:12px; font-weight:600;"></div>

        <!-- Two Column Layout: Sliders (Left) & Result Card (Right) -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:24px; align-items:start;">
          
          <!-- Column 1: Component Inputs -->
          <div style="display:flex; flex-direction:column; gap:18px;">
            
            <!-- Written Group -->
            <div style="background:var(--bg-secondary); border:1px solid var(--border); border-radius:12px; padding:16px;">
              <h4 style="margin:0 0 12px 0; font-size:13px; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.04em;">
                ${t('writtenSectionTitle')}
              </h4>

              <!-- 1. Lesen -->
              <div class="calc-slider-row" style="margin-bottom:14px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; font-size:13px;">
                  <span style="font-weight:700; color:var(--text-primary);">${t('lesenLabel')}</span>
                  <span style="font-weight:800; color:var(--accent-gold); font-size:14px;"><span id="calc-val-lesen">56.25</span> / 75 pts</span>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                  <input type="range" id="calc-range-lesen" min="0" max="75" step="3.75" value="56.25" oninput="TelcCalculator.onSliderChange()" style="flex:1;">
                  <span style="font-size:11px; color:var(--text-muted); width:70px; text-align:right;">${t('lesenSub')}</span>
                </div>
              </div>

              <!-- 2. Sprachbausteine -->
              <div class="calc-slider-row" style="margin-bottom:14px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; font-size:13px;">
                  <span style="font-weight:700; color:var(--text-primary);">${t('sprachLabel')}</span>
                  <span style="font-weight:800; color:var(--accent-gold); font-size:14px;"><span id="calc-val-sprach">22.5</span> / 30 pts</span>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                  <input type="range" id="calc-range-sprach" min="0" max="30" step="1.5" value="22.5" oninput="TelcCalculator.onSliderChange()" style="flex:1;">
                  <span style="font-size:11px; color:var(--text-muted); width:70px; text-align:right;">${t('sprachSub')}</span>
                </div>
              </div>

              <!-- 3. Hören -->
              <div class="calc-slider-row" style="margin-bottom:14px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; font-size:13px;">
                  <span style="font-weight:700; color:var(--text-primary);">${t('hoerenLabel')}</span>
                  <span style="font-weight:800; color:var(--accent-gold); font-size:14px;"><span id="calc-val-hoeren">48.75</span> / 75 pts</span>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                  <input type="range" id="calc-range-hoeren" min="0" max="75" step="3.75" value="48.75" oninput="TelcCalculator.onSliderChange()" style="flex:1;">
                  <span style="font-size:11px; color:var(--text-muted); width:70px; text-align:right;">${t('hoerenSub')}</span>
                </div>
              </div>

              <!-- 4. Schreiben -->
              <div class="calc-slider-row">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; font-size:13px;">
                  <span style="font-weight:700; color:var(--text-primary);">${t('schreibenLabel')}</span>
                  <span style="font-weight:800; color:var(--accent-gold); font-size:14px;"><span id="calc-val-schreiben">33</span> / 45 pts</span>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                  <input type="range" id="calc-range-schreiben" min="0" max="45" step="3" value="33" oninput="TelcCalculator.onSliderChange()" style="flex:1;">
                  <span style="font-size:11px; color:var(--text-muted); width:70px; text-align:right;">${t('schreibenSub')}</span>
                </div>
              </div>

            </div>

            <!-- Oral Group -->
            <div style="background:var(--bg-secondary); border:1px solid var(--border); border-radius:12px; padding:16px;">
              <h4 style="margin:0 0 12px 0; font-size:13px; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.04em;">
                ${t('oralSectionTitle')}
              </h4>

              <!-- 5. Sprechen -->
              <div class="calc-slider-row">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; font-size:13px;">
                  <span style="font-weight:700; color:var(--text-primary);">${t('sprechenLabel')}</span>
                  <span style="font-weight:800; color:var(--accent-gold); font-size:14px;"><span id="calc-val-sprechen">52.5</span> / 75 pts</span>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                  <input type="range" id="calc-range-sprechen" min="0" max="75" step="2.5" value="52.5" oninput="TelcCalculator.onSliderChange()" style="flex:1;">
                  <span style="font-size:11px; color:var(--text-muted); width:70px; text-align:right;">${t('sprechenSub')}</span>
                </div>
              </div>

            </div>

          </div>

          <!-- Column 2: Live Composite Scorecard & Status -->
          <div id="calc-scorecard-panel" style="background:linear-gradient(135deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.9) 100%); border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:24px;">
            <!-- Dynamically populated by updateScorecardDOM() -->
          </div>

        </div>

      </div>
    `;

    updateScorecardDOM();
  }

  function getSliderValues() {
    return {
      lesen: parseFloat(document.getElementById('calc-range-lesen')?.value || '45'),
      sprachbausteine: parseFloat(document.getElementById('calc-range-sprach')?.value || '18'),
      hoeren: parseFloat(document.getElementById('calc-range-hoeren')?.value || '45'),
      schreiben: parseFloat(document.getElementById('calc-range-schreiben')?.value || '27'),
      sprechen: parseFloat(document.getElementById('calc-range-sprechen')?.value || '45')
    };
  }

  function onSliderChange() {
    const vals = getSliderValues();
    const elLesen = document.getElementById('calc-val-lesen');
    const elSprach = document.getElementById('calc-val-sprach');
    const elHoeren = document.getElementById('calc-val-hoeren');
    const elSchreiben = document.getElementById('calc-val-schreiben');
    const elSprechen = document.getElementById('calc-val-sprechen');

    if (elLesen) elLesen.textContent = vals.lesen;
    if (elSprach) elSprach.textContent = vals.sprachbausteine;
    if (elHoeren) elHoeren.textContent = vals.hoeren;
    if (elSchreiben) elSchreiben.textContent = vals.schreiben;
    if (elSprechen) elSprechen.textContent = vals.sprechen;

    updateScorecardDOM();
  }

  function updateScorecardDOM() {
    const panel = document.getElementById('calc-scorecard-panel');
    if (!panel) return;

    const vals = getSliderValues();
    const res = calculateTelcB1ExamResult(vals);
    const t = getText;

    const isPass = res.overall.passed;
    const isPartial = res.overall.statusCode.startsWith('partial');
    const badgeColor = isPass ? '#10b981' : (isPartial ? '#f59e0b' : '#ef4444');
    const badgeText = isPass ? t('passedBadge') : (isPartial ? t('partialBadge') : t('failedBadge'));

    panel.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <span style="font-size:12px; font-weight:800; text-transform:uppercase; color:rgba(255,255,255,0.6);">${t('resultTitle')}</span>
        <span style="font-size:11px; font-weight:800; background:${badgeColor}; color:#fff; padding:3px 10px; border-radius:10px;">${badgeText}</span>
      </div>

      <!-- Main Score Big Number -->
      <div style="display:flex; align-items:baseline; gap:8px; margin-bottom:12px;">
        <span style="font-size:48px; font-weight:800; color:#fff; line-height:1;">${res.overall.total}</span>
        <span style="font-size:20px; font-weight:700; color:rgba(255,255,255,0.6);">/ 300 ${t('ptsLabel')} (${res.overall.percentage}%)</span>
      </div>

      <div style="font-size:14px; font-weight:700; color:${badgeColor}; margin-bottom:20px;">
        ${t('gradeLabel')} ${res.overall.gradeName}
      </div>

      <!-- Bars for Written vs Oral sub-exams -->
      <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:20px;">
        <!-- Written Bar -->
        <div>
          <div style="display:flex; justify-content:space-between; font-size:12px; color:#fff; margin-bottom:4px;">
            <span>${t('writtenStatusLabel')}</span>
            <span><strong>${res.schriftlich.total}</strong> / 225 pts (Min: 135) ${res.schriftlich.passed ? '✅' : '❌'}</span>
          </div>
          <div style="background:rgba(255,255,255,0.15); height:8px; border-radius:4px; overflow:hidden;">
            <div style="background:${res.schriftlich.passed ? '#10b981' : '#ef4444'}; height:100%; width:${Math.min(100, res.schriftlich.percentage)}%; border-radius:4px; transition:width 0.2s;"></div>
          </div>
        </div>

        <!-- Oral Bar -->
        <div>
          <div style="display:flex; justify-content:space-between; font-size:12px; color:#fff; margin-bottom:4px;">
            <span>${t('oralStatusLabel')}</span>
            <span><strong>${res.muendlich.total}</strong> / 75 pts (Min: 45) ${res.muendlich.passed ? '✅' : '❌'}</span>
          </div>
          <div style="background:rgba(255,255,255,0.15); height:8px; border-radius:4px; overflow:hidden;">
            <div style="background:${res.muendlich.passed ? '#10b981' : '#ef4444'}; height:100%; width:${Math.min(100, res.muendlich.percentage)}%; border-radius:4px; transition:width 0.2s;"></div>
          </div>
        </div>
      </div>

      <!-- telc Examination Rule Box -->
      <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); border-radius:10px; padding:10px 14px; font-size:11px; color:#fde68a; line-height:1.4; margin-bottom:18px;">
        ${t('telcRuleWarning')}
      </div>

      <!-- Tactical Weak-Spot Improvement Plan -->
      <div style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); border-radius:10px; padding:14px;">
        <div style="font-size:12px; font-weight:800; color:#fff; margin-bottom:6px;">
          ${t('tacticalAdviceTitle')}
        </div>
        <div style="font-size:12px; color:rgba(255,255,255,0.8); line-height:1.5; margin-bottom:10px;">
          ${t('weakestSectionLabel')} <strong>${res.analysis.weakest.name}</strong> (${res.analysis.weakest.pts}/${res.analysis.weakest.max} pts, ${res.analysis.weakest.pct}%).<br>
          ${res.analysis.pointsToNext > 0 
            ? `${t('pointsToNextGradeLabel')} <strong>+${res.analysis.pointsToNext} pts</strong> (${t('targetNextLabel')} ${res.analysis.nextGradeName}).`
            : `🎉 <strong>Maximum bracket reached!</strong>`}
        </div>
        <a href="${res.analysis.weakest.link}" style="display:inline-flex; align-items:center; gap:6px; background:linear-gradient(135deg,#f59e0b,#d97706); color:#000; font-weight:800; font-size:12px; padding:7px 14px; border-radius:8px; text-decoration:none; box-shadow:0 2px 8px rgba(245,158,11,0.3);">
          ${t('practiceNowBtn')}
        </a>
      </div>
    `;
  }

  function applyPreset(preset) {
    let vals = { lesen: 45, sprachbausteine: 18, hoeren: 45, schreiben: 27, sprechen: 45 };

    if (preset === 'minimal') {
      // Exactly 60% in every part: 45 + 18 + 45 + 27 = 135 (written) + 45 (oral) = 180 total
      vals = { lesen: 45, sprachbausteine: 18, hoeren: 45, schreiben: 27, sprechen: 45 };
    } else if (preset === 'gut') {
      // ~80% (240 total): 60 + 24 + 60 + 36 = 180 (written) + 60 (oral) = 240 total
      vals = { lesen: 60, sprachbausteine: 24, hoeren: 60, schreiben: 36, sprechen: 60 };
    } else if (preset === 'sehr_gut') {
      // ~90% (270 total): 67.5 + 27 + 67.5 + 42 = 204 (written) + 67.5 (oral) = 271.5 total
      vals = { lesen: 67.5, sprachbausteine: 27, hoeren: 67.5, schreiben: 42, sprechen: 67.5 };
    }

    setSliderValues(vals);
    onSliderChange();
  }

  function setSliderValues(vals) {
    const setOne = (id, v) => {
      const el = document.getElementById(id);
      if (el) el.value = v;
    };
    setOne('calc-range-lesen', vals.lesen);
    setOne('calc-range-sprach', vals.sprachbausteine);
    setOne('calc-range-hoeren', vals.hoeren);
    setOne('calc-range-schreiben', vals.schreiben);
    setOne('calc-range-sprechen', vals.sprechen);
  }

  function loadFromStorage() {
    const t = getText;
    const banner = document.getElementById('calc-alert-banner');

    try {
      // Check saved practice scores
      const sLesen = localStorage.getItem('telc_lesen_score');
      const sSprach = localStorage.getItem('telc_sprachbausteine_score');
      const sHoeren = localStorage.getItem('telc_hoeren_score');
      const sSchreiben = localStorage.getItem('telc_letter_score');
      const sSprechen = localStorage.getItem('telc_voice_score');

      let foundAny = false;
      const current = getSliderValues();

      if (sLesen !== null) { current.lesen = parseFloat(sLesen); foundAny = true; }
      if (sSprach !== null) { current.sprachbausteine = parseFloat(sSprach); foundAny = true; }
      if (sHoeren !== null) { current.hoeren = parseFloat(sHoeren); foundAny = true; }
      if (sSchreiben !== null) { current.schreiben = parseFloat(sSchreiben); foundAny = true; }
      if (sSprechen !== null) { current.sprechen = parseFloat(sSprechen); foundAny = true; }

      setSliderValues(current);
      onSliderChange();

      if (banner) {
        banner.style.display = 'block';
        if (foundAny) {
          banner.style.background = 'rgba(16,185,129,0.15)';
          banner.style.color = '#10b981';
          banner.style.border = '1px solid #10b981';
          banner.textContent = t('scoresLoadedMsg');
        } else {
          banner.style.background = 'rgba(59,130,246,0.15)';
          banner.style.color = '#60a5fa';
          banner.style.border = '1px solid #3b82f6';
          banner.textContent = t('noScoresFoundMsg');
        }
        setTimeout(() => { if (banner) banner.style.display = 'none'; }, 4000);
      }
    } catch (e) {
      console.warn('Storage read failed:', e);
    }
  }

  return {
    CALC_I18N,
    calculateTelcB1ExamResult,
    renderTelcCalculator,
    onSliderChange,
    applyPreset,
    loadFromStorage
  };
}));
