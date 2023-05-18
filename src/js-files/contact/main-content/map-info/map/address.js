export default function address() {
  const address = document.createElement('div');
  address.setAttribute('class', 'address');
  address.textContent = "1280 Main Street West, Hamilton, ON, Canada";

  return address;
}