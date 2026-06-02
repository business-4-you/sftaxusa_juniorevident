/* SF TAX USA — Shared header + mobile drawer renderer */
(function () {
  function i(n) { return window.svg(n, ""); }
  function render() {
    var host = document.querySelector("[data-header]");
    if (!host) return;
    var lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("sf_lang") || "pt";
    var services = (window.SERVICES && window.SERVICES[lang]) || (window.SERVICES && window.SERVICES.pt) || {};
    var serviceLinks = (window.SERVICE_ORDER || []).map(function (slug) {
      var service = services[slug];
      if (!service) return "";
      return '<a href="servico.html?s=' + slug + '&lang=' + lang + '">' + service.name + '</a>';
    }).join("");
    host.outerHTML =
      '<header class="site-header"><div class="wrap header-inner">' +
        '<a class="brand" href="index.html" data-href-lang aria-label="SF TAX USA">' +
          '<img class="brand__icon" src="assets/sf-logo-icon.png" alt="SF TAX USA — Santiago & Felix Accounting Services" />' +
          '<span class="brand__text"><span class="brand__name">SF TAX <b>USA</b></span>' +
          '<span class="brand__sub">Santiago &amp; Felix Accounting</span></span>' +
        '</a>' +
        '<nav class="nav" aria-label="Primary">' +
          '<a href="index.html" data-href-lang data-i18n="nav.home"></a>' +
          '<a href="sobre.html" data-href-lang data-i18n="nav.about"></a>' +
          '<div class="has-menu"><button type="button"><span data-i18n="nav.services"></span>' + i("chevron") + '</button>' +
            '<div class="dropdown" data-service-dropdown></div></div>' +
          '<a href="contato.html" data-href-lang data-i18n="nav.contact"></a>' +
        '</nav>' +
        '<div class="header-actions">' +
          '<div data-lang-switcher></div>' +
          '<a class="btn btn--green desk-only" data-wa data-loc="header"><span data-i18n="cta.specialist"></span></a>' +
          '<button class="burger" aria-label="Menu">' + i("menu") + '</button>' +
        '</div>' +
      '</div></header>' +
      '<div class="drawer-backdrop"></div>' +
      '<aside class="drawer" aria-label="Menu">' +
        '<div class="drawer-head"><span class="brand__name">SF TAX <b style="color:var(--green-600)">USA</b></span>' +
          '<button class="drawer-close" aria-label="Close">' + i("x") + '</button></div>' +
        '<a href="index.html" data-href-lang data-i18n="nav.home"></a>' +
        '<a href="sobre.html" data-href-lang data-i18n="nav.about"></a>' +
        '<details open><summary><span data-i18n="nav.services"></span>' + i("chevron") + '</summary>' +
          '<div class="sub" data-drawer-services>' + serviceLinks + '</div></details>' +
        '<a href="contato.html" data-href-lang data-i18n="nav.contact"></a>' +
        '<a class="btn btn--green" data-wa data-loc="drawer" style="margin-top:14px"><span data-i18n="cta.specialist"></span></a>' +
      '</aside>';
  }
  window.SF_renderHeader = render;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
