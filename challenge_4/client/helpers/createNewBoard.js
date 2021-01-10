const createNewBoard = function(mines) {
  let currentIndex = 0;
  const newGameBoard = mines.slice();
  for (const rows of mines) {
    for (const col of rows) {
      const xAxis = currentIndex % mines.length;
      const yAxis = Math.floor(currentIndex / mines.length);
      if (col === null) {
        newGameBoard[yAxis][xAxis] = countNeighborMines(mines, currentIndex);
      }
      currentIndex += 1;
    }
  }
  return newGameBoard;
}

const countNeighborMines = function(mines, currentIndex) {
  const xAxis = currentIndex % mines.length;
  const yAxis = Math.floor(currentIndex / mines.length);
  let count = 0;
  if (xAxis < mines.length - 1) {
    if (mines[yAxis][xAxis + 1] === -1) {
      count += 1;
    }
  }
  if (xAxis > 0) {
    if (mines[yAxis][xAxis - 1] === -1) {
      count += 1;
    }
  }
  if (yAxis > 0) {
    if (mines[yAxis - 1][xAxis] === -1) {
      count += 1;
    }
  }
  if (yAxis < mines.length - 1) {
    if (mines[yAxis + 1][xAxis] === -1) {
      count += 1;
    }
  }
  if (xAxis < mines.length - 1 && yAxis < mines.length - 1) {
    if (mines[yAxis + 1][xAxis + 1] === -1) {
      count += 1;
    }
  }
  if (xAxis > 0 && yAxis < mines.length - 1) {
    if (mines[yAxis + 1][xAxis - 1] === -1) {
      count += 1;
    }
  }
  if (xAxis < mines.length - 1 && yAxis > 0) {
    if (mines[yAxis - 1][xAxis + 1] === -1) {
      count += 1;
    }
  }
  if (xAxis > 0 && yAxis > 0) {
    if (mines[yAxis - 1][xAxis - 1] === -1) {
      count += 1;
    }
  }
  return count;
}

export default createNewBoard;