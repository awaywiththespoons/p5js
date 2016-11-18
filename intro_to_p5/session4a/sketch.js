//image stuff
var img;
var imgW;
var aspect;
var imgH;
//font
var beccaFont;
//soundz
var burp;

function preload() {

  img = loadImage("turtle.jpeg");
  beccaFont = loadFont("BeccaRoseFont.otf");
  burp = loadSound("Burps.mp3");
}

function setup() {
  createCanvas(600, 600);

  textFont(beccaFont);
  textSize(40);

  aspect = img.height / img.width;
  imgW = 300;
  imgH = imgW * aspect;
}

function draw() {
  background(255);
  image(img, 5, 5, imgW, imgH);
  text("hello little turtle", mouseX + 10, mouseY + 10, 200, 200);
}

function mousePressed() {
  if (mouseX < imgW && mouseY < imgH) {
    burp.play();
  }
}