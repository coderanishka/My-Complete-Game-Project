
var trashR,trashL,fishR,fishL,shark;

var score = 0;
var FishLGroup;
var FishRGroup;
var gameState = "play";
var playOn; 


function preload(){
  //ground images..
  
  fishL1 = loadImage("assets2/fish1L.png");
  fishL2 = loadImage("assets2/fish2L.png");
  fishL3 = loadImage("assets2/fish3L.png");
  fishL4 = loadImage("assets2/fish4L.png");
  fishL5 = loadImage("assets2/fish5L.png");
  fishL6 = loadImage("assets2/fish6L.png");

  fishR1 = loadImage("assets2/fish1R.png");
  fishR2 = loadImage("assets2/fish2R.png");
  fishR3 = loadImage("assets2/fish3R.png");
  fishR4 = loadImage("assets2/fish4R.png");
  fishR5 = loadImage("assets2/fish5R.png");
  sharkImg = loadImage("assets2/shark.png");

  trash1Img = loadImage("assets2/trash1.png");
  trash2Img = loadImage("assets2/trash4.png");
  trash3Img = loadImage("assets2/trash5.png");
  trash4Img = loadImage("assets2/trash3.png");

  boatImg = loadImage("assets2/boat.png");
  hookImg = loadImage("assets2/hook.png");

  bgImg = loadImage("assets2/bg.jpg");

}

function setup(){
  createCanvas(innerWidth - 60,innerHeight - 60);

  boat = createSprite(width/2,height/2 - height/2.9);
  boat.addImage(boatImg);
 // boat.scale = 3;
  boat.scale = width/1600;

  hook = createSprite(boat.x - 50,boat.y + 400);
  hook.addImage(hookImg);
 // hook.scale = 0.20;
  hook.scale = width/20000;

 //a line to make sure that the hook doesn't go in the sky..
 line1 = createSprite(width/2,height/4,width,5);
 line1.visible = false;
 
// small fish
   FishLGroup = new Group();
   FishRGroup = new Group();
// big fish   
   FishL2Group = new Group();
   FishR2Group = new Group();
   SharkGroup = new Group();
// trash
   TrashLGroup = new Group();   
   TrashRGroup = new Group();   

}

function draw(){
  background(bgImg);
  createEdgeSprites();
  drawSprites();
  
  //hook.y = boat.y + 400;
  hook.x = boat.x - 420;

  hook.collide(line1);

  strokeWeight(7);
  line(hook.x+40,390,hook.x+35,hook.y-75);
  
 

  if (touches.length > 0 && hook.y < height/4|| keyCode === DOWN_ARROW && hook.y < height/4 ){
    hook.velocityY = 8;
    touches = [];
  }

  if (touches.length > 0 || keyCode === UP_ARROW && hook.y > height/1){
    hook.velocityY = -8;
    touches = [];
  }

  if (keyCode === RIGHT_ARROW && boat.x < 4900){
    boat.x+=10;
  }

  if (keyCode === LEFT_ARROW && boat.x > 250){
    boat.x-=10;
  }
if (gameState === "play"){

  SpawnFishL();
  SpawnFishR();
  SpawnShark();
  SpawnTrashR();
  SpawnTrashL();
  //fishL.debug = true;
  
  if (FishLGroup.isTouching(hook)){
  //  fishL.x = hook.x;
  //  fishL.y = hook.y;
    fishL.velocityX = 0;
    score-=10
    fishL.visible = false
    //fishL.destroy();
  }
  if (FishRGroup.isTouching(hook)){
   // fishR.x = hook.x;
   // fishR.y = hook.y;
    fishR.velocityX = 0;
    score-=10
    fishR.visible = false
   // fishR.destroy();
  }
  if (TrashLGroup.isTouching(hook)){
   // trashL.x = hook.x;
   // trashL.y = hook.y;
    trashL.velocityX = 0;
    score+=10
    trashL.visible = false
   // trashL.destroy();
  }
  if (TrashRGroup.isTouching(hook)){
  //  trashR.x = hook.x;
  //  trashR.y = hook.y
    trashR.velocityX = 0;
    score+=10
    trashR.visible = false
   // trashR.destroy();
  }
   //hook.debug = true;
  /*if (TrashLGroup.y < 425){
    trashL.remove();
  }
  if (TrashRGroup.x < 425){
    trashR.remove();
  }
  if (FishLGroup.x < 425){
    fishL.remove();
  }
  if (FishRGroup.x < 425){
    fishR.remove();
  }*/

  if(score === 5000 ){
    gameState = "goodEnd";
  }
  
  fill(0);
  textSize(60);
  text("Score : "+ score, 20,90);
  
}  

if (gameState === "goodEnd"){
  fill(0);
  textSize(100);
  text("Thank You for Cleaning the Ocean!",width/2 - 700,900);
  text("Your Score :"+ score,width/2 - 300,1100);
  /*playOn = createSprite(width/2 + 150,height/2 + 100);
  text("Play On?",width/2 - 400,height/2 + 150);*/
}

/*if(mousePressedOver(playOn)){
  gamestate = "play"
}*/


  
 
}

