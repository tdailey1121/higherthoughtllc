function enterLightbulb() {
  const bulb = document.getElementById("bulb");
  const flare = document.querySelector(".flare");
  const ripple = document.querySelector(".ripple");

  // Position flare
  const rect = bulb.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  flare.style.left = `${centerX - 75}px`;
  flare.style.top = `${centerY - 75}px`;
  flare.classList.add("show");

  // Position ripple
  ripple.style.left = `${centerX - 100}px`;
  ripple.style.top = `${centerY - 100}px`;
  ripple.classList.add("show");

  // Fade screen
  document.body.classList.add("fade-out");

  // Cleanup ripple class after animation
  setTimeout(() => {
    ripple.classList.remove("show");
    window.location.href = "about.html";
  }, 1500);
}
