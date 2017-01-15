//some kind of experiment based on 1960s artist frida nakey

function setup() {
  createCanvas(600, 600);
  // create button
  imageSnapButton = createButton('- F R I D A - N A K A Y -');
  imageSnapButton.position(40, 20);
  imageSnapButton.mousePressed(fridaNakay);
  noLoop();
  fridaNakay();
}

function fridaNakay() {

  //7 random values:
  //size, location(X+Y), orientation, quantity, pen style
  background(230, 230, 230);
  var numthings = random(6, 20);

  for (var j = 0; j < numthings; j++) {

    var length = random(40, 60);
    var Y = random(0, height);
    var X = random(0, width);
    var thick = random(2, 10);
    var col = random(150, 200);
    var weight = random(1, 3);
    var weight2 = random(1, 3);
    var numStripesX = random(6, 20);
    var numStripesY = random(6, 20);


    for (var i = 0; i < 10; i++) {
      strokeWeight(weight);
      stroke(100, col);
      line(X, Y, X, Y + length);
      X += thick;
    }
    for (var k = 0; k < 10; k++) {
      strokeWeight(weight2);
      stroke(0);
      line(X, Y, X + length, Y);
      Y += thick;
    }
  }

}