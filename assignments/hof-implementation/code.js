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
  let nValue = initialValue
  for (let i = 0; i < array.length; i++) {
    nValue = fn(nValue, i) 
  }
  return nValue
};

const every = (predicate, array) => {
};

const some = (predicate, array) => {
};
