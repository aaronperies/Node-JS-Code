var arrLengthCounter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
}

//going to try a different way of creating formatted strings using backticks
var adder = function(num1, num2){
    return `Sum of the 2 numbers is ${num1 + num2}`;
}

var subtractor = function(num1, num2){
    return `Subtracted value is ${num1 - num2}`;
}

//a more efficient way to make exporting functions easier
module.exports.multiplier = function(num1, num2){
    return `Multiplied value is ${num1 * num2}`
}

/*when exporting multiple functions, we can do so as shown below by creating a subsection within
module.exports for each individual function*/
module.exports.arrLengthCounter = arrLengthCounter;
module.exports.adder = adder;
module.exports.subtractor = subtractor;

//there is one final way to add these functions to the export list
/*
module.exports = {
    arrLengthCounter : arrLengthCounter,
    adder : adder,
    subtractor : subtractor,
    multiplier : multiplier
}
    */