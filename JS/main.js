function enterLightbulb() {
  const bulb = document.getElementById("bulb");
  const flare = document.querySelector(".flare");

  // Position flare at the center of the bulb
  const rect = bulb.getBoundingClientRect();
  flare.style.left = `${rect.left + rect.width / 2 - 75}px`;
  flare.style.top = `${rect.top + rect.height / 2 - 75}px`;

  // Trigger animation
  flare.classList.add("show");
  document.body.classList.add("fade-out");

  // Navigate after delay
  setTimeout(() => {
    window.location.href = "about.html";
  }, 1500);
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}
