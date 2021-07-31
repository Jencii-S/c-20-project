var boy, boy_running;
var path, path_travelling;
var invisibleground1, invisibleground2;


function preload(){
  //pre-load images
  boy_running = loadAnimation("Runner-1.png", "Runner-2.png");
  path_travelling = loadAnimation("Road.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  //create sprites here
  path=createSprite(width/2, windowHeight);
  path.addImage(path_travelling);
  path.velocityY = -4;

  //creating boy running
boy = createSprite(windowWidth-50,windowHeight-100,20,20);
boy.addAnimation("SahilRunning",boy_running);
boy.scale=0.08;

  
} 

function draw() { 
  background(180);
  jaxson.x=World.mouseX;

  jaxson.collide(invisibleground2);
  jaxson.collide(invisibleground1);




  
  if(path.y > 400){
  path.y = height/2;
  }


  jaxson.collide(invisibleground1);
  jaxson.collide(invisibleground2);
  drawSprites();
}
