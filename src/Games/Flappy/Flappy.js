import Bird from "./Bird.js";
import React from "react";
import Obstacle from "./Obstacle.js";
import "./Flappy.css"

class Flappy extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            obstacles : [<Obstacle height = {Math.floor(Math.random()*55)+40} callBack = {this.updateClosestObstacle} movementFunc = {this.moveObstacles}/>],
            score: 0,
            gamePhase : 0,
            backgroundX: 0,
        }
        this.birdHeight = 50;
        this.obstacleInterval = null;
        this.backgroundInterval = null;
        document.addEventListener("keypress",this.startGame);
        document.addEventListener("mousedown", this.pause);
    }

    updateObstacles = () =>{
        var newObstacles = this.state.obstacles.slice();
        newObstacles.push(<Obstacle height = {Math.floor(Math.random()*55)+40} callBack = {this.updateClosestObstacle} movementFunc = {this.moveObstacles}/>);
        this.setState({obstacles:newObstacles});
    }

    moveBackground = () =>{
        this.setState({backgroundX: this.state.backgroundX - 1});
    }

    moveObstacles = (position) =>{
        if(this.state.gamePhase == 1){
            return position - 1;
        }else{
            return position;
        }
    }

    pause = () =>{
        if(this.state.gamePhase == 1){
            this.setState({gamePhase: 0});   
            clearInterval(this.backgroundInterval); 
            clearInterval(this.obstacleInterval);
        }
    }

    moveBird = (height, velocity) => {
        this.birdHeight = height;
        if(height<=15){
            clearInterval(this.backgroundInterval);
            if(this.state.gamePhase==0){
                return 50;
            }else{
                this.setState({gamePhase: 2});
                return height;
            }   
        }else if(height>=100){
            clearInterval(this.backgroundInterval);
            this.setState({gamePhase: 2});
            return (height - 2);  
        }else if(this.state.gamePhase == 1){
            return(height + velocity);
        }else if(this.state.gamePhase==2){
            return(height - 2);
        }  
        return height;
    }

    startGame = () =>{
        if(this.state.gamePhase==0){
            this.obstacleInterval = setInterval(this.updateObstacles,2500);
            this.backgroundInterval = setInterval(this.moveBackground, 100);
            this.setState({gamePhase:1});
        }else if(this.state.gamePhase==2 && this.birdHeight<=15 ){
            clearInterval(this.backgroundInterval); 
            clearInterval(this.obstacleInterval);
            this.setState({obstacles : [], score: 0, gamePhase : 0});
            setTimeout(this.updateObstacles, 200);
        }
    }


    updateClosestObstacle = (height,xPosition) =>{
        if(Math.abs(this.birdHeight-23-height)>9 && this.state.gamePhase == 1){
            clearInterval(this.backgroundInterval); 
            clearInterval(this.obstacleInterval);
            this.setState({gamePhase: 2});
            console.log(this.birdHeight, height);
        }else if(xPosition==30 && this.state.gamePhase == 1){
            this.setState({score:this.state.score +1});
        }
    }

    render(){
        return(
            <div id = "Flappy_Window" style = {{backgroundPositionX: this.state.backgroundX  + "px"}}>
                <Bird height = {50} movement = {this.moveBird}/>
                {this.state.obstacles}
                <h1 id = "Score">{this.state.gamePhase == 0 ? "Hit spacebar to flap": this.state.score}</h1>
            </div>
        )
    }
}

export default Flappy;