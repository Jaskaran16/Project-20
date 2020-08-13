var car1,wall,speed,weight
function setup() {
  createCanvas(800,400);
 car1= createSprite(380, 200, 20, 50);
 speed=random(55,90);
 weight=random(400,1500);
 wall=createSprite(150,200,60,height/2);
 car1.velocityX=-4;
}

function draw() {
  background(0);
  car1.shapeColor="green"
  if(car1.x-wall.x<wall.width/2+car1.width/2)
  {
    car1.velocityX=0;
    var deformation =0.5*weight*speed*speed/22500;
    if(deformation>180)
    {
      car1.shapeColor=color(255,0,0);
    }
    if(deformation<100)
    {
      car1.shapeColor="yellow"
    }
    else{
      car1.shapeColor="red"
    }
  }
  drawSprites();
}