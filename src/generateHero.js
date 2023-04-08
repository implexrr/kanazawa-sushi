export default function generateHero() {
  // Create empty hero div
  const hero = document.createElement('div');
  hero.setAttribute('id', 'hero');
  
  // Create and append slogan, greeting to hero element
  const greeting = document.createElement('div');
  greeting.setAttribute('id', 'greeting');
  greeting.textContent = "Kanazawa Sushi";
  
  const slogan = document.createElement('div');
  slogan.setAttribute('id', 'slogan');
  slogan.textContent = "Flavor Meets Elegance: Experience the Art of Sushi";
  
  hero.appendChild(greeting);
  hero.appendChild(slogan);
  return hero;
}