const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper();
	ground=new Ground();
	bin1=new Bin(600,258,200,20);
	bin2=new Bin(490,218,20,100);
	bin3=new Bin(710,218,20,100);
	Engine.run(engine);
  
}


function draw() {
	background("white");
    rectMode(CENTER);
    background(0);
	paper1.display();
	ground.display();
	bin1.display();
	bin2.display();
	bin3.display();
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:2,y:-10});
	}
    drawSprites();
}
