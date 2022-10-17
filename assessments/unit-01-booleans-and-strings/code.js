/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (pulled,smoke,planned) => {
  return !pulled || !smoke || !planned
}

const canBePresident = (age,citizen,years) => {
  if (age >= 35, citizen = true, years >= 14) {
    return true
  } else {
    return false
  }
}

const firstAndLast = (string) => {
  return string[0]+string[string.length - 1]
}

const swapFrontAndBack = (string) => {
  return string.substring(string.length/2, string.length) + string.substring(0,string.length/2)
}

const simplePigLatin = (string,number) => {
  return string.substring(number-1,string.length)+string.substring(0,number)+'ay'
}