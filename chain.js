class chain {
    constructor(bodyA, pointB, stiffness, length) {
        this.bodyA = bodyA;
        this.pointB = pointB;
        var options ={bodyA: bodyA, pointB: pointB, stiffness: stiffness, length: length}
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    fly() {
        this.string.bodyA = null;
    }
    attach(body) {
        this.string.bodyA = body;
    }
    display() {
        if(this.string.bodyA) {
            var pointA = this.string.bodyA.position;
            var pointB = this.string.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y + 10);
        }
    }
}