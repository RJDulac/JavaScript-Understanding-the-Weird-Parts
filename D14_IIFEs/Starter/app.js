//function statement
function greet(name) {
	console.log('Hello ' + name);
}
greet('John');

//using a function expression
var greetFunc = function(name) {
	console.log('Hello ' + name);
};
greetFunc('John');

//immediately invoked function expression --an IIFE
//allows to run right after it's created
var greeting = function(name) {
	return 'Hello ' + name;	
}('John'); //calling function

console.log(greeting);

var firstName = 'Jim';
//wrap in parentheses to avoid error in function expressions
//classic example of an IIFE
//executes code on the fly
(function(name) {
	var greeting = 'Inside IIFE: Hello ';
	console.log(greeting + ' ' + name);
}(firstName)); //parentheses to invoke the function expression