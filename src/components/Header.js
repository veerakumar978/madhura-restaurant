/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — DARK BROWN FULL-WIDTH HEADER
   Classic Heritage Navigation Bar with Large Logo & Responsive Mobile Drawer
   ========================================================================== */

export class Header {
  constructor(mountSelector = '#header-mount') {
    this.mount = document.querySelector(mountSelector);
    this.element = null;
    this.mobileToggle = null;
    this.mobileDrawer = null;
    this.navLinks = [];

    this.navItems = [
      { id: 'home', label: 'HOME', num: '01' },
      { id: 'experience', label: 'EXPERIENCE', num: '02' },
      { id: 'menu', label: 'MENU', num: '03' },
      { id: 'menu-book', label: 'MENU BOOK', num: '04' },
      { id: 'visit', label: 'VISIT', num: '05' }
    ];

    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
    this.setupActiveHighlight();
  }

  render() {
    if (!this.mount) return;

    this.element = document.createElement('header');
    this.element.className = 'site-header';
    this.element.setAttribute('role', 'banner');

    const navItemsHtml = this.navItems.map(item => `
      <li>
        <button type="button" class="nav-link" data-scroll-to="${item.id}" aria-label="Navigate to ${item.label}">
          ${item.label}
        </button>
      </li>
    `).join('');

    const mobileItemsHtml = this.navItems.map(item => `
      <li>
        <button type="button" class="mobile-nav-link" data-scroll-to="${item.id}" aria-label="Navigate to ${item.label}">
          <span class="mobile-nav-num">${item.num}</span>
          <span>${item.label}</span>
        </button>
      </li>
    `).join('');

    this.element.innerHTML = `
      <div class="container header-inner">
        <!-- Prominent Madhura Logo (180–230px) -->
        <a href="#home" class="brand-link" data-scroll-to="home" aria-label="Madhura Multicuisine Restaurant Home">
          <img 
            src="brand/logo.png" 
            alt="Madhura Multicuisine Restaurant Logo" 
            class="brand-logo-img"
            width="2172"
            height="724"
            loading="eager"
          />
        </a>

        <!-- Desktop Navigation Items -->
        <nav class="header-nav" role="navigation" aria-label="Primary Navigation">
          <ul class="nav-list">
            ${navItemsHtml}
          </ul>
        </nav>

        <!-- Mobile Hamburger Toggle -->
        <button type="button" class="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Full-Width Dark Brown Drawer -->
      <div class="mobile-drawer" aria-hidden="true">
        <ul class="mobile-nav-list">
          ${mobileItemsHtml}
        </ul>
      </div>
    `;

    this.mount.appendChild(this.element);

    this.mobileToggle = this.element.querySelector('.mobile-menu-toggle');
    this.mobileDrawer = this.element.querySelector('.mobile-drawer');
    this.navLinks = this.element.querySelectorAll('[data-scroll-to]');
  }

  bindEvents() {
    if (!this.element) return;

    // Header compression and scroll shadow
    window.addEventListener('scroll', () => {
      if (window.scrollY > 45) {
        this.element.classList.add('scrolled');
      } else {
        this.element.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile drawer toggle
    if (this.mobileToggle && this.mobileDrawer) {
      this.mobileToggle.addEventListener('click', () => {
        const isOpen = this.mobileDrawer.classList.contains('open');
        if (isOpen) {
          this.closeDrawer();
        } else {
          this.openDrawer();
        }
      });
    }

    // Programmatic smooth scroll without URL hash change
    this.navLinks.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-scroll-to');
        this.scrollToTarget(targetId);
        this.closeDrawer();
      });
    });
  }

  openDrawer() {
    this.mobileDrawer.classList.add('open');
    this.mobileToggle.classList.add('open');
    this.mobileToggle.setAttribute('aria-expanded', 'true');
    this.mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeDrawer() {
    this.mobileDrawer.classList.remove('open');
    this.mobileToggle.classList.remove('open');
    this.mobileToggle.setAttribute('aria-expanded', 'false');
    this.mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  scrollToTarget(targetId) {
    if (targetId === 'home') {
      const heroEl = document.getElementById('home');
      if (heroEl) {
        window.scrollTo({ top: heroEl.offsetTop, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    let targetEl = document.getElementById(targetId);
    if (!targetEl && targetId === 'space') {
      targetEl = document.getElementById('experience');
    }

    if (targetEl) {
      const headerHeight = this.element.offsetHeight || 92;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight - 2);
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  }

  setupActiveHighlight() {
    // Highlight the active navigation link based on scroll position
    const sectionIds = this.navItems.map(item => item.id);
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 120;
      let currentSection = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = id;
            break;
          }
        }
      }

      this.navLinks.forEach((link) => {
        if (link.getAttribute('data-scroll-to') === currentSection) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }, { passive: true });
  }
}
