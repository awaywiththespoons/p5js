var bgcol=0;

function setup() {
  createCanvas(600,600);
}

function draw() {
 background(bgcol); 
 noStroke();
 ellipse(width/2, height/2, 40, 40);
 
 //dist() calculate the distance between two points. 
 // (x1, y1, x2, y2) 
 //(first point x, first point y, second point x, second point y)
 // returns the number between those two points
 
 var distance = dist(width/2, height/2, mouseX, mouseY);
 console.log(distance);
 
 if (distance < 20 && mouseIsPressed){
   bgcol = 255;
 }
 else{
   bgcol = 0;
 }
}