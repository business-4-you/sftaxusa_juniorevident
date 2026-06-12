/* =========================================================================
   SF TAX USA — App engine: i18n, rendering, interactions
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- Easily editable business config ---------- */
  window.SF_CONFIG = window.SF_CONFIG || {
    whatsapp: "13055551234",          // digits only, country code first — EDIT HERE
    whatsappDisplay: "+1 (305) 555-1234",
    phone: "+1 (305) 555-1234",
    phoneHref: "+13055551234",
    email: "contato@sftaxusa.com",
    addressLine: "Florida, United States",
    instagram: "#", facebook: "#", linkedin: "#"
  };
  var CFG = window.SF_CONFIG;

  /* ---------- Language ---------- */
  var LANGS = ["pt", "en", "es"];
  var LANG_LABELS = { pt: "Português", en: "English", es: "Español" };
  var LANG_FLAGS = { pt: "🇧🇷", en: "🇺🇸", es: "🇪🇸" };

  /* ---------- Safe storage (Firefox on file:// can throw) ---------- */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function urlLang() {
    var p = new URLSearchParams(location.search).get("lang");
    return LANGS.indexOf(p) > -1 ? p : null;
  }
  function getLang() {
    return urlLang() || lsGet("sf_lang") || "pt";
  }
  function setLang(lang, push) {
    if (LANGS.indexOf(lang) < 0) lang = "pt";
    lsSet("sf_lang", lang);
    document.documentElement.lang = lang;
    try {
      var u = new URL(location.href);
      u.searchParams.set("lang", lang);
      history[push ? "pushState" : "replaceState"]({}, "", u);
    } catch (e) {}
    render();
    track("language_change", { language: lang });
  }
  window.SF_setLang = setLang;

  /* ---------- Translation resolver ---------- */
  function dict() { return (window.I18N && window.I18N[getLang()]) || window.I18N.pt; }
  function t(path) {
    var o = dict(), parts = path.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (o == null) return undefined;
      o = o[parts[i]];
    }
    return o;
  }
  window.SF_t = t;
  function svcData() { return (window.SERVICES && window.SERVICES[getLang()]) || window.SERVICES.pt; }
  window.SF_svc = svcData;

  /* ---------- Analytics stub (GA4 / GTM ready) ---------- */
  function track(event, params) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: event }, params || {}));
  }
  window.SF_track = track;

  /* ---------- WhatsApp helpers ---------- */
  var WA_MSG = {
    pt: "Olá! Vim pelo site da SF TAX USA e gostaria de falar com um especialista.",
    en: "Hello! I came from the SF TAX USA website and would like to talk to a specialist.",
    es: "¡Hola! Vine desde el sitio de SF TAX USA y me gustaría hablar con un especialista."
  };
  function waLink(extra) {
    var msg = (WA_MSG[getLang()] || WA_MSG.pt) + (extra ? " " + extra : "");
    return "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(msg);
  }
  window.SF_wa = waLink;

  /* ---------- Icon helper ---------- */
  function icon(name, cls) { return window.svg(name, cls || ""); }

  /* ---------- Apply [data-i18n] text + attrs ---------- */
  function applyTranslations(root) {
    root = root || document;
    root.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (typeof v === "string") el.textContent = v;
    });
    root.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-html"));
      if (typeof v === "string") el.innerHTML = v;
    });
    root.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var kv = pair.split(":"); if (kv.length < 2) return;
        var v = t(kv[1].trim());
        if (typeof v === "string") el.setAttribute(kv[0].trim(), v);
      });
    });
  }

  /* ---------- WhatsApp + lang-aware links ---------- */
  function applyLinks() {
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      a.href = waLink(a.getAttribute("data-wa") || "");
      if (!a.dataset.bound) {
        a.addEventListener("click", function () { track("whatsapp_click", { location: a.getAttribute("data-loc") || "" }); });
        a.dataset.bound = "1";
      }
    });
    document.querySelectorAll("[data-href-lang]").forEach(function (a) {
      var base = a.getAttribute("href").split("?")[0];
      a.href = base + "?lang=" + getLang();
    });
    document.querySelectorAll("[data-tel]").forEach(function (a) { a.href = "tel:" + CFG.phoneHref; });
    document.querySelectorAll("[data-mail]").forEach(function (a) { a.href = "mailto:" + CFG.email; });
    document.querySelectorAll("[data-cfg-phone]").forEach(function (e) { e.textContent = CFG.phone; });
    document.querySelectorAll("[data-cfg-mail]").forEach(function (e) { e.textContent = CFG.email; });
    document.querySelectorAll("[data-cfg-wa]").forEach(function (e) { e.textContent = CFG.whatsappDisplay; });
  }

  /* ---------- Language switcher UI ---------- */
  function buildLangSwitchers() {
    document.querySelectorAll("[data-lang-switcher]").forEach(function (host) {
      if (host.dataset.built) { updateLangSwitcher(host); return; }
      host.dataset.built = "1";
      host.classList.add("lang");
      var cur = getLang();
      host.innerHTML =
        '<button class="lang__btn" aria-haspopup="true" aria-expanded="false">' +
        '<span class="flag">' + LANG_FLAGS[cur] + '</span><span class="lang-code">' + cur.toUpperCase() + '</span>' +
        icon("chevron") + '</button>' +
        '<div class="lang__menu" hidden>' +
        LANGS.map(function (l) {
          return '<button data-lang="' + l + '"><span class="flag">' + LANG_FLAGS[l] + '</span>' + LANG_LABELS[l] + '</button>';
        }).join("") + '</div>';
      var btn = host.querySelector(".lang__btn");
      var menu = host.querySelector(".lang__menu");
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = !menu.hasAttribute("hidden");
        document.querySelectorAll(".lang__menu").forEach(function (m) { m.setAttribute("hidden", ""); });
        if (open) { btn.setAttribute("aria-expanded", "false"); }
        else { menu.removeAttribute("hidden"); btn.setAttribute("aria-expanded", "true"); }
      });
      menu.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          setLang(b.getAttribute("data-lang"), true);
          menu.setAttribute("hidden", "");
        });
      });
    });
    document.addEventListener("click", function () {
      document.querySelectorAll(".lang__menu").forEach(function (m) { m.setAttribute("hidden", ""); });
    });
  }
  function updateLangSwitcher(host) {
    var cur = getLang();
    var flag = host.querySelector(".lang__btn .flag");
    var code = host.querySelector(".lang-code");
    if (flag) flag.textContent = LANG_FLAGS[cur];
    if (code) code.textContent = cur.toUpperCase();
    host.querySelectorAll(".lang__menu button").forEach(function (b) {
      b.setAttribute("aria-current", b.getAttribute("data-lang") === cur ? "true" : "false");
    });
  }

  function renderSnapCarousel(host, options) {
    if (!host) return;
    var cleanupKey = options.cleanupKey;
    if (cleanupKey && window[cleanupKey]) {
      window[cleanupKey]();
      window[cleanupKey] = null;
    }

    var items = options.items || [];
    if (!items.length) {
      host.innerHTML = "";
      return;
    }

    var prefix = options.prefix;
    host.innerHTML =
      '<div class="' + prefix + '-carousel" data-carousel>' +
        '<button type="button" class="' + prefix + '-carousel__nav ' + prefix + '-carousel__nav--prev" aria-label="' + options.prevLabel + '" data-prev>' + icon("arrowR") + '</button>' +
        '<div class="' + prefix + '-carousel__track" data-track tabindex="0">' +
          items.map(function (item, i) {
            return options.renderSlide(item, i);
          }).join("") +
        '</div>' +
        '<button type="button" class="' + prefix + '-carousel__nav ' + prefix + '-carousel__nav--next" aria-label="' + options.nextLabel + '" data-next>' + icon("arrowR") + '</button>' +
        '<div class="' + prefix + '-carousel__dots" data-dots></div>' +
      '</div>';

    var track = host.querySelector("[data-track]");
    var slides = [].slice.call(host.querySelectorAll("[data-slide]"));
    var prev = host.querySelector("[data-prev]");
    var next = host.querySelector("[data-next]");
    var dots = host.querySelector("[data-dots]");
    var activeIndex = 0;
    var raf = 0;

    if (!track || !slides.length || !dots) return;

    dots.innerHTML = slides.map(function (_, i) {
      return '<button type="button" class="' + prefix + '-carousel__dot" data-dot="' + i + '" aria-label="' + options.dotLabel + " " + (i + 1) + '"></button>';
    }).join("");

    var dotButtons = [].slice.call(dots.querySelectorAll("[data-dot]"));

    function clampIndex(i) {
      if (i < 0) return 0;
      if (i >= slides.length) return slides.length - 1;
      return i;
    }

    function scrollToIndex(i) {
      var index = clampIndex(i);
      var slide = slides[index];
      if (!slide) return;
      var target = Math.max(0, slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2);
      track.scrollTo({ left: target, behavior: "smooth" });
      setActive(index);
    }

    function getNearestIndex() {
      var center = track.scrollLeft + (track.clientWidth / 2);
      var best = 0;
      var bestDist = Infinity;
      slides.forEach(function (slide, index) {
        var slideCenter = slide.offsetLeft + (slide.offsetWidth / 2);
        var dist = Math.abs(slideCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = index;
        }
      });
      return best;
    }

    function setActive(i) {
      activeIndex = clampIndex(i);
      slides.forEach(function (slide, index) {
        var isActive = index === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
      dotButtons.forEach(function (dot, index) {
        dot.classList.toggle("is-active", index === activeIndex);
        dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
      });
      if (prev) prev.disabled = activeIndex === 0;
      if (next) next.disabled = activeIndex === slides.length - 1;
    }

    function sync() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        setActive(getNearestIndex());
      });
    }

    prev.addEventListener("click", function () { scrollToIndex(activeIndex - 1); });
    next.addEventListener("click", function () { scrollToIndex(activeIndex + 1); });
    dotButtons.forEach(function (dot) {
      dot.addEventListener("click", function () {
        scrollToIndex(parseInt(dot.getAttribute("data-dot"), 10));
      });
    });
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    window[cleanupKey] = function () {
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };

    setActive(0);
    sync();
  }

  /* ---------- Service cards ---------- */
  function serviceCardHTML(slug) {
    var s = svcData()[slug]; if (!s) return "";
    var ic = window.SERVICE_ICONS[slug] || "doc";
    return '<a class="card svc-card" href="servico.html?s=' + slug + '&lang=' + getLang() + '" data-svc="' + slug + '">' +
      '<div class="icon-badge">' + icon(ic) + '</div>' +
      '<h3>' + s.name + '</h3>' +
      '<p>' + s.short + '</p>' +
      '<span class="svc-more">' + t("cta.learnMore") + icon("arrowR") + '</span>' +
      '</a>';
  }
  function renderServiceGrids() {
    document.querySelectorAll("[data-service-grid]").forEach(function (host) {
      var limit = parseInt(host.getAttribute("data-limit") || "0", 10);
      var order = window.SERVICE_ORDER.slice();
      if (limit > 0) order = order.slice(0, limit);
      host.innerHTML = order.map(serviceCardHTML).join("");
      host.querySelectorAll("[data-svc]").forEach(function (a) {
        a.addEventListener("click", function () { track("service_click", { service: a.getAttribute("data-svc") }); });
      });
    });
  }

  /* ---------- Why section carousel ---------- */
  function renderWhySection() {
    var host = document.querySelector("[data-why]");
    if (!host) return;
    if (window.__whyCarouselCleanup) {
      window.__whyCarouselCleanup();
      window.__whyCarouselCleanup = null;
    }
    var items = t("why.items") || [];
    host.innerHTML =
      '<div class="why-carousel" data-why-carousel>' +
        '<button type="button" class="why-carousel__nav why-carousel__nav--prev" aria-label="Anterior" data-why-prev>' + icon("arrowR") + '</button>' +
        '<div class="why-carousel__track" data-why-track tabindex="0">' +
          items.map(function (f, i) {
            return '<article class="card feature why-card" data-why-slide data-why-index="' + i + '">' +
              '<div class="icon-badge">' + icon(f.i) + '</div>' +
              '<div><h3>' + f.t + '</h3><p>' + f.d + '</p></div>' +
            '</article>';
          }).join("") +
        '</div>' +
        '<button type="button" class="why-carousel__nav why-carousel__nav--next" aria-label="Próximo" data-why-next>' + icon("arrowR") + '</button>' +
        '<div class="why-carousel__dots" data-why-dots></div>' +
      '</div>';

    var carousel = host.querySelector("[data-why-carousel]");
    var track = host.querySelector("[data-why-track]");
    var slides = [].slice.call(host.querySelectorAll("[data-why-slide]"));
    var prev = host.querySelector("[data-why-prev]");
    var next = host.querySelector("[data-why-next]");
    var dots = host.querySelector("[data-why-dots]");
    var activeIndex = 0;
    var raf = 0;

    if (!track || !slides.length) return;

    dots.innerHTML = slides.map(function (_, i) {
      return '<button type="button" class="why-carousel__dot" data-why-dot="' + i + '" aria-label="Ir para o diferencial ' + (i + 1) + '"></button>';
    }).join("");

    var dotButtons = [].slice.call(dots.querySelectorAll("[data-why-dot]"));

    function clampIndex(i) {
      if (i < 0) return 0;
      if (i >= slides.length) return slides.length - 1;
      return i;
    }

    function scrollToIndex(i) {
      var index = clampIndex(i);
      var slide = slides[index];
      if (!slide) return;
      var target = Math.max(0, slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2);
      track.scrollTo({ left: target, behavior: "smooth" });
      setActive(index);
    }

    function getNearestIndex() {
      var center = track.scrollLeft + (track.clientWidth / 2);
      var best = 0;
      var bestDist = Infinity;
      slides.forEach(function (slide, index) {
        var slideCenter = slide.offsetLeft + (slide.offsetWidth / 2);
        var dist = Math.abs(slideCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = index;
        }
      });
      return best;
    }

    function setActive(i) {
      activeIndex = clampIndex(i);
      slides.forEach(function (slide, index) {
        var isActive = index === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
      dotButtons.forEach(function (dot, index) {
        dot.classList.toggle("is-active", index === activeIndex);
        dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
      });
      if (prev) prev.disabled = activeIndex === 0;
      if (next) next.disabled = activeIndex === slides.length - 1;
    }

    function sync() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        setActive(getNearestIndex());
      });
    }

    prev.addEventListener("click", function () { scrollToIndex(activeIndex - 1); });
    next.addEventListener("click", function () { scrollToIndex(activeIndex + 1); });
    dotButtons.forEach(function (dot) {
      dot.addEventListener("click", function () {
        scrollToIndex(parseInt(dot.getAttribute("data-why-dot"), 10));
      });
    });
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    window.__whyCarouselCleanup = function () {
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };

    setActive(0);
    sync();
  }

  function renderProcessSection() {
    var host = document.querySelector("[data-process]");
    if (!host) return;
    renderSnapCarousel(host, {
      prefix: "process",
      cleanupKey: "__processCarouselCleanup",
      prevLabel: "Anterior",
      nextLabel: "Próximo",
      dotLabel: "Ir para o passo",
      items: t("process.steps") || [],
      renderSlide: function (step, i) {
        return '<article class="card process-step process-card" data-slide data-process-index="' + i + '">' +
          '<div class="step-num">' + (i + 1) + '</div>' +
          '<h3>' + step.t + '</h3>' +
          '<p>' + step.d + '</p>' +
        '</article>';
      }
    });
  }

  /* ---------- Services dropdown + footer links + form options ---------- */
  function renderServiceMenus() {
    document.querySelectorAll("[data-service-dropdown]").forEach(function (host) {
      host.innerHTML = window.SERVICE_ORDER.map(function (slug) {
        var s = svcData()[slug]; if (!s) return "";
        return '<a href="servico.html?s=' + slug + '&lang=' + getLang() + '">' +
          icon(window.SERVICE_ICONS[slug] || "doc") + '<span>' + s.name + '</span></a>';
      }).join("");
    });
    document.querySelectorAll("[data-service-list]").forEach(function (host) {
      var limit = parseInt(host.getAttribute("data-limit") || "0", 10);
      var order = window.SERVICE_ORDER.slice();
      if (limit > 0) order = order.slice(0, limit);
      host.innerHTML = order.map(function (slug) {
        var s = svcData()[slug]; if (!s) return "";
        return '<a href="servico.html?s=' + slug + '&lang=' + getLang() + '">' + s.name + '</a>';
      }).join("");
    });
    document.querySelectorAll("[data-service-options]").forEach(function (sel) {
      var keep = sel.querySelector("option[value='']");
      sel.innerHTML = "";
      if (keep) sel.appendChild(keep);
      window.SERVICE_ORDER.forEach(function (slug) {
        var s = svcData()[slug]; if (!s) return;
        var o = document.createElement("option");
        o.value = slug; o.textContent = s.name;
        sel.appendChild(o);
      });
    });
  }

  /* ---------- Generic list renderers (home) ---------- */
  function renderHomeLists() {
    // pains
    var pains = document.querySelector("[data-pains]");
    if (pains) {
      pains.innerHTML = (t("pains.items") || []).map(function (txt) {
        return '<div class="pain"><span class="q">' + icon("chat") + '</span><p>' + txt + '</p></div>';
      }).join("");
    }
    // why features
    renderWhySection();
    // process
    renderProcessSection();
    // lang pills
    var pills = document.querySelector("[data-langpills]");
    if (pills) {
      pills.innerHTML = (t("langband.pills") || []).map(function (p) {
        return '<div class="lang-pill"><span class="flag">' + p.flag + '</span><div><b>' + p.t + '</b><span>' + p.d + '</span></div></div>';
      }).join("");
    }
    // faq (general)
    renderFAQ(document.querySelector("[data-faq]"), t("faq.items") || []);
  }

  /* ---------- FAQ accordion ---------- */
  function renderFAQ(host, items, openFirst) {
    if (!host) return;
    var doOpen = openFirst !== false;
    host.innerHTML = items.map(function (it, i) {
      return '<div class="faq-item' + (i === 0 && doOpen ? ' open' : '') + '">' +
        '<button class="faq-q" aria-expanded="' + (i === 0 && doOpen) + '">' + it.q + '<span class="pm">' + icon("plus") + '</span></button>' +
        '<div class="faq-a"><div>' + it.a + '</div></div></div>';
    }).join("");
    host.querySelectorAll(".faq-item").forEach(function (item) {
      var q = item.querySelector(".faq-q"), a = item.querySelector(".faq-a");
      if (item.classList.contains("open")) a.style.maxHeight = a.scrollHeight + "px";
      q.addEventListener("click", function () {
        var open = item.classList.toggle("open");
        q.setAttribute("aria-expanded", open);
        a.style.maxHeight = open ? a.scrollHeight + "px" : 0;
      });
    });
  }
  window.SF_renderFAQ = renderFAQ;

  /* ---------- Mobile drawer services (interaction lives in header.js) ---------- */
  function renderDrawerServices() {
    var host = document.querySelector("[data-drawer-services]");
    if (!host) return;
    host.innerHTML = window.SERVICE_ORDER.map(function (slug) {
      var s = svcData()[slug]; if (!s) return "";
      return '<a href="servico.html?s=' + slug + '&lang=' + getLang() + '">' +
        icon(window.SERVICE_ICONS[slug] || "doc") + '<span>' + s.name + '</span></a>';
    }).join("");
    // if the accordion is open, recompute its height after re-render
    var panel = document.querySelector("[data-acc-panel]");
    var toggle = document.querySelector("[data-acc-toggle]");
    if (panel && toggle && toggle.getAttribute("aria-expanded") === "true") {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  /* ---------- Contact form ---------- */
  function bindForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form || form.dataset.bound) return;
    form.dataset.bound = "1";
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      track("form_submit", { form: "contact" });
      var ok = form.querySelector("[data-form-success]");
      form.querySelectorAll("input,select,textarea,button").forEach(function (el) { el.disabled = true; });
      if (ok) { ok.hidden = false; ok.scrollIntoView ? null : null; }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Meta / SEO ---------- */
  function applyMeta() {
    var page = document.body.getAttribute("data-page");
    var title, desc;
    if (page === "home") { title = t("meta.homeTitle"); desc = t("meta.homeDesc"); }
    else if (page === "services") { title = t("servicesPage.metaTitle"); desc = t("servicesPage.metaDesc"); }
    else if (page === "service") {
      var s = svcData()[currentSlug()]; if (s) { title = s.metaTitle; desc = s.metaDesc; }
    }
    else if (page === "about")   { title = t("pages.about.metaTitle");   desc = t("pages.about.metaDesc"); }
    else if (page === "contact") { title = t("pages.contactPage.metaTitle"); desc = t("pages.contactPage.metaDesc"); }
    else if (page === "faq")     { title = t("pages.faqPage.metaTitle");  desc = t("pages.faqPage.metaDesc"); }
    else if (page === "privacy") { title = t("pages.privacy.metaTitle");  desc = t("pages.privacy.metaDesc"); }
    else if (page === "terms")   { title = t("pages.terms.metaTitle");    desc = t("pages.terms.metaDesc"); }
    if (title) document.title = title;
    if (desc) { var m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", desc); }
  }

  /* ---------- Service page ---------- */
  function currentSlug() {
    return new URLSearchParams(location.search).get("s") || window.SERVICE_ORDER[0];
  }
  function renderServicePage() {
    var host = document.querySelector("[data-service-page]");
    if (!host) return;
    var slug = currentSlug();
    var s = svcData()[slug];
    if (!s) { slug = window.SERVICE_ORDER[0]; s = svcData()[slug]; }
    var ic = window.SERVICE_ICONS[slug] || "doc";
    var aud = (s.audience || []).map(function (k) { return '<span class="chip">' + icon("check") + (t("audience." + k) || k) + '</span>'; }).join("");
    var pains = (s.pains || []).map(function (p) { return '<li class="svc-li svc-li--pain">' + icon("chevron") + '<span>' + p + '</span></li>'; }).join("");
    var sol = (s.solution || []).map(function (p) { return '<p>' + p + '</p>'; }).join("");
    var bens = (s.benefits || []).map(function (b) { return '<li class="svc-li"><span class="svc-li__ic">' + icon("check") + '</span><span>' + b + '</span></li>'; }).join("");
    var steps = (t("process.steps") || []).map(function (st, i) {
      return '<div class="process-step card"><div class="step-num">' + (i + 1) + '</div><h3>' + st.t + '</h3><p>' + st.d + '</p></div>';
    }).join("");

    host.innerHTML =
      '<section class="svc-hero hero"><div class="wrap"><div class="hero-grid">' +
        '<div class="reveal in">' +
          '<nav class="breadcrumb svc-breadcrumb"><a href="index.html?lang=' + getLang() + '">' + t("svc.breadcrumbHome") + '</a>' + icon("chevron") +
          '<a href="servicos.html?lang=' + getLang() + '">' + t("svc.breadcrumbServices") + '</a>' + icon("chevron") + '<span>' + s.name + '</span></nav>' +
          '<div class="eyebrow" style="color:var(--gold);margin-top:18px">' + s.name + '</div>' +
          '<h1>' + s.h1 + '</h1>' +
          '<p class="lead" style="margin-top:18px">' + s.sub + '</p>' +
          '<div class="hero-cta">' +
            '<a class="btn btn--green btn--lg" data-wa data-loc="service_hero">' + icon("whatsapp") + t("svc.heroCtaPrimary") + '</a>' +
            '<a class="btn btn--outline-light btn--lg" href="#svc-form">' + t("svc.heroCtaSecondary") + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="hero-visual reveal in"><div class="ph">' +
          (window.SERVICE_IMAGES && window.SERVICE_IMAGES[slug]
            ? '<img src="' + window.SERVICE_IMAGES[slug] + '" alt="' + s.name + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;">'
            : '<span class="ph__label">[ ' + s.name + ' ]</span>') +
        '</div></div>' +
      '</div></div></section>' +

      '<div class="wrap svc-body">' +
        '<div class="svc-main">' +
          '<section class="svc-block reveal"><span class="eyebrow">' + t("svc.painTitle") + '</span>' +
            '<h2 class="h-2">' + s.painLead + '</h2><ul class="svc-list svc-list--pain">' + pains + '</ul></section>' +
          '<section class="svc-block reveal"><span class="eyebrow">' + t("svc.solutionTitle") + '</span>' +
            '<div class="svc-prose">' + sol + '</div></section>' +
          '<section class="svc-block reveal"><span class="eyebrow">' + t("svc.benefitsTitle") + '</span>' +
            '<ul class="svc-list svc-benefits">' + bens + '</ul></section>' +
          '<section class="svc-block reveal"><span class="eyebrow">' + t("svc.forWhoTitle") + '</span>' +
            '<div class="svc-aud">' + aud + '</div></section>' +
          '<section class="svc-block reveal"><span class="eyebrow">' + t("svc.howTitle") + '</span>' +
            '<div class="grid svc-steps">' + steps + '</div></section>' +
          '<section class="svc-block reveal"><span class="eyebrow">' + t("svc.faqTitle") + '</span>' +
            '<div class="faq" data-svc-faq></div></section>' +
        '</div>' +
        '<aside class="svc-aside">' +
          '<div class="svc-sticky card">' +
            '<div class="icon-badge icon-badge--green">' + icon(ic) + '</div>' +
            '<h3>' + t("svc.sidebarTitle") + '</h3>' +
            '<p class="muted" style="margin:8px 0 18px">' + t("svc.sidebarSub") + '</p>' +
            '<a class="btn btn--green btn--block" data-wa data-loc="service_aside">' + icon("whatsapp") + t("svc.sidebarCta") + '</a>' +
            '<a class="btn btn--ghost btn--block" href="#svc-form" style="margin-top:10px">' + t("svc.sidebarForm") + '</a>' +
            '<div class="svc-aside-contact">' +
              '<a data-tel>' + icon("phone") + '<span data-cfg-phone></span></a>' +
              '<a data-mail>' + icon("mail") + '<span data-cfg-mail></span></a>' +
            '</div>' +
          '</div>' +
        '</aside>' +
      '</div>';

    renderFAQ(host.querySelector("[data-svc-faq]"), s.faq || []);
    applyLinks();
  }

  /* ---------- FAQ grouped page ---------- */
  function renderFaqGroups() {
    var host = document.querySelector("[data-faq-groups]");
    if (!host) return;
    var groups = t("pages.faqPage.groups") || [];
    host.innerHTML = groups.map(function (g, gi) {
      return '<div class="faq-group reveal">' +
        '<h2 class="h-2 faq-group__title">' + g.title + '</h2>' +
        '<div class="faq" data-faq-g="' + gi + '"></div></div>';
    }).join("");
    groups.forEach(function (g, gi) {
      renderFAQ(host.querySelector('[data-faq-g="' + gi + '"]'), g.items || [], gi === 0);
    });
  }

  /* ---------- Legal pages (privacy / terms) ---------- */
  function renderLegal() {
    var host = document.querySelector("[data-legal]");
    if (!host) return;
    var key = host.getAttribute("data-legal"); // 'privacy' | 'terms'
    var data = t("pages." + key);
    if (!data) return;
    host.innerHTML = (data.sections || []).map(function (sec) {
      return '<section class="legal-block"><h2 class="h-2">' + sec.h + '</h2>' +
        (sec.p || []).map(function (p) { return '<p>' + p + '</p>'; }).join("") + '</section>';
    }).join("");
  }

  /* ---------- About values ---------- */
  function renderAboutValues() {
    var host = document.querySelector("[data-about-values]");
    if (!host) return;
    host.innerHTML = (t("pages.about.values") || []).map(function (v) {
      return '<div class="feature"><div class="icon-badge">' + icon(v.i) + '</div><div><h3>' + v.t + '</h3><p>' + v.d + '</p></div></div>';
    }).join("");
  }

  function render() {
    applyTranslations();
    applyMeta();
    buildLangSwitchers();
    document.querySelectorAll("[data-lang-switcher]").forEach(updateLangSwitcher);
    renderServiceMenus();
    renderServiceGrids();
    renderDrawerServices();
    renderHomeLists();
    renderServicePage();
    renderFaqGroups();
    renderLegal();
    renderAboutValues();
    applyLinks();
    bindForm();
    initReveal();
  }

  /* ---------- Boot ---------- */
  function boot() {
    document.documentElement.lang = getLang();
    render();
    window.addEventListener("popstate", render);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
