function enterLightbulb() {
  const flare = document.querySelector(".flare");
  const ripple = document.querySelector(".ripple-overlay");

  // Trigger animations
  flare.classList.add("flare-animate");
  ripple.classList.add("ripple-animate");

  // Wait for animation to finish, then navigate
  setTimeout(() => {
    window.location.href = "about.html";
  }, 1200); // Adjust this to match your animation timing
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
