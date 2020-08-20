import React from 'react';
import BlackJack from './BlackJack/BlackJack.js';
import TicTacToe from './TicTacToe/TicTacToe.js';
import Flappy from './Flappy/Flappy.js';

const gamesDic = {"BlackJack":<BlackJack/>, "TicTacToe":<TicTacToe/>, "Flappy":<Flappy/>}

const GameContainer = ({match, location}) =>{
    return gamesDic[match.params.gameId]
}

export default GameContainer;