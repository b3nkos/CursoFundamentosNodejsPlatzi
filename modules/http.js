const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log('new request');
  console.log(req.url);

  switch (req.url) {
    case '/hello':
      res.write('hello, how are you?');
      res.end();
      break;
    default:
      res.write('404 error: I do not what do you want!');
      res.end();
  }
}

console.log('Listening on 3000 port');