/* ==========================================================================
   MADHURA MULTICUISINE RESTAURANT — SECTION 03: EXPLORE THE MENU
   Authentic Physical Menu Structure, Verified Andhra Specialties & Dotted Pricing
   ========================================================================== */

export class MenuSection {
  constructor(mountSelector = '#menu-mount') {
    this.mount = document.querySelector(mountSelector);
    this.section = null;
    this.activeCategory = 'specials';

    this.categories = [
      { id: 'specials', label: 'Madhura Specials' },
      { id: 'biryani', label: 'Special Biryanis' },
      { id: 'starters', label: 'Tandoor & Starters' },
      { id: 'curries', label: 'Curries & Gravies' },
      { id: 'seafood', label: 'Sea Food' },
      { id: 'breads', label: 'Breads & Rice' },
      { id: 'chinese', label: 'Chinese & Noodles' },
      { id: 'beverages', label: 'Mocktails & Desserts' }
    ];

    this.menuData = {
      specials: {
        left: {
          title: 'Royal Andhra Specials',
          items: [
            { name: 'Tatimunjela Iguru', sub: 'Seasonal Palm Fruit Special Gravy', price: '300' },
            { name: 'Miriyala Kodi [Vepudu] Roast', sub: 'Traditional Pepper Spiced Chicken Roast', price: '320' },
            { name: 'Allam Kodi [Vepudu] Roast', sub: 'Zesty Ginger Chicken Pan Roast', price: '320' },
            { name: 'Karivepaku Kodi [Vepudu] Roast', sub: 'Aromatic Curry Leaf Infused Chicken', price: '320' },
            { name: 'Royyalu Chinta Chiguru', sub: 'Tender Prawns with Tender Tamarind Leaves [Seasonal]', price: '380' },
            { name: 'Royyala Vepudu', sub: 'Crisp Coastal Andhra Spiced Prawn Roast', price: '380' },
            { name: 'Koramenu Pulusu', sub: 'Traditional Murrel Fish Tangy Tamarind Stew', price: '380' }
          ]
        },
        right: {
          title: 'Claypot Pulavs & Jatka Biryani',
          items: [
            { name: 'Natukodi Pulusu', sub: 'Country Chicken Cooked with Village Spices', price: '330' },
            { name: 'Kodi Vepudu [Koora]', sub: 'Classic Andhra Village Chicken Dry Fry', price: '300' },
            { name: 'Bommidayila Pulusu', sub: 'Signature Mudfish Traditional Andhra Gravy', price: '380' },
            { name: 'Gongura Royyalu', sub: 'Prawns Simmered with Tangy Sorrel Leaves', price: '380' },
            { name: 'Peetala Iguru', sub: 'Freshwater Crab Meat in Rich Spicy Gravy', price: '400' },
            { name: 'Ulavacharu Kodi Pulav', sub: 'Horsegram Essence Rice with Chicken', price: '320' },
            { name: 'Chicken Jatka Biryani', sub: 'Chef Special Sizzling Fast-Cooked Biryani', price: '600' },
            { name: 'Mutton Jatka Biryani', sub: 'Fiery Tender Lamb Sizzling Feast', price: '700' }
          ]
        }
      },
      biryani: {
        left: {
          title: 'Special Non-Veg Biryanis',
          items: [
            { name: 'Special Chicken Biryani', sub: 'Chef Crafted Fragrant Basmati with Succulent Chicken', price: '310' },
            { name: 'Chicken Tikka Biryani', sub: '6 Pieces Clay Oven Boneless Tikka with Saffron Rice', price: '320' },
            { name: 'Tangdi Chicken Biryani', sub: '2 Juicy Whole Drumsticks Slow Cooked in Rice', price: '350' },
            { name: 'Gongura Mutton Biryani', sub: 'Mutton with Bones infused with Tangy Sorrel Leaves', price: '350' },
            { name: 'Special Mutton Biryani', sub: 'Fragrant Dum Rice with Select Tender Lamb Cuts', price: '390' },
            { name: 'Naatu Kodi Biryani', sub: 'Country Chicken Handi Biryani', price: '380' },
            { name: 'Fry Piece Biryani', sub: 'Crispy Spiced Chicken atop Steamed Basmati', price: '350' }
          ]
        },
        right: {
          title: 'Coastal & Specialty Biryanis',
          items: [
            { name: 'Ulavacharu Chicken Biryani', sub: 'Slow Cooked Horsegram Broth with Basmati', price: '360' },
            { name: 'Ulavacharu Mutton Biryani', sub: 'Tender Lamb with Rich Horsegram Infusion', price: '390' },
            { name: 'Prawn Biryani', sub: 'Coastal Spiced Prawns Layered with Saffron Rice', price: '375' },
            { name: 'Fish Biryani', sub: 'Fresh Fillet Simmered with Aromatic Long Grain Rice', price: '350' },
            { name: 'Kheema Biryani', sub: 'Minced Spiced Mutton with Fragrant Dum Rice', price: '390' },
            { name: 'Egg Biryani', sub: 'Pan Roasted Farm Eggs in Spiced Masala Rice', price: '260' },
            { name: 'Mini Biryani - Chicken', sub: 'Individual Fast Serving Portion', price: '149' }
          ]
        }
      },
      starters: {
        left: {
          title: 'From the Clay Oven (Tandoor)',
          items: [
            { name: 'Paneer Tikka', sub: 'Cottage Cheese Skewered with Bell Peppers', price: '250' },
            { name: 'Chicken Tikka', sub: 'Marinated Boneless Chicken with Yoghurt & Spices', price: '300' },
            { name: 'Murgh Malai Kebab', sub: 'Creamy Mild Chicken with Cardamom & Cheese', price: '300' },
            { name: 'Reshmi Kebab', sub: 'Silken Minced Skewered Chicken Kebab', price: '300' },
            { name: 'Chicken Sheekh Kebab', sub: 'Spiced Minced Chicken Cooked over Embers', price: '300' },
            { name: 'Tangdi Kebab (4 Pieces)', sub: 'Marinated Whole Chicken Legs Roasted in Claypot', price: '320' },
            { name: 'Mutton Sheekh Kebab', sub: 'Spicy Minced Lamb Skewers with Mint Sauce', price: '380' },
            { name: 'Tandoori Chicken (Half / Full)', sub: 'Classic Red Spiced Chicken Roasted on Bone', price: '320 / 500' }
          ]
        },
        right: {
          title: 'Starters (Non-Veg & Veg)',
          items: [
            { name: 'Chicken Manchurian', sub: 'Crispy Dumplings in Indo-Chinese Tangy Glaze', price: '290' },
            { name: 'Chicken 65', sub: 'Spicy South Indian Crispy Fried Chicken', price: '280' },
            { name: 'Chilli Chicken', sub: 'Wok Tossed with Green Chillies & Onions', price: '290' },
            { name: 'Chicken Majestick', sub: 'Dry Shredded Chicken with Curd & Mint', price: '290' },
            { name: 'Chicken Drumstick', sub: 'Crispy Batter Fried Drumsticks with Sweet Garlic Dip', price: '290' },
            { name: 'Crunchy Chicken', sub: 'Crispy Breaded Chicken Morsels', price: '290' },
            { name: 'Pepper Chicken', sub: 'Fresh Ground Black Pepper Roasted Chicken', price: '290' },
            { name: 'Paneer 65 / Chilli Paneer', sub: 'Crispy Golden Paneer tossed in Tangy Masala', price: '240' }
          ]
        }
      },
      curries: {
        left: {
          title: 'Non-Vegetarian Curries',
          items: [
            { name: 'Chicken Masala', sub: 'With Bones & Hard Boiled Egg', price: '310' },
            { name: 'Andhra Chicken Curry', sub: 'Traditional Andhra Home Style Gravy', price: '310' },
            { name: 'Butter Chicken', sub: 'Boneless Tandoori Chicken in Rich Creamy Tomato Butter Sauce', price: '325' },
            { name: 'Chicken Tikka Masala', sub: 'Roasted Tikka Cubes in Spiced Onion-Tomato Gravy', price: '325' },
            { name: 'Kadai Chicken', sub: 'Wok Cooked with Bell Peppers & Roasted Coriander', price: '325' },
            { name: 'Andhra Mutton Curry', sub: 'Tender Lamb with Bones in Spicy Village Masala', price: '360' },
            { name: 'Gongura Mutton', sub: 'Mutton with Bones Simmered with Tangy Sorrel Leaves', price: '360' }
          ]
        },
        right: {
          title: 'Vegetarian Curries',
          items: [
            { name: 'Paneer Butter Masala', sub: 'Cottage Cheese in Velvety Buttery Tomato Gravy', price: '290' },
            { name: 'Kaju Masala', sub: 'Roasted Cashew Nuts Cooked in Rich Creamy Gravy', price: '290' },
            { name: 'Palak Paneer', sub: 'Fresh Spinach Puree with Pan Fried Paneer', price: '290' },
            { name: 'Veg Kolhapuri', sub: 'Mixed Vegetables in Fiery Maharashtrian Gravy', price: '290' },
            { name: 'Dal Tadka / Dal Fry', sub: 'Yellow Lentils Tempered with Ghee, Cumin & Garlic', price: '230' },
            { name: 'Mixed Veg Curry', sub: 'Farm Fresh Vegetables in Mild Spiced Onion Gravy', price: '270' },
            { name: 'Mushroom Butter Masala', sub: 'Button Mushrooms in Smooth Tomato Cashew Curry', price: '290' }
          ]
        }
      },
      seafood: {
        left: {
          title: 'Sea Food Starters',
          items: [
            { name: 'Apollo Fish', sub: 'Crisp Battered Fish tossed with Yoghurt, Curry Leaves & Red Chilli', price: '370' },
            { name: 'Chilli Fish', sub: 'Sliced Fish Fillet Tossed with Capsicum & Soya Garlic', price: '370' },
            { name: 'Garlic Fish', sub: 'Pan Seared Fish in Roasted Golden Garlic Gravy', price: '370' },
            { name: 'Chilli Prawns', sub: 'Crispy Prawns tossed with Scallions & Green Chillies', price: '370' },
            { name: 'Andhra Prawns Fry', sub: 'Dry Spiced Prawns Fried with Coastal Masalas', price: '370' },
            { name: 'Loose Fried Prawns', sub: 'Golden Crispy Salt & Pepper Prawns', price: '370' }
          ]
        },
        right: {
          title: 'Coastal Sea Food Curries',
          items: [
            { name: 'Chepala Pulusu', sub: 'Boneless Fish Fillets in Tangy Tamarind & Fenugreek Stew', price: '390' },
            { name: 'Andhra Fish Curry', sub: 'Traditional Coastal Fish Curry Cooked to Perfection', price: '370' },
            { name: 'Andhra Prawns Curry', sub: 'Juicy Prawns in Rich Spiced Onion Tomato Gravy', price: '390' },
            { name: 'Gongura Prawns', sub: 'Fresh Prawns with Tangy Gongura Sorrel Leaves', price: '390' },
            { name: 'Fish Tikka', sub: 'Clay Oven Roasted Fish with Carom Seeds & Herbs', price: '370' }
          ]
        }
      },
      breads: {
        left: {
          title: 'INDIAN BREADS',
          subtitle: 'FROM TANDOOR',
          items: [
            { name: 'Tandoori Roti', sub: 'Whole Wheat Flatbread Baked in Clay Oven', price: '30' },
            { name: 'Plain Naan', sub: 'Traditional Leavened Refined Flour Bread', price: '40' },
            { name: 'Butter Naan', sub: 'Layered with Pure Clarified Butter', price: '45' },
            { name: 'Garlic Naan', sub: 'Topped with Chopped Roasted Garlic & Coriander', price: '50' },
            { name: 'Butter Garlic Naan', sub: 'Rich Butter with Fragrant Garlic Flakes', price: '55' },
            { name: 'Masala Kulcha', sub: 'Stuffed with Spiced Mashed Potatoes & Onions', price: '55' },
            { name: 'Kheema Naan', sub: 'Stuffed with Tender Spiced Minced Lamb', price: '90' }
          ]
        },
        right: {
          title: 'RICE & ACCOMPANIMENTS',
          items: [
            { name: 'Bagara Rice', sub: 'Telangana Style Fragrant Spiced Ghee Rice', price: '195' },
            { name: 'Steamed Basmati Rice', sub: 'Fluffy Long Grain Premium Basmati', price: '135' },
            { name: 'Jeera Rice', sub: 'Tempered with Cumin Seeds & Ghee', price: '240' },
            { name: 'Curd Rice', sub: 'Tempered with Mustard, Green Chillies & Curry Leaves', price: '160' },
            { name: 'Sambar Rice', sub: 'Wholesome Rice with South Indian Lentil Stew', price: '195' },
            { name: 'Onion Raitha', sub: 'Whipped Yoghurt with Sliced Onions & Cilantro', price: '75' },
            { name: 'Curd', sub: 'Fresh Plain Homestyle Chilled Buffalo Curd', price: '85' }
          ]
        }
      },
      chinese: {
        left: {
          title: 'Fried Rice & Gravies',
          items: [
            { name: 'Chicken Fried Rice', sub: 'Wok Tossed Basmati with Diced Chicken & Eggs', price: '260' },
            { name: 'Schezwan Chicken Fried Rice', sub: 'Fiery Red Schezwan Peppers & Spring Onions', price: '260' },
            { name: 'Egg Fried Rice', sub: 'Scrambled Eggs with Fine Grain Rice & Pepper', price: '240' },
            { name: 'Prawns Fried Rice', sub: 'Fresh Small Prawns Wok Tossed with Soya', price: '290' },
            { name: 'Mixed Fried Rice', sub: 'Chicken, Prawns & Egg Combinations', price: '320' },
            { name: 'Schezwan Chicken Wet Gravy', sub: 'Spicy Gravy for Fried Rice or Noodles', price: '250' }
          ]
        },
        right: {
          title: 'Wok Tossed Noodles',
          items: [
            { name: 'Chicken Soft Noodles', sub: 'Thin Egg Noodles Wok Tossed with Sliced Chicken', price: '260' },
            { name: 'Chicken Schezwan Noodles', sub: 'Tossed in Fiery Red Chilli Schezwan Paste', price: '260' },
            { name: 'Egg Soft Noodles', sub: 'Tossed with Shredded Vegetables & Eggs', price: '240' },
            { name: 'Veg Soft Noodles', sub: 'Julienned Vegetables, Soya & White Pepper', price: '220' },
            { name: 'Veg Schezwan Noodles', sub: 'Spicy Noodles with Crunchy Cabbage & Carrots', price: '220' }
          ]
        }
      },
      beverages: {
        left: {
          title: 'Chilled Mocktails & Beverages',
          items: [
            { name: 'Virgin Mojito', sub: 'Crushed Mint, Lime Wedges & Sparkling Soda', price: '120' },
            { name: 'Blue Lagoon', sub: 'Curacao Essence with Lemon Juice & Sprite', price: '120' },
            { name: 'Guava Blast', sub: 'Spicy Guava Nectar with Chilli Rim', price: '120' },
            { name: 'B Mango Colada', sub: 'Mango Puree with Coconut Cream & Crushed Ice', price: '120' },
            { name: 'Watermelon Cooler', sub: 'Fresh Watermelon Juice with Mint Leaves', price: '120' },
            { name: 'Fresh Lime Soda (Sweet / Salt)', sub: 'Freshly Squeezed Lime with Chilled Soda', price: '70' },
            { name: 'Butter Milk (Chas)', sub: 'Spiced Buttermilk with Ginger & Curry Leaves', price: '70' }
          ]
        },
        right: {
          title: 'Ice Creams & Traditional Desserts',
          items: [
            { name: 'Matka Kulfi', sub: 'Slow Cooked Claypot Saffron Almond Ice Cream', price: '90' },
            { name: 'Kesar Badam Ice Cream', sub: 'Royal Saffron with Crushed Almond Slivers', price: '90' },
            { name: 'Anjeer Badam Ice Cream', sub: 'Sun Dried Figs with Roasted Almonds', price: '90' },
            { name: 'Caramel Nuts Ice Cream', sub: 'Rich Butterscotch Caramel with Roasted Cashews', price: '90' },
            { name: 'Paan Ice Cream', sub: 'Sweet Betel Leaf Essence & Gulkand', price: '180' },
            { name: 'Ice Cream Cake Delight', sub: 'Layered Sponge Cake with Premium Cream', price: '180' },
            { name: 'Tropical Rainbow', sub: 'Multi Fruit Sundae with Berry Drizzle', price: '180' }
          ]
        }
      }
    };

    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    if (!this.mount) return;

    this.section = document.createElement('section');
    this.section.id = 'menu';
    this.section.className = 'menu-section section';
    this.section.setAttribute('aria-label', 'Madhura Multicuisine Restaurant Menu');

    const tabsHtml = this.categories.map(c => `
      <button 
        type="button" 
        class="menu-cat-btn ${c.id === this.activeCategory ? 'active' : ''}" 
        data-category="${c.id}"
      >
        ${c.label}
      </button>
    `).join('');

    this.section.innerHTML = `
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-centered">
          <div class="heritage-eyebrow">
            <span>THE KITCHEN</span>
          </div>
          <h2 class="heritage-statement">EXPLORE THE MENU</h2>
          <p class="heritage-lead">
            Every dish prepared with hand-ground spices, authentic recipes and real culinary passion.
          </p>
        </div>

        <!-- Classical Vintage Category Navigation Tabs -->
        <div class="menu-category-nav-wrapper">
          <div class="menu-category-nav" role="tablist" aria-label="Menu categories">
            ${tabsHtml}
          </div>
        </div>

        <!-- Menu Page Container (Physical Menu Book Look) -->
        <div class="menu-page-container" id="menu-page-wrapper">
          <!-- Left Column Content -->
          <div class="menu-column" id="menu-col-left"></div>

          <!-- Right Column Content -->
          <div class="menu-column" id="menu-col-right"></div>
        </div>
      </div>
    `;

    this.mount.appendChild(this.section);
    this.renderActiveCategory();
  }

  renderActiveCategory() {
    const data = this.menuData[this.activeCategory] || this.menuData.specials;
    const colLeft = this.section.querySelector('#menu-col-left');
    const colRight = this.section.querySelector('#menu-col-right');

    if (!colLeft || !colRight) return;

    const renderBlock = (colData) => {
      const itemsHtml = colData.items.map(item => `
        <div class="menu-item-row">
          <div class="menu-item-header">
            <span class="menu-item-name">${item.name}</span>
            <span class="menu-item-dots" aria-hidden="true"></span>
            <span class="menu-item-price">₹${item.price}</span>
          </div>
          ${item.sub ? `<div class="menu-item-sub">${item.sub}</div>` : ''}
        </div>
      `).join('');

      return `
        <div class="menu-subcategory-block">
          <div class="menu-subcategory-title">
            <div class="menu-title-stack">
              <span class="menu-title-primary">${colData.title}</span>
              ${colData.subtitle ? `<span class="menu-title-subtitle">${colData.subtitle}</span>` : ''}
            </div>
            <span class="menu-price-badge">PRICE</span>
          </div>
          <div class="menu-items-list">
            ${itemsHtml}
          </div>
        </div>
      `;
    };

    colLeft.innerHTML = renderBlock(data.left);
    colRight.innerHTML = renderBlock(data.right);
  }

  bindEvents() {
    if (!this.section) return;

    this.section.querySelectorAll('.menu-cat-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
        if (cat === this.activeCategory) return;

        this.section.querySelectorAll('.menu-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Smooth 350-450ms transition
        const pageWrapper = this.section.querySelector('#menu-page-wrapper');
        if (pageWrapper) {
          pageWrapper.classList.add('fade-transition');
          setTimeout(() => {
            this.activeCategory = cat;
            this.renderActiveCategory();
            pageWrapper.classList.remove('fade-transition');
          }, 220);
        } else {
          this.activeCategory = cat;
          this.renderActiveCategory();
        }
      });
    });
  }
}
