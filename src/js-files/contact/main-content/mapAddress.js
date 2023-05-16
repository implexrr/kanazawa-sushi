// Generate div containing the address of the restaurant
export default function mapAddress() {
  const mapAddress = document.createElement('div');
  mapAddress.textContent = "1280 Main Street West, Hamilton, ON, Canada";
  mapAddress.setAttribute('id', 'contactPage-map-address');

  return mapAddress;
}