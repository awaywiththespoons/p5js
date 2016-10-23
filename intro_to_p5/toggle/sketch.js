
var colFlash = false;

function setup() {
  createCanvas(600,600);
}

function draw() {
  
  if (colFlash == true){
    background(255, 30, 100);
  }
  else{ 
  background(20, 30, 50);
  }
}

function mousePressed(){
  //toggles the vaule of colFlash between true and false
  colFlash = !colFlash;
}