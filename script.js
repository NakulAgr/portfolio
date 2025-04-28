// Scroll to Contact
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Typing Animation
const typedText = document.getElementById('typed-text');
const words = ["NAKUL AGRAWAL", "Web Developer", "Designer", "Creator"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  if (wordIndex >= words.length) wordIndex = 0;
  
  currentWord = words[wordIndex];
  let displayedText = currentWord.substring(0, letterIndex);
  
  typedText.textContent = displayedText;

  if (!isDeleting && letterIndex < currentWord.length) {
    letterIndex++;
    setTimeout(type, 150);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex++;
    setTimeout(type, 500);
  }
}

type();
