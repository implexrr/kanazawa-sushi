import mapInfo from './map-info/mapInfo.js';

// Generate main content section for contact page
export default function mainContent() {
  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'contactPage-main-content');
  mainContent.appendChild(mapInfo());

  return mainContent;
}