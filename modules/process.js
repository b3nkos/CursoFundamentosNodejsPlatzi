//Process it is in global module
// const process = require('process');

process.on('beforeExit', () => {
  console.log("process will finish");
});

process.on('exit', () => {
  //in this part the event loop does not work
  console.log('Process finished');
});

process.on('uncaughtException', (err, origin) => {
  console.error('error uncaught forget it');
  console.error(err);
});
