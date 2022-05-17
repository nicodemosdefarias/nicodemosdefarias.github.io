
var bot1 = document.getElementById('bot1');
var bot2 = document.getElementById('bot2');
var bot3 = document.getElementById('bot3');
var bot4 = document.getElementById('bot4');
var bot5 = document.getElementById('bot5');
var bot6 = document.getElementById('bot6');
var bot7 = document.getElementById('bot7');
var carrosel = document.querySelector('.carrosel');

bot1.onclick = function(){
  this.style.background = 'steelblue';
  bot2.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot3.style.background = "#f1f1f1";
  bot4.style.background = "#f1f1f1";
  bot5.style.background = "#f1f1f1";
  bot6.style.background = "#f1f1f1";
  bot7.style.background = "#f1f1f1";
  carrosel.style.marginLeft = '0px';
}
bot2.onclick = function(){
  bot1.style.background = "#f1f1f1"; /* no tutorial: transparent */
  this.style.background = 'steelblue';
  bot3.style.background = "#f1f1f1";
  bot4.style.background = "#f1f1f1";
  bot5.style.background = "#f1f1f1";
  bot6.style.background = "#f1f1f1";
  bot7.style.background = "#f1f1f1";
  carrosel.style.marginLeft = '-520px';
}
bot3.onclick = function(){
  bot1.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot2.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  bot4.style.background = "#f1f1f1";
  bot5.style.background = "#f1f1f1";
  bot6.style.background = "#f1f1f1";
  bot7.style.background = "#f1f1f1";
  carrosel.style.marginLeft = '-1040px';
}
bot4.onclick = function(){
  bot1.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot2.style.background = "#f1f1f1";
  bot3.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  bot5.style.background = "#f1f1f1";
  bot6.style.background = "#f1f1f1";
  bot7.style.background = "#f1f1f1";
  carrosel.style.marginLeft = '-1560px';
}
bot5.onclick = function(){
  bot1.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot2.style.background = "#f1f1f1";
  bot3.style.background = "#f1f1f1";
  bot4.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  bot6.style.background = "#f1f1f1";
  bot7.style.background = "#f1f1f1";
  carrosel.style.marginLeft = '-2080px';
}
bot6.onclick = function(){
  bot1.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot2.style.background = "#f1f1f1";
  bot3.style.background = "#f1f1f1";
  bot4.style.background = "#f1f1f1";
  bot5.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  bot7.style.background = "#f1f1f1";
  carrosel.style.marginLeft = '-2600px';
}
bot7.onclick = function(){
  bot1.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot2.style.background = "#f1f1f1";
  bot3.style.background = "#f1f1f1";
  bot4.style.background = "#f1f1f1";
  bot5.style.background = "#f1f1f1";
  bot6.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  carrosel.style.marginLeft = '-3120px';
}
