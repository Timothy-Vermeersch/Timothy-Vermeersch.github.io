import React from 'react';
import obstacle from "./obstacle.png";

class Obstacle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            position: 100,
        }
        this.sendHeight = props.callBack;
        this.height = props.height;
        this.obstacleInterval = setInterval(this.moveLeft,50);
        this.parentMove = props.movementFunc;
    }

    moveLeft = () =>{
        this.setState({position: this.parentMove(this.state.position)});
    }

    getPosition = () =>{
        return(this.state.position);
    }

    render(){
        if(this.state.position<-20){
            return(null)
        }
        if(this.state.position > 11 && this.state.position < 44 && this.sendHeight != null){
            this.sendHeight(100-this.height,this.state.position);
        }
        return(
            <div id = "Obstacle_Div">
            <img id = "obstacle" src = {obstacle} style = {{marginLeft:this.state.position + "%", top: this.height + "%"}}/>
            <img id = "obstacle" src = {obstacle} style = {{marginLeft:this.state.position + "%", bottom: 130 - this.height + "%"}}/>
            </div>
        );
    }
}

export default Obstacle;