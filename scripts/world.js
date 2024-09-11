class World{
  constructor(){
    this.chunks = [];
  }

  buildWorld(){
    
  }

  update(){
    for(let i = 0; i < this.elements.length; i++){
      this.elements[i].update();
    }
  }

  render(){
    for(let i = 0; i < this.elements.length; i++){
      this.elements[i].render();
    }
  }

}