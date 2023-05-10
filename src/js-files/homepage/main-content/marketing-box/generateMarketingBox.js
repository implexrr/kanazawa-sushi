import generateHero from './generateHero.js';
import generateSlogan from './generateSlogan.js';
import generateSpiel from './generateSpiel.js';
import generateHours from '../marketing-box/hours/generateHours.js';

export default function generateMarketingBox(e) {
  const marketingBox = [generateHero(), generateSlogan(), generateSpiel(), generateHours()]
  const marketingBoxDom = document.createElement('div');
  marketingBoxDom.setAttribute('id', 'marketing-box');
  for (let i = 0; i < marketingBox.length; i++) {
    marketingBoxDom.append(marketingBox[i]);
  }

  return marketingBoxDom;
}