//inspired automated sketches of by james paterson http://presstube.com/blog/category/james-paterson/ i wanted to experiment with 
//some of my drawings and see what occured
//becca rose 2016

// this kind of evelved into a random book cover generator

// next 
// : the bok name does not work until 2nd interation on "more books"
// : I am not sure how to start with a book name
// : add author
// : add more images to data set
// : change the way that the text displays (size / font / direction etc.)

var img = [];

var imgW;
var aspect;
var imgH;
var randISBN;
var imageSnapButton
var book;
var author;

function preload() {
  // load images
  for (var i = 0; i < 23; i++) {
    img[i] = loadImage(i + ".png");
  }
}

function setup() {
  createCanvas(1000, 800);
  background(255);
  noLoop();
  imageMode(CENTER);

  // create clear button
  imageSnapButton = createButton('- M O R E - B O O K S -');
  imageSnapButton.position(60, height - 50);
  imageSnapButton.mousePressed(imageSnap);

  //make and image to start with
  var rand1 = ~~random(23);
  var rand2 = ~~random(23);
  var rand3 = ~~random(23);

  //display images
  image(img[rand1], (width / 2) + 200, (height / 2) + 30, imgW, imgH);
  image(img[rand2], width / 2, (height / 2) - 100, imgW, imgH);
  image(img[rand3], (width / 2) - 300, (height / 2) - 200, imgW, imgH);
}

function newBook() {
  randISBN = ~~random(256);
  loadJSON('http://openlibrary.org/api/get?key=/b/OL1001' + randISBN + 'M', gotData);

}

function gotData(data) {
  println(data.result.title);
  book = data.result.title;
  author = data.result.by_statement;
}

//function to make those imaages yeah.
function imageSnap() {

  background(255);
  //image randoms
  var rand1 = ~~random(23);
  var rand2 = ~~random(23);
  var rand3 = ~~random(23);

  //display images
  image(img[rand1], (width / 2) + 200, (height / 2) + 30, imgW, imgH);
  image(img[rand2], width / 2, (height / 2) - 100, imgW, imgH);
  image(img[rand3], (width / 2) - 300, (height / 2) - 200, imgW, imgH);

  newBook();
  textSize(35);
  text(book, 60, height - 80);
  textSize(15);
  text(author, 63, height - 60 );
}