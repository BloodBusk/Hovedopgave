let hamburgerMenu = document.getElementById("hamburgerMenu");
let hamburgerIcon = document.getElementById("hamburgerIcon");

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("toggleMenu");
  hamburgerIcon.classList.toggle("fa-bars");
  hamburgerIcon.classList.toggle("fa-times")
});
