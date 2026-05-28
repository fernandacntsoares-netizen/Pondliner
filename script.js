const navToggle = document.getElementById('navToggle');
const siteNav = document.querySelector('.nav-row');
const shopToggle = document.getElementById('shopToggle');
const shopMenu = document.getElementById('shopMenu');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

if (shopToggle && shopMenu) {
  shopToggle.addEventListener('click', () => {
    const open = shopMenu.classList.toggle('open');
    shopToggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
