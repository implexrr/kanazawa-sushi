import generateHeader from '../tools/header/generateHeader.js';

export default function generateHomePage() {
  const homepage = [];

  homepage.push(generateHeader());

  for (let i = 0; i < homepage.length; i++) {
    document.querySelector('#content').appendChild(homepage[i]);
  }
  
  console.log("Homepage generated.");
}