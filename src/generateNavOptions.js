import clearContent from "./clearContent.js";
export default function generateNavOptions() {

  // Create nav options
  const home = document.createElement('div');
  home.textContent = 'Home';
  home.setAttribute('id', 'home');

  const menu = document.createElement('div');
  menu.textContent = 'Menu';
  menu.setAttribute('id', 'menu');

  const contact = document.createElement('div');
  contact.textContent = 'Contact';
  contact.setAttribute('id', 'contact');

  // Add nav options to array, return said array
  const navOptions = [home, menu, contact];
  for (let i = 0; i < navOptions.length; i++) {
    navOptions[i].setAttribute('class', 'nav-option');
    navOptions[i].addEventListener('click', clearContent);
  }
  return navOptions
}
