import description from './description.js';
import link from './ghLink/link.js';

export default function copyright() {
  // Create nav options
  const copyright = document.createElement('div');
  copyright.setAttribute('id', 'copyright');

  copyright.appendChild(description());
  copyright.appendChild(link());

  return copyright;
}