/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — SECTION 06: DAY & NIGHT
   Architectural Facade Transition from Daylight Clarity to Evening Illumination
   ========================================================================== */

export class DayNightSection {
  constructor(mountSelector = '#daynight-mount') {
    this.mount = document.querySelector(mountSelector);
    this.section = null;

    this.init();
  }

  init() {
    this.render();
  }

  render() {
    if (!this.mount) return;

    this.section = document.createElement('section');
    this.section.id = 'day-night';
    this.section.className = 'daynight-section section';
    this.section.setAttribute('aria-label', 'Madhura Restaurant Day and Night Architectural Elevation');

    this.section.innerHTML = `
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-centered">
          <div class="heritage-eyebrow">
            <span>Architectural Presence</span>
          </div>
          <h2 class="heritage-statement">DAY & NIGHT</h2>
          <p class="heritage-lead">
            From morning light welcoming lunch guests to evening golden celebrations glowing with festive warmth.
          </p>
        </div>

        <!-- Architectural Comparison Grid -->
        <div class="daynight-comparison-container">
          <!-- Card 1: Morning View -->
          <div class="daynight-card">
            <div class="daynight-card-img-wrap">
              <img 
                src="exterior/morning-view.jpeg" 
                alt="Madhura Restaurant Morning Architectural Daylight Elevation"
                loading="lazy"
              />
            </div>
            <div class="daynight-caption">
              <span class="daynight-title">DAYLIGHT WELCOME</span>
              <span class="daynight-time">11:00 AM — Afternoon Dining</span>
            </div>
          </div>

          <!-- Card 2: Night View (Primary Brand Image) -->
          <div class="daynight-card">
            <div class="daynight-card-img-wrap">
              <img 
                src="exterior/night-view.jpeg" 
                alt="Madhura Restaurant Evening Illumination and Glowing Signboard"
                loading="lazy"
              />
            </div>
            <div class="daynight-caption">
              <span class="daynight-title">EVENING CELEBRATION</span>
              <span class="daynight-time">07:00 PM — Night Feasts</span>
            </div>
          </div>
        </div>
      </div>
    `;

    this.mount.appendChild(this.section);
  }
}
