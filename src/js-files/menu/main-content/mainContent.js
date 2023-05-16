import menuShowcase from './menu-showcase/menuShowcase.js';

// Generate main content for menu page
export default function mainContent() {
  const mainContentDOM = document.createElement('div');
  mainContentDOM.setAttribute('id', 'menu-main-content');
  mainContentDOM.appendChild(menuShowcase());
  return mainContentDOM;
}