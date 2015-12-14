var mt = require('mersenne-twister')

var prng
var codes
var generator

main()
function main() {
    seed = process.argv[2]
    setup(seed)

    console.log(getBuffer(10000))
}

function setup(seed) {
    if (!seed) {
        console.log('no seed provided - using default seed')
        seed = 123
    }
    prng = new mt(seed)

    codes = getCommonCodes()

    charGen = randomCharacterGen()
}

function getBuffer(size) {
    var buffer = ''
    var i = 0
    while (i++ < size) {
        buffer += charGen.next().value
    }
    return buffer
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

function* randomCharacterGen() {
    while(true) {
        var index = Math.floor(prng.random() * codes.length)
        var code = codes[index]
        yield String.fromCharCode(code)
    }
}
