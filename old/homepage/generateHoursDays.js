export default function generateHoursDays () {
  // Create divs for days of operation
  const sunday = document.createElement('div');
  sunday.setAttribute('class', 'days');
  sunday.textContent = "Sunday: 11am - 6pm";

  const monThu = document.createElement('div');
  monThu.setAttribute('class', 'days');
  monThu.textContent = "Monday - Thursday: 11am - 10pm";

  const friSat = document.createElement('div');
  friSat.setAttribute('class', 'days');
  friSat.textContent = "Friday-Saturday: 11am - 12am";

  // Store days/hours of operation in an array
  const days = [sunday, monThu, friSat];
  return days;
}