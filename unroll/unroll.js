function unroll(squareArray) {
  const result = [];
  let topRow = 0,
    bottomRow = squareArray.length - 1,
    leftCol = 0,
    rightCol = squareArray[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    for (let i = leftCol; i <= rightCol; i++) {
      result.push(squareArray[topRow][i]);
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      result.push(squareArray[i][rightCol]);
    }
    rightCol--;

    if (topRow <= bottomRow) {
      for (let i = rightCol; i >= leftCol; i--) {
        result.push(squareArray[bottomRow][i]);
      }
      bottomRow--;
    }

    if (leftCol <= rightCol) {
      for (let i = bottomRow; i >= topRow; i--) {
        result.push(squareArray[i][leftCol]);
      }
      leftCol++;
    }
  }

  return result;
}


module.exports = unroll;
