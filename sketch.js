var fixedRect, movingRect,newRect,edges;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  newRect=createSprite(800,100,60,90);
  newRect.shapeColor = "green";
  newRect.velocityY=5;
  newRect.velocityX=5;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //call function
  if(isTouching(movingRect,newRect)){
    movingRect.shapeColor = "red";
    newRect.shapeColor = "red";

  }
  else {
    movingRect.shapeColor = "green";
    newRect.shapeColor = "green";
  }

  if (newRect.x + newRect.width/2 <=0||newRect.x + newRect.width/2>=1200){
    newRect.velocityX= newRect.velocityX * (-1);
    
  }
  if (newRect.y + newRect.height/2>=800||
    newRect.y + newRect.height/2<=0){
      
      newRect.velocityY= newRect.velocityY * (-1); 
    }
  drawSprites();
}
//function definition
