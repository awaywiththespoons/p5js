// useing transforamtions
// make 1 brach at a time. (so you don't have to go back and draw branches)
// computer keeps track using push and pop
// push forward and pop back

//define angle
var angle;

function setup() {
  createCanvas(400, 400);
  stroke(0);
}

function draw() {

  background(19, 200, 60);
  angle = map(mouseX, 0, width, 0, PI / 2);
  //nf(num, left unit, right unit)
  println("angle = " + nf(angle, 1, 3));


  //start from the bottom, center of the canvas (using translate as not to complicate things by using X, Y coordinates
  //this will be a global tranlates to all function as it is in the draw and called before the function
  translate(width / 2, height);

  //call function
  branch(120, 1);

}


//this will draw an individual branch
//generation changes the thickess of line each time
function branch(length, generation) {
  
  strokeWeight(map(generation, 4, 10, 10, 4));
  //draw a sinle line
  line(0, 0, 0, -length);
  // move line to end of the single line
  translate(0, -length);
  //shrink the line
  length *= 0.66;

  generation++;

  //now for getting fractaul
  if (length > 2) {

    //log where you push the whole thing
    push();
    rotate(angle);
    branch(length, generation)
      //pop out of the log
    pop();

    //back to the start (pre push) repeat for other side
    //push again
    push();
    rotate(-angle);
    branch(length, generation)
      //pop out again
    pop();
  }



}