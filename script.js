// Responsive Navbar Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  if (navLinks.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    navLinks.classList.remove('open'); // Close nav
    document.body.style.overflow = '';
    const href = this.getAttribute('href');
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Sticky Navbar: Hide on scroll up, show on scroll down
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop && st > 80) {
    // Scrolling down
    navbar.style.top = "-80px";
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});
// Sticky Navbar: Add active class on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Menu Data; now with images using the referenced numbers
const menuData = [
  {
    title: "Classic Breakfast",
    category: "breakfast",
    price: "$9.99",
    desc: "Fluffy scrambled eggs, crispy bacon, roasted potatoes, and sourdough toast.",
    img: "image3.jpg"
  },
  {
    title: "Avocado Toast",
    category: "breakfast",
    price: "$8.50",
    desc: "Sourdough bread topped with smashed avocado, poached egg, and microgreens.",
    img: "image3.jpg"
  },
  {
    title: "Grilled Chicken Caesar",
    category: "lunch",
    price: "$12.00",
    desc: "Grilled chicken, romaine lettuce, parmesan, croutons, and house-made Caesar dressing.",
    img: "image2.jpg"
  },
  {
    title: "Truffle Burger",
    category: "lunch",
    price: "$14.50",
    desc: "Angus beef patty, truffle aioli, cheddar, lettuce, tomato, on brioche bun.",
    img: "image2.jpg"
  },
  {
    title: "Steak Frites",
    category: "dinner",
    price: "$21.00",
    desc: "Chargrilled sirloin steak, herb butter, served with crispy fries.",
    img: "image1.jpg"
  },
  {
    title: "Miso Glazed Salmon",
    category: "dinner",
    price: "$19.00",
    desc: "Pan-seared salmon, miso glaze, jasmine rice, and stir-fried vegetables.",
    img: "image1.jpg"
  },
  {
    title: "French Toast",
    category: "breakfast",
    price: "$10.00",
    desc: "Brioche dipped in cinnamon batter, served with berries and maple syrup.",
    img: "image3.jpg"
  },
  {
    title: "Caprese Sandwich",
    category: "lunch",
    price: "$11.00",
    desc: "Fresh mozzarella, tomatoes, basil pesto, on ciabatta bread.",
    img: "image2.jpg"
  },
  {
    title: "Lemon Herb Chicken",
    category: "dinner",
    price: "$18.00",
    desc: "Roasted chicken breast, lemon herb sauce, and seasonal vegetables.",
    img: "image1.jpg"
  },
];

// Render menu items
const menuItemsContainer = document.getElementById('menuItems');
function renderMenuItems(filter) {
  menuItemsContainer.innerHTML = '';
  const filtered = filter === 'all' ? menuData : menuData.filter(item => item.category === filter);
  if (filtered.length === 0) {
    menuItemsContainer.innerHTML = '<p>No items available.</p>';
    return;
  }
  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-card';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="menu-card-img">
      <div class="menu-card-content">
        <div class="menu-card-title">${item.title}</div>
        <div class="menu-card-price">${item.price}</div>
        <div class="menu-card-desc">${item.desc}</div>
      </div>
    `;
    menuItemsContainer.appendChild(div);
  });
}

// Initial render
renderMenuItems('all');

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderMenuItems(this.getAttribute('data-filter'));
  });
});
