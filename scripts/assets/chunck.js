class Chunck{
  constructor(chunckX, chunckY){
    this.dimentions = 1000;
    this.starCount = Math.floor(Math.random() * 100)
    this.pos = createVector(chunckX* this.dimentions,chunckY * this.dimentions)
    this.elements = [];
    for(var i = 0; i < this.starCount; i ++){
      this.addElement(new Star((Math.floor(Math.random()*this.dimentions)+this.pos.x- this.dimentions /2),(Math.floor(Math.random()*this.dimentions)+this.pos.y - this.dimentions/2)))
    }
  }
  addElement(element){
    this.elements.push(element)
  }

  update(){
    for(let i = 0; i < this.elements.length; i++){
      //this.elements[i].update();
    }
  }

  render(){
    this.debugRender();
    for(let i = 0; i < this.elements.length; i++){
      this.elements[i].render();
    }
  }

  debugRender(){
    if(controlls.debug){
      stroke(0,255,0);
      noFill();
      strokeWeight(1)
      rect(this.pos.x, this.pos.y, this.dimentions, this.dimentions);
    }
  }
}