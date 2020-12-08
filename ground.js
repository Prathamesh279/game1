class ground{
    constructor(x,y,r)
    {
        var options =
        {  isStatic:true,
           
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.rectangle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
        
        
    }
    display(){

        var groundpos = this.body.position;

        push()
        translate(groundpos.x, groundpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(225,0,225)
        ellipse(0,0,this.r,this.r);
        pop()   

    }
}