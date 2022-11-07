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
  return Math.sqrt((pointa['x']-pointb['x'])(+pointa['y']-pointb['y']))
}