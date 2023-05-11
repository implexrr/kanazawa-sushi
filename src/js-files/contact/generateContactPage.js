import '../../css-files/webpage-styles/contact.css';
import header from '../tools/header/header.js';
import underlineNavContact from '../tools/header/navbar/underlineNavContact';

export default function generateContactPage() {
  const contactPage = [];

  contactPage.push(header());

  for (let i = 0; i < contactPage.length; i++) {
    document.querySelector('#content').appendChild(contactPage[i]);
  }
  underlineNavContact();
  console.log("Contact page generated.");
}