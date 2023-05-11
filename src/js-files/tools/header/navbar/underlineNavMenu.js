export default function underlineNavMenu () {
  const navMenu = document.querySelector('#menu');
  navMenu.style.textDecoration = "underline";
  navMenu.style.transform = "translate(0, -0.1rem)";
  navMenu.style.textUnderlineOffset = "1rem";
}