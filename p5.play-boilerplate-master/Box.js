class Box
{
    constructor(x,y,width,height)
    {
        var options={
            'restitution':0.7,
            'density':0.4,
            'friction':0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display()
    {
       var pos=this.body.position;       //namespacing 
       rectMode(CENTER);
       rect(pos.x,pos.y,this.width,this.height);

    }
}

