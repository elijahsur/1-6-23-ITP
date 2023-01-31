let alphabet = 'abcdefghijklmnopqrstuvwxyz '

const randomPhrase = (length) => {
        // generates random list of characters the same length as the text
        let generation = ''
        for (let i = 0; i < length; i++) {
            generation = generation + alphabet[Math.floor(Math.random() * 27)]
        }
        return generation
}
let algorithm = (text) => {
    // generates random list of characters the same length as the text
    let answerarray = []
    answerarray.push(randomPhrase(text.length))
    let limit = 1000;
    let previous = answerarray[answerarray.length - 1]
    while (answerarray[answerarray.length - 1] != text && limit-- > 0) {
        let generation = ''
        for (let j = 0; j < previous.length; j++) {
            if (answerarray[answerarray.length - 1][j] === text[j]) {
                generation += answerarray[answerarray.length - 1][j]
            } else {
                generation += alphabet[Math.floor(Math.random() * 27)]
            }
        }
        answerarray.push(generation)
    }
    return answerarray
}
console.log(algorithm('foobar'))