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

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent actual form submission

  // Get the values from the input fields
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  // Define your email receiver
  var receiverEmail = 'nakulagrawal987@gmail.com'; // <-- Change this to your email

  // Create the mailto link
  var subject = encodeURIComponent('New message from ' + name);
  var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);

  var mailtoLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + receiverEmail + '&su=' + subject + '&body=' + body;

  // Open the mailto link in a new tab
  window.open(mailtoLink, '_blank');
});
