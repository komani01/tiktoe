import React, { useState } from 'react';
import Board from './Board';
import { caculateWinner } from '../../helper';
import './GameStyles.css';
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));

    const [xIsNext, setXIsNext] = useState(true);

    const winner = caculateWinner(board);

    const handleClick = (index) => {
        //Clone mang goc
        const boardCopy = [...board];

        //Neu co ng chien thang or nhan trung nut
        if (winner || boardCopy[index]) return;

        //Tai vi tri nhan vao -
        boardCopy[index] = xIsNext ? 'X' : 'O';

        setBoard(boardCopy);

        //Set vi tri nhan tiep theo
        setXIsNext(!xIsNext);
    };

    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    };
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            {winner && <div className="game-winner">Winner is {winner}</div>}
            <button className="game-reset" onClick={handleResetGame}>
                Reset Game
            </button>
        </div>
    );
};

export default Game;
