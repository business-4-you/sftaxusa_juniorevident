/* SF TAX USA — Seasonal Banner */
(function () {
  "use strict";

  var STORAGE_KEY = "seasonal-banner-dismissed";

  var CONTENT = {
    taxSeason: {
      text: {
        pt: "⚠️ Prazo do IRS se aproximando — não deixe para a última hora.",
        en: "⚠️ IRS deadline approaching — don’t wait until the last minute.",
        es: "⚠️ Se acerca el plazo del IRS — no lo dejes para el último momento."
      },
      btn: {
        pt: "Fale conosco hoje →",
        en: "Talk to us today →",
        es: "Habla con nosotros hoy →"
      },
      waMsg: {
        pt: "Olá! O prazo do IRS está chegando e preciso de ajuda com minha declaração. Podem me atender?",
        en: "Hello! The IRS deadline is coming up and I need help with my tax return. Can you help me?",
        es: "¡Hola! Se acerca el plazo del IRS y necesito ayuda con mi declaración. ¿Pueden atenderme?"
      }
    },
    offSeason: {
      text: {
        pt: "Planejamento fiscal inteligente = menos imposto no futuro.",
        en: "Smart tax planning = less taxes ahead.",
        es: "Planificación fiscal inteligente = menos impuestos en el futuro."
      },
      btn: {
        pt: "Marcar uma conversa →",
        en: "Schedule a call →",
        es: "Agendar una conversación →"
      },
      waMsg: {
        pt: "Olá! Quero fazer um planejamento fiscal para pagar menos imposto. Podem me ajudar?",
        en: "Hello! I want to do tax planning to reduce my taxes. Can you help me?",
        es: "¡Hola! Quiero hacer una planificación fiscal para pagar menos impuestos. ¿Pueden ayudarme?"
      }
    }
  };

  function getLang() {
    var langs = ["pt", "en", "es"];
    var p = new URLSearchParams(location.search).get("lang");
    if (langs.indexOf(p) > -1) return p;
    try { var l = localStorage.getItem("sf_lang"); if (langs.indexOf(l) > -1) return l; } catch (e) {}
    return "pt";
  }

  function isTaxSeason() {
    var m = new Date().getMonth();
    return m <= 3;
  }

  function isDismissed() {
    try { return sessionStorage.getItem(STORAGE_KEY) === "1"; } catch (e) { return false; }
  }

  function dismiss() {
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (e) {}
    var el = document.querySelector("[data-seasonal-banner]");
    if (el) el.style.display = "none";
  }

  function render() {
    var host = document.querySelector("[data-seasonal-banner]");
    if (!host) return;

    if (isDismissed()) { host.style.display = "none"; return; }

    var season = isTaxSeason() ? CONTENT.taxSeason : CONTENT.offSeason;
    var lang = getLang();
    var wa = (window.SF_CONFIG && window.SF_CONFIG.whatsapp) || "14079689944";
    var waUrl = "https://wa.me/" + wa + "?text=" + encodeURIComponent(season.waMsg[lang] || season.waMsg.pt);

    host.style.display = "";
    host.innerHTML =
      '<div class="seasonal-banner__inner">' +
        '<span class="seasonal-banner__text">' + (season.text[lang] || season.text.pt) + '</span>' +
        '<a class="seasonal-banner__btn" href="' + waUrl + '" target="_blank" rel="noopener noreferrer">' +
          (season.btn[lang] || season.btn.pt) +
        '</a>' +
      '</div>' +
      '<button class="seasonal-banner__close" type="button" aria-label="Fechar" data-seasonal-dismiss>×</button>';

    var closeBtn = host.querySelector("[data-seasonal-dismiss]");
    if (closeBtn) closeBtn.addEventListener("click", dismiss);
  }

  /* Re-render on language change */
  var _orig = window.SF_setLang;
  window.SF_setLang = function (lang, push) {
    if (_orig) _orig(lang, push);
    render();
  };

  window.addEventListener("popstate", render);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
