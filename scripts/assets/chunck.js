class Chunck{
  constructor(offset){
    this.pos = createVector(offset.x, offset.y);
    this.elements = [];
    for(var i = 0; i < 100; i ++){
      this.addElement(new Star((Math.floor(Math.random()*1000)+this.pos.x),(Math.floor(Math.random()*1000)+this.pos.y)))
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