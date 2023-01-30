let alphabet = 'abcdefghijklmnopqrstuvwxyz '
let algorithm = (text) => {
    // generates random list of characters the same length as the text
    let generation = ''
    for (let i = 0; i < text.length; i++) {
        generation = generation + alphabet[Math.floor(Math.random() * 27)]
    }
    let genarray = []
    let genversion = 0
    genarray.push(generation)
    let limit = 1000;
    while (genarray[genversion] != text && limit-- > 0) {
        let gen = ''
        for (let j = 0; j < genarray[genversion].length; j++) {
            if (genarray[genversion][j] === text[j]) {
                gen = gen + genarray[genversion][j]
            } else {
                gen = gen + alphabet[Math.floor(Math.random() * 27)]
            }
        }
        genarray.push(gen)
        genversion++
    }
    return genarray
}
console.log(algorithm('pizza'))