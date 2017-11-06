var canvasWidth=1280;
var canvasHeight=720;
var radius=8;

$(document).ready(function () {
    var c=$("#canvas")[0];//把jquery对象转换为DOM对象
    c.width=canvasWidth;
    c.height=canvasHeight;
    var context=c.getContext("2d");
    setInterval(function () {
        context.clearRect(0,0,canvasWidth,canvasHeight);
        drawColck(context);
    },50);

})

function drawColck(ctx) {
    var time=new Date();
    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();

    drawDigit(0,20,parseInt(hour/10),ctx);
    drawDigit(15*(radius+1),20,parseInt(hour%10),ctx);
    drawDigit(30*(radius+1),20,10,ctx);
    drawDigit(39*(radius+1),20,parseInt(minute/10),ctx);
    drawDigit(54*(radius+1),20,parseInt(minute%10),ctx);
    drawDigit(69*(radius+1),20,10,ctx);
    drawDigit(78*(radius+1),20,parseInt(second/10),ctx);
    drawDigit(93*(radius+1),20,parseInt(second%10),ctx);
}

function drawDigit(x,y,number,ctx){
    for(var i=0;i<digit[number].length;i++){
        for(var k=0;k<digit[number][i].length;k++){
            if(digit[number][i][k]==1){
                ctx.beginPath();
                ctx.arc(x+2*(radius+1)*k+radius,y+2*(radius+1)*i+radius,radius,0,2*Math.PI);
                ctx.fillStyle="#212cff"
                ctx.fill();
            }
        }
    }
}
