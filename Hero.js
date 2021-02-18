class Hero {
    constructor(x,y) {
      var options = {
          isStatic: false,
          density:0.04,
          restitution:0.8

      }
      this.r=50;
    
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("black");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };
