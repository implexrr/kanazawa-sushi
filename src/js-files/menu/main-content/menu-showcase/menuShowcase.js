import title from './title.js';
import menuItems from './menu-items/menuItems.js';

// Create a container showcasing menu items
export default function menuShowcase() {
  const menuShowcase = document.createElement('div');
  menuShowcase.setAttribute('id', 'menu-showcase');
  menuShowcase.appendChild(title());
  menuShowcase.appendChild(menuItems());
  return menuShowcase;
}