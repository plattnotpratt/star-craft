class Game{

  constructor(movements){
    this.world = new World();
    this.character = new Character(movements);
    this.world.addElement(this.character);
    this.camera = new Camera();
    this.camera.addRenderable(this.world);
    this.camera.addRenderable(this.character, true);
  }

  update(){
    this.world.update();
    this.camera.update();
  }

  render(){
    push()
    translate(windowWidth/2, windowHeight/2)
    this.camera.render();
    pop()
  }
}

