import generateNavOptions from './generateNavOptions.js';

export default function generateNavBar() {
  const navbar = document.createElement('div');
  navbar.setAttribute('id', 'navbar');
  const navOptions = generateNavOptions();
  for (let i = 0; i < navOptions.length; i++) {
    navbar.appendChild(navOptions[i]);
    console.log(navOptions[i].textContent);
  }
  return navbar;
}