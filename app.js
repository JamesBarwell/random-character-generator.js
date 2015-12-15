var mt = require('mersenne-twister')

module.exports = getCharacterGenerator
function getCharacterGenerator(seed, allowedCharCodes) {
    var prng = new mt(seed)
    var charCodes = allowedCharCodes || getDefaultAsciiCodes()

    return (function* randomCharacterGen() {
        while(true) {
            var index = Math.floor(prng.random() * charCodes.length)
            yield String.fromCharCode(charCodes[index])
        }
    })()
}

function getDefaultAsciiCodes() {
    function getRange(from, to) {
        var range = []
        for (;from <= to; from++) {
            range.push(from)
        }
        return range
    }

    return [].concat(
        getRange(48, 57),   // 0-9
        getRange(65, 122),  // A-Z a-z
        [32,33,44,45,46,63] // /s ! , - . ?
    )
}
