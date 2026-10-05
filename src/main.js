/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — COMPLETE PRODUCTION MASTER ENTRYPOINT
   Classic Heritage Theme (Inspired by Physical Menu Language)
   ========================================================================== */

import { IntroExperience } from './components/IntroExperience.js';
import { Header } from './components/Header.js';
import { HeroSection } from './components/HeroSection.js';
import { ExperienceSection } from './components/ExperienceSection.js';
import { MenuSection } from './components/MenuSection.js';
import { MenuBookSection } from './components/MenuBookSection.js';
import { VisitSection } from './components/VisitSection.js';
import { MemoryEndingSection } from './components/MemoryEndingSection.js';

// 13. REFRESH BEHAVIOR: Always begin at the Hero after refresh.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Remove any stale URL hash on initial load without page jumping
if (window.location.hash) {
  history.replaceState(null, document.title, window.location.pathname + window.location.search);
}

class MadhuraApp {
  constructor() {
    this.init();
  }

  init() {
    // Mount all production sections in sequence
    this.header = new Header('#header-mount');
    this.hero = new HeroSection('#hero-mount');
    this.experience = new ExperienceSection('#experience-mount');
    this.menu = new MenuSection('#menu-mount');
    this.menuBook = new MenuBookSection('#menubook-mount');
    this.visit = new VisitSection('#visit-mount');
    this.memory = new MemoryEndingSection('#memory-mount');

    // Initialize cinematic intro welcome video
    this.intro = new IntroExperience({
      mountSelector: '#welcome-mount',
      videoSrc: 'hero/welcome video.mp4',
      blackHoldMs: 400
    });

    console.log('%c✦ MADHURA MULTICUISINE RESTAURANT ✦', 'color: #B58A45; font-weight: bold; font-size: 16px; font-family: serif;');
    console.log('%cClassic Heritage Restaurant Theme — Complete Production Build', 'color: #402018; font-weight: bold;');
  }
}

// Boot application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new MadhuraApp());
} else {
  new MadhuraApp();
}
