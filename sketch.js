var quiz;

function setup() {
  createCanvas(1200,600);
quiz=new Quiz();
}

function draw() {
  background("lightblue");  
 quiz.display();
  drawSprites();
}