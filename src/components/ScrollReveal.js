/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — SCROLL REVEAL ORCHESTRATOR
   Lightweight, Non-Intrusive IntersectionObserver Motion Sequences
   ========================================================================== */

export class ScrollReveal {
  constructor(options = {}) {
    this.selector = options.selector || '.reveal-on-scroll';
    this.threshold = options.threshold || 0.15;
    this.rootMargin = options.rootMargin || '0px 0px -8% 0px';
    this.observer = null;

    this.init();
  }

  init() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(this.selector).forEach(el => el.classList.add('is-revealed'));
      return;
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll(this.selector).forEach(el => el.classList.add('is-revealed'));
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: this.threshold,
      rootMargin: this.rootMargin
    });

    document.querySelectorAll(this.selector).forEach((el) => {
      this.observer.observe(el);
    });
  }
}
