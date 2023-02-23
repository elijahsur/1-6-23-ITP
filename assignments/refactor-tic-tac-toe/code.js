const boardSize = Math.min(width, height) * 0.75;
const boardLeft = (width - boardSize) / 2;
const boardTop = (height - boardSize) / 2;
const cellSize = boardSize / 3;
const fontSize = boardSize / 3;
const lineEndAdjustment = cellSize * 0.7;

const drawBoard = (x1, x2, y1, y2, boardTop, boardLeft) => {
  drawLine(x1, boardTop, x1, boardTop + boardSize, 'grey', 2);
  drawLine(x2, boardTop, x2, boardTop + boardSize, 'grey', 2);
  drawLine(boardLeft, y1, boardLeft + boardSize, y1, 'grey', 2);
  drawLine(boardLeft, y2, boardLeft + boardSize, y2, 'grey', 2);
}

const underThree = (x) => {
  return 0 <= x && x < 3
}

let move = 0;

const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const mark = (r, c) => {
  const marker = move % 2 === 0 ? 'X' : 'O';
  const x = boardLeft + c * cellSize + cellSize / 2;
  const y = boardTop + r * cellSize + cellSize / 2;
  const nudge = marker === 'O' ? cellSize / 9 : cellSize / 19;
  drawText(marker, x - (fontSize * 0.3 + nudge), y + fontSize * 0.3, 'black', fontSize);
  board[r][c] = marker;
  move++;
}

const extractLine = (lines, board, i) => {
  let r = lines[i][0][0];
  let c = lines[i][0][1];
  const m0 = board[r][c];
  r = lines[i][1][0];
  c = lines[i][1][1];
  const m1 = board[r][c];
  r = lines[i][2][0];
  c = lines[i][2][1];
  const m2 = board[r][c];
  return [m0, m1, m2]
}

const checkWinner = (lines, board) => {
  for (let i = 0; i < lines.length; i++) {
    let m = wackyFunction(lines, board, i)
    if (m[0] !== '' && m[0] === m[1] && m[0] === m[2]) {
      return lines[i]
    }
  }
  return null
}

const adjust = (firsts, seconds, adjustment, adjustees) => {
  if (firsts[0] === firsts[1] || seconds[0] !== seconds[1]) {
    const slope = y1 < y2 ? 1 : -1;
    return [
      adjustees[0] - (slope * adjustment),
      adjustees[1] + (slope * adjustment)
    ];
  }
}

const location = (boardLocation, cr12) => {
  return boardLocation + cr12 * cellSize + cellSize / 2
}

const lines = [
  // Rows
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],

  // Cols
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],

  // Diagonals
  [[0, 0], [1, 1], [2, 2]],
  [[2, 0], [1, 1], [0, 2]],
];

// Draw the board
const x1 = boardLeft + cellSize;
const x2 = boardLeft + 2 * cellSize;
const y1 = boardTop + cellSize;
const y2 = boardTop + 2 * cellSize;;
drawBoard(x1, x2, y1, y2, boardTop, boardLeft)

registerOnclick((x, y) => {

  let winner = checkWinner(lines, board)

  let r = Math.floor((y - boardTop) / cellSize);
  let c = Math.floor((x - boardLeft) / cellSize);

  // Only do anything if it's a legal move and the game isn't over.
  if (winner === null && underThree(r) && underThree(c) && board[r][c] === '') {

    // Draw the mark and record the move
    mark(r, c)

    // Check if there's a winner now
    winner = checkWinner(lines, board);
    if (winner !== null) {
      // Draw the line through three in a row
      const [r1, c1] = winner[0];
      const [r2, c2] = winner[winner.length - 1];

      let adjX1 = location(boardLeft, c1);
      let adjX2 = location(boardLeft, c2);
      let adjY1 = location(boardTop, r1);
      let adjY2 = location(boardTop, r2);

      let xAdjustments = adjust([y1, y2], [x1, x2], lineEndAdjustment, [adjX1, adjX2])


      let yAdjustments = adjust([x1, x2], [y1, y2], lineEndAdjustment, [adjY1, adjY2])

      drawLine(xAdjustments[0], yAdjustments[0], xAdjustments[1], yAdjustments[1], 'red', 15);
    }
  }
});