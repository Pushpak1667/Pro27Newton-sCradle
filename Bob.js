class Bob{

constructor(x,y,r){
  var options = {
   isStatic : false,
   restitution : 1,
   friction : 0.1,
   density : 1  
    }

  this.body = Bodies.circle(x,y, r, options);
  this.r = r;
  World.add(world, this.body);

}
display()
{
var bobpos = this.body.position
var angle = this.body.angle
push()
translate(bobpos.x,bobpos.y)
rotate(angle)
ellipseMode(RADIUS);
strokeWeight(3);
fill(255, 0, 255);

ellipse(0,0,this.r);
pop()



}

}