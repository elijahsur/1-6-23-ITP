const getX = (object) => {
  return object['x']
}
const point = (x,y) => {
 let object = {"x":x,"y":y}
 return object
}
const emptyObject = () => {
  let object = {}
  return object
}
const distance = (pointa,pointb) => {
  return Math.sqrt((pointa['x']-pointb['x'])**2 + (pointa['y']-pointb['y'])**2)
}
const midpoint = (pointa, pointb) => {
 let midpoint = {'x':(pointa.x+pointb.x)/2, 'y':(pointa.y+pointb.y)/2}
 return midpoint
}
const sumSalaries = (array) => {
  let total = 0;
 for (let i = 0; i < array.length; i++) {
   total = total + array[i].salary
 }
 return total
}
const newHighScore = (currenths,array) => {

}
