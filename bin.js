class bin{
    constructor(x,y,width,height)
    {
        var options = 
        {  isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
    }
    display(){

        var binpos = this.body.position;

        push()
        translate(binpos.x, binpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(225,0,225)
        rect(0,0,this.width,this.height);
        pop()   

    }
}