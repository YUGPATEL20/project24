class Ground{
    constructor(x,y,w,h){
        var option = {
            
        }
        
        this.body = Bodies.rectangle(x,y,w,h,option);
        this.width = w;
        this.height = h;
        world.sdd(world,this.body);

    }
    display(){
        var pos = this.body.postion;
        rectMode(CENTER);
        Fill("brown");
        rect(pos.x,pos.y,this.width,this.height)
        
    }
}