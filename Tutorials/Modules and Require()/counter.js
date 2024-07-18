var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
}

//calling function
counter(['Aaron', 'Chase', 'Nigel', 'Peries']);
// but no log? why? because return statements don't print

//console.log(counter(['Aaron', 'Chase', 'Nigel', 'Peries']));

//this statement is important because by default all modules are unavailable outside the local scope
module.exports = counter;