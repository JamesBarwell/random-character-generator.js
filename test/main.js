var assert = require('assert')
var charStream = require('../app.js')

describe('random-character-stream', function() {

    function getBuffer(charGen, size) {
        var buffer = ''
        var i = 0
        while (i++ < size) {
            buffer += charGen.next().value
        }
        return buffer
    }

    context('when instantiated with a seed', function() {
        var stream_1, stream_2

        beforeEach(function() {
            var charGen_1 = charStream(123)
            var charGen_2 = charStream(123)

            stream_1 = getBuffer(charGen_1, 10)
            stream_2 = getBuffer(charGen_2, 10)
        })

        it('always returns the same characters', function() {
            assert.equal(stream_1, stream_2)
        })

    })

})
