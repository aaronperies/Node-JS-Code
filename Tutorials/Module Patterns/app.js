/*when importing large set of functions, we can use a single varaible to store the functions*/
var moduleFunctions = require('./module');

//use the variable to access each individual function as is in Java when accessing objects methods.
console.log(moduleFunctions.arrLengthCounter(['Aaron','Chase','Nigel','Peries']));
console.log(moduleFunctions.adder(4, 7));
console.log(moduleFunctions.subtractor(2, 5));
console.log(moduleFunctions.multiplier(8,7));