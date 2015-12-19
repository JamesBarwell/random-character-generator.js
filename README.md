Generates random ASCII characters from a seed

Can be used either deterministically or pseudo-randomly depending on how it is seeded.

Install using npm:
```
npm install random-character-generator
```

Example of use:

```
var randomCharGen = require('random-character-generator')
var Readable = require('stream').Readable;

var seed = process.argv[2] || 123
var generator = randomCharGen(seed)

var rs = Readable();
rs._read = function() {
    rs.push(generator.next().value);
}
rs.pipe(process.stdout)
```
