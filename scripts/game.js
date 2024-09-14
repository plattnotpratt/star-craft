class Game{

  constructor(){
    this.world = new World();
    this.ship = new Ship();
    this.shipBuilder = new ShipBuilder(this.ship);
    this.world.addElement(this.ship);
    this.camera = new Camera(this.world);
    this.camera.addRenderable(this.ship, true);
  }

  update(){
    this.world.update();
    this.camera.update();
  }

  render(){
    push()
    translate(windowWidth/2, windowHeight/2)
    switch(currentState){
      case state.play:
        this.camera.render();
        break;
      case state.shipBuilder:
        this.camera.render();
        this.shipBuilder.render();
      // case state.menu:
      //   this.menu.render();
    }
    pop()
  }
}

