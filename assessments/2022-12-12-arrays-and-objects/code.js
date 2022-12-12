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
const makeMove = (xOrO, nrow, ncolumn) => {
  return {mark = xOrO, row = nrow, column = ncolumn}
}
const placeMark = (array, object) => {}
const allTheSame = (array) => {
  return array[1] === array[2] === array[3]
}