var objectLiteral = {
	firstName: 'Mary',
	isAProgrammer: true
}

console.log(JSON.stringifyobjectLiteral);

//json name/value pairs have to be wrapped in quotes

var jsonValue = JSON.parse('{ "firstName": "Mary", "isAProgrammer": true }');

console.log(jsonValue);