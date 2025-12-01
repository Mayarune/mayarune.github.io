// Theme colors
const LIGHT_A = '#c1f0c1', LIGHT_B = '#f7c6d9';
const DARK_A  = '#0f3d0f', DARK_B  = '#8b0044'; // dark green + dark pink

// Restore theme
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.body.classList.add('dark');
})();

// Mouse-follow gradient with smooth drift
let targetX = 50, targetY = 50;
let currentX = 50, currentY = 50;
let t = 0;

function applyGradient(xPct, yPct) {
  const dark = document.body.classList.contains('dark');
  const a = dark ? DARK_A : LIGHT_A;
  const b = dark ? DARK_B : LIGHT_B;
  document.body.style.background = `radial-gradient(circle at ${xPct}% ${yPct}%, ${a}, ${b})`;
}

document.addEventListener('mousemove', (e) => {
  targetX = (e.clientX / window.innerWidth) * 100;
  targetY = (e.clientY / window.innerHeight) * 100;
});

function animate() {
  t += 0.02;
  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;
  const driftX = Math.sin(t) * 3;
  const driftY = Math.cos(t * 0.8) * 3;
  applyGradient(currentX + driftX, currentY + driftY);
  requestAnimationFrame(animate);
}
animate();

// Theme toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}
window.toggleDarkMode = toggleDarkMode;

// Side nav controls
function openNav() {
  document.getElementById('mySidenav').classList.add('open');
}
function closeNav() {
  document.getElementById('mySidenav').classList.remove('open');
}
window.openNav = openNav;
window.closeNav = closeNav;
