class Drops{
    constructor(x, y) {
        var options = {
            'restitution':0.000001,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 4, options);
        this.radius = 4;
       // this.height = 4;
        World.add(world, this.body);
      }
      display(){
        push();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
      }
}