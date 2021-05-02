var canvas;
var database,playerCount;
var player,allPlayers;
var interface1
var quest
var obj
var gameState
var img1
function preload(){
 box = loadImage("CERT.png")
}
function setup(){
  database = firebase.database();
  canvas = createCanvas(1200,600);
  interface1 = new Interface()
  interface1.getState()
  interface1.start()

}


function draw(){
  background(rgb(100,200,0));
  box.visible = false;
  textSize(33);
  if(gameState == 1){

  if(playerCount>1)
    interface1.play();

  }
  drawSprites()
 
}
