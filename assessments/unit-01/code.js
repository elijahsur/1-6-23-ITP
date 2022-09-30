// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
const averageWeight = (weight, amount) => {
  return weight / amount
}

const hypotenuse = (oneleg, twoleg) => {
  return Math.sqrt((oneleg * oneleg) + (twoleg * twoleg))
}

const canSleepIn = (weekday, vacation) => {
}

const moreThanTwiceAsLong = (onestring, twostring) => {
  if (onestring.count * 2 > twostring.count)
    return true
  if (onestring.count * 2 < twostring.count)
    return false
}

const firstHalf = (whole) => {
  return whole.substring(0, whole.length / 2)
}

const secondHalf = (whole) => {
  return whole.substring(whole.length / 2, whole.length)
}

const upDown = (whole) => {
  return whole.toUpperCase()+whole.toLowerCase()
}
