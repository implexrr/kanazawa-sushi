import '../../css-files/webpage-styles/contact.css';
import header from '../tools/header/header.js';

export default function generateContactPage() {
  const contactPage = [];

  contactPage.push(header());

  for (let i = 0; i < contactPage.length; i++) {
    document.querySelector('#content').appendChild(contactPage[i]);
  }

  const navHome = document.querySelector('#home');
  navHome.style.textDecoration = "none";
  navHome.style.transform = "translate(0, 0.1rem)";

  const navMenu = document.querySelector('#menu');
  navMenu.style.textDecoration = "none";
  navMenu.style.transform = "translate(0, 0.1rem)";
  
  console.log("Contact page generated.");
}