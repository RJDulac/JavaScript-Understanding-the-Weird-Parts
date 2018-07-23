var person = {
	firstName: 'John',
	lastName: 'Doe',
	getFullName: function() {
		var fullName = this.firstName + ' ' + this.lastName;
		return fullName;
	}
}

var logName = function(lang1, lang2) {
	console.log('logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('----------------------');
}//.bind(person); //alt way to bind this to person

//binds this to person
var logPersonName = logName.bind(person);

logPersonName('en', 'es');

// logName('en', 'es');

//another way to bind this
logName.call(person, 'en', 'es');

//apply method uses arrays, which makes it different than the call method
logName.apply(person, ['en', 'es']);


(function(lang1, lang2) {
	console.log('logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('----------------------');
}).apply(person, ['en', 'es']);






//function borrowing

var person2 = {
	firstName: 'Jane',
	lastName: 'Doe'
}

//changes where the this keyword points to. Sets to person2 object
console.log(person.getFullName.apply(person2));

//function currying

function multiply(a,b) {
	return a*b;
}

//makes copy with preset parameters. a is permanently set to 2
var multiplyByTwo = multiply.bind(this, 2);

//this makes both a and b have preset parameters
var multiplyByTwoA = multiply.bind(this, 2, 2);

//this makes a new copy of the function with no parameters
var multiplyByTwoB = multiply.bind(this);

//puts it in the second parameter
console.log(multiplyByTwo(4));