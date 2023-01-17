let alphabet = 'abcdefghijklmnopqrstuvwxyz'

let encrypt = (text, key) => {
    let encrypted = ''
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (text[i] === alphabet[j]) {
                let change = j
                if (change + key > alphabet.length) {
                    change = alphabet.length - change + key
                } else {
                    change = change + key
                }
                encrypted = encrypted + alphabet[change]
            }
        }
    }
    return encrypted
}

let decrypt = (text, key) => {
    let decrypted = ''
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (text[i] === alphabet[j]) {
                let change = j
                if (change - key < 0) {
                    change = alphabet.length + change - key
                } else {
                    change = change - key
                }
                decrypted = decrypted + alphabet[change]
            }
        }
    }
    return decrypted
}
let check = (encoded, key, decoded) => {
    return decrypt(encoded, key) === decoded
}

console.log(check('eirkvz',6,'yclept'))
console.log(decrypt('eirkvz',6))
console.log(encrypt('yclept',6))