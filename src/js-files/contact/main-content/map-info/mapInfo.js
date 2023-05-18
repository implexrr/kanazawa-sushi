import map from './map/map.js';
import info from './info/info.js';

export default function mapInfo() {
  const mapInfo = document.createElement('div');
  mapInfo.setAttribute('id', 'map-info');
  mapInfo.appendChild(map());
  mapInfo.appendChild(info());

  return mapInfo;
}