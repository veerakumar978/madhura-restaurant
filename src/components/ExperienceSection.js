/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — SECTION 02: THE MADHURA EXPERIENCE
   Single Photo Automatic Cinematic Slider (2s interval, internal arrows, progress bar & lightbox)
   ========================================================================== */

export class ExperienceSection {
  constructor(mountSelector = '#experience-mount') {
    this.mount = document.querySelector(mountSelector);
    this.section = null;
    this.currentIndex = 0;
    this.timer = null;
    this.progressTimer = null;
    this.isTransitioning = false;
    this.intervalMs = 2000;
    this.lightboxOpen = false;

    this.photos = [
      {
        src: 'interior/interior1.jpeg',
        label: '01 / THE SPACE',
        desc: 'Main Dining Hall',
        alt: 'Madhura Restaurant main dining space with warm ambient lighting'
      },
      {
        src: 'interior/interior2.jpeg',
        label: '02 / THE TABLE',
        desc: 'Family Lounge & Seating',
        alt: 'Madhura restaurant dining booths and table layout'
      },
      {
        src: 'interior/interior3.jpeg',
        label: '03 / THE AMBIENCE',
        desc: 'Warm Evening Mood',
        alt: 'Atmospheric restaurant interior and chandeliers'
      },
      {
        src: 'interior/interior4.jpeg',
        label: '04 / MADHURA',
        desc: 'A Table for Every Celebration',
        alt: 'Spacious banquet and celebration tables at Madhura'
      }
    ];

    this.categories = [
      'INDIAN',
      'BIRYANI',
      'TANDOORI',
      'CHINESE',
      'SEAFOOD',
      'DESSERTS'
    ];

    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
    this.startAutoSlide();
  }

  render() {
    if (!this.mount) return;

    this.section = document.createElement('section');
    this.section.id = 'experience';
    this.section.className = 'experience-section section';
    this.section.setAttribute('aria-label', 'The Madhura Experience and Restaurant Ambience');

    // Slide elements: Exactly one image visible at a time
    const slidesHtml = this.photos.map((p, idx) => `
      <div 
        class="slider-slide ${idx === 0 ? 'active' : ''}" 
        data-slide-index="${idx}"
        aria-hidden="${idx === 0 ? 'false' : 'true'}"
      >
        <img 
          src="${p.src}" 
          alt="${p.alt}" 
          loading="${idx === 0 ? 'eager' : 'lazy'}" 
          width="1920" 
          height="1200"
        />
        <div class="slider-slide-overlay" aria-hidden="true"></div>
      </div>
    `).join('');

    const rhythmHtml = this.categories.map((cat, idx) => `
      <span class="flavours-cat">${cat}</span>
      ${idx < this.categories.length - 1 ? '<span class="flavours-dot" aria-hidden="true">·</span>' : ''}
    `).join('');

    this.section.innerHTML = `
      <div class="container">
        <!-- Section 02 Opening Header -->
        <div class="experience-header">
          <div class="experience-badge">
            <span class="experience-badge-star" aria-hidden="true">✦</span>
            <span>THE MADHURA EXPERIENCE</span>
            <span class="experience-badge-star" aria-hidden="true">✦</span>
          </div>

          <h2 class="experience-statement">
            GOOD FOOD DESERVES A GOOD TABLE.
          </h2>

          <p class="experience-lead">
            A place where different flavours, familiar favourites and shared moments come together around the table.
          </p>
        </div>

        <!-- Single Photo Automatic Cinematic Slider -->
        <div class="slider-outer-wrapper">
          <div 
            class="interior-slider-stage" 
            id="experience-slider-stage" 
            tabindex="0" 
            role="region" 
            aria-label="Madhura interior photographs slider. Click image to open in full screen view."
          >
            <!-- Slides Container -->
            <div class="slider-slides-container">
              ${slidesHtml}
            </div>

            <!-- Left Arrow (Inside the image vertically centered near left edge) -->
            <button 
              type="button" 
              class="slider-arrow-btn slider-arrow-prev" 
              id="slider-btn-prev" 
              aria-label="Previous interior photograph"
            >
              <svg class="slider-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <!-- Right Arrow (Inside the image vertically centered near right edge) -->
            <button 
              type="button" 
              class="slider-arrow-btn slider-arrow-next" 
              id="slider-btn-next" 
              aria-label="Next interior photograph"
            >
              <svg class="slider-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          <!-- Image Label & Progress Bar below Image -->
          <div class="slider-meta-bar">
            <div class="slider-label-text" id="slider-label-text">
              ${this.photos[0].label}
            </div>
            
            <!-- Progress Line (Moves across during 2s interval) -->
            <div class="slider-progress-track" aria-hidden="true">
              <div class="slider-progress-bar" id="slider-progress-line"></div>
            </div>
          </div>
        </div>

        <!-- Section 02 Closing Statement -->
        <div class="flavours-moment">
          <h3 class="flavours-heading">ONE RESTAURANT. MANY FLAVOURS.</h3>
          <div class="flavours-rhythm-line">
            ${rhythmHtml}
          </div>
          <p class="flavours-sub-tag">Authentic Multicuisine Selection</p>
        </div>
      </div>

      <!-- Experience Lightbox Modal -->
      <div 
        class="experience-lightbox-modal" 
        id="experience-lightbox" 
        aria-hidden="true" 
        role="dialog" 
        aria-label="Madhura interior photograph viewer"
      >
        <div class="lightbox-modal-content">
          <button type="button" class="lightbox-close-btn" id="lightbox-close-btn" aria-label="Close interior photo viewer">✕</button>
          
          <button type="button" class="lightbox-nav-btn lightbox-prev-btn" id="lightbox-prev-btn" aria-label="Previous photograph">‹</button>
          
          <div class="lightbox-img-wrap">
            <img src="${this.photos[0].src}" alt="${this.photos[0].alt}" class="lightbox-active-img" id="lightbox-img" />
            <div class="lightbox-caption" id="lightbox-caption">
              <span class="lightbox-caption-label">${this.photos[0].label}</span>
              <span class="lightbox-caption-sep">•</span>
              <span class="lightbox-caption-desc">${this.photos[0].desc}</span>
            </div>
          </div>

          <button type="button" class="lightbox-nav-btn lightbox-next-btn" id="lightbox-next-btn" aria-label="Next photograph">›</button>
        </div>
      </div>
    `;

    this.mount.appendChild(this.section);

    this.stage = this.section.querySelector('#experience-slider-stage');
    this.slides = this.section.querySelectorAll('.slider-slide');
    this.labelText = this.section.querySelector('#slider-label-text');
    this.progressBar = this.section.querySelector('#slider-progress-line');

    // Lightbox elements
    this.lightbox = this.section.querySelector('#experience-lightbox');
    this.lightboxImg = this.section.querySelector('#lightbox-img');
    this.lightboxCaption = this.section.querySelector('#lightbox-caption');
  }

  bindEvents() {
    if (!this.section) return;

    const prevBtn = this.section.querySelector('#slider-btn-prev');
    const nextBtn = this.section.querySelector('#slider-btn-next');

    // Manual navigation: Left arrow
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prevSlide();
      });
    }

    // Manual navigation: Right arrow
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nextSlide();
      });
    }

    // Clicking the image opens the lightbox
    if (this.stage) {
      this.stage.addEventListener('click', (e) => {
        // If clicking navigation buttons, do not open lightbox
        if (e.target.closest('.slider-arrow-btn')) return;
        this.openLightbox(this.currentIndex);
      });

      this.stage.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openLightbox(this.currentIndex);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.prevSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.nextSlide();
        }
      });
    }

    // Lightbox modal controls
    const closeBtn = this.section.querySelector('#lightbox-close-btn');
    const lPrevBtn = this.section.querySelector('#lightbox-prev-btn');
    const lNextBtn = this.section.querySelector('#lightbox-next-btn');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeLightbox());
    }

    if (lPrevBtn) {
      lPrevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prevLightbox();
      });
    }

    if (lNextBtn) {
      lNextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nextLightbox();
      });
    }

    // Outside click closes lightbox
    if (this.lightbox) {
      this.lightbox.addEventListener('click', (e) => {
        if (e.target === this.lightbox) {
          this.closeLightbox();
        }
      });
    }

    // Global keyboard handling for lightbox
    window.addEventListener('keydown', (e) => {
      if (!this.lightboxOpen) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') this.prevLightbox();
      if (e.key === 'ArrowRight') this.nextLightbox();
    });
  }

  /* --------------------------------------------------------------------------
     Automatic Slider Mechanics (2s interval, reset upon manual interaction)
     -------------------------------------------------------------------------- */
  startAutoSlide() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    this.resetProgressAnimation();
    this.clearTimers();

    this.timer = setInterval(() => {
      this.nextSlide(true);
    }, this.intervalMs);
  }

  resetProgressAnimation() {
    if (!this.progressBar) return;
    this.progressBar.style.transition = 'none';
    this.progressBar.style.width = '0%';
    void this.progressBar.offsetWidth; // Force reflow
    this.progressBar.style.transition = `width ${this.intervalMs}ms linear`;
    this.progressBar.style.width = '100%';
  }

  clearTimers() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  nextSlide(isAuto = false) {
    if (this.isTransitioning) return;
    const nextIdx = (this.currentIndex + 1) % this.photos.length;
    this.goToSlide(nextIdx, 'next');

    if (!isAuto) {
      this.startAutoSlide(); // Reset 2s timer upon manual interaction
    } else {
      this.resetProgressAnimation();
    }
  }

  prevSlide() {
    if (this.isTransitioning) return;
    const prevIdx = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
    this.goToSlide(prevIdx, 'prev');
    this.startAutoSlide(); // Reset 2s timer upon manual interaction
  }

  goToSlide(targetIdx, direction = 'next') {
    if (targetIdx === this.currentIndex || this.isTransitioning) return;
    this.isTransitioning = true;

    const currentSlide = this.slides[this.currentIndex];
    const targetSlide = this.slides[targetIdx];

    // Directional transition:
    // next: current slides left, target enters from right
    // prev: current slides right, target enters from left
    const exitClass = direction === 'next' ? 'exit-left' : 'exit-right';
    const enterClass = direction === 'next' ? 'enter-right' : 'enter-left';

    targetSlide.classList.remove('exit-left', 'exit-right');
    targetSlide.classList.add(enterClass);
    void targetSlide.offsetWidth; // Force reflow

    currentSlide.classList.remove('active');
    currentSlide.classList.add(exitClass);
    currentSlide.setAttribute('aria-hidden', 'true');

    targetSlide.classList.remove(enterClass);
    targetSlide.classList.add('active');
    targetSlide.setAttribute('aria-hidden', 'false');

    this.currentIndex = targetIdx;

    // Update label text smoothly
    if (this.labelText) {
      this.labelText.style.opacity = '0';
      setTimeout(() => {
        this.labelText.textContent = this.photos[targetIdx].label;
        this.labelText.style.opacity = '1';
      }, 200);
    }

    setTimeout(() => {
      currentSlide.classList.remove('exit-left', 'exit-right');
      this.isTransitioning = false;
    }, 700);
  }

  /* --------------------------------------------------------------------------
     Lightbox Modal
     -------------------------------------------------------------------------- */
  openLightbox(index) {
    this.currentIndex = index;
    this.updateLightboxContent();
    this.lightbox.classList.add('open');
    this.lightbox.setAttribute('aria-hidden', 'false');
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    if (!this.lightbox) return;
    this.lightbox.classList.remove('open');
    this.lightbox.setAttribute('aria-hidden', 'true');
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  prevLightbox() {
    this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
    this.updateLightboxContent();
  }

  nextLightbox() {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
    this.updateLightboxContent();
  }

  updateLightboxContent() {
    const photo = this.photos[this.currentIndex];
    if (this.lightboxImg) {
      this.lightboxImg.src = photo.src;
      this.lightboxImg.alt = photo.alt;
    }
    if (this.lightboxCaption) {
      this.lightboxCaption.innerHTML = `
        <span class="lightbox-caption-label">${photo.label}</span>
        <span class="lightbox-caption-sep">•</span>
        <span class="lightbox-caption-desc">${photo.desc}</span>
      `;
    }
  }
}
