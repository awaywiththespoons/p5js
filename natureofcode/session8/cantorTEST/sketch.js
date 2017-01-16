//defingin recursive factural needs a get out clause

function setup() {
  createCanvas(640, 640);
  //imageMode(CENTER);
}

function draw() {
  background(200, 30, 100);
  stroke(10, 200, 60);
  strokeWeight(1);
  noFill();
  noLoop();

  cantor(20, 20, 300);

}

function cantor(x, y, length) {
  // recursive exit condition (i.e. when it get this small get outa there)
  var h = 30;

  //draw line
  line(x, y, x + length, y);

  // go down to next posion
  y += h;

  //draw 2 more lines 1/3rd length of middle section
  if (length >= 1) {
    cantor(random(x), y, length / 3);
    cantor(x + length * 2 / 3, y, length / 3);
  }
}