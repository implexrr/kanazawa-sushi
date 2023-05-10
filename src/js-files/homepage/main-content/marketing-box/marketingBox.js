import hero from './hero.js';
import slogan from './slogan.js';
import spiel from './spiel.js';
import hours from '../marketing-box/hours/hours.js';

export default function marketingBox(e) {
  const marketingBox = [hero(), slogan(), spiel(), hours()]
  const marketingBoxDom = document.createElement('div');
  marketingBoxDom.setAttribute('id', 'marketing-box');
  for (let i = 0; i < marketingBox.length; i++) {
    marketingBoxDom.append(marketingBox[i]);
  }

  return marketingBoxDom;
}