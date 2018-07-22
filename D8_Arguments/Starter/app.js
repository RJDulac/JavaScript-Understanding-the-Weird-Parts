function greet(firstName, lastName, language, ...other) {

	//es5 way of giving parameter a default value
	language = language || 'en';

	if (arguments.lenght === 0) {
		console.log('Missing Parameters');
		console.log('-------------');
		return
	}
	console.log(firstName);
	console.log(lastName);
	console.log(language);
	//special keyword --puts arguments into an array like container. Doesn't have all the features of an array but acts like an array
	console.log(arguments);
	console.log('arg 0: ' + arguments[0]);
	console.log('-----------------');
}

//javaScript doesn't care if you don't pass arguments - gives the parameters space in memory with no values (undefined)
greet();

greet('john');
greet('john', 'doe');
greet('john', 'doe', 'es');

//spread operator wraps up arguments without having to define parameters
greet('john', 'doe', 'es', 1, 'Jimmy', 'nothing');