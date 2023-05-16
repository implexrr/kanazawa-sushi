import mapPic from "./mapPic";
import mapAddress from "./mapAddress";
import mapDescription from "./mapDescription";
import contactInfo from "./contactInfo";

// Create main content section for contact page
export default function mainContent() {
  const mainContentDOM = document.createElement('div');
  mainContentDOM.setAttribute('id', 'contactPage-main-content');

  const mainContent = [mapPic(), mapAddress(), mapDescription(), contactInfo()];

  // Push all main content components onto main content section
  for (let i = 0; i < mainContent.length; i++) {
    mainContentDOM.appendChild(mainContent[i]);
  }

  return mainContentDOM;
}