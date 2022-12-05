const upToX = (string) => {
  return string.substring(0,string.indexOf('x'))
}
const charactersAround = (string, index) => {
  return string[index - 1] + string[index + 1]
}
const middle = (string) => {
  return string.substring(string.length*.25, string.length*.75)
}