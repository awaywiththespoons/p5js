// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var tree = [];
var img;
var imgW, imgH;


function preload() {
  img = loadImage("18.png");
}

function setup() {
  createCanvas(640, 360);
  imageMode(CENTER);
  var b = new Branch(createVector(width / 2, height), createVector(0, -1), 100);
  tree.push(b);
}

function draw() {
  
  background(200, 30, 50);
  
  image(img, 0, 0, imgW, imgH);
  
  for (var i = 0; i < tree.length; i++) {
    // Get the branch, update and draw it
    tree[i].update();
    tree[i].render();

    if (tree[i].timeToBranch()) {
      if (tree.length < 1024) {
        tree.push(tree[i].branch(30)); // Add one going right
        tree.push(tree[i].branch(-25)); // Add one going left
      }
    }
  }

}