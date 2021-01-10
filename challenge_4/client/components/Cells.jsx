import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentBoard } from '../actions/actions.js';

const Cells = ({rowNumber, cell}) => {
  const dispatch = useDispatch();
  const gameBoard = useSelector(state => state.gameBoard);
  const [display, setDisplay] = useState(false);
  const handleClick = function(event) {
    setDisplay(true);
  }
  const handleMouseDown = function(event) {

  }
  if (display) {
    return (
      <div className='individual-cell' onMouseDown={handleMouseDown}onClick={handleClick}>
      {gameBoard[rowNumber][cell]}
    </div>
    )
  } else {
    return (
      <div className='individual-cell' onClick={handleClick}>
      {''}
    </div>
    )
  }
};

export default Cells;