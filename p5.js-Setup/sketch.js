/** Initialize our `x` variable to use. */
var x;


/**
 * Setup initial canvas of 640px wide & 480px tall.
 * Start our `x` variable at 100.
 */
function setup() {
  createCanvas(640, 480);
  x = 100;
}

/**
 * Draw our background and rectangle.
 * Move our rectangle 1px on each draw frame event.
 * Reset rectangle back to 100px from left after it leaves the screen.
 */
function draw() {
  background(255, 255, 255);
  rect(x, 150, 200, 120);
  x = x + 1;
  if (x > 640) {
    x = 100;
  }
}
