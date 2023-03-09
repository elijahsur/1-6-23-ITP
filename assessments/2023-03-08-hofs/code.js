const evens = (numberArray) => {
  let nArray = []
  for (let i = 0; i < numberArray.length; i++) {
    if (i % 2 === 0) {
      nArray.push(i)
    }
  }
  return nArray
}

const shouty = (stringArray) => {
  let nArray = []
  for (let i = 0; i < stringArray.length; i++) {
    nArray.push(stringArray[i].toUpperCase())
  }
  return nArray
}

const join = (stringArray, delimiter) => {
  let joined = []
  for (let i = 0; i < stringArray.length; i++) {
    if (joined === null) {
      joined = stringArray[i]
    } else {
      joined = joined + delimiter + stringArray[i]
    }
  }
  return joined
}

const joinx = (strings, delimiter) => {
  return strings.reduce((joined, s) => {
    if (joined === null) {
      return s;
    } else {
      return joined + delimiter + s;
    }
  }, null);
};

const allSiblings = (studentArray) => {
  let nArray = []
  for (let i = 0; i < studentArray.length; i++) {
    nArray.push(studentArray[i].siblings)
  }
  return nArray
}

const allPassing = (studentArray, passing) => {
  for (let i = 0; i < studentArray.length; i++) {
    if (studentArray[i].grade !== passing) {
      return false
    }
  }
  return true
}

const someonesFavorite = (peopleArray, food) => {
  for (let i = 0; i < peopleArray.length; i++) {
    if (peopleArray[i].favoriteFood === food) {
      return true
    }
  }
  return false
}

const strange = (people) => people.filter((a) => a.isStrange)

const birthdays = (students) => students.map((a) => a.birthday)

const heaviest = (animals) => animals.map((a) => a.weight)

const allStudents = (grades) => grades.map((a) => a.students)

const allCromulent = (things) => things.every((a) => isCromulent(a))

const notAllTerrible = (things) => things.some((a) => !isTerrible(a))