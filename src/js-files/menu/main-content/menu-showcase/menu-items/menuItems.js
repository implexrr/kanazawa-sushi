import generateMenuItem from './menu-item/generateMenuItem.js';
export default function menuItems() {
  const menuItems = []
  // const salmonNigiri = generateMenuItem("salmon-nigiri", "Salmon Nigiri", "サーモン", "2pc", "6.99");
  const salmonNigiri = generateMenuItem("salmon-nigiri");

  menuItems.push(salmonNigiri);
  const menuItemsDOM = document.createElement('div');
  menuItemsDOM.setAttribute('id', 'menu-items');
  for (let i = 0; i < menuItems.length; i++) {
    menuItemsDOM.appendChild(menuItems[i]);
  }

  return menuItemsDOM;
}