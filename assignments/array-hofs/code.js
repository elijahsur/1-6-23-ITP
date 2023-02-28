const evens = (a) => a.filter((a) => a % 2 === 0)
const odds = (a) => a.filter((a) => a % 2 === 1||-1)
const big = (a) => a.filter((a) => a > 100)
const names = (a) => a.flatMap((a) => a["name"])
const grades = (a) => a.flatMap((a) => a["grade"])
const pairs = (a) => a.map((a) => [a, a])
const averageGrade = (a) => a.flatMap((a) => a["grade"]).reduce((tot, a) => tot + a) / a.length
const flatpairs = (a) => a.flatMap((a) => [a, a])
const allEven = (a) => a.every((a) => a % 2 === 0)
const someEven = (a) => a.some((a) => a % 2 === 0)
const lengthOfNames = (a) => {
  let uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  a.filter((a) => a[0])
  console.log(a)
  a.map((a) => a.length)
  return a
}