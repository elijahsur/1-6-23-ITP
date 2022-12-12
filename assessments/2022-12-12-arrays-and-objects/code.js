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
  return [mark, row, column]
}
const placeMark = (array, object) => {
  array[object.row[object.column]] = object.mark
}
const allTheSame = (array) => {
  return array[1] === array[2] === array[3]
}
let board = makeBoard();
let move = makeMove('x', 1, 1);
placeMark(board,move)