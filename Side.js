class Side{
  constructor(x,y,width,height){
      var option = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x,y,width,height);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
  }
  display(){
    rectMode(CENTER);
    fill("yellow");
    stroke("yellow");
    rect(this.x, this.y, this.width, this.height);
   }
}
