//a is placed into memory during creation phase. Undefined is taking up memory space and is a special value. JavaScript assigns undefined as a placeholder after creating memory space
var a;
console.log(a);

if (a === undefined) {
	// a = "undefined"; never set anything to undefined. It will cause confusion when debugging
	console.log("a is " + " " + a)
}else {
	console.log("a is defined");
}