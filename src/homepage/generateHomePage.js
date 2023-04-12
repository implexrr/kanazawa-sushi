import generateNavBar from '../navbar/generateNavBar.js';
import generateHero from './generateHero.js';
import generateSpiel from './generateSpiel.js';
import generateHoursOfOperation from './generateHoursOfOperation.js';
import generateLocation from '../utils/generateLocation.js';

export default function generateHomePage() {
  const homepage = [];

  homepage.push(generateNavBar());
  homepage.push(generateHero());
  homepage.push(generateSpiel());
  homepage.push(generateHoursOfOperation());
  homepage.push(generateLocation());

  for (let i = 0; i < homepage.length; i++) {
    document.querySelector('#content').appendChild(homepage[i]);
  }
  
  console.log("Homepage generated.");
}