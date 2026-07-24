/**
 * theme-init.js
 * ============================================================================
 * يُحمَّل هذا الملف بشكل غير مؤجَّل (بدون defer/async) في <head>، لذا يُنفَّذ
 * وتتوقف عملية رسم الصفحة إلى حين انتهائه — تمامًا كما لو كان سكربتًا مضمّنًا.
 * الهدف: تطبيق السمة (فاتح/داكن) الصحيحة على <html> *قبل* أن تُرسَم أول بكسل،
 * لتفادي "وميض السمة الخاطئة" (Flash of Incorrect Theme).
 *
 * لماذا ملف خارجي لا سكربت مضمّن؟
 * لأن سياسة أمان المحتوى (CSP) في هذه الصفحة تفرض script-src 'self' بدون
 * 'unsafe-inline' — وهي ممارسة أمان أفضل. وضع هذا المنطق في ملف self-hosted
 * يحافظ على تلك السياسة الصارمة دون أي استثناء أمني.
 */
(function () {
  try {
    var saved = localStorage.getItem("deutsch_academy_theme");
    var theme = saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
