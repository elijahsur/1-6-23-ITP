const makeRow = () => {
  return ['','','']
}
const makeBoard = () => {
  return [
  [['','',''],['','',''],['','','']], 
  [['','',''],['','',''],['','','']], 
  [['','',''],['','',''],['','','']]
  ]
}
const makeMove = (xOrO, row, column) => {}
const placeMark = (array, object) => {}
const allTheSame = (array) => {
  if (array[1] === array[2] === array[3]) {
    return true
  } else {
    return false
  }
}