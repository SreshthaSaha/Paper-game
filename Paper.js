class Paper{
   constructor(x,y,radiusX,radiusY){
    var options = {
      isStatic:false,
      restitution:1.5,
      friction:1.0,
      density:1.0
    }
     this.body = Bodies.ellipse(x,y,radiusX,radiusY,0,0,0,0,options);
     this.x = x;
     this.y = y;
     this.radiusX = radiusX;
     this.radiusY = radiusY;

     World.add(world,this.body)

     }
    display(){
    fill("pink");
    ellipse(this.x,this.y,this.radiusX,this.radiusY);
    }
}