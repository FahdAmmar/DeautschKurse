// ============================================================
// catalog.js — فهرس دروس أكاديمية الألمانية (مصدر بيانات وحيد)
// يُولَّد هذا الملف تلقائيًا من migrate.py — لا تُحرّر يدويًا.
// ============================================================
window.DEUTSCH_CATALOG = {
  categories: [
  {
    "key": "a1",
    "folder": "a1",
    "title": "المرحلة A1 — نقطة الانطلاق",
    "subtitle": "أول خطوتين في عالم الألمانية: الأبجدية والتحيات",
    "level": "A1",
    "icon": "seed",
    "count": 2
  },
  {
    "key": "a2-kurs",
    "folder": "a2-kurs",
    "title": "مسار A2 الكامل — دورة من ١٢ محطة",
    "subtitle": "رحلة متسلسلة من التعارف حتى السفر، محطة تلو الأخرى",
    "level": "A2",
    "icon": "route",
    "count": 12
  },
  {
    "key": "a2",
    "folder": "a2",
    "title": "أدلة A2 الشاملة",
    "subtitle": "غوص عميق في أهم قواعد A2: الماضي، الانعكاسية، الناقصة، والجر",
    "level": "A2",
    "icon": "compass",
    "count": 7
  },
  {
    "key": "grammatik",
    "folder": "grammatik",
    "title": "مرجع القواعد — دفتر الملاحظات الكامل",
    "subtitle": "١٩ مرجعًا تفاعليًا لأدق تفاصيل القواعد الألمانية",
    "level": "A2–B1",
    "icon": "book",
    "count": 19
  },
  {
    "key": "family-verben",
    "folder": "family-verben",
    "title": "عائلات الأفعال — إصدار الليل",
    "subtitle": "خمس عائلات أفعال أساسية، بأسلوب سردي هادئ ووضع ليلي أنيق",
    "level": "A2",
    "icon": "moon",
    "count": 5
  },
  {
    "key": "wortschatz",
    "folder": "wortschatz",
    "title": "المفردات المصورة",
    "subtitle": "سبع مجموعات مفردات محورية مع رسومات ونطق",
    "level": "A1–A2",
    "icon": "palette",
    "count": 7
  },
  {
    "key": "stories",
    "folder": "stories",
    "title": "قصص ومحادثات حقيقية",
    "subtitle": "طبّق ما تعلمته في محادثات يومية وأسئلة اختبار المحادثة",
    "level": "A1–A2",
    "icon": "chat",
    "count": 4
  }
],
  lessons: [
  {
    "id": "a1-lesson-01-alphabet",
    "category": "a1",
    "order": 1,
    "title": "الحروف الألمانية — Das deutsche Alphabet",
    "desc": "الأبجدية الألمانية كاملة، الحروف الخاصة Ä Ö Ü ß، ونطق صوتي تفاعلي.",
    "badges": [],
    "path": "Deutsch/a1/lesson-01-alphabet.html",
    "thumb": "assets/thumbnails/a1-lesson-01-alphabet.jpg"
  },
  {
    "id": "a1-lesson-02-begruessung",
    "category": "a1",
    "order": 2,
    "title": "التحيات وتقديم النفس — Begrüßung & Vorstellung",
    "desc": "تحيات الوقت، الرسمية وغير الرسمية، صيغتا du وSie، وحوارات كاملة.",
    "badges": [],
    "path": "Deutsch/a1/lesson-02-begruessung.html",
    "thumb": "assets/thumbnails/a1-lesson-02-begruessung.jpg"
  },
  {
    "id": "a2-kurs-lesson-01-willkommen",
    "category": "a2-kurs",
    "order": 1,
    "title": "الدرس الأول — مرحبًا بك في عالم الألمانية",
    "desc": "نقطة انطلاق مسار A2: تعارف أولي وتهيئة لبقية الدورة.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-01-willkommen.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-01-willkommen.jpg"
  },
  {
    "id": "a2-kurs-lesson-02-zahlen-zeit",
    "category": "a2-kurs",
    "order": 2,
    "title": "الأرقام والوقت",
    "desc": "عدّ الأرقام وقراءة الساعة والتعبير عن التوقيت بثقة.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-02-zahlen-zeit.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-02-zahlen-zeit.jpg"
  },
  {
    "id": "a2-kurs-lesson-03-einkaufen",
    "category": "a2-kurs",
    "order": 3,
    "title": "التسوق والمطعم",
    "desc": "مفردات وتراكيب لطلب الطعام والتسوق في المتاجر.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-03-einkaufen.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-03-einkaufen.jpg"
  },
  {
    "id": "a2-kurs-lesson-04-zuhause-familie",
    "category": "a2-kurs",
    "order": 4,
    "title": "المنزل والعائلة",
    "desc": "وصف المنزل وأفراد العائلة والعلاقات الأسرية.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-04-zuhause-familie.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-04-zuhause-familie.jpg"
  },
  {
    "id": "a2-kurs-lesson-05-alltag",
    "category": "a2-kurs",
    "order": 5,
    "title": "الروتين اليومي والأفعال",
    "desc": "أفعال اليوم المعتاد وترتيبها في جملة زمنية متسلسلة.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-05-alltag.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-05-alltag.jpg"
  },
  {
    "id": "a2-kurs-lesson-06-verkehr",
    "category": "a2-kurs",
    "order": 6,
    "title": "المواصلات والاتجاهات",
    "desc": "السؤال عن الاتجاهات ووسائل المواصلات المختلفة.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-06-verkehr.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-06-verkehr.jpg"
  },
  {
    "id": "a2-kurs-lesson-07-wetter-gefuehle",
    "category": "a2-kurs",
    "order": 7,
    "title": "الطقس والمشاعر",
    "desc": "وصف حالة الطقس والتعبير عن المشاعر المختلفة.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-07-wetter-gefuehle.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-07-wetter-gefuehle.jpg"
  },
  {
    "id": "a2-kurs-lesson-08-gesundheit",
    "category": "a2-kurs",
    "order": 8,
    "title": "الصحة والجسم",
    "desc": "أجزاء الجسم، الأعراض، وزيارة الطبيب.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-08-gesundheit.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-08-gesundheit.jpg"
  },
  {
    "id": "a2-kurs-lesson-09-arbeit",
    "category": "a2-kurs",
    "order": 9,
    "title": "العمل والمهن",
    "desc": "المهن المختلفة والحديث عن بيئة العمل.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-09-arbeit.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-09-arbeit.jpg"
  },
  {
    "id": "a2-kurs-lesson-10-bildung",
    "category": "a2-kurs",
    "order": 10,
    "title": "التعليم والمدرسة",
    "desc": "النظام التعليمي والمفردات المرتبطة بالمدرسة والجامعة.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-10-bildung.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-10-bildung.jpg"
  },
  {
    "id": "a2-kurs-lesson-11-technologie",
    "category": "a2-kurs",
    "order": 11,
    "title": "التكنولوجيا والرقمنة",
    "desc": "مفردات العصر الرقمي والأجهزة والإنترنت.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-11-technologie.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-11-technologie.jpg"
  },
  {
    "id": "a2-kurs-lesson-12-reisen",
    "category": "a2-kurs",
    "order": 12,
    "title": "السفر والختام 🎓",
    "desc": "مفردات السفر، وخلاصة ختامية لمسار A2 الكامل.",
    "badges": [],
    "path": "Deutsch/a2-kurs/lesson-12-reisen.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-12-reisen.jpg"
  },
  {
    "id": "a2-guide-01-perfekt",
    "category": "a2",
    "order": 1,
    "title": "الدليل الشامل · زمن الـ Perfekt",
    "desc": "القاعدة الكاملة، haben أم sein، أكثر من ٧٠ فعلًا، وتمارين فورية.",
    "badges": [
      "شامل"
    ],
    "path": "Deutsch/a2/guide-01-perfekt.html",
    "thumb": "assets/thumbnails/a2-guide-01-perfekt.jpg"
  },
  {
    "id": "a2-guide-02-reflexive-verben",
    "category": "a2",
    "order": 2,
    "title": "يومي المعتاد — الأفعال الانعكاسية",
    "desc": "١٦ فعلًا انعكاسيًا، حالتا Akkusativ وDativ، وساعة يوم تفاعلية.",
    "badges": [],
    "path": "Deutsch/a2/guide-02-reflexive-verben.html",
    "thumb": "assets/thumbnails/a2-guide-02-reflexive-verben.jpg"
  },
  {
    "id": "a2-guide-03-modalverben",
    "category": "a2",
    "order": 3,
    "title": "عدسات المعنى — الأفعال الناقصة (الأساسية)",
    "desc": "können, müssen, wollen, dürfen, sollen, möchten عبر عدسة كاميرا تفاعلية.",
    "badges": [
      "النسخة الأساسية"
    ],
    "path": "Deutsch/a2/guide-03-modalverben.html",
    "thumb": "assets/thumbnails/a2-guide-03-modalverben.jpg"
  },
  {
    "id": "a2-guide-03b-modalverben-komplett",
    "category": "a2",
    "order": 4,
    "title": "عدسات المعنى — الأفعال الناقصة (الموسّعة)",
    "desc": "نسخة موسّعة تضيف الأفعال المساعدة haben, sein, werden للدرس السابق.",
    "badges": [
      "نسخة موسّعة"
    ],
    "path": "Deutsch/a2/guide-03b-modalverben-komplett.html",
    "thumb": "assets/thumbnails/a2-guide-03b-modalverben-komplett.jpg"
  },
  {
    "id": "a2-guide-04-dativ",
    "category": "a2",
    "order": 5,
    "title": "بوصلة حروف الجر — حالة الجر Dativ",
    "desc": "حروف الجر السبعة (aus, bei, mit, nach, seit, von, zu) عبر بوصلة تفاعلية.",
    "badges": [],
    "path": "Deutsch/a2/guide-04-dativ.html",
    "thumb": "assets/thumbnails/a2-guide-04-dativ.jpg"
  },
  {
    "id": "a2-guide-04b-praepositionen-komplett",
    "category": "a2",
    "order": 6,
    "title": "دليل حروف الجر الشامل",
    "desc": "كل حروف الجر: Akkusativ · Dativ · Genitiv · حروف الجر المزدوجة، بمئات الأمثلة.",
    "badges": [
      "نسخة موسّعة"
    ],
    "path": "Deutsch/a2/guide-04b-praepositionen-komplett.html",
    "thumb": "assets/thumbnails/a2-guide-04b-praepositionen-komplett.jpg"
  },
  {
    "id": "a2-guide-05-praeteritum",
    "category": "a2",
    "order": 7,
    "title": "الدرس ٥ — الماضي البسيط الشامل (Präteritum)",
    "desc": "الأفعال الضعيفة والقوية وsein/haben/werden والناقصة في الماضي البسيط، ومتى نستخدمه بدل Perfekt — مع معمل تصريف تفاعلي.",
    "badges": [
      "شامل"
    ],
    "path": "Deutsch/a2/guide-05-praeteritum.html",
    "thumb": "assets/thumbnails/a2-guide-05-praeteritum.jpg"
  },
  {
    "id": "grammatik-das-perfekt",
    "category": "grammatik",
    "order": 1,
    "title": "Das Perfekt — الماضي التام في الألمانية",
    "desc": "شرح شامل لتكوين واستخدام زمن الماضي التام.",
    "badges": [],
    "path": "Deutsch/grammatik/das-perfekt.html",
    "thumb": "assets/thumbnails/grammatik-das-perfekt.jpg"
  },
  {
    "id": "grammatik-perfekt-uebersicht",
    "category": "grammatik",
    "order": 2,
    "title": "الزمن الماضي Perfekt",
    "desc": "نظرة عامة مبسطة على زمن الـ Perfekt.",
    "badges": [],
    "path": "Deutsch/grammatik/perfekt-uebersicht.html",
    "thumb": "assets/thumbnails/grammatik-perfekt-uebersicht.jpg"
  },
  {
    "id": "grammatik-perfekt-mit-modalverben",
    "category": "grammatik",
    "order": 3,
    "title": "Perfekt mit Modalverben — الجزء الثاني",
    "desc": "دمج زمن الـ Perfekt مع الأفعال الناقصة — مستوى A2.",
    "badges": [
      "الجزء ٢"
    ],
    "path": "Deutsch/grammatik/perfekt-mit-modalverben.html",
    "thumb": "assets/thumbnails/grammatik-perfekt-mit-modalverben.jpg"
  },
  {
    "id": "grammatik-hilfsverben",
    "category": "grammatik",
    "order": 4,
    "title": "Hilfsverben — الأفعال المساعدة",
    "desc": "haben و sein و werden: الاستخدامات والتصريف.",
    "badges": [],
    "path": "Deutsch/grammatik/hilfsverben.html",
    "thumb": "assets/thumbnails/grammatik-hilfsverben.jpg"
  },
  {
    "id": "grammatik-hilfsverben-meistern",
    "category": "grammatik",
    "order": 5,
    "title": "Hilfsverben — Deutsch Meistern",
    "desc": "نسخة أخرى متعمقة في إتقان الأفعال المساعدة.",
    "badges": [],
    "path": "Deutsch/grammatik/hilfsverben-meistern.html",
    "thumb": "assets/thumbnails/grammatik-hilfsverben-meistern.jpg"
  },
  {
    "id": "grammatik-modalverben-praeteritum",
    "category": "grammatik",
    "order": 6,
    "title": "Modalverben im Präteritum",
    "desc": "تصريف الأفعال الناقصة في الماضي البسيط، مع تمارين محلولة.",
    "badges": [],
    "path": "Deutsch/grammatik/modalverben-praeteritum.html",
    "thumb": "assets/thumbnails/grammatik-modalverben-praeteritum.jpg"
  },
  {
    "id": "grammatik-reflexive-verben-print",
    "category": "grammatik",
    "order": 7,
    "title": "الأفعال الانعكاسية — نسخة للطباعة",
    "desc": "مرجع Reflexive Verben بتنسيق A4 جاهز للطباعة.",
    "badges": [
      "قابل للطباعة"
    ],
    "path": "Deutsch/grammatik/reflexive-verben-print.html",
    "thumb": "assets/thumbnails/grammatik-reflexive-verben-print.jpg"
  },
  {
    "id": "grammatik-trennbare-verben",
    "category": "grammatik",
    "order": 8,
    "title": "الأفعال القابلة وغير القابلة للانفصال",
    "desc": "Trennbare & untrennbare Verben بتنسيق A4.",
    "badges": [
      "قابل للطباعة"
    ],
    "path": "Deutsch/grammatik/trennbare-verben.html",
    "thumb": "assets/thumbnails/grammatik-trennbare-verben.jpg"
  },
  {
    "id": "grammatik-dativ-verben-print",
    "category": "grammatik",
    "order": 9,
    "title": "Deutsche Dativ-Verben",
    "desc": "الأفعال التي تستدعي حالة الجر Dativ، بتنسيق A4.",
    "badges": [
      "قابل للطباعة"
    ],
    "path": "Deutsch/grammatik/dativ-verben-print.html",
    "thumb": "assets/thumbnails/grammatik-dativ-verben-print.jpg"
  },
  {
    "id": "grammatik-akkusativ-verben-print",
    "category": "grammatik",
    "order": 10,
    "title": "Akkusativ Verben — نسخة كاملة للطباعة",
    "desc": "الأفعال التي تستدعي حالة النصب Akkusativ.",
    "badges": [
      "قابل للطباعة"
    ],
    "path": "Deutsch/grammatik/akkusativ-verben-print.html",
    "thumb": "assets/thumbnails/grammatik-akkusativ-verben-print.jpg"
  },
  {
    "id": "grammatik-genitiv",
    "category": "grammatik",
    "order": 11,
    "title": "الجنيتيف (Genitiv) — شرح شامل",
    "desc": "حالة الإضافة/الملكية في الألمانية بشرح شامل.",
    "badges": [],
    "path": "Deutsch/grammatik/genitiv.html",
    "thumb": "assets/thumbnails/grammatik-genitiv.jpg"
  },
  {
    "id": "grammatik-genitiv-advanced-test",
    "category": "grammatik",
    "order": 12,
    "title": "الجنيتيف المتقدم — اختبار ذاتي",
    "desc": "مفاهيم متقدمة في الجنيتيف مع اختبار ذاتي شامل.",
    "badges": [
      "اختبار ذاتي"
    ],
    "path": "Deutsch/grammatik/genitiv-advanced-test.html",
    "thumb": "assets/thumbnails/grammatik-genitiv-advanced-test.jpg"
  },
  {
    "id": "grammatik-possessivpronomen",
    "category": "grammatik",
    "order": 13,
    "title": "الضمائر الملكية — Possessivpronomen",
    "desc": "mein, dein, sein... وتصريفها حسب الحالة والجنس.",
    "badges": [],
    "path": "Deutsch/grammatik/possessivpronomen.html",
    "thumb": "assets/thumbnails/grammatik-possessivpronomen.jpg"
  },
  {
    "id": "grammatik-konnektoren-weil-denn",
    "category": "grammatik",
    "order": 14,
    "title": "weil · denn · nämlich · wann",
    "desc": "الفروق الدقيقة بين أدوات الربط الأربع، مع ترتيب الجملة.",
    "badges": [],
    "path": "Deutsch/grammatik/konnektoren-weil-denn.html",
    "thumb": "assets/thumbnails/grammatik-konnektoren-weil-denn.jpg"
  },
  {
    "id": "grammatik-dass-konnektor",
    "category": "grammatik",
    "order": 15,
    "title": "محطة dass — أداة الربط",
    "desc": "الفرق بين dass و das و ob و weil و damit.",
    "badges": [],
    "path": "Deutsch/grammatik/dass-konnektor.html",
    "thumb": "assets/thumbnails/grammatik-dass-konnektor.jpg"
  },
  {
    "id": "grammatik-praepositionen-konnektoren",
    "category": "grammatik",
    "order": 16,
    "title": "حروف الجر وأدوات الربط",
    "desc": "مرجع تفاعلي شامل مع أمثلة ونطق وترجمة ثلاثية اللغة.",
    "badges": [],
    "path": "Deutsch/grammatik/praepositionen-konnektoren.html",
    "thumb": "assets/thumbnails/grammatik-praepositionen-konnektoren.jpg"
  },
  {
    "id": "grammatik-komparativ-superlativ",
    "category": "grammatik",
    "order": 17,
    "title": "سلّم المقارنة — Komparativ & Superlativ",
    "desc": "قواعد المقارنة والتفضيل مع تصريف الصفة في حالة Dativ.",
    "badges": [],
    "path": "Deutsch/grammatik/komparativ-superlativ.html",
    "thumb": "assets/thumbnails/grammatik-komparativ-superlativ.jpg"
  },
  {
    "id": "grammatik-konnektoren-obwohl-trotzdem-damit",
    "category": "grammatik",
    "order": 18,
    "title": "obwohl · trotzdem · damit · um…zu — التنازل والغاية",
    "desc": "الفرق بين أدوات التنازل والغاية الأربع، مع مخطط قرار وأمثلة صوتية وتمارين.",
    "badges": [],
    "path": "Deutsch/grammatik/konnektoren-obwohl-trotzdem-damit.html",
    "thumb": "assets/thumbnails/grammatik-konnektoren-obwohl-trotzdem-damit.jpg"
  },
  {
    "id": "grammatik-demonstrativpronomen-dieser-diese-dieses",
    "category": "grammatik",
    "order": 19,
    "title": "دائرة الضوء — أدوات الإشارة dieser · diese · dieses",
    "desc": "أدوات الإشارة الألمانية بالتفصيل: dieser، diese، dieses، dies، das — مع نطق وبطاقات تفاعلية.",
    "badges": [],
    "path": "Deutsch/grammatik/demonstrativpronomen-dieser-diese-dieses.html",
    "thumb": "assets/thumbnails/grammatik-demonstrativpronomen-dieser-diese-dieses.jpg"
  },
  {
    "id": "family-verben-backen",
    "category": "family-verben",
    "order": 1,
    "title": "Backstube bei Nacht — عائلة الفعل backen",
    "desc": "تصريف، تراكيب، وحوار حقيقي حول فعل الخَبز.",
    "badges": [
      "وضع ليلي"
    ],
    "path": "Deutsch/family-verben/backen.html",
    "thumb": "assets/thumbnails/family-verben-backen.jpg"
  },
  {
    "id": "family-verben-fuehlen",
    "category": "family-verben",
    "order": 2,
    "title": "Gefühlswelt bei Nacht — عائلة الفعل fühlen",
    "desc": "تصريف كامل، حوار طبيب حقيقي، وحالات إعرابية متنوعة.",
    "badges": [
      "وضع ليلي"
    ],
    "path": "Deutsch/family-verben/fuehlen.html",
    "thumb": "assets/thumbnails/family-verben-fuehlen.jpg"
  },
  {
    "id": "family-verben-hoeren",
    "category": "family-verben",
    "order": 3,
    "title": "Klangraum bei Nacht — عائلة الفعل hören",
    "desc": "أفعال منفصلة وغير منفصلة، وبادئة ge- الأحفورية النادرة.",
    "badges": [
      "وضع ليلي"
    ],
    "path": "Deutsch/family-verben/hoeren.html",
    "thumb": "assets/thumbnails/family-verben-hoeren.jpg"
  },
  {
    "id": "family-verben-stehen",
    "category": "family-verben",
    "order": 4,
    "title": "Säulenhalle bei Nacht — عائلة الفعل stehen",
    "desc": "تصريف قوي غير منتظم، وحوار طلابي حقيقي.",
    "badges": [
      "وضع ليلي"
    ],
    "path": "Deutsch/family-verben/stehen.html",
    "thumb": "assets/thumbnails/family-verben-stehen.jpg"
  },
  {
    "id": "family-verben-stellen",
    "category": "family-verben",
    "order": 5,
    "title": "Galerie bei Nacht — عائلة الفعل stellen",
    "desc": "أكثر من عشرين فعلًا مشتقًا من stellen، بالحالة الإعرابية لكل فعل ونطق وجمل حقيقية.",
    "badges": [
      "وضع ليلي"
    ],
    "path": "Deutsch/family-verben/stellen.html",
    "thumb": "assets/thumbnails/family-verben-stellen.jpg"
  },
  {
    "id": "wortschatz-tiere",
    "category": "wortschatz",
    "order": 1,
    "title": "Deutsche Tiere — الحيوانات",
    "desc": "أسماء الحيوانات بالألمانية مع رسومات ونطق.",
    "badges": [],
    "path": "Deutsch/wortschatz/tiere.html",
    "thumb": "assets/thumbnails/wortschatz-tiere.jpg"
  },
  {
    "id": "wortschatz-kleidung",
    "category": "wortschatz",
    "order": 2,
    "title": "Deutsche Kleidung — الملابس",
    "desc": "مفردات الملابس والإكسسوارات اليومية.",
    "badges": [],
    "path": "Deutsch/wortschatz/kleidung.html",
    "thumb": "assets/thumbnails/wortschatz-kleidung.jpg"
  },
  {
    "id": "wortschatz-elektronik",
    "category": "wortschatz",
    "order": 3,
    "title": "Elektrogeräte — الأجهزة الإلكترونية",
    "desc": "أسماء الأجهزة الكهربائية والإلكترونية الشائعة.",
    "badges": [],
    "path": "Deutsch/wortschatz/elektronik.html",
    "thumb": "assets/thumbnails/wortschatz-elektronik.jpg"
  },
  {
    "id": "wortschatz-obst-gemuese",
    "category": "wortschatz",
    "order": 4,
    "title": "Obst und Gemüse — الفواكه والخضروات",
    "desc": "مفردات الفواكه والخضروات مع الأرتيكل.",
    "badges": [],
    "path": "Deutsch/wortschatz/obst-gemuese.html",
    "thumb": "assets/thumbnails/wortschatz-obst-gemuese.jpg"
  },
  {
    "id": "wortschatz-moebel",
    "category": "wortschatz",
    "order": 5,
    "title": "Deutsche Möbel — الأثاث",
    "desc": "أثاث المنزل الأساسي وتسمياته بالألمانية.",
    "badges": [],
    "path": "Deutsch/wortschatz/moebel.html",
    "thumb": "assets/thumbnails/wortschatz-moebel.jpg"
  },
  {
    "id": "wortschatz-kueche",
    "category": "wortschatz",
    "order": 6,
    "title": "Küchengeräte — أدوات المطبخ",
    "desc": "أدوات المطبخ مع الأرتيكل والنطق والرسومات.",
    "badges": [],
    "path": "Deutsch/wortschatz/kueche.html",
    "thumb": "assets/thumbnails/wortschatz-kueche.jpg"
  },
  {
    "id": "wortschatz-natur",
    "category": "wortschatz",
    "order": 7,
    "title": "Natur auf Deutsch — الطبيعة",
    "desc": "مفردات الطبيعة والمناظر الطبيعية مع رسومات توضيحية.",
    "badges": [],
    "path": "Deutsch/wortschatz/natur.html",
    "thumb": "assets/thumbnails/wortschatz-natur.jpg"
  },
  {
    "id": "stories-alltagsdeutsch",
    "category": "stories",
    "order": 1,
    "title": "Alltagsdeutsch — محادثات يومية",
    "desc": "منصة تفاعلية لمحادثات ألمانية يومية مع الترجمة والنطق.",
    "badges": [],
    "path": "Deutsch/stories/alltagsdeutsch.html",
    "thumb": "assets/thumbnails/stories-alltagsdeutsch.jpg"
  },
  {
    "id": "stories-a1-sprechen",
    "category": "stories",
    "order": 2,
    "title": "أهم أسئلة A1 Sprechen",
    "desc": "أسئلة اختبار المحادثة الرسمية لمستوى A1.",
    "badges": [
      "تحضير اختبار"
    ],
    "path": "Deutsch/stories/a1-sprechen.html",
    "thumb": "assets/thumbnails/stories-a1-sprechen.jpg"
  },
  {
    "id": "stories-a2-sprechen",
    "category": "stories",
    "order": 3,
    "title": "أهم أسئلة A2 Sprechen",
    "desc": "أسئلة اختبار المحادثة الرسمية لمستوى A2.",
    "badges": [
      "تحضير اختبار"
    ],
    "path": "Deutsch/stories/a2-sprechen.html",
    "thumb": "assets/thumbnails/stories-a2-sprechen.jpg"
  },
  {
    "id": "stories-deutsch-mit-mira",
    "category": "stories",
    "order": 4,
    "title": "Deutsch mit Mira — A2",
    "desc": "محتوى قصصي متكامل لتعلم الألمانية بمستوى A2.",
    "badges": [],
    "path": "Deutsch/stories/deutsch-mit-mira.html",
    "thumb": "assets/thumbnails/stories-deutsch-mit-mira.jpg"
  }
]
};
