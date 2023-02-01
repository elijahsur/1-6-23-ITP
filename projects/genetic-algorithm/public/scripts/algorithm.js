let alphabet = 'abcdefghijklmnopqrstuvwxyz '

const randomPhrase = (length) => {
        // generates random list of characters the same length as the text
        let generation = ''
        for (let i = 0; i < length; i++) {
            generation = generation + alphabet[Math.floor(Math.random() * 27)]
        }
        return generation
}
const fitness = (generated, text) => {
    let fitness = 0
    for (let i = 0; i < text.length; i++) {
        if (generated[i] === text[i]) {
            fitness++
        }
    }
    return fitness/text.length
}
let algorithm = (text, batch) => {
    // temp contains the newest batch of 
    let temp = []
    let finalarray = []
    let done = false
    //provides the first batch
    for (let i = 0; i < batch; i++) {
        let phrase = randomPhrase(text.length)
        temp.push([phrase, fitness(phrase, text)])
    }
    while (done === false) {
        // will determine the top 25% of the batch
        let temparray = []
        for (let j = 0; j < temp.length; j++) {
            temparray.push[temp[j][1]]
            for (let k = 0; k < temparray.length; k++) {
                if (temparray[j][1] > temparray[k][1]) {
                    temparray.index(k) = temparray[j]
                }
            }
        }

        done = true
        console.log(temparray)
    }
    console.log(temp)
    console.log(temp[3][1])
}
console.log(algorithm('foobar',20))
