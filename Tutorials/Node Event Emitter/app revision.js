//import modules
var events = require('events');
var util = require('util');

//create person object + constructor
var Person = function(name){
    this.name = name;
};

//make person object / class inherit the module function
util.inherits(Person, events.EventEmitter);

//create the person objects
var aaron = new Person('aaron');
var chase = new Person('chase');
var nigel = new Person('nigel');
var peries = new Person('peries');

//creating array of people
var peopleArray = [aaron, chase, nigel, peries];

//iterate through people array and create custom function for all of them
peopleArray.forEach(function(person){
    person.on('speak', function(message){
        console.log(`${person.name} said: ${message}`)
    });
});

//trigger custom function along with relayed message
aaron.emit('speak', 'Hi my name is Aaron!');
chase.emit('speak','Hi, my name is Chase, nice to meet you Aaron!')
nigel.emit('speak','It\'s nice to meet the both of you')
peries.emit('speak','I am the surname of this entire name, LOL!')