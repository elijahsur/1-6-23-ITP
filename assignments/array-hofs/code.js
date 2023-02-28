const evens = (a) => a.filter((a) => a % 2 === 0)
const odds = (a) => a.filter((a) => a % 2 === 1)
const big = (a) => a.filter((a) => a > 100)
const names = (a) => a.flatMap((a) => a["name"])
const grades = (a) => a.flatMap((a) => a["name"])
const pairs = (a) => a.map((a) => [a, a])
const averageGrade = (a) => a.flatMap((a) => a["grade"]).reduce((tot, a) => tot + a) / a.length
const flatpairs = (a) => 