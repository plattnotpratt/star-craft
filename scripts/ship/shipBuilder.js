class ShipBuilder{
    constructor(ship=null){
        if(!ship){
            this.core = new ShipElement("Core", createVector(0,0));
        }else{

        }
    }
    


    renderGrid(){
       
        let c = color(0,0,0);
        c.setAlpha(128)
        fill(c);
        rect(-10,-10, 440, 440)
        stroke(255);
        strokeWeight(1);
        noFill();
        for(let i = -10; i < 10; i++){
            for(let k = -10; k < 10; k++){
                rect(i*20, k*20, 20,20);
            }
        }
    }

    render(){
        this.renderGrid();
    }
}