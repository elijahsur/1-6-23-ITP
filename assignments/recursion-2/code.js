const add = (a, b) => {
  if (b - a === 0) {
    return 0
  } else {
    return b + add(a, b + 1)
  }
}