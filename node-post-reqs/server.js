//Fill in vars here
 var http = require('http');
var url = require('url');
var path=require(path')

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;

  if (request.method === 'POST') {
    request.on('data', function(data) {
      //i will back
  
  }
   else if (request.method === 'GET') {
    if(path === '/'){
      response.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(__dirname + '/index.html', function(err, data){
        if(err) console.log(err);
        response.end(data);
      });
    }
  } else {
    response.end(404);
  }

}).listen(8080, '127.0.0.1');

console.log('Listening...');
