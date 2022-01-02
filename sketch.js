
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, treeImg, ground;
var engine, world;

function preload(){
  
  treeImg = loadImage("tree.png");

}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  image(treeImg, 350, 350, 40, 40);

  ground = new Ground(200, 370, 400, 20);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  

  drawSprites();

}

