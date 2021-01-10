import { combineReducers } from 'redux';
import boardSizeReducer from './boardSizeReducer.js';
import newBoardReducer from './newBoardReducer.js';

const allReducer = combineReducers({
  boardSize: boardSizeReducer,
  gameBoard: newBoardReducer
});

export default allReducer;