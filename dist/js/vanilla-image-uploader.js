!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vanilla-image-uploader"]=t():e.vanillaImageUploader=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class r{static renderButton(e){return`\n\t\t\t<div class="file-box">\n\t\t\t  <input type="file" name="${e.name}" id="${e.name}-input" class="input-file-btn" accept="image/jpeg, image/png" onchange="VanillaImageUploader.selectedTracking(this)">\n\t\t\t  <label class="custom_file_btn" for="${e.name}-input">\n\t\t\t      <span class="btn-icon"></span> ${e.label}\n\t\t\t  </label>\n\t\t\t</div>\n\t\t\t<ul class="file-preview"></ul>\n\t\t`}static renderPreview(e,t){let n=`\n\t\t\t<li>\n\t\t\t\t<img src="${t}" />\n\t\t\t\t<button type="button" class="btn del-btn" onclick="VanillaImageUploader.deletePreview(this)"></button>\n\t\t\t</li>\n\t\t`;e.parentElement.parentElement.querySelector(".file-preview").innerHTML=n}}t.default=class{constructor(e){this.variables=e,this.init()}init(){document.getElementById(this.variables.name).innerHTML=r.renderButton(this.variables),this.variables.intialImage&&r.renderPreview(document.getElementById(this.variables.name),this.variables.intialImage)}static async selectedTracking(e){(await class{static readURL(e){if(e.files&&e.files[0]){console.log(e.files);let t=new FileReader;return t.readAsDataURL(e.files[0]),t}}}.readURL(e)).onload=function(t){r.renderPreview(e,t.target.result)}}static deletePreview(e){e.closest(".file-preview").parentElement.querySelector("input[type=file]").value=null,e.parentElement.remove()}}}])}));