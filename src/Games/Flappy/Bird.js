import React from "react";
import bird from "./bird.png"; 

class Bird extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            height: props.height,

        }
        this.velocity = 0;
        this.gravity = -.15;
        this.positionInterval = setInterval(this.updatePosition,25)
        this.getHeight = props.movement;
        this.alive = true;
        document.addEventListener("keypress",this.flap);
    }

    flap = () =>{
        if(!this.alive){
            return null;
        }
        this.velocity += 3;
        if(this.velocity>2){
            this.velocity=2;
        }else if(this.velocity<-1){
            this.velocity = 1;
        }
    }

    updatePosition = () =>{
        var newHeight = this.getHeight(this.state.height, this.velocity);
        if(this.state.height != newHeight){
            this.velocity += this.gravity;
        }else{
            //this.velocity = 0;
        }
        if(newHeight + 2 == this.state.height){
            this.alive = false;
        }else{
            this.alive = true;
        }
        this.setState({height: newHeight});
    }
    
    

    render(){
        var rotation = this.velocity * -10;
        if(rotation>90){
            rotation = 90;
        }else if(rotation<-90){
            rotation = -90;
        }
        return(
            <img id = "bird" src = {bird} style = {{marginTop: (100-this.state.height) + "%", transform: "rotate(" + rotation + "deg)" }}/>
        );
    }
}

export default Bird;