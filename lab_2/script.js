const pi = Math.PI

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

function draw_fig(scale, offset_x, offset_y, rotation){
  var x = canvas.width/2 + offset_x
  var y = canvas.height/2 + offset_y
    ctx.moveTo(x, y)
    ctx.strokeStyle = 'red';
    ctx.beginPath()
    for(t = 0; t < pi * 5; t+=0.01){
      ctx.lineTo(x + t * Math.sin(t + rotation) * scale, y - t * Math.cos(t + rotation) * scale)
      ctx.stroke()
    } 
}

function clean(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw_lines(){
  ctx.beginPath()

  ctx.moveTo(canvas.width/2, canvas.height)
  ctx.lineTo(canvas.width/2, 0)
  ctx.lineWidth = 2
  ctx.strokeStyle = 'black';
  ctx.stroke()

  ctx.moveTo(0, canvas.height/2)
  ctx.lineTo(canvas.width, canvas.height/2)
  ctx.lineWidth = 2
  ctx.strokeStyle = 'black';
  ctx.stroke()
}

var scale = 20
var offset_x = 0
var offset_y = 0
var rotation = 0

scale_p = document.getElementById('scale_p')
scale_p.onclick = function(){
  scale+=2
  clean()
  draw_lines()
  draw_fig(scale, offset_x, offset_y, rotation)
}

scale_p = document.getElementById('scale_m')
scale_p.onclick = function(){
  scale-=2
  clean()
  draw_lines()
  draw_fig(scale, offset_x, offset_y, rotation)
}

scale_p = document.getElementById('offset_x_p')
scale_p.onclick = function(){
  offset_x+=10
  clean()
  draw_lines()
  draw_fig(scale, offset_x, offset_y, rotation)
}

scale_p = document.getElementById('offset_x_m')
scale_p.onclick = function(){
  offset_x-=10
  clean()
  draw_lines()
  draw_fig(scale, offset_x, offset_y, rotation)
}

scale_p = document.getElementById('offset_y_p')
scale_p.onclick = function(){
  offset_y+=10
  clean()
  draw_lines()
  draw_fig(scale, offset_x, offset_y, rotation)
}

scale_p = document.getElementById('offset_y_m')
scale_p.onclick = function(){
  offset_y-=10
  clean()
  draw_lines()
  draw_fig(scale, offset_x, offset_y, rotation)
}

scale_p = document.getElementById('rotation_p')
scale_p.onclick = function(){
  rotation+=0.1
  clean()
  draw_lines()
  draw_fig(scale, offset_x, offset_y, rotation)
}

scale_p = document.getElementById('rotation_m')
scale_p.onclick = function(){
  rotation-=0.1
  clean()
  draw_lines()
  draw_fig(scale, offset_x, offset_y, rotation)
}

clean()
draw_lines()
draw_fig(scale, offset_x, offset_y, rotation)

