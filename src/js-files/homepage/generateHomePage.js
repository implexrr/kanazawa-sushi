import header from '../tools/header/header.js';
import mainContent from './main-content/mainContent.js';

export default function generateHomePage() {
  const homepage = [];

  homepage.push(header());
  homepage.push(mainContent());

  for (let i = 0; i < homepage.length; i++) {
    document.querySelector('#content').appendChild(homepage[i]);
  }
  
  console.log("Homepage generated.");
}