import marketingBox from "./marketing-box/marketingBox.js";

export default function mainContent() {
  const mainContentDOM = document.createElement('div');
  mainContentDOM.setAttribute('id', 'homepage-main-content');
  mainContentDOM.appendChild(marketingBox());
  return mainContentDOM;
}