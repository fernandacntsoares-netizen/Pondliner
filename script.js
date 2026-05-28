const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle?.addEventListener('click', () => mainNav?.classList.toggle('active'));
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    mainNav?.classList.remove('active');
    target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
