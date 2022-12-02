const needHeavyCoat = (goingOutside, isCold) => {
  if (goingOutside === true) {
    if (isCold === true) {
      return true
    } else {return false}
  } else {return false}
}
const needSunscreen = (goingToBeach, goingSkiing) => {
  return goingToBeach || goingSkiing
}