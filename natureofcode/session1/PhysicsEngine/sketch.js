var walker;
var count = 0;

function setup() {
  createCanvas(640, 360);
  walker = new Walker();

}

function draw() {
  background(255, 230, 20);
  walker.display();
  walker.walk();

}

function Walker() {
  //the vector postion
  this.pos = createVector(0, 0);
  //the velocity
  this.vel = createVector(0, 0);
  // the accelearion
  this.acc = createVector(0, 0.5);

  this.walk = function() {
    //the physics function. the pos of the vector moves with vel. which moves wiht accelartion.
    //accelearion means that as time passes the accelerion grows -like a force
    //acceleration changes velocity
    this.vel.add(this.acc);
    //velocity changes postion
    this.pos.add(this.vel);
    if (this.pos > width/2){
      this.pos == width/2; 
    
    }

  }

  this.display = function() {
    noStroke();
    fill(200, 20, 200);
    ellipse(this.pos.x, this.pos.y, 30, 30);
  }
}