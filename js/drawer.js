/* ==========================================================
   Robust Drawer Menu (replacement)
   - Focus trap
   - Accessible ARIA attributes
   - MutationObserver fallback if header renders late
   - Safe body scroll lock
   - Event delegation for accordion and links
   - Minimal, dependency-free
=========================================================== */
(function () {
  'use strict';

  var SELECTORS = {
    drawer: '.drawer',
    backdrop: '.drawer-backdrop',
    burger: '.burger',
    accToggle: '[data-acc-toggle]',
    accPanel: '[data-acc-panel]',
    drawerLink: '[data-drawer-link]',
    drawerClose: '[data-drawer-close]'
  };

  var drawerEl = null;
  var backdropEl = null;
  var burgerEl = null;
  var isOpen = false;
  var prevFocus = null;

  function query(sel) { return document.querySelector(sel); }

  function findElements() {
    drawerEl = query(SELECTORS.drawer);
    backdropEl = query(SELECTORS.backdrop);
    burgerEl = query(SELECTORS.burger);
    return drawerEl && backdropEl && burgerEl;
  }

  function focusableElements(container) {
    if (!container) return [];
    var sel = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
    return Array.prototype.slice.call(container.querySelectorAll(sel)).filter(function (el) { return el.offsetWidth || el.offsetHeight || el.getClientRects().length; });
  }

  function lockScroll() {
    document.documentElement.classList.add('sf-drawer-open');
    // backup inline style
    document.body.dataset._prevOverflow = document.body.style.overflow || '';
    document.body.style.overflow = 'hidden';
  }
  function unlockScroll() {
    document.documentElement.classList.remove('sf-drawer-open');
    document.body.style.overflow = document.body.dataset._prevOverflow || '';
    delete document.body.dataset._prevOverflow;
  }

  function trapTabKey(e) {
    if (!isOpen || !drawerEl) return;
    if (e.key !== 'Tab') return;
    var nodes = focusableElements(drawerEl);
    if (!nodes.length) { e.preventDefault(); return; }
    var first = nodes[0], last = nodes[nodes.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  function open() {
    if (isOpen || !findElements()) return;
    prevFocus = document.activeElement;
    isOpen = true;
    drawerEl.classList.add('open');
    backdropEl.classList.add('open');
    drawerEl.setAttribute('aria-hidden', 'false');
    if (burgerEl) burgerEl.setAttribute('aria-expanded', 'true');
    lockScroll();
    // focus first element inside drawer
    setTimeout(function () {
      var nodes = focusableElements(drawerEl);
      if (nodes && nodes.length) nodes[0].focus();
      else drawerEl.focus && drawerEl.focus();
    }, 50);
    document.addEventListener('keydown', onKeyDown, true);
  }

  function close() {
    if (!isOpen || !drawerEl) return;
    isOpen = false;
    drawerEl.classList.remove('open');
    backdropEl.classList.remove('open');
    drawerEl.setAttribute('aria-hidden', 'true');
    if (burgerEl) burgerEl.setAttribute('aria-expanded', 'false');
    unlockScroll();
    // restore focus
    try { if (prevFocus && prevFocus.focus) prevFocus.focus(); } catch (e) {}
    document.removeEventListener('keydown', onKeyDown, true);
  }

  function toggle() { if (isOpen) close(); else open(); }

  function onKeyDown(e) {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) { close(); }
    if (e.key === 'Tab') { trapTabKey(e); }
  }

  function onDrawerClick(e) {
    var btn = e.target.closest(SELECTORS.accToggle);
    if (btn) {
      e.preventDefault();
      toggleAccordion(btn);
      return;
    }
    if (e.target.closest(SELECTORS.drawerClose)) { close(); return; }
    if (e.target.closest(SELECTORS.drawerLink)) { close(); return; }
  }

  function toggleAccordion(btn) {
    var panel = drawerEl.querySelector(SELECTORS.accPanel);
    if (!panel) return;
    var isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isExpanded));
    if (isExpanded) {
      panel.style.maxHeight = '0px';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }

  function addListeners() {
    if (!findElements()) return;
    // prevent duplicate bindings
    if (drawerEl.dataset.sfSetup) return; drawerEl.dataset.sfSetup = '1';

    // Burger
    burgerEl.addEventListener('click', function (ev) { ev.preventDefault(); toggle(); });

    // Backdrop
    backdropEl.addEventListener('click', function (ev) { if (ev.target === backdropEl) close(); });

    // Drawer internal
    drawerEl.addEventListener('click', onDrawerClick);

    // Accessibility: make drawer focusable
    if (!drawerEl.getAttribute('tabindex')) drawerEl.setAttribute('tabindex', '-1');
  }

  function init() {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addListeners);
    else addListeners();

    // Expose API
    window.SF_openDrawer = open;
    window.SF_closeDrawer = close;
    window.SF_toggleDrawer = toggle;

    // If header is rendered after scripts, observe
    if (!findElements()) {
      var obs = new MutationObserver(function () {
        if (findElements()) { addListeners(); obs.disconnect(); }
      });
      obs.observe(document.documentElement || document.body, { childList: true, subtree: true });
      // stop observing after 8s
      setTimeout(function () { try { obs.disconnect(); } catch (e) {} }, 8000);
    }
  }

  // Start
  try { init(); window.SF_drawerReady = true; }
  catch (e) { console.error('drawer:init', e); window.SF_drawerReady = false; }

})();
