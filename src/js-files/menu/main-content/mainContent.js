import menuShowcase from './menu-showcase/menuShowcase.js';

export default function mainContent() {
  const mainContentDOM = document.createElement('div');
  mainContentDOM.setAttribute('id', 'menu-main-content');
  mainContentDOM.appendChild(menuShowcase());
  return mainContentDOM;
}