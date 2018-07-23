//function factory taking advantage of closure
function makeGreeting(language) {
	return function(firstName, lastName) {
		if (language === 'en') {
			console.log('Hello ' + firstName + ' ' + lastName);
		}
		if (language === 'es') {
			console.log('Hola ' + firstName + ' ' + lastName);
		}
	}
}

//more clear
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');
greetEnglish('john', 'doe');
greetSpanish('john', 'doe');

//alt way
makeGreeting('en')('jim','doh');