import '../../css-files/webpage-styles/homepage.css'
import header from '../tools/header/header.js';
import mainContent from './main-content/mainContent.js';
import footer from '../tools/footer/footer.js';
import underlineNavHome from '../tools/header/navbar/underlineNavHome';

export default function generateHomePage() {
  const homepage = [];

  homepage.push(header());
  homepage.push(mainContent());
  homepage.push(footer());

  for (let i = 0; i < homepage.length; i++) {
    document.querySelector('#content').appendChild(homepage[i]);
  }

  underlineNavHome();
  
  console.log("Homepage generated.");
}