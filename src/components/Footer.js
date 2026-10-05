/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — FOOTER COMPONENT
   Dark Brown Heritage Footer, Prominent Logo & Classical Closing
   ========================================================================== */

export class Footer {
  constructor(mountSelector = '#footer-mount') {
    this.mount = document.querySelector(mountSelector);
    this.element = null;

    this.navItems = [
      { id: 'home', label: 'Home' },
      { id: 'experience', label: 'Experience' },
      { id: 'menu', label: 'Menu' },
      { id: 'menu-book', label: 'Menu Book' },
      { id: 'space', label: 'Space' },
      { id: 'day-night', label: 'Day & Night' },
      { id: 'visit', label: 'Visit' }
    ];

    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    if (!this.mount) return;

    this.element = document.createElement('footer');
    this.element.className = 'site-footer';
    this.element.setAttribute('role', 'contentinfo');

    const navLinksHtml = this.navItems.map(item => `
      <li>
        <button type="button" class="footer-nav-link" data-scroll-to="${item.id}" aria-label="Navigate to ${item.label}">
          ${item.label}
        </button>
      </li>
    `).join('');

    this.element.innerHTML = `
      <div class="container footer-inner">
        <!-- Prominent Brand Logo (180–220px) -->
        <a href="#home" class="footer-logo-link" data-scroll-to="home" aria-label="Back to top">
          <img 
            src="brand/logo.png" 
            alt="Madhura A Multicuisine Restaurant Logo" 
            class="footer-logo-img"
            width="2172"
            height="724"
            loading="lazy"
          />
        </a>

        <div class="footer-subheading">A Multicuisine Restaurant • Jangareddygudem</div>

        <!-- Footer Navigation Links -->
        <nav class="footer-nav" aria-label="Footer Navigation">
          <ul class="footer-nav-list">
            ${navLinksHtml}
          </ul>
        </nav>

        <!-- Social / Contact Icons Row -->
        <div class="footer-social-row">
          <a href="https://maps.google.com/?q=Madhura+Restaurant+Jangareddygudem" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="Location on Google Maps">
            <img src="icons/location.svg" alt="" aria-hidden="true" />
          </a>
          <a href="https://wa.me/?text=Hello%20Madhura%20Restaurant" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="Chat on WhatsApp">
            <img src="icons/whatsapp.svg" alt="" aria-hidden="true" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="Instagram">
            <img src="icons/instagram.svg" alt="" aria-hidden="true" />
          </a>
          <a href="tel:+919989991234" class="footer-social-btn" aria-label="Call Us">
            <img src="icons/phone.svg" alt="" aria-hidden="true" />
          </a>
        </div>

        <!-- Footer Closing Statement -->
        <p class="footer-closing-quote">
          “A table for every taste.”
        </p>

        <!-- Bottom Metadata & Copyright -->
        <div class="footer-bottom-meta">
          <span>JANGAREDDYGUDEM, ANDHRA PRADESH</span>
          <span>•</span>
          <span>© ${new Date().getFullYear()} MADHURA MULTICUISINE RESTAURANT</span>
        </div>
      </div>
    `;

    this.mount.appendChild(this.element);
  }

  bindEvents() {
    if (!this.element) return;

    this.element.querySelectorAll('[data-scroll-to]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-scroll-to');
        if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const headerHeight = 74;
          const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      });
    });
  }
}
