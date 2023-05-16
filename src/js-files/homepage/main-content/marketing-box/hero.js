// Generate div for marketing box hero
export default function hero() {
  const hero = document.createElement('div');
  hero.textContent = "Kanazawa Sushi";
  hero.setAttribute('id', 'homepage-hero');

  return hero;
}