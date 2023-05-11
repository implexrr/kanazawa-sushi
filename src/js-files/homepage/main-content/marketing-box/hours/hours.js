import title from './title.js';
import days from './days.js';


export default function hours() {
  const hours = document.createElement('div');
  hours.setAttribute('id', 'hours');
  hours.appendChild(title());

  const daysArr = days();
  for (let i = 0; i < daysArr.length; i++) {
    hours.appendChild(daysArr[i]);
  }

  return hours;
}