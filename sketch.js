function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
    stroke(255, 255, 255, 25);
  } else {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
    stroke(255, 255, 255, 25);

  }
  rect(mouseX,mouseY,50,50);
}
