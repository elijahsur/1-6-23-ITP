const add = (a, b) => {
  if (a === 0) {
    return b
  } else {
    return 1 + add(a - 1, b)
  }
}

const multiply = (a, b) => {
  if (a === 0) {
    return 0
  } else {
    return b + multiply(a - 1, b)
  }
}

const double = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return 2 * double(a, b - 1)
  }
}

const triple = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return 3 * triple(a, b - 1)
  }
}

const power = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return power(a, b - 1)**2
  }
}