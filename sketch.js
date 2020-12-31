const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new  Paper(200,400,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  
  drawSprites();
 
}
function keyPressed()  {
	if (keycode=== UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperbody.body.position,{x:85,y:-85})	
	}
}


