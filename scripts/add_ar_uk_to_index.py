#!/usr/bin/env python3
"""
Adds data-ar and data-uk attributes to all elements in index.html with data-en/data-tr.
"""

import json
import os
import re

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
INDEX_PATH = os.path.join(ROOT_DIR, "index.html")

TRANSLATIONS = {
  "Change": ("تغيير", "Змінити"),
  "30-Day Study Plan": ("خطة دراسية لمدة 30 يوماً", "30-денний план навчання"),
  "Search materials...": ("ابحث في المواد...", "Пошук матеріалів..."),
  "ACTIVE GOAL": ("الهدف النشط", "АКТИВНА ЦІЛЬ"),
  "Change ⚙️": ("تغيير ⚙️", "Змінити ⚙️"),
  "2,000+ Words & Quiz": ("أكثر من 2000 كلمة واختبارات", "2 000+ слів та тести"),
  "Impressum & Privacy": ("معلومات الناشر والخصوصية", "Вихідні дані та конфіденційність"),
  "📚 telc Deutsch B1 Exam Preparation & Vocab Master": ("📚 التحضير لامتحان telc Deutsch B1 وإتقان المفردات", "📚 Підготовка до іспиту telc Deutsch B1 та вивчення лексики"),
  "Pass telc Deutsch B1<br>with Confidence": ("اجتز امتحان telc Deutsch B1<br>بكل ثقة", "Складіть telc Deutsch B1<br>впевнено"),
  "A complete study portal and 2,000-word interactive trainer for telc Deutsch B1 (180/300 pass threshold). Grammar, smart spaced vocabulary drill, mock exams, and letter templates.": ("بوابة دراسية متكاملة ومدرب تفاعلي لأكثر من 2000 كلمة لامتحان telc Deutsch B1 (درجة النجاح 180/300). القواعد، تكرار الكلمات الذكي، امتحانات تجريبية، ونماذج رسائل.", "Повний навчальний портал та інтерактивний тренажер на 2000 слів для telc Deutsch B1 (поріг 180/300). Граматика, розумне повторення слів, пробні іспити та шаблони листів."),
  "Active Track: telc B1 Certification": ("المسار النشط: شهادة telc B1", "Активний курс: сертифікація telc B1"),
  "Focusing on 30-day curriculum, mock exams & B1 vocabulary": ("التركيز على خطة الـ 30 يوماً، الامتحانات التجريبية ومفردات B1", "Фокус на 30-денній програмі, пробних іспитах та лексиці B1"),
  "Switch Goal / Level": ("تغيير الهدف / المستوى", "Змінити ціль / рівень"),
  "⚡ Start Vocab Drill →": ("⚡ بدء تدريب المفردات ←", "⚡ Почати тренування слів →"),
  "Study Modules": ("وحدات دراسية", "Навчальні модулі"),
  "Day Plan": ("خطة الأيام", "Денний план"),
  "Vocab Words": ("كلمات", "Слів"),
  "Pass Threshold": ("نسبة النجاح", "Прохідний бал"),
  "2,000+ German Words Vocabulary Trainer": ("مدرب مفردات اللغة الألمانية بأكثر من 2,000 كلمة", "Тренажер німецьких слів на 2000+ слів"),
  "Drill essential A1–B1 vocabulary and Advanced B2 decks. Features smart anti-repetition rotation, mistake review queue, audio speech synthesis, streak tracking, and 5 quiz modes.": ("تدرب على مفردات A1–B1 الأساسية ومجموعات B2 المتقدمة. يشمل تكراراً ذكياً لمنع التكرار، قائمة مراجعة الأخطاء، نطقاً صوتياً، متابعة السلسلة و5 أوضاع اختبار.", "Вивчайте базові слова A1–B1 та просунуту колоду B2. Розумна ротація без повторів, черга помилок, аудіовимова, відстеження серії днів та 5 режимів тестів."),
  "🎯 5 Quiz Modes": ("🎯 5 أوضاع اختبار", "🎯 5 режимів тестів"),
  "🔊 Native TTS Audio": ("🔊 نطق صوتي أصلي", "🔊 Озвучення слів"),
  "🔥 Daily Streaks": ("🔥 سلسلة أيام يومية", "🔥 Щоденні серії"),
  "🔒 100% Private (Local)": ("🔒 خصوصية 100% (محلي)", "🔒 100% конфіденційно (локально)"),
  "🚀 Launch Vocabulary Trainer →": ("🚀 تشغيل مدرب المفردات ←", "🚀 Запустити тренажер слів →"),
  "🚀 Getting Started": ("🚀 البدء السريع", "🚀 Початок роботи"),
  "Quick Start Guide": ("دليل البدء السريع", "Короткий посібник"),
  "Read the Exam Guide": ("اقرأ دليل الامتحان", "Прочитайте посібник до іспиту"),
  "Understand the exam structure, scoring, and what B1 requires.": ("افهم هيكل الامتحان، نظام الدرجات وما يتطلبه مستوى B1.", "Зрозумійте структуру іспиту, оцінювання та вимоги рівня B1."),
  "Take the Diagnostic Exam": ("خض الامتحان التشخيصي", "Пройдіть діагностичний іспит"),
  "Identify your weak areas on Day 1.": ("حدد نقاط ضعفك في اليوم الأول.", "Визначте свої слабкі місця в перший день."),
  "Follow the 1-Month Plan": ("اتبع خطة الشهر الواحد", "Дотримуйтесь 1-місячного плану"),
  "Day-by-day structured learning for all 4 skills.": ("تعلم منظم يوماً بيوم لجميع المهارات الأربع.", "Щоденне структуроване навчання для всіх 4 навичок."),
  "Use Review Materials": ("استخدم مواد المراجعة", "Використовуйте матеріали для повторення"),
  "Grammar, reading, writing, and speaking guides with practice exercises.": ("أدلة القواعد، القراءة، الكتابة والتحدث مع تمارين عملية.", "Посібники з граматики, читання, письма та мовлення з практичними вправами."),
  "Take the Final Mock Exam": ("خض الامتحان التجريبي النهائي", "Пройдіть фінальний пробний іспит"),
  "Week 4: Full exam simulation under real conditions.": ("الأسبوع 4: محاكاة كاملة للامتحان في ظروف حقيقية.", "4-й тиждень: повна симуляція іспиту в реальних умовах."),
  "📂 All Materials": ("📂 جميع المواد", "📂 Усі матеріали"),
  "Study Materials": ("المواد الدراسية", "Навчальні матеріали"),
  "Click any card to open the full study material.": ("انقر على أي بطاقة لفتح المادة الدراسية الكاملة.", "Натисніть на будь-яку картку, щоб відкрити повний навчальний матеріал."),
  "📋 Module 1": ("📋 الوحدة 1", "📋 Модуль 1"),
  "telc Deutsch B1 Structure & Scoring": ("هيكل امتحان telc Deutsch B1 وتوزيع الدرجات", "Структура та оцінювання telc Deutsch B1"),
  "The telc Deutsch B1 examination consists of a Written Exam (225 points) and an Oral Exam (75 points). Overall pass threshold is 180 / 300 points (60%).": ("يتكون امتحان telc Deutsch B1 من امتحان كتابي (225 نقطة) وامتحان شفهي (75 نقطة). درجة النجاح الإجمالية هي 180 / 300 نقطة (60%).", "Іспит telc Deutsch B1 складається з письмової частини (225 балів) та усної (75 балів). Загальний прохідний бал — 180 / 300 балів (60%)."),
  "Written ≥ 135 & Oral ≥ 45": ("الكتابي ≥ 135 والشفهي ≥ 45", "Письмова ≥ 135 та Усна ≥ 45"),
  "📄 Read full Exam Guide →": ("📄 قراءة دليل الامتحان كاملاً ←", "📄 Читати повний посібник →"),
  "📝 Module 3": ("📝 الوحدة 3", "📝 Модуль 3"),
  "Top 10 Grammar Topics": ("أهم 10 مواضيع في القواعد", "Топ-10 тем граматики"),
  "Conjunctions that send the conjugated verb to the very end of the clause.": ("أدوات الربط التي تنقل الفعل المصرف إلى نهاية الجملة تماماً.", "Сполучники, які переміщують відмінюване дієслово в самий кінець речення."),
  "(I stay home because I am sick)": ("(أبقى في المنزل لأنني مريض)", "(Я залишаюся вдома, тому що захворів)"),
  "Position 1 adverbs that force 'Verb-Subject' inversion (Position 2).": ("ظروف المكان الأول التي تفرض تقديم الفعل على الفاعل (الموقع 2).", "Прислівники першої позиції, що вимагають інверсії дієслова та підмета (позиція 2)."),
  "(Therefore I stay home)": ("(لذلك أبقى في المنزل)", "(Тому я залишаюся вдома)"),
  "Main past tense in spoken German. 'Sein' is used for movement or change of state.": ("صيغة الماضي الرئيسية في الألمانية المحكية. يُستخدم 'sein' للحركة أو تغير الحالة.", "Основний минулий час у розмовній німецькій. 'Sein' вживається для руху або зміни стану."),
  "(She went to Berlin)": ("(ذهبت إلى برلين)", "(Вона поїхала до Берліна)"),
  "<b>Wohin?</b> (Direction) → Akkusativ | <b>Wo?</b> (Location) → Dativ": ("<b>Wohin?</b> (إلى أين/الاتجاه) ← Akkusativ | <b>Wo?</b> (أين/الموقع) ← Dativ", "<b>Wohin?</b> (Куди/напрямок) → Akkusativ | <b>Wo?</b> (Де/місце) → Dativ"),
  "Used for polite requests, wishes, and hypothetical scenarios.": ("تُستخدم للطلبات المهذبة، الأمنيات، والسيناريوهات الافتراضية.", "Використовується для ввічливих прохань, побажань та гіпотетичних ситуацій."),
  "(Could you please help me?)": ("(هل يمكنك مساعدتي من فضلك؟)", "(Чи не могли б ви мені допомогти?)"),
  "Adjective endings change based on the article, gender, and case.": ("تتغير نهايات الصفات بناءً على أداة التعريف، الجنس والحالة الإعرابية.", "Закінчення прикметників змінюються залежно від артикля, роду та відмінка."),
  "Used to provide more info about a noun. Verb goes to the END.": ("تُستخدم لتقديم مزيد من المعلومات عن الاسم. يذهب الفعل إلى النهاية.", "Використовується для надання додаткової інформації про іменник. Дієслово йде в КІНЕЦЬ."),
  "(The man I saw yesterday)": ("(الرجل الذي رأيته بالأمس)", "(Чоловік, якого я бачив учора)"),
  "Focuses on the action rather than the doer. Common in notices/rules.": ("يركز على الفعل بدلاً من الفاعل. شائع في الإعلانات والقواعد.", "Фокусується на дії, а не на виконавці. Поширений у повідомленнях і правилах."),
  "(German is spoken here)": ("(هنا يُتحدث بالألمانية)", "(Тут говорять німецькою)"),
  "Verbs that always take a specific preposition and case.": ("أفعال تأتي دائماً مع حرف جر وحالة إعرابية محددة.", "Дієслова, які завжди вживаються з певним прийменником і відмінком."),
  "Used to describe ability, desire, or obligation in the past.": ("تُستخدم لوصف القدرة، الرغبة أو الالتزام في الماضي.", "Використовується для опису здатності, бажання або обов'язку в минулому."),
  "(I wanted to be a pilot)": ("(كنت أريد أن أصبح طياراً)", "(Я хотів бути пілотом)"),
  "📄 Full Grammar Review with 30 practice questions →": ("📄 مراجعة كاملة للقواعد مع 30 سؤالاً تدريبياً ←", "📄 Повний огляд граматики з 30 практичними питаннями →"),
  "🔍 Quick Practice": ("🔍 تدريب سريع", "🔍 Швидка практика"),
  "Sprachbausteine Quiz": ("اختبار تراكيب اللغة (Sprachbausteine)", "Тест мовних структур (Sprachbausteine)"),
  "Test yourself — click the correct answer!": ("اختبر نفسك — انقر على الإجابة الصحيحة!", "Перевірте себе — натисніть правильну відповідь!"),
  "Your Score": ("نتيجتك", "Ваш результат"),
  "Reset": ("إعادة ضبط", "Скинути"),
  "📄 Full Diagnostic Mock Exam →": ("📄 الامتحان التجريبي التشخيصي الكامل ←", "📄 Повний діагностичний пробний іспит →"),
  "📄 Final Mock Exam →": ("📄 الامتحان التجريبي النهائي ←", "📄 Фінальний пробний іспит →"),
  "📅 Module 2": ("📅 الوحدة 2", "📅 Модуль 2"),
  "1-Month Study Plan": ("خطة دراسية لمدة شهر", "План навчання на 1 місяць"),
  "Focus": ("التركيز", "Фокус"),
  "Goal": ("الهدف", "Ціль"),
  "Checkpoint": ("نقطة التقييم", "Контрольна точка"),
  "Week 1": ("الأسبوع 1", "1-й тиждень"),
  "Grammar & Sprachbausteine": ("القواعد وتراكيب اللغة", "Граматика та мовні структури"),
  "Master grammar patterns (30% of exam)": ("إتقان أنماط القواعد (30% من الامتحان)", "Опануйте граматичні моделі (30% іспиту)"),
  "70%+ Sprachbausteine accuracy": ("دقة 70%+ في تراكيب اللغة", "70%+ точність у мовних структурах"),
  "Week 2": ("الأسبوع 2", "2-й тиждень"),
  "Reading & Listening": ("القراءة والاستماع", "Читання та аудіювання"),
  "Build speed & accuracy for input sections": ("بناء السرعة والدقة لأقسام الاستيعاب", "Розвивайте швидкість та точність для розділів сприйняття"),
  "Reading in 45 min, 60%+ accuracy": ("القراءة في 45 دقيقة، بدقة 60%+", "Читання за 45 хв, 60%+ точність"),
  "Week 3": ("الأسبوع 3", "3-й тиждень"),
  "Writing & Speaking": ("الكتابة والتحدث", "Письмо та мовлення"),
  "Memorize templates, practice speaking": ("حفظ النماذج وممارسة التحدث", "Вивчіть шаблони, практикуйте мовлення"),
  "Complete letter in 20 min": ("إكمال الرسالة في 20 دقيقة", "Написання листа за 20 хв"),
  "Week 4": ("الأسبوع 4", "4-й тиждень"),
  "Mock Exams & Polish": ("امتحانات تجريبية ومراجعة نهائية", "Пробні іспити та шліфування"),
  "Full exam simulations, fix weak points": ("محاكاة كاملة للامتحان ومعالجة نقاط الضعف", "Повна симуляція іспиту, усунення слабких місць"),
  "Pass final mock with B1 score": ("اجتياز الامتحان النهائي بدرجة B1", "Складання фінального тесту з результатом B1"),
  "📄 Full day-by-day study plan →": ("📄 الخطة الدراسية الكاملة يوماً بيوم ←", "📄 Повний щоденний план навчання →"),
  "📖 Module 4": ("📖 الوحدة 4", "📖 Модуль 4"),
  "Synonym recognition, time management, and practice exercises.": ("تمييز المرادفات، إدارة الوقت وتمارين تطبيقية.", "Розпізнавання синонімів, тайм-менеджмент та практичні вправи."),
  "📄 Open Full Review →": ("📄 فتح المراجعة الكاملة ←", "📄 Відкрити повний огляд →"),
  "✍️ Module 5": ("✍️ Module 5", "✍️ Модуль 5"),
  "Letter templates, model answers, speaking phrase banks, and 4 practice prompts.": ("نماذج الرسائل، إجابات نموذجية، بنوك عبارات المحادثة و4 مواضيع تدريبية.", "Шаблони листів, зразки відповідей, фрази для розмови та 4 теми для практики."),
  "🎯 Module 7": ("🎯 الوحدة 7", "🎯 Модуль 7"),
  "Final Mock Exam": ("الامتحان التجريبي النهائي", "Фінальний пробний іспит"),
  "Full exam with Hören, Lesen, Sprachbausteine, Schreiben, and Sprechen sections.": ("امتحان كامل يشمل أقسام الاستماع، القراءة، تراكيب اللغة، الكتابة والتحدث.", "Повний іспит із частинами Hören, Lesen, Sprachbausteine, Schreiben та Sprechen."),
  "📄 Open Final Exam →": ("📄 فتح الامتحان النهائي ←", "📄 Відкрити фінальний іспит →"),
  "🌐 Module 8": ("🌐 الوحدة 8", "🌐 Модуль 8"),
  "Free Resources": ("موارد مجانية", "Безкоштовні ресурси"),
  "Official practice tests, YouTube channels, DW courses, and grammar websites.": ("امتحانات تدريبية رسمية، قنوات يوتيوب، دورات DW ومواقع للقواعد.", "Офіційні практичні тести, YouTube-канали, курси DW та сайти граматики."),
  "📄 Open Resources List →": ("📄 فتح قائمة الموارد ←", "📄 Відкрити список ресурсів →"),
  "📚 Module 9": ("📚 الوحدة 9", "📚 Модуль 9"),
  "Vocabulary: Verbs & Adjectives": ("المفردات: الأفعال والصفات", "Лексика: Дієслова та прикметники"),
  "~500 most-used German verbs and adjectives with Turkish translations and examples.": ("~500 من الأفعال والصفات الألمانية الأكثر استخداماً مع الترجمات والأمثلة.", "~500 найуживаніших німецьких дієслів та прикметників із перекладами та прикладами."),
  "📄 Open Vocabulary →": ("📄 فتح المفردات ←", "📄 Відкрити словник →"),
  "📚 Module 10": ("📚 الوحدة 10", "📚 Модуль 10"),
  "Vocabulary: Nouns by Theme": ("المفردات: الأسماء حسب الموضوع", "Лексика: Іменники за темами"),
  "~550 most-used German nouns organized by B1 exam themes with Turkish translations.": ("~550 اسماً ألمانياً مرتبة حسب مواضيع امتحان B1 مع الترجمات.", "~550 найуживаніших німецьких іменників за темами іспиту B1 з перекладами."),
  "🗂️ Bonus": ("🗂️ إضافي", "🗂️ Бонус"),
  "Quick Vocab Practice": ("ممارسة سريعة للمفردات", "Швидка практика слів"),
  "Test your memory with 20 essential B1 verbs. Click the card to flip!": ("اختبر ذاكرتك مع 20 فعلاً أساسياً لمستوى B1. انقر على البطاقة لقلبها!", "Перевірте свою пам'ять на 20 важливих дієсловах B1. Натисніть на картку, щоб перевернути!"),
  "German": ("الألمانية", "Німецька"),
  "Translation": ("الترجمة", "Переклад"),
  "Prev": ("السابق", "Попередня"),
  "Next Word": ("الكلمة التالية", "Наступне слово"),
  "DeutschLernen — Comprehensive telc Deutsch B1 Study Portal & Vocab 2000": ("DeutschLernen — بوابة دراسية شاملة لامتحان telc Deutsch B1 والمفردات 2000", "DeutschLernen — Комплексний навчальний портал telc Deutsch B1 та Словник 2000"),
  "Good luck with your exam preparation!": ("نتمنى لك التوفيق في تحضيرك للامتحان!", "Успіхів у підготовці до іспиту!"),
  "⚡ Wortschatz Trainer": ("⚡ مدرب المفردات", "⚡ Тренажер слів"),
  "🇩🇪 Impressum (§ 5 DDG)": ("🇩🇪 بيانات الناشر (§ 5 DDG)", "🇩🇪 Вихідні дані (§ 5 DDG)"),
  "🔒 Privacy Policy (GDPR)": ("🔒 سياسة الخصوصية (GDPR)", "🔒 Політика конфіденційності (GDPR)"),
  "📜 Terms & Trademarks": ("📜 الشروط والعلامات التجارية", "📜 Умови та торговельні марки"),
  "💬 Feedback": ("💬 ملاحظات", "💬 Відгук"),
  "Privacy Guarantee:": ("ضمان الخصوصية:", "Гарантія конфіденційності:"),
  "100% Client-Side Privacy. No cookies, no external user tracking. Your study progress and streak are saved strictly in your device's browser.": ("خصوصية 100% على جانب العميل. لا ملفات تعريف ارتباط ولا تتبع خارجي. يُحفظ تقدمك وسلسلتك حصرياً في متصفح جهازك.", "100% конфіденційність на стороні клієнта. Жодних файлів cookie чи зовнішнього відстеження. Ваш прогрес зберігається лише у вашому браузері."),
  "Created by": ("تم الإنشاء بواسطة", "Створено"),
  "Open-source educational suite licensed under the MIT License.": ("حزمة تعليمية مفتوحة المصدر مرخصة بموجب رخصة MIT.", "Освітній комплекс із відкритим кодом під ліцензією MIT."),
  "Back to Dashboard": ("العودة للوحة التحكم", "Назад до панелі"),
  "Feedback": ("ملاحظات", "Відгук"),
  "Send Feedback & Suggestions": ("إرسال الملاحظات والاقتراحات", "Надіслати відгук та пропозиції"),
  "Name / Nickname": ("الاسم / اللقب", "Ім'я / Псевдонім"),
  "Anonymous or your name": ("مجهول أو اسمك", "Анонімно або ваше ім'я"),
  "Location (Auto-detected)": ("الموقع (تلقائي)", "Місцезнаходження (авто)"),
  "Detecting location...": ("جاري تحديد الموقع...", "Визначення місця..."),
  "Category": ("الفئة", "Категорія"),
  "💡 General Feedback / Suggestion": ("💡 ملاحظات / اقتراحات عامة", "💡 Загальний відгук / пропозиція"),
  "📝 Vocabulary / Translation Correction": ("📝 تصحيح مفردات / ترجمة", "📝 Виправлення слова / перекладу"),
  "✨ Feature Request": ("✨ طلب ميزة جديدة", "✨ Запит на нову функцію"),
  "🐛 Bug Report": ("🐛 إبلاغ عن خطأ", "🐛 Звіт про помилку"),
  "Your Rating": ("تقييمك", "Ваша оцінка"),
  "Your Message": ("رسالتك", "Ваше повідомлення"),
  "Tell us what we can improve or report an issue...": ("أخبرنا بما يمكننا تحسينه أو أبلغ عن مشكلة...", "Розкажіть, що можна покращити, або повідомте про проблему..."),
  "Submit Feedback": ("إرسال الملاحظات", "Надіслати відгук"),
  "✨ WELCOME TO DEUTSCHLERNEN": ("✨ مرحباً بك في DEUTSCHLERNEN", "✨ ЛАСКАВО ПРОСИМО ДО DEUTSCHLERNEN"),
  "What is your learning goal?": ("ما هو هدفك في تعلم الألمانية؟", "Яка ваша мета у вивченні німецької?"),
  "Choose your path below so we can tailor the study modules, practice drills, and vocabulary decks for you.": ("اختر مسارك أدناه حتى نتمكن من تخصيص الوحدات الدراسية، التدريبات ومجموعات المفردات لك.", "Оберіть свій шлях нижче, щоб ми адаптували навчальні модулі, практичні вправи та словникові колоди для вас."),
  "Beginner Fundamentals": ("الأساسيات للمبتدئين", "Базові основи"),
  "Start from scratch or solidify basics: daily life vocabulary, high-frequency verbs, and foundational grammar.": ("ابدأ من الصفر أو ثبت الأساسيات: مفردات الحياة اليومية، الأفعال المتكررة، والقواعد الأساسية.", "Почніть з нуля або закріпіть базу: щоденна лексика, найуживаніші дієслова та базова граматика."),
  "✓ ~1,000 Everyday Words": ("✓ ~1,000 كلمة يومية", "✓ ~1 000 повсякденних слів"),
  "✓ Core Sentence Structure": ("✓ بنية الجملة الأساسية", "✓ Базова структура речення"),
  "telc B1 Certification": ("شهادة telc B1", "Сертифікація telc B1"),
  "Pass your official B1 exam (180/300 pass score): 30-day plan, diagnostic & final mock tests, and letter templates.": ("اجتز امتحان B1 الرسمي (درجة النجاح 180/300): خطة 30 يوماً، اختبارات تشخيصية ونهائية، ونماذج رسائل.", "Складіть офіційний іспит B1 (прохідний бал 180/300): 30-денний план, діагностичні та фінальні тести, шаблони листів."),
  "✓ 30-Day Step-by-Step Plan": ("✓ خطة خطوة بخطوة لمدة 30 يوماً", "✓ 30-денний покроковий план"),
  "✓ 2 Full Mock Simulations": ("✓ محاكاتان كاملتان للامتحان", "✓ 2 повні симуляції іспиту"),
  "Advanced & Workplace": ("المتقدم وبيئة العمل", "Просунутий та бізнес-рівень"),
  "Excel in workplace German and academic contexts: advanced vocabulary, complex connectors, and formal writing.": ("تميز في الألمانية لبيئة العمل والسياقات الأكاديمية: مفردات متقدمة، أدوات ربط مركبة، وكتابة رسمية.", "Вдосконалюйте німецьку для роботи та академічних цілей: просунута лексика, складні сполучники та офіційне письмо."),
  "✓ Advanced B2 Study Deck": ("✓ مجموعة B2 المتقدمة للدراسة", "✓ Просунута навчальна колода B2"),
  "✓ Complex Connectors & C-Test": ("✓ أدوات ربط معقدة واختبار C-Test", "✓ Складні сполучники та C-Test"),
  "C1 Hochschule & Mastery": ("C1 للجامعة والاحتراف", "C1 для університету та майстерність"),
  "Master academic German for university studies, research papers, and professional settings. High-frequency C1 terminology and complex sentence structures.": ("أتقن الألمانية الأكاديمية للدراسات الجامعية، الأوراق البحثية، والبيئات الاحترافية. مصطلحات C1 شائعة وتراكيب جمل معقدة.", "Опануйте академічну німецьку для університету, наукових робіт та професійного середовища. Термінологія C1 та складні структури речень."),
  "✓ Academic C1 Study Deck": ("✓ مجموعة C1 الأكاديمية للدراسة", "✓ Академічна колода C1"),
  "✓ University & Research Vocab": ("✓ مفردات الجامعة والبحث العلمي", "✓ Лексика для університету та досліджень"),
  "Rapid Vocab Trainer": ("مدرب المفردات السريع", "Швидкий тренажер слів"),
  "Jump directly into high-speed flashcards, 5 quiz modes, native audio speech, and daily streak tracking.": ("انتقل مباشرة إلى بطاقات المفردات السريعة، 5 أوضاع اختبار، نطق صوتي أصلي، ومتابعة السلسلة اليومية.", "Переходьте одразу до швидких карток, 5 режимів тестів, озвучення та відстеження щоденних серій."),
  "✓ 2,000+ Words Offline": ("✓ أكثر من 2,000 كلمة بدون إنترنت", "✓ 2 000+ слів офлайн"),
  "✓ Native Audio & Spaced Drills": ("✓ نطق صوتي وتدريبات ذكية متباعدة", "✓ Озвучення та інтервальні тренування"),
  "Target CEFR Level:": ("المستوى المستهدف حسب الإطار الأوروبي:", "Цільовий рівень CEFR:"),
  "Learning from language:": ("لغة الشرح والتعلم منها:", "Мова навчання та підказок:"),
  "Start Learning →": ("ابدأ التعلم ←", "Почати навчання →"),
  "Explore All Materials": ("استكشاف جميع المواد", "Переглянути всі матеріали")
}

def run(target_path=None):
    dest = target_path or INDEX_PATH
    with open(dest, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find elements with data-en="..." data-tr="..."
    # We replace each by inserting data-ar="..." data-uk="..."
    def replacer(match):
        full_match = match.group(0)
        data_en = match.group(1)
        data_tr = match.group(2)

        if 'data-ar=' in full_match:
            return full_match  # already added

        ar_uk = TRANSLATIONS.get(data_en)
        if not ar_uk:
            print(f"Warning: missing translation for: {data_en}")
            return full_match

        ar_text, uk_text = ar_uk
        # Escape quotes
        ar_esc = ar_text.replace('"', '&quot;')
        uk_esc = uk_text.replace('"', '&quot;')
        return f'{match.group(0)} data-ar="{ar_esc}" data-uk="{uk_esc}"'

    # Pattern for data-en="..." data-tr="..." without following data-ar
    pattern = r'data-en="([^"]*)"\s+data-tr="([^"]*)"(?!\s+data-ar=)'
    new_content, count = re.subn(pattern, replacer, content)

    print(f"Updated {count} elements with data-ar and data-uk attributes.")
    with open(dest, 'w', encoding='utf-8') as f:
        f.write(new_content)
    return count

if __name__ == '__main__':
    run()
