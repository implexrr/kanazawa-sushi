export default function amountDescription(amount) {

  const amountDescription = document.createElement('div');
  amountDescription.setAttribute('class', 'amount');
  amountDescription.textContent = amount;
  
  return amountDescription;
}