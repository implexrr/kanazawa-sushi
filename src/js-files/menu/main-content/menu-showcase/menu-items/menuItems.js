import generateMenuItem from './menu-item/generateMenuItem.js';
export default function menuItems() {
  const menuItems = []
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

  menuItems.push(salmonNigiri);
  menuItems.push(tunaNigiri);
  menuItems.push(shrimpNigiri);
  menuItems.push(eggNigiri);
  menuItems.push(crabNigiri);
  menuItems.push(salmonAvocadoMaki);
  menuItems.push(salmonRoeMaki);
  menuItems.push(cucumberMaki);
  menuItems.push(crabHandRoll);
  menuItems.push(salmonHandRoll);
  menuItems.push(doubleSalmon);
  menuItems.push(salmonDreams);

  const menuItemsDOM = document.createElement('div');
  menuItemsDOM.setAttribute('id', 'menu-items');
  for (let i = 0; i < menuItems.length; i++) {
    menuItemsDOM.appendChild(menuItems[i]);
  }

  return menuItemsDOM;
}