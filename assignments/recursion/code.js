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
  } else {
    if (n === 1) {
      return 1
    } else {
      return fibonacci(n - 2) + fibonacci(n - 1)
    }
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
  if (a === []) {
    return 0
  } else {
    return a + sum(a.slice(a.length))
  }
}