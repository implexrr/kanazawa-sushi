import '../../css-files/webpage-styles/homepage.css'
import header from '../tools/header/header.js';
import mainContent from './main-content/mainContent.js';
import footer from '../tools/footer/footer.js'

export default function generateHomePage() {
  const homepage = [];

  homepage.push(header());
  homepage.push(mainContent());
  homepage.push(footer());

  for (let i = 0; i < homepage.length; i++) {
    document.querySelector('#content').appendChild(homepage[i]);
  }

  const navContact = document.querySelector('#contact');
  navContact.style.textDecoration = "none";
  navContact.style.transform = "translate(0, 0.1rem)";

  const navMenu = document.querySelector('#menu');
  navMenu.style.textDecoration = "none";
  navMenu.style.transform = "translate(0, 0.1rem)";
  
  console.log("Homepage generated.");
}