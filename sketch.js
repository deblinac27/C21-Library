var fixedRect, movingRect;
var gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameobject1 = createSprite(300, 100, 50, 80);
  gameobject2 = createSprite(300, 200, 50, 80);
}

function draw() {
  background(0,0,0); 
  
  bounceOff(movingRect, fixedRect);
  
  gameobject2.x = mouseX;
  gameobject2.y = mouseY;

  if (isTouching(gameobject1, gameobject2)){
    gameobject1.shapeColor = "red";
    gameobject2.shapeColor = "red";
  } else{
    gameobject1.shapeColor = "green";
    gameobject2.shapeColor = "green";
  }

  drawSprites();
}
