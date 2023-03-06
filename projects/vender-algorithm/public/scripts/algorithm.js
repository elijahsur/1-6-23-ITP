// travelling salesman problem code

const maxRandom = (max) => {
    return Math.floor(Math.random() * max)
}

// makes random cities on a grid, represented with an x and y axis
const makeCities = (nCities, boardSize) => {
    let cityArray = []
    for (let i = 0; i < nCities; i++) {
        cityArray.push([maxRandom(boardSize), maxRandom(boardSize)])
    }
    return cityArray
}
// not sure what im doing with this function
const duplicateCities = (path) => {
    let fitness = 0
    for (let i = 1; i < path.length; i++) {
        if (!path.every((n) => path[i] === n)) {
            fitness = fitness + (Math.abs(path[i][0] - path[i - 1][0]) + Math.abs(path[i][1] - path[i - 1][1]))
        } else { }
    }
    return { path, fitness }
}

// creates the first batch of paths
const firstBatch = (cityList, batchAmount) => {
    let batch = []
    for (let i = 0; i < batchAmount; i++) {
        let indBatch = [...cityList]
        for (let j = 0; j < cityList.length; j++) {
            let random = cityList[maxRandom(cityList.length)]
            indBatch.splice(indBatch.indexOf(random), 1)
            indBatch.push(random)
        }
        console.log(indBatch)
        batch.push(indBatch)
    }
    console.log('end of individual batches')
    return batch
}

const topPaths = (path) => {

}


const algorithm = (cityList) => {
    for (let i = 0; i < cityList.length; i++) {

    }
}

console.log(firstBatch(makeCities(20, 500), 3))