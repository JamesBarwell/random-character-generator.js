var mt = require('mersenne-twister')

function getRange(from, to) {
    var range = []
    for (;from <= to; from++) {
        range.push(from)
    }
    return range
}

function getAsciiCodes() {
    return [].concat(
        getRange(97,122),
        [32,33,44,46]
    )
}

function getCharacterGenerator(seed) {
    var prng = new mt(seed)
    var codes = getAsciiCodes()

    return (function* randomCharacterGen() {
        while(true) {
            var index = Math.floor(prng.random() * codes.length)
            yield String.fromCharCode(codes[index])
        }
    })()
}

module.exports = getCharacterGenerator
