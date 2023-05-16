// Generate div containing the english description for a given menu item
export default function englishDescription(name) {

  const englishDescription = document.createElement('div');
  englishDescription.setAttribute('class', 'description-english');
  englishDescription.textContent = name;

  return englishDescription;
}