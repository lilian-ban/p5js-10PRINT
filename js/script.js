function setup() {
    createCanvas(1080, 1080);
    background(32)
}

let spacing = 60
let x = spacing
let y = spacing
let rng = 0

function draw() {
    strokeWeight(spacing / 10);
    stroke(255);
    if (y < height - spacing) {
        if (random(1) < .5) {
            line(x,y,x+spacing,y+spacing)
        } else {
            line(x,y+spacing,x+spacing,y)
        }

        /*if (y < (height-spacing)/2){
            if (random(1) < .9) {
                line(x,y,x+spacing,y+spacing)
            } else {
                line(x,y+spacing,x+spacing,y)
            }
        }else{
            if (random(1) < .1) {
                line(x,y,x+spacing,y+spacing)
            } else {
                line(x,y+spacing,x+spacing,y)
            }
        } */
        x = x + spacing
        if (x > width - (spacing*2)){
            x = spacing
            y = y + spacing
        }
    }
}