
var lineW= 1;

function setup() {
  createCanvas (680, 680);
}

function draw() {
  background(25,190, 40);
  
  // making a load of lines accross the screen
  for (var i = 0; i<width; i= i +10){
     stroke (250, 20, 200, i/width*255);
     strokeWeight(4);
      line(i, lineW, i, height);
     
  }
 
}//end of draw