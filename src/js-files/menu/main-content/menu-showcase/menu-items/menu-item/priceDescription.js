// Generate div containing the price description for a given menu item
export default function priceDescription(price) {

  const priceDescription = document.createElement('div');
  priceDescription.setAttribute('class', 'price');
  priceDescription.textContent = price;
  
  return priceDescription;
}