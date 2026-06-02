/* SF TAX USA — Shared footer renderer */
(function () {
  function svgi(n) { return window.svg(n, ""); }
  function render() {
    var host = document.querySelector("[data-footer]");
    if (!host) return;
    var t = window.SF_t, lang = (localStorage.getItem("sf_lang") || "pt");
    var p = new URLSearchParams(location.search).get("lang");
    if (["pt", "en", "es"].indexOf(p) > -1) lang = p;
    var CFG = window.SF_CONFIG;

    host.innerHTML =
      '<div class="wrap">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' +
            '<img class="footer-brand__logo" src="uploads/logo-transparente.png" alt="SF TAX USA — Santiago & Felix Accounting Services" />' +
            '<p data-i18n="footer.tagline"></p>' +
            '<div class="footer-social">' +
              '<a href="' + CFG.instagram + '" aria-label="Instagram">' + svgi("instagram") + '</a>' +
              '<a href="' + CFG.facebook + '" aria-label="Facebook">' + svgi("facebook") + '</a>' +
              '<a href="' + CFG.linkedin + '" aria-label="LinkedIn">' + svgi("linkedin") + '</a>' +
              '<a data-wa data-loc="footer" aria-label="WhatsApp">' + svgi("whatsapp") + '</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4 data-i18n="footer.colServices"></h4>' +
            '<div data-service-list data-limit="8"></div>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4 data-i18n="footer.colCompany"></h4>' +
            '<a href="sobre.html" data-href-lang data-i18n="footer.aboutLink"></a>' +
            '<a href="servicos.html" data-href-lang data-i18n="nav.services"></a>' +
            '<a href="contato.html" data-href-lang data-i18n="footer.contactLink"></a>' +
            '<a href="faq.html" data-href-lang data-i18n="footer.faqLink"></a>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4 data-i18n="footer.colLegal"></h4>' +
            '<a href="privacidade.html" data-href-lang data-i18n="footer.privacy"></a>' +
            '<a href="termos.html" data-href-lang data-i18n="footer.terms"></a>' +
            '<a data-wa data-loc="footer_col" data-i18n="cta.whatsapp"></a>' +
            '<a data-mail data-cfg-mail></a>' +
          '</div>' +
        '</div>' +
        '<p class="footer-disclaimer" data-i18n="footer.disclaimer"></p>' +
        '<div class="footer-bottom">' +
          '<span>© ' + new Date().getFullYear() + ' SF TAX USA — Santiago & Felix Accounting Services. <span data-i18n="footer.rights"></span></span>' +
          '<span data-i18n="footer.madeWith"></span>' +
        '</div>' +
      '</div>';
  }
  // expose so app can re-run after language change if needed
  window.SF_renderFooter = render;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
