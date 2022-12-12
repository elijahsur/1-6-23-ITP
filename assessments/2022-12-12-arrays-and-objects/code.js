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
const makeMove = (xOrO, row, column) => {
  return {mark = xOrO, row = row, column = column}
}
const placeMark = (array, object) => {}
const allTheSame = (array) => {
  return array[1] === array[2] === array[3]
}