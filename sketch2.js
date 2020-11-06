function mouseDragged(){
  if(gameState === "play" && (mouseX > width/7 - 150 && mouseX < width/7 + 150) && (mouseY > height/1.469 - 190 && mouseY < height/1.460 + 110)) {
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
if(mouseX < width/7 - 150) {
  Matter.Body.setPosition(ball.body, {x: width/7 - 150, y: ball.body.position.y});
}
if(mouseX > width/7 + 150) {
  Matter.Body.setPosition(ball.body, {x: width/7 + 150, y: ball.body.position.y})
}
if(mouseY < height/1.469 - 190) {
  Matter.Body.setPosition(ball.body, {x: ball.body.position.x, y: height/1.469 - 190})
}
if(mouseX > height/1.469 + 110) {
  Matter.Body.setPosition(ball.body, {x: ball.body.position.x, y: height/1.469 + 110})
}
}

  
  function mouseReleased(){
      rope.fly();
      gameState = "end"
  }
  
  function tower1() {
    box1 = new Box(tower1X,tower1Y,boxSide,boxSide);
    box2 = new Box(tower1X + 50,tower1Y,boxSide,boxSide);
    box3 = new Box(tower1X + 100,tower1Y,boxSide,boxSide);
    box4 = new Box(tower1X + 150,tower1Y,boxSide,boxSide);
    box5 = new Box(tower1X + 200,tower1Y,boxSide,boxSide);
    box6 = new Box(tower1X + 25,tower1Y - 50,boxSide,boxSide);
    box7 = new Box(tower1X + 75,tower1Y - 50,boxSide,boxSide);
    box8 = new Box(tower1X + 125,tower1Y - 50,boxSide,boxSide);
    box9 = new Box(tower1X + 175,tower1Y - 50,boxSide,boxSide);
    box10 = new Box(tower1X + 50 ,tower1Y - 100,boxSide,boxSide);
    box11 = new Box(tower1X + 100 ,tower1Y - 100,boxSide,boxSide);
    box12 = new Box(tower1X + 150 ,tower1Y - 100,boxSide,boxSide);
    box13 = new Box(tower1X + 75 ,tower1Y - 150,boxSide,boxSide);
    box14 = new Box(tower1X + 125 ,tower1Y - 150,boxSide,boxSide);
    box15 = new Box(tower1X + 100 ,tower1Y - 200,boxSide,boxSide);
  
  }
  
  function tower1Display() {
    box1.display("magenta");
    box2.display("magenta");
    box3.display("magenta");
    box4.display("magenta");
    box5.display("magenta");
    box6.display("blue");
    box7.display("blue");
    box8.display("blue");
    box9.display("blue");
    box10.display("red");
    box11.display("red");
    box12.display("red");
    box13.display("lightgreen");
    box14.display("lightgreen");
    box15.display("orange");
  
  }
  
  function tower2() {
    box16 = new Box(tower2X,tower2Y,boxSide,boxSide);
    box17 = new Box(tower2X + 50,tower2Y,boxSide,boxSide);
    box18 = new Box(tower2X + 100,tower2Y,boxSide,boxSide);
    box19 = new Box(tower2X + 150,tower2Y,boxSide,boxSide);
    box20 = new Box(tower2X + 200,tower2Y,boxSide,boxSide);
    box21 = new Box(tower2X + 25,tower2Y - 50,boxSide,boxSide);
    box22 = new Box(tower2X + 75,tower2Y - 50,boxSide,boxSide);
    box23 = new Box(tower2X + 125,tower2Y - 50,boxSide,boxSide);
    box24 = new Box(tower2X + 175,tower2Y - 50,boxSide,boxSide);
    box25 = new Box(tower2X + 50 ,tower2Y - 100,boxSide,boxSide);
    box26 = new Box(tower2X + 100 ,tower2Y - 100,boxSide,boxSide);
    box27 = new Box(tower2X + 150 ,tower2Y - 100,boxSide,boxSide);
    box28 = new Box(tower2X + 75 ,tower2Y - 150,boxSide,boxSide);
    box29 = new Box(tower2X + 125 ,tower2Y - 150,boxSide,boxSide);
    box30 = new Box(tower2X + 100 ,tower2Y - 200,boxSide,boxSide);
  
  }
  
  function tower2Display() {
    box16.display("magenta");
    box17.display("magenta");
    box18.display("magenta");
    box19.display("magenta");
    box20.display("magenta");
    box21.display("blue");
    box22.display("blue");
    box23.display("blue");
    box24.display("blue");
    box25.display("red");
    box26.display("red");
    box27.display("red");
    box28.display("lightgreen");
    box29.display("lightgreen");
    box30.display("orange");
  
  }
  
  function keyPressed() {
    if((keyCode === 114 || keyCode === 32) && shotCounter>0) {
      shotCounter = shotCounter - 1;
      rope.attach(ball.body);
      /*box1.delete();
      box2.delete();
      box3.delete();
      box4.delete();
      box5.delete();
      box6.delete();
      box7.delete();
      box8.delete();
      box9.delete();
      box10.delete();
      box11.delete();
      box12.delete();
      box13.delete();
      box14.delete();
      box15.delete();
      box16.delete();
      box17.delete();
      box18.delete();
      box19.delete();
      box20.delete();
      box21.delete();
      box22.delete();
      box23.delete();
      box24.delete();
      box25.delete();
      box26.delete();
      box27.delete();
      box28.delete();
      box29.delete();
      box30.delete();*/
  
      gameState = "play";
   
    }
  }

  function ballSprite() {
    bSprite = createSprite(ball.body.position.x, ball.body.position.y, ball.body.width, ball.body.height)
  }

  /*function boxSprites() {
      b1 =  createSprite(box1.body.position.x, box1.body.position.y - 10, box1.width, box1.height);
      b2 =  createSprite(box2.body.position.x, box2.body.position.y - 10, box2.width, box2.height);
      b3 =  createSprite(box3.body.position.x, box3.body.position.y - 10, box3.width, box3.height);
      b4 =  createSprite(box4.body.position.x, box4.body.position.y - 10, box4.width, box4.height);
      b5 =  createSprite(box5.body.position.x, box5.body.position.y - 10, box5.width, box5.height);
      b6 =  createSprite(box6.body.position.x, box6.body.position.y - 10, box6.width, box6.height);
      b7 =  createSprite(box7.body.position.x, box7.body.position.y - 10, box7.width, box7.height);
      b8 =  createSprite(box8.body.position.x, box8.body.position.y - 10, box8.width, box8.height);
      b9 =  createSprite(box9.body.position.x, box9.body.position.y - 10, box9.width, box9.height);
      b10 =  createSprite(box10.body.position.x, box10.body.position.y - 10, box10.width, box10.height);
      b11 =  createSprite(box11.body.position.x, box11.body.position.y - 10, box11.width, box11.height);
      b12 =  createSprite(box12.body.position.x, box12.body.position.y - 10, box12.width, box12.height);
      b13 =  createSprite(box13.body.position.x, box13.body.position.y - 10, box13.width, box13.height);
      b14 =  createSprite(box14.body.position.x, box14.body.position.y - 10, box14.width, box14.height);
      b15 =  createSprite(box15.body.position.x, box15.body.position.y - 10, box15.width, box15.height);
      b16 =  createSprite(box16.body.position.x, box16.body.position.y - 10, box16.width, box16.height);
      b17 =  createSprite(box17.body.position.x, box17.body.position.y - 10, box17.width, box17.height);
      b18 =  createSprite(box18.body.position.x, box18.body.position.y - 10, box18.width, box18.height);
      b19 =  createSprite(box19.body.position.x, box19.body.position.y - 10, box19.width, box19.height);
      b20 =  createSprite(box20.body.position.x, box20.body.position.y - 10, box20.width, box20.height);
      b21 =  createSprite(box21.body.position.x, box21.body.position.y - 10, box21.width, box21.height);
      b22 =  createSprite(box22.body.position.x, box22.body.position.y - 10, box22.width, box22.height);
      b23 =  createSprite(box23.body.position.x, box23.body.position.y - 10, box23.width, box23.height);
      b24 =  createSprite(box24.body.position.x, box24.body.position.y - 10, box24.width, box24.height);
      b25 =  createSprite(box25.body.position.x, box25.body.position.y - 10, box25.width, box25.height);
      b26 =  createSprite(box26.body.position.x, box26.body.position.y - 10, box26.width, box26.height);
      b27 =  createSprite(box27.body.position.x, box27.body.position.y - 10, box27.width, box27.height);
      b28 =  createSprite(box28.body.position.x, box28.body.position.y - 10, box28.width, box28.height);
      b29 =  createSprite(box29.body.position.x, box29.body.position.y - 10, box29.width, box29.height);
      b30 =  createSprite(box30.body.position.x, box30.body.position.y - 10, box30.width, box30.height);
  }*/

  /*function boxXY() {
      bs1.x = box1.body.position.x; bs1.y = box1.body.position.y;
      bs2.x = box2.body.position.x; bs2.y = box2.body.position.y;
      bs3.x = box3.body.position.x; bs3.y = box3.body.position.y;
      bs4.x = box4.body.position.x; bs4.y = box4.body.position.y;
      bs5.x = box5.body.position.x; bs5.y = box5.body.position.y;
      bs6.x = box6.body.position.x; bs6.y = box6.body.position.y;
      bs7.x = box7.body.position.x; bs7.y = box7.body.position.y;
      bs8.x = box8.body.position.x; bs8.y = box8.body.position.y;
      bs9.x = box9.body.position.x; bs9.y = box9.body.position.y;
      bs10.x = box10.body.position.x; bs10.y = box10.body.position.y;
      bs11.x = box11.body.position.x; bs11.y = box11.body.position.y;
      bs12.x = box12.body.position.x; bs12.y = box12.body.position.y;
      bs13.x = box13.body.position.x; bs13.y = box13.body.position.y;
      bs14.x = box14.body.position.x; bs14.y = box14.body.position.y;
      bs15.x = box15.body.position.x; bs15.y = box15.body.position.y;
      bs16.x = box16.body.position.x; bs16.y = box16.body.position.y;
      bs17.x = box17.body.position.x; bs17.y = box17.body.position.y;
      bs18.x = box18.body.position.x; bs18.y = box18.body.position.y;
      bs19.x = box19.body.position.x; bs19.y = box19.body.position.y;
      bs20.x = box20.body.position.x; bs20.y = box20.body.position.y;
      bs21.x = box21.body.position.x; bs21.y = box21.body.position.y;
      bs22.x = box22.body.position.x; bs22.y = box22.body.position.y;
      bs23.x = box23.body.position.x; bs23.y = box23.body.position.y;
      bs24.x = box24.body.position.x; bs24.y = box24.body.position.y;
      bs25.x = box25.body.position.x; bs25.y = box25.body.position.y;
      bs26.x = box26.body.position.x; bs26.y = box26.body.position.y;
      bs27.x = box27.body.position.x; bs27.y = box27.body.position.y;
      bs28.x = box28.body.position.x; bs28.y = box28.body.position.y;
      bs29.x = box29.body.position.x; bs29.y = box29.body.position.y;
      bs30.x = box30.body.position.x; bs30.y = box30.body.position.y;


  }*/
  
  /*function ballRadius() {
    fill("grey");
    textSize(20)
    text("Use arrow keys to increase or decrease the Striker Radius", 100, 20);
  
    fill("black")
    text("Striker Radius: " + strikerRadius, 300, 40);
  }
  
  function radiusChange() {
    if(keyWentDown("UP_ARROW")) {
      strikerRadius = strikerRadius + 5;
      ball.body.circleRadius = strikerRadius;
    }
    if(keyWentDown("DOWN_ARROW")) {
      strikerRadius = strikerRadius - 5;
      ball.body.circleRadius = strikerRadius;
    }
  }*/