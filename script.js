// Cursor-following gradient
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  if (document.body.classList.contains("dark")) {
    document.body.style.background =
      `radial-gradient(circle at ${x}% ${y}%, #0f3d0f, #8b0000)`;
  } else {
    document.body.style.background =
      `radial-gradient(circle at ${x}% ${y}%, #c1f0c1, #f7c6d9)`;
  }
});

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Side nav controls
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
