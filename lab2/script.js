var canvas = new fabric.Canvas("canvas");
const pi = 3.14159 * 25;
//alert(canvas.width/10);
if (canvas.getContext) {
  var ctx = canvas.getContext("2d");

  ctx.strokeStyle = "silver";

  for (var i = 0; i < canvas.width; i += 25) {
    for (var j = 0; j < canvas.height; j += 25) {
      ctx.strokeRect(i, j, 25, 25);
    }
  }

  ctx.strokeStyle = "black";
  ctx.beginPath()
  ctx.moveTo(canvas.width / 2, 0)
  ctx.lineTo(canvas.width / 2, canvas.height)

  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, canvas.height / 2)
  ctx.lineTo(canvas.width, canvas.height / 2)
  ctx.stroke()

  ctx.strokeStyle = "olive";
  ctx.beginPath();
  cx = canvas.width / 2;
  cy = canvas.height / 2;
  ctx.moveTo(cx, cy);
  for (i = 1; i<200; i++) {
    x = i*3;
    y = 40*Math.sin(10*i/180*Math.PI);
    ctx.lineTo(cx+x, cy+y);
  }
  ctx.lineWidth = 4;
  ctx.stroke()
}
