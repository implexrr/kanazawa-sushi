import paraDOM from './paraDOM.js';

export default function info() {
  const info = document.createElement('div');
  info.setAttribute('class', 'info');
  info.appendChild(paraDOM());

  return info;
} 