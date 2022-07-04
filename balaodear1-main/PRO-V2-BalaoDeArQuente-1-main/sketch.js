var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3


function preload(){
bgImg = loadImage('assets/bg.png')
balloonImg = loadAnimation('assets/balloon1.png','assets/balloon2.png','assets/balloon3.png')
obsTop1 = loadImage('assets/obsTop1.png')
obsTop2 = loadImage('assets/obsTop2.png')
obsBottom1 = loadImage('assets/obsBottom1.png')
obsBottom2 = loadImage('assets/obsBottom2.png')
obsBottom3 = loadImage('assets/obsBottom3.png')
}

function setup(){
bg = createSprite(165,485)
bg.addImage("bgImage",bgImg)
bg.scale=1.3
balloon = createSprite(50,200)
balloon.addAnimation('baloon',balloonImg)
balloon.scale = 0.2
balloon.setCollider("rectangle",0,0,balloon.width,balloon.height);
balloon. debug = false
//imagem de plano de fundo

topObstaclesGroup = createGroup()
bottomObstacleGroup = createGroup()
//criando canto superior e inferior



      
//criando o balão     




}

function draw() {
  
  background("black");
        
          //fazendo o balão de ar quente pular
          

          //adicionando gravidade
          if(keyDown("space")&& balloon.y ) {
            balloon.velocityY = -8;
            //jumpSound.play();
        }
        balloon.velocityY = balloon.velocityY + 0.8
        
        if(balloon.position.y <= 10 || balloon.position.y >= 400){
balloon.velocityY = 0
 
        }
        spawnObstacles() 
        barra()   
        drawSprites();
 
}
function spawnObstacles(){
        if (frameCount % 60 === 0){
          var topObstacle = createSprite(400,50,10,40);
          topObstacle.y = Math.round(random(15,100));
          topObstacle.velocityX = -(6);
          
           //gerar obstáculos aleatórios
           var rand = Math.round(random(1,2));
           switch(rand) {
             case 1: topObstacle.addImage(obsTop1);
                     break;
             case 2: topObstacle.addImage(obsTop2);
                     break;
             
             default: break;
           }
           topObstacle.depth = balloon.depth;
                 balloon.depth = balloon.depth + 1;
           //atribuir dimensão e tempo de vida ao obstáculo           
           topObstacle.scale = 0.1;
           topObstacle.lifetime = 66.6;
          
          //acrescentar cada obstáculo ao grupo
           topObstaclesGroup.add(topObstacle);
        }
        if (frameCount % 60 === 0){
                var bottomObstacle = createSprite(400,350,10,40);
                
                bottomObstacle.velocityX = -(6);
                
                 //gerar obstáculos aleatórios
                 var rand = Math.round(random(1,3));
                 switch(rand) {
                   case 1: bottomObstacle.addImage(obsBottom1);
                           break;
                   case 2: bottomObstacle.addImage(obsBottom2);
                           break;
                   case 3: bottomObstacle.addImage(obsBottom3);
                           break;
                   default: break;
                   
                 }
                 bottomObstacle.depth = balloon.depth;
                 balloon.depth = balloon.depth + 1;
                 //atribuir dimensão e tempo de vida ao obstáculo           
                 bottomObstacle.scale = 0.07;
                 bottomObstacle.lifetime = 66.6;
                
                //acrescentar cada obstáculo ao grupo
                bottomObstacleGroup.add(bottomObstacle);
              }
       }

       function barra(){
        if (frameCount % 60 === 0){
              bar = createSprite(400,200,10,800)
              bar.velocityX = -6
              bar.depth = balloon.depth
              bar.lifetime = 66.6
              bar.visible = false
        }
       }