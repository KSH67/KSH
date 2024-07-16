const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.querySelector('form button');
const donateLink = document.getElementById('donate-link');
const donateSection = document.getElementById('donate-section');
const accountNumberElement = document.getElementById('account-number');
const KSH_profile = document.getElementById('KSH_profile');

KSH_profile.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'KSH_profile.html';
  });

// donateLink.addEventListener('click', (event) => {
//   event.preventDefault();
//   window.location.href = 'donate.html';
// });

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  form.reset();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

const heroSection = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  heroSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
