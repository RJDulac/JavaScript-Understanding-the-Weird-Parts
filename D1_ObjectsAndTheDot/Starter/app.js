var person = new Object();

//add name value pair
person["firstName"] = "Tony";
person["lastName"] = "alicea"

var firstNameProperty = "firstName";

// console.log(person);
// console.log(person[firstNameProperty]);

//second way - dot notation

console.log(person.firstName);
console.log(person.lastName);

person.address = new Object;

person.address.street = "111 Main St.";

console.log (person.address.street);
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.city, person.address.state);

