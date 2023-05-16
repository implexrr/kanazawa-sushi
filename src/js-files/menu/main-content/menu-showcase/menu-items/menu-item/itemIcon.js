// Generate div containing the picture for a given menu item
export default function itemIcon() {
  const itemIcon = document.createElement('div');
  itemIcon.setAttribute('class', 'item-icon');

  return itemIcon;
}