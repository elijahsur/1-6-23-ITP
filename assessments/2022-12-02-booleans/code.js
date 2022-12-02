const needHeavyCoat = (goingOutside, isCold) => {
  if (goingOutside === true) {
    if (isCold === true) {
      return true
    } else { return false }
  } else { return false }
}
const needSunscreen = (goingToBeach, goingSkiing) => {
  return goingToBeach || goingSkiing
}
const needMittens = (goingOutside, isWarm) => {
  if (goingOutside === true) {
    if (isWarm === false) {
      return true
    } else { return false }
  } else { return false }
}
const isVenemous = (striped, blueHead) => {
  if (blueHead === true) {
    if (striped === false) {
      return false
    } else { return true }
  } else { return true }
}
const okaySpeed = (speedLimit, speedOfCar) => {
  return speedOfCar < speedLimit - 10 || speedOfCar > speedLimit + 10
}
const twiceAsExpensive = (price1, price2) => {
  return price1 > price2 * 2
}
const winningRecord = (numberOfWins, numberOfLosses, numberOfTies) => {
  return numberOfWins > (numberOfWins + numberOfLosses + numberOfTies) / 2
}
const isMagicNumber = (number) => {
  return number === 42 || number === 17
}
// of course 42 is a magic number, its the answer to life, the universe, everything!
