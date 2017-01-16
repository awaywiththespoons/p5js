// useing transforamtions
// make 1 brach at a time. (so you don't have to go back and draw branches)
// computer keeps track using push and pop
// push forward and pop back

//define angle
var angle;

function setup() {
  createCanvas(400, 400);
  background(19, 200, 60);
  stroke(0);
  strokeWeight(2);
  noLoop();
}


function draw() {

  angle = 20;
  //start from the bottom, center of the canvas (using translate as not to complicate things by using X, Y coordinates
  //this will be a global tranlates to all function as it is in the draw and called before the function
  translate(width / 2, height);

  //call function
  branch(120);

}


//this will draw an individual branch
function branch(length) {

  //draw a sinle line
  line(0, 0, 0, -length);
  // move line to end of the single line
  translate(0, -length);
  //shrink the line
  length *= 0.66;

  //now for getting fractaul
  if (length > 2) {

    //log where you push the whole thing
    push();
    rotate(angle);
    branch(length)
    pop();

    //repeat for other side
    push();
    rotate(-angle);
    branch(length)
    pop();
  }



}