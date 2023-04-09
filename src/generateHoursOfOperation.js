import generateHoursTitle from './generateHoursTitle';
import generateHoursDays from './generateHoursDays.js';

export default function generateHoursOfOperation () {
  const hours = document.createElement('div');
  hours.setAttribute('id', 'hours');

  hours.appendChild(generateHoursTitle());
  const days = generateHoursDays();
  for (let i = 0; i < days.length; i++) {
    hours.appendChild(days[i]);
  }
  return hours;
}