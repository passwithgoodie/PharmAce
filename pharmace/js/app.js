// PharmAce — shared app logic

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// Screen navigation
function showScreen(id) {
  document.querySelectorAll('[id^="screen-"]').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

// Bottom nav active state
function setNav(id) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

// Greeting based on time
function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning 👋';
  if (h < 17) return 'Good afternoon 👋';
  return 'Good evening 👋';
}

document.addEventListener('DOMContentLoaded', () => {
  const g = document.querySelector('.greeting');
  if (g) g.textContent = getGreeting();
});
