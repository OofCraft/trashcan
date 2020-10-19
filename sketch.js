
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,trashBottom,trashSideL,trashSideR;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Gd(400,650,800,20)
	ball = new Paper(100,640,20);
	trashBottom = new TrashBottom(600,640,100,20);
	trashSideL = new TrashSide(550,600,20,80);
	trashSideR = new TrashSide2(650,600,20,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  
  

  trashBottom.display();
  trashSideL.display();
  trashSideR.display();
  ground.display();
  ball.display();
  keyPressed();
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:3,y:-4})
	
	}
}
