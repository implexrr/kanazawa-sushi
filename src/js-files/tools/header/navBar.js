import navOptions from './navbar/navOptions.js';

export default function navBar() {
  // Create navbar
  const navBarDOM = document.createElement('div');
  navBarDOM.setAttribute('id', 'nav-bar');
  const navOptionsArr = navOptions();

  // Goes through the nav options and adds each one to the navbar
  for (let i = 0; i < navOptionsArr.length; i++) {
    navBarDOM.appendChild(navOptionsArr[i]);
  }
  return navBarDOM;
}