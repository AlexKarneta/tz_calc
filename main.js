(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,"body {\n  margin: 0;\n  display: flex;\n  background-image: linear-gradient(180deg, #062d25, #11cd8e);\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.calculator {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  min-height: 100vh;\n  grid-template-columns: repeat(4, 100px);\n  grid-template-rows: minmax(120px, auto) repeat(5, 100px);\n}\n\n.calculator > button {\n  cursor: pointer;\n  font-size: 2rem;\n  border: 1px solid white;\n  outline: none;\n  border-radius: 10px;\n  background-color: rgba(185, 239, 188, 0.9);\n}\n\n.calculator > button:hover {\n  background-color: #f2ecec;\n  scale: 1.05;\n}\n\n.output {\n  grid-column: 1 / -1;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n  flex-direction: column;\n  padding: 10px;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\n.output .previous-operand {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1.5rem;\n}\n\n.output .current-operand {\n  color: white;\n  font-size: 2.5rem;\n}\n",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=o[u]||0,p="".concat(u," ").concat(d);o[u]=d+1;var l=n(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(h);else{var f=a(h,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),u=0;u<o.length;u++){var d=n(o[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),c=n(659),s=n.n(c),u=n(56),d=n.n(u),p=n(540),l=n.n(p),h=n(113),f=n.n(h),m=n(208),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),a()(m.A,v),m.A&&m.A.locals&&m.A.locals;const y=document.querySelectorAll("[data-number]"),g=document.querySelectorAll("[data-operation]"),b=document.querySelector("[data-equals]"),x=document.querySelector("[data-inversion]"),O=document.querySelector("[data-delete]"),E=document.querySelector("[data-all-clear]"),S=document.querySelector("[data-previous-operand]"),k=document.querySelector("[data-current-operand]"),T=new class{constructor(e,t){this.previousOperandTextElement=e,this.currentOperandTextElement=t,this.clear()}clear(){this.currentOperand="",this.previousOperand="",this.operation=void 0}delete(){this.currentOperand=this.currentOperand.toString().slice(0,-1)}inversion(){this.currentOperand=-1*this.currentOperand}appendNumber(e){"."===e&&this.currentOperand.includes(".")||(this.currentOperand=this.currentOperand.toString()+e.toString())}chooseOperation(e){""!==this.currentOperand&&(""!==this.previousOperand&&this.compute(),this.operation=e,this.previousOperand=this.currentOperand,this.currentOperand="")}compute(){let e;const t=parseFloat(this.previousOperand),n=parseFloat(this.currentOperand);if(!isNaN(t)&&!isNaN(n)){switch(this.operation){case"+":e=t+n;break;case"-":e=t-n;break;case"*":e=t*n;break;case"÷":e=t/n;break;default:return}this.currentOperand=e,this.operation=void 0,this.previousOperand=""}}getDisplayNumber(e){const t=e.toString(),n=parseFloat(t.split(".")[0]),r=t.split(".")[1];let a;return a=isNaN(n)?"":n.toLocaleString("en",{maximumFractionDigits:0}),null!=r?`${a}.${r.slice(0,8)}`:a}updateDisplay(){this.currentOperandTextElement.innerText=this.getDisplayNumber(this.currentOperand),null!=this.operation?this.previousOperandTextElement.innerText=`${this.getDisplayNumber(this.previousOperand)} ${this.operation}`:this.previousOperandTextElement.innerText=""}}(S,k);y.forEach((e=>{e.addEventListener("click",(()=>{T.appendNumber(e.innerText),T.updateDisplay()}))})),g.forEach((e=>{e.addEventListener("click",(()=>{T.chooseOperation(e.innerText),T.updateDisplay()}))})),x.addEventListener("click",(e=>{T.inversion(),T.updateDisplay()})),b.addEventListener("click",(e=>{T.compute(),T.updateDisplay()})),E.addEventListener("click",(e=>{T.clear(),T.updateDisplay()})),O.addEventListener("click",(e=>{T.delete(),T.updateDisplay()}));const w=document.getElementById("uniq"),N=document.getElementById("out");w.addEventListener("click",(()=>{N.classList.add("output-white")}))})();