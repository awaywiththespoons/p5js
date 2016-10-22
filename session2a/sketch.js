function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(50, 100, 200);
  
  for (var i=20; i<width;i+=100 ){
    for (var j =20; j<height; j+=100){
      fill(200, 0+j, 40, 0+i);
      ellipse(i, j, 40, 40);
    }
  }
}