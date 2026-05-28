const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const megaTrigger = document.querySelector('.mega-trigger');
const megaParent = document.querySelector('.has-mega');

navToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

megaTrigger?.addEventListener('click', () => {
  const isOpen = megaParent.classList.toggle('open');
  megaTrigger.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('click', (event) => {
  if (!megaParent?.contains(event.target)) {
    megaParent?.classList.remove('open');
    megaTrigger?.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    mainNav?.classList.remove('active');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
