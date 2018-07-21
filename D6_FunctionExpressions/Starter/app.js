greet();

//function statement --does nothing during execution phase
function greet() {
	console.log('hi');
}

//function expression

//returns an object (the function) so it's an expression

//anonymous function gets referenced by variable name
var anonymousGreet = function() {
	console.log('hi');
}
//invoke -- can't be above the function expression. anonymous function isn't hoisted
anonymousGreet();


function log(a) {
	console.log(a);
	//invoke function
	a();
}

//function passed to a function as a parameter. Functional programming.
//this can be done because functions are objects in javascript
log(function() {
	console.log('hi');
});