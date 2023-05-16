// Generate div containing a description of the restaurant location
export default function mapDescription() {
  const mapDescription = document.createElement('div');
  mapDescription.textContent = "Nestled in the heart of Hamilton, ON, just a stone's throw away from the charming neighbourhood of Westdale and McMaster University, lies our restaurant - a hidden gem that will transport your taste buds to the Kanazawa region of Japan. Indulge in our exquisite sushi, expertly crafted to reflect the rich history and culinary mastery of the region, and relish in the cozy and intimate ambiance of our restaurant. Whether arriving by car and taking advantage of our free on-site parking, or utilizing the convenient public transit options available, Kanazawa promises an unforgettable dining experience.";
  mapDescription.setAttribute('id', 'contactPage-map-description');

  return mapDescription;
}