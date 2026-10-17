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
        initialScenarioIndex: 0,
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

  // 5. On DOM Ready
  document.addEventListener('DOMContentLoaded', function () {
    updateDashboardMetrics();
    initEmbeddedExaminer();
    initTabNav();

    // Render Fehlerheft if container present
    if (typeof window.renderFehlerheftDashboard === 'function' && document.getElementById('fehlerheft-container')) {
      window.renderFehlerheftDashboard('fehlerheft-container');
    }

    // Render telc Calculator if container present
    if (typeof window.initTelcCalculator === 'function' && document.getElementById('telc-calculator-container')) {
      window.initTelcCalculator('telc-calculator-container');
    }
  });

  // Global hooks
  window.updateDashboardMetrics = updateDashboardMetrics;
})();
