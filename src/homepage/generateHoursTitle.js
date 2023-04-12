export default function generateHoursTitle () {
  const title = document.createElement('div');
  title.textContent = "Hours of Operation";
  title.setAttribute('class', 'title');
  return title;
}