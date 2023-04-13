export default function generatLocation() {
  // Generate restaurant location 
  const location = document.createElement('div');
  location.textContent = '1280 Main Street West, Hamilton, ON';
  location.setAttribute('id', 'location');
  return location;
}