import itemIcon from './itemIcon.js';
import englishDescription from './englishDescription.js';
import japaneseDescription from './japaneseDescription.js';
import amountDescription from './amountDescription.js';
import priceDescription from './priceDescription.js';

export default function generateMenuItem(itemId, englishName, japaneseName, amount, price) {
  const menuItemDOM = document.createElement('div');
  menuItemDOM.setAttribute('class', 'menu-item');
  menuItemDOM.setAttribute('id', itemId);

  const menuItem = [itemIcon(), englishDescription(englishName), japaneseDescription(japaneseName), amountDescription(amount), priceDescription(price)];
  for (let i = 0; i < menuItem.length; i++) {
    menuItemDOM.appendChild(menuItem[i]);
  }

  return menuItemDOM;
}