import React from "react";
import Speech from "speak-tts";
import './SpeedReader.css';

class SpeedReader extends React.Component{
    constructor(props){
        super(props);
        var newSpeech = new Speech();
        newSpeech.init({voice: "Google UK English Male"}).then((data) => {
            // The "data" object contains the list of available voices and the voice synthesis params
            console.log("Speech is ready, voices are available", data)
        }).catch(e => {
            console.error("An error occured while initializing : ", e)
        })
        this.state = {
            text: "Hello",
            speech: newSpeech,
            playing: false,
            rate: 1,
        };
    }

    updateNewPost = (event) =>{
        this.setState({text: event.target.value});
    }

    toggleReading = () =>{
        var playing = this.state.playing;
        if(this.state.speech.speaking()){
            if(!playing){
                console.log("Playing")
                this.state.speech.resume()
                this.setState({playing: true})
            }else{
                this.state.speech.pause()
                this.setState({playing: false})
            }
        }else{
            this.state.speech.speak({
                text: this.state.text,
                queue: false,
                listeners: {
                    onstart: () =>{
                        this.setState({playing: true})  
                    },
                    onend: () => {
                        this.setState({playing: false})
                    }
                }
            })

        }
        
    }

    increaseSpeed = () =>{
        this.state.speech.setRate(this.state.speech.rate+0.25);
        this.setState({rate: this.state.speech.rate});
    }

    decreaseSpeed = () =>{
        this.state.speech.setRate(this.state.speech.rate-0.25);
        this.setState({rate: this.state.speech.rate});
    }

    render() {
        return (<div class = "SpeedReader">
            <textarea id = "speedTextBox" type = "text" onChange = {this.updateNewPost}/>
            <div id = "controls">
                <button id = "Button" onClick = {this.toggleReading}>{this.state.playing ? "Pause":"Play"}</button>
                <button id = "Button" onClick = {this.state.speech.cancel}>Restart</button>
                <button id = "Button" onClick = {this.increaseSpeed}>Faster</button>
                <button id = "Button" onClick = {this.decreaseSpeed}>Slower</button>
            </div>
            <h2 id = "rate">Speed: x{this.state.rate}</h2>
            </div>);
    }

}

export default SpeedReader;