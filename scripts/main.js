let g;

let controlls = {
  move_up: false,
  move_down: false,
  move_left: false,
  move_right: false,
  zoom_in: false,
  zoom_out: false,
  debug: false,
  builder: false,
}
const state = {
  menu: "MENU",
  play: "PLAY",
  shipBuilder: "SHIP_BUILDER",
}

var currentState = state.play;



function setup(){
  
  g = new Game();
  createCanvas(windowWidth ,windowHeight);
}

function draw(){
  rectMode(CENTER)
  background(55);
  g.update();
  g.render();
}

function keyPressed(){
  if(keyCode == 87 || keyCode == UP_ARROW){
    controlls.move_up = true;
  }
  if(keyCode == 65 || keyCode == LEFT_ARROW){
    controlls.move_left = true;
  }
  if(keyCode == 83 || keyCode == DOWN_ARROW){
    controlls.move_down = true;
  }
  if(keyCode == 68 || keyCode == RIGHT_ARROW){
    controlls.move_right = true;
  }
  if(key == 'z'){
    controlls.zoom_in = true;
  }
  if(key == 'x'){
    controlls.zoom_out = true;
  }
  if(key == '`'){
    controlls.debug = !controlls.debug;
  }
  if(key == 'b'){
    currentState = state.shipBuilder;
  }
  if(key == 'g'){
    currentState = state.play;
  }
}

function keyReleased(){
  if(keyCode == 87 || keyCode == UP_ARROW){
    controlls.move_up = false;
  }
  if(keyCode == 65 || keyCode == LEFT_ARROW){
    controlls.move_left = false;
  }
  if(keyCode == 83 || keyCode == DOWN_ARROW){
    controlls.move_down = false;
  }
  if(keyCode == 68 || keyCode == RIGHT_ARROW){
    controlls.move_right = false;
  }
  if(key == 'z'){
    controlls.zoom_in = false;
  }
  if(key == 'x'){
    controlls.zoom_out = false;
  }
}