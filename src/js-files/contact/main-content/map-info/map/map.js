import address from './address.js';
import picture from './picture.js';


export default function map() {
  const map = document.createElement('div');
  map.setAttribute('class', 'map');
  map.appendChild(address());
  map.appendChild(picture());

  return map;
}