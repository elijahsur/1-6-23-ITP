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
    return multiply(a, b)
  }
}