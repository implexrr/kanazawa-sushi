// Generate div containing the details for the hours of the restaurant
export default function days() {
  const sun = document.createElement('div');
  const monThu = document.createElement('div');
  const friSat = document.createElement('div');

  sun.textContent = "Sunday: 11am - 6pm";
  monThu.textContent = "Monday-Thursday: 11am - 10pm";
  friSat.textContent = "Friday-Saturday: 11am - 12am";

  const days = [sun, monThu, friSat]

  for (let i = 0; i < days.length; i++) {
    days[i].setAttribute('class', 'days');
  }

  return days;
}
