//object literal

var personA = { 
	firstName: 'Tony',
	lastName: 'Alicea',
	address: {
		street: {
			street: '111 Main st.',
			city: 'New York',
			state: 'NY'
		}
	}
};

function greet(person) {
	console.log('Hi ' + person.firstName);
}

greet(personA);

//create objects on the fly when function is called
greet({ 
	firstName: 'Mary', 
	lastName: 'Doe'
});

//add property by using dot function

personA.address2 = {
	street: '333 Second St.'
}