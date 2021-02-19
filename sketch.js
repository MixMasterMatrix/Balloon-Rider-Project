var balloonImg, balloon;
var bgImg, bg;
var database, position;

function preload(){
  bgImg = loadImage("images/background.png")
  balloonImg = loadAnimation("images/Hot Air Ballon-02.png","images/Hot Air Ballon-03.png","images/Hot Air Ballon-04.png")
}

function setup() {
  createCanvas(1500,700);
  bg = createSprite(325,325,width,height)
  bg.addImage(bgImg);
  
  balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation("somethinghereidk", balloonImg);

}

function draw() {
  background(255,255,255);  

  fill("black");
  stroke(5);
  textSize(30);
  text("Press arrow keys to move!", 50,50);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }

  drawSprites();
}

function keyPressed(){

}