const moves = [
  [+1, +2],
  [+1, -2],
  [-1, +2],
  [-1, -2],
  [+2, +1],
  [+2, -1],
  [-2, +1],
  [-2, -1],
];
function isOnChessBoard(x, y) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}
function knightMoves(startPos, endPos) {
  if (!isOnChessBoard(startPos[0], startPos[1])) {
    throw Error("Start position is not on the chessboard");
  }
  let queue = [];
  let visited = new Set();
  queue.push({ position: startPos, path: [startPos] });
  visited.add(startPos.toString());
  while (queue.length != 0) {
    const current = queue.shift();
    const [currentX, currentY] = current.position;
    for ([x, y] of moves) {
      const nextX = currentX + x;
      const nextY = currentY + y;
      if ((nextX === endPos[0], nextY === endPos[1])) {
        return [...current.path, [nextX, nextY]];
      }
      if (isOnChessBoard(nextX, nextY)) {
        if (!visited.has([nextX, nextY].toString)) {
          queue.push({
            position: [nextX, nextY],
            path: [...current.path, [nextX, nextY]],
          });
        }
        visited.add([nextX, nextY].toString());
      }
    }
  }
}
console.log(knightMoves([0, 0], [7, 7]));
