alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y", "z"]

function rot13(message) {
    let result = ""
    
    for (let i = 0; i < message.length; i++) {
        let letter = message[i].toLowerCase()
        var upper = false
        if (message[i] != letter) {
            upper = true
        }

        let index = alphabet.indexOf(letter)
        if (index == -1) {
            result += letter
        } else {
            let newIndex = (index + 13) % alphabet.length
            if (upper) {
                result += alphabet[newIndex].toUpperCase()
            } else {
                result += alphabet[newIndex]
            }
        }
    }
    return result
}

console.log(rot13("Test")) // grfg