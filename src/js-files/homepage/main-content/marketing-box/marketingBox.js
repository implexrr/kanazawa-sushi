import hero from './hero.js';
import slogan from './slogan.js';
import spiel from './spiel.js';
import hours from '../marketing-box/hours/hours.js';

// Generate div containing marketing box
export default function marketingBox(e) {
  const marketingBox = [hero(), slogan(), spiel(), hours()]
  const marketingBoxDOM = document.createElement('div');
  marketingBoxDOM.setAttribute('id', 'homepage-marketing-box');

  // Push all marketing box components onto DOM representation
  for (let i = 0; i < marketingBox.length; i++) {
    marketingBoxDOM.append(marketingBox[i]);
  }

  return marketingBoxDOM;
}