
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function setup(){
    createCanvas(800,700);

    engine = Engine.create(0);
    world = engine.world;

    //create the Bodies Here.
    paper = new Paper (20,500);
    ground = new Ground (400,680,100,10);
    bin1 = new Bin (600,670,100,10);
    bin2 = new Bin(550,652,10,50);
    bin3 = new Bin(650,652,10,500);

    Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();

  //bin center
  bin1.display();
  //bin left
  bin2.display();
  //bin right
  bin3.display();
  drawSprites();
}

function keypressed(){
  if(keycode === UP_ARROW){
   
  }
  if(keycode === DOWN_ARROW){
    Matter.Body.appylyForce(paper.body,paper.body.position,{x:0,y:2});
  }
}