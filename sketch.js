
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var roof,rope1,rope2,rope3,rope4,rope5;

// function preload()
// {
	
// }

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObj1 = new Bob(600,500,50);
bobObj2 = new Bob(500,500,50);
bobObj3 = new Bob(400,500,50);
bobObj4 = new Bob(700,500,50);
bobObj5 = new Bob(800,500,50);

roof = new Roof(600,150,600,25);

rope1 = new Rope(roof.body,bobObj1.body,0,0);
rope2 = new Rope(roof.body,bobObj2.body,-100,0);
rope3 = new Rope(roof.body,bobObj3.body,-200,0);
rope4 = new Rope(roof.body,bobObj4.body,100,0);
rope5 = new Rope(roof.body,bobObj5.body,200,0);

// rope2 = new Rope(bobObj2.body,{x:300,y:150});
// rope3 = new Rope(bobObj3.body,{x:200,y:150});
// rope4 = new Rope(bobObj4.body,{x:500,y:150});
// rope5 = new Rope(bobObj5.body,{x:600,y:150});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  roof.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
  textSize(25);
  fill("black")
  text("Try pressing one ARROW key at a time and observe how newton's cradle work.",100,100)
}
function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    Body.applyForce(bobObj3.body,bobObj3.body.position,{x:-400,y:-400});
  }

    if(keyCode === RIGHT_ARROW)
  {
    Body.applyForce(bobObj5.body,bobObj5.body.position,{x:400,y:-400});
  }
    if(keyCode === UP_ARROW)
  {
    Body.applyForce(bobObj3.body,bobObj3.body.position,{x:-400,y:-400});
        Body.applyForce(bobObj2.body,bobObj2.body.position,{x:-400,y:-400});

  }
      if(keyCode === DOWN_ARROW)
  {
    Body.applyForce(bobObj1.body,bobObj1.body.position,{x:400,y:-400});
        Body.applyForce(bobObj4.body,bobObj4.body.position,{x:400,y:-400});
                Body.applyForce(bobObj5.body,bobObj5.body.position,{x:400,y:-400});


  }
}


