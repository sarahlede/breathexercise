function setup() {
  createCanvas(400,400); 
}

function draw() {
  background('pink');
  triangle(30, 75, 58, 20, 86,75);
  triangle(30, 90, 60, 200, 150, 75);
  triangle(300, 100, 320,100, 310, 80);

  // Set colors
  fill('yellow');
  stroke(127, 63, 120);
}