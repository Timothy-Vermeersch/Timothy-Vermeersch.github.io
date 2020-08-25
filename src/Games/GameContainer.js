import React from 'react';
import BlackJack from './BlackJack/BlackJack.js';
import TicTacToe from './TicTacToe/TicTacToe.js';
import Flappy from './Flappy/Flappy.js';

const gamesDic = {"BlackJack":<BlackJack/>, "TicTacToe":<TicTacToe/>, "Flappy":<Flappy/>}

const GameContainer = ({match, location}) =>{
    if(Object.keys(gamesDic).includes(match.params.gameId)){
        return gamesDic[match.params.gameId];
    }
    return (
        <div id = "No-Game">
            <h1>Could not find game with name {match.params.gameId}</h1>
        </div>
    );
}

export default GameContainer;