// N.B. Do not use the array methods of the same name to implement these functions!

const filter = (predicate, array) => {
  let nArray = []
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) { nArray.push(array[i]) }
  }
  return nArray
};

const map = (fn, array) => {
  let nArray = []
  for (let i = 0; i < array.length; i++) {
    nArray.push(fn(array[i]))
  }
  return nArray
};

const flatMap = (fn, array) => {
  let nArray = []
  for (let i = 1; i < array.length + 1; i++) {
    for (let j = 0; j < fn(i).length; j++) {
      nArray.push(fn(i)[j])
    }
  }
  return nArray
};

const reduce = (fn, initialValue, array) => {
  for (let i = 1; i < array.length + 1; i++) {
    initialValue = fn(initialValue, i) 
  }
  return initialValue
};

const every = (predicate, array) => {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
    } else {return false}
  }
  return true
};

const some = (predicate, array) => {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return true
    }
  }
  return false
};
