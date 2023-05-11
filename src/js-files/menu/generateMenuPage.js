import '../../css-files/webpage-styles/contact.css';
import header from '../tools/header/header.js';
import underlineNavMenu from '../tools/header/navbar/underlineNavMenu';

export default function generateMenuPage() {
  const menuPage = [];

  menuPage.push(header());

  for (let i = 0; i < menuPage.length; i++) {
    document.querySelector('#content').appendChild(menuPage[i]);
  }
  underlineNavMenu();
  console.log("Menu page generated.");
}