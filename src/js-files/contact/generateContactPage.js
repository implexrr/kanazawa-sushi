import '../../css-files/webpage-styles/contact.css';
import header from '../tools/header/header.js';
import mainContent from './main-content/mainContent.js';
import footer from '../tools/footer/footer';
import underlineNavContact from '../tools/header/navbar/underlineNavContact';

export default function generateContactPage() {
  const contactPage = [];

  contactPage.push(header());
  contactPage.push(mainContent());
  contactPage.push(footer());


  for (let i = 0; i < contactPage.length; i++) {
    document.querySelector('#content').appendChild(contactPage[i]);
  }
  underlineNavContact();
  console.log("Contact page generated.");
}