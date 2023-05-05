import generateNavBar from "./navbar/generateNavBar.js";
export default function generateHeader() {
  // Create nav options
  const header = document.createElement('div');
  header.setAttribute('id', 'header');

  header.appendChild(generateNavBar());
  return header;
}