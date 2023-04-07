export default function generateNavBar() {
  const navbar = document.createElement('div');
  navbar.setAttribute('id', 'navbar');
  
  const home = document.createElement('div');
  home.textContent = 'Home';
  const menu = document.createElement('div');
  menu.textContent = 'Menu';
  const contact = document.createElement('div');
  contact.textContent = 'Contact';

  const navOptions = [home, menu, contact];

  console.log(navOptions.length);
  for (let i = 0; i < navOptions.length; i++) {
    navOptions[i].setAttribute('class', navOptions[i].textContent);
    navbar.appendChild(navOptions[i]);
  }
  return navbar;
 }