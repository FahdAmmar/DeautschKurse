// ════════════════════════════════════════════════════════════════════════
// catalog.js — فهرس دروس أكاديمية الألمانية
// ════════════════════════════════════════════════════════════════════════
//
// هذا هو المكان الوحيد الذي تحتاج تعديله للتحكّم بما يظهر في الموقع،
// وبأي ترتيب. الملف نص عادي بصيغة JavaScript — يمكن تعديله بأي محرّر
// نصوص (Notepad، TextEdit، VS Code...) دون أي أدوات برمجة.
//
// ── لإخفاء/حذف درس من الموقع ─────────────────────────────────────────
//     ابحث عن الدرس داخل lessons[] بالأسفل، وغيّر:
//         "enabled": true     →     "enabled": false
//     (ملف الدرس نفسه لا يُحذف من القرص، فقط يختفي من الموقع، ويمكنك
//      إعادته لاحقًا بتغيير القيمة إلى true مرة أخرى)
//
// ── لتغيير ترتيب درس داخل قسمه ───────────────────────────────────────
//     غيّر رقم "order" الخاص به. الرقم الأصغر يظهر أولًا. يمكنك استخدام
//     أي أرقام حتى الكسور (مثل 2.5) لإدراج درس بين درسين موجودين دون
//     الحاجة لإعادة ترقيم كل الدروس الأخرى.
//
// ── لتغيير عنوان أو وصف درس ──────────────────────────────────────────
//     عدّل النص مباشرة بين علامتي التنصيص أمام "title" أو "desc".
//
// ── لإخفاء قسم كامل، أو تغيير ترتيب الأقسام نفسها في الصفحة ─────────
//     نفس الفكرة تمامًا، لكن داخل categories[] بالأعلى بدل lessons[].
//
// ⚠️ قبل التعديل:
//     • حقول عليها تعليق "(لا تُغيّر)" لا تلمسها — الموقع يعتمد عليها
//       داخليًا لربط الدرس بملفه وصورته وتقدّمك المحفوظ.
//     • لا تحذف الفاصلة { أو } أو القوس عند حذف كتلة درس كاملة — الأسهل
//       والأكثر أمانًا هو استخدام "enabled": false بدل حذف الكتلة فعليًا.
//     • بعد أي تعديل: احفظ الملف وأعد تحميل الصفحة في المتصفح لترى النتيجة.
//
// ════════════════════════════════════════════════════════════════════════

window.DEUTSCH_CATALOG = {
  categories: [
  {
    "title": "المرحلة A1 — نقطة الانطلاق",
    "order": 1,          // رقم ترتيب هذا القسم بين الأقسام — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا القسم بالكامل من الموقع
    "subtitle": "الأبجدية والتحيات، الأرقام والألوان، العائلة والطعام، الوقت والمنزل، الجسم والصحة",
    "level": "A1",
    "icon": "seed",
    "key": "a1",            // (لا تُغيّر) معرّف داخلي تعتمد عليه الدروس
    "folder": "a1"       // (لا تُغيّر) اسم مجلد هذا القسم داخل Deutsch/
  },
  {
    "title": "مسار A2 الكامل — دورة من ١٢ محطة",
    "order": 2,          // رقم ترتيب هذا القسم بين الأقسام — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا القسم بالكامل من الموقع
    "subtitle": "رحلة متسلسلة من التعارف حتى السفر، محطة تلو الأخرى",
    "level": "A2",
    "icon": "route",
    "key": "a2-kurs",            // (لا تُغيّر) معرّف داخلي تعتمد عليه الدروس
    "folder": "a2-kurs"       // (لا تُغيّر) اسم مجلد هذا القسم داخل Deutsch/
  },
  {
    "title": "أدلة A2 الشاملة",
    "order": 3,          // رقم ترتيب هذا القسم بين الأقسام — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا القسم بالكامل من الموقع
    "subtitle": "غوص عميق في أهم قواعد A2: الأزمنة، الانعكاسية، الناقصة، الجر، الصفات، الجمل الفرعية، وصيغة الأمر",
    "level": "A2",
    "icon": "compass",
    "key": "a2",            // (لا تُغيّر) معرّف داخلي تعتمد عليه الدروس
    "folder": "a2"       // (لا تُغيّر) اسم مجلد هذا القسم داخل Deutsch/
  },
  {
    "title": "مرجع القواعد — دفتر الملاحظات الكامل",
    "order": 4,          // رقم ترتيب هذا القسم بين الأقسام — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا القسم بالكامل من الموقع
    "subtitle": "٢٣ مرجعًا تفاعليًا لأدق تفاصيل القواعد الألمانية",
    "level": "A2–B1",
    "icon": "book",
    "key": "grammatik",            // (لا تُغيّر) معرّف داخلي تعتمد عليه الدروس
    "folder": "grammatik"       // (لا تُغيّر) اسم مجلد هذا القسم داخل Deutsch/
  },
  {
    "title": "عائلات الأفعال",
    "order": 5,          // رقم ترتيب هذا القسم بين الأقسام — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا القسم بالكامل من الموقع
    "subtitle": "ثماني عائلات أفعال أساسية، بأسلوب سردي غني — بعضها بوضع ليلي أنيق",
    "level": "A2",
    "icon": "moon",
    "key": "family-verben",            // (لا تُغيّر) معرّف داخلي تعتمد عليه الدروس
    "folder": "family-verben"       // (لا تُغيّر) اسم مجلد هذا القسم داخل Deutsch/
  },
  {
    "title": "المفردات المصورة",
    "order": 6,          // رقم ترتيب هذا القسم بين الأقسام — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا القسم بالكامل من الموقع
    "subtitle": "ثماني مجموعات مفردات محورية مع رسومات ونطق",
    "level": "A1–A2",
    "icon": "palette",
    "key": "wortschatz",            // (لا تُغيّر) معرّف داخلي تعتمد عليه الدروس
    "folder": "wortschatz"       // (لا تُغيّر) اسم مجلد هذا القسم داخل Deutsch/
  },
  {
    "title": "قصص ومحادثات حقيقية",
    "order": 7,          // رقم ترتيب هذا القسم بين الأقسام — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا القسم بالكامل من الموقع
    "subtitle": "طبّق ما تعلمته في محادثات يومية وأسئلة اختبار المحادثة",
    "level": "A1–A2",
    "icon": "chat",
    "key": "stories",            // (لا تُغيّر) معرّف داخلي تعتمد عليه الدروس
    "folder": "stories"       // (لا تُغيّر) اسم مجلد هذا القسم داخل Deutsch/
  }
  ],

  lessons: [
  // ────────────────────────────────────────────────────────────
  // قسم: المرحلة A1 — نقطة الانطلاق  (category: "a1")
  // ────────────────────────────────────────────────────────────
  {
    "title": "الحروف الألمانية — Das deutsche Alphabet",
    "order": 1,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الأبجدية الألمانية كاملة، الحروف الخاصة Ä Ö Ü ß، ونطق صوتي تفاعلي.",
    "badges": [],
    "id": "a1-lesson-01-alphabet",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-01-alphabet.html",
    "thumb": "assets/thumbnails/a1-lesson-01-alphabet.jpg"
  },
  {
    "title": "التحيات وتقديم النفس — Begrüßung & Vorstellung",
    "order": 2,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "تحيات الوقت، الرسمية وغير الرسمية، صيغتا du وSie، وحوارات كاملة.",
    "badges": [],
    "id": "a1-lesson-02-begruessung",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-02-begruessung.html",
    "thumb": "assets/thumbnails/a1-lesson-02-begruessung.jpg"
  },
  {
    "title": "الأرقام الألمانية — Zahlen",
    "order": 3,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الأرقام من ٠ إلى ١٠٠٠، قاعدة und لبناء الأرقام المركّبة، الأرقام الترتيبية، واستخدامها في الهاتف والأسعار والعمر.",
    "badges": [],
    "id": "a1-lesson-03-zahlen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-03-zahlen.html",
    "thumb": "assets/thumbnails/a1-lesson-03-zahlen.jpg"
  },
  {
    "title": "الألوان وأيام الأسبوع — Farben & Wochentage",
    "order": 4,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "ألوان أساسية وثانوية بأداة مزج تفاعلية، مقدمة لتوافق الصفة مع الاسم، أيام الأسبوع، وحرف الجر المدمج am.",
    "badges": [],
    "id": "a1-lesson-04-farben-wochentage",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-04-farben-wochentage.html",
    "thumb": "assets/thumbnails/a1-lesson-04-farben-wochentage.jpg"
  },
  {
    "title": "العائلة وأدوات الملكية — Familie & Possessivpronomen",
    "order": 5,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مفردات العائلة القريبة والممتدة مع شجرة عائلة تفاعلية، أدوات الملكية mein/dein/sein، والحالة الاجتماعية.",
    "badges": [],
    "id": "a1-lesson-05-familie",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-05-familie.html",
    "thumb": "assets/thumbnails/a1-lesson-05-familie.jpg"
  },
  {
    "title": "الطعام والشراب وحالة النصب — Essen, Trinken & Akkusativ",
    "order": 6,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مفردات الطعام والشراب ووجبات اليوم الثلاث، أداة بناء تفاعلية لحالة Akkusativ مع Ich möchte، وقائمة مقهى تفاعلية.",
    "badges": [],
    "id": "a1-lesson-06-essen-trinken",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-06-essen-trinken.html",
    "thumb": "assets/thumbnails/a1-lesson-06-essen-trinken.jpg"
  },
  {
    "title": "الوقت والساعة — Die Uhrzeit",
    "order": 7,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "ساعة تفاعلية تحوّل أي وقت للصيغتين الرسمية وغير الرسمية، قاعدة halb، وأقسام اليوم الستة بخط زمني تفاعلي.",
    "badges": [],
    "id": "a1-lesson-07-uhrzeit",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-07-uhrzeit.html",
    "thumb": "assets/thumbnails/a1-lesson-07-uhrzeit.jpg"
  },
  {
    "title": "المنزل والغرف وحروف الجر المكانية — Die Wohnung & Wechselpräpositionen",
    "order": 8,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "غرف المنزل والأثاث الأساسي، حروف الجر التسعة ذات الاتجاهين، وأداة تفاعلية تفرّق بين Wo وWohin.",
    "badges": [],
    "id": "a1-lesson-08-wohnung",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-08-wohnung.html",
    "thumb": "assets/thumbnails/a1-lesson-08-wohnung.jpg"
  },
  {
    "title": "الجسم والصحة وضمائر الجر — Körper, Gesundheit & Dativpronomen",
    "order": 9,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أجزاء الجسم مع مخطط تفاعلي، مفردات الصحة والمرض، ضمائر الجر السبعة (mir, dir, ihm...)، وأداة بناء تفاعلية لتركيب Schmerzen الشهير tut/tun weh.",
    "badges": [],
    "id": "a1-lesson-09-koerper-gesundheit",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-09-koerper-gesundheit.html",
    "thumb": "assets/thumbnails/a1-lesson-09-koerper-gesundheit.jpg"
  },

  // ────────────────────────────────────────────────────────────
  // قسم: مسار A2 الكامل — دورة من ١٢ محطة  (category: "a2-kurs")
  // ────────────────────────────────────────────────────────────
  {
    "title": "الدرس الأول — مرحبًا بك في عالم الألمانية",
    "order": 1,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "نقطة انطلاق مسار A2: تعارف أولي وتهيئة لبقية الدورة.",
    "badges": [],
    "id": "a2-kurs-lesson-01-willkommen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-01-willkommen.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-01-willkommen.jpg"
  },
  {
    "title": "الأرقام والوقت",
    "order": 2,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "عدّ الأرقام وقراءة الساعة والتعبير عن التوقيت بثقة.",
    "badges": [],
    "id": "a2-kurs-lesson-02-zahlen-zeit",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-02-zahlen-zeit.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-02-zahlen-zeit.jpg"
  },
  {
    "title": "التسوق والمطعم",
    "order": 3,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مفردات وتراكيب لطلب الطعام والتسوق في المتاجر.",
    "badges": [],
    "id": "a2-kurs-lesson-03-einkaufen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-03-einkaufen.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-03-einkaufen.jpg"
  },
  {
    "title": "المنزل والعائلة",
    "order": 4,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "وصف المنزل وأفراد العائلة والعلاقات الأسرية.",
    "badges": [],
    "id": "a2-kurs-lesson-04-zuhause-familie",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-04-zuhause-familie.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-04-zuhause-familie.jpg"
  },
  {
    "title": "الروتين اليومي والأفعال",
    "order": 5,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أفعال اليوم المعتاد وترتيبها في جملة زمنية متسلسلة.",
    "badges": [],
    "id": "a2-kurs-lesson-05-alltag",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-05-alltag.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-05-alltag.jpg"
  },
  {
    "title": "المواصلات والاتجاهات",
    "order": 6,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "السؤال عن الاتجاهات ووسائل المواصلات المختلفة.",
    "badges": [],
    "id": "a2-kurs-lesson-06-verkehr",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-06-verkehr.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-06-verkehr.jpg"
  },
  {
    "title": "الطقس والمشاعر",
    "order": 7,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "وصف حالة الطقس والتعبير عن المشاعر المختلفة.",
    "badges": [],
    "id": "a2-kurs-lesson-07-wetter-gefuehle",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-07-wetter-gefuehle.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-07-wetter-gefuehle.jpg"
  },
  {
    "title": "الصحة والجسم",
    "order": 8,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أجزاء الجسم، الأعراض، وزيارة الطبيب.",
    "badges": [],
    "id": "a2-kurs-lesson-08-gesundheit",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-08-gesundheit.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-08-gesundheit.jpg"
  },
  {
    "title": "العمل والمهن",
    "order": 9,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "المهن المختلفة والحديث عن بيئة العمل.",
    "badges": [],
    "id": "a2-kurs-lesson-09-arbeit",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-09-arbeit.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-09-arbeit.jpg"
  },
  {
    "title": "التعليم والمدرسة",
    "order": 10,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "النظام التعليمي والمفردات المرتبطة بالمدرسة والجامعة.",
    "badges": [],
    "id": "a2-kurs-lesson-10-bildung",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-10-bildung.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-10-bildung.jpg"
  },
  {
    "title": "التكنولوجيا والرقمنة",
    "order": 11,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مفردات العصر الرقمي والأجهزة والإنترنت.",
    "badges": [],
    "id": "a2-kurs-lesson-11-technologie",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-11-technologie.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-11-technologie.jpg"
  },
  {
    "title": "السفر والختام 🎓",
    "order": 12,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مفردات السفر، وخلاصة ختامية لمسار A2 الكامل.",
    "badges": [],
    "id": "a2-kurs-lesson-12-reisen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2-kurs",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2-kurs/lesson-12-reisen.html",
    "thumb": "assets/thumbnails/a2-kurs-lesson-12-reisen.jpg"
  },

  // ────────────────────────────────────────────────────────────
  // قسم: أدلة A2 الشاملة  (category: "a2")
  // ────────────────────────────────────────────────────────────
  {
    "title": "الدليل الشامل · زمن الـ Perfekt",
    "order": 1,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "القاعدة الكاملة، haben أم sein، أكثر من ٧٠ فعلًا، وتمارين فورية.",
    "badges": ["شامل"],
    "id": "a2-guide-01-perfekt",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2/guide-01-perfekt.html",
    "thumb": "assets/thumbnails/a2-guide-01-perfekt.jpg"
  },
  {
    "title": "يومي المعتاد — الأفعال الانعكاسية",
    "order": 2,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "١٦ فعلًا انعكاسيًا، حالتا Akkusativ وDativ، وساعة يوم تفاعلية.",
    "badges": [],
    "id": "a2-guide-02-reflexive-verben",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2/guide-02-reflexive-verben.html",
    "thumb": "assets/thumbnails/a2-guide-02-reflexive-verben.jpg"
  },
  {
    "title": "عدسات المعنى — الأفعال الناقصة (الأساسية)",
    "order": 3,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "können, müssen, wollen, dürfen, sollen, möchten عبر عدسة كاميرا تفاعلية.",
    "badges": ["النسخة الأساسية"],
    "id": "a2-guide-03-modalverben",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2/guide-03-modalverben.html",
    "thumb": "assets/thumbnails/a2-guide-03-modalverben.jpg"
  },
  {
    "title": "عدسات المعنى — الأفعال الناقصة (الموسّعة)",
    "order": 4,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "نسخة موسّعة تضيف الأفعال المساعدة haben, sein, werden للدرس السابق.",
    "badges": ["نسخة موسّعة"],
    "id": "a2-guide-03b-modalverben-komplett",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2/guide-03b-modalverben-komplett.html",
    "thumb": "assets/thumbnails/a2-guide-03b-modalverben-komplett.jpg"
  },
  {
    "title": "بوصلة حروف الجر — حالة الجر Dativ",
    "order": 5,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "حروف الجر السبعة (aus, bei, mit, nach, seit, von, zu) عبر بوصلة تفاعلية.",
    "badges": [],
    "id": "a2-guide-04-dativ",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2/guide-04-dativ.html",
    "thumb": "assets/thumbnails/a2-guide-04-dativ.jpg"
  },
  {
    "title": "دليل حروف الجر الشامل",
    "order": 6,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "كل حروف الجر: Akkusativ · Dativ · Genitiv · حروف الجر المزدوجة، بمئات الأمثلة.",
    "badges": ["نسخة موسّعة"],
    "id": "a2-guide-04b-praepositionen-komplett",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2/guide-04b-praepositionen-komplett.html",
    "thumb": "assets/thumbnails/a2-guide-04b-praepositionen-komplett.jpg"
  },
  {
    "title": "الدرس ٥ — الماضي البسيط الشامل (Präteritum)",
    "order": 7,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الأفعال الضعيفة والقوية وsein/haben/werden والناقصة في الماضي البسيط، ومتى نستخدمه بدل Perfekt — مع معمل تصريف تفاعلي.",
    "badges": ["شامل"],
    "id": "a2-guide-05-praeteritum",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2/guide-05-praeteritum.html",
    "thumb": "assets/thumbnails/a2-guide-05-praeteritum.jpg"
  },
  {
    "title": "الدرس ٦ — نهايات الصفة الشاملة (Adjektivendungen)",
    "order": 8,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "التصريف الضعيف بعد der/die/das، والمختلط بعد ein/mein، والقوي بلا أداة، عبر الحالات الأربع، مع حاسبة تصريف تفاعلية.",
    "badges": ["شامل"],
    "id": "a2-guide-06-adjektivendungen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2/guide-06-adjektivendungen.html",
    "thumb": "assets/thumbnails/a2-guide-06-adjektivendungen.jpg"
  },
  {
    "title": "الدرس ٧ — الحاضر التام الشامل (Perfekt)",
    "order": 9,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "haben أم sein، تكوين Partizip II للأفعال الضعيفة والقوية، الأفعال بلا ge- والأفعال المنفصلة، مع معمل بناء تفاعلي.",
    "badges": ["شامل"],
    "id": "a2-guide-07-partizip-ii-komplett",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2/guide-07-partizip-ii-komplett.html",
    "thumb": "assets/thumbnails/a2-guide-07-partizip-ii-komplett.jpg"
  },
  {
    "title": "الدرس ٨ — الجمل الفرعية الشاملة (Nebensätze)",
    "order": 10,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "جمل السبب (weil/denn)، وdass، والشرط والزمن (wenn/als/wann)، والتنازل (obwohl/trotzdem)، مع معمل بناء جمل تفاعلي.",
    "badges": ["شامل"],
    "id": "a2-guide-08-nebensaetze",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2/guide-08-nebensaetze.html",
    "thumb": "assets/thumbnails/a2-guide-08-nebensaetze.jpg"
  },
  {
    "title": "الدرس ٩ — صيغة الأمر الشاملة (Imperativ)",
    "order": 11,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "شرح شامل وتفاعلي لصيغة الأمر الألمانية Imperativ لصيغ du وihr وSie، بأمثلة صوتية وتمارين تفاعلية.",
    "badges": [],
    "id": "a2-guide-09-imperativ",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a2/guide-09-imperativ.html",
    "thumb": "assets/thumbnails/a2-guide-09-imperativ.jpg"
  },

  // ────────────────────────────────────────────────────────────
  // قسم: مرجع القواعد — دفتر الملاحظات الكامل  (category: "grammatik")
  // ────────────────────────────────────────────────────────────
  {
    "title": "ملف القضية — أدوات الاستفهام الألمانية",
    "order": 1,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "wer, was, wo, wann, warum, wie, welche وأكثر، بأسلوب المحقق اللغوي التفاعلي.",
    "badges": [],
    "id": "grammatik-fragewoerter-detektiv",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/fragewoerter-detektiv.html",
    "thumb": "assets/thumbnails/grammatik-fragewoerter-detektiv.jpg"
  },
  {
    "title": "الضمائر الملكية — Possessivpronomen",
    "order": 2,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "mein, dein, sein... وتصريفها حسب الحالة والجنس.",
    "badges": [],
    "id": "grammatik-possessivpronomen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/possessivpronomen.html",
    "thumb": "assets/thumbnails/grammatik-possessivpronomen.jpg"
  },
  {
    "title": "دائرة الضوء — أدوات الإشارة dieser · diese · dieses",
    "order": 3,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أدوات الإشارة الألمانية بالتفصيل: dieser، diese، dieses، dies، das — مع نطق وبطاقات تفاعلية.",
    "badges": [],
    "id": "grammatik-demonstrativpronomen-dieser-diese-dieses",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/demonstrativpronomen-dieser-diese-dieses.html",
    "thumb": "assets/thumbnails/grammatik-demonstrativpronomen-dieser-diese-dieses.jpg"
  },
  {
    "title": "Hilfsverben — الأفعال المساعدة",
    "order": 4,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "haben و sein و werden: الاستخدامات والتصريف.",
    "badges": [],
    "id": "grammatik-hilfsverben",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/hilfsverben.html",
    "thumb": "assets/thumbnails/grammatik-hilfsverben.jpg"
  },
  {
    "title": "Hilfsverben — Deutsch Meistern",
    "order": 5,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "نسخة أخرى متعمقة في إتقان الأفعال المساعدة.",
    "badges": [],
    "id": "grammatik-hilfsverben-meistern",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/hilfsverben-meistern.html",
    "thumb": "assets/thumbnails/grammatik-hilfsverben-meistern.jpg"
  },
  {
    "title": "الأفعال القابلة وغير القابلة للانفصال",
    "order": 6,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "Trennbare & untrennbare Verben بتنسيق A4.",
    "badges": ["قابل للطباعة"],
    "id": "grammatik-trennbare-verben",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/trennbare-verben.html",
    "thumb": "assets/thumbnails/grammatik-trennbare-verben.jpg"
  },
  {
    "title": "Deutsche Dativ-Verben",
    "order": 7,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الأفعال التي تستدعي حالة الجر Dativ، بتنسيق A4.",
    "badges": ["قابل للطباعة"],
    "id": "grammatik-dativ-verben-print",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/dativ-verben-print.html",
    "thumb": "assets/thumbnails/grammatik-dativ-verben-print.jpg"
  },
  {
    "title": "Akkusativ Verben — نسخة كاملة للطباعة",
    "order": 8,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الأفعال التي تستدعي حالة النصب Akkusativ.",
    "badges": ["قابل للطباعة"],
    "id": "grammatik-akkusativ-verben-print",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/akkusativ-verben-print.html",
    "thumb": "assets/thumbnails/grammatik-akkusativ-verben-print.jpg"
  },
  {
    "title": "الاتجاهات والمواقع — Wegbeschreibungen & Orte",
    "order": 9,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "السؤال عن الاتجاهات ووصف المواقع في الألمانية، بمستوى A2 تفاعلي.",
    "badges": [],
    "id": "grammatik-wegbeschreibungen-orte",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/wegbeschreibungen-orte.html",
    "thumb": "assets/thumbnails/grammatik-wegbeschreibungen-orte.jpg"
  },
  {
    "title": "الأفعال الانعكاسية — نسخة للطباعة",
    "order": 10,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مرجع Reflexive Verben بتنسيق A4 جاهز للطباعة.",
    "badges": ["قابل للطباعة"],
    "id": "grammatik-reflexive-verben-print",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/reflexive-verben-print.html",
    "thumb": "assets/thumbnails/grammatik-reflexive-verben-print.jpg"
  },
  {
    "title": "Das Perfekt — الماضي التام في الألمانية",
    "order": 11,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "شرح شامل لتكوين واستخدام زمن الماضي التام.",
    "badges": [],
    "id": "grammatik-das-perfekt",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/das-perfekt.html",
    "thumb": "assets/thumbnails/grammatik-das-perfekt.jpg"
  },
  {
    "title": "الزمن الماضي Perfekt",
    "order": 12,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "نظرة عامة مبسطة على زمن الـ Perfekt.",
    "badges": [],
    "id": "grammatik-perfekt-uebersicht",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/perfekt-uebersicht.html",
    "thumb": "assets/thumbnails/grammatik-perfekt-uebersicht.jpg"
  },
  {
    "title": "Modalverben im Präteritum",
    "order": 13,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "تصريف الأفعال الناقصة في الماضي البسيط، مع تمارين محلولة.",
    "badges": [],
    "id": "grammatik-modalverben-praeteritum",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/modalverben-praeteritum.html",
    "thumb": "assets/thumbnails/grammatik-modalverben-praeteritum.jpg"
  },
  {
    "title": "Perfekt mit Modalverben — الجزء الثاني",
    "order": 14,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "دمج زمن الـ Perfekt مع الأفعال الناقصة — مستوى A2.",
    "badges": ["الجزء ٢"],
    "id": "grammatik-perfekt-mit-modalverben",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/perfekt-mit-modalverben.html",
    "thumb": "assets/thumbnails/grammatik-perfekt-mit-modalverben.jpg"
  },
  {
    "title": "سلّم المقارنة — Komparativ & Superlativ",
    "order": 15,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "قواعد المقارنة والتفضيل مع تصريف الصفة في حالة Dativ.",
    "badges": [],
    "id": "grammatik-komparativ-superlativ",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/komparativ-superlativ.html",
    "thumb": "assets/thumbnails/grammatik-komparativ-superlativ.jpg"
  },
  {
    "title": "weil · denn · nämlich · wenn — أدوات الربط",
    "order": 16,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أدوات الربط الأربع مع مقارنة wenn بـ wann وals، وأمثلة صوتية وتمارين ترتيب الجملة.",
    "badges": [],
    "id": "grammatik-konnektoren-weil-denn-wenn",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/konnektoren-weil-denn-wenn.html",
    "thumb": "assets/thumbnails/grammatik-konnektoren-weil-denn-wenn.jpg"
  },
  {
    "title": "محطة dass — أداة الربط",
    "order": 17,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الفرق بين dass و das و ob و weil و damit.",
    "badges": [],
    "id": "grammatik-dass-konnektor",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/dass-konnektor.html",
    "thumb": "assets/thumbnails/grammatik-dass-konnektor.jpg"
  },
  {
    "title": "حروف الجر وأدوات الربط",
    "order": 18,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مرجع تفاعلي شامل مع أمثلة ونطق وترجمة ثلاثية اللغة.",
    "badges": [],
    "id": "grammatik-praepositionen-konnektoren",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/praepositionen-konnektoren.html",
    "thumb": "assets/thumbnails/grammatik-praepositionen-konnektoren.jpg"
  },
  {
    "title": "obwohl · trotzdem · damit · um…zu — التنازل والغاية",
    "order": 19,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الفرق بين أدوات التنازل والغاية الأربع، مع مخطط قرار وأمثلة صوتية وتمارين.",
    "badges": [],
    "id": "grammatik-konnektoren-obwohl-trotzdem-damit",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/konnektoren-obwohl-trotzdem-damit.html",
    "thumb": "assets/thumbnails/grammatik-konnektoren-obwohl-trotzdem-damit.jpg"
  },
  {
    "title": "الجنيتيف (Genitiv) — شرح شامل",
    "order": 20,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "حالة الإضافة/الملكية في الألمانية بشرح شامل.",
    "badges": [],
    "id": "grammatik-genitiv",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/genitiv.html",
    "thumb": "assets/thumbnails/grammatik-genitiv.jpg"
  },
  {
    "title": "الجنيتيف المتقدم — اختبار ذاتي",
    "order": 21,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مفاهيم متقدمة في الجنيتيف مع اختبار ذاتي شامل.",
    "badges": ["اختبار ذاتي"],
    "id": "grammatik-genitiv-advanced-test",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/genitiv-advanced-test.html",
    "thumb": "assets/thumbnails/grammatik-genitiv-advanced-test.jpg"
  },
  {
    "title": "تصريف الصفات — Adjektivdeklination",
    "order": 22,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "التصريف الثلاثة للصفة الألمانية: الضعيف والمختلط والقوي، لمستوى A2/B1.",
    "badges": [],
    "id": "grammatik-adjektivdeklination",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/adjektivdeklination.html",
    "thumb": "assets/thumbnails/grammatik-adjektivdeklination.jpg"
  },
  {
    "title": "welch- : welcher · welche · welches — أداة الاستفهام والوصل",
    "order": 23,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "شرح شامل لأداة welch- بكل استخداماتها: الاستفهام، والنسب (الوصل)، والتنكير، والتعجب — مع جداول تصريف وتمارين واختبار ختامي.",
    "badges": ["شامل"],
    "id": "grammatik-welch-interrogativ-relativ-indefinit",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/welch-interrogativ-relativ-indefinit.html",
    "thumb": "assets/thumbnails/grammatik-welch-interrogativ-relativ-indefinit.jpg"
  },

  // ────────────────────────────────────────────────────────────
  // قسم: عائلات الأفعال — إصدار الليل  (category: "family-verben")
  // ────────────────────────────────────────────────────────────
  {
    "title": "Backstube bei Nacht — عائلة الفعل backen",
    "order": 1,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "تصريف، تراكيب، وحوار حقيقي حول فعل الخَبز.",
    "badges": ["وضع ليلي"],
    "id": "family-verben-backen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "family-verben",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/family-verben/backen.html",
    "thumb": "assets/thumbnails/family-verben-backen.jpg"
  },
  {
    "title": "Gefühlswelt bei Nacht — عائلة الفعل fühlen",
    "order": 2,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "تصريف كامل، حوار طبيب حقيقي، وحالات إعرابية متنوعة.",
    "badges": ["وضع ليلي"],
    "id": "family-verben-fuehlen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "family-verben",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/family-verben/fuehlen.html",
    "thumb": "assets/thumbnails/family-verben-fuehlen.jpg"
  },
  {
    "title": "Klangraum bei Nacht — عائلة الفعل hören",
    "order": 3,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أفعال منفصلة وغير منفصلة، وبادئة ge- الأحفورية النادرة.",
    "badges": ["وضع ليلي"],
    "id": "family-verben-hoeren",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "family-verben",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/family-verben/hoeren.html",
    "thumb": "assets/thumbnails/family-verben-hoeren.jpg"
  },
  {
    "title": "Säulenhalle bei Nacht — عائلة الفعل stehen",
    "order": 4,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "تصريف قوي غير منتظم، وحوار طلابي حقيقي.",
    "badges": ["وضع ليلي"],
    "id": "family-verben-stehen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "family-verben",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/family-verben/stehen.html",
    "thumb": "assets/thumbnails/family-verben-stehen.jpg"
  },
  {
    "title": "Galerie bei Nacht — عائلة الفعل stellen",
    "order": 5,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أكثر من عشرين فعلًا مشتقًا من stellen، بالحالة الإعرابية لكل فعل ونطق وجمل حقيقية.",
    "badges": ["وضع ليلي"],
    "id": "family-verben-stellen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "family-verben",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/family-verben/stellen.html",
    "thumb": "assets/thumbnails/family-verben-stellen.jpg"
  },
  {
    "title": "مجرّة kommen — عائلة أفعال المجيء",
    "order": 6,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "فعل kommen وعائلته: ankommen، bekommen، mitkommen، vorkommen، auskommen، entkommen، zurückkommen — مع الحالة الإعرابية والتصريف والنطق.",
    "badges": [],
    "id": "family-verben-kommen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "family-verben",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/family-verben/kommen.html",
    "thumb": "assets/thumbnails/family-verben-kommen.jpg"
  },
  {
    "title": "gehen وعائلته — الأفعال المنفصلة وغير المنفصلة",
    "order": 7,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "فعل gehen وعائلة بادئاته: vorgehen، ausgehen، angehen، umgehen، nachgehen، entgehen، durchgehen، untergehen — تصريف وحالة ونطق.",
    "badges": [],
    "id": "family-verben-gehen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "family-verben",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/family-verben/gehen.html",
    "thumb": "assets/thumbnails/family-verben-gehen.jpg"
  },
  {
    "title": "nehmen وعائلته — تغيّر الحرف الجذري والأفعال المنفصلة",
    "order": 8,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "فعل nehmen وعائلة بادئاته: annehmen، mitnehmen، teilnehmen، wahrnehmen، abnehmen، zunehmen، entnehmen — تغيّر الحرف الجذري، الحالة، والنطق.",
    "badges": [],
    "id": "family-verben-nehmen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "family-verben",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/family-verben/nehmen.html",
    "thumb": "assets/thumbnails/family-verben-nehmen.jpg"
  },

  // ────────────────────────────────────────────────────────────
  // قسم: المفردات المصورة  (category: "wortschatz")
  // ────────────────────────────────────────────────────────────
  {
    "title": "Deutsche Tiere — الحيوانات",
    "order": 1,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أسماء الحيوانات بالألمانية مع رسومات ونطق.",
    "badges": [],
    "id": "wortschatz-tiere",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "wortschatz",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/wortschatz/tiere.html",
    "thumb": "assets/thumbnails/wortschatz-tiere.jpg"
  },
  {
    "title": "Deutsche Kleidung — الملابس",
    "order": 2,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مفردات الملابس والإكسسوارات اليومية.",
    "badges": [],
    "id": "wortschatz-kleidung",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "wortschatz",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/wortschatz/kleidung.html",
    "thumb": "assets/thumbnails/wortschatz-kleidung.jpg"
  },
  {
    "title": "Elektrogeräte — الأجهزة الإلكترونية",
    "order": 3,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أسماء الأجهزة الكهربائية والإلكترونية الشائعة.",
    "badges": [],
    "id": "wortschatz-elektronik",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "wortschatz",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/wortschatz/elektronik.html",
    "thumb": "assets/thumbnails/wortschatz-elektronik.jpg"
  },
  {
    "title": "Obst und Gemüse — الفواكه والخضروات",
    "order": 4,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مفردات الفواكه والخضروات مع الأرتيكل.",
    "badges": [],
    "id": "wortschatz-obst-gemuese",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "wortschatz",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/wortschatz/obst-gemuese.html",
    "thumb": "assets/thumbnails/wortschatz-obst-gemuese.jpg"
  },
  {
    "title": "Deutsche Möbel — الأثاث",
    "order": 5,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أثاث المنزل الأساسي وتسمياته بالألمانية.",
    "badges": [],
    "id": "wortschatz-moebel",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "wortschatz",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/wortschatz/moebel.html",
    "thumb": "assets/thumbnails/wortschatz-moebel.jpg"
  },
  {
    "title": "Küchengeräte — أدوات المطبخ",
    "order": 6,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أدوات المطبخ مع الأرتيكل والنطق والرسومات.",
    "badges": [],
    "id": "wortschatz-kueche",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "wortschatz",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/wortschatz/kueche.html",
    "thumb": "assets/thumbnails/wortschatz-kueche.jpg"
  },
  {
    "title": "Natur auf Deutsch — الطبيعة",
    "order": 7,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مفردات الطبيعة والمناظر الطبيعية مع رسومات توضيحية.",
    "badges": [],
    "id": "wortschatz-natur",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "wortschatz",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/wortschatz/natur.html",
    "thumb": "assets/thumbnails/wortschatz-natur.jpg"
  },
  {
    "title": "أطلس الكلمات الألمانية — ٣٠ كلمة لا تُترجم حرفيًا",
    "order": 8,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "٣٠ كلمة ألمانية مستحيلة الترجمة الحرفية، مع شرح عربي مفصّل وجمل توضيحية ونطق صوتي أصلي.",
    "badges": [],
    "id": "wortschatz-atlas-30-woerter",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "wortschatz",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/wortschatz/atlas-30-woerter.html",
    "thumb": "assets/thumbnails/wortschatz-atlas-30-woerter.jpg"
  },

  // ────────────────────────────────────────────────────────────
  // قسم: قصص ومحادثات حقيقية  (category: "stories")
  // ────────────────────────────────────────────────────────────
  {
    "title": "Alltagsdeutsch — محادثات يومية",
    "order": 1,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "منصة تفاعلية لمحادثات ألمانية يومية مع الترجمة والنطق.",
    "badges": [],
    "id": "stories-alltagsdeutsch",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "stories",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/stories/alltagsdeutsch.html",
    "thumb": "assets/thumbnails/stories-alltagsdeutsch.jpg"
  },
  {
    "title": "أهم أسئلة A1 Sprechen",
    "order": 2,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أسئلة اختبار المحادثة الرسمية لمستوى A1.",
    "badges": ["تحضير اختبار"],
    "id": "stories-a1-sprechen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "stories",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/stories/a1-sprechen.html",
    "thumb": "assets/thumbnails/stories-a1-sprechen.jpg"
  },
  {
    "title": "أهم أسئلة A2 Sprechen",
    "order": 3,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أسئلة اختبار المحادثة الرسمية لمستوى A2.",
    "badges": ["تحضير اختبار"],
    "id": "stories-a2-sprechen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "stories",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/stories/a2-sprechen.html",
    "thumb": "assets/thumbnails/stories-a2-sprechen.jpg"
  },
  {
    "title": "Deutsch mit Mira — A2",
    "order": 4,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "محتوى قصصي متكامل لتعلم الألمانية بمستوى A2.",
    "badges": [],
    "id": "stories-deutsch-mit-mira",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "stories",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/stories/deutsch-mit-mira.html",
    "thumb": "assets/thumbnails/stories-deutsch-mit-mira.jpg"
  }
  ]
};
