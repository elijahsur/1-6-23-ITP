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
const allTheSame = (array) => {
  return array[0] === array[1] && array[1] === array[2]
}
const extractColumn = (board, index) => {
  let extract = []
  for (let i = 0; i < 3; i++) {
    extract.push(board[i][index])
  }
  return extract
}

let board =  [
     ['X', '', ''],
     ['O', '', ''],
     ['', 'X', '']
   ]