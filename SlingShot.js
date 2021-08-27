class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 13
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

   

   
    fly(){
        this.sling.bodyA =null;
    }

    attach(body){
		this.sling.bodyA=body;
	}



    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(6);
           // write stroke() to set the color to red

           // Write line() to draw a line from pointA to pointB
           line(pointA.x,pointA.y,pointB.x,pointB.y)

        }
    }
    
}