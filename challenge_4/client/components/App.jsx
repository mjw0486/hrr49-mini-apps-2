import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import '../actions/actions.js';
import layMines from '../helpers/layMines.js';
import createNewBoard from '../helpers/createNewBoard.js';
import { createBoard } from '../actions/actions.js';
import Rows from './Rows.jsx';

const App = () => {
  const dispatch = useDispatch();
  const boardSize = useSelector(state => state.boardSize);
  const gameBoard = useSelector(state => state.gameBoard);

  useEffect(() => {
    const mines = layMines(boardSize);
    const newGameBoard = createNewBoard(mines);
    dispatch(createBoard(newGameBoard))
    console.log(newGameBoard);
  },[])

  return (
    <div>
      <h1 id='header'>Minesweeper</h1>
      <div id='gameBoardGrid'>
        {gameBoard.map((row, index) => {
          return (
            <Rows key={index} rowNumber={index}/>
            )
          })}
      </div>
    </div>
  );
};

export default App;