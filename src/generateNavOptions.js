export default function generateNavOptions() {
  const home = document.createElement('div');
  home.textContent = 'Home';
  const menu = document.createElement('div');
  menu.textContent = 'Menu';
  const contact = document.createElement('div');
  contact.textContent = 'Contact';

  const navOptions = [home, menu, contact];
  for (let i = 0; i < navOptions.length; i++) {
    navOptions[i].setAttribute('class', 'nav-option');
  }
  return navOptions
}