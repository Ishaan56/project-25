class Paper{
    constructor(x,y,r){
        var options = {
          restitution : 0.3,
          friction : 0,
          density : 0.5,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;

        this.image = loadImage('paper.png')

        World.add(world,this.body)
        
    }
    display(){

     var pos = this.body.position;        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        //ellipse(0,0,this.radius,this.radius);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}