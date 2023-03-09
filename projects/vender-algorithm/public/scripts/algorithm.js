// travelling salesman problem code

// shuffles an array, switching positions of parts of the array
const arrayShuffler = (array) => {
    let indBatch = [...array];
    for (let j = 0; j < array.length; j++) {
        let random = array[maxRandom(array.length)]
        indBatch.splice(indBatch.indexOf(random), 1)
        indBatch.push(random)
    };
    return indBatch
};

// returns a random whole number between 0 and max
const maxRandom = (max) => {
    return Math.floor(Math.random() * max)
};

////////////////////////////////////

// makes random cities on a grid, represented with an x and y axis
const makeCities = (nCities, boardSize) => {
    let cityArray = [];
    for (let i = 0; i < nCities; i++) {
        cityArray.push({ x: maxRandom(boardSize), y: maxRandom(boardSize) })
    };
    return cityArray
};

// creates a batch of paths based on a previous array
const createBatch = (cityList, batchAmount) => {
    let batch = [];
    for (let i = 0; i < batchAmount; i++) {
        batch.push(arrayShuffler(cityList))
    };
    return batch
};

// judges the fitness of an individual path based on how long the total amount of lines are
const indFitness = (path) => {
    let fitness = 0;
    for (let i = 1; i < path.length; i++) {
        fitness = fitness + (Math.abs(path[i].x - path[i - 1].x) + Math.abs(path[i].y - path[i - 1].y))
    };
    return { path, fitness }
};

// meant to return an array with paths.length amount of objects, all of which contain the fitness and an array of x and y coordinates
const groupFitness = (paths) => {
    let nPaths = [];
    for (let i = 0; i < paths.length; i++) {
        nPaths.push(indFitness(paths[i]))
    };
    return nPaths
};

// sorts by fitness, best to worst, and cuts out lower half
const sortByFitness = (paths) => {
    paths.sort((a, b) => a.fitness - b.fitness);
    return paths.slice(Math.floor(paths.length / 2), paths.length)
};


// something not quite working about this function
const mutate = (paths) => {
    for (let i = 1; i < paths.length; i++) {
        let part = maxRandom(paths[i].path.length)
        let indPath = paths[i].path
        let pastPath = paths[i - 1].path
        let nPart = indPath[part]
        let nIndex = indPath.indexOf(nPart)
        let pastPart = pastPath[part]
        let pastIndex = pastPath.indexOf(pastPart)
        
        pastPath[nIndex] = part
        pastPath[pastIndex] = pastPart
    }
}

const algorithm = (cityCount, boardSize, batchAmount, limit) => {
    let cityArray = makeCities(cityCount, boardSize)
    let firstBatch = createBatch(cityArray, batchAmount)
    let currentBatch = [...firstBatch];
    for (let i = 0; i < limit; i++) {
        let newBatch = sortByFitness(groupFitness(currentBatch))
        currentBatch = mutate(newBatch)
        console.log(currentBatch)
    }
    return currentBatch
};

const foo = algorithm(10, 500, 10, 50);
//console.log(JSON.stringify(foo, null, 2));