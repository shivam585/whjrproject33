const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var slingShot;
var rock_img;
var score=0

function preload(){
  rock_img=loadImage("carnivalarrow.png")
bowimg=loadImage("carnivalbow.png");

  b=loadImage("carnivalbackground.jpg")
  clownimage=loadImage("cartoonjoker.png")
  sealimage=loadImage("cartoonsealwithball.png")
}
function setup() {

  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground(450,650,2500,50);
  ground2 = new Ground(1400,400,50,1300);
 

  stand1 = new Stand(850,350,350,10);
  stand2 = new Stand(1100,150,350,10);

 // r=createSprite(100,100,30,30)
 
  //level one
  block1 = new Block(720,325,10,40);
  block2 = new Block(740,325,10,40);
  block3 = new Block(760,325,10,40);
  block4 = new Block(780,325,10,40);//
  block5 = new Block(800,325,10,40);
  block6 = new Block(820,325,10,40);
  block7 = new Block(840,325,10,40);
  //level two
  block8 = new Block(860,80,10,40);
  block9 = new Block(1130,80,10,40);
  block10 = new Block(1150,80,10,40);
  block11 = new Block(1170,80,10,40);
  block12 = new Block(1190,80,10,40);
  //level three
  block13 = new Block(1150,70,10,40);
  block14 = new Block(1170,70,10,40);
  block15 = new Block(1190,70,10,40);
  //top
  block16 = new Block(1170,60,10,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(1070,120,10,40);
  blocks2 = new Block(1090,120,10,40);
  blocks3 = new Block(1110,120,10,40);
  blocks4 = new Block(1130,120,10,40);
  blocks5 = new Block(1150,120,10,40);
  //level two
  blocks6 = new Block(1130,100,10,40);
  blocks7 = new Block(1150,100,10,40);
  blocks8 = new Block(1180,100,10,40);
  //top
  blocks9 = new Block(810,205,10,40);

  //ball holder with slings
  ball = Bodies.circle(50,300,20,{density:800});
  ball2 = Bodies.circle(50,300,20,{density:800})
  World.add(world,ball,ball2);

  slingShot = new Slingshot(this.ball,{x:250,y:150});
  slingShot2 = new Slingshot(this.ball,{x:250,y:350});
  r=createSprite(1200,500,30,30)
  r.addImage(clownimage)
  r.scale=0.6

  seal=createSprite(200,500,30,30)
  seal.addImage(sealimage)
  seal.scale=1

//score=0
}

function draw() {
  background(b); 
  text("score :"+score,400,100)
 
  imageMode(CENTER);
  //text(mouseX+","+mouseY,100,50)
  // write image() to display the polygon image 
  //use the same x and y position as ball
  image(rock_img,ball.position.x+50,ball.position.y,200,250)
  image(bowimg,270,250,200,300)


  stroke(0,0,0);
  fill("white");
  textSize(20);
  fill("lightyellow");
  text("Drag the arrow and hit the bottles",100,30);

  ground.display();
  ground2.display();


  stand1.display();
 stand2.display();

  strokeWeight(2);
  stroke(0,0,0);
  
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block3.display();

  block4.display();
  block5.display();
  block6.display();
  block7.display();

 
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");


  slingShot.display();
  slingShot2.display();
  r.display()
 seal.display()

  if(block1.body.position.y>450){
  block1.changeImage();
  }
  if(block2.body.position.y>450){
    block2.changeImage();
    }  

    if(block3.body.position.y>450){
      block3.changeImage();
      }
      if(block4.body.position.y>450){
        block4.changeImage();
        }
        if(block5.body.position.y>450){
          block5.changeImage();
          }
          if(block6.body.position.y>450){
            block6.changeImage();
            }
            if(block7.body.position.y>450){
              block7.changeImage();
              }
              if(block8.body.position.y>450){
                block8.changeImage();
                }
                if(block9.body.position.y>450){
                  block9.changeImage();
                  }
                  if(block10.body.position.y>450){
                    block10.changeImage();
                    }
                    if(block11.body.position.y>450){
                      block11.changeImage();
                      }
                      if(block12.body.position.y>450){
                        block12.changeImage();
                        } 
                        if(block13.body.position.y>450){
                          block13.changeImage();
                          }
                          if(block14.body.position.y>450){
                            block14.changeImage();
                            }
                            if(block15.body.position.y>450){
                              block15.changeImage();
                              }

                               if(block16.body.position.y>450){
              block16.changeImage();
              }


              

               if(blocks1.body.position.y===450){
                score=score+1
                }

                if(blocks2.body.position.y===450){
                  score=score+1                  }  
              
                  if(blocks3.body.position.y===450){
                    score=score+1                    }

                    if(blocks4.body.position.y===450){
                      score=score+1  
                      }
                      if(blocks5.body.position.y===450){
                        score=score+1  
                        }
                        if(blocks6.body.position.y===450){
                          score=score+1                            }
                          if(blocks7.body.position.y===450){
                            score=score+1  
                            }
                            if(blocks8.body.position.y===450){
                              score=score+1  
                              }
                              if(blocks9.body.position.y>450){
                                blocks9.changeImage();
                                }

                                if(block1.body.position.y>450){
                                  block1.changeImage();
                                  }
                                  if(block2.body.position.y>450){
                                    block2.changeImage();
                                    }  
                                
                                    if(block3.body.position.y>450){
                                      block3.changeImage();
                                      }
                                      if(block4.body.position.y>450){
                                        block4.changeImage();
                                        }
                                        if(block5.body.position.y>450){
                                          block5.changeImage();
                                          }
                                          if(block6.body.position.y>450){
                                            block6.changeImage();
                                            }
                                            if(block7.body.position.y>450){
                                              block7.changeImage();
                                              }
                                              if(block8.body.position.y>450){
                                                block8.changeImage();
                                                }
                                                if(block9.body.position.y>450){
                                                  block9.changeImage();
                                                  }
                                                  if(block10.body.position.y>450){
                                                    block10.changeImage();
                                                    }
                                                    if(block11.body.position.y>450){
                                                      block11.changeImage();
                                                      }
                                                      if(block12.body.position.y>450){
                                                        block12.changeImage();
                                                        } 
                                                        if(block13.body.position.y>450){
                                                          block13.changeImage();
                                                          }
                                                          if(block14.body.position.y>450){
                                                            block14.changeImage();
                                                            }
                                                            if(block15.body.position.y>450){
                                                              block15.changeImage();
                                                              }
                                
                                                               if(block16.body.position.y>450){
                                              block16.changeImage();
                                              }
                                
                                
                                               if(block16.body.position.y>450){
                                              block16.changeImage();
                                               }
                                
                                               if(blocks1.body.position.y>450){
                                                blocks1.changeImage();
                                                }
                                                if(blocks2.body.position.y>450){
                                                  blocks2.changeImage();
                                                  }  
                                              
                                                  if(blocks3.body.position.y>450){
                                                    blocks3.changeImage();
                                                    }
                                                    if(blocks4.body.position.y>450){
                                                      blocks4.changeImage();
                                                      }
                                                      if(blocks5.body.position.y>450){
                                                        blocks5.changeImage();
                                                        }
                                                        if(blocks6.body.position.y>450){
                                                          blocks6.changeImage();
                                                          }
                                                          if(blocks7.body.position.y>450){
                                                            blocks7.changeImage();
                                                            }
                                                            if(blocks8.body.position.y>450){
                                                              blocks8.changeImage();
                                                              }
                                                              if(blocks9.body.position.y>450){
                                                                blocks9.changeImage();
                                                                }




                                                              //  drawSprites()
                                                           
                                                                                                                            
                                                              

}





function mouseDragged(){
  if(ball.position.x<500){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});}}

function mouseReleased(){

  slingShot.fly();
    slingShot2.fly();
 

}

function keyPressed(){
  if(keyCode===32){
 // ball=Bodies.circle(50,300,20,{density:600});
  slingShot.attach(ball)
  slingShot2.attach(ball)
  
  }}