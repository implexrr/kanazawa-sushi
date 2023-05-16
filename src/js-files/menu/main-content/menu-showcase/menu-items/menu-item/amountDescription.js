// Generate div containing the amount description for a given menu item
export default function amountDescription(amount) {

  const amountDescription = document.createElement('div');
  amountDescription.setAttribute('class', 'amount');
  amountDescription.textContent = amount;
  
  return amountDescription;
}