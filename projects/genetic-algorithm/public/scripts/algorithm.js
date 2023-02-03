let key = 'abcdefghijklmnopqrstuvwxyz '

// used to test separate functions of the algorithm
const test = (batch, string) => {
    return top25(firstbatch(batch, string))
}

// constructs a random phrase, with "length" as the length of the string
const randomPhrase = (length) => {
    let generation = ''
    for (let i = 0; i < length; i++) {
        generation = generation + key[Math.floor(Math.random() * key.length)]
    }
    return generation
}
// creates the first batch of random strings
const firstbatch = (text, batchlength) => {
    let batcharray = []
    for (let i = 0; i < batchlength; i++) {
        let phrase = randomPhrase(text.length)
        batcharray.push({ phrase: phrase, fitness: fitness(phrase, text) });
    }
    return batcharray
}
// judges the fitness of a group of strings
const fitness = (dna, text) => {
    let fitness = 0
    for (let i = 0; i < text.length; i++) {
        if (dna[i] === text[i]) {
            fitness++
        }
    }
    return fitness / text.length
}
// ranks the fitness of all strings, then returns the top 25% of the highest fitness
const top25 = (batch) => {
    batch.sort((a, b) => a.fitness - b.fitness)
    return batch.slice(Math.floor(batch.length * (3 / 4)), batch.length)
}

let algorithm = (string, batchlength) => {
    let done = false
    let batchHistory = []
    let currentBatch = top25(firstbatch(string, batchlength))
    while (done === false) {
        batchHistory.push(currentBatch[currentBatch.length - 1])
        for (let i = 0; i < batchlength; i++) {
            let phrase = currentBatch[i].phrase.slice(0, Math.floor(Math.random() * string.length)) + currentBatch[i + 1].phrase.slice(0, Math.floor(Math.random() * string.length))
            if (Math.floor(Math.random() * (4 - 1) + 1) === 1) {
                
            }
            currentBatch.push({ phrase: phrase, fitness: fitness(phrase, string) })
        }
        currentBatch = top25(currentBatch)
        if (currentBatch[currentBatch.length - 1].fitness === 1) {
            return batchHistory
        } else {
            batchHistory.push(currentBatch[currentBatch.length - 1])
            console.log(batchHistory)
        }
    }
}
console.log(algorithm('pizza', 100000))