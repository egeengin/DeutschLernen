import unittest
import os
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class TestFeedbackAndPortalFunctionality(unittest.TestCase):

    def setUp(self):
        with open(os.path.join(ROOT_DIR, "index.html"), "r", encoding="utf-8") as f:
            self.index_html = f.read()

        with open(os.path.join(ROOT_DIR, "trainer.html"), "r", encoding="utf-8") as f:
            self.trainer_html = f.read()

        with open(os.path.join(ROOT_DIR, "legal.html"), "r", encoding="utf-8") as f:
            self.legal_html = f.read()

        with open(os.path.join(ROOT_DIR, "js", "portal.js"), "r", encoding="utf-8") as f:
            self.portal_js = f.read()

        with open(os.path.join(ROOT_DIR, "js", "vocabTrainer.js"), "r", encoding="utf-8") as f:
            self.vocab_js = f.read()

        with open(os.path.join(ROOT_DIR, "css", "portal.css"), "r", encoding="utf-8") as f:
            self.portal_css = f.read()

        with open(os.path.join(ROOT_DIR, "css", "trainer.css"), "r", encoding="utf-8") as f:
            self.trainer_css = f.read()

    def test_star_rating_markup_in_both_pages(self):
        """Verify star rating elements have proper IDs, data attributes, and accessible roles."""
        for html, name in [(self.index_html, "index.html"), (self.trainer_html, "trainer.html")]:
            self.assertIn('id="feedback-stars"', html, f"Missing #feedback-stars in {name}")
            self.assertIn('id="feedback-rating-text"', html, f"Missing #feedback-rating-text in {name}")
            self.assertIn('data-rating="5"', html, f"Default rating must be 5 in {name}")
            for star in range(1, 6):
                self.assertIn(f'data-star="{star}"', html, f"Missing star {star} in {name}")

    def test_star_rating_css_ux(self):
        """Verify CSS contains hover state, scale transition, and user-select none."""
        for css, name in [(self.portal_css, "portal.css"), (self.trainer_css, "trainer.css")]:
            self.assertIn("user-select: none", css, f"Missing user-select: none in {name}")
            self.assertIn(".star-rating-wrap span.hover", css, f"Missing hover styling in {name}")
            self.assertIn(".star-rating-wrap span.selected", css, f"Missing selected styling in {name}")
            self.assertIn("cursor: pointer", css, f"Missing cursor: pointer in {name}")

    def test_portal_js_null_safe_day_tracker(self):
        """Verify portal.js updateDayTracker() guards against missing day-counter ID."""
        self.assertIn("const dayEl = document.getElementById('day-counter');", self.portal_js)
        self.assertIn("if (dayEl) dayEl.textContent = dayText;", self.portal_js)
        # Verify direct property access on missing element is gone
        self.assertNotIn("document.getElementById('day-counter').textContent = dayText;", self.portal_js)

    def test_feedback_placeholders_bilingual_parity(self):
        """Verify Turkish and English translations exist for all feedback form placeholders."""
        # Check index.html data-en and data-tr on textarea and location
        self.assertIn('data-en="Tell us what we can improve or report an issue..."', self.index_html)
        self.assertIn('data-tr="Neleri geliştirebileceğimizi bize iletin veya bir hata bildirin..."', self.index_html)
        self.assertIn('data-tr="Konum tespit ediliyor..."', self.index_html)
        self.assertIn('data-tr="Anonim veya isminiz"', self.index_html)

        # Check trainer.html i18n placeholders
        self.assertIn('data-i18n-placeholder="feedbackMsgPlaceholder"', self.trainer_html)
        self.assertIn('data-i18n-placeholder="feedbackLocPlaceholder"', self.trainer_html)
        self.assertIn('data-i18n-placeholder="feedbackUserPlaceholder"', self.trainer_html)

        # Check vocabTrainer.js I18N keys
        self.assertIn('feedbackMsgPlaceholder: "Tell us what we can improve or report an issue..."', self.vocab_js)
        self.assertIn('feedbackMsgPlaceholder: "Neleri geliştirebileceğimizi bize iletin veya bir hata bildirin..."', self.vocab_js)
        self.assertIn('ratingExcellent: "5/5 — Mükemmel"', self.vocab_js)
        self.assertIn('ratingExcellent: "5/5 — Excellent"', self.vocab_js)

    def test_portal_js_setlang_textarea_support(self):
        """Verify setLang() in portal.js supports textarea placeholder translation."""
        self.assertIn("el.tagName === 'TEXTAREA'", self.portal_js)

    def test_legal_html_hash_navigation(self):
        """Verify legal.html supports URL hash switching and does not rely on global event."""
        self.assertIn("checkHashAndSwitchTab", self.legal_html)
        self.assertIn("hashchange", self.legal_html)
        self.assertNotIn("event.target.classList.add('active');", self.legal_html)

    def test_feedback_stars_interactive_bindings(self):
        """Verify both portal.js and vocabTrainer.js attach click, hover and keyboard listeners."""
        for js, name in [(self.portal_js, "portal.js"), (self.vocab_js, "vocabTrainer.js")]:
            self.assertIn("mouseenter", js, f"Missing mouseenter hover preview in {name}")
            self.assertIn("mouseleave", js, f"Missing mouseleave handler in {name}")
            self.assertIn("keydown", js, f"Missing keyboard accessibility in {name}")
            expected_fn = "updateRatingDisplay" if name == "portal.js" else "updateFeedbackRatingDisplay"
            self.assertIn(expected_fn, js, f"Missing {expected_fn} in {name}")

if __name__ == '__main__':
    unittest.main()
