function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(20, 200, 200);
  
  for (var i=0; i <width;i+=22){
  fill(20+i, 30, 200,20)  
  ellipse(width/2, height/2, i, i);
  }
}