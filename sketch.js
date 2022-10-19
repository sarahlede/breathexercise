let canvasWidth = 400; // same variable as w
let canvasHeight = 400; //same variable as h
let x = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight); 
  console.log(canvasWidth/2); //divides width in half
  canvasWidth = canvasWidth + 1;
  console.log(canvasWidth)
}

function draw() {
  let r = random(100,200); 
  let g = random(40);
  let b = random(200,255); 
  background( r, g, b ); //gives random a range of diff. colors
  // background( 'pink' );
  // let n = 0;
  // while (n < 4) (
  //   triangle(frameCount*0.1, 75, 58, 20, 86,75); 
  // )
  triangle(frameCount*0.1, 75, 58, 20, 86,75); 
  if (x < 50) {
    x++;
  } 

  triangle(frameCount, 90, 60, 200, 150, 75);
  triangle(300, 100, 320,100, 310, 80);

  // if (x < 50) {
  //   x++;
  // } 
  // pertains to let x = 0, which has our shape move and stop pixel at anything less than 200
  // background( random (125)); flashing background
  // Set colors
  fill( 'yellow');
  stroke(127, 63, 120);
}

function keyPressed() {
  fill(random(255));
} 
 