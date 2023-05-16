import '../../css-files/webpage-styles/contact.css';
import header from '../tools/header/header.js';
import mainContent from './main-content/mainContent.js';
import footer from '../tools/footer/footer';
import underlineNavContact from '../tools/header/navbar/underlineNavContact';

export default function generateContactPage() {
  const contactPage = [header(), mainContent(), footer()];

  // Push all 3 contact page components to content
  for (let i = 0; i < contactPage.length; i++) {
    document.querySelector('#content').appendChild(contactPage[i]);
  }

  // Underline Contact for the navigation bar
  underlineNavContact();

  console.log("Contact page generated.");
}