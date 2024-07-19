//we will import the events module that comes with node
var events = require('events');

//event emitter in node js is used to create custom events and react to them when they are triggered
var evEmitter = new events.EventEmitter();

//create the event
evEmitter.on('randomEvent', function(message){
    console.log(message)
});

//this is a manual trigger to ensure the trigger works
evEmitter.emit('randomEvent', 'Manually Triggered');

//this is an automatic trigger depending on a condition
for (var i = 0; i < 10; i++){
    if(i%2 == 0 && i != 0){
        evEmitter.emit('randomEvent', `Automatically triggered when i = ${i}`);
    }
}
