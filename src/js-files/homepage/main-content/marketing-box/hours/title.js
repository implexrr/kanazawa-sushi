// Generate div containing the title for the hours of operation
export default function title() {
  const title = document.createElement('div');
  title.setAttribute('class', 'title');
  title.textContent = "Hours of Operation:";

  return title;
}