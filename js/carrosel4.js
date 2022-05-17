
var bot41 = document.getElementById('bot4-1');
var bot42 = document.getElementById('bot4-2');
var bot43 = document.getElementById('bot4-3');
var bot44 = document.getElementById('bot4-4');
var bot45 = document.getElementById('bot4-5');
var bot46 = document.getElementById('bot4-6');
var bot47 = document.getElementById('bot4-7');
var carrosel4 = document.querySelector('.carrosel4');

bot41.onclick = function(){
  this.style.background = 'steelblue';
  bot42.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot43.style.background = "#f1f1f1";
  bot44.style.background = "#f1f1f1";
  bot45.style.background = "#f1f1f1";
  bot46.style.background = "#f1f1f1";
  bot47.style.background = "#f1f1f1";
  carrosel4.style.marginLeft = '0px';
}
bot42.onclick = function(){
  bot41.style.background = "#f1f1f1"; /* no tutorial: transparent */
  this.style.background = 'steelblue';
  bot43.style.background = "#f1f1f1";
  bot44.style.background = "#f1f1f1";
  bot45.style.background = "#f1f1f1";
  bot46.style.background = "#f1f1f1";
  bot47.style.background = "#f1f1f1";
  carrosel4.style.marginLeft = '-520px';
}
bot43.onclick = function(){
  bot41.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot42.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  bot44.style.background = "#f1f1f1";
  bot45.style.background = "#f1f1f1";
  bot46.style.background = "#f1f1f1";
  bot47.style.background = "#f1f1f1";
  carrosel4.style.marginLeft = '-1040px';
}
bot44.onclick = function(){
  bot41.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot42.style.background = "#f1f1f1";
  bot43.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  bot45.style.background = "#f1f1f1";
  bot46.style.background = "#f1f1f1";
  bot47.style.background = "#f1f1f1";
  carrosel4.style.marginLeft = '-1560px';
}
bot45.onclick = function(){
  bot41.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot42.style.background = "#f1f1f1";
  bot43.style.background = "#f1f1f1";
  bot44.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  bot46.style.background = "#f1f1f1";
  bot47.style.background = "#f1f1f1";
  carrosel4.style.marginLeft = '-2080px';
}
bot46.onclick = function(){
  bot41.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot42.style.background = "#f1f1f1";
  bot43.style.background = "#f1f1f1";
  bot44.style.background = "#f1f1f1";
  bot45.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  bot47.style.background = "#f1f1f1";
  carrosel4.style.marginLeft = '-2600px';
}
bot47.onclick = function(){
  bot41.style.background = "#f1f1f1"; /* no tutorial: transparent */
  bot42.style.background = "#f1f1f1";
  bot43.style.background = "#f1f1f1";
  bot44.style.background = "#f1f1f1";
  bot45.style.background = "#f1f1f1";
  bot46.style.background = "#f1f1f1";
  this.style.background = 'steelblue';
  carrosel4.style.marginLeft = '-3120px';
}
