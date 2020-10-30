import React from 'react';
import Bot from './Bot/Bot';
import './Project.css';
import SpeedReader from './SpeedReader/SpeedReader';
import MessageBoard from './MessageBoard/MessageBoard'

var projectDictionary = {"Bot":<Bot/>, "MessageBoard": <MessageBoard/>, "SpeedReader": <SpeedReader/>};
const GameContainer = ({match, location}) =>{
    return projectDictionary[match.params.projectId];
}

export default GameContainer;