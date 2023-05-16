export default function generateItem(itemId) {
  // export default function generateItem(itemId, englishName, japaneseName, amount, price)
  // const salmonNigiri = generateMenuItem("salmon-nigiri", "Salmon Nigiri", "サーモン", "2pc", "6.99");
  const menuItem = document.createElement('div');
  menuItem.setAttribute('class', 'menu-item');
  menuItem.setAttribute('id', itemId);
  

  return menuItem;
}