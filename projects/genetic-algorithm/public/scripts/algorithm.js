let key = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ.,!?"1234567890#'

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
// combines two strings next to each other to create a child, randomly mutates
const evolve = (currentBatch, i, string) => {
    let randomPlace = random(string.length)
    let phrase = currentBatch[i].phrase.slice(0, randomPlace) + currentBatch[i + 1].phrase.substring(randomPlace, currentBatch[i + 1].phrase.length)
    if (Math.random() < 1 / 3) {
        phrase.replace(phrase[random(phrase.length)], key[random(key.length)])
    }
    return phrase
}
// simple random function for the algorithm function
const random = (upto) => {
    return Math.floor(Math.random() * upto)
}

let algorithm = (string, batchlength) => {
    let done = false
    let batchHistory = []
    let currentBatch = top25(firstbatch(string, batchlength))
    while (done === false) {
        batchHistory.push(currentBatch[currentBatch.length - 1])
        for (let i = 0; i < batchlength; i++) {
            let phrase = evolve(currentBatch, i, string)
            currentBatch.push({ phrase: phrase, fitness: fitness(phrase, string) })
        }
    currentBatch = top25(currentBatch)
    if (currentBatch[currentBatch.length - 1].fitness === 1) {
        batchHistory.push(currentBatch[currentBatch.length - 1])
        console.log(string + ' found in ' + batchHistory.length + ' attempts')
        return batchHistory
    } else {
        console.log(batchHistory)
    }
}
}
// recommended to not do any numbers larger than 1000000
console.log(algorithm('To be or not to be, that is the question.', 1000000))