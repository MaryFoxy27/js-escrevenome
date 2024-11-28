function setup() {
  createCanvas(600, 600);
   background("black")
}

function draw() {
  stroke("whithe")
  fill("pink");
  rect(0, 10, 100, 150);
  
  if (mouseIsPressed) {
  rect(mouseX, mouseY, 100, 150);
 }
}
