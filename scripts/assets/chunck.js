class Chunck{
  constructor(){
    this.offset = createVector(0,0)
    this.dimentions = 1000;
    this.pos = createVector(this.offset.x, this.offset.y);
    this.elements = [];
    for(var i = 0; i < 100; i ++){
      this.addElement(new Star((Math.floor(Math.random()*this.dimentions)+this.pos.x),(Math.floor(Math.random()*this.dimentions)+this.pos.y)))
    }
  }
  addElement(element){
    this.elements.push(element)
  }

  update(){

  }

  render(){

  }
}