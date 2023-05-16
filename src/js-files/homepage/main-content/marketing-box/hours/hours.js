import title from './title.js';
import days from './days.js';

// Generate div containing the hours of operation
export default function hours() {
  const hours = document.createElement('div');
  hours.setAttribute('id', 'homepage-hours');
  hours.appendChild(title());

  const daysArr = days();
  for (let i = 0; i < daysArr.length; i++) {
    hours.appendChild(daysArr[i]);
  }

  return hours;
}