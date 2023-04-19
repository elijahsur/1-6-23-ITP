const product = (ary) => {
  if (ary.length === 0) {
    return 1
  } else {
    return ary[0] * product(ary.slice(1))
  }
}