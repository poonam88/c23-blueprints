const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;

var engine,world;
var box1;
var box2;
var box3;


function setup() {

  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    box1=new Box(200,200,50,50);
    box2=new Box(100,100,30,30);
    box3=new Box(50,50,10,10);
    
}

function draw() {
  background("green"); 
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display(); 
  
}