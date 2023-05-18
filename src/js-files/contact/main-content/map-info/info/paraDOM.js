import paraElements from './paraElements.js';

export default function paraDOM() {
  const para = document.createElement('p');
  const _paraElements = paraElements();

  for (let i = 0; i < _paraElements.length; i++) {
    para.appendChild(_paraElements[i]);
  }

  return para;
}