(()=>{"use strict";var n={118:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(860),t.b),d=a()(o()),u=s()(l);d.push([n.id,"#footer {\n  width: 100%;\n  position: sticky;\n  bottom: 0;\n  box-shadow: inset 0 0 0 1000px rgba(59, 66, 93, 0.6);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: max(2%, 20px);\n  padding-right: max(2%, 20px);\n}\n\n#copyright {\n  display: flex;\n  justify-content: center;\n}\n\n#copyright > * {\n  margin-left: max(1%, 10px);\n  margin-right: max(1%, 10px);\n}\n\n.github-link {\n  height: 20px;\n  width: 20px;\n  background-image: url("+u+");\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  opacity: 1;\n}\n\n.github-link:hover {\n  opacity: 0.7;\n}",""]);const p=d},58:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"#header {\n  width: 100%;\n  position: sticky;\n  top: 0;\n  box-shadow: inset 0 0 0 1000px rgba(59, 66, 93, 0.6);\n}\n\n#nav-bar {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  font-size: 1.3rem;\n}\n\n.nav-option {\n  margin-left: max(2%, 20px);\n  margin-right: max(2%, 20px);\n  opacity: 1;\n  transition: 0.3s;\n  font-size: larger;\n}\n\n.nav-option:hover {\n  opacity: 0.7;\n  transition: 0.3s;\n  cursor: pointer;\n  transform: translate(0, -0.1rem);\n  text-decoration: underline;\n  text-underline-offset: 1rem;\n}",""]);const c=a},937:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(294),t.b),d=a()(o()),u=s()(l);d.push([n.id,"html, body {\n  margin: 0;\n  height: 100%;\n}\n\nhtml {\n  background: url("+u+") no-repeat center center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}",""]);const p=d},336:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\n  color: rgb(255, 255, 255);\n  font-family: 'Poppins', sans-serif;\n  box-sizing: border-box;\n  font-size: 1rem;\n}\n\n#content {\n  height: 100%;\n  display: grid;\n  grid-template-rows: max(7.5%, 2rem) 1fr max(5%, 1rem);\n}",""]);const c=a},148:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(58),s=t(118),l=t(336),d=t(937),u=a()(o());u.i(c.Z),u.i(s.Z),u.i(l.Z),u.i(d.Z),u.push([n.id,"@keyframes fadeInSlogan {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n   }\n}\n\n@keyframes fadeInSpiel {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n   }\n  100% {\n    opacity: 1;\n }\n}\n\n#home {\n  transition: 0.3s;\n  transform: translate(0, -0.1rem);\n  text-decoration: underline;\n  text-underline-offset: 1rem;\n}\n\n#main-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n#marketing-box {\n  height: 100%;\n  width: 100%;\n  overflow: scroll;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  padding: max(4%, 20px);\n  box-shadow: inset 0 0 0 1000px rgba(28, 30, 35, 0.8);\n}\n\n#main-content::-webkit-scrollbar {\n  display: none;\n}\n\n#marketing-box::-webkit-scrollbar {\n  display: none;\n}\n\n#marketing-box > * {\n  width: 100%;\n  text-align: center;\n}\n\n#hero {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n#slogan {\n  font-size: 2rem;\n  font-weight: 500;\n  font-style: italic;\n  animation: fadeInSlogan ease 3s;\n}\n\n#spiel {\n  font-weight: 500;\n  animation: fadeInSpiel ease 3s;\n}\n\n#hours .title {\n  font-size: large;\n  font-weight: 500;\n}",""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},860:(n,e,t)=>{n.exports=t.p+"2f5630302a61a5ee883e.svg"},294:(n,e,t)=>{n.exports=t.p+"886e7371d2470227c056.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(148),m={};function h(n){const e=n.target.id;document.querySelector("#content").replaceChildren(),console.log("Content cleared."),"home"==e&&g()}function g(){const n=[];n.push(function(){const n=document.createElement("div");return n.setAttribute("id","header"),n.appendChild(function(){const n=document.createElement("div");n.setAttribute("id","nav-bar");const e=function(){const n=document.createElement("div");n.textContent="   Home   ",n.setAttribute("id","home");const e=document.createElement("div");e.textContent="   Menu   ",e.setAttribute("id","menu");const t=document.createElement("div");t.textContent="   Contact   ",t.setAttribute("id","contact");const r=[n,e,t];for(let n=0;n<r.length;n++)r[n].setAttribute("class","nav-option"),r[n].addEventListener("click",h);return r}();for(let t=0;t<e.length;t++)n.appendChild(e[t]);return n}()),n}());for(let e=0;e<n.length;e++)document.querySelector("#content").appendChild(n[e]);console.log("Homepage generated.")}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,g()})()})();