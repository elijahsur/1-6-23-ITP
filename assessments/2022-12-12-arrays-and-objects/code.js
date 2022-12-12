const makeRow = () => {
  return ['','','']
}
const makeBoard = () => {
  return [
    ['','',''],
    ['','',''],
    ['','','']
  ]
}
const makeMove = (mark, row, column) => {
  return {mark: mark, row: row, column: column}
}
const placeMark = (array, object) => {
  array[object.row][object.column] = object.mark
}
const allTheSame = (array) => {
  return array[0][0] === array[0][1] === array[0][2]
}
const extractColumn = (array, index) => {
}
const recordMove = (array, move) => {
}
const rowForMove = (arrayofMove, index) => {
}
const placeMoves = (array1, array2) => {
}

let board = makeBoard();
  let move = makeMove('X', 1, 1);
  placeMark(board, move);