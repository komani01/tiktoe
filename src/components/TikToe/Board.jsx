import React, { useState } from 'react';
import Cell from './Cell';

const Board = (props) => {
    console.log(props);
    return (
        <div className="game-board">
            {props.cells.map((item, index) => (
                <Cell
                    key={index}
                    value={item}
                    onClick={() => props.onClick(index)}
                    className={item === 'X' ? 'isX' : item === 'O' ? 'isO' : ''}
                />
            ))}
        </div>
    );
};

export default Board;
