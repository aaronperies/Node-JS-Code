setTimeout(function(){
    var name = "Aaron"
    console.log('Hello World')
    console.log('My name is', name)

    //useful global object properties
    console.log(__dirname);
    console.log(__filename);
}, 3000)

/* //this will loop
var time = 0;

setInterval(function(){
    time += 2;
    console.log(time, 'seconds have passed')
}, 2000)*/

//this is not a loop
let time = 0;

var timer = setInterval(function(){
    time += 2;
    console.log(time, 'seconds have passed')

    if(time >= 6){
        clearInterval(timer);
    }

}, 2000)

