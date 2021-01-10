const boardSizeReducer = (state = 10, action) => {
  switch (action.type) {
    case 'SETBOARDSIZE':
      return action.payload;
    default:
      return state;
  }
};

export default boardSizeReducer;