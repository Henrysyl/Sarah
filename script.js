// script.js
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const messages = [
  "Are you sure?",
  "Really?",
  "🥺",
  "Do you even love me anymore?",
  "Whyyyyyyyy?"
];
let messageIndex = 0;

yesBtn.addEventListener('click', () => {
  window.location.href = 'valentine.html'; // Redirect to the "Yes" page
});

noBtn.addEventListener('click', () => {
  noBtn.textContent = messages[messageIndex % messages.length];
  messageIndex++;

  // Move the "No" button randomly
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = ${x}px;
  noBtn.style.top = ${y}px;
});