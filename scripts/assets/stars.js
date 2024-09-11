class Star{
  constructor(x, y){
    this.pos = createVector(x, y);
  }

  update(){

  }
  render(){
    stroke(255);
    strokeWeight(2)
    point(this.pos.x, this.pos.y);
  }
}