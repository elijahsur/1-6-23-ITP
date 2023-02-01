let alphabet = 'abcdefghijklmnopqrstuvwxyz '

const test = (batch,string) => {
    return top25(firstbatch(batch,string))
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
const firstbatch = (batchamount,text) => {
    let batcharray = []
    for (let i = 0; i < batchamount; i++) {
        let phrase = randomPhrase(text.length)
        batcharray.push([phrase, fitness(phrase, text)])
    }
    return batcharray
}
// judges the fitness of a group of strings
const fitness = (generated, text) => {
    let fitness = 0
    for (let i = 0; i < text.length; i++) {
        if (generated[i][0] === text[i]) {
            fitness++
        }
    }
    return fitness/text.length
}
// determines the top 25% of a batch, with "string" being the desired string. currently reorders the batch from highest to lowest
const top25 = (batch) => {
    let top25 = []
    for (let i = 0; i < batch.length; i++) {
        for (let j = 0; j < top25.length; j++) {
            if (top25[j][1] < top25[i][1]) {
                top25[j][1] = top25[i][1]
                top25.push(batch[j][1])
            } else {
                top25.push(batch[i][1])
            }
        }
    }
    return top25
}

let algorithm = (text, batch) => {
    let batcharray = []
    let finalarray = []
    let done = false
    //provides the first batch
    firstbatch(batch)
    while (done === false) {
        // will determine the top 25% of the batch
        let temparray = []
        for (let j = 0; j < batcharray.length; j++) {
            temparray.push[batcharray[j][1]]
            for (let k = 0; k < temparray.length; k++) {
                if (temparray[j][1] > temparray[k][1]) {
                    temparray.index(k) = temparray[j]
                }
            }
        }
// for testing
        done = true
    }
}