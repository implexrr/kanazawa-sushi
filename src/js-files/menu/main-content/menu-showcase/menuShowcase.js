import title from './title.js';
// import menuItems from './menu-items/menuItems.js';

export default function menuShowcase() {
  const menuShowcase = document.createElement('div');
  menuShowcase.setAttribute('id', 'menu-showcase');
  menuShowcase.appendChild(title());
  return menuShowcase;
}