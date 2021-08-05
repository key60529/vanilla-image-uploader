!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vanilla-image-uploader"]=t():e.vanillaImageUploader=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.r(t);class r{static renderButton(e){return`\n\t\t\t<div class="file-box">\n\t\t\t  <input type="file"\n               name="${e.name}${e.isMultiple?"[]":""}"\n               id="${e.name}-input"\n               class="input-file-btn"\n               accept="image/jpeg, image/png"\n               onchange="VanillaImageUploader.selectedTracking(this)"\n               ${e.isMultiple?"multiple":""}\n        >\n\t\t\t  <label class="custom_file_btn" for="${e.name}-input">\n\t\t\t      <span class="btn-icon"></span> ${e.label}\n\t\t\t  </label>\n\t\t\t</div>\n      <small class="vji-small-helper-text">Select image again to replace the selected image.</small>\n\t\t\t<ul class="file-preview"></ul>\n\t\t`}static renderPreview(e,t,n){console.log(e.parentElement.parentElement);let r=`\n\t\t\t<li>\n\t\t\t\t<img src="${t}" />\n\t\t\t</li>\n\t\t`;e.parentElement.parentElement.querySelector(".file-preview").innerHTML+=r}static showHelper(e){e.parentElement.parentElement.querySelector("small.vji-small-helper-text").classList.add("show")}}class l{static readURL(e){return new Promise((function(t,n){let r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(){n(r)},r.readAsDataURL(e)}))}}t.default=class{constructor(e){this.variables=e,this.init()}init(){document.getElementById(this.variables.name).innerHTML=r.renderButton(this.variables),this.variables.intialImage&&r.renderPreview(document.getElementById(this.variables.name),this.variables.intialImage)}static async selectedTracking(e){let t=[];if(e.files.length){e.parentElement.parentElement.querySelector("ul.file-preview").innerHTML="";for(let n=0;n<e.files.length;n++){let r=await l.readURL(e.files[n]);t.push(r)}Promise.all(t).then(t=>{for(let n=0;n<t.length;n++)r.renderPreview(e,t[n],n);r.showHelper(e)})}}}},function(e,t,n){n(2),e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var r=n(0);window.VanillaImageUploader=r.default},function(e,t,n){"use strict";n.r(t)}])}));