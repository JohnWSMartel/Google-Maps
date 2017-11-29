var http = require('http');
var coffee = require('./coffee-data.js');


var building = require('./building-data.js');

var port = process.env.PORT || process.env.NODE_PORT || 3000;

function onRequest(request, response) {
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
  
  response.writeHead(200, headers);
  
  if(request.url === '/coffee.json') {
    response.write(JSON.stringify(coffee));
    response.end();
  } else if(request.url === '/building.json') {
    response.write(JSON.stringify(building));
    response.end();
  } else {
    response.writeHead(404, headers);
    response.write(JSON.stringify({'error': 'URL not recognized'}));
    response.end();
  }
}

http.createServer(onRequest).listen(port);

console.log("Listening on 127.0.0.1:" + port);