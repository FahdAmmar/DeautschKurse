/**
 * main.js — منطق الصفحة الرئيسية لأكاديمية الألمانية
 * ============================================================================
 * هذا الملف مسؤول عن كل تفاعل في الصفحة الرئيسية فقط (لا يمسّ صفحات الدروس،
 * التي يخدمها ملف منفصل: lesson-bridge.js). يقرأ البيانات من window.DEUTSCH_CATALOG
 * (المولَّد من migrate.py) ويُخرج الواجهة بالكامل من الأقسام والبطاقات والمسار.
 *
 * الأقسام:
 *   1) الأيقونات (مصدر واحد لكل الأيقونات المستخدمة)
 *   2) إدارة الوضع الليلي/النهاري
 *   3) القائمة المنسدلة للجوال
 *   4) قراءة/كتابة تقدّم المستخدم (localStorage) — نفس مفتاح lesson-bridge.js
 *   5) بناء الواجهة من الفهرس: الأقسام، البطاقات، المسار الزمني، الفلاتر
 *   6) البحث والفلترة
 *   7) الحركات عند التمرير (Scroll Reveal) وزر العودة للأعلى
 * ========================================================================= */
(function () {
  "use strict";

  var STORAGE_KEY = "deutsch_academy_progress";
  var THEME_KEY = "deutsch_academy_theme";

  /* ------------------------------------------------------------------------
     1) الأيقونات — SVG مضمّنة بخط رسم موحّد (stroke-based) بدل مكتبة خارجية
     لتفادي أي طلب شبكة إضافي وتسريع التحميل.
  ------------------------------------------------------------------------ */
  var ICONS = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H9.5a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-9"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-3.6-3.6"/></svg>',
    sun: '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"/></svg>',
    moon: '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.2A8.5 8.5 0 1 1 9.8 4a7 7 0 0 0 10.2 10.2Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    chevronUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg>',
    seed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c-4-2-6-5.5-6-9.5C6 7 9 4 12 3c3 1 6 4 6 8.5 0 4-2 7.5-6 9.5Z"/><path d="M12 21V10"/></svg>',
    route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.3"/><circle cx="18" cy="18" r="2.3"/><path d="M8 6h7a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h7"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m14.8 9.2-1.9 5.6-5.6 1.9 1.9-5.6z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/></svg>',
    moonStars: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M19 13.2A7.5 7.5 0 1 1 10.8 5a6 6 0 0 0 8.2 8.2Z"/><path d="M18 3.5v3M16.5 5h3"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1 .9-1.9 2-1.9h1.6c1.9 0 3.4-1.5 3.4-3.4C20 6.6 16.4 3 12 3Z"/><circle cx="7.5" cy="11" r="1.1"/><circle cx="9.5" cy="7.2" r="1.1"/><circle cx="14.5" cy="7.2" r="1.1"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 1 3.5 6.6L4 20l1.2-3.6A7.9 7.9 0 0 1 4 12Z"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11A8 8 0 1 0 18.5 16"/><path d="M20 5v6h-6"/></svg>',
    empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-3.6-3.6"/></svg>',
  };
  function icon(name) { return ICONS[name] || ""; }

  /* ------------------------------------------------------------------------
     2) إدارة الوضع الليلي/النهاري
     ملاحظة: التطبيق الفوري للسمة (قبل الرسم) يتم عبر سكربت مضمّن صغير في
     <head> بصفحة index.html لمنع "وميض السمة الخاطئة" (FOUC). هذا الجزء هنا
     يتولى فقط التبديل التفاعلي عند الضغط على الزر.
  ------------------------------------------------------------------------ */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }
  function initThemeToggle() {
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      applyTheme(currentTheme() === "light" ? "dark" : "light");
    });
  }

  /* ------------------------------------------------------------------------
     3) القائمة المنسدلة للجوال
  ------------------------------------------------------------------------ */
  function initMobileMenu() {
    var openBtn = document.getElementById("menuOpen");
    var closeBtn = document.getElementById("menuClose");
    var menu = document.getElementById("mobileMenu");
    if (!openBtn || !menu) return;
    function open() {
      menu.classList.add("is-open");
      menu.removeAttribute("aria-hidden");
      var firstLink = menu.querySelector("a");
      if (firstLink) firstLink.focus();
    }
    function close() {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      openBtn.focus();
    }
    openBtn.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) close();
    });
  }

  /* ------------------------------------------------------------------------
     4) تقدّم المستخدم — القراءة من نفس المفتاح الذي يكتب إليه lesson-bridge.js
  ------------------------------------------------------------------------ */
  function readProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
    catch (e) { return {}; }
  }
  function clearProgress() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  }

  /* ------------------------------------------------------------------------
     5) بناء الواجهة من الفهرس (window.DEUTSCH_CATALOG)
  ------------------------------------------------------------------------ */
  var CATALOG = window.DEUTSCH_CATALOG || { categories: [], lessons: [] };

  function lessonsByCategory(key) {
    return CATALOG.lessons
      .filter(function (l) { return l.category === key; })
      .sort(function (a, b) { return a.order - b.order; });
  }

  function renderBadges(badges) {
    if (!badges || !badges.length) return "";
    return badges.map(function (b) {
      var isPrint = b.indexOf("طباع") !== -1;
      return '<span class="c-badge' + (isPrint ? " is-print" : "") + '">' + b + "</span>";
    }).join("");
  }

  function renderCard(lesson, progress) {
    var isDone = !!(progress[lesson.id] || {}).done;
    var el = document.createElement("article");
    el.className = "c-card" + (isDone ? " is-done" : "");
    el.dataset.id = lesson.id;
    el.dataset.category = lesson.category;
    el.dataset.search = (lesson.title + " " + lesson.desc).toLowerCase();
    el.innerHTML =
      '<div class="c-card__top">' +
        '<div class="c-card__badges">' + renderBadges(lesson.badges) + "</div>" +
        '<div class="c-card__done" aria-hidden="true">' + icon("check") + "</div>" +
      "</div>" +
      "<h3>" + lesson.title + "</h3>" +
      "<p>" + lesson.desc + "</p>" +
      '<div class="c-card__footer">' +
        '<span class="c-card__go">فتح الدرس ' + icon("arrow") + "</span>" +
      "</div>" +
      '<a class="c-card__link" href="' + lesson.path + '" target="_blank" rel="noopener noreferrer" aria-label="فتح درس: ' + lesson.title + ' (في تبويب جديد)"></a>';
    return el;
  }

  function renderTimelineItem(lesson, progress) {
    var isDone = !!(progress[lesson.id] || {}).done;
    var li = document.createElement("li");
    li.className = "c-timeline__item" + (isDone ? " is-done" : "");
    li.dataset.id = lesson.id;
    li.dataset.category = lesson.category;
    li.dataset.search = (lesson.title + " " + lesson.desc).toLowerCase();
    li.innerHTML =
      '<div class="c-timeline__node">' + (isDone ? icon("check") : String(lesson.order).padStart(2, "0")) + "</div>" +
      '<a class="c-timeline__card" href="' + lesson.path + '" target="_blank" rel="noopener noreferrer" aria-label="فتح درس: ' + lesson.title + ' (في تبويب جديد)">' +
        "<div><h3>" + lesson.title + "</h3><p>" + lesson.desc + "</p></div>" +
        '<span class="c-timeline__arrow">' + icon("arrow") + "</span>" +
      "</a>";
    return li;
  }

  function categoryIcon(key) {
    var map = {
      seed: "seed", route: "route", compass: "compass", book: "book",
      moon: "moonStars", palette: "palette", chat: "chat",
    };
    return icon(map[key] || "book");
  }

  function renderSections() {
    var root = document.getElementById("lessonSections");
    var progress = readProgress();
    root.innerHTML = "";

    CATALOG.categories.forEach(function (cat) {
      var items = lessonsByCategory(cat.key);
      var section = document.createElement("section");
      section.className = "c-section";
      section.id = "sec-" + cat.key;
      section.dataset.category = cat.key;

      var head = document.createElement("div");
      head.className = "c-section__head";
      head.innerHTML =
        "<div>" +
          '<div class="c-section__icon">' + categoryIcon(cat.icon) + "</div>" +
          "<h2>" + cat.title + "</h2>" +
          "<p>" + cat.subtitle + "</p>" +
        "</div>" +
        '<span class="c-section__count mono">' + cat.count + " دروس · " + cat.level + "</span>";
      section.appendChild(head);

      if (cat.key === "a2-kurs") {
        var tl = document.createElement("ol");
        tl.className = "c-timeline";
        tl.innerHTML = '<div class="c-timeline__line"></div>';
        items.forEach(function (lesson) { tl.appendChild(renderTimelineItem(lesson, progress)); });
        section.appendChild(tl);
      } else {
        var grid = document.createElement("div");
        grid.className = "c-grid";
        items.forEach(function (lesson) { grid.appendChild(renderCard(lesson, progress)); });
        section.appendChild(grid);
      }

      root.appendChild(section);
    });
  }

  function renderChips() {
    var wrap = document.getElementById("categoryChips");
    if (!wrap) return;
    var chips = ['<button class="c-chip" data-filter="all" aria-pressed="true">الكل <span class="count mono">' + CATALOG.lessons.length + "</span></button>"];
    CATALOG.categories.forEach(function (cat) {
      chips.push(
        '<button class="c-chip" data-filter="' + cat.key + '" aria-pressed="false">' +
        cat.title.split("—")[0].trim() + ' <span class="count mono">' + cat.count + "</span></button>"
      );
    });
    wrap.innerHTML = chips.join("");
  }

  function renderStats() {
    var total = CATALOG.lessons.length;
    var cats = CATALOG.categories.length;
    var elTotal = document.getElementById("statTotal");
    var elCats = document.getElementById("statCategories");
    if (elTotal) elTotal.textContent = total;
    if (elCats) elCats.textContent = cats;
  }

  /* ------------------------------------------------------------------------
     6) البحث والفلترة — تعمل عبر كل الأقسام دفعة واحدة
  ------------------------------------------------------------------------ */
  var state = { filter: "all", query: "" };

  function applyFilters() {
    var q = state.query.trim().toLowerCase();
    var anyVisible = false;

    document.querySelectorAll(".c-section").forEach(function (section) {
      var sectionCat = section.dataset.category;
      var sectionMatchesFilter = state.filter === "all" || state.filter === sectionCat;
      var sectionHasVisibleItem = false;

      section.querySelectorAll(".c-card, .c-timeline__item").forEach(function (item) {
        var matchesQuery = !q || item.dataset.search.indexOf(q) !== -1;
        var visible = sectionMatchesFilter && matchesQuery;
        item.classList.toggle("is-hidden", !visible);
        if (visible) sectionHasVisibleItem = true;
      });

      var showSection = sectionMatchesFilter && sectionHasVisibleItem;
      section.style.display = showSection ? "" : "none";
      if (showSection) anyVisible = true;
    });

    var empty = document.getElementById("emptyState");
    if (empty) empty.classList.toggle("is-visible", !anyVisible);
  }

  function initSearchAndChips() {
    var input = document.getElementById("searchInput");
    if (input) {
      input.addEventListener("input", function () {
        state.query = input.value;
        applyFilters();
      });
    }
    var chipsWrap = document.getElementById("categoryChips");
    if (chipsWrap) {
      chipsWrap.addEventListener("click", function (e) {
        var btn = e.target.closest(".c-chip");
        if (!btn) return;
        chipsWrap.querySelectorAll(".c-chip").forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
        state.filter = btn.dataset.filter;
        applyFilters();
        if (state.filter !== "all") {
          var target = document.getElementById("sec-" + state.filter);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     لوحة التقدّم — نسبة الإنجاز + "أكمل من حيث توقفت"
  ------------------------------------------------------------------------ */
  function renderProgressPanel() {
    var progress = readProgress();
    var total = CATALOG.lessons.length;
    var doneCount = 0, lastVisited = null;
    Object.keys(progress).forEach(function (id) {
      var e = progress[id];
      if (e.done) doneCount++;
      if (e.visited && (!lastVisited || e.lastVisit > lastVisited.lastVisit)) {
        lastVisited = Object.assign({ id: id }, e);
      }
    });
    var pct = total ? Math.round((doneCount / total) * 100) : 0;

    var fill = document.getElementById("progressFill");
    var pctLabel = document.getElementById("progressPct");
    var doneLabel = document.getElementById("progressDone");
    if (fill) fill.style.width = pct + "%";
    if (pctLabel) pctLabel.textContent = pct + "%";
    if (doneLabel) doneLabel.textContent = doneCount + " من أصل " + total;

    var continueBtn = document.getElementById("continueLearning");
    if (continueBtn) {
      if (lastVisited && !lastVisited.done) {
        var lesson = CATALOG.lessons.find(function (l) { return l.id === lastVisited.id; });
        if (lesson) {
          continueBtn.href = lesson.path;
          continueBtn.hidden = false;
          continueBtn.querySelector(".continue-title").textContent = lesson.title;
        }
      } else {
        continueBtn.hidden = true;
      }
    }
  }

  function initResetProgress() {
    var btn = document.getElementById("resetProgress");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (window.confirm("سيتم مسح كل تقدّمك المحفوظ محليًا في هذا المتصفح. هل تريد المتابعة؟")) {
        clearProgress();
        renderSections();
        renderProgressPanel();
        applyFilters();
        revealOnScroll();
      }
    });
  }

  /* ------------------------------------------------------------------------
     7) الحركات عند التمرير + زر العودة للأعلى
  ------------------------------------------------------------------------ */
  function revealOnScroll() {
    var targets = document.querySelectorAll(".c-card:not(.is-visible), .c-timeline:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var t = entry.target;
          var delay = Math.min((i % 8) * 40, 240);
          t.style.transitionDelay = delay + "ms";
          t.classList.add("is-visible");
          obs.unobserve(t);
        }
      });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (t) { observer.observe(t); });
  }

  function initBackToTop() {
    var btn = document.getElementById("backToTop");
    if (!btn) return;
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        btn.classList.toggle("is-visible", window.scrollY > 700);
        ticking = false;
      });
    }, { passive: true });
    btn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  /* ------------------------------------------------------------------------
     نقطة الدخول
  ------------------------------------------------------------------------ */
  function init() {
    renderStats();
    renderChips();
    renderSections();
    renderProgressPanel();
    initThemeToggle();
    initMobileMenu();
    initSearchAndChips();
    initResetProgress();
    initBackToTop();
    revealOnScroll();

    // إعادة رسم التموضع عند تغيّر حجم الفهرس بعد أي تفاعل غير متوقع مستقبلًا
    window.addEventListener("deutsch:refresh", function () {
      renderSections(); renderProgressPanel(); applyFilters(); revealOnScroll();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
