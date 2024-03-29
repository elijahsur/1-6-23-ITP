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
    return 1
  } else {
    return a * power(a, b - 1)
  }
}

const deleteXs = (str) => {
  if (str.length === 0) {
    return str
  } else {
    if (str[0] !== 'x') {
      return str[0] + deleteXs(str.slice(1))
    } else {
      return deleteXs(str.slice(1))
    }
  }
}

const countXs = (str) => {
  if (str.length === 0) {
    return 0
  } else {
    if (str[0] === 'x') {
      return 1 + countXs(str.slice(1))
    } else {
      return countXs(str.slice(1))
    }
  }
}

const maximum = (ary) => {
  if (ary.length === 0) {
    return -Infinity
  } else {
    if (ary[0] < ary[1]) {
      return maximum(ary.slice(1))
    } else {
      return Math.max(ary[0], maximum(ary.slice(1)))
    }
  }
}

const every = (ary, fnct) => {
  if (ary.length === 0) {
    return true
  } else {
    if (fnct(ary[0])) {
      return every(ary.slice(1), fnct)
    } else {
      return false
    }
  }
}

const some = (ary, fnct) => {
  if (ary.length === 0) {
    return false
  } else {
    if (fnct(ary[0])) {
      return true
    } else {
      return some(ary.slice(1), fnct)
    }
  }
}