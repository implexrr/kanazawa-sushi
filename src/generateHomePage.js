import generateNavBar from './generateNavBar.js';
import generateHero from './generateHero.js';
import generateSpiel from './generateSpiel.js';
import generateHoursOfOperation from './generateHoursOfOperation.js';
import generateLocation from './generateLocation.js';

export default function generateHomePage() {
  const homepage = [];

  homepage.push(generateNavBar());
  homepage.push(generateHero());
  homepage.push(generateSpiel());
  homepage.push(generateHoursOfOperation());
  homepage.push(generateLocation());

  return homepage;
}