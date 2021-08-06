var runner;
var runnerimg;
var lion;
var lionimg;
var backg;
var backgimg;
var ig;
var gameState="PLAY"
var coin;
var coinani
var score=0;
var coing;
var dis=0;



function preload() {
      lionimg = loadImage("images/lion.gif")
      backgimg = loadImage("images/park.jpg")
      runnerimg = loadImage("images/runner.gif")
      coinani=loadImage("images/Coin.gif")
}

function setup() {
      createCanvas(600, 400);
      backg = createSprite(800, 200)
      backg.addImage(backgimg);
      //backg.scale = 0.5
      console.log(backg.width);
      backg.velocityX=-3
      backg.x = backg.width /2;

      lion = createSprite(200, 310)
      lion.addImage(lionimg)
      lion.scale=0.15
      ig = createSprite(300, 350,600,5)
      
      runner = createSprite(380, 300)
      runner.addImage(runnerimg)
      runner.scale=0.3
      ig.visible=true
      
      coing= new Group()
     score=0;  
      textSize(20)
}

function draw() {
      background(300)
      
     
      if(gameState="PLAY"){
      if (backg.x<0){
            backg.x = backg.width /2;
      }
      dis = dis + Math.round(getFrameRate()/60);
          
            if(keyDown("space") && runner.y >= 159){
                  runner.velocityY=-10 
            
          }
   runner.velocityY=runner.velocityY+1;
   
   runner.collide(ig)
   lion.collide(ig)

   
   if (runner.isTouching(coing)) {
      coing.destroyEach();
    }

    coinSpawn() 
    drawSprites()
            
      }
      
      
      text("Score:"+score,500,50)    
      text("Distance:"+dis,50,50)   
     
      
}

function coinSpawn(){
     if(frameCount%100===0){
      coin=createSprite(600,100,5,5)
      coin.addImage(coinani)
      coin.y=Math.round(random(350,100))
      coin.velocityX=-3
      coin.scale=0.1
      coing.add(coin)
      
}
}