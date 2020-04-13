const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

const readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8');
readableStream.on('data', function(chunk) {
  data += chunk;
});

readableStream.on('end', function() {
  // console.log(data);
});

// process.stdout.write('Hello How are you');
// process.stdout.write('Hello How are you');
// process.stdout.write('Hello How are you');

const Transform = stream.Transform;

function UpperCase() {
  Transform.call(this);
}

util.inherits(UpperCase, Transform);
UpperCase.prototype._transform = function(chunk, codification, cb) {
  const chunkUpper = chunk.toString().toUpperCase();
  this.push(chunkUpper);
  cb();
}

const upper = new UpperCase();
readableStream
.pipe(upper)
.pipe(process.stdout);