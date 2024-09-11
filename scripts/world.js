class World{
  constructor(){

    this.chuncks = [];
    this.elements = [];
    this.buildWorld(this.offset)
  }

  buildWorld(offset){
    this.chuncks.push(new Chunck())
  }
  addElement(element){
    this.elements.push(element)
  }

  update(){
    for(let i = 0; i < this.elements.length; i++){
      this.elements[i].update();
    }
    for(let i = 0; i < this.chuncks.length; i++){
      this.chuncks[i].update();
    }
  }

  render(){
    for(let i = 0; i < this.elements.length; i++){
      this.elements[i].render();
    }
    for(let i = 0; i < this.chuncks.length; i++){
      this.chuncks[i].update();
    }
  }

}