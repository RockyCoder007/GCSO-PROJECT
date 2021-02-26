var car,wall,speed,weight,deformation;

function setup() {

  createCanvas(800,400);
  wall = createSprite(750, 200, 100, 200);
  car = createSprite(50,200,50,50);
  speed=random(55,90);
  weight=random(400,1500);

}

function draw() {
  deformation=(0.5*weight*speed*speed)/22500;
  background(255,255,255);
  car.velocityX=speed;
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    console.log("speed of car : "+speed+" "+"weight:"+weight );
    if (deformation<100) {
      car.shapeColor="green";
      console.log("impact : good");
      
    }
    else if (deformation<180) {
      car.shapeColor=rgb(230,230,0);
      console.log("impact : mild");
    }
    else{
      car.shapeColor="red";
      console.log("impact : bad");
    }
  }  
  drawSprites();
}