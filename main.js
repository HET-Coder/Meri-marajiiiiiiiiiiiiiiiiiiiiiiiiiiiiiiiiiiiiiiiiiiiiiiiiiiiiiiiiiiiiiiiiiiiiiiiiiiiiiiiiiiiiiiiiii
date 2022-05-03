function preload() {
}

function setup() {
    canvas = createCanvas(680, 480);
    canvas.position(450,200)
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 230, 150, 220, 200);
    fill('red');
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);
    fill('blue');
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);     
}

function take_snapshot() {
    save('Birthday_party.png');
}
