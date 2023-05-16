// Generate div containing the japanese description for a given menu item
export default function japaneseDescription(name) {

  const japaneseDescription = document.createElement('div');
  japaneseDescription.setAttribute('class', 'description-japanese');
  japaneseDescription.textContent = name;

  return japaneseDescription;
}