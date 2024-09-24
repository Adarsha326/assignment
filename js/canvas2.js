var c = document.getElementById('myCanvas2');
var ctx = c.getContext('2d')
ctx.fillStyle="Orange"
ctx.fillRect(10,10,200,80)
ctx.fillStyle="white"
ctx.fillRect(10,80,200,80)
ctx.fillStyle="green"
ctx.fillRect(10,160,200,80)
ctx.fillStyle="black"
ctx.fillRect(10,10,10,500)
function downloadFun(){
    var Link = c.toDataURL("image/png")
    this.href = Link
 }
 var getLink = document.getElementById("gf1")
 getLink.addEventListener("click",downloadFun)