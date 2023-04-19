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

const lucas = (n) => {
  if (n === 0) {
    return 2
  } else if (n === 1) {
    return 1
  } else {
    return lucas(n - 2) + lucas(n - 1)
  }
}

const isAscending = (ary) => {
  if (ary.length === 1) {
    return true
  } else if (ary[0] <= ary[1]) {
    return isAscending(ary.slice(1))
  } else {
    return false
    }
}