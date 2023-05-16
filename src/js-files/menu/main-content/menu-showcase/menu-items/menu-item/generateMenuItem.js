export default function generateMenuItem(itemId, englishName, japaneseName, _amount, _price) {
  // const salmonNigiri = generateMenuItem("salmon-nigiri", "Salmon Nigiri", "サーモン", "2pc", "6.99");
  const menuItem = document.createElement('div');
  menuItem.setAttribute('class', 'menu-item');
  menuItem.setAttribute('id', itemId);

  const itemIcon = document.createElement('div');
  itemIcon.setAttribute('class', 'item-icon');
  menuItem.appendChild(itemIcon);
  
  const descriptionEnglish = document.createElement('div');
  descriptionEnglish.setAttribute('class', 'description-english');
  descriptionEnglish.textContent = englishName;
  menuItem.appendChild(descriptionEnglish);

  const descriptionJapanese = document.createElement('div');
  descriptionJapanese.setAttribute('class', 'description-japanese');
  descriptionJapanese.textContent = japaneseName;
  menuItem.appendChild(descriptionJapanese);

  const amount = document.createElement('div');
  amount.setAttribute('class', 'amount');
  amount.textContent = _amount;
  menuItem.appendChild(amount);

  const price = document.createElement('div');
  price.setAttribute('class', 'price');
  price.textContent = _price;
  menuItem.appendChild(price);
  

  return menuItem;
}