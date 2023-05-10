import generateHeader from '../tools/header/generateHeader.js';
import generateMainContent from '../homepage/main-content/generateMainContent.js';

export default function generateHomePage() {
  const homepage = [];

  homepage.push(generateHeader());
  homepage.push(generateMainContent());

  for (let i = 0; i < homepage.length; i++) {
    document.querySelector('#content').appendChild(homepage[i]);
  }
  
  console.log("Homepage generated.");
}