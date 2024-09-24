var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.strokeRect(100,100,150,150);
ctx.strokeRect(50,150,150,150);
ctx.moveTo(250,100);
ctx.lineTo(200,150);
ctx.moveTo(250,250);
ctx.lineTo(200,300)
ctx.moveTo(100,250);
ctx.lineTo(50,300);
ctx.moveTo(100,100);
ctx.lineTo(50,150);
ctx.stroke();
function downloadFun(){
    var Link = c.toDataURL("image/png")
    this.href = Link
 }
 var getLink = document.getElementById("gf")
 getLink.addEventListener("click",downloadFun)