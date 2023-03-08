const evens = (numberArray) => {
  let nArray = []
  for (let i = 0; i < numberArray.length; i++) {
    if (i % 2 === 0) {
      nArray.push(i)
    }
  }
  return nArray
}