
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var bin1;
var bin2;
var bin3;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper1 = new paper(10,10,60);
	bin1 = new bin(400,360,50,10);
	bin2 = new bin (500,500,50,10);
	bin3 = new bin (600,600,50,10);
	ground1 = new ground(500,200,50,10);
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground1.display();
  drawSprites();
 
}



