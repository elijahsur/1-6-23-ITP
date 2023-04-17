const add = (a, b) => {
  if (a === 0) {
    return 2
  } else {
    return b + add(a - 1, b + 1)
  }
}