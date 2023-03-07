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
const fitness = (paths) => {
    let nPaths = []
    for (let j = 0; j < paths.length; j++) {
        let fitness = 0
        for (let i = 1; i < paths[j].length; i++) {
            fitness = fitness + (Math.abs(paths[j][i][0] - paths[j][i - 1][0]) + Math.abs(paths[j][i][1] - paths[j][i - 1][1]))
        }
        nPaths.push({"path": paths[j], fitness })
    }
    return nPaths
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
        batch.push(indBatch)
    }
    return batch
}

const topPaths = (path) => {

}


const algorithm = (cityList) => {
    for (let i = 0; i < cityList.length; i++) {

    }
}

console.log(fitness(firstBatch(makeCities(20, 500), 3)))