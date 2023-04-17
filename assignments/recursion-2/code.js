const add = (a, b) => {
  if (a === 0) {
    return 0
  } else {
    return add(a - 1, b + 1)
  }
}