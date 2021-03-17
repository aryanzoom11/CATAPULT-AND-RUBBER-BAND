class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage('sprites/sling1.png');
        this.sling2=loadImage('sprites/sling2.png');
        this.sling3=loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            push();
            if(pointA.x<220){//if the bird pulled back we gave it a stroke,line
                   strokeWeight(9) ;         
                stroke(48,22,8);
                line(pointA.x-20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            }
            else {
                strokeWeight(2);
                stroke(48,22,8);
                line(pointA.x+20, pointA.y, pointB.x, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y);
            
            }
            pop();
            
        }
        image(this.sling1,200,20);
            image(this.sling2,170,20);

    }
    
}