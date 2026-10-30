
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

// Mobile navigation
toggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(opened));
});

// Close menu after clicking a link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Appointment form
document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('.form-message').textContent =
    'Thank you! Your appointment request has been noted. Our team will contact you shortly.';

  event.target.reset();
});
