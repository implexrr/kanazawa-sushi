import generateHoursTitle from './generateHoursTitle';
import generateHoursDays from './generateHoursDays.js';

export default function generateHoursOfOperation () {
  const hours = document.createElement('div');
  hours.setAttribute('id', 'hours');

  // Generate header for hours of operation
  hours.appendChild(generateHoursTitle());

  // Append days/hours of operation
  const days = generateHoursDays();
  for (let i = 0; i < days.length; i++) {
    hours.appendChild(days[i]);
  }
  return hours;
}