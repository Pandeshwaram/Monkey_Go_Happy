
var monkey , monkey_running;

var ground;

var banana ,bananaImage, obstacle, obstacleImage;

var foodGroup, obstacleGroup;

var score, survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500, 400);
  
  monkey = createSprite(75, 350, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 800, 20);
  ground.velocityX = -4;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  
  background(399);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime, 100, 50);
  
  ground.x = ground.width/2;
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y > 309){
     monkey.velocityY = -20;
     }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  bananaFunc();
  stoneFunc();
  
  drawSprites();
}

 function bananaFunc(){
   
   if(frameCount % 150 === 0){
     
     banana = createSprite(500, 100, 20, 30);
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -3;
     banana.lifetime = 167;
     banana.y = Math.round(random(120, 200));
     
   }
   
   
   
 }

 function stoneFunc(){
   
   if(frameCount % 500 === 0){
     
     obstacle = createSprite(500, 320, 30, 30);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.12;
     obstacle.velocityX = -3;
   }
 }



