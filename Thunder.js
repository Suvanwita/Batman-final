class Thunder{
  
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, 10,60, options);
        this.width = 10;
        this.height = 10;
        this.body.position.x=x;
        this.body.position.y=y;
        this.image=loadImage("Thunder.png")
        World.add(world, this.body);
      }
      display(){
        push();
        fill("white");
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
      hide(){
        this.body.hide();
      }
}