class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.sling1, 200, 20);
        image(this.sling2, 175, 9);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(49,22,8);
            if(pointA.x < 180) {
                strokeWeight(7);
                line(pointA.x - 10, pointA.y, pointB.x - 10,pointB.y + 10);
                line(pointA.x - 10, pointA.y, pointB.x + 25,pointB.y + 20);
                pop();     
            } else {
                strokeWeight(3);
                line(pointA.x - 10, pointA.y, pointB.x - 10,pointB.y + 10);
                line(pointA.x - 10, pointA.y, pointB.x + 25,pointB.y + 20);   
                pop();   
            }
            //strokeWeight(4);
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    drawBack() {
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        image(this.sling3, pointA.x - 20, pointA.y - 10, 10, 20);
    }
}
    
}