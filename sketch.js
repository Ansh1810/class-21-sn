var fixedRect, movingRect;
var rect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect2 = createSprite(400,200,80,30);
  rect2.shapeColor = "green";
  rect2.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "orange";
  fixedRect.shapeColor = "orange";
 }
 else if( isTouching(movingRect,rect2)){
  movingRect.shapeColor = "blue";
  rect2.shapeColor = "blue";
 } 
 else
 {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green"; 
  rect2.shapeColor = "green";
 }

  drawSprites();
}
/*
pass arguments - var
var a=3,b=6;
function add(c,d)

movingRect as obj1 , fixedRect as obj2 
*/


