/**
 * ═══════════════════════════════════════════
 * REEMI FOR JEWELLERY — Salla Twilight Theme
 * Main JavaScript
 * ═══════════════════════════════════════════
 */

// Import styles
import '../styles/app.css';

document.addEventListener('DOMContentLoaded', () => {

  // ═══ HEADER SCROLL EFFECT ═══
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    if (window.scrollY > 500) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }
  });

  // Scroll to top
  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ═══ HERO SLIDER ═══
  const slides = document.querySelectorAll('.hero__slide');
  const indicators = document.querySelectorAll('.hero__indicators span');
  let currentSlide = 0;

  function goToSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    indicators.forEach(s => s.classList.remove('active'));
    currentSlide = n;
    slides[n]?.classList.add('active');
    indicators[n]?.classList.add('active');
  }

  if (slides.length > 1) {
    setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 6000);

    indicators.forEach((ind, i) => {
      ind.addEventListener('click', () => goToSlide(i));
    });
  }

  // ═══ MOBILE MENU ═══
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  window.closeMobileMenu = function() {
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  };

  // ═══ PRODUCT TABS ═══
  const tabBtns = document.querySelectorAll('.product-tabs__btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      // Deactivate all
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.product-tabs__panel').forEach(p => p.classList.remove('active'));
      // Activate
      btn.classList.add('active');
      document.getElementById('tab-' + tab)?.classList.add('active');
    });
  });

  // ═══ FILTERS (Mobile) ═══
  window.openFilters = function() {
    document.getElementById('filtersSidebar')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeFilters = function() {
    document.getElementById('filtersSidebar')?.classList.remove('open');
    document.body.style.overflow = '';
  };

  // ═══ REVEAL ON SCROLL ═══
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  }

  // ═══ SALLA EVENTS INTEGRATION ═══
  // Listen for cart updates to refresh count
  if (typeof salla !== 'undefined') {
    salla.event.on('cart::item.added', () => {
      updateCartCount();
    });

    salla.event.on('cart::item.deleted', () => {
      updateCartCount();
    });
  }

  function updateCartCount() {
    if (typeof salla !== 'undefined') {
      salla.cart.api.fetchCart().then(res => {
        const count = res.data?.count || 0;
        const el = document.getElementById('cartCount');
        if (el) el.textContent = count;
      });
    }
  }

  // ═══ ESCAPE KEY HANDLER ═══
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeFilters();
    }
  });

});
