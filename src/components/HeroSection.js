/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — SECTION 01: CINEMATIC HERO
   "Where Every Meal Becomes a Memory" — Left Editorial / Right Steaming Pulav
   ========================================================================== */

export class HeroSection {
  constructor(mountSelector = '#hero-mount') {
    this.mount = document.querySelector(mountSelector);
    this.section = null;

    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    if (!this.mount) return;

    this.section = document.createElement('section');
    this.section.id = 'home';
    this.section.className = 'hero-section';
    this.section.setAttribute('aria-label', 'Madhura Multicuisine Restaurant Introduction');

    this.section.innerHTML = `
      <div class="container hero-container">
        <!-- Left Column: Editorial Quotation & Supporting Text -->
        <div class="hero-text-col">
          <div class="hero-eyebrow hero-stagger">
            <span class="hero-eyebrow-dash" aria-hidden="true"></span>
            <span>MADHURA MULTICUISINE RESTAURANT</span>
          </div>

          <h1 class="hero-quote-heading hero-stagger">
            “WHERE EVERY MEAL<br />
            <em>BECOMES A MEMORY.”</em>
          </h1>

          <!-- Classical Floral SVG Ornament (Dark Brown / Antique Gold) -->
          <div class="hero-ornament-rule hero-stagger" aria-hidden="true">
            <span class="hero-ornament-line"></span>
            <svg class="hero-ornament-svg" viewBox="0 0 54 18" width="54" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9H16" stroke="#402018" stroke-width="1" stroke-linecap="round"/>
              <path d="M38 9H52" stroke="#402018" stroke-width="1" stroke-linecap="round"/>
              <path d="M27 3C22 3 18 6.5 18 10C18 12.8 20.2 15 23 15C25.5 15 27.5 13 27.5 10.5C27.5 8.5 25.8 7 23.8 7C22.5 7 21.5 8 21.5 9C21.5 9.8 22.2 10.5 23 10.5C23.5 10.5 23.8 10.2 23.8 9.8C23.8 9.4 23.4 9 23 9" stroke="#B58A45" stroke-width="1.2" stroke-linecap="round"/>
              <circle cx="27" cy="9" r="1.5" fill="#B58A45" />
              <circle cx="16" cy="9" r="1" fill="#402018" />
              <circle cx="38" cy="9" r="1" fill="#402018" />
            </svg>
            <span class="hero-ornament-line"></span>
          </div>

          <p class="hero-supporting-p hero-stagger">
            A table where familiar flavours, rich aromas and shared moments come together.
          </p>
        </div>

        <!-- Right Column: Steaming 360° Ulavacharu Kodi Pulav Video -->
        <div class="hero-food-col hero-stagger">
          <div class="hero-pulav-video-wrap">
            <video 
              class="hero-pulav-video"
              autoplay 
              muted 
              loop 
              playsinline 
              preload="metadata"
              aria-label="Steaming hot plate of signature Ulavacharu Kodi Pulav rotating slowly"
            >
              <source src="hero/plate rotation.mp4" type="video/mp4" />
              <source src="hero/plate rotating.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <!-- Scroll Indicator (Aligned on desktop left, after food on mobile) -->
        <div class="hero-scroll-wrap hero-stagger">
          <button type="button" class="hero-scroll-cue" data-scroll-to="experience" aria-label="Explore the Madhura experience">
            <span>EXPLORE MADHURA</span>
            <span class="hero-scroll-dash" aria-hidden="true"></span>
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      </div>
    `;

    this.mount.appendChild(this.section);
  }

  bindEvents() {
    if (!this.section) return;

    const revealHero = () => {
      this.section.classList.add('hero-revealed');
    };

    // Trigger staggered entrance when intro finishes or user scrolls
    window.addEventListener('intro:completed', revealHero);
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) revealHero();
    }, { passive: true });

    // Fallback timer: ensure hero elements never remain invisible
    setTimeout(revealHero, 1500);

    // Programmatic smooth scroll to Section 02
    const scrollBtn = this.section.querySelector('[data-scroll-to="experience"]');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetEl = document.getElementById('experience');
        if (targetEl) {
          const headerHeight = 92;
          const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight - 2);
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      });
    }
  }
}
