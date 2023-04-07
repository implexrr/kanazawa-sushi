import _ from 'lodash';
import generateNavBar from './generateNavBar.js';
import './style.css';

  function component() {
    const navbar = generateNavBar();
    return navbar;
  }

  document.querySelector('#content').appendChild(component());



//  <body>
//  <div id="content">
//    <div id="navbar">
//      <div class="nav-option">Home</div>
//      <div class="nav-option">Menu</div>
//      <div class="nav-option">Contact</div>
//    </div>
//    <div id="hero">
//      <div id="greeting">Kanazawa Sushi</div>
//      <div id="slogan">Flavor Meets Elegance: Experience the Art of Sushi</div>
//    </div>
//    <div id="spiel">
//      Kanazawa Sushi is a culinary gem that will take your taste buds on an unforgettable journey. 
//      Our skilled chefs use only the freshest and highest quality ingredients to create beautifully crafted sushi dishes that are bursting with flavor. 
//      Combined with our elegant ambiance and exceptional service, Kanazawa Sushi promises a dining experience that is nothing short of extraordinary.
//    </div>
//    <div id="hours">
//      <div class="title">
//        Hours of Operation:
//      </div>
//      <div class="days">Sunday: 11am - 6pm</div>
//      <div class="days">Monday-Thursday: 11am - 10pm</div>
//      <div class="days">Friday-Saturday: 11am - 12am</div>
//    </div>
//    <div id="location">
//      1280 Main Street West, Hamilton, ON
//    </div>
//  </div>
//  <script src="bundle.js"></script>
// </body>
