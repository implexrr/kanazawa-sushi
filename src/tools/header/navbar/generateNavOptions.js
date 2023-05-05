import generateContent from "../../../homepage/generateContent.js";
export default function generateNavOptions() {

  // Create nav options
  const home = document.createElement('div');
  home.textContent = '\u00a0\u00a0\u00a0Home\u00a0\u00a0\u00a0';
  home.setAttribute('id', 'home');

  const menu = document.createElement('div');
  menu.textContent = '\u00a0\u00a0\u00a0Menu\u00a0\u00a0\u00a0';
  menu.setAttribute('id', 'menu');

  const contact = document.createElement('div');
  contact.textContent = '\u00a0\u00a0\u00a0Contact\u00a0\u00a0\u00a0';
  contact.setAttribute('id', 'contact');

  // Add nav options to array, return said array
  const navOptions = [home, menu, contact];
  for (let i = 0; i < navOptions.length; i++) {
    navOptions[i].setAttribute('class', 'nav-option');
    navOptions[i].addEventListener('click', generateContent);
  }
  return navOptions
}
