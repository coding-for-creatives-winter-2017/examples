/** Initialize our `x` variable to use. */
var rectX;
var rectY;
var canvasWidth = 640;
var canvasHeight = 480;
var rectWidth = 200;
var rectHeight = 150;

var velocityX;
var velocityY;


function velocityValue() {
  var velocity = (random() * 6) - 3;
  return velocity;
}

function defineVelocity() {
  velocityX = velocityValue();
  velocityY = velocityValue();
}


/**
 * Setup initial canvas of 640px wide & 480px tall.
 * Start our `x` variable at 100.
 */
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectX = (canvasWidth / 2) - (rectWidth / 2);
  rectY = (canvasHeight / 2) - (rectHeight / 2);
 
  defineVelocity();
}

/**
 * Draw our background and rectangle.
 * Move our rectangle 1px on each draw frame event.
 * Reset rectangle back to 100px from left after it leaves the screen.
 */
function draw() {
  background(255, 0, 255);
  rect(rectX, rectY, rectWidth, rectHeight);

  rectX = rectX + velocityX;
  rectY = rectY + velocityY;

  if (rectX <= 0) {
    defineVelocity();
  } else if (rectY <= 0) {
    defineVelocity();
  } else if ((rectX + rectWidth) > canvasWidth) {
    defineVelocity();
  } else if ((rectY + rectHeight) > canvasHeight) {
    defineVelocity();
  }
}
