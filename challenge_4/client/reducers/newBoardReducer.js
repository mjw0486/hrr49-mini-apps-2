const newBoardReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATEBOARD':
      return action.payload;
    case 'DISPLAYTILE':
      const board = action.payload.board;
      const yAxis = action.payload.yAxis;
      const xAxis = action.payload.xAxis;
      board[yAxis][xAxis][1] = true;
      return board;
    default:
      return state;
  }
};

export default newBoardReducer;