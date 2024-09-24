var canvas = document.getElementById("headCan");
var ctx = canvas.getContext("2d");
ctx.textAlign = "center";
ctx.font = "50px Arial";
ctx.shadowColor = "lightblue";
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.fillStyle = "purple";
ctx.fillText("MY CANVAS", 900, 60); 