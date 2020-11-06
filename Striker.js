class Striker {
    constructor(x, y, radius) {
        var options ={isStatic: true, restitution: 0.8, density: 0.5};
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.body.circleRadius);
        
    }
}