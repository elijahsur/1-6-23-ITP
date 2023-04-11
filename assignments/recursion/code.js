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
    return fibonacci(n - 1) + n
  }
}

const gcd = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return b - a % b
  }
}