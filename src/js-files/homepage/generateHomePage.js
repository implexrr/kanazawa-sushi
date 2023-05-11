import '../../css-files/webpage-styles/homepage.css'
import header from '../tools/header/header.js';
import mainContent from './main-content/mainContent.js';
import footer from '../tools/footer/footer.js';
import underlineNavHome from './underlineNavHome';

export default function generateHomePage() {
  const homepage = [];

  homepage.push(header());
  homepage.push(mainContent());
  homepage.push(footer());

  for (let i = 0; i < homepage.length; i++) {
    document.querySelector('#content').appendChild(homepage[i]);
  }

  // const navHome = document.querySelector('#home');
  // navHome.style.textDecoration = "underline";
  // navHome.style.transform = "translate(0, -0.1rem)";
  // navHome.style.textUnderlineOffset = "1rem";

  underlineNavHome();
  
  console.log("Homepage generated.");
}