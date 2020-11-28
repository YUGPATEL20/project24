class Paper{
    constructor(x,y){
        var option = {
        isStaic: false,
        resititutuion : 0.3,   
        friction : 0.5,
        density : 1.2,
        }
        this.x=x;
        this.y=y;
        this.radius=15;
        this.Bodies = circle(this.x,this.y,15,option);

        World.add(world,this.body);
        
    }

    dispaly(){
    var pos = this.body.position;
    var angle = this.body.angle;
    translate(pos.x , pos.y);
    DeviceRotationRate(angle);
    ellipseMode(RADIUS);
    fill("purple");
    ellipse(0 , 0 , this.radiusb , this.radius);
    pop();
}
}
    