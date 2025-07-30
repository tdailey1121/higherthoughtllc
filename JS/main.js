function enterLightbulb() {
  const flare = document.querySelector(".flare");
  const ripple = document.querySelector(".ripple-overlay");

  flare.classList.add("show");
  ripple.classList.add("show");

  setTimeout(() => {
    document.body.classList.add("fade-out");
  }, 800); // allow the ripple to peak before fading screen

  setTimeout(() => {
    window.location.href = "about.html";
  }, 1600); // adjust as needed for smooth transition
}
