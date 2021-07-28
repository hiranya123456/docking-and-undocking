var iss,issimg;
var spacecraft,sc1img,sc2img,sc3img,sc4img;
var spacebg,spacebgimg;
var hasDocked =false;



function preload(){

  issimg=loadImage("images/iss.png")

  sc1img=loadImage("images/spacecraft1.png")
  sc2img=loadImage("images/spacecraft2.png")
  sc3img=loadImage("images/spacecraft3.png")
  sc4img=loadImage("images/spacecraft4.png")

  spacebgimg=loadImage("images/spacebg.jpg")
}



function setup() {
  createCanvas(600,400);
  
  spacecraft=createSprite(285,250,20,40)
  spacecraft.addImage(sc1img);
  spacecraft.scale=0.15

  iss=createSprite(330,150,10,40)
  iss.addImage(issimg)
  iss.scale=0.5




}

function draw() {
  background(spacebgimg);  
if(!hasDocked){

  spacecraft.x=spacecraft.x+random (-1,1)

if(keyDown("RIGHT_ARROW")){

 spacecraft.addImage(sc4img)
 spacecraft.x=spacecraft.x+1

}
if(keyDown("LEFT_ARROW")){

  spacecraft.addImage(sc3img)
  spacecraft.x=spacecraft.x-1
 
 }
 if(keyDown("UP_ARROW")){

  
  spacecraft.y=spacecraft.y-1
 
 }
 if(keyDown("DOWN_ARROW")){

  spacecraft.addImage(sc2img)
  spacecraft.y=spacecraft.y+1
 
 }
}

if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
   hasDocked=true;

textSize(30)
fill ("yellow")
text("successfully docked",60,30)

 }










  drawSprites();
}