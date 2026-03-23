// ============================================================
//  Plantify – Theme & UI Utils
// ============================================================

// ─── Dark / Light Mode ───────────────────────────────────────
const Theme = (() => {
  const KEY = 'plantify_theme';

  function get() { return localStorage.getItem(KEY) || 'light'; }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function toggle() {
    apply(get() === 'dark' ? 'light' : 'dark');
  }

  function init() {
    apply(get());
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', toggle);
    });
  }

  return { init, toggle, get };
})();

// ─── Navbar ──────────────────────────────────────────────────
const Nav = (() => {
  function init() {
    // Scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
      });
    }

    // Hamburger
    const hamburger = document.querySelector('.hamburger');
    const mobileNav  = document.querySelector('.mobile-nav');
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('open');
      });
    }

    // Mark active page
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
      if (link.dataset.page === path) link.classList.add('active');
    });
  }

  return { init };
})();

// ─── Scroll Reveal ───────────────────────────────────────────
const Reveal = (() => {
  function init() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  return { init };
})();

// ─── Lazy Load Images ────────────────────────────────────────
const LazyLoad = (() => {
  function init() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });
      document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
    } else {
      // Fallback
      document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
      });
    }
  }

  return { init };
})();

// ─── Product Card Builder ────────────────────────────────────
function buildProductCard(product) {
  const tagHTML = product.tags.map(t => {
    const cls = t.includes('Air') ? 'tag-blue' : t.includes('Succulent') || t.includes('Outdoor') ? 'tag-earth' : 'tag-green';
    return `<span class="tag ${cls}">${t}</span>`;
  }).join('');

  const badgeHTML = product.badge
    ? `<span class="product-badge">${product.badge}</span>` : '';

  const oldPriceHTML = product.oldPrice
    ? `<span class="product-price-old">$${product.oldPrice.toFixed(2)}</span>` : '';

  return `
    <div class="product-card reveal" data-id="${product.id}" onclick="location.href='product.html?id=${product.id}'">
      <div class="product-img-wrap">
        <img data-src="${product.images[0]}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="${product.name}" loading="lazy">
        ${badgeHTML}
        <button class="product-wishlist" onclick="event.stopPropagation(); this.textContent = this.textContent==='🤍'?'❤️':'🤍'" aria-label="Add to wishlist">🤍</button>
      </div>
      <div class="product-info">
        <div class="product-tags">${tagHTML}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.description}</div>
        <div class="product-footer">
          <div>
            <span class="product-price">$${product.price.toFixed(2)}</span>
            ${oldPriceHTML}
          </div>
          <button class="add-to-cart-btn" onclick="event.stopPropagation(); Cart.add(PRODUCTS.find(p=>p.id===${product.id}))" aria-label="Add to cart">+</button>
        </div>
      </div>
    </div>`;
}

// ─── Init all ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Nav.init();
  Reveal.init();
  LazyLoad.init();
});
