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

const isDescending = (ary) => {
  if (ary.length === 1) {
    return true
  } else if (ary[0] >= ary[1]) {
    return isDescending(ary.slice(1))
  } else {
    return false
  }
}

const sumNested = (aryN) => {
  if (isNumber(aryN)) {
    return aryN
  } else if (aryN.length === 0) {
    return 0
  } else {
    return sumNested(aryN[0]) + sumNested(aryN.slice(1))
  }
}

const searchNested = (ary, n) => {
  if (ary === n) {
    return true
  } else if (ary.length === 0) {
    return false
  } else if (ary[0] === n) {
    return true
  } else if (isNumber(ary)) {
    return false
  } else {return searchNested(ary.slice(1), n)}
}

const searchNested2 = (ary, n) => {
  if (isNumber(ary)) {
    if (ary === n) { return true } else {
      return searchNested(ary.slice(1), n)
    }
  } else {
    return searchNested(ary.slice(1), n)
  }
}