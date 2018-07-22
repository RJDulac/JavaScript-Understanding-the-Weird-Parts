function greet(firstname, lastname, language) {

	language = language || 'en';

	if (language === 'en') {
		console.log('Hello ' + firstname + ' ' + lastname);
	}
	if (language === 'es') {
		console.log('Hola ' + firstname + ' ' + lastname);
	}
        
}

greet('John', 'Doe', 'en');
greet('John', 'Doe', 'es');


//this is a clearer way to do the same as the above function
function greetEnglish(firstname, lastname) {
	greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
	greet(firstname, lastname, 'es');
}

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');