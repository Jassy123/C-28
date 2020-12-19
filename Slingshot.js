class Slingshot{
constructor(bodyA, pointB){
    var props={
        //our bodyA is our bird's body
        bodyA:bodyA,
        pointB:pointB,
        stiffness: 0.05,
        length: 10
    }
    this.pointB=pointB;
        this.sling=Constraint.create(props);
        World.add(world,this.sling);
}

fly(){
    this.sling.bodyA=null;
}

display(){
    if(this.sling.bodyA){
        var pointA= this.sling.bodyA.position;
        var pointB= this.pointB;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
}
}