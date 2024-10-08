class Ship{
  constructor(){
    this.pos = createVector(0,0);
    this.acc = createVector(0,0);
    this.vel = createVector(0,0);
    this.moveSpeed = 10;
    this.acceleration = 0.5;
    this.shipBlueprint = new ShipElement('Core', this.pos)

  }

  addForce(force){
    this.acc.add(force)
  }

  update(){
    if(controlls.move_left){
      this.addForce(createVector(-this.acceleration, 0))
    }
    if(controlls.move_right){
      this.addForce(createVector(this.acceleration, 0))
    }
    if(controlls.move_up){
      this.addForce(createVector(0, -this.acceleration))
    }
    if(controlls.move_down){
      this.addForce(createVector(0, this.acceleration))
    }
    this.vel.add(this.acc);
    this.acc.mult(0)
    this.pos.add(this.vel);
    this.pos.mult(0.99)
  }

  render(){
    fill(255);
    noStroke();
    this.shipBlueprint.render();

  }
}