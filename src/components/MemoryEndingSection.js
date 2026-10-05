/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — FINAL CINEMATIC MEMORY ENDING
   Hero Serving Action: Server Enters From Left, Walks 4–5 Steps, Serves
   Hot Biryani, Guest Reaction, Theatrical Thank You & Seamless Quick Loop
   ========================================================================== */

export class MemoryEndingSection {
  constructor(mountSelector = '#memory-mount') {
    this.mount = document.querySelector(mountSelector);
    this.section = null;
    this.sceneStage = null;
    this.thankYouOverlay = null;
    this.observer = null;
    this.isActive = false;
    this.loopTimer = null;
    this.stepTimers = [];

    this.init();
  }

  init() {
    this.render();
    this.setupScrollTrigger();
  }

  render() {
    if (!this.mount) return;

    this.section = document.createElement('section');
    this.section.id = 'memory';
    this.section.className = 'memory-ending-section';
    this.section.setAttribute('aria-label', 'Madhura Memory — The Serving Moment');

    this.section.innerHTML = `
      <div class="memory-container">
        <!-- Main Illustrated Restaurant Scene (Already 100% Pre-rendered & Fully Visible) -->
        <div class="memory-scene-stage scene-visible" id="memory-scene-stage">
          <svg 
            class="memory-restaurant-svg" 
            viewBox="0 0 1100 450" 
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <!-- 1. Background Architecture: Arches, Pendant Lights & Floor Line -->
            <g class="layer-architecture">
              <!-- Left Entrance Arch (Where server enters) -->
              <path class="arch-stroke" d="M 60,410 L 60,180 C 60,90 160,50 250,50 C 340,50 440,90 440,180 L 440,410" />
              <!-- Right Alcove Arch -->
              <path class="arch-stroke" d="M 520,410 L 520,180 C 520,90 620,50 720,50 C 820,50 920,90 920,180 L 920,410" />
              <!-- Architectural Molding Line -->
              <line x1="30" y1="165" x2="1060" y2="165" class="arch-molding" />
              
              <!-- Entrance Wall Sconce Lamp -->
              <path class="sconce-stroke" d="M 80,180 L 96,180 L 102,205 L 74,205 Z" />
              <circle cx="88" cy="210" r="3" class="light-bulb" />

              <!-- Dining Alcove Pendant Chandelier -->
              <line x1="720" y1="0" x2="720" y2="100" class="light-cord" />
              <path class="light-shade" d="M 690,100 L 750,100 L 762,122 L 678,122 Z" />
              <circle cx="720" cy="128" r="4" class="light-bulb" />

              <!-- Floor Ground Line -->
              <line x1="20" y1="410" x2="1080" y2="410" class="floor-line" />
            </g>

            <!-- 2. Dining Chairs -->
            <g class="layer-chairs">
              <!-- Chair 1 (Guest 1, Center-Left) -->
              <path class="chair-stroke" d="M 570,390 L 578,285 C 578,240 584,200 592,185 C 596,180 608,180 612,185 C 618,200 624,240 624,285 L 632,390" />
              <path class="chair-stroke" d="M 578,310 L 626,310" />

              <!-- Chair 2 (Guest 2, Center-Right) -->
              <path class="chair-stroke" d="M 720,390 L 728,285 C 728,240 734,200 742,185 C 746,180 758,180 762,185 C 768,200 774,240 774,285 L 782,390" />
              <path class="chair-stroke" d="M 728,310 L 776,310" />

              <!-- Chair 3 (Guest 3, Right Side) -->
              <path class="chair-stroke" d="M 870,410 L 878,295 C 878,235 870,185 862,168 C 858,162 846,162 842,168 C 838,185 832,235 832,295 L 824,410" />
              <path class="chair-stroke" d="M 872,320 L 826,320" />
            </g>

            <!-- 3. The Grand Dining Table & Tablecloth -->
            <g class="layer-table">
              <!-- Table Surface -->
              <path class="table-surface" d="M 460,285 C 460,265 580,252 710,252 C 840,252 950,265 950,285 L 965,365 C 930,380 880,385 830,380 L 800,360 L 750,385 C 710,390 650,390 610,385 L 560,360 L 530,380 C 490,385 460,380 445,365 Z" />
              <!-- Drapery Folds -->
              <path class="table-fold" d="M 505,285 C 510,315 515,350 520,378" />
              <path class="table-fold" d="M 610,282 C 612,310 612,335 610,360" />
              <path class="table-fold" d="M 710,280 C 710,310 710,350 710,388" />
              <path class="table-fold" d="M 830,282 C 828,310 828,335 830,360" />
              <path class="table-fold" d="M 910,285 C 905,315 900,350 895,378" />
              <!-- Table Rim Highlight -->
              <ellipse cx="705" cy="282" rx="240" ry="22" class="table-rim" />
            </g>

            <!-- 4. Table Setting: Plates, Cutlery, Glasses & Side Dish -->
            <g class="layer-tableware">
              <!-- Guest 1 Setting (x=605) -->
              <ellipse cx="605" cy="284" rx="22" ry="7" class="dish-stroke" />
              <line x1="578" y1="279" x2="578" y2="289" class="cutlery-stroke" />
              <line x1="632" y1="279" x2="632" y2="289" class="cutlery-stroke" />

              <!-- Guest 2 Setting (x=745) -->
              <ellipse cx="745" cy="284" rx="22" ry="7" class="dish-stroke" />
              <line x1="718" y1="279" x2="718" y2="289" class="cutlery-stroke" />
              <line x1="772" y1="279" x2="772" y2="289" class="cutlery-stroke" />

              <!-- Guest 3 Setting (x=860) -->
              <ellipse cx="860" cy="282" rx="20" ry="6.5" class="dish-stroke" />

              <!-- Stemmed Wine Goblet near Guest 2 -->
              <path class="glass-stroke" d="M 782,272 L 780,260 C 780,256 790,256 790,260 L 788,272 Z" />
              <line x1="785" y1="272" x2="785" y2="277" class="glass-stroke" />
              <line x1="781" y1="277" x2="789" y2="277" class="glass-stroke" />

              <!-- Water Tumbler near Guest 1 -->
              <path class="glass-stroke" d="M 566,275 L 564,263 C 564,260 572,260 572,263 L 570,275 Z" />

              <!-- Side Accompaniments (Raita Bowl & Salan Dish) -->
              <ellipse cx="675" cy="274" rx="14" ry="5" class="dish-stroke" />
              <ellipse cx="715" cy="272" rx="12" ry="4.5" class="dish-stroke" />

              <!-- Placed Biryani Dish Target on Table (Appears when server places it at x=525) -->
              <g class="table-served-biryani" id="table-served-biryani">
                <ellipse cx="525" cy="278" rx="34" ry="11" class="dish-stroke biryani-platter-rim" />
                <path class="handi-body" d="M 495,278 C 495,292 555,292 555,278 Z" />
                <ellipse cx="525" cy="276" rx="27" ry="7" class="food-grain" />
                <path class="handi-handle-l" d="M 495,276 C 488,276 488,282 495,282" />
                <path class="handi-handle-r" d="M 555,276 C 562,276 562,282 555,282" />
                <!-- Fragrant Rising Steam (Activates when Biryani is Served) -->
                <g class="biryani-steam-group" id="biryani-steam-group">
                  <path class="steam-line steam-1" d="M 515,264 C 510,248 522,234 518,218 C 514,204 522,192 516,176" />
                  <path class="steam-line steam-2" d="M 527,262 C 533,246 523,232 529,216 C 535,202 527,188 533,172" />
                  <path class="steam-line steam-3" d="M 538,264 C 544,248 534,234 540,220 C 546,206 538,194 544,180" />
                </g>
              </g>
            </g>

            <!-- 5. Seated Dinner Guests (Realistic Proportions, In Conversation) -->
            <g class="layer-guests">
              <!-- Guest 1 (Center-Left, Leaning In When Served) -->
              <g class="guest-group" id="guest-1">
                <ellipse cx="605" cy="150" rx="13.5" ry="17" class="person-head" />
                <path class="person-hair" d="M 594,146 C 594,134 608,132 616,136 C 620,140 620,150 618,158" />
                <path class="person-body" d="M 580,192 C 592,182 618,182 630,192 L 636,275 C 620,280 590,280 576,275 Z" />
                <!-- Left Arm on table -->
                <path class="person-arm" d="M 582,195 C 578,222 585,248 605,272 L 620,274" />
                <!-- Right Arm Resting / Reacting -->
                <g class="guest-react-arm" id="guest-1-react-arm">
                  <path class="person-arm" d="M 628,195 C 636,218 644,240 655,268 L 650,272" />
                  <ellipse cx="652" cy="272" rx="3.5" ry="3.5" class="hand-gesture" />
                </g>
              </g>

              <!-- Guest 2 (Center-Right, Gesturing Delighted Conversation) -->
              <g class="guest-group" id="guest-2">
                <ellipse cx="750" cy="150" rx="13.5" ry="17" class="person-head" />
                <path class="person-hair" d="M 739,146 C 739,134 753,132 761,136 C 765,140 765,150 763,158" />
                <path class="person-body" d="M 725,192 C 737,182 763,182 775,192 L 779,275 C 765,280 735,280 721,275 Z" />
                <!-- Left Arm resting -->
                <path class="person-arm" d="M 727,195 C 721,222 727,248 740,270 L 755,273" />
                <!-- Right Arm Conversational Gesture -->
                <g class="guest-react-arm" id="guest-2-react-arm">
                  <path class="person-arm" d="M 773,195 C 781,215 788,238 782,260 L 778,266" />
                  <ellipse cx="777" cy="265" rx="3.5" ry="3.5" class="hand-gesture" />
                </g>
              </g>

              <!-- Guest 3 (Right End, Turned Inward) -->
              <g class="guest-group" id="guest-3">
                <ellipse cx="855" cy="154" rx="14" ry="18" class="person-head" />
                <path class="person-hair" d="M 867,150 C 867,138 853,136 845,140 C 840,144 839,154 841,162" />
                <path class="person-body" d="M 883,200 C 870,188 840,188 827,200 L 820,290 C 835,295 875,295 890,290 Z" />
                <path class="person-arm" d="M 881,202 C 887,228 885,258 855,274 L 830,276" />
              </g>
            </g>

            <!-- 6. HERO WALKING SERVER (Enters Left, Takes 5 Steps, Serves Biryani) -->
            <g class="server-hero-track" id="server-hero-track">
              <g class="server-character" id="server-character">
                <!-- Two Walking Legs (Hip joint at y=285, feet plant at y=408) -->
                <!-- Left Leg -->
                <g class="server-leg-left" id="server-leg-left">
                  <path class="server-trouser" d="M 124,285 L 120,345 L 118,400 L 132,408 L 136,400 L 132,345 L 134,285 Z" />
                  <!-- Shoe -->
                  <path class="server-shoe" d="M 116,402 L 140,405 C 144,407 142,410 134,410 L 114,410 Z" />
                </g>

                <!-- Right Leg -->
                <g class="server-leg-right" id="server-leg-right">
                  <path class="server-trouser" d="M 138,285 L 142,345 L 144,400 L 158,408 L 162,400 L 154,345 L 148,285 Z" />
                  <!-- Shoe -->
                  <path class="server-shoe" d="M 142,402 L 166,405 C 170,407 168,410 160,410 L 140,410 Z" />
                </g>

                <!-- Upper Body: Head, Torso, Arms Holding Biryani (Bobs during walk) -->
                <g class="server-upper-body" id="server-upper-body">
                  <!-- Head & Clean Hair Cut (Facing right toward dining room) -->
                  <ellipse cx="140" cy="132" rx="13" ry="17" class="person-head" />
                  <path class="person-hair" d="M 129,128 C 129,116 142,114 150,118 C 154,122 154,132 152,140" />
                  <!-- Neck & Crisp Collar -->
                  <path class="person-body" d="M 136,149 L 136,164 M 144,149 L 144,164" />
                  <path class="server-tie" d="M 140,164 L 142,185 L 140,192 L 138,185 Z" />

                  <!-- Formal Waiter Vest / Jacket -->
                  <path class="server-torso" d="M 122,168 C 136,156 160,156 170,168 L 166,285 L 124,285 Z" />
                  <line x1="144" y1="168" x2="144" y2="245" class="server-seam" />
                  <circle cx="144" cy="192" r="1.5" class="server-button" />
                  <circle cx="144" cy="208" r="1.5" class="server-button" />
                  <circle cx="144" cy="224" r="1.5" class="server-button" />

                  <!-- Both Arms Extending Forward Carrying Hot Biryani Platter -->
                  <g class="server-carrying-arms" id="server-carrying-arms">
                    <!-- Left Arm (underneath supporting plate) -->
                    <path class="person-arm arm-carry-left" d="M 130,172 C 140,198 162,228 190,238 L 208,242" />
                    <!-- Right Arm (front supporting rim) -->
                    <path class="person-arm arm-carry-right" d="M 162,172 C 172,196 195,224 222,236 L 235,240" />
                    <!-- Hands Holding Platter -->
                    <ellipse cx="206" cy="242" rx="3.5" ry="3.5" class="hand-gesture" />
                    <ellipse cx="236" cy="240" rx="3.5" ry="3.5" class="hand-gesture" />

                    <!-- The Hot Biryani Platter Carried by Server -->
                    <g class="server-carried-biryani" id="server-carried-biryani">
                      <ellipse cx="220" cy="240" rx="32" ry="10" class="dish-stroke" />
                      <path class="handi-body" d="M 192,240 C 192,254 248,254 248,240 Z" />
                      <ellipse cx="220" cy="238" rx="25" ry="6.5" class="food-grain" />
                      <path class="handi-handle-l" d="M 192,238 C 185,238 185,244 192,244" />
                      <path class="handi-handle-r" d="M 248,238 C 255,238 255,244 248,244" />
                      <!-- Small Travel Steam Wisps While Walking -->
                      <path class="steam-line steam-walk" d="M 216,228 C 212,216 220,206 216,194" />
                      <path class="steam-line steam-walk-2" d="M 226,226 C 230,214 224,204 228,192" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <!-- Theatrical Centered Thank You Message -->
        <div class="memory-thankyou-overlay" id="memory-thankyou-overlay" aria-live="polite">
          <div class="thankyou-card">
            <h3 class="thankyou-headline">
              THANK YOU<br />
              <span class="thankyou-subline">FOR VISITING US.</span>
            </h3>

            <div class="thankyou-divider" aria-hidden="true">
              <span class="thankyou-divider-line"></span>
              <span class="thankyou-divider-flourish">❧</span>
              <span class="thankyou-divider-line"></span>
            </div>

            <p class="thankyou-quote">
              “Good food is shared. Good moments are remembered.”
            </p>

            <div class="thankyou-signature">
              <span class="signature-name">MADHURA</span>
              <span class="signature-sub">A MULTICUISINE RESTAURANT</span>
            </div>
          </div>
        </div>
      </div>
    `;

    this.mount.appendChild(this.section);

    this.sceneStage = this.section.querySelector('#memory-scene-stage');
    this.thankYouOverlay = this.section.querySelector('#memory-thankyou-overlay');
  }

  /* --------------------------------------------------------------------------
     Scroll Trigger: Start the cinematic timeline when 20% enters viewport
     -------------------------------------------------------------------------- */
  setupScrollTrigger() {
    if (!this.section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (this.sceneStage) this.sceneStage.style.opacity = '1';
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          if (!this.isActive) {
            this.startLoopTimeline();
          }
        }
      });
    }, {
      threshold: [0.2, 0.35]
    });

    this.observer.observe(this.section);
  }

  /* --------------------------------------------------------------------------
     Exact 11.8s Cinematic Serving Action Timeline
     0.0 – 0.8s: Complete scene visible, calm atmosphere
     0.8 – 3.4s: Server enters & takes 5 visible walking steps to table (2.6s)
     3.4 – 4.2s: Server slows down & arrives beside table (0.8s)
     4.2 – 5.4s: Server leans forward, carefully places biryani on table (1.2s)
     5.4 – 6.3s: Biryani rests on table, steam rises, guests react (0.9s)
     6.3 – 7.1s: Hold the complete served restaurant moment (0.8s)
     7.1 – 7.8s: Entire restaurant scene fades out together (0.7s)
     7.8 – 8.4s: THANK YOU message appears smoothly (0.6s)
     8.4 – 10.2s: THANK YOU message remains (1.8s hold)
     10.2 – 10.7s: Thank You message fades away (0.5s)
     10.7 – 11.2s: Next restaurant scene fades back in (0.5s)
     11.3s: Loop repeats seamlessly without dead waiting period!
     -------------------------------------------------------------------------- */
  startLoopTimeline() {
    this.isActive = true;
    this.clearAllTimers();
    this.runCycle();

    // 11.8s seamless continuous loop
    this.loopTimer = setInterval(() => {
      this.runCycle();
    }, 11800);
  }

  runCycle() {
    this.resetSceneState();

    // 0.0s — Initial Frame: Complete restaurant scene is 100% visible and alive
    this.sceneStage.classList.add('scene-visible');

    // 0.8s — Server begins 5-step natural walk with fresh biryani
    this.scheduleStep(800, () => {
      this.section.classList.add('server-walking');
    });

    // 3.4s — Server reaches table and slows down naturally
    this.scheduleStep(3400, () => {
      this.section.classList.remove('server-walking');
      this.section.classList.add('server-arrived');
    });

    // 4.2s — Server leans forward and carefully places biryani onto table
    this.scheduleStep(4200, () => {
      this.section.classList.add('server-placing');
    });

    // 5.4s — Biryani placed on table, hands release, steam rises, guests react
    this.scheduleStep(5400, () => {
      this.section.classList.add('biryani-served', 'guests-reacting');
    });

    // 6.3s — Hold the restaurant moment (0.8s peaceful hold)
    this.scheduleStep(6300, () => {
      this.section.classList.add('moment-hold');
    });

    // 7.1s — Entire restaurant illustration fades out together
    this.scheduleStep(7100, () => {
      this.sceneStage.classList.remove('scene-visible');
      this.sceneStage.classList.add('scene-fading-out');
    });

    // 7.8s — Thank You message appears smoothly
    this.scheduleStep(7800, () => {
      this.thankYouOverlay.classList.add('message-visible');
    });

    // 10.2s — Thank You message fades away
    this.scheduleStep(10200, () => {
      this.thankYouOverlay.classList.remove('message-visible');
      this.thankYouOverlay.classList.add('message-fading-out');
    });

    // 10.7s — Next restaurant scene fades back in (quick restart, no dead waiting)
    this.scheduleStep(10700, () => {
      this.thankYouOverlay.classList.remove('message-fading-out');
      this.resetSceneState();
      this.sceneStage.classList.add('scene-visible');
    });
  }

  resetSceneState() {
    if (!this.section || !this.sceneStage || !this.thankYouOverlay) return;
    this.sceneStage.classList.remove('scene-fading-out');
    this.thankYouOverlay.classList.remove('message-visible', 'message-fading-out');
    this.section.classList.remove(
      'server-walking',
      'server-arrived',
      'server-placing',
      'biryani-served',
      'guests-reacting',
      'moment-hold'
    );
  }

  scheduleStep(delay, fn) {
    const timer = setTimeout(fn, delay);
    this.stepTimers.push(timer);
  }

  clearAllTimers() {
    if (this.loopTimer) {
      clearInterval(this.loopTimer);
      this.loopTimer = null;
    }
    this.stepTimers.forEach(t => clearTimeout(t));
    this.stepTimers = [];
  }
}
