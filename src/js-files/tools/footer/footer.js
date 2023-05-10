import location from './location.js';
import copyright from './copyright/copyright.js';


export default function footer() {
  // Create nav options
  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');

  footer.appendChild(location());
  footer.appendChild(copyright());
  return footer;
}