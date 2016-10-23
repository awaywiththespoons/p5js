 var textA = 12;
 var textB = 12;
 var textC = 12;

 function setup() {
   createCanvas(600, 600);
 }

 function draw() {
   background(200, 20, 103);
   textSize(12);
   text("press ~ a ~ b or ~ c for ~ joy", 20, 20)

   if (keyIsPressed) {
     if (keyCode == 097) {
       textSize(textA);
       text("a", width / 2, height / 2);
       textA++;
       console.log(textA);
       if (textA > 573) {
         for (var i = 0; i < 10; i++) {
           textSize(12);
           text("a", width * .75 + i, height / 4 + i)
           //add to this by making some animated letters when you get really big
         }
       } else if (keyCode == 098) {
         textSize(textB);
         text("b", width / 2, height / 2);
         textB++;
         console.log(textB);
       } else if (keyCode == 099) {
         textSize(textC);
         text("c", width / 2, height / 2);
         textC++;
         console.log(textC);
       }
     }
   }
 } //end of draw