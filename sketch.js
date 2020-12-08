var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,leftbox,middlebox,rightbox 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
// packageSprite.x=packageBody.position.x
 //packageSprite.y=packageBody.position.y
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 leftbox=Bodies.rectangle(300,600,20,100,{isStatic:true})
World.add(world,leftbox)
 rightbox=Bodies.rectangle(500,600,20,100,{isStatic:true}) 
 World.add(world,rightbox)
 middlebox=Bodies.rectangle(400,650,210,20,{isStatic:true})
World.add(world,middlebox)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 // Matter.Body.setStatic(,false);
fill ("red")
 rect(leftbox.position.x,leftbox.position.y,20,100)
rect(rightbox.position.x,rightbox.position.y,20,100)
 rect(middlebox.position.x,middlebox.position.y,210,20)
  drawSprites();
 
}

function keyPressed() {
	//console.log("hello")
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



