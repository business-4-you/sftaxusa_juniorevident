/* SF TAX USA — Shared header + mobile drawer (global, self-contained) */
(function () {
  function i(n) { return window.svg(n, ""); }

  function render() {
    var host = document.querySelector("[data-header]");
    if (!host) return;
    host.outerHTML =
      '<header class="site-header"><div class="wrap header-inner">' +
        '<a class="brand" href="index.html" data-href-lang aria-label="SF TAX USA">' +
          '<img class="brand__logo" src="assets/sf-logo-full.png" alt="SF TAX USA — Santiago & Felix Accounting Services" />' +
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
          '<button class="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="sf-drawer">' + i("menu") + '</button>' +
        '</div>' +
      '</div></header>' +
      '<div class="drawer-backdrop" data-drawer-close></div>' +
      '<aside class="drawer" id="sf-drawer" aria-label="Menu" aria-hidden="true">' +
        '<div class="drawer-head"><span class="brand__name">SF TAX <b style="color:var(--green-600)">USA</b></span>' +
          '<button class="drawer-close" type="button" data-drawer-close aria-label="Close">' + i("x") + '</button></div>' +
        '<nav class="drawer-nav" aria-label="Mobile">' +
          '<a href="index.html" data-href-lang data-i18n="nav.home" data-drawer-link></a>' +
          '<a href="sobre.html" data-href-lang data-i18n="nav.about" data-drawer-link></a>' +
          '<div class="drawer-acc">' +
            '<button type="button" class="drawer-acc__btn" data-acc-toggle aria-expanded="false">' +
              '<span data-i18n="nav.services"></span>' + i("chevron") +
            '</button>' +
            '<div class="drawer-acc__panel" data-acc-panel>' +
              '<a href="servicos.html" data-href-lang class="drawer-acc__all" data-drawer-link>' +
                '<span data-i18n="nav.allServices"></span>' + i("arrowR") +
              '</a>' +
              '<div class="drawer-acc__list" data-drawer-services></div>' +
            '</div>' +
          '</div>' +
          '<a href="contato.html" data-href-lang data-i18n="nav.contact" data-drawer-link></a>' +
        '</nav>' +
        '<a class="btn btn--green drawer-cta" data-wa data-loc="drawer" data-drawer-link><span data-i18n="cta.specialist"></span></a>' +
      '</aside>';

    // Drawer interaction is now handled by drawer.js
  }

  window.SF_renderHeader = render;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();

  /* Note: Drawer interaction is handled by drawer.js for better separation of concerns */
})();
