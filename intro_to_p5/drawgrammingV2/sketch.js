// inspired automated sketches of by james paterson http://presstube.com/blog/category/james-paterson/ i wanted to experiment with 
// some of my drawings that are on my laptop already...and see what occured
// becca rose 2016
// this kind of evelved into a random image generator with titles of the images comign from book titles from open libary data

// next 
// : the bok name does not work until 2nd interation on "more books"
// : I am not sure how to start with a book name

var img = [];

var imgW;
var imgH;
var randISBN1;
var randISBN2;

var imageSnapButton
var book;
var textW;

function preload() {
  // load images
  for (var i = 0; i < 35; i++) {
    img[i] = loadImage(i + ".png");
    println(i);
  }
} // end of preload

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
  imageMode(CENTER);
  noStroke();

  newimage();
  // create button
  imageSnapButton = createButton('- M O R E -');
  imageSnapButton.position(40, 20);
  imageSnapButton.mousePressed(newImage);

} // end of setup

function jason() {
  // get a title in the setup
  randISBN1 = ~~random(256);
  randISBN2 = ~~random(256);
  loadJSON('http://openlibrary.org/api/get?key=/b/OL1' + randISBN1 + randISBN2 + 'M', gotData);
}

//pinpoint the data I want to make the image titles
function gotData(data) {
  book = data.result.title;
  // get the size of each book string
  textW = textWidth(book);
} // end of got data

function newImage() {
  background(255);
  // make some random numbers
  var rand1 = ~~random(35);
  var rand2 = ~~random(35);
  var rand3 = ~~random(35);

  //display images
  image(img[rand3], (width / 2) - 200, (height / 2) - 200, imgW, imgH);
  image(img[rand2], width / 2, (height / 2) - 100, imgW, imgH);
  image(img[rand1], (width / 2) + 200, (height / 2) + 30, imgW, imgH);

  //add the text
  jason();
  if (book) {
    fill(20, 255, 70, 125)
    rect(38, 80 - 32, textW + 2, 39);
    fill(0);
    textSize(35);
    text(book, 40, 80);
  }
}