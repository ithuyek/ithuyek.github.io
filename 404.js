var logo = new Image();
var angle = -45;
var x = 0;
var y = 0;

function init() {
  logo.src = 'ithuyeklogo.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0, 0, 600, 450);
  ctx.drawImage(logo,x,y,130,83);
  y += 2*Math.cos(toRadians(angle));
  x += -2*Math.sin(toRadians(angle));
  window.requestAnimationFrame(draw);

  if(x <= 0 || x+130 >= 600) angle += 90;

  if(y <= 0 || y+83 >= 450) angle += 90;
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

init();
