const getX = (object) => {
  return object['x']
}
const point = (x, y) => {
  return { "x": x, "y": y }
}
const emptyObject = () => {
  return {}
}
const distance = (pointa, pointb) => {
  return Math.sqrt((pointa['x'] - pointb['x']) ** 2 + (pointa['y'] - pointb['y']) ** 2)
}
const midpoint = (pointa, pointb) => {
  return { x: (pointa.x + pointb.x) / 2, y: (pointa.y + pointb.y) / 2 }
}
const sumSalaries = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i].salary
  }
  return total
}
const newHighScore = (currenths, array) => {
  let highscore = currenths;
  for (let i = 0; i < array.length; i++) {
    if (array[i].score > highscore) {
      highscore = array[i].score
    }
  }
  return highscore
}
const summarizeBooks = (books) => {
  let summary = { titles:[], pages:0}
  for (let i = 0; i < books.length; i++) {
    summary.titles.push(books[i].title)
    summary.pages = summary.pages + books[i].pages

  }
  return summary
}