
var bot21 = document.getElementById('bot2-1');
var bot22 = document.getElementById('bot2-2');
var bot23 = document.getElementById('bot2-3');
var bot24 = document.getElementById('bot2-4');
var bot25 = document.getElementById('bot2-5');
var carrosel2 = document.querySelector('.carrosel2');

bot21.onclick = function(){
  this.style.background = 'steelblue';
  bot22.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot23.style.background = "#f1f1f1";
  bot24.style.background = "#f1f1f1";
  bot25.style.background = "#f1f1f1";
  carrosel2.style.marginLeft = '0px';
}
bot22.onclick = function(){
  bot21.style.background = "#f1f1f1"; /* no tutorial: transparent */
  this.style.background = 'steelblue';
  bot23.style.background = "#f1f1f1";
  bot24.style.background = "#f1f1f1";
  bot25.style.background = "#f1f1f1";
  carrosel2.style.marginLeft = '-520px';
}
bot23.onclick = function(){
  bot21.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot22.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  bot24.style.background = "#f1f1f1";
  bot25.style.background = "#f1f1f1";
  carrosel2.style.marginLeft = '-1040px';
}
bot24.onclick = function(){
  bot21.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot22.style.background = "#f1f1f1";
  bot23.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  bot25.style.background = "#f1f1f1";
  carrosel2.style.marginLeft = '-1560px';
}
bot25.onclick = function(){
  bot21.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot22.style.background = "#f1f1f1";
  bot23.style.background = "#f1f1f1";
  bot24.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  carrosel2.style.marginLeft = '-2080px';
}
