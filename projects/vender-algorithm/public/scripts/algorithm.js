// travelling salesman problem code

// makes random cities on a grid, represented with an x and y axis
const makeCities = (nCities, boardSize) => {
    let cityArray = []
    for (let i = 0; i < nCities; i++) {
        cityArray.push([Math.floor(Math.random() * boardSize), Math.floor(Math.random() * boardSize)])
    }
    return cityArray
}
// judges based on if it goes to any city multiple times
const fitness = (path) => {
    let fitness = 0
    for (let i = 0; i < path.length; i++) {
        if (!path.every((n) => path[i] === n)) {
            fitness + 1 / path.length
        } else {
            fitness - 1 / path.length
        }
    }
    return fitness
}

// creates the first batch of paths
const firstBatch = (cityList) => {
    let batch = []
    for (let i = 0; i < cityList.length; i++) {
        batch.push()
    }
}

const topPaths = (path) => {

}


const algorithm = (cityList) => {
    for (let i = 0; i < cityList.length; i++) {

    }
}

console.log(makeCities(20,500))