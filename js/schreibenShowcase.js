/**
 * Interactive Render Engine for telc B1 Schreiben Sample Evaluation Report Showcase
 * Grounded strictly in official telc Deutsch B1 exam scoring guidelines.
 */

function renderSchreibenShowcase(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const data = SAMPLE_B1_EVALUATION;
  const isTr = typeof currentLang !== 'undefined' && currentLang === 'tr';

  // Render main layout
  container.innerHTML = `
    <div class="schreiben-showcase-wrapper">
      <!-- Header Banner -->
      <div class="showcase-header">
        <div class="showcase-badge">✨ Official telc B1 Sample Evaluation</div>
        <h2>📝 telc Deutsch B1 Schreiben — Interactive Examiner Report</h2>
        <p>This report demonstrates how the <strong>Pro AI Exam Grader</strong> evaluates student letters line-by-line using the official <strong>telc B1 3-Criteria Rating System</strong> (Max 45 points).</p>
      </div>

      <!-- Prompt Info Card with Incoming E-Mail & 4 Leitpunkte -->
      <div class="showcase-prompt-card">
        <div class="prompt-header">
          <span class="prompt-type">${data.prompt.type}</span>
          <span class="prompt-word-count">⏱️ ${data.prompt.timeAllowed} • 📊 ${data.studentSubmission.wordCount} words</span>
        </div>
        <h3 class="prompt-title">${data.prompt.title}</h3>

        <!-- Incoming E-Mail Box -->
        <div class="incoming-email-box">
          <div class="email-header">
            <div><strong>From:</strong> ${data.prompt.incomingMessage.sender}</div>
            <div><strong>Subject:</strong> ${data.prompt.incomingMessage.subject}</div>
          </div>
          <div class="email-body">${data.prompt.incomingMessage.text.replace(/\n/g, '<br>')}</div>
        </div>

        <!-- 4 Leitpunkte Checklist -->
        <div class="leitpunkte-checklist">
          <h4>📋 telc B1 Leitpunkte Check (4 Guided Points Required):</h4>
          <div class="leitpunkte-grid">
            ${data.prompt.leitpunkte.map(lp => `
              <div class="leitpunkt-item ${lp.status}">
                <span class="lp-icon">${lp.status === 'fulfilled' ? '✅' : '⚠️'}</span>
                <span class="lp-num">Point ${lp.id}:</span>
                <span class="lp-text">${isTr ? lp.textTr : lp.textEn}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Main Showcase Grid -->
      <div class="showcase-grid">
        <!-- Left: Student Letter with Inline Highlighting -->
        <div class="showcase-column letter-column">
          <div class="column-header">
            <h3>📜 Annotated B1 Student Letter</h3>
            <span class="sub-hint">Hover or tap highlighted text to view examiner corrections & rule references</span>
          </div>

          <div class="annotated-letter-box" id="annotated-letter-content">
            ${renderAnnotatedText(data.studentSubmission.rawText, data.annotations)}
          </div>

          <div class="annotation-legend">
            <span class="legend-item syntax"><span class="dot"></span> Word Order / Inversion</span>
            <span class="legend-item spelling"><span class="dot"></span> Orthography / Eszett</span>
            <span class="legend-item vocab"><span class="dot"></span> B1 Vocab & Register</span>
          </div>
        </div>

        <!-- Right: Official telc Rubric & Score calculation -->
        <div class="showcase-column rubric-column">
          <div class="column-header">
            <h3>📊 Official telc B1 Rubric & Calculation</h3>
            <span class="sub-hint">Formula: (Kriterium I + II + III) × 3 = Final Score / 45</span>
          </div>

          <!-- Total Score Card with Formula -->
          <div class="total-score-card">
            <div class="score-circle">
              <span class="score-num">${data.scores.total}</span>
              <span class="score-max">/ 45 pts</span>
            </div>
            <div class="score-details">
              <div class="score-grade">${data.scores.grade} (${data.scores.percentage}%)</div>
              <div class="score-formula">
                <code>(${data.scores.criteria[0].ratingLetter} + ${data.scores.criteria[1].ratingLetter} + ${data.scores.criteria[2].ratingLetter}) = ${data.scores.rawSum}/15 × 3 = ${data.scores.total}/45</code>
              </div>
              <div class="score-status-pill">Pass Threshold Met (≥27 pts)</div>
            </div>
          </div>

          <!-- Individual Criteria Rating Cards -->
          <div class="criteria-list">
            ${data.scores.criteria.map(c => `
              <div class="criterion-item">
                <div class="criterion-header">
                  <span class="criterion-title">${isTr ? c.titleTr : c.titleEn}</span>
                  <span class="criterion-score">Score ${c.ratingLetter} (${c.rawScore}/5 raw &rarr; <strong>${c.finalScore}/15 pts</strong>)</span>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill ${c.status}" style="width: ${(c.rawScore / c.rawMax) * 100}%"></div>
                </div>
                <p class="criterion-summary">${isTr ? c.summaryTr : c.summaryEn}</p>
              </div>
            `).join('')}
          </div>

          <!-- telc Rules Note -->
          <div class="telc-rules-note">
            💡 <strong>telc B1 Rule ("Primat der Verständlichkeit"):</strong> Grammar errors that do not hinder understanding are graded Score B (3 pts). Full Score A (5 pts) requires zero systematic syntax errors and natural B1 register.
          </div>
        </div>
      </div>

      <!-- B1 Vocabulary & Sentence Structure Upgrades -->
      <div class="upgrades-section">
        <h3>💡 Examiner B1 Sentence Upgrades</h3>
        <p class="upgrades-sub">Transforming basic expressions into high-scoring B1 formal structures:</p>
        <div class="upgrades-grid">
          ${data.b1Upgrades.map(u => `
            <div class="upgrade-card">
              <div class="upgrade-original">
                <span class="label">Original Student Phrase:</span>
                <p>"${u.original}"</p>
              </div>
              <div class="upgrade-improved">
                <span class="label">✨ B1 Examiner Recommendation:</span>
                <p>"${u.upgrade}"</p>
              </div>
              <div class="upgrade-benefit">
                <span>💡 Why this scores higher:</span> ${isTr ? u.benefitTr : u.benefitEn}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- High-Converting CTA Banner -->
      <div class="pro-cta-banner">
        <div class="cta-content">
          <span class="cta-kicker">🚀 UNLOCK THE AI EXAM GRADER</span>
          <h2>Want instant, line-by-line feedback on your OWN practice letters?</h2>
          <p>Get authentic telc B1 rubric scoring, syntax fixes, and personalized weak-spot tracking in 15 seconds.</p>
          <div class="cta-badges">
            <span>⚡ Instant 15s Feedback</span>
            <span>🎯 Official telc B1 Criteria (I + II + III × 3)</span>
            <span>🔒 100% Secure & Private</span>
          </div>
        </div>
        <div class="cta-action">
          <button class="cta-btn-primary" onclick="openProPricingModal()">
            ⚡ Unlock AI Exam Grader — from €29
          </button>
          <div class="cta-guarantee">30-Day Pass • No recurring monthly subscription</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Helper to inject annotations into the student letter string
 */
function renderAnnotatedText(rawText, annotations) {
  let html = rawText;

  annotations.forEach(ann => {
    const highlightSpan = `<mark class="annotation-mark ${ann.type}" onclick="showAnnotationDetail('${ann.id}')">
      ${ann.targetText}
      <span class="ann-popover">
        <strong>Fix: ${ann.correctedText}</strong><br>
        <small>${ann.rule}: ${ann.explanationEn}</small>
      </span>
    </mark>`;

    html = html.replace(ann.targetText, highlightSpan);
  });

  return html.replace(/\n/g, '<br>');
}

/**
 * Open Pricing Modal
 */
function openProPricingModal() {
  let modal = document.getElementById('pro-pricing-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'pro-pricing-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const tiers = SAMPLE_B1_EVALUATION.pricingTiers;

  modal.innerHTML = `
    <div class="modal-card pricing-modal-card">
      <button class="modal-close-btn" onclick="closeProPricingModal()">✕</button>
      <div class="modal-header">
        <span class="modal-kicker">PASS THE TELC B1 EXAM</span>
        <h2>Choose Your Pro Pass</h2>
        <p>Unlock live AI letter grading, error tracking, and examination simulation.</p>
      </div>

      <div class="pricing-tiers-grid">
        ${tiers.map(t => `
          <div class="pricing-tier-card ${t.id === 'citizenship' ? 'featured' : ''}">
            ${t.badge ? `<div class="tier-badge">${t.badge}</div>` : ''}
            <h3 class="tier-name">${t.name}</h3>
            <div class="tier-price">
              <span class="amount">${t.price}</span>
              <span class="period">/ ${t.period}</span>
            </div>
            <div class="tier-credits">⚡ ${t.credits}</div>
            <ul class="tier-features">
              ${t.features.map(f => `<li>✓ ${f}</li>`).join('')}
            </ul>
            <button class="tier-cta-btn ${t.id === 'citizenship' ? 'featured' : ''}" onclick="selectProPlan('${t.id}')">
              ${t.ctaText}
            </button>
          </div>
        `).join('')}
      </div>

      <div class="modal-footer-note">
        🔒 Payments handled securely via Paddle / Lemon Squeezy. One-time payment, non-recurring.
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeProPricingModal() {
  const modal = document.getElementById('pro-pricing-modal');
  if (modal) modal.classList.remove('open');
}

function selectProPlan(planId) {
  alert(`Thank you for selecting the ${planId.toUpperCase()} Pass! Checkout integration with Paddle / Lemon Squeezy will open here.`);
}

if (typeof window !== 'undefined') {
  window.renderSchreibenShowcase = renderSchreibenShowcase;
  window.openProPricingModal = openProPricingModal;
  window.closeProPricingModal = closeProPricingModal;
  window.selectProPlan = selectProPlan;
}
