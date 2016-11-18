var walker;
var count = 0;

function setup() {
  createCanvas(640, 360);
  walker = new Walker();

}

function draw() {
  background(255, 230, 20, 7);
  walker.display();
  walker.walk();

}

function Walker() {

  this.pos = createVector(width / 2, height / 2);

  this.walk = function() {
    //vecrtor addition
    // when 2 vecotse are added togher (v1 + v2) v3 can't + need to use add funciton
    this.velocity = createVector(random(-5, 5), random(-5, 5));
    this.pos = this.pos.add(this.velocity);

  }

  this.display = function() {
    noStroke();
    fill(200, 20, 200, 40);
    ellipse(this.pos.x, this.pos.y, 30, 30);
  }
}