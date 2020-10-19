class TrashBottom{

    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("dustbingreen.png")
        this.body=Bodies.rectangle(600,640,100,20,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body)
    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y-42,85,85);
    }
}