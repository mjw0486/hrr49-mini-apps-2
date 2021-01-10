import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const layMines = function(boardSize) {
  const mines = new Set();
  while (mines.size < 10) {
    const randNum = Math.floor(Math.random() * 100);
    if (!mines.has(randNum)) {
      mines.add(randNum);
    }
  }
  const newGameBoard = [];
  for (let i = 0; i < boardSize; i += 1) {
    const row = [];
    for (let j = 0; j < boardSize; j += 1) {
      row.push(null)
    }
    newGameBoard.push(row);
  }
  for (const mine of mines) {
    const xAxis = mine % boardSize;
    const yAxis = Math.floor(mine / boardSize);
    newGameBoard[yAxis][xAxis] = -1
  }
  return newGameBoard;
}

export default layMines;