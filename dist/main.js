!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),(void 0)();let r={},o=[];o[0]="Player1",o[1]="Player2";let d;let a=0,s=0;class i{static giveName(){const e=document.getElementById("player-1"),t=document.getElementById("player-2");""===e.value?o[0]="Player1":o[0]=e.value,""===t.value?o[1]="Player2":o[1]=t.value,l.drawBoard(),document.getElementById("board").classList.remove("hide"),document.getElementById("buttons").classList.remove("hide"),document.getElementById("form").classList.add("hide")}static switchTurn(){a=0===a?1:0}}class l{static checkDraw(){9===s&&!1===d&&(document.getElementById("messages").innerText="Draw Game",d=!1,alert("Draw Game !!"),c.resetGame())}static drawBoard(){const e=document.getElementById("board");let t="";for(let e=1;e<10;e+=1)t+=`<div id ="${e}" onclick="game(this);" class="box"></div>`;e.innerHTML=t}static winning(e,t){[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]].forEach((function(e){if(r[e[0]]===t&&r[e[1]]===t&&r[e[2]]===t){d=!0;const e=document.getElementsByClassName("box");for(let t=0;t<e.length;t+=1)e[t].onclick="";document.getElementById("messages").classList.add("hide"),document.getElementById("win-msg").innerText=o[a]+" is winner!!!"}else d=!1})),9===s&&!1===d&&(document.getElementById("messages").classList.add("hide"),d=!1,document.getElementById("win-msg").innerText="Draw Game")}}class c{static resetGame(){r={},d=!1,s=0,a=0,l.drawBoard(),document.getElementById("messages").innerText=o[a]+"'s turn",document.getElementById("messages").classList.remove("hide"),document.getElementById("win-msg").innerText=""}}document.getElementById("btn-play").addEventListener("click",(function(){i.giveName()})),document.getElementById("button1").addEventListener("click",(function(){c.resetGame()})),document.getElementById("button2").addEventListener("click",(function(){location.reload()})),document.getElementById("body").addEventListener("load",(function(){c.resetGame()}))}]);