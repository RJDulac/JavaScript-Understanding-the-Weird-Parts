var arr = [
	1,
	false,
	{
		name: 'Tony',
		adress: '111 Main St.'
	},
	function(name) {
		var greeting = 'Hello ';
		console.log(greeting + name);
	},
	'Hello'
];

console.log(arr);

//invoke function in array and give it a name
arr[3](arr[2].name)

