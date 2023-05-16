// Generate div containing the contact information of the restaurant
export default function contactInfo() {
  const contactInfo = document.createElement('div');
  contactInfo.textContent = "Contact us at: 012-345-6789";
  contactInfo.setAttribute('id', 'contact-info');

  return contactInfo;
}