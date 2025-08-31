// Burger menu toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const yearEl = document.getElementById('year');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
  burger.classList.toggle('active');
});

// Close nav on link click (mobile)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.classList.remove('active');
  });
});

// Dynamic footer year
yearEl.textContent = new Date().getFullYear();
