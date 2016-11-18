//inspired automated sketches of by james paterson http://presstube.com/blog/category/james-paterson/ i wanted to experiment with 
//some of my drawings and see what occured
//becca rose 2016


var img= [];
var imgRand = [];

var imgW;
var aspect;
var imgH;

function preload() {



  for (var i = 0; i < 15; i++) {
    img[i] = loadImage(imgRand + ".png");
    console.log(i);
  }
}

function setup() {
  createCanvas(800, 600);
  aspect = img.height / img.width;
  imgW = 200;
  imgH = imgW * aspect;
  
     for (var i = 0; i < 15; i++) {
    var randX = random(width);
    var randY = random(height);
    image(img[i], randX, randY, imgW, imgH);
  
}

function draw() {
  

    
  }

}