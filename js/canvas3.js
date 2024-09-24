var c = document.getElementById("myCanvas3");
var ctx = c.getContext("2d");
const radial = ctx.createRadialGradient(190,215,25,190,215,100);
radial.addColorStop(0,"Lightblue");
radial.addColorStop(0.5,"blue");
radial.addColorStop(1,"green");
ctx.fillStyle = radial;
ctx.fillRect(50,150,280,160);
function downloadFun(){
    var Link = c.toDataURL("image/png")
    this.href = Link
 }
 var getLink = document.getElementById("gf2")
 getLink.addEventListener("click",downloadFun)