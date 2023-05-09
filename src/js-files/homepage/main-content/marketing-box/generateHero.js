export default function generateHero() {
  const hero = document.createElement('div');
  hero.textContent = "Kanazawa Sushi";
  hero.setAttribute('id', 'hero');

  return hero;
}