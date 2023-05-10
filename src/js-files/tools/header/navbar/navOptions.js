import generateContent from '../../../../js-files/generateContent.js';
export default function navOptions() {

  // Create nav options
  const home = document.createElement('div');
  home.textContent = '\u00a0\u00a0\u00a0Home\u00a0\u00a0\u00a0';
  home.setAttribute('id', 'home');

  const menu = document.createElement('div');
  menu.textContent = '\u00a0\u00a0\u00a0Menu\u00a0\u00a0\u00a0';
  menu.setAttribute('id', 'menu');

  const contact = document.createElement('div');
  contact.textContent = '\u00a0\u00a0\u00a0Contact\u00a0\u00a0\u00a0';
  contact.setAttribute('id', 'contact');

  // Add nav options to array, return said array
  const navOptionsArr = [home, menu, contact];
  for (let i = 0; i < navOptionsArr.length; i++) {
    navOptionsArr[i].setAttribute('class', 'nav-option');
    navOptionsArr[i].addEventListener('click', generateContent);
  }
  return navOptionsArr;
}
