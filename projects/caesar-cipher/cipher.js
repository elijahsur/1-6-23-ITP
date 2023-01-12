
let encrypt = (text, key) => {
    let encrypted = ''
    let key2 = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < key2.length; j++) {
            if (text[i] === key2[j]) {
                let change = j
                if (change + key > 26) {
                    change = 27 - j
                } else {
                    change = j + key
                }
                encrypted = encrypted + key2[change]
            }
        }
    }
    return encrypted
}

let decrypt = (text, key) => {
    let decrypted = ''
    let key2 = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < key2.length; j++) {
            if (text[i] === key2[key + j]) {

                decrypted = decrypted + key2[change]
            }
        }
    }
    return decrypted
}
console.log(encrypt('pizza', 3))
//console.log(decrypt('slccd', 3))