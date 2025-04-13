let Mode = document.getElementById("switch");
let navbar = document.getElementById("navBar");
let bodyColor = document.getElementById("body-color");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
let isToggled = false;
Mode.addEventListener("click", () => {
  navbar.style.transition = "0.5s";
  bodyColor.style.transition = "0.5s";
  if (isToggled) {
    navbar.style.background = "rgb(18, 12, 62)";
    bodyColor.style.background = "rgb(64, 54, 138)";
  } else {
    navbar.style.background = " #9c97f1";
    bodyColor.style.background = "rgb(18, 12, 62)";
  }
  isToggled = !isToggled;
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
