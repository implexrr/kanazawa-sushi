import generateHomePage from './homepage/generateHomePage.js';
import generateContactPage from './contact/generateContactPage.js';
import generateMenuPage from './menu/generateMenuPage.js';

export default function generateContent(e) {
  const option = e.target.id;
  document.querySelector('#content').replaceChildren();
  console.log("Content cleared.");

  if (option == "home") {
    generateHomePage();
  }
  else if (option == "contact") {
    generateContactPage();
  }
  else if (option == "menu") {
    generateMenuPage();
  }
}