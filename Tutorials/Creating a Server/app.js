//importing the http package
var http = require('http');

//creating server and writing function to respond to requests
var testServer = http.createServer(function(request, response){
    //response code 200 means OK, click f12 and check response header file
    response.writeHead(200, {'Content-Type': 'text/plain'}); 
    response.end('Hey gamers!');
});

//have to mention the port and IP address that will be used for the server
testServer.listen(3000, '127.0.0.1');
console.log('I\'m listening on port 3000, don\'t interfere');

//once you ctrl+c out of the server instance, the server instance will end