export default function spiel() {
  const spiel = document.createElement('div');
  spiel.textContent = "Kanazawa Sushi is a culinary gem that will take your taste buds on an unforgettable journey. "
  + "Our skilled chefs use only the freshest and highest quality ingredients to create beautifully crafted sushi dishes that are bursting with flavor. "
  + "Combined with our elegant ambiance and exceptional service, Kanazawa Sushi promises a dining experience that is nothing short of extraordinary.";
  spiel.setAttribute('id', 'homepage-spiel');

  return spiel;
}