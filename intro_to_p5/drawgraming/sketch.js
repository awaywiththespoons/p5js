//inspired automated sketches of by james paterson http://presstube.com/blog/category/james-paterson/ i wanted to experiment with 
//some of my drawings and see what occured
//becca rose 2016

// this kind of evelved into a random book cover generator


var img = [];

var imgW;
var aspect;
var imgH;
var randISBN1;
var randISBN2;
var imageSnapButton
var book;
var bookStart;
var textW = 0;

function preload() {
  // load images
  for (var i = 0; i < 35; i++) {
    img[i] = loadImage(i + ".png");
    println(i);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
  imageMode(CENTER);
  noStroke();
  textSize(35);

  // create button
  imageSnapButton = createButton('- M O R E -');
  imageSnapButton.position(40, 20);
  imageSnapButton.mousePressed(imageSnap);

  imageSnap();
}


/////////////////////////
//find the JSON data page
function newBook() {
  randISBN1 = ~~random(256);
  randISBN2 = ~~random(256);
  loadJSON('http://openlibrary.org/api/get?key=/b/OL1' + randISBN1 + randISBN2 + 'M', gotData);
  println("textW =  " + textW);
}

///////////////////////
//make the image titles
function gotData(data) {
  book = data.result.title;
  println("book = " + book);
  println("textW =  " + textW);

  textW = textWidth(book);

  if (book.length > 48) {
    var bookStart = book.substring(0, 48);
    var bookEnd = book.substring(49, book.length);
    fill(20, 255, 70, 125)
    rect(38, 80 - 32, textWidth(bookStart) + 2, 39);
    rect(38, 120 - 32, textWidth(bookEnd) + 2, 39);
    fill(0);
    text(bookStart, 40, 80);
    text("-", 40, textWidth(bookStart));
    text(bookEnd, 40, 120);

  } else {
    fill(20, 255, 70, 125)
    rect(38, 80 - 32, textW + 2, 39);
    fill(0);
    text(book, 40, 80);
  }
}

////////////////////////////////
//function to make those imaages
function imageSnap() {
  background(255);
  //image randoms
  var rand1 = ~~random(35);
  var rand2 = ~~random(35);
  var rand3 = ~~random(35);

  //display images
  image(img[rand3], (width / 2) - 200, (height / 2) - 200, imgW, imgH);
  image(img[rand2], width / 2, (height / 2) - 100, imgW, imgH);
  image(img[rand1], (width / 2) + 200, (height / 2) + 30, imgW, imgH);
  newBook();

}