/**
 * DeutschLernen - Notification & Daily Streak Reminder Engine
 * PWA Web Notifications + Local Scheduled Reminders + Streak Protection
 * Fully quad-lingual & native DE localized: DE, EN, TR, AR, UK
 */

(function () {
  'use strict';

  const REMINDER_STRINGS = {
    de: {
      permissionTitle: "Tägliche Lernerinnerungen",
      permissionDesc: "Aktiviere Benachrichtigungen, um deine tägliche Lernserie (Streak) zu schützen und Erinnerungen zu erhalten.",
      enableBtn: "Benachrichtigungen aktivieren 🔔",
      enabledBtn: "Benachrichtigungen aktiv ✅",
      blockedBtn: "Im Browser blockiert ⚠️",
      testBtn: "Testbenachrichtigung senden",
      dailyTimeLabel: "Erinnerungszeit:",
      savedToast: "Erinnerungseinstellungen gespeichert!",
      testTitle: "🏆 DeutschLernen: Bereit zum Lernen?",
      testBody: "Super! Deine Benachrichtigungen funktionieren. Bleib dran und halte deinen Streak aktiv!",
      streakAlertTitle: "🔥 Streak in Gefahr!",
      streakAlertBody: "Du hast deine heutige Lerneinheit noch nicht abgeschlossen. Schütze deinen Streak jetzt!",
      dailyNudgeTitle: "📚 Tägliche 10-Minuten-Einheit",
      dailyNudgeBody: "10 neue Vokabeln und 1 Grammatikregel warten heute auf dich!",
      permissionDeniedAlert: "Benachrichtigungen wurden im Browser abgelehnt. Bitte erlaube sie in den Website-Einstellungen."
    },
    en: {
      permissionTitle: "Daily Study Reminders",
      permissionDesc: "Enable notifications to safeguard your daily learning streak and stay consistent for your exam.",
      enableBtn: "Enable Notifications 🔔",
      enabledBtn: "Notifications Active ✅",
      blockedBtn: "Blocked in Browser ⚠️",
      testBtn: "Send Test Notification",
      dailyTimeLabel: "Reminder Time:",
      savedToast: "Notification settings saved!",
      testTitle: "🏆 DeutschLernen: Ready to Study?",
      testBody: "Awesome! Notifications are working. Keep practicing and maintain your daily streak!",
      streakAlertTitle: "🔥 Streak at Risk!",
      streakAlertBody: "You haven't completed your daily study session yet. Protect your streak now!",
      dailyNudgeTitle: "📚 Daily 10-Minute Sprint",
      dailyNudgeBody: "10 new vocabulary words and 1 grammar rule are waiting for you today!",
      permissionDeniedAlert: "Notifications are blocked. Please enable them in your browser site settings."
    },
    tr: {
      permissionTitle: "Günlük Çalışma Hatırlatıcıları",
      permissionDesc: "Çalışma serinizi (streak) korumak ve telc sınavına her gün düzenli hazırlanmak için bildirimleri açın.",
      enableBtn: "Bildirimleri Aç 🔔",
      enabledBtn: "Bildirimler Aktif ✅",
      blockedBtn: "Tarayıcıda Engellendi ⚠️",
      testBtn: "Test Bildirimi Gönder",
      dailyTimeLabel: "Hatırlatma Saati:",
      savedToast: "Hatırlatıcı ayarları kaydedildi!",
      testTitle: "🏆 DeutschLernen: Çalışmaya Hazır mısın?",
      testBody: "Harika! Bildirimler başarıyla çalışıyor. Streak'ini kaybetmemek için her gün 10 dakikanı ayır!",
      streakAlertTitle: "🔥 Streak'in Tehlikede!",
      streakAlertBody: "Bugünkü çalışma hedefini henüz tamamlamadın. Serini korumak için şimdi başla!",
      dailyNudgeTitle: "📚 Günlük 10 Dakikalık Pratik",
      dailyNudgeBody: "Bugün öğrenilmeyi bekleyen 10 yeni kelime ve 1 gramer kuralı var!",
      permissionDeniedAlert: "Bildirimler tarayıcınızda engellenmiş. Lütfen adres çubuğundaki kilit simgesinden izin verin."
    },
    ar: {
      permissionTitle: "تذكيرات الدراسة اليومية",
      permissionDesc: "فعّل الإشعارات للحفاظ على سلسلة دراستك اليومية (Streak) والتحضير لامتحان telc بانتظام.",
      enableBtn: "تفعيل الإشعارات 🔔",
      enabledBtn: "الإشعارات مفعلة ✅",
      blockedBtn: "محظور في المتصفح ⚠️",
      testBtn: "إرسال إشعار تجريبي",
      dailyTimeLabel: "وقت التذكير:",
      savedToast: "تم حفظ إعدادات التذكير بنجاح!",
      testTitle: "🏆 DeutschLernen: هل أنت مستعد للدراسة؟",
      testBody: "رائع! الإشعارات تعمل بنجاح. خصص 10 دقائق يومياً للحفاظ على تقدمك!",
      streakAlertTitle: "🔥 سلسلتك مهددة بالانقطاع!",
      streakAlertBody: "لم تكمل تدريبك اليومي بعد. ادخل الآن لحماية سلسلة أيامك المتتالية!",
      dailyNudgeTitle: "📚 تدريب الـ 10 دقائق اليومي",
      dailyNudgeBody: "10 كلمات جديدة وقاعدة نحوية واحدة بانتظارك اليوم!",
      permissionDeniedAlert: "تم حظر الإشعارات. يرجى تفعيلها من إعدادات موقع المتصفح."
    },
    uk: {
      permissionTitle: "Щоденні нагадування про навчання",
      permissionDesc: "Увімкніть сповіщення, щоб зберегти свій щоденний ударний режим (Streak) та впевнено готуватися до іспиту.",
      enableBtn: "Увімкнути сповіщення 🔔",
      enabledBtn: "Сповіщення активні ✅",
      blockedBtn: "Заблоковано в браузері ⚠️",
      testBtn: "Надіслати тестове сповіщення",
      dailyTimeLabel: "Час нагадування:",
      savedToast: "Налаштування нагадувань збережено!",
      testTitle: "🏆 DeutschLernen: Готові до навчання?",
      testBody: "Чудово! Сповіщення працюють. Приділяйте 10 хвилин щодня та бережіть свій ударний режим!",
      streakAlertTitle: "🔥 Серія під загрозою!",
      streakAlertBody: "Ви ще не завершили сьогоднішнє тренування. Захистіть свій ударний режим зараз!",
      dailyNudgeTitle: "📚 Щоденний 10-хвилинний спринт",
      dailyNudgeBody: "10 нових слів та 1 граматичне правило чекають на вас сьогодні!",
      permissionDeniedAlert: "Сповіщення заблоковано в браузері. Будь ласка, дозвольте їх у налаштуваннях сайту."
    }
  };

  class NotificationService {
    constructor() {
      this.lang = (typeof localStorage !== 'undefined' && (
        localStorage.getItem('deutschlernen_lang') ||
        localStorage.getItem('site_lang') ||
        localStorage.getItem('telc_lang')
      )) || 'en';
      if (!REMINDER_STRINGS[this.lang]) this.lang = 'en';

      this.storageKey = 'deutschlernen_reminder_settings';
      this.settings = this.loadSettings();

      this.initBackgroundScheduler();
    }

    loadSettings() {
      try {
        const raw = localStorage.getItem(this.storageKey);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return {
        enabled: false,
        time: '19:00', // Default 7 PM
        streakAlerts: true,
        lastNotifiedDate: null
      };
    }

    saveSettings(newSettings) {
      this.settings = { ...this.settings, ...newSettings };
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.settings));
      } catch (e) {}
    }

    getStrings() {
      return REMINDER_STRINGS[this.lang] || REMINDER_STRINGS.en;
    }

    isSupported() {
      return typeof window !== 'undefined' && 'Notification' in window;
    }

    getPermission() {
      if (!this.isSupported()) return 'unsupported';
      return Notification.permission;
    }

    async requestPermission() {
      if (!this.isSupported()) return 'unsupported';
      try {
        const res = await Notification.requestPermission();
        if (res === 'granted') {
          this.saveSettings({ enabled: true });
        } else {
          this.saveSettings({ enabled: false });
        }
        return res;
      } catch (e) {
        console.warn('Notification permission error', e);
        return 'denied';
      }
    }

    async sendNotification(title, body, tag = 'deutschlernen-general', data = {}) {
      if (!this.isSupported() || Notification.permission !== 'granted') return false;

      const strings = this.getStrings();
      const options = {
        body: body,
        icon: './assets/icons/icon-192.png',
        badge: './assets/icons/favicon-32.png',
        tag: tag,
        renotify: true,
        data: {
          url: data.url || './index.html',
          timestamp: Date.now()
        }
      };

      try {
        // Try via ServiceWorkerRegistration for better mobile background delivery
        if ('serviceWorker' in navigator) {
          const reg = await navigator.serviceWorker.ready;
          if (reg && reg.showNotification) {
            await reg.showNotification(title, options);
            return true;
          }
        }
        // Fallback to standard web notification
        new Notification(title, options);
        return true;
      } catch (e) {
        console.warn('Notification display failed', e);
        return false;
      }
    }

    async sendTestNotification() {
      const strings = this.getStrings();
      return this.sendNotification(strings.testTitle, strings.testBody, 'test-notification');
    }

    initBackgroundScheduler() {
      if (typeof window === 'undefined') return;

      // Check once a minute if current time matches scheduled time
      setInterval(() => {
        this.checkScheduledReminders();
      }, 60 * 1000);

      // Also trigger a check shortly after page load
      setTimeout(() => {
        this.checkScheduledReminders();
      }, 5000);
    }

    checkScheduledReminders() {
      if (!this.settings.enabled || Notification.permission !== 'granted') return;

      const now = new Date();
      const todayStr = now.toISOString().split('T')[0];

      // Avoid notifying multiple times on the same date
      if (this.settings.lastNotifiedDate === todayStr) return;

      const [targetHour, targetMin] = (this.settings.time || '19:00').split(':').map(Number);
      const currentHour = now.getHours();
      const currentMin = now.getMinutes();

      // Trigger if we are within 5 minutes of target time
      const targetTotalMins = targetHour * 60 + targetMin;
      const currentTotalMins = currentHour * 60 + currentMin;

      if (currentTotalMins >= targetTotalMins && currentTotalMins <= targetTotalMins + 5) {
        const strings = this.getStrings();
        this.sendNotification(strings.dailyNudgeTitle, strings.dailyNudgeBody, 'daily-study-nudge');
        this.saveSettings({ lastNotifiedDate: todayStr });
      }
    }
  }

  // Export singleton
  const instance = new NotificationService();
  if (typeof window !== 'undefined') {
    window.NotificationService = instance;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NotificationService, REMINDER_STRINGS };
  }
})();
