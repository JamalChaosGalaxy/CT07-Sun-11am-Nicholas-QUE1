let bird
let background, birdImg;

function preload(){
    // write code to preload bird.png and background.png
    // refer to assets folder
    background = loadImage('assets/background.png');
    birdImg = loadImage('assets/bird.png');
}

function setup(){
    new Canvas(400, 600);
    // write code to create sprite and load bird image on sprite
    let bird = new Sprite(200, 300);
    bird.height = 20;
    bird.width = 20;
    bird.img = birdImg;
    background.img = background;
}

function draw(){
    image(background, 0, 0, width, height);
}
