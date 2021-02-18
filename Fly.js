class Fly{
constructor(body1,point1){
var  options={
bodyA:body1,
pointB:point1,
length:250,
stiffness:1
}
this.rope=Constraint.create(options)
World.add(world,this.rope)
}

display(){
    var p1=this.rope.bodyA.position;
    var p2=this.rope.pointB;

    line(p1.x,p1.y,p2.x,p2.y)
}}