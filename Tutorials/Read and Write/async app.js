var fs = require('fs');

//this js file will be for file systems functions that are asynchronous
fs.readFile('readme.txt', 'utf-8', function(err, fileData){
    console.log(fileData);
    fs.writeFile('asyncWriteToMe.txt', 'Aaron is amazing with filewriters', (err)=>{});
});
