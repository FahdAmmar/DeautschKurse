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
    "subtitle": "من الأبجدية والتحيات إلى النفي والأفعال المنفصلة والمهن — ١٩ درسًا متكاملًا",
    "level": "A1",
    "icon": "seed",
    "key": "a1",            // (لا تُغيّر) معرّف داخلي تعتمد عليه الدروس
    "folder": "a1"       // (لا تُغيّر) اسم مجلد هذا القسم داخل Deutsch/
  },
  {
    "title": "Lektion A2",
    "order": 2,          // رقم ترتيب هذا القسم بين الأقسام — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا القسم بالكامل من الموقع
    "subtitle": "مسار نحوي متكامل من ١٥ درسًا شاملًا، من زمن Perfekt حتى الضمائر غير المحددة",
    "level": "A2",
    "icon": "stack",
    "key": "lektion-a2",            // (لا تُغيّر) معرّف داخلي تعتمد عليه الدروس
    "folder": "lektion-a2"       // (لا تُغيّر) اسم مجلد هذا القسم داخل Deutsch/
  },
  {
    "title": "مسار A2 الكامل — دورة من ١٢ محطة",
    "order": 3,          // رقم ترتيب هذا القسم بين الأقسام — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا القسم بالكامل من الموقع
    "subtitle": "رحلة متسلسلة من التعارف حتى السفر، محطة تلو الأخرى",
    "level": "A2",
    "icon": "route",
    "key": "a2-kurs",            // (لا تُغيّر) معرّف داخلي تعتمد عليه الدروس
    "folder": "a2-kurs"       // (لا تُغيّر) اسم مجلد هذا القسم داخل Deutsch/
  },
  {
    "title": "مرجع القواعد — دفتر الملاحظات الكامل",
    "order": 4,          // رقم ترتيب هذا القسم بين الأقسام — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا القسم بالكامل من الموقع
    "subtitle": "٢٤ مرجعًا تفاعليًا لأدق تفاصيل القواعد الألمانية",
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
  {
    "title": "nicht أم kein؟ — أدوات النفي",
    "order": 10,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "درس تفاعلي شامل حول أدوات النفي في اللغة الألمانية: nicht وkein — القواعد، الأمثلة، الحوارات، والتمارين.",
    "badges": [],
    "id": "a1-lesson-10-negation-nicht-kein",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-10-negation-nicht-kein.html",
    "thumb": "assets/thumbnails/a1-lesson-10-negation-nicht-kein.jpg"
  },
  {
    "title": "الأفعال المنفصلة — Trennbare Verben",
    "order": 11,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "قاعدة الأفعال المنفصلة: كيف تنفصل البادئة وتنتقل إلى نهاية الجملة، أفعال الروتين اليومي الأساسية، وأداة تفاعلية لتفكيك الجملة.",
    "badges": [],
    "id": "a1-lesson-11-trennbare-verben",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-11-trennbare-verben.html",
    "thumb": "assets/thumbnails/a1-lesson-11-trennbare-verben.jpg"
  },
  {
    "title": "الطقس والفصول — Wetter, Jahreszeiten & weil",
    "order": 12,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مفردات الطقس والفصول الأربعة، جملة es الشكلية (es regnet / es schneit)، ومقدّمة إلى أداة الربط weil وقاعدة الفعل في نهاية الجملة الثانوية.",
    "badges": [],
    "id": "a1-lesson-12-wetter-jahreszeiten",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-12-wetter-jahreszeiten.html",
    "thumb": "assets/thumbnails/a1-lesson-12-wetter-jahreszeiten.jpg"
  },
  {
    "title": "أسئلة W وترتيب الجملة — W-Fragen & Satzstellung",
    "order": 13,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أسئلة الاستفهام السبع (wer/was/wo/wann/warum/wie/welche) وترتيب الجملة الألمانية: قاعدة الفعل في الموضع الثاني، مع أداة بناء تفاعلية.",
    "badges": [],
    "id": "a1-lesson-13-w-fragen-satzstellung",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-13-w-fragen-satzstellung.html",
    "thumb": "assets/thumbnails/a1-lesson-13-w-fragen-satzstellung.jpg"
  },
  {
    "title": "وسائل النقل والسفر — Verkehrsmittel, müssen & können",
    "order": 14,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "مفردات وسائل النقل والسفر، الأفعال الوجوبية müssen وkönnen، وقاعدة ترتيب الفعل في نهاية الجملة (Satzklammer)، مع محطة قطار تفاعلية.",
    "badges": [],
    "id": "a1-lesson-14-verkehrsmittel",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-14-verkehrsmittel.html",
    "thumb": "assets/thumbnails/a1-lesson-14-verkehrsmittel.jpg"
  },
  {
    "title": "الجنسيات واللغات — Länder, Sprachen & Herkunft",
    "order": 15,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الدول والجنسيات واللغات، تثبيت أسئلة W مع woher/wohin/wo، وصيغتا Ich komme aus / Ich spreche، مع خريطة عالمية تفاعلية.",
    "badges": [],
    "id": "a1-lesson-15-laender-sprachen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-15-laender-sprachen.html",
    "thumb": "assets/thumbnails/a1-lesson-15-laender-sprachen.jpg"
  },
  {
    "title": "الاتجاهات والمدينة — Wegbeschreibung",
    "order": 16,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "صيغة الأمر (Imperativ) للمخاطَبين du وihr وSie، وتثبيت حروف الجر المكانية (Wechselpräpositionen وحروف الاتجاه)، مع خريطة مدينة تفاعلية كاملة.",
    "badges": [],
    "id": "a1-lesson-16-wegbeschreibung",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-16-wegbeschreibung.html",
    "thumb": "assets/thumbnails/a1-lesson-16-wegbeschreibung.jpg"
  },
  {
    "title": "الروتين اليومي والأفعال المنفصلة",
    "order": 17,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الروتين اليومي والأفعال المنفصلة، مع جدول يوم تفاعلي وأداة منهجية لتفكيك الفعل وتطبيقات عملية.",
    "badges": [],
    "id": "a1-lesson-17-tagesablauf",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-17-tagesablauf.html",
    "thumb": "assets/thumbnails/a1-lesson-17-tagesablauf.jpg"
  },
  {
    "title": "الهوايات ووقت الفراغ — gern/lieber/am liebsten",
    "order": 18,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الهوايات ووقت الفراغ، مع شرح gern/lieber/am liebsten وربطها بالمقارنة، ولوحة هوايات وأداة تفضيلات تفاعلية.",
    "badges": [],
    "id": "a1-lesson-18-hobbys-freizeit",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-18-hobbys-freizeit.html",
    "thumb": "assets/thumbnails/a1-lesson-18-hobbys-freizeit.jpg"
  },
  {
    "title": "المهن والعمل — kein مقابل nicht",
    "order": 19,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "المهن والعمل، مع شرح الفرق بين kein وnicht، وبطاقات مهن وأداة نفي تفاعلية.",
    "badges": [],
    "id": "a1-lesson-19-berufe",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "a1",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/a1/lesson-19-berufe.html",
    "thumb": "assets/thumbnails/a1-lesson-19-berufe.jpg"
  },

  // ────────────────────────────────────────────────────────────
  // قسم: Lektion A2 — مسار نحوي شامل من ١٥ درسًا  (category: "lektion-a2")
  // ────────────────────────────────────────────────────────────
  {
    "title": "الدرس ١ — زمن الـ Perfekt: الحديث عن الماضي",
    "order": 1,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "دليل شامل لزمن الـ Perfekt: تكوين Partizip II بكل فئاته، haben أم sein، ترتيب الكلمات والنفي والأسئلة، أكثر من ٧٠ فعلًا أساسيًا، ونطق صوتي تفاعلي.",
    "badges": [],
    "id": "lektion-a2-01-perfekt",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-01-perfekt.html",
    "thumb": "assets/thumbnails/lektion-a2-01-perfekt.jpg"
  },
  {
    "title": "الدرس ٢ — الأفعال الانعكاسية الشاملة",
    "order": 2,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "دليل شامل للأفعال الانعكاسية الألمانية: ١٦ فعلًا، حالتا Akkusativ وDativ، حروف الجر الثابتة، الماضي التام، وساعة يوم تفاعلية.",
    "badges": [],
    "id": "lektion-a2-02-reflexive-verben",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-02-reflexive-verben.html",
    "thumb": "assets/thumbnails/lektion-a2-02-reflexive-verben.jpg"
  },
  {
    "title": "الدرس ٣ — الأفعال الناقصة الشاملة",
    "order": 3,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "دليل شامل للأفعال الناقصة (können, müssen, wollen, dürfen, sollen, möchten) والأفعال المساعدة، عبر تجربة عدسة كاميرا تفاعلية ونطق صوتي.",
    "badges": [],
    "id": "lektion-a2-03-modalverben",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-03-modalverben.html",
    "thumb": "assets/thumbnails/lektion-a2-03-modalverben.jpg"
  },
  {
    "title": "الدرس ٤ — دليل حروف الجر الشامل (Akkusativ · Dativ · Genitiv · Wechsel)",
    "order": 4,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "كل حروف الجر الألمانية مصنّفة حسب الحالة: Akkusativ وDativ وGenitiv وWechselpräpositionen، مع بوصلات تفاعلية ومئات الأمثلة.",
    "badges": [],
    "id": "lektion-a2-04-praepositionen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-04-praepositionen.html",
    "thumb": "assets/thumbnails/lektion-a2-04-praepositionen.jpg"
  },
  {
    "title": "الدرس ٥ — أفعال الوضع والحركة: stehen · liegen · stellen · legen",
    "order": 5,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الأفعال الأربعة stehen وliegen وstellen وlegen بالتفصيل: الفرق بين وصف الحالة والحركة، حروف الجر ثنائية الاتجاه، وورشة قرار تفاعلية.",
    "badges": [],
    "id": "lektion-a2-05-wechselverben",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-05-wechselverben.html",
    "thumb": "assets/thumbnails/lektion-a2-05-wechselverben.jpg"
  },
  {
    "title": "الدرس ٦ — إتمام عائلة أفعال الوضع: hängen · sitzen · setzen",
    "order": 6,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "إتمام عائلة أفعال الوضع مع hängen وsitzen وsetzen، بما فيها sich setzen الانعكاسي، والفرق بين Dativ وAkkusativ.",
    "badges": [],
    "id": "lektion-a2-06-haengen-sitzen-setzen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-06-haengen-sitzen-setzen.html",
    "thumb": "assets/thumbnails/lektion-a2-06-haengen-sitzen-setzen.jpg"
  },
  {
    "title": "الدرس ٧ — الجمل الفرعية الشاملة (Nebensätze)",
    "order": 7,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الجمل الفرعية الألمانية بالتفصيل: السبب (weil/denn)، أنّ (dass)، الشرط والزمن (wenn/als/wann)، والتنازل (obwohl/trotzdem)، مع معمل بناء جمل تفاعلي.",
    "badges": [],
    "id": "lektion-a2-07-nebensaetze",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-07-nebensaetze.html",
    "thumb": "assets/thumbnails/lektion-a2-07-nebensaetze.jpg"
  },
  {
    "title": "الدرس ٨ — المقارنة والتفضيل الشامل (Komparativ und Superlativ)",
    "order": 8,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "درجات المقارنة: Positiv وKomparativ وSuperlativ، قاعدة الـ Umlaut، الصفات الشاذة، والاستخدام في الجملة، مع سلّم مقارنة تفاعلي.",
    "badges": [],
    "id": "lektion-a2-08-komparativ-superlativ",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-08-komparativ-superlativ.html",
    "thumb": "assets/thumbnails/lektion-a2-08-komparativ-superlativ.jpg"
  },
  {
    "title": "الدرس ٩ — الحاضر التام الشامل (Perfekt & Partizip)",
    "order": 9,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الحاضر التام بالتفصيل: haben أم sein، صيغة Partizip II للأفعال الضعيفة والقوية، الأفعال بلا ge- والأفعال المنفصلة، مع معمل بناء تفاعلي.",
    "badges": [],
    "id": "lektion-a2-09-perfekt-partizip",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-09-perfekt-partizip.html",
    "thumb": "assets/thumbnails/lektion-a2-09-perfekt-partizip.jpg"
  },
  {
    "title": "الدرس ١٠ — الماضي البسيط الشامل (Präteritum)",
    "order": 10,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "زمن الماضي البسيط: تصريف الأفعال الضعيفة والقوية، haben وsein والأفعال الناقصة، والفرق بين اللغة المكتوبة والمحكية، مع ورشة تصريف تفاعلية.",
    "badges": [],
    "id": "lektion-a2-10-praeteritum",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-10-praeteritum.html",
    "thumb": "assets/thumbnails/lektion-a2-10-praeteritum.jpg"
  },
  {
    "title": "الدرس ١١ — تصريف الصفات (Adjektivdeklination)",
    "order": 11,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "تصريف الصفات الألمانية بعد der/die/das، ein/eine، وبدون أداة، في حالتي Akkusativ وDativ.",
    "badges": [],
    "id": "lektion-a2-11-adjektivdeklination",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-11-adjektivdeklination.html",
    "thumb": "assets/thumbnails/lektion-a2-11-adjektivdeklination.jpg"
  },
  {
    "title": "الدرس ١٢ — الجمل الموصولة الشاملة (Relativsätze)",
    "order": 12,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الجمل الموصولة الألمانية وأداة الوصل حسب الحالة والجنس والعدد، مع نطق وتمارين.",
    "badges": [],
    "id": "lektion-a2-12-relativsaetze",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-12-relativsaetze.html",
    "thumb": "assets/thumbnails/lektion-a2-12-relativsaetze.jpg"
  },
  {
    "title": "الدرس ١٣ — أدوات الربط الشاملة (Konnektoren)",
    "order": 13,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "أدوات الربط deshalb وtrotzdem وaußerdem وsondern وdenn، مع أمثلة ورسوميات تفاعلية.",
    "badges": [],
    "id": "lektion-a2-13-konnektoren",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-13-konnektoren.html",
    "thumb": "assets/thumbnails/lektion-a2-13-konnektoren.jpg"
  },
  {
    "title": "الدرس ١٤ — الأفعال مع حروف الجر (Präpositionale Verben)",
    "order": 14,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الأفعال المرتبطة بحروف الجر الثابتة مع dass والجمل الموصولة، مع رسوميات ونطق وتمارين.",
    "badges": [],
    "id": "lektion-a2-14-praepositionale-verben",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-14-praepositionale-verben.html",
    "thumb": "assets/thumbnails/lektion-a2-14-praepositionale-verben.jpg"
  },
  {
    "title": "الدرس ١٥ — الضمائر غير المحددة (Indefinitpronomen)",
    "order": 15,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "الضمائر غير المحددة man وjemand وniemand وetwas ونichts وalle، مع أمثلة ورسوميات وتمارين.",
    "badges": [],
    "id": "lektion-a2-15-indefinitpronomen",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "lektion-a2",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/lektion-a2/lektion-15-indefinitpronomen.html",
    "thumb": "assets/thumbnails/lektion-a2-15-indefinitpronomen.jpg"
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
  // قسم: مرجع القواعد — دفتر الملاحظات الكامل  (category: "grammatik")
  // ────────────────────────────────────────────────────────────
  {
    "title": "ملف القضية — أدوات الاستفهام الألمانية",
    "order": 3,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 4,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 5,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 1,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 2,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 7,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 8,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 6,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 11,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 9,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 13,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 15,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 16,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 14,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 17,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 18,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 19,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 20,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 22,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 23,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 21,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
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
    "order": 24,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "شرح شامل لأداة welch- بكل استخداماتها: الاستفهام، والنسب (الوصل)، والتنكير، والتعجب — مع جداول تصريف وتمارين واختبار ختامي.",
    "badges": ["شامل"],
    "id": "grammatik-welch-interrogativ-relativ-indefinit",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/welch-interrogativ-relativ-indefinit.html",
    "thumb": "assets/thumbnails/grammatik-welch-interrogativ-relativ-indefinit.jpg"
  },
  {
    "title": "صيغة الأمر الشاملة — Imperativ",
    "order": 10,          // ترتيب هذا الدرس داخل قسمه — الأصغر يظهر أولًا
    "enabled": true,          // اجعلها false لإخفاء هذا الدرس من الموقع دون حذف ملفه
    "desc": "شرح شامل وتفاعلي لصيغة الأمر الألمانية Imperativ لصيغ du وihr وSie، بأمثلة صوتية وتمارين تفاعلية.",
    "badges": [],
    "id": "grammatik-imperativ",            // (لا تُغيّر) معرّف فريد يُستخدم لتتبّع تقدّم المستخدم
    "category": "grammatik",       // (لا تُغيّر) يجب أن يطابق "key" أحد الأقسام أعلاه
    "path": "Deutsch/grammatik/imperativ.html",
    "thumb": "assets/thumbnails/grammatik-imperativ.jpg"
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
