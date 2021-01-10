import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cells from './Cells.jsx';

const Rows = ({rowNumber}) => {
  const gameBoard = useSelector(state => state.gameBoard);
  return (
    <div className='rows'>
      {gameBoard[rowNumber].map((cell, index) => {
        return (
          <div className='cells'>
            <Cells key={index} rowNumber={rowNumber} cell={index}/>
          </div>
        )
      })}
    </div>

  );
};

export default Rows;
