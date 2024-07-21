//like creating, reading, writing and deleting files, we can also do so for directories
var fs = require('fs');

//make - similar to file operations, we get Sync methods
fs.mkdirSync('Stuff');

//remove
fs.rmdirSync('Stuff');

/*similar to how using async methods with files worked in the previous tutorial,
there are async methods for creating and removing directories as well */
fs.mkdir();
fs.rmdir();