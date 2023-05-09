import generateNavOptions from './generateNavOptions.js';

export default function generateNavBar() {
  // Create navbar
  const navbar = document.createElement('div');
  navbar.setAttribute('id', 'nav-bar');
  const navOptions = generateNavOptions();

  // Goes through the nav options and adds each one to the navbar
  for (let i = 0; i < navOptions.length; i++) {
    navbar.appendChild(navOptions[i]);
  }
  return navbar;
}