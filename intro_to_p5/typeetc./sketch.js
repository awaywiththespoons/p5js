 //sketch inspired by John Madea's type tap write http://www.maedastudio.com/2004/rbooks2k/ttw.html
 //Becca Rose 2016

 //A
 var textA = 12;

 //B
 var textB = 800;
 var angleA = .25;
 var widthB = 0;
 var new_widthB;

 //C
 var randC;
 var randC_w;
 var randC_h;

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
       //left to right
       if (widthB < 600) {
         textSize(textB);
         text("b", widthB, height);
         widthB += 8;
         console.log("old w B = " + widthB);
       }
       //right to left
       if (widthB >= 600) {
         textSize(textB);
         text("b", new_widthB, height);
         new_widthB -= 8;
         console.log("new wb = " + new_widthB);
         // sorting it out
         if (new_widthB <= 8) {
           widthB = 0;
           new_widthB = 600;
         }
       }
     }
     // C
     else if (keyCode == 099) {

       randC = random(12, 800);
       randC_w = random(0, width);
       randC_h = random(0, height);
       textSize(randC);
       text("c", randC_w, randC_h);

     }
   }


 } //end of draw