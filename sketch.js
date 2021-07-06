var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var backgroundImage

var form, player, game;

function preload(){
  backgroundImage = loadImage('images/Marathon.jpg')
}


function setup(){
  canvas = createCanvas(displayWidth -20, displayHeight -200);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(gameState === 1){
    clear();
    game.play();
  }
}