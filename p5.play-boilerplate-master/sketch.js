var Playerimg,Coinimg,Hammerimg, Heartimg, Stoneimg, player, coin, hammer, heart, stone, Backgroundimg,dummy;
var stoneGroup, standGroup
var score = 0 
var speed = 0


function preload()
{
Playerimg = loadImage("right.png")
playerimg2 = loadImage("left.png")
Coinimg = loadImage("coin.png")
Hammerimg = loadImage("hammer.png")
Heartimg = loadImage("Heart.png")
Backgroundimg = loadImage("cave.png")
Stoneimg = loadImage("Stone wall.png")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  speed =
  player = createSprite(950,-300,20,20)
  Kill = createSprite(10,5,10000,10)
  Kill.visible = false
  Kill2 = createSprite(10,1125,10000,10)
  player.addImage(Playerimg)
  player.scale = 0.5
  player.velocityY = 5
  player.setCollider("rectangle", 0,0,120,290)
  player.scale = 0.2
  stoneGroup = createGroup()
  standGroup = createGroup()
  player.debug = false
  
}




function draw() {
  background(Backgroundimg); 
  stones()
  /*if(player.isTouching(stone))
  {player.velocityY  = 0 

  }*/
  
    if(frameCount % 45/(1/5) === 0 )
{score = score + 1
 
    if(player.isTouching(stoneGroup)){
      
     speed = speed + 1
    }

 
  
  }
  if(speed=1){
    player.velocityY = 13
  }
  if(speed>1){
    player.velocityY = 13
  }
  text("Time"+ " : "+score + " " + "Seconds",displayWidth-300,80)
  if (keyDown(RIGHT_ARROW)) {
    player.x = player.x + 20
    player.addImage(Playerimg)
  }
  if (keyDown(LEFT_ARROW)) {
    player.x = player.x - 20
    player.addImage(playerimg2)
  }
 player.velocityY = player.velocityY + 0.1
            
 if(player.isTouching(standGroup))
 {player.velocityY = -15}

 
 //player.collide(stoneGroup)
 if(stoneGroup.isTouching(Kill)){
   stoneGroup.delete
   player.delete
 }
 

  player.collide(stoneGroup)

  drawSprites();

}

function stones(){
if(frameCount % 10 === 0 )
{
 stone = createSprite(random(1,displayWidth), 950, 30, 200);
 stone.setCollider("rectangle", 50,50,20,100)
 stone.addImage(Stoneimg)
 stone.scale = 0.01
 stand = createSprite((stone.x + 58) ,stone.y - 10,((247)*30/40)*14/20,10)
 stand2 = createSprite(stone.x + 120,stone.y+20,10,125)
 stand3 = createSprite(stone.x - 60,stone.y+20,10,125)
 stand.visible = false
 stand2.visible = false
 stand3.visible = false
 stone.scale = 0.5
 stone.debug = false
 stone.velocityY = -15
 stand.velocityY = -15
 stand2.velocityY = -3
 stand3.velocityY = -3
 stone.lifetime = 70;
 stoneGroup.add(stone)
 standGroup.add(stand)
 stone.scale = 0.5

}  
}

















