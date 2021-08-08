class Particle{

    constructor(x,y){

        var options = {
            
            restitution: 1,
            friction: 10,
            density: 15

        }

        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0,0,204),random(251,51,153),random(255,255,0));

        World.add(world, this.body);

    }

    display(){

       // ellipseMode(RADIUS);
       // ellipse(0,0,this.r,this.r);

       var pos = this.body.position;
       var angle = this.body.angle;

       push();
       translate(pos.x, pos.y);
       rotate(angle);
       imageMode(CENTER);
       noStroke();
       this.color = color(random(0,255),random(0,255),random(0,255));
       ellipseMode(RADIUS);
       ellipse(0,0,this.r,this.r);
       pop();


    }

}