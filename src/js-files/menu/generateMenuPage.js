import '../../css-files/webpage-styles/menu.css';
import header from '../tools/header/header.js';
import mainContent from '../menu/main-content/mainContent.js';
import footer from '../tools/footer/footer.js';
import underlineNavMenu from '../tools/header/navbar/underlineNavMenu';

export default function generateMenuPage() {
  const menuPage = [header(), mainContent(), footer()];

  // Push all 3 contact page components to content
  for (let i = 0; i < menuPage.length; i++) {
    document.querySelector('#content').appendChild(menuPage[i]);
  }

  // Underline Menu for the navigation bar
  underlineNavMenu();

  console.log("Menu page generated.");
}