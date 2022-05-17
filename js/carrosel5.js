
var bot51 = document.getElementById('bot5-1');
var bot52 = document.getElementById('bot5-2');
var bot53 = document.getElementById('bot5-3');
var bot54 = document.getElementById('bot5-4');
var carrosel5 = document.querySelector('.carrosel5');

bot51.onclick = function(){
  this.style.background = 'steelblue';
  bot52.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot53.style.background = "#f1f1f1";
  bot54.style.background = "#f1f1f1";
  carrosel5.style.marginLeft = '0px';
}
bot52.onclick = function(){
  bot51.style.background = "#f1f1f1"; /* no tutorial: transparent */
  this.style.background = 'steelblue';
  bot53.style.background = "#f1f1f1";
  bot54.style.background = "#f1f1f1";
  carrosel5.style.marginLeft = '-520px';
}
bot53.onclick = function(){
  bot51.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot52.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  bot54.style.background = "#f1f1f1";
  carrosel5.style.marginLeft = '-1040px';
}
bot54.onclick = function(){
  bot51.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot52.style.background = "#f1f1f1";
  bot53.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  carrosel5.style.marginLeft = '-1560px';
}
