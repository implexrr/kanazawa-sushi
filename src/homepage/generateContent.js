import generateHomePage from "./generateHomePage.js";

export default function generateContent(e) {
  const option = e.target.id;
  document.querySelector('#content').replaceChildren();
  console.log("Content cleared.");
  if (option == "home") {
    generateHomePage();
  }
}