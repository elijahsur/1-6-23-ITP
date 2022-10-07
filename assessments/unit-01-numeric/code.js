// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (npeople, nitems) => {
  return nitems%npeople
}

const areaOfCircle = (radius) => {
  return Math.PI*(radius**2)
}

const volumeOfCube = (length) => {
  return 
}

const populationGrowth = (population, growthrate) => {
  return population * growthrate
}

const earnedRunAverage = (earnedruns, innings) => {
  return earnedruns/innings*9
}

const valueOfJewels = (ndiamonds, nemeralds, vdiamond, vemerald) => {
  return ndiamonds*vdiamond+nemeralds*vemerald
}

const payWithOvertime = (nhours, hourlyrate, overtime) => {
  return nhours*hourlyrate+overtime
}

const firstClassPostage = (weight) => {
  return 60+Math.ceil(weight-1)*24
}

const weightOnJupiter = (weightearth) => {
  return weightearth*(EARTH_GRAVITY/JUPITER_GRAVITY)
}

const gravity = (mass1, mass2, distance) => {
  return (mass1*mass2/(distance**2))*G
}
