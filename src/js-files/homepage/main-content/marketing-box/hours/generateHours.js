import generateTitle from './generateTitle.js';
import generateDays from './generateDays.js'


export default function generateHours() {
  const hours = document.createElement('div');
  hours.setAttribute('id', 'hours');
  hours.appendChild(generateTitle());

  const days = generateDays();
  for (let i = 0; i < days.length; i++) {
    hours.appendChild(days[i]);
  }

  return hours;
}