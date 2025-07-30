function enterLightbulb() {
  const flare = document.querySelector(".flare");
  const ripple = document.querySelector(".ripple-overlay");
  const gradient = document.getElementById("gradientOverlay");

  flare.classList.add("show");
  ripple.classList.add("show");
  gradient.classList.add("show");

  setTimeout(() => {
    document.body.classList.add("fade-out");
  }, 800);

  setTimeout(() => {
    window.location.href = "about.html";
  }, 1600);
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
