let alphabet = 'abcdefghijklmnopqrstuvwxyz'

let algorithm = (text) => {
    // generates random list of characters the same length as the text
    let generation = ''
    for (let h = 0; h < text.length; h++) {
        generation = generation + alphabet[Math.floor(Math.random() * 26)]
    }
    let genarray = []
    genarray.push(generation)
    if (generation === text) {
        return genarray
    } else {
        while (generation != text) {
            // matches the generation letter to the alphabet
            for (let i = 0; i < generation.length; i++) {
                for (let j = 0; j < alphabet.length; j++) {
                    if (generation[i] === alphabet[j]) {
                        for (let k = 0; k < text.length; k++) {
                            let gen = ''
                            difference = Math.abs(text[j] - generation[j])
                            if (difference - 2 > 0) {
                                gen = gen + alphabet[generation[j] - 2]
                            } else {
                                if (difference = 0) {
                                    gen = generation[j]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log(algorithm('pizza'))