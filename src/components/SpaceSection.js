/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — SECTION 05: THE SPACE
   "Come for the Food. Stay for the Moment." — Interior Panoramic Atmosphere
   ========================================================================== */

export class SpaceSection {
  constructor(mountSelector = '#space-mount') {
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
    this.section.id = 'space';
    this.section.className = 'space-section section';
    this.section.setAttribute('aria-label', 'The Space and Dining Atmosphere');

    this.section.innerHTML = `
      <div class="container">
        <!-- Section Header -->
        <div class="space-header">
          <div class="space-eyebrow">
            <span>Hospitality & Ambiance</span>
          </div>
          <h2 class="space-statement">THE SPACE</h2>
          <p class="space-lead">
            COME FOR THE FOOD. STAY FOR THE MOMENT.
          </p>
        </div>

        <!-- Panoramic Showcase Mosaic -->
        <div class="space-gallery-mosaic">
          <!-- Item 1: Warm Dining Hall -->
          <div class="space-mosaic-item space-mosaic-1">
            <img src="interior/interior1.jpeg" alt="Madhura spacious dining hall" loading="lazy" />
            <div class="space-item-overlay">
              <span class="space-item-sub">THE INTERIOR</span>
              <span class="space-item-title">Spacious Family Seating & Warm Hospitality</span>
            </div>
          </div>

          <!-- Item 2: Intimate Table Booths -->
          <div class="space-mosaic-item space-mosaic-2">
            <img src="interior/interior3.jpeg" alt="Madhura warm ambient evening booths" loading="lazy" />
            <div class="space-item-overlay">
              <span class="space-item-sub">THE ATMOSPHERE</span>
              <span class="space-item-title">Warm Chandelier Lighting & Intimate Booths</span>
            </div>
          </div>

          <!-- Item 3: Wide Gathering Banquet Panel -->
          <div class="space-mosaic-item space-mosaic-3">
            <img src="interior/interior4.jpeg" alt="Madhura wide dining gathering celebration tables" loading="lazy" />
            <div class="space-item-overlay">
              <span class="space-item-sub">CELEBRATIONS</span>
              <span class="space-item-title">A Welcoming Setting for Family Dinners & Shared Feasts</span>
            </div>
          </div>
        </div>
      </div>
    `;

    this.mount.appendChild(this.section);
  }
}
