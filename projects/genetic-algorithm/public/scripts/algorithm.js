let alphabet = 'abcdefghijklmnopqrstuvwxyz '

const test = (batch, string) => {
    return top25(firstbatch(batch, string))
}

// constructs a random phrase, with "length" as the length of the string
const randomPhrase = (length) => {
    // generates random list of characters the same length as the text
    let generation = ''
    for (let i = 0; i < length; i++) {
        generation = generation + alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    return generation
}
// creates the first batch of random strings
const firstbatch = (batchamount, text) => {
    let batcharray = []
    for (let i = 0; i < batchamount; i++) {
        let phrase = randomPhrase(text.length)
        batcharray.push([phrase, fitness(phrase, text)])
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
// i think this code will work, im just not sure how to make it sort it from highest to lowest, not lowest to highest
// currently, it deletes the highest numbers, but keeps the lowest
const top25 = (batch) => {
let fitnessOnly = []
for (let i = 0; i < batch.length; i++) {
    fitnessOnly.push(batch[i][1])
}
console.log(fitnessOnly.length)
for (let j = 0; j < Math.floor(fitnessOnly.length / .25) ; j++) {
    fitnessOnly.sort()
    fitnessOnly.pop(j)
}
console.log(fitnessOnly)
}

let algorithm = (text, batch) => {
    let batcharray = []
    let finalarray = []
    let done = false
    //provides the first batch
    firstbatch(batch, text)
    while (done === false) {
 
    }
}
console.log(test(20, 'pizza'))