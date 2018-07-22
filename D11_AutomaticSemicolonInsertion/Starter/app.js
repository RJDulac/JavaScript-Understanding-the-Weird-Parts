function getPerson() {
	//can't have the curly brace on a sperate line or the engine will insert a comma after return and not parse the object
	return {
		firstName: 'Tony'
	}
}

console.log(getPerson());