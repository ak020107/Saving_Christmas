var santa, santaImg
var sack1, sack1Img
var present1, present1Img
var present2, present2Img
var present3, present3Img
var present4, present4Img
var present5, present1Img
var present6, present2Img
var present7, present3Img
var present8, present4Img
var present9, present1Img
var present10, present2Img
var present11, present3Img
var present12, present4Img
var present13, present1Img
var present14, present2Img
var present15, present3Img
var back, backImg
var grinch, grinchImg
var scrooge, scroogeImg
var score=0
var gameState="start"
var elf, elfImg
var village, villageImg
var text1, textImg
var edges
var red1, redImg
var e, eImg
var evil, evilImg
var lose1, lose1Img
var win, winImg
var w, wImg
function preload(){
  santaImg=loadImage("santa_claus_PNG9969.png")
  sack1Img=loadImage("christmas-eve-clipart-14.png")
  present1Img=loadImage("present 1.png")
  present2Img=loadImage("present 2.png")
  present3Img=loadImage("present 3.webp")
  present4Img=loadImage("present 4.png")
  backImg=loadImage("snowman.png")
  grinchImg=loadImage("grinch.png")
  scroogeImg=loadImage("Scrooge.png")
  elfImg=loadImage("elf.png")
  villageImg=loadImage("christmas.png")
  textImg=loadImage("text.png")
  redImg=loadImage("red1.png")
  eImg=loadImage("e.png")
  evilImg=loadImage("evil.png")
  lose1Img=loadImage("lose.png")
  winImg=loadImage("win.png")
  wImg=loadImage("w.png")
}

  function setup() {
  createCanvas(750, 1200);
    win=createSprite(375,600)
    win.addImage(winImg)
    win.visible=false
    w=createSprite(375,600)
    w.addImage(wImg)
    w.visible=false
    back=createSprite(375,600)
     back.addImage(backImg)
  back.scale=1
    back.visible=false
  red1=createSprite(200,200)
    red1.addImage(redImg)
    red1.scale=10
    red1.visible=false
   
    
 grinch=createSprite(300, 200)
  grinch.addImage(grinchImg)
  grinch.scale=.09
   grinch.velocityX=4
    grinch.velocityY=-4
 scrooge=createSprite(200, 200)
  scrooge.addImage(scroogeImg)
  scrooge.scale=.09
    
     scrooge.velocityX=-4
    scrooge.velocityY=4
  
village=createSprite(200,600)
  village.addImage(villageImg)
  village.scale=1
    village.visible=false
  elf=createSprite(200,1100)
  elf.addImage(elfImg)
  elf.scale=.3
    elf.visible=false
  santa=createSprite(600,1000)
  santa.addImage(santaImg)
  santa.scale=.3
    santa.visible=false
    scrooge.visible=false
    grinch.visible=false
     e=createSprite(350,1000)
    e.addImage(eImg)
    e.visible=false
    e.scale=.3
    evil=createSprite(350,200)
    evil.addImage(evilImg)
    evil.visible=false
    evil.scale=.5
    lose1=createSprite(350,600)
    lose1.addImage(lose1Img)
    lose1.visible=false
    
 
    text1=createSprite(200,950)
    text1.addImage(textImg)
  text1.visible=false
     present1=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
    present1.addImage(present1Img)
    present1.scale=.02
    present1.visible=false
     present2=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
    present2.addImage(present2Img)
    present2.scale=.02
    present2.visible=false
     present3=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
    present3.addImage(present3Img)
    present3.scale=.07
    present3.visible=false
     present4=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present4.addImage(present4Img)
  present4.scale=.02
    present4.visible=false
    present5=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present5.addImage(present1Img)
  present5.scale=.02
    present5.visible=false
     present6=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present6.addImage(present2Img)
  present6.scale=.02
    present6.visible=false
     present7=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present7.addImage(present3Img)
  present7.scale=.07
    present7.visible=false
     present8=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present8.addImage(present4Img)
  present8.scale=.02
    present8.visible=false
     present9=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present9.addImage(present1Img)
  present9.scale=.02
    present9.visible=false
     present10=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present10.addImage(present2Img)
  present10.scale=.02
    present10.visible=false
     present11=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present11.addImage(present3Img)
  present11.scale=.07
    present11.visible=false
       present12=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present12.addImage(present4Img)
  present12.scale=.02
    present12.visible=false
     present13=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present13.addImage(present1Img)
  present13.scale=.02
    present13.visible=false
     present14=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present14.addImage(present2Img)
  present14.scale=.02
    present14.visible=false
     present15=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present15.addImage(present3Img)
  present15.scale=.07
    present15.visible=false
   sack1=createSprite(santa.x+40,santa.y+30)
  sack1.addImage(sack1Img)
  sack1.scale=.01
    sack1.visible=false
    
  
}

function draw() {
  background(255);

  
  if(gameState==="start"){
    text1.visible=true
    santa.visible=true
    village.visible=true
    elf.visible=true
    e.visible=false
    evil.visible=false
    lose1.visible=false
    if(keyDown("space")){
      gameState="play" 
      santa.x=600
        santa.y=1000
      santa.velocityX=0
      santa.velocityY=0
    }
  }
    if(gameState==="play"){
          textSize(20)
   text("score:"+score, 500, 50)    
  text1.visible=false
    santa.scale=.1
    village.visible=false
    elf.visible=false
     grinch.visible=true
    scrooge.visible=true
      back.visible=true
 sack1.visible=true
  scrooge.visible=true
      grinch.visible=true
 present1.visible=true
      present2.visible=true
      present3.visible=true
      present4.visible=true
      present5.visible=true
      present6.visible=true
      present7.visible=true
      present8.visible=true
      present9.visible=true
      present10.visible=true
      present11.visible=true
      present12.visible=true
      present13.visible=true
      present14.visible=true
      present15.visible=true
       e.visible=false
    evil.visible=false
    lose1.visible=false
      red1.visible=false
        edges=createEdgeSprites()
      createEdgeSprites()
      if(scrooge.isTouching(edges[0])||scrooge.isTouching(edges[1])||scrooge.isTouching(edges[2])||scrooge.isTouching(edges[3])){
        scrooge.bounceOff(edges[0])
        scrooge.bounceOff(edges[1])
      scrooge.bounceOff(edges[2])
      scrooge.bounceOff(edges[3])
      }
      if(grinch.isTouching(edges[0])||grinch.isTouching(edges[1])||grinch.isTouching(edges[2])||grinch.isTouching(edges[3])){
        grinch.bounceOff(edges[0])
        grinch.bounceOff(edges[1])
      grinch.bounceOff(edges[2])
      grinch.bounceOff(edges[3])
      }
        if(santa.isTouching(edges[0])||santa.isTouching(edges[1])||santa.isTouching(edges[2])||santa.isTouching(edges[3])){
        santa.bounceOff(edges[0])
       santa.bounceOff(edges[1])
      santa.bounceOff(edges[2])
      santa.bounceOff(edges[3]) 
      }
       if(sack1.isTouching(edges[0])||sack1.isTouching(edges[1])||sack1.isTouching(edges[2])||sack1.isTouching(edges[3])){
        sack1.bounceOff(edges[0])
       sack1.bounceOff(edges[1])
      sack1.bounceOff(edges[2])
      sack1.bounceOff(edges[3]) 
      }
      sack1.x=santa.x+40
      sack1.y=santa.y+30

moveSanta()
   humbug()
      humbug1()
      p1()
       p2()
     p3()
     p4()
       p5()
       p6()
       p7()
      p8()
     p9()
     p10()
       p11()
       p12()
      p13()
       p14()
       p15()
      
      
}
  if(gameState==="win"){
    village.visible=false
    elf.visible=false
     grinch.visible=false
    scrooge.visible=false
      back.visible=false
 sack1.visible=false
  scrooge.visible=false
      grinch.visible=false
 present1.visible=false
      present2.visible=false
      present3.visible=false
      present4.visible=false
      present5.visible=false
      present6.visible=false
      present7.visible=false
      present8.visible=false
      present9.visible=false
      present10.visible=false
      present11.visible=false
      present12.visible=false
      present13.visible=false
      present14.visible=false
      present15.visible=false
       e.visible=false
    evil.visible=false
    lose1.visible=false
      red1.visible=false
    win.visible=true
    santa.visible=false
    win.scale=.5
    w.visible=true
  }
  if(gameState==="lose"){
   
    red1.visible=true
    santa.visible=false
    grinch.visible=false
    scrooge.visible=false
      back.visible=false
 sack1.visible=false
  scrooge.visible=false
      grinch.visible=false
 present1.visible=false
      present2.visible=false
      present3.visible=false
      present4.visible=false
      present5.visible=false
      present6.visible=false
      present7.visible=false
      present8.visible=false
      present9.visible=false
      present10.visible=false
      present11.visible=false
      present12.visible=false
      present13.visible=false
      present14.visible=false
      present15.visible=false
    e.visible=true
    evil.visible=true
    lose1.visible=true
     present1=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
    present1.addImage(present1Img)
    present1.scale=.02
    present1.visible=false
     present2=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
    present2.addImage(present2Img)
    present2.scale=.02
    present2.visible=false
     present3=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
    present3.addImage(present3Img)
    present3.scale=.07
    present3.visible=false
     present4=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present4.addImage(present4Img)
  present4.scale=.02
    present4.visible=false
    present5=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present5.addImage(present1Img)
  present5.scale=.02
    present5.visible=false
     present6=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present6.addImage(present2Img)
  present6.scale=.02
    present6.visible=false
     present7=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present7.addImage(present3Img)
  present7.scale=.07
    present7.visible=false
     present8=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present8.addImage(present4Img)
  present8.scale=.02
    present8.visible=false
     present9=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present9.addImage(present1Img)
  present9.scale=.02
    present9.visible=false
     present10=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present10.addImage(present2Img)
  present10.scale=.02
    present10.visible=false
     present11=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present11.addImage(present3Img)
  present11.scale=.07
    present11.visible=false
       present12=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present12.addImage(present4Img)
  present12.scale=.02
    present12.visible=false
     present13=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present13.addImage(present1Img)
  present13.scale=.02
    present13.visible=false
     present14=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present14.addImage(present2Img)
  present14.scale=.02
    present14.visible=false
     present15=createSprite(Math.round(random(100,700)),Math.round(random(100,1000)))
  present15.addImage(present3Img)
  present15.scale=.07
    present15.visible=false
     santa.x=600
        santa.y=1000
      santa.velocityX=0
      santa.velocityY=0
    santa.scale=0.3
    score=0
    grinch.x=300
    grinch.y=200
    scrooge.x=200
    scrooge.y=200
   restart()
  
  }
   pts()
  createEdgeSprites()
  drawSprites()
}

function moveSanta(){
  if(keyDown("w")){
    santa.velocityY=-3
    sack1.velocityY=-3
  }
  if(keyDown("a")){
    santa.velocityX=-3
    sack1.velocityX=-3
  }
  if(keyDown("d")){
    santa.velocityX=3
    sack1.velocityX=3
  }
  if(keyDown("s")){
    santa.velocityY=3
    sack1.velocityY=3
  }

}
function humbug(){
  if(santa.isTouching(grinch)){
    gameState="lose"
     santa.x=600
        santa.y=1000
    
}
}
function humbug1(){
  if(santa.isTouching(scrooge)){
    gameState="lose"
     santa.x=600
        santa.y=1000
    
}
}
function restart(){
  if(keyDown("r")){
    gameState="start"
     santa.x=600
        santa.y=1000
  }
}

function p1(){
  if(santa.isTouching(present1)){
    present1.destroy()
    score=score+1
  }
}
function p2(){
  if(santa.isTouching(present2)){
    present2.destroy()
    score=score+1
  }
}
function p3(){
  if(santa.isTouching(present3)){
    present3.destroy()
    score=score+1
  }
}
function p4(){
  if(santa.isTouching(present4)){
    present4.destroy()
    score=score+1
  }
}
function p5(){
  if(santa.isTouching(present5)){
    present5.destroy()
    score=score+1
  }
}
function p6(){
  if(santa.isTouching(present6)){
    present6.destroy()
    score=score+1
  }
}
function p7(){
  if(santa.isTouching(present7)){
    present7.destroy()
    score=score+1
  }
}
function p8(){
  if(santa.isTouching(present8)){
    present8.destroy()
    score=score+1
  }
}
function p9(){
  if(santa.isTouching(present9)){
    present9.destroy()
    score=score+1
  }
}
function p10(){
  if(santa.isTouching(present10)){
    present10.destroy()
    score=score+1
  }
}
function p11(){
  if(santa.isTouching(present11)){
    present11.destroy()
    score=score+1
  }
}
function p12(){
  if(santa.isTouching(present12)){
    present12.destroy()
    score=score+1
  }
}
function p13(){
  if(santa.isTouching(present13)){
    present13.destroy()
    score=score+1
  }
}
function p14(){
  if(santa.isTouching(present14)){
    present14.destroy()
    score=score+1
  }
}
function p15(){
  if(santa.isTouching(present15)){
    present15.destroy()
    score=score+1
  }
}
function pts(){
  if(score===15){
    gameState="win"
  }
}