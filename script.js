// Theme colors
const LIGHT_A = '#c1f0c1';
const LIGHT_B = '#f7c6d9';
const DARK_A  = '#0f3d0f';
const DARK_B  = '#8b0000';

// Restore theme
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.body.classList.add('dark');
})();

// Mouse-follow gradient
let rafId = null;
let lastX = 50, lastY = 50;

function applyGradient(xPct, yPct) {
  const isDark = document.body.classList.contains('dark');
  const a = isDark ? DARK_A : LIGHT_A;
  const b = isDark ? DARK_B : LIGHT_B;
  document.body.style.background = `radial-gradient(circle at ${xPct}% ${yPct}%, ${a}, ${b})`;
}

document.addEventListener('mousemove', (e) => {
  lastX = (e.clientX / window.innerWidth) * 100;
  lastY = (e.clientY / window.innerHeight) * 100;
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    applyGradient(lastX, lastY);
    rafId = null;
  });
});

// Initial gradient
window.addEventListener('DOMContentLoaded', () => applyGradient(lastX, lastY));

// Theme toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  applyGradient(lastX, lastY);
}

// Side nav controls
function openNav() {
  document.getElementById('mySidenav').classList.add('open');
}
function closeNav() {
  document.getElementById('mySidenav').classList.remove('open');
}

// Expose for inline handlers
window.toggleDarkMode = toggleDarkMode;
window.openNav = openNav;
window.closeNav = closeNav;
