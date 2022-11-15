const findFnord = (string) => {
  return string.indexOf('fnord')
}
const stringContains = (string1, string2) => {
  if (string1.indexOf(string2) != -1) {
    return true
  } else {
    return false
  }
}
const firstAndLast = (string) => {
  return string[0] + string[string.length - 1]
}
const swapFrontAndBack = (string) => {
  return string.substring(string.length / 2, string.length) + string.substring(0, string.length / 2)
}
const simplePigLatin = (string, number) => {
  return string.substring(number, string.length) + string.substring(0, number) + 'ay'
}
const isAllUpperCase = (string) => {
  if (string.toUpperCase() === string) {
    return true
  } else {
    return false
  }
}
const sameIgnoringCase = (string1, string2) => {
  if (string1.toLowerCase() === string2.toLowerCase()) {
    return true
  } else {
    return false
  }
}
const firstHalf = (string) => {
  return string.substring(0, string.length / 2)
}
const secondHalf = (string) => {
  return string.substring(string.length / 2, string.length)
}
const upDown = (string) => {
  return string.toUpperCase() + string.toLowerCase()
}
const everyOther = (string) => {
  let fin = ''
  for (let i = 0; i > string.length; i++) {
    fin = fin + string[i]
  }
  return fin
}