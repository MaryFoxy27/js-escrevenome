function setup() {
  createCanvas(400, 400);
   background("white")
}

function draw() {
  stroke("bluje")
  fill("red");
  rect(0, 10, 100, 150);
  
  if (mouseIsPressed) {
  rect(mouseX, mouseY, 100, 150);
 }
}
