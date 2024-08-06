var http = require('http');
var fs = require('fs');

var testServer = http.createServer(function(request, response){
    console.log("Request was made:", request.url)
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var readStream = fs.createReadStream(__dirname + '/random.txt', 'utf-8'); 
    readStream.pipe(response);
});

testServer.listen(3000, '127.0.0.1');
console.log('I\'m listening on port 3000, don\'t interfere');

//once you ctrl+c out of the server instance, the server instance will end