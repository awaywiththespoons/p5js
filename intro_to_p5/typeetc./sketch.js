 var textA = 12;
 var textB = 800;
 var textC = 12;

 var angleA = .25;
 var widthB = 0;
 var new_widthB;

 function setup() {
   createCanvas(600, 600);
   textAlign(CENTER);

   new_widthB = width;

 }

 function draw() {
   background(200, 20, 103);
   textSize(14);
   text("press ~ a ~ b or ~ c for ~ joy", width / 2, 20);

   if (keyIsPressed) {
     // A grows up
     if (keyCode == 097) {
       for (var i = 0; i < 10; i++) {
         textSize(573);
         rotate(angleA);
         text("a", width / 2, height / 1.5);
         angleA = random(0, 360);
       }
     }

     // B B B B B B B B 
     else if (keyCode == 098) {
       if (widthB < width) {
         textSize(textB);
         text("b", widthB, height);
         widthB += 5;
         console.log("old w B = " + widthB);
       }

       if (widthB >= width) {
         textSize(textB);
         text("b", new_widthB, height);
         new_widthB -= 5;
         console.log("new wb = " + new_widthB);
         //but if new width possition is 0 go to first loop
         if (new_widthB === 0) {
           widthB = 0;
         }
       }
     }
     // C
     else if (keyCode == 099) {


       textSize(textC);
       text("c", width / 2, height / 2);
       textC++;
       console.log(textC);
     }
   }


 } //end of draw