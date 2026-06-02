/* SF TAX USA — Shared header + mobile drawer (global, self-contained) */
(function () {
  function i(n) { return window.svg(n, ""); }

  function render() {
    var host = document.querySelector("[data-header]");
    if (!host) return;
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

    bindDrawer();
  }

  /* Self-contained drawer behavior via event delegation — order-independent */
  function bindDrawer() {
    var backdrop = document.querySelector(".drawer-backdrop");
    var drawer = document.querySelector(".drawer");
    var burger = document.querySelector(".burger");
    if (!drawer || !burger || drawer.dataset.bound) return;
    drawer.dataset.bound = "1";

    function open() {
      drawer.classList.add("open");
      backdrop.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
      burger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    function close() {
      drawer.classList.remove("open");
      backdrop.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    window.SF_closeDrawer = close;

    burger.addEventListener("click", open);
    backdrop.addEventListener("click", close);

    // Delegate all clicks inside the drawer
    drawer.addEventListener("click", function (e) {
      var closer = e.target.closest("[data-drawer-close]");
      if (closer) { close(); return; }

      var acc = e.target.closest("[data-acc-toggle]");
      if (acc) {
        var panel = drawer.querySelector("[data-acc-panel]");
        var open = acc.getAttribute("aria-expanded") === "true";
        acc.setAttribute("aria-expanded", String(!open));
        panel.style.maxHeight = open ? "0px" : (panel.scrollHeight + "px");
        return;
      }

      // any navigational link closes the drawer (links are added dynamically)
      var link = e.target.closest("a[data-drawer-link], [data-drawer-services] a");
      if (link) { close(); }
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("open")) close();
    });
  }

  window.SF_renderHeader = render;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
