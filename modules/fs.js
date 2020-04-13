const fs = require('fs');

function read(path, callback) {
  fs.readFile(path, (err, data) => {
    callback(data.toString());
  });
}

function write(path, content, callback) {
  fs.writeFile(path, content, function(err) {
    if(err) {
      console.error("cannot write on the file");
    } else {
      console.log("the file is wrote already!");
    }
  });
}

const path = `${__dirname}/../file.txt`;
read(path, console.log);
write(path, "Hello World");