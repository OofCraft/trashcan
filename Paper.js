class Paper{

    constructor(x,y,width,height){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(100,640,20,options)
        this.width=width;
        this.height=height;
        this.image = loadImage("paper.png");
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y, 35)
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,50,50);

    }
}