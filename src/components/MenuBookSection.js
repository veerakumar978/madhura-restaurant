/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — SECTION 04: THE MENU BOOK
   Interactive Archival Physical Menu Reader (3+2 Layout, Zoom, Mobile Swipe, Lightbox)
   ========================================================================== */

export class MenuBookSection {
  constructor(mountSelector = '#menubook-mount') {
    this.mount = document.querySelector(mountSelector);
    this.section = null;
    this.modal = null;
    this.activeImg = null;
    this.counterEl = null;
    this.zoomBtn = null;
    this.currentIndex = 0;
    this.isZoomed = false;
    this.touchStartX = 0;
    this.touchEndX = 0;

    // Exact 5 archival pages and exact labels from physical menu
    this.pages = [
      {
        src: 'menu/menu1.jpeg',
        num: 'PAGE 01',
        title: 'INDIAN CURRIES & BIRYANI'
      },
      {
        src: 'menu/menu2.jpeg',
        num: 'PAGE 02',
        title: 'STARTERS, CLAY OVEN & CHINESE'
      },
      {
        src: 'menu/menu3.jpeg',
        num: 'PAGE 03',
        title: 'SPECIAL BIRYANI, BREADS & MOCKTAILS'
      },
      {
        src: 'menu/menu4.jpeg',
        num: 'PAGE 04',
        title: 'SOUPS & CRISPY APPETIZERS'
      },
      {
        src: 'menu/menu5.jpeg',
        num: 'PAGE 05',
        title: 'MADHURA SIGNATURE SPECIALS'
      }
    ];

    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    if (!this.mount) return;

    this.section = document.createElement('section');
    this.section.id = 'menu-book';
    this.section.className = 'menubook-section section';
    this.section.setAttribute('aria-label', 'The Physical Madhura Menu Book Archival Pages');

    const renderCard = (p, idx) => `
      <div 
        class="menubook-page-card" 
        data-page-index="${idx}" 
        tabindex="0" 
        role="button" 
        aria-label="Open ${p.num}: ${p.title} in full-page reader"
      >
        <div class="menubook-page-mat">
          <img 
            src="${p.src}" 
            alt="${p.num} - ${p.title} (Madhura Restaurant Menu)" 
            class="menubook-page-img" 
            loading="lazy" 
            width="800" 
            height="1130"
          />
        </div>
        <div class="menubook-page-meta">
          <span class="menubook-page-num">${p.num}</span>
          <span class="menubook-page-title">${p.title}</span>
        </div>
      </div>
    `;

    // All 5 Real Pages in One Horizontal Track
    const cardsHtml = this.pages.map((p, idx) => renderCard(p, idx)).join('');

    this.section.innerHTML = `
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-centered">
          <div class="heritage-eyebrow">
            <span>ORIGINAL ARCHIVAL PAGES</span>
          </div>
          <h2 class="heritage-statement">THE MENU BOOK</h2>
          <p class="heritage-lead">THE ACTUAL MADHURA MENU</p>
          <p class="menubook-reader-hint">
            Click any page to open the interactive full-page menu reader.
          </p>
        </div>

        <!-- 5 Real Pages in One Row on Desktop / Swipeable on Mobile -->
        <div class="menubook-archive-wrap">
          <div class="menubook-grid-track" id="menubook-grid-track">
            ${cardsHtml}
          </div>
        </div>
      </div>

      <!-- Interactive Full-Screen Menu Reader Modal -->
      <div 
        class="menubook-reader-modal" 
        id="menubook-modal" 
        aria-hidden="true" 
        role="dialog" 
        aria-label="Interactive Madhura full-page menu reader"
      >
        <div class="menubook-reader-container">
          <!-- Top Utility Toolbar -->
          <div class="menubook-reader-toolbar">
            <div class="menubook-reader-info" id="menubook-reader-info">
              <span class="reader-info-num">${this.pages[0].num}</span>
              <span class="reader-info-sep">•</span>
              <span class="reader-info-title">${this.pages[0].title}</span>
            </div>
            
            <div class="menubook-toolbar-actions">
              <button type="button" class="menubook-tool-btn" id="menubook-zoom-toggle" aria-label="Toggle zoom on menu page">
                <span id="zoom-btn-label">Zoom In +</span>
              </button>
              <button type="button" class="menubook-close-btn" id="menubook-close" aria-label="Close menu reader">✕</button>
            </div>
          </div>

          <!-- Main Page Stage with Side Navigation -->
          <div class="menubook-reader-stage" id="menubook-stage">
            <button type="button" class="menubook-nav-btn menubook-prev-btn" id="menubook-prev" aria-label="Previous menu page">‹</button>

            <div class="menubook-img-viewport" id="menubook-viewport">
              <img 
                src="${this.pages[0].src}" 
                alt="${this.pages[0].num} - ${this.pages[0].title}" 
                class="menubook-modal-img" 
                id="menubook-active-img" 
              />
            </div>

            <button type="button" class="menubook-nav-btn menubook-next-btn" id="menubook-next" aria-label="Next menu page">›</button>
          </div>

          <!-- Bottom Footer / Close Control -->
          <div class="menubook-reader-footer">
            <span class="menubook-page-indicator" id="menubook-counter">Page 1 of 5</span>
            <button type="button" class="menubook-bottom-close-btn" id="menubook-bottom-close">
              Close Reader ×
            </button>
          </div>
        </div>
      </div>
    `;

    this.mount.appendChild(this.section);

    this.modal = this.section.querySelector('#menubook-modal');
    this.activeImg = this.section.querySelector('#menubook-active-img');
    this.infoEl = this.section.querySelector('#menubook-reader-info');
    this.counterEl = this.section.querySelector('#menubook-counter');
    this.zoomBtn = this.section.querySelector('#menubook-zoom-toggle');
    this.viewport = this.section.querySelector('#menubook-viewport');
  }

  bindEvents() {
    if (!this.section) return;

    // Open lightbox when clicking any thumbnail card
    this.section.querySelectorAll('.menubook-page-card').forEach((card) => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-page-index'), 10);
        this.openReader(idx);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(card.getAttribute('data-page-index'), 10);
          this.openReader(idx);
        }
      });
    });

    // Close buttons
    const closeBtn = this.section.querySelector('#menubook-close');
    const bottomCloseBtn = this.section.querySelector('#menubook-bottom-close');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeReader());
    if (bottomCloseBtn) bottomCloseBtn.addEventListener('click', () => this.closeReader());

    // Modal background click to close
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal || e.target.classList.contains('menubook-reader-container')) {
          this.closeReader();
        }
      });
    }

    // Previous / Next buttons
    const prevBtn = this.section.querySelector('#menubook-prev');
    const nextBtn = this.section.querySelector('#menubook-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prevPage();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nextPage();
      });
    }

    // Zoom Toggle Button
    if (this.zoomBtn) {
      this.zoomBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleZoom();
      });
    }

    // Double-click image to toggle zoom
    if (this.activeImg) {
      this.activeImg.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        this.toggleZoom();
      });
    }

    // Mobile touch swipe gestures
    if (this.viewport) {
      this.viewport.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.viewport.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      }, { passive: true });
    }

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (!this.modal || !this.modal.classList.contains('open')) return;
      if (e.key === 'Escape') this.closeReader();
      if (e.key === 'ArrowLeft') this.prevPage();
      if (e.key === 'ArrowRight') this.nextPage();
    });
  }

  handleSwipe() {
    const diff = this.touchEndX - this.touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        this.prevPage();
      } else {
        this.nextPage();
      }
    }
  }

  openReader(index) {
    this.currentIndex = index;
    this.isZoomed = false;
    this.updateActivePage();
    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeReader() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    this.modal.setAttribute('aria-hidden', 'true');
    this.isZoomed = false;
    if (this.viewport) this.viewport.classList.remove('zoomed');
    this.updateZoomBtn();
    document.body.style.overflow = '';
  }

  prevPage() {
    this.currentIndex = (this.currentIndex - 1 + this.pages.length) % this.pages.length;
    this.isZoomed = false;
    if (this.viewport) this.viewport.classList.remove('zoomed');
    this.updateZoomBtn();
    this.updateActivePage();
  }

  nextPage() {
    this.currentIndex = (this.currentIndex + 1) % this.pages.length;
    this.isZoomed = false;
    if (this.viewport) this.viewport.classList.remove('zoomed');
    this.updateZoomBtn();
    this.updateActivePage();
  }

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
    if (this.viewport) {
      if (this.isZoomed) {
        this.viewport.classList.add('zoomed');
      } else {
        this.viewport.classList.remove('zoomed');
      }
    }
    this.updateZoomBtn();
  }

  updateZoomBtn() {
    const label = this.section.querySelector('#zoom-btn-label');
    if (label) {
      label.textContent = this.isZoomed ? 'Zoom Out –' : 'Zoom In +';
    }
  }

  updateActivePage() {
    const page = this.pages[this.currentIndex];
    if (this.activeImg) {
      this.activeImg.src = page.src;
      this.activeImg.alt = `${page.num} - ${page.title} (Madhura Restaurant Menu)`;
    }

    if (this.infoEl) {
      this.infoEl.innerHTML = `
        <span class="reader-info-num">${page.num}</span>
        <span class="reader-info-sep">•</span>
        <span class="reader-info-title">${page.title}</span>
      `;
    }

    if (this.counterEl) {
      this.counterEl.textContent = `Page ${this.currentIndex + 1} of ${this.pages.length}`;
    }
  }
}
