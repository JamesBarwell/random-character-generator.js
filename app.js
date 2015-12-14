var mt = require('mersenne-twister')

var generator

main()
function main() {
    seed = process.argv[2]
    if (!seed) {
        console.log('no seed provided - using default seed')
        seed = 123
    }
    generator = new mt(seed)

    console.log(getCharacterStream(10))
}

function getRange(from, to) {
    var range = []
    for (;from <= to; from++) {
        range.push(from)
    }
    return range
}

function getCommonCodes() {
    var codes = getRange(97, 122)
    codes.push(32)
    codes.push(33)
    codes.push(44)
    codes.push(46)
    return codes
}

function getCharacterStream(limit) {
    var codes = getCommonCodes()
    var characters = []
    var i = 0
    for (; i < limit; i++) {
        characters.push(getRandomCharacter(codes))
    }

    return characters
}

function getRandomCharacter(codes) {
    var index = Math.floor(generator.random() * codes.length)
    var code = codes[index]
    return String.fromCharCode(code)
}
