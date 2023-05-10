import navBar from '../header/navBar.js'
export default function header() {
  // Create nav options
  const headerDOM = document.createElement('div');
  headerDOM.setAttribute('id', 'header');

  headerDOM.appendChild(navBar());
  return headerDOM;
}