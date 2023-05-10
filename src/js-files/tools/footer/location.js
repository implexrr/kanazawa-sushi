export default function location() {
  // Create nav options
  const location = document.createElement('div');
  location.setAttribute('id', 'location');

  location.textContent = "1280 Main Street West, Hamilton, ON";
  return location;
}