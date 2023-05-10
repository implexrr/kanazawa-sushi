import generateMarketingBox from "./marketing-box/generateMarketingBox.js";

export default function generateMainContent() {
  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');
  mainContent.appendChild(generateMarketingBox());
  return mainContent;
}