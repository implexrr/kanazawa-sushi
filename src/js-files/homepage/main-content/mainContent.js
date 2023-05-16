import marketingBox from "./marketing-box/marketingBox.js";

// Generate div containing the homepage main content
export default function mainContent() {
  const mainContentDOM = document.createElement('div');
  mainContentDOM.setAttribute('id', 'homepage-main-content');
  mainContentDOM.appendChild(marketingBox());
  return mainContentDOM;
}