function setup() {
 createCanvas(600,600); 
}

function draw() {
  
  
}

function mouseDragged(){
strokeWeight(4);
  line(mouseX, mouseY, pmouseX, pmouseY);
}