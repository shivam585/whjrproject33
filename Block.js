class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.04,
            friction :30,
            density:50,
            // set the isStatic property 
            isStatic : false
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage("greenbottle.png")

        World.add(world, this.body);

      }

      changeImage(){
this.image=loadImage("brokengreenbottle.png")

image(this.image,0,0,60,80)
//score=score+1
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        imageMode(CENTER)
        image(this.image,0,0,60,90)

        pop();
      }


}