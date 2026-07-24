/**
 * lesson-bridge.js
 * ============================================================================
 * سكربت "الجسر" الذي يربط كل درس مستقل بمنصة أكاديمية الألمانية.
 *
 * لماذا Shadow DOM؟
 * كل درس من الـ 52 درسًا مصمَّم بشكل مستقل بالكامل (خطوط، ألوان، CSS خاصة به).
 * لضمان عدم تعارض هذا العنصر العائم مع أي تصميم مهما كان، نعزله بالكامل داخل
 * Shadow Root منفصل (Encapsulation حقيقي): لا تصله أي أنماط من صفحة الدرس،
 * ولا تتسرّب أنماطه إلى صفحة الدرس. هذا فصل تام للاهتمامات (Separation of Concerns).
 *
 * مسؤوليات هذا الملف:
 *   1) عرض زر عائم صغير "العودة للرئيسية" في كل صفحة درس.
 *   2) عرض زر "تحديد كمكتمل" يخزّن تقدّم المستخدم في localStorage.
 *   3) تسجيل "آخر زيارة" لكل درس تلقائيًا (لدعم ميزة "أكمل من حيث توقفت").
 *   4) مزامنة السمة (فاتح/داكن) مع اختيار المستخدم في الصفحة الرئيسية.
 *
 * مفتاح التخزين المشترك: "deutsch_academy_progress"
 * الشكل: { [lessonId]: { done: boolean, visited: true, lastVisit: number } }
 */
(function () {
  "use strict";

  var STORAGE_KEY = "deutsch_academy_progress";
  var THEME_KEY = "deutsch_academy_theme";

  // نقرأ الإعدادات من data-* الموجودة على وسم السكربت نفسه
  var currentScript = document.currentScript;
  var lessonId = currentScript.getAttribute("data-lesson-id") || "unknown-lesson";
  var category = currentScript.getAttribute("data-category") || "";
  var title = currentScript.getAttribute("data-title") || document.title;
  var root = currentScript.getAttribute("data-root") || "../../";
  var homeUrl = root + "index.html";
  var isRTL = document.documentElement.getAttribute("dir") === "rtl";

  // --------------------------------------------------------------------------
  // أدوات صغيرة للتعامل الآمن مع localStorage (قد يفشل في بعض بيئات المعاينة)
  // --------------------------------------------------------------------------
  function readProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }
  function writeProgress(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      /* تجاهل بصمت في حال عدم توفر التخزين */
    }
  }
  function readTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  // تسجيل الزيارة فور تحميل الدرس (لإحصائية "استكملت X من 52 درسًا")
  var progress = readProgress();
  var entry = progress[lessonId] || {};
  entry.visited = true;
  entry.category = category;
  entry.lastVisit = Date.now();
  progress[lessonId] = entry;
  writeProgress(progress);

  // --------------------------------------------------------------------------
  // بناء العنصر العائم داخل Shadow DOM
  // --------------------------------------------------------------------------
  function buildWidget() {
    var host = document.createElement("div");
    host.id = "deutsch-bridge-host";
    // تموضع العنصر عبر أنماط مضمّنة مباشرة (أعلى أولوية ولا تتأثر بصفحة الدرس)
    host.style.cssText =
      "all:initial; position:fixed; z-index:2147483000; bottom:18px;" +
      (isRTL ? "left:18px;" : "right:18px;") +
      " font-family: 'IBM Plex Sans Arabic','Segoe UI',sans-serif;";
    document.body.appendChild(host);

    var shadow = host.attachShadow({ mode: "open" });

    var theme = readTheme() === "light" ? "light" : "dark";

    var style = document.createElement("style");
    style.textContent = [
      ":host{ all:initial; }",
      "*{ box-sizing:border-box; }",
      ".wrap{",
      "  direction:" + (isRTL ? "rtl" : "ltr") + ";",
      "  display:flex; align-items:center; gap:6px;",
      "  padding:6px; border-radius:999px;",
      "  backdrop-filter:blur(16px) saturate(160%);",
      "  -webkit-backdrop-filter:blur(16px) saturate(160%);",
      "  box-shadow:0 8px 28px -6px rgba(0,0,0,.35), 0 2px 8px -2px rgba(0,0,0,.25);",
      "  transition:background .25s ease, border-color .25s ease, transform .2s ease;",
      "  transform:translateY(0);",
      "}",
      ".wrap.theme-dark{ background:rgba(20,22,28,.82); border:1px solid rgba(255,255,255,.09); }",
      ".wrap.theme-light{ background:rgba(255,255,255,.86); border:1px solid rgba(20,20,20,.08); }",
      "button{",
      "  all:unset; display:flex; align-items:center; justify-content:center; gap:6px;",
      "  cursor:pointer; padding:9px 14px; border-radius:999px;",
      "  font-size:12.5px; font-weight:600; white-space:nowrap;",
      "  transition:background .15s ease, color .15s ease, opacity .15s ease;",
      "}",
      "button:focus-visible{ outline:2px solid #C7A54C; outline-offset:2px; }",
      "svg{ width:16px; height:16px; flex:none; }",
      ".theme-dark button{ color:#E9EAEE; }",
      ".theme-dark button:hover{ background:rgba(255,255,255,.08); }",
      ".theme-light button{ color:#20222B; }",
      ".theme-light button:hover{ background:rgba(0,0,0,.06); }",
      ".done-btn.is-done.theme-dark{ background:rgba(199,165,76,.18); color:#E9C874; }",
      ".done-btn.is-done.theme-light{ background:rgba(199,165,76,.16); color:#8A6A17; }",
      ".sep{ width:1px; align-self:stretch; margin:6px 0; }",
      ".theme-dark .sep{ background:rgba(255,255,255,.12); }",
      ".theme-light .sep{ background:rgba(0,0,0,.1); }",
      ".label{ display:none; }",
      "@media (min-width:560px){ .label{ display:inline; } }",
      "@media (prefers-reduced-motion: reduce){ *{ transition:none !important; } }",
    ].join("\n");
    shadow.appendChild(style);

    var wrap = document.createElement("div");
    wrap.className = "wrap theme-" + theme;

    var homeBtn = document.createElement("button");
    homeBtn.setAttribute("aria-label", "العودة إلى الصفحة الرئيسية لأكاديمية الألمانية");
    homeBtn.title = "العودة للرئيسية";
    homeBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H9.5a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-9"/></svg>' +
      '<span class="label">الرئيسية</span>';
    homeBtn.addEventListener("click", function () {
      window.location.href = homeUrl;
    });

    var sep = document.createElement("div");
    sep.className = "sep";

    var doneBtn = document.createElement("button");
    doneBtn.className = "done-btn theme-" + theme;
    function renderDoneState() {
      var isDone = !!(readProgress()[lessonId] || {}).done;
      doneBtn.classList.toggle("is-done", isDone);
      doneBtn.setAttribute("aria-pressed", String(isDone));
      doneBtn.title = isDone ? "تم إتمام هذا الدرس ✓" : "تحديد هذا الدرس كمكتمل";
      doneBtn.innerHTML =
        (isDone
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>'
          : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/></svg>') +
        '<span class="label">' + (isDone ? "مكتمل" : "إتمام الدرس") + "</span>";
    }
    doneBtn.addEventListener("click", function () {
      var p = readProgress();
      var e = p[lessonId] || {};
      e.done = !e.done;
      e.category = category;
      e.title = title;
      e.visited = true;
      e.lastVisit = Date.now();
      p[lessonId] = e;
      writeProgress(p);
      renderDoneState();
    });
    renderDoneState();

    wrap.appendChild(homeBtn);
    wrap.appendChild(sep);
    wrap.appendChild(doneBtn);
    shadow.appendChild(wrap);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildWidget);
  } else {
    buildWidget();
  }
})();
