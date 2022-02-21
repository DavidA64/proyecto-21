const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var pelota,piso,caja1,caja2;
var barra1, barra2 


function setup (){
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  var option = {
    isStatic: true,
    friction: 0.01,
    restitution: 1

  }
  
  var option2 = {
    restitution: 1, 
    density: 0.5,
    friction: 0

  }




  pelota = Bodies.circle(50,1,5,option2);
  World.add(world,pelota);
  piso = Bodies.rectangle(250,350,1050,20,option);
  World.add(world,piso);
  rectMode(CENTER);
  //ellipseMode(RADIUS);


  
}


function draw(){
  background("black");
  drawSprites()
  barra1=createSprite(300,305,20,100)
  barra2=createSprite(500,305,20,100)
  Engine.update(engine);
  push();
  translate(pelota.position.x,pelota.position.y);
  pop();
  ellipse(pelota.position.x,pelota.position.y,20);
  rect(piso.position.x,piso.position.y,2000,10);
 

}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Body.applyForce(pelota,0,0,1)
	}
}

