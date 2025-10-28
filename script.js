// Navbar glass effect on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 80) {
    nav.style.background = 'rgba(15,15,20,0.95)';
    nav.style.boxShadow = '0 0 20px rgba(0,191,255,0.2)';
  } else {
    nav.style.background = 'rgba(15,15,20,0.7)';
    nav.style.boxShadow = 'none';
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in on scroll
const fadeSections = document.querySelectorAll('.fade-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

fadeSections.forEach(section => observer.observe(section));

// Mobile menu toggle
const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('#nav-menu ul');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Simple contact feedback
document.querySelector('#contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! We’ll connect with you soon.');
  e.target.reset();
});