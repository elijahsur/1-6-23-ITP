////////////////////////////////////////////////////////////////
// Write your code here ...

// not tested but guessing it works
const factorial = (n) => {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

// sorta tested
const fibonacci = (n) => {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

// not tested but guessing it works
const sumSquares = (n) => {
  if (n === 0) {
    return 0
  } else {
    return n**2 + sumSquares(n - 1)
  }
}

const maximum = (ary) => {
  if (ary.length === 0) {
    return -Infinity
  } else {
    return Math.max(ary[0], maximum(ary.slice(1)))
  }
}

const treeMap = (tree, fnct) => {
  if (isLeaf(tree)) {
    return fnct(tree)
  } else {
    return { 'left': treeMap(tree.left, fnct), 'right': treeMap(tree.right, fnct) }
  }
}

const subPrimesBelow = (n) => {
  if (n === 0) {
    return 0
  } else {
    if (isPrime(n)) {
      return n + subPrimesBelow(n - 1)
    } else {
      return subPrimesBelow(n - 1)
    }
  }
}

// x
const nvwls = (str) => {
  if (str.length === 0) {
    return ''
  } else {
    if (str[0] ? 'a' : 'e') {
      return nvwls(str.slice(1))
    } else {
      return str[0] + nvwls(str.slice(1))
    }
  }
}

const caesar = (str, key) => {
  if (str.length === 0) {
    return ''
  } else {
    return rotate(str[0], key) + caesar(str.slice(1), key)
  }
}

const toList = (ary) => {
  if (ary.length === 0) {
    return null
  } else {
    return { 'first': ary[0], 'rest': toList(ary.slice(1)) }
  }
}

const map = (list, fnct) => {
  if (list.rest === null) {
    return { 'first': fnct(list.first), 'rest': null }
  } else {
    return { 'first': fnct(list.first), 'rest': map(list.rest, fnct) }
  }
}

////////////////////////////////////////////////////////////////
// Functions you will use in your code. No need to touch these
// or understand these beyond understanding what they do which
// is described in the appropriate questions.

const isLeaf = (o) => typeof o !== 'object' || (!(('left' in o) && ('right' in o)));

const isPrime = (n) => {
  const loop = (f) => f ** 2 > n || (n % f !== 0 && loop(f + 1));
  return n > 1 && loop(2);
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const mod = (n, m) => ((n % m) + m) % m;

const rotate = (char, places) => {
  const lower = char.toLowerCase();
  const i = alphabet.indexOf(lower);
  if (i === -1) {
    return char;
  } else {
    const rotated = alphabet[mod(i + places, alphabet.length)];
    return lower === char ? rotated : rotated.toUpperCase();
  }
}