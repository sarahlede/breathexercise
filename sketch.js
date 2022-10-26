let canvasWidth = 1920; // same variable as w
let canvasHeight = 1080; //same variable as h
let x = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight); 
  console.log(canvasWidth/2); //divides width in half
  canvasWidth = canvasWidth + 1;
  console.log(canvasWidth)
}

function draw() {
  // let r = random(100,200); 
  // let g = random(40);
  // let b = random(200,255); 
  // background( r, g, b ); //gives random a range of diff. colors
  background( 'black' );
  let n = 0;
  while (n < 4) {
    circle(frameCount*0.1, 75*n, 58, 20, 86,75); 
    n++;
  
  // triangle(frameCount*0.1, 75, 58, 20, 86,75); 
  circle(frameCount, 90, 60, 200, 150, 75);
  circle(300, 100, 320,100, 310, 80);
}
    // ellipse(0, 50, 33, 33); 

    // push(); 
    // strokeWeight(10);
    // fill(204, 153, 0);
    // translate(50, 0);
    // ellipse(0, 50, 33, 33);
    // pop();

    // ellipse(100, 50, 33, 33);

    // ellipse(0, 50, 33, 33);

    // push();
    // strokeWeight(10);
    // fill(204, 153, 0);
    // ellipse(33, 50, 33, 33); 

    // push();
    // stroke(0, 102, 153);
    // ellipse(66, 50, 33, 33);
    // pop();
    
    // pop();

    // ellipse(100, 50, 33, 33);
  // if (x < 50) {
  //   x++;
  // } 
  // pertains to let x = 0, which has our shape move and stop pixel at anything less than 200
  // background( random (125)); flashing background
  // Set colors
  fill( 'white');
  stroke(127, 63, 120);
}

function keyPressed() {
  fill(random(255));
} 
  //   circle(frameCount*0.1, 75*n, 58, 20, 86,75); 
  //   n++;
  
  // // triangle(frameCount*0.1, 75, 58, 20, 86,75); 
  // circle(frameCount, 90, 60, 200, 150, 75);
  // circle(300, 100, 320,100, 310, 80);