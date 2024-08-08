let yPos = 25;
let direction = 1
function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0, 20);

  fill(0, 255, 0);
  ellipse(250, yPos, 50, 50);

  yPos += 10 * direction;

  if (yPos > 475 || yPos < 25) {
    direction *=-1

   }


}
