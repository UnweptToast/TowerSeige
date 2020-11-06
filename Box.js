class Box {
    constructor(x, y, width, height) {
        var options ={restitution: 0.4, density: 0.08, friction: 10.0, frictionAir: 0.001, restitution: 0.7};
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    delete() {
        var angl = this.body.angle;
        push();
        World.remove(world, this.body);
        fill("white");
        strokeWeight(0);
        stroke("white");
        rotate(angl)
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
        pop();
        }
    display(Color) {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        fill(Color);
        rect(0, 0, this.width, this.height);
        pop();
    }
}