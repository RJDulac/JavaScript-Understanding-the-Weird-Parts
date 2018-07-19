var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);


//fake namespace container to avoid naming collision. Frameworks use this

var english = { 
	grettings: { 
		basic: 'hello!' 
	}
};

var spanish = {};

// english.grettings = {};
english.greet = 'hello!';
spanish.greet = 'hola!';

console.log(english);
