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