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
const extractColumn = () => {}