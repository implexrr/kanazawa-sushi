// Generate div containing the title of the menu showcase
export default function title() {
  const title = document.createElement('div');
  title.setAttribute('class', 'title');
  title.textContent = "Our menu";
  return title;
}