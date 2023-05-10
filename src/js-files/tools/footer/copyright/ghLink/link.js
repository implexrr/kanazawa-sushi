import symbol from './symbol.js';

export default function link () {
  const link = document.createElement('a');
  link.setAttribute('href', 'https://github.com/implexrr/kanazawa-sushi');
  link.appendChild(symbol());

  return link;
}