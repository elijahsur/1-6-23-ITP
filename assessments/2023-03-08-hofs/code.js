const evens = (numberArray) => {
  let nArray = []
  for (let i = 0; i < numberArray.length; i++) {
    if (i % 2 === 0) {
      nArray.push(i)
    }
  }
  return nArray
}

const shouty = (stringArray) => {
  let nArray = []
  for (let i = 0; i < stringArray.length; i++) {
    nArray.push(stringArray[i].toUpperCase())
  }
  return nArray
}

const shouty2 = (strings) => {
  return strings.map((s) => s.toUpperCase());
};