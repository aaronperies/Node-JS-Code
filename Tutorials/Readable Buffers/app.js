var http = require('http');
var fs = require('fs');

//use the fs package to create a readstream variable
var readStream = fs.createReadStream(__dirname + '/random.txt', 'utf-8');

//trigger a function when the data event is fired
readStream.on('data', function(chunk){
    console.log(`New chunk added: ${chunk}`);
});