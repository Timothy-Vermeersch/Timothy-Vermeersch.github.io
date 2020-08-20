import React from 'react';
import GameTab from './GameTab';
import "./GameList.css";

var Games = [
<GameTab name = "Tic-Tac-Toe" src = "tictactoe.jpg" path = "TicTacToe" description = "Take turns placing Xs and Os. Place three of your marks in a row to win."/>, 
<GameTab name = "Blackjack" src = "blackjack.jpg" path = "BlackJack" description = "Place bets against a dealer and pull cards to try and reach Blackjack(21). Make sure not to go over 21 or you automatically bust. "/>,
<GameTab name = "Flappy" src = "flappy.jpg" path = "Flappy" description = "Fly through the city collecting points for every building you pass."/>
]
function GamesList(){
    return(
        <div id = "Games-List">
            {Games[0]}
            {Games[1]}
            {Games[2]}
        </div>
    );
}

export default GamesList;