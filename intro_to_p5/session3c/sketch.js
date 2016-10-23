var circleX = 300;
var circleY = 300;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(30, 200, 200);
  ellipse(circleX, circleY, 40, 40);
  

  if (keyIsPressed) {
    
    if (keyCode == UP_ARROW) {
      circleY -= 5;
    }
    else if (keyCode == DOWN_ARROW) {
      circleY += 5;
    }
    else if (keyCode == RIGHT_ARROW) {
      circleX += 5;
    }
    else if (keyCode == LEFT_ARROW) {
      circleX -= 5;
    }
  }
  
  
}//end of draw