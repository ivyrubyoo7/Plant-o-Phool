// ============================================================
//  Plantify – Cart Module
// ============================================================

const Cart = (() => {
  const STORAGE_KEY = 'plantify_cart';

  let items = [];

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      items = raw ? JSON.parse(raw) : [];
    } catch { items = []; }
    updateBadge();
    return items;
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    updateBadge();
  }

  function add(product, qty = 1) {
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ ...product, qty });
    }
    save();
    showToast(`🌿 ${product.name} added to cart`);
  }

  function remove(id) {
    items = items.filter(i => i.id !== id);
    save();
  }

  function updateQty(id, qty) {
    const item = items.find(i => i.id === id);
    if (item) {
      if (qty <= 0) { remove(id); }
      else { item.qty = qty; save(); }
    }
  }

  function getAll() { return [...items]; }
  function getCount() { return items.reduce((s, i) => s + i.qty, 0); }
  function getTotal() { return items.reduce((s, i) => s + i.price * i.qty, 0); }
  function clear() { items = []; save(); }

  function updateBadge() {
    const count = getCount();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
      el.classList.toggle('show', count > 0);
    });
  }

  function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  load();
  return { load, add, remove, updateQty, getAll, getCount, getTotal, clear, showToast };
})();
