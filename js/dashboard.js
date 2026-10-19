/**
 * DeutschLernen - Student App Workspace Logic (dashboard.js)
 * Manages the distraction-free learning dashboard:
 * - Syncs user streak and SM-2 word counts from StorageService
 * - Initializes the standalone telc B1 SchreibenExaminer component
 * - Binds LemonSqueezy license activation and Pro status pills
 * - Coordinates interactive widgets: Flashcards, Quiz, Fehlerheft, and telc Calculator
 */

(function () {
  'use strict';

  // 1. Update Metrics in Header & Welcome Hero
  function updateDashboardMetrics() {
    try {
      const streak = localStorage.getItem('deutschlernen_streak') || '0';
      const streakEl = document.getElementById('dash-streak-val');
      if (streakEl) streakEl.textContent = streak;

      // Word count
      let wordsCount = 0;
      try {
        const srsMap = JSON.parse(localStorage.getItem('deutschlernen_srs_words') || '{}');
        wordsCount = Object.keys(srsMap).length;
      } catch (e) {
        wordsCount = 0;
      }
      const wordsEl = document.getElementById('dash-words-val');
      if (wordsEl) wordsEl.textContent = wordsCount;

      // Pro Status Badge
      const isPro = typeof StorageService !== 'undefined' && StorageService.isPro();
      const proPill = document.getElementById('dash-pro-pill');
      if (proPill) {
        if (isPro) {
          proPill.innerHTML = '👑 <strong>Pro Pass Active</strong>';
          proPill.style.borderColor = '#22c55e';
          proPill.style.color = '#22c55e';
          proPill.style.background = 'rgba(34,197,94,0.12)';
        } else {
          proPill.innerHTML = '⚡ <strong>Free Diagnostic (1 Test Left)</strong> &bull; <span style="text-decoration:underline;">Upgrade</span>';
        }
      }
    } catch (err) {
      console.warn('[Dashboard] Could not update metrics:', err);
    }
  }

  // 2. Initialize Embedded Schreiben Examiner
  function initEmbeddedExaminer() {
    const mountEl = document.getElementById('schreiben-examiner-mount');
    if (!mountEl) return;

    if (typeof SchreibenExaminer === 'function') {
      window.dashboardExaminer = new SchreibenExaminer('schreiben-examiner-mount', {
        scenarioId: 'einladung',
        onProCheckout: function () {
          if (typeof window.openLemonSqueezyCheckout === 'function') {
            window.openLemonSqueezyCheckout('pass-30');
          } else if (typeof window.openLicenseActivationModal === 'function') {
            window.openLicenseActivationModal();
          }
        }
      });
    }
  }

  // 3. License Activation Handler
  window.handleDashboardProClick = function () {
    const isPro = typeof StorageService !== 'undefined' && StorageService.isPro();
    if (isPro) {
      alert('Your Pro Pass is active! You have unlimited AI Letter evaluations and full exam suite access.');
    } else {
      if (typeof window.openLemonSqueezyCheckout === 'function') {
        window.openLemonSqueezyCheckout('pass-30');
      } else if (typeof window.openLicenseActivationModal === 'function') {
        window.openLicenseActivationModal();
      }
    }
  };

  // 4. Tab Navigation Active State
  function initTabNav() {
    const tabs = document.querySelectorAll('.dash-tab-link');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  // 5. Export / Import Progress (JSON)
  window.exportUserProgressJSON = function () {
    try {
      const dataStr = typeof StorageEngine !== 'undefined'
        ? StorageEngine.exportJSON()
        : JSON.stringify(localStorage, null, 2);

      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateStr = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `deutschlernen_b1_progress_${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('[Dashboard] Export failed:', err);
      alert('Could not export backup: ' + err.message);
    }
  };

  window.importUserProgressJSON = function (event) {
    const file = event.target?.files?.[0];
    if (!file) return;

    const statusMsg = document.getElementById('backup-status-msg');
    const showStatus = (text, isSuccess) => {
      if (!statusMsg) return;
      statusMsg.style.display = 'block';
      statusMsg.style.color = isSuccess ? '#10b981' : '#ef4444';
      statusMsg.textContent = text;
    };

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const text = e.target.result;
        let res;
        if (typeof StorageEngine !== 'undefined') {
          res = StorageEngine.importJSON(text);
        } else {
          const parsed = JSON.parse(text);
          Object.keys(parsed).forEach(k => {
            if (typeof parsed[k] === 'string') localStorage.setItem(k, parsed[k]);
            else localStorage.setItem(k, JSON.stringify(parsed[k]));
          });
          res = { success: true };
        }

        if (res.success) {
          showStatus('✅ Fortschritt erfolgreich importiert! Aktualisiere Cockpit...', true);
          updateDashboardMetrics();
          if (typeof window.renderFehlerheftDashboard === 'function' && document.getElementById('fehlerheft-container')) {
            window.renderFehlerheftDashboard('fehlerheft-container');
          }
          if (typeof TelcCalculator !== 'undefined' && typeof TelcCalculator.loadFromStorage === 'function') {
            TelcCalculator.loadFromStorage();
          }
          setTimeout(() => {
            showStatus('', false);
            if (statusMsg) statusMsg.style.display = 'none';
          }, 3500);
        } else {
          showStatus('❌ Ungültige Sicherungsdatei: ' + (res.error || 'Formatfehler'), false);
        }
      } catch (err) {
        showStatus('❌ Fehler beim Lesen der Datei: ' + err.message, false);
      }
    };
    reader.readAsText(file);
    // Reset file input
    event.target.value = '';
  };

  // 6. On DOM Ready
  document.addEventListener('DOMContentLoaded', function () {
    updateDashboardMetrics();
    initEmbeddedExaminer();
    initTabNav();

    if (typeof StorageEngine !== 'undefined') {
      StorageEngine.onStateChange(() => {
        updateDashboardMetrics();
      });
    }

    // Render Fehlerheft if container present
    if (typeof window.renderFehlerheftDashboard === 'function' && document.getElementById('fehlerheft-container')) {
      window.renderFehlerheftDashboard('fehlerheft-container');
    }

    // Render telc Calculator if container present
    if (document.getElementById('telc-calculator-container')) {
      if (typeof window.initTelcCalculator === 'function') {
        window.initTelcCalculator('telc-calculator-container');
      }
      if (typeof TelcCalculator !== 'undefined' && typeof TelcCalculator.renderTelcCalculator === 'function') {
        TelcCalculator.renderTelcCalculator('telc-calculator-container');
      }
    }
  });

  // Global hooks
  window.updateDashboardMetrics = updateDashboardMetrics;
})();
