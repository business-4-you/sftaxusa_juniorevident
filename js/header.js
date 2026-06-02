/* SF TAX USA — Shared header + mobile drawer renderer */
(function () {
  function i(n) { return window.svg(n, ""); }
  function render() {
    var host = document.querySelector("[data-header]");
    if (!host) return;
    host.outerHTML =
      '<header class="site-header"><div class="wrap header-inner">' +
        '<a class="brand" href="index.html" data-href-lang aria-label="SF TAX USA">' +
          '<img class="brand__logo" src="uploads/logo-transparente.png" alt="SF TAX USA — Santiago & Felix Accounting Services" />' +
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
      '<div class="mobile-menu-overlay" data-mobile-menu-overlay hidden></div>' +
      '<aside class="mobile-menu" data-mobile-menu hidden aria-hidden="true" aria-label="Menu mobile">' +
        '<div class="mobile-menu__panel">' +
          '<div class="mobile-menu__head">' +
            '<button class="mobile-menu__close" type="button" data-mobile-menu-close aria-label="Close">' + i("x") + '</button>' +
          '</div>' +
          '<nav class="mobile-menu__nav" aria-label="Menu mobile">' +
            '<a href="index.html" data-href-lang data-i18n="nav.home"></a>' +
            '<a href="sobre.html" data-href-lang data-i18n="nav.about"></a>' +
            '<button type="button" class="mobile-menu__services-toggle" data-mobile-services-toggle aria-expanded="false" aria-controls="mobile-services-panel">' +
              '<span data-i18n="nav.services"></span>' + i("chevron") +
            '</button>' +
            '<div id="mobile-services-panel" class="mobile-menu__services" data-mobile-services-panel hidden></div>' +
            '<a href="contato.html" data-href-lang data-i18n="nav.contact"></a>' +
          '</nav>' +
          '<a class="btn btn--green mobile-menu__cta" data-wa data-loc="drawer"><span data-i18n="cta.specialist"></span></a>' +
        '</div>' +
      '</aside>';
    if (typeof window.SF_initMobileMenu === "function") window.SF_initMobileMenu();
  }
  window.SF_renderHeader = render;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
