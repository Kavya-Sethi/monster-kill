const Body=Matter.Body
const Engine= Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
const Constraint=Matter.Constraint
 
var engine,world;
var back,backImage;
var ground,hero,fly;

function preload(){
  backImage=loadImage("images/background.png");

}

function setup() {
  createCanvas(1365,650);
  back=createSprite(680,325);
  back.addImage("back",backImage);
  back.scale=0.45;
  engine=Engine.create();
  world=engine.world;
 ground=createSprite(300,windowHeight-250,1200,10);
 hero=new Hero(100,100);
 fly=new Fly(hero.body,{x:600,y:100});

}

function draw() {
  background("green")
  Engine.update(engine);
  drawSprites();
  fly.display();
  hero.display(); 
}

function mouseDragged(){
matther.body.setposition(hero.body,{x:mouse.X,y:mouse.Y});
}