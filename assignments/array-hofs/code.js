const evens = (a) => a.filter((a) => a % 2 === 0)
const odds = (a) => a.filter((a) => a % -2||2 === 1)
const big = (a) => a.filter((a) => a > 100)
const names = (a) => a.map((a) => a.name)
const grades = (a) => a.map((a) => a.grade)
const pairs = (a) => a.map((a) => [a, a])
const averageGrade = (a) => a.flatMap((a) => a.grade).reduce((tot, a) => tot + a) / a.length
const flatpairs = (a) => a.flatMap((a) => [a, a])
const allEven = (a) => a.every((a) => a % 2 === 0)
const someEven = (a) => a.some((a) => a % 2 === 0)
const lengthOfNames = (a) => {
  let length = a.filter((n) => n[0].toUpperCase() === n[0])
  let done = length.map((a) => a.length)
  console.log(done)
  return done
  }
lengthOfNames(['Fred','Barney','car','Wilma','rock','Betty','dinosaur'])