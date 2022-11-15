const findFnord = (string) => {
  return string.indexOf('fnord')
}
const stringContains = (string1,string2) => {
  if (string1.indexOf(string2) != -1) {
    return true
  }  else {
    return false
  }
}
const firstAndLast = (string) => {
  return string[0]+string[string.length]
}