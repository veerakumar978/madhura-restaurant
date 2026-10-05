/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — WELCOME CINEMATIC OPENING
   Permanent Opening Video with Sticky Scroll Transition into Website
   ========================================================================== */

export class IntroExperience {
  constructor(options = {}) {
    this.mountSelector = options.mountSelector || '#welcome-mount';
    this.videoSrc = options.videoSrc || 'hero/welcome video.mp4';
    this.mount = document.querySelector(this.mountSelector);
    this.track = null;
    this.stickyStage = null;
    this.video = null;
    this.scrollCue = null;
    this.isEnded = false;

    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
    this.setupScrollTransition();
  }

  render() {
    if (!this.mount) {
      // Create mount element at very top of #app if not present
      const app = document.querySelector('#app') || document.body;
      this.mount = document.createElement('div');
      this.mount.id = 'welcome-mount';
      app.insertBefore(this.mount, app.firstChild);
    }

    this.mount.innerHTML = `
      <section class="welcome-track-section" id="welcome-track" aria-label="Welcome to Madhura Restaurant">
        <div class="welcome-sticky-stage" id="welcome-sticky-stage">
          <video 
            class="welcome-video" 
            id="welcome-video-el"
            src="${encodeURI(this.videoSrc)}" 
            muted 
            autoplay 
            loop
            playsinline 
            preload="auto"
            aria-label="Welcome to Madhura Multicuisine Restaurant Jangareddygudem"
          ></video>

          <!-- Subtle Vignette Frame -->
          <div class="welcome-vignette" aria-hidden="true"></div>

          <!-- Permanent Elegant Scroll Indicator (Appears when video finishes or immediately ready) -->
          <div class="welcome-scroll-cue" id="welcome-scroll-cue" role="button" tabindex="0" aria-label="Scroll down to enter website">
            <span class="welcome-cue-text">SCROLL DOWN</span>
            <div class="welcome-cue-indicator" aria-hidden="true">
              <span class="welcome-cue-pipe"></span>
              <span class="welcome-cue-arrow">↓</span>
            </div>
          </div>
        </div>
      </section>
    `;

    this.track = this.mount.querySelector('#welcome-track');
    this.stickyStage = this.mount.querySelector('#welcome-sticky-stage');
    this.video = this.mount.querySelector('#welcome-video-el');
    this.scrollCue = this.mount.querySelector('#welcome-scroll-cue');
  }

  bindEvents() {
    if (!this.video) return;

    // When video completes cycle: ensure scroll cue appears and keep looping seamlessly
    this.video.addEventListener('ended', () => {
      this.isEnded = true;
      this.showScrollCue();
      this.video.currentTime = 0;
      this.video.play().catch(() => {});
    });

    // Reveal scroll cue as first playthrough nears completion
    this.video.addEventListener('timeupdate', () => {
      if (this.video.duration && this.video.currentTime >= this.video.duration - 0.8) {
        this.showScrollCue();
      }
    });

    // Fallback timer: ensure scroll indicator shows after 4.5s regardless of network
    setTimeout(() => {
      this.showScrollCue();
    }, 4500);

    // Whenever user scrolls back up to the top, ensure video is actively playing in loop
    window.addEventListener('scroll', () => {
      if (window.scrollY < 400 && this.video && this.video.paused) {
        this.video.play().catch(() => {});
      }
    }, { passive: true });

    // Clicking scroll cue scrolls smoothly into Hero
    if (this.scrollCue) {
      this.scrollCue.addEventListener('click', () => {
        this.scrollToHero();
      });

      this.scrollCue.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.scrollToHero();
        }
      });
    }

    // Try autoplay safely
    const playPromise = this.video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Autoplay prevented or video loading delayed:', err);
        this.showScrollCue();
      });
    }
  }

  showScrollCue() {
    if (this.scrollCue) {
      this.scrollCue.classList.add('visible');
    }
  }

  scrollToHero() {
    const heroEl = document.getElementById('home') || document.getElementById('hero-mount');
    if (heroEl) {
      const targetPos = heroEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    } else if (this.track) {
      window.scrollTo({
        top: this.track.offsetHeight,
        behavior: 'smooth'
      });
    }
  }

  /* --------------------------------------------------------------------------
     Sticky Cinematic Opening Transition
     As user scrolls, video scales 1.0 -> 0.92, translates slightly, and fades
     over ~600–900px of scroll distance. Once scrolled past, Hero is primary.
     -------------------------------------------------------------------------- */
  setupScrollTransition() {
    if (!this.track || !this.stickyStage) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.showScrollCue();
      return;
    }

    const onScroll = () => {
      const rect = this.track.getBoundingClientRect();
      const trackHeight = this.track.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollDistance = trackHeight - windowHeight;

      if (scrollDistance <= 0) return;

      const scrollTop = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, scrollTop / scrollDistance));

      // Scale from 1.0 -> 0.92
      const scale = 1.0 - (0.08 * progress);
      // Subtle upward translation
      const translateY = -24 * progress;
      // Soft reduction in opacity to reveal parchment Hero underneath
      const opacity = 1.0 - (0.4 * progress);

      this.stickyStage.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      this.stickyStage.style.opacity = `${opacity}`;

      // When user scrolls back up into welcome video area, ensure video continues playing in loop
      if (progress < 0.95 && this.video && this.video.paused) {
        this.video.play().catch(() => {});
      }

      // Notify Hero stagger animation when user begins entering site
      if (progress > 0.1) {
        document.body.classList.add('in-website');
        window.dispatchEvent(new CustomEvent('intro:completed'));
      } else {
        document.body.classList.remove('in-website');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
}
