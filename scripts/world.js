class World{
  constructor(){
    this.chuncks = [];
    this.elements = [];
    this.buildWorld()
  }

  buildWorld(){
    for(let i = -10; i < 10; i ++){
      for(let k = -10; k < 10; k++){
        this.elements.push(new Chunck(i,k));
      }
    }
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
    // for(let i = 0; i < this.elements.length; i++){
    //   this.elements[i].render();
    // }
    // for(let i = 0; i < this.chuncks.length; i++){
    //   this.chuncks[i].render();
    // }
    this.debugRender()
  }

  debugRender(){
    if(controlls.debug){

    }
  }

}