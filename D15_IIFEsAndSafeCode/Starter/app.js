// IIFE
var firstname = 'John';

(function(global, name) { //sticks it on the global object by passing window --try for insult shaker
    
    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
}(window, firstname)); // IIFE






















