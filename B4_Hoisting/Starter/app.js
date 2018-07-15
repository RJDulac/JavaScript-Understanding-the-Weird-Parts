
var a = 'Hello World!';
//what people call hoisting
//excution context has two phases. Creation phase. Parser runs through code and sets up /sets aside memory spaces for variables and functions. 
//this creates them in memory. For the variable it puts a placeholder (undefined). Functions puts them entirely in memory and can run in the execution phaste. 
//Execution phase goes line by line.
function b() {
	console.log('Called b!');
    
}

b();
console.log(a);


