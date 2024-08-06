var http = require('http');
var fs = require('fs');

//use the fs package to create a readstream variable
var readStream = fs.createReadStream(__dirname + '/random.txt', 'utf-8');
var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//this pipe method is a much more efficient way of writing data to a stream
//can only be called on a readable stream object
readStream.pipe(writeStream)