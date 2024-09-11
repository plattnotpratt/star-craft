class Game{

  constructor(movements){
    this.world = new World();
    this.character = new Character(movements);
    this.world.addElement(this.character);
    this.camera = new Camera();
    this.camera.addRenderable(this.world);
    this.camera.addRenderable(this.character, true);
    for(var i = 0; i < 100; i ++){
      this.world.addElement(new Star((Math.floor(Math.random()*1000)),(Math.floor(Math.random()*1000))))
    }
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

