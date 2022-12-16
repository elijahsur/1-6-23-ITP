// i removed the work, will redo all the questions :)
const makeRow = () => {
  return ['','','']
}
const makeBoard = () => {
  return [
    makeRow(),
    makeRow(),
    makeRow(),
    ]
}
const makeMove = (xorO, row, column) => {
  return {mark: xorO, row, column}
}
const placeMark = (board, move) => {
  board[move.row][move.column] = move.mark
}