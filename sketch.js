var wall;
var car1, car2, car3;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, 60, 400);
  wall.shapeColor = (80, 80, 80);
  car1 = createSprite(400, 100, 30, 30);
  car1.shapeColor = "white";
  car1.weight = 1200;
  car1.velocityX = 60;
  car2 = createSprite(400, 200, 30, 30);
  car2.shapeColor = "white";
  car2.weight = 1000;
  car2.velocityX = 92;
  car3 = createSprite(400, 300, 30, 30);
  car3.shapeColor = "white";
  car3.weight = 900;
  car3.velocityX = 85;
}

function draw() {
  //background(950,18,900);
  background("pink");  

  if(0.5*1200*60*60/22500 <100 
    && car1.collide(wall)) {
   car1.shapeColor = "green";
  }

  if(0.5*1200*60*60/22500 >180
     && car1.collide(wall)){
    car1.shapeColor = "red";
   }

  if(0.5*1200*60*60/22500 >100
     && 0.5*1200*60*60/22500 <180
     && car1.collide(wall)){
     car1.shapeColor = "yellow";
   }

  if(0.5*1000*92*92/22500 <100
     && car2.collide(wall)) {
    car2.shapeColor = "green";
   }
 
  if(0.5*1000*92*92/22500 >180
     && car2.collide(wall)){
    car2.shapeColor = "red";
  }
 
  if(0.5*1000*92*92/22500 <180
     && 0.5*1000*92*92/22500 >100 
     && car2.collide(wall)){
    car2.shapeColor = "yellow";
  }

  if(0.5*900*85*85/22500 <100
    && car3.collide(wall)) {
    car3.shapeColor = "green";
  }

  if(0.5*900*85*85/22500>180
    && car3.collide(wall)){
    car3.shapeColor = "red";
  }

  if(0.5*900*85*85/22500 >100 
    && 0.5*400*40*40/22500 <180
    && car3.collide(wall)){
    car3.shapeColor = "yellow";
  }
  
  drawSprites();
}