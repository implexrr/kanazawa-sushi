(()=>{"use strict";var e,n,t,r,o,i,a,c,s,u,l,p,d,f,h={426:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),u=new URL(t(803),t.b),l=a()(o()),p=s()(u);l.push([e.id,".hello {\n  color: red;\n}\n\n* {\n  color: white;\n  font-family: 'Poppins', sans-serif;\n  box-sizing: border-box;\n}\n\nhtml, body {\n  margin: 0;\n  height: 100%;\n}\n\nhtml { \n  background: url("+p+") no-repeat center center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  box-shadow: inset 0 0 0 1000px rgba(59, 66, 93, 0.6);\n  overflow-y: visible;\n\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  height: 80%;\n  width: 80%;\n}\n\n#content > * {\n  margin: 10px;\n}\n\n#navbar {\n  margin-top: 5%;\n  margin-bottom: 1%;\n  display: flex;\n  justify-content: space-around;\n  height: 1rem;\n  width: 60%;\n  font-weight: 600;\n}\n\n#hero {\n  margin-top: 1%;\n  font-size: 48px;\n  font-weight: 700;\n}\n\n#slogan {\n  font-size: 40px;\n  font-weight: 500;\n  font-style: italic;\n}\n\n#spiel {\n  font-weight: 500;\n}\n\n#hours .title {\n  font-size: large;\n  font-weight: 500;\n}",""]);const d=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,p="".concat(u," ").concat(l);i[u]=l+1;var d=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),u=0;u<i.length;u++){var l=t(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},803:(e,n,t)=>{e.exports=t.p+"886e7371d2470227c056.jpg"}},m={};function v(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return h[e](t,t.exports,v),t.exports}v.m=h,v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var n=v.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),v.b=document.baseURI||self.location.href,v.nc=void 0,e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),i=v.n(o),a=v(565),c=v.n(a),s=v(216),u=v.n(s),l=v(589),p=v.n(l),d=v(426),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),n()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,document.querySelector("#content").appendChild(function(){const e=document.createElement("div");e.setAttribute("id","navbar");const n=document.createElement("div");n.textContent="Home";const t=document.createElement("div");t.textContent="Menu";const r=document.createElement("div");r.textContent="Contact";const o=[n,t,r];console.log(o.length);for(let n=0;n<o.length;n++)o[n].setAttribute("class",o[n].textContent),e.appendChild(o[n]);return e}())})();