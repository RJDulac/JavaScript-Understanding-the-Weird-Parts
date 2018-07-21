//by value (primitives)

var a = 3;
var b;

//copies of each other in different spots of memory
b = a;

//has no impact on b
a = 2;

console.log(a);
console.log(b);

// by reference (all objects (including functions))

var c = { greeting: 'hi'};
var d;

//points to the same spot in memory for objects.
d = c;

c.greeting = 'hello'; //mutated

console.log(c);
console.log(d);

//by reference (even as parameters)

function changeGreating(obj) {
	obj.greeting = 'hola'; //mutate
}

changeGreating(d);
console.log(c);
console.log(d);

//equal operator sets up new memory space (new address)

c = { greeting: 'howdy' };
console.log(c);
console.log(d);
