//defingin recursive factural needs a get out clause

function setup() {
  createCanvas(640, 640);
  imageMode(CENTER);
}

function draw() {
  background(200, 30, 100);
  stroke(10, 200, 60);
  noFill();
  noLoop();
  drawCircle(width / 2, height / 2, 300, 300);

}

function drawCircle(x, y, d) {
  // draw first circle
  ellipse(x, y, d, d);

  //recursive draw to left and right
  if (d > 10) {
    drawCircle(x + (d / 2), y, d / 2);
    drawCircle(x - (d / 2), y, d / 2);
    drawCircle(x, y + (d / 2), d / 2);
    //drawCircle(x, y - (d / 2), d / 2);
  }
}