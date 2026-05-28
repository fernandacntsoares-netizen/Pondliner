const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const shopButton = document.querySelector('[data-menu="shop"]');
const shopMenu = document.getElementById('shopMenu');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.textContent = isOpen ? 'Close' : 'Menu';
  });
}

if (shopButton && shopMenu) {
  shopButton.addEventListener('click', () => {
    shopMenu.classList.toggle('open');
  });

  document.addEventListener('click', (event) => {
    if (!shopMenu.contains(event.target) && !shopButton.contains(event.target)) {
      shopMenu.classList.remove('open');
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    if (siteNav) siteNav.classList.remove('open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = 'Menu';
    }
    if (shopMenu) shopMenu.classList.remove('open');
  });
});

const priceText = document.getElementById('priceText');
document.querySelectorAll('.size-option').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.size-option').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const price = Number(button.dataset.price || 0);
    if (priceText) priceText.textContent = price > 0 ? `$${price}` : 'Request quote';
  });
});

const searchForm = document.querySelector('.site-search');
if (searchForm) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = searchForm.querySelector('input');
    const value = input?.value?.trim();
    alert(value ? `Prototype search for: ${value}` : 'Prototype search');
  });
}
