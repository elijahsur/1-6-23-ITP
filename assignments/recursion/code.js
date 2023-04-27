const factorial = (n) => {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

const triangular = (n) => {
  if (n === 0) {
    return 0
  } else {
    return n + triangular(n - 1)
  }
}

const fibonacci = (n) => {
  if (n === 0) {
    return 0
  } else if (n === 1) {
      return 1
    } else {
      return fibonacci(n - 2) + fibonacci(n - 1)
    }
  }


const gcd = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return gcd(b, a % b)
  }
}

const sum = (a) => {
  if (a.length === 0) {
    return 0
  } else {
    return a[0] + sum(a.slice(1))
  }
}

const search = (a, v) => {
  if (a.length === 0) {
    return false;
  } else {
    if (a[0] === v) {
      return true
    } else {
      return search(a.slice(1), v)
    }
  }
}

const reverseString = (s) => {
  if (s.length === 0) {
    return s
  } else {
    return reverseString(s.substring(1, s.length)) + s[0]
  }
}

const treeMap = (t, f) => {
  if (isLeaf(t)) {
    return f(t)
  } else {
    return { 'left': treeMap(t.left, f), 'right': treeMap(t.right, f) }
  }
}

const change = (amt, coins) => {
  if (amt < 0 || coins.length === 0) {
    return 0
  } else {
    if (amt === 0) {
      return 1
    } else {
      return change(amt - coins[0], coins) + change(amt, coins.slice(1))
    }
  }
}