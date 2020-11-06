const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ball2, plat1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25, box26, box27, box28, box29, box30;
var strikerRadius = 30;
 
var tower1X = 450, tower1Y = 470, boxSide = 50;
var tower2X = 900, tower2Y = 370;

var gameState = "play";
var shotCounter = 2;

var rope, rope2;

var score = 0;

var strike = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  plat1 = new Platform(width/2, height/1.469, 300, 30);//1.46
  plat2 = new Platform(width/1.2, height/1.68, 300, 30);
  plat3 = new Platform(width/2, 0, width, 50);
  restartImage = loadImage("restart.png");
  //restart = createSprite(width/1.1, height - height/1.1);
  //restart.addImage(restartImage);
  //plat4 = new Platform(width/2, height, width, 50)
  ball = new Striker(width/7, plat1.body.position.y - 40, strikerRadius);
  rope = new chain(ball.body, {x: ball.body.position.x, y: ball.body.position.y}, 0.2, 10);
  tower1X = plat1.body.position.x - 100;
  tower1Y = plat1.body.position.y - 30;
  tower2X = plat2.body.position.x - 100;
  tower2Y = plat2.body.position.y - 30
  tower1();
  tower2();

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

      console.log(windowWidth + " ," + windowHeight);

}
//35, 200 x -- 350, 500 y
function draw() {
  background(240);
  Engine.update(engine);
  //console.log(ball.body);
  Body.setStatic(ball.body, false);

      b1.x = box1.body.position.x; b1.y = box1.body.position.y;
      b2.x = box2.body.position.x; b2.y = box2.body.position.y;
      b3.x = box3.body.position.x; b3.y = box3.body.position.y;
      b4.x = box4.body.position.x; b4.y = box4.body.position.y;
      b5.x = box5.body.position.x; b5.y = box5.body.position.y;
      b6.x = box6.body.position.x; b6.y = box6.body.position.y;
      b7.x = box7.body.position.x; b7.y = box7.body.position.y;
      b8.x = box8.body.position.x; b8.y = box8.body.position.y;
      b9.x = box9.body.position.x; b9.y = box9.body.position.y;
      b10.x = box10.body.position.x; b10.y = box10.body.position.y;
      b11.x = box11.body.position.x; b11.y = box11.body.position.y;
      b12.x = box12.body.position.x; b12.y = box12.body.position.y;
      b13.x = box13.body.position.x; b13.y = box13.body.position.y;
      b14.x = box14.body.position.x; b14.y = box14.body.position.y;
      b15.x = box15.body.position.x; b15.y = box15.body.position.y;
      b16.x = box16.body.position.x; b16.y = box16.body.position.y;
      b17.x = box17.body.position.x; b17.y = box17.body.position.y;
      b18.x = box18.body.position.x; b18.y = box18.body.position.y;
      b19.x = box19.body.position.x; b19.y = box19.body.position.y;
      b20.x = box20.body.position.x; b20.y = box20.body.position.y;
      b21.x = box21.body.position.x; b21.y = box21.body.position.y;
      b22.x = box22.body.position.x; b22.y = box22.body.position.y;
      b23.x = box23.body.position.x; b23.y = box23.body.position.y;
      b24.x = box24.body.position.x; b24.y = box24.body.position.y;
      b25.x = box25.body.position.x; b25.y = box25.body.position.y;
      b26.x = box26.body.position.x; b26.y = box26.body.position.y;
      b27.x = box27.body.position.x; b27.y = box27.body.position.y;
      b28.x = box28.body.position.x; b28.y = box28.body.position.y;
      b29.x = box29.body.position.x; b29.y = box29.body.position.y;
      b30.x = box30.body.position.x; b30.y = box30.body.position.y;

      if(b1.y > windowHeight && b1.visible === true){
        b1.visible = false;
        score += 1;
      }
      if(b2.y > windowHeight && b2.visible === true){
        b2.visible = false;
        score += 1;
      }
      if(b3.y > windowHeight && b3.visible === true){
        b3.visible = false;
        score += 1;
      }
      if(b4.y > windowHeight && b4.visible === true){
        b4.visible = false;
        score += 1;
      }
      if(b5.y > windowHeight && b5.visible === true){
        b5.visible = false;
        score += 1;
      }
      if(b6.y > windowHeight && b6.visible === true){
        b6.visible = false;
        score += 1;
      }
      if(b7.y > windowHeight && b7.visible === true){
        b7.visible = false;
        score += 1;
      }
      if(b8.y > windowHeight && b8.visible === true){
        b8.visible = false;
        score += 1;
      }
      if(b9.y > windowHeight && b9.visible === true){
        b9.visible = false;
        score += 1;
      }
      if(b10.y > windowHeight && b10.visible === true){
        b10.visible = false;
        score += 1;
      }
      if(b11.y > windowHeight && b11.visible === true){
        b11.visible = false;
        score += 1;
      }
      if(b12.y > windowHeight && b12.visible === true){
        b12.visible = false;
        score += 1;
      }
      if(b13.y > windowHeight && b13.visible === true){
        b13.visible = false;
        score += 1;
      }
      if(b14.y > windowHeight && b14.visible === true){
        b14.visible = false;
        score += 1;
      }
      if(b15.y > windowHeight && b15.visible === true){
        b15.visible = false;
        score += 1;
      }
      if(b16.y > windowHeight && b16.visible === true){
        b16.visible = false;
        score += 1;
      }
      if(b18.y > windowHeight && b18.visible === true){
        b18.visible = false;
        score += 1;
      }
      if(b19.y > windowHeight && b19.visible === true){
        b19.visible = false;
        score += 1;
      }
      if(b20.y > windowHeight && b20.visible === true){
        b20.visible = false;
        score += 1;
      }
      if(b21.y > windowHeight && b21.visible === true){
        b21.visible = false;
        score += 1;
      }
      if(b22.y > windowHeight && b22.visible === true){
        b22.visible = false;
        score += 1;
      }
      if(b23.y > windowHeight && b23.visible === true){
        b23.visible = false;
        score += 1;
      }
      if(b24.y > windowHeight && b24.visible === true){
        b24.visible = false;
        score += 1;
      }
      if(b25.y > windowHeight && b25.visible === true){
        b25.visible = false;
        score += 1;
      }
      if(b26.y > windowHeight && b26.visible === true){
        b26.visible = false;
        score += 1;
      }
      if(b27.y > windowHeight && b27.visible === true){
        b27.visible = false;
        score += 1;
      }
      if(b28.y > windowHeight && b28.visible === true){
        b28.visible = false;
        score += 1;
      }
      if(b29.y > windowHeight && b29.visible === true){
        b29.visible = false;
        score += 1;
      }
      if(b30.y > windowHeight && b30.visible === true){
        b30.visible = false;
        score += 1;
      }
      if(b17.y > windowHeight && b17.visible === true){
        b17.visible = false;
        score += 1;
      }

      b1.shapeColor = 240;
      b2.shapeColor = 240;
      b3.shapeColor = 240;
      b4.shapeColor = 240;
      b5.shapeColor = 240;
      b6.shapeColor = 240;
      b7.shapeColor = 240;
      b8.shapeColor = 240;
      b9.shapeColor = 240;
      b10.shapeColor = 240;
      b11.shapeColor = 240;
      b12.shapeColor = 240;
      b13.shapeColor = 240;
      b14.shapeColor = 240;
      b15.shapeColor = 240;
      b16.shapeColor = 240;
      b17.shapeColor = 240;
      b18.shapeColor = 240;
      b19.shapeColor = 240;
      b20.shapeColor = 240;
      b21.shapeColor = 240;
      b22.shapeColor = 240;
      b23.shapeColor = 240;
      b24.shapeColor = 240;
      b25.shapeColor = 240;
      b26.shapeColor = 240;
      b27.shapeColor = 240;
      b28.shapeColor = 240;
      b29.shapeColor = 240;
      b30.shapeColor = 240;

      if(score === 30 || strike === true) {
        textSize(30);text("GOOD JOB!", width/2 - 50, 300);
        strike = true
      }


  push();
  textSize(20);
  fill("Black");
  text("Score: " + score, 50, 50);
  pop();
  
  drawSprites();
  plat1.display();
  plat2.display();
  rope.display();
  ball.display();
  tower1Display();
  tower2Display();
  keyPressed();
  //console.log(score);

}