import generateMenuItem from './menu-item/generateMenuItem.js';

// Create menu items to display onto the showcase
export default function menuItems() {

  // Generate divs for all menu items
  const salmonNigiri = generateMenuItem("salmon-nigiri", "Salmon Nigiri", "サーモン", "2pc", "6.99");
  const tunaNigiri = generateMenuItem("tuna-nigiri", "Tuna Nigiri", "まぐろ", "2pc", "6.99");
  const shrimpNigiri = generateMenuItem("shrimp-nigiri", "Shrimp Nigiri", "エビ", "2pc", "6.99");
  const eggNigiri = generateMenuItem("egg-nigiri", "Egg Nigiri", "卵", "2pc", "6.99");
  const crabNigiri = generateMenuItem("crab-nigiri", "Crab Nigiri", "カニ", "2pc", "6.99");
  const salmonAvocadoMaki = generateMenuItem("salmon-avocado-maki", "Salmon Avocado Nigiri", "サーモンアボカド", "6pc", "10.99");
  const salmonRoeMaki = generateMenuItem("salmon-roe-maki", "Salmon Nigiri", "いくら", "6pc", "10.99");
  const cucumberMaki = generateMenuItem("cucumber-maki", "Cucumber Maki", "キュウリ", "6pc", "7.99");
  const crabHandRoll = generateMenuItem("crab-hand-roll", "Crab Hand Roll", "カニの手巻き", "1pc", "6.99");
  const salmonHandRoll = generateMenuItem("salmon-hand-roll", "Salmon Hand Roll", "サーモンの手巻き", "1pc", "6.99");
  const doubleSalmon = generateMenuItem("double-salmon", "Double Salmon", "ダブルサーモン", "6pc", "11.99");
  const salmonDreams = generateMenuItem("salmon-dreams", "Salmon Nigiri", "サーモンの夢", "6pc", "11.99");

  const menuItems = [salmonNigiri, tunaNigiri, shrimpNigiri, eggNigiri, crabNigiri, salmonAvocadoMaki, salmonRoeMaki, cucumberMaki, crabHandRoll, salmonHandRoll, doubleSalmon, salmonDreams]

  // Push all menu item divs onto a the menu items div
  const menuItemsDOM = document.createElement('div');
  menuItemsDOM.setAttribute('id', 'menu-items');
  for (let i = 0; i < menuItems.length; i++) {
    menuItemsDOM.appendChild(menuItems[i]);
  }

  return menuItemsDOM;
}