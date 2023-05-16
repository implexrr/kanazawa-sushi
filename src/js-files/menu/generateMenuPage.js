import '../../css-files/webpage-styles/menu.css';
import header from '../tools/header/header.js';
import mainContent from '../menu/main-content/mainContent.js';
import footer from '../tools/footer/footer.js';
import underlineNavMenu from '../tools/header/navbar/underlineNavMenu';

export default function generateMenuPage() {
  const menuPage = [];

  menuPage.push(header());
  menuPage.push(mainContent());
  menuPage.push(footer());

  for (let i = 0; i < menuPage.length; i++) {
    document.querySelector('#content').appendChild(menuPage[i]);
  }
  underlineNavMenu();
  console.log("Menu page generated.");
}