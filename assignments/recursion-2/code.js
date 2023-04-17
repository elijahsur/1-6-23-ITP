const add = (a, b) => {
  if (a === 1) {
    return b
  } else {
    return b + add(a - 1, b + 1)
  }
}