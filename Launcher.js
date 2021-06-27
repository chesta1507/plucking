class Launcher
{
constructor(pointA, bodyB)
{
  var options={
          pointA:pointA,
          bodyB:bodyB,
          length:100,
          stiffness:0.004
}

this.pointA=pointA;
this.bodyB=bodyB;
this.launcher =Matter.Constraint.create(options);
World.add(world,this.launcher)


attach(body)
  this.launcher.bodyB=body;
  }



fly()
{
this.launcher.bodyB=null;
}



}
display()
{

    if(this.launcher.bodyB)
    {
      var pointA=this.launcher.pointA
      var pointB=this.launcher.bodyB.position
      stroke("white")
      strokeWeight(3);
      line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}

