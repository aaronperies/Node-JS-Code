//to perform read or write functions, we need the file system (fs) module
var fs = require('fs');

//sync methods blok other code from being executed until it has finished executing
var text = fs.readFileSync('readme.txt', 'utf-8');
console.log(text);

fs.writeFileSync('writeToMe.txt', 'Aaron is awesome with filewriters');