var a;

// goes to internet and looks for a value
a = 0;

//0 in a boolean returns false. 0 converts to false in an if statement
if (a || a === 0) {
	console.log('something is there')
}