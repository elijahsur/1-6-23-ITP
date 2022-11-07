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
const distance = (point1,point2) => {
  return Math.sqrt((point1['x']-point2['x'])**2(+point1['y']-point2['y'])**2)
}