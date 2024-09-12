class Camera{
  constructor(world){
    this.pos = createVector()
    this.zoom = 100;
    this.maxZoom = 200;
    this.minZoom = 30;
    this.moveOffset = 60;
    this.dim = {
      width: windowWidth / 1 * this.zoom,
      height: windowHeight / 1 * this.zoom,
    }
    this.world = world;
    this.elements = [];
    this.focus = null;
    this.renderDistance = {
      width: this.dim.width + 500,
      height: this.dim.height + 500,
    }
  }

  addRenderable(renderable, focus = false){
    if(focus){
      this.elements.push(renderable);
      this.focus = this.elements[this.elements.length - 1];
    }else{
      this.elements.push(renderable)
    }
  }

  updatePosition(x, y){
    if(this.focus.pos.x >= this.pos.x + this.moveOffset){
      this.pos.x = -this.moveOffset + this.focus.pos.x;
    }
    else if(this.focus.pos.x < this.pos.x - this.moveOffset){
      this.pos.x = this.moveOffset + this.focus.pos.x;
    }

    if(this.focus.pos.y >= this.pos.y + this.moveOffset){
      this.pos.y = -this.moveOffset + this.focus.pos.y;
    }
    else if(this.focus.pos.y < this.pos.y - this.moveOffset){
      this.pos.y = this.moveOffset + this.focus.pos.y;
    }
  }

  updateZoom(targetZoom){
    if(targetZoom >= this.minZoom && targetZoom <= this.maxZoom){
      this.zoom = targetZoom;
    }else{
      if(targetZoom < this.minZoom){
        this.zoom = this.minZoom
      }else if(targetZoom > this.maxZoom){
        this.zoom = this.maxZoom
      }
    }

    this.dim.x = windowHeight / 1 * this.zoom;
    this.dim.y = windowHeight / 1 * this.zoom;
    //interpelate to target zoom
  }

  

  /**
   * checkRenderDistance(element)-> bool
   * take an element and check to see if the element
   * is within a render distance from the focused element
   */
  checkRenderDistance(element){
    if(element.pos.x < (this.pos.x + this.renderDistance.width / 2) && element.pos.x >= (this.pos.x - this.renderDistance.width / 2)){
      return true;
    }
  }

  update(){
    if(controlls.zoom_in){
      this.updateZoom(this.zoom + 1);
    }
    if(controlls.zoom_out){
      this.updateZoom(this.zoom - 1);
    }
    this.updatePosition(this.focus.pos.x, this.focus.pos.y);
  }

  render(){

    push();
      scale(this.zoom / 100);
      translate(-this.pos.x, -this.pos.y)
      for(let i = 0; i < this.world.elements.length; i++){
        if(this.checkRenderDistance(this.world.elements[i])){
          this.world.elements[i].render();
        }
      }
    
      this.debugRender();
    pop();
  }

  debugRender(){
    if(controlls.debug){
      noFill();
      strokeWeight(1);
      stroke(255,0,0);
      //render distance
      rect(this.pos.x, this.pos.y, this.renderDistance.width, this.renderDistance.height);
    }
  }


}