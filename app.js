/* ==========================================================
   The 661 Estate — app.js
   WhatsApp CTA · Hero Slideshow · Reveal-on-Scroll
   Gallery Lightbox · Mobile Nav Drawer
   ========================================================== */

(function () {
  'use strict';

  /* ── CONFIG ──────────────────────────────────────────── */
  var WA_NUMBER  = '6583999686';
  var WA_MESSAGE = 'Hi! I\u2019m interested in arranging a private viewing for The 661 Estate \u2014 ultra-luxury 5-storey home with private lift, full-floor entertainment deck, and MBS\u2002&\u2002city skyline views. Could you please share available time slots? PropertyGuru: https://www.propertyguru.com.sg/listing/for-sale-ultra-luxury-5-storey-home-lift-mbs-views-entertainment-5-parking-500082466';
  var WA_HREF    = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_MESSAGE);

  var SLIDE_INTERVAL = 5500; // ms between hero slide transitions

  /* ── HELPERS ──────────────────────────────────────────── */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  /* ── WHATSAPP BUTTONS ─────────────────────────────────── */
  function initWhatsApp() {
    $$('.wa-btn').forEach(function (el) {
      el.setAttribute('href', WA_HREF);
    });
  }

  /* ── FOOTER YEAR ──────────────────────────────────────── */
  function initYear() {
    var el = $('#footerYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ── HERO SLIDESHOW ───────────────────────────────────── */
  function initSlideshow() {
    var slides = $$('.hero__slide', $('#heroSlides'));
    if (slides.length < 2) return;

    var current = 0;

    function goTo(next) {
      slides[current].classList.remove('is-active');
      current = (next + slides.length) % slides.length;
      slides[current].classList.add('is-active');
    }

    setInterval(function () {
      goTo(current + 1);
    }, SLIDE_INTERVAL);
  }

  /* ── NAV SCROLL STATE ─────────────────────────────────── */
  function initNavScroll() {
    var nav = $('#nav');
    if (!nav) return;

    function update() {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── MOBILE NAV DRAWER ────────────────────────────────── */
  function initMobileNav() {
    var burger = $('#navBurger');
    var drawer = $('#navDrawer');
    if (!burger || !drawer) return;

    function open() {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', function () {
      drawer.classList.contains('is-open') ? close() : open();
    });

    // Close on link click
    $$('a', drawer).forEach(function (link) {
      link.addEventListener('click', close);
    });

    // Close on ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
    });
  }

  /* ── REVEAL ON SCROLL ─────────────────────────────────── */
  function initReveal() {
    var els = $$('[data-reveal]');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything immediately
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach(function (el) { io.observe(el); });
  }

  /* ── GALLERY LIGHTBOX ─────────────────────────────────── */
  function initLightbox() {
    var lightbox  = $('#lightbox');
    var closeBtn  = $('#lightboxClose');
    var backdrop  = $('#lightboxBackdrop');
    var imgEl     = $('#lightboxImg');
    var capEl     = $('#lightboxCap');
    if (!lightbox || !imgEl) return;

    function openLightbox(src, cap) {
      imgEl.setAttribute('src', src);
      imgEl.setAttribute('alt', cap || '');
      if (capEl) capEl.innerHTML = cap || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      // Clear src after transition to free memory
      setTimeout(function () { imgEl.setAttribute('src', ''); }, 400);
    }

    $$('.gallery__item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var src = btn.getAttribute('data-src');
        var cap = btn.getAttribute('data-caption') || '';
        if (src) openLightbox(src, cap);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
  }

  /* ── SCROLL HINT BUTTON ───────────────────────────────── */
  function initScrollHint() {
    $$('[data-scroll-to]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = document.querySelector(btn.getAttribute('data-scroll-to'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  /* ── INIT ─────────────────────────────────────────────── */
  function init() {
    initYear();
    initWhatsApp();
    initSlideshow();
    initNavScroll();
    initMobileNav();
    initReveal();
    initLightbox();
    initScrollHint();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
