function a() {
	console.log(this);
	//in global namespace
	this.newVariable = 'hello';
}

a();

var b = function() {
	console.log(this);
}

console.log(newVariable);
b();

var c = {
	name: 'The c object',
	//method
	log: function() {
		//use for nested functions to access the object
		var self = this;
		//this points to the object that contains it
		console.log(self.name);
		//mutated
		self.name = "Updated name";
		console.log(self.name);

		//this in this case points to the global object -- need to use self or that as a variable to equal this so it will point to the object. JavaScript's scope chain will look for it until it finds it
		var setName = function(newName) {
			self.name = newName;
		}
		setName("Updated again");
		console.log(self.name);
	}
}
c.log();