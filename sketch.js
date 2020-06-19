var rect1,rect2,rect3,rect4;



function setup() {
  createCanvas(800,400);
  rect1 = createSprite(200,200,50,50);
  rect2 = createSprite(200,100,30,30);
  rect1.velocityY = -3;
  rect2.velocityY = 3;
  rect3 = createSprite(100,200,50,50);
  rect4 = createSprite(300,200,50,50);
  rect3.velocityX = 3;
  rect3.shapeColor = "pink";
  rect4.velocityX = -3;
  rect4.shapeColor = "green";

}

function draw() {
  background("black");  
  bounce(rect3,rect4);
  bounce(rect1,rect2);
  drawSprites();
}
function bounce(object1,object2){
if (object1.y - object2.y <= object1.height/2 + object2.height &&
  object2.y - object2.y <= object1.height/2 + object2.height/2){
  object1.velocityY = object1.velocityY*(-1);
  object2.velocityY = object2.velocityY*(-1);
}
if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
  object2.x - object1.x <= object1.width/2 + object2.width/2){
    object1.velocityX = object1.velocityX*(-1);
    object2.velocityX = object2.velocityX*(-1);
  }
}