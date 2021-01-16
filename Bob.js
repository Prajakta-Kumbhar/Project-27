class Bob
{
    constructor(xpos,ypos,radius)
    {
       var body_options = {isStatic: false, restitution: 1, friction: 0, density: 0.1}
       this.body = Bodies.circle(xpos,ypos,radius,body_options)
       this.radius = radius;
       this.diameter = radius*2;

        

       World.add(world, this.body);
    }

    display()
    {

      var position = this.body.position;

      ellipseMode(RADIUS);
      fill("pink")
      ellipse(position.x,position.y,this.radius );
    }
}