export const setBoardSize = (num) => {
  return {
    type: 'SETBOARDSIZE',
    payload: num
  };
};

export const createBoard = (board) => {
  return {
    type: "CREATEBOARD",
    payload: board
  };
};