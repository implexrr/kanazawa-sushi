export default function generateNavOptions() {

  // Create nav options
  const home = document.createElement('div');
  home.textContent = 'Home';
  const menu = document.createElement('div');
  menu.textContent = 'Menu';
  const contact = document.createElement('div');
  contact.textContent = 'Contact';

  // Add nav options to array, return said array
  const navOptions = [home, menu, contact];
  for (let i = 0; i < navOptions.length; i++) {
    navOptions[i].setAttribute('class', 'nav-option');
  }
  return navOptions
}