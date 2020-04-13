const os = require('os');

console.log(os.arch());
console.log(os.platform());

console.log(`number of CPU cores: ${os.cpus().length}`);
console.log(`home dir: ${os.homedir()}`);
console.log(`host name: ${os.hostname()}`);