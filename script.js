// JavaScript code
const canvas = document.getElementById('heartCanvas');
var donecanvas =document.createElement("canvas")
const ctx = canvas.getContext('2d');
var i = 0;
function hearta(k) {
    return 16 * Math.pow(Math.sin(k / Math.PI), 3);
}

function heartb(k) {
    return 16 * Math.cos(k / Math.PI) - 
    5 * Math.cos(2 * k / Math.PI) - 
    3 * Math.cos(3 * k / Math.PI) -
       Math.cos(4 * k / Math.PI);
}

function drawHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#f73487";
    ctx.lineWidth = 1;

    drow(i)
    function drow(i) {
        if (i == 12000) {
            donecanvas.getContext('2d').drawImage(canvas, 0, 0);
            setTimeout(donedrow, 1, 1)
            return
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const x = canvas.height
            < canvas.width?
            hearta(i) * canvas.height / 33:
            hearta(i) * canvas.width / 33;
        const y = canvas.height
            < canvas.width?
            heartb(i) * -canvas.height / 35:
            heartb(i) * -canvas.width / 35;
        ctx.moveTo(canvas.width / 2 , canvas.height / 2.2);
        ctx.lineTo(canvas.width / 2 + x/16, canvas.height / 2.2 + y/16);
        ctx.moveTo(canvas.width / 2 + x/8, canvas.height / 2.2+ y/8);
        ctx.lineTo(canvas.width / 2 + x/4, canvas.height / 2.2 + y/4);
        ctx.moveTo(canvas.width / 2 + x/2, canvas.height / 2.2+ y/2);
        ctx.lineTo(canvas.width / 2 + x, canvas.height / 2.2 + y);
        ctx.moveTo(canvas.width / 2 + x*1.5, canvas.height / 2.2+ y*1.5);
        ctx.lineTo(canvas.width / 2 + x*4, canvas.height / 2.2 + y*4);
        ctx.stroke();
        setTimeout(drow, Infinity, i + 1)
    }
    dir=1;
    function donedrow(i){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(donecanvas, 0, 0);
        var text='I LOVE YOU';
        ctx.font = i+'px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText(text, (canvas.width-ctx.measureText(text).width) / 2, (canvas.height+ctx.measureText(text).fontBoundingBoxAscent) / 2.4);
        if(i==0){
            debugger
            dir=1
        }
        if(ctx.measureText(text).width>window.innerWidth-500){
            dir=-1
        }
        setTimeout(donedrow, 1, i+dir)
    }
}
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
donecanvas.width=window.innerWidth;
donecanvas.height = window.innerHeight;
drawHeart();
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    donecanvas.width=window.innerWidth;
    donecanvas.height = window.innerHeight;
    drawHeart();
});