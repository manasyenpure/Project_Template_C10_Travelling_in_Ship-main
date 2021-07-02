var ship, ship_running;
var sea,seaImage;

function preload(){
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(600,400);
  
  sea = createSprite(200,180,400,20);
  sea.addImage("sea", seaImage);
 sea.x = sea.width /20;
  
sea.scale = 0.3;

  ship = createSprite(130,180,20,50);
  ship.addAnimation("running", ship_running);

  ship.scale = 0.2;
}

function draw() {
  background("blue");

  sea.velocityX=-8
 console.log(sea.y)

if (sea.x<0){
  sea.x = sea.width /15;
}

if(keyDown("space")&&ship.y>=100){
  ship.velocityY= -10;
}


  drawSprites();
}