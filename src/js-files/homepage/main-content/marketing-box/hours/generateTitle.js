export default function generateTitle() {
  const title = document.createElement('div');
  title.setAttribute('class', 'title');
  title.textContent = "Hours of Operation:";

  return title;
}