//inspired automated sketches of by james paterson http://presstube.com/blog/category/james-paterson/ i wanted to experiment with 
//some of my drawings and see what occured
//becca rose 2016

// this kind of evelved into a random book cover generator

// next 
// : the bok name does not work until 2nd interation on "more books"
// : I am not sure how to start with a book name
// : add more images to data set

var img = [];

var imgW;
var aspect;
var imgH;
var randISBN1;
var randISBN2;
var imageSnapButton
var book;
var author;

function preload() {
  // load images
  for (var i = 0; i < 35; i++) {
    img[i] = loadImage(i + ".png");
    println(i);
  }
}

function setup() {
  createCanvas(1000, 800);
  background(255);
  noLoop();
  imageMode(CENTER);

  // create clear button
  imageSnapButton = createButton('- M O R E -');
  imageSnapButton.position(60, height - 50);
  imageSnapButton.mousePressed(imageSnap);

  //make and image to start with
  var rand1 = ~~random(35);
  var rand2 = ~~random(35);
  var rand3 = ~~random(35);

  //display images
  image(img[rand3], (width / 2) - 300, (height / 2) - 200, imgW, imgH);
  image(img[rand2], width / 2, (height / 2) - 100, imgW, imgH);
  image(img[rand1], (width / 2) + 200, (height / 2) + 30, imgW, imgH);

}

//find the JSON data page
function newBook() {
  randISBN1 = ~~random(256);
  randISBN2 = ~~random(256);
  loadJSON('http://openlibrary.org/api/get?key=/b/OL1' + randISBN1 + randISBN2 + 'M', gotData);
}

// pinpoint the data I want to make the image titles
function gotData(data) {
  println(data.result.title);
  book = data.result.title;
}

//function to make those imaages yeah.
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
  textSize(35);
  text(book, 60, height - 60);
}
