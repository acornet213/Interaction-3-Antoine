let colour = 5
let change = 1
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  fill(colour)
  stroke(colour)
  drone()
  colour = colour + change
  if (colour>220){
  change = change*-1
 }
}

function drone() {  //Body
  strokeWeight(0);
  rect(254, 125, 79, 285);
  rect(333, 158, 29, 91);
  rect(225, 158, 29, 91);
  rect(333, 272, 8, 61);
  rect(246, 272, 8, 61);
  rect(333, 355, 26, 31);
  rect(228, 355, 26, 31);
  triangle(225, 158, 254, 158, 254, 125);
  triangle(362, 158, 333, 158, 333, 125);
  triangle(359, 386, 333, 410, 333, 386);
  triangle(228, 386, 254, 410, 254, 386);
  triangle(333, 355, 333, 325, 359, 355);
  triangle(254, 355, 254, 325, 228, 355);
  triangle(333, 249, 333, 280, 362, 249);
  triangle(254, 249, 254, 280, 225, 249);
  //arms
  strokeWeight(26);
  line(352, 237, 498, 166);
  line(232, 237, 96, 166);
  line(252, 357, 115, 430);
  line(341, 357, 475, 430);

  //rotors
  strokeWeight(0);
  circle(475, 430, 44);
  circle(96, 166, 44);
  circle(115, 430, 44);
  circle(498, 166, 44);

  //Blades

  //Top Right
  push()
  translate(454,110)
  rotate(-208)
  ellipse(0,0,25,123);
  pop()
  push()
  translate(540,220)
  rotate(-208)
  ellipse(0,0,25,123);
  pop()

  //Bottom Left
  push()
  translate(535,400)
  rotate(-90)
  ellipse(0,0,25,123);
  pop()
  push()
  translate(415,460)
  rotate(-90)
  ellipse(0,0,25,123);
  pop()

  //Bottom Left
  push()
  translate(150,480)
  rotate(-208)
  ellipse(0,0,25,123);
  pop()
  push()
  translate(78,384)
  rotate(-208)
  ellipse(0,0,25,123);
  pop()

  //Top Left
  push()
  translate(105,105)
  rotate(degrees (-4))
  ellipse(0,0,25,123);
  pop()
  push()
  translate(85,225)
  rotate(degrees (-4))
  ellipse(0,0,25,123);
  pop()
}
