
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1,dustbin2,dustbin3,ground
function preload()
{ 
	
}

function setup() {
	createCanvas(800, 700);
	ground = new Ground(400,600,700,30);
	dustbin1 = new Bin(600,550,80,30);
	dustbin2 = new Bin(560,550,30,60);
	dustbin3 = new Bin(640,550,30,60);
	paper = new Paper(100,550);
		
	
	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
}


function keyPressed (){
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}
