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
  return string[0] + string[2] + string[4]
}
const upDownLastCharacter = (string) => {
  return string[string.length - 1].toUpperCase() + string[string.length - 1].toLowerCase() 
}
const firstName = (string) => {
  return string.substring(0,string.indexOf(' '))
}
const everyOtherWrong = (string) => {
  let fin = ''
  for (let i = 0; i < string.length; i = i + 2) {
    fin = fin + string[i]
  }
  return fin
}
const lastName = (string) => {
  return string.substring(string.indexOf(' ') + 1, string.length)
}
const concatenate = (string1,string2) => {
  return string1+string2
}
const firstCharacter = (string) => {
  return string[0]
}
const lastCharacter = (string) => {
  return string[string.length - 1]
}
const allButFirst = (string) => {
  return string.substring(1,string.length)
}
const firstThree = (string) => {
  return string.substring(0,3)
}
const allButFirstAndList = (string) => {
  return string.substring(1,string.length -1)
}
const lastThree = (string) => {
  return string.substring(string.length - 3, string.length)
}