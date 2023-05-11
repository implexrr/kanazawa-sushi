import mapPic from "./mapPic";
import mapAddress from "./mapAddress";
import mapDescription from "./mapDescription";
import contactInfo from "./contactInfo";

export default function mainContent() {
  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'contactPage-main-content');
  mainContent.appendChild(mapPic());
  mainContent.appendChild(mapAddress());
  mainContent.appendChild(mapDescription());
  mainContent.appendChild(contactInfo());

  return mainContent;
}