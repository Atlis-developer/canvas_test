
let tablet = document.getElementById('tablet')

let ctx = tablet.getContext('2d');
let start = true;
let paint = false;
let color = false;
let coordinates = [];

tablet.addEventListener("mousedown", Down);
tablet.addEventListener("mouseup", Up);


function Down(e) {
    let coorX = e.pageX - this.offsetLeft;
    let coorY = e.pageY - this.offsetTop;
    if (paint && !color){
    coordinates.push({ coorX, coorY })
    ctx.beginPath();
    {
        start ?
            ctx.moveTo(coordinates[0].coorX, coordinates[0].coorY) :
            null
    };
    start = false;
    console.log(coordinates)}
}

function Up(e) {
    for (let i = 0; i < coordinates.length; i++) {
        ctx.lineTo(coordinates[i].coorX, coordinates[i].coorY);
        ctx.stroke();
        if(color){
            ctx.fillStyle='red'
        ctx.fill();
        }
        
    }
}


function buttonColor () {
    return color = !color
}

function buttonLine () {
    return paint = !paint
}