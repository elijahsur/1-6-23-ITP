const evens = (numberArray) => { // correct
  let nArray = []
  for (let i = 0; i < numberArray.length; i++) {
    if (i % 2 === 0) {
      nArray.push(i)
    }
  }
  return nArray
}

const shouty = (stringArray) => { // correct
  let nArray = []
  for (let i = 0; i < stringArray.length; i++) {
    nArray.push(stringArray[i].toUpperCase())
  }
  return nArray
}

const join = (stringArray, delimiter) => { // almost
  let joined = []
  for (let i = 0; i < stringArray.length; i++) {
    if (joined === null) {
      joined = stringArray[i]
    } else {
      joined = joined + stringArray[i] + delimiter
    }
  }
  return joined
}

const allSiblings = (studentArray) => { // pattern
  let nArray = []
  for (let i = 0; i < studentArray.length; i++) {
    nArray.push(studentArray[i].siblings)
  }
  return nArray
}

const allPassing = (studentArray, passing) => { // almost
  for (let i = 0; i < studentArray.length; i++) {
    if (studentArray[i].grade !== passing) {
      return false
    }
  }
  return true
}

const someonesFavorite = (peopleArray, food) => { // correct
  for (let i = 0; i < peopleArray.length; i++) {
    if (peopleArray[i].favoriteFood === food) {
      return true
    }
  }
  return false
}

const strange = (people) => people.filter((a) => a.isStrange) // correct

const birthdays = (students) => students.map((a) => a.birthday) // correct

const heaviest = (animals) => animals.map((a) => a.weight) // something

const allStudents = (grades) => grades.map((a) => a.students) // something

const allCromulent = (things) => things.every((a) => isCromulent(a)) // correct

const notAllTerrible = (things) => things.some((a) => !isTerrible(a)) // correct