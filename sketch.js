var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var paper,side1,side2,side3;
var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload(){	
}
function setup() {
	createCanvas(1500, 500);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,440,40,40,{restitution:1.5,isStatic:false,density:1.2});
		
	ground = new Ground(660,470,1500,20,{isStatic:true});
	
	side1 = new Side(900,410,20,100);
	side2 = new Side(1010,450,200,20);
	side3 = new Side(1105,410,20,100);

	Engine.run(engine);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false}); 
}
function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();

  drawSprites(); 
}
function keyPressed(){
   if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.position,{x:85,y:-85})
	  //paper.velocityY = -20;
   }
     // paper.velocityY = paper.velocityY + 2;
}