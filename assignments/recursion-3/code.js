const product = (ary) => {
  if (ary.length === 0) {
    return 1
  } else {
    return ary[0] * product(ary.slice(1))
  }
}

const sumSquares = (n) => {
  if (n === 0) {
    return 0
  } else {
    return n ** 2 + sumSquares(n - 1)
  }
}