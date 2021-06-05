class Wire {
 constructor(bodyA,pointB){

  var options = {
      bodyA : bodyA
      , pointB : pointB,
       stiffness : 0.04,
     length : 10,



  }
  this.pointB = pointB;
  this.wire = Constraint.create(options);
  World.add(world,this.wire);

 }
release(){
  this.wire.bodyA = null;
}
 display(){
if(this.wire.bodyA){
  

  strokeWeight(4);
  line(this.wire.bodyA.position.x,this.wire.bodyA.position.y,this.pointB.x, this.pointB.y);
  
   }
}
}