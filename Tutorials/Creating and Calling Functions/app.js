//this code will display the different ways to define or create functions and call them

//1
function sayHi(){
    console.log('Hi')
}

//2
var sayBye = function(){
    console.log('Bye')
}

//3
function callFunction (func){
    func();
}

sayHi();
sayBye();
callFunction(sayBye);