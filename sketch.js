var canvas;
var road;
var car,carImg;


function preload(){

  road=loadImage("road.jpg")
  carImg=loadImage("car.png")
}

function setup(){
  canvas = createCanvas(1300,500);

  /*road=createSprite(displayWidth/2,displayHeight/4,displayWidth,displayHeight)
  road.addImage(roadImg);
  road.scale=1.8;
*/
  car= createSprite(750,300,50,50);
  car.addImage(carImg)
  car.scale=0.2
}


function draw(){
  background(road);
  
 
  /*road.velocityY=5;*/
  
  if(keyDown(UP_ARROW)){
    car.velocityY=-5;
  }


  camera.y=car.y;
  

 


  /*if(road.y>displayHeight/2  ){
    road.y=displayHeight/5
  }
  */

  drawSprites();
}
