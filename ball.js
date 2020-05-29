class ball {

 constructor(x,y){
   
    var options = {
      "restitution" : 0.8,
      "friction" : 0.3,
      "density" : 1.0,
    }

    this.body = Bodies.circle(x,y,20,20);
    this.width = 20;
    this.height = 20;

    World.add(word,this.body);

 }
     
    display(){
    var pos = this.body.position
    pos.x = mouseX;
    pos.y = mouseY;

    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    strokeWeight(3);
    stroke("red");
    fill("blue");

    rectMode(CENTER);

    circle(0,0,this.width,this.height);

                                                        pop();    

    }



}