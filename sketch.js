var btn_red;
var btn_green;
var btn_blue;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400,400);
  
  btn_red = createButton("red");
  btn_red.position(100,50);
  btn_red.mousePressed(red_btn);

  btn_green = createButton("green");
  btn_green.position(200,50);
  btn_green.mousePressed(green_btn);

  btn_blue = createButton("blue");
  btn_blue.position(300,50);
  btn_blue.mousePressed(blue_btn);
}

function draw() {
  background(r,g,b);
}
function red_btn() {
  r = 255;
  g = 0;
  b = 0;
}

function green_btn() {
  r = 0;
  g = 255;
  b = 0;
}

function blue_btn() {
  r = 0;
  g = 0;
  b = 255;
}