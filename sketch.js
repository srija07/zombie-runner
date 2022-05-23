var bgSprite, bgImage;
var player;
var player_walking;


function preload(){
  bgImage= loadImage("images/bg.jpg")
  player_walking= loadAnimation("images/player_walk1.png","images/player_walk2.png","images/player_walk3.png","images/player_walk4.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
bgSprite= createSprite (width/2 , height/2 , width,height)
bgSprite.addImage(bgImage)
  bgSprite.scale = 2.5;
  bgSprite.velocityX = -4;
  bgSprite.height= windowHeight;
  player= createSprite(100,height/2+125)
  player.addAnimation("playerWalking",player_walking)
  player.scale= 0.4;
}

function draw() {
  //trex.debug = true;
  background("blue");
  if(bgSprite.x< 0){
    bgSprite.x = width/2
  }
  
  drawSprites();
}