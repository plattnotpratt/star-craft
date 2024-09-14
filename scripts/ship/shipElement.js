class ShipElement{
    constructor(name, pos){
        this.name = name;
        this.dim = 10;
        this.north = null;
        this.south = null;
        this.east = null;
        this.west = null;
        this.pos = pos;
    }    

    action(){

    }

    update(){

    }

    render(){
        if(controlls.debug){
            this.debugRender()
        }
        fill(0,100,200);
        noStroke();
        rect(this.pos.x, this.pos.y, this.dim, this.dim);

    }

    debugRender(){

    }
}