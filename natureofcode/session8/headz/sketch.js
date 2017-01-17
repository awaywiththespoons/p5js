// useing transforamtions
// make 1 brach at a time. (so you don't have to go back and draw branches)
// computer keeps track using push and pop
// push forward and pop back

//define angle
var angle;
var img;

function preload() {
  img = loadImage("26.png");
  // img1 = loadImage("18.png");
}

function setup() {
  createCanvas(800, 600);
  stroke(0);
  noLoop();
}

function draw() {

  background(19, 200, 60);
  angle = random(PI / 16, PI / 2);
  //nf(num, left unit, right unit)
  println("angle = " + nf(angle, 1, 3));


  //start from the bottom, center of the canvas (using translate as not to complicate things by using X, Y coordinates
  //this will be a global tranlates to all function as it is in the draw and called before the function
  translate(width / 2, height);

  //call function
  branch(200);

}


//this will draw an individual branch
//generation changes the thickess of line each time
function branch(length) {

  //draw a sinle line
  image(img, 0, 0, length, length);
  // image(img1, 20, 0, length, length);
  // move line to end of the single line
  translate(0, -length);
  //shrink the line
  length *= random(0.6, 0.75);


  //now for getting fractaul
  if (length > 2) {

    var n = floor(random(1, 4));
    for (var i = 0; i < n; i++) {
      //log where you push the whole thing
      push();
      rotate(random(-PI / 2, PI / 2));
      branch(length)
        //pop out of the log
      pop();
    }
  }

}