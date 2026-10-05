/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — SECTION 05: VISIT MADHURA
   Restaurant Coordinates, Opening Hours & Classical Interactive Contact Cards
   ========================================================================== */

export class VisitSection {
  constructor(mountSelector = '#visit-mount') {
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
    this.section.id = 'visit';
    this.section.className = 'visit-section section';
    this.section.setAttribute('aria-label', 'Visit Madhura Multicuisine Restaurant in Jangareddygudem');

    this.section.innerHTML = `
      <div class="container">
        <div class="visit-grid">
          <!-- Left Visual Card (exterior/night-view.jpeg, aspect-ratio 4:5 with ZERO gap) -->
          <div class="visit-visual-card">
            <div class="visit-img-frame">
              <img 
                src="exterior/night-view.jpeg" 
                alt="Madhura Restaurant Night View in Jangareddygudem"
                loading="lazy"
                width="720"
                height="1107"
              />
            </div>
            <div class="visit-badge-bottom">
              <span class="visit-badge-title">MADHURA RESTAURANT</span>
              <span class="visit-badge-loc">Jangareddygudem, A.P.</span>
            </div>
          </div>

          <!-- Right Information & Contact Grid -->
          <div class="visit-info-column">
            <div class="visit-eyebrow">
              <span>FIND YOUR TABLE</span>
            </div>

            <h2 class="visit-heading">VISIT MADHURA</h2>

            <!-- Restaurant Metadata Details -->
            <div class="visit-details-list">
              <div class="visit-detail-item">
                <span class="visit-detail-label">ADDRESS</span>
                <span class="visit-detail-val">Main Road, Jangareddygudem, Eluru District, Andhra Pradesh</span>
              </div>

              <div class="visit-detail-item">
                <span class="visit-detail-label">OPENING HOURS</span>
                <span class="visit-detail-val">11:00 AM – 11:00 PM • Monday to Sunday</span>
              </div>

              <div class="visit-detail-item">
                <span class="visit-detail-label">CUISINE & SERVICE</span>
                <span class="visit-detail-val">Multicuisine Dining • Family AC Hall • Takeaway Available</span>
              </div>
            </div>

            <!-- 4 Classical Interactive Contact Cards -->
            <div class="visit-actions-grid">
              <!-- Location Card -->
              <a 
                href="https://maps.google.com/?q=Madhura+Restaurant+Jangareddygudem" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="contact-card"
                aria-label="Open location in Google Maps"
              >
                <div class="contact-card-left">
                  <div class="contact-card-icon">
                    <img src="icons/location.svg" alt="" aria-hidden="true" width="24" height="24" />
                  </div>
                  <div class="contact-card-text">
                    <span class="contact-card-title">LOCATION</span>
                    <span class="contact-card-sub">Google Maps</span>
                  </div>
                </div>
                <span class="contact-card-arrow" aria-hidden="true">→</span>
              </a>

              <!-- WhatsApp Card -->
              <a 
                href="https://wa.me/?text=Hello%20Madhura%20Restaurant%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="contact-card"
                aria-label="Chat with Madhura Restaurant on WhatsApp"
              >
                <div class="contact-card-left">
                  <div class="contact-card-icon">
                    <img src="icons/whatsapp.svg" alt="" aria-hidden="true" width="24" height="24" />
                  </div>
                  <div class="contact-card-text">
                    <span class="contact-card-title">WHATSAPP</span>
                    <span class="contact-card-sub">Quick Chat</span>
                  </div>
                </div>
                <span class="contact-card-arrow" aria-hidden="true">→</span>
              </a>

              <!-- Instagram Card -->
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="contact-card"
                aria-label="Follow Madhura Restaurant on Instagram"
              >
                <div class="contact-card-left">
                  <div class="contact-card-icon">
                    <img src="icons/instagram.svg" alt="" aria-hidden="true" width="24" height="24" />
                  </div>
                  <div class="contact-card-text">
                    <span class="contact-card-title">INSTAGRAM</span>
                    <span class="contact-card-sub">@madhurarestaurant</span>
                  </div>
                </div>
                <span class="contact-card-arrow" aria-hidden="true">→</span>
              </a>

              <!-- Phone Call Card -->
              <a 
                href="tel:+919989991234" 
                class="contact-card"
                aria-label="Call Madhura Restaurant directly"
              >
                <div class="contact-card-left">
                  <div class="contact-card-icon">
                    <img src="icons/phone.svg" alt="" aria-hidden="true" width="24" height="24" />
                  </div>
                  <div class="contact-card-text">
                    <span class="contact-card-title">CALL US</span>
                    <span class="contact-card-sub">Table & Takeaway</span>
                  </div>
                </div>
                <span class="contact-card-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    this.mount.appendChild(this.section);
  }
}
