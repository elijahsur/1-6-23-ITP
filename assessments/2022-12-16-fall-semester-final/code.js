////////////////////////////////////////////////////////////////////////
// Scroll to the bottom to where it says "Write your code here ..." to actually
// write your code. Just above that is a list of Math functions that you might
// find useful. Everything before that you can safely ignore--I am providing
// functions and other constants you may need to use in our code but nothing
// that you need to change even necessarily understand the internals of. You
// will however need to understand how to use these functions and constants as
// described in the questions.

const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

/*
 * Log the object via console.log.
 */
const log = (x) => { console.log(x); }

/*
 * Record an okay object.
 */
const recordOk = (x) => { log(`OK: ${x}`); }

/*
 * Record a not-okay object.
 */
const recordNotOk = (x) => { log(`NOT OK: ${x}`); }

/*
 * Record a meh object.
 */
const recordMeh = (x) => { log(`MEH: ${x}`); }

/*
 * This one is some particular dark magic. Definitely don't worry about
 * what it's doing.
 */
const hash = (s) => {
  return [...JSON.stringify(s)]
    .reduce((hash, c) => ((hash << 5) + hash) + c.codePointAt(0), 5381);
};

/*
 * An arbitrary predicate on numbers you will use in one function.
 */
const isLeet = (n) => n % 1337 === 0;

/*
 * Return a random number between 0, inclusive, and 10,000, exclusive.
 */
const random10k = () => rand(10_000);

/*
 * Return true if the argument is "okay". This implementation treats roughly
 * half of all possible values as okay and the other half as not okay. Which are
 * which is essentially random but is stable.
 */
const isOk = (x) => hash(JSON.stringify(x)) % 2 == 0;

/*
 * Return true if the argument is "meh".
 */
const isMeh = (x) => !isOk(x) && hash(JSON.stringify(x)) % 3 == 0;

/*
 * Record a pair.
 */
const pair = (a, b) => {
  log(`pair: ${a},${b}`);
};

////////////////////////////////////////////////////////////////////////
// For your reference, here are some functions and constants from Math
// that you might find useful

// Math.PI - a constant giving the closest approximation of π available
// Math.abs(n) - a function that computes the absolute value of its argument
// Math.ceil(n) - a function that rounds its argument up to the nearest integer
// Math.floor(n) - a function that rounds its argument down to the nearest integer
// Math.max(a, b) - a function that returns the largest of its arguments
// Math.min(a, b) - a function that returns the smallest of its arguments
// Math.sqrt(n) - a function that returns the square root of its argument

////////////////////////////////////////////////////////////////////////
// Write your code here ...

// code taken from the arrays and objects assignment, redone when the final was not working
const makeRow = () => {
  return ['','','']
}
const makeBoard = () => {
  return [
    makeRow(),
    makeRow(),
    makeRow(),
    ]
}
const makeMove = (xorO, row, column) => {
  return {mark: xorO, row, column}
}
const placeMark = (board, move) => {
  board[move.row][move.column] = move.mark
}
const allTheSame = (array) => {
  return array[0] === array[1] && array[1] === array[2]
}
const extractColumn = (board, index) => {
  let extract = []
  for (let i = 0; i < 3; i++) {
    extract.push(board[i][index])
  }
  return extract
}
const recordMove = (array, move) => {
  array.push(move)
}
const rowForMove = (moveobjects, index) => {
  return moves[index].row
}
//
const totalEggs = (nHardBoiled, nSoftBoiled) => {
  return nHardBoiled + nSoftBoiled
}
const chocolatesPerPerson = (nChocolates, nPeople) => {
  return Math.floor(nChocolates / nPeople)
}
const extraChocolates = (nChocolates, nPeople) => {
  return nChocolates % nPeople
}
const leftOut = (nChocolates, nPeople) => {
  if (nChocolates < nPeople) {
    return nPeople - nChocolates
  } else {return 0}
}
const probabilityAllHeads = (coinflipped) => {
  return 1 / (2**coinflipped)
}
//
const fireAlarm = (pulled, smoke, planned) => {
  return pulled || smoke || planned
}
const canBePresident = (age, citizen, years) => {
  return age >= 35 && citizen && years >= 14
}
const willSeeTweet =  (followed, retweeted, blocked) => {
  return followed || retweeted && !blocked
}
const needHeavyCoat = (goingOutside, somewhereCold) => {
  return goingOutside && somewhereCold
}
const needSunscreen = (goingToBeach, goingSkiing) => {
  return goingToBeach || goingSkiing
}
//
const firstFewEveryOther = (string) => {
  return string[0] + string[2] + string[4]
}
const firstHalf = (string) => {
  return string.substring(0,string.length/2)
}
const secondHalf = (string) => {
  return string.substring(string.length/2,string.length)
}
const swapFrontAndBack = (string) => {
  return secondHalf(string) + firstHalf(string) 
}
const upDown = (string) => {
  return string.toUpperCase() + string.toLowerCase()
}
//
const firstOk = (arg) => {
  for (let i = 0; i < arg; i++) {
    if (isOk(arg)) {
      return i
    }
  }
}
const timeToLeet = () => {
  for (let i = 0; i < i + 1; i++) {
    if (random10k() === isLeet()) {
      return i
    }
  }
}
const classify = (arg) => {
  if (isOk(arg)) {
    recordOk(arg)
  } else {
    recordNotOk(arg)
  }
}
const threewayClassify = (arg) => {
return isOk(arg) || isMeh(arg) || isNotOk(arg)
}
const sumOfSquares = (arg) => {
  let final = 0
  for (let i = 0; i < arg; i++) {
    final = final + i**2
  }
  return final
}
//
const totalWithTip = (object, number) => {
  return {subtotal: object.subtotal, tip: object.subtotal*number, total: object.subtotal + object.subtotal*number}
}
const higherPaid = (employee1, employee2) => {
  if (employee1.salary > employee2.salary) {
    return employee1
  } else {return employee2}
}
const isWinner = (object) => {
  return object.score > 100
}