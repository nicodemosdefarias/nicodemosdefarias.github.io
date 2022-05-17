
var bot31 = document.getElementById('bot3-1');
var bot32 = document.getElementById('bot3-2');
var bot33 = document.getElementById('bot3-3');
var carrosel3 = document.querySelector('.carrosel3');

bot31.onclick = function(){
  this.style.background = 'steelblue';
  bot32.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot33.style.background = "#f1f1f1";
  carrosel3.style.marginLeft = '0px';
}
bot32.onclick = function(){
  bot31.style.background = "#f1f1f1"; /* no tutorial: transparent */
  this.style.background = 'steelblue';
  bot33.style.background = "#f1f1f1";
  carrosel3.style.marginLeft = '-520px';
}
bot33.onclick = function(){
  bot31.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot32.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  carrosel3.style.marginLeft = '-1040px';
}
